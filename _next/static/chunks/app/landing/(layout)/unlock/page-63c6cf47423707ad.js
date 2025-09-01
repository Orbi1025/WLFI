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
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "1416b83c-8858-4668-9f7a-b1068acb0c67"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-1416b83c-8858-4668-9f7a-b1068acb0c67"));
  })();
} catch (t) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5731],
  {
    5256: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => r });
      var a = s(54568),
        l = s(50781),
        n = s(35277);
      function r(t) {
        let {
          icon: e,
          iconType: s = "featured",
          title: r,
          subtitle: i,
          action: o,
          ...c
        } = t;
        return (0, a.jsxs)("div", {
          className: "tw-flex tw-flex-col tw-items-center tw-justify-center",
          ...c,
          children: [
            "featured" === s &&
              (0, a.jsx)(n.A, {
                icon: e,
                size: "default",
                variant: "secondary",
              }),
            "decorative" === s && (0, a.jsx)(l.A, { icon: e }),
            (0, a.jsxs)("div", {
              className: "tw-mt-4 tw-flex tw-flex-col tw-items-center tw-gap-1",
              children: [
                r &&
                  (0, a.jsx)("span", {
                    className:
                      "tw-text-center tw-font-semibold tw-text-primary",
                    children: r,
                  }),
                i &&
                  (0, a.jsx)("span", {
                    className:
                      "tw-text-center tw-font-normal tw-text-secondary",
                    children: i,
                  }),
              ],
            }),
            o &&
              (0, a.jsx)("div", {
                className:
                  "tw-mt-6 tw-flex tw-w-full tw-items-center tw-justify-center tw-gap-3",
                children: o,
              }),
          ],
        });
      }
    },
    5823: (t, e, s) => {
      "use strict";
      s.d(e, { P: () => i, z: () => r });
      var a = s(54568),
        l = s(7620);
      let n = l.createContext(void 0),
        r = (t) => {
          let [e, s] = l.useState();
          return (
            l.useEffect(() => {
              let t = () => s(window.matchMedia("(pointer: coarse)").matches);
              return (
                t(),
                window.addEventListener("resize", t),
                () => window.removeEventListener("resize", t)
              );
            }, []),
            (0, a.jsx)(n, { value: e, ...t })
          );
        },
        i = () => {
          let t = l.useContext(n);
          return null != t && t;
        };
    },
    12346: (t, e, s) => {
      "use strict";
      s.d(e, { k: () => i });
      var a = s(54568),
        l = s(36922),
        n = s(7620),
        r = s(29768);
      let i = n.forwardRef((t, e) => {
        let {
          className: s,
          value: n,
          indicatorClassName: i,
          indicatorStyle: o,
          ...c
        } = t;
        return (0, a.jsx)(l.bL, {
          className: (0, r.cn)(
            "tw-relative tw-h-2 tw-w-full tw-overflow-hidden tw-rounded-full tw-bg-primary/20",
            s
          ),
          ref: e,
          ...c,
          children: (0, a.jsx)(l.C1, {
            className: (0, r.cn)(
              "tw-size-full tw-flex-1 tw-bg-primary tw-transition-all",
              i
            ),
            style: {
              transform: "translateX(-".concat(100 - (n || 0), "%)"),
              ...o,
            },
          }),
        });
      });
      i.displayName = l.bL.displayName;
    },
    23194: (t, e, s) => {
      "use strict";
      s.d(e, { AM: () => i, Wv: () => o, hl: () => c });
      var a = s(54568),
        l = s(38360),
        n = s(7620),
        r = s(29768);
      let i = l.bL,
        o = l.l9;
      l.Mz;
      let c = n.forwardRef((t, e) => {
        let {
          className: s,
          children: n,
          align: i = "center",
          sideOffset: o = 4,
          ...c
        } = t;
        return (0, a.jsx)(l.ZL, {
          children: (0, a.jsxs)(l.UC, {
            align: i,
            className: (0, r.cn)(
              "tw-relative tw-z-[500] tw-w-full tw-rounded-md tw-bg-alpha-white/80 tw-p-3 tw-text-xs tw-font-normal tw-text-tooltip tw-outline-none data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
              s
            ),
            ref: e,
            sideOffset: o,
            ...c,
            children: [
              (0, a.jsx)("div", {
                className:
                  "tw-absolute tw-inset-0 -tw-z-10 tw-rounded-md tw-backdrop-blur-2xl",
              }),
              n,
            ],
          }),
        });
      });
      c.displayName = l.UC.displayName;
    },
    23493: (t, e, s) => {
      "use strict";
      s.r(e), s.d(e, { AnimateInView: () => o });
      var a = s(54568),
        l = s(11376),
        n = s(80747),
        r = s(7620),
        i = s(29768);
      let o = (t) => {
        let {
            children: e,
            as: s = "div",
            type: o = "up",
            delay: c = 0,
            options: w = { amount: 0.1, once: !0 },
            className: d,
            ...m
          } = t,
          u = r.useRef(null),
          x = (0, l.W)(u, w),
          p = ((t) => {
            switch (t) {
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
          })(o),
          f = ["scale(".concat(0.95, ")")];
        void 0 !== p.y && f.unshift("translateY(".concat(p.y, "px)")),
          void 0 !== p.x && f.unshift("translateX(".concat(p.x, "px)"));
        let h = f.join(" "),
          g = n.P[s];
        return (0, a.jsx)(g, {
          animate: {
            opacity: +!!x,
            transform: x ? "scale(".concat(1, ")") : h,
          },
          className: (0, i.cn)("", d),
          initial: { opacity: 0, transform: h },
          ref: (t) => {
            u.current = t;
          },
          transition: { delay: c, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          ...m,
          children: e,
        });
      };
    },
    25060: (t, e, s) => {
      "use strict";
      s.d(e, { yf: () => a }), s(68266);
      var a = s(223),
        l = s(37605),
        n = s(82559),
        r = s(5074);
      a.extend(r), a.extend(l), a.extend(n);
    },
    25892: (t, e, s) => {
      "use strict";
      s.d(e, { j: () => i });
      var a = s(54568),
        l = s(32629),
        n = s(77804),
        r = s(29768);
      function i(t) {
        let {
          value: e,
          symbol: s,
          valueUsd: i,
          valueClassName: o,
          valueUsdClassName: c,
          forceNumberFlow: w,
          iconSize: d = 16,
        } = t;
        return (0, a.jsxs)("span", {
          className:
            "tw-flex tw-flex-col tw-items-end tw-gap-1 md:tw-flex-row-reverse md:tw-items-center",
          children: [
            (0, a.jsxs)("span", {
              className: (0, r.cn)(
                "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-font-medium tw-text-primary",
                o
              ),
              children: [
                (0, a.jsx)(n.xz, { size: d, symbol: s }),
                (0, a.jsx)(l.G, {
                  compact: !0,
                  forceNumberFlow: w,
                  symbol: s,
                  value: e,
                }),
              ],
            }),
            i &&
              Number(i) > 0 &&
              (0, a.jsx)("span", {
                className: (0, r.cn)(
                  "tw-flex tw-items-center tw-gap-1 tw-text-xs tw-font-normal tw-text-tertiary",
                  c
                ),
                children: (0, a.jsx)(l.G, {
                  forceNumberFlow: w,
                  symbol: "USD",
                  symbolClassName: "tw-mr-0",
                  value: i,
                }),
              }),
          ],
        });
      }
    },
    27761: (t, e, s) => {
      "use strict";
      s.d(e, { w: () => h });
      var a = s(54568),
        l = s(23194),
        n = s(67754),
        r = s(7620),
        i = s(29768);
      let o = n.Kq,
        c = n.bL,
        w = n.l9,
        d = r.forwardRef((t, e) => {
          let { className: s, children: l, sideOffset: r = 4, ...o } = t;
          return (0, a.jsxs)(n.UC, {
            className: (0, i.cn)(
              "tw-relative tw-z-[500] tw-w-full tw-overflow-hidden tw-rounded-md tw-bg-alpha-white/80 tw-p-3 tw-text-xs tw-font-normal tw-text-tooltip tw-outline-none tw-animate-in tw-fade-in-0 tw-zoom-in-95 data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=closed]:tw-zoom-out-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
              s
            ),
            ref: e,
            sideOffset: r,
            ...o,
            children: [
              (0, a.jsx)("div", {
                className:
                  "tw-absolute tw-inset-0 -tw-z-10 tw-rounded-md tw-backdrop-blur-2xl",
              }),
              l,
            ],
          });
        });
      d.displayName = n.UC.displayName;
      var m = s(5823);
      let u = (t) =>
          (0, m.P)() ? (0, a.jsx)(l.AM, { ...t }) : (0, a.jsx)(c, { ...t }),
        x = (t) =>
          (0, m.P)() ? (0, a.jsx)(l.Wv, { ...t }) : (0, a.jsx)(w, { ...t }),
        p = (t) =>
          (0, m.P)()
            ? (0, a.jsx)(l.hl, {
                ...t,
                className:
                  "tw-z-[10003] tw-max-w-xs tw-whitespace-normal tw-break-words tw-text-left tw-shadow-lg",
              })
            : (0, a.jsx)(d, {
                ...t,
                className: (0, i.cn)(
                  "tw-z-[10003] tw-max-w-xs tw-whitespace-normal tw-break-words tw-text-left tw-shadow-lg",
                  t.className
                ),
              });
      var f = s(4451);
      function h(t) {
        let {
            trigger: e,
            content: s,
            triggerProps: l = {},
            contentProps: n = {},
            asChild: r = !0,
            skipTouch: i = !1,
            onOpenChange: c,
          } = t,
          w = (0, m.P)();
        return i && w
          ? e || (0, a.jsx)(f.A.info, { className: "tw-size-4" })
          : (0, a.jsx)(o, {
              children: (0, a.jsxs)(u, {
                delayDuration: 0,
                onOpenChange: c,
                children: [
                  (0, a.jsx)(x, {
                    ...l,
                    asChild: r,
                    children:
                      e || (0, a.jsx)(f.A.info, { className: "tw-size-4" }),
                  }),
                  s && (0, a.jsx)(p, { ...n, children: s }),
                ],
              }),
            });
      }
    },
    30215: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => o, Q: () => i });
      var a = s(60007),
        l = s(75597),
        n = s(7620),
        r = s(14884);
      let i = (t) => {
          var e, s;
          let { chain: n, transport: r } = t,
            i = {
              chainId: n.id,
              ensAddress:
                null == (s = n.contracts) || null == (e = s.ensRegistry)
                  ? void 0
                  : e.address,
              name: n.name,
            };
          if ("fallback" === r.type) {
            let t = r.transports.filter((t) => {
              let { value: e } = t;
              return null == e ? void 0 : e.url;
            });
            if (0 === t.length) return;
            return new a.S(
              t.map((t) => {
                let { value: e } = t;
                return new l.B(null == e ? void 0 : e.url, i);
              })
            );
          }
          if (r.url) return new l.B(r.url, i);
        },
        o = function () {
          let { chainId: t } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = (0, r.t)({ chainId: t });
          return n.useMemo(() => (e ? i(e) : void 0), [e]);
        };
    },
    32629: (t, e, s) => {
      "use strict";
      s.d(e, { G: () => c });
      var a = s(54568),
        l = s(54301),
        n = s(30787),
        r = s(29768);
      let i = ["", "K", "M", "B", "T", "P", "E", "Z", "Y"];
      function o(t) {
        let {
            value: e,
            visibleDecimals: s,
            roundDown: n,
            compactThreshold: r,
          } = t,
          { prefix: o, postfix: c } = ((t) => {
            let {
                value: e,
                visibleDecimals: s = 2,
                roundDown: a,
                compactThreshold: n,
              } = t,
              r = (0, l.cG)(e),
              o = r.toFixed(0).length;
            n && Number(e) <= n && (o = 0);
            let c = Math.min(Math.floor(o ? (o - 1) / 3 : 0), i.length - 1),
              w = i[c],
              d = (0, l.I7)(r, 3 * c).toNumber();
            a && (d = Math.trunc(Number(d) * 10 ** s) / 10 ** s);
            let m = new Intl.NumberFormat("en-US", {
                maximumFractionDigits: s,
                minimumFractionDigits: s,
              }).format(d),
              u = m;
            if (m.includes(".")) {
              let t = m.split("."),
                e = t[0] || "",
                s = t[1];
              (null == s ? void 0 : s.split("").every((t) => "0" === t)) &&
                (u = e);
            }
            return { postfix: 0 === c ? "" : w, prefix: u };
          })({
            compactThreshold: r,
            roundDown: n,
            value: e,
            visibleDecimals: s,
          });
        return (0, a.jsxs)(a.Fragment, { children: [o, c] });
      }
      function c(t) {
        let {
            value: e,
            symbol: s,
            visibleDecimals: i,
            compact: c,
            percent: w,
            symbolClassName: d,
            roundDown: m,
            compactThreshold: u,
            forceSubscriptZeros: x,
            className: p,
            compactSymbol: f,
            forceNumberFlow: h,
            ...g
          } = t,
          j = w ? 100 * Number(e) : Number(e),
          v = (null == s ? void 0 : s.toLowerCase()) === "usd",
          N = null != i ? i : 0;
        0 === j
          ? (N = 0)
          : void 0 === i && (N = Math.abs(j) >= 1 || w || "USD" === s ? 2 : 7);
        let y = 10 ** -N,
          b = 0 !== j && Math.abs(j) < Math.abs(y),
          k = b && !h ? y : j,
          A = !1 !== c && (c || j > 99999),
          I = (0, l.cG)(e).toFixed(),
          L = /^0\.00+/.test(I),
          [, P] = k.toString().split("."),
          C = !P,
          E = !!(P && !Number(P)),
          S = C || E ? 0 : N;
        m && !A && (k = Math.trunc(Number(k) * 10 ** N) / 10 ** N);
        let F = x || (L && !v),
          M = F ? Math.max(1, N) : S,
          _ = {
            maximumFractionDigits: S,
            minimumFractionDigits: C || E ? 0 : Math.min(2, S),
          },
          z =
            F && !A
              ? (function (t) {
                  let e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 4,
                    s =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0.001,
                    a = parseFloat(t);
                  if (Number.isNaN(a)) return t;
                  if (a >= s) {
                    let [s, a] = t.split(".");
                    if (a) {
                      var l;
                      let t =
                        (null == (l = a.match(/^0+/)) ? void 0 : l[0]) || "";
                      return ""
                        .concat(s, ".")
                        .concat(t)
                        .concat(a.replace(t, "").slice(0, e));
                    }
                    return s;
                  }
                  let n = t.match(/^0\.(0+)/);
                  if (!n) return t;
                  let r = n[1].length,
                    i = t.slice(n[0].length),
                    o = String(r)
                      .split("")
                      .map((t) => String.fromCharCode(8320 + parseInt(t, 10)))
                      .join("");
                  return "0.0".concat(o).concat(i.slice(0, e));
                })(I, M)
              : new Intl.NumberFormat("en-US", _).format(k);
        return (0, a.jsxs)("span", {
          className: (0, r.cn)("tw-inline-flex tw-flex-row tw-items-center", p),
          ...g,
          children: [
            b &&
              !F &&
              (0, a.jsx)("span", {
                className: (0, r.cn)("tw-mr-1", d),
                children: "<",
              }),
            (null == s ? void 0 : s.toLowerCase()) === "usd" &&
              !w &&
              (0, a.jsx)("span", {
                className: (0, r.cn)(!f && "tw-mr-1", d),
                children: "$",
              }),
            h
              ? (0, a.jsx)(n.Ay, { format: _, isolate: !0, value: k })
              : A
              ? (0, a.jsx)(o, {
                  compactThreshold: u,
                  roundDown: m,
                  value: k,
                  visibleDecimals: N,
                })
              : z,
            w &&
              (0, a.jsx)("span", {
                className: (0, r.cn)("tw-ml-1", d),
                children: "%",
              }),
            (null == s ? void 0 : s.toLowerCase()) !== "usd" &&
              void 0 !== s &&
              (0, a.jsx)("span", {
                className: (0, r.cn)("tw-ml-1", d),
                children: s,
              }),
          ],
        });
      }
    },
    35277: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => w });
      var a = s(54568),
        l = s(615),
        n = s(7620),
        r = s(4451),
        i = s(29768);
      let o = (0, l.F)("tw-inline-flex tw-items-center tw-justify-center", {
          defaultVariants: { size: "default", variant: "default" },
          variants: {
            size: {
              default: "tw-size-10 tw-rounded-lg",
              lg: "tw-size-12 tw-rounded-lg",
              sm: "tw-size-8 tw-rounded-md",
              xs: "tw-size-6 tw-rounded-sm",
            },
            variant: {
              default: "tw-bg-background-brand-solid tw-text-icon-brand",
              destructive: "tw-bg-error tw-text-icon-error",
              secondary: "tw-bg-background-secondary-solid tw-text-icon-gray",
              success: "tw-bg-success tw-text-icon-success",
              warning: "tw-bg-warning tw-text-icon-warning",
            },
          },
        }),
        c = n.forwardRef((t, e) => {
          let {
            className: s,
            variant: l,
            size: n,
            icon: c = r.A.info,
            ...w
          } = t;
          return (0, a.jsx)("div", {
            "aria-hidden": "true",
            className: (0, i.cn)(o({ size: n, variant: l }), s),
            ref: e,
            ...w,
            children: (0, a.jsx)(c, {
              className: (0, i.cn)(
                {
                  default: "tw-size-6",
                  lg: "tw-size-7",
                  sm: "tw-size-5",
                  xs: "tw-size-4",
                }[n || "default"]
              ),
            }),
          });
        });
      c.displayName = "FeaturedIcon";
      let w = c;
    },
    36470: (t, e, s) => {
      "use strict";
      s.d(e, { default: () => tO });
      var a = s(54568),
        l = s(55775),
        n = s(13432),
        r = s(29548),
        i = s(3233),
        o = s(2845),
        c = s(63353),
        w = s(20874),
        d = s(29768);
      function m(t) {
        let { className: e } = t;
        return (0, a.jsxs)(c.Zp, {
          className: (0, d.cn)("tw-w-full tw-h-fit lg:tw-max-w-md", e),
          children: [
            (0, a.jsxs)(c.Wu, {
              className:
                "tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-tertiary tw-px-4 tw-py-6 tw-gap-4",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "tw-relative tw-flex tw-flex-row tw-items-center tw-justify-center",
                  style: { height: 300, width: 300 },
                  children: [
                    (0, a.jsx)(w.E, {
                      className: "tw-absolute tw-inset-0 tw-rounded-full",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "tw-absolute tw-inset-0 tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2",
                      children: [
                        (0, a.jsx)(w.E, { className: "tw-h-8 tw-w-24" }),
                        (0, a.jsx)(w.E, { className: "tw-h-4 tw-w-32" }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "tw-flex tw-items-center tw-space-x-8 tw-text-tertiary tw-text-base",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "tw-flex tw-items-center tw-space-x-2",
                      children: [
                        (0, a.jsx)(w.E, {
                          className: "tw-h-2 tw-w-2 tw-rounded-full",
                        }),
                        (0, a.jsx)(w.E, { className: "tw-h-4 tw-w-16" }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "tw-flex tw-items-center tw-space-x-2",
                      children: [
                        (0, a.jsx)(w.E, {
                          className: "tw-h-2 tw-w-2 tw-rounded-full",
                        }),
                        (0, a.jsx)(w.E, { className: "tw-h-4 tw-w-16" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(c.wL, {
              className:
                "tw-flex tw-items-center tw-justify-center tw-px-4 tw-py-2",
              children: (0, a.jsx)(w.E, { className: "tw-h-10 tw-w-full" }),
            }),
          ],
        });
      }
      var u = s(25060),
        x = s(60844),
        p = s(80747),
        f = s(26643),
        h = s(61773),
        g = s(27261),
        j = s.n(g),
        v = s(7620),
        N = s(60357),
        y = s(40476),
        b = s(8230),
        k = s(27761),
        A = s(26080),
        I = s(32583);
      function L() {
        let t = (0, x.Xr)(I.b);
        return (0, a.jsx)(k.w, {
          content: (0, a.jsx)("div", {
            className: "tw-select-text tw-cursor-text",
            children:
              "The total amount of tokens that have become available for you to claim.",
          }),
          contentProps: {
            className: "tw-select-text tw-cursor-text",
            onClick: (t) => t.stopPropagation(),
            onMouseDown: (t) => t.stopPropagation(),
          },
          onOpenChange: (e) => {
            e &&
              t({
                eventName: A.zm.VIEW_TOOLTIP,
                properties: { funnel: "landing-unlock", tooltip: "unlocked" },
              });
          },
          triggerProps: {
            onClick: (t) => t.stopPropagation(),
            onMouseDown: (t) => t.stopPropagation(),
          },
        });
      }
      var P = s(40615),
        C = s(32629),
        E = s(77804),
        S = s(64148),
        F = s(47227),
        M = s(4451),
        _ = s(37570),
        z = s(32305);
      function D(t) {
        let { formattedTemplates: e, setActiveIndex: s } = t,
          { isMobile: l } = (0, _.Q)(),
          r = e.length > 0;
        return (0, a.jsx)("div", {
          className: "tw-flex tw-flex-col tw-gap-2",
          children: r
            ? e.map((t, e) =>
                l
                  ? (0, a.jsxs)(
                      "div",
                      {
                        className:
                          "tw-bg-background-secondary tw-border-b tw-border-border",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "tw-flex tw-justify-between tw-items-center tw-gap-2 tw-p-4 tw-pt-6",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "tw-flex tw-items-center tw-gap-2 tw-text-primary tw-font-semibold",
                                children: [
                                  (0, a.jsx)(E.xz, {
                                    size: 24,
                                    symbol: n.Pv.WLFI_SYMBOL,
                                  }),
                                  (0, a.jsx)(C.G, {
                                    symbol: n.Pv.WLFI_SYMBOL,
                                    value: t.templateAllocationFormatted,
                                  }),
                                ],
                              }),
                              (0, a.jsx)(S.E, {
                                radius: "sm",
                                size: "sm",
                                variant: t.statusVariant,
                                children: t.status,
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "tw-flex tw-flex-col tw-gap-4 tw-px-4 tw-pb-4",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "tw-flex tw-items-center tw-justify-between tw-gap-1",
                                children: [
                                  (0, a.jsxs)("span", {
                                    className:
                                      "tw-text-tertiary tw-text-sm tw-text-left tw-flex tw-items-center tw-gap-1",
                                    children: ["Unlocked ", (0, a.jsx)(L, {})],
                                  }),
                                  (0, a.jsxs)("span", {
                                    className:
                                      "tw-flex tw-gap-1 tw-text-primary tw-font-medium tw-text-sm",
                                    children: [
                                      (0, a.jsx)(E.xz, {
                                        size: 16,
                                        symbol: n.Pv.WLFI_SYMBOL,
                                      }),
                                      (0, a.jsx)(C.G, {
                                        forceNumberFlow: !0,
                                        symbol: n.Pv.WLFI_SYMBOL,
                                        value: t.unlockedAmountFormatted,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "tw-flex tw-items-center tw-justify-between tw-gap-1",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "tw-text-tertiary tw-text-sm tw-text-left tw-flex tw-items-center tw-gap-1",
                                    children: "Starts on",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "tw-flex tw-gap-1 tw-text-primary tw-font-medium tw-text-sm",
                                    children: t.startTimestampFormatted,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "tw-flex tw-items-center tw-justify-between tw-gap-1",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "tw-text-tertiary tw-text-sm tw-text-left tw-flex tw-items-center tw-gap-1",
                                    children: "Cliff",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "tw-flex tw-gap-1 tw-text-primary tw-font-medium tw-text-sm",
                                    children: t.cliffTimestampFormatted,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "tw-flex tw-items-center tw-justify-between tw-gap-1",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "tw-text-tertiary tw-text-sm tw-text-left tw-flex tw-items-center tw-gap-1",
                                    children: "Ends on",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "tw-flex tw-gap-1 tw-text-primary tw-font-medium tw-text-sm",
                                    children: t.endTimestampFormatted,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "tw-px-4 tw-my-2 tw-mb-6",
                            children: (0, a.jsx)(F.Button, {
                              className: "tw-w-full ",
                              onClick: () => s(e),
                              variant: "secondary",
                              children: "See unlock details",
                            }),
                          }),
                        ],
                      },
                      "category-".concat(e, "-").concat(t.startTimestamp)
                    )
                  : (0, a.jsxs)(
                      "button",
                      {
                        className:
                          "tw-bg-background-secondary tw-border tw-border-border tw-rounded-lg hover:tw-bg-background-hover tw-cursor-pointer",
                        onClick: () => s(e),
                        type: "button",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "tw-flex tw-justify-between tw-items-center tw-gap-2 tw-p-4",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "tw-flex tw-items-center tw-gap-2 tw-text-primary tw-font-semibold",
                                children: [
                                  (0, a.jsx)(E.xz, {
                                    size: 24,
                                    symbol: n.Pv.WLFI_SYMBOL,
                                  }),
                                  (0, a.jsx)(C.G, {
                                    symbol: n.Pv.WLFI_SYMBOL,
                                    value: t.templateAllocationFormatted,
                                  }),
                                  (0, a.jsx)(S.E, {
                                    radius: "sm",
                                    size: "sm",
                                    variant: t.statusVariant,
                                    children: t.status,
                                  }),
                                ],
                              }),
                              (0, a.jsx)(M.A.chevronRight, {
                                className:
                                  "tw-size-5 tw-text-foreground-button-ghost-secondary",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "tw-grid tw-grid-cols-2 tw-gap-x-4 tw-gap-y-5 tw-px-4 tw-pb-4",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "tw-flex tw-flex-col tw-gap-1",
                                children: [
                                  (0, a.jsxs)("span", {
                                    className:
                                      "tw-text-tertiary tw-text-sm tw-text-left tw-flex tw-items-center tw-gap-1",
                                    children: ["Unlocked ", (0, a.jsx)(L, {})],
                                  }),
                                  (0, a.jsxs)("span", {
                                    className:
                                      "tw-flex tw-gap-1 tw-text-primary tw-text-sm tw-font-medium",
                                    children: [
                                      (0, a.jsx)(E.xz, {
                                        size: 16,
                                        symbol: n.Pv.WLFI_SYMBOL,
                                      }),
                                      (0, a.jsx)(C.G, {
                                        forceNumberFlow: !0,
                                        symbol: n.Pv.WLFI_SYMBOL,
                                        value: t.unlockedAmountFormatted,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "tw-flex tw-flex-col tw-gap-1",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "tw-text-tertiary tw-text-sm tw-text-left tw-flex tw-items-center tw-gap-1",
                                    children: "Starts on",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "tw-flex tw-gap-1 tw-text-primary tw-text-sm tw-font-medium",
                                    children: t.startTimestampFormatted,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "tw-flex tw-flex-col tw-gap-1",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "tw-text-tertiary tw-text-sm tw-text-left tw-flex tw-items-center tw-gap-1",
                                    children: "Cliff",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "tw-flex tw-gap-1 tw-text-primary tw-text-sm tw-font-medium",
                                    children: t.cliffTimestampFormatted,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "tw-flex tw-flex-col tw-gap-1",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "tw-text-tertiary tw-text-sm tw-text-left tw-flex tw-items-center tw-gap-1",
                                    children: "Ends on",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "tw-flex tw-gap-1 tw-text-primary tw-text-sm tw-font-medium",
                                    children: t.endTimestampFormatted,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      "category-".concat(e, "-").concat(t.startTimestamp)
                    )
              )
            : (0, a.jsxs)("div", {
                className:
                  "tw-flex tw-items-center tw-gap-1 tw-max-w-sm tw-mx-auto tw-flex-col tw-justify-center tw-mb-6",
                children: [
                  (0, a.jsx)(P.A, {
                    icon: M.A.info,
                    iconClassName: "tw-size-10",
                    variant: "warning",
                  }),
                  (0, a.jsx)("span", {
                    className: "tw-font-semibold tw-text-center",
                    children: "You don't have any unlocking schedules",
                  }),
                  (0, a.jsx)("span", {
                    className: "tw-text-tertiary tw-text-sm tw-text-center",
                    children:
                      "Your unlocking schedules are not yet configured, so unlocking isn't available at this time.",
                  }),
                  (0, a.jsx)(F.Button, {
                    asChild: !0,
                    className: "tw-mt-3 tw-w-fit",
                    size: "fit",
                    variant: "link-secondary",
                    children: (0, a.jsx)(j(), {
                      href: z.C.routes.contact,
                      children: "Need help? Contact us",
                    }),
                  }),
                ],
              }),
        });
      }
      var T = s(83957),
        O = s(34503),
        W = s(17296),
        B = s(45155),
        R = s(7110),
        U = s(57617),
        Y = s(62721),
        G = s(90264);
      let V = (t) => {
        let { active: e, payload: s } = t;
        if (e && s && s.length) {
          let t = s.at(0).payload;
          return (0, a.jsx)("div", {
            className:
              "tw-mx-4 tw-box-border tw-flex tw-max-w-sm tw-flex-col tw-overflow-hidden tw-rounded-md tw-bg-alpha-white/80 tw-p-3 tw-text-xs tw-font-normal tw-text-tooltip tw-shadow-tooltip tw-backdrop-blur-xl",
            style: { left: "auto", position: "relative", transform: "none" },
            children: (0, a.jsxs)("span", {
              className: "tw-flex tw-flex-col tw-gap-2",
              children: [
                (0, a.jsx)("span", {
                  className: "tw-text-tooltip tw-text-xs",
                  children: t.date,
                }),
                (0, a.jsx)(G.Separator, {
                  className: "tw-bg-border-secondary",
                }),
                (0, a.jsxs)("span", {
                  className:
                    "tw-flex tw-w-full tw-items-center tw-justify-between tw-gap-2 tw-text-xs tw-text-primary",
                  children: [
                    (0, a.jsx)("span", {
                      className: "tw-text-tooltip tw-text-xs tw-font-normal",
                      children: "Unlocked",
                    }),
                    (0, a.jsxs)("span", {
                      className: "tw-flex tw-items-center tw-gap-1",
                      children: [
                        (0, a.jsx)(E.xz, {
                          size: 16,
                          symbol: n.Pv.WLFI_SYMBOL,
                        }),
                        (0, a.jsx)(C.G, {
                          className:
                            "tw-text-primary tw-text-sm tw-font-medium",
                          symbol: n.Pv.WLFI_SYMBOL,
                          symbolClassName:
                            "tw-text-primary tw-text-sm tw-font-medium",
                          value: t.unlockedAmount,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        return null;
      };
      function J(t) {
        let { startDate: e, endDate: s, allocation: l } = t,
          n = v.useMemo(
            () =>
              (function (t) {
                let { startDate: e, endDate: s, allocation: a } = t,
                  l = (0, u.yf)(e),
                  n = (0, u.yf)(s).diff(l, "day"),
                  r = [];
                for (let t = 0; t <= n; t++) {
                  let e = l.add(t, "day"),
                    s = 0 === n ? 0 : t / n,
                    i = a * s,
                    o = 100 * s;
                  r.push({
                    date: e.format("MMM DD, YYYY"),
                    percentage: o,
                    timestamp: e.valueOf(),
                    unlockedAmount: i,
                  });
                }
                return r;
              })({ allocation: l, endDate: s, startDate: e }),
            [e, s, l]
          ),
          r = (0, u.yf)(e),
          i = (0, u.yf)(s),
          o = v.useMemo(() => [r.valueOf(), i.valueOf()], [r, i]),
          c = v.useMemo(() => [0, l], [l]);
        return (0, a.jsx)(Y.at, {
          className: "tw-aspect-auto tw-h-[300px] tw-w-full",
          config: {},
          style: { touchAction: "none" },
          children: (0, a.jsxs)(T.X, {
            accessibilityLayer: !0,
            data: n,
            children: [
              (0, a.jsx)("defs", {
                children: (0, a.jsxs)("linearGradient", {
                  id: "unlockingGradient",
                  x1: "0",
                  x2: "0",
                  y1: "0",
                  y2: "1",
                  children: [
                    (0, a.jsx)("stop", {
                      offset: "0%",
                      stopColor: "hsl(var(--utility-brand-600))",
                      stopOpacity: 0.3,
                    }),
                    (0, a.jsx)("stop", {
                      offset: "100%",
                      stopColor: "hsl(var(--utility-brand-600))",
                      stopOpacity: 0,
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(O.d, {
                stroke: "hsl(var(--border-tertiary))",
                vertical: !1,
              }),
              (0, a.jsx)(W.W, {
                axisLine: !1,
                dataKey: "timestamp",
                domain: o,
                fontSize: 12,
                scale: "time",
                tickFormatter: (t) => (0, u.yf)(t).format("MMM DD"),
                tickLine: !1,
                type: "number",
              }),
              (0, a.jsx)(B.h, {
                axisLine: !1,
                dataKey: "unlockedAmount",
                domain: c,
                fontSize: 12,
                orientation: "left",
                tickFormatter: (t) =>
                  new Intl.NumberFormat("en-US", {
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  }).format(t),
                tickLine: !1,
                type: "number",
              }),
              (0, a.jsx)(Y.II, {
                content: (0, a.jsx)(V, { allocation: l }),
                cursor: { strokeDasharray: "3 3" },
                position: { x: 10, y: 0 },
              }),
              (0, a.jsx)(R.G, {
                dataKey: "unlockedAmount",
                fill: "url(#unlockingGradient)",
                stroke: "none",
                type: "linear",
              }),
              (0, a.jsx)(U.N, {
                dataKey: "unlockedAmount",
                dot: !1,
                stroke: "hsl(var(--utility-brand-600))",
                strokeWidth: 2,
                type: "linear",
              }),
            ],
          }),
        });
      }
      var X = s(61846);
      let H = {
          day: { label: "day", multiplier: 1 },
          hour: { label: "hour", multiplier: 24 },
          minute: { label: "min", multiplier: 1440 },
          second: { label: "sec", multiplier: 86400 },
          week: { label: "week", multiplier: 1 / 7 },
        },
        q = ["second", "minute", "hour", "day", "week"];
      function K(t) {
        let {
            ratePerDay: e,
            symbol: s = "WLFI",
            onPeriodChange: l,
            defaultPeriod: n = "day",
            className: r,
          } = t,
          i = q.indexOf(n),
          [o, c] = v.useState(i >= 0 ? i : 3),
          w = q[o],
          m = H[w],
          u = e / m.multiplier;
        return (0, a.jsx)("div", {
          className: (0, d.cn)("tw-flex tw-items-center", r),
          children:
            e > 0 && Number.isFinite(e)
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(f.N, {
                      initial: !1,
                      mode: "wait",
                      children: (0, a.jsxs)(
                        p.P.div,
                        {
                          className: "tw-flex tw-items-center tw-gap-1",
                          layout: !0,
                          transition: { duration: 0.3, ease: "easeOut" },
                          children: [
                            "Per",
                            (0, a.jsxs)("div", {
                              className: "tw-flex tw-items-center tw-gap-px",
                              children: [
                                (0, a.jsx)(F.Button, {
                                  "aria-label": "Next time period",
                                  onClick: () => {
                                    let t = 0 === o ? q.length - 1 : o - 1;
                                    c(t);
                                    let s = q[t],
                                      a = e / H[s].multiplier;
                                    null == l || l(s, a);
                                  },
                                  size: "fit",
                                  variant: "ghost-secondary",
                                  children: (0, a.jsx)(M.A.chevronDown, {
                                    className: "tw-size-5",
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "tw-text-primary tw-text-sm tw-font-medium tw-min-w-11 tw-text-center",
                                  children: m.label,
                                }),
                                (0, a.jsx)(F.Button, {
                                  "aria-label": "Next time period",
                                  onClick: () => {
                                    let t = o === q.length - 1 ? 0 : o + 1;
                                    c(t);
                                    let s = q[t],
                                      a = e / H[s].multiplier;
                                    null == l || l(s, a);
                                  },
                                  size: "fit",
                                  variant: "ghost-secondary",
                                  children: (0, a.jsx)(M.A.chevronUp, {
                                    className: "tw-size-5",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        m.label
                      ),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "tw-flex tw-items-center tw-gap-1 tw-ml-0.5 tw-min-w-0",
                      children: [
                        (0, a.jsx)(E.xz, {
                          className: "tw-flex-shrink-0",
                          size: 16,
                          symbol: s,
                        }),
                        (0, a.jsx)("div", {
                          className: "tw-min-w-0 tw-flex-1",
                          children: (0, a.jsx)(C.G, {
                            compact: !0,
                            forceNumberFlow: !0,
                            symbol: s,
                            symbolClassName: "tw-text-primary",
                            value: u,
                            visibleDecimals:
                              "second" === w ? 4 : 2 * ("minute" === w),
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : "N/A",
        });
      }
      function Z(t) {
        let { content: e } = t,
          s = (0, x.Xr)(I.b);
        return (0, a.jsx)(k.w, {
          content: (0, a.jsx)("div", {
            className: "tw-select-text tw-cursor-text",
            children:
              e ||
              "The amount of tokens you can claim from this unlocking schedule right now.",
          }),
          contentProps: {
            className: "tw-select-text tw-cursor-text",
            onClick: (t) => t.stopPropagation(),
            onMouseDown: (t) => t.stopPropagation(),
          },
          onOpenChange: (t) => {
            t &&
              s({
                eventName: A.zm.VIEW_TOOLTIP,
                properties: {
                  funnel: "landing-unlock",
                  tooltip: "available-to-claim",
                },
              });
          },
          triggerProps: {
            onClick: (t) => t.stopPropagation(),
            onMouseDown: (t) => t.stopPropagation(),
          },
        });
      }
      function Q() {
        let t = (0, x.Xr)(I.b);
        return (0, a.jsx)(k.w, {
          content: (0, a.jsx)("div", {
            className: "tw-select-text tw-cursor-text",
            children:
              "The amount of tokens you’ve already claimed (transferred to your wallet).",
          }),
          contentProps: {
            className: "tw-select-text tw-cursor-text",
            onClick: (t) => t.stopPropagation(),
            onMouseDown: (t) => t.stopPropagation(),
          },
          onOpenChange: (e) => {
            e &&
              t({
                eventName: A.zm.VIEW_TOOLTIP,
                properties: { funnel: "landing-unlock", tooltip: "claimed" },
              });
          },
          triggerProps: {
            onClick: (t) => t.stopPropagation(),
            onMouseDown: (t) => t.stopPropagation(),
          },
        });
      }
      function $() {
        let t = (0, x.Xr)(I.b);
        return (0, a.jsx)(k.w, {
          content: (0, a.jsx)("div", {
            className: "tw-select-text tw-cursor-text",
            children:
              "The amount of tokens remaining to claim from this unlocking schedule.",
          }),
          contentProps: {
            className: "tw-select-text tw-cursor-text",
            onClick: (t) => t.stopPropagation(),
            onMouseDown: (t) => t.stopPropagation(),
          },
          onOpenChange: (e) => {
            e &&
              t({
                eventName: A.zm.VIEW_TOOLTIP,
                properties: {
                  funnel: "landing-unlock",
                  tooltip: "remaining-to-claim",
                },
              });
          },
          triggerProps: {
            onClick: (t) => t.stopPropagation(),
            onMouseDown: (t) => t.stopPropagation(),
          },
        });
      }
      function tt() {
        let t = (0, x.Xr)(I.b);
        return (0, a.jsx)(k.w, {
          content: (0, a.jsx)("div", {
            className: "tw-select-text tw-cursor-text",
            children:
              "The maximum amount of tokens you can unlock from this unlocking schedule.",
          }),
          contentProps: {
            className: "tw-select-text tw-cursor-text",
            onClick: (t) => t.stopPropagation(),
            onMouseDown: (t) => t.stopPropagation(),
          },
          onOpenChange: (e) => {
            e &&
              t({
                eventName: A.zm.VIEW_TOOLTIP,
                properties: {
                  funnel: "landing-unlock",
                  tooltip: "unlock-allocation",
                },
              });
          },
          triggerProps: {
            onClick: (t) => t.stopPropagation(),
            onMouseDown: (t) => t.stopPropagation(),
          },
        });
      }
      let te = [
        {
          description:
            "Connect your wallet to see the unlocking schedules you have qualified for.",
          image: "/images/common/numbers/number-1.svg",
          title: "Connect wallet",
        },
        {
          description:
            "Sign the unlock agreement to confirm your participation in the unlocking.",
          image: "/images/common/numbers/number-2.svg",
          title: "Sign agreement",
        },
        {
          description:
            "Starting September 1, you can begin claiming your unlocked tokens.",
          image: "/images/common/numbers/number-3.svg",
          title: "Claim tokens",
        },
        {
          description: (0, a.jsx)(a.Fragment, {
            children:
              "Once you've claimed your tokens, you're free to trade your $WLFI or keep holding, the choice is yours.",
          }),
          image: "/images/common/numbers/number-4.svg",
          title: "Trade (soon)",
        },
      ];
      function ts(t) {
        let { image: e, title: s, description: l, className: n } = t;
        return (0, a.jsxs)("div", {
          className: (0, d.cn)(
            "tw-flex tw-flex-col tw-gap-3 tw-items-center tw-justify-start",
            n
          ),
          children: [
            (0, a.jsx)(h.default, { alt: s, height: 64, src: e, width: 64 }),
            (0, a.jsx)("span", {
              className: "tw-text-sm tw-text-primary tw-text-center",
              children: s,
            }),
            (0, a.jsx)("span", {
              className: "tw-text-sm tw-text-tertiary tw-text-center",
              children: l,
            }),
          ],
        });
      }
      function ta(t) {
        let { className: e } = t;
        return (0, a.jsxs)(c.Zp, {
          className: (0, d.cn)(e),
          children: [
            (0, a.jsx)(c.aR, {
              className: "tw-justify-between",
              children: (0, a.jsx)(c.ZB, { children: "How unlocking works" }),
            }),
            (0, a.jsxs)(c.Wu, {
              className:
                "tw-pt-6 tw-pb-8 tw-px-6 tw-gap-6 tw-grid tw-grid-cols-2",
              children: [
                te.map((t) =>
                  (0, a.jsx)(
                    ts,
                    { className: "tw-col-span-2 lg:tw-col-span-1", ...t },
                    t.title
                  )
                ),
                (0, a.jsxs)("div", {
                  className:
                    "tw-flex tw-flex-row tw-items-start tw-gap-4 tw-p-4 tw-rounded-xl tw-border tw-border-border tw-col-span-2",
                  children: [
                    (0, a.jsx)(P.A, { icon: M.A.info, variant: "default" }),
                    (0, a.jsxs)("div", {
                      className: "tw-flex tw-flex-col tw-gap-1",
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "tw-text-sm tw-text-primary tw-font-semibold",
                          children:
                            "Wallet address monitoring will run in the background",
                        }),
                        (0, a.jsx)("span", {
                          className: "tw-text-sm tw-text-secondary",
                          children:
                            "These standard security measures help prevent fraud, protect users, and keep the ecosystem compliant. No action is required from you.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(c.wL, {}),
          ],
        });
      }
      var tl = s(5256),
        tn = s(12346),
        tr = s(17680);
      let ti = {
        src: "/_next/static/media/ethereum.22ab1f4e.svg",
        height: 2500,
        width: 2500,
        blurWidth: 0,
        blurHeight: 0,
      };
      var to = s(46752),
        tc = s(38120),
        tw = s(89303),
        td = s(37370),
        tm = s(47807),
        tu = s(77973);
      function tx(t) {
        let { label: e, value: s, tooltip: l, className: n } = t;
        return (0, a.jsxs)("div", {
          className: (0, d.cn)(
            "tw-flex tw-items-center tw-justify-between tw-gap-1 md:tw-flex-col md:tw-items-start",
            n
          ),
          children: [
            (0, a.jsxs)("span", {
              className:
                "tw-text-tertiary tw-text-sm tw-font-normal tw-flex tw-items-center tw-gap-1",
              children: [e, l],
            }),
            (0, a.jsx)("span", {
              className:
                "tw-text-primary tw-font-medium tw-text-sm tw-flex tw-gap-1",
              children: s,
            }),
          ],
        });
      }
      function tp(t) {
        let {
          label: e,
          tooltip: s,
          value: l,
          progressValue: n,
          progressIndicatorClassName: r,
          percentage: i,
          className: o,
        } = t;
        return (0, a.jsxs)("div", {
          className: (0, d.cn)("tw-flex tw-flex-col tw-gap-1", o),
          children: [
            (0, a.jsxs)("span", {
              className:
                "tw-text-tertiary tw-text-sm tw-font-normal tw-flex tw-items-center tw-justify-between",
              children: [
                (0, a.jsxs)("span", {
                  className: "tw-flex tw-items-center tw-gap-1",
                  children: [e, s],
                }),
                (0, a.jsx)("span", {
                  className:
                    "tw-text-primary tw-font-medium tw-text-sm tw-flex tw-gap-1",
                  children: l,
                }),
              ],
            }),
            (0, a.jsxs)("span", {
              className: "tw-flex tw-items-center tw-gap-3",
              children: [
                (0, a.jsx)(tn.k, {
                  className: "tw-bg-background-quaternary tw-h-3",
                  indicatorClassName: r,
                  value: n,
                }),
                (0, a.jsx)(C.G, {
                  className: "tw-text-secondary tw-text-sm",
                  forceNumberFlow: !0,
                  percent: !0,
                  value: i,
                }),
              ],
            }),
          ],
        });
      }
      function tf(t) {
        let {
            status: e,
            allocation: s,
            formattedTotalAllocationAmount: l,
            blockedAddress: r,
            isLegacyUser: i,
            className: o,
            categoryTemplates: w,
            claimed: m,
            chainId: g,
            unlockingTxHash: _,
            tradingStartTimestampMs: T,
          } = t,
          [, O] = (0, N.Cj)(),
          { status: W, currentAccount: B } = (0, tw.sA)(),
          { chainId: R } = (0, y.F)(),
          { switchChain: U, isPending: Y, isError: V } = (0, b.R)(),
          { openUnlockStart: H, openUnlockAgreement: q } = (0, tu.k3)(),
          { data: te } = (0, X.J)(w, s, m),
          [ts, tn] = v.useState(null),
          tf = null != ts ? (null == te ? void 0 : te[ts]) : null,
          th = (0, x.Xr)(I.b),
          [tg, tj] = v.useState(""),
          tv =
            null != tf ? u.yf.unix(tf.cliffTimestamp).format("YYYY-MM-DD") : "",
          tN =
            null != tf && 0 !== tf.endTimestamp
              ? u.yf.unix(tf.endTimestamp).format("YYYY-MM-DD")
              : "",
          ty = (0, to.RY)(g),
          tb = ty.explorerLinkBuilder({ token: n.Pv.WLFI_ADDRESS }),
          tk = ty.explorerLinkBuilder({ address: n.Pv.WLFI_VESTER_ADDRESS }),
          tA = ty.explorerLinkBuilder({ tx: _ }),
          tI = (0, tc.C)({ chainId: g }),
          tL = v.useCallback(() => {
            O(n.Pv.WLFI_ADDRESS)
              .then(() => {
                (0, tr.o)({
                  toastConfig: {
                    title: "WLFI address copied to clipboard",
                    variant: "success",
                  },
                }),
                  th({
                    eventName: A.H9.COPY_TOKEN_ADDRESS,
                    properties: { address: n.Pv.WLFI_ADDRESS, success: !0 },
                  });
              })
              .catch((t) => {
                let e = (0, td.b)(t) ? t.message : "Unknown error";
                th({
                  eventName: A.H9.COPY_TOKEN_ADDRESS,
                  properties: {
                    address: n.Pv.WLFI_ADDRESS,
                    error: e,
                    success: !1,
                  },
                });
              });
          }, [O, th]),
          tP = "loading" !== W && "" !== B && "authenticated" === W && R !== g,
          tC = r || !i || tP,
          tE = (0, to.RY)(g).name,
          tS = Date.now() > T && Number.isFinite(T);
        return (0, a.jsxs)("div", {
          className: (0, d.cn)("tw-flex tw-flex-col tw-gap-4", o),
          children: [
            (0, a.jsxs)(c.Zp, {
              className: "tw-h-fit",
              children: [
                (0, a.jsx)(c.aR, {
                  className: "tw-justify-between",
                  children: (0, a.jsx)(c.ZB, {
                    children: tf
                      ? (0, a.jsxs)("div", {
                          className: "tw-flex tw-items-center tw-gap-4",
                          children: [
                            (0, a.jsx)(F.Button, {
                              onClick: () => tn(null),
                              size: "fit",
                              variant: "link-tertiary",
                              children: (0, a.jsx)(M.A.arrowLeft, {
                                className: "tw-size-5",
                              }),
                            }),
                            "Unlock details",
                          ],
                        })
                      : "Unlocking schedules",
                  }),
                }),
                (0, a.jsx)(c.Wu, {
                  className: "tw-pb-6 md:tw-px-6",
                  children: (0, a.jsx)(p.P.div, {
                    layout: !0,
                    transition: { duration: 0.3, ease: "easeOut" },
                    children: (0, a.jsx)(f.N, {
                      mode: "wait",
                      children:
                        "authenticated" === W
                          ? tC
                            ? tP
                              ? (0, a.jsxs)(
                                  p.P.div,
                                  {
                                    animate: { opacity: 1 },
                                    className:
                                      "tw-flex tw-items-center tw-gap-1 tw-max-w-sm tw-px-4 tw-mx-auto tw-flex-col tw-justify-center tw-mb-6",
                                    exit: { opacity: 0 },
                                    initial: { opacity: 0 },
                                    layout: !0,
                                    transition: {
                                      duration: 0.3,
                                      ease: "easeOut",
                                    },
                                    children: [
                                      (0, a.jsx)(P.A, {
                                        icon: M.A.info,
                                        iconClassName: "tw-size-10",
                                        variant: "destructive",
                                      }),
                                      (0, a.jsx)("span", {
                                        className:
                                          "tw-font-semibold tw-text-center",
                                        children:
                                          "You are on the wrong network",
                                      }),
                                      (0, a.jsxs)("span", {
                                        className:
                                          "tw-text-tertiary tw-text-sm tw-text-center",
                                        children: [
                                          "Please switch to ",
                                          tE,
                                          " network to continue",
                                        ],
                                      }),
                                      V
                                        ? (0, a.jsx)(a.Fragment, {
                                            children:
                                              "Seems like we can't switch the network automatically. Please check if you can change it from the wallet.",
                                          })
                                        : (0, a.jsxs)(F.Button, {
                                            className:
                                              "tw-flex tw-items-center tw-gap-2 tw-mt-4 tw-w-full md:tw-w-fit",
                                            disabled: Y,
                                            onClick: () => {
                                              th({
                                                eventName: A.zm.SWITCH_NETWORK,
                                                properties: {
                                                  chainId: g,
                                                  funnel: "landing-unlock",
                                                  network: tE,
                                                },
                                              }),
                                                U({ chainId: g });
                                            },
                                            size: "md",
                                            children: [
                                              Y &&
                                                (0, a.jsx)(M.A.spinner, {
                                                  className:
                                                    "tw-size-4 tw-animate-spin",
                                                }),
                                              "Switch network",
                                            ],
                                          }),
                                    ],
                                  },
                                  "wrong-network"
                                )
                              : i
                              ? r
                                ? (0, a.jsxs)(
                                    p.P.div,
                                    {
                                      animate: { opacity: 1 },
                                      className:
                                        "tw-flex tw-items-center tw-gap-1 tw-px-4 tw-max-w-md tw-mx-auto tw-flex-col tw-justify-center tw-mb-6",
                                      exit: { opacity: 0 },
                                      initial: { opacity: 0 },
                                      layout: !0,
                                      transition: {
                                        duration: 0.3,
                                        ease: "easeOut",
                                      },
                                      children: [
                                        (0, a.jsx)(P.A, {
                                          icon: M.A.info,
                                          iconClassName: "tw-size-10",
                                          variant: "destructive",
                                        }),
                                        (0, a.jsx)("span", {
                                          className:
                                            "tw-font-semibold tw-text-center",
                                          children:
                                            "We're sorry—unable to proceed",
                                        }),
                                        (0, a.jsx)("span", {
                                          className:
                                            "tw-text-tertiary tw-text-sm tw-text-center",
                                          children:
                                            "Your request isn't approved to move forward at this time. For security and compliance reasons, we can't provide more information. You may try again later or contact support for general assistance.",
                                        }),
                                        (0, a.jsx)(F.Button, {
                                          asChild: !0,
                                          className:
                                            "tw-mt-3 tw-w-full md:tw-w-fit",
                                          children: (0, a.jsx)(j(), {
                                            href: z.C.routes.contact,
                                            children: "Contact us",
                                          }),
                                        }),
                                      ],
                                    },
                                    "blocked-address"
                                  )
                                : null
                              : (0, a.jsxs)(
                                  p.P.div,
                                  {
                                    animate: { opacity: 1 },
                                    className:
                                      "tw-flex tw-items-center tw-gap-1 tw-px-4 tw-max-w-sm tw-mx-auto tw-flex-col tw-justify-center tw-mb-6",
                                    exit: { opacity: 0 },
                                    initial: { opacity: 0 },
                                    layout: !0,
                                    transition: {
                                      duration: 0.3,
                                      ease: "easeOut",
                                    },
                                    children: [
                                      (0, a.jsx)(P.A, {
                                        icon: M.A.info,
                                        iconClassName: "tw-size-10",
                                        variant: "warning",
                                      }),
                                      (0, a.jsx)("span", {
                                        className:
                                          "tw-font-semibold tw-text-center",
                                        children: "You cannot start unlocking",
                                      }),
                                      (0, a.jsxs)("span", {
                                        className:
                                          "tw-text-tertiary tw-text-sm tw-text-center",
                                        children: [
                                          "Unlocking is only available for early supporters (participants who purchased the $WLFI token approximately between October 14, 2024 to March 14, 2025). To get $WLFI you can do so",
                                          tS
                                            ? " through trading."
                                            : " when trading will become live.",
                                        ],
                                      }),
                                      (0, a.jsx)(F.Button, {
                                        asChild: !0,
                                        className:
                                          "tw-mt-3 tw-w-full md:tw-w-fit",
                                        children: (0, a.jsx)(j(), {
                                          href: z.C.routes.home,
                                          children: "Go to home",
                                        }),
                                      }),
                                    ],
                                  },
                                  "not-legacy-user"
                                )
                            : tf
                            ? (0, a.jsxs)(
                                p.P.div,
                                {
                                  animate: { opacity: 1 },
                                  className: "tw-flex tw-flex-col tw-gap-6",
                                  exit: { opacity: 0 },
                                  initial: { opacity: 0 },
                                  layout: !0,
                                  transition: {
                                    duration: 0.3,
                                    ease: "easeOut",
                                  },
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "tw-bg-background-tertiary tw-border tw-border-border tw-rounded-md tw-p-4",
                                      children: (0, a.jsxs)("div", {
                                        className:
                                          "tw-grid tw-grid-cols-1 tw-gap-5 md:tw-grid-cols-2 md:tw-gap-x-4 md:tw-gap-y-5",
                                        children: [
                                          (0, a.jsx)(tx, {
                                            label: "Status",
                                            value: (0, a.jsx)(S.E, {
                                              className: "tw-w-fit",
                                              radius: "sm",
                                              size: "sm",
                                              variant: tf.statusVariant,
                                              children: tf.status,
                                            }),
                                          }),
                                          (0, a.jsx)(tx, {
                                            label: "Unlock allocation",
                                            tooltip: (0, a.jsx)(tt, {}),
                                            value: (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                (0, a.jsx)(E.xz, {
                                                  size: 16,
                                                  symbol: n.Pv.WLFI_SYMBOL,
                                                }),
                                                (0, a.jsx)(C.G, {
                                                  forceNumberFlow: !0,
                                                  symbol: n.Pv.WLFI_SYMBOL,
                                                  symbolClassName:
                                                    "tw-text-primary",
                                                  value:
                                                    tf.templateAllocationFormatted,
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, a.jsx)(tp, {
                                            label: "Unlocked",
                                            percentage:
                                              tf.unsafe_unlockedPercentage,
                                            progressIndicatorClassName:
                                              "tw-bg-utility-brand-700",
                                            progressValue:
                                              100 *
                                              tf.unsafe_unlockedPercentage,
                                            tooltip: (0, a.jsx)(L, {}),
                                            value: (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                (0, a.jsx)(E.xz, {
                                                  size: 16,
                                                  symbol: n.Pv.WLFI_SYMBOL,
                                                }),
                                                (0, a.jsx)(C.G, {
                                                  forceNumberFlow: !0,
                                                  symbol: n.Pv.WLFI_SYMBOL,
                                                  symbolClassName:
                                                    "tw-text-primary",
                                                  value:
                                                    tf.unlockedAmountFormatted,
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, a.jsx)(tp, {
                                            label: "Claimed",
                                            percentage:
                                              tf.unsafe_claimedPercentage,
                                            progressIndicatorClassName:
                                              "tw-bg-utility-brand-400",
                                            progressValue:
                                              100 * tf.unsafe_claimedPercentage,
                                            tooltip: (0, a.jsx)(Q, {}),
                                            value: (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                (0, a.jsx)(E.xz, {
                                                  size: 16,
                                                  symbol: n.Pv.WLFI_SYMBOL,
                                                }),
                                                (0, a.jsx)(C.G, {
                                                  forceNumberFlow: !0,
                                                  symbol: n.Pv.WLFI_SYMBOL,
                                                  symbolClassName:
                                                    "tw-text-primary",
                                                  value:
                                                    tf.claimedAmountFormatted,
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, a.jsx)(tx, {
                                            label: "Available to claim",
                                            tooltip: (0, a.jsx)(Z, {}),
                                            value: (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                (0, a.jsx)(E.xz, {
                                                  size: 16,
                                                  symbol: n.Pv.WLFI_SYMBOL,
                                                }),
                                                (0, a.jsx)(C.G, {
                                                  forceNumberFlow: !0,
                                                  symbol: n.Pv.WLFI_SYMBOL,
                                                  symbolClassName:
                                                    "tw-text-primary",
                                                  value:
                                                    tf.availableToClaimFormatted,
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, a.jsx)(tx, {
                                            label: "Remaining to claim",
                                            tooltip: (0, a.jsx)($, {}),
                                            value: (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                (0, a.jsx)(E.xz, {
                                                  size: 16,
                                                  symbol: n.Pv.WLFI_SYMBOL,
                                                }),
                                                (0, a.jsx)(C.G, {
                                                  forceNumberFlow: !0,
                                                  symbol: n.Pv.WLFI_SYMBOL,
                                                  symbolClassName:
                                                    "tw-text-primary",
                                                  value:
                                                    tf.remainingToClaimFormatted,
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, a.jsx)(tx, {
                                            label: "Starts on",
                                            value: tf.startTimestampFormatted,
                                          }),
                                          (0, a.jsx)(tx, {
                                            label: "Cliff",
                                            value: tf.cliffTimestampFormatted,
                                          }),
                                          (0, a.jsx)(tx, {
                                            label: "Ends on",
                                            value: tf.endTimestampFormatted,
                                          }),
                                          (0, a.jsx)(tx, {
                                            label: "Rate",
                                            value: (0, a.jsx)(K, {
                                              className: "tw-w-full",
                                              ratePerDay: tf.unsafe_ratePerDay,
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, a.jsx)(G.Separator, {
                                      className: "tw-my-0.5",
                                    }),
                                    (0, a.jsx)("h4", {
                                      className:
                                        "tw-text-primary tw-text-base tw-font-semibold tw-px-4 md:tw-px-0",
                                      children: "Contract details",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "tw-grid tw-grid-cols-1 tw-gap-5 md:tw-grid-cols-2 tw-px-4 md:tw-px-0",
                                      children: [
                                        (0, a.jsx)(tx, {
                                          label: "Token",
                                          value: (0, a.jsxs)(a.Fragment, {
                                            children: [
                                              (0, a.jsx)(E.xz, {
                                                size: 16,
                                                symbol: n.Pv.WLFI_SYMBOL,
                                              }),
                                              n.Pv.WLFI_SYMBOL,
                                              (0, a.jsx)(k.w, {
                                                content: "Copy token address",
                                                skipTouch: !0,
                                                trigger: (0, a.jsx)(F.Button, {
                                                  onClick: tL,
                                                  size: "fit",
                                                  variant: "ghost-secondary",
                                                  children: (0, a.jsx)(
                                                    M.A.copy,
                                                    { className: "tw-size-5" }
                                                  ),
                                                }),
                                              }),
                                              (0, a.jsx)(k.w, {
                                                content: "See token contract",
                                                skipTouch: !0,
                                                trigger: (0, a.jsx)(F.Button, {
                                                  asChild: !0,
                                                  size: "fit",
                                                  variant: "ghost-secondary",
                                                  children: (0, a.jsx)(j(), {
                                                    href: tb,
                                                    onClick: () => {
                                                      th({
                                                        eventName:
                                                          A.zm.VIEW_EXPLORER,
                                                        properties: {
                                                          funnel:
                                                            "landing-unlock",
                                                          link: tb,
                                                        },
                                                      });
                                                    },
                                                    rel: "noopener noreferrer",
                                                    target: "_blank",
                                                    children: (0, a.jsx)(
                                                      M.A.externalLink,
                                                      { className: "tw-size-5" }
                                                    ),
                                                  }),
                                                }),
                                              }),
                                              (0, a.jsx)(k.w, {
                                                content: "Add token to wallet",
                                                skipTouch: !0,
                                                trigger: (0, a.jsxs)(F.Button, {
                                                  onClick: () => {
                                                    tI({
                                                      address:
                                                        n.Pv.WLFI_ADDRESS,
                                                      decimals:
                                                        n.Pv.WLFI_DECIMALS,
                                                      image: /_/.test(
                                                        n.Pv.WLFI_SYMBOL
                                                      )
                                                        ? void 0
                                                        : tg,
                                                      symbol: n.Pv.WLFI_SYMBOL,
                                                    });
                                                  },
                                                  size: "fit",
                                                  variant: "ghost-secondary",
                                                  children: [
                                                    (0, a.jsx)(M.A.plus, {
                                                      className: "tw-size-5",
                                                    }),
                                                    (0, a.jsx)(E.lt, {
                                                      onImageGenerated: tj,
                                                      symbol: n.Pv.WLFI_SYMBOL,
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, a.jsx)(tx, {
                                          label: "Chain",
                                          value: (0, a.jsxs)(a.Fragment, {
                                            children: [
                                              (0, a.jsx)(h.default, {
                                                alt: "Ethereum",
                                                className: "tw-aspect-square",
                                                height: 16,
                                                src: ti,
                                                width: 16,
                                              }),
                                              "Ethereum",
                                            ],
                                          }),
                                        }),
                                        (0, a.jsx)(tx, {
                                          label: "Unlock smart contract",
                                          value: (0, a.jsx)(F.Button, {
                                            asChild: !0,
                                            className:
                                              "tw-gap-1 tw-justify-start",
                                            size: "fit",
                                            variant: "link-secondary",
                                            children: (0, a.jsxs)(j(), {
                                              href: tk,
                                              onClick: () => {
                                                th({
                                                  eventName: A.zm.VIEW_EXPLORER,
                                                  properties: {
                                                    funnel: "landing-unlock",
                                                    link: tk,
                                                  },
                                                });
                                              },
                                              rel: "noopener noreferrer",
                                              target: "_blank",
                                              children: [
                                                "See contract",
                                                " ",
                                                (0, a.jsx)(M.A.externalLink, {
                                                  className: "tw-size-5",
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                        (0, a.jsx)(tx, {
                                          label: "Transaction",
                                          value: e
                                            ? _
                                              ? (0, a.jsx)(F.Button, {
                                                  asChild: !0,
                                                  className:
                                                    "tw-gap-1 tw-justify-start",
                                                  size: "fit",
                                                  variant: "link-secondary",
                                                  children: (0, a.jsxs)(j(), {
                                                    href: tA,
                                                    onClick: () => {
                                                      th({
                                                        eventName:
                                                          A.zm.VIEW_EXPLORER,
                                                        properties: {
                                                          funnel:
                                                            "landing-unlock",
                                                          link: tA,
                                                        },
                                                      });
                                                    },
                                                    rel: "noopener noreferrer",
                                                    target: "_blank",
                                                    children: [
                                                      "View on explorer",
                                                      " ",
                                                      (0, a.jsx)(
                                                        M.A.externalLink,
                                                        {
                                                          className:
                                                            "tw-size-5",
                                                        }
                                                      ),
                                                    ],
                                                  }),
                                                })
                                              : "N/A"
                                            : (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                  (0, a.jsx)(F.Button, {
                                                    className:
                                                      "tw-gap-1 tw-justify-start",
                                                    disabled: tC,
                                                    onClick: () => {
                                                      H({
                                                        chainId: g,
                                                        formattedTemplates:
                                                          null != te ? te : [],
                                                        totalAllocationAmount:
                                                          l,
                                                        tradingStartTimestampMs:
                                                          T,
                                                      });
                                                    },
                                                    size: "fit",
                                                    variant: "link-secondary",
                                                    children:
                                                      "Sign unlock agreement",
                                                  }),
                                                  " ",
                                                  "to start unlocking",
                                                ],
                                              }),
                                        }),
                                        e &&
                                          (0, a.jsx)(tx, {
                                            label: "Unlock agreement",
                                            value: (0, a.jsx)(F.Button, {
                                              className:
                                                "tw-gap-1 tw-justify-start",
                                              onClick: () => {
                                                q({ totalAllocationAmount: l }),
                                                  th({
                                                    eventName:
                                                      A.H9.SEE_AGREEMENT,
                                                    properties: {
                                                      funnel: "landing-unlock",
                                                    },
                                                  });
                                              },
                                              size: "fit",
                                              variant: "link-secondary",
                                              children: "See agreement",
                                            }),
                                          }),
                                      ],
                                    }),
                                    0 !== tf.endTimestamp &&
                                      0 !== tf.unsafe_ratePerDay &&
                                      tv !== tN &&
                                      (0, a.jsxs)(a.Fragment, {
                                        children: [
                                          (0, a.jsx)(G.Separator, {
                                            className: "tw-my-0.5",
                                          }),
                                          (0, a.jsx)("h4", {
                                            className:
                                              "tw-text-primary tw-text-base tw-font-semibold tw-px-4 md:tw-px-0",
                                            children: "Unlocking over time",
                                          }),
                                          (0, a.jsx)(J, {
                                            allocation:
                                              tf.unsafe_templateAllocation,
                                            endDate: tN,
                                            startDate: tv,
                                          }),
                                        ],
                                      }),
                                  ],
                                },
                                "template-"
                                  .concat(tf.startTimestamp, "-")
                                  .concat(tf.cliffTimestamp, "-")
                                  .concat(tf.percentageOfAllocation)
                              )
                            : (0, a.jsx)(
                                p.P.div,
                                {
                                  animate: { opacity: 1 },
                                  exit: { opacity: 0 },
                                  initial: { opacity: 0 },
                                  layout: !0,
                                  transition: {
                                    duration: 0.3,
                                    ease: "easeOut",
                                  },
                                  children: (0, a.jsx)(D, {
                                    formattedTemplates: null != te ? te : [],
                                    setActiveIndex: tn,
                                  }),
                                },
                                "category-list"
                              )
                          : (0, a.jsx)(
                              p.P.div,
                              {
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                initial: { opacity: 0 },
                                layout: !0,
                                transition: { duration: 0.3, ease: "easeOut" },
                                children: (0, a.jsx)(tl.A, {
                                  action: (0, a.jsx)("span", {
                                    className:
                                      "tw-flex tw-w-full tw-flex-col tw-items-center tw-gap-2 sm:tw-flex-row sm:tw-justify-center",
                                    children: (0, a.jsx)(tm.A, {
                                      className: "tw-w-full",
                                    }),
                                  }),
                                  className:
                                    "tw-max-w-sm tw-mx-auto tw-flex tw-flex-col tw-items-center tw-px-4 tw-justify-center tw-mb-6",
                                  icon: M.A.wallet,
                                  iconType: "decorative",
                                  subtitle:
                                    "Please connect your wallet to see and manage your unlocking schedules.",
                                  title: "Connect your wallet",
                                }),
                              },
                              "connect-wallet"
                            ),
                    }),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(ta, {}),
          ],
        });
      }
      function th(t) {
        let { className: e, itemsCount: s = 4 } = t,
          l = v.useMemo(
            () => Array.from({ length: s }, () => crypto.randomUUID()),
            [s]
          );
        return (0, a.jsxs)("div", {
          className: (0, d.cn)("tw-flex tw-flex-col tw-gap-2", e),
          children: [
            (0, a.jsx)("div", {
              className: "tw-hidden md:tw-flex tw-flex-col tw-gap-2",
              children: l.map((t) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className:
                      "tw-bg-background-secondary tw-border tw-border-border tw-rounded-lg",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "tw-flex tw-justify-between tw-items-center tw-gap-2 tw-p-4",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "tw-flex tw-items-center tw-gap-2",
                            children: [
                              (0, a.jsx)(w.E, {
                                className: "tw-size-6 tw-rounded-full",
                              }),
                              (0, a.jsx)(w.E, { className: "tw-h-5 tw-w-32" }),
                              (0, a.jsx)(w.E, {
                                className: "tw-h-5 tw-w-20 tw-rounded-sm",
                              }),
                            ],
                          }),
                          (0, a.jsx)(w.E, {
                            className: "tw-size-5 tw-rounded",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "tw-grid tw-grid-cols-2 tw-gap-x-4 tw-gap-y-5 tw-px-4 tw-pb-4",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "tw-flex tw-flex-col tw-gap-1",
                            children: [
                              (0, a.jsx)(w.E, { className: "tw-h-4 tw-w-16" }),
                              (0, a.jsxs)("div", {
                                className: "tw-flex tw-items-center tw-gap-1",
                                children: [
                                  (0, a.jsx)(w.E, {
                                    className: "tw-size-4 tw-rounded-full",
                                  }),
                                  (0, a.jsx)(w.E, {
                                    className: "tw-h-4 tw-w-24",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "tw-flex tw-flex-col tw-gap-1",
                            children: [
                              (0, a.jsx)(w.E, { className: "tw-h-4 tw-w-16" }),
                              (0, a.jsx)(w.E, { className: "tw-h-4 tw-w-56" }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "tw-flex tw-flex-col tw-gap-1",
                            children: [
                              (0, a.jsx)(w.E, { className: "tw-h-4 tw-w-10" }),
                              (0, a.jsx)(w.E, { className: "tw-h-4 tw-w-56" }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "tw-flex tw-flex-col tw-gap-1",
                            children: [
                              (0, a.jsx)(w.E, { className: "tw-h-4 tw-w-14" }),
                              (0, a.jsx)(w.E, { className: "tw-h-4 tw-w-56" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  "desktop-skeleton-".concat(t)
                )
              ),
            }),
            (0, a.jsx)("div", {
              className: "tw-block md:tw-hidden",
              children: l.map((t) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className:
                      "tw-bg-background-secondary tw-border-b tw-border-border",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "tw-flex tw-justify-between tw-items-center tw-gap-2 tw-p-4 tw-pt-6",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "tw-flex tw-items-center tw-gap-2",
                            children: [
                              (0, a.jsx)(w.E, {
                                className: "tw-size-6 tw-rounded-full",
                              }),
                              (0, a.jsx)(w.E, { className: "tw-h-5 tw-w-32" }),
                            ],
                          }),
                          (0, a.jsx)(w.E, {
                            className: "tw-h-5 tw-w-20 tw-rounded-sm",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "tw-flex tw-flex-col tw-gap-4 tw-px-4 tw-pb-4",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "tw-flex tw-items-center tw-justify-between tw-gap-1",
                            children: [
                              (0, a.jsx)(w.E, { className: "tw-h-4 tw-w-16" }),
                              (0, a.jsxs)("div", {
                                className: "tw-flex tw-items-center tw-gap-1",
                                children: [
                                  (0, a.jsx)(w.E, {
                                    className: "tw-size-4 tw-rounded-full",
                                  }),
                                  (0, a.jsx)(w.E, {
                                    className: "tw-h-4 tw-w-24",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "tw-flex tw-items-center tw-justify-between tw-gap-1",
                            children: [
                              (0, a.jsx)(w.E, { className: "tw-h-4 tw-w-16" }),
                              (0, a.jsx)(w.E, { className: "tw-h-4 tw-w-40" }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "tw-flex tw-items-center tw-justify-between tw-gap-1",
                            children: [
                              (0, a.jsx)(w.E, { className: "tw-h-4 tw-w-10" }),
                              (0, a.jsx)(w.E, { className: "tw-h-4 tw-w-40" }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "tw-flex tw-items-center tw-justify-between tw-gap-1",
                            children: [
                              (0, a.jsx)(w.E, { className: "tw-h-4 tw-w-14" }),
                              (0, a.jsx)(w.E, { className: "tw-h-4 tw-w-40" }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "tw-px-4 tw-my-2 tw-mb-6",
                        children: (0, a.jsx)(w.E, {
                          className: "tw-h-10 tw-w-full",
                        }),
                      }),
                    ],
                  },
                  "mobile-skeleton-".concat(t)
                )
              ),
            }),
          ],
        });
      }
      function tg(t) {
        let { className: e } = t;
        return (0, a.jsxs)("div", {
          className: (0, d.cn)("tw-flex tw-flex-col tw-gap-4", e),
          children: [
            (0, a.jsxs)(c.Zp, {
              className: "tw-h-fit",
              children: [
                (0, a.jsx)(c.aR, {
                  className: "tw-justify-between",
                  children: (0, a.jsx)(c.ZB, {
                    children: (0, a.jsx)(w.E, { className: "tw-h-6 tw-w-16" }),
                  }),
                }),
                (0, a.jsx)(c.Wu, {
                  className: "tw-pb-6 md:tw-px-6",
                  children: (0, a.jsx)(th, { itemsCount: 3 }),
                }),
              ],
            }),
            (0, a.jsx)(ta, {}),
          ],
        });
      }
      var tj = s(30787),
        tv = s(4872),
        tN = s(28978),
        ty = s(61272),
        tb = s(59714),
        tk = s(89520),
        tA = s(58172),
        tI = s(25892);
      function tL(t) {
        let { isActivated: e, allocation: s, remainingToUnlock: l } = t;
        return e
          ? (0, a.jsxs)("div", {
              className:
                "tw-relative tw-z-0 tw-flex tw-flex-col tw-gap-2 -tw-translate-y-2.5 tw-items-center tw-justify-between tw-rounded-xl tw-rounded-t-none tw-border tw-border-t-0 tw-border-border tw-bg-background-tertiary tw-p-4 tw-pt-6",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "tw-text-tertiary tw-text-sm tw-flex tw-items-center tw-justify-between tw-w-full tw-gap-1",
                  children: [
                    (0, a.jsxs)("span", {
                      className: "tw-flex tw-items-center tw-gap-1",
                      children: [
                        "Total allocation amount",
                        " ",
                        (0, a.jsx)(tA.A, { contentProps: { side: "bottom" } }),
                      ],
                    }),
                    (0, a.jsx)(tI.j, {
                      symbol: n.Pv.WLFI_SYMBOL,
                      value: Number((0, r.J)(s, n.Pv.WLFI_DECIMALS)),
                      valueClassName:
                        "tw-text-primary tw-text-sm tw-font-medium",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "tw-text-tertiary tw-text-sm tw-flex tw-items-center tw-justify-between tw-w-full tw-gap-1",
                  children: [
                    (0, a.jsxs)("span", {
                      className: "tw-flex tw-items-center tw-gap-1",
                      children: [
                        "Remaining to unlock",
                        " ",
                        (0, a.jsx)(tk.A, { contentProps: { side: "bottom" } }),
                      ],
                    }),
                    (0, a.jsx)(tI.j, {
                      forceNumberFlow: !0,
                      symbol: n.Pv.WLFI_SYMBOL,
                      value: Number((0, r.J)(l, n.Pv.WLFI_DECIMALS)),
                      valueClassName:
                        "tw-text-primary tw-text-sm tw-font-medium",
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
      var tP = s(36541);
      let tC = {
          src: "/_next/static/media/gradient-logo.6ce186b6.png",
          height: 332,
          width: 1016,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAD1BMVEUdGRUiHRUbGBYbGRYeGhX5X5pIAAAABXRSTlP13evTxXItJ3oAAAAJcEhZcwAAITgAACE4AUWWMWAAAAAcSURBVHicBcEBAQAAAIIgK/9vDoAYAM2ipStbOQIpAC2rrOoOAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        },
        tE = {
          activeSchedules: {
            description:
              "Please wait until your schedules are activated. Return regularly to track when your schedules go live.",
            title: "Your unlocking schedules have not been activated yet.",
          },
          contractPaused: {
            description:
              "Unlocking and trading $WLFI has been paused for the moment. No transaction are being performed at this stage.",
            title: "Contract paused",
          },
          tradingNotStarted: {
            description: (t, e, s, l) =>
              (0, a.jsxs)(a.Fragment, {
                children: [
                  "Claiming is inactive and will be available in:",
                  (0, a.jsx)("br", {}),
                  t > 0 &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(tj.Ay, {
                          className: "tw-text-primary tw-text-semibold",
                          format: { minimumIntegerDigits: 2 },
                          value: t,
                        }),
                        (0, a.jsx)("span", {
                          className: "tw-text-tertiary",
                          children: "d",
                        }),
                        " ",
                      ],
                    }),
                  e > 0 &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(tj.Ay, {
                          className: "tw-text-primary tw-text-semibold",
                          format: { minimumIntegerDigits: 2 },
                          value: e,
                        }),
                        (0, a.jsx)("span", {
                          className: "tw-text-tertiary",
                          children: "h",
                        }),
                        " ",
                      ],
                    }),
                  s > 0 &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(tj.Ay, {
                          className: "tw-text-primary tw-text-semibold",
                          format: { minimumIntegerDigits: 2 },
                          value: s,
                        }),
                        (0, a.jsx)("span", {
                          className: "tw-text-tertiary",
                          children: "m",
                        }),
                        " ",
                      ],
                    }),
                  (0, a.jsx)(tj.Ay, {
                    className: "tw-text-primary tw-text-semibold",
                    format: { minimumIntegerDigits: 2 },
                    value: l,
                  }),
                  (0, a.jsx)("span", {
                    className: "tw-text-tertiary",
                    children: "s",
                  }),
                ],
              }),
            title: "Claiming unavailable",
          },
        };
      function tS(t) {
        let { tradingStartTimestampMs: e } = t,
          s = v.useMemo(() => Math.floor((e - Date.now()) / 1e3), [e]),
          [l, { startCountdown: n }] = (0, N.L4)({ countStart: s });
        v.useEffect(() => {
          n();
        }, [n]);
        let r = v.useMemo(() => {
          let t = Math.floor(l / 86400),
            e = Math.floor((l % 86400) / 3600),
            s = Math.floor((l % 3600) / 60),
            a = Math.floor(l % 60);
          return tE.tradingNotStarted.description(t, e, s, a);
        }, [l]);
        return (0, a.jsx)(tF, {
          description: r,
          title: tE.tradingNotStarted.title,
        });
      }
      function tF(t) {
        let { title: e, description: s } = t;
        return (0, a.jsx)(tP.N, {
          variant: "warning",
          children: (0, a.jsxs)("div", {
            className: "tw-flex tw-flex-col tw-gap-3",
            children: [
              (0, a.jsx)("span", {
                className: "tw-text-sm tw-font-semibold tw-text-primary",
                children: e,
              }),
              (0, a.jsx)("span", {
                className: "tw-text-sm tw-text-secondary",
                children: s,
              }),
            ],
          }),
        });
      }
      let tM = v.memo((t) => {
        let {
            targetAngle: e,
            r: s,
            color: l,
            opacity: n = 1,
            strokeWidth: r = 8,
          } = t,
          i = (0, tN.d)(0),
          o = (0, ty.z)(i, { damping: 25, mass: 1, stiffness: 100 }),
          c = (0, tb.G)(o, (t) =>
            t <= 0
              ? ""
              : ((t, e, s) => {
                  let a = {
                      x: s * Math.cos(t - Math.PI / 2),
                      y: s * Math.sin(t - Math.PI / 2),
                    },
                    l = {
                      x: s * Math.cos(e - Math.PI / 2),
                      y: s * Math.sin(e - Math.PI / 2),
                    },
                    n = e - t <= Math.PI ? "0" : "1";
                  return ["M", a.x, a.y, "A", s, s, 0, n, 1, l.x, l.y].join(
                    " "
                  );
                })(0, t, s)
          );
        return (
          (0, v.useEffect)(() => {
            i.set(e);
          }, [e, i]),
          (0, a.jsx)(p.P.path, {
            d: c,
            fill: "none",
            opacity: n,
            stroke: l,
            strokeLinecap: "round",
            strokeWidth: r,
          })
        );
      });
      function t_(t) {
        let {
          isBlocked: e = !0,
          isPaused: s = !0,
          isUserCategoryEnabled: l = !1,
          unlockingStatus: n = !1,
          tradingStartTimestampMs: r = 0,
          isPausedLoading: i = !1,
        } = t;
        return e || i
          ? null
          : s
          ? (0, a.jsx)(tF, {
              description: tE.contractPaused.description,
              title: tE.contractPaused.title,
            })
          : l
          ? n && Date.now() < r && Number.isFinite(r)
            ? (0, a.jsx)(tS, { tradingStartTimestampMs: r })
            : null
          : (0, a.jsx)(tF, {
              description: tE.activeSchedules.description,
              title: tE.activeSchedules.title,
            });
      }
      function tz(t) {
        var e, s, i;
        let {
            width: w = 300,
            height: m = 300,
            status: u,
            blockedAddress: x,
            isLegacyUser: f,
            isUserCategoryEnabled: g,
            className: j,
            chainId: N,
            tradingStartTimestampMs: y,
            allocation: b,
            claimed: k,
            categoryTemplates: A,
          } = t,
          { data: I } = (0, X.J)(A, b, k),
          { status: L } = (0, tw.sA)(),
          {
            openUnlockStart: P,
            openUnlockClaim: E,
            openUnlockHistory: S,
          } = (0, tu.k3)(),
          { data: _, isLoading: z } = (0, o.X)({
            contracts: [
              {
                abi: l.Jz.token,
                address: n.Pv.WLFI_ADDRESS,
                functionName: "paused",
              },
              {
                abi: l.Jz.vester,
                address: n.Pv.WLFI_VESTER_ADDRESS,
                functionName: "paused",
              },
            ],
          }),
          D = v.useMemo(() => {
            if (!_) return !0;
            let [t, e] = _;
            return (
              "failure" === t.status ||
              "failure" === e.status ||
              t.result ||
              e.result
            );
          }, [_]),
          T =
            null !=
            (e =
              null == I
                ? void 0
                : I.reduce((t, e) => t + e.unlockedAmountWei, BigInt(0)))
              ? e
              : BigInt(0),
          O = (0, r.J)(T, n.Pv.WLFI_DECIMALS),
          W =
            null !=
            (s =
              null == I
                ? void 0
                : I.reduce((t, e) => t + e.availableToClaimWei, BigInt(0)))
              ? s
              : BigInt(0),
          B = (0, r.J)(W, n.Pv.WLFI_DECIMALS),
          R = v.useMemo(() => w / 2, [w]),
          U = v.useMemo(() => m / 2, [m]),
          Y = v.useMemo(() => 122, []),
          G = v.useMemo(() => 140, []),
          V =
            null !=
            (i =
              null == I
                ? void 0
                : I.reduce((t, e) => t + e.templateAllocationWei, BigInt(0)))
              ? i
              : BigInt(0),
          J = (0, r.J)(V, n.Pv.WLFI_DECIMALS),
          H = b - V,
          q = (0, r.J)(k, n.Pv.WLFI_DECIMALS),
          K = b > 0,
          Q = !!(null == I ? void 0 : I.length),
          $ = v.useMemo(() => 2 * Math.PI - 1e-4, []),
          [tt, te] = v.useState("unlock"),
          ts = x || !f,
          ta = u && k === b,
          tl = Date.now() < y && Number.isFinite(y),
          tn = "authenticated" === L && K && u && !ts,
          tr = ta || 0 === Number(W) || D || z || ts || tl,
          ti = ts || !g || D || z || !Q,
          to = v.useMemo(
            () => (0n === V || ts ? 0 : Number(T) / Number(V)),
            [T, V, ts]
          ),
          tc = v.useMemo(
            () => (0n === V || ts ? 0 : Number(k) / Number(V)),
            [k, V, ts]
          ),
          td = v.useMemo(() => {
            if ("authenticated" !== L || !K) return 1e-4;
            let t = 2 * to * Math.PI;
            return t ? t - 1e-4 : t + 1e-4;
          }, [to, L, K]),
          tx = v.useMemo(() => {
            if ("authenticated" !== L || !K) return 1e-4;
            let t = 2 * tc * Math.PI;
            return t ? t - 1e-4 : t + 1e-4;
          }, [tc, L, K]),
          tp = v.useMemo(
            () => (ts ? 0 : Number("unlock" === tt ? O : q)),
            [O, q, ts, tt]
          );
        return (0, a.jsxs)(c.Zp, {
          className: (0, d.cn)(
            "tw-w-full tw-h-fit lg:tw-max-w-md tw-border-none tw-bg-transparent",
            j
          ),
          children: [
            (0, a.jsxs)("div", {
              className:
                "tw-relative tw-z-10 tw-rounded-xl tw-border tw-border-border tw-bg-background-secondary",
              children: [
                (0, a.jsxs)(c.Wu, {
                  className:
                    "tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-tertiary tw-px-4 tw-py-4 tw-pt-6 tw-gap-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "tw-relative tw-flex tw-flex-row tw-items-center tw-justify-center",
                      style: { height: m, width: w },
                      children: [
                        (0, a.jsx)(h.default, {
                          alt: "Unlocking Chart",
                          className: "tw-absolute",
                          src: tC,
                        }),
                        (0, a.jsxs)("svg", {
                          className: "tw-z-10",
                          height: m,
                          width: w,
                          children: [
                            (0, a.jsx)("title", {
                              children: "Unlocking Progress Chart",
                            }),
                            (0, a.jsxs)(tv.A, {
                              left: R,
                              top: U,
                              children: [
                                (0, a.jsx)(tM, {
                                  color: "hsl(var(--utility-gray-100))",
                                  r: Y,
                                  targetAngle: $,
                                }),
                                (0, a.jsx)(tM, {
                                  color: "hsl(var(--utility-brand-400))",
                                  r: Y,
                                  targetAngle: tx,
                                }),
                                (0, a.jsx)(tM, {
                                  color: "hsl(var(--utility-gray-100))",
                                  r: G,
                                  targetAngle: $,
                                }),
                                (0, a.jsx)(tM, {
                                  color: "hsl(var(--utility-brand-700))",
                                  r: G,
                                  targetAngle: td,
                                }),
                              ],
                            }),
                            (0, a.jsx)(p.P.foreignObject, {
                              animate: { opacity: 1, scale: 1 },
                              className: (0, d.cn)(
                                ("authenticated" !== L || !K || !u) &&
                                  "tw-fill-placeholder"
                              ),
                              exit: { opacity: 0, scale: 0.8 },
                              height: m,
                              initial: { opacity: 0, scale: 0.8 },
                              transition: { delay: 0.2, duration: 0.5 },
                              width: w,
                              x: 0,
                              y: 0,
                              children: (0, a.jsxs)("div", {
                                className:
                                  "tw-flex tw-flex-col tw-h-full tw-items-center tw-justify-center tw-pointer-events-none tw-relative",
                                children: [
                                  (0, a.jsx)(C.G, {
                                    className: (0, d.cn)(
                                      "tw-text-2xl tw-font-bold tw-text-primary",
                                      !tn && "tw-text-placeholder"
                                    ),
                                    forceNumberFlow: !0,
                                    value: tp,
                                  }),
                                  tn &&
                                    (0, a.jsx)("div", {
                                      className:
                                        "tw-absolute tw-bottom-0 tw-inset-x-0 tw-pointer-events-none tw-p-16",
                                      children: (0, a.jsxs)("div", {
                                        className:
                                          "tw-text-tertiary tw-text-sm tw-flex tw-items-center tw-flex-col tw-gap-1 tw-w-full",
                                        children: [
                                          (0, a.jsx)("span", {
                                            children:
                                              "claim" === tt
                                                ? "claimed out of"
                                                : "unlocked out of",
                                          }),
                                          (0, a.jsx)(tI.j, {
                                            symbol: n.Pv.WLFI_SYMBOL,
                                            value: Number(
                                              "claim" === tt ? O : J
                                            ),
                                            valueClassName:
                                              "tw-text-primary tw-text-sm tw-font-medium",
                                          }),
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                            }),
                            tn &&
                              (0, a.jsx)(p.P.foreignObject, {
                                animate: { opacity: 1, scale: 1 },
                                className: (0, d.cn)(
                                  ("authenticated" !== L || !K || !u) &&
                                    "tw-fill-placeholder"
                                ),
                                dominantBaseline: "middle",
                                exit: { opacity: 0, scale: 0.8 },
                                height: m,
                                initial: { opacity: 0, scale: 0.8 },
                                transition: { delay: 0.2, duration: 0.5 },
                                width: w,
                                x: 0,
                                y: 0,
                                children: (0, a.jsx)("div", {
                                  className:
                                    "tw-flex tw-h-full tw-items-start tw-justify-center tw-p-14",
                                  children: (0, a.jsx)(F.Button, {
                                    className: (0, d.cn)(
                                      "tw-text-tertiary hover:tw-text-foreground-button-ghost-hover tw-p-0 tw-transition-transform tw-duration-300 tw-ease-out ",
                                      "claim" === tt && "tw-rotate-180"
                                    ),
                                    onClick: () =>
                                      te("unlock" === tt ? "claim" : "unlock"),
                                    size: "icon-sm",
                                    variant: "link",
                                    children: (0, a.jsx)(M.A.arrowRightLeft, {
                                      className: "tw-size-5",
                                    }),
                                  }),
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "tw-flex tw-items-center tw-space-x-8 tw-text-tertiary tw-text-base",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "tw-flex tw-items-center tw-space-x-2",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "tw-h-2 tw-w-2 tw-rounded-full tw-bg-utility-brand-700",
                            }),
                            (0, a.jsx)("span", {
                              className: "tw-text-gray-300 tw-text-sm",
                              children: "Unlocked",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "tw-flex tw-items-center tw-space-x-2",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "tw-w-2 tw-h-2 tw-rounded-full tw-bg-utility-brand-400",
                            }),
                            (0, a.jsx)("span", {
                              className: "tw-text-gray-300 tw-text-sm",
                              children: "Claimed",
                            }),
                          ],
                        }),
                      ],
                    }),
                    tn &&
                      (0, a.jsxs)("div", {
                        className:
                          "tw-text-tertiary tw-text-sm tw-flex tw-items-center tw-justify-between tw-w-full tw-gap-1",
                        children: [
                          (0, a.jsxs)("span", {
                            className: "tw-flex tw-items-center tw-gap-1",
                            children: [
                              "Available to claim now",
                              " ",
                              (0, a.jsx)(Z, {
                                content: (0, a.jsx)(a.Fragment, {
                                  children:
                                    "The amount of tokens you can claim right now from all unlocking schedules.",
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsx)(tI.j, {
                            forceNumberFlow: !0,
                            symbol: n.Pv.WLFI_SYMBOL,
                            value: Number(B),
                            valueClassName:
                              "tw-text-primary tw-text-sm tw-font-medium",
                          }),
                        ],
                      }),
                  ],
                }),
                (0, a.jsxs)(c.wL, {
                  className:
                    "tw-flex tw-flex-col tw-gap-4 tw-items-center tw-justify-center tw-px-4 tw-py-2 tw-mb-2",
                  children: [
                    "authenticated" === L
                      ? tn
                        ? (0, a.jsxs)("div", {
                            className:
                              "tw-flex tw-items-center tw-gap-2 tw-w-full",
                            children: [
                              (0, a.jsx)(F.Button, {
                                className: "tw-flex-1",
                                disabled: tr,
                                onClick: () =>
                                  E({
                                    allocation: b,
                                    chainId: N,
                                    claimed: k,
                                    formattedTemplates: null != I ? I : [],
                                    unlockingStatus: u,
                                  }),
                                children: ta ? "Unlocking claimed" : "Claim",
                              }),
                              (0, a.jsx)(F.Button, {
                                className: "!tw-size-10",
                                onClick: () => S(),
                                size: "icon",
                                variant: "secondary",
                                children: (0, a.jsx)(M.A.history, {
                                  className: "tw-aspect-square tw-size-5",
                                }),
                              }),
                            ],
                          })
                        : (0, a.jsx)(F.Button, {
                            className: "tw-w-full",
                            disabled: ti,
                            onClick: () =>
                              P({
                                chainId: N,
                                formattedTemplates: null != I ? I : [],
                                totalAllocationAmount: b.toString(),
                                tradingStartTimestampMs: y,
                              }),
                            children: ts
                              ? "Unable to proceed"
                              : "Sign unlock agreement",
                          })
                      : (0, a.jsx)(tm.A, {}),
                    (0, a.jsx)(t_, {
                      isBlocked: ts,
                      isPaused: D,
                      isPausedLoading: z,
                      isUserCategoryEnabled: g,
                      tradingStartTimestampMs: y,
                      unlockingStatus: u,
                    }),
                  ],
                }),
              ],
            }),
            tn &&
              (0, a.jsx)(tL, {
                allocation: b,
                isActivated: u,
                remainingToUnlock: H,
              }),
          ],
        });
      }
      var tD = s(42847);
      let tT = to.P6 ? to.pq : i.r.id;
      function tO() {
        var t, e, s, i, c, w, d, u, x;
        let { status: p, currentAccount: f } = (0, tw.sA)(),
          { data: h, isLoading: g } = (0, X.b)(),
          [j, v, N] = null != h ? h : [],
          y = null != (e = null == j ? void 0 : j.result) && e,
          b = null == v ? void 0 : v.result,
          k = null != (s = null == N ? void 0 : N.result) ? s : BigInt(0),
          A = (null == N ? void 0 : N.result) ? 1e3 * Number(k) : 1 / 0,
          I = null != (i = null == b ? void 0 : b.isActivated) && i,
          L = null != (c = null == b ? void 0 : b.category) ? c : 0,
          P = null != (w = null == b ? void 0 : b.amount) ? w : BigInt(0),
          C = (0, r.J)(P, n.Pv.WLFI_DECIMALS),
          { data: E, isLoading: S } = (0, o.X)({
            contracts: [
              {
                abi: l.Jz.vester,
                address: n.Pv.WLFI_VESTER_ADDRESS,
                args: [L],
                functionName: "getCategoryInfo",
              },
              {
                abi: l.Jz.vester,
                address: n.Pv.WLFI_VESTER_ADDRESS,
                args: [L],
                functionName: "getAllCategoryTemplates",
              },
              {
                abi: l.Jz.vester,
                address: n.Pv.WLFI_VESTER_ADDRESS,
                args: [f],
                functionName: "claimed",
              },
            ],
            query: {
              enabled: y && L >= 0,
              refetchInterval: n.P.POLLING_INTERVAL / 2,
            },
          }),
          [F, M, _] = null != E ? E : [],
          z = null == F ? void 0 : F.result,
          D = null != (d = null == M ? void 0 : M.result) ? d : [],
          T = null != (u = null == _ ? void 0 : _.result) ? u : BigInt(0),
          O = null != (x = null == z ? void 0 : z.enabled) && x,
          { data: W, isLoading: B } = tD.FH.user.verify.useQuery(void 0, {
            enabled: "authenticated" === p,
          }),
          { data: R, isLoading: U } = tD.FH.user.unlockActivation.useQuery(
            void 0,
            { enabled: "authenticated" === p && I }
          ),
          Y = !(null == W ? void 0 : W.verified);
        return (0, a.jsx)("div", {
          className: "tw-flex tw-flex-col tw-gap-6 tw-max-w-6xl tw-mx-auto",
          children: (0, a.jsx)("div", {
            className: "tw-grid tw-grid-cols-1 tw-gap-4 lg:tw-grid-cols-8",
            children:
              "loading" === p || g || S || B || U
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(tg, {
                        className:
                          "tw-col-span-1 lg:tw-col-span-5 tw-order-2 lg:tw-order-1",
                      }),
                      (0, a.jsx)(m, {
                        className:
                          "tw-col-span-1 tw-order-1 lg:tw-order-2 lg:tw-col-span-3",
                      }),
                    ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(tf, {
                        allocation: P,
                        blockedAddress: Y,
                        categoryTemplates: D,
                        chainId: tT,
                        claimed: T,
                        className:
                          "tw-col-span-1 lg:tw-col-span-5 tw-order-2 lg:tw-order-1",
                        formattedTotalAllocationAmount: C,
                        isLegacyUser: null != y && y,
                        status: I,
                        tradingStartTimestampMs: A,
                        unlockingTxHash:
                          null == R || null == (t = R.unlockActivation)
                            ? void 0
                            : t.txHash,
                      }),
                      (0, a.jsx)(tz, {
                        allocation: P,
                        blockedAddress: Y,
                        categoryTemplates: D,
                        chainId: tT,
                        claimed: T,
                        className:
                          "tw-col-span-1 tw-order-1 lg:tw-order-2 lg:tw-col-span-3",
                        isLegacyUser: null != y && y,
                        isUserCategoryEnabled: O,
                        status: I,
                        tradingStartTimestampMs: A,
                      }),
                    ],
                  }),
          }),
        });
      }
    },
    36541: (t, e, s) => {
      "use strict";
      s.d(e, { N: () => d });
      var a = s(54568),
        l = s(7620),
        n = s(615),
        r = s(40615),
        i = s(29768);
      let o = (0, n.F)(
          "tw-relative tw-flex tw-w-full tw-gap-1.5 tw-rounded-xl tw-border tw-border-border tw-py-3 tw-pl-2 tw-pr-4",
          {
            defaultVariants: { variant: "default" },
            variants: {
              variant: {
                default: "tw-text-secondary [&>svg]:tw-bg-background-secondary",
                destructive:
                  "tw-border-error-border tw-bg-utility-error-50 [&>svg]:tw-border-error-border",
                success:
                  "tw-border-border-success tw-bg-utility-success-50 [&>svg]:tw-text-success",
                warning:
                  "tw-border-border-warning tw-bg-utility-warning-50 [&>svg]:tw-text-warning-foreground",
              },
            },
          }
        ),
        c = l.forwardRef((t, e) => {
          let { alertClassName: s, variant: l, ...n } = t;
          return (0, a.jsxs)("div", {
            className: (0, i.cn)(o({ variant: l }), s),
            ref: e,
            role: "alert",
            ...n,
            children: [
              (0, a.jsx)("div", {
                children: (0, a.jsx)(r.A, {
                  variant: null != l ? l : "default",
                }),
              }),
              (0, a.jsx)("div", {
                className: "tw-flex tw-w-full tw-items-center",
                children: n.children,
              }),
            ],
          });
        });
      (c.displayName = "Alert"),
        (l.forwardRef((t, e) => {
          let { className: s, ...l } = t;
          return (0, a.jsx)("h5", {
            className: (0, i.cn)("tw-mb-1 tw-font-semibold tw-text-primary", s),
            ref: e,
            ...l,
          });
        }).displayName = "AlertTitle");
      let w = l.forwardRef((t, e) => {
        let { className: s, ...l } = t;
        return (0, a.jsx)("div", {
          className: (0, i.cn)("tw-text-sm [&_p]:tw-leading-relaxed", s),
          ref: e,
          ...l,
        });
      });
      w.displayName = "AlertDescription";
      let d = l.forwardRef((t, e) => {
        let { children: s, className: l, ...n } = t;
        return (0, a.jsx)(c, {
          ref: e,
          ...n,
          children: (0, a.jsx)(w, { className: (0, i.cn)("", l), children: s }),
        });
      });
      d.displayName = "Warning";
    },
    37370: (t, e, s) => {
      "use strict";
      function a(t) {
        var e, s, a;
        return null !=
          (a = null == (e = (s = Error).isError) ? void 0 : e.call(s, t))
          ? a
          : t instanceof Error;
      }
      s.d(e, { b: () => a });
    },
    38120: (t, e, s) => {
      "use strict";
      s.d(e, { C: () => w });
      var a = s(62491),
        l = s(40160),
        n = s(7620),
        r = s(47298),
        i = s(64507),
        o = s(17680),
        c = s(30215);
      let w = (t) => {
        let { chainId: e } = t,
          s = (0, c.A)({ chainId: e }),
          { watchAssetAsync: w } = (0, i.z)();
        return n.useCallback(
          async (t) => {
            let { address: e, symbol: n, decimals: i, image: c } = t;
            try {
              let t = n;
              if (!t) {
                if (!s)
                  throw Error("Provider is required to fetch token data.");
                let l = new a.u(s),
                  { symbol: n } = await l.getTokenData(e);
                t = n;
              }
              return (
                await w({
                  options: { address: e, decimals: i, image: c, symbol: t },
                  type: "ERC20",
                }),
                (0, o.o)({
                  toastConfig: {
                    title: "Token added to wallet!",
                    variant: "success",
                  },
                }),
                !0
              );
            } catch (t) {
              t instanceof r.MI &&
              "wallet_watchAsset isn't implemented" === t.details
                ? (0, o.o)({
                    toastConfig: {
                      title: "Connected wallet does not support adding tokens.",
                      variant: "error",
                    },
                  })
                : t instanceof r.vx
                ? (0, o.o)({
                    toastConfig: {
                      title: "Request was rejected.",
                      variant: "warning",
                    },
                  })
                : (0, o.o)({
                    toastConfig: {
                      title: "Failed to add token to wallet.",
                      variant: "error",
                    },
                  }),
                l.Cp(t);
            }
            return !1;
          },
          [w, s]
        );
      };
    },
    42847: (t, e, s) => {
      "use strict";
      s.d(e, { FH: () => c, sr: () => d });
      var a = s(54568),
        l = s(87606),
        n = s(37611),
        r = s(54530),
        i = s(90438),
        o = s(11985);
      BigInt.prototype.toJSON = function () {
        return this.toString();
      };
      let c = (0, r.pY)(),
        w = c.createClient({
          links: [
            (0, n.$H)({
              enabled: (t) =>
                "down" === t.direction && t.result instanceof Error,
            }),
            (0, n.Lb)({
              fetch: async (t, e) => fetch(t, { ...e, credentials: "include" }),
              headers: () => {
                let t = new Headers();
                return (
                  t.set("x-trpc-source", "nextjs-react"),
                  (o.h.NEXT_PUBLIC_STAGE === o.L.development ||
                    o.h.NEXT_PUBLIC_STAGE === o.L.uat) &&
                    t.set("x-api-key", o.h.NEXT_PUBLIC_1),
                  t
                );
              },
              transformer: i.Ay,
              url: o.h.NEXT_PUBLIC_2,
            }),
          ],
        });
      function d(t) {
        let e = (0, l.jE)();
        return (0, a.jsx)(c.Provider, {
          client: w,
          queryClient: e,
          children: t.children,
        });
      }
    },
    58172: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => o });
      var a = s(54568),
        l = s(60844),
        n = s(27761),
        r = s(26080),
        i = s(32583);
      function o(t) {
        let { contentProps: e } = t,
          s = (0, l.Xr)(i.b);
        return (0, a.jsx)(n.w, {
          content: (0, a.jsx)("div", {
            className: "tw-select-text tw-cursor-text",
            children:
              "The full amount of tokens assigned to you, including those not available to unlock in your current unlocking schedules.",
          }),
          contentProps: {
            ...e,
            className: "tw-select-text tw-cursor-text",
            onClick: (t) => t.stopPropagation(),
            onMouseDown: (t) => t.stopPropagation(),
          },
          onOpenChange: (t) => {
            t &&
              s({
                eventName: r.zm.VIEW_TOOLTIP,
                properties: {
                  funnel: "landing-unlock",
                  tooltip: "total-allocation",
                },
              });
          },
          triggerProps: {
            onClick: (t) => t.stopPropagation(),
            onMouseDown: (t) => t.stopPropagation(),
          },
        });
      }
    },
    61846: (t, e, s) => {
      "use strict";
      s.d(e, { J: () => p, b: () => h });
      var a = s(67933),
        l = s(55775),
        n = s(13432),
        r = s(25060),
        i = s(2845),
        o = s(89303),
        c = s(29548);
      let w = 10n ** BigInt(n.Pv.WLFI_DECIMALS);
      function d(t) {
        return r.yf.unix(t).tz(r.yf.tz.guess()).format("MMM DD, 'YY @ hh:mm A");
      }
      function m(t, e) {
        let s =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : BigInt((0, r.yf)().unix()),
          a = w;
        return e.map((e) => {
          let {
            startTimestamp: l,
            endTimestamp: n,
            cliffTimestamp: r,
            percentageOfAllocation: i,
          } = e;
          if (s < r) return 0n;
          let o = i > a ? a : i;
          a = a > i ? a - i : 0n;
          let c = (t * o) / w;
          if (!n || s >= n) return c;
          let d = BigInt(n - l);
          return (c * (s - BigInt(l))) / d;
        });
      }
      let u = {
          enhanceTemplates: function (t, e, s) {
            let a = m(t, s),
              l = (function (t, e, s) {
                if (0n === e) return s.map(() => 0n);
                let a = Math.min(...s.map((t) => t.startTimestamp)),
                  l = Math.max(
                    ...s.map((t) => {
                      var e;
                      return null != (e = t.endTimestamp) ? e : 0;
                    }),
                    (0, r.yf)().unix()
                  ),
                  n = 0,
                  i = [];
                for (; a <= l; ) {
                  let r = m(t, s, BigInt((n = a + Math.floor((l - a) / 2)))),
                    o = r.reduce((t, e) => t + e, 0n);
                  if (o === e) {
                    i = r;
                    break;
                  }
                  o < e ? (a = n + 1) : (l = n - 1);
                }
                if (!i.length)
                  throw Error(
                    "Invalid claimed amount. Impossible to find the claimed amount."
                  );
                return i;
              })(t, e, s),
              i = w;
            return s.map((e, s) => {
              let {
                  startTimestamp: r,
                  endTimestamp: o,
                  cliffTimestamp: m,
                  percentageOfAllocation: u,
                } = e,
                x = d(r),
                p = d(m),
                f = o && o !== r ? d(o) : "N/A",
                h = u > i ? i : u;
              i = i > u ? i - u : 0n;
              let g = (t * h) / w,
                j = (0, c.J)(g, n.Pv.WLFI_DECIMALS),
                v = Number(j),
                N = a[s],
                y = (N * w) / g,
                b = (0, c.J)(N, n.Pv.WLFI_DECIMALS),
                k = Number(b),
                A = Number((0, c.J)(y, n.Pv.WLFI_DECIMALS)),
                I = l[s],
                L = (I * w) / g,
                P = (0, c.J)(I, n.Pv.WLFI_DECIMALS),
                C = Number(P),
                E = Number((0, c.J)(L, n.Pv.WLFI_DECIMALS)),
                S = g - I,
                F = (0, c.J)(S, n.Pv.WLFI_DECIMALS),
                M = Number(F),
                _ = N - I,
                z = (0, c.J)(_, n.Pv.WLFI_DECIMALS),
                D = Number(z),
                T = o ? (86400 * v) / (o - r) : 0;
              return {
                availableToClaimFormatted: z,
                availableToClaimWei: _,
                claimedAmountFormatted: P,
                claimedAmountWei: I,
                claimedPercentageWei: L,
                cliffTimestamp: m,
                cliffTimestampFormatted: p,
                endTimestamp: o,
                endTimestampFormatted: f,
                percentageOfAllocation: u,
                remainingToClaimFormatted: F,
                remainingToClaimWei: S,
                startTimestamp: r,
                startTimestampFormatted: x,
                templateAllocationFormatted: j,
                templateAllocationWei: g,
                unlockedAmountFormatted: b,
                unlockedAmountWei: N,
                unlockedPercentageWei: y,
                unsafe_availableToClaim: D,
                unsafe_claimedAmount: C,
                unsafe_claimedPercentage: E,
                unsafe_ratePerDay: T,
                unsafe_remainingToClaim: M,
                unsafe_templateAllocation: v,
                unsafe_unlockedAmount: k,
                unsafe_unlockedPercentage: A,
              };
            });
          },
        },
        x = {
          CLAIMED: "Claimed",
          COMPLETED: "Fully unlocked",
          IN_CLIFF: "In cliff",
          IN_PROGRESS: "Unlocking",
          NOT_STARTED: "Not started",
        },
        p = (t, e, s) =>
          (0, a.I)({
            gcTime: n.P.POLLING_INTERVAL / 6,
            queryFn: () =>
              (function (t, e) {
                return t.map((t) => {
                  let {
                    startTimestamp: s,
                    endTimestamp: a,
                    cliffTimestamp: l,
                  } = t;
                  return t.claimedAmountWei >= t.templateAllocationWei
                    ? { ...t, status: x.CLAIMED, statusVariant: "success" }
                    : (e >= l && 0 === a) || (0 !== a && e >= a)
                    ? { ...t, status: x.COMPLETED, statusVariant: "success" }
                    : e >= l
                    ? { ...t, status: x.IN_PROGRESS, statusVariant: "warning" }
                    : s <= e && e < l
                    ? { ...t, status: x.IN_CLIFF, statusVariant: "warning" }
                    : {
                        ...t,
                        status: x.NOT_STARTED,
                        statusVariant: "destructive",
                      };
                });
              })(u.enhanceTemplates(e, s, t), BigInt((0, r.yf)().unix())),
            queryKey: ["formatted-templates", t, e, s],
            refetchInterval: n.P.POLLING_INTERVAL / 12,
            refetchIntervalInBackground: !1,
            staleTime: n.P.POLLING_INTERVAL / 12,
          }),
        f = (t) => {
          if (!t) return { hasData: !1, needsPolling: !0 };
          let [, , e] = t,
            s =
              (null == e ? void 0 : e.result) &&
              (null == e ? void 0 : e.result) > 0n
                ? 1e3 * Number(e.result)
                : 0;
          return { hasData: !0, needsPolling: Date.now() < s };
        },
        h = () => {
          let { status: t, currentAccount: e } = (0, o.sA)();
          return (0, i.X)({
            contracts: [
              {
                abi: l.Jz.registry,
                address: n.Pv.WLFI_REGISTRY_ADDRESS,
                args: [e],
                functionName: "isLegacyUser",
              },
              {
                abi: l.Jz.registry,
                address: n.Pv.WLFI_REGISTRY_ADDRESS,
                args: [e],
                functionName: "getLegacyUserInfo",
              },
              {
                abi: l.Jz.token,
                address: n.Pv.WLFI_ADDRESS,
                functionName: "TRADING_START_TIMESTAMP",
              },
            ],
            query: {
              enabled: "authenticated" === t && !!e,
              refetchInterval: (t) => {
                let {
                    state: { data: e },
                  } = t,
                  { hasData: s, needsPolling: a } = f(e);
                return (!s || !!a) && n.P.POLLING_INTERVAL;
              },
              retry: 1,
              staleTime: (t) => {
                let {
                    state: { data: e },
                  } = t,
                  { hasData: s, needsPolling: a } = f(e);
                return s ? (a ? n.P.POLLING_INTERVAL : 1 / 0) : 0;
              },
            },
          });
        };
    },
    62721: (t, e, s) => {
      "use strict";
      s.d(e, { II: () => x, at: () => u });
      var a = s(54568),
        l = s(7620),
        n = s(30149),
        r = s(71402),
        i = s(69847),
        o = s(29768);
      let c = { dark: ".dark", light: "" },
        w = (t) => {
          let { id: e, config: s } = t,
            l = Object.entries(s).filter((t) => {
              let [, e] = t;
              return e.theme || e.color;
            });
          return l.length
            ? (0, a.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html: Object.entries(c)
                    .map((t) => {
                      let [s, a] = t;
                      return "\n"
                        .concat(a, " [data-chart=")
                        .concat(e, "] {\n")
                        .concat(
                          l
                            .map((t) => {
                              var e;
                              let [a, l] = t,
                                n =
                                  (null == (e = l.theme) ? void 0 : e[s]) ||
                                  l.color;
                              return n
                                ? "  --color-".concat(a, ": ").concat(n, ";")
                                : null;
                            })
                            .join("\n"),
                          "\n}\n"
                        );
                    })
                    .join("\n"),
                },
              })
            : null;
        },
        d = l.createContext(null);
      function m() {
        let t = l.useContext(d);
        if (!t)
          throw Error("useChart must be used within a <ChartContainer />");
        return t;
      }
      let u = l.forwardRef((t, e) => {
        let { id: s, children: r, config: i, ...o } = t,
          c = l.useId(),
          m = "chart-".concat(s || c.replace(/:/g, ""));
        return (0, a.jsx)(d.Provider, {
          value: { config: i },
          children: (0, a.jsxs)("div", {
            "data-chart": m,
            ref: e,
            ...o,
            children: [
              (0, a.jsx)(w, { config: i, id: m }),
              (0, a.jsx)(n.u, { children: r }),
            ],
          }),
        });
      });
      u.displayName = "Chart";
      let x = r.m;
      function p(t, e, s) {
        if ("object" != typeof e || null === e) return;
        let a =
            "payload" in e && "object" == typeof e.payload && null !== e.payload
              ? e.payload
              : void 0,
          l = s;
        return (
          s in e && "string" == typeof e[s]
            ? (l = e[s])
            : a && s in a && "string" == typeof a[s] && (l = a[s]),
          l in t ? t[l] : t[s]
        );
      }
      (l.forwardRef((t, e) => {
        let {
            active: s,
            payload: n,
            className: r,
            indicator: i = "dot",
            hideLabel: c = !1,
            hideIndicator: w = !1,
            label: d,
            labelFormatter: u,
            labelClassName: x,
            formatter: f,
            color: h,
            nameKey: g,
            labelKey: j,
          } = t,
          { config: v } = m(),
          N = l.useMemo(() => {
            var t;
            if (c || !(null == n ? void 0 : n.length)) return null;
            let [e] = n,
              s = "".concat(j || e.dataKey || e.name || "value"),
              l = p(v, e, s),
              r =
                j || "string" != typeof d
                  ? null == l
                    ? void 0
                    : l.label
                  : (null == (t = v[d]) ? void 0 : t.label) || d;
            return u
              ? (0, a.jsx)("div", {
                  className: (0, o.cn)("tw-font-medium", x),
                  children: u(r, n),
                })
              : r
              ? (0, a.jsx)("div", {
                  className: (0, o.cn)("tw-font-medium", x),
                  children: r,
                })
              : null;
          }, [d, u, n, c, x, v, j]);
        if (!s || !(null == n ? void 0 : n.length)) return null;
        let y = 1 === n.length && "dot" !== i;
        return (0, a.jsxs)("div", {
          className: (0, o.cn)(
            "tw-grid tw-min-w-32 tw-max-w-xs tw-items-start tw-gap-1.5 tw-rounded-lg tw-border tw-border-border/50 tw-bg-background tw-px-2.5 tw-py-1.5 tw-text-xs tw-shadow-xl",
            r
          ),
          ref: e,
          children: [
            y ? null : N,
            (0, a.jsx)("div", {
              className: "tw-grid tw-gap-1.5",
              children: n.map((t, e) => {
                let s = "".concat(g || t.name || t.dataKey || "value"),
                  l = p(v, t, s),
                  n = h || t.payload.fill || t.color;
                return (0, a.jsx)(
                  "div",
                  {
                    children:
                      f && void 0 !== t.value && t.name
                        ? f(t.value, t.name, t, e, t.payload)
                        : (0, a.jsxs)(a.Fragment, {
                            children: [
                              (null == l ? void 0 : l.icon)
                                ? (0, a.jsx)(l.icon, {})
                                : !w &&
                                  (0, a.jsx)("div", {
                                    className: (0, o.cn)(
                                      "tw-shrink-0 tw-rounded-[2px] tw-border-[--color-border] tw-bg-[--color-bg]",
                                      {
                                        "h-2.5 w-2.5": "dot" === i,
                                        "my-0.5": y && "dashed" === i,
                                        "w-0 border-[1.5px] border-dashed bg-transparent":
                                          "dashed" === i,
                                        "w-1": "line" === i,
                                      }
                                    ),
                                    style: {
                                      "--color-bg": n,
                                      "--color-border": n,
                                    },
                                  }),
                              (0, a.jsxs)("div", {
                                className: (0, o.cn)(
                                  "tw-flex tw-flex-1 tw-justify-between",
                                  y ? "tw-items-end" : "tw-items-center"
                                ),
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "tw-grid tw-gap-1.5",
                                    children: [
                                      y ? N : null,
                                      (0, a.jsx)("span", {
                                        className: "",
                                        children:
                                          (null == l ? void 0 : l.label) ||
                                          t.name,
                                      }),
                                    ],
                                  }),
                                  t.value &&
                                    (0, a.jsx)("span", {
                                      className:
                                        "tw-font-mono tw-font-medium tw-tabular-nums tw-text-foreground",
                                      children: t.value.toString(),
                                    }),
                                ],
                              }),
                            ],
                          }),
                  },
                  t.dataKey
                );
              }),
            }),
          ],
        });
      }).displayName = "ChartTooltip"),
        i.s,
        (l.forwardRef((t, e) => {
          let {
              className: s,
              hideIcon: l = !1,
              payload: n,
              verticalAlign: r = "bottom",
              nameKey: i,
            } = t,
            { config: c } = m();
          return (null == n ? void 0 : n.length)
            ? (0, a.jsx)("div", {
                className: (0, o.cn)(
                  "tw-flex tw-items-center tw-justify-center tw-gap-4",
                  "top" === r ? "tw-pb-3" : "tw-pt-3",
                  s
                ),
                ref: e,
                children: n.map((t) => {
                  let e = "".concat(i || t.dataKey || "value"),
                    s = p(c, t, e);
                  return (0, a.jsxs)(
                    "div",
                    {
                      children: [
                        (null == s ? void 0 : s.icon) && !l
                          ? (0, a.jsx)(s.icon, {})
                          : (0, a.jsx)("div", {
                              className:
                                "tw-size-2 tw-shrink-0 tw-rounded-[2px]",
                              style: { backgroundColor: t.color },
                            }),
                        null == s ? void 0 : s.label,
                      ],
                    },
                    t.value
                  );
                }),
              })
            : null;
        }).displayName = "ChartLegend");
    },
    63353: (t, e, s) => {
      "use strict";
      s.d(e, {
        Wu: () => c,
        ZB: () => o,
        Zp: () => r,
        aR: () => i,
        wL: () => w,
      });
      var a = s(54568),
        l = s(7620),
        n = s(29768);
      let r = l.forwardRef((t, e) => {
        let { className: s, ...l } = t;
        return (0, a.jsx)("div", {
          className: (0, n.cn)(
            "tw-w-full tw-rounded-xl tw-border tw-border-border-secondary tw-bg-background-secondary tw-text-primary",
            s
          ),
          ref: e,
          ...l,
        });
      });
      r.displayName = "Card";
      let i = l.forwardRef((t, e) => {
        let { className: s, ...l } = t;
        return (0, a.jsx)("div", {
          className: (0, n.cn)(
            "tw-flex tw-items-center tw-px-4 tw-py-5 md:tw-px-6",
            s
          ),
          ref: e,
          ...l,
        });
      });
      i.displayName = "CardHeader";
      let o = l.forwardRef((t, e) => {
        let { className: s, ...l } = t;
        return (0, a.jsx)("h3", {
          className: (0, n.cn)(
            "tw-text-lg tw-font-semibold tw-text-primary",
            s
          ),
          ref: e,
          ...l,
        });
      });
      (o.displayName = "CardTitle"),
        (l.forwardRef((t, e) => {
          let { className: s, ...l } = t;
          return (0, a.jsx)("p", {
            className: (0, n.cn)("tw-text-sm", s),
            ref: e,
            ...l,
          });
        }).displayName = "CardDescription");
      let c = l.forwardRef((t, e) => {
        let { className: s, ...l } = t;
        return (0, a.jsx)("div", { className: (0, n.cn)("", s), ref: e, ...l });
      });
      c.displayName = "CardContent";
      let w = l.forwardRef((t, e) => {
        let { className: s, ...l } = t;
        return (0, a.jsx)("div", { className: (0, n.cn)("", s), ref: e, ...l });
      });
      w.displayName = "CardFooter";
    },
    77973: (t, e, s) => {
      "use strict";
      s.d(e, { Zn: () => m, k3: () => u, q3: () => w });
      var a = s(54568),
        l = s(60844),
        n = s(7620),
        r = s(28359),
        i = s(10558),
        o = s(26080),
        c = s(32583),
        w = (function (t) {
          return (
            (t.UnlockStartDialog = "UnlockStart"),
            (t.UnlockClaim = "UnlockClaim"),
            (t.UnlockAgreement = "UnlockAgreement"),
            (t.UnlockHistory = "UnlockHistory"),
            t
          );
        })({});
      let d = n.createContext({}),
        m = (t) => {
          let { children: e } = t,
            {
              setMainTxState: s,
              setApprovalTxState: w,
              setGasLimit: m,
              setTxError: u,
            } = (0, i.Fn)(),
            [x, p] = n.useState(),
            [f, h] = n.useState({}),
            g = (0, l.Xr)(c.b);
          return (0, a.jsx)(d, {
            value: {
              args: f,
              close: () => {
                p(void 0), h({}), s({}), w({}), m(""), u(void 0), (0, r.cT)(!1);
              },
              closeWithCb: (t) => {
                p(void 0), h({}), s({}), w({}), m(""), u(void 0), t();
              },
              openUnlockAgreement: (t) => {
                let { totalAllocationAmount: e } = t;
                p("UnlockAgreement"),
                  h({ totalAllocationAmount: e }),
                  g({
                    eventName: o.zm.OPEN_MODAL,
                    properties: {
                      modal: "UnlockAgreement",
                      totalAllocationAmount: e,
                    },
                  });
              },
              openUnlockClaim: (t) => {
                let {
                  chainId: e,
                  allocation: s,
                  claimed: a,
                  formattedTemplates: l,
                  unlockingStatus: n,
                } = t;
                p("UnlockClaim"),
                  h({
                    allocation: s,
                    chainId: e,
                    claimed: a,
                    formattedTemplates: l,
                    unlockingStatus: n,
                  }),
                  g({
                    eventName: o.zm.OPEN_MODAL,
                    properties: {
                      allocation: s,
                      chainId: e,
                      claimed: a,
                      formattedTemplates: l,
                      modal: "UnlockClaim",
                      unlockingStatus: n,
                    },
                  });
              },
              openUnlockHistory: () => {
                p("UnlockHistory"),
                  g({
                    eventName: o.zm.OPEN_MODAL,
                    properties: { modal: "UnlockHistory" },
                  });
              },
              openUnlockStart: (t) => {
                let {
                  totalAllocationAmount: e,
                  chainId: s,
                  tradingStartTimestampMs: a,
                  formattedTemplates: l,
                } = t;
                p("UnlockStart"),
                  h({
                    chainId: s,
                    formattedTemplates: l,
                    totalAllocationAmount: e,
                    tradingStartTimestampMs: a,
                  }),
                  g({
                    eventName: o.zm.OPEN_MODAL,
                    properties: { modal: "UnlockStart" },
                  });
              },
              type: x,
            },
            children: e,
          });
        },
        u = () => {
          let t = n.useContext(d);
          if (void 0 === t)
            throw Error("useModalContext must be used within a ModalProvider");
          return t;
        };
    },
    89520: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => o });
      var a = s(54568),
        l = s(60844),
        n = s(27761),
        r = s(26080),
        i = s(32583);
      function o(t) {
        let { contentProps: e } = t,
          s = (0, l.Xr)(i.b);
        return (0, a.jsx)(n.w, {
          content: (0, a.jsx)("div", {
            className: "tw-select-text tw-cursor-text",
            children:
              "The amount of tokens still locked and not yet available.",
          }),
          contentProps: {
            ...e,
            className: "tw-select-text tw-cursor-text",
            onClick: (t) => t.stopPropagation(),
            onMouseDown: (t) => t.stopPropagation(),
          },
          onOpenChange: (t) => {
            t &&
              s({
                eventName: r.zm.VIEW_TOOLTIP,
                properties: {
                  funnel: "landing-unlock",
                  tooltip: "remaining-to-unlock",
                },
              });
          },
          triggerProps: {
            onClick: (t) => t.stopPropagation(),
            onMouseDown: (t) => t.stopPropagation(),
          },
        });
      }
    },
    94161: (t, e, s) => {
      Promise.resolve().then(s.bind(s, 36470)),
        Promise.resolve().then(s.bind(s, 23493));
    },
  },
  (t) => {
    t.O(
      0,
      [
        9386, 3387, 1834, 7261, 8745, 3970, 160, 787, 887, 4154, 747, 1504,
        6553, 5461, 4011, 7653, 7362, 3354, 4627, 7478, 1239, 1675, 9169, 4050,
        9890, 293, 9420, 7453, 60, 9499, 4692, 7004, 2140, 5377, 7065, 8803,
        4297, 587, 1902, 7358,
      ],
      () => t((t.s = 94161))
    ),
      (_N_E = t.O());
  },
]);
