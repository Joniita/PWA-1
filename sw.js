const STATIC_CACHE = "static";

const APP_SHELL = [
    'index.html',
    'css/style.css',
    'js/main.js',
    'img/EC.png',
];

self.addEventListener("install", e => {
    const cacheStatic = caches
        .open(STATIC_CACHE)
        .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request)
            .then((res) => res || fetch(e.request))
            .catch(console.log)
        );
});