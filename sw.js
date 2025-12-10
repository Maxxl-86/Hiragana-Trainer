
const CACHE_NAME='hiragana-trainer-v2';
const ASSETS=['./','./index.html','./style.css','./app-inline.js','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)));self.clients.claim();})());});
self.addEventListener('fetch',e=>{const r=e.request;e.respondWith(caches.match(r).then(c=>{if(c)return c;return fetch(r).then(res=>{if(r.method==='GET'&&res.status===200&&res.type==='basic'){const clone=res.clone();caches.open(CACHE_NAME).then(cache=>cache.put(r,clone));}return res;}).catch(()=>{if(r.mode==='navigate')return caches.match('./index.html');});}));});
