

self.addEventListener('install',evt =>{
    console.log('oh eh', evt);
    caches.open("pwa").then(cache => {
        cache.addAll([
            'index.html',
            'main.js',
            'style.css',
            'vendors/bootstrap4.min.css',
            'add_techno.html',
            'add_techno.js',
            'contact.html',
            'contact.js',
        ])
        .then(console.log("succes"))
        .catch(console.err)
    })
});

self.addEventListener('activate',evt => {
    console.log('yaya',evt)
})

self.addEventListener('fetch',evt => {
    if(!navigator.onLine){
        evt.responseWith(new Response('pas de connexion internet'))
    }
    console.log(evt.request.url)
})

