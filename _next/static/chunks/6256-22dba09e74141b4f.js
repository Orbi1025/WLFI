try {
  !(function () {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
          ? self
          : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "5338df4e-9144-44cf-a958-ac4f6796bc0d"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-5338df4e-9144-44cf-a958-ac4f6796bc0d"));
  })();
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6256],
  {
    7156: (e, t, n) => {
      "use strict";
      n.d(t, { hO: () => u, sG: () => l });
      var r = n(7620),
        o = n(97509),
        i = n(79649),
        a = n(54568),
        l = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "select",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = (0, i.TL)(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              let { asChild: o, ...i } = e;
              return (
                "undefined" != typeof window &&
                  (window[Symbol.for("radix-ui")] = !0),
                (0, a.jsx)(o ? n : t, { ...i, ref: r })
              );
            });
          return (o.displayName = `Primitive.${t}`), { ...e, [t]: o };
        }, {});
      function u(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    7297: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => s });
      var r = n(7620),
        o = n(7156),
        i = n(54568),
        a = "horizontal",
        l = ["horizontal", "vertical"],
        u = r.forwardRef((e, t) => {
          var n;
          let { decorative: r, orientation: u = a, ...s } = e,
            c = ((n = u), l.includes(n)) ? u : a;
          return (0, i.jsx)(o.sG.div, {
            "data-orientation": c,
            ...(r
              ? { role: "none" }
              : {
                  "aria-orientation": "vertical" === c ? c : void 0,
                  role: "separator",
                }),
            ...s,
            ref: t,
          });
        });
      u.displayName = "Separator";
      var s = u;
    },
    11376: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => a });
      var r = n(7620),
        o = n(68499);
      let i = { some: 0, all: 1 };
      function a(
        e,
        { root: t, margin: n, amount: l, once: u = !1, initial: s = !1 } = {}
      ) {
        let [c, f] = (0, r.useState)(s);
        return (
          (0, r.useEffect)(() => {
            if (!e.current || (u && c)) return;
            let r = { root: (t && t.current) || void 0, margin: n, amount: l };
            return (function (
              e,
              t,
              { root: n, margin: r, amount: a = "some" } = {}
            ) {
              let l = (0, o.K)(e),
                u = new WeakMap(),
                s = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let n = u.get(e.target);
                      if (!!n !== e.isIntersecting)
                        if (e.isIntersecting) {
                          let n = t(e.target, e);
                          "function" == typeof n
                            ? u.set(e.target, n)
                            : s.unobserve(e.target);
                        } else
                          "function" == typeof n && (n(e), u.delete(e.target));
                    });
                  },
                  {
                    root: n,
                    rootMargin: r,
                    threshold: "number" == typeof a ? a : i[a],
                  }
                );
              return l.forEach((e) => s.observe(e)), () => s.disconnect();
            })(e.current, () => (f(!0), u ? void 0 : () => f(!1)), r);
          }, [t, e, n, u, l]),
          c
        );
      }
    },
    51166: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => c });
      var r = n(54568),
        o = n(7620),
        i = n(62384),
        a = n(70095);
      let l = [],
        u = { width: "100%", height: "100%" },
        s = (0, o.forwardRef)(function (e, t) {
          var n;
          let {
              className: i,
              children: s,
              debounceTime: c = 300,
              ignoreDimensions: f = l,
              parentSizeStyles: d,
              enableDebounceLeadingCall: p = !0,
              resizeObserverPolyfill: v,
              ...b
            } = e,
            m = (0, o.useRef)(null),
            y = (0, o.useRef)(0),
            [h, g] = (0, o.useState)({ width: 0, height: 0, top: 0, left: 0 }),
            w = (0, o.useMemo)(() => {
              let e = Array.isArray(f) ? f : [f];
              return a(
                (t) => {
                  g((n) =>
                    Object.keys(n)
                      .filter((e) => n[e] !== t[e])
                      .every((t) => e.includes(t))
                      ? n
                      : t
                  );
                },
                c,
                { leading: p }
              );
            }, [c, p, f]);
          return (
            (0, o.useEffect)(() => {
              let e = new (v || window.ResizeObserver)((e) => {
                e.forEach((e) => {
                  var t;
                  let {
                    left: n,
                    top: r,
                    width: o,
                    height: i,
                  } = null != (t = null == e ? void 0 : e.contentRect) ? t : {};
                  y.current = window.requestAnimationFrame(() => {
                    w({ width: o, height: i, top: r, left: n });
                  });
                });
              });
              return (
                m.current && e.observe(m.current),
                () => {
                  window.cancelAnimationFrame(y.current),
                    e.disconnect(),
                    w.cancel();
                }
              );
            }, [w, v]),
            (0, r.jsx)("div", {
              style: { ...u, ...d },
              ref:
                ((n = [t, m]),
                (e) => {
                  n.forEach((t) => {
                    "function" == typeof t
                      ? t(e)
                      : null != t && (t.current = e);
                  });
                }),
              className: i,
              ...b,
              children: s({ ...h, ref: m.current, resize: w }),
            })
          );
        }),
        c = (0, o.forwardRef)((e, t) => {
          let {
              scene: n,
              style: a,
              onSplineMouseDown: l,
              onSplineMouseUp: u,
              onSplineMouseHover: c,
              onSplineKeyDown: f,
              onSplineKeyUp: d,
              onSplineStart: p,
              onSplineLookAt: v,
              onSplineFollow: b,
              onSplineScroll: m,
              onLoad: y,
              renderOnDemand: h = !0,
              wasmPath: g,
              children: w,
              ...S
            } = e,
            j = (0, o.useRef)(null),
            [O, E] = (0, o.useState)(!0),
            [x, D] = (0, o.useState)();
          if (x) throw x;
          return (
            (0, o.useEffect)(() => {
              let e;
              E(!0);
              let t = [
                { name: "mouseDown", cb: l },
                { name: "mouseUp", cb: u },
                { name: "mouseHover", cb: c },
                { name: "keyDown", cb: f },
                { name: "keyUp", cb: d },
                { name: "start", cb: p },
                { name: "lookAt", cb: v },
                { name: "follow", cb: b },
                { name: "scroll", cb: m },
              ];
              return (
                j.current &&
                  ((e = new i.l(j.current, { renderOnDemand: h, wasmPath: g })),
                  (async function () {
                    for (let r of (await e.load(n), t))
                      r.cb && e.addEventListener(r.name, r.cb);
                    E(!1), null == y || y(e);
                  })().catch((e) => {
                    D(e);
                  })),
                () => {
                  for (let n of t) n.cb && e.removeEventListener(n.name, n.cb);
                  e.dispose();
                }
              );
            }, [n]),
            (0, r.jsx)(s, {
              ref: t,
              parentSizeStyles: { overflow: "hidden", ...a },
              debounceTime: 50,
              ...S,
              children: () =>
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    O && w,
                    (0, r.jsx)("canvas", {
                      ref: j,
                      style: { display: O ? "none" : "block" },
                    }),
                  ],
                }),
            })
          );
        });
    },
    61773: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => o.a });
      var r = n(64930),
        o = n.n(r);
    },
    64930: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return u;
          },
          getImageProps: function () {
            return l;
          },
        });
      let r = n(21510),
        o = n(57258),
        i = n(73970),
        a = r._(n(50170));
      function l(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let u = i.Image;
    },
    70095: (e, t, n) => {
      var r = 0 / 0,
        o = /^\s+|\s+$/g,
        i = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        u = parseInt,
        s = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
        c = "object" == typeof self && self && self.Object === Object && self,
        f = s || c || Function("return this")(),
        d = Object.prototype.toString,
        p = Math.max,
        v = Math.min,
        b = function () {
          return f.Date.now();
        };
      function m(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function y(e) {
        if ("number" == typeof e) return e;
        if (
          "symbol" == typeof (t = e) ||
          (t && "object" == typeof t && "[object Symbol]" == d.call(t))
        )
          return r;
        if (m(e)) {
          var t,
            n = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = m(n) ? n + "" : n;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(o, "");
        var s = a.test(e);
        return s || l.test(e) ? u(e.slice(2), s ? 2 : 8) : i.test(e) ? r : +e;
      }
      e.exports = function (e, t, n) {
        var r,
          o,
          i,
          a,
          l,
          u,
          s = 0,
          c = !1,
          f = !1,
          d = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function h(t) {
          var n = r,
            i = o;
          return (r = o = void 0), (s = t), (a = e.apply(i, n));
        }
        function g(e) {
          var n = e - u,
            r = e - s;
          return void 0 === u || n >= t || n < 0 || (f && r >= i);
        }
        function w() {
          var e,
            n,
            r,
            o = b();
          if (g(o)) return S(o);
          l = setTimeout(
            w,
            ((e = o - u), (n = o - s), (r = t - e), f ? v(r, i - n) : r)
          );
        }
        function S(e) {
          return ((l = void 0), d && r) ? h(e) : ((r = o = void 0), a);
        }
        function j() {
          var e,
            n = b(),
            i = g(n);
          if (((r = arguments), (o = this), (u = n), i)) {
            if (void 0 === l)
              return (s = e = u), (l = setTimeout(w, t)), c ? h(e) : a;
            if (f) return (l = setTimeout(w, t)), h(u);
          }
          return void 0 === l && (l = setTimeout(w, t)), a;
        }
        return (
          (t = y(t) || 0),
          m(n) &&
            ((c = !!n.leading),
            (i = (f = "maxWait" in n) ? p(y(n.maxWait) || 0, t) : i),
            (d = "trailing" in n ? !!n.trailing : d)),
          (j.cancel = function () {
            void 0 !== l && clearTimeout(l), (s = 0), (r = u = o = l = void 0);
          }),
          (j.flush = function () {
            return void 0 === l ? a : S(b());
          }),
          j
        );
      };
    },
  },
]);
