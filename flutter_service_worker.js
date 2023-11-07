'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6461499be2a3906ee126cc2963f6c179",
"assets/AssetManifest.json": "69017d63d8c05f9839f238188c407ccd",
"assets/assets/about1.jpg": "a9fe78f4dcc29367a632daf0f959c681",
"assets/assets/about2.jpg": "064e3aa883c5b2a3c43f332b35025f49",
"assets/assets/about3.jpg": "0ba74339f44c3ef556bfa3a076471072",
"assets/assets/example_image.jpg": "064dcbb90d34f1bceba6199e336cba9d",
"assets/assets/logo.jpg": "4b42a3e259bbc523c362033b364f43ec",
"assets/assets/logo.png": "cac15c82f9796d43a48797da7623bba2",
"assets/assets/logo.svg": "2e2148cad8fdc27f97e4033d1ceeb20c",
"assets/assets/logo2.png": "9733cbe001540aec09968ef33da77e2c",
"assets/assets/logo3.png": "751dc2160885a8b61a87bdeeeef6e50d",
"assets/assets/logo4.png": "2063d7a19c914914ebbabf48c80714c2",
"assets/FontManifest.json": "83c84b06d92d01e67166b43e69f2afa5",
"assets/fonts/Ames'.Roman.Black.ttf": "badec2ec4ab11e7228e33ed513c2c09e",
"assets/fonts/Fact-NarrowExtraLight.ttf": "009336d01aed9d63026b82861a734ca6",
"assets/fonts/Leto%2520Text%2520Sans%2520Defect.otf": "74a2a230cc1992b8739a032a3319c6b5",
"assets/fonts/MaterialIcons-Regular.otf": "df0eebb6833bde317fccfbc6c94c8d45",
"assets/fonts/ropasoftpro-regular.otf": "f6b6ba2b8185471299dc8f43c4e430a3",
"assets/NOTICES": "6e0d45f4a106694f99ab977df055eab4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "aca9d44c12d38e847cf1693d1262e9e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"ferramentasantigas/.git/config": "8c87bbe50bb40d25a778f1e335063627",
"ferramentasantigas/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"ferramentasantigas/.git/FETCH_HEAD": "c7c3acf2ad56caf8f3bf09c745f94949",
"ferramentasantigas/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"ferramentasantigas/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"ferramentasantigas/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"ferramentasantigas/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"ferramentasantigas/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"ferramentasantigas/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"ferramentasantigas/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"ferramentasantigas/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"ferramentasantigas/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"ferramentasantigas/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"ferramentasantigas/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"ferramentasantigas/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"ferramentasantigas/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"ferramentasantigas/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"ferramentasantigas/.git/index": "8f28c1fd02e41a23c5f230c22e8fa516",
"ferramentasantigas/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"ferramentasantigas/.git/logs/HEAD": "338fef17fcdfc24a155b37fc3f00f0f5",
"ferramentasantigas/.git/logs/refs/heads/main": "338fef17fcdfc24a155b37fc3f00f0f5",
"ferramentasantigas/.git/logs/refs/remotes/origin/HEAD": "4b91a127d8f68f31e537a01b1494fc86",
"ferramentasantigas/.git/objects/pack/pack-06a8d3a0c903041e3ae2f2692bb2eaf7d639321a.idx": "9f5cfa0417ca50a9b95f56b2811b285e",
"ferramentasantigas/.git/objects/pack/pack-06a8d3a0c903041e3ae2f2692bb2eaf7d639321a.pack": "b6158559ab81df17906bebf8f401325e",
"ferramentasantigas/.git/packed-refs": "d4a3757154aec6ed01b1350d20baa066",
"ferramentasantigas/.git/refs/heads/main": "d847a8b7ceef49285d1a3eac39737343",
"ferramentasantigas/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"ferramentasantigas/index.html": "7fe3d4922323f9a387bc27cf030256ec",
"/": "d477a0b854d5d3ed001626f173e21211",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d477a0b854d5d3ed001626f173e21211",
"main.dart.js": "1690dfe771011e3d0f9f1f258a8a37f5",
"manifest.json": "27a4f882cc3dda1b1aab9851879a70c4",
"version.json": "4a43403687e295c2c7b3cb07bbef31bc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
