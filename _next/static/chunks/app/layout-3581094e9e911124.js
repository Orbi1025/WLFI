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
      (e._sentryDebugIds[t] = "78d6d2f8-4f54-42d4-9f84-6503f71963bf"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-78d6d2f8-4f54-42d4-9f84-6503f71963bf"));
  })();
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1308, 7177],
  {
    301: (e, t, r) => {
      "use strict";
      r.d(t, {
        A7: () => i.A7,
        G2: () => i.G2,
        c1: () => i.c1,
        qu: () => i.qu,
        r9: () => i.r9,
        v4: () => i.v4,
      });
      var i = r(21668);
    },
    4061: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => l, H: () => d });
      var i = r(54568),
        n = r(7620),
        s = r(46752);
      class a {
        async getERC20Service(e) {
          let t = this.getProvider(e),
            { ERC20Service: i } = await Promise.all([
              r.e(1659),
              r.e(5505),
              r.e(4731),
              r.e(1059),
              r.e(2341),
              r.e(1447),
            ]).then(r.bind(r, 91447));
          return new i(t);
        }
        async getApprovedAmount(e, t, r, i) {
          return (await this.getERC20Service(e)).approvedAmount({
            spender: i,
            token: r,
            user: t,
          });
        }
        constructor(e) {
          this.getProvider = e;
        }
      }
      let o = n.createContext(void 0),
        l = (e) => {
          let { children: t } = e,
            r = new a(s.sO);
          return (0, i.jsx)(o, { value: r, children: t });
        },
        d = () => {
          let e = n.useContext(o);
          if (void 0 === e)
            throw Error(
              "useApprovedAmount must be used within an ApprovedAmountProvider"
            );
          return e;
        };
    },
    5823: (e, t, r) => {
      "use strict";
      r.d(t, { P: () => o, z: () => a });
      var i = r(54568),
        n = r(7620);
      let s = n.createContext(void 0),
        a = (e) => {
          let [t, r] = n.useState();
          return (
            n.useEffect(() => {
              let e = () => r(window.matchMedia("(pointer: coarse)").matches);
              return (
                e(),
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }, []),
            (0, i.jsx)(s, { value: t, ...e })
          );
        },
        o = () => {
          let e = n.useContext(s);
          return null != e && e;
        };
    },
    8379: () => {},
    10042: (e, t, r) => {
      "use strict";
      r.d(t, { l: () => i });
      let i = {
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
      r.d(t, { C$: () => a, Fn: () => o });
      var i = r(54568),
        n = r(7620);
      let s = n.createContext({}),
        a = (e) => {
          let { children: t } = e,
            [r, a] = n.useState({}),
            [o, l] = n.useState({}),
            [d, c] = n.useState(""),
            [u, h] = n.useState(!1),
            [v, m] = n.useState();
          return (0, i.jsx)(s, {
            value: {
              approvalTxState: r,
              gasLimit: d,
              loadingTxns: u,
              mainTxState: o,
              setApprovalTxState: a,
              setGasLimit: c,
              setLoadingTxns: h,
              setMainTxState: l,
              setTxError: m,
              txError: v,
            },
            children: t,
          });
        },
        o = () => {
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
        P: () => f,
        Pv: () => d,
        Um: () => A,
        p4: () => b,
        w4: () => C,
      });
      var i = r(68266),
        n = {};
      (0, i.V)(n, { APPROVAL_GAS_LIMIT: () => s, USDC_ADDRESS: () => a });
      var s = "45000",
        a = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
      (0, i.V)({}, { selectors: () => o });
      var o = {};
      (0, i.V)(o, { mainnet: () => l });
      var l = {
          bsc: 0x9d70576d8e253bcfn,
          ethereum: 0x45849994fc9c7b15n,
          plume: 0xf8946d7c5b972a83n,
        },
        d = {};
      (0, i.V)(d, {
        UNISWAP_V3_ROUTER_ADDRESS: () => p,
        USD1_ADDRESS: () => g,
        USD1_LEGACY_ADDRESS: () => w,
        WLFI_ADDRESS: () => c,
        WLFI_DECIMALS: () => v,
        WLFI_REGISTRY_ADDRESS: () => u,
        WLFI_SYMBOL: () => h,
        WLFI_VESTER_ADDRESS: () => m,
      });
      var c = "0xda5e1988097297dcdc1f90d4dfe7909e847cbef6",
        u = "0x4f61a99e42e21ea3c3eaf9b1b30fb80a7900d3ce",
        h = "WLFI",
        v = 18,
        m = "0x74b4f6a2e579d730aacb9dd23cfbbaeb95029583",
        w = "0x8d0d000ee44948fc98c9b98a4fa4921476f08b0d",
        g = "0x111111d2bf19e43c34263401e0cad979ed1cdb61",
        p = "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
        f = {};
      (0, i.V)(f, { POLLING_INTERVAL: () => E });
      var E = 6e4,
        b = {};
      (0, i.V)(b, { statement: () => y });
      var y = "Sign in with Ethereum to World Liberty Financial",
        A = {};
      (0, i.V)(A, {
        BNB_ADDRESS: () => x,
        ETHEREUM_ADDRESS: () => P,
        PLUME_ADDRESS: () => T,
        SYMBOL: () => I,
        TRON_ADDRESS: () => _,
      });
      var P = w,
        x = w,
        T = g,
        _ = "TPFqcBAaaUMCSVRCqPaQ9QnzKhmuoLR6Rc",
        I = "USD1",
        C = "static.worldlibertyfinancial.com";
    },
    17680: (e, t, r) => {
      "use strict";
      r.d(t, { Toaster: () => u, o: () => v });
      var i = r(54568),
        n = r(68309),
        s = r(51874),
        a = r(40615),
        o = r(47227),
        l = r(4451),
        d = r(10042);
      let c = {
          error: (0, i.jsx)(a.A, {
            icon: l.A.circleAlert,
            variant: "destructive",
          }),
          info: (0, i.jsx)(a.A, { icon: l.A.info, variant: "default" }),
          success: (0, i.jsx)(a.A, {
            icon: l.A.checkCircle,
            variant: "success",
          }),
          warning: (0, i.jsx)(a.A, {
            icon: l.A.circleAlert,
            variant: "warning",
          }),
        },
        u = (e) => {
          let { ...t } = e,
            { theme: r = "system" } = (0, n.D)();
          return (0, i.jsx)(s.l$, { theme: r, ...t });
        };
      function h(e) {
        let { title: t, description: r, variant: n, id: a, action: u } = e;
        return (0, i.jsxs)("div", {
          className:
            "tw-relative tw-flex tw-min-w-72 tw-gap-2 tw-rounded-lg tw-border tw-border-border tw-bg-alpha-white/90 tw-py-4 tw-pl-2 tw-pr-4 tw-backdrop-blur-lg",
          "data-pw": d.l.TOASTER,
          children: [
            (0, i.jsx)("div", {
              className: "-tw-translate-y-1",
              children: c[n],
            }),
            (0, i.jsxs)("div", {
              className: "tw-flex tw-flex-1 tw-items-start tw-gap-2",
              children: [
                (0, i.jsxs)("div", {
                  className:
                    "tw-mt-1 tw-flex tw-flex-1 tw-flex-col tw-items-start tw-gap-3",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "tw-flex tw-flex-col tw-gap-1",
                      children: [
                        (0, i.jsx)("p", {
                          className:
                            "tw-text-sm tw-font-semibold tw-text-primary",
                          children: t,
                        }),
                        r &&
                          (0, i.jsxs)("p", {
                            className: "tw-text-sm tw-text-secondary",
                            children: [" ", r, " "],
                          }),
                      ],
                    }),
                    u &&
                      (0, i.jsx)(o.Button, {
                        onClick: () => {
                          var e;
                          null == (e = u.onClick) || e.call(u), s.oR.dismiss(a);
                        },
                        size: "fit",
                        variant: "link-secondary",
                        children: u.label,
                      }),
                  ],
                }),
                (0, i.jsxs)(o.Button, {
                  autoFocus: !1,
                  className: "!tw-size-6 tw-p-0.5",
                  onClick: () => s.oR.dismiss(a),
                  size: "icon-sm",
                  variant: "close",
                  children: [
                    (0, i.jsx)(l.A.x, {
                      className: "tw-aspect-square tw-size-5",
                    }),
                    (0, i.jsx)("span", {
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
      let v = (e) => {
        let { toastConfig: t, toastOptions: r } = e;
        return s.oR.custom((e) => (0, i.jsx)(h, { id: e, ...t }), r);
      };
    },
    21668: (e, t, r) => {
      "use strict";
      r.d(t, {
        r9: () => w,
        v4: () => f,
        G2: () => y,
        A7: () => x,
        c1: () => I,
        xo: () => g,
        LT: () => E,
        qu: () => A,
        wv: () => T,
        c3: () => C,
      });
      var i = r(36332),
        n = r(51613),
        s = r(46751),
        a = r(91478),
        o = class {
          async getPoolService(e) {
            let t = this.getProvider(e.chainId);
            return new (
              await Promise.all([
                r.e(1659),
                r.e(5505),
                r.e(1059),
                r.e(2341),
                r.e(1447),
                r.e(2491),
              ]).then(r.bind(r, 91447))
            ).PoolBundle(t, {
              L2_ENCODER: e.addresses.L2_ENCODER,
              POOL: e.addresses.LENDING_POOL,
              WETH_GATEWAY: e.addresses.WETH_GATEWAY,
            });
          }
          async getPoolApprovedAmount(e, t, r) {
            return (
              await this.getPoolService(e)
            ).supplyTxBuilder.getApprovedAmount({ token: r, user: t });
          }
          constructor(e) {
            this.getProvider = e;
          }
        },
        l = class {
          async getService(e) {
            var t;
            let i =
              null != (t = this.tokenWrapperService[this.chainId]) ? t : {};
            return (
              i[e] ||
                (i[e] = new (
                  await Promise.all([
                    r.e(1659),
                    r.e(5505),
                    r.e(1059),
                    r.e(2341),
                    r.e(1447),
                    r.e(2491),
                  ]).then(r.bind(r, 91447))
                ).TokenWrapperService(this.provider, e)),
              (this.tokenWrapperService[this.chainId] = i),
              i[e]
            );
          }
          async getTokenInForTokenOut(e, t) {
            return (await this.getService(t)).getTokenInForTokenOut(e);
          }
          async getTokenOutForTokenIn(e, t) {
            return (await this.getService(t)).getTokenOutForTokenIn(e);
          }
          async supplyWrappedToken(e, t, r) {
            return (await this.getService(t)).supplyToken(e, r, "0");
          }
          async supplyWrappedTokenWithPermit(e, t, r, i, n) {
            return (await this.getService(t)).supplyTokenWithPermit({
              amount: e,
              deadline: i,
              onBehalfOf: r,
              referralCode: "0",
              signature: n,
            });
          }
          async withdrawWrappedToken(e, t, r) {
            return (await this.getService(t)).withdrawToken(e, r);
          }
          async withdrawWrappedTokenWithPermit(e, t, r, i, n) {
            return (await this.getService(t)).withdrawTokenWithPermit(
              e,
              r,
              i,
              n
            );
          }
          constructor(e, t) {
            (this.tokenWrapperService = {}),
              (this.chainId = e),
              (this.provider = t);
          }
        },
        d = class {
          getUiIncentiveDataProvider(e) {
            let t = this.getProvider(e.chainId);
            if (!e.addresses.UI_INCENTIVE_DATA_PROVIDER)
              throw Error(
                "No UI incentive data provider address found for this market"
              );
            return new i.H({
              chainId: e.chainId,
              provider: t,
              uiIncentiveDataProviderAddress:
                e.addresses.UI_INCENTIVE_DATA_PROVIDER,
            });
          }
          async getReservesIncentivesDataHumanized(e) {
            var t;
            return (null == (t = e.enabledFeatures) ? void 0 : t.incentives)
              ? this.getUiIncentiveDataProvider(
                  e
                ).getReservesIncentivesDataHumanized({
                  lendingPoolAddressProvider:
                    e.addresses.LENDING_POOL_ADDRESS_PROVIDER,
                })
              : [];
          }
          async getUserReservesIncentivesData(e, t) {
            var r;
            return (null == (r = e.enabledFeatures) ? void 0 : r.incentives)
              ? this.getUiIncentiveDataProvider(
                  e
                ).getUserReservesIncentivesDataHumanized({
                  lendingPoolAddressProvider:
                    e.addresses.LENDING_POOL_ADDRESS_PROVIDER,
                  user: t,
                })
              : [];
          }
          constructor(e) {
            this.getProvider = e;
          }
        },
        c = class {
          getUiPoolDataService(e) {
            let t = this.getProvider(e.chainId);
            return this.ENABLE_TESTNET
              ? new n.h({
                  chainId: e.chainId,
                  provider: t,
                  uiPoolDataProviderAddress: e.addresses.UI_POOL_DATA_PROVIDER,
                })
              : new s.e({
                  chainId: e.chainId,
                  provider: t,
                  uiPoolDataProviderAddress: e.addresses.UI_POOL_DATA_PROVIDER,
                });
          }
          async getReservesHumanized(e) {
            return this.getUiPoolDataService(e).getReservesHumanized({
              lendingPoolAddressProvider:
                e.addresses.LENDING_POOL_ADDRESS_PROVIDER,
            });
          }
          async getUserReservesHumanized(e, t) {
            return this.getUiPoolDataService(e).getUserReservesHumanized({
              lendingPoolAddressProvider:
                e.addresses.LENDING_POOL_ADDRESS_PROVIDER,
              user: t,
            });
          }
          async getEModesHumanized(e) {
            return this.getUiPoolDataService(e).getEModesHumanized({
              lendingPoolAddressProvider:
                e.addresses.LENDING_POOL_ADDRESS_PROVIDER,
            });
          }
          constructor(e, t) {
            (this.getProvider = e), (this.ENABLE_TESTNET = t);
          }
        },
        u = class {
          getWalletBalanceService(e, t) {
            let r = this.getProvider(e);
            return new a.F({ provider: r, walletBalanceProviderAddress: t });
          }
          async getPoolTokensBalances(e, t) {
            let r = this.getWalletBalanceService(
                e.chainId,
                e.addresses.WALLET_BALANCE_PROVIDER
              ),
              { 0: i, 1: n } =
                await r.getUserWalletBalancesForLendingPoolProvider(
                  t,
                  e.addresses.LENDING_POOL_ADDRESS_PROVIDER
                );
            return i.map((e, t) => ({
              address: e.toLowerCase(),
              amount: n[t].toString(),
            }));
          }
          constructor(e) {
            this.getProvider = e;
          }
        },
        h = r(7620),
        v = r(54568),
        m = h.createContext(void 0),
        w = (e) => {
          let { children: t, getProvider: r } = e,
            i = new o(r);
          return (0, v.jsx)(m.Provider, { value: i, children: t });
        },
        g = () => {
          let e = h.useContext(m);
          if (void 0 === e)
            throw Error(
              "usePoolApprovedAmount must be used within a PoolApprovedAmountProvider"
            );
          return e;
        },
        p = h.createContext(void 0),
        f = (e) => {
          let { children: t, getProvider: r } = e,
            i = new u(r);
          return (0, v.jsx)(p.Provider, { value: i, children: t });
        },
        E = () => {
          let e = h.useContext(p);
          if (void 0 === e)
            throw Error(
              "useWalletBalance must be used within a WalletBalanceProvider"
            );
          return e;
        },
        b = h.createContext(void 0),
        y = (e) => {
          let { children: t, chainId: r, getProvider: i } = e,
            n = new l(r, i(r));
          return (0, v.jsx)(b.Provider, { value: n, children: t });
        },
        A = () => {
          let e = h.useContext(b);
          if (void 0 === e)
            throw Error(
              "useTokenWrapper must be used within a TokenWrapperProvider"
            );
          return e;
        },
        P = h.createContext(void 0),
        x = (e) => {
          let { children: t, getProvider: r } = e,
            i = new d(r);
          return (0, v.jsx)(P.Provider, { value: i, children: t });
        },
        T = () => {
          let e = h.useContext(P);
          if (void 0 === e)
            throw Error(
              "useUiIncentives must be used within a UiIncentivesProvider"
            );
          return e;
        },
        _ = h.createContext(void 0),
        I = (e) => {
          let { children: t, enableTestnet: r, getProvider: i } = e,
            n = new c(i, r);
          return (0, v.jsx)(_.Provider, { value: n, children: t });
        },
        C = () => {
          let e = h.useContext(_);
          if (void 0 === e)
            throw Error("useUiPool must be used within a UiPoolProvider");
          return e;
        };
    },
    21946: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => U });
      var i = r(50631),
        n = r(3233),
        s = r(89601),
        a = r(9720),
        o = r(68267),
        l = r(77364),
        d = r(33533),
        c = r(78158),
        u = r(75673),
        h = r(90384),
        v = r(34252),
        m = r(29528),
        w = r(33782),
        g = r(32179),
        p = r(95634),
        f = r(64627),
        E = r(13432),
        b = r(79536),
        y = Object.defineProperty,
        A = (e, t) => {
          for (var r in t) y(e, r, { get: t[r], enumerable: !0 });
        },
        P = {};
      A(P, { getChainIds: () => T });
      var x = [
          n.r.id,
          s.N.id,
          a.E.id,
          o.n.id,
          l.m.id,
          d.D.id,
          c.E.id,
          u.R.id,
          h._.id,
        ],
        T = (e) =>
          e === i.Ld.production
            ? x
            : [...x, v.G.id, m.C.id, w.Y.id, g.Z.id, p.i.id],
        _ = {};
      A(_, {
        inquiryRequestSchema: () => N,
        mintingRequestSchema: () => R,
        requestSchema: () => L,
      });
      var I = { sixty: 60, thirty: 30, thousand: 1e3, twentyFour: 24 },
        C = { maxAge: I.sixty * I.sixty * I.twentyFour * I.thirty },
        D = { base: I, cdn: "https://".concat(E.w4), jwt: C },
        S = f.Ay$.object({
          email: f.Ay$.email({ error: "Invalid email" }),
          firstName: f.Ay$.string().min(1, { error: "First name is required" }),
          lastName: f.Ay$.string().min(1, { error: "Last name is required" }),
          message: f.Ay$.string({ error: "Message field cannot be empty" })
            .min(1, { error: "Message is required" })
            .max(D.base.thousand, {
              error: "Message must be less than 1000 characters",
            }),
          reason: f.Ay$.string({ error: "Reason field cannot be empty" }).min(
            1,
            { error: "Reason is required" }
          ),
          source: f.Ay$.string().optional(),
          topic: f.Ay$.string(),
        }),
        N = S.extend({ topic: f.Ay$.literal("inquiry") }),
        R = S.extend({
          company: f.Ay$.string().min(1, {
            error: "Company field cannot be empty",
          }),
          country: f.Ay$.string().min(1, {
            error: "Country field cannot be empty",
          }),
          title: f.Ay$.string().min(1, {
            error: "Job title field cannot be empty",
          }),
          topic: f.Ay$.literal("minting"),
        }),
        L = { inquiry: N, minting: R },
        k = {};
      A(k, { requestSchema: () => O });
      var O = b.Ik({
          email: b.Yj().email({ message: "Invalid email" }),
          message: b
            .Yj()
            .min(1, { message: "Message is required" })
            .max(D.base.thousand, {
              message: "Message must be less than 1000 characters",
            }),
        }),
        U = { chains: { supported: P }, zod: { contact: _, feedback: k } };
    },
    30451: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => u, O: () => h });
      var i = r(54568),
        n = r(7620),
        s = r(46752),
        a = r(62491),
        o = r(55206),
        l = r(8332);
      class d {
        getERC20Service(e, t) {
          let r = this.getProvider(e);
          return new o.Contract(t, l.xw, r);
        }
        getDetailedERC20Service(e) {
          let t = this.getProvider(e);
          return new a.u(t);
        }
        async getBalance(e, t, r) {
          let i = this.getERC20Service(r, e);
          return {
            balance: await i.balanceOf(t),
            decimals: await i.decimals(),
          };
        }
        async getTokenInfo(e, t) {
          return this.getDetailedERC20Service(t).getTokenData(e);
        }
        constructor(e) {
          this.getProvider = e;
        }
      }
      let c = n.createContext(void 0),
        u = (e) => {
          let { children: t } = e,
            r = new d(s.sO);
          return (0, i.jsx)(c, { value: r, children: t });
        },
        h = () => {
          let e = n.useContext(c);
          if (void 0 === e)
            throw Error("useERC20 must be used within an ERC20Provider");
          return e;
        };
    },
    32305: (e, t, r) => {
      "use strict";
      r.d(t, { C: () => C });
      var i = r(54568),
        n = r(13432),
        s = r(4451),
        a = r(11985),
        o = r(29768);
      let l = "World Liberty Financial",
        d = "Where DeFi Meets TradFi",
        c =
          "Bridging legacy finance and the open economy with purpose-built, on-chain products.",
        u = a.h.NEXT_PUBLIC_BASE_URL,
        h = "https://".concat(n.w4, "/images/world-liberty-financial-logo.jpg"),
        v = "https://".concat(
          n.w4,
          "/images/open-graph/world-liberty-financial.jpg"
        ),
        m = "https://".concat(n.w4, "/images/open-graph"),
        w = "https://".concat(n.w4, "/docs/gold-paper.pdf"),
        g = "".concat(l, " -"),
        p = (e) => "".concat(u).concat(e),
        f = (e) => "".concat(g, " ").concat(e),
        E = (e) => "".concat(m).concat(e, ".jpg"),
        b = {
          about: "/about",
          brand: "/brand",
          bridge: "/bridge",
          bridgeActivity: "/bridge/activity",
          bridgeActivityItem: (e) => "/bridge/activity/".concat(e),
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
        y = {
          [b.about]: {
            description:
              "Learn about our bold vision, key team members, and global partners working to revolutionize finance at World Liberty Financial.",
            get ogTitle() {
              return f(this.title);
            },
            title: "Team, Vision & Mission",
            url: p(b.about),
          },
          [b.brand]: {
            description:
              "Explore our brand assets, including logos, colors, and fonts, to help you create a consistent and recognizable presence for World Liberty Financial.",
            get ogTitle() {
              return f(this.title);
            },
            title: "Visual Identity Guide",
            url: p(b.brand),
          },
          [b.bridge]: {
            description:
              "Easily bridge USD1 between Ethereum, BNB Chain, and other supported networks. Fast, secure, and powered by Chainlink CCIP.",
            get ogTitle() {
              return f(this.title);
            },
            ogUrl: E(b.bridge),
            title: "Bridge USD1 Across Chains",
            url: p(b.bridge),
          },
          [b.bridgeActivity]: {
            description:
              "Monitor your USD1 bridge transactions across Ethereum, BNB Chain, and more. View real-time status updates for each transfer.",
            get ogTitle() {
              return f(this.title);
            },
            ogUrl: E(b.bridge),
            title: "Bridge Transaction History",
            url: p(b.bridgeActivity),
          },
          [b.contact]: {
            description:
              "Reach out to World Liberty Financial for support, product inquiries or partnership opportunities.",
            get ogTitle() {
              return f(this.title);
            },
            title: "Support & Partnerships",
            url: p(b.contact),
          },
          [b.governance]: {
            description:
              "World Liberty Financial seeks to ensure trust and transparency through a robust governance system with token-holder voting, proposals, and active ecosystem participation.",
            get ogTitle() {
              return f(this.title);
            },
            ogUrl: E(b.governance),
            title: "Shape the Future with our Governance Process",
            url: p(b.governance),
          },
          [b.home]: {
            description: c,
            get ogTitle() {
              return f(this.title);
            },
            ogUrl: E("/world-liberty-financial"),
            title: d,
            url: p(b.home),
          },
          [b.privacy]: {
            description:
              "Discover how World Liberty Financial protects your data and seeks to ensure compliance with relevant privacy standards.",
            get ogTitle() {
              return f(this.title);
            },
            title: "How We Protect Your Data",
            url: p(b.privacy),
          },
          [b.providers]: {
            description:
              "Find trusted partners to get USD1, including exchanges, wallets, and DeFi apps. Explore all the official providers in one place.",
            get ogTitle() {
              return f(this.title);
            },
            ogUrl: E(b.providers),
            title: "Trusted USD1 Providers",
            url: p(b.providers),
          },
          [b.terms]: {
            description:
              "Learn the terms that govern your access to World Liberty Financial.",
            get ogTitle() {
              return f(this.title);
            },
            title: "Terms & Conditions",
            url: p(b.terms),
          },
          [b.unlock]: {
            description:
              "Easily unlock your WLFI tokens with our Unlock feature. View schedules, track progress, and claim your tokens.",
            get ogTitle() {
              return f(this.title);
            },
            ogUrl: E(b.unlock),
            title: "Easily unlock your WLFI tokens",
            url: p(b.unlock),
          },
          [b.usd1]: {
            description:
              "USD1 is the US Dollar stablecoin upgraded for a new era of finance — stable, secure, and transparent by design.",
            get ogTitle() {
              return f(this.title);
            },
            ogUrl: E(b.usd1),
            title: "Meet USD1",
            url: p(b.usd1),
          },
          [b.usd1RiskDisclosures]: {
            description:
              "Learn about and understand the potential risks associated with using USD1.",
            get ogTitle() {
              return f(this.title);
            },
            title: "USD1 Risk Disclosures",
            url: p(b.usd1RiskDisclosures),
          },
          [b.wlfiRiskDisclosures]: {
            description:
              "Learn about and understand the potential risks associated with using WLFI.",
            get ogTitle() {
              return f(this.title);
            },
            title: "WLFI Risk Disclosures",
            url: p(b.wlfiRiskDisclosures),
          },
          [b.wlfiTerms]: {
            description:
              "Before interacting with WLFI tokens, understand their utility, limitations, and associated risks.",
            get ogTitle() {
              return f(this.title);
            },
            title: "Use and Acquisition Terms & Conditions",
            url: p(b.wlfiTerms),
          },
        },
        A = [
          {
            href: "https://x.com/worldlibertyfi",
            icon: (e) =>
              (0, i.jsx)(s.A.twitter, {
                className: (0, o.cn)("tw-size-5 tw-text-foreground-quinary", e),
              }),
            title: "X/Twitter",
          },
          {
            href: "https://t.me/defiant1s",
            icon: (e) =>
              (0, i.jsx)(s.A.telegram, {
                className: (0, o.cn)("tw-size-5 tw-text-foreground-quinary", e),
              }),
            title: "Telegram",
          },
          {
            href: "https://www.linkedin.com/company/worldlibertyfi/",
            icon: (e) =>
              (0, i.jsx)(s.A.linkedin, {
                className: (0, o.cn)("tw-size-5 tw-text-foreground-quinary", e),
              }),
            title: "LinkedIn",
          },
        ],
        P = [
          { external: !1, href: b.usd1, title: "Overview" },
          { external: !1, href: b.providers, title: "Providers" },
          { external: !1, href: b.bridge, isVisible: !0, title: "Bridge" },
          { external: !1, href: void 0, isVisible: !0, title: "Exchange" },
        ],
        x = [
          { external: !1, href: void 0, isVisible: !0, title: "WLFI App" },
          { external: !1, href: void 0, isVisible: !0, title: "Lend & Borrow" },
        ],
        T = [
          { external: !1, href: b.about, title: "About" },
          { external: !1, href: b.brand, title: "Brand Assets" },
          { external: !1, href: b.contact, title: "Contact us" },
        ],
        _ = [
          { external: !1, href: b.unlock, title: "Unlock $WLFI" },
          { external: !1, title: "Trade $WLFI" },
          { external: !1, href: b.governance, title: "$WLFI Governance" },
        ],
        I = [
          { external: !1, href: b.privacy, title: "Privacy Policy" },
          {
            external: !1,
            href: "".concat(b.privacy, "#california-privacy-rights"),
            title: "California Privacy Notice",
          },
          { external: !1, href: b.terms, title: "Terms of Service" },
          {
            external: !1,
            href: b.wlfiTerms,
            title: "WLFI Token Use and Acquisition T&Cs",
          },
          {
            external: !1,
            href: b.wlfiRiskDisclosures,
            title: "WLFI Risk Disclosures",
          },
          {
            external: !1,
            href: b.usd1RiskDisclosures,
            title: "USD1 Risk Disclosures",
          },
        ],
        C = {
          applicationName: "".concat(g, " ").concat(d),
          apps: x,
          authors: [{ name: l, url: "https://worldlibertyfiancial.com" }],
          cdn: "https://".concat(n.w4),
          company: T,
          description: c,
          footerNav: [
            { routes: P, title: "USD1" },
            { routes: x, title: "Apps & Protocols" },
            { routes: _, title: "WLFI" },
            { routes: T, title: "Company" },
            { routes: I, title: "Legal" },
          ],
          generator: "Next.js",
          goldPaper: w,
          governanceMail: "governance@worldlibertyfinancial.com",
          infoMail: "info@worldlibertyfinancial.com",
          keywords: "",
          legal: I,
          logo: h,
          mail: "support@worldlibertyfinancial.com",
          mainNav: [
            {
              groups: [
                { groupTitle: "USD1", routes: P },
                { groupTitle: "Apps & protocols", routes: x },
              ],
              title: "Products",
            },
            { routes: _, title: "WLFI" },
            { routes: T, title: "Company" },
          ],
          manifest: "/manifest.json",
          name: "".concat(g, " ").concat(d),
          nameLiteral: l,
          nameTemplate: g,
          ogImage: v,
          ogPath: m,
          openGraph: {
            countryName: "United States",
            description: c,
            images: {
              alt: "".concat(g, " ").concat(d),
              height: 630,
              type: "image/jpeg",
              url: v,
              width: 1200,
            },
            locale: "en_US",
            siteName: l,
            title: "".concat(g, " ").concat(d),
            type: "website",
            url: u,
          },
          privacyMail: "privacy@worldlibertyfinancial.com",
          routes: b,
          routesMetadata: y,
          socials: A,
          title: d,
          twitter: {
            card: "summary_large_image",
            description: c,
            images: [v],
            site: "@worldlibertyfi",
            title: "".concat(g, " ").concat(d),
          },
          url: u,
          usd1: P,
          wlfi: _,
        };
    },
    33370: (e, t, r) => {
      "use strict";
      r.d(t, { BF: () => s, Xw: () => d, jm: () => l });
      var i = r(54568),
        n = r(7620),
        s = (function (e) {
          return (
            (e.Slow = "slow"),
            (e.Normal = "normal"),
            (e.Fast = "fast"),
            (e.Custom = "custom"),
            e
          );
        })({});
      let a = n.createContext(void 0);
      function o(e, t) {
        switch (t.type) {
          case "setGasOption":
            return { customGas: e.customGas, gasOption: t.value };
          case "setCustomGasOption":
            return { customGas: t.value, gasOption: "custom" };
          default:
            throw Error("Unhandled action type: ".concat(t));
        }
      }
      let l = (e) => {
        let { children: t } = e,
          [r, s] = n.useReducer(o, { customGas: "100", gasOption: "fast" });
        return (0, i.jsx)(a, { value: { dispatch: s, state: r }, children: t });
      };
      function d() {
        let e = n.useContext(a);
        if (void 0 === e)
          throw Error("useGasStation must be used within a GasStationProvider");
        return e;
      }
    },
    37570: (e, t, r) => {
      "use strict";
      r.d(t, { MediaAnchor: () => d, Q: () => c });
      var i = r(60844),
        n = r(7620),
        s = r(80023),
        a = r(79924);
      let o = (0, a.eU)({
          isDesktop: !1,
          isDesktopLarge: !1,
          isMobile: !1,
          isMobileSmall: !1,
          isTablet: !1,
        }),
        l = (0, a.eU)(
          (e) => e(o),
          (e, t, r) => {
            t(o, r);
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
        c = () => (0, i.md)(l);
    },
    40615: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => l });
      var i = r(54568),
        n = r(4451),
        s = r(29768);
      let a = {
          default: "tw-border-foreground-secondary/10",
          destructive: "tw-border-error-foreground/10",
          success: "tw-border-success-foreground/10",
          warning: "tw-border-warning-foreground/10",
        },
        o = {
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
        return (0, i.jsx)("div", {
          className: (0, s.cn)(
            "tw-w-fit tw-rounded-full tw-border-2 tw-p-1",
            a[t || "default"],
            l
          ),
          children: (0, i.jsx)(r, {
            className: (0, s.cn)(
              "tw-size-8 tw-rounded-full tw-border-2 tw-p-1",
              o[t || "default"],
              d
            ),
          }),
        });
      }
    },
    42847: (e, t, r) => {
      "use strict";
      r.d(t, { FH: () => d, sr: () => u });
      var i = r(54568),
        n = r(87606),
        s = r(37611),
        a = r(54530),
        o = r(90438),
        l = r(11985);
      BigInt.prototype.toJSON = function () {
        return this.toString();
      };
      let d = (0, a.pY)(),
        c = d.createClient({
          links: [
            (0, s.$H)({
              enabled: (e) =>
                "down" === e.direction && e.result instanceof Error,
            }),
            (0, s.Lb)({
              fetch: async (e, t) => fetch(e, { ...t, credentials: "include" }),
              headers: () => {
                let e = new Headers();
                return (
                  e.set("x-trpc-source", "nextjs-react"),
                  (l.h.NEXT_PUBLIC_STAGE === l.L.development ||
                    l.h.NEXT_PUBLIC_STAGE === l.L.uat) &&
                    e.set("x-api-key", l.h.NEXT_PUBLIC_1),
                  e
                );
              },
              transformer: o.Ay,
              url: l.h.NEXT_PUBLIC_2,
            }),
          ],
        });
      function u(e) {
        let t = (0, n.jE)();
        return (0, i.jsx)(d.Provider, {
          client: c,
          queryClient: t,
          children: e.children,
        });
      }
    },
    45423: () => {},
    46752: (e, t, r) => {
      "use strict";
      r.d(t, {
        _N: () => M,
        r_: () => V,
        pq: () => z,
        P6: () => G,
        z4: () => q,
        Kn: () => W,
        Oq: () => K,
        RY: () => X,
        sO: () => J,
        or: () => $,
        _C: () => U,
        km: () => L,
      });
      var i,
        n,
        s,
        a,
        o,
        l,
        d,
        c,
        u,
        h,
        v,
        m,
        w = r(75597),
        g = r(21946),
        p = r(50631),
        f = r(3233),
        E = r(89601),
        b = r(9720),
        y = r(68267),
        A = r(77364),
        P = r(33533),
        x = r(78158),
        T = r(75673),
        _ = r(90384),
        I = r(11985),
        C = r(27570),
        D = r(33210);
      async function S(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      class N extends C.DJ {
        async fallForwardRotation() {
          let e = Date.now() - this.firstRotationTimestamp;
          e < this.fallForwardDelay &&
            (await S(this.fallForwardDelay - e),
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
            i = await Promise.all(
              this.providers.map(async (e) => e.getNetwork())
            );
          for (let n of (i.length ||
            D.logger.throwArgumentError("no networks provided", "networks", i),
          i)) {
            if (!e) {
              e = n;
              continue;
            }
            (e.name.toLowerCase() !== n.name.toLowerCase() ||
              e.chainId !== n.chainId ||
              (null == (t = e.ensAddress) ? void 0 : t.toLowerCase()) !==
                (null == (r = n.ensAddress) ? void 0 : r.toLowerCase())) &&
              D.logger.throwArgumentError("provider mismatch", "networks", i);
          }
          return (
            e ||
              D.logger.throwArgumentError("no networks defined", "networks", i),
            e
          );
        }
        async send(e, t) {
          let r = this.currentProviderIndex;
          try {
            return await this.providers[r].send(e, t);
          } catch (i) {
            return await this.rotateUrl(r), this.send(e, t);
          }
        }
        async perform(e, t) {
          let r = this.currentProviderIndex;
          try {
            return await this.providers[r].perform(e, t);
          } catch (i) {
            return (
              i instanceof Error && (this.lastError = i.message),
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
            (this.providers = e.map((e) => new w.B(e, t))),
            (this.maxRetries = (null == r ? void 0 : r.maxRetries) || 1),
            (this.fallForwardDelay =
              (null == r ? void 0 : r.fallForwardDelay) || 6e4);
        }
      }
      let R = "/images/networks",
        L = (0, p.i8)(R, I.h.NEXT_PUBLIC_ONE_RPC_API_KEY),
        k = (0, p.PK)(R, I.h.NEXT_PUBLIC_ONE_RPC_API_KEY),
        O = [
          f.r.id,
          E.N.id,
          b.E.id,
          y.n.id,
          A.m.id,
          P.D.id,
          x.E.id,
          T.R.id,
          _._.id,
        ],
        U =
          I.h.NEXT_PUBLIC_STAGE === I.L.production
            ? Object.fromEntries(
                Object.entries(k).filter((e) => {
                  let [t] = e;
                  return O.includes(Number(t));
                })
              )
            : k,
        j = { ...(I.h.NEXT_PUBLIC_STAGE === I.L.production ? {} : L), ...U },
        B = Object.keys(j)
          .map((e) => Number(e))
          .sort((e, t) => e - t),
        F = g.A.chains.supported
          .getChainIds(I.h.NEXT_PUBLIC_STAGE)
          .sort((e, t) => e - t);
      if (B.length !== F.length)
        throw Error("Defined chains and supported chains length mismatch");
      for (let e = 0; e < B.length; e++)
        if (B[e] !== F[e])
          throw Error("Defined chains and supported chains mismatch");
      let W = I.h.NEXT_PUBLIC_STAGE !== I.L.production,
        M =
          W &&
          (null == (n = r.g) || null == (i = n.window)
            ? void 0
            : i.localStorage.getItem("testnetEnabled")) === "true",
        G =
          I.h.NEXT_PUBLIC_STAGE !== I.L.production &&
          (!!I.h.NEXT_PUBLIC_FORK_URL_RPC ||
            (null == (a = r.g) || null == (s = a.window)
              ? void 0
              : s.localStorage.getItem("forkEnabled")) === "true"),
        V =
          Number(I.h.NEXT_PUBLIC_FORK_BASE_CHAIN_ID) ||
          Number(
            (null == (l = r.g) || null == (o = l.window)
              ? void 0
              : o.localStorage.getItem("forkBaseChainId")) || 1
          ),
        z =
          Number(I.h.NEXT_PUBLIC_FORK_CHAIN_ID) ||
          Number(
            (null == (c = r.g) || null == (d = c.window)
              ? void 0
              : d.localStorage.getItem("forkNetworkId")) || 3030
          ),
        q =
          I.h.NEXT_PUBLIC_FORK_URL_RPC ||
          (null == (h = r.g) || null == (u = h.window)
            ? void 0
            : u.localStorage.getItem("forkRPCUrl")) ||
          "http://127.0.0.1:8545",
        H =
          I.h.NEXT_PUBLIC_FORK_URL_WS_RPC ||
          (null == (m = r.g) || null == (v = m.window)
            ? void 0
            : v.localStorage.getItem("forkWsRPCUrl")) ||
          "ws://127.0.0.1:8545",
        $ = Object.keys(j).reduce((e, t) => {
          if (((e[t] = j[t]), G && Number(t) === V)) {
            var r;
            e[z] = {
              ...j[t],
              isFork: !0,
              name: "".concat(null == (r = j[t]) ? void 0 : r.name, " Fork"),
              privateJsonRPCUrl: q,
              privateJsonRPCWSUrl: H,
              publicJsonRPCUrl: [],
              publicJsonRPCWSUrl: "",
              underlyingChainId: V,
            };
          }
          return e;
        }, {});
      function X(e) {
        let t = $[e];
        return t
          ? {
              ...t,
              explorerLinkBuilder: ((e) => {
                let {
                  baseUrl: t,
                  addressPrefix: r = "address",
                  txPrefix: i = "tx",
                  tokenPrefix: n = "token",
                } = e;
                return (e) => {
                  let { tx: s, address: a, token: o } = e;
                  return s
                    ? "".concat(t, "/").concat(i, "/").concat(s)
                    : a
                    ? "".concat(t, "/").concat(r, "/").concat(a)
                    : o
                    ? "".concat(t, "/").concat(n, "/").concat(o)
                    : t;
                };
              })({ baseUrl: t.explorerLink }),
            }
          : { name: "unknown chainId: ".concat(e) };
      }
      let Y = {},
        J = (e) => {
          if (!Y[e]) {
            let t = X(e),
              r = [];
            if (
              (t.privateJsonRPCUrl && r.push(t.privateJsonRPCUrl),
              t.publicJsonRPCUrl.length &&
                t.publicJsonRPCUrl.map((e) => r.push(e)),
              !r.length)
            )
              throw Error("".concat(e, " has no jsonRPCUrl configured"));
            1 === r.length ? (Y[e] = new w.B(r[0], e)) : (Y[e] = new N(r, e));
          }
          return Y[e];
        },
        K = () => {
          let e = X(1);
          return new w.B(e.publicJsonRPCUrl[0], 1);
        };
    },
    52999: (e, t, r) => {
      "use strict";
      let i;
      r.d(t, { CommonProviders: () => F });
      var n = r(54568),
        s = r(30925),
        a = r(87606),
        o = r(13432),
        l = r(61773),
        d = r(68309),
        c = r(42847),
        u = r(10042);
      function h(e) {
        var t;
        let { children: r } = e,
          { theme: i } = (0, d.D)(),
          { data: s } = c.FH.config.maintenance.useQuery(void 0, {
            refetchInterval: 5 * o.P.POLLING_INTERVAL,
            refetchOnWindowFocus: !0,
          }),
          a = (() => {
            let e = window.location.hostname.split(".").at(0);
            return null != e ? e : "l";
          })();
        return null != (t = null == s ? void 0 : s[a]) && t
          ? (0, n.jsx)("section", {
              className:
                "tw-relative tw-flex tw-min-h-dvh tw-w-full tw-flex-col tw-items-center tw-justify-center tw-pb-10",
              "data-pw": u.l.MAINTENANCE.PAGE,
              children: (0, n.jsxs)("div", {
                className:
                  "tw-container tw-relative tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-start tw-px-4",
                children: [
                  (0, n.jsx)(l.default, {
                    alt: "404",
                    "data-pw": u.l.MAINTENANCE.IMAGE,
                    height: 202,
                    src:
                      "dark" === i
                        ? "/images/maintenance.svg"
                        : "/images/maintenance-light.svg",
                    width: 518,
                  }),
                  (0, n.jsx)("p", {
                    className:
                      "tw-text-center tw-text-2xl tw-font-semibold sm:tw-text-3xl",
                    "data-pw": u.l.MAINTENANCE.TITLE,
                    children: "Under maintenance",
                  }),
                  (0, n.jsxs)("p", {
                    className:
                      "tw-mt-4 tw-text-center tw-text-sm tw-font-normal tw-tracking-normal tw-text-tertiary sm:tw-text-base",
                    children: [
                      "We're currently undergoing scheduled maintenance. ",
                      (0, n.jsx)("br", {}),
                      "We should be back soon, thank you for your patience.",
                    ],
                  }),
                ],
              }),
            })
          : r;
      }
      var v = r(11985),
        m = r(33370),
        w = r(301),
        g = r(46752),
        p = r(4061),
        f = r(30451);
      let E = (e) => {
        let { children: t } = e;
        return (0, n.jsx)(w.c1, {
          enableTestnet: g._N,
          getProvider: g.sO,
          children: (0, n.jsx)(w.v4, {
            getProvider: g.sO,
            children: (0, n.jsx)(p.V, {
              children: (0, n.jsx)(f.m, { children: t }),
            }),
          }),
        });
      };
      var b = r(60844),
        y = r(80023);
      function A(e) {
        let { children: t } = e;
        return (0, n.jsx)(b.Kq, { store: y.M, children: t });
      }
      function P(e) {
        let { children: t, ...r } = e;
        return (0, n.jsx)(d.N, { ...r, children: t });
      }
      var x = r(5823),
        T = r(10558),
        _ = r(89303),
        I = r(54280),
        C = r(71220),
        D = r(56924),
        S = r(40702),
        N = r.n(S);
      let R = (e) => {
        let { address: t, ensImage: r, size: i } = e;
        return (0, n.jsx)("span", {
          className: "tw-relative",
          children: r
            ? (0, n.jsx)(l.default, {
                alt: "Wallet Avatar",
                height: i,
                src: r,
                style: { borderRadius: i },
                unoptimized: !0,
                width: i,
              })
            : (0, n.jsx)(N(), {
                diameter: i,
                seed: (0, S.jsNumberForAddress)(null != t ? t : ""),
              }),
        });
      };
      var L = r(59237),
        k = r(86640);
      let O = {
          createMessage: (e) => {
            let { address: t, chainId: r, nonce: i } = e,
              n = {
                domain: window.location.host,
                statement: o.p4.statement,
                uri: window.location.origin,
                version: "1",
              };
            return new C.SiweMessage({
              ...n,
              address: t,
              chainId: r,
              nonce: i,
            }).prepareMessage();
          },
          getNonce: async () => {
            let e = await (0, s.Qm)();
            if (!e) throw Error();
            return e;
          },
          getSession: async () => {
            let e = await (0, s.Ht)();
            return (null == e ? void 0 : e.user)
              ? { address: e.user.address, chainId: 1 }
              : null;
          },
          signOut: async () => (await (0, s.CI)({ redirect: !1 }), !0),
          signOutOnNetworkChange: !1,
          verifyMessage: async (e) => {
            var t;
            let { message: r, signature: i } = e,
              n = await (0, s.Jv)("credentials", {
                message: JSON.stringify(r),
                redirect: !1,
                signature: i,
              });
            return null != (t = null == n ? void 0 : n.ok) && t;
          },
        },
        U = (e) => {
          let { children: t } = e,
            { theme: r } = (0, d.D)(),
            [, i] = (0, b.fp)(k.Pj);
          return (0, n.jsx)(D.x, {
            config: L.$,
            children: (0, n.jsx)(I.G_, {
              ...O,
              children: (0, n.jsx)(I.yr, {
                mode: "dark" === r ? "dark" : "light",
                onConnect: (e) => {
                  let { connectorId: t } = e;
                  return i(t);
                },
                options: { customAvatar: R },
                children: t,
              }),
            }),
          });
        };
      var j = r(84204),
        B = r(31354);
      s.uK.setConfig({ baseUrl: v.h.NEXT_PUBLIC_2, credentials: "include" });
      let F = (e) => {
        let { children: t } = e;
        return j.h
          .builder()
          .nest((e) => (0, n.jsx)(x.z, { children: e }))
          .nest((e) =>
            (0, n.jsx)(P, {
              attribute: "class",
              defaultTheme: "dark",
              disableTransitionOnChange: !0,
              enableSystem: !1,
              children: e,
            })
          )
          .nest((e) =>
            (0, n.jsx)(a.Ht, {
              client: (null != i || (i = new B.E()), i),
              children: e,
            })
          )
          .nest((e) => (0, n.jsx)(A, { children: e }))
          .nest((e) => (0, n.jsx)(c.sr, { children: e }))
          .nest((e) => (0, n.jsx)(s.CP, { children: e }))
          .nest((e) => (0, n.jsx)(U, { children: e }))
          .nest((e) => (0, n.jsx)(_.cb, { children: e }))
          .nest((e) => (0, n.jsx)(h, { children: e }))
          .nest((e) => (0, n.jsx)(E, { children: e }))
          .nest((e) => (0, n.jsx)(m.jm, { children: e }))
          .nest((e) => (0, n.jsx)(T.C$, { children: e }))
          .build(t);
      };
    },
    59237: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => x });
      var i,
        n = r(71601),
        s = r(54280),
        a = r(18718),
        o = r(87240),
        l = r(12815),
        d = r(90046),
        c = r(98766),
        u = r(85683),
        h = r(11985),
        v = r(46752),
        m = r(32305);
      let w = Object.values(v.km).map((e) => e.wagmiChain),
        g = Object.values(v._C).map((e) => e.wagmiChain),
        { name: p, baseAssetDecimals: f, baseAssetSymbol: E } = v.or[v.r_],
        b = {
          id: v.pq,
          name: "".concat(p, " Fork"),
          nativeCurrency: { decimals: f, name: E, symbol: E },
          rpcUrls: { default: { http: [v.z4] } },
          testnet: !1,
        };
      v.P6 && (g = [b, ...g]);
      let y = {
          appDescription: m.C.description,
          appIcon: m.C.logo,
          appName: m.C.name,
          appUrl: m.C.url,
          enableFamily: !1,
          walletConnectProjectId: h.h.NEXT_PUBLIC_WALLET_CONNECT_ID,
        },
        A = (0, s.Y8)({
          chains: v._N ? w : g,
          transports: Object.fromEntries(
            (v._N ? w : g).map((e) => {
              var t;
              return [
                e.id,
                (0, a.N)([
                  (0, o.L)(),
                  ...(
                    (null == (t = v.or[e.id]) ? void 0 : t.publicJsonRPCUrl) ||
                    []
                  ).map((e) =>
                    (0, o.L)(e, {
                      retryCount: 3,
                      retryDelay: 1e3,
                      timeout: 1e4,
                    })
                  ),
                  (0, l.l)(d.b, {
                    key: "injected",
                    name: "Injected",
                    retryCount: 3,
                    retryDelay: 1e3,
                  }),
                ]),
              ];
            })
          ),
          ...y,
          ssr: !0,
        }),
        P = { chains: A.chains, emitter: new n.v("") },
        x = (0, c.Z)({
          ...A,
          connectors:
            null == (i = A.connectors)
              ? void 0
              : i.map((e) =>
                  "safe" === e(P).id
                    ? (0, u.g)({
                        allowedDomains: [
                          /gnosis-safe.io$/,
                          /app.safe.global$/,
                          /dhedge.org$/,
                        ],
                      })
                    : e
                ),
        });
    },
    73139: () => {},
    80023: (e, t, r) => {
      "use strict";
      r.d(t, { M: () => i });
      let i = (0, r(79924).y$)();
    },
    84204: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => i });
      class i {
        static builder() {
          return new i();
        }
        nest(e) {
          return this.providers.unshift(e), this;
        }
        wrap(e) {
          return this.providers.push(e), this;
        }
        build(e) {
          return this.providers.reduce((e, t) => t(e), e);
        }
        constructor() {
          (this.providers = []), (this.providers = []);
        }
      }
    },
    86640: (e, t, r) => {
      "use strict";
      r.d(t, { Pj: () => s, b5: () => n, lr: () => a });
      var i = r(79924);
      let n = (0, i.eU)(""),
        s = (0, i.eU)(void 0),
        a = (0, i.eU)(!1);
    },
    87680: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => n });
      var i = r(90095);
      let n = (e) => {
        let { data: t, isFetching: r } = (0, i.v)({ address: e });
        return {
          isContractAddress: void 0 !== t && "0x" !== t && null !== t,
          isFetching: r,
        };
      };
    },
    89303: (e, t, r) => {
      "use strict";
      r.d(t, { cb: () => m, sA: () => w });
      var i = r(54568),
        n = r(30925),
        s = r(13679),
        a = r(60844),
        o = r(7620),
        l = r(40476),
        d = r(70092),
        c = r(87680),
        u = r(91912),
        h = r(86640);
      let v = o.createContext(void 0),
        m = (e) => {
          var t, r, m;
          let { children: w } = e,
            { data: g, status: p } = (0, n.wV)(),
            f = (0, l.F)(),
            E = (0, a.Xr)(h.b5),
            b = (0, a.Xr)(h.Pj),
            y = (0, a.Xr)(h.lr),
            [A] = (0, a.fp)(u.vH),
            [P, x] = o.useState(),
            [T, _] = o.useState(!1),
            I = "loading" === p,
            C = null == g || null == (t = g.user) ? void 0 : t.address,
            D = s.isAddress(P || ""),
            S = null != (m = null == C ? void 0 : C.toLowerCase()) ? m : "";
          D && P && (S = P.toLowerCase());
          let { isContractAddress: N } = (0, c.i)(S),
            { disconnect: R } = (0, d.u)();
          return (
            o.useEffect(() => {
              if ("authenticated" === p) {
                var e;
                E(null != C ? C : ""),
                  b(null == (e = f.connector) ? void 0 : e.id);
              }
            }, [p, C, null == (r = f.connector) ? void 0 : r.id, E, b]),
            o.useEffect(() => {
              A && s.isAddress(A) && ("authenticated" === p && R(), x(A));
            }, [A, p, R]),
            o.useEffect(() => {
              P && E(P);
            }, [P, E]),
            o.useEffect(() => {
              if (!C) return void y(!1);
              N && y(!0);
            }, [N, y, C]),
            (0, i.jsx)(v.Provider, {
              value: {
                currentAccount: S,
                loading: I,
                marketInitialized: T,
                readOnlyMode: D,
                readOnlyModeAddress: P,
                setMarketInitialized: _,
                setReadOnlyModeAddress: x,
                status: D ? "authenticated" : p,
              },
              children: w,
            })
          );
        },
        w = () => {
          let e = o.useContext(v);
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
        W6: () => a,
        pU: () => s,
        vH: () => o,
      });
      var i = r(25474);
      let n = {
        BRIDGE_TERMS_ACCEPTED: "bridgeTermsAccepted",
        READ_ONLY_MODE_ADDRESS: "readOnlyModeAddress",
        READ_ONLY_MODE_ENS_NAME: "readOnlyModeEnsName",
        SWAP_TERMS_ACCEPTED: "swapTermsAccepted",
        TESTNET_ENABLED: "testnetEnabled",
        TRACKING_CONSENT: "trackingConsent",
        USER_ACCEPTED_ANALYTICS: "userAcceptedAnalytics",
      };
      (0, i.tG)(n.TRACKING_CONSENT, null, void 0, { getOnInit: !0 });
      let s = (0, i.tG)(n.USER_ACCEPTED_ANALYTICS, null, void 0, {
          getOnInit: !0,
        }),
        a = (0, i.tG)(n.TESTNET_ENABLED, !1, void 0, { getOnInit: !0 }),
        o = (0, i.tG)(n.READ_ONLY_MODE_ADDRESS, void 0, void 0, {
          getOnInit: !0,
        }),
        l = (0, i.tG)(n.READ_ONLY_MODE_ENS_NAME, void 0, void 0, {
          getOnInit: !0,
        }),
        d = (0, i.tG)(n.BRIDGE_TERMS_ACCEPTED, {}, void 0, { getOnInit: !0 }),
        c = (0, i.tG)(n.SWAP_TERMS_ACCEPTED, {}, void 0, { getOnInit: !0 });
    },
    96310: (e, t, r) => {
      Promise.resolve().then(r.t.bind(r, 73139, 23)),
        Promise.resolve().then(r.bind(r, 97589)),
        Promise.resolve().then(r.bind(r, 17680)),
        Promise.resolve().then(r.bind(r, 37570)),
        Promise.resolve().then(r.bind(r, 52999)),
        Promise.resolve().then(r.t.bind(r, 99699, 23)),
        Promise.resolve().then(r.t.bind(r, 43341, 23));
    },
    97589: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => l });
      var i = r(30925),
        n = r(89295),
        s = r(54280),
        a = r(7620),
        o = r(59237);
      function l() {
        let { openSIWE: e, open: t } = (0, s.hS)(),
          r = a.useCallback(async () => {
            await (0, i.CI)({ redirect: !1 }),
              setTimeout(() => {
                t || e(!1);
              }, 500);
          }, [t, e]);
        return (
          a.useEffect(() => {
            let e = (0, n.F)(o.$, {
              onChange(e, t) {
                void 0 !== e.address &&
                  void 0 !== t.address &&
                  e.address !== t.address &&
                  r();
              },
            });
            return () => {
              e();
            };
          }, [r]),
          null
        );
      }
    },
  },
  (e) => {
    e.O(
      0,
      [
        7678, 1181, 9386, 1834, 8745, 3970, 887, 1504, 6553, 5461, 7653, 7362,
        3354, 4627, 7478, 9169, 4050, 9890, 293, 9420, 4731, 5715, 1220, 6576,
        5377, 587, 1902, 7358,
      ],
      () => e((e.s = 96310))
    ),
      (_N_E = e.O());
  },
]);
