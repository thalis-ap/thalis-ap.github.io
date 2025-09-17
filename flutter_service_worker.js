'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"apple-touch-icon.png": "b41691cd48362305672fdb6f02b05fc2",
"assets/AssetManifest.bin": "5cf94696ccf5a2150be17268b11bfb22",
"assets/AssetManifest.bin.json": "aefb92940e949088a7ec3f263a0e71ed",
"assets/assets/images/appstore_logo.png": "83d2980d75a0e187ce9e7c2b695327ed",
"assets/assets/images/information.png": "210424bc2804549cc838ef24aa34ac0c",
"assets/assets/images/logo_icon.png": "79fed421b4dd2802334a9a51aa5b5cc8",
"assets/assets/images/playstore_logo.png": "73c99a9feb256c068a6ce9d320412181",
"assets/assets/images/web_logo.png": "bd013a13c6f60a378993a56e1724793d",
"assets/assets/lotties/choice/book.json": "1d350cb54a382dee486376de9396c0ec",
"assets/assets/lotties/choice/columnandtext.json": "554807e229cdeebc238dbc086519294e",
"assets/assets/lotties/choice/manwiththingsaround.json": "775754a8536d395765c2ed7b0f5965e6",
"assets/assets/lotties/choice/pencil.json": "7cd1f9c8e9de93c1df8fd99e5faf78d9",
"assets/assets/lotties/general/nointernet.json": "008f2772757c58c8554cfd2f56ea76ff",
"assets/assets/lotties/home/sweetteapotwithautumnherbs.json": "5a4cf8a47ed7b58c784625705a4c4cb0",
"assets/assets/lotties/home/womanwiththingsaround.json": "9a936ece38251ef5f379490b8ae8a426",
"assets/assets/lotties/home/womanworkingonlaptop.json": "b18e01f0f6c1e73528e15ad06243717d",
"assets/assets/lotties/info/boythinking.json": "36bb846b218265e636c98a9ab01d4c40",
"assets/assets/lotties/info/boywithmath.json": "0ae26e8da0d00cf20cfa23edb3b8b7e7",
"assets/assets/lotties/info/manrelaxes.json": "2387fbc83eb469e2b6230efe9fdd3bcc",
"assets/assets/lotties/news/newspaper.json": "926e57366db22606443c5e84f3b4476a",
"assets/assets/lotties/news/whatsnew.json": "9d0b725276b118dabf672f62395510a7",
"assets/assets/lotties/ypologismos/calculator.json": "84e76a2ecb42b02c9defb4149bc29f1f",
"assets/assets/videos/fill_grades.mp4": "683cf5ca306f6e878339d15d33f3911e",
"assets/assets/videos/fill_grades_basic.mp4": "d43b70bb6a7f991a7c3389416cdf65fd",
"assets/assets/videos/fill_grades_eidika.mp4": "aebbc4fe595bcc1b3c2bd66e37b783b4",
"assets/assets/videos/pernas_press.mp4": "ad565532808920a48d098db79e041432",
"assets/assets/videos/pernas_press_panellinies.mp4": "6570e750e9b241ab97b59431bd8eb9a4",
"assets/FontManifest.json": "243f4cc69beaa3a7d4b1ae0653739e35",
"assets/fonts/MaterialIcons-Regular.otf": "ec4a10faa1c1cb6a0ed5bb2c47b89c55",
"assets/fonts/sf.otf": "2ceadd10ca85adca14362906f2379fdc",
"assets/fonts/sfbold.otf": "644563f48ab5fe8e9082b64b2729b068",
"assets/NOTICES": "762480d9fa20bef926330a3a07c27264",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "36d2b6f6964efb82bc94f33e02be2496",
"canvaskit/canvaskit.wasm": "c765ce13389f4d07a9cce87fc25dccc9",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "ad40d1b53d3bfac12cc929dc8b99f2d5",
"canvaskit/chromium/canvaskit.wasm": "72015727e956a80e2e1f678cce9cc4e1",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "a4c4f7b55a9bf3a1c3832187b4b03f1f",
"canvaskit/skwasm.wasm": "ae16f984be3d7ae07229ccd77e8c6fae",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "02ff60f0d1710e1d4c1da9c03c064bdb",
"canvaskit/skwasm_heavy.wasm": "1e558f24e6f073a3ebcdc3e97b96862d",
"favicon.ico": "1205ab9ce67ca4b9911250aea05505f1",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "295da37e86b34e047450bac1f4f513a5",
"icons/icon-192-maskable.png": "60544e118daf6422cde1c9cf2578dce1",
"icons/icon-192.png": "58bbfd17125565a3492b89a9f51415d0",
"icons/icon-512-maskable.png": "bd996293d570ed41be25fb28752a0b6f",
"icons/icon-512.png": "aaf7178026487d4b4be9b1c3af892f00",
"index.html": "db5827085e0273b4480c9802e6bda75e",
"/": "db5827085e0273b4480c9802e6bda75e",
"main.dart.js": "d887c88abc28b64e653b2941013e3e2d",
"manifest.json": "e6632438efc7e376d75f86d3504de112",
"splash/img/dark-1x.png": "72a653c22784c0d4de9a61db7a6f45b2",
"splash/img/dark-2x.png": "26a857b362c6369679f4ee20acf1b3d5",
"splash/img/dark-3x.png": "9041fa33702accaf06100c3997d0f29b",
"splash/img/dark-4x.png": "6ade68b0a19f0d9b1ae059cc53370d4a",
"splash/img/light-1x.png": "72a653c22784c0d4de9a61db7a6f45b2",
"splash/img/light-2x.png": "26a857b362c6369679f4ee20acf1b3d5",
"splash/img/light-3x.png": "9041fa33702accaf06100c3997d0f29b",
"splash/img/light-4x.png": "6ade68b0a19f0d9b1ae059cc53370d4a",
"version.json": "a87c038e63761be721254b83eb6df97b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
