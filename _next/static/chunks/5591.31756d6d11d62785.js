try {
  !(function () {
    var t =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
          ? self
          : {},
      r = new t.Error().stack;
    r &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[r] = "47496634-374b-4b93-965e-aa8c1f2e305d"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-47496634-374b-4b93-965e-aa8c1f2e305d"));
  })();
} catch (t) {}
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5591],
  {
    6035: (t, r, e) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "workAsyncStorageInstance", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let a = (0, e(59113).createAsyncLocalStorage)();
    },
    37684: (t, r, e) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let a = e(21510)._(e(92644));
      function n(t, r) {
        var e;
        let n = {};
        "function" == typeof t && (n.loader = t);
        let o = { ...n, ...r };
        return (0, a.default)({
          ...o,
          modules: null == (e = o.loadableGenerated) ? void 0 : e.modules,
        });
      }
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    45591: (t, r, e) => {
      e.r(r), e.d(r, { default: () => g });
      var a = e(54568),
        n = e(91039),
        o = e(36410);
      let l = {
          ambientLight: "#fff",
          arcLength: 0.9,
          arcTime: 1200,
          atmosphereAltitude: 0.15,
          atmosphereColor: "#FFFFFF",
          autoRotate: !0,
          autoRotateSpeed: 0.5,
          directionalLeftLight: "#ffffff",
          directionalTopLight: "#ffffff",
          emissive: "#fbbf24",
          emissiveIntensity: 0.001,
          globeColor: "#44403c",
          initialPosition: { lat: 22.3193, lng: 114.1694 },
          maxRings: 3,
          pointLight: "#fbbf24",
          pointSize: 3,
          polygonColor: "#a9a29d",
          rings: 1,
          shininess: 0.8,
          showAtmosphere: !1,
        },
        d = ["#fbbf24", "#f59e0b", "#d97706"],
        s = [
          {
            arcAlt: 0.1,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: -22.9068,
            endLng: -43.1729,
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
          },
          {
            arcAlt: 0.2,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 3.139,
            endLng: 101.6869,
            order: 1,
            startLat: 28.6139,
            startLng: 77.209,
          },
          {
            arcAlt: 0.5,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: -1.303396,
            endLng: 36.852443,
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
          },
          {
            arcAlt: 0.2,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 35.6762,
            endLng: 139.6503,
            order: 2,
            startLat: 1.3521,
            startLng: 103.8198,
          },
          {
            arcAlt: 0.3,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 3.139,
            endLng: 101.6869,
            order: 2,
            startLat: 51.5072,
            startLng: -0.1276,
          },
          {
            arcAlt: 0.3,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 36.162809,
            endLng: -115.119411,
            order: 2,
            startLat: -15.785493,
            startLng: -47.909029,
          },
          {
            arcAlt: 0.3,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 22.3193,
            endLng: 114.1694,
            order: 3,
            startLat: -33.8688,
            startLng: 151.2093,
          },
          {
            arcAlt: 0.3,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 40.7128,
            endLng: -74.006,
            order: 3,
            startLat: 21.3099,
            startLng: -157.8581,
          },
          {
            arcAlt: 0.3,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 51.5072,
            endLng: -0.1276,
            order: 3,
            startLat: -6.2088,
            startLng: 106.8456,
          },
          {
            arcAlt: 0.5,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: -15.595412,
            endLng: -56.05918,
            order: 4,
            startLat: 11.986597,
            startLng: 8.571831,
          },
          {
            arcAlt: 0.7,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 22.3193,
            endLng: 114.1694,
            order: 4,
            startLat: -34.6037,
            startLng: -58.3816,
          },
          {
            arcAlt: 0.1,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 48.8566,
            endLng: -2.3522,
            order: 4,
            startLat: 51.5072,
            startLng: -0.1276,
          },
          {
            arcAlt: 0.3,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 51.5072,
            endLng: -0.1276,
            order: 5,
            startLat: 14.5995,
            startLng: 120.9842,
          },
          {
            arcAlt: 0.2,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: -33.8688,
            endLng: 151.2093,
            order: 5,
            startLat: 1.3521,
            startLng: 103.8198,
          },
          {
            arcAlt: 0.2,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 48.8566,
            endLng: -2.3522,
            order: 5,
            startLat: 34.0522,
            startLng: -118.2437,
          },
          {
            arcAlt: 0.7,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 1.094136,
            endLng: -63.34546,
            order: 6,
            startLat: -15.432563,
            startLng: 28.315853,
          },
          {
            arcAlt: 0.1,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 35.6762,
            endLng: 139.6503,
            order: 6,
            startLat: 37.5665,
            startLng: 126.978,
          },
          {
            arcAlt: 0.3,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 51.5072,
            endLng: -0.1276,
            order: 6,
            startLat: 22.3193,
            startLng: 114.1694,
          },
          {
            arcAlt: 0.1,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: -15.595412,
            endLng: -56.05918,
            order: 7,
            startLat: -19.885592,
            startLng: -43.951191,
          },
          {
            arcAlt: 0.1,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 52.52,
            endLng: 13.405,
            order: 7,
            startLat: 48.8566,
            startLng: -2.3522,
          },
          {
            arcAlt: 0.2,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 34.0522,
            endLng: -118.2437,
            order: 7,
            startLat: 52.52,
            startLng: 13.405,
          },
          {
            arcAlt: 0.2,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: -33.936138,
            endLng: 18.436529,
            order: 8,
            startLat: -8.833221,
            startLng: 13.264837,
          },
          {
            arcAlt: 0.2,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 52.3676,
            endLng: 4.9041,
            order: 8,
            startLat: 49.2827,
            startLng: -123.1207,
          },
          {
            arcAlt: 0.5,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 40.7128,
            endLng: -74.006,
            order: 8,
            startLat: 1.3521,
            startLng: 103.8198,
          },
          {
            arcAlt: 0.2,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 34.0522,
            endLng: -118.2437,
            order: 9,
            startLat: 51.5072,
            startLng: -0.1276,
          },
          {
            arcAlt: 0.7,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: -22.9068,
            endLng: -43.1729,
            order: 9,
            startLat: 22.3193,
            startLng: 114.1694,
          },
          {
            arcAlt: 0.5,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: -34.6037,
            endLng: -58.3816,
            order: 9,
            startLat: 1.3521,
            startLng: 103.8198,
          },
          {
            arcAlt: 0.7,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 28.6139,
            endLng: 77.209,
            order: 10,
            startLat: -22.9068,
            startLng: -43.1729,
          },
          {
            arcAlt: 0.3,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 31.2304,
            endLng: 121.4737,
            order: 10,
            startLat: 34.0522,
            startLng: -118.2437,
          },
          {
            arcAlt: 0.3,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 52.3676,
            endLng: 4.9041,
            order: 10,
            startLat: -6.2088,
            startLng: 106.8456,
          },
          {
            arcAlt: 0.2,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 34.0522,
            endLng: -118.2437,
            order: 11,
            startLat: 41.9028,
            startLng: 12.4964,
          },
          {
            arcAlt: 0.2,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 31.2304,
            endLng: 121.4737,
            order: 11,
            startLat: -6.2088,
            startLng: 106.8456,
          },
          {
            arcAlt: 0.2,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 1.3521,
            endLng: 103.8198,
            order: 11,
            startLat: 22.3193,
            startLng: 114.1694,
          },
          {
            arcAlt: 0.1,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 37.7749,
            endLng: -122.4194,
            order: 12,
            startLat: 34.0522,
            startLng: -118.2437,
          },
          {
            arcAlt: 0.2,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 22.3193,
            endLng: 114.1694,
            order: 12,
            startLat: 35.6762,
            startLng: 139.6503,
          },
          {
            arcAlt: 0.3,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 34.0522,
            endLng: -118.2437,
            order: 12,
            startLat: 22.3193,
            startLng: 114.1694,
          },
          {
            arcAlt: 0.3,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 22.3193,
            endLng: 114.1694,
            order: 13,
            startLat: 52.52,
            startLng: 13.405,
          },
          {
            arcAlt: 0.3,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 35.6762,
            endLng: 139.6503,
            order: 13,
            startLat: 11.986597,
            startLng: 8.571831,
          },
          {
            arcAlt: 0.1,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: -34.6037,
            endLng: -58.3816,
            order: 13,
            startLat: -22.9068,
            startLng: -43.1729,
          },
          {
            arcAlt: 0.3,
            color: d[Math.floor(Math.random() * (d.length - 1))],
            endLat: 21.395643,
            endLng: 39.883798,
            order: 14,
            startLat: -33.936138,
            startLng: 18.436529,
          },
        ],
        L = (0, n.default)(
          async () =>
            Promise.all([
              e.e(4198),
              e.e(6295),
              e.e(7388),
              e.e(9235),
              e.e(2099),
              e.e(5517),
              e.e(7213),
              e.e(2918),
            ])
              .then(e.bind(e, 82918))
              .then((t) => t.World),
          { loadableGenerated: { webpack: () => [82918] }, ssr: !1 }
        );
      function g() {
        return (0, o.q)() ? (0, a.jsx)(L, { data: s, globeConfig: l }) : null;
      }
    },
    49669: (t, r, e) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "workAsyncStorage", {
          enumerable: !0,
          get: function () {
            return a.workAsyncStorageInstance;
          },
        });
      let a = e(6035);
    },
    59113: (t, r) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        !(function (t, r) {
          for (var e in r)
            Object.defineProperty(t, e, { enumerable: !0, get: r[e] });
        })(r, {
          bindSnapshot: function () {
            return l;
          },
          createAsyncLocalStorage: function () {
            return o;
          },
          createSnapshot: function () {
            return d;
          },
        });
      let e = Object.defineProperty(
        Error(
          "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
        ),
        "__NEXT_ERROR_CODE",
        { value: "E504", enumerable: !1, configurable: !0 }
      );
      class a {
        disable() {
          throw e;
        }
        getStore() {}
        run() {
          throw e;
        }
        exit() {
          throw e;
        }
        enterWith() {
          throw e;
        }
        static bind(t) {
          return t;
        }
      }
      let n = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function o() {
        return n ? new n() : new a();
      }
      function l(t) {
        return n ? n.bind(t) : a.bind(t);
      }
      function d() {
        return n
          ? n.snapshot()
          : function (t, ...r) {
              return t(...r);
            };
      }
    },
    60931: (t, r, e) => {
      function a(t) {
        let { reason: r, children: e } = t;
        return e;
      }
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        e(13159);
    },
    91039: (t, r, e) => {
      e.d(r, { default: () => n.a });
      var a = e(37684),
        n = e.n(a);
    },
    92644: (t, r, e) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let a = e(54568),
        n = e(7620),
        o = e(60931);
      function l(t) {
        return { default: t && "default" in t ? t.default : t };
      }
      e(96670);
      let d = {
          loader: () => Promise.resolve(l(() => null)),
          loading: null,
          ssr: !0,
        },
        s = function (t) {
          let r = { ...d, ...t },
            e = (0, n.lazy)(() => r.loader().then(l)),
            s = r.loading;
          function L(t) {
            let l = s
                ? (0, a.jsx)(s, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              d = !r.ssr || !!r.loading,
              L = d ? n.Suspense : n.Fragment,
              g = r.ssr
                ? (0, a.jsxs)(a.Fragment, {
                    children: [null, (0, a.jsx)(e, { ...t })],
                  })
                : (0, a.jsx)(o.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, a.jsx)(e, { ...t }),
                  });
            return (0, a.jsx)(L, {
              ...(d ? { fallback: l } : {}),
              children: g,
            });
          }
          return (L.displayName = "LoadableComponent"), L;
        };
    },
    96670: (t, r, e) => {
      function a(t) {
        let { moduleIds: r } = t;
        return null;
      }
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "PreloadChunks", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        e(54568),
        e(97509),
        e(49669),
        e(32252);
    },
  },
]);
