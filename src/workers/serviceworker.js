var file_cache = 'ffa-pwa-files';
var filesToCache = [
  '/pwa/',
  '/pwa/pwa.css',
  '/pwa/manifest.json',
  '/assets/forum_logo_yellow.png',
  '/pwa/pwa-bundle.js',
  '/pwa/theworker.js',
  '/pwa/index.html'
];

//on install, cache the relevant files
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(file_cache).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

//this part makes offline mode work by intercepting requests for the scripts
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(r => r || fetch(event.request))
  );
});
