/* EmberPOS service worker, so a browser-only shop can open its till with no
 * internet.
 *
 * WHY THIS EXISTS. Some shops have never opened the Android app:
 * emberpos.net IS their register.
 * The app has been offline-capable since v1.1.47, sales queue and replay, but
 * that only helps a tab that is ALREADY OPEN. Restart the phone during a
 * brownout and the browser has nothing to load, because the bundle itself came
 * from the network. The Play app carries its own copy and boots regardless.
 * This closes that gap.
 *
 * WHY IT IS SHAPED THIS WAY. A service worker is the easiest way to strand a
 * shop on a stale build, so the two rules are chosen to make that nearly
 * impossible:
 *
 *   1. NAVIGATION IS ALWAYS NETWORK FIRST. Online, the shop always gets the
 *      HTML that was just deployed. The cache is a fallback for when the
 *      network genuinely is not there, never a shortcut when it is.
 *   2. ONLY HASHED ASSETS ARE SERVED CACHE FIRST, and they are immutable by
 *      construction: Vite puts a content hash in the filename, so a changed
 *      file is a different URL. Serving one from cache cannot be wrong.
 *
 * Everything else is left completely alone. Supabase is a different origin and
 * never reaches this file; POSTs are never cached; a request this worker does
 * not understand falls through to the network untouched.
 *
 * ESCAPE HATCH: load the app with ?sw=off and the page unregisters this worker
 * and empties its caches (see registerServiceWorker in src/web/sw-register.ts).
 */

// Bump on any change to THIS file. Asset caching is keyed by URL hash anyway;
// this only controls when old cache generations get swept.
const CACHE = 'ember-v1';

// How long a navigation waits for the network before falling back to the
// saved shell (only when one is saved).
const NAV_TIMEOUT_MS = 4000;

self.addEventListener('install', (event) => {
  // Take over as soon as possible. Safe here because navigation is network
  // first: a new worker cannot pin anyone to an old page.
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll([
      // The shell only. Everything else arrives through use, which keeps the
      // install cheap on a shop's mobile data.
      new URL('./', self.registration.scope).pathname,
    ]).catch(() => undefined)),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((n) => n !== CACHE).map((n) => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data === 'ember:sw-off') {
    event.waitUntil((async () => {
      const names = await caches.keys();
      await Promise.all(names.map((n) => caches.delete(n)));
      await self.registration.unregister();
    })());
  }
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Same origin only. Supabase, the payment host and anything else the app
  // talks to must never pass through here.
  if (url.origin !== self.location.origin) return;
  // Anything outside the app's own folder belongs to the marketing site.
  if (!url.pathname.startsWith(new URL('./', self.registration.scope).pathname)) return;

  // 1. The page itself: network first, cache as a safety net.
  //    Two guards keep the safety net good:
  //    - Only a good answer (2xx) is ever saved as the shell. A 404 or 503
  //      page from a deploy still propagating must never replace the copy the
  //      shop will need when the power and wifi go.
  //    - When a shell is already saved, a network that does not answer within
  //      NAV_TIMEOUT_MS (wifi with no uplink hangs, it does not fail) hands
  //      back the saved shell instead of a frozen blank page.
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      const cached = await caches.match(shellKey());
      let fresh;
      let net;
      try {
        net = fetch(req);
        if (cached) {
          net.catch(() => undefined);
          fresh = await Promise.race([
            net,
            new Promise((_, reject) => setTimeout(() => reject(new Error('slow')), NAV_TIMEOUT_MS)),
          ]);
        } else {
          fresh = await net;
        }
      } catch {
        // A SLOW LINK IS NOT A DEAD ONE. When the timer won, the page that is
        // still coming is saved when it lands, so the next load opens the new
        // build. Thrown away, a till whose link always took longer than the
        // timer stayed on the previous release for good.
        if (net && cached) {
          event.waitUntil(net.then((late) => saveShell(late)).catch(() => undefined));
        }
        // No network and nothing cached: let the browser show its own offline
        // page rather than inventing a worse one.
        return cached ?? Response.error();
      }
      if (!fresh.ok) {
        // A server error while a good shell is saved: serve the saved one.
        // Anything else (a redirect, a 404) is passed through untouched and
        // never saved.
        if (fresh.status >= 500 && cached) return cached;
        return fresh;
      }
      if (!fresh.redirected) event.waitUntil(saveShell(fresh.clone()).catch(() => undefined));
      return fresh;
    })());
    return;
  }

  // 1b. "Has a newer build been published?" must be answered by the network
  //     and only the network. Rule 3 below would hand back the copy saved on
  //     the LAST check, and a till would learn about every update one check
  //     late. Falling through here leaves the request to the browser untouched.
  if (url.pathname.endsWith('/version.json')) return;

  // 2. Hashed build output: immutable, so cache first is always correct.
  if (url.pathname.includes('/assets/')) {
    event.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      const fresh = await fetch(req);
      if (fresh.ok) (await caches.open(CACHE)).put(req, fresh.clone());
      return fresh;
    })());
    return;
  }

  // 3. Icons, fonts, the manifest: serve what we have, refresh in the
  //    background. These change rarely and none of them are correctness-
  //    critical, so a one-load-old copy is a fine trade for booting offline.
  event.respondWith((async () => {
    const cached = await caches.match(req);
    const network = fetch(req).then((res) => {
      if (res.ok) caches.open(CACHE).then((c) => c.put(req, res.clone()));
      return res;
    }).catch(() => cached ?? Response.error());
    return cached ?? network;
  })());
});

/** Save a good page as the shell (never an error page or a redirect), then
 *  tidy up behind it. */
async function saveShell(res) {
  if (!res || !res.ok || res.redirected) return;
  const cache = await caches.open(CACHE);
  await cache.put(shellKey(), res.clone());
  await pruneOldAssets(cache, res.clone()).catch(() => undefined);
}

/** One cache key for the shell, whatever path the navigation used. */
function shellKey() {
  return new URL('./', self.registration.scope).toString();
}

/**
 * Every release has new hashed file names, so without this the cache only ever
 * grows. Called after a fresh shell arrives: any cached /assets/ file that the
 * new shell does not name AND that was saved more than 21 days ago is dropped.
 * Files the new shell names are always kept, and a recent lazy screen file is
 * kept too so it still opens offline. An old one that is dropped by mistake is
 * simply downloaded again the next time it is needed online.
 */
async function pruneOldAssets(cache, shell) {
  const html = await shell.text();
  const named = new Set();
  for (const m of html.matchAll(/["'(]([^"'()\s]*\/assets\/[^"'()\s?#]+)/g)) {
    try { named.add(new URL(m[1], self.registration.scope).pathname); } catch (e) { /* skip */ }
  }
  if (!named.size) return; // could not read the shell: delete nothing
  const cutoff = Date.now() - 21 * 86400000;
  for (const req of await cache.keys()) {
    const path = new URL(req.url).pathname;
    if (!path.includes('/assets/') || named.has(path)) continue;
    const res = await cache.match(req);
    const saved = Date.parse((res && res.headers.get('date')) || '') || 0;
    if (saved < cutoff) await cache.delete(req);
  }
}
