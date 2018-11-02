self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/LEGARE/',
       '/LEGARE/index.html',
       '/LEGARE/index.js',
       '/LEGARE/sw.js',
       '/LEGARE/assets/images/cropped-favicon-128x128.png',
       '/LEGARE/assets/images/LEGA_salvini_192.png',
       '/LEGARE/assets/images/LEGA_salvini_512.png',
       '/LEGARE/assets/images/logo_amp.png',
       '/LEGARE/assets/images/logo_menu.png'
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