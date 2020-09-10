const __wpo = {
  "assets": {
    "main": [
      "/favicon.ico",
      "/runtime.f569b259de1aebd58007.js",
      "/"
    ],
    "additional": [
      "/npm.ant-design.12a8f96a0b7aa22f151c.chunk.js",
      "/npm.antd.ddb53aadb83b63532764.chunk.js",
      "/npm.lodash.b6402a797c2469d7d8bb.chunk.js",
      "/npm.redux-saga.aaec2399ca13446edcaf.chunk.js",
      "/npm.intl.322ea77011d5e7e0553b.chunk.js",
      "/main.90db0008df4c643a95e8.chunk.js",
      "/npm.babel.944ba32642d3e7603f2a.chunk.js",
      "/npm.core-js.f2526b90a1b08370b85d.chunk.js",
      "/npm.react-app-polyfill.96dc0f90cc232f94014d.chunk.js",
      "/npm.react-redux.224316212a186d64fed9.chunk.js",
      "/npm.redux-form.5036ab05da00706a8ed8.chunk.js",
      "/12.3ba9f171058e6eebeed3.chunk.js",
      "/13.48b9d41b9dedf36a7d72.chunk.js",
      "/14.aaa2db96b88675625fa1.chunk.js",
      "/15.6c0555ee43d202aaf492.chunk.js"
    ],
    "optional": []
  },
  "externals": [],
  "hashesMap": {
    "e506e33bff9364221a4e14bbc16ceae15d320583": "/favicon.ico",
    "3a98be41dd157d5624fa11c3f82421f56238c86b": "/npm.ant-design.12a8f96a0b7aa22f151c.chunk.js",
    "0790b35845d9d61c2c25d2bc2657d01f44c5b99e": "/npm.antd.ddb53aadb83b63532764.chunk.js",
    "2d6841fc8fe786024730ff0923628ca165ba4cb4": "/npm.lodash.b6402a797c2469d7d8bb.chunk.js",
    "f8b4d6337ed49eb7e95e4256ee834dcba05e3443": "/npm.redux-saga.aaec2399ca13446edcaf.chunk.js",
    "dbb04ae199fcca114660e939032713f2a8499906": "/npm.intl.322ea77011d5e7e0553b.chunk.js",
    "e4b78d768617be6dd026016c5030953d3c2194e4": "/main.90db0008df4c643a95e8.chunk.js",
    "e2c0f96b70d6396307b4deb1fb16d6a7bac3fb37": "/npm.babel.944ba32642d3e7603f2a.chunk.js",
    "fd399f080bb167c6ea2cb78933536143cf973c09": "/npm.core-js.f2526b90a1b08370b85d.chunk.js",
    "a940511a4b677743105ac36fca3a35bbafe032f1": "/npm.react-app-polyfill.96dc0f90cc232f94014d.chunk.js",
    "aa4325bf0bc4ea4bc8c11424c50ef0bab3758156": "/npm.react-redux.224316212a186d64fed9.chunk.js",
    "75af2f811e1482bc6edbe23a9509514cab47e9dc": "/npm.redux-form.5036ab05da00706a8ed8.chunk.js",
    "0e0b82a6d846884eff67283c1f9dd04f1c5529ff": "/runtime.f569b259de1aebd58007.js",
    "def26f77db5b7961208cba60cb70ffbc7458e83f": "/12.3ba9f171058e6eebeed3.chunk.js",
    "7496820d9f43816cc5fe7a4f9aa63e9f1258138f": "/13.48b9d41b9dedf36a7d72.chunk.js",
    "6e873fe60e4c417f55f622a775ed9b7c0f88ea0b": "/14.aaa2db96b88675625fa1.chunk.js",
    "528421186dfa176d103bd92bfc3a6101a2c8cae1": "/15.6c0555ee43d202aaf492.chunk.js",
    "6e2b2b3b6911a7f77b791a0dfd97be526cfc65e6": "/"
  },
  "strategy": "changed",
  "responseStrategy": "cache-first",
  "version": "9/9/2020, 11:27:03 PM",
  "name": "webpack-offline",
  "pluginVersion": "5.0.6",
  "relativePaths": false
};

/** *** */ (function(modules) { // webpackBootstrap
/** *** */ 	// The module cache
/** *** */ 	const installedModules = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */
    /** *** */ 		// Check if module is in cache
    /** *** */ 		if(installedModules[moduleId]) {
      /** *** */ 			return installedModules[moduleId].exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = installedModules[moduleId] = {
      /** *** */ 			i: moduleId,
      /** *** */ 			l: false,
      /** *** */ 			exports: {}
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Flag the module as loaded
    /** *** */ 		module.l = true;
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** *** */
  /** *** */ 	// expose the modules object (__webpack_modules__)
  /** *** */ 	__webpack_require__.m = modules;
  /** *** */
  /** *** */ 	// expose the module cache
  /** *** */ 	__webpack_require__.c = installedModules;
  /** *** */
  /** *** */ 	// define getter function for harmony exports
  /** *** */ 	__webpack_require__.d = function(exports, name, getter) {
    /** *** */ 		if(!__webpack_require__.o(exports, name)) {
      /** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /** *** */ 		}
    /** *** */ 	};
  /** *** */
  /** *** */ 	// define __esModule on exports
  /** *** */ 	__webpack_require__.r = function(exports) {
    /** *** */ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /** *** */ 		}
    /** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
    /** *** */ 	};
  /** *** */
  /** *** */ 	// create a fake namespace object
  /** *** */ 	// mode & 1: value is a module id, require it
  /** *** */ 	// mode & 2: merge all properties of value into the ns
  /** *** */ 	// mode & 4: return value when already ns object
  /** *** */ 	// mode & 8|1: behave like require
  /** *** */ 	__webpack_require__.t = function(value, mode) {
    /** *** */ 		if(mode & 1) value = __webpack_require__(value);
    /** *** */ 		if(mode & 8) return value;
    /** *** */ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /** *** */ 		const ns = Object.create(null);
    /** *** */ 		__webpack_require__.r(ns);
    /** *** */ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
    /** *** */ 		if(mode & 2 && typeof value !== 'string') for(const key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
    /** *** */ 		return ns;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
  /** *** */ 	__webpack_require__.n = function(module) {
    /** *** */ 		const getter = module && module.__esModule ?
    /** *** */ 			function getDefault() { return module.default; } :
    /** *** */ 			function getModuleExports() { return module; };
    /** *** */ 		__webpack_require__.d(getter, 'a', getter);
    /** *** */ 		return getter;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// Object.prototype.hasOwnProperty.call
  /** *** */ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /** *** */
  /** *** */ 	// __webpack_public_path__
  /** *** */ 	__webpack_require__.p = "/";
  /** *** */
  /** *** */
  /** *** */ 	// Load entry module and return exports
  /** *** */ 	return __webpack_require__(__webpack_require__.s = "22249e1ea7baa06e7c1b");
/** *** */ })
/** ********************************************************************* */
/** *** */ ({

  /** */ "22249e1ea7baa06e7c1b":
  /** */ (function(module, exports, __webpack_require__) {

    


    (function () {
      const {waitUntil} = ExtendableEvent.prototype;
      const {respondWith} = FetchEvent.prototype;
      const promisesMap = new WeakMap();

      ExtendableEvent.prototype.waitUntil = function (promise) {
        const extendableEvent = this;
        let promises = promisesMap.get(extendableEvent);

        if (promises) {
          promises.push(Promise.resolve(promise));
          return;
        }

        promises = [Promise.resolve(promise)];
        promisesMap.set(extendableEvent, promises);

        // call original method
        return waitUntil.call(extendableEvent, Promise.resolve().then(function processPromises() {
          const len = promises.length;

          // wait for all to settle
          return Promise.all(promises.map(function (p) {
            return p.catch(function () {});
          })).then(function () {
            // have new items been added? If so, wait again
            if (promises.length != len) return processPromises();
            // we're done!
            promisesMap.delete(extendableEvent);
            // reject if one of the promises rejected
            return Promise.all(promises);
          });
        }));
      };

      FetchEvent.prototype.respondWith = function (promise) {
        this.waitUntil(promise);
        return respondWith.call(this, promise);
      };
    })();;
    'use strict';

    if (typeof DEBUG === 'undefined') {
      var DEBUG = false;
    }

    function WebpackServiceWorker(params, helpers) {
      const {cacheMaps} = helpers;
      // navigationPreload: true, { map: (URL) => URL, test: (URL) => boolean }
      const {navigationPreload} = helpers;

      // (update)strategy: changed, all
      const {strategy} = params;
      // responseStrategy: cache-first, network-first
      const {responseStrategy} = params;

      const {assets} = params;

      let {hashesMap} = params;
      let {externals} = params;

      const prefetchRequest = params.prefetchRequest || {
        credentials: 'same-origin',
        mode: 'cors'
      };

      const CACHE_PREFIX = params.name;
      const CACHE_TAG = params.version;
      const CACHE_NAME = `${CACHE_PREFIX  }:${  CACHE_TAG}`;

      const PRELOAD_CACHE_NAME = `${CACHE_PREFIX  }$preload`;
      const STORED_DATA_KEY = '__offline_webpack__data';

      mapAssets();

      const allAssets = [].concat(assets.main, assets.additional, assets.optional);

      self.addEventListener('install', function (event) {
        console.log('[SW]:', 'Install event');

        let installing;

        if (strategy === 'changed') {
          installing = cacheChanged('main');
        } else {
          installing = cacheAssets('main');
        }

        event.waitUntil(installing);
      });

      self.addEventListener('activate', function (event) {
        console.log('[SW]:', 'Activate event');

        let activation = cacheAdditional();

        // Delete all assets which name starts with CACHE_PREFIX and
        // is not current cache (CACHE_NAME)
        activation = activation.then(storeCacheData);
        activation = activation.then(deleteObsolete);
        activation = activation.then(function () {
          if (self.clients && self.clients.claim) {
            return self.clients.claim();
          }
        });

        if (navigationPreload && self.registration.navigationPreload) {
          activation = Promise.all([activation, self.registration.navigationPreload.enable()]);
        }

        event.waitUntil(activation);
      });

      function cacheAdditional() {
        if (!assets.additional.length) {
          return Promise.resolve();
        }

        if (DEBUG) {
          console.log('[SW]:', 'Caching additional');
        }

        let operation;

        if (strategy === 'changed') {
          operation = cacheChanged('additional');
        } else {
          operation = cacheAssets('additional');
        }

        // Ignore fail of `additional` cache section
        return operation.catch(function (e) {
          console.error('[SW]:', 'Cache section `additional` failed to load');
        });
      }

      function cacheAssets(section) {
        const batch = assets[section];

        return caches.open(CACHE_NAME).then(function (cache) {
          return addAllNormalized(cache, batch, {
            bust: params.version,
            request: prefetchRequest,
            failAll: section === 'main'
          });
        }).then(function () {
          logGroup(`Cached assets: ${  section}`, batch);
        }).catch(function (e) {
          console.error(e);
          throw e;
        });
      }

      function cacheChanged(section) {
        return getLastCache().then(function (args) {
          if (!args) {
            return cacheAssets(section);
          }

          const lastCache = args[0];
          const lastKeys = args[1];
          const lastData = args[2];

          const lastMap = lastData.hashmap;
          const lastVersion = lastData.version;

          if (!lastData.hashmap || lastVersion === params.version) {
            return cacheAssets(section);
          }

          const lastHashedAssets = Object.keys(lastMap).map(function (hash) {
            return lastMap[hash];
          });

          const lastUrls = lastKeys.map(function (req) {
            const url = new URL(req.url);
            url.search = '';
            url.hash = '';

            return url.toString();
          });

          const sectionAssets = assets[section];
          const moved = [];
          const changed = sectionAssets.filter(function (url) {
            if (lastUrls.indexOf(url) === -1 || lastHashedAssets.indexOf(url) === -1) {
              return true;
            }

            return false;
          });

          Object.keys(hashesMap).forEach(function (hash) {
            const asset = hashesMap[hash];

            // Return if not in sectionAssets or in changed or moved array
            if (sectionAssets.indexOf(asset) === -1 || changed.indexOf(asset) !== -1 || moved.indexOf(asset) !== -1) return;

            const lastAsset = lastMap[hash];

            if (lastAsset && lastUrls.indexOf(lastAsset) !== -1) {
              moved.push([lastAsset, asset]);
            } else {
              changed.push(asset);
            }
          });

          logGroup(`Changed assets: ${  section}`, changed);
          logGroup(`Moved assets: ${  section}`, moved);

          const movedResponses = Promise.all(moved.map(function (pair) {
            return lastCache.match(pair[0]).then(function (response) {
              return [pair[1], response];
            });
          }));

          return caches.open(CACHE_NAME).then(function (cache) {
            const move = movedResponses.then(function (responses) {
              return Promise.all(responses.map(function (pair) {
                return cache.put(pair[0], pair[1]);
              }));
            });

            return Promise.all([move, addAllNormalized(cache, changed, {
              bust: params.version,
              request: prefetchRequest,
              failAll: section === 'main',
              deleteFirst: section !== 'main'
            })]);
          });
        });
      }

      function deleteObsolete() {
        return caches.keys().then(function (keys) {
          const all = keys.map(function (key) {
            if (key.indexOf(CACHE_PREFIX) !== 0 || key.indexOf(CACHE_NAME) === 0) return;

            console.log('[SW]:', 'Delete cache:', key);
            return caches.delete(key);
          });

          return Promise.all(all);
        });
      }

      function getLastCache() {
        return caches.keys().then(function (keys) {
          let index = keys.length;
          let key;

          while (index--) {
            key = keys[index];

            if (key.indexOf(CACHE_PREFIX) === 0) {
              break;
            }
          }

          if (!key) return;

          let cache;

          return caches.open(key).then(function (_cache) {
            cache = _cache;
            return _cache.match(new URL(STORED_DATA_KEY, location).toString());
          }).then(function (response) {
            if (!response) return;

            return Promise.all([cache, cache.keys(), response.json()]);
          });
        });
      }

      function storeCacheData() {
        return caches.open(CACHE_NAME).then(function (cache) {
          const data = new Response(JSON.stringify({
            version: params.version,
            hashmap: hashesMap
          }));

          return cache.put(new URL(STORED_DATA_KEY, location).toString(), data);
        });
      }

      self.addEventListener('fetch', function (event) {
        // Handle only GET requests
        if (event.request.method !== 'GET') {
          return;
        }

        // This prevents some weird issue with Chrome DevTools and 'only-if-cached'
        // Fixes issue #385, also ref to:
        // - https://github.com/paulirish/caltrainschedule.io/issues/49
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=823392
        if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
          return;
        }

        const url = new URL(event.request.url);
        url.hash = '';

        let urlString = url.toString();

        // Not external, so search part of the URL should be stripped,
        // if it's external URL, the search part should be kept
        if (externals.indexOf(urlString) === -1) {
          url.search = '';
          urlString = url.toString();
        }

        let assetMatches = allAssets.indexOf(urlString) !== -1;
        let cacheUrl = urlString;

        if (!assetMatches) {
          const cacheRewrite = matchCacheMap(event.request);

          if (cacheRewrite) {
            cacheUrl = cacheRewrite;
            assetMatches = true;
          }
        }

        if (!assetMatches) {
          // Use request.mode === 'navigate' instead of isNavigateRequest
          // because everything what supports navigationPreload supports
          // 'navigate' request.mode
          if (event.request.mode === 'navigate') {
            // Requesting with fetchWithPreload().
            // Preload is used only if navigationPreload is enabled and
            // navigationPreload mapping is not used.
            if (navigationPreload === true) {
              event.respondWith(fetchWithPreload(event));
              return;
            }
          }

          // Something else, positive, but not `true`
          if (navigationPreload) {
            const preloadedResponse = retrivePreloadedResponse(event);

            if (preloadedResponse) {
              event.respondWith(preloadedResponse);
              return;
            }
          }

          // Logic exists here if no cache match
          return;
        }

        // Cache handling/storing/fetching starts here
        let resource;

        if (responseStrategy === 'network-first') {
          resource = networkFirstResponse(event, urlString, cacheUrl);
        }
        // 'cache-first' otherwise
        // (responseStrategy has been validated before)
        else {
          resource = cacheFirstResponse(event, urlString, cacheUrl);
        }

        event.respondWith(resource);
      });

      self.addEventListener('message', function (e) {
        const {data} = e;
        if (!data) return;

        switch (data.action) {
          case 'skipWaiting':
            {
              if (self.skipWaiting) self.skipWaiting();
            }break;
        }
      });

      function cacheFirstResponse(event, urlString, cacheUrl) {
        handleNavigationPreload(event);

        return cachesMatch(cacheUrl, CACHE_NAME).then(function (response) {
          if (response) {
            if (DEBUG) {
              console.log('[SW]:', `URL [${  cacheUrl  }](${  urlString  }) from cache`);
            }

            return response;
          }

          // Load and cache known assets
          const fetching = fetch(event.request).then(function (response) {
            if (!response.ok) {
              if (DEBUG) {
                console.log('[SW]:', `URL [${  urlString  }] wrong response: [${  response.status  }] ${  response.type}`);
              }

              return response;
            }

            if (DEBUG) {
              console.log('[SW]:', `URL [${  urlString  }] from network`);
            }

            if (cacheUrl === urlString) {
              (function () {
                const responseClone = response.clone();
                const storing = caches.open(CACHE_NAME).then(function (cache) {
                  return cache.put(urlString, responseClone);
                }).then(function () {
                  console.log('[SW]:', `Cache asset: ${  urlString}`);
                });

                event.waitUntil(storing);
              })();
            }

            return response;
          });

          return fetching;
        });
      }

      function networkFirstResponse(event, urlString, cacheUrl) {
        return fetchWithPreload(event).then(function (response) {
          if (response.ok) {
            if (DEBUG) {
              console.log('[SW]:', `URL [${  urlString  }] from network`);
            }

            return response;
          }

          // Throw to reach the code in the catch below
          throw response;
        })
        // This needs to be in a catch() and not just in the then() above
        // cause if your network is down, the fetch() will throw
          .catch(function (erroredResponse) {
            if (DEBUG) {
              console.log('[SW]:', `URL [${  urlString  }] from cache if possible`);
            }

            return cachesMatch(cacheUrl, CACHE_NAME).then(function (response) {
              if (response) {
                return response;
              }

              if (erroredResponse instanceof Response) {
                return erroredResponse;
              }

              // Not a response at this point, some other error
              throw erroredResponse;
              // return Response.error();
            });
          });
      }

      function handleNavigationPreload(event) {
        if (navigationPreload && typeof navigationPreload.map === 'function' &&
    // Use request.mode === 'navigate' instead of isNavigateRequest
    // because everything what supports navigationPreload supports
    // 'navigate' request.mode
    event.preloadResponse && event.request.mode === 'navigate') {
          const mapped = navigationPreload.map(new URL(event.request.url), event.request);

          if (mapped) {
            storePreloadedResponse(mapped, event);
          }
        }
      }

      // Temporary in-memory store for faster access
      const navigationPreloadStore = new Map();

      function storePreloadedResponse(_url, event) {
        const url = new URL(_url, location);
        const preloadResponsePromise = event.preloadResponse;

        navigationPreloadStore.set(preloadResponsePromise, {
          url,
          response: preloadResponsePromise
        });

        const isSamePreload = function isSamePreload() {
          return navigationPreloadStore.has(preloadResponsePromise);
        };

        const storing = preloadResponsePromise.then(function (res) {
          // Return if preload isn't enabled or hasn't happened
          if (!res) return;

          // If navigationPreloadStore already consumed
          // or navigationPreloadStore already contains another preload,
          // then do not store anything and return
          if (!isSamePreload()) {
            return;
          }

          const clone = res.clone();

          // Storing the preload response for later consume (hasn't yet been consumed)
          return caches.open(PRELOAD_CACHE_NAME).then(function (cache) {
            if (!isSamePreload()) return;

            return cache.put(url, clone).then(function () {
              if (!isSamePreload()) {
                return caches.open(PRELOAD_CACHE_NAME).then(function (cache) {
                  return cache.delete(url);
                });
              }
            });
          });
        });

        event.waitUntil(storing);
      }

      function retriveInMemoryPreloadedResponse(url) {
        if (!navigationPreloadStore) {
          return;
        }

        let foundResponse;
        let foundKey;

        navigationPreloadStore.forEach(function (store, key) {
          if (store.url.href === url.href) {
            foundResponse = store.response;
            foundKey = key;
          }
        });

        if (foundResponse) {
          navigationPreloadStore.delete(foundKey);
          return foundResponse;
        }
      }

      function retrivePreloadedResponse(event) {
        const url = new URL(event.request.url);

        if (self.registration.navigationPreload && navigationPreload && navigationPreload.test && navigationPreload.test(url, event.request)) {} else {
          return;
        }

        const fromMemory = retriveInMemoryPreloadedResponse(url);
        const {request} = event;

        if (fromMemory) {
          event.waitUntil(caches.open(PRELOAD_CACHE_NAME).then(function (cache) {
            return cache.delete(request);
          }));

          return fromMemory;
        }

        return cachesMatch(request, PRELOAD_CACHE_NAME).then(function (response) {
          if (response) {
            event.waitUntil(caches.open(PRELOAD_CACHE_NAME).then(function (cache) {
              return cache.delete(request);
            }));
          }

          return response || fetch(event.request);
        });
      }

      function mapAssets() {
        Object.keys(assets).forEach(function (key) {
          assets[key] = assets[key].map(function (path) {
            const url = new URL(path, location);

            url.hash = '';

            if (externals.indexOf(path) === -1) {
              url.search = '';
            }

            return url.toString();
          });
        });

        hashesMap = Object.keys(hashesMap).reduce(function (result, hash) {
          const url = new URL(hashesMap[hash], location);
          url.search = '';
          url.hash = '';

          result[hash] = url.toString();
          return result;
        }, {});

        externals = externals.map(function (path) {
          const url = new URL(path, location);
          url.hash = '';

          return url.toString();
        });
      }

      function addAllNormalized(cache, requests, options) {
        const bustValue = options.bust;
        const failAll = options.failAll !== false;
        const deleteFirst = options.deleteFirst === true;
        const requestInit = options.request || {
          credentials: 'omit',
          mode: 'cors'
        };

        let deleting = Promise.resolve();

        if (deleteFirst) {
          deleting = Promise.all(requests.map(function (request) {
            return cache.delete(request).catch(function () {});
          }));
        }

        return Promise.all(requests.map(function (request) {
          if (bustValue) {
            request = applyCacheBust(request, bustValue);
          }

          return fetch(request, requestInit).then(fixRedirectedResponse).then(function (response) {
            if (!response.ok) {
              return { error: true };
            }

            return { response };
          }, function () {
            return { error: true };
          });
        })).then(function (responses) {
          if (failAll && responses.some(function (data) {
            return data.error;
          })) {
            return Promise.reject(new Error('Wrong response status'));
          }

          if (!failAll) {
            responses = responses.filter(function (data) {
              return !data.error;
            });
          }

          return deleting.then(function () {
            const addAll = responses.map(function (_ref, i) {
              const {response} = _ref;

              return cache.put(requests[i], response);
            });

            return Promise.all(addAll);
          });
        });
      }

      function matchCacheMap(request) {
        const urlString = request.url;
        const url = new URL(urlString);

        let requestType;

        if (isNavigateRequest(request)) {
          requestType = 'navigate';
        } else if (url.origin === location.origin) {
          requestType = 'same-origin';
        } else {
          requestType = 'cross-origin';
        }

        for (let i = 0; i < cacheMaps.length; i++) {
          const map = cacheMaps[i];

          if (!map) continue;
          if (map.requestTypes && map.requestTypes.indexOf(requestType) === -1) {
            continue;
          }

          let newString;

          if (typeof map.match === 'function') {
            newString = map.match(url, request);
          } else {
            newString = urlString.replace(map.match, map.to);
          }

          if (newString && newString !== urlString) {
            return newString;
          }
        }
      }

      function fetchWithPreload(event) {
        if (!event.preloadResponse || navigationPreload !== true) {
          return fetch(event.request);
        }

        return event.preloadResponse.then(function (response) {
          return response || fetch(event.request);
        });
      }
    }

    function cachesMatch(request, cacheName) {
      return caches.match(request, {
        cacheName
      }).then(function (response) {
        if (isNotRedirectedResponse(response)) {
          return response;
        }

        // Fix already cached redirected responses
        return fixRedirectedResponse(response).then(function (fixedResponse) {
          return caches.open(cacheName).then(function (cache) {
            return cache.put(request, fixedResponse);
          }).then(function () {
            return fixedResponse;
          });
        });
      })
      // Return void if error happened (cache not found)
        .catch(function () {});
    }

    function applyCacheBust(asset, key) {
      const hasQuery = asset.indexOf('?') !== -1;
      return `${asset + (hasQuery ? '&' : '?')  }__uncache=${  encodeURIComponent(key)}`;
    }

    function isNavigateRequest(request) {
      return request.mode === 'navigate' || request.headers.get('Upgrade-Insecure-Requests') || (request.headers.get('Accept') || '').indexOf('text/html') !== -1;
    }

    function isNotRedirectedResponse(response) {
      return !response || !response.redirected || !response.ok || response.type === 'opaqueredirect';
    }

    // Based on https://github.com/GoogleChrome/sw-precache/pull/241/files#diff-3ee9060dc7a312c6a822cac63a8c630bR85
    function fixRedirectedResponse(response) {
      if (isNotRedirectedResponse(response)) {
        return Promise.resolve(response);
      }

      const body = 'body' in response ? Promise.resolve(response.body) : response.blob();

      return body.then(function (data) {
        return new Response(data, {
          headers: response.headers,
          status: response.status
        });
      });
    }

    function copyObject(original) {
      return Object.keys(original).reduce(function (result, key) {
        result[key] = original[key];
        return result;
      }, {});
    }

    function logGroup(title, assets) {
      console.groupCollapsed('[SW]:', title);

      assets.forEach(function (asset) {
        console.log('Asset:', asset);
      });

      console.groupEnd();
    }
    WebpackServiceWorker(__wpo, {
      loaders: {},
      cacheMaps: [
        {
          match(url) {
            if (url.pathname === location.pathname) {
              return;
            }

            return new URL("/", location);
          },
          to: null,
          requestTypes: ["navigate"],
        }
      ],
      navigationPreload: false,
    });
    module.exports = __webpack_require__("6872a71ed75a597694c7")
      

    /** */ }),

  /** */ "6872a71ed75a597694c7":
  /** */ (function(module, exports) {



    /** */ })

/** *** */ });