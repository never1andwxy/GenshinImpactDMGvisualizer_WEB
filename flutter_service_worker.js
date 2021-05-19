'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c7e82932ec8662c1fee0bb2f31413425",
"assets/assets/2020031618522830538.png": "b2ae29ad28899dd0e328d2bcf471d294",
"assets/assets/2020060220525531988.png": "26df7dfed0366db816715dd7f9a906de",
"assets/assets/2021010519290354247.png": "f983469684d470be250be8498e777ab2",
"assets/assets/Character_Ganyu_Portrait.png": "4a18a82fa9021dc7e86a48b2c8658fb9",
"assets/assets/Icon_Circlet_of_Logos.png": "81d3b09a70bcedc669b143593b885797",
"assets/assets/Icon_Flower_of_Life.png": "c52f1e5c6b97dfc1a208ee2eae7759ba",
"assets/assets/Icon_Goblet_of_Eonothem.png": "d0ce90ab349d31b5d8742f2a48aac2fd",
"assets/assets/Icon_Plume_of_Death.png": "1846a7ba843caf5368380763aac9d090",
"assets/assets/Icon_Sands_of_Eon.png": "8ae562990de4e122da5c5da057abc8b3",
"assets/assets/Item_Gladiator_Nostalgia.png": "cf2f1210ba178460be93bd2f73ad5a4f",
"assets/assets/Item_Maiden's_Distant_Love.png": "b611a36152d1a89abb8217fa821c5777",
"assets/assets/Item_Royal_Flora.png": "41cc3f3f6b2da1cc3802b1454d865f36",
"assets/assets/Item_Snowswept_Memory.png": "a0ee2d2b82b06e6e109fa2793e12a53c",
"assets/assets/Item_Thunderbird's_Mercy.png": "242f458f37e9248c09e79b536705bb07",
"assets/assets/Item_Thundersoother's_Heart.png": "90d5964f3970a23a09d69d3f8ac0a896",
"assets/assets/Item_Troupes_Dawnlight.png": "7fc9b4cf77eb493f4329d8653b317542",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "a5c247365479b575e5e2a1c8cebdcd17",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "904570ab8c98fb41524ce43c6b922dbd",
"/": "904570ab8c98fb41524ce43c6b922dbd",
"kernel/amd/dart_sdk.js": "f3d794723fbb9bb3c4dc8ae4aa78d902",
"kernel/amd/dart_sdk.js.map": "993491df2ce3e1d3dc1534ef9c661a05",
"kernel/amd-canvaskit/dart_sdk.js": "272a2407ce439f0a4b565adaed2344ae",
"kernel/amd-canvaskit/dart_sdk.js.map": "993491df2ce3e1d3dc1534ef9c661a05",
"kernel/amd-canvaskit-html/dart_sdk.js": "86464c093af235e00bd8b59d036028b8",
"kernel/amd-canvaskit-html/dart_sdk.js.map": "fadc361c383d78a631e53522fcea97c9",
"kernel/amd-canvaskit-html-sound/dart_sdk.js": "7d2c2a7d778b9256ba6bf91667a14103",
"kernel/amd-canvaskit-html-sound/dart_sdk.js.map": "8677a731b941f3eb201a2d138411a2bb",
"kernel/amd-canvaskit-sound/dart_sdk.js": "47392fe19d427d23fae36cf7a17f50de",
"kernel/amd-canvaskit-sound/dart_sdk.js.map": "09a23d03e0c983b0b95b2ce61b314c26",
"kernel/amd-sound/dart_sdk.js": "aaae17217582d15c8c3750fa0199597d",
"kernel/amd-sound/dart_sdk.js.map": "09a23d03e0c983b0b95b2ce61b314c26",
"kernel/flutter_ddc_sdk.dill": "bb4d8ec2134622efeab6c5da8bbc8107",
"kernel/flutter_ddc_sdk_sound.dill": "1d71682edd7c987ebf9fe7d12876dce1",
"kernel/legacy/dart_sdk.js": "b039e7c63216b7bafe308a278439cb22",
"kernel/legacy/dart_sdk.js.map": "72cf228da802722cb48525a155f696d3",
"kernel/legacy-canvaskit/dart_sdk.js": "a7ba60ca967e0562556abf2834d5b04e",
"kernel/legacy-canvaskit/dart_sdk.js.map": "72cf228da802722cb48525a155f696d3",
"kernel/legacy-canvaskit-html/dart_sdk.js": "3a085b93c98563910d450b35e174cf6c",
"kernel/legacy-canvaskit-html/dart_sdk.js.map": "ad9350c05e4ca91807e9f013554d4101",
"kernel/legacy-canvaskit-html-sound/dart_sdk.js": "b21bb350a36bdb6b086185e9c0e296d9",
"kernel/legacy-canvaskit-html-sound/dart_sdk.js.map": "21a38fd03f10a77dc9c355c27fec4513",
"kernel/legacy-canvaskit-sound/dart_sdk.js": "631c96dde66d37faa35dd20172d05873",
"kernel/legacy-canvaskit-sound/dart_sdk.js.map": "341127592e388a3fd0a382d9bd9b51b5",
"kernel/legacy-sound/dart_sdk.js": "745d182f50302bf73bd8408b5207b4de",
"kernel/legacy-sound/dart_sdk.js.map": "341127592e388a3fd0a382d9bd9b51b5",
"lib/ui/src/ui/annotations.dart": "68e9a4ffe3940b9df9162dfc57c1d230",
"lib/ui/src/ui/canvas.dart": "37db03fd7a0749f3c95b17a8883836c9",
"lib/ui/src/ui/channel_buffers.dart": "8da578fbc325f877e017a553b65f34d6",
"lib/ui/src/ui/compositing.dart": "495bec2b392f5b908f25aba7ff2ef46d",
"lib/ui/src/ui/geometry.dart": "4070f5903154ad3f33ae40895edb11d6",
"lib/ui/src/ui/hash_codes.dart": "fe384b9a3cc8d018dab4031e12c3189d",
"lib/ui/src/ui/initialization.dart": "290cf4ce9a0eb9c81c2f6eb549e45df6",
"lib/ui/src/ui/lerp.dart": "52cd5be8a0b827ae186feaf911e3c6af",
"lib/ui/src/ui/natives.dart": "173dd288983a8fb3c055e23ca16f9fa1",
"lib/ui/src/ui/painting.dart": "8a0788ba5b2e84f15eeebdf1aeb172da",
"lib/ui/src/ui/path.dart": "b85a975b0bfae80bce516d82aa5490cb",
"lib/ui/src/ui/path_metrics.dart": "af8751dc3ba6213632582e61a0ddef3d",
"lib/ui/src/ui/platform_dispatcher.dart": "1d98b46634061ca8a8ca99d1fedc4e55",
"lib/ui/src/ui/pointer.dart": "c360ef9abb1a67d72134a823f6b9b8df",
"lib/ui/src/ui/semantics.dart": "8a9da5ceb37b002ca93743ad603ba12d",
"lib/ui/src/ui/test_embedding.dart": "008b0e0260fa81725a89058ef93d1664",
"lib/ui/src/ui/text.dart": "329f7e47bc53ede5d551811ab726b961",
"lib/ui/src/ui/tile_mode.dart": "93b3a19f8edf014a662a8a7932f26242",
"lib/ui/src/ui/window.dart": "618f78a649913eb644622de71cfbeed9",
"lib/ui/ui.dart": "4dba44fda55ca9b367de3cd43c348302",
"lib/_engine/engine/alarm_clock.dart": "e4965309c480beb7c5d4b4667869f4b7",
"lib/_engine/engine/assets.dart": "8fe4344ff1a9a7f127731a9493875493",
"lib/_engine/engine/bitmap_canvas.dart": "2e87dc8dbdc79129a19614eb95863b13",
"lib/_engine/engine/browser_detection.dart": "3fa21d333fdcd586ca84627734cf4ce9",
"lib/_engine/engine/canvaskit/canvas.dart": "5d32e8fbae19eec049d7adfe2ec98b9a",
"lib/_engine/engine/canvaskit/canvaskit_api.dart": "1f0bb6c8548b24db3e235022cf2089db",
"lib/_engine/engine/canvaskit/canvaskit_canvas.dart": "3fda99810b62365162f41168518d9a14",
"lib/_engine/engine/canvaskit/color_filter.dart": "0f524c63eec2d2248a5e0d2e68c0d714",
"lib/_engine/engine/canvaskit/embedded_views.dart": "72324ae37cbf6083b65d3d49911d33f5",
"lib/_engine/engine/canvaskit/fonts.dart": "be43a0f9b34510085711137841e3e169",
"lib/_engine/engine/canvaskit/font_fallbacks.dart": "4a4b213f47d8d3e31a40ebee8d7acd74",
"lib/_engine/engine/canvaskit/image.dart": "572dad754df808815a2adb9734db1341",
"lib/_engine/engine/canvaskit/image_filter.dart": "8bfa1d3d9d866bfcc53cd3265f07bf4e",
"lib/_engine/engine/canvaskit/initialization.dart": "3a4c2fbf87b3c58f752199db9d55e8d4",
"lib/_engine/engine/canvaskit/interval_tree.dart": "b72f63e792cfe5cdad4a087bd69c28aa",
"lib/_engine/engine/canvaskit/layer.dart": "d4c62243f5be814c2db916d5a243d2f7",
"lib/_engine/engine/canvaskit/layer_scene_builder.dart": "76db1ba456736ecd257a80e3dc17d076",
"lib/_engine/engine/canvaskit/layer_tree.dart": "fbc43d495ad82be89cce903f237ae770",
"lib/_engine/engine/canvaskit/mask_filter.dart": "d364fa41878ce2f909660bde82f73a09",
"lib/_engine/engine/canvaskit/n_way_canvas.dart": "fa8bcfba42092e88d07b219077d8e391",
"lib/_engine/engine/canvaskit/painting.dart": "5484f0a74c94eb740762afd02ec5e161",
"lib/_engine/engine/canvaskit/path.dart": "17b577fdac47474abeaf2e574bd5c298",
"lib/_engine/engine/canvaskit/path_metrics.dart": "a8dc0c853c8dedd2d6066f27253abf23",
"lib/_engine/engine/canvaskit/picture.dart": "6881245fd80ac6e40b7d669f4118487c",
"lib/_engine/engine/canvaskit/picture_recorder.dart": "44351f0d8956e0fe1ec34313615a719a",
"lib/_engine/engine/canvaskit/platform_message.dart": "e82a98c497ef513cb397886bfbaadcc3",
"lib/_engine/engine/canvaskit/rasterizer.dart": "6ebe6281c4a55aa00340ce9ada4437f7",
"lib/_engine/engine/canvaskit/raster_cache.dart": "26dcbe0f78bd004738295d490618fde7",
"lib/_engine/engine/canvaskit/shader.dart": "105d152127eeff856ff01f5e5fc48621",
"lib/_engine/engine/canvaskit/skia_object_cache.dart": "47b7ec669be94dd071b7c293b359d9bb",
"lib/_engine/engine/canvaskit/surface.dart": "7a1f3199388e4d7c695d3fa4a45c31aa",
"lib/_engine/engine/canvaskit/text.dart": "41c469767e36bfae1df7bceb3776eccb",
"lib/_engine/engine/canvaskit/util.dart": "aba6e5a76f8c753a911d11f6b29a9268",
"lib/_engine/engine/canvaskit/vertices.dart": "55151991909ba77cad0ce0743627067d",
"lib/_engine/engine/canvaskit/viewport_metrics.dart": "30eb92596be2561749bc6d0796c36582",
"lib/_engine/engine/canvas_pool.dart": "62b3e447575478840182b28ad5aee4c3",
"lib/_engine/engine/clipboard.dart": "296ae271e2071e5bfe0c109e8a11a0bd",
"lib/_engine/engine/color_filter.dart": "a1020cc39fce7066e932464316c79cd2",
"lib/_engine/engine/dom_canvas.dart": "1ed672343e4377f240f46ccec433d9ac",
"lib/_engine/engine/dom_renderer.dart": "f7dd3676149e08c06ce844425d30820b",
"lib/_engine/engine/engine_canvas.dart": "1479cf894ea31581f8d4c9e1a665a925",
"lib/_engine/engine/frame_reference.dart": "d6e08a925eab505897f90385adcae030",
"lib/_engine/engine/html/backdrop_filter.dart": "988c8e1a2da1d8f55f36946954cc2194",
"lib/_engine/engine/html/canvas.dart": "82f5bf68ef57e7be264de3193a3bdffc",
"lib/_engine/engine/html/clip.dart": "89038e17fc1046a8d1f99b9778df1d75",
"lib/_engine/engine/html/color_filter.dart": "5f95069e52915f9c224aa3c15af6228e",
"lib/_engine/engine/html/debug_canvas_reuse_overlay.dart": "aa4f7dd8d9b3f55ac26912a2391eb785",
"lib/_engine/engine/html/image_filter.dart": "69e4fd10908bbb1b7cc3f8d94362afcf",
"lib/_engine/engine/html/offset.dart": "8353c00c5c23159cf3b7163c6f64e695",
"lib/_engine/engine/html/opacity.dart": "4fbb2151626deb947338423da6f71774",
"lib/_engine/engine/html/painting.dart": "ac387bcf47e14321ad38f009534981ed",
"lib/_engine/engine/html/path/conic.dart": "abdf2d906219fd0c8c58c7316b1b373c",
"lib/_engine/engine/html/path/cubic.dart": "f9028fcb173150f1542e3e6e31c73a3f",
"lib/_engine/engine/html/path/path.dart": "49e290e52158af123803a47f1b1a7f5c",
"lib/_engine/engine/html/path/path_metrics.dart": "06182f3a29171f8f7aa5228265739fa0",
"lib/_engine/engine/html/path/path_ref.dart": "0549c6f8996b081d3d6226a147533b00",
"lib/_engine/engine/html/path/path_to_svg.dart": "1efedb857e157190560c9a88aaa757a9",
"lib/_engine/engine/html/path/path_utils.dart": "0a1d93f9f77d8317149a31c123265dde",
"lib/_engine/engine/html/path/path_windings.dart": "bd114751aa8b345411cc5cb3b089f497",
"lib/_engine/engine/html/path/tangent.dart": "01559779da6836d1858cf9543e5812e5",
"lib/_engine/engine/html/picture.dart": "c647f1ffcba0af9725e51d59381949b6",
"lib/_engine/engine/html/platform_view.dart": "f5765ac32a9333c6b133d8fc8c6e5354",
"lib/_engine/engine/html/recording_canvas.dart": "fc3c2da4078044dece410f7630e4d75f",
"lib/_engine/engine/html/render_vertices.dart": "77b9a08a2d3545cd39886259de47015c",
"lib/_engine/engine/html/scene.dart": "ab1a6b4232b260a61a11e36d2f1bfee0",
"lib/_engine/engine/html/scene_builder.dart": "c67febf2c81fbeb8f864fee843312c94",
"lib/_engine/engine/html/shaders/normalized_gradient.dart": "1149ada996dcfaad081e0704b188fe2b",
"lib/_engine/engine/html/shaders/shader.dart": "5495c95b3adbab3eb3f2c3064642fa7d",
"lib/_engine/engine/html/shaders/shader_builder.dart": "835074f0b61c26654b467c59f66bac62",
"lib/_engine/engine/html/surface.dart": "2f52fc2e3cf3ef1649b6657e45acc3ec",
"lib/_engine/engine/html/surface_stats.dart": "4609e83ab00c20f5563541c722b5c3c8",
"lib/_engine/engine/html/transform.dart": "2d6b601d87c4287348c5f160a88c62ae",
"lib/_engine/engine/html_image_codec.dart": "d283b0894b1b06fc2d402dc809bf0a04",
"lib/_engine/engine/keyboard.dart": "3ba29edd0c7e2b30fab42105dc745271",
"lib/_engine/engine/mouse_cursor.dart": "f55ba6b88ae453cca0c06b5de0750cc7",
"lib/_engine/engine/navigation/history.dart": "3ca4cb4eca806ebbf91a6c221969ec0a",
"lib/_engine/engine/navigation/js_url_strategy.dart": "1d6a9bd4e1a1f44269188960c1a7e7ab",
"lib/_engine/engine/navigation/url_strategy.dart": "fa16803f8e04688fdbb93d3ee018a19b",
"lib/_engine/engine/onscreen_logging.dart": "6ec3cdd3fa9ebc4981e9dd56b44f937f",
"lib/_engine/engine/picture.dart": "c07a0a5952caaf35577b05ebc642909c",
"lib/_engine/engine/platform_dispatcher.dart": "e27f77f2447a0a1352f2688b98cbcf97",
"lib/_engine/engine/platform_views.dart": "7c0057b83e57a1f72bd183fbfd1fe937",
"lib/_engine/engine/plugins.dart": "739a54c075a954b46f1f09f91259257e",
"lib/_engine/engine/pointer_binding.dart": "65383bac681146e1a9171f9814ea662b",
"lib/_engine/engine/pointer_converter.dart": "ef25e83f2203c34824d1f60faed48e56",
"lib/_engine/engine/profiler.dart": "6bdb97882be10653eb464b2e13d14276",
"lib/_engine/engine/rrect_renderer.dart": "63f30420eed71f4446d33bc2108af72e",
"lib/_engine/engine/semantics/accessibility.dart": "55fbdfdb83644af976814d057cf845fd",
"lib/_engine/engine/semantics/checkable.dart": "a25ed54d40a2b122ec703c57d02d604e",
"lib/_engine/engine/semantics/image.dart": "1a73390950dd9662654c235ab02c2418",
"lib/_engine/engine/semantics/incrementable.dart": "ec500424fb005b48fc3628ee7be90628",
"lib/_engine/engine/semantics/label_and_value.dart": "1713c91c8a1e97834146511b04e11741",
"lib/_engine/engine/semantics/live_region.dart": "cf5463e66d62dadac505bcbcf72faace",
"lib/_engine/engine/semantics/scrollable.dart": "6fb02428c880cf669eb9643463ffc831",
"lib/_engine/engine/semantics/semantics.dart": "748957a3a29b17f89ba28316c012c85f",
"lib/_engine/engine/semantics/semantics_helper.dart": "40427e9b4c7486b7de2ec8085b29650c",
"lib/_engine/engine/semantics/tappable.dart": "06d8499bce7de8b05cfee86aed1c580c",
"lib/_engine/engine/semantics/text_field.dart": "8863f7a54fcfb3b98eefa6720b6d33ed",
"lib/_engine/engine/services/buffers.dart": "037984c94b941488edbfe1ede5a083c0",
"lib/_engine/engine/services/message_codec.dart": "6088087907805242ba7460a60883584a",
"lib/_engine/engine/services/message_codecs.dart": "9f3b5b9931120a7d57749a9ba8db52e6",
"lib/_engine/engine/services/serialization.dart": "23b5d3b626dc4cf4860fab3ccbcc06e8",
"lib/_engine/engine/shadow.dart": "d9e9374bb92adaf118709fbe144703b4",
"lib/_engine/engine/test_embedding.dart": "965bae9f4402e859818fc53298678bbd",
"lib/_engine/engine/text/canvas_paragraph.dart": "636b1b9757d916e66bd021d857719ef5",
"lib/_engine/engine/text/font_collection.dart": "7b24e7fb573fa8c08574704998349d1c",
"lib/_engine/engine/text/layout_service.dart": "28a3bd681ac5696c78fd905b0d3288f5",
"lib/_engine/engine/text/line_breaker.dart": "4bfbdaf8b9b6e62f9c4f39e0c3ee1aea",
"lib/_engine/engine/text/line_break_properties.dart": "ee6438277d6f613499faa96c9bf7dd03",
"lib/_engine/engine/text/measurement.dart": "439a7f9229d8fa51904656da3255de40",
"lib/_engine/engine/text/paint_service.dart": "aaeb43c3ba61f557e64af61f236ba0b2",
"lib/_engine/engine/text/paragraph.dart": "1a3cc709ed49f17421d2324abf442d1c",
"lib/_engine/engine/text/ruler.dart": "2ea60b4068e8eb65d7be5476920a4f02",
"lib/_engine/engine/text/unicode_range.dart": "0acd645346cfc8bb6800f1f564ede6fc",
"lib/_engine/engine/text/word_breaker.dart": "5f4aeb1012250ef1e7d2d57a5ac3a6dc",
"lib/_engine/engine/text/word_break_properties.dart": "8f32d838e7fb90c567b632f322a2fa37",
"lib/_engine/engine/text_editing/autofill_hint.dart": "e8f5920d0e72085cbf68f42fb8ff8ee2",
"lib/_engine/engine/text_editing/input_type.dart": "a75a20f0b2b56d0c12c9fcc790c9a6ca",
"lib/_engine/engine/text_editing/text_capitalization.dart": "e1f17e49651971a7de273f9109270d0a",
"lib/_engine/engine/text_editing/text_editing.dart": "bd6606dd67100d1023bc07f9b4353e96",
"lib/_engine/engine/ulps.dart": "7d2823e4d714192006a38b053d441521",
"lib/_engine/engine/util.dart": "bbb1c51631a2c3cadb7c49190f5a9223",
"lib/_engine/engine/validators.dart": "cc0ff13d54bde931fcad78e7b9696329",
"lib/_engine/engine/vector_math.dart": "f1fb2b554a2f7a44cc0ae2faa2b0743b",
"lib/_engine/engine/web_experiments.dart": "cf405f871c4dff630938781ac171522a",
"lib/_engine/engine/window.dart": "b9e6e4453adb311e62e24306d961a81c",
"lib/_engine/engine.dart": "5d73e47fe468c77e0cc5f35dbe66e153",
"libraries.json": "36035d50a6fd3702d44b476cc377ca30",
"main.dart.js": "183e6424baa6d1537417f89111f86e1d",
"manifest.json": "253add2ff1b6b5c38fa07f6bcc0fa359",
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
