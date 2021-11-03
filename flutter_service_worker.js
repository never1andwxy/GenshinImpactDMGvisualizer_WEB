'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "965e408c4e7a5dd269a72ac0ed963ceb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/2020010311352134879.png": "b2ae29ad28899dd0e328d2bcf471d294",
"assets/images/2020031618522830538.png": "b2ae29ad28899dd0e328d2bcf471d294",
"assets/images/2020060220525531988.png": "26df7dfed0366db816715dd7f9a906de",
"assets/images/2020082817414588799.png": "bcf7d45517a8d3607fe1ba6a7646897b",
"assets/images/2021010519290354247.png": "f983469684d470be250be8498e777ab2",
"assets/images/2021022415001674243.png": "f228437f3b163282dd4f72e98fcd6dd1",
"assets/images/2021080311592610976.png": "a8687f596a66d5f93d00d0f1aa8123c2",
"assets/images/ayaka.png": "eb317ec89688901ecf57a4e30abd08e4",
"assets/images/ayakalarge.png": "b708736739b1c96ba5bc82d5e4ffc955",
"assets/images/Character_Ganyu_Portrait.png": "4a18a82fa9021dc7e86a48b2c8658fb9",
"assets/images/Character_Raiden_Shogun_Portrait.png": "6ea865d88420471d5bc3f95ad9c7ec5b",
"assets/images/ganyu.png": "a12f04337d6143b3539ea70fbeea6c96",
"assets/images/hutao.png": "e3fed4c9df8745a0c1fa91e954fde2ad",
"assets/images/Icon_Circlet_of_Logos.png": "81d3b09a70bcedc669b143593b885797",
"assets/images/Icon_Flower_of_Life.png": "c52f1e5c6b97dfc1a208ee2eae7759ba",
"assets/images/Icon_Goblet_of_Eonothem.png": "d0ce90ab349d31b5d8742f2a48aac2fd",
"assets/images/Icon_Plume_of_Death.png": "1846a7ba843caf5368380763aac9d090",
"assets/images/Icon_Sands_of_Eon.png": "8ae562990de4e122da5c5da057abc8b3",
"assets/images/Item_Gladiator_Nostalgia.png": "cf2f1210ba178460be93bd2f73ad5a4f",
"assets/images/Item_Magnificent_Tsuba.png": "ba570ff6e274b335e57a3146d11b533a",
"assets/images/Item_Maiden's_Distant_Love.png": "b611a36152d1a89abb8217fa821c5777",
"assets/images/Item_Reminiscence_of_Shime.png": "4f945edce0982d33c55ebbb34ef54492",
"assets/images/Item_Royal_Flora.png": "41cc3f3f6b2da1cc3802b1454d865f36",
"assets/images/Item_Snowswept_Memory.png": "a0ee2d2b82b06e6e109fa2793e12a53c",
"assets/images/Item_Thunderbird's_Mercy.png": "242f458f37e9248c09e79b536705bb07",
"assets/images/Item_Thundersoother's_Heart.png": "90d5964f3970a23a09d69d3f8ac0a896",
"assets/images/Item_Troupes_Dawnlight.png": "7fc9b4cf77eb493f4329d8653b317542",
"assets/images/Item_Witch's_Flower_of_Blaze.png": "3c5d2df1beb87d9c66d42bc49f8319ec",
"assets/images/raiden.png": "f06170bd13dcd9abfe0816500b70129f",
"assets/images/weapon/Weapon_Alley_Hunter.png": "fdbd85c7223e1ac4d21e03c20b311837",
"assets/images/weapon/Weapon_Amenoma_Kageuchi.png": "060af4a78e0021cdd7b77393868a05ff",
"assets/images/weapon/Weapon_Amos.png": "377764f08e63aca76600da29bdd68620",
"assets/images/weapon/Weapon_Blackcliff_Longsword.png": "aa26f313885fa348b9d16b10a5570788",
"assets/images/weapon/Weapon_Blackcliff_Warbow.png": "926d2c11955639ea7dfd56a755d3456d",
"assets/images/weapon/Weapon_Compound_Bow.png": "09a54d4369633f5005d996cb71359e9a",
"assets/images/weapon/Weapon_Deathmatch.png": "e95f748fe83da6c32faf89a503cae8ad",
"assets/images/weapon/Weapon_Dragons_Bane.png": "173fe545b547e75890914161231c9000",
"assets/images/weapon/Weapon_Ebony_Bow.png": "5e9fe1938e3330dc203ddbf0feec27b5",
"assets/images/weapon/Weapon_Elegy_for_the_End.png": "3f8d8a7721021081423d43c1250416b6",
"assets/images/weapon/Weapon_Engulfing_Lightning.png": "8eba09d307fd9e9df0bfd7f676ac349d",
"assets/images/weapon/Weapon_Favonius_Warbow.png": "82451de6e4a60ec90bc22988064d5875",
"assets/images/weapon/Weapon_Messenger.png": "7149cfb69dec4ff8d063c0fa90074c9b",
"assets/images/weapon/Weapon_Mistsplitter_Reforged.png": "fa0f77070e60908aa3e0d7be58f6068a",
"assets/images/weapon/Weapon_Primordial_Jade_Cutter.png": "6c1b8df0ba68541a098ea7bac20d7c1e",
"assets/images/weapon/Weapon_Primordial_Jade_Winged_Spear.png": "b4c7041c160ef527eed1637337a87e6b",
"assets/images/weapon/Weapon_Prototype_Crescent.png": "ae6fb6459726630c187b65befa46b0e1",
"assets/images/weapon/Weapon_Raven_Bow.png": "73f6cff9c22ec49e67eeb3cf48ec2aed",
"assets/images/weapon/Weapon_Recurve_Bow.png": "474066dfc56a5f959b8a4ca4f61d9164",
"assets/images/weapon/Weapon_Royal_Bow.png": "4bfa584f9528549fcfc9dfdb98e4eaa3",
"assets/images/weapon/Weapon_Rust.png": "ee23136a545ad1ee2bae44aee56cdf71",
"assets/images/weapon/Weapon_Sacrificial_Bow.png": "a5364ded6b8fa678df8c79bf80ef0423",
"assets/images/weapon/Weapon_Sharpshooter_Oath.png": "22fc9c0d9dcce6732e4014d4fc9b0773",
"assets/images/weapon/Weapon_Skyward_Blade.png": "2f91b1cc9b9c9f698ae63a5e0cc57125",
"assets/images/weapon/Weapon_Skyward_Harp.png": "c3f2b5cf0cf38e2387fca10bbe0e46a2",
"assets/images/weapon/Weapon_Skyward_Spine.png": "ff991399c1cc85a06ff13e99d1f41503",
"assets/images/weapon/Weapon_Slingshot.png": "868f3bbfd456f5e871faf4e685ea28e6",
"assets/images/weapon/Weapon_Staff_of_Homa.png": "6ac07ea499d96d71794e0c0699563359",
"assets/images/weapon/Weapon_The_Black_Sword.png": "ebb15f7f3d59ee66a84eb33c1fb219e9",
"assets/images/weapon/Weapon_The_Catch.png": "c5614345ee4772d69b963f6803c38c61",
"assets/images/weapon/Weapon_The_Stringless.png": "0dd895f344d5c19aa5d4c4ef3e058dbf",
"assets/images/weapon/Weapon_The_Viridescent_Hunt.png": "65a4d6125959ece649a72d528874da2a",
"assets/images/weapon/Weapon_Thundering_Pulse.png": "9f9e000ea19c89bdf6559580070d5d64",
"assets/images/weapon/Weapon_Windblume_Ode.png": "c07975c903954937c2e4b94e583abee5",
"assets/images/yoimiya.png": "c3e6e82527f3735354ff445516b33e62",
"assets/images/yoimiyalarge.png": "bb1781e54e30e8da8e15bdaa8be694a4",
"assets/langs/en.json": "8b73170c66bbc6dcb88a2e5af5680033",
"assets/langs/ja-JP.json": "01afaf1e11e80bb0903cbfec47755cc5",
"assets/langs/zh-Hans.json": "4f509e3e2361e7ef4f6fa303e2860dc5",
"assets/NOTICES": "c5c93c3c2d4a938b13dd07b78f892785",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/android-icon-144x144.png": "fbc822f1cce5183df6d85ed32551d4bf",
"icons/android-icon-192x192.png": "303282f3a473e8a81202835db40e2866",
"icons/android-icon-36x36.png": "b24259d0f5e7ac4572353d3451da2846",
"icons/android-icon-48x48.png": "199d5850255b6dcd6dfb5b4fecebb3d5",
"icons/android-icon-72x72.png": "b798a0d59e6996eebe057f24631b6d46",
"icons/android-icon-96x96.png": "72e06534af9df7ba1b04218aeeb3e47d",
"icons/apple-icon-114x114.png": "cd7fc9b4aad7ec784f32b4522c055b5c",
"icons/apple-icon-120x120.png": "379118c35c5df5496d72e4a881515145",
"icons/apple-icon-144x144.png": "fbc822f1cce5183df6d85ed32551d4bf",
"icons/apple-icon-152x152.png": "b8c6ff76109d6369b1735a889f454044",
"icons/apple-icon-180x180.png": "9d23f12d18e2c62796b0c319c301fd15",
"icons/apple-icon-57x57.png": "0a078de8883ec3377c6c7a5d75d73f4f",
"icons/apple-icon-60x60.png": "95162660f5f05291c7ebdd32810f2492",
"icons/apple-icon-72x72.png": "b798a0d59e6996eebe057f24631b6d46",
"icons/apple-icon-76x76.png": "82fc0a6443c5ace86823082fe2995bcc",
"icons/apple-icon-precomposed.png": "6c05c7fc548e5331e8ebd030e04d76c6",
"icons/apple-icon.png": "6c05c7fc548e5331e8ebd030e04d76c6",
"icons/favicon-16x16.png": "d6b1fb5fe7b6226628a69050cd049e59",
"icons/favicon-32x32.png": "06be5009e305ce74834f40ed841aff10",
"icons/favicon-96x96.png": "72e06534af9df7ba1b04218aeeb3e47d",
"icons/favicon.ico": "3f73396596ea557fcf5d6e5ca28e216b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/ms-icon-144x144.png": "fbc822f1cce5183df6d85ed32551d4bf",
"icons/ms-icon-150x150.png": "3edf5e2aa0de5999da10f910e6211d6e",
"icons/ms-icon-310x310.png": "a12f04337d6143b3539ea70fbeea6c96",
"icons/ms-icon-70x70.png": "4107a56871634c033816d1dac7a25fb5",
"index.html": "e4a72a31dadd89987e0050feb8632df7",
"/": "e4a72a31dadd89987e0050feb8632df7",
"main.dart.js": "e33b29ede2770d1d6dfae75eb9cb324d",
"manifest.json": "00a6620dc8b5a9d24c03ceb1787f805c",
"version.json": "2eb1a5b579fb01c78898c6f9e521dfba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
