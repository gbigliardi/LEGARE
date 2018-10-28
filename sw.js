self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/LEGARE/',
       '/LEGARE/index.html',
       '/LEGARE/index.js',
       '/LEGARE/sw.js',
       '/LEGARE/assets/images/01.jpg',
       '/LEGARE/assets/images/LEGARE/assets/images/01.png',
       '/LEGARE/assets/images/LEGARE/assets/images/hashes.json',
       '/LEGARE/assets/images/LEGARE/assets/images/logo.png'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});