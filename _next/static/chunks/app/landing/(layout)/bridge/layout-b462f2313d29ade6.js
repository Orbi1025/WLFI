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
      (e._sentryDebugIds[t] = "c29405fa-fa03-4980-a476-3899d7ffbbc7"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-c29405fa-fa03-4980-a476-3899d7ffbbc7"));
  })();
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8929],
  {
    5023: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => c });
      var r = n(54568),
        o = n(27261),
        i = n.n(o),
        a = n(29768);
      let c = (e) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(i(), {
          className: (0, a.cn)(
            "tw-outline-none focus-visible:tw-shadow-button-focus-simple",
            t
          ),
          ...n,
        });
      };
    },
    11376: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => a });
      var r = n(7620),
        o = n(68499);
      let i = { some: 0, all: 1 };
      function a(
        e,
        { root: t, margin: n, amount: c, once: s = !1, initial: l = !1 } = {}
      ) {
        let [u, f] = (0, r.useState)(l);
        return (
          (0, r.useEffect)(() => {
            if (!e.current || (s && u)) return;
            let r = { root: (t && t.current) || void 0, margin: n, amount: c };
            return (function (
              e,
              t,
              { root: n, margin: r, amount: a = "some" } = {}
            ) {
              let c = (0, o.K)(e),
                s = new WeakMap(),
                l = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let n = s.get(e.target);
                      if (!!n !== e.isIntersecting)
                        if (e.isIntersecting) {
                          let n = t(e.target, e);
                          "function" == typeof n
                            ? s.set(e.target, n)
                            : l.unobserve(e.target);
                        } else
                          "function" == typeof n && (n(e), s.delete(e.target));
                    });
                  },
                  {
                    root: n,
                    rootMargin: r,
                    threshold: "number" == typeof a ? a : i[a],
                  }
                );
              return c.forEach((e) => l.observe(e)), () => l.disconnect();
            })(e.current, () => (f(!0), s ? void 0 : () => f(!1)), r);
          }, [t, e, n, s, c]),
          u
        );
      }
    },
    23228: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => r });
      let r = function (e) {
        var t;
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "header",
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
          o = document.querySelector(e);
        if (!o) return;
        let i = document.querySelector(n),
          a = null != (t = null == i ? void 0 : i.clientHeight) ? t : 0,
          c = o.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ behavior: "smooth", top: c - (a + r) });
      };
    },
    23493: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { AnimateInView: () => s });
      var r = n(54568),
        o = n(11376),
        i = n(80747),
        a = n(7620),
        c = n(29768);
      let s = (e) => {
        let {
            children: t,
            as: n = "div",
            type: s = "up",
            delay: l = 0,
            options: u = { amount: 0.1, once: !0 },
            className: f,
            ...d
          } = e,
          p = a.useRef(null),
          b = (0, o.W)(p, u),
          m = ((e) => {
            switch (e) {
              case "up":
              default:
                return { y: 40 };
              case "down":
                return { y: -40 };
              case "left":
                return { x: 40 };
              case "right":
                return { x: -40 };
              case "fade":
                return { opacity: 0 };
            }
          })(s),
          v = ["scale(".concat(0.95, ")")];
        void 0 !== m.y && v.unshift("translateY(".concat(m.y, "px)")),
          void 0 !== m.x && v.unshift("translateX(".concat(m.x, "px)"));
        let h = v.join(" "),
          y = i.P[n];
        return (0, r.jsx)(y, {
          animate: {
            opacity: +!!b,
            transform: b ? "scale(".concat(1, ")") : h,
          },
          className: (0, c.cn)("", f),
          initial: { opacity: 0, transform: h },
          ref: (e) => {
            p.current = e;
          },
          transition: { delay: l, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          ...d,
          children: t,
        });
      };
    },
    29768: (e, t, n) => {
      "use strict";
      n.d(t, { cn: () => i });
      var r = n(32987);
      let o = (0, n(60607).zu)({ prefix: "tw-" });
      function i() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return o((0, r.A)(t));
      }
    },
    32340: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 84833)),
        Promise.resolve().then(n.bind(n, 23493)),
        Promise.resolve().then(n.bind(n, 51166)),
        Promise.resolve().then(n.t.bind(n, 73970, 23));
    },
    51166: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => u });
      var r = n(54568),
        o = n(7620),
        i = n(62384),
        a = n(70095);
      let c = [],
        s = { width: "100%", height: "100%" },
        l = (0, o.forwardRef)(function (e, t) {
          var n;
          let {
              className: i,
              children: l,
              debounceTime: u = 300,
              ignoreDimensions: f = c,
              parentSizeStyles: d,
              enableDebounceLeadingCall: p = !0,
              resizeObserverPolyfill: b,
              ...m
            } = e,
            v = (0, o.useRef)(null),
            h = (0, o.useRef)(0),
            [y, w] = (0, o.useState)({ width: 0, height: 0, top: 0, left: 0 }),
            g = (0, o.useMemo)(() => {
              let e = Array.isArray(f) ? f : [f];
              return a(
                (t) => {
                  w((n) =>
                    Object.keys(n)
                      .filter((e) => n[e] !== t[e])
                      .every((t) => e.includes(t))
                      ? n
                      : t
                  );
                },
                u,
                { leading: p }
              );
            }, [u, p, f]);
          return (
            (0, o.useEffect)(() => {
              let e = new (b || window.ResizeObserver)((e) => {
                e.forEach((e) => {
                  var t;
                  let {
                    left: n,
                    top: r,
                    width: o,
                    height: i,
                  } = null != (t = null == e ? void 0 : e.contentRect) ? t : {};
                  h.current = window.requestAnimationFrame(() => {
                    g({ width: o, height: i, top: r, left: n });
                  });
                });
              });
              return (
                v.current && e.observe(v.current),
                () => {
                  window.cancelAnimationFrame(h.current),
                    e.disconnect(),
                    g.cancel();
                }
              );
            }, [g, b]),
            (0, r.jsx)("div", {
              style: { ...s, ...d },
              ref:
                ((n = [t, v]),
                (e) => {
                  n.forEach((t) => {
                    "function" == typeof t
                      ? t(e)
                      : null != t && (t.current = e);
                  });
                }),
              className: i,
              ...m,
              children: l({ ...y, ref: v.current, resize: g }),
            })
          );
        }),
        u = (0, o.forwardRef)((e, t) => {
          let {
              scene: n,
              style: a,
              onSplineMouseDown: c,
              onSplineMouseUp: s,
              onSplineMouseHover: u,
              onSplineKeyDown: f,
              onSplineKeyUp: d,
              onSplineStart: p,
              onSplineLookAt: b,
              onSplineFollow: m,
              onSplineScroll: v,
              onLoad: h,
              renderOnDemand: y = !0,
              wasmPath: w,
              children: g,
              ...S
            } = e,
            x = (0, o.useRef)(null),
            [j, O] = (0, o.useState)(!0),
            [E, D] = (0, o.useState)();
          if (E) throw E;
          return (
            (0, o.useEffect)(() => {
              let e;
              O(!0);
              let t = [
                { name: "mouseDown", cb: c },
                { name: "mouseUp", cb: s },
                { name: "mouseHover", cb: u },
                { name: "keyDown", cb: f },
                { name: "keyUp", cb: d },
                { name: "start", cb: p },
                { name: "lookAt", cb: b },
                { name: "follow", cb: m },
                { name: "scroll", cb: v },
              ];
              return (
                x.current &&
                  ((e = new i.l(x.current, { renderOnDemand: y, wasmPath: w })),
                  (async function () {
                    for (let r of (await e.load(n), t))
                      r.cb && e.addEventListener(r.name, r.cb);
                    O(!1), null == h || h(e);
                  })().catch((e) => {
                    D(e);
                  })),
                () => {
                  for (let n of t) n.cb && e.removeEventListener(n.name, n.cb);
                  e.dispose();
                }
              );
            }, [n]),
            (0, r.jsx)(l, {
              ref: t,
              parentSizeStyles: { overflow: "hidden", ...a },
              debounceTime: 50,
              ...S,
              children: () =>
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    j && g,
                    (0, r.jsx)("canvas", {
                      ref: x,
                      style: { display: j ? "none" : "block" },
                    }),
                  ],
                }),
            })
          );
        });
    },
    70095: (e, t, n) => {
      var r = 0 / 0,
        o = /^\s+|\s+$/g,
        i = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        s = parseInt,
        l = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
        u = "object" == typeof self && self && self.Object === Object && self,
        f = l || u || Function("return this")(),
        d = Object.prototype.toString,
        p = Math.max,
        b = Math.min,
        m = function () {
          return f.Date.now();
        };
      function v(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function h(e) {
        if ("number" == typeof e) return e;
        if (
          "symbol" == typeof (t = e) ||
          (t && "object" == typeof t && "[object Symbol]" == d.call(t))
        )
          return r;
        if (v(e)) {
          var t,
            n = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = v(n) ? n + "" : n;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(o, "");
        var l = a.test(e);
        return l || c.test(e) ? s(e.slice(2), l ? 2 : 8) : i.test(e) ? r : +e;
      }
      e.exports = function (e, t, n) {
        var r,
          o,
          i,
          a,
          c,
          s,
          l = 0,
          u = !1,
          f = !1,
          d = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function y(t) {
          var n = r,
            i = o;
          return (r = o = void 0), (l = t), (a = e.apply(i, n));
        }
        function w(e) {
          var n = e - s,
            r = e - l;
          return void 0 === s || n >= t || n < 0 || (f && r >= i);
        }
        function g() {
          var e,
            n,
            r,
            o = m();
          if (w(o)) return S(o);
          c = setTimeout(
            g,
            ((e = o - s), (n = o - l), (r = t - e), f ? b(r, i - n) : r)
          );
        }
        function S(e) {
          return ((c = void 0), d && r) ? y(e) : ((r = o = void 0), a);
        }
        function x() {
          var e,
            n = m(),
            i = w(n);
          if (((r = arguments), (o = this), (s = n), i)) {
            if (void 0 === c)
              return (l = e = s), (c = setTimeout(g, t)), u ? y(e) : a;
            if (f) return (c = setTimeout(g, t)), y(s);
          }
          return void 0 === c && (c = setTimeout(g, t)), a;
        }
        return (
          (t = h(t) || 0),
          v(n) &&
            ((u = !!n.leading),
            (i = (f = "maxWait" in n) ? p(h(n.maxWait) || 0, t) : i),
            (d = "trailing" in n ? !!n.trailing : d)),
          (x.cancel = function () {
            void 0 !== c && clearTimeout(c), (l = 0), (r = s = o = c = void 0);
          }),
          (x.flush = function () {
            return void 0 === c ? a : S(m());
          }),
          x
        );
      };
    },
    84833: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => a });
      var r = n(54568),
        o = n(5023),
        i = n(23228);
      function a(e) {
        let { disclaimerId: t = "disclaimer-1", number: n = 1 } = e,
          a = "#".concat(t);
        return (0, r.jsx)(o.N, {
          href: a,
          onClick: (e) => {
            e.preventDefault(), (0, i.U)(a);
          },
          children: (0, r.jsx)("sup", { children: n }),
        });
      }
    },
  },
  (e) => {
    e.O(0, [2635, 7261, 8745, 3970, 887, 4154, 747, 587, 1902, 7358], () =>
      e((e.s = 32340))
    ),
      (_N_E = e.O());
  },
]);
