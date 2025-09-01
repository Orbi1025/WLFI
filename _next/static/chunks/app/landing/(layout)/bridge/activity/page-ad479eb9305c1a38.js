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
      (e._sentryDebugIds[t] = "4de30038-2468-40ce-98b8-726693fccc84"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-4de30038-2468-40ce-98b8-726693fccc84"));
  })();
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [202, 6989],
  {
    2947: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 9068)),
        Promise.resolve().then(a.bind(a, 23493));
    },
    8061: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => L });
      var n = a(54568),
        s = a(30925),
        r = a(40160),
        i = a(54280),
        o = a(60844),
        l = a(61773),
        c = a(7620),
        d = a(60357),
        u = a(70092),
        p = a(40476),
        w = a(69130),
        m = a(47227),
        T = a(67876),
        N = a(4451),
        E = a(5023),
        h = a(20874),
        f = a(17680),
        b = a(56556),
        y = a(37570),
        g = a(89303),
        x = a(91912),
        _ = a(29768),
        A = a(50674),
        O = a(69224),
        S = a(34493),
        R = a(55087),
        C = a(40009),
        I = a(90554);
      let v = (e) => {
        let { account: t, wagmiAccount: a, className: p, hideAvatar: h } = e,
          [v, L] = c.useState(!1),
          [, k] = (0, d.Cj)(),
          [U] = (0, o.fp)(C.XY),
          [D] = (0, o.fp)(C.df),
          [, j] = (0, o.fp)(R.b),
          { market: P, logo: M } = (0, w.H)(U),
          B = (0, b.A)(),
          { openSwitchNetworks: W } = (0, i.hS)(),
          { disconnect: F } = (0, u.u)(),
          [, G] = (0, o.fp)(x.vH),
          { openShareWallet: H } = (0, S.k3)(),
          { setReadOnlyModeAddress: z, readOnlyModeAddress: K } = (0, g.sA)(),
          { isMobileSmall: V } = (0, y.Q)(),
          Y = D.explorerLinkBuilder({ address: t.address });
        return (0, n.jsxs)(T.rI, {
          onOpenChange: (e) => {
            L(e), j({ eventName: O.w7.WALLET_MENU, properties: { open: e } });
          },
          open: v,
          children: [
            (0, n.jsx)(T.ty, {
              asChild: !0,
              children: (0, n.jsxs)(m.Button, {
                className: (0, _.cn)(
                  "tw-min-w-[138px]",
                  p,
                  v && "tw-border-border-brand tw-outline-none",
                  V && "tw-min-w-min"
                ),
                "data-address": t.address,
                "data-pw": I.l.PRO.WALLET.CONNECTED_WALLET_BUTTON,
                size: V ? "icon-md" : "md",
                variant: "input",
                children: [
                  !h &&
                    (0, n.jsxs)("span", {
                      className: "tw-relative",
                      children: [
                        (0, n.jsx)(i.eu, { address: t.address, size: 28 }),
                        void 0 !== K &&
                          (0, n.jsx)("span", {
                            className: "tw-absolute tw-bottom-0 tw-right-0",
                            children: (0, n.jsx)(N.A.walletAlert, {
                              className: "tw-size-3.5",
                            }),
                          }),
                      ],
                    }),
                  !V &&
                    (0, n.jsx)("span", {
                      className: "tw-flex-1 tw-font-semibold",
                      children: t.displayName,
                    }),
                ],
              }),
            }),
            (0, n.jsxs)(T.SQ, {
              className:
                "tw-w-72 tw--translate-x-4 tw-bg-background tw-pb-1 lg:tw--translate-x-16",
              "data-pw": I.l.PRO.WALLET.MENU.WALLET_MENU,
              onInteractOutside: () => c.startTransition(() => L(!1)),
              children: [
                (0, n.jsxs)(T.lp, {
                  className: "tw-flex tw-items-center tw-gap-3 tw-p-3",
                  "data-address": t.address.toLowerCase(),
                  "data-pw": I.l.PRO.WALLET.MENU.WALLET_ADDRESS,
                  children: [
                    (0, n.jsx)(i.eu, { address: t.address, size: 40 }),
                    (0, n.jsxs)("span", {
                      className:
                        "tw-flex tw-items-center tw-gap-2 tw-text-sm tw-font-semibold tw-text-primary",
                      children: [
                        (0, A.$)(t.address),
                        (0, n.jsx)(N.A.copy, {
                          className:
                            "tw-size-5 tw-cursor-pointer tw-text-foreground-button-ghost-tertiary hover:tw-text-foreground-secondary-hover",
                          "data-pw": I.l.PRO.WALLET.MENU.COPY_ADDRESS_BUTTON,
                          onClick: () => {
                            k(t.address)
                              .then(() => {
                                j({ eventName: O.J$.COPY_ADDRESS }),
                                  (0, f.o)({
                                    toastConfig: {
                                      title: "Address copied to clipboard",
                                      variant: "success",
                                    },
                                  });
                              })
                              .catch((e) => {
                                (0, f.o)({
                                  toastConfig: {
                                    title: "Failed to copy address",
                                    variant: "error",
                                  },
                                }),
                                  r.Cp(e);
                              });
                          },
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)(T.I, {
                  className: "tw-my-1",
                  children: [
                    (0, n.jsx)(T.mB, { className: "tw--mx-3" }),
                    (0, n.jsxs)(T.I, {
                      className: "tw-flex tw-flex-col",
                      children: [
                        a.connector &&
                          (0, n.jsx)(T._2, {
                            action: (0, n.jsxs)("span", {
                              className:
                                "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-font-normal tw-text-secondary",
                              children: [
                                a.connector.icon &&
                                  (0, n.jsx)(l.default, {
                                    alt: a.connector.name,
                                    className: "tw-aspect-square tw-size-5",
                                    height: 20,
                                    src: a.connector.icon.toString().trim(),
                                    width: 20,
                                  }),
                                a.connector.name,
                              ],
                            }),
                            className:
                              "tw-cursor-default !tw-text-tertiary hover:tw-bg-transparent",
                            children: "Wallet",
                          }),
                        (0, n.jsx)(T._2, {
                          action: B
                            ? (0, n.jsxs)("span", {
                                className:
                                  "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-font-normal tw-text-secondary",
                                children: [
                                  (0, n.jsx)(l.default, {
                                    alt: P.marketTitle,
                                    height: 20,
                                    src: M,
                                    width: 20,
                                  }),
                                  P.marketTitle,
                                ],
                              })
                            : (0, n.jsxs)("span", {
                                className:
                                  "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-font-normal tw-text-error",
                                children: [
                                  (0, n.jsx)("span", {
                                    className:
                                      "tw-size-2 tw-rounded-full tw-bg-error",
                                  }),
                                  "Unsupported",
                                ],
                              }),
                          className:
                            "tw-cursor-default !tw-text-tertiary hover:tw-bg-transparent",
                          onClick: (e) => e.preventDefault(),
                          children: "Network",
                        }),
                        (0, n.jsx)(T._2, {
                          "data-pw": I.l.PRO.WALLET.SWITCH_NETWORK_BUTTON,
                          icon: N.A.arrowLeftRight,
                          onClick: () => W(),
                          children: "Switch network",
                        }),
                      ],
                    }),
                    (0, n.jsx)(T.mB, { className: "tw--mx-3" }),
                    (0, n.jsx)(T.I, {
                      className: "tw-flex tw-flex-col",
                      children: (0, n.jsx)(T._2, {
                        asChild: !0,
                        icon: N.A.box,
                        children: (0, n.jsx)(E.N, {
                          "data-pw": I.l.PRO.WALLET.MENU.EXPLORER_BUTTON,
                          href: Y,
                          onClick: () => {
                            j({
                              eventName: O.J$.VIEW_EXPLORER,
                              properties: {
                                funnel: "wallet-button-dropdown",
                                link: Y,
                              },
                            });
                          },
                          rel: "noopener noreferrer",
                          target: "_blank",
                          children: "View on Explorer",
                        }),
                      }),
                    }),
                    (0, n.jsx)(T.I, {
                      className: "tw-flex tw-flex-col",
                      children: (0, n.jsx)(T._2, {
                        "data-pw": I.l.PRO.WALLET.MENU.SHARE_BUTTON,
                        icon: N.A.share,
                        onClick: H,
                        children: "Share wallet (read-only)",
                      }),
                    }),
                    (0, n.jsx)(T.I, {
                      className: "tw-flex tw-flex-col",
                      children: (0, n.jsx)(T._2, {
                        icon: N.A.circleDollarSign,
                        onClick: () => {
                          let e =
                              (j({ eventName: O.J$.FUND_WALLET }),
                              'https://pay.coinbase.com/buy/one-click?appId=93234e00-0ab3-4f56-91ed-b58f14fa04f6&assets=["USDC","'
                                .concat(
                                  P.chain.nativeCurrency.symbol,
                                  '"]&defaultPaymentMethod=ACH_BANK_ACCOUNT&destinationWallets=[{"address":"'
                                )
                                .concat(t.address, '","blockchains":["')
                                .concat(
                                  P.chain.name.toLowerCase(),
                                  '"]}]&fiatCurrency=usd&presetFiatAmount=25&quoteId=fund-wallet-button'
                                )),
                            a = (window.innerWidth - 500) / 2,
                            n = (window.innerHeight - 600) / 2;
                          window.open(
                            e,
                            "_blank",
                            "width="
                              .concat(500, ",height=")
                              .concat(600, ",top=")
                              .concat(n, ",left=")
                              .concat(a, ",resizable=yes,scrollbars=yes")
                          );
                        },
                        children: "Top-up wallet",
                      }),
                    }),
                    (0, n.jsx)(T.mB, { className: "tw--mx-3" }),
                    (0, n.jsx)(T.I, {
                      className: "tw-flex tw-flex-col",
                      children: (0, n.jsx)(T._2, {
                        "data-pw": I.l.PRO.WALLET.DISCONNECT_WALLET_BUTTON,
                        error: !0,
                        icon: N.A.logout,
                        onClick: () => {
                          F(),
                            z(void 0),
                            G(void 0),
                            j({ eventName: O.J$.DISCONNECT_WALLET }),
                            (0, s.CI)({ redirect: !1 });
                        },
                        children: "Disconnect wallet",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      function L(e) {
        let { className: t, label: a, hideAvatar: s, skeletonClassName: r } = e,
          l = (0, p.F)(),
          { currentAccount: c, loading: d, status: u } = (0, g.sA)(),
          [, w] = (0, o.fp)(R.b),
          { readOnlyModeAddress: T } = (0, g.sA)(),
          [N] = (0, o.fp)(x.My),
          { setOpen: E, openSIWE: f } = (0, i.hS)(),
          { isMobileSmall: b } = (0, y.Q)();
        return d
          ? (0, n.jsx)(h.E, {
              className: (0, _.cn)(
                "tw-h-9 tw-w-full tw-min-w-[138px] tw-rounded-full",
                r,
                b && "tw-w-9 tw-min-w-min"
              ),
            })
          : T
          ? (0, n.jsx)(v, {
              account: {
                address: T,
                displayName: null != N ? N : (0, A.$)(T, 4, 4),
              },
              className: t,
              hideAvatar: s,
              wagmiAccount: l,
            })
          : "authenticated" !== u
          ? (0, n.jsx)(m.Button, {
              className: (0, _.cn)("", t),
              "data-pw": I.l.PRO.WALLET.CONNECT_WALLET_BUTTON,
              onClick: () => {
                l.address ? f(!1) : E(!0),
                  w({ eventName: O.J$.CONNECT_WALLET });
              },
              children: null != a ? a : "Connect wallet",
            })
          : (0, n.jsx)(i.Lw.Custom, {
              children: (e) => {
                let { ensName: a } = e;
                return (0, n.jsx)(v, {
                  account: {
                    address: c,
                    displayName: null != a ? a : (0, A.$)(c, 4, 4),
                  },
                  className: t,
                  hideAvatar: s,
                  wagmiAccount: l,
                });
              },
            });
      }
    },
    9068: (e, t, a) => {
      "use strict";
      a.d(t, { BridgeActivityContent: () => P });
      var n = a(54568),
        s = a(13432),
        r = a(60844),
        i = a(27261),
        o = a.n(i),
        l = a(25060),
        c = a(66733),
        d = a(61773),
        u = a(7620),
        p = a(20874);
      let w = () =>
        (0, n.jsxs)("div", {
          className:
            "tw-flex tw-w-full tw-items-center tw-justify-between tw-bg-transparent tw-px-4 tw-py-3",
          children: [
            (0, n.jsxs)("div", {
              className: "tw-flex tw-flex-col tw-gap-1",
              children: [
                (0, n.jsxs)("div", {
                  className: "tw-flex tw-items-center tw-gap-1",
                  children: [
                    (0, n.jsx)(p.E, { className: "tw-size-6 tw-rounded-full" }),
                    (0, n.jsx)(p.E, { className: "tw-h-5 tw-w-20" }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "tw-flex tw-items-center tw-gap-1",
                  children: [
                    (0, n.jsx)(p.E, { className: "tw-h-3 tw-w-16" }),
                    (0, n.jsx)(p.E, { className: "tw-size-3" }),
                    (0, n.jsx)(p.E, { className: "tw-h-3 tw-w-16" }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "tw-flex tw-items-center tw-gap-3",
              children: [
                (0, n.jsxs)("div", {
                  className: "tw-flex tw-flex-col tw-gap-1",
                  children: [
                    (0, n.jsx)(p.E, {
                      className: "tw-h-6 tw-w-16 tw-rounded-sm",
                    }),
                    (0, n.jsx)(p.E, { className: "tw-h-4 tw-w-12" }),
                  ],
                }),
                (0, n.jsx)(p.E, { className: "tw-size-5" }),
              ],
            }),
          ],
        });
      var m = a(32629),
        T = a(14010),
        N = a(29813),
        E = a(63850),
        h = a(64148),
        f = a(4451),
        b = a(46752),
        y = a(32305),
        g = a(68324);
      let x = [
        {
          accessorFn: (e) => e.txHash,
          accessorKey: "bridge-transaction",
          cell: function (e) {
            let { row: t } = e,
              {
                sourceChainSelector: a,
                destinationChainSelector: s,
                sequenceNumber: r,
                timestamp: i,
                txHash: p,
                sentTokenAmount: x,
                version: _,
              } = t.original,
              A = (0, T.aQ)(a),
              O = (0, T.aQ)(s),
              S = (0, g.d)(60),
              { offRamps: R, loading: C } = (0, E.i)(A, O),
              { data: I, isLoading: v } = (0, N.l)(
                a,
                O,
                r,
                _,
                null == R ? void 0 : R.map((e) => e.offRamp)
              ),
              L = y.C.routes.bridgeActivityItem(p),
              k = (0, c.formatUnits)(x, 18),
              U = (0, b.RY)(A),
              D = (0, b.RY)(O),
              j = u.useMemo(
                () =>
                  I === T.Ho.FAILURE
                    ? {
                        label: "Failed",
                        state: T.Ho.FAILURE,
                        variant: "destructive",
                      }
                    : I === T.Ho.SUCCESS
                    ? {
                        label: "Success",
                        state: T.Ho.SUCCESS,
                        variant: "success",
                      }
                    : {
                        label: "Pending",
                        state: T.Ho.UNTOUCHED,
                        variant: "warning",
                      },
                [I]
              ),
              P = u.useMemo(
                () => l.yf.unix(Math.floor(i.getTime() / 1e3)).fromNow(),
                [i, S]
              );
            return C || v
              ? (0, n.jsx)(w, {})
              : (0, n.jsxs)(o(), {
                  className:
                    "tw-flex tw-w-full tw-items-center tw-justify-between tw-bg-transparent tw-px-4 tw-py-3 tw-transition-colors tw-duration-200 hover:tw-bg-background-hover",
                  href: L,
                  children: [
                    (0, n.jsxs)("div", {
                      className: "tw-flex tw-flex-col tw-gap-1",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "tw-flex tw-items-center tw-gap-1 tw-font-semibold",
                          children: [
                            (0, n.jsx)(d.default, {
                              alt: "USD1",
                              height: 24,
                              src: "/images/common/tokens/usd1.svg",
                              width: 24,
                            }),
                            (0, n.jsx)(m.G, {
                              compact: !0,
                              value: k,
                              visibleDecimals: 2,
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "tw-flex tw-items-center tw-gap-1 tw-text-xs tw-text-tertiary",
                          children: [
                            (0, n.jsx)("span", { children: U.name }),
                            (0, n.jsx)(f.A.arrowRight, {
                              className: "tw-size-4",
                            }),
                            (0, n.jsx)("span", { children: D.name }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "tw-flex tw-items-center tw-gap-3",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "tw-flex tw-flex-col tw-items-end tw-gap-1",
                          children: [
                            (0, n.jsx)(h.E, {
                              className: "tw-size-fit",
                              radius: "sm",
                              size: "sm",
                              variant: j.variant,
                              children: j.label,
                            }),
                            (0, n.jsx)("span", {
                              className:
                                "tw-text-xs tw-font-normal tw-text-tertiary",
                              children: P,
                            }),
                          ],
                        }),
                        (0, n.jsx)(f.A.chevronRight, {
                          className:
                            "tw-size-5 tw-text-foreground-button-ghost-secondary",
                        }),
                      ],
                    }),
                  ],
                });
          },
        },
      ];
      var _ = a(26989),
        A = a(50781),
        O = a(47227),
        S = a(8061),
        R = a(47978),
        C = a(42847),
        I = a(89303),
        v = a(29768),
        L = a(26080),
        k = a(32583),
        U = a(27118);
      let D = () =>
          (0, n.jsxs)("div", {
            className:
              "tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-gap-5 tw-px-4 tw-pb-4",
            "data-pw": U.l.LANDING.BRIDGE.EMPTY_STATE,
            children: [
              (0, n.jsx)(A.A, { icon: f.A.frown }),
              (0, n.jsxs)("span", {
                className:
                  "tw-flex tw-flex-col tw-items-center tw-gap-2 tw-text-center",
                children: [
                  (0, n.jsx)("span", {
                    className: "tw-text-lg tw-font-semibold tw-text-primary",
                    children: "You have no activity",
                  }),
                  (0, n.jsx)("span", {
                    className:
                      "tw-mx-auto tw-max-w-sm tw-text-sm tw-font-normal tw-text-tertiary",
                    children:
                      "Start a new transfer to see your most recent cross chain transfer activity here.",
                  }),
                ],
              }),
              (0, n.jsx)(O.Button, {
                asChild: !0,
                className: "tw-mt-2 tw-w-full",
                "data-pw": U.l.LANDING.BRIDGE.TRANSFER_BUTTON,
                children: (0, n.jsx)(o(), {
                  href: y.C.routes.bridge,
                  children: "Start new transfer",
                }),
              }),
            ],
          }),
        j = () =>
          (0, n.jsxs)("div", {
            className:
              "tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-gap-5 tw-px-4 tw-pb-4",
            "data-pw": U.l.LANDING.BRIDGE.EMPTY_WALLET,
            children: [
              (0, n.jsx)(A.A, { icon: f.A.walletMinimal }),
              (0, n.jsxs)("span", {
                className:
                  "tw-flex tw-flex-col tw-items-center tw-gap-2 tw-text-center",
                children: [
                  (0, n.jsx)("span", {
                    className: "tw-text-lg tw-font-semibold tw-text-primary",
                    children: "Connect your wallet",
                  }),
                  (0, n.jsx)("span", {
                    className:
                      "tw-mx-auto tw-max-w-sm tw-text-sm tw-font-normal tw-text-tertiary",
                    children:
                      "Please connect your wallet in order to view your most recent cross chain transfer history.",
                  }),
                ],
              }),
              (0, n.jsx)(S.A, { className: "tw-mt-2 tw-w-full" }),
            ],
          }),
        P = () => {
          let { currentAccount: e, loading: t, status: a } = (0, I.sA)(),
            i = (0, r.Xr)(k.b),
            { data: l, isLoading: c } = C.FH.activity.bridge.slice.useQuery(
              { take: 5 },
              {
                enabled: !!e && !t && "authenticated" === a,
                refetchInterval: s.P.POLLING_INTERVAL,
              }
            ),
            d = "https://ccip.chain.link/address/".concat(e),
            u = t || c,
            m = "authenticated" === a && null != l ? l : [],
            T = m && m.length > 0;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                className: "tw-flex tw-items-center tw-justify-between tw-p-4",
                children: [
                  (0, n.jsx)("div", {
                    className: "tw-text-base tw-font-semibold",
                    children: "Activity",
                  }),
                  (0, n.jsx)(O.Button, {
                    asChild: !0,
                    className: "tw-font-semibold",
                    "data-pw": U.l.LANDING.BRIDGE.TRANSFER_BUTTON,
                    size: "fit",
                    variant: "link-tertiary",
                    children: (0, n.jsxs)(o(), {
                      className: "tw-flex tw-items-center tw-gap-1.5",
                      href: y.C.routes.bridge,
                      children: [
                        (0, n.jsx)(f.A.send, { className: "tw-size-5" }),
                        "Transfer",
                      ],
                    }),
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: (0, v.cn)(
                  "authenticated" === a &&
                    T &&
                    m.length < 5 &&
                    "tw-min-h-[350px]"
                ),
                children: (0, n.jsx)(_.bQ, {
                  columns: x,
                  data: m,
                  disableHeader: !0,
                  disableToolbar: !0,
                  display: R.q.Grid,
                  funnel: "bridge",
                  gridClassName:
                    "tw-divide-y tw-divide-border-secondary tw-border-b tw-border-border-secondary",
                  isLoading: u,
                  noResults:
                    "authenticated" === a
                      ? (0, n.jsx)(D, {})
                      : (0, n.jsx)(j, {}),
                  noResultsClassName: "tw-p-0",
                  skeleton: (0, n.jsx)(w, {}),
                  skeletonRows: 5,
                  virtualized: !1,
                }),
              }),
              (0, n.jsxs)("div", {
                className: (0, v.cn)(
                  "tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-px-4 tw-pb-4 tw-pt-2 md:tw-flex-row",
                  !T && !u && "tw-hidden"
                ),
                children: [
                  !u &&
                    "authenticated" === a &&
                    m &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(O.Button, {
                          asChild: !0,
                          className: "tw-w-full md:tw-h-10",
                          size: "md",
                          variant: "secondary",
                          children: (0, n.jsxs)(o(), {
                            className: "tw-w-full tw-gap-2",
                            href: d,
                            onClick: () => {
                              i({
                                eventName: L.zm.EXTERNAL_LINK,
                                properties: { funnel: "bridge", link: d },
                              });
                            },
                            rel: "noreferrer noopener nofollow",
                            target: "_blank",
                            children: [
                              "View all ",
                              (0, n.jsx)(f.A.externalLink, {
                                className: "tw-size-5",
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)(O.Button, {
                          asChild: !0,
                          className: "tw-w-full md:tw-h-10",
                          size: "md",
                          children: (0, n.jsx)(o(), {
                            href: y.C.routes.bridge,
                            children: "Start new transfer",
                          }),
                        }),
                      ],
                    }),
                  u &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(p.E, {
                          className: "tw-h-9 tw-w-full md:tw-h-10",
                        }),
                        (0, n.jsx)(p.E, {
                          className: "tw-h-9 tw-w-full md:tw-h-10",
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        };
    },
    10598: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"wrappedNative","type":"address"},{"internalType":"address","name":"armProxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"BadARMSignal","type":"error"},{"inputs":[],"name":"FailedToSendValue","type":"error"},{"inputs":[],"name":"InsufficientFeeTokenAmount","type":"error"},{"inputs":[],"name":"InvalidMsgValue","type":"error"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"InvalidRecipientAddress","type":"error"},{"inputs":[{"internalType":"uint64","name":"chainSelector","type":"uint64"},{"internalType":"address","name":"offRamp","type":"address"}],"name":"OffRampMismatch","type":"error"},{"inputs":[],"name":"OnlyOffRamp","type":"error"},{"inputs":[{"internalType":"uint64","name":"destChainSelector","type":"uint64"}],"name":"UnsupportedDestinationChain","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"messageId","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"indexed":false,"internalType":"address","name":"offRamp","type":"address"},{"indexed":false,"internalType":"bytes32","name":"calldataHash","type":"bytes32"}],"name":"MessageExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"indexed":false,"internalType":"address","name":"offRamp","type":"address"}],"name":"OffRampAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"indexed":false,"internalType":"address","name":"offRamp","type":"address"}],"name":"OffRampRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint64","name":"destChainSelector","type":"uint64"},{"indexed":false,"internalType":"address","name":"onRamp","type":"address"}],"name":"OnRampSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"MAX_RET_BYTES","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint64","name":"destChainSelector","type":"uint64"},{"internalType":"address","name":"onRamp","type":"address"}],"internalType":"struct Router.OnRamp[]","name":"onRampUpdates","type":"tuple[]"},{"components":[{"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"internalType":"address","name":"offRamp","type":"address"}],"internalType":"struct Router.OffRamp[]","name":"offRampRemoves","type":"tuple[]"},{"components":[{"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"internalType":"address","name":"offRamp","type":"address"}],"internalType":"struct Router.OffRamp[]","name":"offRampAdds","type":"tuple[]"}],"name":"applyRampUpdates","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"destinationChainSelector","type":"uint64"},{"components":[{"internalType":"bytes","name":"receiver","type":"bytes"},{"internalType":"bytes","name":"data","type":"bytes"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct Client.EVMTokenAmount[]","name":"tokenAmounts","type":"tuple[]"},{"internalType":"address","name":"feeToken","type":"address"},{"internalType":"bytes","name":"extraArgs","type":"bytes"}],"internalType":"struct Client.EVM2AnyMessage","name":"message","type":"tuple"}],"name":"ccipSend","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getArmProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"destinationChainSelector","type":"uint64"},{"components":[{"internalType":"bytes","name":"receiver","type":"bytes"},{"internalType":"bytes","name":"data","type":"bytes"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct Client.EVMTokenAmount[]","name":"tokenAmounts","type":"tuple[]"},{"internalType":"address","name":"feeToken","type":"address"},{"internalType":"bytes","name":"extraArgs","type":"bytes"}],"internalType":"struct Client.EVM2AnyMessage","name":"message","type":"tuple"}],"name":"getFee","outputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOffRamps","outputs":[{"components":[{"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"internalType":"address","name":"offRamp","type":"address"}],"internalType":"struct Router.OffRamp[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"destChainSelector","type":"uint64"}],"name":"getOnRamp","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"chainSelector","type":"uint64"}],"name":"getSupportedTokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWrappedNative","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"chainSelector","type":"uint64"}],"name":"isChainSupported","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"internalType":"address","name":"offRamp","type":"address"}],"name":"isOffRamp","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"messageId","type":"bytes32"},{"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"internalType":"bytes","name":"sender","type":"bytes"},{"internalType":"bytes","name":"data","type":"bytes"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct Client.EVMTokenAmount[]","name":"destTokenAmounts","type":"tuple[]"}],"internalType":"struct Client.Any2EVMMessage","name":"message","type":"tuple"},{"internalType":"uint16","name":"gasForCallExactCheck","type":"uint16"},{"internalType":"uint256","name":"gasLimit","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"routeMessage","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"retData","type":"bytes"},{"internalType":"uint256","name":"gasUsed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wrappedNative","type":"address"}],"name":"setWrappedNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"typeAndVersion","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]'
      );
    },
    14010: (e, t, a) => {
      "use strict";
      a.d(t, {
        Ax: () => _,
        Ho: () => N,
        SA: () => E,
        aQ: () => A,
        bH: () => x,
        n9: () => O,
        or: () => T,
        ry: () => C,
        y0: () => R,
        yC: () => S,
      });
      var n = a(86957),
        s = a(67582),
        r = a(60455),
        i = a(73505),
        o = a(13432),
        l = a(51452),
        c = a(3233),
        d = a(89601),
        u = a(9720),
        p = a(34252),
        w = a(33782),
        m = a(46752);
      let T = "252000";
      var N = (function (e) {
        return (
          (e[(e.UNTOUCHED = 0)] = "UNTOUCHED"),
          (e[(e.IN_PROGRESS = 1)] = "IN_PROGRESS"),
          (e[(e.SUCCESS = 2)] = "SUCCESS"),
          (e[(e.FAILURE = 3)] = "FAILURE"),
          e
        );
      })({});
      let E = ["transaction", "bridging", "complete"],
        h = {
          BRIDGE_TOKEN_ADDRESS: o.Pv.USD1_LEGACY_ADDRESS,
          BRIDGE_TOKEN_SYMBOL: o.Um.SYMBOL,
          BURN_MINT_TOKEN_POOL: "0xf9e47d3720d5142930444ae6773c7f6d05696228",
          CCIP_CHAIN_SELECTOR: "5009297550715157269",
          CCIP_ROUTER: "0x80226fc0ee2b096224eeac085bb9a8cba1146f7d",
          PRICE_FEED_ORACLE: "0xF0d9bb015Cd7BfAb877B7156146dc09Bf461370d",
        },
        f = {
          BRIDGE_TOKEN_ADDRESS: o.Pv.USD1_LEGACY_ADDRESS,
          BRIDGE_TOKEN_SYMBOL: o.Um.SYMBOL,
          BURN_MINT_TOKEN_POOL: "0xce3f7378ae409e1ce0dd6ffa70ab683326b73f04",
          CCIP_CHAIN_SELECTOR: "11344663589394136015",
          CCIP_ROUTER: "0x34B03Cb9086d7D758AC55af71584F81A598759FE",
          PRICE_FEED_ORACLE: "0xaD8b4e59A7f25B68945fAf0f3a3EAF027832FFB0",
        },
        b = {
          BRIDGE_TOKEN_ADDRESS: o.Pv.USD1_ADDRESS,
          BRIDGE_TOKEN_SYMBOL: o.Um.SYMBOL,
          BURN_MINT_TOKEN_POOL: "0x4b75fe6e4a53a510abc39c7328b0b06e74a3f624",
          CCIP_CHAIN_SELECTOR: "17912061998839310979",
          CCIP_ROUTER: "0x5C4f4622AD0EC4a47e04840db7E9EcA8354109af",
          PRICE_FEED_ORACLE: void 0,
        },
        y = [
          {
            bridgeTokenAddress: h.BRIDGE_TOKEN_ADDRESS,
            burnMintTokenPool: h.BURN_MINT_TOKEN_POOL,
            chain: c.r,
            chainSelector: h.CCIP_CHAIN_SELECTOR,
            feeTokens: [
              {
                address: l.L,
                balance: "0",
                chainId: c.r.id,
                decimals: 18,
                extensions: { isNative: !0 },
                logoURI: "https://"
                  .concat(o.w4, "/assets/tokens/ETH_")
                  .concat(c.r.id, ".svg"),
                name: "Ethereum",
                symbol: "ETH",
              },
            ],
            router: h.CCIP_ROUTER,
            sourceChainId: c.r.id,
            tokenOracle: h.PRICE_FEED_ORACLE,
            wrappedNativeOracle: n.kf.WETH.ORACLE,
          },
          {
            bridgeTokenAddress: f.BRIDGE_TOKEN_ADDRESS,
            burnMintTokenPool: f.BURN_MINT_TOKEN_POOL,
            chain: d.N,
            chainSelector: f.CCIP_CHAIN_SELECTOR,
            feeTokens: [
              {
                address: l.L,
                balance: "0",
                chainId: d.N.id,
                decimals: 18,
                extensions: { isNative: !0 },
                logoURI: "https://"
                  .concat(o.w4, "/assets/tokens/BNB_")
                  .concat(d.N.id, ".png"),
                name: "Binance Coin",
                symbol: "BNB",
              },
            ],
            router: f.CCIP_ROUTER,
            sourceChainId: d.N.id,
            tokenOracle: f.PRICE_FEED_ORACLE,
            wrappedNativeOracle: s.kf.WBNB.ORACLE,
          },
          {
            bridgeTokenAddress: b.BRIDGE_TOKEN_ADDRESS,
            burnMintTokenPool: b.BURN_MINT_TOKEN_POOL,
            chain: u.E,
            chainSelector: b.CCIP_CHAIN_SELECTOR,
            feeTokens: [
              {
                address: l.L,
                balance: "0",
                chainId: u.E.id,
                decimals: 18,
                extensions: { isNative: !0 },
                logoURI: "https://"
                  .concat(o.w4, "/assets/tokens/PLUME_")
                  .concat(u.E.id, ".svg"),
                name: "Plume",
                symbol: "PLUME",
              },
            ],
            router: b.CCIP_ROUTER,
            sourceChainId: u.E.id,
            tokenOracle: void 0,
            wrappedNativeOracle: void 0,
          },
        ],
        g = [
          {
            bridgeTokenAddress: r.kf.GHO.UNDERLYING,
            chain: p.G,
            chainSelector: "16015286601757825753",
            feeTokens: [
              {
                address: l.L,
                balance: "0",
                chainId: 0xaa36a7,
                decimals: 18,
                extensions: { isNative: !0 },
                logoURI: "https://".concat(
                  o.w4,
                  "/assets/tokens/ETH_11155111.svg"
                ),
                name: "Ethereum",
                symbol: "ETH",
              },
            ],
            lockReleaseTokenPool: "0xd8bDb685320f7118085d5C8D0c2016A644881D40",
            router: "0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59",
            sourceChainId: p.G.id,
            tokenOracle: "0x98458D6A99489F15e6eB5aFa67ACFAcf6F211051",
            wrappedNativeOracle: r.kf.WETH.ORACLE,
          },
          {
            bridgeTokenAddress: "0xb13Cfa6f8B2Eed2C37fB00fF0c1A59807C585810",
            burnMintTokenPool: "0xb4A1e95A2FA7ed83195C6c16660fCCa720163FF6",
            chain: w.Y,
            chainSelector: "3478487238524512106",
            feeTokens: [
              {
                address: l.L,
                balance: "0",
                chainId: 421614,
                decimals: 18,
                extensions: { isNative: !0 },
                logoURI: "https://".concat(
                  o.w4,
                  "/assets/tokens/ETH_421614.png"
                ),
                name: "Ethereum",
                symbol: "ETH",
              },
            ],
            router: "0x2a9C5afB0d0e4BAb2BCdaE109EC4b0c4Be15a165",
            sourceChainId: w.Y.id,
            tokenOracle: "0x1f885520b7BD528E46b390040F12E753Dce43004",
            wrappedNativeOracle: i.kf.WETH.ORACLE,
          },
        ],
        x = ((e) =>
          m.P6
            ? e.map((e) =>
                e.sourceChainId === m.r_
                  ? {
                      ...e,
                      feeTokens: e.feeTokens.map((e) => ({
                        ...e,
                        chainId: m.pq,
                      })),
                      sourceChainId: m.pq,
                    }
                  : e
              )
            : e)(m._N ? g : y);
      function _(e) {
        var t;
        let a =
          null == (t = x.find((t) => t.sourceChainId === e))
            ? void 0
            : t.chainSelector;
        if (!a) throw Error("No chainSelector found for chain ".concat(e));
        return a;
      }
      function A(e) {
        var t;
        let a =
          null == (t = x.find((t) => t.chainSelector === e))
            ? void 0
            : t.sourceChainId;
        if (!a) throw Error("No chainId found for chainSelector ".concat(e));
        return a;
      }
      function O(e) {
        var t;
        let a =
          null == (t = x.find((t) => t.sourceChainId === e))
            ? void 0
            : t.router;
        if (!a) throw Error("No router found for chain ".concat(e));
        return a;
      }
      function S() {
        return x.map((e) => e.sourceChainId);
      }
      function R(e) {
        let t = x.find((t) => t.sourceChainId === e);
        if (!t) throw Error("No config found for chain ".concat(e));
        return t;
      }
      let C = S().map((e) => {
        let t = m.or[e];
        if (!t) throw Error("Network config not found for chain ".concat(e));
        return {
          ...t,
          chainId: e,
          name: t.name || "Chain ".concat(e),
          publicJsonRPCUrl: t.publicJsonRPCUrl || [],
        };
      });
    },
    23493: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { AnimateInView: () => l });
      var n = a(54568),
        s = a(11376),
        r = a(80747),
        i = a(7620),
        o = a(29768);
      let l = (e) => {
        let {
            children: t,
            as: a = "div",
            type: l = "up",
            delay: c = 0,
            options: d = { amount: 0.1, once: !0 },
            className: u,
            ...p
          } = e,
          w = i.useRef(null),
          m = (0, s.W)(w, d),
          T = ((e) => {
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
          N = ["scale(".concat(0.95, ")")];
        void 0 !== T.y && N.unshift("translateY(".concat(T.y, "px)")),
          void 0 !== T.x && N.unshift("translateX(".concat(T.x, "px)"));
        let E = N.join(" "),
          h = r.P[a];
        return (0, n.jsx)(h, {
          animate: {
            opacity: +!!m,
            transform: m ? "scale(".concat(1, ")") : E,
          },
          className: (0, o.cn)("", u),
          initial: { opacity: 0, transform: E },
          ref: (e) => {
            w.current = e;
          },
          transition: { delay: c, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          ...p,
          children: t,
        });
      };
    },
    24675: (e, t, a) => {
      "use strict";
      a.d(t, {
        bq: () => u,
        eb: () => T,
        gC: () => m,
        l6: () => c,
        yv: () => d,
      });
      var n = a(54568),
        s = a(58677),
        r = a(93709),
        i = a(7620),
        o = a(4451),
        l = a(29768);
      let c = r.bL;
      r.YJ;
      let d = i.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, n.jsx)(r.WT, {
          className: (0, l.cn)("tw-text-primary", a),
          ref: t,
          ...s,
        });
      });
      d.displayName = r.WT.displayName;
      let u = i.forwardRef((e, t) => {
        let { className: a, children: s, isError: i, ...c } = e;
        return (0, n.jsxs)(r.l9, {
          className: (0, l.cn)(
            "tw-group tw-flex tw-h-10 tw-w-full tw-justify-between tw-rounded-md tw-border tw-border-border tw-bg-background tw-px-3 tw-py-2 tw-text-sm tw-shadow-input tw-transition-colors placeholder:tw-text-sm data-[placeholder]:tw-text-placeholder hover:tw-bg-background-hover focus-visible:tw-border-border-brand focus-visible:tw-outline-none disabled:tw-cursor-not-allowed disabled:tw-opacity-50 [&>span]:tw-line-clamp-1",
            a,
            i && "!tw-border-error"
          ),
          ref: t,
          ...c,
          children: [
            s,
            (0, n.jsx)(r.In, {
              asChild: !0,
              children: (0, n.jsx)(o.A.chevronDown, {
                className: (0, l.cn)(
                  "tw-size-5 tw-text-foreground-quaternary tw-opacity-50 tw-transition-transform",
                  "group-data-[state=open]:tw-rotate-180"
                ),
              }),
            }),
          ],
        });
      });
      u.displayName = r.l9.displayName;
      let p = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(r.PP, {
          className: (0, l.cn)(
            "tw-flex tw-cursor-default tw-items-center tw-justify-center tw-py-1",
            a
          ),
          ref: t,
          ...i,
          children: (0, n.jsx)(s.Mtm, {}),
        });
      });
      p.displayName = r.PP.displayName;
      let w = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(r.wn, {
          className: (0, l.cn)(
            "tw-flex tw-cursor-default tw-items-center tw-justify-center tw-py-1",
            a
          ),
          ref: t,
          ...i,
          children: (0, n.jsx)(s.D3D, {}),
        });
      });
      w.displayName = r.wn.displayName;
      let m = i.forwardRef((e, t) => {
        let { className: a, children: s, position: i = "popper", ...o } = e;
        return (0, n.jsx)(r.ZL, {
          children: (0, n.jsxs)(r.UC, {
            className: (0, l.cn)(
              "tw-relative tw-z-[10000001] tw-max-h-52 tw-overflow-hidden tw-rounded-md tw-border tw-border-border tw-bg-background tw-shadow-md data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
              "popper" === i &&
                "tw-w-[var(--radix-select-trigger-width)] data-[side=bottom]:tw-translate-y-1 data-[side=left]:tw--translate-x-1 data-[side=right]:tw-translate-x-1 data-[side=top]:tw--translate-y-1",
              a
            ),
            position: i,
            ref: t,
            ...o,
            children: [
              (0, n.jsx)(p, {}),
              (0, n.jsx)(r.LM, {
                className: (0, l.cn)(
                  "tw-p-1",
                  "popper" === i &&
                    "tw-h-[var(--radix-select-trigger-height)] tw-w-full"
                ),
                children: s,
              }),
              (0, n.jsx)(w, {}),
            ],
          }),
        });
      });
      (m.displayName = r.UC.displayName),
        (i.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, n.jsx)(r.JU, {
            className: (0, l.cn)(
              "tw-px-2 tw-py-1.5 tw-text-sm tw-font-semibold",
              a
            ),
            ref: t,
            ...s,
          });
        }).displayName = r.JU.displayName);
      let T = i.forwardRef((e, t) => {
        let { className: a, children: s, ...i } = e;
        return (0, n.jsxs)(r.q7, {
          className: (0, l.cn)(
            "tw-relative tw-flex tw-w-full tw-cursor-pointer tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-2 tw-pr-8 tw-text-sm tw-outline-none data-[disabled]:tw-pointer-events-none data-[state=checked]:tw-bg-background-active data-[disabled]:tw-opacity-50 hover:tw-bg-background-active focus:tw-bg-background-active",
            a
          ),
          ref: t,
          ...i,
          children: [
            (0, n.jsx)("span", {
              className:
                "tw-absolute tw-right-2 tw-flex tw-size-3.5 tw-items-center tw-justify-center",
              children: (0, n.jsx)(r.VF, {
                children: (0, n.jsx)(o.A.check, {
                  className: "tw-size-5 tw-text-foreground-brand",
                }),
              }),
            }),
            (0, n.jsx)(r.p4, { children: s }),
          ],
        });
      });
      (T.displayName = r.q7.displayName),
        (i.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, n.jsx)(r.wv, {
            className: (0, l.cn)("tw--mx-1 tw-my-1 tw-h-px", a),
            ref: t,
            ...s,
          });
        }).displayName = r.wv.displayName);
    },
    25060: (e, t, a) => {
      "use strict";
      a.d(t, { yf: () => n }), a(68266);
      var n = a(223),
        s = a(37605),
        r = a(82559),
        i = a(5074);
      n.extend(i), n.extend(s), n.extend(r);
    },
    26989: (e, t, a) => {
      "use strict";
      a.d(t, { bQ: () => U });
      var n = a(54568),
        s = a(7620),
        r = a(90350),
        i = a(7657),
        o = a(68175),
        l = a(54924),
        c = a(58677),
        d = a(47227),
        u = a(24675);
      function p(e) {
        let { table: t } = e;
        return (0, n.jsxs)("div", {
          className: "tw-flex tw-items-center tw-justify-between tw-px-2",
          children: [
            (0, n.jsxs)("div", {
              className: "tw-flex-1 tw-text-sm",
              children: [
                t.getFilteredSelectedRowModel().rows.length,
                " of",
                " ",
                t.getFilteredRowModel().rows.length,
                " row(s) selected.",
              ],
            }),
            (0, n.jsxs)("div", {
              className: "tw-flex tw-items-center tw-space-x-6 lg:tw-space-x-8",
              children: [
                (0, n.jsxs)("div", {
                  className: "tw-flex tw-items-center tw-space-x-2",
                  children: [
                    (0, n.jsx)("p", {
                      className: "tw-text-sm tw-font-medium",
                      children: "Rows per page",
                    }),
                    (0, n.jsxs)(u.l6, {
                      onValueChange: (e) => {
                        t.setPageSize(Number(e));
                      },
                      value: "".concat(t.getState().pagination.pageSize),
                      children: [
                        (0, n.jsx)(u.bq, {
                          className: "tw-size-[70px]",
                          children: (0, n.jsx)(u.yv, {
                            placeholder: t.getState().pagination.pageSize,
                          }),
                        }),
                        (0, n.jsx)(u.gC, {
                          side: "top",
                          children: [10, 20, 30, 40, 50].map((e) =>
                            (0, n.jsx)(
                              u.eb,
                              { value: "".concat(e), children: e },
                              e
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "tw-flex tw-w-[100px] tw-items-center tw-justify-center tw-text-sm tw-font-medium",
                  children: [
                    "Page ",
                    t.getState().pagination.pageIndex + 1,
                    " of",
                    " ",
                    t.getPageCount(),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "tw-flex tw-items-center tw-space-x-2",
                  children: [
                    (0, n.jsxs)(d.Button, {
                      className: "tw-hidden tw-size-8 tw-p-0 lg:tw-flex",
                      disabled: !t.getCanPreviousPage(),
                      onClick: () => t.setPageIndex(0),
                      children: [
                        (0, n.jsx)("span", {
                          className: "tw-sr-only",
                          children: "Go to first page",
                        }),
                        (0, n.jsx)(c.jvd, { className: "tw-size-4" }),
                      ],
                    }),
                    (0, n.jsxs)(d.Button, {
                      className: "tw-size-8 tw-p-0",
                      disabled: !t.getCanPreviousPage(),
                      onClick: () => t.previousPage(),
                      children: [
                        (0, n.jsx)("span", {
                          className: "tw-sr-only",
                          children: "Go to previous page",
                        }),
                        (0, n.jsx)(c.YJP, { className: "tw-size-4" }),
                      ],
                    }),
                    (0, n.jsxs)(d.Button, {
                      className: "tw-size-8 tw-p-0",
                      disabled: !t.getCanNextPage(),
                      onClick: () => t.nextPage(),
                      children: [
                        (0, n.jsx)("span", {
                          className: "tw-sr-only",
                          children: "Go to next page",
                        }),
                        (0, n.jsx)(c.vKP, { className: "tw-size-4" }),
                      ],
                    }),
                    (0, n.jsxs)(d.Button, {
                      className: "tw-hidden tw-size-8 tw-p-0 lg:tw-flex",
                      disabled: !t.getCanNextPage(),
                      onClick: () => t.setPageIndex(t.getPageCount() - 1),
                      children: [
                        (0, n.jsx)("span", {
                          className: "tw-sr-only",
                          children: "Go to last page",
                        }),
                        (0, n.jsx)(c.QZK, { className: "tw-size-4" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var w = a(60844),
        m = a(4451),
        T = a(65165),
        N = a(8960),
        E = a(29768),
        h = a(26080);
      function f(e) {
        let { table: t, globalFilter: a, className: s, funnel: r } = e,
          i = t.getState().columnFilters.length > 0,
          [, o] = (0, w.fp)(N.bL);
        return (0, n.jsx)("div", {
          className: (0, E.cn)("tw-flex tw-items-center tw-justify-between", s),
          children: (0, n.jsxs)("div", {
            className:
              "tw-flex tw-flex-1 tw-items-center tw-justify-end tw-space-x-2",
            children: [
              (0, n.jsx)(T.p, {
                className: "tw-h-8 tw-w-[150px] lg:tw-w-[250px]",
                icon: m.A.search,
                onChange: (e) => {
                  t.setGlobalFilter(e.target.value),
                    o({
                      eventName: h.zm.SEARCH,
                      properties: { funnel: r, search: e.target.value },
                    });
                },
                placeholder: "Search...",
                value: null != a ? a : "",
              }),
              i &&
                (0, n.jsxs)(d.Button, {
                  className: "tw-h-8 tw-px-2 lg:tw-px-3",
                  onClick: () => t.resetColumnFilters(),
                  variant: "ghost",
                  children: [
                    "Reset",
                    (0, n.jsx)(c.MKb, { className: "tw-ml-2 tw-size-4" }),
                  ],
                }),
            ],
          }),
        });
      }
      var b = a(20874);
      let y = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, n.jsx)("table", {
          className: (0, E.cn)("tw-w-full tw-caption-bottom tw-text-sm", a),
          ref: t,
          ...s,
        });
      });
      y.displayName = "Table";
      let g = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, n.jsx)("thead", {
          className: (0, E.cn)("", a),
          ref: t,
          ...s,
        });
      });
      g.displayName = "TableHeader";
      let x = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, n.jsx)("tbody", {
          className: (0, E.cn)("[&_tr:last-child]:tw-border-0", a),
          ref: t,
          ...s,
        });
      });
      (x.displayName = "TableBody"),
        (s.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, n.jsx)("tfoot", {
            className: (0, E.cn)(
              "tw-border-t tw-bg-background-secondary/50 tw-font-medium [&>tr]:last:tw-border-b-0",
              a
            ),
            ref: t,
            ...s,
          });
        }).displayName = "TableFooter");
      let _ = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, n.jsx)("tr", {
          className: (0, E.cn)(
            "tw-border-b tw-border-border-secondary tw-transition-colors data-[state=selected]:tw-bg-background-secondary hover:tw-bg-background-secondary/50",
            a
          ),
          ref: t,
          ...s,
        });
      });
      _.displayName = "TableRow";
      let A = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, n.jsx)("th", {
          className: (0, E.cn)(
            "tw-h-10 tw-px-1 tw-text-left tw-align-middle tw-font-medium [&:has([role=checkbox])]:tw-pr-0 [&>[role=checkbox]]:tw-translate-y-[2px]",
            a
          ),
          ref: t,
          ...s,
        });
      });
      A.displayName = "TableHead";
      let O = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, n.jsx)("td", {
          className: (0, E.cn)(
            "tw-px-1 tw-py-2 tw-align-middle [&:has([role=checkbox])]:tw-pr-0 [&>[role=checkbox]]:tw-translate-y-[2px]",
            a
          ),
          ref: t,
          ...s,
        });
      });
      (O.displayName = "TableCell"),
        (s.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, n.jsx)("caption", {
            className: (0, E.cn)("tw-mt-4 tw-text-sm", a),
            ref: t,
            ...s,
          });
        }).displayName = "TableCaption");
      var S = a(47978),
        R = a(10042);
      let C = s.forwardRef((e, t) => {
        var a;
        let { context: s, children: r, ...i } = e;
        return (0, n.jsx)(y, {
          className: (0, E.cn)(
            "",
            null == s || null == (a = s.classNames) ? void 0 : a.table
          ),
          ref: t,
          ...i,
          children: r,
        });
      });
      C.displayName = "Table";
      let I = s.forwardRef((e, t) => {
        var a;
        let { context: s, children: r, ...i } = e;
        return (0, n.jsx)(x, {
          className: (0, E.cn)(
            "",
            null == s || null == (a = s.classNames) ? void 0 : a.body
          ),
          ref: t,
          ...i,
          children: r,
        });
      });
      I.displayName = "TableBody";
      let v = s.forwardRef((e, t) => {
        var a;
        let { context: s, children: r, ...i } = e;
        return (0, n.jsx)(g, {
          className: (0, E.cn)(
            "",
            null == s || null == (a = s.classNames) ? void 0 : a.header
          ),
          ref: t,
          ...i,
          children: r,
        });
      });
      function L(e) {
        let { ref: t, ...a } = e,
          { context: s } = a;
        if (!s) return null;
        let { table: r } = s;
        return r.getHeaderGroups().map((e) => {
          var a;
          return (0, n.jsx)(
            _,
            {
              className: (0, E.cn)(
                "",
                null == (a = s.classNames) ? void 0 : a.headerRow
              ),
              ref: t,
              children: e.headers.map((e, t) => {
                var a;
                return (0, n.jsx)(
                  A,
                  {
                    className: (0, E.cn)(
                      "tw-bg-background-secondary",
                      null == (a = s.classNames) ? void 0 : a.headerCell
                    ),
                    colSpan: e.colSpan,
                    style: {
                      width:
                        e.getSize() === Number.MAX_SAFE_INTEGER
                          ? "auto"
                          : e.getSize(),
                    },
                    children: e.isPlaceholder
                      ? null
                      : (0, i.Kv)(e.column.columnDef.header, e.getContext()),
                  },
                  "".concat(e.id, "-").concat(t)
                );
              }),
            },
            "".concat(e.id)
          );
        });
      }
      function k(e) {
        let { ref: t, ...a } = e,
          { "data-index": r, context: o, ...l } = a;
        if (!o) return null;
        let { rows: c, columns: d, classNames: u, loadMore: p } = o,
          w = c[r];
        return w
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, s.createElement)(
                  _,
                  {
                    ref: t,
                    ...l,
                    className: (0, E.cn)("", null == u ? void 0 : u.row),
                    "data-state": w.getIsSelected() && "selected",
                    key: "".concat(w.id),
                  },
                  w
                    .getVisibleCells()
                    .map((e) =>
                      (0, n.jsx)(
                        O,
                        {
                          className: (0, E.cn)("", null == u ? void 0 : u.cell),
                          style: {
                            width:
                              e.column.getSize() === Number.MAX_SAFE_INTEGER
                                ? "auto"
                                : e.column.getSize(),
                          },
                          children: (0, i.Kv)(
                            e.column.columnDef.cell,
                            e.getContext()
                          ),
                        },
                        e.id
                      )
                    )
                ),
                p &&
                  r === c.length - 1 &&
                  (0, n.jsx)(_, {
                    className: "!tw-bg-transparent",
                    children: (0, n.jsx)(O, {
                      className: "tw-h-16 !tw-bg-transparent tw-text-center",
                      colSpan: d.length,
                      children: p,
                    }),
                  }),
              ],
            })
          : null;
      }
      function U(e) {
        let {
            columns: t,
            data: a,
            isLoading: c,
            skeleton: d,
            skeletonRows: u,
            initialState: w,
            facetedFilters: m,
            enablePagination: T,
            disableToolbar: N,
            virtualized: h,
            classNames: y,
            noResults: g,
            noResultsClassName: x,
            gridClassName: A,
            loadMore: U,
            toolbarClassName: D,
            display: j = S.q.Table,
            filter: P,
            disableHeader: M,
          } = e,
          [B, W] = s.useState({}),
          [F, G] = s.useState({ costAddress: !1 }),
          [H, z] = s.useState([]),
          [K, V] = s.useState([]),
          [Y, X] = s.useState(""),
          q = (e, t, a, n) => {
            let s = (0, r.IL)(e.getValue(t), a);
            return n({ itemRank: s }), s.passed;
          },
          J = s.useMemo(
            () => (c ? Array(null != u ? u : 5).fill({}) : a),
            [c, a, u]
          ),
          Q = s.useMemo(
            () =>
              c
                ? t.map((e) => ({
                    ...e,
                    cell: () =>
                      d ||
                      (0, n.jsx)(b.E, {
                        className: (0, E.cn)(
                          "tw-my-2 tw-size-full tw-h-5 tw-rounded-full",
                          "tw-min-w-9"
                        ),
                      }),
                  }))
                : t,
            [c, t, d]
          ),
          $ = (0, i.N4)({
            columns: Q,
            data: J,
            defaultColumn: {
              maxSize: Number.MAX_SAFE_INTEGER,
              minSize: 0,
              size: Number.MAX_SAFE_INTEGER,
            },
            enableRowSelection: !0,
            filterFns: { fuzzy: q },
            getCoreRowModel: (0, o.HT)(),
            getFacetedRowModel: (0, o.kQ)(),
            getFacetedUniqueValues: (0, o.oS)(),
            getFilteredRowModel: (0, o.hM)(),
            getPaginationRowModel: (0, o.kW)(),
            getSortedRowModel: (0, o.h5)(),
            globalFilterFn: q,
            initialState: {
              pagination: {
                pageSize: (null == w ? void 0 : w.pagination)
                  ? w.pagination.pageSize
                  : Number.MAX_SAFE_INTEGER,
              },
            },
            onColumnFiltersChange: z,
            onColumnVisibilityChange: G,
            onGlobalFilterChange: X,
            onRowSelectionChange: W,
            onSortingChange: V,
            state: {
              columnFilters: H,
              columnVisibility: F,
              globalFilter: Y,
              rowSelection: B,
              sorting: K,
            },
          }),
          { rows: Z } = $.getRowModel(),
          ee = s.useMemo(
            () =>
              (0, n.jsx)(I, {
                children: (0, n.jsx)(_, {
                  children: (0, n.jsx)(O, {
                    className: "tw-h-24 tw-text-center",
                    colSpan: t.length,
                    "data-pw": R.l.TABLE.EMPTY_STATE,
                    children: null != g ? g : "No results",
                  }),
                }),
              }),
            [t, g]
          ),
          et = s.useCallback(
            () => (0, n.jsx)(L, { context: { classNames: y, table: $ } }),
            [$, y]
          );
        return (
          s.useEffect(() => {
            $.setGlobalFilter(P);
          }, [P, $]),
          (0, n.jsxs)("div", {
            className: "tw-h-full tw-space-y-4",
            children: [
              N
                ? null
                : (0, n.jsx)(f, {
                    className: D,
                    facetedFilters: m,
                    globalFilter: Y,
                    table: $,
                  }),
              j === S.q.Table
                ? h
                  ? (0, n.jsx)(l.Sd, {
                      components: {
                        EmptyPlaceholder: () => ee,
                        Table: C,
                        TableBody: I,
                        TableHead: M ? void 0 : v,
                        TableRow: k,
                      },
                      context: {
                        classNames: y,
                        columns: t,
                        loadMore: U,
                        rows: Z,
                        table: $,
                      },
                      fixedHeaderContent: et,
                      style: { height: 600 },
                      totalCount: Z.length,
                    })
                  : (0, n.jsxs)(C, {
                      context: {
                        classNames: {
                          ...y,
                          table: (0, E.cn)(
                            "tw-relative",
                            null == y ? void 0 : y.table
                          ),
                        },
                      },
                      children: [
                        !M &&
                          (0, n.jsx)(v, {
                            context: {
                              classNames: {
                                ...y,
                                header: (0, E.cn)(
                                  "tw-sticky tw-top-[50px] tw-z-[1] lg:tw-top-[58px]",
                                  null == y ? void 0 : y.header
                                ),
                              },
                            },
                            children: (0, n.jsx)(L, {
                              context: {
                                classNames: {
                                  ...y,
                                  headerCell: (0, E.cn)(
                                    'after:tw-absolute after:tw-inset-x-0 after:tw-bottom-0 after:tw-h-px after:tw-w-full after:tw-bg-border-secondary after:tw-content-[""]',
                                    null == y ? void 0 : y.headerCell
                                  ),
                                },
                                table: $,
                              },
                            }),
                          }),
                        Z.length > 0
                          ? (0, n.jsx)(I, {
                              context: { classNames: y },
                              children: Z.map((e, a) =>
                                (0, n.jsx)(
                                  k,
                                  {
                                    context: {
                                      classNames: y,
                                      columns: t,
                                      loadMore: U,
                                      rows: Z,
                                    },
                                    "data-index": a,
                                  },
                                  "".concat(e.id, "-").concat(a)
                                )
                              ),
                            })
                          : ee,
                      ],
                    })
                : Z.length > 0
                ? (0, n.jsx)("div", {
                    className: (0, E.cn)("tw-grid tw-grid-cols-1", A),
                    children: Z.map((e, t) =>
                      (0, n.jsx)(
                        "div",
                        {
                          "data-display": j,
                          "data-state": e.getIsSelected() && "selected",
                          children: e
                            .getVisibleCells()
                            .map((e) =>
                              (0, n.jsx)(
                                s.Fragment,
                                {
                                  children: (0, i.Kv)(
                                    e.column.columnDef.cell,
                                    e.getContext()
                                  ),
                                },
                                e.id
                              )
                            ),
                        },
                        "".concat(e.id, "-").concat(t)
                      )
                    ),
                  })
                : (0, n.jsx)("div", {
                    className: (0, E.cn)(
                      "tw-flex tw-w-full tw-items-center tw-justify-center tw-px-4 tw-pb-10 tw-text-center",
                      x
                    ),
                    "data-pw": R.l.TABLE.EMPTY_STATE,
                    children: g,
                  }),
              T && (0, n.jsx)(p, { table: $ }),
            ],
          })
        );
      }
      v.displayName = "TableHeader";
    },
    27118: (e, t, a) => {
      "use strict";
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
    29813: (e, t, a) => {
      "use strict";
      a.d(t, { l: () => l });
      var n = a(67933),
        s = a(55775),
        r = a(89377),
        i = a(14884),
        o = a(14010);
      let l = (e, t, a, l, c) => {
        let d = (0, i.t)({ chainId: t });
        return (0, n.I)({
          enabled: (null == c ? void 0 : c.length) > 0 && !!a && !!d,
          queryFn: async () => {
            if (!d) throw Error("No client found");
            for (let t of c)
              try {
                let n,
                  i = (0, r.PF)({
                    abi: s.G1.offRamp["1.5.0"],
                    address: t,
                    client: d,
                  }),
                  c = (0, r.PF)({
                    abi: s.G1.offRamp["1.6.0"],
                    address: t,
                    client: d,
                  }),
                  u = "1.5.0" === l ? i : c,
                  p = (await u.read.typeAndVersion()).split(" ").pop();
                if (!p) {
                  console.log(
                    "Skipping off-ramp ".concat(t, " with no version")
                  );
                  continue;
                }
                if (l !== p) {
                  console.log(
                    "Skipping off-ramp "
                      .concat(t, " with version ")
                      .concat(p, " (expected ")
                      .concat(l, ")")
                  );
                  continue;
                }
                let w = BigInt(null != a ? a : 0);
                switch (l) {
                  case "1.5.0":
                    n = i.read.getExecutionState([w]);
                    break;
                  case "1.6.0":
                    n = c.read.getExecutionState([BigInt(e), w]);
                }
                let m = await n;
                if (m !== o.Ho.UNTOUCHED) return m;
              } catch (e) {
                console.error(e);
              }
            return o.Ho.UNTOUCHED;
          },
          queryKey: ["executionState", t, a, l],
          refetchInterval: (e) => e.state.data !== o.Ho.SUCCESS && 6e4,
        });
      };
    },
    32305: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => R });
      var n = a(54568),
        s = a(13432),
        r = a(4451),
        i = a(11985),
        o = a(29768);
      let l = "World Liberty Financial",
        c = "Where DeFi Meets TradFi",
        d =
          "Bridging legacy finance and the open economy with purpose-built, on-chain products. 0xcomingsoon",
        u = i.h.NEXT_PUBLIC_BASE_URL,
        p = "https://".concat(s.w4, "/images/world-liberty-financial-logo.jpg"),
        w = "https://".concat(
          s.w4,
          "/images/open-graph/world-liberty-financial.jpg"
        ),
        m = "https://".concat(s.w4, "/images/open-graph"),
        T = "https://".concat(s.w4, "/docs/gold-paper.pdf"),
        N = "".concat(l, " -"),
        E = (e) => "".concat(u).concat(e),
        h = (e) => "".concat(N, " ").concat(e),
        f = (e) => "".concat(m).concat(e, ".jpg"),
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
              return h(this.title);
            },
            title: "Team, Vision & Mission",
            url: E(b.about),
          },
          [b.brand]: {
            description:
              "Explore our brand assets, including logos, colors, and fonts, to help you create a consistent and recognizable presence for World Liberty Financial.",
            get ogTitle() {
              return h(this.title);
            },
            title: "Visual Identity Guide",
            url: E(b.brand),
          },
          [b.bridge]: {
            description:
              "Easily bridge USD1 between Ethereum, BNB Chain, and other supported networks. Fast, secure, and powered by Chainlink CCIP.",
            get ogTitle() {
              return h(this.title);
            },
            ogUrl: f(b.bridge),
            title: "Bridge USD1 Across Chains",
            url: E(b.bridge),
          },
          [b.bridgeActivity]: {
            description:
              "Monitor your USD1 bridge transactions across Ethereum, BNB Chain, and more. View real-time status updates for each transfer.",
            get ogTitle() {
              return h(this.title);
            },
            ogUrl: f(b.bridge),
            title: "Bridge Transaction History",
            url: E(b.bridgeActivity),
          },
          [b.contact]: {
            description:
              "Reach out to World Liberty Financial for support, product inquiries or partnership opportunities.",
            get ogTitle() {
              return h(this.title);
            },
            title: "Support & Partnerships",
            url: E(b.contact),
          },
          [b.governance]: {
            description:
              "World Liberty Financial seeks to ensure trust and transparency through a robust governance system with token-holder voting, proposals, and active ecosystem participation.",
            get ogTitle() {
              return h(this.title);
            },
            ogUrl: f(b.governance),
            title: "Shape the Future with our Governance Process",
            url: E(b.governance),
          },
          [b.home]: {
            description: d,
            get ogTitle() {
              return h(this.title);
            },
            ogUrl: f("/world-liberty-financial"),
            title: c,
            url: E(b.home),
          },
          [b.privacy]: {
            description:
              "Discover how World Liberty Financial protects your data and seeks to ensure compliance with relevant privacy standards.",
            get ogTitle() {
              return h(this.title);
            },
            title: "How We Protect Your Data",
            url: E(b.privacy),
          },
          [b.providers]: {
            description:
              "Find trusted partners to get USD1, including exchanges, wallets, and DeFi apps. Explore all the official providers in one place.",
            get ogTitle() {
              return h(this.title);
            },
            ogUrl: f(b.providers),
            title: "Trusted USD1 Providers",
            url: E(b.providers),
          },
          [b.terms]: {
            description:
              "Learn the terms that govern your access to World Liberty Financial.",
            get ogTitle() {
              return h(this.title);
            },
            title: "Terms & Conditions",
            url: E(b.terms),
          },
          [b.unlock]: {
            description:
              "Easily unlock your WLFI tokens with our Unlock feature. View schedules, track progress, and claim your tokens.",
            get ogTitle() {
              return h(this.title);
            },
            ogUrl: f(b.unlock),
            title: "Easily unlock your WLFI tokens",
            url: E(b.unlock),
          },
          [b.usd1]: {
            description:
              "USD1 is the US Dollar stablecoin upgraded for a new era of finance — stable, secure, and transparent by design.",
            get ogTitle() {
              return h(this.title);
            },
            ogUrl: f(b.usd1),
            title: "Meet USD1",
            url: E(b.usd1),
          },
          [b.usd1RiskDisclosures]: {
            description:
              "Learn about and understand the potential risks associated with using USD1.",
            get ogTitle() {
              return h(this.title);
            },
            title: "USD1 Risk Disclosures",
            url: E(b.usd1RiskDisclosures),
          },
          [b.wlfiRiskDisclosures]: {
            description:
              "Learn about and understand the potential risks associated with using WLFI.",
            get ogTitle() {
              return h(this.title);
            },
            title: "WLFI Risk Disclosures",
            url: E(b.wlfiRiskDisclosures),
          },
          [b.wlfiTerms]: {
            description:
              "Before interacting with WLFI tokens, understand their utility, limitations, and associated risks.",
            get ogTitle() {
              return h(this.title);
            },
            title: "Use and Acquisition Terms & Conditions",
            url: E(b.wlfiTerms),
          },
        },
        g = [
          {
            href: "https://x.com/worldlibertyfi",
            icon: (e) =>
              (0, n.jsx)(r.A.twitter, {
                className: (0, o.cn)("tw-size-5 tw-text-foreground-quinary", e),
              }),
            title: "X/Twitter",
          },
          {
            href: "https://t.me/defiant1s",
            icon: (e) =>
              (0, n.jsx)(r.A.telegram, {
                className: (0, o.cn)("tw-size-5 tw-text-foreground-quinary", e),
              }),
            title: "Telegram",
          },
        ],
        x = [
          { external: !1, href: b.usd1, title: "Overview" },
          { external: !1, href: b.providers, title: "Providers" },
          { external: !1, href: b.bridge, isVisible: !0, title: "Bridge" },
          { external: !1, href: void 0, isVisible: !0, title: "Exchange" },
        ],
        _ = [
          { external: !1, href: void 0, isVisible: !0, title: "WLFI App" },
          { external: !1, href: void 0, isVisible: !0, title: "Lend & Borrow" },
        ],
        A = [
          { external: !1, href: b.about, title: "About" },
          { external: !1, href: b.brand, title: "Brand Assets" },
          { external: !1, href: b.contact, title: "Contact us" },
        ],
        O = [
          { external: !1, href:"https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon", title: "Buy $WLFI" },
          { external: !1, title: "Trade $WLFI" },
          { external: !1, href: b.governance, title: "$WLFI Governance" },
        ],
        S = [
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
        R = {
          applicationName: "".concat(N, " ").concat(c),
          apps: _,
          authors: [{ name: l, url: "https://worldlibertyfiancial.com" }],
          cdn: "https://".concat(s.w4),
          company: A,
          description: d,
          footerNav: [
            { routes: x, title: "USD1" },
            { routes: _, title: "Apps & Protocols" },
            { routes: O, title: "WLFI" },
            { routes: A, title: "Company" },
            { routes: S, title: "Legal" },
          ],
          generator: "Next.js",
          goldPaper: T,
          governanceMail: "governance@worldlibertyfinancial.com",
          infoMail: "info@worldlibertyfinancial.com",
          keywords: "",
          legal: S,
          logo: p,
          mail: "support@worldlibertyfinancial.com",
          mainNav: [
          ],
          manifest: "/manifest.json",
          name: "".concat(N, " ").concat(c),
          nameLiteral: l,
          nameTemplate: N,
          ogImage: w,
          ogPath: m,
          openGraph: {
            countryName: "United States",
            description: d,
            images: {
              alt: "".concat(N, " ").concat(c),
              height: 630,
              type: "image/jpeg",
              url: w,
              width: 1200,
            },
            locale: "en_US",
            siteName: l,
            title: "".concat(N, " ").concat(c),
            type: "website",
            url: u,
          },
          privacyMail: "privacy@worldlibertyfinancial.com",
          routes: b,
          routesMetadata: y,
          socials: g,
          title: c,
          twitter: {
            card: "summary_large_image",
            description: d,
            images: [w],
            site: "@worldlibertyfi",
            title: "".concat(N, " ").concat(c),
          },
          url: u,
          usd1: x,
          wlfi: O,
        };
    },
    32583: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => i, p: () => r });
      var n = a(79924),
        s = a(8960);
      let r = (0, n.eU)(null, (e, t, a) => {
          t(s.p9, { properties: { tenant: "landing" }, url: a });
        }),
        i = (0, n.eU)(null, (e, t, a) => {
          let { eventName: n, properties: r } = a,
            i = { ...r, tenant: "landing" };
          t(s.bL, { eventName: n, properties: i });
        });
    },
    32629: (e, t, a) => {
      "use strict";
      a.d(t, { G: () => c });
      var n = a(54568),
        s = a(54301),
        r = a(30787),
        i = a(29768);
      let o = ["", "K", "M", "B", "T", "P", "E", "Z", "Y"];
      function l(e) {
        let {
            value: t,
            visibleDecimals: a,
            roundDown: r,
            compactThreshold: i,
          } = e,
          { prefix: l, postfix: c } = ((e) => {
            let {
                value: t,
                visibleDecimals: a = 2,
                roundDown: n,
                compactThreshold: r,
              } = e,
              i = (0, s.cG)(t),
              l = i.toFixed(0).length;
            r && Number(t) <= r && (l = 0);
            let c = Math.min(Math.floor(l ? (l - 1) / 3 : 0), o.length - 1),
              d = o[c],
              u = (0, s.I7)(i, 3 * c).toNumber();
            n && (u = Math.trunc(Number(u) * 10 ** a) / 10 ** a);
            let p = new Intl.NumberFormat("en-US", {
                maximumFractionDigits: a,
                minimumFractionDigits: a,
              }).format(u),
              w = p;
            if (p.includes(".")) {
              let e = p.split("."),
                t = e[0] || "",
                a = e[1];
              (null == a ? void 0 : a.split("").every((e) => "0" === e)) &&
                (w = t);
            }
            return { postfix: 0 === c ? "" : d, prefix: w };
          })({
            compactThreshold: i,
            roundDown: r,
            value: t,
            visibleDecimals: a,
          });
        return (0, n.jsxs)(n.Fragment, { children: [l, c] });
      }
      function c(e) {
        let {
            value: t,
            symbol: a,
            visibleDecimals: o,
            compact: c,
            percent: d,
            symbolClassName: u,
            roundDown: p,
            compactThreshold: w,
            forceSubscriptZeros: m,
            className: T,
            compactSymbol: N,
            forceNumberFlow: E,
            ...h
          } = e,
          f = d ? 100 * Number(t) : Number(t),
          b = (null == a ? void 0 : a.toLowerCase()) === "usd",
          y = null != o ? o : 0;
        0 === f
          ? (y = 0)
          : void 0 === o && (y = Math.abs(f) >= 1 || d || "USD" === a ? 2 : 7);
        let g = 10 ** -y,
          x = 0 !== f && Math.abs(f) < Math.abs(g),
          _ = x && !E ? g : f,
          A = !1 !== c && (c || f > 99999),
          O = (0, s.cG)(t).toFixed(),
          S = /^0\.00+/.test(O),
          [, R] = _.toString().split("."),
          C = !R,
          I = !!(R && !Number(R)),
          v = C || I ? 0 : y;
        p && !A && (_ = Math.trunc(Number(_) * 10 ** y) / 10 ** y);
        let L = m || (S && !b),
          k = L ? Math.max(1, y) : v,
          U = {
            maximumFractionDigits: v,
            minimumFractionDigits: C || I ? 0 : Math.min(2, v),
          },
          D =
            L && !A
              ? (function (e) {
                  let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 4,
                    a =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0.001,
                    n = parseFloat(e);
                  if (Number.isNaN(n)) return e;
                  if (n >= a) {
                    let [a, n] = e.split(".");
                    if (n) {
                      var s;
                      let e =
                        (null == (s = n.match(/^0+/)) ? void 0 : s[0]) || "";
                      return ""
                        .concat(a, ".")
                        .concat(e)
                        .concat(n.replace(e, "").slice(0, t));
                    }
                    return a;
                  }
                  let r = e.match(/^0\.(0+)/);
                  if (!r) return e;
                  let i = r[1].length,
                    o = e.slice(r[0].length),
                    l = String(i)
                      .split("")
                      .map((e) => String.fromCharCode(8320 + parseInt(e, 10)))
                      .join("");
                  return "0.0".concat(l).concat(o.slice(0, t));
                })(O, k)
              : new Intl.NumberFormat("en-US", U).format(_);
        return (0, n.jsxs)("span", {
          className: (0, i.cn)("tw-inline-flex tw-flex-row tw-items-center", T),
          ...h,
          children: [
            x &&
              !L &&
              (0, n.jsx)("span", {
                className: (0, i.cn)("tw-mr-1", u),
                children: "<",
              }),
            (null == a ? void 0 : a.toLowerCase()) === "usd" &&
              !d &&
              (0, n.jsx)("span", {
                className: (0, i.cn)(!N && "tw-mr-1", u),
                children: "$",
              }),
            E
              ? (0, n.jsx)(r.Ay, { format: U, isolate: !0, value: _ })
              : A
              ? (0, n.jsx)(l, {
                  compactThreshold: w,
                  roundDown: p,
                  value: _,
                  visibleDecimals: y,
                })
              : D,
            d &&
              (0, n.jsx)("span", {
                className: (0, i.cn)("tw-ml-1", u),
                children: "%",
              }),
            (null == a ? void 0 : a.toLowerCase()) !== "usd" &&
              void 0 !== a &&
              (0, n.jsx)("span", {
                className: (0, i.cn)("tw-ml-1", u),
                children: a,
              }),
          ],
        });
      }
    },
    34493: (e, t, a) => {
      "use strict";
      a.d(t, { Zn: () => p, k3: () => w, q3: () => d });
      var n = a(54568),
        s = a(60844),
        r = a(7620),
        i = a(28359),
        o = a(10558),
        l = a(26080),
        c = a(55087),
        d = (function (e) {
          return (
            (e.Supply = "Supply"),
            (e.Withdraw = "Withdraw"),
            (e.Borrow = "Borrow"),
            (e.Repay = "Repay"),
            (e.CollateralChange = "CollateralChange"),
            (e.Swap = "Swap"),
            (e.CollateralSwitch = "CollateralSwitch"),
            (e.DebtSwitch = "DebtSwitch"),
            (e.HealthFactor = "HealthFactor"),
            (e.ReadMode = "ReadMode"),
            (e.ShareWallet = "ShareWallet"),
            (e.Faucet = "Faucet"),
            (e.Feedback = "Feedback"),
            (e.Emode = "Emode"),
            e
          );
        })({});
      let u = r.createContext({}),
        p = (e) => {
          let { children: t } = e,
            {
              setMainTxState: a,
              setApprovalTxState: d,
              setGasLimit: p,
              setTxError: w,
            } = (0, o.Fn)(),
            [m, T] = r.useState(),
            [N, E] = r.useState({}),
            [, h] = (0, s.fp)(c.b);
          return (0, n.jsx)(u, {
            value: {
              args: N,
              close: () => {
                T(void 0), E({}), a({}), d({}), p(""), w(void 0), (0, i.cT)(!1);
              },
              closeWithCb: (e) => {
                T(void 0), E({}), a({}), d({}), p(""), w(void 0), e();
              },
              openBorrow: (e, t, a, n) => {
                T("Borrow"),
                  E({ underlyingAsset: e }),
                  h({
                    eventName: l.zm.OPEN_MODAL,
                    properties: {
                      asset: e,
                      assetName: a,
                      funnel: n,
                      market: t,
                      modal: "Borrow",
                    },
                  });
              },
              openCollateralChange: (e, t, a, n, s) => {
                T("CollateralChange"),
                  E({ underlyingAsset: e }),
                  h({
                    eventName: l.zm.OPEN_MODAL,
                    properties: {
                      asset: e,
                      assetName: a,
                      funnel: n,
                      market: t,
                      modal: "Toggle Collateral",
                      usageAsCollateralEnabledOnUser: s,
                    },
                  });
              },
              openCollateralSwitch: (e) => {
                T("CollateralSwitch"),
                  E({ underlyingAsset: e }),
                  h({
                    eventName: l.zm.OPEN_MODAL,
                    properties: { asset: e, modal: "Collateral Switch" },
                  });
              },
              openDebtSwitch: (e) => {
                T("DebtSwitch"),
                  E({ underlyingAsset: e }),
                  h({
                    eventName: l.zm.OPEN_MODAL,
                    properties: { asset: e, modal: "Debt Switch" },
                  });
              },
              openEmode: (e) => {
                let { userEmodeCategoryId: t } = e;
                h({
                  eventName: l.zm.OPEN_MODAL,
                  properties: { modal: "eMode", userEmodeCategoryId: t },
                }),
                  T("Emode");
              },
              openFaucet: (e) => {
                T("Faucet"), E({ underlyingAsset: e });
              },
              openFeedback: () => {
                T("Feedback"),
                  h({
                    eventName: l.zm.OPEN_MODAL,
                    properties: { modal: "Feedback" },
                  });
              },
              openHealthFactor: () => {
                T("HealthFactor"),
                  h({
                    eventName: l.zm.OPEN_MODAL,
                    properties: { modal: "Health Factor" },
                  });
              },
              openReadMode: () => {
                T("ReadMode"),
                  h({
                    eventName: l.zm.OPEN_MODAL,
                    properties: { modal: "Read Mode" },
                  });
              },
              openRepay: (e, t, a, n, s) => {
                T("Repay"),
                  E({ isFrozen: t, underlyingAsset: e }),
                  h({
                    eventName: l.zm.OPEN_MODAL,
                    properties: {
                      asset: e,
                      assetName: n,
                      funnel: s,
                      market: a,
                      modal: "Repay",
                    },
                  });
              },
              openShareWallet: () => {
                T("ShareWallet"),
                  h({
                    eventName: l.zm.OPEN_MODAL,
                    properties: { modal: "Share Wallet" },
                  });
              },
              openSupply: (e, t, a, n) => {
                T("Supply"),
                  E({ underlyingAsset: e }),
                  h({
                    eventName: l.zm.OPEN_MODAL,
                    properties: {
                      asset: e,
                      assetName: a,
                      funnel: n,
                      market: t,
                      modal: "Supply",
                    },
                  });
              },
              openSwap: (e) => {
                T("Swap"),
                  E({ underlyingAsset: e }),
                  h({
                    eventName: l.zm.OPEN_MODAL,
                    properties: { asset: e, modal: "Swap" },
                  });
              },
              openWithdraw: (e, t, a, n) => {
                T("Withdraw"),
                  E({ underlyingAsset: e }),
                  h({
                    eventName: l.zm.OPEN_MODAL,
                    properties: {
                      asset: e,
                      assetName: a,
                      funnel: n,
                      market: t,
                      modal: "Withdraw",
                    },
                  });
              },
              type: m,
            },
            children: t,
          });
        },
        w = () => {
          let e = r.useContext(u);
          if (void 0 === e)
            throw Error("useModalContext must be used within a ModalProvider");
          return e;
        };
    },
    42847: (e, t, a) => {
      "use strict";
      a.d(t, { FH: () => c, sr: () => u });
      var n = a(54568),
        s = a(87606),
        r = a(37611),
        i = a(54530),
        o = a(90438),
        l = a(11985);
      BigInt.prototype.toJSON = function () {
        return this.toString();
      };
      let c = (0, i.pY)(),
        d = c.createClient({
          links: [
            (0, r.$H)({
              enabled: (e) =>
                "down" === e.direction && e.result instanceof Error,
            }),
            (0, r.Lb)({
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
        let t = (0, s.jE)();
        return (0, n.jsx)(c.Provider, {
          client: d,
          queryClient: t,
          children: e.children,
        });
      }
    },
    47978: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => n });
      var n = (function (e) {
        return (e.Table = "table"), (e.Grid = "grid"), e;
      })({});
    },
    63850: (e, t, a) => {
      "use strict";
      a.d(t, { i: () => l });
      var n = a(67933),
        s = a(55206),
        r = a(14010),
        i = a(10598),
        o = a(46752);
      let l = (e, t) => {
        var a, l, c;
        let { data: d, isFetching: u } = (0, n.I)({
          queryFn: async () =>
            await Promise.all(
              (0, r.yC)().map(async (e) => {
                let t = (0, r.n9)(e),
                  a = (0, o.sO)(e),
                  n = new s.Contract(t, i, a);
                return {
                  chainId: e,
                  offRamps: (await n.getOffRamps()).map((e) => ({
                    offRamp: e.offRamp,
                    sourceChainSelector: e.sourceChainSelector.toString(),
                  })),
                };
              })
            ),
          queryKey: ["offRamps"],
        });
        return {
          loading: u,
          offRamps:
            null !=
            (c =
              null == d ||
              null == (l = d.find((e) => e.chainId === t)) ||
              null == (a = l.offRamps)
                ? void 0
                : a.filter((t) => t.sourceChainSelector === (0, r.Ax)(e)))
              ? c
              : [],
        };
      };
    },
    64148: (e, t, a) => {
      "use strict";
      a.d(t, { E: () => c, e: () => l });
      var n = a(54568),
        s = a(615),
        r = a(7620),
        i = a(77804),
        o = a(29768);
      let l = (0, s.F)(
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
        c = r.forwardRef((e, t) => {
          let {
              className: a,
              variant: s = "default",
              size: r = "default",
              withCircle: c = !1,
              radius: d = "full",
              shadow: u = "default",
              icon: p,
              iconPosition: w = "left",
              symbol: m,
              children: T,
              ...N
            } = e,
            E = {
              default: "tw-text-utility-gray-500",
              destructive: "tw-text-utility-error-500",
              secondary: "tw-text-utility-brand-500",
              success: "tw-text-utility-success-500",
              warning: "tw-text-utility-warning-500",
            },
            h =
              void 0 === p
                ? ""
                : "default" === r
                ? "left" === w
                  ? "tw-pl-2"
                  : "tw-pr-2"
                : "sm" === r
                ? "left" === w
                  ? "tw-pl-1.5"
                  : "tw-pr-1.5"
                : "lg" === r
                ? "left" === w
                  ? "tw-pl-2.5"
                  : "tw-pr-2.5"
                : "",
            f =
              void 0 === m
                ? ""
                : "default" === r
                ? "left" === w
                  ? "tw-pl-1"
                  : "tw-pr-1"
                : "sm" === r
                ? "left" === w
                  ? "tw-pl-0.5"
                  : "tw-pr-0.5"
                : "lg" === r
                ? "left" === w
                  ? "tw-pl-1.5"
                  : "tw-pr-1.5"
                : "";
          return (0, n.jsxs)("div", {
            className: (0, o.cn)(
              l({ radius: d, shadow: u, size: r, variant: s, withCircle: c }),
              a,
              p ? "tw-flex tw-items-center" : "",
              c ? ("sm" === r ? "tw-gap-1" : "tw-gap-2") : "",
              p ? "tw-gap-1" : "",
              p && h,
              m ? ("sm" === r ? "tw-gap-1" : "tw-gap-1.5") : "",
              m && f
            ),
            ref: t,
            ...N,
            children: [
              c &&
                (0, n.jsx)("span", {
                  className: (0, o.cn)(
                    "tw-inline-block tw-size-2 tw-rounded-full",
                    {
                      default: "tw-bg-utility-gray-500",
                      destructive: "tw-bg-utility-error-500",
                      secondary: "tw-bg-utility-brand-500",
                      success: "tw-bg-utility-success-500",
                      warning: "tw-bg-utility-warning-500",
                    }[null != s ? s : "default"]
                  ),
                }),
              p &&
                "left" === w &&
                (0, n.jsx)(p, {
                  className: (0, o.cn)(
                    "tw-size-3",
                    E[null != s ? s : "default"]
                  ),
                }),
              m && "left" === w && (0, n.jsx)(i.xz, { size: 16, symbol: m }),
              T,
              p &&
                "right" === w &&
                (0, n.jsx)(p, {
                  className: (0, o.cn)(
                    "tw-size-3",
                    E[null != s ? s : "default"]
                  ),
                }),
              m && "right" === w && (0, n.jsx)(i.xz, { size: 16, symbol: m }),
            ],
          });
        });
      c.displayName = "Badge";
    },
    65165: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => o });
      var n = a(54568),
        s = a(7620),
        r = a(92555),
        i = a(29768);
      let o = s.forwardRef((e, t) => {
        let {
            className: a,
            id: o,
            type: l,
            label: c,
            hint: d,
            icon: u,
            iconPosition: p = "left",
            isError: w,
            wrapperAttributes: m,
            iconClassName: T,
            ...N
          } = e,
          E = "left" === p;
        return (0, n.jsxs)(s.Fragment, {
          children: [
            c &&
              (0, n.jsx)(r.J, {
                htmlFor: null != o ? o : "_input",
                children: c,
              }),
            (0, n.jsxs)("span", {
              className: (0, i.cn)(
                "tw-relative tw-flex tw-flex-col tw-gap-1.5",
                null == m ? void 0 : m.className
              ),
              children: [
                u &&
                  (0, n.jsx)(u, {
                    className: (0, i.cn)(
                      "tw-absolute tw-top-1/2 tw-size-4 -tw-translate-y-1/2 tw-text-foreground-quaternary",
                      E ? "tw-left-3" : "tw-right-3",
                      T
                    ),
                  }),
                (0, n.jsx)("input", {
                  className: (0, i.cn)(
                    "tw-flex tw-h-10 tw-w-full tw-rounded-md tw-border tw-border-border tw-bg-background tw-px-3 tw-py-2 tw-text-sm tw-text-primary tw-shadow-input tw-transition-colors placeholder:tw-text-sm placeholder:tw-text-placeholder hover:tw-bg-background-hover focus-visible:tw-border-border-brand focus-visible:tw-outline-none disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
                    a,
                    u && E && "tw-pl-8",
                    u && !E && "tw-pr-8",
                    w && "!tw-border-error"
                  ),
                  ref: t,
                  type: l,
                  ...N,
                }),
                d &&
                  (0, n.jsx)("span", {
                    className: (0, i.cn)(
                      "tw-absolute tw-top-full tw-mt-1.5 tw-text-sm tw-font-normal tw-text-tertiary",
                      w && "tw-text-error"
                    ),
                    children: d,
                  }),
              ],
            }),
          ],
        });
      });
      o.displayName = "Input";
    },
    68324: (e, t, a) => {
      "use strict";
      a.d(t, { d: () => r });
      var n = a(25060),
        s = a(7620);
      function r() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 15,
          [t, a] = s.useState(0);
        return (
          s.useEffect(() => {
            let t = setInterval(() => a((0, n.yf)().unix() + 0), 1e3 * e);
            return () => clearInterval(t);
          }, [e]),
          t
        );
      }
    },
    69130: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => _, H: () => x });
      var n = a(54568),
        s = a(60844),
        r = a(61773),
        i = a(7620),
        o = a(8230),
        l = a(40476),
        c = a(47227),
        d = a(67876),
        u = a(4451),
        p = a(20874),
        w = a(46752),
        m = a(37570),
        T = a(89303),
        N = a(29768),
        E = a(19369),
        h = a(69224),
        f = a(55087),
        b = a(54448),
        y = a(40009),
        g = a(90554);
      let x = (e) => {
        var t, a;
        let n = E.Cj[e];
        if (
          (!w.P6 ||
            (null == n ? void 0 : n.isFork) ||
            (n = E.Cj["fork_".concat(e)]),
          !n)
        ) {
          let e = E.ZS.at(0).market;
          n = E.Cj[e];
        }
        let s = w.or[n.chainId];
        return {
          logo:
            null !=
            (a =
              null != (t = n.logo) ? t : null == s ? void 0 : s.networkLogoPath)
              ? a
              : "",
          market: n,
        };
      };
      function _() {
        var e;
        let [, t] = (0, s.fp)(f.b),
          [a, w] = i.useState(!1),
          { isDesktop: _ } = (0, m.Q)(),
          { switchChain: A } = (0, o.R)(),
          [O] = (0, s.fp)(y.XY),
          [, S] = (0, s.fp)(y.Zo),
          [R] = (0, s.fp)(b.Gg),
          {
            loading: C,
            marketInitialized: I,
            setMarketInitialized: v,
          } = (0, T.sA)(),
          { market: L, logo: k } = x(O),
          U =
            (null == (e = (0, l.F)().connector) ? void 0 : e.switchChain) !==
            void 0,
          D = C || !I;
        return (i.useEffect(() => {
          R && S(R), v(!0);
        }, [R, S, v]),
        D)
          ? (0, n.jsx)(p.E, {
              className: (0, N.cn)("tw-size-9 tw-rounded-full lg:tw-min-w-36"),
            })
          : (0, n.jsxs)(d.rI, {
              onOpenChange: w,
              open: a,
              children: [
                (0, n.jsx)(d.ty, {
                  asChild: !0,
                  children: (0, n.jsxs)(c.Button, {
                    className: (0, N.cn)(
                      "tw-w-fit",
                      a && "tw-border-border-brand tw-outline-none"
                    ),
                    "data-chain": L.chainId,
                    "data-pw": "".concat(
                      g.l.PRO.MARKET_SWITCHER.MARKET_SWITCHER_BUTTON
                    ),
                    disabled: D,
                    size: _ ? "md" : "icon-md",
                    variant: "input",
                    children: [
                      D
                        ? (0, n.jsx)(p.E, {
                            className: "tw-h-7 tw-w-full tw-rounded-full",
                          })
                        : (0, n.jsx)(r.default, {
                            alt: L.marketTitle,
                            height: 28,
                            src: k,
                            width: 28,
                          }),
                      _ &&
                        !D &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            L.isFork && "Forked",
                            " ",
                            L.marketTitle,
                            (0, n.jsx)(u.A.chevronDown, {
                              className: (0, N.cn)(
                                "tw-ml-auto tw-size-5 tw-shrink-0 tw-rotate-0 tw-text-primary tw-opacity-50 tw-transition-transform",
                                a && "tw-rotate-180"
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
                (0, n.jsx)(d.SQ, {
                  className:
                    "tw-z-[105] tw-w-56 tw--translate-x-12 tw-bg-background lg:!tw--translate-x-10 xs:tw--translate-x-24",
                  "data-pw": g.l.PRO.NAVIGATION.DROPDOWNS.MARKETS,
                  onInteractOutside: () => i.startTransition(() => w(!1)),
                  children: (0, n.jsx)(d.I, {
                    className: "tw-flex tw-flex-col tw-gap-0.5",
                    children: E.ZS.map((e) => {
                      let { market: a, logo: s } = x(e.market),
                        i = O === e.market;
                      return (0, n.jsx)(
                        d._2,
                        {
                          action:
                            i &&
                            (0, n.jsx)(u.A.check, {
                              className: "tw-size-4 tw-text-foreground-brand",
                            }),
                          "data-chain": a.chainId,
                          "data-pw": ""
                            .concat(g.l.PRO.MARKET_SWITCHER.MARKET_ITEM, "-")
                            .concat(a.market),
                          isActive: i,
                          onClick: () => {
                            S(e.market),
                              t({
                                eventName: h.zm.CHANGE_MARKET,
                                properties: {
                                  chainId: e.chainId,
                                  from: O,
                                  to: e.market,
                                },
                              }),
                              U && A({ chainId: e.chainId });
                          },
                          children: (0, n.jsxs)("span", {
                            className: "tw-flex tw-items-center tw-gap-2",
                            children: [
                              (0, n.jsx)(r.default, {
                                alt: a.marketTitle,
                                height: 24,
                                src: s,
                                width: 24,
                              }),
                              (0, n.jsxs)("span", {
                                children: [
                                  a.isFork && "Forked",
                                  " ",
                                  a.marketTitle,
                                ],
                              }),
                            ],
                          }),
                        },
                        "".concat(a.chainId, "-").concat(a.market)
                      );
                    }),
                  }),
                }),
              ],
            });
      }
    },
    69224: (e, t, a) => {
      "use strict";
      a.d(t, {
        $Q: () => r,
        AC: () => i,
        J$: () => n,
        MK: () => o,
        _e: () => c,
        tO: () => d,
        u0: () => l,
        w7: () => u,
        yy: () => p,
        zm: () => s,
      });
      let n = {
          CONNECT_WALLET: "Connect wallet",
          COPY_ADDRESS: "Copy address",
          CREATE_WALLET: "Create wallet",
          DISCONNECT_WALLET: "Disconnect wallet",
          FUND_WALLET: "Fund wallet",
          MOCK_WALLET: "Mock wallet",
          REMOVE_MOCK_WALLET: "Remove mock wallet",
          VIEW_EXPLORER: "View explorer",
          VIEW_TX_HISTORY: "View Tx History",
        },
        s = {
          ACCEPT_RISK: "Accept risk",
          CHANGE_MARKET: "Change market",
          EXTERNAL_LINK: "External link",
          FEEDBACK_SUBMITTED: "Feedback submitted",
          MANAGE_ANALYTICS: "Manage analytics",
          MAX_INPUT_SELECTION: "Select Max input",
          OPEN_MODAL: "Open modal",
          SEARCH: "Search",
          SET_SLIPPAGE: "Set slippage",
          SORT: "Sort",
          SWAP_ASSET_SEARCH: "Swap asset search",
          SWITCH_NETWORK: "Switch network",
          VIEW_EXPLORER: "View explorer",
          VIEW_TOOLTIP: "View tooltip",
        },
        r = {
          DETAILS_NAVIGATION: "View reserve details",
          E_MODE_INFO_DASHBOARD: "View e-mode info on dashboard",
          SHOW_ASSETS_0_BALANCE: "Show assets with zero balance dashboard",
          TILE_VISIBILITY: "Toggle tile visibility on dashboard",
          VIEW_MARKETS: "View markets on dashboard",
          VIEW_MODE: "View mode on dashboard",
          VIEW_RISK_DETAILS: "View risk details on dashboard",
        },
        i = { DETAILS_NAVIGATION: "View reserve details markets" },
        o = {
          ADD_TO_WALLET: "Add token to wallet",
          ADD_TOKEN_TO_WALLET_DROPDOWN: "View add token to wallet dropdown",
          GRAPH_TIME_PERIOD: "Graph Time Period Selector",
          RESERVE_TOKEN_ACTIONS: "Reserve Token Action",
          RESERVE_TOKENS_DROPDOWN: "View reserve tokens",
          VIEW_MODE: "View mode on reserve details",
        },
        l = {
          DOWNLOAD: "Tx History Download",
          FILTER: "Tx History Filter Selected",
          SEARCH: "Tx History Search",
        },
        c = { SWITCH_REPAY_TYPE: "Change repay type" },
        d = { SWITCH_WITHDRAW_TYPE: "Change withdraw type" },
        u = {
          MOBILE_MENU: "Mobile Menu",
          SETTINGS_MENU: "Settings Menu",
          WALLET_MENU: "Wallet Menu",
        },
        p = { DARK_MODE: "Dark Mode Toggle" };
    },
    77804: (e, t, a) => {
      "use strict";
      a.d(t, { Cn: () => u, lt: () => l, xz: () => d });
      var n = a(54568),
        s = a(61773),
        r = a(7620),
        i = a(29768);
      let o = r.forwardRef((e, t) => {
        let { symbol: a, size: s = 50 } = e;
        return (0, n.jsxs)("svg", {
          height: s,
          id: "Group_30952",
          ref: t,
          viewBox: "0 0 ".concat(256, " ").concat(256),
          width: s,
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
        let { symbol: t, onImageGenerated: a, aToken: s } = e,
          i = r.useRef(null),
          l = r.useRef(null),
          [c, d] = r.useState(!0);
        return (
          r.useEffect(() => {
            if (c) return;
            let e = i.current;
            if (!e || !(e instanceof HTMLObjectElement)) return;
            let t = e.contentDocument;
            if (s) {
              var n;
              let e = null == t ? void 0 : t.childNodes[0];
              if (!e) return;
              if (!(e instanceof Element))
                return void console.error("Expected an Element but got:", e);
              let s = e.getAttribute("width"),
                r = e.getAttribute("height"),
                i = e.getAttribute("viewBox");
              e.setAttribute("x", "25"),
                e.setAttribute("width", "206"),
                e.setAttribute("y", "25"),
                e.setAttribute("height", "206"),
                i || e.setAttribute("viewBox", "0 0 ".concat(s, " ").concat(r)),
                null == (n = l.current) || n.appendChild(e);
              let o = new XMLSerializer().serializeToString(l.current);
              a(
                "data:image/svg+xml;base64,".concat(
                  window.btoa(unescape(encodeURIComponent(o)))
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
          }, [c, s, a]),
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
                ref: i,
                style: { opacity: 1 },
                title: "token-icon",
              }),
              (0, n.jsx)("span", {
                className: "tw-sr-only",
                children: "token icon for adding in wallet",
              }),
              s && (0, n.jsx)(o, { ref: l }),
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
          [u, p] = r.useState(t.toLowerCase());
        return (
          r.useEffect(() => {
            p(t.toLowerCase());
          }, [t]),
          (0, n.jsx)("span", {
            className: (0, i.cn)("tw-relative tw-flex tw-rounded-full", l),
            children: a
              ? (0, n.jsx)(o, { size: d, symbol: u })
              : (0, n.jsx)(s.default, {
                  alt: "".concat(t, " icon"),
                  className: (0, i.cn)("tw-rounded-full", c),
                  height: null != d ? d : 40,
                  onError: () => p("default"),
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
            size: o,
            wrapperClassName: l,
            className: c,
          } = e,
          [d, u] = r.useState(t.toLowerCase());
        return (0, n.jsx)("span", {
          className: (0, i.cn)("tw-relative tw-flex tw-rounded-full", l),
          children: (0, n.jsx)(s.default, {
            alt: "".concat(t, " icon"),
            className: (0, i.cn)("tw-rounded-full", c),
            height: null != o ? o : 40,
            onError: () => u("default"),
            src: "default" !== d && a ? a : "/images/common/tokens/default.svg",
            width: null != o ? o : 40,
          }),
        });
      }
      o.displayName = "ATokenIcon";
    },
    90554: (e, t, a) => {
      "use strict";
      a.d(t, { l: () => n });
      let n = {
        PRO: {
          CONTAINER: "pro-container",
          DASHBOARD: {
            BORROW: {
              ASSETS: {
                DETAILS_BUTTON: "dashboard-borrow-assets-details-button",
                HIDE_BUTTON: "dashboard-borrow-assets-hide-button",
                LIST: "dashboard-borrow-assets-list",
                LIST_ITEM: "dashboard-borrow-assets-list-item",
              },
              CONTAINER: "dashboard-borrow-assets-container",
              E_MODE: {
                DIALOG_TRIGGER: "dashboard-borrow-e-mode-dialog-trigger",
                SWITCH: "dashboard-borrow-e-mode-switch",
                TRIGGER: "dashboard-borrow-e-mode-trigger",
              },
              POSITIONS: {
                CONTAINER: "dashboard-borrow-positions-container",
                DATA: {
                  APY: "dashboard-borrow-positions-data-apy",
                  BORROW_POWER_USED:
                    "dashboard-borrow-positions-data-borrow-power-used",
                  TOTAL_BALANCE:
                    "dashboard-borrow-positions-data-total-balance",
                },
                DEBT_SWAP_BUTTON: "dashboard-borrow-positions-debt-swap-button",
                EMPTY_STATE: {
                  CONTAINER: "dashboard-borrow-positions-empty-state",
                },
                HIDE_BUTTON: "dashboard-borrow-positions-hide-button",
                LIST: "dashboard-borrow-positions-list",
                LIST_ITEM: "dashboard-borrow-positions-list-item",
                REPAY_BUTTON: "dashboard-borrow-positions-repay-button",
                REPAY_COLLATERAL_BUTTON:
                  "dashboard-borrow-positions-repay-collateral-button",
                REPAY_WALLET_BALANCE_BUTTON:
                  "dashboard-borrow-positions-repay-wallet-balance-button",
              },
              RISK_CHECKBOX: "dashboard-borrow-risk-checkbox",
              TAB_TRIGGER: "dashboard-borrow-tab-trigger",
            },
            SUPPLY: {
              ASSETS: {
                DROPDOWN_MENU: {
                  DETAILS_BUTTON:
                    "dashboard-supply-assets-dropdown-menu-details-button",
                  SWAP_BUTTON:
                    "dashboard-supply-assets-dropdown-menu-swap-button",
                  TRIGGER: "dashboard-supply-assets-dropdown-menu-trigger",
                },
                HIDE_BUTTON: "dashboard-supply-assets-hide-button",
                LIST: "dashboard-supply-assets-list",
                LIST_ITEM: "dashboard-supply-assets-list-item",
                SHOW_ZERO_ASSETS_SWITCH:
                  "dashboard-supply-assets-show-zero-assets-switch",
              },
              CONTAINER: "dashboard-supply-assets-container",
              POSITIONS: {
                COLLATERAL_CHANGE_BUTTON:
                  "dashboard-supply-positions-collateral-change-button",
                COLLATERAL_SWAP_BUTTON:
                  "dashboard-supply-positions-collateral-swap-button",
                CONTAINER: "dashboard-supply-positions-container",
                DATA: {
                  APY: "dashboard-supply-positions-data-apy",
                  COLLATERAL: "dashboard-supply-positions-data-collateral",
                  TOTAL_BALANCE:
                    "dashboard-supply-positions-data-total-balance",
                },
                EMPTY_STATE: {
                  CONTAINER: "dashboard-supply-positions-empty-state",
                  MARKET_LINK:
                    "dashboard-supply-positions-empty-state-market-link",
                },
                HIDE_BUTTON: "dashboard-supply-positions-hide-button",
                LIST: "dashboard-supply-positions-list",
                LIST_ITEM: "dashboard-supply-positions-list-item",
                LIST_ITEM_VALUE: "dashboard-supply-positions-list-item-value",
                WITHDRAW_AND_SWITCH_BUTTON:
                  "dashboard-supply-positions-withdraw-and-switch-button",
                WITHDRAW_BUTTON: "dashboard-supply-positions-withdraw-button",
                WITHDRAW_UNWRAP_BUTTON:
                  "dashboard-supply-positions-withdraw-unwrap-button",
                WITHDRAW_WALLET: "dashboard-supply-positions-withdraw-wallet",
              },
              TAB_TRIGGER: "dashboard-supply-tab-trigger",
            },
            TOP_PANEL: {
              HEALTH_FACTOR: "dashboard-top-panel-health-factor",
              NET_APY: "dashboard-top-panel-net-apy",
              NET_WORTH: "dashboard-top-panel-net-worth",
            },
          },
          EMPTY_SESSION_STATE: "empty-session",
          FAUCET: { BUTTON: "faucet-button" },
          FOOTER: "footer",
          HEADER: "header",
          HISTORY: {
            CONTAINER: "history-container",
            DASHBOARD_LINK: "history-dashboard-link",
            EMPTY_STATE: "history-empty-state",
          },
          MARKET_SWITCHER: {
            CHANGE_NETWORK_BUTTON: "change-network-button",
            MARKET_ITEM: "market-item",
            MARKET_SWITCHER_BUTTON: "market-switcher-button",
            UNSUPPORTED_NETWORK_BUTTON: "unsupported-network-button",
          },
          MARKETS: {
            ASSET: "market-asset",
            CONTAINER: "markets-container",
            SEARCH_INPUT: "markets-search-input",
            TOP_PANEL: {
              TOTAL_AVAILABLE: "markets-top-panel-total-available",
              TOTAL_BORROWS: "markets-top-panel-total-borrows",
              TOTAL_MARKET_SIZE: "markets-top-panel-total-market-size",
            },
          },
          MODAL: {
            APPROVE: { APPROVE_METHOD: "approve-method", LIST: "approve-list" },
            ASSET_INPUT: "asset-input",
            ASSET_INPUT_SYMBOL: "asset-input-symbol",
            ASSET_SELECT_ITEM: "asset-select-item",
            ASSET_SELECT_LIST: "asset-select-list",
            ASSET_SELECT_TRIGGER: "asset-select-trigger",
            FEEDBACK: {
              BUTTON: "feedback-button",
              EMAIL_INPUT: "feedback-email-input",
              MESSAGE_INPUT: "feedback-message-input",
              SUBMIT_BUTTON: "feedback-submit-button",
            },
            HEALTH_FACTOR: {
              BOX: "health-factor-box",
              FOOTER_CLOSE_BUTTON: "health-factor-footer-close-button",
              MODAL: "health-factor-modal",
              TRIGGER: "health-factor-trigger",
              VALUE: "health-factor-value",
            },
            MAX_BUTTON: "max-button",
            SHARE_WALLET: {
              ADDRESS_INPUT: "share-wallet-address-input",
              COPY_BUTTON: "copy-button",
            },
            SLIPPAGE: {
              LIST: "slippage-list",
              LIST_ITEM: "slippage-list-item",
              TRIGGER: "slippage-trigger",
            },
          },
          NAVIGATION: {
            DROPDOWNS: {
              MARKETS: "markets-dropdown",
              SETTINGS: "settings-dropdown",
              SETTINGS_CONTENT: "settings-dropdown-content",
            },
            FOOTER: { MENU_ITEM: "footer-menu-item" },
            HISTORY: { TRIGGER: "history-trigger" },
            LOGO: "navigation-logo",
            MOBILE: {
              MENU_BUTTON: "mobile-menu-button",
              MENU_CONTENT: "mobile-menu-content",
              MENU_ITEM: "mobile-menu-item",
            },
            MORE: "navigation-more-button",
            MORE_CONTENT: "navigation-more-content",
            SWAP_BUTTON: "swap-button",
            TOKEN: {
              ICON_LINK: "token-icon-link",
              NAME_LINK: "token-name-link",
              SYMBOL_LINK: "token-symbol-link",
            },
          },
          PAGE: { TITLE: "page-title" },
          RESERVE: {
            ACTIONS: {
              BASE_ASSET_ITEM: "reserve-actions-base-asset-item",
              BORROW_ACTION: "reserve-actions-borrow-action",
              SUPPLY_ACTION: "reserve-actions-supply-action",
              WALLET_BALANCE: "reserve-actions-wallet-balance",
              WRAPPED_ASSET_ITEM: "reserve-actions-wrapped-asset-item",
              WRAPPED_ASSET_SELECTOR: "reserve-actions-wrapped-asset-selector",
            },
            BACK: "back-button",
            CONFIGURATION: {
              BORROW: {
                CAP_CIRCULAR_STATUS:
                  "reserve-configuration-borrow-cap-circular-status",
              },
              GRAPH_TIME_SELECTOR: "reserve-configuration-graph-time-selector",
              GRAPH_TIME_SELECTOR_ITEM:
                "reserve-configuration-graph-time-selector-item",
              SUPPLY: {
                CAP_CIRCULAR_STATUS:
                  "reserve-configuration-supply-cap-circular-status",
              },
            },
            CONTAINER: "reserve-container",
            LIQUIDITY: "reserve-liquidity",
            MARKET: "reserve-market",
            NAME: "reserve-name",
            ORACLE_PRICE: "reserve-oracle-price",
            ORACLE_PRICE_LINK: "reserve-oracle-price-link",
            SIZE: "reserve-size",
            SYMBOL: "reserve-symbol",
            TABS: {
              INFO: "reserve-tabs-info-tab",
              INFO_CONTENT: "reserve-tabs-info-content",
              OVERVIEW: "reserve-tabs-overview-tab",
              OVERVIEW_CONTENT: "reserve-tabs-overview-content",
              TAB: "reserve-tabs-tab",
            },
            TOKEN_LINKS: {
              A_TOKEN: "reserve-token-links-a-token",
              DEBT_TOKEN: "reserve-token-links-debt-token",
              DROPDOWN: "reserve-token-links-dropdown",
              TRIGGER: "reserve-token-links-trigger",
              UNDERLYING_TOKEN: "reserve-token-links-underlying-token",
            },
            TOKEN_WALLET: {
              A_TOKEN: "reserve-token-wallet-a-token",
              DROPDOWN: "reserve-token-wallet-dropdown",
              TRIGGER: "reserve-token-wallet-trigger",
              UNDERLYING_TOKEN: "reserve-token-wallet-underlying-token",
            },
            UTILIZATION: "reserve-utilization",
          },
          SETTINGS: {
            TESTNET_SWITCH: "testnet-switch",
            TESTNET_WARNING_BUTTON: "testnet-warning-button",
            WATCH_WALLET: {
              ADDRESS_INPUT: "watch-wallet-address-input",
              STOP_WATCHING_BUTTON: "stop-watching-button",
              WATCH_WALLET_BUTTON: "watch-wallet-button",
            },
          },
          THEME: { SWITCH: "theme-switch" },
          WALLET: {
            CONNECT_WALLET_BUTTON: "connect-wallet-button",
            CONNECTED_WALLET_BUTTON: "connected-wallet-button",
            DISCONNECT_WALLET_BUTTON: "disconnect-wallet-button",
            MENU: {
              COPY_ADDRESS_BUTTON: "copy-address-button",
              EXPLORER_BUTTON: "explorer-button",
              SHARE_BUTTON: "share-button",
              WALLET_ADDRESS: "wallet-address",
              WALLET_MENU: "wallet-menu",
            },
            SWITCH_NETWORK_BUTTON: "switch-network-button",
          },
          WARNINGS: { WALLET_EMPTY: "wallet-empty-warning" },
        },
      };
    },
    92555: (e, t, a) => {
      "use strict";
      a.d(t, { J: () => c });
      var n = a(54568),
        s = a(56559),
        r = a(615),
        i = a(7620),
        o = a(29768);
      let l = (0, r.F)(
          "tw-cursor-pointer tw-text-sm tw-font-medium tw-text-secondary peer-disabled:tw-cursor-not-allowed peer-disabled:tw-opacity-70"
        ),
        c = i.forwardRef((e, t) => {
          let { className: a, ...r } = e;
          return (0, n.jsx)(s.b, {
            className: (0, o.cn)(l(), a),
            ref: t,
            ...r,
          });
        });
      c.displayName = s.b.displayName;
    },
  },
  (e) => {
    e.O(
      0,
      [
        9386, 3387, 1834, 7261, 8745, 3970, 160, 787, 887, 4154, 747, 1504,
        6553, 5461, 9953, 7653, 7362, 3354, 4627, 5445, 7478, 1239, 1675, 9169,
        5948, 4050, 9890, 293, 7453, 3709, 1316, 3122, 3195, 5377, 5087, 7065,
        8803, 587, 1902, 7358,
      ],
      () => e((e.s = 2947))
    ),
      (_N_E = e.O());
  },
]);
