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
      (e._sentryDebugIds[t] = "1f1db192-1831-4c43-a5c6-4a15b1e7768e"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-1f1db192-1831-4c43-a5c6-4a15b1e7768e"));
  })();
} catch (e) {}
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5579],
  {
    5023: (e, t, a) => {
      a.d(t, { N: () => s });
      var n = a(54568),
        i = a(27261),
        o = a.n(i),
        r = a(29768);
      let s = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)(o(), {
          className: (0, r.cn)(
            "tw-outline-none focus-visible:tw-shadow-button-focus-simple",
            t
          ),
          ...a,
        });
      };
    },
    8960: (e, t, a) => {
      a.d(t, {
        AK: () => w,
        XJ: () => T,
        NB: () => p,
        wY: () => m,
        bL: () => g,
        p9: () => _,
      });
      var n = a(40160),
        i = a(79924),
        o = a(58369),
        r = a(11985),
        s = a(91912);
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
      let c = (0, i.eU)((e) => {
          let t = e(s.pU),
            a = l();
          return "true" === t && !a;
        }),
        d = (0, i.eU)(!0),
        u = (0, i.eU)(!1),
        E = (0, i.eU)(null, (e, t) => {
          let a = "true" === e(s.pU),
            n = e(u),
            i = r.h.NEXT_PUBLIC_MIXPANEL_ID,
            c = r.h.NEXT_PUBLIC_GOOGLE_ID;
          if (!l()) {
            if (
              (n ||
                (o.A.init(i, {
                  debug: r.h.NEXT_PUBLIC_STAGE !== r.L.production,
                  ip: !1,
                  opt_out_tracking_by_default: !0,
                  record_sessions_percent: 1,
                  verbose: r.h.NEXT_PUBLIC_STAGE !== r.L.production,
                }),
                t(u, !0)),
              a)
            ) {
              var d, E;
              o.A.opt_in_tracking(),
                window.gtag("consent", "update", {
                  analytics_storage: "granted",
                }),
                null == (d = (E = window).gtag) ||
                  d.call(E, "config", c, {
                    page_path: window.location.pathname,
                  });
              return;
            }
            o.A.opt_out_tracking(),
              c &&
                window.gtag("consent", "update", {
                  analytics_storage: "denied",
                });
          }
        }),
        T = (0, i.eU)(null, (e, t) => {
          let a = e(s.pU),
            n = e(u);
          null === a || n || t(E);
        }),
        w = (0, i.eU)(null, (e, t) => {
          if (l()) {
            t(s.pU, "false"), t(d, !1), t(E);
            return;
          }
          t(s.pU, "true"), t(d, !1), t(E);
        }),
        p = (0, i.eU)(null, (e, t) => {
          t(s.pU, "false"), t(d, !1), t(E);
        }),
        m = (0, i.eU)(null, (e, t, a) => {
          t(s.pU, null), t(d, a);
        }),
        _ = (0, i.eU)(null, (e, t, a) => {
          let { url: i, properties: s } = a,
            l = e(c),
            d = e(u),
            E = r.h.NEXT_PUBLIC_GOOGLE_ID;
          if (!l || !d) return;
          let T = {
            ...s,
            referrer: document.referrer,
            tenant: "common",
            title: document.title,
            url: i,
          };
          try {
            E &&
              window.gtag &&
              window.gtag("config", E, { page_path: i, ...T }),
              o.A.track("Page View", T);
          } catch (e) {
            console.error("Error tracking pageview:", e), (0, n.Cp)(e);
          }
        }),
        g = (0, i.eU)(null, (e, t, a) => {
          let { eventName: i, properties: s } = a,
            l = e(c),
            d = e(u);
          if (!l || !d) return;
          let E = r.h.NEXT_PUBLIC_GOOGLE_ID;
          try {
            d && o.A.track(i, s),
              E && window.gtag && window.gtag("event", i, { ...s, send_to: E });
          } catch (e) {
            console.error("Error tracking event:", e), (0, n.Cp)(e);
          }
        });
    },
    13432: (e, t, a) => {
      a.d(t, {
        DG: () => i,
        P: () => g,
        Pv: () => c,
        Um: () => f,
        p4: () => S,
        w4: () => D,
      });
      var n = a(68266),
        i = {};
      (0, n.V)(i, { APPROVAL_GAS_LIMIT: () => o, USDC_ADDRESS: () => r });
      var o = "45000",
        r = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
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
        UNISWAP_V3_ROUTER_ADDRESS: () => _,
        USD1_ADDRESS: () => m,
        USD1_LEGACY_ADDRESS: () => p,
        WLFI_ADDRESS: () => d,
        WLFI_DECIMALS: () => T,
        WLFI_REGISTRY_ADDRESS: () => u,
        WLFI_SYMBOL: () => E,
        WLFI_VESTER_ADDRESS: () => w,
      });
      var d = "0xda5e1988097297dcdc1f90d4dfe7909e847cbef6",
        u = "0x4f61a99e42e21ea3c3eaf9b1b30fb80a7900d3ce",
        E = "WLFI",
        T = 18,
        w = "0x74b4f6a2e579d730aacb9dd23cfbbaeb95029583",
        p = "0x8d0d000ee44948fc98c9b98a4fa4921476f08b0d",
        m = "0x111111d2bf19e43c34263401e0cad979ed1cdb61",
        _ = "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
        g = {};
      (0, n.V)(g, { POLLING_INTERVAL: () => N });
      var N = 6e4,
        S = {};
      (0, n.V)(S, { statement: () => O });
      var O = "Sign in with Ethereum to World Liberty Financial",
        f = {};
      (0, n.V)(f, {
        BNB_ADDRESS: () => b,
        ETHEREUM_ADDRESS: () => A,
        PLUME_ADDRESS: () => C,
        SYMBOL: () => h,
        TRON_ADDRESS: () => I,
      });
      var A = p,
        b = p,
        C = m,
        I = "TPFqcBAaaUMCSVRCqPaQ9QnzKhmuoLR6Rc",
        h = "USD1",
        D = "static.worldlibertyfinancial.com";
    },
    23228: (e, t, a) => {
      a.d(t, { U: () => n });
      let n = function (e) {
        var t;
        let a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "header",
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
          i = document.querySelector(e);
        if (!i) return;
        let o = document.querySelector(a),
          r = null != (t = null == o ? void 0 : o.clientHeight) ? t : 0,
          s = i.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ behavior: "smooth", top: s - (r + n) });
      };
    },
    23493: (e, t, a) => {
      a.r(t), a.d(t, { AnimateInView: () => l });
      var n = a(54568),
        i = a(11376),
        o = a(80747),
        r = a(7620),
        s = a(29768);
      let l = (e) => {
        let {
            children: t,
            as: a = "div",
            type: l = "up",
            delay: c = 0,
            options: d = { amount: 0.1, once: !0 },
            className: u,
            ...E
          } = e,
          T = r.useRef(null),
          w = (0, i.W)(T, d),
          p = ((e) => {
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
          m = ["scale(".concat(0.95, ")")];
        void 0 !== p.y && m.unshift("translateY(".concat(p.y, "px)")),
          void 0 !== p.x && m.unshift("translateX(".concat(p.x, "px)"));
        let _ = m.join(" "),
          g = o.P[a];
        return (0, n.jsx)(g, {
          animate: {
            opacity: +!!w,
            transform: w ? "scale(".concat(1, ")") : _,
          },
          className: (0, s.cn)("", u),
          initial: { opacity: 0, transform: _ },
          ref: (e) => {
            T.current = e;
          },
          transition: { delay: c, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          ...E,
          children: t,
        });
      };
    },
    26080: (e, t, a) => {
      a.d(t, {
        Az: () => l,
        Dc: () => r,
        H9: () => u,
        J$: () => s,
        Z$: () => d,
        qt: () => o,
        w7: () => i,
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
        i = {
          GET_USD1: "Get USD1",
          MOBILE_MENU: "Mobile menu",
          TRADE_WLFI: "Trade $WLFI",
          UNLOCK_WLFI: "Unlock $WLFI",
        },
        o = {
          CHANGE_LOGO: "Change logo",
          COPY_HEX: "Copy HEX",
          COPY_SVG: "Copy SVG",
          DOWNLOAD_ASSETS: "Download assets",
        },
        r = {
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
    27118: (e, t, a) => {
      a.d(t, { l: () => n });
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
    32583: (e, t, a) => {
      a.d(t, { b: () => r, p: () => o });
      var n = a(79924),
        i = a(8960);
      let o = (0, n.eU)(null, (e, t, a) => {
          t(i.p9, { properties: { tenant: "landing" }, url: a });
        }),
        r = (0, n.eU)(null, (e, t, a) => {
          let { eventName: n, properties: o } = a,
            r = { ...o, tenant: "landing" };
          t(i.bL, { eventName: n, properties: r });
        });
    },
    37570: (e, t, a) => {
      a.d(t, { MediaAnchor: () => c, Q: () => d });
      var n = a(60844),
        i = a(7620),
        o = a(80023),
        r = a(79924);
      let s = (0, r.eU)({
          isDesktop: !1,
          isDesktopLarge: !1,
          isMobile: !1,
          isMobileSmall: !1,
          isTablet: !1,
        }),
        l = (0, r.eU)(
          (e) => e(s),
          (e, t, a) => {
            t(s, a);
          }
        ),
        c = () => {
          let [e, t] = i.useState(!1),
            a = (0, i.useCallback)(() => {
              o.M.set(l, {
                isDesktop: window.matchMedia("(min-width: 1024px)").matches,
                isDesktopLarge: window.matchMedia("(min-width: 1280px)")
                  .matches,
                isMobile: window.matchMedia("(max-width: 640px)").matches,
                isMobileSmall: window.matchMedia("(max-width: 480px)").matches,
                isTablet: window.matchMedia("(max-width: 768px)").matches,
              });
            }, []);
          return (
            i.useEffect(() => {
              t(!0);
            }, []),
            i.useEffect(
              () =>
                e
                  ? (a(),
                    window.addEventListener("resize", a),
                    () => window.removeEventListener("resize", a))
                  : () => {},
              [a, e]
            ),
            null
          );
        },
        d = () => (0, n.md)(l);
    },
    50781: (e, t, a) => {
      a.d(t, { A: () => d });
      var n = a(54568),
        i = a(615),
        o = a(7620),
        r = a(4451),
        s = a(29768);
      let l = (0, i.F)(
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
        c = o.forwardRef((e, t) => {
          let {
            className: a,
            variant: i,
            size: o,
            iconClassName: c,
            icon: d = r.A.info,
            children: u,
            ...E
          } = e;
          return (0, n.jsx)("div", {
            "aria-hidden": "true",
            className: (0, s.cn)(l({ size: o, variant: i }), a),
            ref: t,
            ...E,
            children:
              u ||
              (0, n.jsx)(d, {
                className: (0, s.cn)(
                  { default: "tw-size-8", sm: "tw-size-6" }[o || "default"],
                  c
                ),
              }),
          });
        });
      c.displayName = "DecorativeIcon";
      let d = c;
    },
    64148: (e, t, a) => {
      a.d(t, { E: () => c, e: () => l });
      var n = a(54568),
        i = a(615),
        o = a(7620),
        r = a(77804),
        s = a(29768);
      let l = (0, i.F)(
          "tw-inline-flex tw-items-center tw-justify-center tw-border tw-text-sm tw-font-medium tw-transition-colors",
          {
            compoundVariants: [
              {
                className: "tw-text-utility-brand-500",
                size: "icon",
                variant: "secondary",
              },
              {
                className: "tw-text-utility-error-500",
                size: "icon",
                variant: "destructive",
              },
              {
                className: "tw-text-utility-warning-500",
                size: "icon",
                variant: "warning",
              },
              {
                className: "tw-text-utility-success-500",
                size: "icon",
                variant: "success",
              },
              {
                className: "tw-text-utility-brand-500",
                size: "icon-sm",
                variant: "secondary",
              },
              {
                className: "tw-text-utility-error-500",
                size: "icon-sm",
                variant: "destructive",
              },
              {
                className: "tw-text-utility-warning-500",
                size: "icon-sm",
                variant: "warning",
              },
              {
                className: "tw-text-utility-success-500",
                size: "icon-sm",
                variant: "success",
              },
              {
                className: "tw-text-utility-brand-500",
                size: "icon-lg",
                variant: "secondary",
              },
              {
                className: "tw-text-utility-error-500",
                size: "icon-lg",
                variant: "destructive",
              },
              {
                className: "tw-text-utility-warning-500",
                size: "icon-lg",
                variant: "warning",
              },
              {
                className: "tw-text-utility-success-500",
                size: "icon-lg",
                variant: "success",
              },
              { className: "tw-rounded-sm", radius: "sm", size: "default" },
              { className: "tw-rounded-sm", radius: "sm", size: "sm" },
              { className: "tw-rounded-md", radius: "md", size: "lg" },
              { className: "tw-rounded-sm", radius: "sm", size: "icon" },
              { className: "tw-rounded-sm", radius: "sm", size: "icon-sm" },
              { className: "tw-rounded-md", radius: "md", size: "icon-lg" },
            ],
            defaultVariants: {
              radius: "full",
              shadow: "default",
              size: "default",
              variant: "default",
              withCircle: !1,
            },
            variants: {
              radius: {
                full: "tw-rounded-full",
                md: "tw-rounded-md",
                sm: "tw-rounded-sm",
              },
              shadow: {
                default: "tw-shadow-none",
                glow: "tw-text-tertiary tw-shadow-badge",
              },
              size: {
                default: "tw-h-6 tw-px-2.5 tw-py-1",
                icon: "tw-size-6 tw-p-1.5 tw-text-utility-gray-500",
                "icon-lg": "tw-size-7 tw-p-2 tw-text-utility-gray-500",
                "icon-sm": "tw-size-5 tw-p-1 tw-text-utility-gray-500",
                lg: "tw-h-7 tw-px-3 tw-py-2",
                sm: "tw-h-5 tw-px-2 tw-py-px !tw-text-xs",
              },
              variant: {
                default:
                  "tw-border-utility-gray-200 tw-bg-utility-gray-50 tw-text-utility-gray-700",
                destructive:
                  "tw-border-utility-error-200 tw-bg-utility-error-50 tw-text-utility-error-700",
                secondary:
                  "tw-border-utility-brand-200 tw-bg-utility-brand-50 tw-text-utility-brand-700",
                success:
                  "tw-border-utility-success-200 tw-bg-utility-success-50 tw-text-utility-success-700",
                warning:
                  "tw-border-utility-warning-200 tw-bg-utility-warning-50 tw-text-utility-warning-700",
              },
              withCircle: { false: "", true: "tw-flex tw-items-center" },
            },
          }
        ),
        c = o.forwardRef((e, t) => {
          let {
              className: a,
              variant: i = "default",
              size: o = "default",
              withCircle: c = !1,
              radius: d = "full",
              shadow: u = "default",
              icon: E,
              iconPosition: T = "left",
              symbol: w,
              children: p,
              ...m
            } = e,
            _ = {
              default: "tw-text-utility-gray-500",
              destructive: "tw-text-utility-error-500",
              secondary: "tw-text-utility-brand-500",
              success: "tw-text-utility-success-500",
              warning: "tw-text-utility-warning-500",
            },
            g =
              void 0 === E
                ? ""
                : "default" === o
                ? "left" === T
                  ? "tw-pl-2"
                  : "tw-pr-2"
                : "sm" === o
                ? "left" === T
                  ? "tw-pl-1.5"
                  : "tw-pr-1.5"
                : "lg" === o
                ? "left" === T
                  ? "tw-pl-2.5"
                  : "tw-pr-2.5"
                : "",
            N =
              void 0 === w
                ? ""
                : "default" === o
                ? "left" === T
                  ? "tw-pl-1"
                  : "tw-pr-1"
                : "sm" === o
                ? "left" === T
                  ? "tw-pl-0.5"
                  : "tw-pr-0.5"
                : "lg" === o
                ? "left" === T
                  ? "tw-pl-1.5"
                  : "tw-pr-1.5"
                : "";
          return (0, n.jsxs)("div", {
            className: (0, s.cn)(
              l({ radius: d, shadow: u, size: o, variant: i, withCircle: c }),
              a,
              E ? "tw-flex tw-items-center" : "",
              c ? ("sm" === o ? "tw-gap-1" : "tw-gap-2") : "",
              E ? "tw-gap-1" : "",
              E && g,
              w ? ("sm" === o ? "tw-gap-1" : "tw-gap-1.5") : "",
              w && N
            ),
            ref: t,
            ...m,
            children: [
              c &&
                (0, n.jsx)("span", {
                  className: (0, s.cn)(
                    "tw-inline-block tw-size-2 tw-rounded-full",
                    {
                      default: "tw-bg-utility-gray-500",
                      destructive: "tw-bg-utility-error-500",
                      secondary: "tw-bg-utility-brand-500",
                      success: "tw-bg-utility-success-500",
                      warning: "tw-bg-utility-warning-500",
                    }[null != i ? i : "default"]
                  ),
                }),
              E &&
                "left" === T &&
                (0, n.jsx)(E, {
                  className: (0, s.cn)(
                    "tw-size-3",
                    _[null != i ? i : "default"]
                  ),
                }),
              w && "left" === T && (0, n.jsx)(r.xz, { size: 16, symbol: w }),
              p,
              E &&
                "right" === T &&
                (0, n.jsx)(E, {
                  className: (0, s.cn)(
                    "tw-size-3",
                    _[null != i ? i : "default"]
                  ),
                }),
              w && "right" === T && (0, n.jsx)(r.xz, { size: 16, symbol: w }),
            ],
          });
        });
      c.displayName = "Badge";
    },
    69027: (e, t, a) => {
      a.d(t, {
        BC: () => s,
        Lp: () => r,
        OM: () => l,
        T7: () => u,
        sT: () => d,
      });
      var n = a(54568),
        i = a(13432),
        o = a(4451);
      let r = [
          { label: "DeFi", value: "DeFi" },
          { label: "Wallet", value: "Wallet" },
          { label: "Exchange", value: "Exchange" },
          { label: "DEX", value: "DEX" },
        ],
        s = [
          { label: "Send", value: "Send" },
          { label: "Spend", value: "Spend" },
          { label: "Trade", value: "Trade" },
          { label: "Save", value: "Save" },
          { label: "Lend & Borrow", value: "Lend & Borrow" },
          { label: "Earn", value: "Earn" },
        ],
        l = {
          Send: (0, n.jsx)(o.A.send, {
            className: "tw-size-3 tw-text-utility-gray-600",
          }),
          Spend: (0, n.jsx)(o.A.creditCard, {
            className: "tw-size-3 tw-text-utility-gray-600",
          }),
          Trade: (0, n.jsx)(o.A.handshake, {
            className: "tw-size-3 tw-text-utility-gray-600",
          }),
          Save: (0, n.jsx)(o.A.piggyBank, {
            className: "tw-size-3 tw-text-utility-gray-600",
          }),
          "Lend & Borrow": (0, n.jsx)(o.A.handCoins, {
            className: "tw-size-3 tw-text-utility-gray-600",
          }),
          Earn: (0, n.jsx)(o.A.coins, {
            className: "tw-size-3 tw-text-utility-gray-600",
          }),
        },
        c = [
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Trade USD1 with leverage on a fast, decentralized perps platform.",
            }),
            favorite: !1,
            name: "Aster",
            slug: "aster",
            type: ["DeFi"],
            url: "https://www.asterdex.com/",
            useCase: ["Trade"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Binance is the largest exchange in the world offering USD1 on multiple trading pairs.",
            }),
            favorite: !0,
            name: "Binance",
            position: 1,
            slug: "binance",
            type: ["Exchange"],
            url: "https://www.binance.com/crypto/buy/USD/USD1",
            useCase: ["Trade", "Save"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Trade USD1 on a global exchange with deep liquidity and fast execution.",
            }),
            favorite: !0,
            name: "ByBit",
            position: 2,
            slug: "bybit",
            type: ["Exchange"],
            url: "https://www.bybit.com/en/price/usd1-wlfi/",
            useCase: ["Trade"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Store and manage USD1 securely while trading seamlessly through the Binance ecosystem.",
            }),
            favorite: !1,
            name: "Binance Wallet",
            slug: "binance",
            type: ["Wallet"],
            url: "https://www.binance.com/en/binancewallet",
            useCase: ["Send", "Save", "Spend"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Trade USD1 on spot and futures markets with advanced tools and deep liquidity.",
            }),
            favorite: !0,
            name: "Bitget",
            slug: "bitget",
            type: ["Exchange"],
            url: "https://www.bitget.com/spot/USD1USDT",
            useCase: ["Trade"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children: "Easily store and manage USD1 in a multi-chain wallet.",
            }),
            favorite: !1,
            name: "Bitget Wallet",
            slug: "bitget",
            type: ["Wallet"],
            url: "https://web3.bitget.com",
            useCase: ["Send", "Save", "Spend"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Trade USD1 against major crypto pairs on a global exchange with deep liquidity.",
            }),
            favorite: !1,
            name: "HTX",
            slug: "htx",
            type: ["Exchange"],
            url: "https://www.htx.com/trade/usd1_usdt",
            useCase: ["Trade"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Use USD1 as margin for leveraged trades directly from your wallet.",
            }),
            favorite: !1,
            name: "KuCoin",
            slug: "kucoin",
            type: ["Exchange"],
            url: "https://www.kucoin.com/trade/USD1-USDT",
            useCase: ["Trade"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Deposit USD1 and borrow new assets with it as collateral.",
            }),
            favorite: !1,
            name: "ListaDAO",
            slug: "lista-dao",
            type: ["DeFi"],
            url: "https://lista.org/lending/vault/0xfa27f172e0b6ebcef9c51abf817e2cb142fbe627#vault",
            useCase: ["Lend & Borrow"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Lend or borrow USD1 with flexible rates on a permissionless DeFi lending protocol.",
            }),
            favorite: !1,
            name: "Euler",
            slug: "euler",
            type: ["DeFi"],
            url: "https://app.euler.finance/vault/0xC41f2Ba7102e9F9F2d603eb951F955aE205ed272?network=bnbsmartchain",
            useCase: ["Lend & Borrow"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Buy and sell USD1 with fast execution and access to new token listings.",
            }),
            favorite: !1,
            name: "MEXC",
            slug: "mexc",
            type: ["Exchange"],
            url: "https://www.mexc.com/exchange/USD1_USDT",
            useCase: ["Trade", "Save"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Send and store USD1 across chains with access to DeFi apps in secure, non-custodial wallet.",
            }),
            favorite: !1,
            name: "OKX Wallet",
            slug: "okx",
            type: ["Wallet"],
            url: "https://web3.okx.com/token/bsc/".concat(
              i.Pv.USD1_LEGACY_ADDRESS
            ),
            useCase: ["Send", "Save", "Spend"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Trade USD1 directly from your wallet with decentralized liquidity.",
            }),
            favorite: !0,
            name: "PancakeSwap",
            slug: "pancake-swap",
            type: ["DeFi", "DEX"],
            url: "https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=".concat(
              i.Pv.USD1_LEGACY_ADDRESS,
              "&exactAmount=&exactField=INPUT"
            ),
            useCase: ["Trade"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Instantly trade USD1 with other tokens directly from your wallet.",
            }),
            favorite: !0,
            name: "Uniswap",
            slug: "uniswap",
            type: ["DEX"],
            url: "https://app.uniswap.org/explore/tokens/ethereum/".concat(
              i.Pv.USD1_LEGACY_ADDRESS
            ),
            useCase: ["Trade"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Supply or borrow USD1 in a decentralized money market on BNB Chain.",
            }),
            favorite: !1,
            name: "Venus Protocol",
            slug: "venus-protocol",
            type: ["DeFi"],
            url: "https://app.venus.io/#/core-pool/market/0x0C1DA220D301155b87318B90692Da8dc43B67340?chainId=56",
            useCase: ["Lend & Borrow"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Manage and grow your USD1 holdings with simplified crypto tools.",
            }),
            favorite: !1,
            name: "Wello",
            slug: "wello",
            type: ["DeFi"],
            url: "https://www.wello.tech/",
            useCase: ["Send", "Save", "Spend"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Trade USD1 on Gate's global exchange with access to diverse markets and early token listings.",
            }),
            favorite: !0,
            name: "Gate",
            slug: "gate",
            type: ["Exchange"],
            url: "https://www.gate.com/trade/USD1_USDT",
            useCase: ["Trade"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Restake your USD1 to provide economic security to applications and earn Kernel points as rewards.",
            }),
            favorite: !1,
            name: "KernelDAO",
            slug: "kerneldao",
            type: ["DeFi"],
            url: "https://kerneldao.com/restake/USD1",
            useCase: ["Earn"],
          },
          {
            description: (0, n.jsx)(n.Fragment, {
              children:
                "Lend and borrow USD1 while managing your DeFi assets in one place.",
            }),
            favorite: !1,
            name: "Dolomite",
            slug: "dolomite",
            type: ["DeFi"],
            url: "https://app.dolomite.io/stats/token/1/".concat(
              i.Pv.USD1_LEGACY_ADDRESS
            ),
            useCase: ["Lend & Borrow"],
          },
        ].sort((e, t) => e.name.localeCompare(t.name)),
        d = c
          .filter((e) => e.favorite)
          .sort((e, t) =>
            void 0 !== e.position && void 0 !== t.position
              ? e.position - t.position
              : void 0 !== e.position && void 0 === t.position
              ? -1
              : void 0 === e.position && void 0 !== t.position
              ? 1
              : e.name.localeCompare(t.name)
          ),
        u = (e) => {
          let {
              searchQuery: t,
              categoryFilterQuery: a,
              useCaseFilterQuery: n,
              showFavoritesOnly: i = !1,
            } = e,
            o = c;
          if ((i && (o = o.filter((e) => e.favorite)), t.trim().length > 0)) {
            let e = t.toLowerCase().trim();
            o = o.filter(
              (t) =>
                t.name.toLowerCase().includes(e) ||
                t.type.some((t) => t.toLowerCase().includes(e)) ||
                t.useCase.some((t) => t.toLowerCase().includes(e))
            );
          }
          return (
            a.length > 0 &&
              (o = o.filter((e) => e.type.some((e) => a.includes(e)))),
            n.length > 0 &&
              (o = o.filter((e) => e.useCase.some((e) => n.includes(e)))),
            o
          );
        };
    },
    77804: (e, t, a) => {
      a.d(t, { Cn: () => u, lt: () => l, xz: () => d });
      var n = a(54568),
        i = a(61773),
        o = a(7620),
        r = a(29768);
      let s = o.forwardRef((e, t) => {
        let { symbol: a, size: i = 50 } = e;
        return (0, n.jsxs)("svg", {
          height: i,
          id: "Group_30952",
          ref: t,
          viewBox: "0 0 ".concat(256, " ").concat(256),
          width: i,
          children: [
            (0, n.jsxs)("title", { children: [a, " token icon"] }),
            (0, n.jsxs)("defs", {
              id: "defs10",
              children: [
                (0, n.jsxs)("linearGradient", {
                  gradientUnits: "objectBoundingBox",
                  id: "linear-gradient",
                  x1: ".843",
                  x2: ".206",
                  y1: ".135",
                  y2: ".886",
                  children: [
                    (0, n.jsx)("stop", {
                      id: "stop2",
                      offset: "0",
                      stopColor: "#b6509e",
                    }),
                    (0, n.jsx)("stop", {
                      id: "stop4",
                      offset: "1",
                      stopColor: "#2ebac6",
                    }),
                  ],
                }),
                (0, n.jsx)("linearGradient", {
                  id: "linear-gradient-2",
                  x1: ".907",
                  x2: ".163",
                  y1: ".227",
                  y2: ".853",
                }),
              ],
            }),
            (0, n.jsxs)("g", {
              id: "Group_29109",
              children: [
                (0, n.jsx)("path", {
                  d: "M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256zm0-242.287a115.145 115.145 0 0 0-23.033 2.322A113.657 113.657 0 0 0 64.1 33.232a114.622 114.622 0 0 0-41.4 50.283 113.7 113.7 0 0 0-6.659 21.452 115.4 115.4 0 0 0 0 46.065 113.66 113.66 0 0 0 17.2 40.866 114.627 114.627 0 0 0 50.282 41.407 113.75 113.75 0 0 0 21.453 6.658 115.381 115.381 0 0 0 46.065 0 113.609 113.609 0 0 0 40.866-17.2 114.622 114.622 0 0 0 41.393-50.278 113.741 113.741 0 0 0 6.659-21.453 115.4 115.4 0 0 0 0-46.065 113.662 113.662 0 0 0-17.2-40.865A114.619 114.619 0 0 0 172.485 22.7a113.74 113.74 0 0 0-21.453-6.659A115.145 115.145 0 0 0 128 13.714z",
                  fill: "url(#linear-gradient)",
                  id: "Subtraction_108",
                }),
                a &&
                  (0, n.jsx)("image", {
                    height: "206",
                    href: "/images/common/tokens/".concat(
                      a.toLowerCase(),
                      ".svg"
                    ),
                    width: "206",
                    x: "25",
                    y: "25",
                  }),
              ],
            }),
          ],
        });
      });
      function l(e) {
        let { symbol: t, onImageGenerated: a, aToken: i } = e,
          r = o.useRef(null),
          l = o.useRef(null),
          [c, d] = o.useState(!0);
        return (
          o.useEffect(() => {
            if (c) return;
            let e = r.current;
            if (!e || !(e instanceof HTMLObjectElement)) return;
            let t = e.contentDocument;
            if (i) {
              var n;
              let e = null == t ? void 0 : t.childNodes[0];
              if (!e) return;
              if (!(e instanceof Element))
                return void console.error("Expected an Element but got:", e);
              let i = e.getAttribute("width"),
                o = e.getAttribute("height"),
                r = e.getAttribute("viewBox");
              e.setAttribute("x", "25"),
                e.setAttribute("width", "206"),
                e.setAttribute("y", "25"),
                e.setAttribute("height", "206"),
                r || e.setAttribute("viewBox", "0 0 ".concat(i, " ").concat(o)),
                null == (n = l.current) || n.appendChild(e);
              let s = new XMLSerializer().serializeToString(l.current);
              a(
                "data:image/svg+xml;base64,".concat(
                  window.btoa(unescape(encodeURIComponent(s)))
                )
              );
            } else {
              let e = new XMLSerializer().serializeToString(t);
              a(
                "data:image/svg+xml;base64,".concat(
                  window.btoa(unescape(encodeURIComponent(e)))
                )
              );
            }
          }, [c, i, a]),
          (0, n.jsxs)("div", {
            style: {
              height: 0,
              overflow: "hidden",
              visibility: "hidden",
              width: 0,
            },
            children: [
              (0, n.jsx)("object", {
                "aria-label": "token-icon",
                data: "/images/common/tokens/".concat(t.toLowerCase(), ".svg"),
                id: "svg",
                onLoad: () => d(!1),
                ref: r,
                style: { opacity: 1 },
                title: "token-icon",
              }),
              (0, n.jsx)("span", {
                className: "tw-sr-only",
                children: "token icon for adding in wallet",
              }),
              i && (0, n.jsx)(s, { ref: l }),
            ],
          })
        );
      }
      function c(e) {
        let {
            symbol: t = "default",
            aToken: a,
            wrapperClassName: l,
            className: c,
            size: d,
          } = e,
          [u, E] = o.useState(t.toLowerCase());
        return (
          o.useEffect(() => {
            E(t.toLowerCase());
          }, [t]),
          (0, n.jsx)("span", {
            className: (0, r.cn)("tw-relative tw-flex tw-rounded-full", l),
            children: a
              ? (0, n.jsx)(s, { size: d, symbol: u })
              : (0, n.jsx)(i.default, {
                  alt: "".concat(t, " icon"),
                  className: (0, r.cn)("tw-rounded-full", c),
                  height: null != d ? d : 40,
                  onError: () => E("default"),
                  src: "/images/common/tokens/".concat(u, ".svg"),
                  width: null != d ? d : 40,
                }),
          })
        );
      }
      function d(e) {
        let { symbol: t = "default", ...a } = e;
        if (t.split("_").length > 1)
          throw Error("TokenIcon multi token not supported");
        return (0, n.jsx)(c, { symbol: t, ...a });
      }
      function u(e) {
        let {
            symbol: t,
            logoURI: a,
            size: s,
            wrapperClassName: l,
            className: c,
          } = e,
          [d, u] = o.useState(t.toLowerCase());
        return (0, n.jsx)("span", {
          className: (0, r.cn)("tw-relative tw-flex tw-rounded-full", l),
          children: (0, n.jsx)(i.default, {
            alt: "".concat(t, " icon"),
            className: (0, r.cn)("tw-rounded-full", c),
            height: null != s ? s : 40,
            onError: () => u("default"),
            src: "default" !== d && a ? a : "/images/common/tokens/default.svg",
            width: null != s ? s : 40,
          }),
        });
      }
      s.displayName = "ATokenIcon";
    },
    80023: (e, t, a) => {
      a.d(t, { M: () => n });
      let n = (0, a(79924).y$)();
    },
    84833: (e, t, a) => {
      a.d(t, { default: () => r });
      var n = a(54568),
        i = a(5023),
        o = a(23228);
      function r(e) {
        let { disclaimerId: t = "disclaimer-1", number: a = 1 } = e,
          r = "#".concat(t);
        return (0, n.jsx)(i.N, {
          href: r,
          onClick: (e) => {
            e.preventDefault(), (0, o.U)(r);
          },
          children: (0, n.jsx)("sup", { children: a }),
        });
      }
    },
    91912: (e, t, a) => {
      a.d(t, {
        If: () => d,
        My: () => l,
        TE: () => c,
        UZ: () => i,
        W6: () => r,
        pU: () => o,
        vH: () => s,
      });
      var n = a(25474);
      let i = {
        BRIDGE_TERMS_ACCEPTED: "bridgeTermsAccepted",
        READ_ONLY_MODE_ADDRESS: "readOnlyModeAddress",
        READ_ONLY_MODE_ENS_NAME: "readOnlyModeEnsName",
        SWAP_TERMS_ACCEPTED: "swapTermsAccepted",
        TESTNET_ENABLED: "testnetEnabled",
        TRACKING_CONSENT: "trackingConsent",
        USER_ACCEPTED_ANALYTICS: "userAcceptedAnalytics",
      };
      (0, n.tG)(i.TRACKING_CONSENT, null, void 0, { getOnInit: !0 });
      let o = (0, n.tG)(i.USER_ACCEPTED_ANALYTICS, null, void 0, {
          getOnInit: !0,
        }),
        r = (0, n.tG)(i.TESTNET_ENABLED, !1, void 0, { getOnInit: !0 }),
        s = (0, n.tG)(i.READ_ONLY_MODE_ADDRESS, void 0, void 0, {
          getOnInit: !0,
        }),
        l = (0, n.tG)(i.READ_ONLY_MODE_ENS_NAME, void 0, void 0, {
          getOnInit: !0,
        }),
        c = (0, n.tG)(i.BRIDGE_TERMS_ACCEPTED, {}, void 0, { getOnInit: !0 }),
        d = (0, n.tG)(i.SWAP_TERMS_ACCEPTED, {}, void 0, { getOnInit: !0 });
    },
  },
]);
