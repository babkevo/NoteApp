
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("install", event => {
  const asyncInstall = new Promise(resolve => {
    console.log("Waiting to resolve...");
    setTimeout(resolve, 5000);
  });
  event.waitUntil(asyncInstall);
});
self.addEventListener("activate", event => {
  console.log("activate");
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      return response || fetchAndCache(event.request);
    })
  );
});

function fetchAndCache(url) {
  return fetch(url)
  .then(function(response) {
    // Check if we received a valid response
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return caches.open(CACHE_NAME)
    .then(function(cache) {
      cache.put(url, response.clone());
      return response;
    });
  })
  .catch(function(error) {
    console.log('Request failed:', error);
    // You could return a custom offline 404 page here
  });
}
workbox.routing.registerRoute(
  new RegExp("https:.*min.(css|js)"),
  workbox.strategies.staleWhileRevalidate({
    cacheName: "cache"
  })
);

