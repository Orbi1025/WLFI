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
      (e._sentryDebugIds[t] = "952f7e87-a736-4700-a555-46daf785b935"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-952f7e87-a736-4700-a555-46daf785b935"));
  })();
} catch (e) {}
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5649],
  {
    7156: (e, t, n) => {
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
      n.d(t, { b: () => s });
      var r = n(7620),
        o = n(7156),
        i = n(54568),
        a = "horizontal",
        l = ["horizontal", "vertical"],
        u = r.forwardRef((e, t) => {
          var n;
          let { decorative: r, orientation: u = a, ...s } = e,
            d = ((n = u), l.includes(n)) ? u : a;
          return (0, i.jsx)(o.sG.div, {
            "data-orientation": d,
            ...(r
              ? { role: "none" }
              : {
                  "aria-orientation": "vertical" === d ? d : void 0,
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
      n.d(t, { W: () => a });
      var r = n(7620),
        o = n(68499);
      let i = { some: 0, all: 1 };
      function a(
        e,
        { root: t, margin: n, amount: l, once: u = !1, initial: s = !1 } = {}
      ) {
        let [d, c] = (0, r.useState)(s);
        return (
          (0, r.useEffect)(() => {
            if (!e.current || (u && d)) return;
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
            })(e.current, () => (c(!0), u ? void 0 : () => c(!1)), r);
          }, [t, e, n, u, l]),
          d
        );
      }
    },
    17247: (e, t, n) => {
      n.d(t, { N: () => o });
      var r = n(7620),
        o = globalThis?.document ? r.useLayoutEffect : () => {};
    },
    17644: (e, t, n) => {
      n.d(t, { jH: () => i });
      var r = n(7620);
      n(54568);
      var o = r.createContext(void 0);
      function i(e) {
        let t = r.useContext(o);
        return e || t || "ltr";
      }
    },
    18400: (e, t, n) => {
      n.d(t, { C: () => a });
      var r = n(7620),
        o = n(49640),
        i = n(17247),
        a = (e) => {
          let { present: t, children: n } = e,
            a = (function (e) {
              var t, n;
              let [o, a] = r.useState(),
                u = r.useRef(null),
                s = r.useRef(e),
                d = r.useRef("none"),
                [c, f] =
                  ((t = e ? "mounted" : "unmounted"),
                  (n = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  r.useReducer((e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e;
                  }, t));
              return (
                r.useEffect(() => {
                  let e = l(u.current);
                  d.current = "mounted" === c ? e : "none";
                }, [c]),
                (0, i.N)(() => {
                  let t = u.current,
                    n = s.current;
                  if (n !== e) {
                    let r = d.current,
                      o = l(t);
                    e
                      ? f("MOUNT")
                      : "none" === o ||
                        (null == t ? void 0 : t.display) === "none"
                      ? f("UNMOUNT")
                      : n && r !== o
                      ? f("ANIMATION_OUT")
                      : f("UNMOUNT"),
                      (s.current = e);
                  }
                }, [e, f]),
                (0, i.N)(() => {
                  if (o) {
                    var e;
                    let t,
                      n =
                        null != (e = o.ownerDocument.defaultView) ? e : window,
                      r = (e) => {
                        let r = l(u.current).includes(e.animationName);
                        if (
                          e.target === o &&
                          r &&
                          (f("ANIMATION_END"), !s.current)
                        ) {
                          let e = o.style.animationFillMode;
                          (o.style.animationFillMode = "forwards"),
                            (t = n.setTimeout(() => {
                              "forwards" === o.style.animationFillMode &&
                                (o.style.animationFillMode = e);
                            }));
                        }
                      },
                      i = (e) => {
                        e.target === o && (d.current = l(u.current));
                      };
                    return (
                      o.addEventListener("animationstart", i),
                      o.addEventListener("animationcancel", r),
                      o.addEventListener("animationend", r),
                      () => {
                        n.clearTimeout(t),
                          o.removeEventListener("animationstart", i),
                          o.removeEventListener("animationcancel", r),
                          o.removeEventListener("animationend", r);
                      }
                    );
                  }
                  f("ANIMATION_END");
                }, [o, f]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(c),
                  ref: r.useCallback((e) => {
                    (u.current = e ? getComputedStyle(e) : null), a(e);
                  }, []),
                }
              );
            })(t),
            u =
              "function" == typeof n
                ? n({ present: a.isPresent })
                : r.Children.only(n),
            s = (0, o.s)(
              a.ref,
              (function (e) {
                var t, n;
                let r =
                    null ==
                    (t = Object.getOwnPropertyDescriptor(e.props, "ref"))
                      ? void 0
                      : t.get,
                  o = r && "isReactWarning" in r && r.isReactWarning;
                return o
                  ? e.ref
                  : (o =
                      (r =
                        null == (n = Object.getOwnPropertyDescriptor(e, "ref"))
                          ? void 0
                          : n.get) &&
                      "isReactWarning" in r &&
                      r.isReactWarning)
                  ? e.props.ref
                  : e.props.ref || e.ref;
              })(u)
            );
          return "function" == typeof n || a.isPresent
            ? r.cloneElement(u, { ref: s })
            : null;
        };
      function l(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      a.displayName = "Presence";
    },
    23611: (e, t, n) => {
      n.d(t, {
        UC: () => q,
        Y9: () => B,
        bL: () => W,
        l9: () => K,
        q7: () => H,
      });
      var r = n(7620),
        o = n(80482),
        i = n(91675),
        a = n(49640),
        l = n(29254),
        u = n(87076),
        s = n(7156),
        d = n(96589),
        c = n(60728),
        f = n(17644),
        p = n(54568),
        m = "Accordion",
        v = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [g, b, h] = (0, i.N)(m),
        [y, w] = (0, o.A)(m, [h, d.z3]),
        N = (0, d.z3)(),
        x = r.forwardRef((e, t) => {
          let { type: n, ...r } = e;
          return (0, p.jsx)(g.Provider, {
            scope: e.__scopeAccordion,
            children:
              "multiple" === n
                ? (0, p.jsx)(_, { ...r, ref: t })
                : (0, p.jsx)(R, { ...r, ref: t }),
          });
        });
      x.displayName = m;
      var [C, I] = y(m),
        [j, A] = y(m, { collapsible: !1 }),
        R = r.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: o,
              onValueChange: i = () => {},
              collapsible: a = !1,
              ...l
            } = e,
            [s, d] = (0, u.i)({
              prop: n,
              defaultProp: null != o ? o : "",
              onChange: i,
              caller: m,
            });
          return (0, p.jsx)(C, {
            scope: e.__scopeAccordion,
            value: r.useMemo(() => (s ? [s] : []), [s]),
            onItemOpen: d,
            onItemClose: r.useCallback(() => a && d(""), [a, d]),
            children: (0, p.jsx)(j, {
              scope: e.__scopeAccordion,
              collapsible: a,
              children: (0, p.jsx)(T, { ...l, ref: t }),
            }),
          });
        }),
        _ = r.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: o,
              onValueChange: i = () => {},
              ...a
            } = e,
            [l, s] = (0, u.i)({
              prop: n,
              defaultProp: null != o ? o : [],
              onChange: i,
              caller: m,
            }),
            d = r.useCallback(
              (e) =>
                s(function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  return [...t, e];
                }),
              [s]
            ),
            c = r.useCallback(
              (e) =>
                s(function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  return t.filter((t) => t !== e);
                }),
              [s]
            );
          return (0, p.jsx)(C, {
            scope: e.__scopeAccordion,
            value: l,
            onItemOpen: d,
            onItemClose: c,
            children: (0, p.jsx)(j, {
              scope: e.__scopeAccordion,
              collapsible: !0,
              children: (0, p.jsx)(T, { ...a, ref: t }),
            }),
          });
        }),
        [O, E] = y(m),
        T = r.forwardRef((e, t) => {
          let {
              __scopeAccordion: n,
              disabled: o,
              dir: i,
              orientation: u = "vertical",
              ...d
            } = e,
            c = r.useRef(null),
            m = (0, a.s)(c, t),
            h = b(n),
            y = "ltr" === (0, f.jH)(i),
            w = (0, l.m)(e.onKeyDown, (e) => {
              var t;
              if (!v.includes(e.key)) return;
              let n = e.target,
                r = h().filter((e) => {
                  var t;
                  return !(null == (t = e.ref.current) ? void 0 : t.disabled);
                }),
                o = r.findIndex((e) => e.ref.current === n),
                i = r.length;
              if (-1 === o) return;
              e.preventDefault();
              let a = o,
                l = i - 1,
                s = () => {
                  (a = o + 1) > l && (a = 0);
                },
                d = () => {
                  (a = o - 1) < 0 && (a = l);
                };
              switch (e.key) {
                case "Home":
                  a = 0;
                  break;
                case "End":
                  a = l;
                  break;
                case "ArrowRight":
                  "horizontal" === u && (y ? s() : d());
                  break;
                case "ArrowDown":
                  "vertical" === u && s();
                  break;
                case "ArrowLeft":
                  "horizontal" === u && (y ? d() : s());
                  break;
                case "ArrowUp":
                  "vertical" === u && d();
              }
              null == (t = r[a % i].ref.current) || t.focus();
            });
          return (0, p.jsx)(O, {
            scope: n,
            disabled: o,
            direction: i,
            orientation: u,
            children: (0, p.jsx)(g.Slot, {
              scope: n,
              children: (0, p.jsx)(s.sG.div, {
                ...d,
                "data-orientation": u,
                ref: m,
                onKeyDown: o ? void 0 : w,
              }),
            }),
          });
        }),
        S = "AccordionItem",
        [D, M] = y(S),
        k = r.forwardRef((e, t) => {
          let { __scopeAccordion: n, value: r, ...o } = e,
            i = E(S, n),
            a = I(S, n),
            l = N(n),
            u = (0, c.B)(),
            s = (r && a.value.includes(r)) || !1,
            f = i.disabled || e.disabled;
          return (0, p.jsx)(D, {
            scope: n,
            open: s,
            disabled: f,
            triggerId: u,
            children: (0, p.jsx)(d.bL, {
              "data-orientation": i.orientation,
              "data-state": F(s),
              ...l,
              ...o,
              ref: t,
              disabled: f,
              open: s,
              onOpenChange: (e) => {
                e ? a.onItemOpen(r) : a.onItemClose(r);
              },
            }),
          });
        });
      k.displayName = S;
      var P = "AccordionHeader",
        U = r.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...r } = e,
            o = E(m, n),
            i = M(P, n);
          return (0, p.jsx)(s.sG.h3, {
            "data-orientation": o.orientation,
            "data-state": F(i.open),
            "data-disabled": i.disabled ? "" : void 0,
            ...r,
            ref: t,
          });
        });
      U.displayName = P;
      var L = "AccordionTrigger",
        $ = r.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...r } = e,
            o = E(m, n),
            i = M(L, n),
            a = A(L, n),
            l = N(n);
          return (0, p.jsx)(g.ItemSlot, {
            scope: n,
            children: (0, p.jsx)(d.l9, {
              "aria-disabled": (i.open && !a.collapsible) || void 0,
              "data-orientation": o.orientation,
              id: i.triggerId,
              ...l,
              ...r,
              ref: t,
            }),
          });
        });
      $.displayName = L;
      var z = "AccordionContent",
        G = r.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...r } = e,
            o = E(m, n),
            i = M(z, n),
            a = N(n);
          return (0, p.jsx)(d.UC, {
            role: "region",
            "aria-labelledby": i.triggerId,
            "data-orientation": o.orientation,
            ...a,
            ...r,
            ref: t,
            style: {
              "--radix-accordion-content-height":
                "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width":
                "var(--radix-collapsible-content-width)",
              ...e.style,
            },
          });
        });
      function F(e) {
        return e ? "open" : "closed";
      }
      G.displayName = z;
      var W = x,
        H = k,
        B = U,
        K = $,
        q = G;
    },
    29254: (e, t, n) => {
      n.d(t, { m: () => r });
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
    },
    60728: (e, t, n) => {
      n.d(t, { B: () => u });
      var r,
        o = n(7620),
        i = n(17247),
        a =
          (r || (r = n.t(o, 2)))[" useId ".trim().toString()] || (() => void 0),
        l = 0;
      function u(e) {
        let [t, n] = o.useState(a());
        return (
          (0, i.N)(() => {
            e || n((e) => e ?? String(l++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    61773: (e, t, n) => {
      n.d(t, { default: () => o.a });
      var r = n(64930),
        o = n.n(r);
    },
    64930: (e, t, n) => {
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
    80482: (e, t, n) => {
      n.d(t, { A: () => a, q: () => i });
      var r = n(7620),
        o = n(54568);
      function i(e, t) {
        let n = r.createContext(t),
          i = (e) => {
            let { children: t, ...i } = e,
              a = r.useMemo(() => i, Object.values(i));
            return (0, o.jsx)(n.Provider, { value: a, children: t });
          };
        return (
          (i.displayName = e + "Provider"),
          [
            i,
            function (o) {
              let i = r.useContext(n);
              if (i) return i;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function a(e, t = []) {
        let n = [],
          i = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let o = n?.[e] || t;
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                [n, o]
              );
            };
          };
        return (
          (i.scopeName = e),
          [
            function (t, i) {
              let a = r.createContext(i),
                l = n.length;
              n = [...n, i];
              let u = (t) => {
                let { scope: n, children: i, ...u } = t,
                  s = n?.[e]?.[l] || a,
                  d = r.useMemo(() => u, Object.values(u));
                return (0, o.jsx)(s.Provider, { value: d, children: i });
              };
              return (
                (u.displayName = t + "Provider"),
                [
                  u,
                  function (n, o) {
                    let u = o?.[e]?.[l] || a,
                      s = r.useContext(u);
                    if (s) return s;
                    if (void 0 !== i) return i;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(i, ...t),
          ]
        );
      }
    },
    87076: (e, t, n) => {
      n.d(t, { i: () => l });
      var r,
        o = n(7620),
        i = n(17247),
        a =
          (r || (r = n.t(o, 2)))[" useInsertionEffect ".trim().toString()] ||
          i.N;
      function l({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r,
      }) {
        let [i, l, u] = (function ({ defaultProp: e, onChange: t }) {
            let [n, r] = o.useState(e),
              i = o.useRef(n),
              l = o.useRef(t);
            return (
              a(() => {
                l.current = t;
              }, [t]),
              o.useEffect(() => {
                i.current !== n && (l.current?.(n), (i.current = n));
              }, [n, i]),
              [n, r, l]
            );
          })({ defaultProp: t, onChange: n }),
          s = void 0 !== e,
          d = s ? e : i;
        {
          let t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            let e = t.current;
            if (e !== s) {
              let t = s ? "controlled" : "uncontrolled";
              console.warn(
                `${r} is changing from ${
                  e ? "controlled" : "uncontrolled"
                } to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
              );
            }
            t.current = s;
          }, [s, r]);
        }
        return [
          d,
          o.useCallback(
            (t) => {
              if (s) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && u.current?.(n);
              } else l(t);
            },
            [s, e, l, u]
          ),
        ];
      }
      Symbol("RADIX:SYNC_STATE");
    },
    96589: (e, t, n) => {
      n.d(t, {
        Ke: () => x,
        R6: () => w,
        UC: () => R,
        bL: () => j,
        l9: () => A,
        z3: () => v,
      });
      var r = n(7620),
        o = n(29254),
        i = n(80482),
        a = n(87076),
        l = n(17247),
        u = n(49640),
        s = n(7156),
        d = n(18400),
        c = n(60728),
        f = n(54568),
        p = "Collapsible",
        [m, v] = (0, i.A)(p),
        [g, b] = m(p),
        h = r.forwardRef((e, t) => {
          let {
              __scopeCollapsible: n,
              open: o,
              defaultOpen: i,
              disabled: l,
              onOpenChange: u,
              ...d
            } = e,
            [m, v] = (0, a.i)({
              prop: o,
              defaultProp: null != i && i,
              onChange: u,
              caller: p,
            });
          return (0, f.jsx)(g, {
            scope: n,
            disabled: l,
            contentId: (0, c.B)(),
            open: m,
            onOpenToggle: r.useCallback(() => v((e) => !e), [v]),
            children: (0, f.jsx)(s.sG.div, {
              "data-state": I(m),
              "data-disabled": l ? "" : void 0,
              ...d,
              ref: t,
            }),
          });
        });
      h.displayName = p;
      var y = "CollapsibleTrigger",
        w = r.forwardRef((e, t) => {
          let { __scopeCollapsible: n, ...r } = e,
            i = b(y, n);
          return (0, f.jsx)(s.sG.button, {
            type: "button",
            "aria-controls": i.contentId,
            "aria-expanded": i.open || !1,
            "data-state": I(i.open),
            "data-disabled": i.disabled ? "" : void 0,
            disabled: i.disabled,
            ...r,
            ref: t,
            onClick: (0, o.m)(e.onClick, i.onOpenToggle),
          });
        });
      w.displayName = y;
      var N = "CollapsibleContent",
        x = r.forwardRef((e, t) => {
          let { forceMount: n, ...r } = e,
            o = b(N, e.__scopeCollapsible);
          return (0, f.jsx)(d.C, {
            present: n || o.open,
            children: (e) => {
              let { present: n } = e;
              return (0, f.jsx)(C, { ...r, ref: t, present: n });
            },
          });
        });
      x.displayName = N;
      var C = r.forwardRef((e, t) => {
        let { __scopeCollapsible: n, present: o, children: i, ...a } = e,
          d = b(N, n),
          [c, p] = r.useState(o),
          m = r.useRef(null),
          v = (0, u.s)(t, m),
          g = r.useRef(0),
          h = g.current,
          y = r.useRef(0),
          w = y.current,
          x = d.open || c,
          C = r.useRef(x),
          j = r.useRef(void 0);
        return (
          r.useEffect(() => {
            let e = requestAnimationFrame(() => (C.current = !1));
            return () => cancelAnimationFrame(e);
          }, []),
          (0, l.N)(() => {
            let e = m.current;
            if (e) {
              (j.current = j.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName,
              }),
                (e.style.transitionDuration = "0s"),
                (e.style.animationName = "none");
              let t = e.getBoundingClientRect();
              (g.current = t.height),
                (y.current = t.width),
                C.current ||
                  ((e.style.transitionDuration = j.current.transitionDuration),
                  (e.style.animationName = j.current.animationName)),
                p(o);
            }
          }, [d.open, o]),
          (0, f.jsx)(s.sG.div, {
            "data-state": I(d.open),
            "data-disabled": d.disabled ? "" : void 0,
            id: d.contentId,
            hidden: !x,
            ...a,
            ref: v,
            style: {
              "--radix-collapsible-content-height": h
                ? "".concat(h, "px")
                : void 0,
              "--radix-collapsible-content-width": w
                ? "".concat(w, "px")
                : void 0,
              ...e.style,
            },
            children: x && i,
          })
        );
      });
      function I(e) {
        return e ? "open" : "closed";
      }
      var j = h,
        A = w,
        R = x;
    },
  },
]);
