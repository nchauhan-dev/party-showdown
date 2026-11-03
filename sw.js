/* Party Showdown offline helper: keeps the app on the phone so it opens instantly. */
const VERSION="ps-v5.3";
const CORE=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./apple-touch-icon.png"];
const CDN=["unpkg.com","cdn.jsdelivr.net","fonts.googleapis.com","fonts.gstatic.com"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
function timeout(ms){return new Promise((_,rej)=>setTimeout(()=>rej(new Error("slow")),ms))}
self.addEventListener("fetch",e=>{
  const req=e.request;if(req.method!=="GET")return;
  const url=new URL(req.url);
  // The page itself: try the network first (so updates arrive), fall back to the saved copy after 3s or when offline.
  if(req.mode==="navigate"||(url.origin===location.origin&&/\/(index\.html)?$/.test(url.pathname))){
    e.respondWith((async()=>{const cache=await caches.open(VERSION);
      try{const res=await Promise.race([fetch(req.url,{cache:"no-cache",credentials:"same-origin"}),timeout(4000)]);if(res&&res.ok)cache.put("./index.html",res.clone());return res}
      catch(err){return (await cache.match("./index.html"))||(await cache.match("./"))||Response.error()}})());
    return;
  }
  // App files, fonts and the connection library: use the saved copy, fetch and save if missing.
  if(url.origin===location.origin||CDN.includes(url.hostname)){
    e.respondWith((async()=>{const cache=await caches.open(VERSION);const hit=await cache.match(req);if(hit)return hit;
      try{const res=await fetch(req);if(res&&(res.ok||res.type==="opaque"))cache.put(req,res.clone());return res}catch(err){return hit||Response.error()}})());
  }
});
