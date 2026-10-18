var C = "kotoba-v2",
  F = [
    "./",
    "index.html",
    "style.css",
    "script.js",
    "manifest.webmanifest",
    "icon.svg",
    "bab/bab1.js",
    "bab/bab2.js",
    "bab/bab3.js",
    "bab/bab4.js",
  ];
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(C).then(function (c) {
      return c.addAll(F);
    }),
  );
  self.skipWaiting();
});
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (k) {
      return Promise.all(
        k
          .filter(function (x) {
            return x !== C;
          })
          .map(function (x) {
            return caches.delete(x);
          }),
      );
    }),
  );
});
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(function (r) {
        var c = r.clone();
        caches.open(C).then(function (x) {
          x.put(e.request, c);
        });
        return r;
      })
      .catch(function () {
        return caches.match(e.request);
      }),
  );
});
