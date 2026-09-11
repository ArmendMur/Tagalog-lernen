// Service Worker für KroVocab - Network-First mit Offline-Cache-Fallback
const CACHE_VERSION = 'krovocab-v2.5.0';

const ASSETS_TO_CACHE = [
  './',
  'index.html',
  'styles.css',
  'app.js',
  'vocab-data.js',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

// Install: Cache initial assets and skip waiting immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate: Delete ALL old caches immediately and take control of all open tabs
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_VERSION) {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch: NETWORK-FIRST STRATEGIE
// Versuche immer die neueste Version vom Server zu laden.
// Nur wenn keine Internetverbindung besteht, wird auf den Cache zurückgegriffen!
self.addEventListener('fetch', (event) => {
  // Ignoriere Non-GET Requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Wenn Netzwerk erfolgreich, aktualisiere den Cache im Hintergrund
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_VERSION).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Kein Internet / Offline: Lade aus dem Cache
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Falls selbst die URL nicht im Cache ist, gib die gecachte index.html zurück
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html') || caches.match('index.html');
          }
        });
      })
  );
});
