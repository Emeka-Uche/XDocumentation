self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('weather').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/scripts.js',
          
        ]);
      })
    );
   });