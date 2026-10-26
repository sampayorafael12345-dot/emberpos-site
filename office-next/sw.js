

const CACHE = 'ember-v1';

const NAV_TIMEOUT_MS = 4000;

self.addEventListener('install', (event) => {

  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll([

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

  if (url.origin !== self.location.origin) return;

  if (!url.pathname.startsWith(new URL('./', self.registration.scope).pathname)) return;

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

        if (net && cached) {
          event.waitUntil(net.then((late) => saveShell(late)).catch(() => undefined));
        }

        return cached ?? Response.error();
      }
      if (!fresh.ok) {

        if (fresh.status >= 500 && cached) return cached;
        return fresh;
      }
      if (!fresh.redirected) event.waitUntil(saveShell(fresh.clone()).catch(() => undefined));
      return fresh;
    })());
    return;
  }

  if (url.pathname.endsWith('/version.json')) return;

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

  event.respondWith((async () => {
    const cached = await caches.match(req);
    const network = fetch(req).then((res) => {
      if (res.ok) caches.open(CACHE).then((c) => c.put(req, res.clone()));
      return res;
    }).catch(() => cached ?? Response.error());
    return cached ?? network;
  })());
});

async function saveShell(res) {
  if (!res || !res.ok || res.redirected) return;
  const cache = await caches.open(CACHE);
  await cache.put(shellKey(), res.clone());
  await pruneOldAssets(cache, res.clone()).catch(() => undefined);
}

function shellKey() {
  return new URL('./', self.registration.scope).toString();
}

async function pruneOldAssets(cache, shell) {
  const html = await shell.text();
  const named = new Set();
  for (const m of html.matchAll(/["'(]([^"'()\s]*\/assets\/[^"'()\s?#]+)/g)) {
    try { named.add(new URL(m[1], self.registration.scope).pathname); } catch (e) {  }
  }
  if (!named.size) return;
  const cutoff = Date.now() - 21 * 86400000;
  for (const req of await cache.keys()) {
    const path = new URL(req.url).pathname;
    if (!path.includes('/assets/') || named.has(path)) continue;
    const res = await cache.match(req);
    const saved = Date.parse((res && res.headers.get('date')) || '') || 0;
    if (saved < cutoff) await cache.delete(req);
  }
}
