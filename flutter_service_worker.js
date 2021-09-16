'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html~": "0d65467e6b53d1098f13edc69f24947a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pubspec.yaml": "4ef5c8ad028847ea475fefbd696069c8",
"main.dart.js": "1f7180db4aea7dac36d617e26a54e204",
"version.json": "426313f2f3133c2f20415344c4a22df3",
"README.md": "7d733415f7ddd1ed627c425793039b9c",
"ios/Flutter/Release.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Flutter/AppFrameworkInfo.plist": "1beb17747ea5d0af65d1b821f5aae959",
"ios/Flutter/Debug.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Runner/AppDelegate.swift": "640effd31ad5be56ac222976d95a5878",
"ios/Runner/Info.plist": "c106bfc408522e94a5355dc9c0fae50f",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "f8e7955550407d4ec71d28e7c2d8c8c6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "9595f5692fac4a15b50616d6549e9ed4",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "e2b9a9fb66c6f8165a179d370eb723c0",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "d86de75e9341c42432a12b3d58e364b8",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "128e30cc061e49f503f48c338a21380e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "2adf6396c0f80a2ddc96ead2f2405220",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "c0fa6a088a2d486e4d75a012096d611b",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "a34a631e106b9e7251e55fa199d34bca",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7af6f2ed506e771a319d46846dde1f26",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "975d8a8c44f5d28ac65263294b84b0c5",
"ios/Runner.xcodeproj/project.pbxproj": "a05355f45ba7ed4777bd868b3fb665f2",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "4c619b382ab54d778dbc522ef4b1c6e5",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/main.dart.js": "1f7180db4aea7dac36d617e26a54e204",
"web/version.json": "426313f2f3133c2f20415344c4a22df3",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/index.html": "99c17abfba362d0d627309ee4825addb",
"/": "ff7a93eb9dd3bc2cb6a50e78cd920654",
"web/manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"web/assets/NOTICES": "bf7792d951df2937c14abb8e32027117",
"web/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"web/assets/AssetManifest.json": "319e15c4ed260dc41a5288cd98fd2c7f",
"web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"web/assets/assets/images/simple_music.png": "160c48820a165ac6730e87507971ac32",
"web/assets/assets/images/logo.png": "fd57145331f3049836a96fd5c9b2d82f",
"web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"analysis_options.yaml": "90ca05185a2de012cebf6fb9f85f3598",
"test/widget_test.dart": "51d0ed888bde761c97b207e742286417",
"lib/projects.dart": "5927405e0e0f8f433d0b7314c6a3e368",
"lib/generated_plugin_registrant.dart": "bb9281b6e130bb53bea281da37d87daa",
"lib/main.dart": "17bd7af9b8bd5c0eca82498d313047dc",
"lib/app.dart": "66f430e2944be40154d61aba5889a5a8",
"portfolio.iml": "0e10d326c956d57be354882dfdf4d740",
"linux/flutter/generated_plugin_registrant.cc": "bd6e64368e100cca8e55173215ae1bdd",
"linux/flutter/CMakeLists.txt": "66a8ccde85d32f0bb51bdfcd6c3eebcc",
"linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"linux/flutter/generated_plugins.cmake": "6462d2cbec037bd6b4a88dd11f92f80a",
"linux/CMakeLists.txt": "1cf030bee1543b108945f22167679e57",
"linux/main.cc": "0643b8609698e96b3abd63c210361a87",
"linux/my_application.cc": "7855f5f1ae4bdde5a198ba6e8719ba31",
"linux/my_application.h": "7bd839b67ebee22174be9f4da4521b6f",
"index.html": "ff7a93eb9dd3bc2cb6a50e78cd920654",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"android/settings.gradle": "10881f279cc48040996c7354515e0da7",
"android/app/build.gradle": "32b964b61fe9a319591512a26661e0a9",
"android/app/src/profile/AndroidManifest.xml": "eb782851dd7a209d28105bf8d54f27f4",
"android/app/src/main/java/com/example/portfolio/MainActivity.java": "8aa96b98f54673d689220f119a7e1260",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/values/styles.xml": "8c2485c661cc2eecc76d6ac7e61e236d",
"android/app/src/main/res/values-night/styles.xml": "38d2da8c073ef21cb1ea7c8bb237caa5",
"android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/AndroidManifest.xml": "67a8e378daba708408c0b5f0f9be2b45",
"android/app/src/debug/AndroidManifest.xml": "eb782851dd7a209d28105bf8d54f27f4",
"android/gradle.properties": "4a756df24e4431aa00ea27ee9b863c97",
"android/build.gradle": "102fb43e2c3c8c29387622b1a5480178",
"android/gradle/wrapper/gradle-wrapper.properties": "4a3ac42d3bba3464a5c2ed6ccb15ccf9",
"pubspec.lock": "2987a6364c34807b7d12250af6b329d6",
"assets/NOTICES": "bf7792d951df2937c14abb8e32027117",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/simple_music.png": "160c48820a165ac6730e87507971ac32",
"assets/images/logo.png": "fd57145331f3049836a96fd5c9b2d82f",
"assets/AssetManifest.json": "319e15c4ed260dc41a5288cd98fd2c7f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/images/simple_music.png": "160c48820a165ac6730e87507971ac32",
"assets/assets/images/logo.png": "fd57145331f3049836a96fd5c9b2d82f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"build/flutter_assets/kernel_blob.bin": "5cf452503bc9a842245989062bb9c6c6",
"build/flutter_assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"build/flutter_assets/version.json": "426313f2f3133c2f20415344c4a22df3",
"build/flutter_assets/AssetManifest.json": "319e15c4ed260dc41a5288cd98fd2c7f",
"build/flutter_assets/NOTICES.Z": "3cbf139bf4eee985a007bdac34c48695",
"build/flutter_assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/flutter_assets/assets/images/simple_music.png": "160c48820a165ac6730e87507971ac32",
"build/flutter_assets/assets/images/logo.png": "fd57145331f3049836a96fd5c9b2d82f",
"build/flutter_assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"build/linux/x64/debug/CMakeFiles/portfolio.dir/flutter/generated_plugin_registrant.cc.o": "dbd6314f793a872ef10a8dbbb2af67c5",
"build/linux/x64/debug/CMakeFiles/portfolio.dir/my_application.cc.o": "e65cca12cb91ac8cf9355ab9ef2765a0",
"build/linux/x64/debug/CMakeFiles/portfolio.dir/main.cc.o": "158fa3e5bf6f72aa53b60d63dc88839c",
"build/linux/x64/debug/CMakeFiles/3.20.2/CompilerIdCXX/CMakeCXXCompilerId.cpp": "f6ed2c5229305ad240c8ef77c645b4de",
"build/linux/x64/debug/CMakeFiles/3.20.2/CompilerIdCXX/a.out": "d429f879f845ea54efb1045a9b48f3f7",
"build/linux/x64/debug/CMakeFiles/3.20.2/CMakeDetermineCompilerABI_CXX.bin": "6e0c5bc10c2cf189694a349e8497ba07",
"build/linux/x64/debug/CMakeFiles/3.20.2/CMakeSystem.cmake": "5927ee4bb5382e47f60b9e47848eca2b",
"build/linux/x64/debug/CMakeFiles/3.20.2/CMakeCXXCompiler.cmake": "d4e105eeb9845ac8ee6af09d21b23b46",
"build/linux/x64/debug/CMakeFiles/cmake.check_cache": "448d8050798441c3c0911462399ba145",
"build/linux/x64/debug/CMakeFiles/rules.ninja": "eff62352ab5a173cce209b521575bb3f",
"build/linux/x64/debug/CMakeFiles/TargetDirectories.txt": "dd38109f6d01d88f8ea78cc60b372698",
"build/linux/x64/debug/flutter/cmake_install.cmake": "0585b7d250da4fd1475c7730e68bb427",
"build/linux/x64/debug/plugins/url_launcher_linux/CMakeFiles/url_launcher_linux_plugin.dir/url_launcher_plugin.cc.o": "f109db3896ff13491628bccc1156ec4e",
"build/linux/x64/debug/plugins/url_launcher_linux/cmake_install.cmake": "037b97dc621dd867bb00f9aa3348705c",
"build/linux/x64/debug/plugins/url_launcher_linux/liburl_launcher_linux_plugin.so": "1b2f36ee8414468cb53019264cdcbcb6",
"build/linux/x64/debug/cmake_install.cmake": "f3aae305377922b3e56d5d12f4932b94",
"build/linux/x64/debug/bundle/lib/libflutter_linux_gtk.so": "95eb651d3da2428527c0febf46a26940",
"build/linux/x64/debug/bundle/lib/liburl_launcher_linux_plugin.so": "1b2f36ee8414468cb53019264cdcbcb6",
"build/linux/x64/debug/bundle/data/flutter_assets/kernel_blob.bin": "5cf452503bc9a842245989062bb9c6c6",
"build/linux/x64/debug/bundle/data/flutter_assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"build/linux/x64/debug/bundle/data/flutter_assets/version.json": "426313f2f3133c2f20415344c4a22df3",
"build/linux/x64/debug/bundle/data/flutter_assets/AssetManifest.json": "319e15c4ed260dc41a5288cd98fd2c7f",
"build/linux/x64/debug/bundle/data/flutter_assets/NOTICES.Z": "3cbf139bf4eee985a007bdac34c48695",
"build/linux/x64/debug/bundle/data/flutter_assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/linux/x64/debug/bundle/data/flutter_assets/assets/images/simple_music.png": "160c48820a165ac6730e87507971ac32",
"build/linux/x64/debug/bundle/data/flutter_assets/assets/images/logo.png": "fd57145331f3049836a96fd5c9b2d82f",
"build/linux/x64/debug/bundle/data/flutter_assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"build/linux/x64/debug/bundle/data/icudtl.dat": "091a67c630f92f8316940180b787fbd2",
"build/linux/x64/debug/bundle/portfolio": "ef0e262d0e59292591d5da47d2db7250",
"build/linux/x64/debug/intermediates_do_not_run/portfolio": "9e718b4ccc54394b095dce11bbf476e0",
"build/linux/x64/debug/build.ninja": "567ab755d3b0d0e9beba6d5ad9e024d7",
"build/linux/x64/debug/install_manifest.txt": "a7244a07d51daaa02c1010c23ccaf8d4",
"build/linux/x64/debug/CMakeCache.txt": "254e11d6c658afc7776572d6d576fcc1",
"build/ad0f7dc70dbfe4d9816de77b9560b3db/_composite.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"build/ad0f7dc70dbfe4d9816de77b9560b3db/gen_dart_plugin_registrant.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"build/ad0f7dc70dbfe4d9816de77b9560b3db/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"build/4f2a58af27abc49ecf55570043bbf938.cache.dill.track.dill": "ffeb1efd731bd1403695aeb45d3a9d9f",
"build/c075001b96339384a97db4862b8ab8db.cache.dill.track.dill": "76e0e62a576c622e338a037123f8eccf"
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
