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
      (t._sentryDebugIds[e] = "547f037e-3720-4a31-89f7-2c6b9c2f389b"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-547f037e-3720-4a31-89f7-2c6b9c2f389b"));
  })();
} catch (t) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [936],
  {
    5023: (t, e, i) => {
      "use strict";
      i.d(e, { N: () => s });
      var r = i(54568),
        n = i(27261),
        a = i.n(n),
        o = i(29768);
      let s = (t) => {
        let { className: e, ...i } = t;
        return (0, r.jsx)(a(), {
          className: (0, o.cn)(
            "tw-outline-none focus-visible:tw-shadow-button-focus-simple",
            e
          ),
          ...i,
        });
      };
    },
    8960: (t, e, i) => {
      "use strict";
      i.d(e, {
        AK: () => g,
        XJ: () => A,
        NB: () => T,
        wY: () => p,
        bL: () => E,
        p9: () => m,
      });
      var r = i(40160),
        n = i(79924),
        a = i(58369),
        o = i(11985),
        s = i(91912);
      function l() {
        return (
          (function () {
            if ("undefined" == typeof navigator) return !1;
            let t = navigator.doNotTrack;
            return "1" === t || "yes" === t;
          })() ||
          ("undefined" != typeof navigator &&
            !0 === navigator.globalPrivacyControl)
        );
      }
      let c = (0, n.eU)((t) => {
          let e = t(s.pU),
            i = l();
          return "true" === e && !i;
        }),
        d = (0, n.eU)(!0),
        w = (0, n.eU)(!1),
        u = (0, n.eU)(null, (t, e) => {
          let i = "true" === t(s.pU),
            r = t(w),
            n = o.h.NEXT_PUBLIC_MIXPANEL_ID,
            c = o.h.NEXT_PUBLIC_GOOGLE_ID;
          if (!l()) {
            if (
              (r ||
                (a.A.init(n, {
                  debug: o.h.NEXT_PUBLIC_STAGE !== o.L.production,
                  ip: !1,
                  opt_out_tracking_by_default: !0,
                  record_sessions_percent: 1,
                  verbose: o.h.NEXT_PUBLIC_STAGE !== o.L.production,
                }),
                e(w, !0)),
              i)
            ) {
              var d, u;
              a.A.opt_in_tracking(),
                window.gtag("consent", "update", {
                  analytics_storage: "granted",
                }),
                null == (d = (u = window).gtag) ||
                  d.call(u, "config", c, {
                    page_path: window.location.pathname,
                  });
              return;
            }
            a.A.opt_out_tracking(),
              c &&
                window.gtag("consent", "update", {
                  analytics_storage: "denied",
                });
          }
        }),
        A = (0, n.eU)(null, (t, e) => {
          let i = t(s.pU),
            r = t(w);
          null === i || r || e(u);
        }),
        g = (0, n.eU)(null, (t, e) => {
          if (l()) {
            e(s.pU, "false"), e(d, !1), e(u);
            return;
          }
          e(s.pU, "true"), e(d, !1), e(u);
        }),
        T = (0, n.eU)(null, (t, e) => {
          e(s.pU, "false"), e(d, !1), e(u);
        }),
        p = (0, n.eU)(null, (t, e, i) => {
          e(s.pU, null), e(d, i);
        }),
        m = (0, n.eU)(null, (t, e, i) => {
          let { url: n, properties: s } = i,
            l = t(c),
            d = t(w),
            u = o.h.NEXT_PUBLIC_GOOGLE_ID;
          if (!l || !d) return;
          let A = {
            ...s,
            referrer: document.referrer,
            tenant: "common",
            title: document.title,
            url: n,
          };
          try {
            u &&
              window.gtag &&
              window.gtag("config", u, { page_path: n, ...A }),
              a.A.track("Page View", A);
          } catch (t) {
            console.error("Error tracking pageview:", t), (0, r.Cp)(t);
          }
        }),
        E = (0, n.eU)(null, (t, e, i) => {
          let { eventName: n, properties: s } = i,
            l = t(c),
            d = t(w);
          if (!l || !d) return;
          let u = o.h.NEXT_PUBLIC_GOOGLE_ID;
          try {
            d && a.A.track(n, s),
              u && window.gtag && window.gtag("event", n, { ...s, send_to: u });
          } catch (t) {
            console.error("Error tracking event:", t), (0, r.Cp)(t);
          }
        });
    },
    13432: (t, e, i) => {
      "use strict";
      i.d(e, {
        DG: () => n,
        P: () => E,
        Pv: () => c,
        Um: () => b,
        p4: () => N,
        w4: () => C,
      });
      var r = i(68266),
        n = {};
      (0, r.V)(n, { APPROVAL_GAS_LIMIT: () => a, USDC_ADDRESS: () => o });
      var a = "45000",
        o = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
      (0, r.V)({}, { selectors: () => s });
      var s = {};
      (0, r.V)(s, { mainnet: () => l });
      var l = {
          bsc: 0x9d70576d8e253bcfn,
          ethereum: 0x45849994fc9c7b15n,
          plume: 0xf8946d7c5b972a83n,
        },
        c = {};
      (0, r.V)(c, {
        UNISWAP_V3_ROUTER_ADDRESS: () => m,
        USD1_ADDRESS: () => p,
        USD1_LEGACY_ADDRESS: () => T,
        WLFI_ADDRESS: () => d,
        WLFI_DECIMALS: () => A,
        WLFI_REGISTRY_ADDRESS: () => w,
        WLFI_SYMBOL: () => u,
        WLFI_VESTER_ADDRESS: () => g,
      });
      var d = "0xda5e1988097297dcdc1f90d4dfe7909e847cbef6",
        w = "0x4f61a99e42e21ea3c3eaf9b1b30fb80a7900d3ce",
        u = "WLFI",
        A = 18,
        g = "0x74b4f6a2e579d730aacb9dd23cfbbaeb95029583",
        T = "0x8d0d000ee44948fc98c9b98a4fa4921476f08b0d",
        p = "0x111111d2bf19e43c34263401e0cad979ed1cdb61",
        m = "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
        E = {};
      (0, r.V)(E, { POLLING_INTERVAL: () => h });
      var h = 6e4,
        N = {};
      (0, r.V)(N, { statement: () => _ });
      var _ = "Sign in with Ethereum to World Liberty Financial",
        b = {};
      (0, r.V)(b, {
        BNB_ADDRESS: () => x,
        ETHEREUM_ADDRESS: () => f,
        PLUME_ADDRESS: () => O,
        SYMBOL: () => I,
        TRON_ADDRESS: () => S,
      });
      var f = T,
        x = T,
        O = p,
        S = "TPFqcBAaaUMCSVRCqPaQ9QnzKhmuoLR6Rc",
        I = "USD1",
        C = "static.worldlibertyfinancial.com";
    },
    14989: (t, e, i) => {
      "use strict";
      i.d(e, { PartnersSection: () => u });
      var r = i(54568),
        n = i(80747),
        a = i(61773),
        o = i(76917),
        s = i(29768),
        l = i(27118);
      let c = [
          {
            height: "tw-h-[26px]",
            id: "binance",
            logo: {
              src: "/_next/static/media/binance.9ad290e6.svg",
              height: 26,
              width: 127,
              blurWidth: 0,
              blurHeight: 0,
            },
            name: "Binance",
            position: 1,
          },
          {
            height: "tw-h-[28px]",
            id: "bitgo",
            logo: {
              src: "/_next/static/media/bitgo.7183118b.svg",
              height: 28,
              width: 83,
              blurWidth: 0,
              blurHeight: 0,
            },
            name: "BitGo",
            position: 2,
          },
          {
            height: "tw-h-[28px]",
            id: "chainlink",
            logo: {
              src: "/_next/static/media/chainlink.91d10047.svg",
              height: 28,
              width: 112,
              blurWidth: 0,
              blurHeight: 0,
            },
            name: "Chainlink",
            position: 3,
          },
          {
            height: "tw-h-[25px]",
            id: "bitget",
            logo: {
              src: "/_next/static/media/bitget.0d027854.svg",
              height: 25,
              width: 80,
              blurWidth: 0,
              blurHeight: 0,
            },
            name: "Bitget",
            position: 4,
          },
          {
            height: "tw-h-[26px]",
            id: "bybit",
            logo: {
              src: "/_next/static/media/bybit.0664c032.svg",
              height: 26,
              width: 67,
              blurWidth: 0,
              blurHeight: 0,
            },
            name: "Bybit",
            position: 5,
          },
          {
            height: "tw-h-[21px]",
            id: "gateio",
            logo: {
              src: "/_next/static/media/gateio.94b3731b.svg",
              height: 22,
              width: 99,
              blurWidth: 0,
              blurHeight: 0,
            },
            name: "Gate.io",
            position: 6,
          },
        ].sort((t, e) => t.position - e.position),
        d = Array.from({ length: 20 }, (t) => c.map((t) => ({ ...t }))).flat(),
        w = (t) => {
          let {
            src: e,
            className: i,
            index: n,
            id: o,
            heightClass: c,
            ...d
          } = t;
          return (0, r.jsx)("div", {
            className: "tw-shrink-0",
            children: (0, r.jsx)("div", {
              className:
                "tw-flex tw-h-12 tw-items-center tw-justify-center tw-px-4",
              "data-pw": ""
                .concat(l.l.LANDING.HOMEPAGE.PARTNERS_SECTION_ITEM, "-")
                .concat(o),
              children: (0, r.jsx)(a.default, {
                alt: "Picture",
                className: (0, s.cn)(c, "tw-w-auto", i),
                loading: n < 8 ? "eager" : "lazy",
                src: e,
                ...d,
              }),
            }),
          });
        };
      function u() {
        let t = 10 * d.length,
          e = 572 * d.length;
        return (0, r.jsx)(o.w, {
          className: "!tw-gap-4",
          "data-pw": l.l.LANDING.HOMEPAGE.PARTNERS_SECTION,
          titleProps: {
            as: "h3",
            children: (0, r.jsx)(r.Fragment, {
              children: "Building partnerships with industry leaders",
            }),
            className:
              "tw-text-tertiary !tw-text-xl tw-font-normal tw-bg-transparent",
            variant: "gray",
          },
          children: (0, r.jsxs)("div", {
            className: "tw-relative tw-w-full tw-max-w-6xl tw-overflow-hidden",
            children: [
              (0, r.jsx)("div", {
                className:
                  "tw-absolute tw-inset-y-0 tw-left-0 tw-z-10 tw-h-full tw-w-10 tw-bg-dark-fade-to-right md:tw-w-16",
              }),
              (0, r.jsx)(n.P.div, {
                animate: { x: [0, -e / 2] },
                className:
                  "tw-flex tw-h-[80px] tw-w-max tw-flex-row tw-items-center tw-justify-start tw-gap-12",
                transition: {
                  duration: t,
                  ease: "linear",
                  repeat: 1 / 0,
                  repeatType: "loop",
                },
                children: d.map((t, e) =>
                  (0, r.jsx)(
                    w,
                    { heightClass: t.height, id: t.id, index: e, src: t.logo },
                    t.logo + e
                  )
                ),
              }),
              (0, r.jsx)("div", {
                className:
                  "tw-absolute tw-inset-y-0 tw-right-0 tw-h-full tw-w-10 tw-bg-dark-fade-to-left md:tw-w-16",
              }),
            ],
          }),
        });
      }
    },
    16423: (t, e, i) => {
      "use strict";
      i.d(e, { ProductsSection: () => A });
      var r = i(54568),
        n = i(61773),
        a = i(76917),
        o = i(23493),
        s = i(47227),
        l = i(5023);
      let c = {
          src: "/_next/static/media/soon.354bb332.png",
          height: 252,
          width: 828,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAADFBMVEUkIBUfGhYjHxYiHBVVUE9tAAAABHRSTlM7XE5s2+GBFgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAABRJREFUeJxjYGYAAyYGJmZGEGACAACUABKgO/d6AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 2,
        },
        d = {
          src: "/_next/static/media/tools-banner.50a6c1a8.png",
          height: 622,
          width: 900,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAVFBMVEV/ZA5aRRadcw6rhx+4hhZPNwJeQQNcRAdXOgGNcyp+WQqTcBhHMQT/wiRcPQFbPwNsTAZ4WQuJYg1VOQFzVxKCYg66iBOUZwxYPQSxgxRzVAujdQZyoVT7AAAAGnRSTlMCKZQYLmFGGX3zML45FcLZbp+TpH7400/0rP3Jbv8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA2SURBVHicBcGHAYAgEACxoz5NAbuw/54kwJaOrA1W23Tl+RO7AXU/RAVyfi+jNu+ch7CHIgILMFMBxEBrmSMAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 6,
        };
      var w = i(32305),
        u = i(27118);
      function A() {
        return (0, r.jsx)(a.w, {
          "data-pw": u.l.LANDING.HOMEPAGE.PRODUCTS_SECTION,
          subtitleProps: {
            as: "h4",
            children: (0, r.jsx)(r.Fragment, {
              children:
                "Designing the core products of tomorrow's financial system — for institutions and individuals alike.",
            }),
          },
          titleProps: {
            as: "h3",
            children: (0, r.jsx)(r.Fragment, { children: "Our products" }),
            id: "products-section",
            variant: "gray",
          },
          children: (0, r.jsxs)("div", {
            className:
              "tw-grid tw-max-w-6xl tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6",
            children: [
              (0, r.jsxs)(o.AnimateInView, {
                className:
                  "tw-relative tw-rounded-md tw-border tw-border-border tw-bg-background lg:tw-row-span-2 tw-flex tw-flex-col",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-shadow-input tw-rounded-md tw-z-2 tw-pointer-events-none",
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "tw-relative tw-z-[-2] tw-overflow-hidden tw-bg-gradient-to-b tw-from-utility-brand-50/20 tw-to-background tw-min-h-60 md:tw-min-h-52 tw-flex tw-items-center tw-justify-center tw-px-6 tw-flex-1 tw-rounded-t-md lg:tw-px-0",
                    children: [
                      (0, r.jsx)(n.default, {
                        alt: "USD1",
                        className:
                          "tw-pointer-events-none tw-absolute tw-top-0 tw-mt-4 tw-w-full tw-z-[-2] lg:tw-static lg:tw-object-cover lg:tw-h-[80%]",
                        loading: "lazy",
                        src: d,
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "tw-absolute tw-bottom-0 tw-z-[-1] tw-bg-gradient-to-t tw-from-background tw-to-background/0 tw-h-16 tw-w-full",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "tw-py-6 tw-px-4 tw-flex tw-flex-col tw-gap-4 md:tw-px-6",
                    children: [
                      (0, r.jsxs)("p", {
                        className:
                          "tw-text-tertiary md:tw-text-lg tw-font-medium",
                        children: [
                          (0, r.jsx)("span", {
                            className: "tw-text-primary",
                            children: "USD1.",
                          }),
                          " The US Dollar stablecoin upgraded for a new era of finance — stable, secure, and transparent by design.",
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "tw-flex tw-gap-2",
                        children: [
                          (0, r.jsx)(s.Button, {
                            asChild: !0,
                            className: "tw-w-full md:tw-w-fit",
                            "data-pw": u.l.LANDING.HOMEPAGE.USD1_GET_BUTTON,
                            children: (0, r.jsx)(l.N, {
                              href: w.C.routes.providers,
                              children: "Get USD1",
                            }),
                          }),
                          (0, r.jsx)(s.Button, {
                            asChild: !0,
                            className: "tw-w-full md:tw-w-fit",
                            "data-pw": u.l.LANDING.HOMEPAGE.USD1_SEE_BUTTON,
                            variant: "secondary",
                            children: (0, r.jsx)(l.N, {
                              href: w.C.routes.usd1,
                              children: "See USD1",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)(o.AnimateInView, {
                className:
                  "tw-relative tw-rounded-md tw-border tw-border-border tw-bg-background",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-shadow-input tw-rounded-md tw-z-2 tw-pointer-events-none",
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "tw-relative tw-z-[-2] tw-bg-gradient-to-b tw-from-utility-brand-50/20 tw-to-background tw-min-h-60 tw-flex md:tw-min-h-52 tw-items-center tw-justify-center tw-px-6 tw-rounded-t-md lg:tw-px-16",
                    children: [
                      (0, r.jsx)(n.default, {
                        alt: "WLFI App.",
                        className:
                          "tw-px-2 xs:tw-px-8 sm:!tw-px-16 md:!tw-px-32 lg:!tw-px-4 2xl:!tw-px-8",
                        src: c,
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "tw-absolute tw-bottom-0 tw-z-[-2] tw-bg-gradient-to-t tw-from-background tw-to-background/0 tw-h-16 tw-w-full",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "tw-py-6 tw-px-4 tw-flex tw-flex-col tw-gap-4 md:tw-px-6 ",
                    children: [
                      (0, r.jsxs)("p", {
                        className:
                          "tw-text-tertiary md:tw-text-lg tw-font-medium",
                        children: [
                          (0, r.jsx)("span", {
                            className: "tw-text-primary",
                            children: "WLFI App.",
                          }),
                          " Deposit crypto via wallet or bank account. Spend by accessing your liquidity anytime.",
                        ],
                      }),
                      (0, r.jsx)(s.Button, {
                        className: "tw-w-full md:tw-w-fit",
                        disabled: !0,
                        children: "Coming Soon",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)(o.AnimateInView, {
                className:
                  "tw-relative tw-rounded-md tw-border tw-border-border",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-shadow-input tw-rounded-md tw-z-2 tw-pointer-events-none",
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "tw-relative tw-z-[-2] tw-bg-gradient-to-b tw-from-utility-brand-50/20 tw-to-background tw-min-h-60 tw-flex md:tw-min-h-52 tw-items-center tw-justify-center tw-px-6 tw-rounded-t-md lg:tw-px-16",
                    children: [
                      (0, r.jsx)(n.default, {
                        alt: "Lend & Borrow.",
                        className:
                          "tw-px-2 xs:tw-px-8 sm:!tw-px-16 md:!tw-px-32 lg:!tw-px-4 2xl:!tw-px-8",
                        src: c,
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "tw-absolute tw-bottom-0 tw-z-[-2] tw-bg-gradient-to-t tw-from-background tw-to-background/0 tw-h-16 tw-w-full",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "tw-py-6 tw-px-4 tw-flex tw-flex-col tw-gap-4 md:tw-px-6",
                    children: [
                      (0, r.jsxs)("p", {
                        className:
                          "tw-text-tertiary md:tw-text-lg tw-font-medium",
                        children: [
                          (0, r.jsx)("span", {
                            className: "tw-text-primary",
                            children: "Lend & Borrow.",
                          }),
                          " Supply digital assets and borrow against your holdings. Monitor risk easily with a real-time health factor.",
                        ],
                      }),
                      (0, r.jsx)(s.Button, {
                        className: "tw-w-full md:tw-w-fit",
                        disabled: !0,
                        children: "Coming Soon",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    23228: (t, e, i) => {
      "use strict";
      i.d(e, { U: () => r });
      let r = function (t) {
        var e;
        let i =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "header",
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
          n = document.querySelector(t);
        if (!n) return;
        let a = document.querySelector(i),
          o = null != (e = null == a ? void 0 : a.clientHeight) ? e : 0,
          s = n.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ behavior: "smooth", top: s - (o + r) });
      };
    },
    23493: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { AnimateInView: () => l });
      var r = i(54568),
        n = i(11376),
        a = i(80747),
        o = i(7620),
        s = i(29768);
      let l = (t) => {
        let {
            children: e,
            as: i = "div",
            type: l = "up",
            delay: c = 0,
            options: d = { amount: 0.1, once: !0 },
            className: w,
            ...u
          } = t,
          A = o.useRef(null),
          g = (0, n.W)(A, d),
          T = ((t) => {
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
          })(l),
          p = ["scale(".concat(0.95, ")")];
        void 0 !== T.y && p.unshift("translateY(".concat(T.y, "px)")),
          void 0 !== T.x && p.unshift("translateX(".concat(T.x, "px)"));
        let m = p.join(" "),
          E = a.P[i];
        return (0, r.jsx)(E, {
          animate: {
            opacity: +!!g,
            transform: g ? "scale(".concat(1, ")") : m,
          },
          className: (0, s.cn)("", w),
          initial: { opacity: 0, transform: m },
          ref: (t) => {
            A.current = t;
          },
          transition: { delay: c, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          ...u,
          children: e,
        });
      };
    },
    23756: (t, e, i) => {
      "use strict";
      i.d(e, { JoinSection: () => A });
      var r = i(54568),
        n = i(61773),
        a = i(27261),
        o = i.n(a),
        s = i(76917),
        l = i(23493),
        c = i(47227);
      let d = {
        src: "/_next/static/media/join-banner.53e27e9c.jpg",
        height: 688,
        width: 2240,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAACAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACOA//EABYQAQEBAAAAAAAAAAAAAAAAAAEAMv/aAAgBAQABPwAy3//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",
        blurWidth: 8,
        blurHeight: 2,
      };
      var w = i(32305),
        u = i(27118);
      function A() {
        return (0, r.jsx)(s.w, {
          className: "tw-flex-row tw-max-w-6xl tw-mx-auto",
          children: (0, r.jsxs)(s.w, {
            className: "!tw-gap-6 !tw-py-12 tw-px-4 md:!tw-py-16 2xl:!tw-py-20",
            "data-pw": u.l.LANDING.HOMEPAGE.JOIN_SECTION,
            subtitleProps: {
              as: "h4",
              children: (0, r.jsx)(r.Fragment, {
                children:
                  "We're partnering with protocols, institutions, and innovators. Reach out and let's connect.",
              }),
              className: "tw-mt-0",
            },
            titleContainerProps: {
              className:
                "tw-w-full tw-gap-6 tw-z-10 md:tw-max-w-[480px] md:tw-mx-auto 2xl:tw-max-w-[600px]",
            },
            titleProps: {
              as: "h3",
              children: (0, r.jsx)(r.Fragment, {
                children: "Join the future of finance",
              }),
              variant: "gray",
            },
            children: [
              (0, r.jsx)(l.AnimateInView, {
                className:
                  "tw-flex tw-flex-col tw-gap-2 tw-w-full md:tw-flex-row md:tw-justify-center tw-z-10",
                children: (0, r.jsx)(c.Button, {
                  asChild: !0,
                  className: "tw-w-full md:tw-w-fit",
                  "data-pw": u.l.LANDING.HOMEPAGE.JOIN_SECTION_BUTTON,
                  children: (0, r.jsx)(o(), {
                    href: w.C.routes.contact,
                    children: "Contact us",
                  }),
                }),
              }),
              (0, r.jsx)(n.default, {
                alt: "Join the future of finance",
                className: "tw-rounded-md tw-border tw-border-border-secondary",
                fill: !0,
                src: d,
              }),
            ],
          }),
        });
      }
    },
    26080: (t, e, i) => {
      "use strict";
      i.d(e, {
        Az: () => l,
        Dc: () => o,
        H9: () => w,
        J$: () => s,
        Z$: () => d,
        qt: () => a,
        w7: () => n,
        xq: () => c,
        zm: () => r,
      });
      let r = {
          EXTERNAL_LINK: "External link",
          MANAGE_ANALYTICS: "Manage analytics",
          OPEN_MODAL: "Open modal",
          QUESTION: "Question",
          SEARCH: "Search",
          SORT: "Sort",
          SWITCH_NETWORK: "Switch network",
          TOKEN_APPROVAL: "Token approval",
          TOKEN_APPROVAL_FAILED: "Token approval failed",
          TRANSACTION_FAILED: "Transaction failed",
          TRANSACTION_SUCCESS: "Transaction success",
          VIEW_EXPLORER: "View explorer",
          VIEW_TOOLTIP: "View tooltip",
        },
        n = {
          GET_USD1: "Get USD1",
          MOBILE_MENU: "Mobile menu",
          TRADE_WLFI: "Trade $WLFI",
          UNLOCK_WLFI: "Unlock $WLFI",
        },
        a = {
          CHANGE_LOGO: "Change logo",
          COPY_HEX: "Copy HEX",
          COPY_SVG: "Copy SVG",
          DOWNLOAD_ASSETS: "Download assets",
        },
        o = {
          FORM_SELECTED: "Contact form selected",
          FORM_SUBMITTED: "Contact form submitted",
        },
        s = {
          CONNECT_WALLET: "Connect wallet",
          COPY_ADDRESS: "Copy address",
          DISCONNECT_WALLET: "Disconnect wallet",
          OPEN_TERMS_DIALOG: "Open terms dialog",
          VIEW_EXPLORER: "View explorer",
          WALLET_DROPDOWN: "Wallet dropdown",
        },
        l = {
          ASSET_INPUT: "Bridge asset input",
          SWITCH_DESTINATION_NETWORK: "Bridge switch destination network",
          SWITCH_FEE_TOKEN: "Bridge switch fee token",
          SWITCH_NETWORK: "Bridge switch network",
        },
        c = {
          CATEGORY_FILTER: "Providers category filter",
          SEARCH: "Providers search",
          USE_CASE_FILTER: "Providers use case filter",
        },
        d = {
          SET_DEADLINE: "Set deadline",
          SET_SLIPPAGE: "Set slippage",
          SWAP_ASSET_SEARCH: "Swap asset search",
        },
        w = {
          ADD_TO_WALLET: "Add token to wallet",
          COPY_TOKEN_ADDRESS: "Copy token address",
          SEE_AGREEMENT: "See agreement",
        };
    },
    27118: (t, e, i) => {
      "use strict";
      i.d(e, { l: () => r });
      let r = {
        LANDING: {
          ABOUT: {
            BARRIERS_SECTION: "about-barriers",
            CONTAINER: "about",
            GOALS_SECTION: "about-goals",
            GOALS_SECTION_ITEM: "about-goals-item",
            HERO_SECTION: "about-hero",
            TEAM_SECTION: "about-team",
            TEAM_SECTION_ITEM: "about-team-item",
          },
          BRAND: {
            COLOR_ITEM: "landing-brand-color-item",
            COLOR_PALETTE_SECTION: "brand-color-palette",
            CONTAINER: "brand",
            DOWNLOAD_KIT_BUTTON: "landing-brand-download-kit-button",
            HERO_SECTION: "brand-hero",
            HEX_COPY_BUTTON: "landing-brand-hex-copy-button",
            LOGO_ITEM: "landing-brand-logo-item",
            LOGO_ITEM_BUTTONS_CONTAINER:
              "landing-brand-logo-item-buttons-container",
            LOGO_SECTION: "brand-logo",
            PNG_DOWNLOAD_BUTTON: "landing-brand-png-download-button",
            SVG_COPY_BUTTON: "landing-brand-svg-copy-button",
            SVG_DOWNLOAD_BUTTON: "landing-brand-svg-download-button",
            TOKEN_ITEM: "brand-token-item",
            TOKEN_ITEM_BUTTONS_CONTAINER: "brand-token-item-buttons-container",
            TOKEN_SECTION: "brand-token",
            TYPOGRAPHY_SECTION: "brand-typography",
          },
          BRIDGE: {
            ACTIVITY_BUTTON: "activity-button",
            ASSET_INPUT: "asset-input",
            ASSET_INPUT_CLEAR_BUTTON: "asset-input-clear-button",
            BACK_BUTTON: "back-button",
            BACK_TO_ACTIVITY_BUTTON: "back-to-activity-button",
            BALANCE_TEXT: "balance-text",
            BRIDGE_CONTENT: "bridge-content",
            BRIDGE_TRANSACTION_VIEW: "bridge-transaction-view",
            DESTINATION_INPUT: "destination-input",
            DESTINATION_INPUT_CLEAR_BUTTON: "destination-input-clear-button",
            DESTINATION_INPUT_PASTE_BUTTON: "destination-input-paste-button",
            EMPTY_STATE: "empty-state",
            EMPTY_WALLET: "empty-wallet",
            MAX_BUTTON: "max-button",
            NETWORK_SELECTOR: "network-selector",
            SWAP_NETWORKS_BUTTON: "swap-networks-button",
            TRANSFER_BUTTON: "transfer-button",
            USE_CONNECTED_ACCOUNT_CHECKBOX: "use-connected-account-checkbox",
          },
          CONTACT: {
            CONTAINER: "contact",
            FORM_CONTAINER: "contact-inquiry-form",
            FORM_SELECTOR: "contact-form-selector",
            FORM_SUBMIT_BUTTON: "contact-form-submit-button",
            FORM_TRIGGER: "contact-inquiry-form-trigger",
            INPUT: {
              COMPANY: "contact-company-input",
              COUNTRY: "contact-country-input",
              COUNTRY_LIST: "contact-country-list",
              EMAIL: "contact-email-input",
              FIRST_NAME: "contact-first-name-input",
              LAST_NAME: "contact-last-name-input",
              MESSAGE: "contact-message-input",
              REASON: "contact-reason-input",
              TITLE: "contact-title-input",
            },
            SUCCESS_MESSAGE: "contact-form-success-message",
          },
          CONTAINER: "app-container",
          CTA: {
            BRIDGE_BUTTON: "bridge",
            FAQ_BUTTON: "faq",
            MINTING_BUTTON: "minting",
            NETWORK_BUTTON: "network",
            PROVIDERS_BUTTON: "providers",
            REPORT_BUTTON: "report",
            SEE_ALL_PRODUCTS_BUTTON: "see-all-products",
            SWAP_BUTTON: "swap",
            TRADE_WLFI_BUTTON: "trade-wlfi",
            UNLOCK_WLFI_BADGE: "unlock-wlfi-badge",
            UNLOCK_WLFI_BUTTON: "unlock-wlfi",
            USD1_BUTTON: "get-usd1",
          },
          FOOTER: "footer",
          FOOTER_NAV: {
            CONTAINER: "footer-container",
            ITEMS: {
              COMPANY_PREFIX: "footer-company-item",
              DISABLED_PREFIX: "footer-disabled-item",
              LEGAL_PREFIX: "footer-legal-item",
              PRODUCT_PREFIX: "footer-product-item",
              SOCIAL_PREFIX: "footer-social-item",
              USD1_PREFIX: "footer-usd1-item",
              WLFI_PREFIX: "footer-wlfi-item",
            },
            SECTIONS: {
              COMPANY: "footer-section-company",
              LEGAL: "footer-section-legal",
              PRODUCTS: "footer-section-products",
              USD1: "footer-section-usd1",
              WLFI: "footer-section-wlfi",
            },
          },
          GOVERNANCE: {
            CONTAINER: "governance",
            FORUM_LINK: "governance-forum-link",
            PLATFORMS_CONTAINER: "governance-platforms",
            SNAPSHOT_LINK: "governance-snapshot-link",
            STEPS_CONTAINER: "governance-steps",
            TRADE_WLFI_BUTTON: "governance-trade-wlfi-button",
            TRADE_WLFI_SECTION: "governance-trade-wlfi-section",
            UNLOCK_WLFI_BUTTON: "governance-unlock-wlfi-button",
          },
          HAMBURGER: "hamburger",
          HEADER: "header",
          HERO: "hero",
          HOMEPAGE: {
            GOVERNANCE_SECTION: "homepage-governance-section",
            GOVERNANCE_SECTION_BUTTON: "homepage-governance-section-button",
            GOVERNANCE_SECTION_FORUM_LINK:
              "homepage-governance-section-forum-link",
            JOIN_SECTION: "homepage-join-section",
            JOIN_SECTION_BUTTON: "homepage-join-section-button",
            PARTNERS_SECTION: "homepage-partners-section",
            PARTNERS_SECTION_ITEM: "homepage-partners-section-item",
            PRODUCTS_SECTION: "homepage-products-section",
            TRADE_WLFI_BUTTON: "homepage-trade-wlfi-button",
            UNLOCK_AND_TRADE_SECTION: "homepage-unlock-and-trade-section",
            UNLOCK_WLFI_BUTTON: "homepage-unlock-wlfi-button",
            USD1_GET_BUTTON: "homepage-products-section-usd1-get-button",
            USD1_SEE_BUTTON: "homepage-products-section-usd1-see-button",
          },
          LOGO: "logo",
          MOBILE_MENU: "mobile-menu",
          MOBILE_NAV: {
            ITEMS: {
              COMPANY_PREFIX: "mobile-company-item",
              CONTACT: "mobile-contact-us",
              DISABLED_PREFIX: "mobile-disabled-item",
              LEGAL_PREFIX: "mobile-legal-item",
              PRODUCT_PREFIX: "mobile-product-item",
              SOCIAL_PREFIX: "mobile-social-item",
              USD1_PREFIX: "mobile-usd1-item",
              WLFI_PREFIX: "mobile-wlfi-item",
            },
            SECTIONS: {
              COMPANY: "mobile-section-company",
              LEGAL: "mobile-section-legal",
              PRODUCTS: "mobile-section-products",
              SOCIAL: "mobile-section-social",
              USD1: "mobile-section-usd1",
              WLFI: "mobile-section-wlfi",
            },
          },
          NAVIGATION: {
            CONTENT: "navigation-content",
            ITEM: "navigation-item",
            TRIGGER: "navigation-trigger",
          },
          NAVIGATION_LINK: "navigation-link",
          PROVIDERS: {
            CATEGORY_FILTER: "category-filter",
            CLEAR_FILTERS: "clear-filters",
            CONTAINER: "providers",
            COUNT: "providers-count",
            EMPTY_STATE: "empty-state",
            PROVIDER_CARD: "provider-card",
            SEARCH_INPUT: "providers-search-input",
            USE_CASE_FILTER: "use-case-filter",
          },
          SECTIONS: { GET_USD1: "get-usd1", USD1_TOOLS: "usd1-tools" },
          WALLET: {
            CONNECT_WALLET_BUTTON: "connect-wallet-button",
            CONNECTED_WALLET_BUTTON: "connected-wallet-button",
            MENU: {
              COPY_ADDRESS_BUTTON: "copy-address-button",
              DISCONNECT_WALLET_BUTTON: "disconnect-wallet-button",
              EXPLORER_BUTTON: "explorer-button",
              SWITCH_NETWORK_BUTTON: "switch-network-button",
              WALLET_ADDRESS: "wallet-address",
              WALLET_MENU: "wallet-menu",
            },
          },
          WLFI_SWAP: {
            ACTIVITY_BUTTON: "activity-button",
            ASSET_INPUT: "asset-input",
            ASSET_SELECTOR: "asset-selector",
            BALANCE_TEXT: "balance-text",
            DEADLINE_INPUT: "deadline-input",
            DEADLINE_LABEL: "deadline-label",
            EMPTY_STATE: "empty-state",
            EMPTY_WALLET: "empty-wallet",
            LOADING_SPINNER: "loading-spinner",
            MAX_BUTTON: "max-button",
            SETTINGS_BUTTON: "settings-button",
            SETTINGS_DROPDOWN: "settings-dropdown",
            SLIPPAGE_AUTO_BUTTON: "slippage-auto-button",
            SLIPPAGE_INPUT: "slippage-input",
            SLIPPAGE_LABEL: "slippage-label",
            SWAP_BUTTON: "swap-button",
            SWAP_CONTENT: "swap-content",
            SWITCH_TOKENS_BUTTON: "switch-tokens-button",
            TOKEN_SELECTOR: "token-selector",
            TRANSACTION_SUMMARY: "transaction-summary",
          },
        },
      };
    },
    32305: (t, e, i) => {
      "use strict";
      i.d(e, { C: () => C });
      var r = i(54568),
        n = i(13432),
        a = i(4451),
        o = i(11985),
        s = i(29768);
      let l = "World Liberty Financial",
        c = "Where DeFi Meets TradFi",
        d =
          "Bridging legacy finance and the open economy with purpose-built, on-chain products.",
        w = o.h.NEXT_PUBLIC_BASE_URL,
        u = "https://".concat(n.w4, "/images/world-liberty-financial-logo.jpg"),
        A = "https://".concat(
          n.w4,
          "/images/open-graph/world-liberty-financial.jpg"
        ),
        g = "https://".concat(n.w4, "/images/open-graph"),
        T = "https://".concat(n.w4, "/docs/gold-paper.pdf"),
        p = "".concat(l, " -"),
        m = (t) => "".concat(w).concat(t),
        E = (t) => "".concat(p, " ").concat(t),
        h = (t) => "".concat(g).concat(t, ".jpg"),
        N = {
          about: "/about",
          brand: "/brand",
          bridge: "/bridge",
          bridgeActivity: "/bridge/activity",
          bridgeActivityItem: (t) => "/bridge/activity/".concat(t),
          contact: "/contact",
          documentation: "https://docs.worldlibertyfinancial.com",
          forum: "https://governance.worldlibertyfinancial.com",
          governance: "/governance",
          home: "/",
          privacy: "/privacy",
          providers: "/providers",
          snapshot: "https://vote.worldlibertyfinancial.com",
          terms: "/terms",
          unlock: "/unlock",
          usd1: "/usd1",
          usd1RiskDisclosures: "/usd1/risk-disclosures",
          wlfiRiskDisclosures: "/wlfi/risk-disclosures",
          wlfiTerms: "/wlfi/terms",
        },
        _ = {
          [N.about]: {
            description:
              "Learn about our bold vision, key team members, and global partners working to revolutionize finance at World Liberty Financial.",
            get ogTitle() {
              return E(this.title);
            },
            title: "Team, Vision & Mission",
            url: m(N.about),
          },
          [N.brand]: {
            description:
              "Explore our brand assets, including logos, colors, and fonts, to help you create a consistent and recognizable presence for World Liberty Financial.",
            get ogTitle() {
              return E(this.title);
            },
            title: "Visual Identity Guide",
            url: m(N.brand),
          },
          [N.bridge]: {
            description:
              "Easily bridge USD1 between Ethereum, BNB Chain, and other supported networks. Fast, secure, and powered by Chainlink CCIP.",
            get ogTitle() {
              return E(this.title);
            },
            ogUrl: h(N.bridge),
            title: "Bridge USD1 Across Chains",
            url: m(N.bridge),
          },
          [N.bridgeActivity]: {
            description:
              "Monitor your USD1 bridge transactions across Ethereum, BNB Chain, and more. View real-time status updates for each transfer.",
            get ogTitle() {
              return E(this.title);
            },
            ogUrl: h(N.bridge),
            title: "Bridge Transaction History",
            url: m(N.bridgeActivity),
          },
          [N.contact]: {
            description:
              "Reach out to World Liberty Financial for support, product inquiries or partnership opportunities.",
            get ogTitle() {
              return E(this.title);
            },
            title: "Support & Partnerships",
            url: m(N.contact),
          },
          [N.governance]: {
            description:
              "World Liberty Financial seeks to ensure trust and transparency through a robust governance system with token-holder voting, proposals, and active ecosystem participation.",
            get ogTitle() {
              return E(this.title);
            },
            ogUrl: h(N.governance),
            title: "Shape the Future with our Governance Process",
            url: m(N.governance),
          },
          [N.home]: {
            description: d,
            get ogTitle() {
              return E(this.title);
            },
            ogUrl: h("/world-liberty-financial"),
            title: c,
            url: m(N.home),
          },
          [N.privacy]: {
            description:
              "Discover how World Liberty Financial protects your data and seeks to ensure compliance with relevant privacy standards.",
            get ogTitle() {
              return E(this.title);
            },
            title: "How We Protect Your Data",
            url: m(N.privacy),
          },
          [N.providers]: {
            description:
              "Find trusted partners to get USD1, including exchanges, wallets, and DeFi apps. Explore all the official providers in one place.",
            get ogTitle() {
              return E(this.title);
            },
            ogUrl: h(N.providers),
            title: "Trusted USD1 Providers",
            url: m(N.providers),
          },
          [N.terms]: {
            description:
              "Learn the terms that govern your access to World Liberty Financial.",
            get ogTitle() {
              return E(this.title);
            },
            title: "Terms & Conditions",
            url: m(N.terms),
          },
          [N.unlock]: {
            description:
              "Easily unlock your WLFI tokens with our Unlock feature. View schedules, track progress, and claim your tokens.",
            get ogTitle() {
              return E(this.title);
            },
            ogUrl: h(N.unlock),
            title: "Easily unlock your WLFI tokens",
            url: m(N.unlock),
          },
          [N.usd1]: {
            description:
              "USD1 is the US Dollar stablecoin upgraded for a new era of finance — stable, secure, and transparent by design.",
            get ogTitle() {
              return E(this.title);
            },
            ogUrl: h(N.usd1),
            title: "Meet USD1",
            url: m(N.usd1),
          },
          [N.usd1RiskDisclosures]: {
            description:
              "Learn about and understand the potential risks associated with using USD1.",
            get ogTitle() {
              return E(this.title);
            },
            title: "USD1 Risk Disclosures",
            url: m(N.usd1RiskDisclosures),
          },
          [N.wlfiRiskDisclosures]: {
            description:
              "Learn about and understand the potential risks associated with using WLFI.",
            get ogTitle() {
              return E(this.title);
            },
            title: "WLFI Risk Disclosures",
            url: m(N.wlfiRiskDisclosures),
          },
          [N.wlfiTerms]: {
            description:
              "Before interacting with WLFI tokens, understand their utility, limitations, and associated risks.",
            get ogTitle() {
              return E(this.title);
            },
            title: "Use and Acquisition Terms & Conditions",
            url: m(N.wlfiTerms),
          },
        },
        b = [
          {
            href: "https://x.com/worldlibertyfi",
            icon: (t) =>
              (0, r.jsx)(a.A.twitter, {
                className: (0, s.cn)("tw-size-5 tw-text-foreground-quinary", t),
              }),
            title: "X/Twitter",
          },
          {
            href: "https://t.me/defiant1s",
            icon: (t) =>
              (0, r.jsx)(a.A.telegram, {
                className: (0, s.cn)("tw-size-5 tw-text-foreground-quinary", t),
              }),
            title: "Telegram",
          },
          {
            href: "https://www.linkedin.com/company/worldlibertyfi/",
            icon: (t) =>
              (0, r.jsx)(a.A.linkedin, {
                className: (0, s.cn)("tw-size-5 tw-text-foreground-quinary", t),
              }),
            title: "LinkedIn",
          },
        ],
        f = [
          { external: !1, href: N.usd1, title: "Overview" },
          { external: !1, href: N.providers, title: "Providers" },
          { external: !1, href: N.bridge, isVisible: !0, title: "Bridge" },
          { external: !1, href: void 0, isVisible: !0, title: "Exchange" },
        ],
        x = [
          { external: !1, href: void 0, isVisible: !0, title: "WLFI App" },
          { external: !1, href: void 0, isVisible: !0, title: "Lend & Borrow" },
        ],
        O = [
          { external: !1, href: N.about, title: "About" },
          { external: !1, href: N.brand, title: "Brand Assets" },
          { external: !1, href: N.contact, title: "Contact us" },
        ],
        S = [
          { external: !1, href: N.unlock, title: "Unlock $WLFI" },
          { external: !1, title: "Trade $WLFI" },
          { external: !1, href: N.governance, title: "$WLFI Governance" },
        ],
        I = [
          { external: !1, href: N.privacy, title: "Privacy Policy" },
          {
            external: !1,
            href: "".concat(N.privacy, "#california-privacy-rights"),
            title: "California Privacy Notice",
          },
          { external: !1, href: N.terms, title: "Terms of Service" },
          {
            external: !1,
            href: N.wlfiTerms,
            title: "WLFI Token Use and Acquisition T&Cs",
          },
          {
            external: !1,
            href: N.wlfiRiskDisclosures,
            title: "WLFI Risk Disclosures",
          },
          {
            external: !1,
            href: N.usd1RiskDisclosures,
            title: "USD1 Risk Disclosures",
          },
        ],
        C = {
          applicationName: "".concat(p, " ").concat(c),
          apps: x,
          authors: [{ name: l, url: "https://worldlibertyfiancial.com" }],
          cdn: "https://".concat(n.w4),
          company: O,
          description: d,
          footerNav: [
            { routes: f, title: "USD1" },
            { routes: x, title: "Apps & Protocols" },
            { routes: S, title: "WLFI" },
            { routes: O, title: "Company" },
            { routes: I, title: "Legal" },
          ],
          generator: "Next.js",
          goldPaper: T,
          governanceMail: "governance@worldlibertyfinancial.com",
          infoMail: "info@worldlibertyfinancial.com",
          keywords: "",
          legal: I,
          logo: u,
          mail: "support@worldlibertyfinancial.com",
          mainNav: [
            {
              groups: [
                { groupTitle: "USD1", routes: f },
                { groupTitle: "Apps & protocols", routes: x },
              ],
              title: "Products",
            },
            { routes: S, title: "WLFI" },
            { routes: O, title: "Company" },
          ],
          manifest: "/manifest.json",
          name: "".concat(p, " ").concat(c),
          nameLiteral: l,
          nameTemplate: p,
          ogImage: A,
          ogPath: g,
          openGraph: {
            countryName: "United States",
            description: d,
            images: {
              alt: "".concat(p, " ").concat(c),
              height: 630,
              type: "image/jpeg",
              url: A,
              width: 1200,
            },
            locale: "en_US",
            siteName: l,
            title: "".concat(p, " ").concat(c),
            type: "website",
            url: w,
          },
          privacyMail: "privacy@worldlibertyfinancial.com",
          routes: N,
          routesMetadata: _,
          socials: b,
          title: c,
          twitter: {
            card: "summary_large_image",
            description: d,
            images: [A],
            site: "@worldlibertyfi",
            title: "".concat(p, " ").concat(c),
          },
          url: w,
          usd1: f,
          wlfi: S,
        };
    },
    32583: (t, e, i) => {
      "use strict";
      i.d(e, { b: () => o, p: () => a });
      var r = i(79924),
        n = i(8960);
      let a = (0, r.eU)(null, (t, e, i) => {
          e(n.p9, { properties: { tenant: "landing" }, url: i });
        }),
        o = (0, r.eU)(null, (t, e, i) => {
          let { eventName: r, properties: a } = i,
            o = { ...a, tenant: "landing" };
          e(n.bL, { eventName: r, properties: o });
        });
    },
    62275: (t, e, i) => {
      "use strict";
      i.d(e, { UnlockWlfiButton: () => d });
      var r = i(54568),
        n = i(27261),
        a = i.n(n),
        o = i(47227),
        s = i(29768),
        l = i(32305),
        c = i(27118);
      function d(t) {
        let { className: e, ...i } = t;
        return (0, r.jsx)(o.Button, {
          asChild: !0,
          className: (0, s.cn)("", e),
          "data-pw": c.l.LANDING.CTA.UNLOCK_WLFI_BUTTON,
          ...i,
          children: (0, r.jsx)(a(), {
            href: l.C.routes.unlock,
            children: "Unlock $WLFI",
          }),
        });
      }
    },
    68215: (t, e, i) => {
      Promise.resolve().then(i.bind(i, 81926)),
        Promise.resolve().then(i.bind(i, 23756)),
        Promise.resolve().then(i.bind(i, 14989)),
        Promise.resolve().then(i.bind(i, 16423)),
        Promise.resolve().then(i.bind(i, 84833)),
        Promise.resolve().then(i.bind(i, 62275)),
        Promise.resolve().then(i.bind(i, 23493)),
        Promise.resolve().then(i.bind(i, 77726)),
        Promise.resolve().then(i.bind(i, 47227)),
        Promise.resolve().then(i.bind(i, 90264)),
        Promise.resolve().then(i.bind(i, 51166)),
        Promise.resolve().then(i.t.bind(i, 27261, 23)),
        Promise.resolve().then(i.t.bind(i, 73970, 23));
    },
    76917: (t, e, i) => {
      "use strict";
      i.d(e, { w: () => w });
      var r = i(54568),
        n = i(23493),
        a = i(615),
        o = i(7620),
        s = i(29768);
      let l = (0, a.F)(
          "tw-mt-2 tw-max-w-full tw-text-center tw-font-normal tw-tracking-normal tw-text-secondary",
          {
            defaultVariants: { size: "default" },
            variants: {
              size: {
                default: "md:tw-max-w-screen-sm 2xl:tw-max-w-screen-sm",
                lg: "md:tw-max-w-[720px] 2xl:tw-max-w-[800px] 2xl:tw-text-lg",
              },
            },
          }
        ),
        c = o.forwardRef((t, e) => {
          let { className: i, size: n, as: a = "h2", ...o } = t;
          return (0, r.jsx)(a, {
            className: (0, s.cn)(l({ size: n }), i),
            ref: e,
            ...o,
          });
        });
      c.displayName = "SectionSubtitle";
      var d = i(99348);
      function w(t) {
        let {
            children: e,
            className: i,
            titleProps: a,
            subtitleProps: o,
            titleContainerProps: l = {},
            titleContent: w,
            ...u
          } = t,
          A = a || o,
          { className: g, ...T } = l;
        return (0, r.jsxs)(n.AnimateInView, {
          as: "section",
          className: (0, s.cn)(
            "tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-gap-12 tw-py-16 md:tw-gap-16 md:tw-py-20 2xl:tw-py-24",
            i
          ),
          ...u,
          children: [
            A &&
              (0, r.jsxs)("div", {
                className: (0, s.cn)(
                  "tw-flex tw-flex-col tw-items-center tw-justify-center",
                  g
                ),
                ...T,
                children: [
                  a && (0, r.jsx)(d.A, { ...a }),
                  o && (0, r.jsx)(c, { ...o }),
                  w,
                ],
              }),
            e,
          ],
        });
      }
    },
    77726: (t, e, i) => {
      "use strict";
      i.d(e, { ScrollToButton: () => o });
      var r = i(54568),
        n = i(47227),
        a = i(23228);
      let o = (t) => {
        let { selector: e, ...i } = t;
        return (0, r.jsx)(n.Button, {
          onClick: (t) => {
            t.preventDefault(), (0, a.U)(e);
          },
          ...i,
        });
      };
    },
    81926: (t, e, i) => {
      "use strict";
      i.d(e, { GovernanceSection: () => E });
      var r = i(54568),
        n = i(60844),
        a = i(61773),
        o = i(27261),
        s = i.n(o),
        l = i(76917),
        c = i(23493),
        d = i(47227),
        w = i(90264);
      let u = {
          src: "/_next/static/media/left-decoration.90639aca.svg",
          height: 420,
          width: 216,
          blurWidth: 0,
          blurHeight: 0,
        },
        A = {
          src: "/_next/static/media/right-decoration.4811fe44.svg",
          height: 420,
          width: 216,
          blurWidth: 0,
          blurHeight: 0,
        };
      var g = i(32305),
        T = i(26080),
        p = i(32583),
        m = i(27118);
      function E() {
        let t = (0, n.Xr)(p.b);
        return (0, r.jsxs)(l.w, {
          className: "tw-flex-row tw-max-w-6xl tw-mx-auto tw-gap-4",
          children: [
            (0, r.jsxs)("div", {
              className: "tw-flex tw-gap-0 tw-self-stretch",
              children: [
                (0, r.jsx)(w.Separator, {
                  className:
                    "tw-self-stretch tw-h-auto tw-bg-transparent tw-bg-[linear-gradient(180deg,hsl(var(--utility-brand-200)/0)_0%,hsl(var(--utility-brand-400))_15%,hsl(var(--utility-brand-600))_40%,hsl(var(--utility-brand-600))_60%,hsl(var(--utility-brand-400))_85%,hsl(var(--utility-brand-200)/0)_100%)]",
                  orientation: "vertical",
                }),
                (0, r.jsx)(a.default, {
                  alt: "Decoration for governance section tw-hidden md:tw-block",
                  className: "tw-hidden md:tw-block",
                  src: u,
                  width: 200,
                }),
              ],
            }),
            (0, r.jsx)(l.w, {
              className:
                "!tw-gap-6 !tw-py-12 md:tw-max-w-[400px] md:tw-mx-auto 2xl:tw-max-w-[550px]",
              "data-pw": m.l.LANDING.HOMEPAGE.GOVERNANCE_SECTION,
              subtitleProps: {
                as: "h4",
                children: (0, r.jsx)(r.Fragment, {
                  children:
                    "$WLFI token holders are the ones steering the future of the platform by proposing, reviewing and voting.",
                }),
                className: "tw-mt-0",
              },
              titleContainerProps: { className: "tw-w-full tw-gap-6" },
              titleProps: {
                as: "h3",
                children: (0, r.jsx)(r.Fragment, {
                  children: "Community governed",
                }),
                variant: "gray",
              },
              children: (0, r.jsxs)(c.AnimateInView, {
                className:
                  "tw-flex tw-flex-col tw-gap-2 tw-w-full md:tw-flex-row md:tw-justify-center",
                children: [
                  (0, r.jsx)(d.Button, {
                    asChild: !0,
                    className: "tw-w-full md:tw-w-fit",
                    "data-pw": m.l.LANDING.HOMEPAGE.GOVERNANCE_SECTION_BUTTON,
                    children: (0, r.jsx)(s(), {
                      href: g.C.routes.governance,
                      children: "See $WLFI Governance",
                    }),
                  }),
                  (0, r.jsx)(d.Button, {
                    asChild: !0,
                    className: "tw-w-full md:tw-w-fit",
                    "data-pw": m.l.LANDING.HOMEPAGE.USD1_SEE_BUTTON,
                    onClick: () =>
                      t({
                        eventName: T.zm.EXTERNAL_LINK,
                        properties: {
                          funnel: "governance-section",
                          url: g.C.routes.forum,
                        },
                      }),
                    variant: "secondary",
                    children: (0, r.jsx)(s(), {
                      "data-pw":
                        m.l.LANDING.HOMEPAGE.GOVERNANCE_SECTION_FORUM_LINK,
                      href: g.C.routes.forum,
                      rel: "noreferrer noopener",
                      target: "_blank",
                      children: "Go to forum",
                    }),
                  }),
                ],
              }),
            }),
            (0, r.jsxs)("div", {
              className: "tw-flex tw-gap-0 tw-self-stretch",
              children: [
                (0, r.jsx)(a.default, {
                  alt: "Decoration for governance section",
                  className: "tw-hidden md:tw-block",
                  src: A,
                  width: 200,
                }),
                (0, r.jsx)(w.Separator, {
                  className:
                    "tw-self-stretch tw-h-auto tw-bg-transparent tw-bg-[linear-gradient(180deg,hsl(var(--utility-brand-200)/0)_0%,hsl(var(--utility-brand-400))_15%,hsl(var(--utility-brand-600))_40%,hsl(var(--utility-brand-600))_60%,hsl(var(--utility-brand-400))_85%,hsl(var(--utility-brand-200)/0)_100%)]",
                  orientation: "vertical",
                }),
              ],
            }),
          ],
        });
      }
    },
    84833: (t, e, i) => {
      "use strict";
      i.d(e, { default: () => o });
      var r = i(54568),
        n = i(5023),
        a = i(23228);
      function o(t) {
        let { disclaimerId: e = "disclaimer-1", number: i = 1 } = t,
          o = "#".concat(e);
        return (0, r.jsx)(n.N, {
          href: o,
          onClick: (t) => {
            t.preventDefault(), (0, a.U)(o);
          },
          children: (0, r.jsx)("sup", { children: i }),
        });
      }
    },
    90264: (t, e, i) => {
      "use strict";
      i.d(e, { Separator: () => s });
      var r = i(54568),
        n = i(7297),
        a = i(7620),
        o = i(29768);
      let s = a.forwardRef((t, e) => {
        let {
          className: i,
          orientation: a = "horizontal",
          decorative: s = !0,
          ...l
        } = t;
        return (0, r.jsx)(n.b, {
          className: (0, o.cn)(
            "tw-shrink-0 tw-bg-border",
            "horizontal" === a ? "tw-h-px tw-w-full" : "tw-h-full tw-w-px",
            i
          ),
          decorative: s,
          orientation: a,
          ref: e,
          ...l,
        });
      });
      s.displayName = n.b.displayName;
    },
    91912: (t, e, i) => {
      "use strict";
      i.d(e, {
        If: () => d,
        My: () => l,
        TE: () => c,
        UZ: () => n,
        W6: () => o,
        pU: () => a,
        vH: () => s,
      });
      var r = i(25474);
      let n = {
        BRIDGE_TERMS_ACCEPTED: "bridgeTermsAccepted",
        READ_ONLY_MODE_ADDRESS: "readOnlyModeAddress",
        READ_ONLY_MODE_ENS_NAME: "readOnlyModeEnsName",
        SWAP_TERMS_ACCEPTED: "swapTermsAccepted",
        TESTNET_ENABLED: "testnetEnabled",
        TRACKING_CONSENT: "trackingConsent",
        USER_ACCEPTED_ANALYTICS: "userAcceptedAnalytics",
      };
      (0, r.tG)(n.TRACKING_CONSENT, null, void 0, { getOnInit: !0 });
      let a = (0, r.tG)(n.USER_ACCEPTED_ANALYTICS, null, void 0, {
          getOnInit: !0,
        }),
        o = (0, r.tG)(n.TESTNET_ENABLED, !1, void 0, { getOnInit: !0 }),
        s = (0, r.tG)(n.READ_ONLY_MODE_ADDRESS, void 0, void 0, {
          getOnInit: !0,
        }),
        l = (0, r.tG)(n.READ_ONLY_MODE_ENS_NAME, void 0, void 0, {
          getOnInit: !0,
        }),
        c = (0, r.tG)(n.BRIDGE_TERMS_ACCEPTED, {}, void 0, { getOnInit: !0 }),
        d = (0, r.tG)(n.SWAP_TERMS_ACCEPTED, {}, void 0, { getOnInit: !0 });
    },
    99348: (t, e, i) => {
      "use strict";
      i.d(e, { A: () => c });
      var r = i(54568),
        n = i(615),
        a = i(7620),
        o = i(29768);
      let s = (0, n.F)(
          "tw-max-w-full tw-bg-clip-text tw-text-center tw-font-semibold tw-text-transparent",
          {
            defaultVariants: { size: "default", variant: "brand" },
            variants: {
              size: {
                default:
                  "tw-text-3xl md:tw-max-w-screen-sm md:tw-text-4xl 2xl:tw-max-w-screen-sm 2xl:tw-text-5xl",
                lg: "tw-text-4xl md:tw-max-w-[720px] md:tw-text-5xl 2xl:tw-max-w-[800px] 2xl:tw-text-6xl",
                sm: "tw-text-2xl md:tw-text-3xl 2xl:tw-text-4xl",
              },
              variant: {
                brand: "tw-bg-brand-gradient",
                gray: "tw-bg-gray-gradient",
              },
            },
          }
        ),
        l = a.forwardRef((t, e) => {
          let { className: i, variant: n, size: a, as: l = "h1", ...c } = t;
          return (0, r.jsx)(l, {
            className: (0, o.cn)(s({ size: a, variant: n }), i),
            ref: e,
            ...c,
          });
        });
      l.displayName = "SectionTitle";
      let c = l;
    },
  },
  (t) => {
    t.O(
      0,
      [
        9386, 3387, 2635, 7261, 8745, 3970, 160, 887, 4154, 747, 1504, 6553,
        5461, 6256, 5377, 587, 1902, 7358,
      ],
      () => t((t.s = 68215))
    ),
      (_N_E = t.O());
  },
]);
