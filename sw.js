const STATIC_CACHE = "static";

const APP_SHELL = [
    'js/main.js',
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

