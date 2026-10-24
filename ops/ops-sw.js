self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

self.addEventListener("push", event => {
  let d = {};
  try {
    d = event.data ? event.data.json() : {};
  } catch {}
  event.waitUntil(self.registration.showNotification(d.title || "EmberOps", {
    body: d.body || "A shop wrote in.",
    tag: d.tag || "ops-feedback",
    data: {
      url: d.url || "/ops/?tab=messages"
    },
    icon: "icons/icon-192.png",
    badge: "icons/icon-192.png"
  }));
});

self.addEventListener("notificationclick", event => {
  event.notification.close();
  const url = event.notification.data && event.notification.data.url || "/ops/?tab=messages";
  event.waitUntil(self.clients.matchAll({
    type: "window",
    includeUncontrolled: true
  }).then(list => {
    for (const c of list) {
      if (c.url.includes("/ops/")) {
        c.focus();
        if (c.navigate) c.navigate(url);
        return;
      }
    }
    return self.clients.openWindow(url);
  }));
});