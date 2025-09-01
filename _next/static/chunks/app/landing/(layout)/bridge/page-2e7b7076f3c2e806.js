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
      (e._sentryDebugIds[t] = "afca33e5-c484-4149-905e-15e42c48c85e"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-afca33e5-c484-4149-905e-15e42c48c85e"));
  })();
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8854],
  {
    4061: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => l, H: () => d });
      var a = n(54568),
        s = n(7620),
        r = n(46752);
      class i {
        async getERC20Service(e) {
          let t = this.getProvider(e),
            { ERC20Service: a } = await Promise.all([
              n.e(1659),
              n.e(5505),
              n.e(4731),
              n.e(1059),
              n.e(2341),
              n.e(1447),
            ]).then(n.bind(n, 91447));
          return new a(t);
        }
        async getApprovedAmount(e, t, n, a) {
          return (await this.getERC20Service(e)).approvedAmount({
            spender: a,
            token: n,
            user: t,
          });
        }
        constructor(e) {
          this.getProvider = e;
        }
      }
      let o = s.createContext(void 0),
        l = (e) => {
          let { children: t } = e,
            n = new i(r.sO);
          return (0, a.jsx)(o, { value: n, children: t });
        },
        d = () => {
          let e = s.useContext(o);
          if (void 0 === e)
            throw Error(
              "useApprovedAmount must be used within an ApprovedAmountProvider"
            );
          return e;
        };
    },
    10598: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"wrappedNative","type":"address"},{"internalType":"address","name":"armProxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"BadARMSignal","type":"error"},{"inputs":[],"name":"FailedToSendValue","type":"error"},{"inputs":[],"name":"InsufficientFeeTokenAmount","type":"error"},{"inputs":[],"name":"InvalidMsgValue","type":"error"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"InvalidRecipientAddress","type":"error"},{"inputs":[{"internalType":"uint64","name":"chainSelector","type":"uint64"},{"internalType":"address","name":"offRamp","type":"address"}],"name":"OffRampMismatch","type":"error"},{"inputs":[],"name":"OnlyOffRamp","type":"error"},{"inputs":[{"internalType":"uint64","name":"destChainSelector","type":"uint64"}],"name":"UnsupportedDestinationChain","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"messageId","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"indexed":false,"internalType":"address","name":"offRamp","type":"address"},{"indexed":false,"internalType":"bytes32","name":"calldataHash","type":"bytes32"}],"name":"MessageExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"indexed":false,"internalType":"address","name":"offRamp","type":"address"}],"name":"OffRampAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"indexed":false,"internalType":"address","name":"offRamp","type":"address"}],"name":"OffRampRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint64","name":"destChainSelector","type":"uint64"},{"indexed":false,"internalType":"address","name":"onRamp","type":"address"}],"name":"OnRampSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"MAX_RET_BYTES","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint64","name":"destChainSelector","type":"uint64"},{"internalType":"address","name":"onRamp","type":"address"}],"internalType":"struct Router.OnRamp[]","name":"onRampUpdates","type":"tuple[]"},{"components":[{"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"internalType":"address","name":"offRamp","type":"address"}],"internalType":"struct Router.OffRamp[]","name":"offRampRemoves","type":"tuple[]"},{"components":[{"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"internalType":"address","name":"offRamp","type":"address"}],"internalType":"struct Router.OffRamp[]","name":"offRampAdds","type":"tuple[]"}],"name":"applyRampUpdates","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"destinationChainSelector","type":"uint64"},{"components":[{"internalType":"bytes","name":"receiver","type":"bytes"},{"internalType":"bytes","name":"data","type":"bytes"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct Client.EVMTokenAmount[]","name":"tokenAmounts","type":"tuple[]"},{"internalType":"address","name":"feeToken","type":"address"},{"internalType":"bytes","name":"extraArgs","type":"bytes"}],"internalType":"struct Client.EVM2AnyMessage","name":"message","type":"tuple"}],"name":"ccipSend","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getArmProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"destinationChainSelector","type":"uint64"},{"components":[{"internalType":"bytes","name":"receiver","type":"bytes"},{"internalType":"bytes","name":"data","type":"bytes"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct Client.EVMTokenAmount[]","name":"tokenAmounts","type":"tuple[]"},{"internalType":"address","name":"feeToken","type":"address"},{"internalType":"bytes","name":"extraArgs","type":"bytes"}],"internalType":"struct Client.EVM2AnyMessage","name":"message","type":"tuple"}],"name":"getFee","outputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOffRamps","outputs":[{"components":[{"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"internalType":"address","name":"offRamp","type":"address"}],"internalType":"struct Router.OffRamp[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"destChainSelector","type":"uint64"}],"name":"getOnRamp","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"chainSelector","type":"uint64"}],"name":"getSupportedTokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWrappedNative","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"chainSelector","type":"uint64"}],"name":"isChainSupported","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"internalType":"address","name":"offRamp","type":"address"}],"name":"isOffRamp","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"messageId","type":"bytes32"},{"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"internalType":"bytes","name":"sender","type":"bytes"},{"internalType":"bytes","name":"data","type":"bytes"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct Client.EVMTokenAmount[]","name":"destTokenAmounts","type":"tuple[]"}],"internalType":"struct Client.Any2EVMMessage","name":"message","type":"tuple"},{"internalType":"uint16","name":"gasForCallExactCheck","type":"uint16"},{"internalType":"uint256","name":"gasLimit","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"routeMessage","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"retData","type":"bytes"},{"internalType":"uint256","name":"gasUsed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wrappedNative","type":"address"}],"name":"setWrappedNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"typeAndVersion","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]'
      );
    },
    14010: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ax: () => I,
        Ho: () => f,
        SA: () => T,
        aQ: () => A,
        bH: () => E,
        n9: () => v,
        or: () => h,
        ry: () => R,
        y0: () => S,
        yC: () => C,
      });
      var a = n(86957),
        s = n(67582),
        r = n(60455),
        i = n(73505),
        o = n(13432),
        l = n(51452),
        d = n(3233),
        c = n(89601),
        u = n(9720),
        p = n(34252),
        m = n(33782),
        w = n(46752);
      let h = "252000";
      var f = (function (e) {
        return (
          (e[(e.UNTOUCHED = 0)] = "UNTOUCHED"),
          (e[(e.IN_PROGRESS = 1)] = "IN_PROGRESS"),
          (e[(e.SUCCESS = 2)] = "SUCCESS"),
          (e[(e.FAILURE = 3)] = "FAILURE"),
          e
        );
      })({});
      let T = ["transaction", "bridging", "complete"],
        y = {
          BRIDGE_TOKEN_ADDRESS: o.Pv.USD1_LEGACY_ADDRESS,
          BRIDGE_TOKEN_SYMBOL: o.Um.SYMBOL,
          BURN_MINT_TOKEN_POOL: "0xf9e47d3720d5142930444ae6773c7f6d05696228",
          CCIP_CHAIN_SELECTOR: "5009297550715157269",
          CCIP_ROUTER: "0x80226fc0ee2b096224eeac085bb9a8cba1146f7d",
          PRICE_FEED_ORACLE: "0xF0d9bb015Cd7BfAb877B7156146dc09Bf461370d",
        },
        b = {
          BRIDGE_TOKEN_ADDRESS: o.Pv.USD1_LEGACY_ADDRESS,
          BRIDGE_TOKEN_SYMBOL: o.Um.SYMBOL,
          BURN_MINT_TOKEN_POOL: "0xce3f7378ae409e1ce0dd6ffa70ab683326b73f04",
          CCIP_CHAIN_SELECTOR: "11344663589394136015",
          CCIP_ROUTER: "0x34B03Cb9086d7D758AC55af71584F81A598759FE",
          PRICE_FEED_ORACLE: "0xaD8b4e59A7f25B68945fAf0f3a3EAF027832FFB0",
        },
        N = {
          BRIDGE_TOKEN_ADDRESS: o.Pv.USD1_ADDRESS,
          BRIDGE_TOKEN_SYMBOL: o.Um.SYMBOL,
          BURN_MINT_TOKEN_POOL: "0x4b75fe6e4a53a510abc39c7328b0b06e74a3f624",
          CCIP_CHAIN_SELECTOR: "17912061998839310979",
          CCIP_ROUTER: "0x5C4f4622AD0EC4a47e04840db7E9EcA8354109af",
          PRICE_FEED_ORACLE: void 0,
        },
        x = [
          {
            bridgeTokenAddress: y.BRIDGE_TOKEN_ADDRESS,
            burnMintTokenPool: y.BURN_MINT_TOKEN_POOL,
            chain: d.r,
            chainSelector: y.CCIP_CHAIN_SELECTOR,
            feeTokens: [
              {
                address: l.L,
                balance: "0",
                chainId: d.r.id,
                decimals: 18,
                extensions: { isNative: !0 },
                logoURI: "https://"
                  .concat(o.w4, "/assets/tokens/ETH_")
                  .concat(d.r.id, ".svg"),
                name: "Ethereum",
                symbol: "ETH",
              },
            ],
            router: y.CCIP_ROUTER,
            sourceChainId: d.r.id,
            tokenOracle: y.PRICE_FEED_ORACLE,
            wrappedNativeOracle: a.kf.WETH.ORACLE,
          },
          {
            bridgeTokenAddress: b.BRIDGE_TOKEN_ADDRESS,
            burnMintTokenPool: b.BURN_MINT_TOKEN_POOL,
            chain: c.N,
            chainSelector: b.CCIP_CHAIN_SELECTOR,
            feeTokens: [
              {
                address: l.L,
                balance: "0",
                chainId: c.N.id,
                decimals: 18,
                extensions: { isNative: !0 },
                logoURI: "https://"
                  .concat(o.w4, "/assets/tokens/BNB_")
                  .concat(c.N.id, ".png"),
                name: "Binance Coin",
                symbol: "BNB",
              },
            ],
            router: b.CCIP_ROUTER,
            sourceChainId: c.N.id,
            tokenOracle: b.PRICE_FEED_ORACLE,
            wrappedNativeOracle: s.kf.WBNB.ORACLE,
          },
          {
            bridgeTokenAddress: N.BRIDGE_TOKEN_ADDRESS,
            burnMintTokenPool: N.BURN_MINT_TOKEN_POOL,
            chain: u.E,
            chainSelector: N.CCIP_CHAIN_SELECTOR,
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
            router: N.CCIP_ROUTER,
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
            chain: m.Y,
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
            sourceChainId: m.Y.id,
            tokenOracle: "0x1f885520b7BD528E46b390040F12E753Dce43004",
            wrappedNativeOracle: i.kf.WETH.ORACLE,
          },
        ],
        E = ((e) =>
          w.P6
            ? e.map((e) =>
                e.sourceChainId === w.r_
                  ? {
                      ...e,
                      feeTokens: e.feeTokens.map((e) => ({
                        ...e,
                        chainId: w.pq,
                      })),
                      sourceChainId: w.pq,
                    }
                  : e
              )
            : e)(w._N ? g : x);
      function I(e) {
        var t;
        let n =
          null == (t = E.find((t) => t.sourceChainId === e))
            ? void 0
            : t.chainSelector;
        if (!n) throw Error("No chainSelector found for chain ".concat(e));
        return n;
      }
      function A(e) {
        var t;
        let n =
          null == (t = E.find((t) => t.chainSelector === e))
            ? void 0
            : t.sourceChainId;
        if (!n) throw Error("No chainId found for chainSelector ".concat(e));
        return n;
      }
      function v(e) {
        var t;
        let n =
          null == (t = E.find((t) => t.sourceChainId === e))
            ? void 0
            : t.router;
        if (!n) throw Error("No router found for chain ".concat(e));
        return n;
      }
      function C() {
        return E.map((e) => e.sourceChainId);
      }
      function S(e) {
        let t = E.find((t) => t.sourceChainId === e);
        if (!t) throw Error("No config found for chain ".concat(e));
        return t;
      }
      let R = C().map((e) => {
        let t = w.or[e];
        if (!t) throw Error("Network config not found for chain ".concat(e));
        return {
          ...t,
          chainId: e,
          name: t.name || "Chain ".concat(e),
          publicJsonRPCUrl: t.publicJsonRPCUrl || [],
        };
      });
    },
    18096: (e, t, n) => {
      "use strict";
      n.d(t, { BridgeContent: () => e4 });
      var a = n(54568),
        s = n(56005),
        r = n(40160),
        i = n(13432),
        o = n(37653),
        l = n(51452),
        d = n(66733),
        c = n(60844),
        u = n(27261),
        p = n.n(u),
        m = n(7620),
        w = n(3233),
        h = n(9720),
        f = n(40476),
        T = n(8230),
        y = n(81195),
        b = n(53125),
        N = n(61773),
        x = n(67876),
        g = n(4451),
        E = n(29768);
      let I = (e) => {
        let {
            supportedBridgeMarkets: t,
            onChange: n,
            selectedNetwork: s,
            label: r,
            dataPw: i,
          } = e,
          [o, l] = m.useState(!1),
          d = 1 === t.length;
        return (0, a.jsxs)(x.rI, {
          onOpenChange: d ? void 0 : l,
          open: o,
          children: [
            (0, a.jsxs)(x.ty, {
              className: (0, E.cn)(
                "tw-w-full tw-flex-col tw-gap-0 tw-rounded-md tw-border tw-border-transparent tw-bg-background-secondary tw-p-0 tw-text-primary tw-shadow-none tw-outline-none tw-transition-colors hover:tw-bg-background-hover focus-visible:tw-shadow-button-focus-simple disabled:tw-pointer-events-none disabled:tw-cursor-not-allowed disabled:tw-bg-background-disabled-subtle disabled:tw-text-disabled",
                o && "tw-border-border-brand tw-outline-none",
                d && "tw-pointer-events-none"
              ),
              "data-pw": i,
              children: [
                (0, a.jsx)("span", {
                  className:
                    "tw-w-full tw-pl-3 tw-pt-3 tw-text-left tw-text-sm tw-font-normal tw-text-tertiary",
                  children: r,
                }),
                (0, a.jsxs)("span", {
                  className:
                    "tw-flex tw-w-full tw-items-center tw-justify-between tw-px-3 tw-pb-3 tw-pt-2",
                  children: [
                    (0, a.jsxs)("span", {
                      className:
                        "tw-flex tw-items-center tw-gap-2 tw-text-sm tw-font-semibold",
                      children: [
                        (0, a.jsx)(N.default, {
                          alt: s.name,
                          className: "tw-aspect-square",
                          height: 20,
                          src: s.networkLogoPath,
                          width: 20,
                        }),
                        (0, a.jsx)("span", {
                          "data-pw": "".concat(i, "-label"),
                          children: s.name,
                        }),
                      ],
                    }),
                    !d &&
                      (0, a.jsx)(g.A.chevronDown, {
                        className: (0, E.cn)(
                          "tw-ml-auto tw-size-5 tw-shrink-0 tw-rotate-0 tw-text-foreground-button-secondary tw-opacity-50 tw-transition-transform",
                          o && "tw-rotate-180"
                        ),
                      }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(x.SQ, {
              className: "dropdown-content-width-full",
              "data-pw": "".concat(i, "-dropdown-content"),
              onInteractOutside: () => m.startTransition(() => l(!1)),
              children: (0, a.jsx)(x.I, {
                className: "tw-flex tw-flex-col tw-gap-0.5",
                children: t.map((e) => {
                  let r = s.chainId === e.chainId;
                  return (0, a.jsx)(
                    x._2,
                    {
                      action:
                        r &&
                        (0, a.jsx)(g.A.check, {
                          className: "tw-size-4 tw-text-foreground-brand",
                        }),
                      "data-pw": ""
                        .concat(i, "-")
                        .concat(e.chainId.toString().toLowerCase(), "-option"),
                      isActive: r,
                      onClick: () =>
                        void ((e) => {
                          let a = t.find((t) => t.chainId === e.chainId);
                          a && n(a);
                        })(e),
                      children: (0, a.jsxs)("span", {
                        className: "tw-flex tw-items-center tw-gap-2",
                        children: [
                          (0, a.jsx)(N.default, {
                            alt: e.name,
                            height: 20,
                            src: e.networkLogoPath,
                            width: 20,
                          }),
                          e.name,
                        ],
                      }),
                    },
                    "".concat(e.chainId)
                  );
                }),
              }),
            }),
          ],
        });
      };
      var A = n(36541),
        v = n(27761),
        C = n(26080),
        S = n(32583);
      let R = () => {
        let e = (0, c.Xr)(S.b);
        return (0, a.jsx)(v.w, {
          content: (0, a.jsx)("p", {
            id: "amount-with-fee-tooltip-text",
            children:
              "The total amount bridged minus CCIP fees. Paying in network token does not impact USD1 amount.",
          }),
          onOpenChange: (t) => {
            t &&
              e({
                eventName: C.zm.VIEW_TOOLTIP,
                properties: { tooltip: "amount-with-fee-tooltip" },
              });
          },
          trigger: (0, a.jsx)(g.A.info, {
            className: "tw-size-4",
            id: "amount-with-fee-tooltip",
          }),
        });
      };
      var O = n(47227);
      let _ = () => {
        let e = (0, c.Xr)(S.b);
        return (0, a.jsx)(v.w, {
          content: (0, a.jsxs)("p", {
            id: "estimated-time-tooltip-text",
            children: [
              "The source chain time to finality is the main factor that determines the time to destination.",
              " ",
              (0, a.jsx)(O.Button, {
                asChild: !0,
                size: "fit",
                variant: "link-secondary",
                children: (0, a.jsx)(p(), {
                  href: "https://docs.chain.link/ccip/ccip-execution-latency#finality-by-blockchain",
                  rel: "noreferrer noopener nofollow",
                  target: "_blank",
                  children: "Learn more",
                }),
              }),
            ],
          }),
          onOpenChange: (t) => {
            t &&
              e({
                eventName: C.zm.VIEW_TOOLTIP,
                properties: { tooltip: "estimated-time-tooltip" },
              });
          },
          trigger: (0, a.jsx)(g.A.info, {
            className: "tw-size-4",
            id: "estimated-time-tooltip",
          }),
        });
      };
      var k = n(87606),
        j = n(86389),
        L = n(55206),
        B = n(14010),
        P = n(28359),
        D = n(89303),
        U = n(91912),
        M = n(10042);
      let G = (e) => {
        let { action: t, open: n, setOpenChange: s } = e,
          { currentAccount: r } = (0, D.sA)(),
          i = (0, c.Xr)(U.TE);
        return (0, a.jsx)(P.lG, {
          onOpenChange: s,
          open: n,
          children: (0, a.jsxs)(P.Cf, {
            children: [
              (0, a.jsx)(P.c7, {
                "data-pw": M.l.MODAL.TERMS_DIALOG,
                children: (0, a.jsx)(P.L3, {
                  children: "Agree to Terms of Service",
                }),
              }),
              (0, a.jsxs)(P.R4, {
                className: "tw-pb-6",
                children: [
                  (0, a.jsxs)("p", {
                    className: "tw-text-sm tw-font-normal tw-text-secondary",
                    children: [
                      "This service is provided by Chainlink CCIP. Before continuing, you must confirm that you have read, understood, and agreed to Chainlink's",
                      " ",
                      (0, a.jsx)(O.Button, {
                        asChild: !0,
                        size: "fit",
                        variant: "link-secondary",
                        children: (0, a.jsx)(p(), {
                          href: "https://chain.link/terms",
                          rel: "noopener noreferrer nofollow",
                          target: "_blank",
                          children: "Terms of Service",
                        }),
                      }),
                      ".",
                    ],
                  }),
                  (0, a.jsx)("p", {
                    className: "tw-text-sm tw-text-tertiary",
                    children:
                      'Chainlink CCIP is currently in its beta stage of development. Your use of Chainlink CCIP is entirely at your own risk. The service is provided "as is," without any warranties, representations, guarantees, or conditions of any kind.',
                  }),
                ],
              }),
              (0, a.jsxs)(P.Es, {
                className:
                  "tw-flex tw-flex-col tw-gap-2 sm:tw-flex-row-reverse",
                children: [
                  (0, a.jsx)(O.Button, {
                    className: "tw-w-full",
                    "data-pw": M.l.MODAL.TERMS_DIALOG_ACCEPT_BUTTON,
                    onClick: () => {
                      i((e) => ({ ...e, [r]: !0 })), t(), s(!1);
                    },
                    children: "Agree & continue",
                  }),
                  (0, a.jsx)(O.Button, {
                    className: "tw-w-full",
                    onClick: () => {
                      s(!1);
                    },
                    variant: "secondary",
                    children: "Cancel",
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var F = n(97685),
        H = n(10598),
        W = n(7790),
        z = n(46752),
        K = n(70552),
        Y = n(19302),
        q = n(42648),
        V = n(10558),
        X = n(42847),
        J = n(30387),
        $ = n(76775);
      let Q = m.memo((e) => {
        var t;
        let {
            amountToBridge: n,
            isWrongNetwork: s,
            symbol: r,
            blocked: o,
            tokenAddress: l,
            sourceChainId: d,
            destinationChainId: u,
            decimals: p,
            message: w,
            fees: h,
            isCustomFeeToken: f,
          } = e,
          T = (0, c.md)(U.TE),
          y = (0, q.k)(),
          b = (0, k.jE)(),
          N = X.FH.useUtils(),
          { currentAccount: x } = (0, D.sA)(),
          {
            approvalTxState: g,
            mainTxState: E,
            loadingTxns: I,
            setLoadingTxns: A,
            setApprovalTxState: v,
            setMainTxState: C,
            setGasLimit: S,
            setTxError: R,
          } = (0, V.Fn)(),
          {
            data: O,
            refetch: _,
            isFetching: P,
            isFetchedAfterMount: M,
          } = (0, Y.H)({ chainId: d, spender: (0, B.n9)(d), token: l });
        A(P);
        let Q =
          0 !== Number(n) &&
          (0, $._)({
            amount: n,
            approvedAmount: O ? O.toString() : "0",
            signedAmount: "0",
          });
        Q && (null == g ? void 0 : g.success) && v({}),
          m.useEffect(() => {
            M || _();
          }, [_, M]);
        let { approval: Z } = (0, K.L)({
          amountToApprove: n,
          approvedAmount: {
            amount: (null == O ? void 0 : O.toString()) || "0",
            spender: (0, B.n9)(d),
            token: l,
            user: x,
          },
          chain: (0, B.y0)(d).chain,
          decimals: p,
          onApprovalTxConfirmed: () => void _(),
          protocolAction: "bridge",
          requiresApproval: Q,
          signatureAmount: n,
          usePermit: !1,
        });
        m.useEffect(() => {
          let e = 0;
          (e = Number(B.or)),
            Q && !g.success && (e += Number(i.DG.APPROVAL_GAS_LIMIT)),
            S(e.toString());
        }, [Q, g, S]);
        let ee = async () => {
          try {
            C({ ...E, loading: !0 });
            let e = (0, z.sO)(d),
              t = (0, B.n9)(d),
              n = new L.Contract(t, H, e),
              a = (0, B.Ax)(u),
              s = {};
            if ((f || (s.value = h), !n.populateTransaction.ccipSend))
              throw Error("Router does not support ccipSend");
            let r = await n.populateTransaction.ccipSend(a, w, s),
              i = await y(r);
            await N.activity.bridge.invalidate(),
              await b.invalidateQueries({
                queryKey: j.$q.tokenBalance(l, x, d),
              }),
              C({ loading: !1, success: !1, txHash: i.hash }),
              R(void 0);
          } catch (e) {
            R((0, W.u)(e, J.P.GAS_ESTIMATION, !1)),
              C({ loading: !1, txHash: void 0 });
          }
        };
        return (0, a.jsx)(F.h, {
          actionInProgressText: (0, a.jsxs)(a.Fragment, {
            children: ["Sending ", r],
          }),
          actionText: (0, a.jsxs)(a.Fragment, { children: ["Send ", r] }),
          amount: n,
          approvalTxState: g,
          approvedAmount: null != O ? O : 0,
          assetAddress: l,
          blocked: o,
          buttonClassName: "!tw-h-9 md:!tw-h-10",
          handleAction: ee,
          handleApproval: Z,
          isWrongNetwork: s,
          mainTxState: E,
          preparingTransactions: I || !h,
          requiresAmount: !0,
          requiresApproval: Q,
          symbol: r,
          terms: { accepted: null != (t = T[x]) && t, dialog: G },
          tryPermit: !1,
        });
      });
      Q.displayName = "BridgeActions";
      var Z = n(37723),
        ee = n(32629),
        et = n(77804),
        en = n(65165),
        ea = n(20874),
        es = n(27118);
      let er = (e) => {
        let {
            value: t,
            usdValue: n,
            maxValue: s,
            asset: r,
            symbol: i,
            disabled: o,
            disableInput: l,
            isMaxSelected: d,
            onChange: u,
            inputTitle: p,
            balanceText: m,
            event: w,
            loading: h,
          } = e,
          { setTxError: f } = (0, V.Fn)(),
          T = (0, c.Xr)(S.b),
          y = (e) => e.replaceAll(",", ""),
          b = Number.isNaN(Number(n)) ? 0 : Number(n);
        return (0, a.jsxs)("div", {
          className: "tw-rounded-md tw-bg-background-secondary tw-p-3",
          children: [
            (0, a.jsx)("span", {
              className:
                "tw-mb-2.5 tw-flex tw-items-center tw-gap-2 tw-text-sm tw-font-normal tw-text-tertiary",
              children: p || "Amount",
            }),
            (0, a.jsx)("span", {
              className: "tw-flex tw-items-center tw-gap-2",
              children: h
                ? (0, a.jsx)(ea.E, {
                    className: "tw-h-10 tw-w-full tw-rounded-md",
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(Z.HG, {
                        allowNegative: !1,
                        autoFocus: !0,
                        className:
                          "tw-text-ellipsis tw-border-none tw-bg-transparent tw-p-0 tw-text-2xl tw-font-semibold tw-text-primary tw-shadow-none placeholder:tw-text-2xl placeholder:tw-text-placeholder hover:tw-bg-transparent",
                        customInput: en.p,
                        "data-pw": es.l.LANDING.BRIDGE.ASSET_INPUT,
                        disabled: o || l,
                        onBlur: (e) => {
                          u &&
                            (Number(y(e.target.value)) > Number(s) && u("-1"),
                            f(void 0));
                        },
                        onChange: (e) => {
                          u && (u(y(e.target.value)), f(void 0));
                        },
                        placeholder: "0.00",
                        thousandSeparator: !0,
                        value: t,
                        valueIsNumericString: !0,
                        wrapperAttributes: { className: "tw-flex-1 tw-w-full" },
                      }),
                      (0, a.jsxs)("span", {
                        className: "tw-flex tw-items-center tw-gap-2",
                        children: [
                          "" !== t &&
                            !l &&
                            (0, a.jsx)(O.Button, {
                              className: "tw-size-5 tw-p-0",
                              "data-pw":
                                es.l.LANDING.BRIDGE.ASSET_INPUT_CLEAR_BUTTON,
                              disabled: o,
                              onClick: () => {
                                null == u || u("");
                              },
                              size: "icon-md",
                              variant: "link-tertiary",
                              children: (0, a.jsx)(g.A.circleX, {
                                className: "tw-size-5",
                              }),
                            }),
                          (0, a.jsxs)("span", {
                            className:
                              "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-font-semibold tw-text-foreground-button-secondary",
                            children: [
                              (0, a.jsx)(et.xz, {
                                aToken: r.aToken,
                                size: 28,
                                symbol: r.iconSymbol || r.symbol,
                              }),
                              i,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
            }),
            (0, a.jsx)("div", {
              className:
                "tw-mt-2 tw-flex tw-items-center tw-justify-between tw-gap-1",
              children: h
                ? (0, a.jsx)(ea.E, {
                    className: "tw-h-4 tw-w-16 tw-rounded-md",
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("span", {
                        className: (0, E.cn)(
                          "tw-text-xs tw-font-normal tw-text-placeholder-subtle",
                          b > 0 && "tw-text-tertiary"
                        ),
                        children: (0, a.jsx)(ee.G, {
                          compact: !0,
                          symbol: "USD",
                          symbolClassName: "tw-mr-0.5",
                          value: b,
                        }),
                      }),
                      r.balance &&
                        u &&
                        (0, a.jsxs)("span", {
                          className:
                            "tw-flex tw-items-center tw-gap-1 tw-text-xs tw-font-normal tw-text-tertiary",
                          children: [
                            (0, a.jsx)("span", {
                              className: "tw-text-quaternary",
                              children: m && "" !== m ? m : "Balance",
                            }),
                            (0, a.jsx)(ee.G, {
                              compact: !0,
                              "data-pw": es.l.LANDING.BRIDGE.BALANCE_TEXT,
                              value: r.balance,
                            }),
                            !l &&
                              (0, a.jsx)(O.Button, {
                                className: "tw-mb-0.5 tw-ml-0.5",
                                "data-pw": es.l.LANDING.BRIDGE.MAX_BUTTON,
                                disabled: o || d,
                                onClick: () => {
                                  w && T(w), u("-1");
                                },
                                size: "fit",
                                variant: "link-secondary",
                                children: "Set max",
                              }),
                          ],
                        }),
                    ],
                  }),
            }),
          ],
        });
      };
      var ei = n(67933),
        eo = n(81734);
      let el = function (e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = ".eth" === e.slice(-4),
          a = (0, eo.P)(e),
          {
            data: s,
            isLoading: r,
            error: i,
          } = (0, ei.I)({
            enabled: t && n && e.length > 0,
            queryFn: async () => {
              if (!e || !n) return null;
              let t = (0, z.Oq)(),
                a = await t.resolveName(e);
              return a ? a.toLowerCase() : null;
            },
            queryKey: ["ens-resolver", e],
            retry: 2,
            staleTime: 3e5,
          }),
          o = a ? e : null != s ? s : null;
        return {
          error: i || null,
          isResolving: n && r,
          isValidAddress: !!(o && (0, eo.P)(o)),
          resolvedAddress: o,
        };
      };
      var ed = n(92996),
        ec = n(92555),
        eu = n(87680);
      let ep = (e) => {
          let { onInputValid: t, onInputError: n, inputTitle: s } = e,
            { currentAccount: r, loading: i } = (0, D.sA)(),
            { isContractAddress: o, isFetching: l } = (0, eu.i)(r),
            [d, c] = m.useState(!0),
            [u, p] = m.useState(""),
            [w, h] = m.useState(!1),
            {
              resolvedAddress: f,
              isValidAddress: T,
              isResolving: y,
            } = el(u, !d && u.length > 0);
          m.useEffect(() => {
            l || (o ? (c(!1), p("")) : (c(!0), p(r)), h(!1));
          }, [r, o, l]),
            m.useEffect(() => {
              if (d && r) return void t(r);
              d || (T && f ? t(f) : n());
            }, [d, r, T, f, t, n]);
          let b = l || y,
            N = !d && w,
            x = ".eth" === u.slice(-4),
            I = 0 === u.length,
            A = u.length > 0,
            v = {
              ensResolutionFailed: x && A && !y && !T,
              invalidAddress: !x && A && !T,
              isEmpty: I,
            },
            C = N && (v.isEmpty || v.ensResolutionFailed || v.invalidAddress),
            S = C
              ? v.isEmpty
                ? "Please enter a destination address"
                : v.ensResolutionFailed
                ? "ENS name could not be resolved to a valid address"
                : v.invalidAddress
                ? "Please enter a valid wallet address"
                : null
              : null;
          return (0, a.jsxs)("div", {
            className: "tw-flex tw-flex-col tw-gap-2",
            children: [
              (0, a.jsxs)("div", {
                className: (0, E.cn)(
                  "tw-rounded-md tw-border tw-border-transparent tw-bg-background-secondary tw-p-3",
                  C && "tw-border-error-border"
                ),
                children: [
                  (0, a.jsx)("span", {
                    className:
                      "tw-mb-2 tw-flex tw-items-center tw-gap-2 tw-text-sm tw-font-normal tw-text-tertiary",
                    children: s || "Receiver",
                  }),
                  (0, a.jsx)("div", {
                    className: "tw-relative",
                    children: (0, a.jsxs)("span", {
                      className: "tw-flex tw-items-center tw-gap-2",
                      children: [
                        "" !== u &&
                          (0, a.jsx)("span", {
                            className: (0, E.cn)(
                              "tw-size-2 tw-rounded-full tw-bg-success-background",
                              !T && "tw-bg-error-background",
                              y && "tw-bg-warning-background"
                            ),
                          }),
                        i
                          ? (0, a.jsx)(ea.E, {
                              className: "tw-h-10 tw-w-full tw-rounded-md",
                            })
                          : (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)(en.p, {
                                  className:
                                    "tw-h-5 tw-text-ellipsis tw-border-none tw-bg-transparent tw-p-0 tw-text-sm tw-font-normal tw-text-primary tw-shadow-none placeholder:tw-text-placeholder hover:tw-bg-transparent",
                                  "data-pw":
                                    es.l.LANDING.BRIDGE.DESTINATION_INPUT,
                                  disabled: i || l || d || y,
                                  onBlur: () => h(!0),
                                  onChange: (e) => {
                                    p(e.target.value), w || h(!0);
                                  },
                                  placeholder:
                                    "Enter wallet address or ENS name",
                                  type: "text",
                                  value: f || u,
                                  wrapperAttributes: {
                                    className: "tw-flex-1 tw-w-full",
                                  },
                                }),
                                b
                                  ? (0, a.jsx)(g.A.spinner, {
                                      className:
                                        "tw-size-5 tw-animate-spin tw-text-utility-brand-600",
                                    })
                                  : "" === u
                                  ? (0, a.jsx)(O.Button, {
                                      "data-pw":
                                        es.l.LANDING.BRIDGE
                                          .DESTINATION_INPUT_PASTE_BUTTON,
                                      onClick: () => {
                                        (async () => {
                                          try {
                                            let e =
                                              await navigator.clipboard.readText();
                                            p(e), c(!1), h(!0);
                                          } catch (e) {
                                            console.error(
                                              "Failed to read clipboard contents: ",
                                              e
                                            );
                                          }
                                        })();
                                      },
                                      size: "fit",
                                      variant: "link-secondary",
                                      children: "Paste",
                                    })
                                  : !d &&
                                    (0, a.jsx)(O.Button, {
                                      "data-pw":
                                        es.l.LANDING.BRIDGE
                                          .DESTINATION_INPUT_CLEAR_BUTTON,
                                      onClick: () => {
                                        p(""), c(!1), h(!0);
                                      },
                                      size: "fit",
                                      variant: "link-secondary",
                                      children: "Clear",
                                    }),
                              ],
                            }),
                      ],
                    }),
                  }),
                ],
              }),
              C &&
                (0, a.jsx)("span", {
                  className: "-tw-mt-1 tw-text-xs tw-text-error-foreground",
                  children: S,
                }),
              !i &&
                (0, a.jsxs)("div", {
                  className: "tw-flex tw-items-center tw-gap-1",
                  children: [
                    (0, a.jsx)(ed.S, {
                      checked: d,
                      "data-pw":
                        es.l.LANDING.BRIDGE.USE_CONNECTED_ACCOUNT_CHECKBOX,
                      id: "use-connected-account",
                      onClick: () => {
                        let e = !d;
                        e ? (p(r), t(r)) : (p(""), h(!0), n()), c(e);
                      },
                    }),
                    (0, a.jsx)(ec.J, {
                      className: "tw-text-sm tw-font-normal tw-text-secondary",
                      htmlFor: "use-connected-account",
                      children: "Use connected account",
                    }),
                  ],
                }),
            ],
          });
        },
        em = () => {
          let e = (0, c.Xr)(S.b);
          return (0, a.jsx)(v.w, {
            content: (0, a.jsxs)("p", {
              id: "ccip-fee-tooltip-text",
              children: [
                "The fee includes the gas cost to complete the transaction on the destination chain and the fee paid to Chainlink CCIP service providers.",
                " ",
                (0, a.jsx)(O.Button, {
                  asChild: !0,
                  size: "fit",
                  variant: "link-secondary",
                  children: (0, a.jsx)(p(), {
                    href: "https://docs.chain.link/ccip/billing",
                    rel: "noreferrer noopener nofollow",
                    target: "_blank",
                    children: "Learn more",
                  }),
                }),
              ],
            }),
            onOpenChange: (t) => {
              t &&
                e({
                  eventName: C.zm.VIEW_TOOLTIP,
                  properties: { tooltip: "ccip-fee-tooltip" },
                });
            },
            trigger: (0, a.jsx)(g.A.info, {
              className: "tw-size-4",
              id: "ccip-fee-tooltip",
            }),
          });
        },
        ew = (e) => {
          let {
            selectedFeeToken: t,
            bridgeFeeFormatted: n,
            bridgeFeeUSD: s,
            loading: r,
            hideUsd: i = !1,
          } = e;
          return (0, a.jsx)(y.b, {
            loading: r,
            title: (0, a.jsxs)("span", {
              className: "tw-flex tw-items-center tw-gap-1",
              children: ["Bridge fee ", (0, a.jsx)(em, {}), " "],
            }),
            children: (0, a.jsxs)("div", {
              className:
                "tw-flex tw-flex-col tw-items-end tw-gap-1 md:tw-flex-row-reverse md:tw-items-center",
              children: [
                (0, a.jsxs)("span", {
                  className:
                    "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-font-medium tw-text-primary",
                  children: [
                    (0, a.jsx)(et.xz, {
                      size: 16,
                      symbol: null == t ? void 0 : t.symbol,
                    }),
                    (0, a.jsx)(ee.G, {
                      compact: !0,
                      symbol: null == t ? void 0 : t.symbol,
                      value: n,
                    }),
                  ],
                }),
                !i &&
                  (0, a.jsx)("span", {
                    className:
                      "tw-flex tw-items-center tw-gap-1 tw-text-xs tw-font-normal tw-text-tertiary",
                    children: (0, a.jsx)(ee.G, {
                      symbol: "USD",
                      symbolClassName: "tw-mr-0",
                      value: s,
                    }),
                  }),
              ],
            }),
          });
        },
        eh = JSON.parse(
          '[{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"armProxy","type":"address"},{"internalType":"bool","name":"allowlistEnabled","type":"bool"},{"internalType":"bool","name":"acceptLiquidity","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getBridgeLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBridgedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"remoteChainSelector","type":"uint64"}],"name":"getCurrentOutboundRateLimiterState","outputs":[{"components":[{"internalType":"uint128","name":"tokens","type":"uint128"},{"internalType":"uint32","name":"lastUpdated","type":"uint32"},{"internalType":"bool","name":"isEnabled","type":"bool"},{"internalType":"uint128","name":"capacity","type":"uint128"},{"internalType":"uint128","name":"rate","type":"uint128"}],"internalType":"struct RateLimiter.TokenBucket","name":"","type":"tuple"}],"stateMutability":"view","type":"function"}]'
        );
      var ef = n(99764),
        eT = n(44203);
      let ey = JSON.parse(
        '[{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}]'
      );
      var eb = n(95257),
        eN = n(30451),
        ex = n(86640),
        eg = n(25060);
      let eE = (e) =>
        (0, ei.I)({
          queryFn: async () => {
            let t = (0, z.sO)(e);
            try {
              let e = await t.send("eth_getBlockByNumber", ["finalized", !1]);
              if (!e || "object" != typeof e || !("timestamp" in e))
                throw Error("Invalid block data received");
              let n = parseInt(e.timestamp, 16),
                a = (0, eg.yf)().unix(),
                s = a + (a - n) + 300;
              return {
                estimatedTimeToDestination: eg.yf.unix(s).fromNow(),
                timestampToDestination: s,
              };
            } catch (e) {
              return (
                console.error("Error fetching finality time", e),
                {
                  estimatedTimeToDestination: eg.yf
                    .unix((0, eg.yf)().unix() + 1500)
                    .fromNow(),
                  timestampToDestination: (0, eg.yf)().unix() + 1500,
                }
              );
            }
          },
          queryKey: ["getFinalityTime", e],
          staleTime: 0,
        });
      var eI = n(18208),
        eA = n(583),
        ev = n(34651);
      function eC(e) {
        let { chainId: t } = e,
          [n, s] = m.useState(null),
          { data: r } = eE(t),
          {
            seconds: i,
            restart: o,
            totalSeconds: l,
          } = (0, ev.useTimer)({
            expiryTimestamp: new Date(null != n ? n : 0),
          });
        if (
          (m.useEffect(() => {
            if (r && null === n) {
              let e = 1e3 * r.timestampToDestination;
              s(e), o(new Date(e));
            }
          }, [n, r, o]),
          null === n)
        )
          return null;
        let d = Math.floor(l / 60);
        return (0, a.jsxs)("span", {
          className: "tw-flex tw-items-center tw-gap-1",
          children: [
            (0, a.jsxs)("span", {
              className: "tw-flex tw-items-center tw-gap-1",
              children: ["Estimated time left", (0, a.jsx)(_, {})],
            }),
            (0, a.jsx)("span", {
              className: "tw-ml-1",
              children:
                l <= 0 ? "Finishing..." : "".concat(d, "m ").concat(i, "s"),
            }),
          ],
        });
      }
      var eS = n(29813),
        eR = n(63850),
        eO = n(24738),
        e_ = n(87552),
        ek = n(99313),
        ej = n(64148),
        eL = n(90264),
        eB = n(55775),
        eP = n(4945),
        eD = n(97068),
        eU = n(89377),
        eM = n(76640),
        eG = n(59237);
      let eF = (0, eP.R)({
          abi: eB.G1.onRamp["1.5.0"],
          eventName: "CCIPSendRequested",
        }),
        eH = (0, eP.R)({
          abi: eB.G1.onRamp["1.6.0"],
          eventName: "CCIPMessageSent",
        });
      async function eW(e) {
        let t = e.find((e) => e.topics.at(0) === eF.at(0)),
          n = e.find((e) => e.topics.at(0) === eH.at(0));
        if (!t && !n)
          return (
            r.Cp(
              Error(
                "No CCIP log found in transaction ".concat(
                  e.map((e) => e.topics).join(", ")
                )
              )
            ),
            console.error("No CCIP log found in transaction", e),
            null
          );
        try {
          if (t) {
            let {
              args: { message: e },
            } = (0, eD.j)({
              abi: eB.G1.onRamp["1.5.0"],
              data: t.data,
              eventName: "CCIPSendRequested",
              topics: t.topics,
            });
            return {
              messageId: e.messageId,
              sequenceNumber: e.sequenceNumber.toString(),
              version: "1.5.0",
            };
          }
          if (n) {
            let e = (0, eM.K)(eG.$);
            if (!e) throw Error("No client found");
            let t = (0, eU.PF)({
                abi: eB.G1.onRamp["1.6.0"],
                address: n.address,
                client: e,
              }),
              a = (await t.read.typeAndVersion()).split(" ").pop();
            if (!a) throw Error("No version found");
            if ("1.6.0" !== a) throw Error("Unsupported version: ".concat(a));
            let {
              args: { message: s },
            } = (0, eD.j)({
              abi: eB.G1.onRamp["1.6.0"],
              data: n.data,
              eventName: "CCIPMessageSent",
              topics: n.topics,
            });
            return {
              messageId: s.header.messageId,
              sequenceNumber: s.header.sequenceNumber.toString(),
              version: "1.6.0",
            };
          }
          throw Error("No CCIP log found in transaction");
        } catch (e) {
          return (
            console.error("Error parsing CCIP log with Viem:", e), r.Cp(e), null
          );
        }
      }
      (0, eP.R)({
        abi: [
          {
            inputs: [
              { indexed: !0, name: "sequenceNumber", type: "uint64" },
              { indexed: !0, name: "messageId", type: "bytes32" },
              { name: "state", type: "uint8" },
              { name: "returnData", type: "bytes" },
            ],
            name: "ExecutionStateChanged",
            type: "event",
          },
        ],
        eventName: "ExecutionStateChanged",
      });
      let ez = new Set();
      function eK(e) {
        var t, n;
        let { transactionSummary: s } = e,
          { sourceChainId: r, destinationChainId: i, transactionHash: o } = s,
          l = (0, c.Xr)(S.b),
          d = (0, z.RY)(r),
          u = (0, z.RY)(i),
          {
            data: p,
            isLoading: w,
            isError: h,
          } = (0, eI.g)({ chainId: r, hash: o }),
          { data: f } = (0, ei.I)({
            enabled: !w && !h,
            queryFn: () => {
              var e;
              return eW(null != (e = null == p ? void 0 : p.logs) ? e : []);
            },
            queryKey: ["ccipMessage", o],
          }),
          { offRamps: T, loading: y } = (0, eR.i)(r, i),
          { data: b } = (0, eA.l)({
            blockNumber: null == p ? void 0 : p.blockNumber,
            chainId: r,
            query: { enabled: !!(null == p ? void 0 : p.blockNumber) },
          }),
          { data: N } = (0, eS.l)(
            (0, B.Ax)(r),
            i,
            null != (t = null == f ? void 0 : f.sequenceNumber) ? t : "",
            null != (n = null == f ? void 0 : f.version) ? n : "1.5.0",
            null == T ? void 0 : T.map((e) => e.offRamp)
          ),
          x = m.useMemo(
            () => ({
              bridging: {
                status: "pending",
                title: "Bridging assets to ".concat(u.name),
              },
              complete: { status: "pending", title: "Transfer complete" },
              transaction: {
                status: "progress",
                title: "Confirming transaction on ".concat(d.name),
              },
            }),
            [d, u]
          ),
          E = m.useMemo(
            () =>
              w
                ? x
                : !h && (null == p ? void 0 : p.status)
                ? N === B.Ho.FAILURE
                  ? {
                      ...x,
                      bridging: {
                        status: "failed",
                        title: "Failed to bridge assets to ".concat(u.name),
                      },
                      transaction: {
                        status: "completed",
                        title: "Transaction confirmed on ".concat(d.name),
                      },
                    }
                  : y ||
                    void 0 === N ||
                    N === B.Ho.IN_PROGRESS ||
                    N === B.Ho.UNTOUCHED
                  ? {
                      ...x,
                      bridging: {
                        description: (0, a.jsx)(eC, { chainId: r }),
                        status: "progress",
                        title: "Bridging assets to ".concat(u.name),
                      },
                      transaction: {
                        status: "completed",
                        title: "Transaction confirmed on ".concat(d.name),
                      },
                    }
                  : {
                      bridging: {
                        status: "completed",
                        title: "Assets bridged to ".concat(u.name),
                      },
                      complete: { ...x.complete, status: "completed" },
                      transaction: {
                        status: "completed",
                        title: "Transaction confirmed on ".concat(d.name),
                      },
                    }
                : {
                    ...x,
                    transaction: {
                      status: "failed",
                      title: "Failed to confirm transaction on ".concat(d.name),
                    },
                  },
            [x, d, u, p, N, y, w, h, r]
          ),
          I = m.useMemo(() => {
            let e = Object.values(E);
            return e.some((e) => "failed" === e.status)
              ? { label: "Failed", state: B.Ho.FAILURE, variant: "destructive" }
              : e.some((e) => "pending" === e.status || "progress" === e.status)
              ? {
                  label: "Pending",
                  state: B.Ho.IN_PROGRESS,
                  variant: "warning",
                }
              : e.every((e) => "completed" === e.status)
              ? { label: "Success", state: B.Ho.SUCCESS, variant: "success" }
              : { label: "Pending", state: B.Ho.UNTOUCHED, variant: "warning" };
          }, [E]);
        return (
          m.useEffect(() => {
            (null == p ? void 0 : p.transactionHash) &&
              !ez.has(p.transactionHash) &&
              (l({
                eventName: C.zm.TRANSACTION_SUCCESS,
                properties: {
                  action: "Bridge",
                  amount: s.amount,
                  destinationChain: u.name,
                  sourceChain: d.name,
                  txHash: p.transactionHash,
                },
              }),
              ez.add(p.transactionHash));
          }, [p, u, d, s, l]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "tw-flex tw-items-center tw-justify-between tw-p-4",
                children: [
                  (0, a.jsxs)("div", {
                    className: "tw-flex tw-items-center tw-gap-1",
                    children: [
                      (0, a.jsx)(O.Button, {
                        className: "tw-rounded-sm tw-p-1.5",
                        "data-pw": es.l.LANDING.BRIDGE.BACK_BUTTON,
                        onClick: () => {
                          s.action();
                        },
                        size: "fit",
                        variant: "ghost",
                        children: (0, a.jsx)(g.A.arrowLeft, {
                          className:
                            "tw-size-5 tw-text-foreground-button-secondary",
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "tw-text-base tw-font-semibold",
                        children: "Transfer details",
                      }),
                    ],
                  }),
                  (0, a.jsx)(ej.E, {
                    radius: "sm",
                    size: "sm",
                    variant: I.variant,
                    children: I.label,
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "tw-flex tw-flex-col tw-gap-4 tw-px-4",
                "data-pw": es.l.LANDING.BRIDGE.BRIDGE_TRANSACTION_VIEW,
                children: [
                  (0, a.jsx)("div", {
                    className: "tw-mx-auto tw-max-w-sm",
                    children: (0, a.jsx)(eO.A, {
                      executionState: I.state,
                      timestamp: (null == b ? void 0 : b.timestamp)
                        ? Number(b.timestamp)
                        : void 0,
                    }),
                  }),
                  (0, a.jsx)(eL.Separator, {
                    className: "tw-bg-border-secondary",
                  }),
                  (0, a.jsx)(e_.A, { steps: E }),
                  (0, a.jsx)(eL.Separator, {
                    className: "tw-bg-border-secondary",
                  }),
                  (0, a.jsx)(ek.A, {
                    ...s,
                    messageId: null == f ? void 0 : f.messageId,
                  }),
                ],
              }),
            ],
          })
        );
      }
      function eY(e) {
        let { transactionSummary: t } = e,
          { sourceChainId: n, destinationChainId: s } = t,
          r = (0, z.RY)(n),
          i = (0, z.RY)(s),
          o = m.useMemo(
            () => ({
              bridging: {
                status: "pending",
                title: "Bridging assets to ".concat(i.name),
              },
              complete: { status: "pending", title: "Transfer complete" },
              transaction: {
                status: "failed",
                title: "Failed to confirm transaction on ".concat(r.name),
              },
            }),
            [r, i]
          );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: "tw-flex tw-items-center tw-justify-between tw-p-4",
              children: [
                (0, a.jsxs)("div", {
                  className: "tw-flex tw-items-center tw-gap-1",
                  children: [
                    (0, a.jsx)(O.Button, {
                      className: "tw-rounded-sm tw-p-1.5",
                      onClick: () => {
                        t.action();
                      },
                      size: "fit",
                      variant: "ghost",
                      children: (0, a.jsx)(g.A.arrowLeft, {
                        className:
                          "tw-size-5 tw-text-foreground-button-secondary",
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "tw-text-base tw-font-semibold",
                      children: "Transfer details",
                    }),
                  ],
                }),
                (0, a.jsx)(ej.E, {
                  radius: "sm",
                  size: "sm",
                  variant: "destructive",
                  children: "Failed",
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "tw-flex tw-flex-col tw-gap-4 tw-px-4",
              children: [
                (0, a.jsx)("div", {
                  className: "tw-mx-auto tw-max-w-sm",
                  children: (0, a.jsx)(eO.A, {
                    executionState: B.Ho.FAILURE,
                    timestamp: 0,
                  }),
                }),
                (0, a.jsx)(eL.Separator, {
                  className: "tw-bg-border-secondary",
                }),
                (0, a.jsx)(e_.A, { steps: o }),
                (0, a.jsx)(eL.Separator, {
                  className: "tw-bg-border-secondary",
                }),
                (0, a.jsx)(ek.A, { ...t }),
              ],
            }),
          ],
        });
      }
      var eq = n(38840),
        eV = n(48454),
        eX = n(17680),
        eJ = n(70361),
        e$ = n(93808),
        eQ = n(47807),
        eZ = n(32305);
      let e0 = B.ry.at(0),
        e1 = i.Um.SYMBOL,
        e5 = (e) => e.find((e) => e.symbol === e1) || e.at(0),
        e4 = () => {
          var e, t, n;
          let {
              mainTxState: u,
              approvalTxState: N,
              setMainTxState: x,
              setTxError: v,
              setGasLimit: k,
              setLoadingTxns: P,
              txError: U,
              gasLimit: M,
            } = (0, V.Fn)(),
            { status: G, currentAccount: F, loading: W } = (0, D.sA)(),
            [K, Y] = m.useState(""),
            [q, X] = m.useState(!1),
            [J, $] = m.useState(""),
            [Z, ee] = m.useState(!1),
            { chainId: et } = (0, f.F)(),
            { switchChain: en, isPending: ea } = (0, T.R)(),
            eo = (0, c.Xr)(S.b),
            el = m.useCallback(() => {
              (0, eX.o)({
                toastConfig: {
                  title:
                    "Bridging to or from Plume Mainnet is only supported with Ethereum.",
                  variant: "info",
                },
              });
            }, []),
            ed = m.useCallback(
              () => B.ry.find((e) => e.chainId === w.r.id),
              []
            ),
            [ec, eu] = m.useState(
              null != (t = B.ry.find((e) => e.chainId === et)) ? t : e0
            ),
            em = B.ry.find((e) => e.chainId !== ec.chainId),
            [eg, eI] = m.useState(em),
            eA = (0, B.y0)(ec.chainId),
            { data: ev, isFetching: eC } = eE(ec.chainId),
            eS = m.useCallback(
              (e) =>
                B.bH
                  .filter((t) => t.sourceChainId === e)
                  .flatMap((e) => e.feeTokens),
              []
            ),
            eR = B.bH.find((e) => e.sourceChainId === ec.chainId),
            eO = eS(ec.chainId),
            { data: e_, isFetching: ek } = (0, e$.e)(eO, ec.chainId, F),
            [ej, eB] = m.useState(e5(e_ || eO));
          m.useEffect(() => {
            e_ && e_.length > 0 && !ej && eB(e_.at(0));
          }, [e_, ej]),
            m.useEffect(() => {
              $(""), ee(!1);
              let e = eS(ec.chainId);
              e.length > 0 && eB(e5(e));
            }, [ec, eS]);
          let { data: eP, isLoading: eD } = ((e) => {
              let { tokenOracle: t, chainId: n, tokenAddress: a } = e,
                s = (0, eN.O)(),
                r = (0, c.md)(ex.b5);
              return (0, ei.I)({
                enabled: !!r,
                initialData: {
                  tokenAddress: a,
                  tokenBalance: "0",
                  tokenBalanceFormatted: "0",
                  tokenDecimals: 18,
                  tokenPriceUSD: 1,
                },
                queryFn: async () => {
                  let e = (0, z.sO)(n),
                    i = 0;
                  if (t) {
                    let n = new L.Contract(
                        t,
                        [
                          "function latestAnswer() public view returns (int256 answer)",
                          "function decimals() external view returns (uint8)",
                        ],
                        e
                      ),
                      [a, s] = await Promise.all([
                        n.latestAnswer(),
                        n.decimals(),
                      ]);
                    i = a.toNumber() / eb.gH.from(10).pow(s).toNumber();
                  }
                  let { balance: o, decimals: l } = await s.getBalance(a, r, n);
                  return {
                    tokenAddress: a,
                    tokenBalance: o.toString(),
                    tokenBalanceFormatted: (0, d.formatUnits)(o, l),
                    tokenDecimals: l,
                    tokenPriceUSD: i,
                  };
                },
                queryKey: j.$q.tokenBalance(a, r, n),
                refetchInterval: i.P.POLLING_INTERVAL,
              });
            })({
              chainId: ec.chainId,
              tokenAddress: eA.bridgeTokenAddress,
              tokenOracle: eA.tokenOracle,
            }),
            eU = m.useMemo(
              () =>
                F && "authenticated" === G
                  ? eP
                  : {
                      tokenAddress: eA.bridgeTokenAddress,
                      tokenBalance: "0",
                      tokenBalanceFormatted: "0",
                      tokenDecimals: 18,
                      tokenPriceUSD: 1,
                    },
              [F, G, eP, eA.bridgeTokenAddress]
            ),
            eM = !!F && "authenticated" === G && eD,
            eG = !!F && "authenticated" === G && ek,
            eF = "" !== F && "authenticated" === G && et !== ec.chainId,
            {
              message: eH,
              bridgeFee: eW,
              bridgeFeeFormatted: ez,
              loading: e4,
              latestAnswer: e2,
              error: e6,
            } = ((e) => {
              let {
                  sourceChainId: t,
                  destinationChainId: n,
                  amount: a,
                  sourceTokenAddress: r,
                  destinationAccount: i,
                  feeToken: o,
                  feeTokenOracle: c,
                } = e,
                u = !!(a && r),
                p = async () => {
                  let e,
                    u = (0, z.sO)(t),
                    p = (0, B.n9)(t),
                    m = new L.Contract(p, H, u),
                    w = [
                      {
                        amount: (0, d.parseUnits)(a, 18).toString() || "0",
                        token: r,
                      },
                    ],
                    h = {
                      data: "0x",
                      extraArgs:
                        ef.id("CCIP EVMExtraArgsV1").slice(0, 10) +
                        eT.D.encode(["uint256"], [0]).slice(2),
                      feeToken: o,
                      receiver: eT.D.encode(["address"], [i]),
                      tokenAmounts: w,
                    },
                    f = (0, B.Ax)(n),
                    T = await m.getFee(f, h),
                    y = s.parseUnits(a, 18).sub(T);
                  o !== l.L &&
                    (h.tokenAmounts = [{ amount: y.toString(), token: r }]);
                  let b = B.bH.find((e) => e.sourceChainId === t);
                  if (!b)
                    throw Error("No lane config found for chain ".concat(t));
                  if (o === l.L) {
                    if (((e = 0), b.wrappedNativeOracle)) {
                      let t = new L.Contract(b.wrappedNativeOracle, ey, u),
                        [n, a] = await Promise.all([
                          t.latestAnswer(),
                          t.decimals(),
                        ]),
                        s = (0, d.formatUnits)(n, a);
                      e = Number((0, d.formatUnits)(T, 18)) * Number(s);
                    }
                  } else {
                    let t = new L.Contract(c, ey, u),
                      [n, a] = await Promise.all([
                        t.latestAnswer(),
                        t.decimals(),
                      ]),
                      s = (0, d.formatUnits)(n, a);
                    e = Number((0, d.formatUnits)(T, 18)) * Number(s);
                  }
                  return {
                    bridgeFee: T.toString(),
                    bridgeFeeFormatted: (0, d.formatEther)(T),
                    latestAnswer: e.toString(),
                    message: h,
                  };
                },
                m = ["bridge-message", t, n, a, r, i, o, c],
                {
                  data: w,
                  isLoading: h,
                  error: f,
                } = (0, ei.I)({
                  enabled: u,
                  gcTime: 3e5,
                  queryFn: p,
                  queryKey: m,
                  refetchOnWindowFocus: !1,
                  retry: 2,
                  staleTime: 3e4,
                });
              return {
                bridgeFee: (null == w ? void 0 : w.bridgeFee) || "",
                bridgeFeeFormatted:
                  (null == w ? void 0 : w.bridgeFeeFormatted) || "",
                error: f instanceof Error ? f.message : void 0,
                latestAnswer: (null == w ? void 0 : w.latestAnswer) || "",
                loading: h,
                message: null == w ? void 0 : w.message,
              };
            })({
              amount: J,
              destinationAccount: K,
              destinationChainId: (null == eg ? void 0 : eg.chainId) || 0,
              feeToken: (null == ej ? void 0 : ej.address) || "",
              feeTokenOracle: (null == ej ? void 0 : ej.oracle) || "",
              sourceChainId: ec.chainId,
              sourceTokenAddress: (null == eU ? void 0 : eU.tokenAddress) || "",
            }),
            { data: e3, isLoading: e8 } = ((e) =>
              (0, ei.I)({
                gcTime: 0,
                queryFn: async () => {
                  let t = B.bH.find((t) => t.sourceChainId === e);
                  if (!t) throw Error("No sourceLaneConfig found");
                  let n = (0, z.sO)(e),
                    a = t.lockReleaseTokenPool;
                  if (!a)
                    return {
                      bridgeLimit: "-1",
                      currentBridgedAmount: "-1",
                      remainingAmount: "-1",
                    };
                  let s = new L.Contract(a, eh, n),
                    [r, i] = await Promise.all([
                      s.getBridgeLimit(),
                      s.getCurrentBridgedAmount(),
                    ]);
                  return {
                    bridgeLimit: r.toString(),
                    currentBridgedAmount: i.toString(),
                    remainingAmount: r.sub(i).toString(),
                  };
                },
                queryKey: ["getBridgeLimit", e],
                staleTime: 0,
              }))(ec.chainId),
            { data: e7, isLoading: e9 } = ((e) => {
              let { destinationChainId: t, sourceChainId: n } = e;
              return (0, ei.I)({
                queryFn: async () => {
                  var e;
                  let a = B.bH.find((e) => e.sourceChainId === n);
                  if (!a) throw Error("No sourceLaneConfig found");
                  let s =
                    null != (e = a.lockReleaseTokenPool)
                      ? e
                      : a.burnMintTokenPool;
                  if (!s) return { capacity: "0", rate: "0", tokens: "0" };
                  let r = (0, z.sO)(n),
                    i = new L.Contract(s, eh, r),
                    o = (0, B.Ax)(t),
                    [l, , d, c, u] = await i.getCurrentOutboundRateLimiterState(
                      o
                    );
                  return {
                    capacity: c.toString(),
                    rate: u.toString(),
                    tokens: d ? l.toString() : "0",
                  };
                },
                queryKey: ["getRateLimit", t, n],
                refetchInterval: 1e4,
                staleTime: 0,
              });
            })({
              destinationChainId: (null == eg ? void 0 : eg.chainId) || 0,
              sourceChainId: ec.chainId,
            }),
            te = e8 || e9,
            tt = m.useCallback(
              (e) => (t) => {
                if ("sourceNetwork" === e) {
                  try {
                    en({ chainId: t.chainId });
                  } catch (e) {
                    console.error(e), r.Cp(e);
                  }
                  if (
                    (eu(t),
                    t.chainId === h.E.id ||
                      (t.chainId !== w.r.id && eg.chainId === h.E.id))
                  ) {
                    let e = ed();
                    e && (eI(e), t.chainId === h.E.id && el());
                  }
                  eo({
                    eventName: C.Az.SWITCH_NETWORK,
                    properties: {
                      from: ec.name,
                      fromChainId: ec.chainId,
                      funnel: "select",
                      to: t.name,
                      toChainId: t.chainId,
                    },
                  });
                } else {
                  if (
                    (eI(t),
                    t.chainId === h.E.id ||
                      (t.chainId !== w.r.id && ec.chainId === h.E.id))
                  ) {
                    let e = ed();
                    if (e) {
                      eu(e);
                      try {
                        en({ chainId: e.chainId });
                      } catch (e) {
                        console.error(e), r.Cp(e);
                      }
                      t.chainId === h.E.id && el();
                    }
                  }
                  eo({
                    eventName: C.Az.SWITCH_DESTINATION_NETWORK,
                    properties: {
                      from: ec.name,
                      fromChainId: ec.chainId,
                      funnel: "select",
                      to: t.name,
                      toChainId: t.chainId,
                    },
                  });
                }
                v(void 0);
              },
              [en, ec, eo, eg, ed, el, v]
            );
          m.useEffect(() => {
            if (void 0 !== et && !Number.isNaN(et)) {
              let e = B.ry.find((e) => e.chainId === et);
              if (e && e.chainId !== ec.chainId) {
                let t = B.ry.find((t) => t.chainId !== e.chainId);
                t && (eI(t), eu(e));
              }
            }
          }, [et, ec]);
          let tn = (null == eU ? void 0 : eU.tokenBalance) || "0",
            ta = (null == e3 ? void 0 : e3.bridgeLimit) !== "-1",
            ts = (0, o.g)((null == e3 ? void 0 : e3.remainingAmount) || "0");
          e3 &&
            e7 &&
            (ta && ts.lt(tn)
              ? (tn = e3.remainingAmount)
              : (0, o.g)(e7.tokens).gt(0) &&
                (0, o.g)(e7.tokens).lt(tn) &&
                (tn = e7.tokens));
          let tr = (0, d.formatUnits)(tn, 18),
            ti = Number(J) * eU.tokenPriceUSD,
            to = new o.g(J || "0"),
            tl = new o.g(ez || "0"),
            td = o.g.max(0, to.minus(tl)),
            tc = td.toString(),
            tu =
              (null == e_ ||
              null ==
                (e = e_.find(
                  (e) => e.address === (null == ej ? void 0 : ej.address)
                ))
                ? void 0
                : e.balance) || "0",
            tp =
              !e4 &&
              !eG &&
              tl.gt(0) &&
              (((null == ej ? void 0 : ej.address) !== l.L && td.lte(0)) ||
                ((null == ej ? void 0 : ej.address) === l.L && tl.gte(tu))),
            tm = {
              amountToBridge: J,
              blocked: e4 || eG || !K || !q || te || tp,
              decimals: (null == eU ? void 0 : eU.tokenDecimals) || 18,
              destinationChainId: eg.chainId,
              fees: eW,
              isCustomFeeToken: !!(ej && ej.address !== l.L),
              isWrongNetwork: eF,
              message: eH,
              sourceChainId: ec.chainId,
              symbol: e1,
              tokenAddress: (null == eU ? void 0 : eU.tokenAddress) || l.L,
            },
            tw = () => {
              v(void 0),
                x({ loading: !1, success: !1, txHash: void 0 }),
                $(""),
                ee(!1);
            };
          m.useEffect(() => {
            ("authenticated" === G && F) ||
              ($(""),
              ee(!1),
              Y(""),
              X(!1),
              v(void 0),
              x({ loading: !1, success: !1, txHash: void 0 }),
              k(""),
              P(!1));
          }, [G, F, v, x, k, P]);
          let th = u.loading || N.loading || e4 || eG || W;
          if (null == U ? void 0 : U.blocking)
            return (0, a.jsx)(eY, {
              transactionSummary: {
                action: tw,
                amount: J,
                destinationAddress: "" !== K ? K : F,
                destinationChainId: eg.chainId,
                sourceAddress: F,
                sourceChainId: ec.chainId,
              },
            });
          let tf = u.txHash;
          return tf
            ? (0, a.jsx)(eK, {
                transactionSummary: {
                  action: tw,
                  amount: J,
                  destinationAddress: "" !== K ? K : F,
                  destinationChainId: eg.chainId,
                  sourceAddress: F,
                  sourceChainId: ec.chainId,
                  transactionHash: tf,
                },
              })
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "tw-flex tw-items-center tw-justify-between tw-p-4",
                    children: [
                      (0, a.jsx)("div", {
                        className: "tw-text-base tw-font-semibold",
                        children: "Transfer",
                      }),
                      (0, a.jsx)(O.Button, {
                        asChild: !0,
                        className: "tw-font-semibold",
                        size: "fit",
                        variant: "link-tertiary",
                        children: (0, a.jsxs)(p(), {
                          className: "tw-flex tw-items-center tw-gap-1.5",
                          "data-pw": es.l.LANDING.BRIDGE.ACTIVITY_BUTTON,
                          href: eZ.C.routes.bridgeActivity,
                          children: [
                            (0, a.jsx)(g.A.history, { className: "tw-size-5" }),
                            "Activity",
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "tw-flex tw-flex-col tw-gap-4 tw-px-4",
                    "data-pw": es.l.LANDING.BRIDGE.BRIDGE_CONTENT,
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "tw-relative tw-flex tw-w-full tw-items-center tw-gap-4 sm:tw-gap-1",
                        children: [
                          (0, a.jsx)(I, {
                            dataPw: es.l.LANDING.BRIDGE.NETWORK_SELECTOR,
                            label: "From",
                            onChange: tt("sourceNetwork"),
                            selectedNetwork: ec,
                            supportedBridgeMarkets: B.ry.filter(
                              (e) => e.chainId !== eg.chainId
                            ),
                          }),
                          (0, a.jsx)(O.Button, {
                            className: (0, E.cn)(
                              !th &&
                                "tw-absolute tw-left-1/2 -tw-translate-x-1/2 sm:tw-static sm:tw-translate-x-0"
                            ),
                            "data-pw": es.l.LANDING.BRIDGE.SWAP_NETWORKS_BUTTON,
                            disabled: th,
                            onClick: () => {
                              try {
                                en({ chainId: eg.chainId });
                              } catch (e) {
                                console.error(e), r.Cp(e);
                              }
                              eu(eg), eI(ec);
                              let e = eS(eg.chainId);
                              eo({
                                eventName: C.Az.SWITCH_NETWORK,
                                properties: {
                                  from: ec.name,
                                  fromChainId: ec.chainId,
                                  funnel: "exchange",
                                  to: eg.name,
                                  toChainId: eg.chainId,
                                },
                              }),
                                eo({
                                  eventName: C.Az.SWITCH_DESTINATION_NETWORK,
                                  properties: {
                                    from: eg.name,
                                    fromChainId: eg.chainId,
                                    funnel: "exchange",
                                    to: ec.name,
                                    toChainId: ec.chainId,
                                  },
                                }),
                                eB(e.at(0));
                            },
                            size: "icon-sm",
                            spanClassName: (0, E.cn)(
                              th &&
                                "tw-absolute tw-left-1/2 -tw-translate-x-1/2 sm:tw-static sm:tw-translate-x-0"
                            ),
                            variant: "secondary",
                            children: (0, a.jsx)(g.A.arrowLeftRight, {
                              className:
                                "tw-size-5 tw-text-foreground-button-secondary",
                            }),
                          }),
                          (0, a.jsx)(I, {
                            dataPw: es.l.LANDING.BRIDGE.NETWORK_SELECTOR,
                            label: "To",
                            onChange: tt("destinationNetwork"),
                            selectedNetwork: eg,
                            supportedBridgeMarkets: B.ry.filter(
                              (e) => e.chainId !== ec.chainId
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsx)(er, {
                        asset: {
                          address: eU.tokenAddress,
                          balance: eU.tokenBalanceFormatted,
                          iconSymbol: e1,
                          symbol: e1,
                        },
                        balanceText: (0, a.jsx)(a.Fragment, {
                          children: "Balance",
                        }),
                        disabled: u.loading || N.loading,
                        disableInput:
                          (!e4 &&
                            (null == eU ? void 0 : eU.tokenBalance) === "0") ||
                          N.loading ||
                          u.loading,
                        event: {
                          eventName: C.Az.ASSET_INPUT,
                          properties: {
                            asset: eU.tokenAddress,
                            assetBalance: eU.tokenBalanceFormatted,
                            assetBalanceUSD: eU.tokenPriceUSD,
                            assetSymbol: e1,
                          },
                        },
                        inputTitle: (0, a.jsx)(a.Fragment, {
                          children: "Amount to bridge",
                        }),
                        isMaxSelected: Z,
                        loading: W || eM || te,
                        maxValue: tr,
                        onChange: (e) => {
                          "-1" === e ? ($(tr), ee(!0)) : ($(e), ee(!1));
                        },
                        symbol: e1,
                        usdValue: ti.toString(),
                        value: J,
                      }),
                      "authenticated" === G &&
                        (0, a.jsx)(ep, {
                          onInputError: () => {
                            X(!1);
                          },
                          onInputValid: (e) => {
                            Y(e), X(!0);
                          },
                        }),
                      (0, a.jsx)(eL.Separator, { className: "tw-bg-border" }),
                      (0, a.jsxs)("div", {
                        className: "tw-flex tw-flex-col tw-gap-3",
                        children: [
                          (0, a.jsx)(y.b, {
                            loading: eC,
                            title: (0, a.jsxs)("span", {
                              className: "tw-flex tw-items-center tw-gap-1",
                              children: ["Estimated time ", (0, a.jsx)(_, {})],
                            }),
                            children: (0, a.jsxs)("span", {
                              className: "tw-w-full tw-text-right",
                              children: [
                                "~",
                                null !=
                                (n =
                                  null == ev
                                    ? void 0
                                    : ev.estimatedTimeToDestination)
                                  ? n
                                  : "1 second",
                              ],
                            }),
                          }),
                          (0, a.jsx)(ew, {
                            bridgeFeeFormatted: ez,
                            bridgeFeeUSD: e2,
                            feeTokens: e_ || [],
                            hideUsd:
                              (null == eR ? void 0 : eR.wrappedNativeOracle) ===
                              void 0,
                            loading: e4 || eG,
                            onFeeTokenChanged: (e) => {
                              let t =
                                null == e_
                                  ? void 0
                                  : e_.find(
                                      (t) =>
                                        t.address.toLowerCase() ===
                                        e.address.toLowerCase()
                                    );
                              t ? eB(t) : eB(eO.at(0));
                            },
                            selectedFeeToken: ej,
                          }),
                          ej &&
                            ej.address !== l.L &&
                            (0, a.jsx)(b.S, {
                              iconSymbol: e1,
                              loading: e4 || eG,
                              symbol: e1,
                              title: (0, a.jsxs)("span", {
                                className: "tw-flex tw-items-center tw-gap-1",
                                children: [
                                  "Amount after fee ",
                                  (0, a.jsx)(R, {}),
                                ],
                              }),
                              value: tc,
                            }),
                          (0, a.jsx)(eV.c, {
                            chainId: ec.chainId,
                            gasLimit: (0, s.parseUnits)(M || "0", "wei"),
                          }),
                        ],
                      }),
                      eF &&
                        !ea &&
                        (0, a.jsx)(eJ.v, {
                          event: { eventName: C.zm.SWITCH_NETWORK },
                          requiredChainId: ec.chainId,
                        }),
                      U && (0, a.jsx)(eq.N, { txError: U }),
                      tp &&
                        (0, a.jsx)(A.N, {
                          variant: "destructive",
                          children: "Fees exceed wallet balance",
                        }),
                      e6 &&
                        (0, a.jsx)(A.N, {
                          variant: "destructive",
                          children:
                            "Something went wrong fetching bridge message, please try again later.",
                        }),
                      (0, a.jsx)("div", {
                        className: "tw-mt-2",
                        children:
                          "authenticated" === G
                            ? (0, a.jsx)(Q, { ...tm })
                            : (0, a.jsx)("div", {
                                className: "tw-pb-4",
                                children: (0, a.jsx)(eQ.A, {}),
                              }),
                      }),
                    ],
                  }),
                ],
              });
        };
    },
    19302: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => o });
      var a = n(67933),
        s = n(86389),
        r = n(40476),
        i = n(4061);
      let o = (e) => {
        let { chainId: t, token: n, spender: o } = e,
          l = (0, i.H)(),
          d = (0, r.F)().address || "";
        return (0, a.I)({
          enabled: !!d,
          queryFn: async () => l.getApprovedAmount(t, d, n, o),
          queryKey: s.$q.approvedAmount(d, n, o, t),
        });
      };
    },
    23493: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { AnimateInView: () => l });
      var a = n(54568),
        s = n(11376),
        r = n(80747),
        i = n(7620),
        o = n(29768);
      let l = (e) => {
        let {
            children: t,
            as: n = "div",
            type: l = "up",
            delay: d = 0,
            options: c = { amount: 0.1, once: !0 },
            className: u,
            ...p
          } = e,
          m = i.useRef(null),
          w = (0, s.W)(m, c),
          h = ((e) => {
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
          f = ["scale(".concat(0.95, ")")];
        void 0 !== h.y && f.unshift("translateY(".concat(h.y, "px)")),
          void 0 !== h.x && f.unshift("translateX(".concat(h.x, "px)"));
        let T = f.join(" "),
          y = r.P[n];
        return (0, a.jsx)(y, {
          animate: {
            opacity: +!!w,
            transform: w ? "scale(".concat(1, ")") : T,
          },
          className: (0, o.cn)("", u),
          initial: { opacity: 0, transform: T },
          ref: (e) => {
            m.current = e;
          },
          transition: { delay: d, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          ...p,
          children: t,
        });
      };
    },
    24738: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => h });
      var a = n(54568),
        s = n(25060),
        r = n(27261),
        i = n.n(r),
        o = n(40615),
        l = n(50781),
        d = n(14010),
        c = n(47227),
        u = n(4451),
        p = n(32305);
      let m = () =>
          (0, a.jsx)(c.Button, {
            asChild: !0,
            size: "fit",
            variant: "link-secondary",
            children: (0, a.jsx)(i(), {
              href: p.C.routes.contact,
              children: "Need help? Contact us",
            }),
          }),
        w = (e) => {
          let {
            icon: t,
            variant: n,
            title: r,
            description: i,
            timestamp: d,
            useDecorativeIcon: c = !1,
          } = e;
          return (0, a.jsxs)("div", {
            className:
              "tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-5",
            children: [
              c
                ? (0, a.jsx)(l.A, { icon: t })
                : (0, a.jsx)(o.A, {
                    icon: t,
                    iconClassName: "tw-size-10",
                    variant: n || "default",
                  }),
              (0, a.jsxs)("span", {
                className:
                  "tw-flex tw-flex-col tw-items-center tw-gap-2 tw-text-center",
                children: [
                  (0, a.jsx)("span", {
                    className: "tw-text-lg tw-font-semibold tw-text-primary",
                    children: r,
                  }),
                  (0, a.jsxs)("span", {
                    className: "tw-text-sm tw-font-normal tw-text-tertiary",
                    children: [
                      i,
                      d &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            s.yf.unix(d).fromNow(),
                            " (",
                            s.yf
                              .unix(d)
                              .utc()
                              .format("MMM DD, YYYY [at] HH:mm:ss [UTC]"),
                            ")",
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(m, {}),
            ],
          });
        };
      function h(e) {
        let { executionState: t, timestamp: n } = e,
          s = {
            description:
              "Your USD1 tokens are currently being sent securely cross chain through Chainlink CCIP.",
            icon: u.A.send,
            title: "Sending",
            useDecorativeIcon: !0,
          },
          r = {
            [d.Ho.FAILURE]: {
              description:
                "Something went wrong. Please try again or contact support.",
              icon: u.A.circleAlert,
              title: "Transfer failed",
              variant: "destructive",
            },
            [d.Ho.SUCCESS]: {
              description: "",
              icon: u.A.checkCircle,
              title: "Transfer complete",
              variant: "success",
            },
            [d.Ho.UNTOUCHED]: s,
            [d.Ho.IN_PROGRESS]: s,
          }[t];
        return (0, a.jsx)(w, {
          ...r,
          timestamp: t === d.Ho.SUCCESS ? n : void 0,
        });
      }
    },
    25060: (e, t, n) => {
      "use strict";
      n.d(t, { yf: () => a }), n(68266);
      var a = n(223),
        s = n(37605),
        r = n(82559),
        i = n(5074);
      a.extend(i), a.extend(s), a.extend(r);
    },
    29813: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => l });
      var a = n(67933),
        s = n(55775),
        r = n(89377),
        i = n(14884),
        o = n(14010);
      let l = (e, t, n, l, d) => {
        let c = (0, i.t)({ chainId: t });
        return (0, a.I)({
          enabled: (null == d ? void 0 : d.length) > 0 && !!n && !!c,
          queryFn: async () => {
            if (!c) throw Error("No client found");
            for (let t of d)
              try {
                let a,
                  i = (0, r.PF)({
                    abi: s.G1.offRamp["1.5.0"],
                    address: t,
                    client: c,
                  }),
                  d = (0, r.PF)({
                    abi: s.G1.offRamp["1.6.0"],
                    address: t,
                    client: c,
                  }),
                  u = "1.5.0" === l ? i : d,
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
                let m = BigInt(null != n ? n : 0);
                switch (l) {
                  case "1.5.0":
                    a = i.read.getExecutionState([m]);
                    break;
                  case "1.6.0":
                    a = d.read.getExecutionState([BigInt(e), m]);
                }
                let w = await a;
                if (w !== o.Ho.UNTOUCHED) return w;
              } catch (e) {
                console.error(e);
              }
            return o.Ho.UNTOUCHED;
          },
          queryKey: ["executionState", t, n, l],
          refetchInterval: (e) => e.state.data !== o.Ho.SUCCESS && 6e4,
        });
      };
    },
    30451: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => u, O: () => p });
      var a = n(54568),
        s = n(7620),
        r = n(46752),
        i = n(62491),
        o = n(55206),
        l = n(8332);
      class d {
        getERC20Service(e, t) {
          let n = this.getProvider(e);
          return new o.Contract(t, l.xw, n);
        }
        getDetailedERC20Service(e) {
          let t = this.getProvider(e);
          return new i.u(t);
        }
        async getBalance(e, t, n) {
          let a = this.getERC20Service(n, e);
          return {
            balance: await a.balanceOf(t),
            decimals: await a.decimals(),
          };
        }
        async getTokenInfo(e, t) {
          return this.getDetailedERC20Service(t).getTokenData(e);
        }
        constructor(e) {
          this.getProvider = e;
        }
      }
      let c = s.createContext(void 0),
        u = (e) => {
          let { children: t } = e,
            n = new d(r.sO);
          return (0, a.jsx)(c, { value: n, children: t });
        },
        p = () => {
          let e = s.useContext(c);
          if (void 0 === e)
            throw Error("useERC20 must be used within an ERC20Provider");
          return e;
        };
    },
    37101: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 23493)),
        Promise.resolve().then(n.bind(n, 18096));
    },
    42847: (e, t, n) => {
      "use strict";
      n.d(t, { FH: () => d, sr: () => u });
      var a = n(54568),
        s = n(87606),
        r = n(37611),
        i = n(54530),
        o = n(90438),
        l = n(11985);
      BigInt.prototype.toJSON = function () {
        return this.toString();
      };
      let d = (0, i.pY)(),
        c = d.createClient({
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
        return (0, a.jsx)(d.Provider, {
          client: c,
          queryClient: t,
          children: e.children,
        });
      }
    },
    53125: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => l });
      var a = n(54568),
        s = n(81195),
        r = n(32629),
        i = n(77804),
        o = n(4451);
      let l = (e) => {
        let {
          title: t,
          value: n,
          futureValue: l,
          iconSymbol: d,
          numberPrefix: c,
          loading: u,
          ...p
        } = e;
        return (0, a.jsxs)(s.b, {
          loading: u,
          title: t,
          children: [
            d && (0, a.jsx)(i.xz, { size: 16, symbol: d }),
            c && (0, a.jsx)("span", { children: c }),
            (0, a.jsx)(r.G, { value: n, ...p }),
            l &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(o.A.arrowRight, {
                    className: "tw-size-4 tw-text-foreground-tertiary",
                  }),
                  (0, a.jsx)(r.G, { value: l, ...p }),
                ],
              }),
          ],
        });
      };
    },
    63850: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => l });
      var a = n(67933),
        s = n(55206),
        r = n(14010),
        i = n(10598),
        o = n(46752);
      let l = (e, t) => {
        var n, l, d;
        let { data: c, isFetching: u } = (0, a.I)({
          queryFn: async () =>
            await Promise.all(
              (0, r.yC)().map(async (e) => {
                let t = (0, r.n9)(e),
                  n = (0, o.sO)(e),
                  a = new s.Contract(t, i, n);
                return {
                  chainId: e,
                  offRamps: (await a.getOffRamps()).map((e) => ({
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
            (d =
              null == c ||
              null == (l = c.find((e) => e.chainId === t)) ||
              null == (n = l.offRamps)
                ? void 0
                : n.filter((t) => t.sourceChainSelector === (0, r.Ax)(e)))
              ? d
              : [],
        };
      };
    },
    76775: (e, t, n) => {
      "use strict";
      n.d(t, { _: () => a });
      let a = (e) => {
        let { approvedAmount: t, signedAmount: n, amount: a } = e;
        return !(
          "-1" === t ||
          "-1" === n ||
          ("0" !== t && Number(t) >= Number(a)) ||
          Number(n) >= Number(a)
        );
      };
    },
    81195: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => i });
      var a = n(54568),
        s = n(20874),
        r = n(29768);
      let i = (e) => {
        let { title: t, children: n, className: i, loading: o } = e;
        return (0, a.jsxs)("div", {
          className: (0, r.cn)(
            "tw-flex tw-w-full tw-items-center tw-justify-between",
            i
          ),
          children: [
            (0, a.jsx)("span", {
              className: "tw-text-sm tw-font-normal tw-text-tertiary",
              children: t,
            }),
            (0, a.jsx)("span", {
              className:
                "tw-flex tw-items-center tw-gap-1.5 tw-text-sm tw-font-medium tw-text-primary",
              children: o
                ? (0, a.jsx)(s.E, { className: "tw-h-5 tw-w-16 tw-rounded-md" })
                : n,
            }),
          ],
        });
      };
    },
    87552: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => l });
      var a = n(54568),
        s = n(14010),
        r = n(4451),
        i = n(90264),
        o = n(29768);
      function l(e) {
        let { steps: t } = e,
          n = s.SA.map((e) => ({ id: e, ...t[e] }));
        return (0, a.jsx)("div", {
          className: "tw-flex tw-flex-col tw-gap-2 tw-py-4",
          children: n.map((e, t) =>
            (0, a.jsxs)(
              "div",
              {
                className: "tw-flex tw-items-start tw-gap-3",
                children: [
                  (0, a.jsxs)("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-gap-2",
                    children: [
                      ((e) => {
                        switch (e) {
                          case "completed":
                            return (0, a.jsx)("span", {
                              className:
                                "tw-flex tw-size-5 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-success-border-solid tw-bg-success-background-solid",
                              children: (0, a.jsx)(r.A.check, {
                                className:
                                  "tw-size-3.5 tw-text-foreground-white",
                              }),
                            });
                          case "failed":
                            return (0, a.jsx)("span", {
                              className:
                                "tw-flex tw-size-5 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-error-border-solid tw-bg-error-background-solid",
                              children: (0, a.jsx)(r.A.x, {
                                className:
                                  "tw-size-3.5 tw-text-foreground-white",
                              }),
                            });
                          case "progress":
                            return (0, a.jsx)("span", {
                              className:
                                "tw-flex tw-size-5 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-border-brand-solid tw-bg-background-brand-solid tw-shadow-button-focus-simple",
                              children: (0, a.jsx)("span", {
                                className:
                                  "tw-size-2 tw-rounded-full tw-bg-foreground-white",
                              }),
                            });
                          default:
                            return (0, a.jsx)("span", {
                              className:
                                "tw-flex tw-size-5 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-border-disabled-subtle tw-bg-background-disabled-subtle",
                              children: (0, a.jsx)("span", {
                                className:
                                  "tw-size-2 tw-rounded-full tw-bg-foreground-disabled-subtle",
                              }),
                            });
                        }
                      })(e.status),
                      t !== n.length - 1 &&
                        (0, a.jsx)(i.Separator, {
                          className: (0, o.cn)(
                            "tw-h-7 tw-w-[2px] tw-rounded-full tw-bg-border-secondary",
                            "completed" === e.status &&
                              "tw-bg-success-border-solid",
                            "failed" === e.status && "tw-bg-error-border-solid"
                          ),
                          orientation: "vertical",
                        }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "tw-flex tw-flex-col tw-gap-0.5",
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "tw-text-sm tw-font-semibold tw-text-secondary",
                        children: e.title,
                      }),
                      e.description &&
                        (0, a.jsx)("span", {
                          className:
                            "tw-text-sm tw-font-normal tw-text-tertiary",
                          children: e.description,
                        }),
                    ],
                  }),
                ],
              },
              e.id
            )
          ),
        });
      }
    },
    90554: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => a });
      let a = {
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
    92996: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => l });
      var a = n(54568),
        s = n(23180),
        r = n(58677),
        i = n(7620),
        o = n(29768);
      let l = i.forwardRef((e, t) => {
        let { className: n, checked: i, ...l } = e;
        return (0, a.jsx)(s.bL, {
          checked: i,
          className: (0, o.cn)(
            "tw-size-4 tw-rounded-xs tw-border tw-border-border tw-bg-transparent tw-outline-none data-[state=checked]:tw-border-transparent data-[state=checked]:tw-bg-background-brand-solid data-[state=checked]:tw-text-foreground-white focus:tw-shadow-button-focus-gray data-[state=checked]:focus:tw-shadow-button-focus-simple disabled:tw-cursor-not-allowed disabled:tw-bg-background-disabled-subtle disabled:tw-text-foreground-disabled-subtle",
            n
          ),
          ref: t,
          ...l,
          children: (0, a.jsxs)(s.C1, {
            className: (0, o.cn)(
              "tw-flex tw-items-center tw-justify-center tw-text-current"
            ),
            children: [
              !0 === i && (0, a.jsx)(r.Srz, { className: "tw-size-3" }),
              "indeterminate" === i &&
                (0, a.jsx)(r.QGg, { className: "tw-size-3" }),
            ],
          }),
        });
      });
      l.displayName = s.bL.displayName;
    },
    99313: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => f });
      var a = n(54568),
        s = n(60844),
        r = n(61773),
        i = n(27261),
        o = n.n(i),
        l = n(32629),
        d = n(47227),
        c = n(4451),
        u = n(46752),
        p = n(50674),
        m = n(26080),
        w = n(32583),
        h = n(27118);
      function f(e) {
        let {
            sourceChainId: t,
            destinationChainId: n,
            sourceAddress: i,
            destinationAddress: f,
            amount: T,
            transactionHash: y,
            messageId: b,
            action: N,
          } = e,
          x = (0, s.Xr)(w.b),
          g = (0, u.RY)(t),
          E = (0, u.RY)(n),
          I = "https://ccip.chain.link/tx/"
            .concat(y, "#/side-drawer/msg/")
            .concat(b);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: "tw-flex tw-flex-col tw-gap-4",
              children: [
                (0, a.jsx)("span", {
                  className: "tw-text-sm tw-font-medium tw-text-primary",
                  children: "Summary",
                }),
                (0, a.jsxs)("div", {
                  className: "tw-flex tw-items-center tw-gap-2",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "tw-flex tw-flex-1 tw-flex-col tw-items-center tw-gap-2",
                      children: [
                        (0, a.jsx)(r.default, {
                          alt: g.name,
                          height: 24,
                          src: g.networkLogoPath,
                          width: 24,
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "tw-text-sm tw-font-normal tw-text-primary",
                          children: (0, p.$)(i, 4, 4),
                        }),
                      ],
                    }),
                    (0, a.jsx)(c.A.arrowRight, {
                      className: "tw-size-4 tw-text-foreground-quaternary",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "tw-flex tw-flex-1 tw-flex-col tw-items-center tw-gap-2",
                      children: [
                        (0, a.jsx)(r.default, {
                          alt: g.name,
                          height: 24,
                          src: "/images/common/tokens/usd1.svg",
                          width: 24,
                        }),
                        (0, a.jsx)(l.G, {
                          className:
                            "tw-text-sm tw-font-normal tw-text-primary",
                          compact: !0,
                          value: T,
                          visibleDecimals: 2,
                        }),
                      ],
                    }),
                    (0, a.jsx)(c.A.arrowRight, {
                      className: "tw-size-4 tw-text-foreground-quaternary",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "tw-flex tw-flex-1 tw-flex-col tw-items-center tw-gap-2",
                      children: [
                        (0, a.jsx)(r.default, {
                          alt: E.name,
                          height: 24,
                          src: E.networkLogoPath,
                          width: 24,
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "tw-text-sm tw-font-normal tw-text-primary",
                          children: (0, p.$)(f, 4, 4),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "tw-flex tw-flex-col tw-gap-2 tw-pb-4 tw-pt-2 md:tw-flex-row",
              children: [
                y &&
                  (0, a.jsx)(d.Button, {
                    asChild: !0,
                    className: "tw-w-full md:tw-h-10",
                    size: "md",
                    variant: "secondary",
                    children: (0, a.jsxs)(o(), {
                      className: "tw-w-full tw-gap-2",
                      href: I,
                      onClick: () => {
                        x({
                          eventName: m.zm.VIEW_EXPLORER,
                          properties: { funnel: "bridge", link: I },
                        });
                      },
                      rel: "noreferrer noopener nofollow",
                      target: "_blank",
                      children: [
                        "View on explorer ",
                        (0, a.jsx)(c.A.externalLink, {
                          className: "tw-size-5",
                        }),
                      ],
                    }),
                  }),
                (0, a.jsx)(d.Button, {
                  className: "tw-w-full md:tw-h-10",
                  "data-pw": h.l.LANDING.BRIDGE.TRANSFER_BUTTON,
                  onClick: N,
                  size: "md",
                  children: "Start new transfer",
                }),
              ],
            }),
          ],
        });
      }
    },
  },
  (e) => {
    e.O(
      0,
      [
        9386, 3387, 1834, 7261, 8745, 3970, 160, 787, 887, 4154, 747, 1504,
        6553, 5461, 4011, 9953, 7653, 7362, 3354, 4627, 7478, 1239, 1659, 1675,
        1736, 9169, 5948, 4050, 9890, 293, 9420, 7453, 3759, 60, 3122, 6866,
        5377, 4898, 5087, 7065, 8803, 4297, 587, 1902, 7358,
      ],
      () => e((e.s = 37101))
    ),
      (_N_E = e.O());
  },
]);
