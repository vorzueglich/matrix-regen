const CACHE='matrix-regen-v1.7-r10';
const FILES=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>Promise.all(FILES.map(async path=>{
    const request=new Request(new URL(path,self.registration.scope),{cache:'reload'});
    const response=await fetch(request);
    if(!response.ok)throw new Error('Cache download failed');
    await cache.put(path,response);
  }))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('matrix-regen-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(event.request.method!=='GET'||url.origin!==self.location.origin)return;
  if(event.request.mode==='navigate'){
    event.respondWith((async()=>{
      const cache=await caches.open(CACHE);
      try{
        const response=await fetch(new Request(event.request,{cache:'no-store'}));
        if(!response.ok)throw new Error('Navigation failed');
        await cache.put('./index.html',response.clone());
        return response;
      }catch{
        const cached=await cache.match('./index.html');
        return cached||Response.error();
      }
    })());
    return;
  }
  event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(event.request))||fetch(event.request)));
});
