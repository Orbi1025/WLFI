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
      (e._sentryDebugIds[t] = "c1bb21a8-077a-4665-aeb1-18aabd4a4e04"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-c1bb21a8-077a-4665-aeb1-18aabd4a4e04"));
  })();
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6391],
  {
    5023: (e, t, o) => {
      "use strict";
      o.d(t, { N: () => s });
      var n = o(54568),
        r = o(27261),
        a = o.n(r),
        i = o(29768);
      let s = (e) => {
        let { className: t, ...o } = e;
        return (0, n.jsx)(a(), {
          className: (0, i.cn)(
            "tw-outline-none focus-visible:tw-shadow-button-focus-simple",
            t
          ),
          ...o,
        });
      };
    },
    8960: (e, t, o) => {
      "use strict";
      o.d(t, {
        AK: () => m,
        XJ: () => h,
        NB: () => f,
        wY: () => T,
        bL: () => w,
        p9: () => E,
      });
      var n = o(40160),
        r = o(79924),
        a = o(58369),
        i = o(11985),
        s = o(91912);
      function l() {
        return (
          (function () {
            if ("undefined" == typeof navigator) return !1;
            let e = navigator.doNotTrack;
            return "1" === e || "yes" === e;
          })() ||
          ("undefined" != typeof navigator &&
            !0 === navigator.globalPrivacyControl)
        );
      }
      let c = (0, r.eU)((e) => {
          let t = e(s.pU),
            o = l();
          return "true" === t && !o;
        }),
        d = (0, r.eU)(!0),
        u = (0, r.eU)(!1),
        p = (0, r.eU)(null, (e, t) => {
          let o = "true" === e(s.pU),
            n = e(u),
            r = i.h.NEXT_PUBLIC_MIXPANEL_ID,
            c = i.h.NEXT_PUBLIC_GOOGLE_ID;
          if (!l()) {
            if (
              (n ||
                (a.A.init(r, {
                  debug: i.h.NEXT_PUBLIC_STAGE !== i.L.production,
                  ip: !1,
                  opt_out_tracking_by_default: !0,
                  record_sessions_percent: 1,
                  verbose: i.h.NEXT_PUBLIC_STAGE !== i.L.production,
                }),
                t(u, !0)),
              o)
            ) {
              var d, p;
              a.A.opt_in_tracking(),
                window.gtag("consent", "update", {
                  analytics_storage: "granted",
                }),
                null == (d = (p = window).gtag) ||
                  d.call(p, "config", c, {
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
        h = (0, r.eU)(null, (e, t) => {
          let o = e(s.pU),
            n = e(u);
          null === o || n || t(p);
        }),
        m = (0, r.eU)(null, (e, t) => {
          if (l()) {
            t(s.pU, "false"), t(d, !1), t(p);
            return;
          }
          t(s.pU, "true"), t(d, !1), t(p);
        }),
        f = (0, r.eU)(null, (e, t) => {
          t(s.pU, "false"), t(d, !1), t(p);
        }),
        T = (0, r.eU)(null, (e, t, o) => {
          t(s.pU, null), t(d, o);
        }),
        E = (0, r.eU)(null, (e, t, o) => {
          let { url: r, properties: s } = o,
            l = e(c),
            d = e(u),
            p = i.h.NEXT_PUBLIC_GOOGLE_ID;
          if (!l || !d) return;
          let h = {
            ...s,
            referrer: document.referrer,
            tenant: "common",
            title: document.title,
            url: r,
          };
          try {
            p &&
              window.gtag &&
              window.gtag("config", p, { page_path: r, ...h }),
              a.A.track("Page View", h);
          } catch (e) {
            console.error("Error tracking pageview:", e), (0, n.Cp)(e);
          }
        }),
        w = (0, r.eU)(null, (e, t, o) => {
          let { eventName: r, properties: s } = o,
            l = e(c),
            d = e(u);
          if (!l || !d) return;
          let p = i.h.NEXT_PUBLIC_GOOGLE_ID;
          try {
            d && a.A.track(r, s),
              p && window.gtag && window.gtag("event", r, { ...s, send_to: p });
          } catch (e) {
            console.error("Error tracking event:", e), (0, n.Cp)(e);
          }
        });
    },
    13432: (e, t, o) => {
      "use strict";
      o.d(t, {
        DG: () => r,
        P: () => w,
        Pv: () => c,
        Um: () => _,
        p4: () => N,
        w4: () => L,
      });
      var n = o(68266),
        r = {};
      (0, n.V)(r, { APPROVAL_GAS_LIMIT: () => a, USDC_ADDRESS: () => i });
      var a = "45000",
        i = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
      (0, n.V)({}, { selectors: () => s });
      var s = {};
      (0, n.V)(s, { mainnet: () => l });
      var l = {
          bsc: 0x9d70576d8e253bcfn,
          ethereum: 0x45849994fc9c7b15n,
          plume: 0xf8946d7c5b972a83n,
        },
        c = {};
      (0, n.V)(c, {
        UNISWAP_V3_ROUTER_ADDRESS: () => E,
        USD1_ADDRESS: () => T,
        USD1_LEGACY_ADDRESS: () => f,
        WLFI_ADDRESS: () => d,
        WLFI_DECIMALS: () => h,
        WLFI_REGISTRY_ADDRESS: () => u,
        WLFI_SYMBOL: () => p,
        WLFI_VESTER_ADDRESS: () => m,
      });
      var d = "0xda5e1988097297dcdc1f90d4dfe7909e847cbef6",
        u = "0x4f61a99e42e21ea3c3eaf9b1b30fb80a7900d3ce",
        p = "WLFI",
        h = 18,
        m = "0x74b4f6a2e579d730aacb9dd23cfbbaeb95029583",
        f = "0x8d0d000ee44948fc98c9b98a4fa4921476f08b0d",
        T = "0x111111d2bf19e43c34263401e0cad979ed1cdb61",
        E = "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
        w = {};
      (0, n.V)(w, { POLLING_INTERVAL: () => g });
      var g = 6e4,
        N = {};
      (0, n.V)(N, { statement: () => b });
      var b = "Sign in with Ethereum to World Liberty Financial",
        _ = {};
      (0, n.V)(_, {
        BNB_ADDRESS: () => O,
        ETHEREUM_ADDRESS: () => v,
        PLUME_ADDRESS: () => I,
        SYMBOL: () => y,
        TRON_ADDRESS: () => A,
      });
      var v = f,
        O = f,
        I = T,
        A = "TPFqcBAaaUMCSVRCqPaQ9QnzKhmuoLR6Rc",
        y = "USD1",
        L = "static.worldlibertyfinancial.com";
    },
    23228: (e, t, o) => {
      "use strict";
      o.d(t, { U: () => n });
      let n = function (e) {
        var t;
        let o =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "header",
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
          r = document.querySelector(e);
        if (!r) return;
        let a = document.querySelector(o),
          i = null != (t = null == a ? void 0 : a.clientHeight) ? t : 0,
          s = r.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ behavior: "smooth", top: s - (i + n) });
      };
    },
    23493: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { AnimateInView: () => l });
      var n = o(54568),
        r = o(11376),
        a = o(80747),
        i = o(7620),
        s = o(29768);
      let l = (e) => {
        let {
            children: t,
            as: o = "div",
            type: l = "up",
            delay: c = 0,
            options: d = { amount: 0.1, once: !0 },
            className: u,
            ...p
          } = e,
          h = i.useRef(null),
          m = (0, r.W)(h, d),
          f = ((e) => {
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
          })(l),
          T = ["scale(".concat(0.95, ")")];
        void 0 !== f.y && T.unshift("translateY(".concat(f.y, "px)")),
          void 0 !== f.x && T.unshift("translateX(".concat(f.x, "px)"));
        let E = T.join(" "),
          w = a.P[o];
        return (0, n.jsx)(w, {
          animate: {
            opacity: +!!m,
            transform: m ? "scale(".concat(1, ")") : E,
          },
          className: (0, s.cn)("", u),
          initial: { opacity: 0, transform: E },
          ref: (e) => {
            h.current = e;
          },
          transition: { delay: c, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          ...p,
          children: t,
        });
      };
    },
    26080: (e, t, o) => {
      "use strict";
      o.d(t, {
        Az: () => l,
        Dc: () => i,
        H9: () => u,
        J$: () => s,
        Z$: () => d,
        qt: () => a,
        w7: () => r,
        xq: () => c,
        zm: () => n,
      });
      let n = {
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
        r = {
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
        i = {
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
        u = {
          ADD_TO_WALLET: "Add token to wallet",
          COPY_TOKEN_ADDRESS: "Copy token address",
          SEE_AGREEMENT: "See agreement",
        };
    },
    27118: (e, t, o) => {
      "use strict";
      o.d(t, { l: () => n });
      let n = {
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
    32583: (e, t, o) => {
      "use strict";
      o.d(t, { b: () => i, p: () => a });
      var n = o(79924),
        r = o(8960);
      let a = (0, n.eU)(null, (e, t, o) => {
          t(r.p9, { properties: { tenant: "landing" }, url: o });
        }),
        i = (0, n.eU)(null, (e, t, o) => {
          let { eventName: n, properties: a } = o,
            i = { ...a, tenant: "landing" };
          t(r.bL, { eventName: n, properties: i });
        });
    },
    50781: (e, t, o) => {
      "use strict";
      o.d(t, { A: () => d });
      var n = o(54568),
        r = o(615),
        a = o(7620),
        i = o(4451),
        s = o(29768);
      let l = (0, r.F)(
          "tw-inline-flex tw-items-center tw-justify-center tw-border tw-border-border-secondary tw-shadow-input",
          {
            defaultVariants: { size: "default", variant: "default" },
            variants: {
              size: {
                default: "tw-size-14 tw-rounded-md",
                sm: "tw-size-10 tw-rounded-md",
              },
              variant: {
                default: "tw-bg-background-secondary tw-text-foreground-brand",
              },
            },
          }
        ),
        c = a.forwardRef((e, t) => {
          let {
            className: o,
            variant: r,
            size: a,
            iconClassName: c,
            icon: d = i.A.info,
            children: u,
            ...p
          } = e;
          return (0, n.jsx)("div", {
            "aria-hidden": "true",
            className: (0, s.cn)(l({ size: a, variant: r }), o),
            ref: t,
            ...p,
            children:
              u ||
              (0, n.jsx)(d, {
                className: (0, s.cn)(
                  { default: "tw-size-8", sm: "tw-size-6" }[a || "default"],
                  c
                ),
              }),
          });
        });
      c.displayName = "DecorativeIcon";
      let d = c;
    },
    51166: (e, t, o) => {
      "use strict";
      o.d(t, { default: () => d });
      var n = o(54568),
        r = o(7620),
        a = o(62384),
        i = o(70095);
      let s = [],
        l = { width: "100%", height: "100%" },
        c = (0, r.forwardRef)(function (e, t) {
          var o;
          let {
              className: a,
              children: c,
              debounceTime: d = 300,
              ignoreDimensions: u = s,
              parentSizeStyles: p,
              enableDebounceLeadingCall: h = !0,
              resizeObserverPolyfill: m,
              ...f
            } = e,
            T = (0, r.useRef)(null),
            E = (0, r.useRef)(0),
            [w, g] = (0, r.useState)({ width: 0, height: 0, top: 0, left: 0 }),
            N = (0, r.useMemo)(() => {
              let e = Array.isArray(u) ? u : [u];
              return i(
                (t) => {
                  g((o) =>
                    Object.keys(o)
                      .filter((e) => o[e] !== t[e])
                      .every((t) => e.includes(t))
                      ? o
                      : t
                  );
                },
                d,
                { leading: h }
              );
            }, [d, h, u]);
          return (
            (0, r.useEffect)(() => {
              let e = new (m || window.ResizeObserver)((e) => {
                e.forEach((e) => {
                  var t;
                  let {
                    left: o,
                    top: n,
                    width: r,
                    height: a,
                  } = null != (t = null == e ? void 0 : e.contentRect) ? t : {};
                  E.current = window.requestAnimationFrame(() => {
                    N({ width: r, height: a, top: n, left: o });
                  });
                });
              });
              return (
                T.current && e.observe(T.current),
                () => {
                  window.cancelAnimationFrame(E.current),
                    e.disconnect(),
                    N.cancel();
                }
              );
            }, [N, m]),
            (0, n.jsx)("div", {
              style: { ...l, ...p },
              ref:
                ((o = [t, T]),
                (e) => {
                  o.forEach((t) => {
                    "function" == typeof t
                      ? t(e)
                      : null != t && (t.current = e);
                  });
                }),
              className: a,
              ...f,
              children: c({ ...w, ref: T.current, resize: N }),
            })
          );
        }),
        d = (0, r.forwardRef)((e, t) => {
          let {
              scene: o,
              style: i,
              onSplineMouseDown: s,
              onSplineMouseUp: l,
              onSplineMouseHover: d,
              onSplineKeyDown: u,
              onSplineKeyUp: p,
              onSplineStart: h,
              onSplineLookAt: m,
              onSplineFollow: f,
              onSplineScroll: T,
              onLoad: E,
              renderOnDemand: w = !0,
              wasmPath: g,
              children: N,
              ...b
            } = e,
            _ = (0, r.useRef)(null),
            [v, O] = (0, r.useState)(!0),
            [I, A] = (0, r.useState)();
          if (I) throw I;
          return (
            (0, r.useEffect)(() => {
              let e;
              O(!0);
              let t = [
                { name: "mouseDown", cb: s },
                { name: "mouseUp", cb: l },
                { name: "mouseHover", cb: d },
                { name: "keyDown", cb: u },
                { name: "keyUp", cb: p },
                { name: "start", cb: h },
                { name: "lookAt", cb: m },
                { name: "follow", cb: f },
                { name: "scroll", cb: T },
              ];
              return (
                _.current &&
                  ((e = new a.l(_.current, { renderOnDemand: w, wasmPath: g })),
                  (async function () {
                    for (let n of (await e.load(o), t))
                      n.cb && e.addEventListener(n.name, n.cb);
                    O(!1), null == E || E(e);
                  })().catch((e) => {
                    A(e);
                  })),
                () => {
                  for (let o of t) o.cb && e.removeEventListener(o.name, o.cb);
                  e.dispose();
                }
              );
            }, [o]),
            (0, n.jsx)(c, {
              ref: t,
              parentSizeStyles: { overflow: "hidden", ...i },
              debounceTime: 50,
              ...b,
              children: () =>
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    v && N,
                    (0, n.jsx)("canvas", {
                      ref: _,
                      style: { display: v ? "none" : "block" },
                    }),
                  ],
                }),
            })
          );
        });
    },
    65992: (e, t, o) => {
      "use strict";
      o.d(t, { RoleSection: () => w });
      var n = o(54568),
        r = o(60844),
        a = o(61773),
        i = o(76917),
        s = o(23493),
        l = o(50781),
        c = o(47227),
        d = o(4451),
        u = o(5023),
        p = o(32305),
        h = o(26080),
        m = o(32583),
        f = o(27118);
      let T = [
          {
            icon: d.A.vote,
            text: "Our system enables all $WLFI token owners to participate in governance. From submitting proposals to casting votes, the participation of $WLFI token holders can help shape the direction of the platform.",
            title: "Inclusive and fair governance",
          },
          {
            icon: d.A.users,
            text: "Your involvement drives our success. By engaging in the governance process, you help build a financial platform that empowers everyone in our community.",
            title: "Empowering community involvement",
          },
        ],
        E = [
          {
            dataPw: f.l.LANDING.GOVERNANCE.FORUM_LINK,
            icon: (0, n.jsx)(d.A.messages, {
              className: "tw-my-9 tw-size-12 tw-text-foreground-brand",
            }),
            link: p.C.routes.forum,
            linkText: "Go to forum",
            text: "Your voice matters. Start participating in platform decisions by submitting and reviewing governance proposals.",
            title: "Join the proposal forum",
          },
          {
            dataPw: f.l.LANDING.GOVERNANCE.SNAPSHOT_LINK,
            icon: (0, n.jsx)(a.default, {
              alt: "Snapshot",
              className: "tw-my-9 tw-size-12 tw-text-foreground-brand",
              height: 48,
              src: "/images/common/governance/snapshot.svg",
              width: 41,
            }),
            link: p.C.routes.snapshot,
            linkText: "Vote on Snapshot",
            text: "A simple off-chain voting interface for community members to signal sentiment during the early stages of a proposal's life cycle.",
            title: "Share your opinions on Snapshot",
          },
        ];
      function w() {
        let e = (0, r.Xr)(m.b);
        return (0, n.jsx)(i.w, {
          titleProps: {
            as: "h3",
            children: (0, n.jsx)(n.Fragment, {
              children: "Your role in governance",
            }),
            variant: "gray",
          },
          children: (0, n.jsxs)("div", {
            className:
              "tw-grid tw-max-w-6xl tw-grid-cols-1 tw-gap-4 md:tw-grid-cols-2",
            "data-pw": f.l.LANDING.GOVERNANCE.PLATFORMS_CONTAINER,
            children: [
              T.map((e, t) =>
                (0, n.jsxs)(
                  s.AnimateInView,
                  {
                    className:
                      "tw-rounded-md tw-border tw-border-border tw-bg-background tw-p-6 tw-shadow-input",
                    delay: 0.1 * t,
                    children: [
                      (0, n.jsx)(l.A, { className: "tw-mb-6", icon: e.icon }),
                      (0, n.jsx)("p", {
                        className:
                          "tw-mb-2 tw-text-lg tw-font-medium tw-text-primary",
                        children: e.title,
                      }),
                      (0, n.jsx)("p", {
                        className: "tw-text-tertiary",
                        children: e.text,
                      }),
                    ],
                  },
                  e.title
                )
              ),
              E.map((t, o) =>
                (0, n.jsxs)(
                  s.AnimateInView,
                  {
                    className:
                      "tw-flex tw-flex-col tw-rounded-md tw-border tw-border-border tw-bg-background xl:tw-flex-row",
                    delay: 0.1 * o,
                    children: [
                      (0, n.jsx)("span", {
                        className:
                          "tw-flex tw-min-w-[120px] tw-items-center tw-justify-center tw-rounded-md tw-bg-brand-gradient-radial",
                        children: t.icon,
                      }),
                      (0, n.jsxs)("div", {
                        className: "tw-p-4",
                        children: [
                          (0, n.jsx)("p", {
                            className:
                              "tw-mb-1 tw-text-sm tw-font-medium tw-text-primary",
                            children: t.title,
                          }),
                          (0, n.jsx)("p", {
                            className: "tw-text-xs tw-text-tertiary",
                            children: t.text,
                          }),
                          (0, n.jsx)(c.Button, {
                            asChild: !0,
                            className: "tw-mt-2 tw-size-fit tw-p-0",
                            variant: "link-secondary",
                            children: (0, n.jsx)(u.N, {
                              "data-pw": t.dataPw,
                              href: t.link,
                              onClick: () =>
                                e({
                                  eventName: h.zm.EXTERNAL_LINK,
                                  properties: {
                                    funnel: "governance-platforms",
                                    url: t.link,
                                  },
                                }),
                              target: "_blank",
                              children: t.linkText,
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  t.title
                )
              ),
            ],
          }),
        });
      }
    },
    70095: (e, t, o) => {
      var n = 0 / 0,
        r = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        l = parseInt,
        c = "object" == typeof o.g && o.g && o.g.Object === Object && o.g,
        d = "object" == typeof self && self && self.Object === Object && self,
        u = c || d || Function("return this")(),
        p = Object.prototype.toString,
        h = Math.max,
        m = Math.min,
        f = function () {
          return u.Date.now();
        };
      function T(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function E(e) {
        if ("number" == typeof e) return e;
        if (
          "symbol" == typeof (t = e) ||
          (t && "object" == typeof t && "[object Symbol]" == p.call(t))
        )
          return n;
        if (T(e)) {
          var t,
            o = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = T(o) ? o + "" : o;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(r, "");
        var c = i.test(e);
        return c || s.test(e) ? l(e.slice(2), c ? 2 : 8) : a.test(e) ? n : +e;
      }
      e.exports = function (e, t, o) {
        var n,
          r,
          a,
          i,
          s,
          l,
          c = 0,
          d = !1,
          u = !1,
          p = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function w(t) {
          var o = n,
            a = r;
          return (n = r = void 0), (c = t), (i = e.apply(a, o));
        }
        function g(e) {
          var o = e - l,
            n = e - c;
          return void 0 === l || o >= t || o < 0 || (u && n >= a);
        }
        function N() {
          var e,
            o,
            n,
            r = f();
          if (g(r)) return b(r);
          s = setTimeout(
            N,
            ((e = r - l), (o = r - c), (n = t - e), u ? m(n, a - o) : n)
          );
        }
        function b(e) {
          return ((s = void 0), p && n) ? w(e) : ((n = r = void 0), i);
        }
        function _() {
          var e,
            o = f(),
            a = g(o);
          if (((n = arguments), (r = this), (l = o), a)) {
            if (void 0 === s)
              return (c = e = l), (s = setTimeout(N, t)), d ? w(e) : i;
            if (u) return (s = setTimeout(N, t)), w(l);
          }
          return void 0 === s && (s = setTimeout(N, t)), i;
        }
        return (
          (t = E(t) || 0),
          T(o) &&
            ((d = !!o.leading),
            (a = (u = "maxWait" in o) ? h(E(o.maxWait) || 0, t) : a),
            (p = "trailing" in o ? !!o.trailing : p)),
          (_.cancel = function () {
            void 0 !== s && clearTimeout(s), (c = 0), (n = l = r = s = void 0);
          }),
          (_.flush = function () {
            return void 0 === s ? i : b(f());
          }),
          _
        );
      };
    },
    76928: (e, t, o) => {
      "use strict";
      o.d(t, { HeroSection: () => p });
      var n = o(54568),
        r = o(60844),
        a = o(76917),
        i = o(47227),
        s = o(5023),
        l = o(32305),
        c = o(26080),
        d = o(32583),
        u = o(27118);
      function p() {
        let e = (0, r.Xr)(d.b);
        return (0, n.jsx)(a.w, {
          className: "tw-gap-8 md:tw-gap-8",
          "data-pw": u.l.LANDING.HERO,
          subtitleProps: {
            as: "h2",
            children: (0, n.jsx)(n.Fragment, {
              children:
                "This is the cornerstone of the WLFI platform. Here, $WLFI holders play a key role in helping to shape the future of the protocol.",
            }),
          },
          titleProps: {
            as: "h1",
            children: (0, n.jsx)(n.Fragment, { children: "Governance" }),
            size: "lg",
            variant: "brand",
          },
          children: (0, n.jsxs)("div", {
            className:
              "tw-mt-8 tw-flex tw-w-full tw-flex-col tw-items-center tw-gap-2 sm:tw-flex-row sm:tw-justify-center",
            children: [
              (0, n.jsx)(i.Button, {
                asChild: !0,
                className: "tw-w-full sm:tw-w-fit",
                size: "lg",
                children: (0, n.jsx)(s.N, {
                  "data-pw": u.l.LANDING.GOVERNANCE.FORUM_LINK,
                  href: l.C.routes.forum,
                  onClick: () =>
                    e({
                      eventName: c.zm.EXTERNAL_LINK,
                      properties: {
                        funnel: "governance-hero",
                        url: l.C.routes.forum,
                      },
                    }),
                  target: "_blank",
                  children: "Submit proposal on forum",
                }),
              }),
              (0, n.jsx)(i.Button, {
                asChild: !0,
                className: "tw-w-full sm:tw-w-fit",
                size: "lg",
                children: (0, n.jsx)(s.N, {
                  "data-pw": u.l.LANDING.GOVERNANCE.SNAPSHOT_LINK,
                  href: l.C.routes.snapshot,
                  onClick: () =>
                    e({
                      eventName: c.zm.EXTERNAL_LINK,
                      properties: {
                        funnel: "governance-hero",
                        url: l.C.routes.snapshot,
                      },
                    }),
                  target: "_blank",
                  children: "Vote on Snapshot",
                }),
              }),
            ],
          }),
        });
      }
    },
    80023: (e, t, o) => {
      "use strict";
      o.d(t, { M: () => n });
      let n = (0, o(79924).y$)();
    },
    84833: (e, t, o) => {
      "use strict";
      o.d(t, { default: () => i });
      var n = o(54568),
        r = o(5023),
        a = o(23228);
      function i(e) {
        let { disclaimerId: t = "disclaimer-1", number: o = 1 } = e,
          i = "#".concat(t);
        return (0, n.jsx)(r.N, {
          href: i,
          onClick: (e) => {
            e.preventDefault(), (0, a.U)(i);
          },
          children: (0, n.jsx)("sup", { children: o }),
        });
      }
    },
    86490: (e, t, o) => {
      Promise.resolve().then(o.bind(o, 93976)),
        Promise.resolve().then(o.bind(o, 76928)),
        Promise.resolve().then(o.bind(o, 65992)),
        Promise.resolve().then(o.bind(o, 86541)),
        Promise.resolve().then(o.bind(o, 84833)),
        Promise.resolve().then(o.bind(o, 23493)),
        Promise.resolve().then(o.bind(o, 47227)),
        Promise.resolve().then(o.bind(o, 90264)),
        Promise.resolve().then(o.bind(o, 51166)),
        Promise.resolve().then(o.t.bind(o, 27261, 23)),
        Promise.resolve().then(o.t.bind(o, 73970, 23));
    },
    86541: (e, t, o) => {
      "use strict";
      o.d(t, { StepsSection: () => f });
      var n = o(54568),
        r = o(60844),
        a = o(61773),
        i = o(76917),
        s = o(23493),
        l = o(47227),
        c = o(5023),
        d = o(32305),
        u = o(26080),
        p = o(32583),
        h = o(27118);
      let m = [
        {
          dataPw: h.l.LANDING.GOVERNANCE.FORUM_LINK,
          link: d.C.routes.forum,
          linkText: "Submit proposal on forum",
          text: "Submit proposals that help to shape the mission and vision of WLFI for upgrades, fund allocation of partnerships.",
          title: "Propose",
        },
        {
          dataPw: h.l.LANDING.GOVERNANCE.FORUM_LINK,
          link: d.C.routes.forum,
          linkText: "Review proposal on forum",
          text: "Proposals will enter a review stage where $WLFI owners provide feedback and discuss, ensuring thorough vetting before the voting stage.",
          title: "Review",
        },
        {
          link: d.C.routes.snapshot,
          linkText: "Vote on Snapshot",
          text: "After the review, it's time to vote—your $WLFI tokens give you direct voting power, helping to shape community decisions and WLFI's future.",
          title: "Vote",
        },
      ];
      function f() {
        let e = (0, r.Xr)(p.b);
        return (0, n.jsx)(i.w, {
          titleProps: {
            as: "h3",
            children: (0, n.jsx)(n.Fragment, {
              children: "Three steps, one vision",
            }),
            variant: "gray",
          },
          children: (0, n.jsx)("div", {
            className:
              "tw-grid tw-grid-cols-1 tw-gap-20 md:tw-grid-cols-3 md:tw-gap-6",
            "data-pw": h.l.LANDING.GOVERNANCE.STEPS_CONTAINER,
            children: m.map((t, o) =>
              (0, n.jsxs)(
                s.AnimateInView,
                {
                  className:
                    "tw-flex tw-max-w-sm tw-flex-col tw-items-center lg:tw-px-2 xl:tw-px-4",
                  delay: 0.1 * o,
                  children: [
                    (0, n.jsx)(a.default, {
                      alt: "Number ".concat(o + 1),
                      className: "tw-w-[160px]",
                      height: 180,
                      src: "/images/common/governance/numbers/number-".concat(
                        o + 1,
                        ".svg"
                      ),
                      width: 180,
                    }),
                    (0, n.jsx)("p", {
                      className: "tw-text-center tw-text-xl tw-text-primary",
                      children: t.title,
                    }),
                    (0, n.jsx)("p", {
                      className: "tw-max-w-xs tw-text-center tw-text-tertiary",
                      children: t.text,
                    }),
                    (0, n.jsx)(l.Button, {
                      asChild: !0,
                      className: "tw-w-fit tw-p-0",
                      variant: "link-secondary",
                      children: (0, n.jsx)(c.N, {
                        "data-pw": t.dataPw,
                        href: t.link,
                        onClick: () =>
                          e({
                            eventName: u.zm.EXTERNAL_LINK,
                            properties: {
                              funnel: "governance-steps",
                              url: t.link,
                            },
                          }),
                        target: "_blank",
                        children: t.linkText,
                      }),
                    }),
                  ],
                },
                t.title
              )
            ),
          }),
        });
      }
    },
    91912: (e, t, o) => {
      "use strict";
      o.d(t, {
        If: () => d,
        My: () => l,
        TE: () => c,
        UZ: () => r,
        W6: () => i,
        pU: () => a,
        vH: () => s,
      });
      var n = o(25474);
      let r = {
        BRIDGE_TERMS_ACCEPTED: "bridgeTermsAccepted",
        READ_ONLY_MODE_ADDRESS: "readOnlyModeAddress",
        READ_ONLY_MODE_ENS_NAME: "readOnlyModeEnsName",
        SWAP_TERMS_ACCEPTED: "swapTermsAccepted",
        TESTNET_ENABLED: "testnetEnabled",
        TRACKING_CONSENT: "trackingConsent",
        USER_ACCEPTED_ANALYTICS: "userAcceptedAnalytics",
      };
      (0, n.tG)(r.TRACKING_CONSENT, null, void 0, { getOnInit: !0 });
      let a = (0, n.tG)(r.USER_ACCEPTED_ANALYTICS, null, void 0, {
          getOnInit: !0,
        }),
        i = (0, n.tG)(r.TESTNET_ENABLED, !1, void 0, { getOnInit: !0 }),
        s = (0, n.tG)(r.READ_ONLY_MODE_ADDRESS, void 0, void 0, {
          getOnInit: !0,
        }),
        l = (0, n.tG)(r.READ_ONLY_MODE_ENS_NAME, void 0, void 0, {
          getOnInit: !0,
        }),
        c = (0, n.tG)(r.BRIDGE_TERMS_ACCEPTED, {}, void 0, { getOnInit: !0 }),
        d = (0, n.tG)(r.SWAP_TERMS_ACCEPTED, {}, void 0, { getOnInit: !0 });
    },
    93976: (e, t, o) => {
      "use strict";
      o.d(t, { FaqSection: () => T });
      var n = o(54568),
        r = o(60844),
        a = o(76917),
        i = o(23493),
        s = o(38019),
        l = o(47227),
        c = o(5023),
        d = o(80023),
        u = o(32305),
        p = o(26080),
        h = o(32583),
        m = o(27118);
      let f = [
        {
          items: [
            {
              answer: (0, n.jsxs)(n.Fragment, {
                children: [
                  "The sole purpose of $WLFI (or the “",
                  (0, n.jsx)("span", {
                    className: "tw-text-secondary",
                    children: "token",
                  }),
                  "”) is to participate in governance of the World Liberty Financial Protocol (the “",
                  (0, n.jsx)("span", {
                    className: "tw-text-secondary",
                    children: "WLF Protocol",
                  }),
                  "”), so we hope you will actively participate in proposing, discussing and voting on WLF Protocol governance matters. If you do do not plan to participate, you should not purchase the token. We have created this user-friendly guide to help you become engaged in WLF Protocol governance and help to shape the future of DeFi, but if any questions are not answered below, please reach out to",
                  " ",
                  (0, n.jsx)(l.Button, {
                    asChild: !0,
                    size: "fit",
                    variant: "link-secondary",
                    children: (0, n.jsx)(c.N, {
                      href: "mailto:".concat(u.C.governanceMail),
                      onClick: () =>
                        d.M.set(h.b, {
                          eventName: p.zm.EXTERNAL_LINK,
                          properties: { url: u.C.governanceMail },
                        }),
                      rel: "noopener noreferrer",
                      target: "_blank",
                      children: u.C.governanceMail,
                    }),
                  }),
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)("br", {}),
                  "WLF Protocol governance can be divided into three phases (i) proposal submission, (ii) community review, and (iii) voting. $WLFI holders can make proposals, discuss proposals and ultimately vote on them. Additional details on how to participate are provided below.",
                ],
              }),
              question:
                "Can you provide an overview of how to participate in WLF Protocol governance?",
            },
          ],
          title: "General",
        },
        {
          items: [
            {
              answer: (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)("p", {
                    children: [
                      'Proposals are discussed in the "Forum." The Forum is available at',
                      " ",
                      (0, n.jsx)(l.Button, {
                        asChild: !0,
                        size: "fit",
                        variant: "link-secondary",
                        children: (0, n.jsx)(c.N, {
                          href: u.C.routes.forum,
                          onClick: () =>
                            d.M.set(h.b, {
                              eventName: p.zm.EXTERNAL_LINK,
                              properties: { url: u.C.routes.forum },
                            }),
                          rel: "noopener noreferrer",
                          target: "_blank",
                          children: u.C.routes.forum,
                        }),
                      }),
                      " ",
                      "the (“",
                      (0, n.jsx)("span", {
                        className: "tw-text-secondary",
                        children: "Forum",
                      }),
                      "”). Community members must register for an account prior to participating in the Forum at",
                      " ",
                      (0, n.jsx)(l.Button, {
                        asChild: !0,
                        size: "fit",
                        variant: "link-secondary",
                        children: (0, n.jsx)(c.N, {
                          href: u.C.routes.forum,
                          onClick: () =>
                            d.M.set(h.b, {
                              eventName: p.zm.EXTERNAL_LINK,
                              properties: { url: u.C.routes.forum },
                            }),
                          rel: "noopener noreferrer",
                          target: "_blank",
                          children: u.C.routes.forum,
                        }),
                      }),
                      ".",
                    ],
                  }),
                  (0, n.jsx)("p", {
                    children:
                      'Please note that the Forum is not restricted to $WLFI token-holders. Any person with an account may participate in the Forum. While the Forum is the place to discuss potential WLF Protocol governance initiatives and "temperature check" initiatives prior to voting, no actual token voting occurs on the Forum, and no actions taken on the Forum determine votes, and some discussions on the Forum may be entirely social.',
                  }),
                ],
              }),
              question: "How do we discuss potential proposals?",
            },
            {
              answer: (0, n.jsxs)("p", {
                children: [
                  "Formal proposals are made through Snapshot (",
                  (0, n.jsx)(l.Button, {
                    asChild: !0,
                    size: "fit",
                    variant: "link-secondary",
                    children: (0, n.jsx)(c.N, {
                      href: "https://snapshot.org",
                      onClick: () =>
                        d.M.set(h.b, {
                          eventName: p.zm.EXTERNAL_LINK,
                          properties: { url: "https://snapshot.org" },
                        }),
                      rel: "noopener noreferrer",
                      target: "_blank",
                      children: "https://snapshot.org",
                    }),
                  }),
                  '). Any user who owns and custodies a votable $WLFI token can create a proposal. World Liberty Financial Inc., a Delaware non stock corporation ("WLF" or the "Company") screens proposals prior to voting beginning on Snapshot. The Company reserves the right to disallow any proposal which, if implemented, would constitute or create an unreasonable risk of violation of a legal requirement (including a contractual obligation) or a security risk, in each case as defined in the WLF bylaws. These determinations are made in the discretion of the Company and such determinations are final.',
                ],
              }),
              question: "How do I make a formal proposal for voting?",
            },
            {
              answer: (0, n.jsx)("p", {
                children:
                  "Once a proposal is submitted, it enters the Community Review phase. During this period, all $WLFI owners can review the proposal, provide feedback, and discuss its implementation. There is no required minimum discussion period, but the voting period for a given proposal is typically two weeks, subject to change by the Company in certain circumstances.",
              }),
              question: "What happens after a proposal is submitted?",
            },
            {
              answer: (0, n.jsx)("p", {
                children:
                  "The Company screens proposals and may disallow any proposal it believes is reasonably likely to be spam in nature. Eventually, through the governance process, additional screening measures may be created that allow for users to directly make proposals.",
              }),
              question: "How do you prevent spam proposals?",
            },
          ],
          title: "Proposals",
        },
        {
          items: [
            {
              answer: (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("p", {
                    children:
                      'Once a proposal is approved for voting, a "snapshot" of token holders will occur when the proposal is approved. Token holders who own tokens are eligible to vote. For the most part, proposals will be single choice, up or down, votes, but in certain instances (for example, if a proposal may have more than two possible outcomes) ranked choice voting may be appropriate.',
                  }),
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)("p", {
                    children:
                      "In order to participate in Snapshot voting you must both (a) own $WLFI tokens and (b) custody those tokens in a fashion which allows you to connect a wallet or similar application to Snapshot. Snapshot voting allows for off-chain voting (to avoid gas fees by voters) with the results stored and verifiable on-chain.",
                  }),
                ],
              }),
              question: "How does voting work?",
            },
            {
              answer: (0, n.jsx)("p", {
                children:
                  "Proposals will generally be announced on Forum. Formal proposals may be made through Snapshot and can be viewed there. You must register with Forum to receive information on proposals for voting.",
              }),
              question: "How do I know if a proposal is open for voting?",
            },
            {
              answer: (0, n.jsx)("p", {
                children:
                  "The voting period for any proposal will generally be two weeks, subject to change by the Company in certain circumstances.",
              }),
              question: "How long are votes open?",
            },
            {
              answer: (0, n.jsx)("p", {
                children:
                  "Yes. In addition to the limitation of voting 5,000,000,000 tokens per token holder (i.e. 5% of the total supply and described in greater detail below), any tokens which are treasury tokens (i.e., owned by WLF), will not be voted.",
              }),
              question: "Are there any limits on how many tokens I can vote?",
            },
            {
              answer: (0, n.jsx)("p", {
                children:
                  "$WLFI are non-transferable and accordingly may not be transferred or resold. $WLFI holders approved a proposal in July 2025 to make the $WLFI token transferable, and WLFI is expected to unlock tradability for a portion of $WLFI tokens sold to early purchasers subject to an unlock schedule. The remainder of the $WLFI tokens sold to early supporters is intended to be subject to a second vote by the community to determine the unlock and release schedule. Unlock schedules for initial founders, advisors, and others are expected to remain non-transferable, and in any case, subject to a longer unlock schedule. WLFI retains discretion to determine the timing and eligibility requirements regarding unlocking $WLFI.",
              }),
              question: "Can I transfer my $WLFI?",
            },
            {
              answer: (0, n.jsx)("p", {
                children:
                  "If you do not participate in discussion, proposals and voting, you will not be using the functionality of the $WLFI token, and miss out on the opportunity to help shape the future of the WLF Protocol and engaged with the $WLFI community.",
              }),
              question: "What happens if I do not vote?",
            },
            {
              answer: (0, n.jsx)("p", {
                children:
                  "A passing proposal requires an initial minimum quorum of 1,000,000,000 $WLFI tokens voted, and a majority of the $WLFI tokens voted to be passed. These thresholds may be modified over time through the governance process.",
              }),
              question: "What is the approval threshold for voting?",
            },
            {
              answer: (0, n.jsx)("p", {
                children:
                  "WLF is intended to reflect distributed governance, so has decided to limit the voting power of a single token holder. Wallets with more than 5% of the total token supply, i.e. 5,000,000.000 or more $WLFI tokens will only be able to vote a maximum of 5,000,000,000 tokens. In addition, if WLF is aware of any person that holds more than 5,000,000,000 $WLFI tokens across multiple wallets or addresses, WLF will take steps to ensure that person is limited to voting no more than 5,000,000,000 tokens, regardless of the number of addresses or wallets that person uses to control their total $WLFI tokens. Early contributors and service providers with more than 5% have already notified WLF of their ownership positions and affiliate status.",
              }),
              question:
                "What if a token holder, holds more than 5,000,000,000 $WLFI tokens (5% of the total supply of $WLFI tokens)?",
            },
            {
              answer: (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("p", {
                    children:
                      "Total token supply is the total supply of tokens ever minted. It is fixed at 100 billion tokens.",
                  }),
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)("p", {
                    children:
                      "Outstanding token supply is the total token supply minus tokens held in treasury by WLF. This includes tokens sold to purchasers in token sales and grants made to advisors, service providers, directors, officers and employees. Votable token supply is the outstanding token supply after being reduced by the number of tokens known to be held by persons who, together with affiliates own more than 5,000,000,000 $WLFI tokens.",
                  }),
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)("p", {
                    children:
                      "For example, if a holder owns 7,000,000,000 $WLFI tokens, such person is only permitted to vote 5,000,000,000 $WLFI tokens, and the total votable token supply is reduced by 2,000,000,000 $WLFI tokens. Because the votable token supply is variable, and will ultimately be determined by the number of $WLFI tokens sold or issued, WLF reserves the right to adjust the programmatic limitation on token voting to 5% of the actual voting token supply from time to time.",
                  }),
                ],
              }),
              question:
                "What is the difference between total token supply, outstanding token supply and votable token supply?",
            },
            {
              answer: (0, n.jsx)("p", {
                children:
                  "You should contact your third party custodian for their policies and procedures for reflecting your votes.",
              }),
              question:
                "If I hold my $WLFI through a third party custodian, how can I vote?",
            },
          ],
          title: "Voting",
        },
        {
          items: [
            {
              answer: (0, n.jsx)("p", {
                children:
                  "Once a snapshot is approved, if such approval (or disapproval) requires on chain Platform action, the relevant Multi-Sig shall implement the action. This implementation will occur within a reasonable period of time from the passage of the proposals. Certain upgrade proposals may require extensive audits and other security verifications prior to being safely implemented within the Platform, and the time frame of implementation of a passed snapshot shall be within the sole reasonable discretion of the relevant Multi-Sig.",
              }),
              question: "How are approved proposals implemented?",
            },
            {
              answer: (0, n.jsx)("p", {
                children:
                  "The Company reserves the right to disallow any proposed or approved proposal which, if implemented, would constitute or create an unreasonable risk of a legal violation (including any contractual obligation), or create a security risk, each as defined in the WLF bylaws. These determinations are made in the discretion of the Company and such determinations are final.",
              }),
              question:
                "Under what circumstances will a vote approved through WLF Protocol governance not be implemented?",
            },
          ],
          title: "Proposal implementation",
        },
        {
          items: [
            {
              answer: (0, n.jsx)("p", {
                children:
                  "There are no plans to upgrade the WLF Protocol governance platform. WLF Protocol governance platform may, through the procedures outlined herein, upgrade its voting procedures to include automated implementation of certain proposals or types of proposals, but you should assume no future upgrades will occur. Additionally, all of the parameters listed herein are simply the initial parameters of the platform, and subject to change through the voting process, as long as such changes would not cause WLF to violate any laws or contractual obligations.",
              }),
              question:
                "Will the WLF Protocol governance platform be upgraded?",
            },
            {
              answer: (0, n.jsx)("p", {
                children:
                  'The WLF Protocol or any associated protocol could experience a "Material Adverse Event," meaning any event which prevents the WLF Protocol, or any associated protocol, from functioning in its normal, intended fashion for a prolonged period, or a "Security Risk," meaning any event which stops the WLF Protocol or endangers user\'s safe use of the WLF Protocol. During Material Adverse Events or Security Risks, WLF Protocol governance control over the WLF Protocol will be completely vested in the Multi-sigs until it is possible to resume normal WLF Protocol governance operations. In addition, a "Security Multi-sig" responsible for WLF Protocol governance, WLF Protocol updates, Material Adverse Events and Security Risks may be approved by token holders and WLF, Security Risks may be approved by token holders and WLF, which Security Multi-sig may have the power to respond to such matters.',
              }),
              question:
                "Can WLF Protocol governance be suspended if there is a major security risk or other threat?",
            },
            {
              answer: (0, n.jsx)("p", {
                children:
                  'WLF is a Delaware non stock corporation. WLF administers the WLF Protocol that allows token holder voting for certain WLF Protocol governance decision making. WLF Protocol is not a DAO or an organization of any kind. The WLF Protocol is administratively controlled by one or more Multi-sigs. The number of "signers" and the person(s) who are signers are determined by the Company. While WLF Protocol governance is subject to changes initiated by proposals approved by voting token holders according to the procedures set forth herein, the Company is not subject to any such proposals or votes. $WLFI token holders do not owe any duties to each other or to the Company. The WLF bylaws indicate that the WLF Protocol will implement certain WLF Protocol governance proposals if approved by the $WLFI token holder community.',
              }),
              question:
                'Is World Liberty Financial a Decentralized Autonomous Organization (a "DAO"?',
            },
          ],
          title: "Other",
        },
      ];
      function T() {
        let e = (0, r.Xr)(h.b);
        return (0, n.jsx)(a.w, {
          titleProps: {
            as: "h3",
            children: (0, n.jsx)(n.Fragment, { children: "Governance FAQs" }),
            variant: "gray",
          },
          children: (0, n.jsxs)("div", {
            className: "tw-flex tw-max-w-3xl tw-flex-col tw-gap-8 md:tw-gap-10",
            children: [
              f.map((t, o) =>
                (0, n.jsxs)(
                  "div",
                  {
                    className:
                      "tw-flex tw-w-full tw-flex-col tw-items-start tw-justify-center tw-gap-4",
                    children: [
                      (0, n.jsx)("span", {
                        className:
                          "tw-text-lg tw-font-medium tw-text-secondary",
                        children: t.title,
                      }),
                      (0, n.jsx)(s.nD, {
                        collapsible: !0,
                        type: "single",
                        children: t.items.map((r, a) => {
                          let l = a + 1;
                          return (0, n.jsx)(
                            i.AnimateInView,
                            {
                              delay: 0.02 * l,
                              children: (0, n.jsxs)(
                                s.As,
                                {
                                  value: "item-".concat(a),
                                  children: [
                                    (0, n.jsx)(s.$m, {
                                      "data-pw": ""
                                        .concat(m.l.LANDING.CTA.FAQ_BUTTON, "-")
                                        .concat(o, "-")
                                        .concat(a),
                                      onClick: () =>
                                        e({
                                          eventName: p.zm.QUESTION,
                                          properties: {
                                            funnel: "governance-faqs",
                                            question: r.question,
                                          },
                                        }),
                                      children: r.question,
                                    }),
                                    (0, n.jsx)(s.ub, {
                                      "data-pw": ""
                                        .concat(m.l.LANDING.CTA.FAQ_BUTTON, "-")
                                        .concat(o, "-")
                                        .concat(a, "-answer"),
                                      children: r.answer,
                                    }),
                                  ],
                                },
                                "".concat(t.title, "-").concat(a)
                              ),
                            },
                            "".concat(t.title, "-").concat(a)
                          );
                        }),
                      }),
                    ],
                  },
                  "faq-".concat(t.title)
                )
              ),
              " ",
            ],
          }),
        });
      }
    },
  },
  (e) => {
    e.O(
      0,
      [
        9386, 3387, 2635, 7261, 8745, 3970, 160, 887, 4154, 747, 1504, 6553,
        5461, 1675, 5649, 5377, 6888, 587, 1902, 7358,
      ],
      () => e((e.s = 86490))
    ),
      (_N_E = e.O());
  },
]);
