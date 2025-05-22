const CACHE_NAME = "Videojuego-primera-persona-realevalencia";

self.addEventListener('install', event =>{
    event.waitUntil((async() =>{
        const cache = await caches.open(CACHE_NAME);
        cache.addAll([
            ',/',
            './index.html',
            './js/script.js',
            './css/style.css'
        ]);
    })()

    )
});


self.addEventListener('fetch',(event)=>{
    event.respondWith(
        (new Promise(
            (resolve,reject) =>{
                    fetch(event.request).then(resolve).catch(reject);
                }
            )   
        ).catch(()=>{} )
    )
});