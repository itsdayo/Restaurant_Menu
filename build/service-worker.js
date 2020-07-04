'use strict';
var precacheConfig = [
    [
      '/oladayo4351/Restaurant_Menu/index.html',
      '74f444a7aad235912e6165775f9b3fac',
    ],
    [
      '/oladayo4351/Restaurant_Menu/static/css/main.1853ac04.css',
      '9d1a2cca6287facdde7cfec2cdf65c61',
    ],
    [
      '/oladayo4351/Restaurant_Menu/static/js/main.d2a0c171.js',
      '14b52a62d3e27600877fde6ec12c965f',
    ],
    [
      '/oladayo4351/Restaurant_Menu/static/media/anchor.d2f8799a.svg',
      'd2f8799a13e6db2022d9a7de22776705',
    ],
    [
      '/oladayo4351/Restaurant_Menu/static/media/blanch_caps_inline-webfont.1461f8e9.woff',
      '1461f8e9d2084c70c00830348efe1766',
    ],
    [
      '/oladayo4351/Restaurant_Menu/static/media/blanch_caps_inline-webfont.73a576a8.eot',
      '73a576a8254aeafebcdc66fe9fd41ac8',
    ],
    [
      '/oladayo4351/Restaurant_Menu/static/media/blanch_caps_inline-webfont.7bbffda6.svg',
      '7bbffda6bcacac8360f0ee00bb03dc04',
    ],
    [
      '/oladayo4351/Restaurant_Menu/static/media/blanch_caps_inline-webfont.8345e1b3.ttf',
      '8345e1b3362c1d640f0f11b5aae1d5bc',
    ],
    [
      '/oladayo4351/Restaurant_Menu/static/media/haymaker-webfont.4c3fb584.eot',
      '4c3fb584d3f63821357c8a9cff97f360',
    ],
    [
      '/oladayo4351/Restaurant_Menu/static/media/haymaker-webfont.751e5627.woff',
      '751e56274d3ea1c651ea824f902bb987',
    ],
    [
      '/oladayo4351/Restaurant_Menu/static/media/haymaker-webfont.cf798e30.svg',
      'cf798e30eda73d84b25c4ae233fe5e21',
    ],
    [
      '/oladayo4351/Restaurant_Menu/static/media/haymaker-webfont.e9535f20.ttf',
      'e9535f20ca175cc3fdfe2816f7c47168',
    ],
  ],
  cacheName =
    'sw-precache-v3-sw-precache-webpack-plugin-' +
    (self.registration ? self.registration.scope : ''),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function (e, t) {
    var a = new URL(e);
    return '/' === a.pathname.slice(-1) && (a.pathname += t), a.toString();
  },
  cleanResponse = function (t) {
    return t.redirected
      ? ('body' in t ? Promise.resolve(t.body) : t.blob()).then(function (e) {
          return new Response(e, {
            headers: t.headers,
            status: t.status,
            statusText: t.statusText,
          });
        })
      : Promise.resolve(t);
  },
  createCacheKey = function (e, t, a, n) {
    var r = new URL(e);
    return (
      (n && r.pathname.match(n)) ||
        (r.search +=
          (r.search ? '&' : '') +
          encodeURIComponent(t) +
          '=' +
          encodeURIComponent(a)),
      r.toString()
    );
  },
  isPathWhitelisted = function (e, t) {
    if (0 === e.length) return !0;
    var a = new URL(t).pathname;
    return e.some(function (e) {
      return a.match(e);
    });
  },
  stripIgnoredUrlParameters = function (e, a) {
    var t = new URL(e);
    return (
      (t.hash = ''),
      (t.search = t.search
        .slice(1)
        .split('&')
        .map(function (e) {
          return e.split('=');
        })
        .filter(function (t) {
          return a.every(function (e) {
            return !e.test(t[0]);
          });
        })
        .map(function (e) {
          return e.join('=');
        })
        .join('&')),
      t.toString()
    );
  },
  hashParamName = '_sw-precache',
  urlsToCacheKeys = new Map(
    precacheConfig.map(function (e) {
      var t = e[0],
        a = e[1],
        n = new URL(t, self.location),
        r = createCacheKey(n, hashParamName, a, /\.\w{8}\./);
      return [n.toString(), r];
    })
  );
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function (e) {
      return e.map(function (e) {
        return e.url;
      });
    })
    .then(function (e) {
      return new Set(e);
    });
}
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function (n) {
        return setOfCachedUrls(n).then(function (a) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function (t) {
              if (!a.has(t)) {
                var e = new Request(t, { credentials: 'same-origin' });
                return fetch(e).then(function (e) {
                  if (!e.ok)
                    throw new Error(
                      'Request for ' +
                        t +
                        ' returned a response with status ' +
                        e.status
                    );
                  return cleanResponse(e).then(function (e) {
                    return n.put(t, e);
                  });
                });
              }
            })
          );
        });
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
}),
  self.addEventListener('activate', function (e) {
    var a = new Set(urlsToCacheKeys.values());
    e.waitUntil(
      caches
        .open(cacheName)
        .then(function (t) {
          return t.keys().then(function (e) {
            return Promise.all(
              e.map(function (e) {
                if (!a.has(e.url)) return t.delete(e);
              })
            );
          });
        })
        .then(function () {
          return self.clients.claim();
        })
    );
  }),
  self.addEventListener('fetch', function (t) {
    var a, e, n, r;
    'GET' === t.request.method &&
      ((a = stripIgnoredUrlParameters(
        t.request.url,
        ignoreUrlParametersMatching
      )),
      (n = 'index.html'),
      (e = urlsToCacheKeys.has(a)) ||
        ((a = addDirectoryIndex(a, n)), (e = urlsToCacheKeys.has(a))),
      (r = '/oladayo4351/Restaurant_Menu/index.html'),
      !e &&
        'navigate' === t.request.mode &&
        isPathWhitelisted(['^(?!\\/__).*'], t.request.url) &&
        ((a = new URL(r, self.location).toString()),
        (e = urlsToCacheKeys.has(a))),
      e &&
        t.respondWith(
          caches
            .open(cacheName)
            .then(function (e) {
              return e.match(urlsToCacheKeys.get(a)).then(function (e) {
                if (e) return e;
                throw Error(
                  'The cached response that was expected is missing.'
                );
              });
            })
            .catch(function (e) {
              return (
                console.warn(
                  'Couldn\'t serve response for "%s" from cache: %O',
                  t.request.url,
                  e
                ),
                fetch(t.request)
              );
            })
        ));
  });
