'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a6bfa4f02e90dbea213e2f1f240743f5",
"index.html": "14f6ef1b1079c18bed87aa30fbdb802d",
"/": "14f6ef1b1079c18bed87aa30fbdb802d",
"main.dart.js": "90fb0173e0990ca48769734cea8ff579",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ebcbd90502b9ed6f8143e011eb31ff77",
"assets/AssetManifest.json": "16c43c0013fb0d29c659b5d061ab20ba",
"assets/NOTICES": "41cb3b9cbc4054b0edacea0a443e02a9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/main.png": "dc5bd859e70167c64f85ac27210adf2f",
"assets/assets/images/log4.jpg": "93e7514f0af7ebfd1b798e5296bb00fd",
"assets/assets/images/section4.jpg": "e7e9e698beb5b83afd58b8620852a9ee",
"assets/assets/images/main2.jpeg": "4c65a7efdb4a3d9069325abab63df4b7",
"assets/assets/images/logo3.jpg": "ea378860a70264d70b0926bf21306fcb",
"assets/assets/images/logo2.jpg": "3c1065eeabb55e08952f53069ae98c4f",
"assets/assets/images/logo.png": "3987472d6b63ccfbb32c1fe12a30309b",
"assets/assets/images/bg3.jpg": "8231306840edab7c59853790310f3f7d",
"assets/assets/images/title1.png": "709971e97e0fa0dc99b0296f809a10aa",
"assets/assets/poke/spade_13_3.png": "c645fc0e3f9238a5f733dfb71dcd314c",
"assets/assets/poke/heart_1_0.png": "3c330c2c11875679219ba750f1808532",
"assets/assets/poke/spade_11_1.png": "0e72601d98ab201f41a41d322deef5da",
"assets/assets/poke/spade_3_1.png": "8fdcaaf921e37c3905f6af0cb619958f",
"assets/assets/poke/diamond_6_1.png": "a4ba05690ccf21b5db0494bb72b2e824",
"assets/assets/poke/diamond_6_0.png": "4badf0327518f60814ac15a58f205dfd",
"assets/assets/poke/spade_3_0.png": "b1dba48cf3e48ae2716c764f80002f60",
"assets/assets/poke/spade_11_0.png": "f8cd2977162e79418a6d5905ba619f86",
"assets/assets/poke/heart_1_1.png": "bf40d28294e680036f29c5c3112af225",
"assets/assets/poke/spade_13_2.png": "e280328c34bfff7efee3f94502738d2a",
"assets/assets/poke/spade_13_0.png": "f542f1a985c177e1bc3dfdc52d7cfb5a",
"assets/assets/poke/spade_11_2.png": "b7533521d77bc0bcc104e55f02079cf5",
"assets/assets/poke/heart_3_1.png": "f14929dacfc6609f2d1bd1b3b8cd5342",
"assets/assets/poke/diamond_4_0.png": "b5e50b70e3f29c017d67f343cd72b7c9",
"assets/assets/poke/spade_1_0.png": "4da00cda8e0b5acbf50f2d6c21b9997f",
"assets/assets/poke/spade_1_1.png": "a519f0fe8e6f0ed0237932475dc4304e",
"assets/assets/poke/diamond_4_1.png": "21780da4f2f3e8e545b15666ea54c41e",
"assets/assets/poke/heart_3_0.png": "1b3950daa54968478dad6ed11d491fa3",
"assets/assets/poke/spade_11_3.png": "d1745ab93d658204b417a31ae0d72ab3",
"assets/assets/poke/spade_13_1.png": "8ada25a7b7d03ac9fa01a01318a3b602",
"assets/assets/poke/spade_5_1.png": "3f48d41d7926c3170c1306d19f2d2592",
"assets/assets/poke/cardback_8.png": "873f068d70bb741f576abc94874f2c5a",
"assets/assets/poke/club_12_0.png": "f102c747d4f4461dd3b22534b898702d",
"assets/assets/poke/heart_7_0.png": "96968198ef88d805f8ba2e5d5da53dbb",
"assets/assets/poke/win.jpeg": "168694c439b40d479f7b902f3eb18bba",
"assets/assets/poke/heart_7_1.png": "f484eba4f695cf15cbc4442d3cb5eb27",
"assets/assets/poke/club_12_1.png": "724799ad26198151d9ccbe543641eb10",
"assets/assets/poke/cardback_9.png": "4c2d5dafd21775819e326684748b348e",
"assets/assets/poke/spade_5_0.png": "f51b38f6d72198bd3dd1f5055ac54798",
"assets/assets/poke/spade_7_0.png": "910c3d65d45d3f172093f3f1eb37e8c7",
"assets/assets/poke/diamond_2_0.png": "a96f826a20db0e06b83066a88654e3c1",
"assets/assets/poke/club_8_1.png": "6068dd8928814c073559e55a26db902c",
"assets/assets/poke/heart_5_1.png": "8b92b3d0bf7136f9cda677942f6c791e",
"assets/assets/poke/club_12_3.png": "ac03e20f8d4e3886ad73ab676ba67867",
"assets/assets/poke/club_10_1.png": "08d84cda68e884bfcf83efa86b88e04f",
"assets/assets/poke/club_10_0.png": "462c158a9791230db54675b398dc5a63",
"assets/assets/poke/club_12_2.png": "656b068d17263ecf790472ef451794aa",
"assets/assets/poke/heart_5_0.png": "b7d8625b43d5612202abc117a4c94c75",
"assets/assets/poke/club_8_0.png": "1d6f730b99d2fb14be75219c93f1fa51",
"assets/assets/poke/diamond_2_1.png": "3fb0e54904283a32c932487ccae5a60b",
"assets/assets/poke/spade_7_1.png": "d08e13bf9894b85fa3b51049313170a4",
"assets/assets/poke/cardback_17.png": "21f011fc7dda58fead2c32ac8359403a",
"assets/assets/poke/diamond_5_0.png": "81573dc632c5a5e40f1e20f0b3a7f385",
"assets/assets/poke/heart_2_1.png": "ac9a6df40e9f0456da0f7c9b25f9c8ce",
"assets/assets/poke/spade_12_0.png": "eedbd1c34adb9881e709dbe748868e0b",
"assets/assets/poke/spade_12_1.png": "3c5d6d3c2b12404f7558609c4c715d68",
"assets/assets/poke/heart_2_0.png": "1b1e46efb4719d88087c090f87bb86ef",
"assets/assets/poke/diamond_5_1.png": "bc27dd98dff18e493d6c6d7d8cb46885",
"assets/assets/poke/cardback_16.png": "2c1ca247b6bc965cd46022a89d9ebc23",
"assets/assets/poke/diamond_7_1.png": "f9f355ef03b7a4d40f5be98f5e571cd6",
"assets/assets/poke/spade_2_1.png": "064f37f353acbcf9c62aa089044bd033",
"assets/assets/poke/cardback_14.png": "73b57d2115ada1802fc7835caf51d300",
"assets/assets/poke/spade_10_1.png": "280f1230b3701fd2c4830e4146295726",
"assets/assets/poke/spade_12_3.png": "5cfe32bcbc0006f0211ddf3fd8d5fbd4",
"assets/assets/poke/spade_12_2.png": "fd20dda2ddfef9d7cddcaaf6b8cdea5b",
"assets/assets/poke/spade_10_0.png": "78590749821b5dbfb0136c4773c90348",
"assets/assets/poke/cardback_15.png": "05c21567cdf6973581a7ec2e2d1d9b8c",
"assets/assets/poke/spade_2_0.png": "ba29ac60def03ab7dcb3c72cca8708e9",
"assets/assets/poke/diamond_7_0.png": "e68e1351ad9e1dd2ff460f5a75e049bb",
"assets/assets/poke/club_11_1.png": "7803caeb908ad6d87bad500e763d0687",
"assets/assets/poke/cardback_11.png": "e1bbf0d54c58f8f5f7a80f6404bd891d",
"assets/assets/poke/club_9_1.png": "950c47ba86b3d5067685b6adadfcc6c2",
"assets/assets/poke/heart_4_1.png": "159f510e24844ac0886b0676cf9d3b91",
"assets/assets/poke/club_13_3.png": "99c29bdc86aab67456cf19f9cc56179c",
"assets/assets/poke/diamond_3_0.png": "6285f9133df8a5d2809bf5db5f4620f4",
"assets/assets/poke/spade_6_0.png": "d6df0f48939686383782242ae1cb19f5",
"assets/assets/poke/spade_6_1.png": "15b96ad033b05834405351f78ece7db2",
"assets/assets/poke/diamond_3_1.png": "686491ee0ecef94bc9d45a61cdc2fcf4",
"assets/assets/poke/club_13_2.png": "608da5c87252785568c1772b2b4bf3c9",
"assets/assets/poke/heart_4_0.png": "40f60ce3510bbf71f2b34883b219a0fd",
"assets/assets/poke/club_9_0.png": "5aeecddce561ef4aa73a46401a83a896",
"assets/assets/poke/cardback_10.png": "afd9d1c1dc692b1dc3acb2a87cb4eaf8",
"assets/assets/poke/club_11_0.png": "6c3a38cbd38a5797b64a6aa28703930a",
"assets/assets/poke/heart_6_0.png": "26b267e602bf284227a1c2b8ccbdf0ec",
"assets/assets/poke/club_11_2.png": "6b3bb4e07dea5d76d11d27ea50fa1375",
"assets/assets/poke/cardback_12.png": "2b01a139bea4f8007407c0f6d2b05b04",
"assets/assets/poke/loss.png": "d0e23773a6621c14a5f7a69c213e626a",
"assets/assets/poke/club_13_0.png": "2027db82492a6d70d42cf69ed89cdb7c",
"assets/assets/poke/spade_4_1.png": "8f194f5e9a132d968347926b60dd58c1",
"assets/assets/poke/win2.png": "85303a3fbfa944f15da130c7c68fa1c7",
"assets/assets/poke/diamond_1_1.png": "1b5de4ac45117235893d8b5376ecdb98",
"assets/assets/poke/diamond_1_0.png": "0174597e44465da278e07bafc1093321",
"assets/assets/poke/win3.png": "1e5295b38f3bbedcc601188a83241d8a",
"assets/assets/poke/spade_4_0.png": "2886b2c69c02ee27b94459b0d8d03269",
"assets/assets/poke/club_13_1.png": "d3d098050197bc16800d5e67fc1a953e",
"assets/assets/poke/cardback_13.png": "22e7ef57c9348a5a41a7b4ca83226637",
"assets/assets/poke/club_11_3.png": "938cf05f15dc1bd0b37b6228544ed533",
"assets/assets/poke/heart_6_1.png": "a09cf7a43fd4a450a0252acd5c0c46af",
"assets/assets/poke/money_1.jpg": "cca1996b105166ce650595973ad48c19",
"assets/assets/poke/club_7_1.png": "573c32f3c0dc09753a46c0e86326a9ec",
"assets/assets/poke/heart_13_3.png": "16b8462bffa411a7d06a5184d3909cdf",
"assets/assets/poke/heart_11_1.png": "e29ace61d92f4b1b25f9daf08f846c7e",
"assets/assets/poke/spade_8_0.png": "b2a28e0abf28c0878c6f5372fb09b3f9",
"assets/assets/poke/spade_8_1.png": "5068d275d974ed5f6c67428907c55c2e",
"assets/assets/poke/heart_11_0.png": "fd08e093158163dd44bfc1ccd868e626",
"assets/assets/poke/heart_13_2.png": "2ac186efb3c89df16952dff30dbe611e",
"assets/assets/poke/club_7_0.png": "7c43b906496d1c316f7d4c29fdd475af",
"assets/assets/poke/club_5_0.png": "4c4f6f7b8a87a9220d38a93a2c043f55",
"assets/assets/poke/heart_8_0.png": "67d544a509151d9462f29b71e8a91d66",
"assets/assets/poke/heart_13_0.png": "40fcf55a523be45f9c791368d6247909",
"assets/assets/poke/spot_done.png": "711d219835186749104de0819f2ef825",
"assets/assets/poke/heart_11_2.png": "6e10ff5b597aaa7990efd07f79cecb6b",
"assets/assets/poke/heart_11_3.png": "a31b4f7fbb86e7f0eb3c15e2ee0b1391",
"assets/assets/poke/heart_13_1.png": "34221d26b9ca293db7f7bcd1d65ec61c",
"assets/assets/poke/cardback_20.png": "1af52a00a42e7808fec99e6e91617396",
"assets/assets/poke/heart_8_1.png": "3c64db2ab58ba5393868b984f57ab009",
"assets/assets/poke/club_5_1.png": "3ae93ac7f044db3d2d98651feefd8728",
"assets/assets/poke/cardback_18.png": "b9787294fac5d175c958ec6278c177fc",
"assets/assets/poke/club_1_1.png": "03ba2654ebd6bc3252b8292629c17418",
"assets/assets/poke/diamond_12_0.png": "8cd979ca31cb8db1c6aa09c36222a20e",
"assets/assets/poke/diamond_12_1.png": "e96996d51f267a24f07613f99133f6fa",
"assets/assets/poke/club_1_0.png": "4067a388a65f146235f5fbeadc0746b8",
"assets/assets/poke/cardback_19.png": "a9dd04432cc8ad5cc14415b519ec73f4",
"assets/assets/poke/diamond_9_1.png": "c5e5b077b95c1d8683da95d870b90c92",
"assets/assets/poke/diamond_10_1.png": "18b25d36df451b8814ece7b092dd514a",
"assets/assets/poke/club_3_0.png": "1c4ded056a46462a2f5ab651b23f35f2",
"assets/assets/poke/diamond_12_3.png": "ada7a108511b7dacfe74d4f36ebf536c",
"assets/assets/poke/diamond_12_2.png": "e9eb24dda59f636441f8557aa30275a6",
"assets/assets/poke/club_3_1.png": "eaf101b054ddf433b4cfe8b0f02e783f",
"assets/assets/poke/diamond_10_0.png": "97bc7669396c88066abc522fbd8713ba",
"assets/assets/poke/diamond_9_0.png": "37ace94d143fe9c45da93bac687fef9c",
"assets/assets/poke/heart_12_0.png": "c63299684b238341b5df90d43c3ac17b",
"assets/assets/poke/cardback_7.png": "107f3f65a469d4c1dc4d88898473d1b3",
"assets/assets/poke/club_4_0.png": "d0fdd97a81319a94bbc5fe16e99ba37a",
"assets/assets/poke/heart_9_0.png": "b9fe153dce4ca405d1a4cb6977599f0c",
"assets/assets/poke/loss.jpeg": "aea602f92eaed401937086997f705260",
"assets/assets/poke/heart_9_1.png": "f55f9273227bcfad7f5c387b39fd1520",
"assets/assets/poke/club_4_1.png": "81a765b964c0bd7dc7db5b25a5d4b6da",
"assets/assets/poke/cardback_6.png": "4f0e1d0024a49b617b01636bfb4387e9",
"assets/assets/poke/heart_12_1.png": "73bb94f5f23b2424ad981e7f8a3bfe68",
"assets/assets/poke/heart_10_1.png": "998f3143ec0b849337109d8a0d4e700f",
"assets/assets/poke/spot_doing.png": "b6e8779db988a8a14fe3a38809afaee8",
"assets/assets/poke/spade_9_0.png": "e076f599c4ed5dbaaaa2ee95a50dc609",
"assets/assets/poke/heart_12_3.png": "dba65f143997c2fda5c086e16df90012",
"assets/assets/poke/cardback_4.png": "8597720f0a577246c073b52b279dfb88",
"assets/assets/poke/club_6_1.png": "238c667a45cf65081dd926b7548a41c2",
"assets/assets/poke/cardback_5.png": "adc85f01acd347fffb88367646d45749",
"assets/assets/poke/club_6_0.png": "d9bcbc7857e615bb88fa89b3ddc332dc",
"assets/assets/poke/heart_12_2.png": "07c48941fd96660f4ced8732e16db438",
"assets/assets/poke/spot_queue.png": "6104c3cd67fbd912316b8878230763e6",
"assets/assets/poke/spade_9_1.png": "ebd971fec5983505ef092a7f6ddd0aee",
"assets/assets/poke/heart_10_0.png": "eb513a010dc6832ce056251f52049a3b",
"assets/assets/poke/club_2_0.png": "ff47361f325f7e4778da760ef1ff50a6",
"assets/assets/poke/diamond_13_3.png": "96f1fcd5ae587c5ceb4cace4d3ac9103",
"assets/assets/poke/diamond_11_1.png": "174394b2d4c6de2b2c768ff8c9577568",
"assets/assets/poke/cardback_1.png": "9389749e495780056c315fede235137e",
"assets/assets/poke/diamond_8_1.png": "42c627c9665f4ab3734b0e4f9ac1a48d",
"assets/assets/poke/diamond_8_0.png": "51fa5cb20614add9b6076d4dd373e5fb",
"assets/assets/poke/diamond_11_0.png": "d5948fd1ff41687ace8457136ad48c56",
"assets/assets/poke/diamond_13_2.png": "bf8a1e7e74dd9b612d1f46b484be2b43",
"assets/assets/poke/club_2_1.png": "5743f3897e3d1a828c530628c1c435f8",
"assets/assets/poke/diamond_13_0.png": "289e7d165c4da9c87574317eeaeb3fc6",
"assets/assets/poke/diamond_11_2.png": "ae73abb4e4c34c055d1f6f4a66551727",
"assets/assets/poke/cardback_2.png": "b79f114320afb5a37afef133422147dc",
"assets/assets/poke/cardback_3.png": "d1ca43895c8a1591e3388758fd6a405b",
"assets/assets/poke/diamond_11_3.png": "71dd1f0c4a8f05d8c38d4fa4d00349bf",
"assets/assets/poke/diamond_13_1.png": "f9855fd8ac1df0d39090a63c4eab93d3"
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
