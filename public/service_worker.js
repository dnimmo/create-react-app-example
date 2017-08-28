self.addEventListener('install', (event) => {
  console.log(`SW installed at ${new Date().toLocaleTimeString()}`);
});

self.addEventListener('activate', (event) => {
  console.log(`SW activated at ${new Date().toLocaleTimeString()}`);
});

self.addEventListener('fetch',
  (event) => {
    if (!navigator.onLine) {
      event.respondWith(
        new Response('<h1> You are offline! :( </h1>',
          {
            headers: {
              'Content-Type': 'text/html',
            },
          },
        ),
      );
    } else {
      event.respondWith(fetch(event.request));
    }
  },
);
