"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js").then(function(){console.log("Service Worker Registered")},function(e){console.log("ServiceWorker registration failed: ",e)})});