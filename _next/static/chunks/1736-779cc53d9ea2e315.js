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
      (e._sentryDebugIds[t] = "8dcada43-7e55-4711-9a9a-aeba5b11daf6"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-8dcada43-7e55-4711-9a9a-aeba5b11daf6"));
  })();
} catch (e) {}
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1736, 2491],
  {
    12815: (e, t, a) => {
      a.d(t, { l: () => c });
      var n = a(47298),
        r = a(42960),
        o = a(50377),
        s = a(14768),
        i = a(12052);
      function c(e, t = {}) {
        let { type: a } = e,
          { key: l = "connector", name: u = "Connector", retryDelay: d } = t;
        return (e) => {
          let { chain: c, connectors: p } = e,
            m = t.retryCount ?? e.retryCount,
            h = async ({ method: e, params: t }) => {
              let i = p?.getState().find((e) => e.type === a);
              if (!i)
                throw new n.RV(
                  Error(
                    `Could not find connector of type "${a}" in \`connectors\` passed to \`createConfig\`.`
                  )
                );
              let l = await i.getProvider({ chainId: c?.id });
              if (!l) throw new n.RV(Error("Provider is disconnected."));
              let u = (0, r.ME)(
                await (0, o.b)(() =>
                  (0, s.w)(() => l.request({ method: "eth_chainId" }), {
                    timeout: 100,
                  })
                )
              );
              if (c && u !== c.id)
                throw new n.xq(
                  Error(
                    `The current chain of the connector (id: ${u}) does not match the target chain for the request (id: ${c.id} – ${c.name}).`
                  )
                );
              return l.request({ method: e, params: t });
            };
          return (0, i.o)({
            key: l,
            name: u,
            request: h,
            retryCount: m,
            retryDelay: d,
            type: "connector",
          });
        };
      }
    },
    14884: (e, t, a) => {
      a.d(t, { t: () => s });
      var n = a(76640),
        r = a(84509),
        o = a(29344);
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, o.U)(e);
        return (0, r.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: a } = t;
              return e.subscribe(() => (0, n.K)(e), a, {
                equalityFn: (e, t) => e?.uid === t?.uid,
              });
            })(t, { onChange: e }),
          () => (0, n.K)(t, e),
          () => (0, n.K)(t, e),
          (e) => e,
          (e, t) =>
            (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid)
        );
      }
    },
    16403: (e, t, a) => {
      a.d(t, { n: () => h });
      var n = a(23564),
        r = a(26769),
        o = a(99371),
        s = a(42217),
        i = a(16228),
        c = a(50377),
        l = a(85552),
        u = a(42588),
        d = a(17857),
        p = a(44063),
        m = a(20512);
      async function h(e, t) {
        let a,
          h,
          y,
          f,
          b,
          {
            checkReplacement: g = !0,
            confirmations: v = 1,
            hash: w,
            onReplaced: T,
            retryCount: C = 6,
            retryDelay: k = ({ count: e }) => 200 * ~~(1 << e),
            timeout: _ = 18e4,
          } = t,
          x = (0, l.A)(["waitForTransactionReceipt", e.uid, w]),
          D = t.pollingInterval
            ? t.pollingInterval
            : e.chain?.experimental_preconfirmationTime
            ? e.chain.experimental_preconfirmationTime
            : e.pollingInterval,
          A = !1,
          { promise: I, resolve: N, reject: E } = (0, i.Y)(),
          P = _
            ? setTimeout(() => {
                b(), f(), E(new r.WA({ hash: w }));
              }, _)
            : void 0;
        return (
          (f = (0, s.lB)(
            x,
            { onReplaced: T, resolve: N, reject: E },
            async (t) => {
              if (
                (y = await (0, o.T)(
                  e,
                  p.h,
                  "getTransactionReceipt"
                )({ hash: w }).catch(() => void 0)) &&
                v <= 1
              ) {
                clearTimeout(P), t.resolve(y), f();
                return;
              }
              b = (0, o.T)(
                e,
                m.q,
                "watchBlockNumber"
              )({
                emitMissed: !0,
                emitOnBegin: !0,
                poll: !0,
                pollingInterval: D,
                async onBlockNumber(s) {
                  let i = (e) => {
                      clearTimeout(P), b(), e(), f();
                    },
                    l = s;
                  if (!A)
                    try {
                      if (y) {
                        if (
                          v > 1 &&
                          (!y.blockNumber || l - y.blockNumber + 1n < v)
                        )
                          return;
                        i(() => t.resolve(y));
                        return;
                      }
                      if (
                        (g &&
                          !a &&
                          ((A = !0),
                          await (0, c.b)(
                            async () => {
                              (a = await (0, o.T)(
                                e,
                                d.x,
                                "getTransaction"
                              )({ hash: w })).blockNumber &&
                                (l = a.blockNumber);
                            },
                            { delay: k, retryCount: C }
                          ),
                          (A = !1)),
                        (y = await (0, o.T)(
                          e,
                          p.h,
                          "getTransactionReceipt"
                        )({ hash: w })),
                        v > 1 && (!y.blockNumber || l - y.blockNumber + 1n < v))
                      )
                        return;
                      i(() => t.resolve(y));
                    } catch (s) {
                      if (s instanceof r.Kz || s instanceof r.Kc) {
                        if (!a) {
                          A = !1;
                          return;
                        }
                        try {
                          (h = a), (A = !0);
                          let r = await (0, c.b)(
                            () =>
                              (0, o.T)(
                                e,
                                u.g,
                                "getBlock"
                              )({ blockNumber: l, includeTransactions: !0 }),
                            {
                              delay: k,
                              retryCount: C,
                              shouldRetry: ({ error: e }) => e instanceof n.l,
                            }
                          );
                          A = !1;
                          let s = r.transactions.find(
                            ({ from: e, nonce: t }) =>
                              e === h.from && t === h.nonce
                          );
                          if (
                            !s ||
                            ((y = await (0, o.T)(
                              e,
                              p.h,
                              "getTransactionReceipt"
                            )({ hash: s.hash })),
                            v > 1 &&
                              (!y.blockNumber || l - y.blockNumber + 1n < v))
                          )
                            return;
                          let d = "replaced";
                          s.to === h.to &&
                          s.value === h.value &&
                          s.input === h.input
                            ? (d = "repriced")
                            : s.from === s.to &&
                              0n === s.value &&
                              (d = "cancelled"),
                            i(() => {
                              t.onReplaced?.({
                                reason: d,
                                replacedTransaction: h,
                                transaction: s,
                                transactionReceipt: y,
                              }),
                                t.resolve(y);
                            });
                        } catch (e) {
                          i(() => t.reject(e));
                        }
                      } else i(() => t.reject(s));
                    }
                },
              });
            }
          )),
          I
        );
      }
    },
    17857: (e, t, a) => {
      a.d(t, { x: () => s });
      var n = a(26769),
        r = a(82663),
        o = a(2167);
      async function s(
        e,
        { blockHash: t, blockNumber: a, blockTag: s, hash: i, index: c }
      ) {
        let l = s || "latest",
          u = void 0 !== a ? (0, r.cK)(a) : void 0,
          d = null;
        if (
          (i
            ? (d = await e.request(
                { method: "eth_getTransactionByHash", params: [i] },
                { dedupe: !0 }
              ))
            : t
            ? (d = await e.request(
                {
                  method: "eth_getTransactionByBlockHashAndIndex",
                  params: [t, (0, r.cK)(c)],
                },
                { dedupe: !0 }
              ))
            : (u || l) &&
              (d = await e.request(
                {
                  method: "eth_getTransactionByBlockNumberAndIndex",
                  params: [u || l, (0, r.cK)(c)],
                },
                { dedupe: !!u }
              )),
          !d)
        )
          throw new n.Kz({
            blockHash: t,
            blockNumber: a,
            blockTag: l,
            hash: i,
            index: c,
          });
        return (e.chain?.formatters?.transaction?.format || o.uP)(d);
      }
    },
    18718: (e, t, a) => {
      a.d(t, { N: () => r });
      var n = a(97465);
      function r(e, t) {
        return (0, n.Np)(e, t);
      }
    },
    35703: (e, t, a) => {
      a.d(t, { v: () => l });
      var n = a(16258),
        r = a(61952),
        o = a(43339),
        s = a(4323);
      async function i(e, t) {
        let a,
          { account: n, connector: i, ...c } = t;
        return (
          (a =
            "object" == typeof n && "local" === n.type
              ? e.getClient()
              : await (0, s.r)(e, { account: n, connector: i })),
          (0, o.T)(
            a,
            r.C,
            "signTypedData"
          )({ ...c, ...(n ? { account: n } : {}) })
        );
      }
      var c = a(29344);
      function l() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: a } = t,
          r =
            ((e = (0, c.U)(t)),
            { mutationFn: (t) => i(e, t), mutationKey: ["signTypedData"] }),
          { mutate: o, mutateAsync: s, ...l } = (0, n.n)({ ...a, ...r });
        return { ...l, signTypedData: o, signTypedDataAsync: s };
      }
    },
    42360: (e, t, a) => {
      a.d(t, { H4: () => f, v8: () => h, $$: () => y });
      var n = a(70779),
        r = a(7905),
        o = a(85552),
        s = a(6616);
      class i extends s.C {
        constructor({ domain: e }) {
          super(`Invalid domain "${(0, o.A)(e)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."],
          });
        }
      }
      class c extends s.C {
        constructor({ primaryType: e, types: t }) {
          super(
            `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(
              Object.keys(t)
            )}\`.`,
            {
              docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
              metaMessages: [
                "Check that the primary type is a key in `types`.",
              ],
            }
          );
        }
      }
      class l extends s.C {
        constructor({ type: e }) {
          super(`Struct type "${e}" is invalid.`, {
            metaMessages: ["Struct type must not be a Solidity type."],
            name: "InvalidStructTypeError",
          });
        }
      }
      var u = a(81734),
        d = a(15465),
        p = a(82663),
        m = a(30026);
      function h(e) {
        let { domain: t, message: a, primaryType: n, types: r } = e,
          s = (e, t) => {
            let a = { ...t };
            for (let t of e) {
              let { name: e, type: n } = t;
              "address" === n && (a[e] = a[e].toLowerCase());
            }
            return a;
          },
          i = r.EIP712Domain && t ? s(r.EIP712Domain, t) : {},
          c = (() => {
            if ("EIP712Domain" !== n) return s(r[n], a);
          })();
        return (0, o.A)({ domain: i, message: c, primaryType: n, types: r });
      }
      function y(e) {
        let { domain: t, message: a, primaryType: o, types: s } = e,
          h = (e, t) => {
            for (let a of e) {
              let { name: e, type: o } = a,
                i = t[e],
                c = o.match(m.Ge);
              if (c && ("number" == typeof i || "bigint" == typeof i)) {
                let [e, t, a] = c;
                (0, p.cK)(i, {
                  signed: "int" === t,
                  size: Number.parseInt(a) / 8,
                });
              }
              if ("address" === o && "string" == typeof i && !(0, u.P)(i))
                throw new r.M({ address: i });
              let y = o.match(m.BD);
              if (y) {
                let [e, t] = y;
                if (t && (0, d.E)(i) !== Number.parseInt(t))
                  throw new n.BI({
                    expectedSize: Number.parseInt(t),
                    givenSize: (0, d.E)(i),
                  });
              }
              let f = s[o];
              f &&
                ((function (e) {
                  if (
                    "address" === e ||
                    "bool" === e ||
                    "string" === e ||
                    e.startsWith("bytes") ||
                    e.startsWith("uint") ||
                    e.startsWith("int")
                  )
                    throw new l({ type: e });
                })(o),
                h(f, i));
            }
          };
        if (s.EIP712Domain && t) {
          if ("object" != typeof t) throw new i({ domain: t });
          h(s.EIP712Domain, t);
        }
        if ("EIP712Domain" !== o)
          if (s[o]) h(s[o], a);
          else throw new c({ primaryType: o, types: s });
      }
      function f({ domain: e }) {
        return [
          "string" == typeof e?.name && { name: "name", type: "string" },
          e?.version && { name: "version", type: "string" },
          ("number" == typeof e?.chainId || "bigint" == typeof e?.chainId) && {
            name: "chainId",
            type: "uint256",
          },
          e?.verifyingContract && {
            name: "verifyingContract",
            type: "address",
          },
          e?.salt && { name: "salt", type: "bytes32" },
        ].filter(Boolean);
      }
    },
    44063: (e, t, a) => {
      a.d(t, { h: () => o });
      var n = a(26769),
        r = a(66313);
      async function o(e, { hash: t }) {
        let a = await e.request(
          { method: "eth_getTransactionReceipt", params: [t] },
          { dedupe: !0 }
        );
        if (!a) throw new n.Kc({ hash: t });
        return (e.chain?.formatters?.transactionReceipt?.format || r.uL)(a);
      }
    },
    61952: (e, t, a) => {
      a.d(t, { C: () => s });
      var n = a(19342),
        r = a(10250),
        o = a(42360);
      async function s(e, t) {
        let {
          account: a = e.account,
          domain: s,
          message: i,
          primaryType: c,
        } = t;
        if (!a)
          throw new r.T({ docsPath: "/docs/actions/wallet/signTypedData" });
        let l = (0, n.J)(a),
          u = { EIP712Domain: (0, o.H4)({ domain: s }), ...t.types };
        if (
          ((0, o.$$)({ domain: s, message: i, primaryType: c, types: u }),
          l.signTypedData)
        )
          return l.signTypedData({
            domain: s,
            message: i,
            primaryType: c,
            types: u,
          });
        let d = (0, o.v8)({ domain: s, message: i, primaryType: c, types: u });
        return e.request(
          { method: "eth_signTypedData_v4", params: [l.address, d] },
          { retryCount: 0 }
        );
      }
    },
    62491: (e, t, a) => {
      a.d(t, { u: () => f });
      var n = a(71096),
        r = a(95257),
        o = a(56005),
        s = a(66733),
        i = a(24559),
        c = a(65738),
        l = a(96654),
        u = a(61454),
        d = a(70795),
        p = a(55206),
        m = a(75644);
      class h {
        static connect(e, t) {
          return new p.Contract(e, y, t);
        }
        static createInterface() {
          return new m.KA(y);
        }
      }
      let y = [
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
      ];
      class f extends i.A {
        constructor(e) {
          super(e, h),
            (this.tokenDecimals = {}),
            (this.tokenMetadata = {}),
            (this.approve = this.approve.bind(this)),
            (this.approveTxData = this.approveTxData.bind(this)),
            (this.isApproved = this.isApproved.bind(this)),
            (this.getTokenData = this.getTokenData.bind(this)),
            (this.decimalsOf = this.decimalsOf.bind(this)),
            (this.contractInterface = h.createInterface());
        }
        approve({ user: e, token: t, spender: a, amount: n }) {
          let r = this.getContractInstance(t),
            o = this.generateTxCallback({
              rawTxMethod: async () => r.populateTransaction.approve(a, n),
              from: e,
            });
          return {
            tx: o,
            txType: c.lY.ERC20_APPROVAL,
            gas: this.generateTxPriceEstimation([], o),
          };
        }
        approveTxData({ user: e, token: t, spender: a, amount: n }) {
          let o = {};
          return (
            (o.data = this.contractInterface.encodeFunctionData("approve", [
              a,
              n,
            ])),
            (o.to = t),
            (o.from = e),
            (o.gasLimit = r.gH.from(l.ZD[c.ld.approval].recommended)),
            o
          );
        }
        async isApproved({
          user: e,
          token: t,
          spender: a,
          amount: n,
          nativeDecimals: o,
        }) {
          if (t.toLowerCase() === l.Nm.toLowerCase()) return !0;
          let i = await this.decimalsOf(t),
            c = this.getContractInstance(t),
            u = await c.allowance(e, a),
            d =
              "-1" === n
                ? r.gH.from(l.ED)
                : r.gH.from((0, l.sY)(o ? (0, s.formatUnits)(n, i) : n, i));
          return u.gte(d);
        }
        async approvedAmount({ user: e, token: t, spender: a }) {
          if (t.toLowerCase() === l.Nm.toLowerCase()) return -1;
          let n = this.getContractInstance(t),
            r = await n.allowance(e, a);
          if (r.toString() === l.$y) return -1;
          let s = await this.decimalsOf(t);
          return Number(o.formatUnits(r, s));
        }
        async decimalsOf(e) {
          if (e.toLowerCase() === l.Nm.toLowerCase()) return 18;
          if (!this.tokenDecimals[e]) {
            let t = this.getContractInstance(e);
            this.tokenDecimals[e] = await t.decimals();
          }
          return this.tokenDecimals[e];
        }
        async getTokenData(e) {
          if (e.toLowerCase() === l.Nm.toLowerCase())
            return {
              name: "Ethereum",
              symbol: "ETH",
              decimals: 18,
              address: e,
            };
          if ("0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2" === e.toLowerCase())
            return { name: "Maker", symbol: "MKR", decimals: 18, address: e };
          if (!this.tokenMetadata[e]) {
            let { name: t, symbol: a } = this.getContractInstance(e),
              [n, r, o] = await Promise.all([t(), a(), this.decimalsOf(e)]);
            this.tokenMetadata[e] = {
              name: n,
              symbol: r,
              decimals: o,
              address: e,
            };
          }
          return this.tokenMetadata[e];
        }
      }
      (0, n.__decorate)(
        [
          u.RK,
          (0, n.__param)(0, (0, d.Ub)("user")),
          (0, n.__param)(0, (0, d.Ub)("token")),
          (0, n.__param)(0, (0, d.Ub)("spender")),
          (0, n.__param)(0, (0, d.uv)("amount")),
          (0, n.__metadata)("design:type", Function),
          (0, n.__metadata)("design:paramtypes", [Object]),
          (0, n.__metadata)("design:returntype", Object),
        ],
        f.prototype,
        "approve",
        null
      ),
        (0, n.__decorate)(
          [
            u.RK,
            (0, n.__param)(0, (0, d.Ub)("user")),
            (0, n.__param)(0, (0, d.Ub)("token")),
            (0, n.__param)(0, (0, d.Ub)("spender")),
            (0, n.__param)(0, (0, d.uv)("amount")),
            (0, n.__metadata)("design:type", Function),
            (0, n.__metadata)("design:paramtypes", [Object]),
            (0, n.__metadata)("design:returntype", Object),
          ],
          f.prototype,
          "approveTxData",
          null
        ),
        (0, n.__decorate)(
          [
            u.RK,
            (0, n.__param)(0, (0, d.Ub)("user")),
            (0, n.__param)(0, (0, d.Ub)("token")),
            (0, n.__param)(0, (0, d.Ub)("spender")),
            (0, n.__param)(0, (0, d.ph)("amount")),
            (0, n.__metadata)("design:type", Function),
            (0, n.__metadata)("design:paramtypes", [Object]),
            (0, n.__metadata)("design:returntype", Promise),
          ],
          f.prototype,
          "isApproved",
          null
        ),
        (0, n.__decorate)(
          [
            u.RK,
            (0, n.__param)(0, (0, d.Ub)("user")),
            (0, n.__param)(0, (0, d.Ub)("token")),
            (0, n.__param)(0, (0, d.Ub)("spender")),
            (0, n.__metadata)("design:type", Function),
            (0, n.__metadata)("design:paramtypes", [Object]),
            (0, n.__metadata)("design:returntype", Promise),
          ],
          f.prototype,
          "approvedAmount",
          null
        ),
        (0, n.__decorate)(
          [
            u.RK,
            (0, n.__param)(0, (0, d.Ub)()),
            (0, n.__metadata)("design:type", Function),
            (0, n.__metadata)("design:paramtypes", [String]),
            (0, n.__metadata)("design:returntype", Promise),
          ],
          f.prototype,
          "decimalsOf",
          null
        ),
        (0, n.__decorate)(
          [
            u.RK,
            (0, n.__param)(0, (0, d.Ub)()),
            (0, n.__metadata)("design:type", Function),
            (0, n.__metadata)("design:paramtypes", [String]),
            (0, n.__metadata)("design:returntype", Promise),
          ],
          f.prototype,
          "getTokenData",
          null
        );
    },
    70649: (e, t, a) => {
      a.d(t, { B8: () => N, UC: () => P, bL: () => I, l9: () => E });
      var n = a(7620),
        r = a(29254),
        o = a(80482),
        s = a(5577),
        i = a(18400),
        c = a(7156),
        l = a(17644),
        u = a(87076),
        d = a(60728),
        p = a(54568),
        m = "Tabs",
        [h, y] = (0, o.A)(m, [s.RG]),
        f = (0, s.RG)(),
        [b, g] = h(m),
        v = n.forwardRef((e, t) => {
          let {
              __scopeTabs: a,
              value: n,
              onValueChange: r,
              defaultValue: o,
              orientation: s = "horizontal",
              dir: i,
              activationMode: h = "automatic",
              ...y
            } = e,
            f = (0, l.jH)(i),
            [g, v] = (0, u.i)({
              prop: n,
              onChange: r,
              defaultProp: null != o ? o : "",
              caller: m,
            });
          return (0, p.jsx)(b, {
            scope: a,
            baseId: (0, d.B)(),
            value: g,
            onValueChange: v,
            orientation: s,
            dir: f,
            activationMode: h,
            children: (0, p.jsx)(c.sG.div, {
              dir: f,
              "data-orientation": s,
              ...y,
              ref: t,
            }),
          });
        });
      v.displayName = m;
      var w = "TabsList",
        T = n.forwardRef((e, t) => {
          let { __scopeTabs: a, loop: n = !0, ...r } = e,
            o = g(w, a),
            i = f(a);
          return (0, p.jsx)(s.bL, {
            asChild: !0,
            ...i,
            orientation: o.orientation,
            dir: o.dir,
            loop: n,
            children: (0, p.jsx)(c.sG.div, {
              role: "tablist",
              "aria-orientation": o.orientation,
              ...r,
              ref: t,
            }),
          });
        });
      T.displayName = w;
      var C = "TabsTrigger",
        k = n.forwardRef((e, t) => {
          let { __scopeTabs: a, value: n, disabled: o = !1, ...i } = e,
            l = g(C, a),
            u = f(a),
            d = D(l.baseId, n),
            m = A(l.baseId, n),
            h = n === l.value;
          return (0, p.jsx)(s.q7, {
            asChild: !0,
            ...u,
            focusable: !o,
            active: h,
            children: (0, p.jsx)(c.sG.button, {
              type: "button",
              role: "tab",
              "aria-selected": h,
              "aria-controls": m,
              "data-state": h ? "active" : "inactive",
              "data-disabled": o ? "" : void 0,
              disabled: o,
              id: d,
              ...i,
              ref: t,
              onMouseDown: (0, r.m)(e.onMouseDown, (e) => {
                o || 0 !== e.button || !1 !== e.ctrlKey
                  ? e.preventDefault()
                  : l.onValueChange(n);
              }),
              onKeyDown: (0, r.m)(e.onKeyDown, (e) => {
                [" ", "Enter"].includes(e.key) && l.onValueChange(n);
              }),
              onFocus: (0, r.m)(e.onFocus, () => {
                let e = "manual" !== l.activationMode;
                h || o || !e || l.onValueChange(n);
              }),
            }),
          });
        });
      k.displayName = C;
      var _ = "TabsContent",
        x = n.forwardRef((e, t) => {
          let {
              __scopeTabs: a,
              value: r,
              forceMount: o,
              children: s,
              ...l
            } = e,
            u = g(_, a),
            d = D(u.baseId, r),
            m = A(u.baseId, r),
            h = r === u.value,
            y = n.useRef(h);
          return (
            n.useEffect(() => {
              let e = requestAnimationFrame(() => (y.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, p.jsx)(i.C, {
              present: o || h,
              children: (a) => {
                let { present: n } = a;
                return (0, p.jsx)(c.sG.div, {
                  "data-state": h ? "active" : "inactive",
                  "data-orientation": u.orientation,
                  role: "tabpanel",
                  "aria-labelledby": d,
                  hidden: !n,
                  id: m,
                  tabIndex: 0,
                  ...l,
                  ref: t,
                  style: {
                    ...e.style,
                    animationDuration: y.current ? "0s" : void 0,
                  },
                  children: n && s,
                });
              },
            })
          );
        });
      function D(e, t) {
        return "".concat(e, "-trigger-").concat(t);
      }
      function A(e, t) {
        return "".concat(e, "-content-").concat(t);
      }
      x.displayName = _;
      var I = v,
        N = T,
        E = k,
        P = x;
    },
    76099: (e, t, a) => {
      a.d(t, { n: () => c });
      var n = a(42960),
        r = a(16403),
        o = a(17857),
        s = a(8422),
        i = a(43339);
      async function c(e, t) {
        let { chainId: a, timeout: c = 0, ...l } = t,
          u = e.getClient({ chainId: a }),
          d = (0, i.T)(u, r.n, "waitForTransactionReceipt"),
          p = await d({ ...l, timeout: c });
        if ("reverted" === p.status) {
          let e = (0, i.T)(u, o.x, "getTransaction"),
            t = await e({ hash: p.transactionHash }),
            a = (0, i.T)(u, s.T, "call"),
            r = await a({
              ...t,
              data: t.input,
              gasPrice: "eip1559" !== t.type ? t.gasPrice : void 0,
              maxFeePerGas: "eip1559" === t.type ? t.maxFeePerGas : void 0,
              maxPriorityFeePerGas:
                "eip1559" === t.type ? t.maxPriorityFeePerGas : void 0,
            });
          throw Error(
            r?.data ? (0, n.IQ)(`0x${r.data.substring(138)}`) : "unknown reason"
          );
        }
        return { ...p, chainId: u.chain.id };
      }
    },
    76640: (e, t, a) => {
      a.d(t, { K: () => n });
      function n(e, t = {}) {
        try {
          return e.getClient(t);
        } catch {
          return;
        }
      }
    },
    78982: (e, t, a) => {
      a.d(t, { x: () => l });
      var n = a(16258),
        r = a(84322),
        o = a(43339),
        s = a(4323);
      async function i(e, t) {
        let a,
          { account: n, chainId: i, connector: c, ...l } = t;
        a =
          "object" == typeof n && n?.type === "local"
            ? e.getClient({ chainId: i })
            : await (0, s.r)(e, {
                account: n ?? void 0,
                chainId: i,
                connector: c,
              });
        let u = (0, o.T)(a, r.E, "writeContract");
        return await u({
          ...l,
          ...(n ? { account: n } : {}),
          chain: i ? { id: i } : null,
        });
      }
      var c = a(29344);
      function l() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: a } = t,
          r =
            ((e = (0, c.U)(t)),
            { mutationFn: (t) => i(e, t), mutationKey: ["writeContract"] }),
          { mutate: o, mutateAsync: s, ...l } = (0, n.n)({ ...a, ...r });
        return { ...l, writeContract: o, writeContractAsync: s };
      }
    },
    80277: (e, t, a) => {
      a.d(t, { q: () => f });
      var n,
        r,
        o = a(75644),
        s = a(55206),
        i = a(51452),
        c = a(95257),
        l = a(87709),
        u = a(92220),
        d = a(66733);
      !(function (e) {
        (e.web3 = "web3"), (e.ethers = "ethers"), (e.customHttp = "custom");
      })(n || (n = {})),
        (function (e) {
          (e[(e.mainnet = 1)] = "mainnet"),
            (e[(e.ropsten = 3)] = "ropsten"),
            (e[(e.rinkeby = 4)] = "rinkeby"),
            (e[(e.goerli = 5)] = "goerli"),
            (e[(e.optimism = 10)] = "optimism"),
            (e[(e.kovan = 42)] = "kovan"),
            (e[(e.matic = 137)] = "matic"),
            (e[(e.kovanOptimism = 69)] = "kovanOptimism"),
            (e[(e.xdai = 100)] = "xdai"),
            (e[(e.xDaiTestnet = 10200)] = "xDaiTestnet"),
            (e[(e.goerliOptimism = 420)] = "goerliOptimism"),
            (e[(e.sepoliaOptimism = 0xaa37dc)] = "sepoliaOptimism"),
            (e[(e.arbitrum = 42161)] = "arbitrum"),
            (e[(e.rinkebyArbitrum = 421611)] = "rinkebyArbitrum"),
            (e[(e.goerliArbitrum = 421613)] = "goerliArbitrum"),
            (e[(e.sepoliaArbitrum = 421614)] = "sepoliaArbitrum"),
            (e[(e.mumbai = 80001)] = "mumbai"),
            (e[(e.sepolia = 0xaa36a7)] = "sepolia"),
            (e[(e.avalancheMainnet = 43114)] = "avalancheMainnet"),
            (e[(e.avalancheFuji = 43113)] = "avalancheFuji"),
            (e[(e.fantomTestnet = 4002)] = "fantomTestnet"),
            (e[(e.fantom = 250)] = "fantom"),
            (e[(e.bsc = 56)] = "bsc"),
            (e[(e.bsc_testnet = 97)] = "bsc_testnet"),
            (e[(e.moonbeam = 1284)] = "moonbeam"),
            (e[(e.moonriver = 1285)] = "moonriver"),
            (e[(e.moonbaseAlphaTestnet = 1287)] = "moonbaseAlphaTestnet"),
            (e[(e.harmony = 16666e5)] = "harmony"),
            (e[(e.cronos = 25)] = "cronos"),
            (e[(e.fuse = 122)] = "fuse"),
            (e[(e.songbirdCanaryNetwork = 19)] = "songbirdCanaryNetwork"),
            (e[(e.costonTestnet = 16)] = "costonTestnet"),
            (e[(e.boba = 288)] = "boba"),
            (e[(e.aurora = 0x4e454152)] = "aurora"),
            (e[(e.astar = 592)] = "astar"),
            (e[(e.okc = 66)] = "okc"),
            (e[(e.heco = 128)] = "heco"),
            (e[(e.metis = 1088)] = "metis"),
            (e[(e.rsk = 30)] = "rsk"),
            (e[(e.rskTestnet = 31)] = "rskTestnet"),
            (e[(e.evmos = 9001)] = "evmos"),
            (e[(e.evmosTestnet = 9e3)] = "evmosTestnet"),
            (e[(e.thundercore = 108)] = "thundercore"),
            (e[(e.thundercoreTestnet = 18)] = "thundercoreTestnet"),
            (e[(e.oasis = 26863)] = "oasis"),
            (e[(e.celo = 42220)] = "celo"),
            (e[(e.godwoken = 71402)] = "godwoken"),
            (e[(e.godwokentestnet = 71401)] = "godwokentestnet"),
            (e[(e.klatyn = 8217)] = "klatyn"),
            (e[(e.milkomeda = 2001)] = "milkomeda"),
            (e[(e.kcc = 321)] = "kcc"),
            (e[(e.etherlite = 111)] = "etherlite"),
            (e[(e.lineaTestnet = 59140)] = "lineaTestnet"),
            (e[(e.linea = 59144)] = "linea"),
            (e[(e.scroll = 534352)] = "scroll"),
            (e[(e.scrollSepolia = 534351)] = "scrollSepolia"),
            (e[(e.zkSyncEra = 324)] = "zkSyncEra"),
            (e[(e.zkSyncEraTestnet = 280)] = "zkSyncEraTestnet"),
            (e[(e.zkSyncEraSepoliaTestnet = 300)] = "zkSyncEraSepoliaTestnet"),
            (e[(e.starknet = 300)] = "starknet"),
            (e[(e.starknetTestnet = 301)] = "starknetTestnet"),
            (e[(e.shibarium = 109)] = "shibarium"),
            (e[(e.mantle = 5e3)] = "mantle"),
            (e[(e.mantleTestnet = 5001)] = "mantleTestnet"),
            (e[(e.base = 8453)] = "base"),
            (e[(e.baseTestnet = 84531)] = "baseTestnet"),
            (e[(e.blastSepolia = 0xa0c71fd)] = "blastSepolia"),
            (e[(e.polygonZkEvm = 1101)] = "polygonZkEvm"),
            (e[(e.polygonZkEvmTestnet = 1442)] = "polygonZkEvmTestnet"),
            (e[(e.zora = 7777777)] = "zora"),
            (e[(e.zoraTestnet = 999)] = "zoraTestnet"),
            (e[(e.flare = 14)] = "flare"),
            (e[(e.pulsechain = 369)] = "pulsechain"),
            (e[(e.sapphire = 23294)] = "sapphire"),
            (e[(e.blast = 81457)] = "blast"),
            (e[(e.amoy = 80002)] = "amoy"),
            (e[(e.mantaPacific = 169)] = "mantaPacific"),
            (e[(e.mode = 34443)] = "mode"),
            (e[(e.modeTestnet = 919)] = "modeTestnet");
        })(r || (r = {}));
      var p = (function () {
          function e() {}
          return (
            (e.deepClone = function (e) {
              return JSON.parse(JSON.stringify(e));
            }),
            e
          );
        })(),
        m = function () {
          return (m =
            Object.assign ||
            function (e) {
              for (var t, a = 1, n = arguments.length; a < n; a++)
                for (var r in (t = arguments[a]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        h = function (e, t, a, n) {
          return new (a || (a = Promise))(function (r, o) {
            function s(e) {
              try {
                c(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function i(e) {
              try {
                c(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value) instanceof a
                    ? t
                    : new a(function (e) {
                        e(t);
                      })
                  ).then(s, i);
            }
            c((n = n.apply(e, t || [])).next());
          });
        },
        y = function (e, t) {
          var a,
            n,
            r,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: i(0), throw: i(1), return: i(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function i(o) {
            return function (i) {
              var c = [o, i];
              if (a) throw TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((a = 1),
                    n &&
                      (r =
                        2 & c[0]
                          ? n.return
                          : c[0]
                          ? n.throw || ((r = n.return) && r.call(n), 0)
                          : n.next) &&
                      !(r = r.call(n, c[1])).done)
                  )
                    return r;
                  switch (((n = 0), r && (c = [2 & c[0], r.value]), c[0])) {
                    case 0:
                    case 1:
                      r = c;
                      break;
                    case 4:
                      return s.label++, { value: c[1], done: !1 };
                    case 5:
                      s.label++, (n = c[1]), (c = [0]);
                      continue;
                    case 7:
                      (c = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(r = (r = s.trys).length > 0 && r[r.length - 1]) &&
                        (6 === c[0] || 2 === c[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === c[0] && (!r || (c[1] > r[0] && c[1] < r[3]))) {
                        s.label = c[1];
                        break;
                      }
                      if (6 === c[0] && s.label < r[1]) {
                        (s.label = r[1]), (r = c);
                        break;
                      }
                      if (r && s.label < r[2]) {
                        (s.label = r[2]), s.ops.push(c);
                        break;
                      }
                      r[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  c = t.call(e, s);
                } catch (e) {
                  (c = [6, e]), (n = 0);
                } finally {
                  a = r = 0;
                }
              if (5 & c[0]) throw c[1];
              return { value: c[0] ? c[1] : void 0, done: !0 };
            };
          }
        },
        f = (function () {
          function e(e) {
            if (((this._options = e), this._options.web3Instance)) {
              this._executionType = n.web3;
              return;
            }
            if (this._options.ethersProvider) {
              this._executionType = n.ethers;
              return;
            }
            if (this._options.nodeUrl) {
              this._executionType = n.customHttp;
              return;
            }
            throw Error(
              "Your options passed in our incorrect they need to match either `MulticallOptionsEthers`, `MulticallOptionsWeb3` or `MulticallOptionsCustomJsonRpcProvider` interfaces"
            );
          }
          return (
            (e.prototype.call = function (e, t) {
              return (
                void 0 === t && (t = {}),
                h(this, void 0, void 0, function () {
                  var a, n, r, o, s, i, c, l, u, m, h;
                  return y(this, function (y) {
                    switch (y.label) {
                      case 0:
                        return (
                          Array.isArray(e) || (e = [e]),
                          [
                            4,
                            this.execute(this.buildAggregateCallContext(e), t),
                          ]
                        );
                      case 1:
                        for (
                          r = 0,
                            n = {
                              results: {},
                              blockNumber: (a = y.sent()).blockNumber,
                            };
                          r < a.results.length;
                          r++
                        ) {
                          for (
                            c = 0,
                              s = e[(o = a.results[r]).contractContextIndex],
                              i = {
                                originalContractCallContext: p.deepClone(s),
                                callsReturnContext: [],
                              };
                            c < o.methodResults.length;
                            c++
                          ) {
                            if (
                              ((l = o.methodResults[c]),
                              (u = s.calls[l.contractMethodIndex]),
                              (m = this.findOutputTypesFromAbi(
                                s.abi,
                                u.methodName
                              )),
                              this._options.tryAggregate && !l.result.success)
                            ) {
                              i.callsReturnContext.push(
                                p.deepClone({
                                  returnValues: [],
                                  decoded: !1,
                                  reference: u.reference,
                                  methodName: u.methodName,
                                  methodParameters: u.methodParameters,
                                  success: !1,
                                })
                              );
                              continue;
                            }
                            if (m && m.length > 0)
                              try {
                                (h = d.defaultAbiCoder.decode(
                                  m,
                                  this.getReturnDataFromResult(l.result)
                                )),
                                  i.callsReturnContext.push(
                                    p.deepClone({
                                      returnValues: this.formatReturnValues(h),
                                      decoded: !0,
                                      reference: u.reference,
                                      methodName: u.methodName,
                                      methodParameters: u.methodParameters,
                                      success: !0,
                                    })
                                  );
                              } catch (e) {
                                if (!this._options.tryAggregate) throw e;
                                i.callsReturnContext.push(
                                  p.deepClone({
                                    returnValues: [],
                                    decoded: !1,
                                    reference: u.reference,
                                    methodName: u.methodName,
                                    methodParameters: u.methodParameters,
                                    success: !1,
                                  })
                                );
                              }
                            else
                              i.callsReturnContext.push(
                                p.deepClone({
                                  returnValues: this.getReturnDataFromResult(
                                    l.result
                                  ),
                                  decoded: !1,
                                  reference: u.reference,
                                  methodName: u.methodName,
                                  methodParameters: u.methodParameters,
                                  success: !0,
                                })
                              );
                          }
                          n.results[i.originalContractCallContext.reference] =
                            i;
                        }
                        return [2, n];
                    }
                  });
                })
              );
            }),
            (e.prototype.getReturnDataFromResult = function (e) {
              return this._options.tryAggregate ? e.returnData : e;
            }),
            (e.prototype.formatReturnValues = function (e) {
              var t = e;
              return (1 === e.length && (t = e[0]), Array.isArray(t)) ? t : [t];
            }),
            (e.prototype.buildAggregateCallContext = function (e) {
              for (var t = [], a = 0; a < e.length; a++)
                for (
                  var n = e[a], r = new o.KA(JSON.stringify(n.abi)), s = 0;
                  s < n.calls.length;
                  s++
                ) {
                  var i = n.calls[s],
                    c = r.encodeFunctionData(i.methodName, i.methodParameters);
                  t.push({
                    contractContextIndex: p.deepClone(a),
                    contractMethodIndex: p.deepClone(s),
                    target: n.contractAddress,
                    encodedData: c,
                  });
                }
              return t;
            }),
            (e.prototype.findOutputTypesFromAbi = function (e, t) {
              var a,
                n = new s.Contract(i.L, e);
              if (((t = t.trim()), n.interface.functions[t]))
                return n.interface.functions[t].outputs;
              for (var r = 0; r < e.length; r++)
                if ((null == (a = e[r].name) ? void 0 : a.trim()) === t)
                  return e[r].outputs;
            }),
            (e.prototype.execute = function (e, t) {
              return h(this, void 0, void 0, function () {
                return y(this, function (a) {
                  switch (a.label) {
                    case 0:
                      switch (this._executionType) {
                        case n.web3:
                          return [3, 1];
                        case n.ethers:
                        case n.customHttp:
                          return [3, 3];
                      }
                      return [3, 5];
                    case 1:
                      return [4, this.executeWithWeb3(e, t)];
                    case 2:
                    case 4:
                      return [2, a.sent()];
                    case 3:
                      return [4, this.executeWithEthersOrCustom(e, t)];
                    case 5:
                      throw Error(this._executionType + " is not defined");
                  }
                });
              });
            }),
            (e.prototype.executeWithWeb3 = function (t, a) {
              return h(this, void 0, void 0, function () {
                var n, r, o, s, i;
                return y(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return [
                        4,
                        (n =
                          this.getTypedOptions().web3Instance).eth.net.getId(),
                      ];
                    case 1:
                      if (
                        ((r = l.sent()),
                        (o = new n.eth.Contract(
                          e.ABI,
                          this.getContractBasedOnNetwork(r)
                        )),
                        (s = "latest"),
                        a.blockNumber && (s = a.blockNumber),
                        !this._options.tryAggregate)
                      )
                        return [3, 3];
                      return [
                        4,
                        o.methods
                          .tryBlockAndAggregate(
                            !1,
                            this.mapCallContextToMatchContractFormat(t)
                          )
                          .call({}, s),
                      ];
                    case 2:
                    case 4:
                      return (
                        ((i = l.sent()).blockNumber = c.gH.from(i.blockNumber)),
                        [2, this.buildUpAggregateResponse(i, t)]
                      );
                    case 3:
                      return [
                        4,
                        o.methods
                          .aggregate(
                            this.mapCallContextToMatchContractFormat(t)
                          )
                          .call({}, s),
                      ];
                  }
                });
              });
            }),
            (e.prototype.executeWithEthersOrCustom = function (t, a) {
              return h(this, void 0, void 0, function () {
                var n, r, o, i, c, d;
                return y(this, function (p) {
                  switch (p.label) {
                    case 0:
                      return (
                        (n = this.getTypedOptions().ethersProvider) ||
                          (n = (r = this.getTypedOptions()).nodeUrl
                            ? new l.F(r.nodeUrl)
                            : u.getDefaultProvider()),
                        [4, n.getNetwork()]
                      );
                    case 1:
                      if (
                        ((o = p.sent()),
                        (i = new s.Contract(
                          this.getContractBasedOnNetwork(o.chainId),
                          e.ABI,
                          n
                        )),
                        (c = {}),
                        a.blockNumber &&
                          (c = m(m({}, c), {
                            blockTag: Number(a.blockNumber),
                          })),
                        !this._options.tryAggregate)
                      )
                        return [3, 3];
                      return [
                        4,
                        i.callStatic.tryBlockAndAggregate(
                          !1,
                          this.mapCallContextToMatchContractFormat(t),
                          c
                        ),
                      ];
                    case 2:
                    case 4:
                      return (
                        (d = p.sent()), [2, this.buildUpAggregateResponse(d, t)]
                      );
                    case 3:
                      return [
                        4,
                        i.callStatic.aggregate(
                          this.mapCallContextToMatchContractFormat(t),
                          c
                        ),
                      ];
                  }
                });
              });
            }),
            (e.prototype.buildUpAggregateResponse = function (e, t) {
              for (
                var a = { blockNumber: e.blockNumber.toNumber(), results: [] },
                  n = function (n) {
                    var r = a.results.find(function (e) {
                      return (
                        e.contractContextIndex === t[n].contractContextIndex
                      );
                    });
                    r
                      ? r.methodResults.push({
                          result: e.returnData[n],
                          contractMethodIndex: t[n].contractMethodIndex,
                        })
                      : a.results.push({
                          methodResults: [
                            {
                              result: e.returnData[n],
                              contractMethodIndex: t[n].contractMethodIndex,
                            },
                          ],
                          contractContextIndex: t[n].contractContextIndex,
                        });
                  },
                  r = 0;
                r < e.returnData.length;
                r++
              )
                n(r);
              return a;
            }),
            (e.prototype.mapCallContextToMatchContractFormat = function (e) {
              return e.map(function (e) {
                return { target: e.target, callData: e.encodedData };
              });
            }),
            (e.prototype.getTypedOptions = function () {
              return this._options;
            }),
            (e.prototype.getContractBasedOnNetwork = function (e) {
              if (this._options.multicallCustomContractAddress)
                return this._options.multicallCustomContractAddress;
              switch (e) {
                case r.mainnet:
                case r.ropsten:
                case r.rinkeby:
                case r.goerli:
                case r.optimism:
                case r.kovan:
                case r.matic:
                case r.kovanOptimism:
                case r.xdai:
                case r.xDaiTestnet:
                case r.goerliOptimism:
                case r.sepoliaOptimism:
                case r.arbitrum:
                case r.rinkebyArbitrum:
                case r.goerliArbitrum:
                case r.sepoliaArbitrum:
                case r.mumbai:
                case r.sepolia:
                case r.avalancheMainnet:
                case r.avalancheFuji:
                case r.fantomTestnet:
                case r.fantom:
                case r.bsc:
                case r.bsc_testnet:
                case r.moonbeam:
                case r.moonriver:
                case r.moonbaseAlphaTestnet:
                case r.harmony:
                case r.cronos:
                case r.fuse:
                case r.songbirdCanaryNetwork:
                case r.costonTestnet:
                case r.boba:
                case r.aurora:
                case r.astar:
                case r.okc:
                case r.heco:
                case r.metis:
                case r.rsk:
                case r.rskTestnet:
                case r.evmos:
                case r.evmosTestnet:
                case r.thundercore:
                case r.thundercoreTestnet:
                case r.oasis:
                case r.celo:
                case r.godwoken:
                case r.godwokentestnet:
                case r.klatyn:
                case r.milkomeda:
                case r.kcc:
                case r.lineaTestnet:
                case r.linea:
                case r.mantle:
                case r.mantleTestnet:
                case r.base:
                case r.baseTestnet:
                case r.blastSepolia:
                case r.polygonZkEvm:
                case r.polygonZkEvmTestnet:
                case r.zora:
                case r.zoraTestnet:
                case r.flare:
                case r.pulsechain:
                case r.scroll:
                case r.scrollSepolia:
                case r.sapphire:
                case r.blast:
                case r.amoy:
                case r.mantaPacific:
                case r.mode:
                  return "0xcA11bde05977b3631167028862bE2a173976CA11";
                case r.modeTestnet:
                  return "0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF";
                case r.etherlite:
                  return "0x21681750D7ddCB8d1240eD47338dC984f94AF2aC";
                case r.zkSyncEra:
                case r.zkSyncEraTestnet:
                case r.zkSyncEraSepoliaTestnet:
                  return "0xF9cda624FBC7e059355ce98a31693d299FACd963";
                case r.shibarium:
                  return "0xd1727fC8F78aBA7DD6294f6033D74c72Ccd3D3B0";
                case r.starknet:
                  return "0xc662c410C0ECf747543f5bA90660f6ABeBD9C8c4";
                case r.starknetTestnet:
                  return "0xde29d060D45901Fb19ED6C6e959EB22d8626708e";
                default:
                  throw Error(
                    "Network - " +
                      e +
                      " doesn't have a multicall contract address defined. Please check your network or deploy your own contract on it."
                  );
              }
            }),
            (e.ABI = [
              {
                constant: !1,
                inputs: [
                  {
                    components: [
                      { name: "target", type: "address" },
                      { name: "callData", type: "bytes" },
                    ],
                    name: "calls",
                    type: "tuple[]",
                  },
                ],
                name: "aggregate",
                outputs: [
                  { name: "blockNumber", type: "uint256" },
                  { name: "returnData", type: "bytes[]" },
                ],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "bool",
                    name: "requireSuccess",
                    type: "bool",
                  },
                  {
                    components: [
                      {
                        internalType: "address",
                        name: "target",
                        type: "address",
                      },
                      {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                      },
                    ],
                    internalType: "struct Multicall2.Call[]",
                    name: "calls",
                    type: "tuple[]",
                  },
                ],
                name: "tryBlockAndAggregate",
                outputs: [
                  {
                    internalType: "uint256",
                    name: "blockNumber",
                    type: "uint256",
                  },
                  {
                    internalType: "bytes32",
                    name: "blockHash",
                    type: "bytes32",
                  },
                  {
                    components: [
                      { internalType: "bool", name: "success", type: "bool" },
                      {
                        internalType: "bytes",
                        name: "returnData",
                        type: "bytes",
                      },
                    ],
                    internalType: "struct Multicall2.Result[]",
                    name: "returnData",
                    type: "tuple[]",
                  },
                ],
                stateMutability: "nonpayable",
                type: "function",
              },
            ]),
            e
          );
        })();
    },
    84322: (e, t, a) => {
      a.d(t, { E: () => l });
      var n = a(19342),
        r = a(10250),
        o = a(2780),
        s = a(39658),
        i = a(99371),
        c = a(9953);
      async function l(e, t) {
        let {
          abi: a,
          account: l = e.account,
          address: u,
          args: d,
          dataSuffix: p,
          functionName: m,
          ...h
        } = t;
        if (void 0 === l)
          throw new r.T({ docsPath: "/docs/contract/writeContract" });
        let y = l ? (0, n.J)(l) : null,
          f = (0, o.p)({ abi: a, args: d, functionName: m });
        try {
          return await (0, i.T)(
            e,
            c.v,
            "sendTransaction"
          )({
            data: `${f}${p ? p.replace("0x", "") : ""}`,
            to: u,
            account: y,
            ...h,
          });
        } catch (e) {
          throw (0, s.j)(e, {
            abi: a,
            address: u,
            args: d,
            docsPath: "/docs/contract/writeContract",
            functionName: m,
            sender: y?.address,
          });
        }
      }
    },
    97465: (e, t, a) => {
      a.d(t, { Np: () => i });
      var n = a(24887),
        r = a(47298),
        o = a(20434),
        s = a(12052);
      function i(e, t = {}) {
        let {
          key: a = "fallback",
          name: n = "Fallback",
          rank: r = !1,
          shouldThrow: l = c,
          retryCount: u,
          retryDelay: d,
        } = t;
        return ({ chain: t, pollingInterval: i = 4e3, timeout: c, ...p }) => {
          let m = e,
            h = () => {},
            y = (0, s.o)(
              {
                key: a,
                name: n,
                async request({ method: e, params: a }) {
                  let n,
                    r = async (o = 0) => {
                      let s = m[o]({
                        ...p,
                        chain: t,
                        retryCount: 0,
                        timeout: c,
                      });
                      try {
                        let t = await s.request({ method: e, params: a });
                        return (
                          h({
                            method: e,
                            params: a,
                            response: t,
                            transport: s,
                            status: "success",
                          }),
                          t
                        );
                      } catch (i) {
                        if (
                          (h({
                            error: i,
                            method: e,
                            params: a,
                            transport: s,
                            status: "error",
                          }),
                          l(i) ||
                            o === m.length - 1 ||
                            !(n ??= m.slice(o + 1).some((a) => {
                              let { include: n, exclude: r } =
                                a({ chain: t }).config.methods || {};
                              return n ? n.includes(e) : !r || !r.includes(e);
                            })))
                        )
                          throw i;
                        return r(o + 1);
                      }
                    };
                  return r();
                },
                retryCount: u,
                retryDelay: d,
                type: "fallback",
              },
              {
                onResponse: (e) => (h = e),
                transports: m.map((e) => e({ chain: t, retryCount: 0 })),
              }
            );
          if (r) {
            let e = "object" == typeof r ? r : {};
            !(function ({
              chain: e,
              interval: t = 4e3,
              onTransports: a,
              ping: n,
              sampleCount: r = 10,
              timeout: s = 1e3,
              transports: i,
              weights: c = {},
            }) {
              let { stability: l = 0.7, latency: u = 0.3 } = c,
                d = [],
                p = async () => {
                  let c = await Promise.all(
                    i.map(async (t) => {
                      let a,
                        r,
                        o = t({ chain: e, retryCount: 0, timeout: s }),
                        i = Date.now();
                      try {
                        await (n
                          ? n({ transport: o })
                          : o.request({ method: "net_listening" })),
                          (r = 1);
                      } catch {
                        r = 0;
                      } finally {
                        a = Date.now();
                      }
                      return { latency: a - i, success: r };
                    })
                  );
                  d.push(c), d.length > r && d.shift();
                  let m = Math.max(
                    ...d.map((e) => Math.max(...e.map(({ latency: e }) => e)))
                  );
                  a(
                    i
                      .map((e, t) => {
                        let a = d.map((e) => e[t].latency),
                          n = a.reduce((e, t) => e + t, 0) / a.length,
                          r = d.map((e) => e[t].success),
                          o = r.reduce((e, t) => e + t, 0) / r.length;
                        return 0 === o ? [0, t] : [u * (1 - n / m) + l * o, t];
                      })
                      .sort((e, t) => t[0] - e[0])
                      .map(([, e]) => i[e])
                  ),
                    await (0, o.u)(t),
                    p();
                };
              p();
            })({
              chain: t,
              interval: e.interval ?? i,
              onTransports: (e) => (m = e),
              ping: e.ping,
              sampleCount: e.sampleCount,
              timeout: e.timeout,
              transports: m,
              weights: e.weights,
            });
          }
          return y;
        };
      }
      function c(e) {
        return !!(
          "code" in e &&
          "number" == typeof e.code &&
          (e.code === r.YW.code ||
            e.code === r.vx.code ||
            n.A7.nodeMessage.test(e.message) ||
            5e3 === e.code)
        );
      }
    },
    97861: (e, t, a) => {
      a.d(t, { FJ: () => n });
      var n = "0x4da27a545c0c5B758a6BA100e3a049001de870f5";
    },
    98283: (e, t, a) => {
      a.d(t, { X: () => o });
      var n = a(6616);
      class r extends n.C {
        constructor({ value: e }) {
          super(`Number \`${e}\` is not a valid decimal number.`, {
            name: "InvalidDecimalNumberError",
          });
        }
      }
      function o(e, t) {
        if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e)) throw new r({ value: e });
        let [a, n = "0"] = e.split("."),
          o = a.startsWith("-");
        if ((o && (a = a.slice(1)), (n = n.replace(/(0+)$/, "")), 0 === t))
          1 === Math.round(Number(`.${n}`)) && (a = `${BigInt(a) + 1n}`),
            (n = "");
        else if (n.length > t) {
          let [e, r, o] = [n.slice(0, t - 1), n.slice(t - 1, t), n.slice(t)],
            s = Math.round(Number(`${r}.${o}`));
          (n =
            s > 9
              ? `${BigInt(e) + BigInt(1)}0`.padStart(e.length + 1, "0")
              : `${e}${s}`).length > t &&
            ((n = n.slice(1)), (a = `${BigInt(a) + 1n}`)),
            (n = n.slice(0, t));
        } else n = n.padEnd(t, "0");
        return BigInt(`${o ? "-" : ""}${a}${n}`);
      }
    },
  },
]);
