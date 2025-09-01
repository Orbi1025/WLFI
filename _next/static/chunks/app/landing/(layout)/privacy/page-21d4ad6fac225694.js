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
      (e._sentryDebugIds[t] = "1edb2162-57e8-44cf-a782-d848b2c63622"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-1edb2162-57e8-44cf-a782-d848b2c63622"));
  })();
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7229],
  {
    8960: (e, t, o) => {
      "use strict";
      o.d(t, {
        AK: () => w,
        XJ: () => u,
        NB: () => g,
        wY: () => E,
        bL: () => _,
        p9: () => h,
      });
      var r = o(40160),
        a = o(79924),
        n = o(58369),
        s = o(11985),
        i = o(91912);
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
      let c = (0, a.eU)((e) => {
          let t = e(i.pU),
            o = l();
          return "true" === t && !o;
        }),
        d = (0, a.eU)(!0),
        b = (0, a.eU)(!1),
        p = (0, a.eU)(null, (e, t) => {
          let o = "true" === e(i.pU),
            r = e(b),
            a = s.h.NEXT_PUBLIC_MIXPANEL_ID,
            c = s.h.NEXT_PUBLIC_GOOGLE_ID;
          if (!l()) {
            if (
              (r ||
                (n.A.init(a, {
                  debug: s.h.NEXT_PUBLIC_STAGE !== s.L.production,
                  ip: !1,
                  opt_out_tracking_by_default: !0,
                  record_sessions_percent: 1,
                  verbose: s.h.NEXT_PUBLIC_STAGE !== s.L.production,
                }),
                t(b, !0)),
              o)
            ) {
              var d, p;
              n.A.opt_in_tracking(),
                window.gtag("consent", "update", {
                  analytics_storage: "granted",
                }),
                null == (d = (p = window).gtag) ||
                  d.call(p, "config", c, {
                    page_path: window.location.pathname,
                  });
              return;
            }
            n.A.opt_out_tracking(),
              c &&
                window.gtag("consent", "update", {
                  analytics_storage: "denied",
                });
          }
        }),
        u = (0, a.eU)(null, (e, t) => {
          let o = e(i.pU),
            r = e(b);
          null === o || r || t(p);
        }),
        w = (0, a.eU)(null, (e, t) => {
          if (l()) {
            t(i.pU, "false"), t(d, !1), t(p);
            return;
          }
          t(i.pU, "true"), t(d, !1), t(p);
        }),
        g = (0, a.eU)(null, (e, t) => {
          t(i.pU, "false"), t(d, !1), t(p);
        }),
        E = (0, a.eU)(null, (e, t, o) => {
          t(i.pU, null), t(d, o);
        }),
        h = (0, a.eU)(null, (e, t, o) => {
          let { url: a, properties: i } = o,
            l = e(c),
            d = e(b),
            p = s.h.NEXT_PUBLIC_GOOGLE_ID;
          if (!l || !d) return;
          let u = {
            ...i,
            referrer: document.referrer,
            tenant: "common",
            title: document.title,
            url: a,
          };
          try {
            p &&
              window.gtag &&
              window.gtag("config", p, { page_path: a, ...u }),
              n.A.track("Page View", u);
          } catch (e) {
            console.error("Error tracking pageview:", e), (0, r.Cp)(e);
          }
        }),
        _ = (0, a.eU)(null, (e, t, o) => {
          let { eventName: a, properties: i } = o,
            l = e(c),
            d = e(b);
          if (!l || !d) return;
          let p = s.h.NEXT_PUBLIC_GOOGLE_ID;
          try {
            d && n.A.track(a, i),
              p && window.gtag && window.gtag("event", a, { ...i, send_to: p });
          } catch (e) {
            console.error("Error tracking event:", e), (0, r.Cp)(e);
          }
        });
    },
    10042: (e, t, o) => {
      "use strict";
      o.d(t, { l: () => r });
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
    11985: (e, t, o) => {
      "use strict";
      o.d(t, { L: () => a.Ld, h: () => l });
      var r = o(34983),
        a = o(50631),
        n = o(79536),
        s = o(1201),
        i = o(40459);
      let l = (0, r.w)({
        client: {
          NEXT_PUBLIC_1: n.Yj().optional(),
          NEXT_PUBLIC_2: n.Yj().url(),
          NEXT_PUBLIC_BASE_URL: n.Yj().url(),
          NEXT_PUBLIC_FORK_BASE_CHAIN_ID: s.number().optional(),
          NEXT_PUBLIC_FORK_CHAIN_ID: s.number().optional(),
          NEXT_PUBLIC_FORK_URL_RPC: n.Yj().url().optional(),
          NEXT_PUBLIC_FORK_URL_WS_RPC: n.Yj().url().optional(),
          NEXT_PUBLIC_GOOGLE_ID: n.Yj().min(1),
          NEXT_PUBLIC_MIXPANEL_ID: n.Yj().min(1),
          NEXT_PUBLIC_ONE_RPC_API_KEY: n.Yj().min(1),
          NEXT_PUBLIC_RECAPTCHA_KEY: n.Yj().min(1),
          NEXT_PUBLIC_SENTRY_DSN: n.Yj().url(),
          NEXT_PUBLIC_SENTRY_RELEASE: n.Yj().min(1),
          NEXT_PUBLIC_STAGE: n.fc(a.Ld),
          NEXT_PUBLIC_WALLET_CONNECT_ID: n.Yj().min(1),
        },
        emptyStringAsUndefined: !0,
        runtimeEnv: {
          NEXT_PUBLIC_1: "",
          NEXT_PUBLIC_2: "https://api.worldlibertyfinancial.com",
          NEXT_PUBLIC_BASE_URL: "https://worldlibertyfinancial.com",
          NEXT_PUBLIC_FORK_BASE_CHAIN_ID: i.env.NEXT_PUBLIC_FORK_BASE_CHAIN_ID,
          NEXT_PUBLIC_FORK_CHAIN_ID: i.env.NEXT_PUBLIC_FORK_CHAIN_ID,
          NEXT_PUBLIC_FORK_URL_RPC: i.env.NEXT_PUBLIC_FORK_URL_RPC,
          NEXT_PUBLIC_FORK_URL_WS_RPC: i.env.NEXT_PUBLIC_FORK_URL_WS_RPC,
          NEXT_PUBLIC_GOOGLE_ID: "G-V896NR4SBE",
          NEXT_PUBLIC_MIXPANEL_ID: "4587b997e5e53333e6c25c98cc3bd92c",
          NEXT_PUBLIC_ONE_RPC_API_KEY: "WYdgRKODxMQamrD3tutRnHZFpLBJYzEC",
          NEXT_PUBLIC_RECAPTCHA_KEY: "6LeaR1QrAAAAAANX643alGVMc8swIKVXDdrBU2mS",
          NEXT_PUBLIC_SENTRY_DSN:
            "https://70e4344b998e009065747f74daa983a8@o4507968571244544.ingest.us.sentry.io/4509004068225024",
          NEXT_PUBLIC_SENTRY_RELEASE: "3.21.11",
          NEXT_PUBLIC_STAGE: "production",
          NEXT_PUBLIC_WALLET_CONNECT_ID: "93c599ad32313c57e60b1fa4334257d7",
        },
        skipValidation: !!i.env.SKIP_ENV_VALIDATION,
      });
    },
    18875: (e, t, o) => {
      "use strict";
      o.d(t, { default: () => c });
      var r = o(54568),
        a = o(60844),
        n = o(47227),
        s = o(8960),
        i = o(26080),
        l = o(10042);
      function c() {
        let e = (0, a.Xr)(s.wY),
          t = (0, a.Xr)(s.bL);
        return (0, r.jsx)(n.Button, {
          className: "tw-text-xs",
          "data-pw": l.l.ANALYTICS.MANAGE_ANALYTICS,
          onClick: () => {
            e(!0), t({ eventName: i.zm.MANAGE_ANALYTICS });
          },
          size: "fit",
          variant: "link-tertiary",
          children: "Manage analytics",
        });
      }
    },
    22569: (e, t, o) => {
      Promise.resolve().then(o.bind(o, 18875)),
        Promise.resolve().then(o.t.bind(o, 27261, 23)),
        Promise.resolve().then(o.t.bind(o, 73970, 23));
    },
    26080: (e, t, o) => {
      "use strict";
      o.d(t, {
        Az: () => l,
        Dc: () => s,
        H9: () => b,
        J$: () => i,
        Z$: () => d,
        qt: () => n,
        w7: () => a,
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
        a = {
          GET_USD1: "Get USD1",
          MOBILE_MENU: "Mobile menu",
          TRADE_WLFI: "Trade $WLFI",
          UNLOCK_WLFI: "Unlock $WLFI",
        },
        n = {
          CHANGE_LOGO: "Change logo",
          COPY_HEX: "Copy HEX",
          COPY_SVG: "Copy SVG",
          DOWNLOAD_ASSETS: "Download assets",
        },
        s = {
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
        b = {
          ADD_TO_WALLET: "Add token to wallet",
          COPY_TOKEN_ADDRESS: "Copy token address",
          SEE_AGREEMENT: "See agreement",
        };
    },
    29768: (e, t, o) => {
      "use strict";
      o.d(t, { cn: () => n });
      var r = o(32987);
      let a = (0, o(60607).zu)({ prefix: "tw-" });
      function n() {
        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++)
          t[o] = arguments[o];
        return a((0, r.A)(t));
      }
    },
    47227: (e, t, o) => {
      "use strict";
      o.d(t, { Button: () => l });
      var r = o(54568),
        a = o(79649),
        n = o(615),
        s = o(29768);
      let i = (0, n.F)(
          "tw-inline-flex tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-full tw-border tw-border-transparent tw-text-sm tw-font-semibold tw-outline-none tw-transition-colors disabled:tw-pointer-events-none",
          {
            defaultVariants: { size: "default", variant: "default" },
            variants: {
              size: {
                default: "tw-h-10 tw-px-3.5 tw-py-2.5",
                fit: "tw-h-fit tw-p-0",
                icon: "tw-size-10 sm:tw-size-8 md:tw-size-9 lg:tw-size-11",
                "icon-lg": "tw-size-11 tw-p-3",
                "icon-md": "tw-size-9 tw-p-2",
                "icon-sm": "tw-size-8 tw-p-1.5",
                lg: "tw-h-11 tw-px-4 tw-py-3 tw-text-base",
                md: "tw-h-9 tw-px-3 tw-py-2",
                sm: "tw-h-8 tw-px-3 tw-py-1.5",
              },
              variant: {
                close:
                  "tw-flex tw-items-center tw-justify-center tw-rounded-full tw-bg-transparent tw-text-foreground-quinary hover:tw-bg-background-hover focus-visible:tw-shadow-button-focus-simple",
                default:
                  "tw-border tw-border-border-brand tw-bg-background-button tw-bg-gradient-to-b tw-from-white/30 tw-to-white/0 tw-text-black tw-shadow-button hover:tw-border-border-button-hover hover:tw-bg-background-button-hover focus-visible:tw-shadow-button-focus-simple disabled:tw-border-border-disabled-subtle disabled:tw-bg-background-disabled disabled:tw-from-white/20 disabled:tw-text-foreground-disabled",
                destructive:
                  "tw-border tw-border-error-button-border tw-bg-error-button-background tw-bg-gradient-to-b tw-from-white/30 tw-to-white/0 tw-text-foreground-white tw-shadow-button-error hover:tw-border-error-button-border-hover hover:tw-bg-error-button-background-hover focus-visible:tw-shadow-button-focus-simple disabled:tw-border-border-disabled-subtle disabled:tw-bg-background-disabled disabled:tw-from-white/20 disabled:tw-text-foreground-disabled",
                "destructive-link":
                  "tw-bg-transparent tw-text-error-button-ghost-foreground hover:tw-text-error-button-ghost-foreground-hover focus-visible:tw-shadow-button-focus-simple disabled:tw-text-foreground-disabled",
                "destructive-secondary":
                  "tw-border tw-border-error-button-border-secondary tw-bg-error-button-background-secondary tw-text-error-button-foreground-secondary tw-shadow-button-error-secondary hover:tw-border-error-button-border-secondary-hover hover:tw-bg-error-button-background-secondary-hover hover:tw-text-error-button-foreground-secondary-hover focus-visible:tw-shadow-button-focus-simple disabled:tw-border-border-disabled-subtle disabled:tw-bg-background disabled:tw-text-foreground-disabled disabled:tw-shadow-none",
                "destructive-tertiary":
                  "tw-bg-transparent tw-text-error-button-ghost-foreground hover:tw-bg-error-button-ghost-background-hover hover:tw-text-error-button-ghost-foreground-hover focus-visible:tw-shadow-button-focus-simple disabled:tw-text-foreground-disabled",
                ghost:
                  "tw-bg-transparent tw-text-foreground-button-ghost hover:tw-bg-background-button-ghost-hover hover:tw-text-foreground-button-ghost-hover focus-visible:tw-shadow-button-focus-simple disabled:tw-text-foreground-disabled",
                "ghost-secondary":
                  "tw-bg-transparent tw-text-foreground-button-ghost-secondary hover:tw-bg-background-button-ghost-secondary-hover hover:tw-text-foreground-button-ghost-secondary-hover focus-visible:tw-shadow-button-focus-simple disabled:tw-text-foreground-disabled",
                input:
                  "tw-border tw-border-border tw-bg-background tw-px-3 tw-py-2 tw-text-primary tw-shadow-input hover:tw-bg-background-hover focus-visible:tw-shadow-button-focus-simple disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
                link: "tw-bg-transparent tw-text-foreground-button-ghost hover:tw-text-foreground-button-ghost-hover focus-visible:tw-shadow-button-focus-simple disabled:tw-text-foreground-disabled",
                "link-secondary":
                  "tw-bg-transparent tw-text-foreground-button-ghost-secondary hover:tw-text-foreground-button-ghost-hover focus-visible:tw-shadow-button-focus-simple disabled:tw-text-foreground-disabled",
                "link-tertiary":
                  "tw-bg-transparent tw-font-normal tw-text-foreground-button-ghost-tertiary hover:tw-text-foreground-button-ghost-hover focus-visible:tw-shadow-button-focus-simple disabled:tw-text-foreground-disabled",
                secondary:
                  "tw-border tw-border-border-button-secondary tw-bg-background-button-secondary tw-text-foreground-button-secondary tw-shadow-button-secondary hover:tw-border-border-button-secondary-hover hover:tw-bg-background-button-secondary-hover hover:tw-text-foreground-button-secondary-hover focus-visible:tw-shadow-button-focus-simple disabled:tw-border-border-disabled-subtle disabled:tw-bg-background-disabled disabled:tw-text-foreground-disabled disabled:tw-shadow-none",
              },
            },
          }
        ),
        l = (e) => {
          let {
              className: t,
              spanClassName: o,
              variant: n,
              size: l,
              asChild: c = !1,
              disabled: d,
              ...b
            } = e,
            p = c ? a.DX : "button";
          return (0, r.jsx)(p, {
            className: (0, s.cn)(
              i({ size: "close" === n ? "icon" : l, variant: n }),
              d && "tw-cursor-not-allowed",
              t
            ),
            disabled: d,
            ...b,
          });
        };
      l.displayName = "Button";
    },
    50631: (e, t, o) => {
      "use strict";
      o.d(t, { Ld: () => A, PK: () => m, i8: () => _ }), o(68266);
      var r = o(51452),
        a = o(34252),
        n = o(29528),
        s = o(33782),
        i = o(32179),
        l = o(95634),
        c = o(3233),
        d = o(68267),
        b = o(77364),
        p = o(33533),
        u = o(78158),
        w = o(75673),
        g = o(89601),
        E = o(90384),
        h = o(9720),
        _ = (e, t) => ({
          [a.G.id]: {
            baseAssetDecimals: 18,
            baseAssetSymbol: "ETH",
            chainlinkPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
            explorerLink: "https://sepolia.etherscan.io",
            isTestnet: !0,
            name: "Ethereum Sepolia",
            networkLogoPath: "".concat(e, "/ethereum.svg"),
            publicJsonRPCUrl: [
              "https://eth-sepolia.public.blastapi.io",
              "https://sepolia.gateway.tenderly.co",
            ],
            wagmiChain: a.G,
            wrappedBaseAssetSymbol: "WETH",
          },
          [n.C.id]: {
            baseAssetDecimals: 18,
            baseAssetSymbol: "AVAX",
            bridge: {
              icon: "/images/bridge/avalanche.svg",
              name: "Avalanche Bridge",
              url: "https://bridge.avax.network/",
            },
            chainlinkPriceFeed: "0x5498BB86BC934c8D34FDA08E81D444153d0D06aD",
            explorerLink: "https://cchain.explorer.avax-test.network",
            isTestnet: !0,
            name: "Avalanche Fuji",
            networkLogoPath: "".concat(e, "/avalanche.svg"),
            publicJsonRPCUrl: [
              "https://api.avax-test.network/ext/bc/C/rpc",
              "https://rpc.ankr.com/avalanche_fuji",
              "https://ava-testnet.public.blastapi.io/ext/bc/C/rpc",
            ],
            publicJsonRPCWSUrl: "wss://api.avax-test.network/ext/bc/C/rpc",
            wagmiChain: n.C,
            wrappedBaseAssetSymbol: "WAVAX",
          },
          [s.Y.id]: {
            baseAssetDecimals: 18,
            baseAssetSymbol: "ETH",
            chainlinkPriceFeed: "0xd30e2101a97dcbAeBCBC04F14C3f624E67A35165",
            explorerLink: "https://sepolia.arbiscan.io",
            isTestnet: !0,
            name: "Arbitrum Sepolia",
            networkLogoPath: "".concat(e, "/arbitrum.svg"),
            publicJsonRPCUrl: [
              "https://sepolia-rollup.arbitrum.io/rpc",
              "https://public.stackup.sh/api/v1/node/arbitrum-sepolia",
            ],
            publicJsonRPCWSUrl: "https://sepolia-rollup.arbitrum.io/rpc",
            wagmiChain: s.Y,
            wrappedBaseAssetSymbol: "WETH",
          },
          [i.Z.id]: {
            baseAssetDecimals: 18,
            baseAssetSymbol: "ETH",
            chainlinkPriceFeed: "0x4aDC67696bA383F43DD60A9e78F2C97Fbbfc7cb1",
            explorerLink: "https://sepolia.basescan.org",
            isTestnet: !0,
            name: "Base Sepolia",
            networkLogoPath: "".concat(e, "/base.svg"),
            privateJsonRPCUrl:
              "https://enterprise.onerpc.com/base_sepolia?apikey=".concat(t),
            publicJsonRPCUrl: [
              "https://base-sepolia.blockpi.network/v1/rpc/public",
              "https://sepolia.base.org",
              "https://base-sepolia.gateway.tenderly.co",
            ],
            publicJsonRPCWSUrl: "wss://base-sepolia-rpc.publicnode.com",
            wagmiChain: i.Z,
            wrappedBaseAssetSymbol: "WETH",
          },
          [l.i.id]: {
            baseAssetDecimals: 18,
            baseAssetSymbol: "ETH",
            chainlinkPriceFeed: "0x61Ec26aA57019C486797A7906777BE16E5088A97",
            explorerLink: "https://sepolia-optimistic.etherscan.io",
            isTestnet: !0,
            name: "Optimism Sepolia",
            networkLogoPath: "".concat(e, "/optimism.svg"),
            publicJsonRPCUrl: ["https://sepolia.optimism.io"],
            wagmiChain: l.i,
            wrappedBaseAssetSymbol: "WETH",
          },
        }),
        m = (e, t) => ({
          [c.r.id]: {
            baseAssetDecimals: 18,
            baseAssetSymbol: "ETH",
            chainlinkPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
            explorerLink: "https://etherscan.io",
            name: "Ethereum",
            networkLogoPath: "".concat(e, "/ethereum.svg"),
            privateJsonRPCUrl:
              "https://enterprise.onerpc.com/eth?apikey=".concat(t),
            publicJsonRPCUrl: [
              "https://rpc.flashbots.net",
              "https://eth.merkle.io",
              "https://eth-mainnet.public.blastapi.io",
            ],
            publicJsonRPCWSUrl: "wss://eth-mainnet.alchemyapi.io/v2/demo",
            wagmiChain: c.r,
            wrappedBaseAssetSymbol: "WETH",
          },
          [d.n.id]: {
            baseAssetDecimals: 18,
            baseAssetSymbol: "POL",
            bridge: {
              icon: "".concat(e, "/polygon.svg"),
              name: "Polygon PoS Bridge",
              url: "https://wallet.polygon.technology/polygon/bridge",
            },
            chainlinkPriceFeed: "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0",
            displayName: "Polygon",
            explorerLink: "https://polygonscan.com",
            name: "Polygon POS",
            networkLogoPath: "".concat(e, "/polygon.svg"),
            privateJsonRPCUrl:
              "https://enterprise.onerpc.com/polygon?apikey=".concat(t),
            publicJsonRPCUrl: [
              "https://polygon-rpc.com",
              "https://polygon-mainnet.public.blastapi.io",
              "https://rpc-mainnet.matic.quiknode.pro",
            ],
            publicJsonRPCWSUrl: "wss://polygon-rpc.com",
            wagmiChain: d.n,
            wrappedBaseAssetSymbol: "WPOL",
          },
          [b.m.id]: {
            baseAssetDecimals: 18,
            baseAssetSymbol: "AVAX",
            bridge: {
              icon: "".concat(e, "/avalanche.svg"),
              name: "Avalanche Bridge",
              url: "https://bridge.avax.network/",
            },
            chainlinkPriceFeed: "0x0A77230d17318075983913bC2145DB16C7366156",
            explorerLink: "https://cchain.explorer.avax.network",
            name: "Avalanche",
            networkLogoPath: "".concat(e, "/avalanche.svg"),
            privateJsonRPCUrl:
              "https://enterprise.onerpc.com/avalanche?apikey=".concat(t),
            publicJsonRPCUrl: [
              "https://api.avax.network/ext/bc/C/rpc",
              "https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc",
              "https://rpc.ankr.com/avalanche",
            ],
            publicJsonRPCWSUrl: "wss://api.avax.network/ext/bc/C/rpc",
            wagmiChain: b.m,
            wrappedBaseAssetSymbol: "WAVAX",
          },
          [p.D.id]: {
            baseAssetDecimals: 18,
            baseAssetSymbol: "ETH",
            bridge: {
              icon: "/icons/bridge/arbitrum.svg",
              name: "Arbitrum Bridge",
              url: "https://bridge.arbitrum.io",
            },
            chainlinkPriceFeed: "0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612",
            explorerLink: "https://arbiscan.io",
            name: "Arbitrum",
            networkLogoPath: "".concat(e, "/arbitrum.svg"),
            privateJsonRPCUrl:
              "https://enterprise.onerpc.com/arbitrum?apikey=".concat(t),
            publicJsonRPCUrl: [
              "https://arb1.arbitrum.io/rpc",
              "https://rpc.ankr.com/arbitrum",
              "https://1rpc.io/arb",
            ],
            publicJsonRPCWSUrl: "wss://arb1.arbitrum.io/rpc",
            wagmiChain: p.D,
            wrappedBaseAssetSymbol: "WETH",
          },
          [u.E.id]: {
            baseAssetDecimals: 18,
            baseAssetSymbol: "ETH",
            bridge: {
              icon: "".concat(e, "/base.svg"),
              name: "Base Bridge",
              url: "https://bridge.base.org/",
            },
            chainlinkPriceFeed: "0x71041dddad3595F9CEd3DcCFBe3D1F4b0a16Bb70",
            explorerLink: "https://basescan.org",
            name: "Base",
            networkLogoPath: "".concat(e, "/base.svg"),
            privateJsonRPCUrl:
              "https://enterprise.onerpc.com/base?apikey=".concat(t),
            publicJsonRPCUrl: [
              "https://mainnet.base.org",
              "https://1rpc.io/base",
              "https://base.publicnode.com",
              "https://base-mainnet.public.blastapi.io",
            ],
            wagmiChain: u.E,
            wrappedBaseAssetSymbol: "WETH",
          },
          [w.R.id]: {
            baseAssetDecimals: 18,
            baseAssetSymbol: "ETH",
            bridge: {
              icon: "".concat(e, "/optimism.svg"),
              name: "Optimism Bridge",
              url: "https://app.optimism.io/bridge",
            },
            chainlinkPriceFeed: "0x13e3Ee699D1909E989722E753853AE30b17e08c5",
            explorerLink: "https://optimistic.etherscan.io",
            name: "Optimism",
            networkLogoPath: "".concat(e, "/optimism.svg"),
            privateJsonRPCUrl:
              "https://enterprise.onerpc.com/optimism?apikey=".concat(t),
            publicJsonRPCUrl: [
              "https://optimism-mainnet.public.blastapi.io",
              "https://1rpc.io/op",
            ],
            publicJsonRPCWSUrl: "wss://optimism-mainnet.public.blastapi.io",
            wagmiChain: w.R,
            wrappedBaseAssetSymbol: "WETH",
          },
          [g.N.id]: {
            baseAssetDecimals: 18,
            baseAssetSymbol: "BNB",
            bridge: {
              icon: "".concat(e, "/binance.svg"),
              name: "BNB Bridge",
              url: "https://www.bnbchain.org/en/bnb-chain-bridges",
            },
            chainlinkPriceFeed: "0x0567F2323251f0Aab15c8dfb1967E4e8A7D42aeE",
            explorerLink: "https://bscscan.com",
            isLegacyGas: !0,
            name: "Binance Chain",
            networkLogoPath: "".concat(e, "/binance.svg"),
            privateJsonRPCUrl:
              "https://enterprise.onerpc.com/bsc?apikey=".concat(t),
            publicJsonRPCUrl: ["https://bsc.publicnode.com	"],
            publicJsonRPCWSUrl: "wss://bsc.publicnode.com",
            wagmiChain: g.N,
            wrappedBaseAssetSymbol: "WBNB",
          },
          [E._.id]: {
            baseAssetDecimals: 18,
            baseAssetSymbol: "ETH",
            bridge: {
              icon: "".concat(e, "/linea.svg"),
              name: "Linea Bridge",
              url: "https://bridge.linea.build/",
            },
            chainlinkPriceFeed: "0x3c6Cd9Cc7c7a4c2Cf5a82734CD249D7D593354dA",
            explorerLink: "https://lineascan.build",
            name: "Linea",
            networkLogoPath: "".concat(e, "/linea.svg"),
            privateJsonRPCUrl:
              "https://enterprise.onerpc.com/linea?apikey=".concat(t),
            publicJsonRPCUrl: [
              "https://1rpc.io/linea",
              "https://linea.drpc.org",
              "https://linea-rpc.publicnode.com",
            ],
            wagmiChain: E._,
            wrappedBaseAssetSymbol: "WETH",
          },
          [h.E.id]: {
            baseAssetDecimals: 18,
            baseAssetSymbol: "PLUME",
            chainlinkPriceFeed: r.L,
            explorerLink: "https://explorer.plume.org",
            name: "Plume",
            networkLogoPath: "".concat(e, "/plume.svg"),
            publicJsonRPCUrl: ["https://rpc.plume.org"],
            wagmiChain: h.E,
            wrappedBaseAssetSymbol: "WPLUME",
          },
        }),
        A = {
          development: "development",
          local: "local",
          production: "production",
          uat: "uat",
        };
    },
    68266: (e, t, o) => {
      "use strict";
      o.d(t, { V: () => a });
      var r = Object.defineProperty,
        a = (e, t) => {
          for (var o in t) r(e, o, { get: t[o], enumerable: !0 });
        };
    },
    91912: (e, t, o) => {
      "use strict";
      o.d(t, {
        If: () => d,
        My: () => l,
        TE: () => c,
        UZ: () => a,
        W6: () => s,
        pU: () => n,
        vH: () => i,
      });
      var r = o(25474);
      let a = {
        BRIDGE_TERMS_ACCEPTED: "bridgeTermsAccepted",
        READ_ONLY_MODE_ADDRESS: "readOnlyModeAddress",
        READ_ONLY_MODE_ENS_NAME: "readOnlyModeEnsName",
        SWAP_TERMS_ACCEPTED: "swapTermsAccepted",
        TESTNET_ENABLED: "testnetEnabled",
        TRACKING_CONSENT: "trackingConsent",
        USER_ACCEPTED_ANALYTICS: "userAcceptedAnalytics",
      };
      (0, r.tG)(a.TRACKING_CONSENT, null, void 0, { getOnInit: !0 });
      let n = (0, r.tG)(a.USER_ACCEPTED_ANALYTICS, null, void 0, {
          getOnInit: !0,
        }),
        s = (0, r.tG)(a.TESTNET_ENABLED, !1, void 0, { getOnInit: !0 }),
        i = (0, r.tG)(a.READ_ONLY_MODE_ADDRESS, void 0, void 0, {
          getOnInit: !0,
        }),
        l = (0, r.tG)(a.READ_ONLY_MODE_ENS_NAME, void 0, void 0, {
          getOnInit: !0,
        }),
        c = (0, r.tG)(a.BRIDGE_TERMS_ACCEPTED, {}, void 0, { getOnInit: !0 }),
        d = (0, r.tG)(a.SWAP_TERMS_ACCEPTED, {}, void 0, { getOnInit: !0 });
    },
  },
  (e) => {
    e.O(
      0,
      [3387, 7261, 8745, 3970, 160, 887, 1504, 5461, 587, 1902, 7358],
      () => e((e.s = 22569))
    ),
      (_N_E = e.O());
  },
]);
