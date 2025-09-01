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
      (t._sentryDebugIds[e] = "03b5f624-2d46-47eb-9ab1-8f6b6779656b"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-03b5f624-2d46-47eb-9ab1-8f6b6779656b"));
  })();
} catch (t) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8252],
  {
    5823: (t, e, a) => {
      "use strict";
      a.d(e, { P: () => i, z: () => o });
      var r = a(54568),
        n = a(7620);
      let s = n.createContext(void 0),
        o = (t) => {
          let [e, a] = n.useState();
          return (
            n.useEffect(() => {
              let t = () => a(window.matchMedia("(pointer: coarse)").matches);
              return (
                t(),
                window.addEventListener("resize", t),
                () => window.removeEventListener("resize", t)
              );
            }, []),
            (0, r.jsx)(s, { value: e, ...t })
          );
        },
        i = () => {
          let t = n.useContext(s);
          return null != t && t;
        };
    },
    8960: (t, e, a) => {
      "use strict";
      a.d(e, {
        AK: () => p,
        XJ: () => m,
        NB: () => N,
        wY: () => g,
        bL: () => T,
        p9: () => b,
      });
      var r = a(40160),
        n = a(79924),
        s = a(58369),
        o = a(11985),
        i = a(91912);
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
      let d = (0, n.eU)((t) => {
          let e = t(i.pU),
            a = l();
          return "true" === e && !a;
        }),
        c = (0, n.eU)(!0),
        w = (0, n.eU)(!1),
        u = (0, n.eU)(null, (t, e) => {
          let a = "true" === t(i.pU),
            r = t(w),
            n = o.h.NEXT_PUBLIC_MIXPANEL_ID,
            d = o.h.NEXT_PUBLIC_GOOGLE_ID;
          if (!l()) {
            if (
              (r ||
                (s.A.init(n, {
                  debug: o.h.NEXT_PUBLIC_STAGE !== o.L.production,
                  ip: !1,
                  opt_out_tracking_by_default: !0,
                  record_sessions_percent: 1,
                  verbose: o.h.NEXT_PUBLIC_STAGE !== o.L.production,
                }),
                e(w, !0)),
              a)
            ) {
              var c, u;
              s.A.opt_in_tracking(),
                window.gtag("consent", "update", {
                  analytics_storage: "granted",
                }),
                null == (c = (u = window).gtag) ||
                  c.call(u, "config", d, {
                    page_path: window.location.pathname,
                  });
              return;
            }
            s.A.opt_out_tracking(),
              d &&
                window.gtag("consent", "update", {
                  analytics_storage: "denied",
                });
          }
        }),
        m = (0, n.eU)(null, (t, e) => {
          let a = t(i.pU),
            r = t(w);
          null === a || r || e(u);
        }),
        p = (0, n.eU)(null, (t, e) => {
          if (l()) {
            e(i.pU, "false"), e(c, !1), e(u);
            return;
          }
          e(i.pU, "true"), e(c, !1), e(u);
        }),
        N = (0, n.eU)(null, (t, e) => {
          e(i.pU, "false"), e(c, !1), e(u);
        }),
        g = (0, n.eU)(null, (t, e, a) => {
          e(i.pU, null), e(c, a);
        }),
        b = (0, n.eU)(null, (t, e, a) => {
          let { url: n, properties: i } = a,
            l = t(d),
            c = t(w),
            u = o.h.NEXT_PUBLIC_GOOGLE_ID;
          if (!l || !c) return;
          let m = {
            ...i,
            referrer: document.referrer,
            tenant: "common",
            title: document.title,
            url: n,
          };
          try {
            u &&
              window.gtag &&
              window.gtag("config", u, { page_path: n, ...m }),
              s.A.track("Page View", m);
          } catch (t) {
            console.error("Error tracking pageview:", t), (0, r.Cp)(t);
          }
        }),
        T = (0, n.eU)(null, (t, e, a) => {
          let { eventName: n, properties: i } = a,
            l = t(d),
            c = t(w);
          if (!l || !c) return;
          let u = o.h.NEXT_PUBLIC_GOOGLE_ID;
          try {
            c && s.A.track(n, i),
              u && window.gtag && window.gtag("event", n, { ...i, send_to: u });
          } catch (t) {
            console.error("Error tracking event:", t), (0, r.Cp)(t);
          }
        });
    },
    10042: (t, e, a) => {
      "use strict";
      a.d(e, { l: () => r });
      let r = {
        ANALYTICS: {
          APPROVE_BUTTON: "approve-button",
          COOKIE_CONSENT: "cookie-consent",
          DECLINE_BUTTON: "decline-button",
          MANAGE_ANALYTICS: "manage-analytics-button",
        },
        ERROR: {
          HOME_BUTTON: "error-home-button",
          IMAGE: "error-image",
          PAGE: "error-page",
          TITLE: "error-title",
        },
        MAINTENANCE: {
          IMAGE: "maintenance-image",
          PAGE: "maintenance-page",
          TITLE: "maintenance-title",
        },
        MODAL: {
          ACTION_BUTTON: "action-button",
          ACTIONS_WRAPPER: "actions-wrapper",
          APPROVE_BUTTON: "approve-button",
          CLOSE_BUTTON: "modalCloseButton",
          DIALOG: "modal",
          TERMS_DIALOG: "terms-dialog",
          TERMS_DIALOG_ACCEPT_BUTTON: "terms-dialog-accept-button",
          TITLE: "modalTitle",
        },
        TABLE: { EMPTY_STATE: "table-empty-state" },
        TOASTER: "toaster",
      };
    },
    11376: (t, e, a) => {
      "use strict";
      a.d(e, { W: () => o });
      var r = a(7620),
        n = a(68499);
      let s = { some: 0, all: 1 };
      function o(
        t,
        { root: e, margin: a, amount: i, once: l = !1, initial: d = !1 } = {}
      ) {
        let [c, w] = (0, r.useState)(d);
        return (
          (0, r.useEffect)(() => {
            if (!t.current || (l && c)) return;
            let r = { root: (e && e.current) || void 0, margin: a, amount: i };
            return (function (
              t,
              e,
              { root: a, margin: r, amount: o = "some" } = {}
            ) {
              let i = (0, n.K)(t),
                l = new WeakMap(),
                d = new IntersectionObserver(
                  (t) => {
                    t.forEach((t) => {
                      let a = l.get(t.target);
                      if (!!a !== t.isIntersecting)
                        if (t.isIntersecting) {
                          let a = e(t.target, t);
                          "function" == typeof a
                            ? l.set(t.target, a)
                            : d.unobserve(t.target);
                        } else
                          "function" == typeof a && (a(t), l.delete(t.target));
                    });
                  },
                  {
                    root: a,
                    rootMargin: r,
                    threshold: "number" == typeof o ? o : s[o],
                  }
                );
              return i.forEach((t) => d.observe(t)), () => d.disconnect();
            })(t.current, () => (w(!0), l ? void 0 : () => w(!1)), r);
          }, [e, t, a, l, i]),
          c
        );
      }
    },
    12811: (t, e, a) => {
      Promise.resolve().then(a.bind(a, 67525)),
        Promise.resolve().then(a.bind(a, 56103)),
        Promise.resolve().then(a.bind(a, 84918)),
        Promise.resolve().then(a.bind(a, 46278)),
        Promise.resolve().then(a.bind(a, 23493)),
        Promise.resolve().then(a.bind(a, 47227)),
        Promise.resolve().then(a.t.bind(a, 27261, 23));
    },
    13432: (t, e, a) => {
      "use strict";
      a.d(e, {
        DG: () => n,
        P: () => T,
        Pv: () => d,
        Um: () => h,
        p4: () => E,
        w4: () => I,
      });
      var r = a(68266),
        n = {};
      (0, r.V)(n, { APPROVAL_GAS_LIMIT: () => s, USDC_ADDRESS: () => o });
      var s = "45000",
        o = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
      (0, r.V)({}, { selectors: () => i });
      var i = {};
      (0, r.V)(i, { mainnet: () => l });
      var l = {
          bsc: 0x9d70576d8e253bcfn,
          ethereum: 0x45849994fc9c7b15n,
          plume: 0xf8946d7c5b972a83n,
        },
        d = {};
      (0, r.V)(d, {
        UNISWAP_V3_ROUTER_ADDRESS: () => b,
        USD1_ADDRESS: () => g,
        USD1_LEGACY_ADDRESS: () => N,
        WLFI_ADDRESS: () => c,
        WLFI_DECIMALS: () => m,
        WLFI_REGISTRY_ADDRESS: () => w,
        WLFI_SYMBOL: () => u,
        WLFI_VESTER_ADDRESS: () => p,
      });
      var c = "0xda5e1988097297dcdc1f90d4dfe7909e847cbef6",
        w = "0x4f61a99e42e21ea3c3eaf9b1b30fb80a7900d3ce",
        u = "WLFI",
        m = 18,
        p = "0x74b4f6a2e579d730aacb9dd23cfbbaeb95029583",
        N = "0x8d0d000ee44948fc98c9b98a4fa4921476f08b0d",
        g = "0x111111d2bf19e43c34263401e0cad979ed1cdb61",
        b = "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
        T = {};
      (0, r.V)(T, { POLLING_INTERVAL: () => f });
      var f = 6e4,
        E = {};
      (0, r.V)(E, { statement: () => _ });
      var _ = "Sign in with Ethereum to World Liberty Financial",
        h = {};
      (0, r.V)(h, {
        BNB_ADDRESS: () => x,
        ETHEREUM_ADDRESS: () => O,
        PLUME_ADDRESS: () => A,
        SYMBOL: () => S,
        TRON_ADDRESS: () => v,
      });
      var O = N,
        x = N,
        A = g,
        v = "TPFqcBAaaUMCSVRCqPaQ9QnzKhmuoLR6Rc",
        S = "USD1",
        I = "static.worldlibertyfinancial.com";
    },
    17680: (t, e, a) => {
      "use strict";
      a.d(e, { Toaster: () => w, o: () => m });
      var r = a(54568),
        n = a(68309),
        s = a(51874),
        o = a(40615),
        i = a(47227),
        l = a(4451),
        d = a(10042);
      let c = {
          error: (0, r.jsx)(o.A, {
            icon: l.A.circleAlert,
            variant: "destructive",
          }),
          info: (0, r.jsx)(o.A, { icon: l.A.info, variant: "default" }),
          success: (0, r.jsx)(o.A, {
            icon: l.A.checkCircle,
            variant: "success",
          }),
          warning: (0, r.jsx)(o.A, {
            icon: l.A.circleAlert,
            variant: "warning",
          }),
        },
        w = (t) => {
          let { ...e } = t,
            { theme: a = "system" } = (0, n.D)();
          return (0, r.jsx)(s.l$, { theme: a, ...e });
        };
      function u(t) {
        let { title: e, description: a, variant: n, id: o, action: w } = t;
        return (0, r.jsxs)("div", {
          className:
            "tw-relative tw-flex tw-min-w-72 tw-gap-2 tw-rounded-lg tw-border tw-border-border tw-bg-alpha-white/90 tw-py-4 tw-pl-2 tw-pr-4 tw-backdrop-blur-lg",
          "data-pw": d.l.TOASTER,
          children: [
            (0, r.jsx)("div", {
              className: "-tw-translate-y-1",
              children: c[n],
            }),
            (0, r.jsxs)("div", {
              className: "tw-flex tw-flex-1 tw-items-start tw-gap-2",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "tw-mt-1 tw-flex tw-flex-1 tw-flex-col tw-items-start tw-gap-3",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "tw-flex tw-flex-col tw-gap-1",
                      children: [
                        (0, r.jsx)("p", {
                          className:
                            "tw-text-sm tw-font-semibold tw-text-primary",
                          children: e,
                        }),
                        a &&
                          (0, r.jsxs)("p", {
                            className: "tw-text-sm tw-text-secondary",
                            children: [" ", a, " "],
                          }),
                      ],
                    }),
                    w &&
                      (0, r.jsx)(i.Button, {
                        onClick: () => {
                          var t;
                          null == (t = w.onClick) || t.call(w), s.oR.dismiss(o);
                        },
                        size: "fit",
                        variant: "link-secondary",
                        children: w.label,
                      }),
                  ],
                }),
                (0, r.jsxs)(i.Button, {
                  autoFocus: !1,
                  className: "!tw-size-6 tw-p-0.5",
                  onClick: () => s.oR.dismiss(o),
                  size: "icon-sm",
                  variant: "close",
                  children: [
                    (0, r.jsx)(l.A.x, {
                      className: "tw-aspect-square tw-size-5",
                    }),
                    (0, r.jsx)("span", {
                      className: "tw-sr-only",
                      children: "Close",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let m = (t) => {
        let { toastConfig: e, toastOptions: a } = t;
        return s.oR.custom((t) => (0, r.jsx)(u, { id: t, ...e }), a);
      };
    },
    23194: (t, e, a) => {
      "use strict";
      a.d(e, { AM: () => i, Wv: () => l, hl: () => d });
      var r = a(54568),
        n = a(38360),
        s = a(7620),
        o = a(29768);
      let i = n.bL,
        l = n.l9;
      n.Mz;
      let d = s.forwardRef((t, e) => {
        let {
          className: a,
          children: s,
          align: i = "center",
          sideOffset: l = 4,
          ...d
        } = t;
        return (0, r.jsx)(n.ZL, {
          children: (0, r.jsxs)(n.UC, {
            align: i,
            className: (0, o.cn)(
              "tw-relative tw-z-[500] tw-w-full tw-rounded-md tw-bg-alpha-white/80 tw-p-3 tw-text-xs tw-font-normal tw-text-tooltip tw-outline-none data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
              a
            ),
            ref: e,
            sideOffset: l,
            ...d,
            children: [
              (0, r.jsx)("div", {
                className:
                  "tw-absolute tw-inset-0 -tw-z-10 tw-rounded-md tw-backdrop-blur-2xl",
              }),
              s,
            ],
          }),
        });
      });
      d.displayName = n.UC.displayName;
    },
    23493: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { AnimateInView: () => l });
      var r = a(54568),
        n = a(11376),
        s = a(80747),
        o = a(7620),
        i = a(29768);
      let l = (t) => {
        let {
            children: e,
            as: a = "div",
            type: l = "up",
            delay: d = 0,
            options: c = { amount: 0.1, once: !0 },
            className: w,
            ...u
          } = t,
          m = o.useRef(null),
          p = (0, n.W)(m, c),
          N = ((t) => {
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
          g = ["scale(".concat(0.95, ")")];
        void 0 !== N.y && g.unshift("translateY(".concat(N.y, "px)")),
          void 0 !== N.x && g.unshift("translateX(".concat(N.x, "px)"));
        let b = g.join(" "),
          T = s.P[a];
        return (0, r.jsx)(T, {
          animate: {
            opacity: +!!p,
            transform: p ? "scale(".concat(1, ")") : b,
          },
          className: (0, i.cn)("", w),
          initial: { opacity: 0, transform: b },
          ref: (t) => {
            m.current = t;
          },
          transition: { delay: d, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          ...u,
          children: e,
        });
      };
    },
    26080: (t, e, a) => {
      "use strict";
      a.d(e, {
        Az: () => l,
        Dc: () => o,
        H9: () => w,
        J$: () => i,
        Z$: () => c,
        qt: () => s,
        w7: () => n,
        xq: () => d,
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
        s = {
          CHANGE_LOGO: "Change logo",
          COPY_HEX: "Copy HEX",
          COPY_SVG: "Copy SVG",
          DOWNLOAD_ASSETS: "Download assets",
        },
        o = {
          FORM_SELECTED: "Contact form selected",
          FORM_SUBMITTED: "Contact form submitted",
        },
        i = {
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
        d = {
          CATEGORY_FILTER: "Providers category filter",
          SEARCH: "Providers search",
          USE_CASE_FILTER: "Providers use case filter",
        },
        c = {
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
    27118: (t, e, a) => {
      "use strict";
      a.d(e, { l: () => r });
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
    27761: (t, e, a) => {
      "use strict";
      a.d(e, { w: () => b });
      var r = a(54568),
        n = a(23194),
        s = a(67754),
        o = a(7620),
        i = a(29768);
      let l = s.Kq,
        d = s.bL,
        c = s.l9,
        w = o.forwardRef((t, e) => {
          let { className: a, children: n, sideOffset: o = 4, ...l } = t;
          return (0, r.jsxs)(s.UC, {
            className: (0, i.cn)(
              "tw-relative tw-z-[500] tw-w-full tw-overflow-hidden tw-rounded-md tw-bg-alpha-white/80 tw-p-3 tw-text-xs tw-font-normal tw-text-tooltip tw-outline-none tw-animate-in tw-fade-in-0 tw-zoom-in-95 data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=closed]:tw-zoom-out-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
              a
            ),
            ref: e,
            sideOffset: o,
            ...l,
            children: [
              (0, r.jsx)("div", {
                className:
                  "tw-absolute tw-inset-0 -tw-z-10 tw-rounded-md tw-backdrop-blur-2xl",
              }),
              n,
            ],
          });
        });
      w.displayName = s.UC.displayName;
      var u = a(5823);
      let m = (t) =>
          (0, u.P)() ? (0, r.jsx)(n.AM, { ...t }) : (0, r.jsx)(d, { ...t }),
        p = (t) =>
          (0, u.P)() ? (0, r.jsx)(n.Wv, { ...t }) : (0, r.jsx)(c, { ...t }),
        N = (t) =>
          (0, u.P)()
            ? (0, r.jsx)(n.hl, {
                ...t,
                className:
                  "tw-z-[10003] tw-max-w-xs tw-whitespace-normal tw-break-words tw-text-left tw-shadow-lg",
              })
            : (0, r.jsx)(w, {
                ...t,
                className: (0, i.cn)(
                  "tw-z-[10003] tw-max-w-xs tw-whitespace-normal tw-break-words tw-text-left tw-shadow-lg",
                  t.className
                ),
              });
      var g = a(4451);
      function b(t) {
        let {
            trigger: e,
            content: a,
            triggerProps: n = {},
            contentProps: s = {},
            asChild: o = !0,
            skipTouch: i = !1,
            onOpenChange: d,
          } = t,
          c = (0, u.P)();
        return i && c
          ? e || (0, r.jsx)(g.A.info, { className: "tw-size-4" })
          : (0, r.jsx)(l, {
              children: (0, r.jsxs)(m, {
                delayDuration: 0,
                onOpenChange: d,
                children: [
                  (0, r.jsx)(p, {
                    ...n,
                    asChild: o,
                    children:
                      e || (0, r.jsx)(g.A.info, { className: "tw-size-4" }),
                  }),
                  a && (0, r.jsx)(N, { ...s, children: a }),
                ],
              }),
            });
      }
    },
    32583: (t, e, a) => {
      "use strict";
      a.d(e, { b: () => o, p: () => s });
      var r = a(79924),
        n = a(8960);
      let s = (0, r.eU)(null, (t, e, a) => {
          e(n.p9, { properties: { tenant: "landing" }, url: a });
        }),
        o = (0, r.eU)(null, (t, e, a) => {
          let { eventName: r, properties: s } = a,
            o = { ...s, tenant: "landing" };
          e(n.bL, { eventName: r, properties: o });
        });
    },
    37370: (t, e, a) => {
      "use strict";
      function r(t) {
        var e, a, r;
        return null !=
          (r = null == (e = (a = Error).isError) ? void 0 : e.call(a, t))
          ? r
          : t instanceof Error;
      }
      a.d(e, { b: () => r });
    },
    40615: (t, e, a) => {
      "use strict";
      a.d(e, { A: () => l });
      var r = a(54568),
        n = a(4451),
        s = a(29768);
      let o = {
          default: "tw-border-foreground-secondary/10",
          destructive: "tw-border-error-foreground/10",
          success: "tw-border-success-foreground/10",
          warning: "tw-border-warning-foreground/10",
        },
        i = {
          default: "tw-border-foreground-tertiary/30 tw-text-secondary",
          destructive: "tw-border-error-foreground/30 tw-text-error-foreground",
          success: "tw-border-success-foreground/30 tw-text-success-foreground",
          warning: "tw-border-warning-foreground/30 tw-text-warning-foreground",
        };
      function l(t) {
        let {
          variant: e,
          icon: a = n.A.info,
          className: l,
          iconClassName: d,
        } = t;
        return (0, r.jsx)("div", {
          className: (0, s.cn)(
            "tw-w-fit tw-rounded-full tw-border-2 tw-p-1",
            o[e || "default"],
            l
          ),
          children: (0, r.jsx)(a, {
            className: (0, s.cn)(
              "tw-size-8 tw-rounded-full tw-border-2 tw-p-1",
              i[e || "default"],
              d
            ),
          }),
        });
      }
    },
    46278: (t, e, a) => {
      "use strict";
      a.d(e, { TokenSection: () => E });
      var r = a(54568),
        n = a(13432),
        s = a(60844),
        o = a(61773),
        i = a(76917),
        l = a(27761),
        d = a(47227),
        c = a(4451),
        w = a(17680),
        u = a(80023),
        m = a(54821),
        p = a(37370),
        N = a(26080),
        g = a(32583),
        b = a(27118);
      let T = [
          {
            height: 120,
            label: "WLFI",
            png: "https://".concat(n.w4, "/assets/brand/wlfi.png"),
            svg: "https://".concat(n.w4, "/assets/brand/wlfi.svg"),
            width: 120,
          },
          {
            height: 120,
            label: "USD1",
            png: "https://".concat(n.w4, "/assets/brand/usd1.png"),
            svg: "https://".concat(n.w4, "/assets/brand/usd1.svg"),
            width: 120,
          },
        ],
        f = async (t) => {
          try {
            let e = await fetch(t),
              a = await e.text();
            await navigator.clipboard.writeText(a),
              (0, w.o)({
                toastConfig: {
                  title: "SVG copied to clipboard",
                  variant: "success",
                },
              }),
              u.M.set(g.b, {
                eventName: N.qt.COPY_SVG,
                properties: { success: !0, url: t },
              });
          } catch (a) {
            console.error("Copy failed:", a),
              (0, w.o)({
                toastConfig: { title: "Failed to copy SVG", variant: "error" },
              });
            let e = (0, p.b)(a) ? a.message : "Unknown error";
            u.M.set(g.b, {
              eventName: N.qt.COPY_SVG,
              properties: { error: e, success: !1, url: t },
            });
          }
        };
      function E() {
        let t = (0, s.Xr)(g.b),
          e = (e) => {
            (0, m.R)(e)
              .then(() => {
                t({
                  eventName: N.qt.DOWNLOAD_ASSETS,
                  properties: { success: !0, url: e },
                });
              })
              .catch((a) => {
                let r = (0, p.b)(a) ? a.message : "Unknown error";
                t({
                  eventName: N.qt.DOWNLOAD_ASSETS,
                  properties: { error: r, success: !1, url: e },
                });
              });
          };
        return (0, r.jsx)(i.w, {
          "data-pw": b.l.LANDING.BRAND.TOKEN_SECTION,
          titleProps: {
            as: "h3",
            children: (0, r.jsx)(r.Fragment, { children: "Token" }),
            variant: "gray",
          },
          children: (0, r.jsx)("div", {
            className:
              "tw-mx-auto tw-flex tw-w-full tw-max-w-6xl tw-flex-col tw-items-center tw-justify-center tw-gap-4 md:tw-flex-row",
            children: T.map((t) =>
              (0, r.jsxs)(
                "div",
                {
                  className:
                    "tw-flex tw-w-full tw-max-w-xl tw-flex-col tw-items-start tw-justify-center tw-gap-4",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "tw-group tw-relative tw-flex tw-h-60 tw-w-full tw-items-center tw-justify-center tw-gap-2 tw-rounded-sm tw-border tw-border-border tw-bg-background-secondary tw-text-[160px]",
                      "data-pw": b.l.LANDING.BRAND.TOKEN_ITEM,
                      children: [
                        (0, r.jsx)(o.default, {
                          alt: t.label,
                          height: t.height,
                          src: t.svg,
                          width: t.width,
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "tw-absolute tw-bottom-0 tw-right-0 tw-flex tw-flex-row tw-items-center tw-gap-2 tw-p-2 tw-opacity-0 tw-transition-opacity tw-duration-200 tw-ease-in-out group-hover:tw-opacity-100",
                          "data-pw":
                            b.l.LANDING.BRAND.TOKEN_ITEM_BUTTONS_CONTAINER,
                          children: [
                            (0, r.jsx)(l.w, {
                              content: "Download PNG",
                              trigger: (0, r.jsxs)(d.Button, {
                                className: "tw-gap-1.5",
                                "data-pw":
                                  b.l.LANDING.BRAND.PNG_DOWNLOAD_BUTTON,
                                onClick: () => e(t.png),
                                size: "sm",
                                variant: "secondary",
                                children: [
                                  (0, r.jsx)(c.A.download, {
                                    className: "tw-size-4",
                                  }),
                                  "PNG",
                                ],
                              }),
                            }),
                            (0, r.jsx)(l.w, {
                              content: "Download SVG",
                              trigger: (0, r.jsxs)(d.Button, {
                                className: "tw-gap-1.5",
                                "data-pw":
                                  b.l.LANDING.BRAND.SVG_DOWNLOAD_BUTTON,
                                onClick: () => e(t.svg),
                                size: "sm",
                                variant: "secondary",
                                children: [
                                  (0, r.jsx)(c.A.download, {
                                    className: "tw-size-4",
                                  }),
                                  "SVG",
                                ],
                              }),
                            }),
                            (0, r.jsx)(l.w, {
                              content: "Copy SVG",
                              trigger: (0, r.jsx)(d.Button, {
                                "data-pw": b.l.LANDING.BRAND.SVG_COPY_BUTTON,
                                onClick: () => void f(t.svg),
                                size: "icon-sm",
                                variant: "secondary",
                                children: (0, r.jsx)(c.A.copy, {
                                  className: "tw-size-4",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "tw-flex tw-flex-col tw-items-start tw-gap-3",
                      children: (0, r.jsx)("div", {
                        className: "tw-flex tw-flex-col tw-gap-1",
                        children: (0, r.jsx)("span", { children: t.label }),
                      }),
                    }),
                  ],
                },
                t.label
              )
            ),
          }),
        });
      }
    },
    54821: (t, e, a) => {
      "use strict";
      a.d(e, { R: () => r });
      let r = async (t) => {
        let e = await fetch(t),
          a = await e.blob(),
          r = URL.createObjectURL(a),
          n = t.substring(t.lastIndexOf("/") + 1),
          s = document.createElement("a");
        return (
          (s.href = r),
          (s.download = n),
          document.body.appendChild(s),
          s.click(),
          new Promise((t) => {
            setTimeout(() => {
              document.body.removeChild(s), URL.revokeObjectURL(r), t(!0);
            }, 100);
          })
        );
      };
    },
    56103: (t, e, a) => {
      "use strict";
      a.d(e, { HeroSection: () => b });
      var r = a(54568),
        n = a(13432),
        s = a(76917),
        o = a(47227),
        i = a(4451),
        l = a(17680),
        d = a(80023),
        c = a(8960),
        w = a(54821),
        u = a(37370),
        m = a(26080),
        p = a(27118);
      let N = "https://".concat(n.w4, "/assets/brand/kit-v1.1.zip");
      function g() {
        return (0, r.jsxs)(o.Button, {
          className: "tw-w-full tw-gap-1.5 sm:tw-w-fit",
          "data-pw": p.l.LANDING.BRAND.DOWNLOAD_KIT_BUTTON,
          onClick: () =>
            void (0, w.R)(N)
              .then(() => {
                (0, l.o)({
                  toastConfig: {
                    title: "Downloaded brand kit",
                    variant: "success",
                  },
                }),
                  d.M.set(c.bL, {
                    eventName: m.qt.DOWNLOAD_ASSETS,
                    properties: { success: !0, url: N },
                  });
              })
              .catch((t) => {
                let e = (0, u.b)(t) ? t.message : "Unknown error";
                d.M.set(c.bL, {
                  eventName: m.qt.DOWNLOAD_ASSETS,
                  properties: { error: e, success: !1, url: N },
                });
              }),
          size: "lg",
          children: [
            "Download brand kit ",
            (0, r.jsx)(i.A.download, { className: "tw-size-4 tw-stroke-2" }),
          ],
        });
      }
      function b() {
        return (0, r.jsx)(s.w, {
          className: "tw-gap-8 md:tw-gap-8",
          "data-pw": p.l.LANDING.BRAND.HERO_SECTION,
          subtitleProps: {
            as: "h2",
            children: (0, r.jsx)(r.Fragment, {
              children:
                "Everything you need to represent our brand correctly. Please don't alter, stretch, rotate, or create your own version of the logo. Always leave enough clear space around it to ensure visibility and impact.",
            }),
          },
          titleProps: {
            as: "h1",
            children: (0, r.jsx)(r.Fragment, { children: "Brand Assets" }),
            size: "lg",
            variant: "brand",
          },
          children: (0, r.jsx)("div", {
            className:
              "tw-flex tw-w-full tw-flex-col tw-items-center tw-gap-2 sm:tw-flex-row sm:tw-justify-center",
            children: (0, r.jsx)(g, {}),
          }),
        });
      }
    },
    61773: (t, e, a) => {
      "use strict";
      a.d(e, { default: () => n.a });
      var r = a(64930),
        n = a.n(r);
    },
    64930: (t, e, a) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var a in e)
            Object.defineProperty(t, a, { enumerable: !0, get: e[a] });
        })(e, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return i;
          },
        });
      let r = a(21510),
        n = a(57258),
        s = a(73970),
        o = r._(a(50170));
      function i(t) {
        let { props: e } = (0, n.getImgProps)(t, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [t, a] of Object.entries(e)) void 0 === a && delete e[t];
        return { props: e };
      }
      let l = s.Image;
    },
    67525: (t, e, a) => {
      "use strict";
      a.d(e, { ColorBlock: () => g });
      var r = a(54568),
        n = a(60844),
        s = a(7620),
        o = a(60357),
        i = a(27761),
        l = a(47227),
        d = a(4451),
        c = a(17680),
        w = a(8960),
        u = a(29768),
        m = a(37370),
        p = a(26080),
        N = a(27118);
      let g = (t) => {
        let { label: e, className: a } = t,
          g = (0, n.Xr)(w.bL),
          [, b] = (0, o.Cj)(),
          T = s.useRef(null),
          [f, E] = s.useState("");
        s.useEffect(() => {
          if (!T.current) return;
          let t = window
            .getComputedStyle(T.current)
            .backgroundColor.match(/\d+/g);
          t &&
            !(t.length < 3) &&
            E(
              "#".concat(
                t
                  .map((t) => {
                    let e = parseInt(t).toString(16);
                    return 1 === e.length ? "0".concat(e) : e;
                  })
                  .join("")
                  .toUpperCase()
              )
            );
        }, []);
        let _ = s.useCallback(() => {
          f &&
            b(f)
              .then(() => {
                (0, c.o)({
                  toastConfig: {
                    title: "".concat(e, "'s HEX copied to clipboard"),
                    variant: "success",
                  },
                }),
                  g({
                    eventName: p.qt.COPY_HEX,
                    properties: { hex: f, success: !0 },
                  });
              })
              .catch((t) => {
                let e = (0, m.b)(t) ? t.message : "Unknown error";
                g({
                  eventName: p.qt.COPY_HEX,
                  properties: { error: e, hex: f, success: !1 },
                });
              });
        }, [f, b, e, g]);
        return (0, r.jsxs)(
          "div",
          {
            className:
              "tw-group tw-col-span-1 tw-flex tw-w-full tw-flex-col tw-gap-4",
            "data-pw": N.l.LANDING.BRAND.COLOR_ITEM,
            children: [
              (0, r.jsx)("div", {
                className: (0, u.cn)(
                  "tw-relative tw-h-40 tw-w-full tw-rounded-md tw-border tw-border-border",
                  a
                ),
                ref: T,
                children: (0, r.jsx)(i.w, {
                  content: "Copy HEX",
                  trigger: (0, r.jsx)(l.Button, {
                    className:
                      "tw-absolute tw-bottom-2 tw-right-2 tw-opacity-0 tw-transition-opacity tw-duration-200 tw-ease-in-out group-hover:tw-opacity-100",
                    "data-pw": N.l.LANDING.BRAND.HEX_COPY_BUTTON,
                    onClick: _,
                    size: "icon-sm",
                    variant: "secondary",
                    children: (0, r.jsx)(d.A.copy, { className: "tw-size-4" }),
                  }),
                }),
              }),
              (0, r.jsxs)("div", {
                className: "tw-flex tw-flex-col tw-gap-1",
                children: [
                  (0, r.jsx)("p", {
                    className: "tw-text-base tw-font-normal tw-text-primary",
                    children: e,
                  }),
                  (0, r.jsx)("p", {
                    className: "tw-text-xs tw-text-tertiary",
                    children: f,
                  }),
                ],
              }),
            ],
          },
          e
        );
      };
    },
    67876: (t, e, a) => {
      "use strict";
      a.d(e, {
        I: () => c,
        SQ: () => w,
        _2: () => u,
        lp: () => m,
        mB: () => p,
        rI: () => l,
        ty: () => d,
      });
      var r = a(54568),
        n = a(26631),
        s = a(58677),
        o = a(7620),
        i = a(29768);
      let l = n.bL,
        d = o.forwardRef((t, e) => {
          let { className: a, ...s } = t;
          return (0, r.jsx)(n.l9, {
            className: (0, i.cn)(
              "tw-flex tw-cursor-pointer tw-items-center tw-gap-1.5 tw-rounded-full tw-border-border-button-secondary-hover tw-p-1 tw-text-sm tw-font-semibold tw-text-foreground-button-secondary tw-shadow-input",
              a
            ),
            ref: e,
            ...s,
          });
        });
      d.displayName = n.l9.displayName;
      let c = n.YJ;
      n.ZL,
        n.Pb,
        n.z6,
        (o.forwardRef((t, e) => {
          let { className: a, inset: o, children: l, ...d } = t;
          return (0, r.jsxs)(n.ZP, {
            className: (0, i.cn)(
              "tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none data-[state=open]:tw-bg-background focus:tw-bg-background",
              o && "tw-pl-8",
              a
            ),
            ref: e,
            ...d,
            children: [
              l,
              (0, r.jsx)(s.vKP, { className: "tw-ml-auto tw-size-4" }),
            ],
          });
        }).displayName = n.ZP.displayName),
        (o.forwardRef((t, e) => {
          let { className: a, ...s } = t;
          return (0, r.jsx)(n.G5, {
            className: (0, i.cn)(
              "tw-z-[200] tw-min-w-32 tw-overflow-hidden tw-rounded-md tw-border tw-bg-background tw-p-1 tw-text-primary tw-shadow-lg data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
              a
            ),
            ref: e,
            ...s,
          });
        }).displayName = n.G5.displayName);
      let w = o.forwardRef((t, e) => {
        let { className: a, sideOffset: s = 4, ...o } = t;
        return (0, r.jsx)(n.ZL, {
          children: (0, r.jsx)(n.UC, {
            className: (0, i.cn)(
              "tw-z-[200] tw-min-w-32 tw-overflow-hidden tw-rounded-md tw-border tw-bg-background tw-p-1 tw-shadow-md",
              "data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
              a
            ),
            onWheel: (t) => {
              t.stopPropagation();
            },
            ref: e,
            sideOffset: s,
            ...o,
          }),
        });
      });
      w.displayName = n.UC.displayName;
      let u = o.forwardRef((t, e) => {
        let {
            className: a,
            icon: s,
            action: l,
            isActive: d,
            error: c,
            children: w,
            ...u
          } = t,
          m = s
            ? (0, r.jsx)(s, {
                className: (0, i.cn)(
                  "tw-size-4 tw-text-foreground-quaternary",
                  c && "tw-text-error-foreground"
                ),
              })
            : null,
          p = l
            ? (0, r.jsxs)("span", {
                className:
                  "tw-flex tw-w-full tw-items-center tw-justify-between",
                children: [w, l],
              })
            : w,
          N = (0, i.cn)(
            "tw-mx-1 tw-flex tw-cursor-pointer tw-select-none tw-items-center tw-gap-2 tw-rounded-sm tw-p-2 tw-text-sm tw-font-medium tw-text-secondary tw-outline-none tw-transition-colors data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50 hover:tw-bg-background-hover hover:tw-text-secondary-hover",
            d && "tw-bg-background-hover tw-text-secondary-hover",
            c && "tw-text-error-foreground hover:tw-text-error-foreground",
            a
          );
        if (u.asChild && 1 === o.Children.count(w) && o.isValidElement(w)) {
          let t = o.Children.only(w),
            a = (0, i.cn)(N, t.props.className);
          return (0, r.jsx)(n.q7, {
            autoFocus: !1,
            onPointerEnter: (t) => t.preventDefault(),
            onPointerLeave: (t) => t.preventDefault(),
            onPointerMove: (t) => t.preventDefault(),
            ref: e,
            ...u,
            children: o.cloneElement(t, {
              children: (0, r.jsxs)(r.Fragment, {
                children: [
                  m,
                  t.props.children,
                  l &&
                    (0, r.jsx)("span", {
                      className: "tw-ml-auto",
                      children: l,
                    }),
                ],
              }),
              className: a,
            }),
          });
        }
        return (0, r.jsxs)(n.q7, {
          autoFocus: !1,
          className: N,
          onPointerEnter: (t) => t.preventDefault(),
          onPointerLeave: (t) => t.preventDefault(),
          onPointerMove: (t) => t.preventDefault(),
          ref: e,
          ...u,
          children: [m, p],
        });
      });
      (u.displayName = n.q7.displayName),
        (o.forwardRef((t, e) => {
          let { className: a, children: o, checked: l, ...d } = t;
          return (0, r.jsxs)(n.H_, {
            checked: l,
            className: (0, i.cn)(
              "tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none tw-transition-colors data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",
              a
            ),
            ref: e,
            ...d,
            children: [
              (0, r.jsx)("span", {
                className:
                  "tw-absolute tw-left-2 tw-flex tw-size-3.5 tw-items-center tw-justify-center",
                children: (0, r.jsx)(n.VF, {
                  children: (0, r.jsx)(s.Srz, { className: "tw-size-4" }),
                }),
              }),
              o,
            ],
          });
        }).displayName = n.H_.displayName),
        (o.forwardRef((t, e) => {
          let { className: a, children: o, ...l } = t;
          return (0, r.jsxs)(n.hN, {
            className: (0, i.cn)(
              "tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none tw-transition-colors data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",
              a
            ),
            ref: e,
            ...l,
            children: [
              (0, r.jsx)("span", {
                className:
                  "tw-absolute tw-left-2 tw-flex tw-size-3.5 tw-items-center tw-justify-center",
                children: (0, r.jsx)(n.VF, {
                  children: (0, r.jsx)(s.RiX, {
                    className: "tw-size-4 tw-fill-current",
                  }),
                }),
              }),
              o,
            ],
          });
        }).displayName = n.hN.displayName);
      let m = o.forwardRef((t, e) => {
        let { className: a, inset: s, ...o } = t;
        return (0, r.jsx)(n.JU, {
          className: (0, i.cn)(
            "tw-px-2 tw-py-2.5 tw-text-sm tw-font-normal tw-text-tertiary",
            s && "tw-pl-8",
            a
          ),
          ref: e,
          ...o,
        });
      });
      m.displayName = n.JU.displayName;
      let p = o.forwardRef((t, e) => {
        let { className: a, ...s } = t;
        return (0, r.jsx)(n.wv, {
          className: (0, i.cn)(
            "tw--mx-1 tw-my-1 tw-h-px tw-bg-border-secondary",
            a
          ),
          ref: e,
          ...s,
        });
      });
      p.displayName = n.wv.displayName;
    },
    70649: (t, e, a) => {
      "use strict";
      a.d(e, { B8: () => C, UC: () => L, bL: () => I, l9: () => R });
      var r = a(7620),
        n = a(29254),
        s = a(80482),
        o = a(5577),
        i = a(18400),
        l = a(7156),
        d = a(17644),
        c = a(87076),
        w = a(60728),
        u = a(54568),
        m = "Tabs",
        [p, N] = (0, s.A)(m, [o.RG]),
        g = (0, o.RG)(),
        [b, T] = p(m),
        f = r.forwardRef((t, e) => {
          let {
              __scopeTabs: a,
              value: r,
              onValueChange: n,
              defaultValue: s,
              orientation: o = "horizontal",
              dir: i,
              activationMode: p = "automatic",
              ...N
            } = t,
            g = (0, d.jH)(i),
            [T, f] = (0, c.i)({
              prop: r,
              onChange: n,
              defaultProp: null != s ? s : "",
              caller: m,
            });
          return (0, u.jsx)(b, {
            scope: a,
            baseId: (0, w.B)(),
            value: T,
            onValueChange: f,
            orientation: o,
            dir: g,
            activationMode: p,
            children: (0, u.jsx)(l.sG.div, {
              dir: g,
              "data-orientation": o,
              ...N,
              ref: e,
            }),
          });
        });
      f.displayName = m;
      var E = "TabsList",
        _ = r.forwardRef((t, e) => {
          let { __scopeTabs: a, loop: r = !0, ...n } = t,
            s = T(E, a),
            i = g(a);
          return (0, u.jsx)(o.bL, {
            asChild: !0,
            ...i,
            orientation: s.orientation,
            dir: s.dir,
            loop: r,
            children: (0, u.jsx)(l.sG.div, {
              role: "tablist",
              "aria-orientation": s.orientation,
              ...n,
              ref: e,
            }),
          });
        });
      _.displayName = E;
      var h = "TabsTrigger",
        O = r.forwardRef((t, e) => {
          let { __scopeTabs: a, value: r, disabled: s = !1, ...i } = t,
            d = T(h, a),
            c = g(a),
            w = v(d.baseId, r),
            m = S(d.baseId, r),
            p = r === d.value;
          return (0, u.jsx)(o.q7, {
            asChild: !0,
            ...c,
            focusable: !s,
            active: p,
            children: (0, u.jsx)(l.sG.button, {
              type: "button",
              role: "tab",
              "aria-selected": p,
              "aria-controls": m,
              "data-state": p ? "active" : "inactive",
              "data-disabled": s ? "" : void 0,
              disabled: s,
              id: w,
              ...i,
              ref: e,
              onMouseDown: (0, n.m)(t.onMouseDown, (t) => {
                s || 0 !== t.button || !1 !== t.ctrlKey
                  ? t.preventDefault()
                  : d.onValueChange(r);
              }),
              onKeyDown: (0, n.m)(t.onKeyDown, (t) => {
                [" ", "Enter"].includes(t.key) && d.onValueChange(r);
              }),
              onFocus: (0, n.m)(t.onFocus, () => {
                let t = "manual" !== d.activationMode;
                p || s || !t || d.onValueChange(r);
              }),
            }),
          });
        });
      O.displayName = h;
      var x = "TabsContent",
        A = r.forwardRef((t, e) => {
          let {
              __scopeTabs: a,
              value: n,
              forceMount: s,
              children: o,
              ...d
            } = t,
            c = T(x, a),
            w = v(c.baseId, n),
            m = S(c.baseId, n),
            p = n === c.value,
            N = r.useRef(p);
          return (
            r.useEffect(() => {
              let t = requestAnimationFrame(() => (N.current = !1));
              return () => cancelAnimationFrame(t);
            }, []),
            (0, u.jsx)(i.C, {
              present: s || p,
              children: (a) => {
                let { present: r } = a;
                return (0, u.jsx)(l.sG.div, {
                  "data-state": p ? "active" : "inactive",
                  "data-orientation": c.orientation,
                  role: "tabpanel",
                  "aria-labelledby": w,
                  hidden: !r,
                  id: m,
                  tabIndex: 0,
                  ...d,
                  ref: e,
                  style: {
                    ...t.style,
                    animationDuration: N.current ? "0s" : void 0,
                  },
                  children: r && o,
                });
              },
            })
          );
        });
      function v(t, e) {
        return "".concat(t, "-trigger-").concat(e);
      }
      function S(t, e) {
        return "".concat(t, "-content-").concat(e);
      }
      A.displayName = x;
      var I = f,
        C = _,
        R = O,
        L = A;
    },
    76917: (t, e, a) => {
      "use strict";
      a.d(e, { w: () => w });
      var r = a(54568),
        n = a(23493),
        s = a(615),
        o = a(7620),
        i = a(29768);
      let l = (0, s.F)(
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
        d = o.forwardRef((t, e) => {
          let { className: a, size: n, as: s = "h2", ...o } = t;
          return (0, r.jsx)(s, {
            className: (0, i.cn)(l({ size: n }), a),
            ref: e,
            ...o,
          });
        });
      d.displayName = "SectionSubtitle";
      var c = a(99348);
      function w(t) {
        let {
            children: e,
            className: a,
            titleProps: s,
            subtitleProps: o,
            titleContainerProps: l = {},
            titleContent: w,
            ...u
          } = t,
          m = s || o,
          { className: p, ...N } = l;
        return (0, r.jsxs)(n.AnimateInView, {
          as: "section",
          className: (0, i.cn)(
            "tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-gap-12 tw-py-16 md:tw-gap-16 md:tw-py-20 2xl:tw-py-24",
            a
          ),
          ...u,
          children: [
            m &&
              (0, r.jsxs)("div", {
                className: (0, i.cn)(
                  "tw-flex tw-flex-col tw-items-center tw-justify-center",
                  p
                ),
                ...N,
                children: [
                  s && (0, r.jsx)(c.A, { ...s }),
                  o && (0, r.jsx)(d, { ...o }),
                  w,
                ],
              }),
            e,
          ],
        });
      }
    },
    80023: (t, e, a) => {
      "use strict";
      a.d(e, { M: () => r });
      let r = (0, a(79924).y$)();
    },
    80603: (t, e, a) => {
      "use strict";
      a.d(e, { Xi: () => d, av: () => c, j7: () => l, tU: () => i });
      var r = a(54568),
        n = a(70649),
        s = a(7620),
        o = a(29768);
      let i = n.bL,
        l = s.forwardRef((t, e) => {
          let { className: a, ...s } = t;
          return (0, r.jsx)(n.B8, {
            className: (0, o.cn)(
              "tw-inline-flex tw-items-center tw-justify-center tw-divide-x tw-rounded-md tw-border tw-border-border tw-bg-transparent",
              a
            ),
            ref: e,
            ...s,
          });
        });
      l.displayName = n.B8.displayName;
      let d = s.forwardRef((t, e) => {
        let { className: a, ...s } = t;
        return (0, r.jsx)(n.l9, {
          className: (0, o.cn)(
            "tw-inline-flex tw-items-center tw-justify-center tw-whitespace-nowrap tw-px-4 tw-py-2 tw-text-sm tw-font-semibold tw-text-secondary tw-transition-all first:tw-rounded-l-md last:tw-rounded-r-md data-[state=active]:tw-bg-background-brand data-[state=active]:tw-text-black hover:tw-bg-background-hover hover:tw-text-secondary-hover data-[state=active]:hover:tw-bg-background-brand data-[state=active]:hover:tw-text-black focus-visible:tw-bg-background-brand focus-visible:tw-outline-none disabled:tw-pointer-events-none disabled:tw-text-disabled",
            a
          ),
          ref: e,
          ...s,
        });
      });
      d.displayName = n.l9.displayName;
      let c = s.forwardRef((t, e) => {
        let { className: a, ...s } = t;
        return (0, r.jsx)(n.UC, {
          className: (0, o.cn)(
            "tw-mt-2 tw-ring-offset-background focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-offset-2",
            a
          ),
          ref: e,
          ...s,
        });
      });
      c.displayName = n.UC.displayName;
    },
    84918: (t, e, a) => {
      "use strict";
      a.d(e, { LogoSection: () => A });
      var r = a(54568),
        n = a(13432),
        s = a(60844),
        o = a(61773),
        i = a(7620),
        l = a(76917),
        d = a(27761),
        c = a(47227),
        w = a(67876),
        u = a(4451),
        m = a(17680),
        p = a(80603),
        N = a(80023),
        g = a(8960),
        b = a(29768),
        T = a(54821),
        f = a(37370),
        E = a(26080),
        _ = a(27118);
      let h = [
          { label: "Logomark", value: "logomark" },
          { label: "Primary", value: "primary" },
          { label: "Stacked", value: "stacked" },
          { label: "Abbreviated", value: "abbreviated" },
        ],
        O = {
          abbreviated: [
            {
              className: "tw-bg-utility-gray-50",
              height: 28,
              label: "Abbreviated colored",
              png: "https://".concat(
                n.w4,
                "/assets/brand/abbreviated-colored.png"
              ),
              svg: "https://".concat(
                n.w4,
                "/assets/brand/abbreviated-colored.svg"
              ),
              width: 158,
            },
            {
              className: "tw-bg-primary",
              height: 28,
              label: "Abbreviated dark",
              png: "https://".concat(
                n.w4,
                "/assets/brand/abbreviated-dark.png"
              ),
              svg: "https://".concat(
                n.w4,
                "/assets/brand/abbreviated-dark.svg"
              ),
              width: 158,
            },
            {
              className: "tw-bg-background-brand",
              height: 28,
              label: "Abbreviated light",
              png: "https://".concat(
                n.w4,
                "/assets/brand/abbreviated-light.png"
              ),
              svg: "https://".concat(
                n.w4,
                "/assets/brand/abbreviated-light.svg"
              ),
              width: 158,
            },
          ],
          logomark: [
            {
              className: "tw-bg-utility-gray-50",
              height: 48,
              label: "Logomark colored",
              png: "https://".concat(
                n.w4,
                "/assets/brand/logomark-colored.png"
              ),
              svg: "https://".concat(
                n.w4,
                "/assets/brand/logomark-colored.svg"
              ),
              width: 148,
            },
            {
              className: "tw-bg-primary",
              height: 48,
              label: "Logomark dark",
              png: "https://".concat(n.w4, "/assets/brand/logomark-dark.png"),
              svg: "https://".concat(n.w4, "/assets/brand/logomark-dark.svg"),
              width: 148,
            },
            {
              className: "tw-bg-background-brand",
              height: 48,
              label: "Logomark light",
              png: "https://".concat(n.w4, "/assets/brand/logomark-light.png"),
              svg: "https://".concat(n.w4, "/assets/brand/logomark-light.svg"),
              width: 148,
            },
          ],
          primary: [
            {
              className: "tw-bg-utility-gray-50",
              height: 20,
              label: "Primary colored",
              png: "https://".concat(n.w4, "/assets/brand/primary-colored.png"),
              svg: "https://".concat(n.w4, "/assets/brand/primary-colored.svg"),
              width: 259,
            },
            {
              className: "tw-bg-primary",
              height: 20,
              label: "Primary dark",
              png: "https://".concat(n.w4, "/assets/brand/primary-dark.png"),
              svg: "https://".concat(n.w4, "/assets/brand/primary-dark.svg"),
              width: 259,
            },
            {
              className: "tw-bg-background-brand",
              height: 20,
              label: "Primary light",
              png: "https://".concat(n.w4, "/assets/brand/primary-light.png"),
              svg: "https://".concat(n.w4, "/assets/brand/primary-light.svg"),
              width: 259,
            },
          ],
          stacked: [
            {
              className: "tw-bg-utility-gray-50",
              height: 80,
              label: "Stacked colored",
              png: "https://".concat(n.w4, "/assets/brand/stacked-colored.png"),
              svg: "https://".concat(n.w4, "/assets/brand/stacked-colored.svg"),
              width: 160,
            },
            {
              className: "tw-bg-primary",
              height: 80,
              label: "Stacked dark",
              png: "https://".concat(n.w4, "/assets/brand/stacked-dark.png"),
              svg: "https://".concat(n.w4, "/assets/brand/stacked-dark.svg"),
              width: 160,
            },
            {
              className: "tw-bg-background-brand",
              height: 80,
              label: "Stacked light",
              png: "https://".concat(n.w4, "/assets/brand/stacked-light.png"),
              svg: "https://".concat(n.w4, "/assets/brand/stacked-light.svg"),
              width: 160,
            },
          ],
        },
        x = async (t) => {
          try {
            let e = await fetch(t),
              a = await e.text();
            await navigator.clipboard.writeText(a),
              (0, m.o)({
                toastConfig: {
                  title: "SVG copied to clipboard",
                  variant: "success",
                },
              }),
              N.M.set(g.bL, {
                eventName: E.qt.COPY_SVG,
                properties: { success: !0, url: t },
              });
          } catch (a) {
            console.error("Copy failed:", a),
              (0, m.o)({
                toastConfig: { title: "Failed to copy SVG", variant: "error" },
              });
            let e = (0, f.b)(a) ? a.message : "Unknown error";
            N.M.set(g.bL, {
              eventName: E.qt.COPY_SVG,
              properties: { error: e, success: !1, url: t },
            });
          }
        };
      function A() {
        let [t, e] = i.useState(h[0]),
          [a, n] = i.useState(!1),
          m = (0, s.Xr)(g.bL),
          N = (t) => {
            e(t),
              m({ eventName: E.qt.CHANGE_LOGO, properties: { logo: t.value } });
          },
          A = (t) => {
            (0, T.R)(t)
              .then(() => {
                m({
                  eventName: E.qt.DOWNLOAD_ASSETS,
                  properties: { success: !0, url: t },
                });
              })
              .catch((e) => {
                let a = (0, f.b)(e) ? e.message : "Unknown error";
                m({
                  eventName: E.qt.DOWNLOAD_ASSETS,
                  properties: { error: a, success: !1, url: t },
                });
              });
          };
        return (0, r.jsx)(l.w, {
          className: "tw-gap-6 md:tw-gap-6",
          "data-pw": _.l.LANDING.BRAND.LOGO_SECTION,
          titleProps: {
            as: "h3",
            children: (0, r.jsx)(r.Fragment, { children: "Logos" }),
            variant: "gray",
          },
          children: (0, r.jsxs)(p.tU, {
            className:
              "tw-flex tw-w-full tw-max-w-6xl tw-flex-col tw-gap-12 md:tw-gap-16",
            value: t.value,
            children: [
              (0, r.jsx)("div", {
                className: "tw-hidden tw-w-full tw-px-4 md:tw-block",
                children: (0, r.jsx)("div", {
                  className:
                    "tw-mx-auto tw-flex tw-w-full tw-max-w-md tw-items-center tw-justify-center tw-gap-2 tw-rounded-full tw-border tw-border-border tw-bg-background-secondary-subtle tw-p-1 tw-shadow-secondary",
                  children: h.map((e) =>
                    (0, r.jsx)(
                      c.Button,
                      {
                        className: "tw-flex-1",
                        onClick: () => N(e),
                        variant: t.value === e.value ? "default" : "link",
                        children: e.label,
                      },
                      e.value
                    )
                  ),
                }),
              }),
              (0, r.jsx)("div", {
                className: "tw-block md:tw-hidden",
                children: (0, r.jsxs)(w.rI, {
                  onOpenChange: n,
                  open: a,
                  children: [
                    (0, r.jsx)(w.ty, {
                      asChild: !0,
                      className: "tw-shadow-none",
                      children: (0, r.jsxs)(c.Button, {
                        className:
                          "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-px-3 data-[state=open]:tw-bg-transparent data-[state=open]:tw-text-foreground-button-ghost data-[state=open]:tw-shadow-button-focus-simple",
                        variant: "secondary",
                        children: [
                          (0, r.jsx)("span", { children: t.label }),
                          (0, r.jsx)(u.A.chevronDown, {
                            className: "tw-size-4",
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsx)(w.SQ, {
                      className: "dropdown-content-width-full",
                      onInteractOutside: () => n(!1),
                      children: h.map((t) =>
                        (0, r.jsx)(
                          w._2,
                          {
                            className: "hover:tw-text-foreground-brand",
                            onClick: () => N(t),
                            children: t.label,
                          },
                          t.value
                        )
                      ),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(p.av, {
                className:
                  "tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-gap-4 md:tw-flex-row",
                value: t.value,
                children: O[t.value].map((t, e) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: "tw-flex tw-w-full tw-flex-col tw-gap-4",
                      "data-pw": _.l.LANDING.BRAND.LOGO_ITEM,
                      children: [
                        (0, r.jsxs)("div", {
                          className: (0, b.cn)(
                            "tw-group tw-relative tw-flex tw-h-52 tw-w-full tw-items-center tw-justify-center tw-rounded-md tw-border tw-border-border tw-p-1",
                            t.className
                          ),
                          children: [
                            (0, r.jsx)(o.default, {
                              alt: t.label,
                              height: t.height,
                              loading: 0 === e ? "eager" : "lazy",
                              sizes: "(max-width: 768px) 100vw, 33vw",
                              src: t.svg,
                              width: t.width,
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "tw-absolute tw-bottom-0 tw-right-0 tw-flex tw-flex-row tw-items-center tw-gap-2 tw-p-2 tw-opacity-0 tw-transition-opacity tw-duration-200 tw-ease-in-out group-hover:tw-opacity-100",
                              "data-pw":
                                _.l.LANDING.BRAND.LOGO_ITEM_BUTTONS_CONTAINER,
                              children: [
                                (0, r.jsx)(d.w, {
                                  content: "Download PNG",
                                  trigger: (0, r.jsxs)(c.Button, {
                                    className: "tw-gap-1.5",
                                    "data-pw":
                                      _.l.LANDING.BRAND.PNG_DOWNLOAD_BUTTON,
                                    onClick: () => A(t.png),
                                    size: "sm",
                                    variant: "secondary",
                                    children: [
                                      (0, r.jsx)(u.A.download, {
                                        className: "tw-size-4",
                                      }),
                                      "PNG",
                                    ],
                                  }),
                                }),
                                (0, r.jsx)(d.w, {
                                  content: "Download SVG",
                                  trigger: (0, r.jsxs)(c.Button, {
                                    className: "tw-gap-1.5",
                                    "data-pw":
                                      _.l.LANDING.BRAND.SVG_DOWNLOAD_BUTTON,
                                    onClick: () => A(t.svg),
                                    size: "sm",
                                    variant: "secondary",
                                    children: [
                                      (0, r.jsx)(u.A.download, {
                                        className: "tw-size-4",
                                      }),
                                      "SVG",
                                    ],
                                  }),
                                }),
                                (0, r.jsx)(d.w, {
                                  content: "Copy SVG",
                                  trigger: (0, r.jsx)(c.Button, {
                                    "data-pw":
                                      _.l.LANDING.BRAND.SVG_COPY_BUTTON,
                                    onClick: () => void x(t.svg),
                                    size: "icon-sm",
                                    variant: "secondary",
                                    children: (0, r.jsx)(u.A.copy, {
                                      className: "tw-size-4",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "tw-text-base tw-font-normal tw-text-primary",
                          children: t.label,
                        }),
                      ],
                    },
                    t.label
                  )
                ),
              }),
            ],
          }),
        });
      }
    },
    91912: (t, e, a) => {
      "use strict";
      a.d(e, {
        If: () => c,
        My: () => l,
        TE: () => d,
        UZ: () => n,
        W6: () => o,
        pU: () => s,
        vH: () => i,
      });
      var r = a(25474);
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
      let s = (0, r.tG)(n.USER_ACCEPTED_ANALYTICS, null, void 0, {
          getOnInit: !0,
        }),
        o = (0, r.tG)(n.TESTNET_ENABLED, !1, void 0, { getOnInit: !0 }),
        i = (0, r.tG)(n.READ_ONLY_MODE_ADDRESS, void 0, void 0, {
          getOnInit: !0,
        }),
        l = (0, r.tG)(n.READ_ONLY_MODE_ENS_NAME, void 0, void 0, {
          getOnInit: !0,
        }),
        d = (0, r.tG)(n.BRIDGE_TERMS_ACCEPTED, {}, void 0, { getOnInit: !0 }),
        c = (0, r.tG)(n.SWAP_TERMS_ACCEPTED, {}, void 0, { getOnInit: !0 });
    },
    99348: (t, e, a) => {
      "use strict";
      a.d(e, { A: () => d });
      var r = a(54568),
        n = a(615),
        s = a(7620),
        o = a(29768);
      let i = (0, n.F)(
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
        l = s.forwardRef((t, e) => {
          let { className: a, variant: n, size: s, as: l = "h1", ...d } = t;
          return (0, r.jsx)(l, {
            className: (0, o.cn)(i({ size: s, variant: n }), a),
            ref: e,
            ...d,
          });
        });
      l.displayName = "SectionTitle";
      let d = l;
    },
  },
  (t) => {
    t.O(
      0,
      [
        9386, 3387, 7261, 8745, 3970, 160, 887, 4154, 747, 1504, 6553, 5461,
        4011, 7478, 1239, 1675, 7453, 5377, 587, 1902, 7358,
      ],
      () => t((t.s = 12811))
    ),
      (_N_E = t.O());
  },
]);
