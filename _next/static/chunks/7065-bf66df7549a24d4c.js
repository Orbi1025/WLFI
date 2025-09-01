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
      (e._sentryDebugIds[t] = "28278324-18f5-4e48-9f92-e0a8989234a7"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-28278324-18f5-4e48-9f92-e0a8989234a7"));
  })();
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1308, 7065],
  {
    5023: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => i });
      var a = r(54568),
        n = r(27261),
        s = r.n(n),
        o = r(29768);
      let i = (e) => {
        let { className: t, ...r } = e;
        return (0, a.jsx)(s(), {
          className: (0, o.cn)(
            "tw-outline-none focus-visible:tw-shadow-button-focus-simple",
            t
          ),
          ...r,
        });
      };
    },
    8379: () => {},
    8960: (e, t, r) => {
      "use strict";
      r.d(t, {
        AK: () => f,
        XJ: () => m,
        NB: () => p,
        wY: () => E,
        bL: () => g,
        p9: () => h,
      });
      var a = r(40160),
        n = r(79924),
        s = r(58369),
        o = r(11985),
        i = r(91912);
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
      let d = (0, n.eU)((e) => {
          let t = e(i.pU),
            r = l();
          return "true" === t && !r;
        }),
        c = (0, n.eU)(!0),
        w = (0, n.eU)(!1),
        u = (0, n.eU)(null, (e, t) => {
          let r = "true" === e(i.pU),
            a = e(w),
            n = o.h.NEXT_PUBLIC_MIXPANEL_ID,
            d = o.h.NEXT_PUBLIC_GOOGLE_ID;
          if (!l()) {
            if (
              (a ||
                (s.A.init(n, {
                  debug: o.h.NEXT_PUBLIC_STAGE !== o.L.production,
                  ip: !1,
                  opt_out_tracking_by_default: !0,
                  record_sessions_percent: 1,
                  verbose: o.h.NEXT_PUBLIC_STAGE !== o.L.production,
                }),
                t(w, !0)),
              r)
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
        m = (0, n.eU)(null, (e, t) => {
          let r = e(i.pU),
            a = e(w);
          null === r || a || t(u);
        }),
        f = (0, n.eU)(null, (e, t) => {
          if (l()) {
            t(i.pU, "false"), t(c, !1), t(u);
            return;
          }
          t(i.pU, "true"), t(c, !1), t(u);
        }),
        p = (0, n.eU)(null, (e, t) => {
          t(i.pU, "false"), t(c, !1), t(u);
        }),
        E = (0, n.eU)(null, (e, t, r) => {
          t(i.pU, null), t(c, r);
        }),
        h = (0, n.eU)(null, (e, t, r) => {
          let { url: n, properties: i } = r,
            l = e(d),
            c = e(w),
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
          } catch (e) {
            console.error("Error tracking pageview:", e), (0, a.Cp)(e);
          }
        }),
        g = (0, n.eU)(null, (e, t, r) => {
          let { eventName: n, properties: i } = r,
            l = e(d),
            c = e(w);
          if (!l || !c) return;
          let u = o.h.NEXT_PUBLIC_GOOGLE_ID;
          try {
            c && s.A.track(n, i),
              u && window.gtag && window.gtag("event", n, { ...i, send_to: u });
          } catch (e) {
            console.error("Error tracking event:", e), (0, a.Cp)(e);
          }
        });
    },
    10042: (e, t, r) => {
      "use strict";
      r.d(t, { l: () => a });
      let a = {
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
    10558: (e, t, r) => {
      "use strict";
      r.d(t, { C$: () => o, Fn: () => i });
      var a = r(54568),
        n = r(7620);
      let s = n.createContext({}),
        o = (e) => {
          let { children: t } = e,
            [r, o] = n.useState({}),
            [i, l] = n.useState({}),
            [d, c] = n.useState(""),
            [w, u] = n.useState(!1),
            [m, f] = n.useState();
          return (0, a.jsx)(s, {
            value: {
              approvalTxState: r,
              gasLimit: d,
              loadingTxns: w,
              mainTxState: i,
              setApprovalTxState: o,
              setGasLimit: c,
              setLoadingTxns: u,
              setMainTxState: l,
              setTxError: f,
              txError: m,
            },
            children: t,
          });
        },
        i = () => {
          let e = n.useContext(s);
          if (void 0 === e)
            throw Error(
              "useTransactionContext must be used within a TransactionProvider"
            );
          return e;
        };
    },
    13432: (e, t, r) => {
      "use strict";
      r.d(t, {
        DG: () => n,
        P: () => g,
        Pv: () => d,
        Um: () => b,
        p4: () => x,
        w4: () => S,
      });
      var a = r(68266),
        n = {};
      (0, a.V)(n, { APPROVAL_GAS_LIMIT: () => s, USDC_ADDRESS: () => o });
      var s = "45000",
        o = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
      (0, a.V)({}, { selectors: () => i });
      var i = {};
      (0, a.V)(i, { mainnet: () => l });
      var l = {
          bsc: 0x9d70576d8e253bcfn,
          ethereum: 0x45849994fc9c7b15n,
          plume: 0xf8946d7c5b972a83n,
        },
        d = {};
      (0, a.V)(d, {
        UNISWAP_V3_ROUTER_ADDRESS: () => h,
        USD1_ADDRESS: () => E,
        USD1_LEGACY_ADDRESS: () => p,
        WLFI_ADDRESS: () => c,
        WLFI_DECIMALS: () => m,
        WLFI_REGISTRY_ADDRESS: () => w,
        WLFI_SYMBOL: () => u,
        WLFI_VESTER_ADDRESS: () => f,
      });
      var c = "0xda5e1988097297dcdc1f90d4dfe7909e847cbef6",
        w = "0x4f61a99e42e21ea3c3eaf9b1b30fb80a7900d3ce",
        u = "WLFI",
        m = 18,
        f = "0x74b4f6a2e579d730aacb9dd23cfbbaeb95029583",
        p = "0x8d0d000ee44948fc98c9b98a4fa4921476f08b0d",
        E = "0x111111d2bf19e43c34263401e0cad979ed1cdb61",
        h = "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
        g = {};
      (0, a.V)(g, { POLLING_INTERVAL: () => _ });
      var _ = 6e4,
        x = {};
      (0, a.V)(x, { statement: () => N });
      var N = "Sign in with Ethereum to World Liberty Financial",
        b = {};
      (0, a.V)(b, {
        BNB_ADDRESS: () => A,
        ETHEREUM_ADDRESS: () => v,
        PLUME_ADDRESS: () => T,
        SYMBOL: () => C,
        TRON_ADDRESS: () => y,
      });
      var v = p,
        A = p,
        T = E,
        y = "TPFqcBAaaUMCSVRCqPaQ9QnzKhmuoLR6Rc",
        C = "USD1",
        S = "static.worldlibertyfinancial.com";
    },
    17680: (e, t, r) => {
      "use strict";
      r.d(t, { Toaster: () => w, o: () => m });
      var a = r(54568),
        n = r(68309),
        s = r(51874),
        o = r(40615),
        i = r(47227),
        l = r(4451),
        d = r(10042);
      let c = {
          error: (0, a.jsx)(o.A, {
            icon: l.A.circleAlert,
            variant: "destructive",
          }),
          info: (0, a.jsx)(o.A, { icon: l.A.info, variant: "default" }),
          success: (0, a.jsx)(o.A, {
            icon: l.A.checkCircle,
            variant: "success",
          }),
          warning: (0, a.jsx)(o.A, {
            icon: l.A.circleAlert,
            variant: "warning",
          }),
        },
        w = (e) => {
          let { ...t } = e,
            { theme: r = "system" } = (0, n.D)();
          return (0, a.jsx)(s.l$, { theme: r, ...t });
        };
      function u(e) {
        let { title: t, description: r, variant: n, id: o, action: w } = e;
        return (0, a.jsxs)("div", {
          className:
            "tw-relative tw-flex tw-min-w-72 tw-gap-2 tw-rounded-lg tw-border tw-border-border tw-bg-alpha-white/90 tw-py-4 tw-pl-2 tw-pr-4 tw-backdrop-blur-lg",
          "data-pw": d.l.TOASTER,
          children: [
            (0, a.jsx)("div", {
              className: "-tw-translate-y-1",
              children: c[n],
            }),
            (0, a.jsxs)("div", {
              className: "tw-flex tw-flex-1 tw-items-start tw-gap-2",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "tw-mt-1 tw-flex tw-flex-1 tw-flex-col tw-items-start tw-gap-3",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "tw-flex tw-flex-col tw-gap-1",
                      children: [
                        (0, a.jsx)("p", {
                          className:
                            "tw-text-sm tw-font-semibold tw-text-primary",
                          children: t,
                        }),
                        r &&
                          (0, a.jsxs)("p", {
                            className: "tw-text-sm tw-text-secondary",
                            children: [" ", r, " "],
                          }),
                      ],
                    }),
                    w &&
                      (0, a.jsx)(i.Button, {
                        onClick: () => {
                          var e;
                          null == (e = w.onClick) || e.call(w), s.oR.dismiss(o);
                        },
                        size: "fit",
                        variant: "link-secondary",
                        children: w.label,
                      }),
                  ],
                }),
                (0, a.jsxs)(i.Button, {
                  autoFocus: !1,
                  className: "!tw-size-6 tw-p-0.5",
                  onClick: () => s.oR.dismiss(o),
                  size: "icon-sm",
                  variant: "close",
                  children: [
                    (0, a.jsx)(l.A.x, {
                      className: "tw-aspect-square tw-size-5",
                    }),
                    (0, a.jsx)("span", {
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
      let m = (e) => {
        let { toastConfig: t, toastOptions: r } = e;
        return s.oR.custom((e) => (0, a.jsx)(u, { id: e, ...t }), r);
      };
    },
    20874: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => s });
      var a = r(54568),
        n = r(29768);
      function s(e) {
        let { className: t, ...r } = e;
        return (0, a.jsx)("div", {
          className: (0, n.cn)(
            "tw-animate-pulse tw-rounded-full tw-bg-background-disabled",
            t
          ),
          ...r,
        });
      }
    },
    21946: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => j });
      var a = r(50631),
        n = r(3233),
        s = r(89601),
        o = r(9720),
        i = r(68267),
        l = r(77364),
        d = r(33533),
        c = r(78158),
        w = r(75673),
        u = r(90384),
        m = r(34252),
        f = r(29528),
        p = r(33782),
        E = r(32179),
        h = r(95634),
        g = r(64627),
        _ = r(13432),
        x = r(79536),
        N = Object.defineProperty,
        b = (e, t) => {
          for (var r in t) N(e, r, { get: t[r], enumerable: !0 });
        },
        v = {};
      b(v, { getChainIds: () => T });
      var A = [
          n.r.id,
          s.N.id,
          o.E.id,
          i.n.id,
          l.m.id,
          d.D.id,
          c.E.id,
          w.R.id,
          u._.id,
        ],
        T = (e) =>
          e === a.Ld.production
            ? A
            : [...A, m.G.id, f.C.id, p.Y.id, E.Z.id, h.i.id],
        y = {};
      b(y, {
        inquiryRequestSchema: () => L,
        mintingRequestSchema: () => D,
        requestSchema: () => P,
      });
      var C = { sixty: 60, thirty: 30, thousand: 1e3, twentyFour: 24 },
        S = { maxAge: C.sixty * C.sixty * C.twentyFour * C.thirty },
        I = { base: C, cdn: "https://".concat(_.w4), jwt: S },
        R = g.Ay$.object({
          email: g.Ay$.email({ error: "Invalid email" }),
          firstName: g.Ay$.string().min(1, { error: "First name is required" }),
          lastName: g.Ay$.string().min(1, { error: "Last name is required" }),
          message: g.Ay$.string({ error: "Message field cannot be empty" })
            .min(1, { error: "Message is required" })
            .max(I.base.thousand, {
              error: "Message must be less than 1000 characters",
            }),
          reason: g.Ay$.string({ error: "Reason field cannot be empty" }).min(
            1,
            { error: "Reason is required" }
          ),
          source: g.Ay$.string().optional(),
          topic: g.Ay$.string(),
        }),
        L = R.extend({ topic: g.Ay$.literal("inquiry") }),
        D = R.extend({
          company: g.Ay$.string().min(1, {
            error: "Company field cannot be empty",
          }),
          country: g.Ay$.string().min(1, {
            error: "Country field cannot be empty",
          }),
          title: g.Ay$.string().min(1, {
            error: "Job title field cannot be empty",
          }),
          topic: g.Ay$.literal("minting"),
        }),
        P = { inquiry: L, minting: D },
        O = {};
      b(O, { requestSchema: () => U });
      var U = x.Ik({
          email: x.Yj().email({ message: "Invalid email" }),
          message: x
            .Yj()
            .min(1, { message: "Message is required" })
            .max(I.base.thousand, {
              message: "Message must be less than 1000 characters",
            }),
        }),
        j = { chains: { supported: v }, zod: { contact: y, feedback: O } };
    },
    26080: (e, t, r) => {
      "use strict";
      r.d(t, {
        Az: () => l,
        Dc: () => o,
        H9: () => w,
        J$: () => i,
        Z$: () => c,
        qt: () => s,
        w7: () => n,
        xq: () => d,
        zm: () => a,
      });
      let a = {
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
    28359: (e, t, r) => {
      "use strict";
      r.d(t, {
        Cf: () => h,
        Es: () => x,
        L3: () => N,
        R4: () => g,
        c7: () => _,
        cT: () => w,
        lG: () => m,
        rr: () => b,
      });
      var a = r(54568),
        n = r(25173),
        s = r(615),
        o = r(7620),
        i = r(47227),
        l = r(4451),
        d = r(29768),
        c = r(10042);
      function w(e) {
        e ||
          setTimeout(() => {
            document.body.style.pointerEvents = "auto";
          }, 300);
      }
      let u = n.bL,
        m = (e) => {
          let { onOpenChange: t, ...r } = e;
          return (0, a.jsx)(u, {
            ...r,
            onOpenChange: (e) => {
              w(e), null == t || t(e);
            },
          });
        };
      n.l9;
      let f = n.ZL;
      n.bm;
      let p = o.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(n.hJ, {
          className: (0, d.cn)(
            "tw-fixed tw-inset-0 tw-z-[10000] tw-bg-background-overlay/70 tw-backdrop-blur-lg data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out",
            "data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0",
            r
          ),
          ref: t,
          ...s,
        });
      });
      p.displayName = n.hJ.displayName;
      let E = (0, s.F)("", {
          defaultVariants: { size: "lg" },
          variants: {
            size: {
              lg: "tw-max-w-lg",
              md: "tw-max-w-md",
              sm: "tw-max-w-sm",
              xl: "tw-max-w-xl",
            },
          },
        }),
        h = o.forwardRef((e, t) => {
          let {
            className: r,
            children: s,
            size: o,
            preventCloseOnOutsideInteraction: i,
            ...l
          } = e;
          return (0, a.jsxs)(f, {
            children: [
              (0, a.jsx)(p, {}),
              (0, a.jsx)(n.UC, {
                className: (0, d.cn)(
                  "tw-fixed tw-left-1/2 tw-top-1/2 tw-z-[10001] tw-w-full tw-max-w-lg -tw-translate-x-1/2 -tw-translate-y-1/2",
                  "tw-bg-background tw-duration-200 data-[state=open]:tw-animate-in",
                  "data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0",
                  "data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[state=closed]:tw-slide-out-to-left-1/2",
                  "data-[state=closed]:tw-slide-out-to-top-[48%] data-[state=open]:tw-slide-in-from-left-1/2",
                  "tw-p-0 data-[state=open]:tw-slide-in-from-top-[48%]",
                  "tw-flex tw-flex-col",
                  "tw-h-fit tw-max-h-[85vh] tw-border tw-border-border-tertiary tw-shadow-xl xs:tw-rounded-xl sh:!tw-max-h-full mb:!tw-max-h-full",
                  E({ size: o }),
                  r
                ),
                onPointerDownOutside: (e) => {
                  i && e.preventDefault();
                },
                ref: t,
                ...l,
                "data-pw": c.l.MODAL.DIALOG,
                children: s,
              }),
            ],
          });
        });
      h.displayName = n.UC.displayName;
      let g = (e) => {
        let { className: t, ...r } = e;
        return (0, a.jsx)("div", {
          className: "tw-overflow-y-auto",
          children: (0, a.jsx)("div", {
            className: (0, d.cn)(
              "tw-flex tw-flex-1 tw-flex-col tw-gap-4 tw-overflow-y-auto tw-px-4 md:tw-px-6",
              t
            ),
            ...r,
          }),
        });
      };
      g.displayName = "DialogBody";
      let _ = (e) => {
        let { className: t, children: r, ...s } = e;
        return (0, a.jsxs)("div", {
          className: (0, d.cn)(
            "tw-sticky tw-flex tw-flex-row tw-items-center tw-justify-between tw-gap-1 tw-p-2 tw-pl-4 md:tw-pl-6",
            t
          ),
          ...s,
          children: [
            r,
            (0, a.jsx)(n.bm, {
              asChild: !0,
              children: (0, a.jsxs)(i.Button, {
                autoFocus: !1,
                "data-pw": c.l.MODAL.CLOSE_BUTTON,
                size: "icon",
                variant: "close",
                children: [
                  (0, a.jsx)(l.A.x, {
                    className:
                      "tw-aspect-square tw-w-6 sm:tw-size-5 lg:tw-size-6",
                  }),
                  (0, a.jsx)("span", {
                    className: "tw-sr-only",
                    children: "Close",
                  }),
                ],
              }),
            }),
          ],
        });
      };
      _.displayName = "DialogHeader";
      let x = (e) => {
        let { className: t, ...r } = e;
        return (0, a.jsx)("div", {
          className: (0, d.cn)(
            "tw-mt-auto tw-flex tw-items-center tw-rounded-b-xl tw-bg-background tw-p-4 md:tw-px-6",
            t
          ),
          ...r,
        });
      };
      x.displayName = "DialogFooter";
      let N = o.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(n.hE, {
          className: (0, d.cn)("tw-text-lg tw-font-semibold", r),
          ref: t,
          ...s,
          "data-pw": c.l.MODAL.TITLE,
        });
      });
      N.displayName = n.hE.displayName;
      let b = o.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(n.VY, {
          className: (0, d.cn)("tw-text-sm", r),
          ref: t,
          ...s,
        });
      });
      b.displayName = n.VY.displayName;
    },
    37570: (e, t, r) => {
      "use strict";
      r.d(t, { MediaAnchor: () => d, Q: () => c });
      var a = r(60844),
        n = r(7620),
        s = r(80023),
        o = r(79924);
      let i = (0, o.eU)({
          isDesktop: !1,
          isDesktopLarge: !1,
          isMobile: !1,
          isMobileSmall: !1,
          isTablet: !1,
        }),
        l = (0, o.eU)(
          (e) => e(i),
          (e, t, r) => {
            t(i, r);
          }
        ),
        d = () => {
          let [e, t] = n.useState(!1),
            r = (0, n.useCallback)(() => {
              s.M.set(l, {
                isDesktop: window.matchMedia("(min-width: 1024px)").matches,
                isDesktopLarge: window.matchMedia("(min-width: 1280px)")
                  .matches,
                isMobile: window.matchMedia("(max-width: 640px)").matches,
                isMobileSmall: window.matchMedia("(max-width: 480px)").matches,
                isTablet: window.matchMedia("(max-width: 768px)").matches,
              });
            }, []);
          return (
            n.useEffect(() => {
              t(!0);
            }, []),
            n.useEffect(
              () =>
                e
                  ? (r(),
                    window.addEventListener("resize", r),
                    () => window.removeEventListener("resize", r))
                  : () => {},
              [r, e]
            ),
            null
          );
        },
        c = () => (0, a.md)(l);
    },
    40615: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => l });
      var a = r(54568),
        n = r(4451),
        s = r(29768);
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
      function l(e) {
        let {
          variant: t,
          icon: r = n.A.info,
          className: l,
          iconClassName: d,
        } = e;
        return (0, a.jsx)("div", {
          className: (0, s.cn)(
            "tw-w-fit tw-rounded-full tw-border-2 tw-p-1",
            o[t || "default"],
            l
          ),
          children: (0, a.jsx)(r, {
            className: (0, s.cn)(
              "tw-size-8 tw-rounded-full tw-border-2 tw-p-1",
              i[t || "default"],
              d
            ),
          }),
        });
      }
    },
    46752: (e, t, r) => {
      "use strict";
      r.d(t, {
        _N: () => F,
        r_: () => z,
        pq: () => V,
        P6: () => W,
        z4: () => X,
        Kn: () => G,
        Oq: () => J,
        RY: () => K,
        sO: () => H,
        or: () => q,
        _C: () => j,
        km: () => P,
      });
      var a,
        n,
        s,
        o,
        i,
        l,
        d,
        c,
        w,
        u,
        m,
        f,
        p = r(75597),
        E = r(21946),
        h = r(50631),
        g = r(3233),
        _ = r(89601),
        x = r(9720),
        N = r(68267),
        b = r(77364),
        v = r(33533),
        A = r(78158),
        T = r(75673),
        y = r(90384),
        C = r(11985),
        S = r(27570),
        I = r(33210);
      async function R(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      class L extends S.DJ {
        async fallForwardRotation() {
          let e = Date.now() - this.firstRotationTimestamp;
          e < this.fallForwardDelay &&
            (await R(this.fallForwardDelay - e),
            (this.currentProviderIndex = 0));
        }
        async rotateUrl(e) {
          if (e === this.currentProviderIndex)
            if (0 === this.currentProviderIndex)
              (this.currentProviderIndex += 1),
                (this.firstRotationTimestamp = Date.now()),
                await this.fallForwardRotation();
            else if (this.currentProviderIndex === this.providers.length - 1) {
              if (((this.retries += 1), this.retries > this.maxRetries))
                throw (
                  ((this.retries = 0),
                  Error(
                    "RotationProvider exceeded max number of retries. Last error: ".concat(
                      this.lastError
                    )
                  ))
                );
              this.currentProviderIndex = 0;
            } else this.currentProviderIndex += 1;
        }
        async detectNetwork() {
          let e;
          var t,
            r,
            a = await Promise.all(
              this.providers.map(async (e) => e.getNetwork())
            );
          for (let n of (a.length ||
            I.logger.throwArgumentError("no networks provided", "networks", a),
          a)) {
            if (!e) {
              e = n;
              continue;
            }
            (e.name.toLowerCase() !== n.name.toLowerCase() ||
              e.chainId !== n.chainId ||
              (null == (t = e.ensAddress) ? void 0 : t.toLowerCase()) !==
                (null == (r = n.ensAddress) ? void 0 : r.toLowerCase())) &&
              I.logger.throwArgumentError("provider mismatch", "networks", a);
          }
          return (
            e ||
              I.logger.throwArgumentError("no networks defined", "networks", a),
            e
          );
        }
        async send(e, t) {
          let r = this.currentProviderIndex;
          try {
            return await this.providers[r].send(e, t);
          } catch (a) {
            return await this.rotateUrl(r), this.send(e, t);
          }
        }
        async perform(e, t) {
          let r = this.currentProviderIndex;
          try {
            return await this.providers[r].perform(e, t);
          } catch (a) {
            return (
              a instanceof Error && (this.lastError = a.message),
              this.emit("debug", {
                action: "perform",
                provider: this.providers[r],
              }),
              await this.rotateUrl(r),
              this.perform(e, t)
            );
          }
        }
        constructor(e, t, r) {
          super(t),
            (this.currentProviderIndex = 0),
            (this.firstRotationTimestamp = 0),
            (this.maxRetries = 0),
            (this.retries = 0),
            (this.lastError = ""),
            (this.providers = e.map((e) => new p.B(e, t))),
            (this.maxRetries = (null == r ? void 0 : r.maxRetries) || 1),
            (this.fallForwardDelay =
              (null == r ? void 0 : r.fallForwardDelay) || 6e4);
        }
      }
      let D = "/images/networks",
        P = (0, h.i8)(D, C.h.NEXT_PUBLIC_ONE_RPC_API_KEY),
        O = (0, h.PK)(D, C.h.NEXT_PUBLIC_ONE_RPC_API_KEY),
        U = [
          g.r.id,
          _.N.id,
          x.E.id,
          N.n.id,
          b.m.id,
          v.D.id,
          A.E.id,
          T.R.id,
          y._.id,
        ],
        j =
          C.h.NEXT_PUBLIC_STAGE === C.L.production
            ? Object.fromEntries(
                Object.entries(O).filter((e) => {
                  let [t] = e;
                  return U.includes(Number(t));
                })
              )
            : O,
        k = { ...(C.h.NEXT_PUBLIC_STAGE === C.L.production ? {} : P), ...j },
        M = Object.keys(k)
          .map((e) => Number(e))
          .sort((e, t) => e - t),
        B = E.A.chains.supported
          .getChainIds(C.h.NEXT_PUBLIC_STAGE)
          .sort((e, t) => e - t);
      if (M.length !== B.length)
        throw Error("Defined chains and supported chains length mismatch");
      for (let e = 0; e < M.length; e++)
        if (M[e] !== B[e])
          throw Error("Defined chains and supported chains mismatch");
      let G = C.h.NEXT_PUBLIC_STAGE !== C.L.production,
        F =
          G &&
          (null == (n = r.g) || null == (a = n.window)
            ? void 0
            : a.localStorage.getItem("testnetEnabled")) === "true",
        W =
          C.h.NEXT_PUBLIC_STAGE !== C.L.production &&
          (!!C.h.NEXT_PUBLIC_FORK_URL_RPC ||
            (null == (o = r.g) || null == (s = o.window)
              ? void 0
              : s.localStorage.getItem("forkEnabled")) === "true"),
        z =
          Number(C.h.NEXT_PUBLIC_FORK_BASE_CHAIN_ID) ||
          Number(
            (null == (l = r.g) || null == (i = l.window)
              ? void 0
              : i.localStorage.getItem("forkBaseChainId")) || 1
          ),
        V =
          Number(C.h.NEXT_PUBLIC_FORK_CHAIN_ID) ||
          Number(
            (null == (c = r.g) || null == (d = c.window)
              ? void 0
              : d.localStorage.getItem("forkNetworkId")) || 3030
          ),
        X =
          C.h.NEXT_PUBLIC_FORK_URL_RPC ||
          (null == (u = r.g) || null == (w = u.window)
            ? void 0
            : w.localStorage.getItem("forkRPCUrl")) ||
          "http://127.0.0.1:8545",
        Y =
          C.h.NEXT_PUBLIC_FORK_URL_WS_RPC ||
          (null == (f = r.g) || null == (m = f.window)
            ? void 0
            : m.localStorage.getItem("forkWsRPCUrl")) ||
          "ws://127.0.0.1:8545",
        q = Object.keys(k).reduce((e, t) => {
          if (((e[t] = k[t]), W && Number(t) === z)) {
            var r;
            e[V] = {
              ...k[t],
              isFork: !0,
              name: "".concat(null == (r = k[t]) ? void 0 : r.name, " Fork"),
              privateJsonRPCUrl: X,
              privateJsonRPCWSUrl: Y,
              publicJsonRPCUrl: [],
              publicJsonRPCWSUrl: "",
              underlyingChainId: z,
            };
          }
          return e;
        }, {});
      function K(e) {
        let t = q[e];
        return t
          ? {
              ...t,
              explorerLinkBuilder: ((e) => {
                let {
                  baseUrl: t,
                  addressPrefix: r = "address",
                  txPrefix: a = "tx",
                  tokenPrefix: n = "token",
                } = e;
                return (e) => {
                  let { tx: s, address: o, token: i } = e;
                  return s
                    ? "".concat(t, "/").concat(a, "/").concat(s)
                    : o
                    ? "".concat(t, "/").concat(r, "/").concat(o)
                    : i
                    ? "".concat(t, "/").concat(n, "/").concat(i)
                    : t;
                };
              })({ baseUrl: t.explorerLink }),
            }
          : { name: "unknown chainId: ".concat(e) };
      }
      let $ = {},
        H = (e) => {
          if (!$[e]) {
            let t = K(e),
              r = [];
            if (
              (t.privateJsonRPCUrl && r.push(t.privateJsonRPCUrl),
              t.publicJsonRPCUrl.length &&
                t.publicJsonRPCUrl.map((e) => r.push(e)),
              !r.length)
            )
              throw Error("".concat(e, " has no jsonRPCUrl configured"));
            1 === r.length ? ($[e] = new p.B(r[0], e)) : ($[e] = new L(r, e));
          }
          return $[e];
        },
        J = () => {
          let e = K(1);
          return new p.B(e.publicJsonRPCUrl[0], 1);
        };
    },
    50674: (e, t, r) => {
      "use strict";
      function a(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
        if (!e) return "";
        let { length: a } = e,
          n = e.slice(0, t),
          s = e.slice(a - r);
        return "".concat(n, " ... ").concat(s);
      }
      r.d(t, { $: () => a });
    },
    56556: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      var a = r(40476),
        n = r(29344);
      function s() {
        let { chainId: e } = (0, a.F)(),
          { chains: t } = (0, n.U)(),
          r = t.some((t) => t.id === e);
        return void 0 === e || r;
      }
    },
    67876: (e, t, r) => {
      "use strict";
      r.d(t, {
        I: () => c,
        SQ: () => w,
        _2: () => u,
        lp: () => m,
        mB: () => f,
        rI: () => l,
        ty: () => d,
      });
      var a = r(54568),
        n = r(26631),
        s = r(58677),
        o = r(7620),
        i = r(29768);
      let l = n.bL,
        d = o.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)(n.l9, {
            className: (0, i.cn)(
              "tw-flex tw-cursor-pointer tw-items-center tw-gap-1.5 tw-rounded-full tw-border-border-button-secondary-hover tw-p-1 tw-text-sm tw-font-semibold tw-text-foreground-button-secondary tw-shadow-input",
              r
            ),
            ref: t,
            ...s,
          });
        });
      d.displayName = n.l9.displayName;
      let c = n.YJ;
      n.ZL,
        n.Pb,
        n.z6,
        (o.forwardRef((e, t) => {
          let { className: r, inset: o, children: l, ...d } = e;
          return (0, a.jsxs)(n.ZP, {
            className: (0, i.cn)(
              "tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none data-[state=open]:tw-bg-background focus:tw-bg-background",
              o && "tw-pl-8",
              r
            ),
            ref: t,
            ...d,
            children: [
              l,
              (0, a.jsx)(s.vKP, { className: "tw-ml-auto tw-size-4" }),
            ],
          });
        }).displayName = n.ZP.displayName),
        (o.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)(n.G5, {
            className: (0, i.cn)(
              "tw-z-[200] tw-min-w-32 tw-overflow-hidden tw-rounded-md tw-border tw-bg-background tw-p-1 tw-text-primary tw-shadow-lg data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
              r
            ),
            ref: t,
            ...s,
          });
        }).displayName = n.G5.displayName);
      let w = o.forwardRef((e, t) => {
        let { className: r, sideOffset: s = 4, ...o } = e;
        return (0, a.jsx)(n.ZL, {
          children: (0, a.jsx)(n.UC, {
            className: (0, i.cn)(
              "tw-z-[200] tw-min-w-32 tw-overflow-hidden tw-rounded-md tw-border tw-bg-background tw-p-1 tw-shadow-md",
              "data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
              r
            ),
            onWheel: (e) => {
              e.stopPropagation();
            },
            ref: t,
            sideOffset: s,
            ...o,
          }),
        });
      });
      w.displayName = n.UC.displayName;
      let u = o.forwardRef((e, t) => {
        let {
            className: r,
            icon: s,
            action: l,
            isActive: d,
            error: c,
            children: w,
            ...u
          } = e,
          m = s
            ? (0, a.jsx)(s, {
                className: (0, i.cn)(
                  "tw-size-4 tw-text-foreground-quaternary",
                  c && "tw-text-error-foreground"
                ),
              })
            : null,
          f = l
            ? (0, a.jsxs)("span", {
                className:
                  "tw-flex tw-w-full tw-items-center tw-justify-between",
                children: [w, l],
              })
            : w,
          p = (0, i.cn)(
            "tw-mx-1 tw-flex tw-cursor-pointer tw-select-none tw-items-center tw-gap-2 tw-rounded-sm tw-p-2 tw-text-sm tw-font-medium tw-text-secondary tw-outline-none tw-transition-colors data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50 hover:tw-bg-background-hover hover:tw-text-secondary-hover",
            d && "tw-bg-background-hover tw-text-secondary-hover",
            c && "tw-text-error-foreground hover:tw-text-error-foreground",
            r
          );
        if (u.asChild && 1 === o.Children.count(w) && o.isValidElement(w)) {
          let e = o.Children.only(w),
            r = (0, i.cn)(p, e.props.className);
          return (0, a.jsx)(n.q7, {
            autoFocus: !1,
            onPointerEnter: (e) => e.preventDefault(),
            onPointerLeave: (e) => e.preventDefault(),
            onPointerMove: (e) => e.preventDefault(),
            ref: t,
            ...u,
            children: o.cloneElement(e, {
              children: (0, a.jsxs)(a.Fragment, {
                children: [
                  m,
                  e.props.children,
                  l &&
                    (0, a.jsx)("span", {
                      className: "tw-ml-auto",
                      children: l,
                    }),
                ],
              }),
              className: r,
            }),
          });
        }
        return (0, a.jsxs)(n.q7, {
          autoFocus: !1,
          className: p,
          onPointerEnter: (e) => e.preventDefault(),
          onPointerLeave: (e) => e.preventDefault(),
          onPointerMove: (e) => e.preventDefault(),
          ref: t,
          ...u,
          children: [m, f],
        });
      });
      (u.displayName = n.q7.displayName),
        (o.forwardRef((e, t) => {
          let { className: r, children: o, checked: l, ...d } = e;
          return (0, a.jsxs)(n.H_, {
            checked: l,
            className: (0, i.cn)(
              "tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none tw-transition-colors data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",
              r
            ),
            ref: t,
            ...d,
            children: [
              (0, a.jsx)("span", {
                className:
                  "tw-absolute tw-left-2 tw-flex tw-size-3.5 tw-items-center tw-justify-center",
                children: (0, a.jsx)(n.VF, {
                  children: (0, a.jsx)(s.Srz, { className: "tw-size-4" }),
                }),
              }),
              o,
            ],
          });
        }).displayName = n.H_.displayName),
        (o.forwardRef((e, t) => {
          let { className: r, children: o, ...l } = e;
          return (0, a.jsxs)(n.hN, {
            className: (0, i.cn)(
              "tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none tw-transition-colors data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",
              r
            ),
            ref: t,
            ...l,
            children: [
              (0, a.jsx)("span", {
                className:
                  "tw-absolute tw-left-2 tw-flex tw-size-3.5 tw-items-center tw-justify-center",
                children: (0, a.jsx)(n.VF, {
                  children: (0, a.jsx)(s.RiX, {
                    className: "tw-size-4 tw-fill-current",
                  }),
                }),
              }),
              o,
            ],
          });
        }).displayName = n.hN.displayName);
      let m = o.forwardRef((e, t) => {
        let { className: r, inset: s, ...o } = e;
        return (0, a.jsx)(n.JU, {
          className: (0, i.cn)(
            "tw-px-2 tw-py-2.5 tw-text-sm tw-font-normal tw-text-tertiary",
            s && "tw-pl-8",
            r
          ),
          ref: t,
          ...o,
        });
      });
      m.displayName = n.JU.displayName;
      let f = o.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(n.wv, {
          className: (0, i.cn)(
            "tw--mx-1 tw-my-1 tw-h-px tw-bg-border-secondary",
            r
          ),
          ref: t,
          ...s,
        });
      });
      f.displayName = n.wv.displayName;
    },
    80023: (e, t, r) => {
      "use strict";
      r.d(t, { M: () => a });
      let a = (0, r(79924).y$)();
    },
    86640: (e, t, r) => {
      "use strict";
      r.d(t, { Pj: () => s, b5: () => n, lr: () => o });
      var a = r(79924);
      let n = (0, a.eU)(""),
        s = (0, a.eU)(void 0),
        o = (0, a.eU)(!1);
    },
    87680: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => n });
      var a = r(90095);
      let n = (e) => {
        let { data: t, isFetching: r } = (0, a.v)({ address: e });
        return {
          isContractAddress: void 0 !== t && "0x" !== t && null !== t,
          isFetching: r,
        };
      };
    },
    89303: (e, t, r) => {
      "use strict";
      r.d(t, { cb: () => f, sA: () => p });
      var a = r(54568),
        n = r(30925),
        s = r(13679),
        o = r(60844),
        i = r(7620),
        l = r(40476),
        d = r(70092),
        c = r(87680),
        w = r(91912),
        u = r(86640);
      let m = i.createContext(void 0),
        f = (e) => {
          var t, r, f;
          let { children: p } = e,
            { data: E, status: h } = (0, n.wV)(),
            g = (0, l.F)(),
            _ = (0, o.Xr)(u.b5),
            x = (0, o.Xr)(u.Pj),
            N = (0, o.Xr)(u.lr),
            [b] = (0, o.fp)(w.vH),
            [v, A] = i.useState(),
            [T, y] = i.useState(!1),
            C = "loading" === h,
            S = null == E || null == (t = E.user) ? void 0 : t.address,
            I = s.isAddress(v || ""),
            R = null != (f = null == S ? void 0 : S.toLowerCase()) ? f : "";
          I && v && (R = v.toLowerCase());
          let { isContractAddress: L } = (0, c.i)(R),
            { disconnect: D } = (0, d.u)();
          return (
            i.useEffect(() => {
              if ("authenticated" === h) {
                var e;
                _(null != S ? S : ""),
                  x(null == (e = g.connector) ? void 0 : e.id);
              }
            }, [h, S, null == (r = g.connector) ? void 0 : r.id, _, x]),
            i.useEffect(() => {
              b && s.isAddress(b) && ("authenticated" === h && D(), A(b));
            }, [b, h, D]),
            i.useEffect(() => {
              v && _(v);
            }, [v, _]),
            i.useEffect(() => {
              if (!S) return void N(!1);
              L && N(!0);
            }, [L, N, S]),
            (0, a.jsx)(m.Provider, {
              value: {
                currentAccount: R,
                loading: C,
                marketInitialized: T,
                readOnlyMode: I,
                readOnlyModeAddress: v,
                setMarketInitialized: y,
                setReadOnlyModeAddress: A,
                status: I ? "authenticated" : h,
              },
              children: p,
            })
          );
        },
        p = () => {
          let e = i.useContext(m);
          if (void 0 === e)
            throw Error(
              "useWeb3Context must be used within a Web3ContextProvider"
            );
          return e;
        };
    },
    91912: (e, t, r) => {
      "use strict";
      r.d(t, {
        If: () => c,
        My: () => l,
        TE: () => d,
        UZ: () => n,
        W6: () => o,
        pU: () => s,
        vH: () => i,
      });
      var a = r(25474);
      let n = {
        BRIDGE_TERMS_ACCEPTED: "bridgeTermsAccepted",
        READ_ONLY_MODE_ADDRESS: "readOnlyModeAddress",
        READ_ONLY_MODE_ENS_NAME: "readOnlyModeEnsName",
        SWAP_TERMS_ACCEPTED: "swapTermsAccepted",
        TESTNET_ENABLED: "testnetEnabled",
        TRACKING_CONSENT: "trackingConsent",
        USER_ACCEPTED_ANALYTICS: "userAcceptedAnalytics",
      };
      (0, a.tG)(n.TRACKING_CONSENT, null, void 0, { getOnInit: !0 });
      let s = (0, a.tG)(n.USER_ACCEPTED_ANALYTICS, null, void 0, {
          getOnInit: !0,
        }),
        o = (0, a.tG)(n.TESTNET_ENABLED, !1, void 0, { getOnInit: !0 }),
        i = (0, a.tG)(n.READ_ONLY_MODE_ADDRESS, void 0, void 0, {
          getOnInit: !0,
        }),
        l = (0, a.tG)(n.READ_ONLY_MODE_ENS_NAME, void 0, void 0, {
          getOnInit: !0,
        }),
        d = (0, a.tG)(n.BRIDGE_TERMS_ACCEPTED, {}, void 0, { getOnInit: !0 }),
        c = (0, a.tG)(n.SWAP_TERMS_ACCEPTED, {}, void 0, { getOnInit: !0 });
    },
  },
]);
