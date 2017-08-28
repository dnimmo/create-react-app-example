const version = 'v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(version)
      .then(cache => cache.addAll([
        './index.html',
        './global.css',
        './static/js/bundle.js',
      ]),
      ),
  );
});

// self.addEventListener('activate', (event) => {
//   console.log(`SW activated at ${new Date().toLocaleTimeString()}`);
// });

self.addEventListener('fetch',
  (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((res) => {
          if (res) return res;
          if (!navigator.onLine) return caches.match(new Request('/index.html'));
          return fetch(event.request);
        }),
    );
  },
);
