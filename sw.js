const STATIC_CACHE = "static";

const APP_SHELL = [
    '/',
    'css',
    'js/main.js',
    'img',
];

self.addEventListener("install", e => {
    const cacheStatic = caches
        .open(STATIC_CACHE)
        .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});