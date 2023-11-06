'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "cfeb40628bda09dc90f7d99c66c6c499",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e43606ed96483126a1b8b99192930259",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4c9079a8e6d460fd7b98f3d6ab7527fe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bcced8b53fd7d25d9e321119b67ac445",
".git/logs/refs/heads/master": "bcced8b53fd7d25d9e321119b67ac445",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/0f/b127d5844f59d77ab6447f81cb64c974810361": "f51e636c35ce7146777e57e3234b61ed",
".git/objects/14/7ff50a0ee95917042f6b66ff6d523e17f6bc90": "8a8e541218d38bc49a238bfe81fdcb2d",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/23/a804a78a18974e0f332dc230e900bc7c86a6ba": "609d79d63d5571dc67f58377ae3a3e5c",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/31/85f9c9be90e4fe5ed2c6034855b7d450051238": "64d105e7955c1160e1a274865a522212",
".git/objects/31/95dc4a1cd82c4166de246204c4ad155b94d77f": "0af4984a4ef3f55e51112fb6d57306cb",
".git/objects/32/0bfa6abac93451fd5f09e6f1786a761f8db7c0": "17e25a3652087a83aaad8477b68aab56",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/db8e74088050c39650f3a2ad5eb03f88777ae5": "260f4ff1d27eec1d8f634696a94ee8df",
".git/objects/39/7d2db96c0c70d7f48daa69c65f8f79dc142bb4": "aaad63f89f248000d0ff11da86e21fc2",
".git/objects/3a/107ee6d9323e2866ae7a74b4472a7599f287c8": "d6ad93e1fcd9338a97d3024071bb7241",
".git/objects/3b/f3d89e315eb9d06ecda0b2d4d911c7925bfba7": "930b1a1820ea679e3f9a23d61642a2fd",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/53/b339d80e7d61bb5f4933beb3aca45a9fa486b1": "63c030bb536bca45d475877d9fc8a15b",
".git/objects/5b/f9f713667e15aeb08234ca85c5c32946214c1f": "1cecedd21de618d059fae87950cc8dfc",
".git/objects/63/e4ae8eb1fc45bc6039fbd5bb159b835cd55fdd": "7bcbcf3a536178e3a35c2d4fd3cfc6f2",
".git/objects/67/0a113991400c46b6e8e9cc0b625adae2addd9e": "80305ff8697ee1fab251000858b242d9",
".git/objects/69/b708dff377084f2aacfec8cbe172e439f5334b": "02c27afd7acda6e328c25cb84797e80d",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/72/6e592255dc4fb8e50f92a0a20b1ebd57193801": "b82f7c02c2a768c73646236af5e0bc80",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/7b/7c8d63ac10f1144ff04fb0624ce0348b48bcb8": "76fb8ba1cc5a5df485dcd93489b572a3",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/355bcf2478cf5e59dbd652481a005b6fdf7cdc": "46821302b77a401297ce78c9b084e0d5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/9acad22640eb0ffd57dae03a46985e26955305": "7a7e46ea08be3dae843fbfa1f2926388",
".git/objects/8f/35dfceed5e2ad5bd9f88606028dc4feb38c396": "9886b122c5c97531d5398e9fdc225cae",
".git/objects/94/bfa476a6d608b0ca67d8d02ef79c5b66fb2e20": "8e717b04fba05d5d91ee09237f145911",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/97/7de41435ba07f13d058be3b72763bd4f7f12ec": "841ff040954e0326e0983e4afdb04071",
".git/objects/a1/8dc038e41bb3d4c8ee1fe8e0879dc417fce557": "6d1382d3969173dd45c7d92e82a7274d",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a9/24b6c343afbe16e21f6d08497bcb4170a8f93d": "ceabe026fde02acc06425e91f6555ece",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/877b40b3e2f480c86dcd46d9df569a19de703f": "f20154782bae906671b1777447f00215",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b0/98bd1be7213309ca97497b94634cefd0ee9056": "8fbe219e5302fa692ab6feb770cc2306",
".git/objects/b1/08d8a6d7bc488262dc62f60b7b01b021d7566d": "d21592ebd5a33cb29e2386e1e2d97105",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/fabeb83711825859c7243baf17c5294d8c3a50": "0ecbaa39e2c23666fbc564575ede58ef",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c5/363a96937da4a7316b1c9e459f33fef0b8d1f5": "544bc11ca5a40017b6e83063812499e2",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d0/99b781a7ffb3b6cbe8bb4fe44eae9fc5674105": "2b8c7325192b20b128894305964dcbc7",
".git/objects/d1/05f16ccffd4e0b1a63f49d2704ab1d5b81eb98": "e27cb123f66d4d92638c6d1d3acf268a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/e0/c2fbc3e6a7ee6c251d07faba6670f7175e7367": "bca8bfd90d9af42e13216233a94c0b36",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/ca1b84a513ec7f8b464d31a327e33ecde162a9": "9a1c304ace7a1d942f30e5168ba41f9c",
".git/objects/f6/83e2f6e77afd72377a326230d30e57bb46d908": "23e5df61c846cb2f8a63023d7a86dc8d",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/ff/7205e3accf7d136bf285fb925e85129187c45a": "8212f214c1bf059d2b050941fc998ab2",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "76bb6ec9c6c10acaffcc4a7b0e3a6628",
"assets/AssetManifest.bin": "658e25fab1e509b55e7298662c02e377",
"assets/AssetManifest.json": "a8002caa506a2ac60914fb6e6a8dbd4a",
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
"/": "51ba4117ea96a174252a161750c9c329",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "51ba4117ea96a174252a161750c9c329",
"main.dart.js": "87cd4a96a52d953c5e103caafa7a6be9",
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
