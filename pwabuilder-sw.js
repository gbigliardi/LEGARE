//This is the service worker with the Cache-first network

var CACHE = 'pwabuilder-precache';
var precacheFiles = [
      /* Add an array of files to precache for your app */
      '/LEGARE/',
      '/LEGARE/index.html',
      '/LEGARE/index.js',
      '/LEGARE/sw.js',
      '/LEGARE/assets/images/cropped-favicon-128x128.png',
      '/LEGARE/assets/images/LEGA_salvini_192.png',
      '/LEGARE/assets/images/LEGA_salvini_512.png',
      '/LEGARE/assets/images/LEGA_logo_menu.png'
    ];

//Install stage sets up the cache-array to configure pre-cache content
self.addEventListener('install', function(evt) {
  console.log('[PWA Builder] The service worker is being installed.');
  evt.waitUntil(precache().then(function() {
    console.log('[PWA Builder] Skip waiting on install');
    return self.skipWaiting();
  }));
});