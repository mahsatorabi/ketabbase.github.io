self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-web-app-cache').then(cache => {
        return cache.addAll([
          'main.html',
          'templates/page1.html',
          'templates/page2.html',
          'icon.png',
          'icon-512.png',
          // add any other files your app needs to cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  