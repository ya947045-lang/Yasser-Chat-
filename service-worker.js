self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Service Worker Activated");
});

// استقبال إشعارات Firebase
self.addEventListener("push", function(event) {
  const data = event.data.json();

  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "/icons/icon-192.png",
    badge: "/icons/icon-192.png"
  });
});
