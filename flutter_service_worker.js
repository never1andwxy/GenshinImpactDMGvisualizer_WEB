'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9cf1a918b288fe2552c0a204197f67da",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/2020010311352134879.png": "b2ae29ad28899dd0e328d2bcf471d294",
"assets/images/2020022017252827007.png": "4d328d77ee1768135594ba82c14733d8",
"assets/images/2020030519415152701.png": "e581d923c161f01926cba4175373c0d1",
"assets/images/2020031618522830538.png": "b2ae29ad28899dd0e328d2bcf471d294",
"assets/images/2020032418103378010.png": "b6b52488f3e37681298dceb2a928e271",
"assets/images/2020060220525531988.png": "26df7dfed0366db816715dd7f9a906de",
"assets/images/2020082817414588799.png": "bcf7d45517a8d3607fe1ba6a7646897b",
"assets/images/2020112310525611957.png": "5bb922cdb5979f216874b10478338724",
"assets/images/2021010519290354247.png": "f983469684d470be250be8498e777ab2",
"assets/images/2021012215472837805.png": "e9cf5a7377f609763e9b6ba5e0710a9f",
"assets/images/2021022415001674243.png": "f228437f3b163282dd4f72e98fcd6dd1",
"assets/images/2021051011361876265.png": "8655de134863ca662ea1f5ad22263ec6",
"assets/images/2021080311592610976.png": "a8687f596a66d5f93d00d0f1aa8123c2",
"assets/images/appicon/icon1.png": "33eafa78c9ef1062fd6ee4e44f77d78a",
"assets/images/appicon/icon2.png": "340dd1ca1ff1e5e535d2d66ba49bcc81",
"assets/images/appicon/icon3.png": "a1bfbe619115370b127c48779defce7d",
"assets/images/appicon/icon4.png": "1a19ad3824a590d4c68d9dd8db4fa27d",
"assets/images/Arataki-Itto-Splash-Art.png": "08627048094069db979b72e5fbefd3a6",
"assets/images/ayaka.png": "eb317ec89688901ecf57a4e30abd08e4",
"assets/images/ayakalarge.png": "b708736739b1c96ba5bc82d5e4ffc955",
"assets/images/ayato.png": "033fedb6f09e4d73b91e072653c2cd63",
"assets/images/ayato_gacha_splash.png": "ccfce868ab7a930170b38b51347043a6",
"assets/images/Character_Ganyu_Portrait.png": "4a18a82fa9021dc7e86a48b2c8658fb9",
"assets/images/Character_Raiden_Shogun_Portrait.png": "6ea865d88420471d5bc3f95ad9c7ec5b",
"assets/images/cyno.png": "d78efa53d40f33a8b7a9f94e13bb227d",
"assets/images/cyno_splash.png": "b3d2ea92c9214fab3a8ec99124e31b4d",
"assets/images/diy.png": "4320359f56418662552bf912b62b01d1",
"assets/images/diysplash.png": "da1d685c6fe8d5856bd76b9bfae88c98",
"assets/images/Element_Dendro.png": "ecb92f92da473cc3294f1feaf8c36acb",
"assets/images/enka.png": "67b1cefdc5f68bc18bfd61fc41469e62",
"assets/images/eula.png": "4ad9b62208a576735cb911d0a058c265",
"assets/images/ganyu.png": "a12f04337d6143b3539ea70fbeea6c96",
"assets/images/hutao.png": "e3fed4c9df8745a0c1fa91e954fde2ad",
"assets/images/icon.png": "67be54a70d583c7fb063f2788e1b0be3",
"assets/images/icon2t.png": "220da6ecab7a8eedb03825e8bd2f2269",
"assets/images/Icon_Circlet_of_Logos.png": "81d3b09a70bcedc669b143593b885797",
"assets/images/Icon_Flower_of_Life.png": "c52f1e5c6b97dfc1a208ee2eae7759ba",
"assets/images/Icon_Goblet_of_Eonothem.png": "d0ce90ab349d31b5d8742f2a48aac2fd",
"assets/images/Icon_Plume_of_Death.png": "1846a7ba843caf5368380763aac9d090",
"assets/images/Icon_Sands_of_Eon.png": "8ae562990de4e122da5c5da057abc8b3",
"assets/images/icon_white_background.png": "0b492486afa3e127338cee9b96cc5224",
"assets/images/Item_Bloodstained_Flower_of_Iron.png": "ce102b3a963c6b9fb2ecde27c65fa27e",
"assets/images/Item_Bloom_Times.png": "693db6729eabb9b9a814a9d68e627542",
"assets/images/Item_Deepwood_Memories.png": "1252c92e059333cdcea57df732cfa513",
"assets/images/Item_Echoes_of_an_Offering.png": "40031809e1a0f00d77f5347dcba71332",
"assets/images/Item_Flower_of_Accolades.png": "ccb884212f7c4919455660133de82898",
"assets/images/Item_Flower_of_Creviced_Cliff.png": "1bbf2169879d923325ae69118da9774a",
"assets/images/Item_Gilded_Corsage.png": "8a78af32a547b51e0d129032fc2f7106",
"assets/images/Item_Gilded_Dreams.png": "a10cf309b66f7add2c18135f63238ae4",
"assets/images/Item_Gladiator_Nostalgia.png": "cf2f1210ba178460be93bd2f73ad5a4f",
"assets/images/Item_In_Remembrance_of_Viridescent_Fields.png": "dcc7a8a984cd85a7a5f088ca7d15238e",
"assets/images/Item_Magnificent_Tsuba.png": "ba570ff6e274b335e57a3146d11b533a",
"assets/images/Item_Maiden's_Distant_Love.png": "b611a36152d1a89abb8217fa821c5777",
"assets/images/Item_Reminiscence_of_Shime.png": "4f945edce0982d33c55ebbb34ef54492",
"assets/images/Item_Royal_Flora.png": "41cc3f3f6b2da1cc3802b1454d865f36",
"assets/images/Item_Sea-Dyed_Blossom.png": "020ed5f858db7dc32afd47cf4b2e6d05",
"assets/images/Item_Snowswept_Memory.png": "a0ee2d2b82b06e6e109fa2793e12a53c",
"assets/images/Item_Stainless_Bloom.png": "e7df44900851a69e4204d22bbf13080a",
"assets/images/Item_Summer_Night_Bloom.png": "1369cc09f03f2e5dbce44094f6b6ac0c",
"assets/images/Item_Thunderbird's_Mercy.png": "242f458f37e9248c09e79b536705bb07",
"assets/images/Item_Thundersoother's_Heart.png": "90d5964f3970a23a09d69d3f8ac0a896",
"assets/images/Item_Troupes_Dawnlight.png": "7fc9b4cf77eb493f4329d8653b317542",
"assets/images/Item_Vermillion_Hereafter.png": "61777997c7cf80d70b4595a7951a288c",
"assets/images/Item_Witch's_Flower_of_Blaze.png": "3c5d2df1beb87d9c66d42bc49f8319ec",
"assets/images/itto.png": "a74aced496aa0552ca0fd699725d72f8",
"assets/images/kokomi.png": "9bfda71bfe1021c11b20293f66b82910",
"assets/images/kokomi_gacha_splash.png": "d500af3c3674947abb48cf97826fef3d",
"assets/images/nilou.png": "64ba6e2ee7c79fe75d7d6d666ad6ba8a",
"assets/images/nilou_splash.png": "1862e7811eec04ec20a3755e734a5349",
"assets/images/raiden.png": "423cc14f5d7b71b96e2000ab31bdf903",
"assets/images/tartaglia.png": "79cf8566082d02e193120a958fe5c5ae",
"assets/images/tartaglia_gacha_splash.png": "eb1d4cf3a80a7b9aaa8be6c7e094f0a0",
"assets/images/tighnari.png": "9d1c369f71e549ab91ddb31dcaf6b192",
"assets/images/tighnari_gacha_splash.png": "28a7e5dee3bc565ee17929e4f81e27d6",
"assets/images/weapon/ayatobis.png": "b9e9da14379a0bb89ef4153b9c8e9fc8",
"assets/images/weapon/cynobis.png": "f0ea053ca68450b7a49421aa1370ae52",
"assets/images/weapon/Icon_Bow.png": "48e5e93a06ff9f31fccfeeae59e2dbf0",
"assets/images/weapon/Icon_Catalyst.png": "4b3b30059c6cacc8c62676275d26605c",
"assets/images/weapon/Icon_Claymore.png": "3d8d3313b91f5d3fe62c7198fe0848fd",
"assets/images/weapon/Icon_Polearm.png": "cf6fa88a199a72dfa37fcbc54c0f5547",
"assets/images/weapon/Icon_Sword.png": "487c91af285b1fd941b26a9a4b7b5e8c",
"assets/images/weapon/ittobis.png": "a21f9c4381baff2a43e2d356de1f71fe",
"assets/images/weapon/niloubis.png": "ae27aa017401a47791277cd3b7632bb3",
"assets/images/weapon/tighnaribis.png": "ff4a562defd66bb10a2b1c2d2daaa744",
"assets/images/weapon/Weapon_Alley_Hunter.png": "fdbd85c7223e1ac4d21e03c20b311837",
"assets/images/weapon/Weapon_Amenoma_Kageuchi.png": "060af4a78e0021cdd7b77393868a05ff",
"assets/images/weapon/Weapon_Amos.png": "377764f08e63aca76600da29bdd68620",
"assets/images/weapon/Weapon_Blackcliff_Longsword.png": "aa26f313885fa348b9d16b10a5570788",
"assets/images/weapon/Weapon_Blackcliff_Warbow.png": "926d2c11955639ea7dfd56a755d3456d",
"assets/images/weapon/Weapon_Black_Tassel.png": "3edb9ced6e60605141fb1f63d34ced73",
"assets/images/weapon/Weapon_Compound_Bow.png": "09a54d4369633f5005d996cb71359e9a",
"assets/images/weapon/Weapon_Crescent_Pike.png": "433e40a7658df3b9562e5356440232ae",
"assets/images/weapon/Weapon_Deathmatch.png": "e95f748fe83da6c32faf89a503cae8ad",
"assets/images/weapon/Weapon_Dragonspine_Spear.png": "23bb7e4f8c24a8eb07a20983bdf67165",
"assets/images/weapon/Weapon_Dragons_Bane.png": "173fe545b547e75890914161231c9000",
"assets/images/weapon/Weapon_Ebony_Bow.png": "5e9fe1938e3330dc203ddbf0feec27b5",
"assets/images/weapon/Weapon_Elegy_for_the_End.png": "3f8d8a7721021081423d43c1250416b6",
"assets/images/weapon/Weapon_Engulfing_Lightning.png": "8eba09d307fd9e9df0bfd7f676ac349d",
"assets/images/weapon/Weapon_Everlasting_Moonglow.png": "d4340cfa3987d8ab512fb0b7c0e2dfb0",
"assets/images/weapon/Weapon_Favonius_Lance.png": "29afed7e4be1c310410234d8f933e3ec",
"assets/images/weapon/Weapon_Favonius_Warbow.png": "82451de6e4a60ec90bc22988064d5875",
"assets/images/weapon/Weapon_Freedom-Sworn.png": "a71bcf648e499bd454aff28b3b7ce232",
"assets/images/weapon/Weapon_Hamayumi.png": "ff154600ebc973a0e662f189b9e56441",
"assets/images/weapon/Weapon_Harbinger_of_Dawn.png": "83becdadf6d91b723d3148cfe81f82e3",
"assets/images/weapon/Weapon_Iron_Sting.png": "62939657977dcb5793b01336bde160c1",
"assets/images/weapon/Weapon_Lost_Prayer_to_the_Sacred_Winds.png": "98f36a14dede85f03db6d35dcfb3bd7d",
"assets/images/weapon/Weapon_Luxurious_Sea-Lord.png": "27e93a87770ca17166ee8176e46c53d7",
"assets/images/weapon/Weapon_Memory_of_Dust.png": "6ef83d562dc204d8af55ae2497c3657f",
"assets/images/weapon/Weapon_Messenger.png": "7149cfb69dec4ff8d063c0fa90074c9b",
"assets/images/weapon/Weapon_Mistsplitter_Reforged.png": "fa0f77070e60908aa3e0d7be58f6068a",
"assets/images/weapon/Weapon_Polar_Star.png": "ec982cfdaea61726d0eff0765c4e3fa7",
"assets/images/weapon/Weapon_Primordial_Jade_Cutter.png": "6c1b8df0ba68541a098ea7bac20d7c1e",
"assets/images/weapon/Weapon_Primordial_Jade_Winged_Spear.png": "b4c7041c160ef527eed1637337a87e6b",
"assets/images/weapon/Weapon_Prototype_Amber.png": "12d128c899f747a93979d7bf6dda4f52",
"assets/images/weapon/Weapon_Prototype_Crescent.png": "ae6fb6459726630c187b65befa46b0e1",
"assets/images/weapon/Weapon_Raven_Bow.png": "73f6cff9c22ec49e67eeb3cf48ec2aed",
"assets/images/weapon/Weapon_Recurve_Bow.png": "474066dfc56a5f959b8a4ca4f61d9164",
"assets/images/weapon/Weapon_Royal_Bow.png": "4bfa584f9528549fcfc9dfdb98e4eaa3",
"assets/images/weapon/Weapon_Rust.png": "ee23136a545ad1ee2bae44aee56cdf71",
"assets/images/weapon/Weapon_Sacrificial_Bow.png": "a5364ded6b8fa678df8c79bf80ef0423",
"assets/images/weapon/Weapon_Sacrificial_Sword.png": "98fb1c56974340980fc4bd7727cd47e4",
"assets/images/weapon/Weapon_Serpent_Spine.png": "cd649c7857ccb7d6e9ab1308a36a9ea4",
"assets/images/weapon/Weapon_Sharpshooter_Oath.png": "22fc9c0d9dcce6732e4014d4fc9b0773",
"assets/images/weapon/Weapon_Skyward_Atlas.png": "76129a888dee0764044ceb597e4753f3",
"assets/images/weapon/Weapon_Skyward_Blade.png": "2f91b1cc9b9c9f698ae63a5e0cc57125",
"assets/images/weapon/Weapon_Skyward_Harp.png": "c3f2b5cf0cf38e2387fca10bbe0e46a2",
"assets/images/weapon/Weapon_Skyward_Pride.png": "dd15850e31d8ccaab05e6e6bce8dfb00",
"assets/images/weapon/Weapon_Skyward_Spine.png": "ff991399c1cc85a06ff13e99d1f41503",
"assets/images/weapon/Weapon_Slingshot.png": "868f3bbfd456f5e871faf4e685ea28e6",
"assets/images/weapon/Weapon_Snow-Tombed_Starsilver.png": "5602a0893e9839912743de656ed0fc9f",
"assets/images/weapon/Weapon_Song_of_Broken_Pines.png": "2a580f79353267beee12bc0fe32b0a03",
"assets/images/weapon/Weapon_Staff_of_Homa.png": "6ac07ea499d96d71794e0c0699563359",
"assets/images/weapon/Weapon_The_Black_Sword.png": "ebb15f7f3d59ee66a84eb33c1fb219e9",
"assets/images/weapon/Weapon_The_Catch.png": "c5614345ee4772d69b963f6803c38c61",
"assets/images/weapon/Weapon_The_Stringless.png": "0dd895f344d5c19aa5d4c4ef3e058dbf",
"assets/images/weapon/Weapon_The_Unforged.png": "129bb5a1d9156e65e56dc0acff5bf925",
"assets/images/weapon/Weapon_The_Viridescent_Hunt.png": "65a4d6125959ece649a72d528874da2a",
"assets/images/weapon/Weapon_The_Widsith.png": "add714c7fa5cee23f5970e048447ab86",
"assets/images/weapon/Weapon_Thrilling_Tales_of_Dragon_Slayers.png": "3354d7c4fd53f968fcc707ead9883403",
"assets/images/weapon/Weapon_Thundering_Pulse.png": "3177497f741e47630cea293ab352d2ed",
"assets/images/weapon/Weapon_Vortex_Vanquisher.png": "20dcf1575e3a9b282320ccbc11ab864e",
"assets/images/weapon/Weapon_Whiteblind.png": "fa49de51d64871a74f46d8959c0163e9",
"assets/images/weapon/Weapon_White_Tassel.png": "7e830d95ba7bdb7ead6c513f398fc07b",
"assets/images/weapon/Weapon_Windblume_Ode.png": "c07975c903954937c2e4b94e583abee5",
"assets/images/weapon/Weapon_Wolfs_Gravestone.png": "6f2b2b9b7f2da51a2a0491ad5b593aaf",
"assets/images/weapon/yaebis.png": "af5992c1c6293d918c2b04973de2c466",
"assets/images/weapon/yelanbis.png": "d34dc0e4d0f6e09a0c5ff55025a833c7",
"assets/images/xiangling.png": "c055181bd6638603c74351a60a1dbebd",
"assets/images/xiangling_splash.png": "3e3415aaf8a8642357482ba6e2cdb642",
"assets/images/xiao.png": "0cd7e28ff558e07643f07bf6861aeda7",
"assets/images/xingqiu.png": "e24152202ed94fde241c0cd71226162d",
"assets/images/xingqiu_splash.png": "1e07dc8dbf2422b19ed7468245d9d731",
"assets/images/yaemiko.png": "d745ff2b128aa352c3ee4b9e4b79bf37",
"assets/images/yaemiko_splash.png": "88c2a0b3ab00ac0af4d0cb001b73572e",
"assets/images/yelan.png": "ac995df7bd30a285e2ede06f121f0b0d",
"assets/images/yelan_splash.png": "43551ede0c5e4f5543eafbef6c746f73",
"assets/images/yoimiya.png": "c3e6e82527f3735354ff445516b33e62",
"assets/images/yoimiyalarge.png": "bb1781e54e30e8da8e15bdaa8be694a4",
"assets/images/zhongli.png": "5c08e30e37f435fc7668dc1379ac5e21",
"assets/langs/en.json": "241147f9cba4d8bb96507de88ae28f57",
"assets/langs/ja.json": "8e5a6898ec69844aa87deb9a3d47c187",
"assets/langs/zh.json": "59dd6b300547ab3e5aecb7c2ed6457e9",
"assets/NOTICES": "c4ed222b0567ee8ca6c5dbf00dc6b27a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "21728896253a97482341e92e23c80dea",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-chrome-192x192.png": "6deae8dfc340eb0403cd2aeba427e596",
"icons/android-chrome-512x512.png": "7f3597b64c59e3905c7ca37456885cf0",
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
"icons/apple-touch-icon.png": "8dde0364071c1d008a3d036cfac314c4",
"icons/favicon-16x16.png": "e3b7d86b47fb147ef047de80ac5c710c",
"icons/favicon-32x32.png": "585e6cc80de9e9c779fe70389cf67356",
"icons/favicon-96x96.png": "72e06534af9df7ba1b04218aeeb3e47d",
"icons/favicon.ico": "f75d9c82a0648522553362ef4f699eaa",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/ms-icon-144x144.png": "fbc822f1cce5183df6d85ed32551d4bf",
"icons/ms-icon-150x150.png": "3edf5e2aa0de5999da10f910e6211d6e",
"icons/ms-icon-310x310.png": "a12f04337d6143b3539ea70fbeea6c96",
"icons/ms-icon-70x70.png": "4107a56871634c033816d1dac7a25fb5",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"index.html": "b5e7ab6aab1c2b549b6c225837558df6",
"/": "b5e7ab6aab1c2b549b6c225837558df6",
"main.dart.js": "7e2884ab8ea81bc5fa7c2148c46cd24d",
"manifest.json": "00a6620dc8b5a9d24c03ceb1787f805c",
"version.json": "a40af27f7a5bb81efc50892d6841e38a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
