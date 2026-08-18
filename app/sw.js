/* EmberPOS service worker — so a browser-only shop can open its till with no
 * internet.
 *
 * WHY THIS EXISTS. Three shops (Funtask Chiks, KOPIKOPI - ALABEL, Mashita
 * Cabantan) have never opened the Android app: emberpos.net IS their register.
 * The app has been offline-capable since v1.1.47 — sales queue and replay — but
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
 *      network genuinely is not there — never a shortcut when it is.
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
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const cache = await caches.open(CACHE);
        cache.put(shellKey(), fresh.clone());
        return fresh;
      } catch {
        const cached = await caches.match(shellKey());
        // No network and nothing cached: let the browser show its own offline
        // page rather than inventing a worse one.
        return cached ?? Response.error();
      }
    })());
    return;
  }

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

/** One cache key for the shell, whatever path the navigation used. */
function shellKey() {
  return new URL('./', self.registration.scope).toString();
}
