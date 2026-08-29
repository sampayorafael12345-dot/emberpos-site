// THE PUSH-ONLY SERVICE WORKER FOR /ops/.
//
// This file deliberately has NO fetch handler and caches NOTHING. The ops
// build strips the till's sw.js precisely because offline-caching
// cross-tenant data on an operator console is a leak, not a feature — that
// stance holds. A service worker is required for Web Push, so this one does
// push and only push. Emitted into dist-ops as ops-sw.js by the vite plugin
// (vite.ops.config.ts), registered from the Messages tab.

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('push', (event) => {
  let d = {};
  try { d = event.data ? event.data.json() : {}; } catch { /* not JSON */ }
  event.waitUntil(self.registration.showNotification(d.title || 'EmberOps', {
    body: d.body || 'A shop wrote in.',
    tag: d.tag || 'ops-feedback',
    data: { url: d.url || '/ops/?tab=messages' },
    icon: 'icons/icon-192.png',
    badge: 'icons/icon-192.png',
  }));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || '/ops/?tab=messages';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if (c.url.includes('/ops/')) {
          c.focus();
          if (c.navigate) c.navigate(url);
          return;
        }
      }
      return self.clients.openWindow(url);
    }),
  );
});
