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
      (e._sentryDebugIds[t] = "8f1182af-aa48-491b-9780-41c8f55aa7ab"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-8f1182af-aa48-491b-9780-41c8f55aa7ab"));
  })();
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3120],
  {
    4945: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => p });
      var r = n(70779),
        a = n(6616);
      class i extends a.C {
        constructor(e) {
          super(`Filter type "${e}" is not supported.`, {
            name: "FilterTypeNotSupportedError",
          });
        }
      }
      var s = n(30761),
        o = n(11435),
        c = n(97878),
        u = n(66956),
        l = n(69092),
        d = n(46949);
      let f = "/docs/contract/encodeEventTopics";
      function p(e) {
        let { abi: t, eventName: n, args: a } = e,
          i = t[0];
        if (n) {
          let e = (0, d.iY)({ abi: t, name: n });
          if (!e) throw new r.M_(n, { docsPath: f });
          i = e;
        }
        if ("event" !== i.type) throw new r.M_(void 0, { docsPath: f });
        let s = (0, l.B)(i),
          o = (0, c.h)(s),
          u = [];
        if (a && "inputs" in i) {
          let e = i.inputs?.filter((e) => "indexed" in e && e.indexed),
            t = Array.isArray(a)
              ? a
              : Object.values(a).length > 0
              ? e?.map((e) => a[e.name]) ?? []
              : [];
          t.length > 0 &&
            (u =
              e?.map((e, n) =>
                Array.isArray(t[n])
                  ? t[n].map((r, a) => m({ param: e, value: t[n][a] }))
                  : void 0 !== t[n] && null !== t[n]
                  ? m({ param: e, value: t[n] })
                  : null
              ) ?? []);
        }
        return [o, ...u];
      }
      function m({ param: e, value: t }) {
        if ("string" === e.type || "bytes" === e.type)
          return (0, o.S)((0, s.ZJ)(t));
        if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
          throw new i(e.type);
        return (0, u.h)([e], [t]);
      }
    },
    5794: (e, t, n) => {
      "use strict";
      n.d(t, { O: () => c });
      var r = n(99371),
        a = n(42217),
        i = n(61378),
        s = n(85552),
        o = n(42588);
      function c(
        e,
        {
          blockTag: t = e.experimental_blockTag ?? "latest",
          emitMissed: n = !1,
          emitOnBegin: c = !1,
          onBlock: u,
          onError: l,
          includeTransactions: d,
          poll: f,
          pollingInterval: p = e.pollingInterval,
        }
      ) {
        let m,
          h,
          y,
          b,
          g =
            void 0 !== f
              ? f
              : "webSocket" !== e.transport.type &&
                "ipc" !== e.transport.type &&
                ("fallback" !== e.transport.type ||
                  ("webSocket" !== e.transport.transports[0].config.type &&
                    "ipc" !== e.transport.transports[0].config.type)),
          v = d ?? !1;
        return g
          ? (() => {
              let d = (0, s.A)(["watchBlocks", e.uid, t, n, c, v, p]);
              return (0, a.lB)(d, { onBlock: u, onError: l }, (a) =>
                (0, i.w)(
                  async () => {
                    try {
                      let i = await (0, r.T)(
                        e,
                        o.g,
                        "getBlock"
                      )({ blockTag: t, includeTransactions: v });
                      if (null !== i.number && m?.number != null) {
                        if (i.number === m.number) return;
                        if (i.number - m.number > 1 && n)
                          for (let t = m?.number + 1n; t < i.number; t++) {
                            let n = await (0, r.T)(
                              e,
                              o.g,
                              "getBlock"
                            )({ blockNumber: t, includeTransactions: v });
                            a.onBlock(n, m), (m = n);
                          }
                      }
                      (m?.number == null ||
                        ("pending" === t && i?.number == null) ||
                        (null !== i.number && i.number > m.number)) &&
                        (a.onBlock(i, m), (m = i));
                    } catch (e) {
                      a.onError?.(e);
                    }
                  },
                  { emitOnBegin: c, interval: p }
                )
              );
            })()
          : ((h = !0),
            (y = !0),
            (b = () => (h = !1)),
            (async () => {
              try {
                c &&
                  (0, r.T)(
                    e,
                    o.g,
                    "getBlock"
                  )({ blockTag: t, includeTransactions: v })
                    .then((e) => {
                      h && y && (u(e, void 0), (y = !1));
                    })
                    .catch(l);
                let n = (() => {
                    if ("fallback" === e.transport.type) {
                      let t = e.transport.transports.find(
                        (e) =>
                          "webSocket" === e.config.type ||
                          "ipc" === e.config.type
                      );
                      return t ? t.value : e.transport;
                    }
                    return e.transport;
                  })(),
                  { unsubscribe: a } = await n.subscribe({
                    params: ["newHeads"],
                    async onData(t) {
                      if (!h) return;
                      let n = await (0, r.T)(
                        e,
                        o.g,
                        "getBlock"
                      )({
                        blockNumber: t.result?.number,
                        includeTransactions: v,
                      }).catch(() => {});
                      h && (u(n, m), (y = !1), (m = n));
                    },
                    onError(e) {
                      l?.(e);
                    },
                  });
                (b = a), h || b();
              } catch (e) {
                l?.(e);
              }
            })(),
            () => b());
      }
    },
    10435: (e, t, n) => {
      "use strict";
      async function r(e, { filter: t }) {
        return t.request({ method: "eth_uninstallFilter", params: [t.id] });
      }
      n.d(t, { Z: () => r });
    },
    12471: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.add5L =
          t.add5H =
          t.add4H =
          t.add4L =
          t.add3H =
          t.add3L =
          t.add =
          t.rotlBL =
          t.rotlBH =
          t.rotlSL =
          t.rotlSH =
          t.rotr32L =
          t.rotr32H =
          t.rotrBL =
          t.rotrBH =
          t.rotrSL =
          t.rotrSH =
          t.shrSL =
          t.shrSH =
          t.toBig =
          t.split =
          t.fromBig =
            void 0);
      let n = BigInt(0x100000000 - 1),
        r = BigInt(32);
      function a(e, t = !1) {
        return t
          ? { h: Number(e & n), l: Number((e >> r) & n) }
          : { h: 0 | Number((e >> r) & n), l: 0 | Number(e & n) };
      }
      function i(e, t = !1) {
        let n = new Uint32Array(e.length),
          r = new Uint32Array(e.length);
        for (let i = 0; i < e.length; i++) {
          let { h: s, l: o } = a(e[i], t);
          [n[i], r[i]] = [s, o];
        }
        return [n, r];
      }
      (t.fromBig = a), (t.split = i);
      let s = (e, t) => (BigInt(e >>> 0) << r) | BigInt(t >>> 0);
      t.toBig = s;
      let o = (e, t, n) => e >>> n;
      t.shrSH = o;
      let c = (e, t, n) => (e << (32 - n)) | (t >>> n);
      t.shrSL = c;
      let u = (e, t, n) => (e >>> n) | (t << (32 - n));
      t.rotrSH = u;
      let l = (e, t, n) => (e << (32 - n)) | (t >>> n);
      t.rotrSL = l;
      let d = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32));
      t.rotrBH = d;
      let f = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n));
      t.rotrBL = f;
      let p = (e, t) => t;
      t.rotr32H = p;
      let m = (e, t) => e;
      t.rotr32L = m;
      let h = (e, t, n) => (e << n) | (t >>> (32 - n));
      t.rotlSH = h;
      let y = (e, t, n) => (t << n) | (e >>> (32 - n));
      t.rotlSL = y;
      let b = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n));
      t.rotlBH = b;
      let g = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      function v(e, t, n, r) {
        let a = (t >>> 0) + (r >>> 0);
        return { h: (e + n + ((a / 0x100000000) | 0)) | 0, l: 0 | a };
      }
      (t.rotlBL = g), (t.add = v);
      let w = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0);
      t.add3L = w;
      let _ = (e, t, n, r) => (t + n + r + ((e / 0x100000000) | 0)) | 0;
      t.add3H = _;
      let x = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0);
      t.add4L = x;
      let k = (e, t, n, r, a) => (t + n + r + a + ((e / 0x100000000) | 0)) | 0;
      t.add4H = k;
      let A = (e, t, n, r, a) =>
        (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (a >>> 0);
      t.add5L = A;
      let I = (e, t, n, r, a, i) =>
        (t + n + r + a + i + ((e / 0x100000000) | 0)) | 0;
      (t.add5H = I),
        (t.default = {
          fromBig: a,
          split: i,
          toBig: s,
          shrSH: o,
          shrSL: c,
          rotrSH: u,
          rotrSL: l,
          rotrBH: d,
          rotrBL: f,
          rotr32H: p,
          rotr32L: m,
          rotlSH: h,
          rotlSL: y,
          rotlBH: b,
          rotlBL: g,
          add: v,
          add3L: w,
          add3H: _,
          add4L: x,
          add4H: k,
          add5H: I,
          add5L: A,
        });
    },
    12556: (e, t) => {
      "use strict";
      function n(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error(`positive integer expected, not ${e}`);
      }
      function r(e) {
        if ("boolean" != typeof e) throw Error(`boolean expected, not ${e}`);
      }
      function a(e) {
        return (
          e instanceof Uint8Array ||
          (null != e &&
            "object" == typeof e &&
            "Uint8Array" === e.constructor.name)
        );
      }
      function i(e, ...t) {
        if (!a(e)) throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            `Uint8Array expected of length ${t}, not of length=${e.length}`
          );
      }
      function s(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        n(e.outputLen), n(e.blockLen);
      }
      function o(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function c(e, t) {
        i(e);
        let n = t.outputLen;
        if (e.length < n)
          throw Error(
            `digestInto() expects output buffer of length at least ${n}`
          );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.output =
          t.exists =
          t.hash =
          t.bytes =
          t.bool =
          t.number =
          t.isBytes =
            void 0),
        (t.number = n),
        (t.bool = r),
        (t.isBytes = a),
        (t.bytes = i),
        (t.hash = s),
        (t.exists = o),
        (t.output = c),
        (t.default = {
          number: n,
          bool: r,
          bytes: i,
          hash: s,
          exists: o,
          output: c,
        });
    },
    13120: (e, t, n) => {
      "use strict";
      n.d(t, { createCoinbaseWalletSDK: () => oO });
      var r,
        a = n(8954),
        i = n(2780),
        s = n(82663);
      function o(e, t) {
        let n;
        try {
          n = e();
        } catch (e) {
          return;
        }
        return {
          getItem: (e) => {
            var r;
            let a = (e) =>
                null === e
                  ? null
                  : JSON.parse(e, null == t ? void 0 : t.reviver),
              i = null != (r = n.getItem(e)) ? r : null;
            return i instanceof Promise ? i.then(a) : a(i);
          },
          setItem: (e, r) =>
            n.setItem(e, JSON.stringify(r, null == t ? void 0 : t.replacer)),
          removeItem: (e) => n.removeItem(e),
        };
      }
      let c = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => c(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => c(t)(e),
            };
          }
        },
        u = (e) => {
          let t,
            n = new Set(),
            r = (e, r) => {
              let a = "function" == typeof e ? e(t) : e;
              if (!Object.is(a, t)) {
                let e = t;
                (t = (null != r ? r : "object" != typeof a || null === a)
                  ? a
                  : Object.assign({}, t, a)),
                  n.forEach((n) => n(t, e));
              }
            },
            a = () => t,
            i = {
              setState: r,
              getState: a,
              getInitialState: () => s,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
            },
            s = (t = e(r, a, i));
          return i;
        },
        l = (e) => (e ? u(e) : u),
        d = "4.3.6",
        f = "@coinbase/wallet-sdk",
        p = l(
          ((e, t) => (n, r, a) => {
            let i,
              s = {
                storage: o(() => localStorage),
                partialize: (e) => e,
                version: 0,
                merge: (e, t) => ({ ...t, ...e }),
                ...t,
              },
              u = !1,
              l = new Set(),
              d = new Set(),
              f = s.storage;
            if (!f)
              return e(
                (...e) => {
                  console.warn(
                    `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
                  ),
                    n(...e);
                },
                r,
                a
              );
            let p = () => {
                let e = s.partialize({ ...r() });
                return f.setItem(s.name, { state: e, version: s.version });
              },
              m = a.setState;
            a.setState = (e, t) => {
              m(e, t), p();
            };
            let h = e(
              (...e) => {
                n(...e), p();
              },
              r,
              a
            );
            a.getInitialState = () => h;
            let y = () => {
              var e, t;
              if (!f) return;
              (u = !1),
                l.forEach((e) => {
                  var t;
                  return e(null != (t = r()) ? t : h);
                });
              let a =
                (null == (t = s.onRehydrateStorage)
                  ? void 0
                  : t.call(s, null != (e = r()) ? e : h)) || void 0;
              return c(f.getItem.bind(f))(s.name)
                .then((e) => {
                  if (e)
                    if ("number" != typeof e.version || e.version === s.version)
                      return [!1, e.state];
                    else {
                      if (s.migrate) {
                        let t = s.migrate(e.state, e.version);
                        return t instanceof Promise
                          ? t.then((e) => [!0, e])
                          : [!0, t];
                      }
                      console.error(
                        "State loaded from storage couldn't be migrated since no migrate function was provided"
                      );
                    }
                  return [!1, void 0];
                })
                .then((e) => {
                  var t;
                  let [a, o] = e;
                  if ((n((i = s.merge(o, null != (t = r()) ? t : h)), !0), a))
                    return p();
                })
                .then(() => {
                  null == a || a(i, void 0),
                    (i = r()),
                    (u = !0),
                    d.forEach((e) => e(i));
                })
                .catch((e) => {
                  null == a || a(void 0, e);
                });
            };
            return (
              (a.persist = {
                setOptions: (e) => {
                  (s = { ...s, ...e }), e.storage && (f = e.storage);
                },
                clearStorage: () => {
                  null == f || f.removeItem(s.name);
                },
                getOptions: () => s,
                rehydrate: () => y(),
                hasHydrated: () => u,
                onHydrate: (e) => (
                  l.add(e),
                  () => {
                    l.delete(e);
                  }
                ),
                onFinishHydration: (e) => (
                  d.add(e),
                  () => {
                    d.delete(e);
                  }
                ),
              }),
              s.skipHydration || y(),
              i || h
            );
          })(
            (...e) =>
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign({}, (() => ({ chains: [] }))(...e)),
                          (() => ({ keys: {} }))(...e)
                        ),
                        (() => ({ account: {} }))(...e)
                      ),
                      (() => ({ subAccount: void 0 }))(...e)
                    ),
                    (() => ({ spendPermissions: [] }))(...e)
                  ),
                  (() => ({ config: { version: d } }))(...e)
                ),
                (() => ({ subAccountConfig: {} }))(...e)
              ),
            {
              name: "cbwsdk.store",
              storage: o(() => localStorage),
              partialize: (e) => ({
                chains: e.chains,
                keys: e.keys,
                account: e.account,
                subAccount: e.subAccount,
                spendPermissions: e.spendPermissions,
                config: e.config,
              }),
            }
          )
        ),
        m = {
          get: () => p.getState().config,
          set: (e) => {
            p.setState((t) => ({
              config: Object.assign(Object.assign({}, t.config), e),
            }));
          },
        },
        h = Object.assign(Object.assign({}, p), {
          subAccounts: {
            get: () => p.getState().subAccount,
            set: (e) => {
              p.setState((t) => ({
                subAccount: t.subAccount
                  ? Object.assign(Object.assign({}, t.subAccount), e)
                  : Object.assign({ address: e.address }, e),
              }));
            },
            clear: () => {
              p.setState({ subAccount: void 0 });
            },
          },
          subAccountsConfig: {
            get: () => p.getState().subAccountConfig,
            set: (e) => {
              p.setState((t) => ({
                subAccountConfig: Object.assign(
                  Object.assign({}, t.subAccountConfig),
                  e
                ),
              }));
            },
            clear: () => {
              p.setState({ subAccountConfig: {} });
            },
          },
          spendPermissions: {
            get: () => p.getState().spendPermissions,
            set: (e) => {
              p.setState({ spendPermissions: e });
            },
            clear: () => {
              p.setState({ spendPermissions: [] });
            },
          },
          account: {
            get: () => p.getState().account,
            set: (e) => {
              p.setState((t) => ({
                account: Object.assign(Object.assign({}, t.account), e),
              }));
            },
            clear: () => {
              p.setState({ account: {} });
            },
          },
          chains: {
            get: () => p.getState().chains,
            set: (e) => {
              p.setState({ chains: e });
            },
            clear: () => {
              p.setState({ chains: [] });
            },
          },
          keys: {
            get: (e) => p.getState().keys[e],
            set: (e, t) => {
              p.setState((n) => ({
                keys: Object.assign(Object.assign({}, n.keys), { [e]: t }),
              }));
            },
            clear: () => {
              p.setState({ keys: {} });
            },
          },
          config: m,
        }),
        y = "0x0ba5ed0c6aa8c49038f819e587e2633c4a9f428a",
        b = "0xf85210B21cC50302F477BA56686d2019dC9b67Ad",
        g = [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          {
            inputs: [{ name: "owner", type: "bytes" }],
            name: "AlreadyOwner",
            type: "error",
          },
          { inputs: [], name: "Initialized", type: "error" },
          {
            inputs: [{ name: "owner", type: "bytes" }],
            name: "InvalidEthereumAddressOwner",
            type: "error",
          },
          {
            inputs: [{ name: "key", type: "uint256" }],
            name: "InvalidNonceKey",
            type: "error",
          },
          {
            inputs: [{ name: "owner", type: "bytes" }],
            name: "InvalidOwnerBytesLength",
            type: "error",
          },
          { inputs: [], name: "LastOwner", type: "error" },
          {
            inputs: [{ name: "index", type: "uint256" }],
            name: "NoOwnerAtIndex",
            type: "error",
          },
          {
            inputs: [{ name: "ownersRemaining", type: "uint256" }],
            name: "NotLastOwner",
            type: "error",
          },
          {
            inputs: [{ name: "selector", type: "bytes4" }],
            name: "SelectorNotAllowed",
            type: "error",
          },
          { inputs: [], name: "Unauthorized", type: "error" },
          { inputs: [], name: "UnauthorizedCallContext", type: "error" },
          { inputs: [], name: "UpgradeFailed", type: "error" },
          {
            inputs: [
              { name: "index", type: "uint256" },
              { name: "expectedOwner", type: "bytes" },
              { name: "actualOwner", type: "bytes" },
            ],
            name: "WrongOwnerAtIndex",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "index", type: "uint256" },
              { indexed: !1, name: "owner", type: "bytes" },
            ],
            name: "AddOwner",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "index", type: "uint256" },
              { indexed: !1, name: "owner", type: "bytes" },
            ],
            name: "RemoveOwner",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [{ indexed: !0, name: "implementation", type: "address" }],
            name: "Upgraded",
            type: "event",
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "REPLAYABLE_NONCE_KEY",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "owner", type: "address" }],
            name: "addOwnerAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { name: "x", type: "bytes32" },
              { name: "y", type: "bytes32" },
            ],
            name: "addOwnerPublicKey",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ name: "functionSelector", type: "bytes4" }],
            name: "canSkipChainIdValidation",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [],
            name: "domainSeparator",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "eip712Domain",
            outputs: [
              { name: "fields", type: "bytes1" },
              { name: "name", type: "string" },
              { name: "version", type: "string" },
              { name: "chainId", type: "uint256" },
              { name: "verifyingContract", type: "address" },
              { name: "salt", type: "bytes32" },
              { name: "extensions", type: "uint256[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "entryPoint",
            outputs: [{ name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "target", type: "address" },
              { name: "value", type: "uint256" },
              { name: "data", type: "bytes" },
            ],
            name: "execute",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "value", type: "uint256" },
                  { name: "data", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "executeBatch",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [{ name: "calls", type: "bytes[]" }],
            name: "executeWithoutChainIdValidation",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { name: "sender", type: "address" },
                  { name: "nonce", type: "uint256" },
                  { name: "initCode", type: "bytes" },
                  { name: "callData", type: "bytes" },
                  { name: "callGasLimit", type: "uint256" },
                  { name: "verificationGasLimit", type: "uint256" },
                  { name: "preVerificationGas", type: "uint256" },
                  { name: "maxFeePerGas", type: "uint256" },
                  { name: "maxPriorityFeePerGas", type: "uint256" },
                  { name: "paymasterAndData", type: "bytes" },
                  { name: "signature", type: "bytes" },
                ],
                name: "userOp",
                type: "tuple",
              },
            ],
            name: "getUserOpHashWithoutChainId",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [{ name: "$", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "owners", type: "bytes[]" }],
            name: "initialize",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [{ name: "account", type: "address" }],
            name: "isOwnerAddress",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "account", type: "bytes" }],
            name: "isOwnerBytes",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "x", type: "bytes32" },
              { name: "y", type: "bytes32" },
            ],
            name: "isOwnerPublicKey",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "hash", type: "bytes32" },
              { name: "signature", type: "bytes" },
            ],
            name: "isValidSignature",
            outputs: [{ name: "result", type: "bytes4" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "nextOwnerIndex",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "index", type: "uint256" }],
            name: "ownerAtIndex",
            outputs: [{ name: "", type: "bytes" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "ownerCount",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "proxiableUUID",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "index", type: "uint256" },
              { name: "owner", type: "bytes" },
            ],
            name: "removeLastOwner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { name: "index", type: "uint256" },
              { name: "owner", type: "bytes" },
            ],
            name: "removeOwnerAtIndex",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "removedOwnersCount",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "hash", type: "bytes32" }],
            name: "replaySafeHash",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "newImplementation", type: "address" },
              { name: "data", type: "bytes" },
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { name: "sender", type: "address" },
                  { name: "nonce", type: "uint256" },
                  { name: "initCode", type: "bytes" },
                  { name: "callData", type: "bytes" },
                  { name: "callGasLimit", type: "uint256" },
                  { name: "verificationGasLimit", type: "uint256" },
                  { name: "preVerificationGas", type: "uint256" },
                  { name: "maxFeePerGas", type: "uint256" },
                  { name: "maxPriorityFeePerGas", type: "uint256" },
                  { name: "paymasterAndData", type: "bytes" },
                  { name: "signature", type: "bytes" },
                ],
                name: "userOp",
                type: "tuple",
              },
              { name: "userOpHash", type: "bytes32" },
              { name: "missingAccountFunds", type: "uint256" },
            ],
            name: "validateUserOp",
            outputs: [{ name: "validationData", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        v = [
          {
            inputs: [{ name: "implementation_", type: "address" }],
            stateMutability: "payable",
            type: "constructor",
          },
          { inputs: [], name: "OwnerRequired", type: "error" },
          {
            inputs: [
              { name: "owners", type: "bytes[]" },
              { name: "nonce", type: "uint256" },
            ],
            name: "createAccount",
            outputs: [{ name: "account", type: "address" }],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { name: "owners", type: "bytes[]" },
              { name: "nonce", type: "uint256" },
            ],
            name: "getAddress",
            outputs: [{ name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [{ name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "initCodeHash",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        w = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        },
        _ = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
          4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
        },
        x = "Unspecified error message.";
      function k(e, t = x) {
        if (e && Number.isInteger(e)) {
          var n;
          let t = e.toString();
          if (I(_, t)) return _[t].message;
          if ((n = e) >= -32099 && n <= -32e3)
            return "Unspecified server error.";
        }
        return t;
      }
      function A(e) {
        return e && "object" == typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e;
      }
      function I(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function S(e, t) {
        return (
          "object" == typeof e &&
          null !== e &&
          t in e &&
          "string" == typeof e[t]
        );
      }
      let E = {
        rpc: {
          parse: (e) => T(w.rpc.parse, e),
          invalidRequest: (e) => T(w.rpc.invalidRequest, e),
          invalidParams: (e) => T(w.rpc.invalidParams, e),
          methodNotFound: (e) => T(w.rpc.methodNotFound, e),
          internal: (e) => T(w.rpc.internal, e),
          server: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return T(t, e);
          },
          invalidInput: (e) => T(w.rpc.invalidInput, e),
          resourceNotFound: (e) => T(w.rpc.resourceNotFound, e),
          resourceUnavailable: (e) => T(w.rpc.resourceUnavailable, e),
          transactionRejected: (e) => T(w.rpc.transactionRejected, e),
          methodNotSupported: (e) => T(w.rpc.methodNotSupported, e),
          limitExceeded: (e) => T(w.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) => P(w.provider.userRejectedRequest, e),
          unauthorized: (e) => P(w.provider.unauthorized, e),
          unsupportedMethod: (e) => P(w.provider.unsupportedMethod, e),
          disconnected: (e) => P(w.provider.disconnected, e),
          chainDisconnected: (e) => P(w.provider.chainDisconnected, e),
          unsupportedChain: (e) => P(w.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            let { code: t, message: n, data: r } = e;
            if (!n || "string" != typeof n)
              throw Error('"message" must be a nonempty string');
            return new j(t, n, r);
          },
        },
      };
      function T(e, t) {
        let [n, r] = C(t);
        return new O(e, n || k(e), r);
      }
      function P(e, t) {
        let [n, r] = C(t);
        return new j(e, n || k(e), r);
      }
      function C(e) {
        if (e) {
          if ("string" == typeof e) return [e];
          if ("object" == typeof e && !Array.isArray(e)) {
            let { message: t, data: n } = e;
            if (t && "string" != typeof t)
              throw Error("Must specify string message.");
            return [t || void 0, n];
          }
        }
        return [];
      }
      class O extends Error {
        constructor(e, t, n) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || "string" != typeof t)
            throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== n && (this.data = n);
        }
      }
      class j extends O {
        constructor(e, t, n) {
          if (
            !(function (e) {
              return Number.isInteger(e) && e >= 1e3 && e <= 4999;
            })(e)
          )
            throw Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          super(e, t, n);
        }
      }
      function M(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "code" in e &&
          "data" in e &&
          -32090 === e.code &&
          "object" == typeof e.data &&
          null !== e.data &&
          "type" in e.data &&
          "INSUFFICIENT_FUNDS" === e.data.type
        );
      }
      function L(e) {
        return "object" == typeof e && null !== e && "details" in e;
      }
      function N(e, t, n) {
        if (null == e)
          throw null != t
            ? t
            : E.rpc.invalidParams({
                message: null != n ? n : "value must be present",
                data: e,
              });
      }
      function D(e, t) {
        if (!Array.isArray(e))
          throw E.rpc.invalidParams({
            message: null != t ? t : "value must be an array",
            data: e,
          });
      }
      let B = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`,
        { checkCrossOriginOpenerPolicy: U, getCrossOriginOpenerPolicy: R } =
          (() => {
            let e;
            return {
              getCrossOriginOpenerPolicy: () =>
                void 0 === e ? "undefined" : e,
              checkCrossOriginOpenerPolicy: async () => {
                if ("undefined" == typeof window) {
                  e = "non-browser-env";
                  return;
                }
                try {
                  let t = `${window.location.origin}${window.location.pathname}`,
                    n = await fetch(t, { method: "HEAD" });
                  if (!n.ok) throw Error(`HTTP error! status: ${n.status}`);
                  let r = n.headers.get("Cross-Origin-Opener-Policy");
                  (e = null != r ? r : "null"),
                    "same-origin" === e && console.error(B);
                } catch (t) {
                  console.error(
                    "Error checking Cross-Origin-Opener-Policy:",
                    t.message
                  ),
                    (e = "error");
                }
              },
            };
          })();
      function q(e) {
        if ("function" != typeof e) throw Error("toAccount is not a function");
      }
      async function z(e, t) {
        let n = Object.assign(Object.assign({}, e), {
            jsonrpc: "2.0",
            id: crypto.randomUUID(),
          }),
          r = await window.fetch(t, {
            method: "POST",
            body: JSON.stringify(n),
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "X-Cbw-Sdk-Version": d,
              "X-Cbw-Sdk-Platform": f,
            },
          }),
          { result: a, error: i } = await r.json();
        if (i) throw i;
        return a;
      }
      let F = "https://rpc.wallet.coinbase.com",
        G = "https://www.walletlink.org";
      function $(e, t, n) {
        var r, a, i, s;
        window.ClientAnalytics &&
          (null == (r = window.ClientAnalytics) ||
            r.logEvent(
              e,
              Object.assign(Object.assign({}, t), {
                sdkVersion: d,
                appName:
                  null !=
                  (i =
                    null == (a = h.config.get().metadata) ? void 0 : a.appName)
                    ? i
                    : "",
                appOrigin: window.location.origin,
                appPreferredSigner:
                  null == (s = h.config.get().preference) ? void 0 : s.options,
              }),
              n
            ));
      }
      !(function (e) {
        (e.unknown = "unknown"),
          (e.banner = "banner"),
          (e.button = "button"),
          (e.card = "card"),
          (e.chart = "chart"),
          (e.content_script = "content_script"),
          (e.dropdown = "dropdown"),
          (e.link = "link"),
          (e.page = "page"),
          (e.modal = "modal"),
          (e.table = "table"),
          (e.search_bar = "search_bar"),
          (e.service_worker = "service_worker"),
          (e.text = "text"),
          (e.text_input = "text_input"),
          (e.tray = "tray"),
          (e.checkbox = "checkbox"),
          (e.icon = "icon");
      })(J || (J = {})),
        (function (e) {
          (e.unknown = "unknown"),
            (e.blur = "blur"),
            (e.click = "click"),
            (e.change = "change"),
            (e.dismiss = "dismiss"),
            (e.focus = "focus"),
            (e.hover = "hover"),
            (e.select = "select"),
            (e.measurement = "measurement"),
            (e.move = "move"),
            (e.process = "process"),
            (e.render = "render"),
            (e.scroll = "scroll"),
            (e.view = "view"),
            (e.search = "search"),
            (e.keyPress = "keyPress"),
            (e.error = "error");
        })(Q || (Q = {})),
        (function (e) {
          (e.low = "low"), (e.high = "high");
        })(Z || (Z = {}));
      let H = ({ snackbarContext: e }) => {
          $(
            `snackbar.${e}.shown`,
            { action: Q.render, componentType: J.modal, snackbarContext: e },
            Z.high
          );
        },
        W = ({ snackbarContext: e, snackbarAction: t }) => {
          $(
            `snackbar.${e}.action_clicked`,
            {
              action: Q.click,
              componentType: J.button,
              snackbarContext: e,
              snackbarAction: t,
            },
            Z.high
          );
        };
      function K() {
        let e = document.createElement("style");
        (e.type = "text/css"),
          e.appendChild(
            document.createTextNode(
              '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
            )
          ),
          document.documentElement.appendChild(e);
      }
      function V() {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                r,
                a = "";
              if ("string" == typeof t || "number" == typeof t) a += t;
              else if ("object" == typeof t)
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (r = e(t[n])) && (a && (a += " "), (a += r));
                else for (n in t) t[n] && (a && (a += " "), (a += n));
              return a;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
      var J,
        Q,
        Z,
        Y,
        X,
        ee,
        et,
        en,
        er,
        ea,
        ei,
        es,
        eo,
        ec = {},
        eu = [],
        el =
          /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        ed = Array.isArray;
      function ef(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function ep(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      function em(e, t, n) {
        var r,
          a,
          i,
          s = {};
        for (i in t)
          "key" == i ? (r = t[i]) : "ref" == i ? (a = t[i]) : (s[i] = t[i]);
        if (
          (arguments.length > 2 &&
            (s.children = arguments.length > 3 ? Y.call(arguments, 2) : n),
          "function" == typeof e && null != e.defaultProps)
        )
          for (i in e.defaultProps)
            void 0 === s[i] && (s[i] = e.defaultProps[i]);
        return eh(e, s, r, a, null);
      }
      function eh(e, t, n, r, a) {
        var i = {
          type: e,
          props: t,
          key: n,
          ref: r,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: null == a ? ++ee : a,
          __i: -1,
          __u: 0,
        };
        return null == a && null != X.vnode && X.vnode(i), i;
      }
      function ey(e) {
        return e.children;
      }
      function eb(e, t) {
        (this.props = e), (this.context = t);
      }
      function eg(e, t) {
        if (null == t) return e.__ ? eg(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? eg(e) : null;
      }
      function ev(e) {
        ((!e.__d && (e.__d = !0) && et.push(e) && !ew.__r++) ||
          en !== X.debounceRendering) &&
          ((en = X.debounceRendering) || er)(ew);
      }
      function ew() {
        var e, t, n, r, a, i, s, o;
        for (et.sort(ea); (e = et.shift()); )
          e.__d &&
            ((t = et.length),
            (r = void 0),
            (i = (a = (n = e).__v).__e),
            (s = []),
            (o = []),
            n.__P &&
              (((r = ef({}, a)).__v = a.__v + 1),
              X.vnode && X.vnode(r),
              eI(
                n.__P,
                r,
                a,
                n.__n,
                n.__P.namespaceURI,
                32 & a.__u ? [i] : null,
                s,
                null == i ? eg(a) : i,
                !!(32 & a.__u),
                o
              ),
              (r.__v = a.__v),
              (r.__.__k[r.__i] = r),
              eS(s, r, o),
              r.__e != i &&
                (function e(t) {
                  var n, r;
                  if (null != (t = t.__) && null != t.__c) {
                    for (
                      t.__e = t.__c.base = null, n = 0;
                      n < t.__k.length;
                      n++
                    )
                      if (null != (r = t.__k[n]) && null != r.__e) {
                        t.__e = t.__c.base = r.__e;
                        break;
                      }
                    return e(t);
                  }
                })(r)),
            et.length > t && et.sort(ea));
        ew.__r = 0;
      }
      function e_(e, t, n, r, a, i, s, o, c, u, l) {
        var d,
          f,
          p,
          m,
          h,
          y = (r && r.__k) || eu,
          b = t.length;
        for (
          n.__d = c,
            (function (e, t, n) {
              var r,
                a,
                i,
                s,
                o,
                c = t.length,
                u = n.length,
                l = u,
                d = 0;
              for (e.__k = [], r = 0; r < c; r++)
                null != (a = t[r]) &&
                "boolean" != typeof a &&
                "function" != typeof a
                  ? ((s = r + d),
                    ((a = e.__k[r] =
                      "string" == typeof a ||
                      "number" == typeof a ||
                      "bigint" == typeof a ||
                      a.constructor == String
                        ? eh(null, a, null, null, null)
                        : ed(a)
                        ? eh(ey, { children: a }, null, null, null)
                        : void 0 === a.constructor && a.__b > 0
                        ? eh(
                            a.type,
                            a.props,
                            a.key,
                            a.ref ? a.ref : null,
                            a.__v
                          )
                        : a).__ = e),
                    (a.__b = e.__b + 1),
                    (i = null),
                    -1 !==
                      (o = a.__i =
                        (function (e, t, n, r) {
                          var a = e.key,
                            i = e.type,
                            s = n - 1,
                            o = n + 1,
                            c = t[n];
                          if (
                            null === c ||
                            (c &&
                              a == c.key &&
                              i === c.type &&
                              0 == (131072 & c.__u))
                          )
                            return n;
                          if (r > +(null != c && 0 == (131072 & c.__u)))
                            for (; s >= 0 || o < t.length; ) {
                              if (s >= 0) {
                                if (
                                  (c = t[s]) &&
                                  0 == (131072 & c.__u) &&
                                  a == c.key &&
                                  i === c.type
                                )
                                  return s;
                                s--;
                              }
                              if (o < t.length) {
                                if (
                                  (c = t[o]) &&
                                  0 == (131072 & c.__u) &&
                                  a == c.key &&
                                  i === c.type
                                )
                                  return o;
                                o++;
                              }
                            }
                          return -1;
                        })(a, n, s, l)) &&
                      (l--, (i = n[o]) && (i.__u |= 131072)),
                    null == i || null === i.__v
                      ? (-1 == o && d--,
                        "function" != typeof a.type && (a.__u |= 65536))
                      : o !== s &&
                        (o == s - 1
                          ? d--
                          : o == s + 1
                          ? d++
                          : (o > s ? d-- : d++, (a.__u |= 65536))))
                  : (a = e.__k[r] = null);
              if (l)
                for (r = 0; r < u; r++)
                  null != (i = n[r]) &&
                    0 == (131072 & i.__u) &&
                    (i.__e == e.__d && (e.__d = eg(i)),
                    (function e(t, n, r) {
                      var a, i;
                      if (
                        (X.unmount && X.unmount(t),
                        (a = t.ref) &&
                          ((a.current && a.current !== t.__e) ||
                            eE(a, null, n)),
                        null != (a = t.__c))
                      ) {
                        if (a.componentWillUnmount)
                          try {
                            a.componentWillUnmount();
                          } catch (e) {
                            X.__e(e, n);
                          }
                        a.base = a.__P = null;
                      }
                      if ((a = t.__k))
                        for (i = 0; i < a.length; i++)
                          a[i] && e(a[i], n, r || "function" != typeof t.type);
                      r || ep(t.__e), (t.__c = t.__ = t.__e = t.__d = void 0);
                    })(i, i));
            })(n, t, y),
            c = n.__d,
            d = 0;
          d < b;
          d++
        )
          null != (p = n.__k[d]) &&
            ((f = -1 === p.__i ? ec : y[p.__i] || ec),
            (p.__i = d),
            eI(e, p, f, a, i, s, o, c, u, l),
            (m = p.__e),
            p.ref &&
              f.ref != p.ref &&
              (f.ref && eE(f.ref, null, p), l.push(p.ref, p.__c || m, p)),
            null == h && null != m && (h = m),
            65536 & p.__u || f.__k === p.__k
              ? (c = (function e(t, n, r) {
                  var a, i;
                  if ("function" == typeof t.type) {
                    for (a = t.__k, i = 0; a && i < a.length; i++)
                      a[i] && ((a[i].__ = t), (n = e(a[i], n, r)));
                    return n;
                  }
                  t.__e != n &&
                    (n && t.type && !r.contains(n) && (n = eg(t)),
                    r.insertBefore(t.__e, n || null),
                    (n = t.__e));
                  do n = n && n.nextSibling;
                  while (null != n && 8 === n.nodeType);
                  return n;
                })(p, c, e))
              : "function" == typeof p.type && void 0 !== p.__d
              ? (c = p.__d)
              : m && (c = m.nextSibling),
            (p.__d = void 0),
            (p.__u &= -196609));
        (n.__d = c), (n.__e = h);
      }
      function ex(e, t, n) {
        "-" === t[0]
          ? e.setProperty(t, null == n ? "" : n)
          : (e[t] =
              null == n
                ? ""
                : "number" != typeof n || el.test(t)
                ? n
                : n + "px");
      }
      function ek(e, t, n, r, a) {
        var i;
        e: if ("style" === t)
          if ("string" == typeof n) e.style.cssText = n;
          else {
            if (("string" == typeof r && (e.style.cssText = r = ""), r))
              for (t in r) (n && t in n) || ex(e.style, t, "");
            if (n) for (t in n) (r && n[t] === r[t]) || ex(e.style, t, n[t]);
          }
        else if ("o" === t[0] && "n" === t[1])
          (i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
            (t =
              t.toLowerCase() in e || "onFocusOut" === t || "onFocusIn" === t
                ? t.toLowerCase().slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + i] = n),
            n
              ? r
                ? (n.u = r.u)
                : ((n.u = ei), e.addEventListener(t, i ? eo : es, i))
              : e.removeEventListener(t, i ? eo : es, i);
        else {
          if ("http://www.w3.org/2000/svg" == a)
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" != t &&
            "height" != t &&
            "href" != t &&
            "list" != t &&
            "form" != t &&
            "tabIndex" != t &&
            "download" != t &&
            "rowSpan" != t &&
            "colSpan" != t &&
            "role" != t &&
            "popover" != t &&
            t in e
          )
            try {
              e[t] = null == n ? "" : n;
              break e;
            } catch (e) {}
          "function" == typeof n ||
            (null == n || (!1 === n && "-" !== t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
        }
      }
      function eA(e) {
        return function (t) {
          if (this.l) {
            var n = this.l[t.type + e];
            if (null == t.t) t.t = ei++;
            else if (t.t < n.u) return;
            return n(X.event ? X.event(t) : t);
          }
        };
      }
      function eI(e, t, n, r, a, i, s, o, c, u) {
        var l,
          d,
          f,
          p,
          m,
          h,
          y,
          b,
          g,
          v,
          w,
          _,
          x,
          k,
          A,
          I,
          S = t.type;
        if (void 0 !== t.constructor) return null;
        128 & n.__u && ((c = !!(32 & n.__u)), (i = [(o = t.__e = n.__e)])),
          (l = X.__b) && l(t);
        e: if ("function" == typeof S)
          try {
            if (
              ((b = t.props),
              (g = "prototype" in S && S.prototype.render),
              (v = (l = S.contextType) && r[l.__c]),
              (w = l ? (v ? v.props.value : l.__) : r),
              n.__c
                ? (y = (d = t.__c = n.__c).__ = d.__E)
                : (g
                    ? (t.__c = d = new S(b, w))
                    : ((t.__c = d = new eb(b, w)),
                      (d.constructor = S),
                      (d.render = eT)),
                  v && v.sub(d),
                  (d.props = b),
                  d.state || (d.state = {}),
                  (d.context = w),
                  (d.__n = r),
                  (f = d.__d = !0),
                  (d.__h = []),
                  (d._sb = [])),
              g && null == d.__s && (d.__s = d.state),
              g &&
                null != S.getDerivedStateFromProps &&
                (d.__s == d.state && (d.__s = ef({}, d.__s)),
                ef(d.__s, S.getDerivedStateFromProps(b, d.__s))),
              (p = d.props),
              (m = d.state),
              (d.__v = t),
              f)
            )
              g &&
                null == S.getDerivedStateFromProps &&
                null != d.componentWillMount &&
                d.componentWillMount(),
                g &&
                  null != d.componentDidMount &&
                  d.__h.push(d.componentDidMount);
            else {
              if (
                (g &&
                  null == S.getDerivedStateFromProps &&
                  b !== p &&
                  null != d.componentWillReceiveProps &&
                  d.componentWillReceiveProps(b, w),
                !d.__e &&
                  ((null != d.shouldComponentUpdate &&
                    !1 === d.shouldComponentUpdate(b, d.__s, w)) ||
                    t.__v === n.__v))
              ) {
                for (
                  t.__v !== n.__v &&
                    ((d.props = b), (d.state = d.__s), (d.__d = !1)),
                    t.__e = n.__e,
                    t.__k = n.__k,
                    t.__k.some(function (e) {
                      e && (e.__ = t);
                    }),
                    _ = 0;
                  _ < d._sb.length;
                  _++
                )
                  d.__h.push(d._sb[_]);
                (d._sb = []), d.__h.length && s.push(d);
                break e;
              }
              null != d.componentWillUpdate &&
                d.componentWillUpdate(b, d.__s, w),
                g &&
                  null != d.componentDidUpdate &&
                  d.__h.push(function () {
                    d.componentDidUpdate(p, m, h);
                  });
            }
            if (
              ((d.context = w),
              (d.props = b),
              (d.__P = e),
              (d.__e = !1),
              (x = X.__r),
              (k = 0),
              g)
            ) {
              for (
                d.state = d.__s,
                  d.__d = !1,
                  x && x(t),
                  l = d.render(d.props, d.state, d.context),
                  A = 0;
                A < d._sb.length;
                A++
              )
                d.__h.push(d._sb[A]);
              d._sb = [];
            } else
              do
                (d.__d = !1),
                  x && x(t),
                  (l = d.render(d.props, d.state, d.context)),
                  (d.state = d.__s);
              while (d.__d && ++k < 25);
            (d.state = d.__s),
              null != d.getChildContext &&
                (r = ef(ef({}, r), d.getChildContext())),
              g &&
                !f &&
                null != d.getSnapshotBeforeUpdate &&
                (h = d.getSnapshotBeforeUpdate(p, m)),
              e_(
                e,
                ed(
                  (I =
                    null != l && l.type === ey && null == l.key
                      ? l.props.children
                      : l)
                )
                  ? I
                  : [I],
                t,
                n,
                r,
                a,
                i,
                s,
                o,
                c,
                u
              ),
              (d.base = t.__e),
              (t.__u &= -161),
              d.__h.length && s.push(d),
              y && (d.__E = d.__ = null);
          } catch (e) {
            if (((t.__v = null), c || null != i)) {
              for (
                t.__u |= c ? 160 : 32;
                o && 8 === o.nodeType && o.nextSibling;

              )
                o = o.nextSibling;
              (i[i.indexOf(o)] = null), (t.__e = o);
            } else (t.__e = n.__e), (t.__k = n.__k);
            X.__e(e, t, n);
          }
        else
          null == i && t.__v === n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (t.__e = (function (e, t, n, r, a, i, s, o, c) {
                var u,
                  l,
                  d,
                  f,
                  p,
                  m,
                  h,
                  y = n.props,
                  b = t.props,
                  g = t.type;
                if (
                  ("svg" === g
                    ? (a = "http://www.w3.org/2000/svg")
                    : "math" === g
                    ? (a = "http://www.w3.org/1998/Math/MathML")
                    : a || (a = "http://www.w3.org/1999/xhtml"),
                  null != i)
                ) {
                  for (u = 0; u < i.length; u++)
                    if (
                      (p = i[u]) &&
                      "setAttribute" in p == !!g &&
                      (g ? p.localName === g : 3 === p.nodeType)
                    ) {
                      (e = p), (i[u] = null);
                      break;
                    }
                }
                if (null == e) {
                  if (null === g) return document.createTextNode(b);
                  (e = document.createElementNS(a, g, b.is && b)),
                    o && (X.__m && X.__m(t, i), (o = !1)),
                    (i = null);
                }
                if (null === g) y === b || (o && e.data === b) || (e.data = b);
                else {
                  if (
                    ((i = i && Y.call(e.childNodes)),
                    (y = n.props || ec),
                    !o && null != i)
                  )
                    for (y = {}, u = 0; u < e.attributes.length; u++)
                      y[(p = e.attributes[u]).name] = p.value;
                  for (u in y)
                    if (((p = y[u]), "children" == u));
                    else if ("dangerouslySetInnerHTML" == u) d = p;
                    else if (!(u in b)) {
                      if (
                        ("value" == u && "defaultValue" in b) ||
                        ("checked" == u && "defaultChecked" in b)
                      )
                        continue;
                      ek(e, u, null, p, a);
                    }
                  for (u in b)
                    (p = b[u]),
                      "children" == u
                        ? (f = p)
                        : "dangerouslySetInnerHTML" == u
                        ? (l = p)
                        : "value" == u
                        ? (m = p)
                        : "checked" == u
                        ? (h = p)
                        : (o && "function" != typeof p) ||
                          y[u] === p ||
                          ek(e, u, p, y[u], a);
                  if (l)
                    o ||
                      (d &&
                        (l.__html === d.__html || l.__html === e.innerHTML)) ||
                      (e.innerHTML = l.__html),
                      (t.__k = []);
                  else if (
                    (d && (e.innerHTML = ""),
                    e_(
                      e,
                      ed(f) ? f : [f],
                      t,
                      n,
                      r,
                      "foreignObject" === g
                        ? "http://www.w3.org/1999/xhtml"
                        : a,
                      i,
                      s,
                      i ? i[0] : n.__k && eg(n, 0),
                      o,
                      c
                    ),
                    null != i)
                  )
                    for (u = i.length; u--; ) ep(i[u]);
                  o ||
                    ((u = "value"),
                    "progress" === g && null == m
                      ? e.removeAttribute("value")
                      : void 0 === m ||
                        (m === e[u] &&
                          ("progress" !== g || m) &&
                          ("option" !== g || m === y[u])) ||
                        ek(e, u, m, y[u], a),
                    (u = "checked"),
                    void 0 !== h && h !== e[u] && ek(e, u, h, y[u], a));
                }
                return e;
              })(n.__e, t, n, r, a, i, s, c, u));
        (l = X.diffed) && l(t);
      }
      function eS(e, t, n) {
        t.__d = void 0;
        for (var r = 0; r < n.length; r++) eE(n[r], n[++r], n[++r]);
        X.__c && X.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              X.__e(e, t.__v);
            }
          });
      }
      function eE(e, t, n) {
        try {
          if ("function" == typeof e) {
            var r = "function" == typeof e.__u;
            r && e.__u(), (r && null == t) || (e.__u = e(t));
          } else e.current = t;
        } catch (e) {
          X.__e(e, n);
        }
      }
      function eT(e, t, n) {
        return this.constructor(e, n);
      }
      function eP(e, t, n) {
        var r, a, i, s;
        X.__ && X.__(e, t),
          (a = (r = "function" == typeof n) ? null : (n && n.__k) || t.__k),
          (i = []),
          (s = []),
          eI(
            t,
            (e = ((!r && n) || t).__k = em(ey, null, [e])),
            a || ec,
            ec,
            t.namespaceURI,
            !r && n
              ? [n]
              : a
              ? null
              : t.firstChild
              ? Y.call(t.childNodes)
              : null,
            i,
            !r && n ? n : a ? a.__e : t.firstChild,
            r,
            s
          ),
          eS(i, e, s);
      }
      (Y = eu.slice),
        (X = {
          __e: function (e, t, n, r) {
            for (var a, i, s; (t = t.__); )
              if ((a = t.__c) && !a.__)
                try {
                  if (
                    ((i = a.constructor) &&
                      null != i.getDerivedStateFromError &&
                      (a.setState(i.getDerivedStateFromError(e)), (s = a.__d)),
                    null != a.componentDidCatch &&
                      (a.componentDidCatch(e, r || {}), (s = a.__d)),
                    s)
                  )
                    return (a.__E = a);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (ee = 0),
        (eb.prototype.setState = function (e, t) {
          var n;
          (n =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = ef({}, this.state))),
            "function" == typeof e && (e = e(ef({}, n), this.props)),
            e && ef(n, e),
            null != e && this.__v && (t && this._sb.push(t), ev(this));
        }),
        (eb.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), ev(this));
        }),
        (eb.prototype.render = ey),
        (et = []),
        (er =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (ea = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (ew.__r = 0),
        (ei = 0),
        (es = eA(!1)),
        (eo = eA(!0));
      var eC,
        eO,
        ej,
        eM,
        eL = 0,
        eN = [],
        eD = X,
        eB = eD.__b,
        eU = eD.__r,
        eR = eD.diffed,
        eq = eD.__c,
        ez = eD.unmount,
        eF = eD.__;
      function eG(e, t) {
        eD.__h && eD.__h(eO, e, eL || t), (eL = 0);
        var n = eO.__H || (eO.__H = { __: [], __h: [] });
        return e >= n.__.length && n.__.push({}), n.__[e];
      }
      function e$(e, t, n) {
        var r = eG(eC++, 2);
        if (
          ((r.t = e),
          !r.__c &&
            ((r.__ = [
              n ? n(t) : eJ(void 0, t),
              function (e) {
                var t = r.__N ? r.__N[0] : r.__[0],
                  n = r.t(t, e);
                t !== n && ((r.__N = [n, r.__[1]]), r.__c.setState({}));
              },
            ]),
            (r.__c = eO),
            !eO.u))
        ) {
          var a = function (e, t, n) {
            if (!r.__c.__H) return !0;
            var a = r.__c.__H.__.filter(function (e) {
              return !!e.__c;
            });
            if (
              a.every(function (e) {
                return !e.__N;
              })
            )
              return !i || i.call(this, e, t, n);
            var s = !1;
            return (
              a.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (s = !0);
                }
              }),
              !(!s && r.__c.props === e) && (!i || i.call(this, e, t, n))
            );
          };
          eO.u = !0;
          var i = eO.shouldComponentUpdate,
            s = eO.componentWillUpdate;
          (eO.componentWillUpdate = function (e, t, n) {
            if (this.__e) {
              var r = i;
              (i = void 0), a(e, t, n), (i = r);
            }
            s && s.call(this, e, t, n);
          }),
            (eO.shouldComponentUpdate = a);
        }
        return r.__N || r.__;
      }
      function eH() {
        for (var e; (e = eN.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(eK), e.__H.__h.forEach(eV), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), eD.__e(t, e.__v);
            }
      }
      (eD.__b = function (e) {
        (eO = null), eB && eB(e);
      }),
        (eD.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), eF && eF(e, t);
        }),
        (eD.__r = function (e) {
          eU && eU(e), (eC = 0);
          var t = (eO = e.__c).__H;
          t &&
            (ej === eO
              ? ((t.__h = []),
                (eO.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.i = e.__N = void 0);
                }))
              : (t.__h.forEach(eK), t.__h.forEach(eV), (t.__h = []), (eC = 0))),
            (ej = eO);
        }),
        (eD.diffed = function (e) {
          eR && eR(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== eN.push(t) && eM === eD.requestAnimationFrame) ||
                (
                  (eM = eD.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      n = function () {
                        clearTimeout(r),
                          eW && cancelAnimationFrame(t),
                          setTimeout(e);
                      },
                      r = setTimeout(n, 100);
                    eW && (t = requestAnimationFrame(n));
                  }
                )(eH)),
            t.__H.__.forEach(function (e) {
              e.i && (e.__H = e.i), (e.i = void 0);
            })),
            (ej = eO = null);
        }),
        (eD.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(eK),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || eV(e);
                }));
            } catch (n) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                eD.__e(n, e.__v);
            }
          }),
            eq && eq(e, t);
        }),
        (eD.unmount = function (e) {
          ez && ez(e);
          var t,
            n = e.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (e) {
              try {
                eK(e);
              } catch (e) {
                t = e;
              }
            }),
            (n.__H = void 0),
            t && eD.__e(t, n.__v));
        });
      var eW = "function" == typeof requestAnimationFrame;
      function eK(e) {
        var t = eO,
          n = e.__c;
        "function" == typeof n && ((e.__c = void 0), n()), (eO = t);
      }
      function eV(e) {
        var t = eO;
        (e.__c = e.__()), (eO = t);
      }
      function eJ(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function eQ() {
        var e, t;
        return (
          null !=
            (t =
              null == (e = null == window ? void 0 : window.matchMedia)
                ? void 0
                : e.call(window, "(prefers-color-scheme: dark)").matches) && t
        );
      }
      class eZ {
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = eQ());
        }
        attach(e) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-snackbar-root"),
            e.appendChild(this.root),
            this.render();
        }
        presentItem(e) {
          let t = this.nextItemKey++;
          return (
            this.items.set(t, e),
            this.render(),
            () => {
              this.items.delete(t), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            eP(
              em(
                "div",
                null,
                em(
                  eY,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([e, t]) =>
                    em(eX, Object.assign({}, t, { key: e }))
                  )
                )
              ),
              this.root
            );
        }
      }
      let eY = (e) =>
          em(
            "div",
            { class: V("-cbwsdk-snackbar-container") },
            em(
              "style",
              null,
              ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
            ),
            em("div", { class: "-cbwsdk-snackbar" }, e.children)
          ),
        eX = ({ autoExpand: e, message: t, menuItems: n }) => {
          let [r, a] = ((eL = 1), e$(eJ, !0)),
            [i, s] = ((eL = 1), e$(eJ, null != e && e));
          return (
            !(function (e, t) {
              var n,
                r,
                a = eG(eC++, 3);
              !eD.__s &&
                ((n = a.__H),
                (r = void 0),
                !n ||
                  n.length !== r.length ||
                  r.some(function (e, t) {
                    return e !== n[t];
                  })) &&
                ((a.__ = e), (a.i = void 0), eO.__H.__h.push(a));
            })(() => {
              let e = [
                window.setTimeout(() => {
                  a(!1);
                }, 1),
                window.setTimeout(() => {
                  s(!0);
                }, 1e4),
              ];
              return () => {
                e.forEach(window.clearTimeout);
              };
            }),
            em(
              "div",
              {
                class: V(
                  "-cbwsdk-snackbar-instance",
                  r && "-cbwsdk-snackbar-instance-hidden",
                  i && "-cbwsdk-snackbar-instance-expanded"
                ),
              },
              em(
                "div",
                {
                  class: "-cbwsdk-snackbar-instance-header",
                  onClick: () => {
                    s(!i);
                  },
                },
                em("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                  class: "-cbwsdk-snackbar-instance-header-cblogo",
                }),
                " ",
                em(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-header-message" },
                  t
                ),
                em(
                  "div",
                  { class: "-gear-container" },
                  !i &&
                    em(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      em("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#F5F7F8",
                      })
                    ),
                  em("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand",
                  })
                )
              ),
              n &&
                n.length > 0 &&
                em(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-menu" },
                  n.map((e, t) =>
                    em(
                      "div",
                      {
                        class: V(
                          "-cbwsdk-snackbar-instance-menu-item",
                          e.isRed &&
                            "-cbwsdk-snackbar-instance-menu-item-is-red"
                        ),
                        onClick: e.onClick,
                        key: t,
                      },
                      em(
                        "svg",
                        {
                          width: e.svgWidth,
                          height: e.svgHeight,
                          viewBox: "0 0 10 11",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        em("path", {
                          "fill-rule": e.defaultFillRule,
                          "clip-rule": e.defaultClipRule,
                          d: e.path,
                          fill: "#AAAAAA",
                        })
                      ),
                      em(
                        "span",
                        {
                          class: V(
                            "-cbwsdk-snackbar-instance-menu-item-info",
                            e.isRed &&
                              "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                          ),
                        },
                        e.info
                      )
                    )
                  )
                )
            )
          );
        },
        e0 =
          "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z";
      class e1 {
        constructor() {
          (this.attached = !1), (this.snackbar = new eZ());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          let e = document.documentElement,
            t = document.createElement("div");
          (t.className = "-cbwsdk-css-reset"),
            e.appendChild(t),
            this.snackbar.attach(t),
            (this.attached = !0),
            K();
        }
        showConnecting(e) {
          let t;
          return (
            (t = e.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: "Connection lost",
                  menuItems: [
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }
              : {
                  message: "Confirm on phone",
                  menuItems: [
                    {
                      isRed: !0,
                      info: "Cancel transaction",
                      svgWidth: "11",
                      svgHeight: "11",
                      path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                      defaultFillRule: "inherit",
                      defaultClipRule: "inherit",
                      onClick: e.onCancel,
                    },
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: e0,
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(t)
          );
        }
      }
      let e2 = {
          isRed: !1,
          info: "Retry",
          svgWidth: "10",
          svgHeight: "11",
          path: e0,
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
        },
        e5 = null;
      function e3() {
        if (!e5) {
          let e = document.createElement("div");
          (e.className = "-cbwsdk-css-reset"),
            document.body.appendChild(e),
            (e5 = new eZ()).attach(e);
        }
        return e5;
      }
      class e6 {
        constructor({
          url: e = "https://keys.coinbase.com/connect",
          metadata: t,
          preference: n,
        }) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              (await this.waitForPopupLoaded()).postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage(({ requestId: t }) => t === e.id);
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, n) => {
                let r = (n) => {
                  if (n.origin !== this.url.origin) return;
                  let a = n.data;
                  e(a) &&
                    (t(a),
                    window.removeEventListener("message", r),
                    this.listeners.delete(r));
                };
                window.addEventListener("message", r),
                  this.listeners.set(r, { reject: n });
              })),
            (this.disconnect = () => {
              !(function (e) {
                e && !e.closed && e.close();
              })(this.popup),
                (this.popup = null),
                this.listeners.forEach(({ reject: e }, t) => {
                  e(E.provider.userRejectedRequest("Request rejected")),
                    window.removeEventListener("message", t);
                }),
                this.listeners.clear();
            }),
            (this.waitForPopupLoaded = async () =>
              this.popup && !this.popup.closed
                ? (this.popup.focus(), this.popup)
                : ($(
                    "communicator.popup_setup.started",
                    { action: Q.unknown, componentType: J.unknown },
                    Z.high
                  ),
                  (this.popup = await (function (e) {
                    let t = (window.innerWidth - 420) / 2 + window.screenX,
                      n = (window.innerHeight - 700) / 2 + window.screenY;
                    function r() {
                      let r = `wallet_${crypto.randomUUID()}`,
                        a = window.open(
                          e,
                          r,
                          `width=420, height=700, left=${t}, top=${n}`
                        );
                      return (null == a || a.focus(), a) ? a : null;
                    }
                    var a = e;
                    for (let [e, t] of Object.entries({
                      sdkName: f,
                      sdkVersion: d,
                      origin: window.location.origin,
                      coop: R(),
                    }))
                      a.searchParams.has(e) ||
                        a.searchParams.append(e, t.toString());
                    let i = r();
                    if (!i) {
                      let e = e3();
                      return new Promise((t, n) => {
                        H({ snackbarContext: "popup_blocked" }),
                          e.presentItem({
                            autoExpand: !0,
                            message: "Popup was blocked. Try again.",
                            menuItems: [
                              Object.assign(Object.assign({}, e2), {
                                onClick: () => {
                                  W({
                                    snackbarContext: "popup_blocked",
                                    snackbarAction: "confirm",
                                  }),
                                    (i = r())
                                      ? t(i)
                                      : n(
                                          E.rpc.internal(
                                            "Popup window was blocked"
                                          )
                                        ),
                                    e.clear();
                                },
                              }),
                            ],
                          });
                      });
                    }
                    return Promise.resolve(i);
                  })(this.url)),
                  this.onMessage(({ event: e }) => "PopupUnload" === e)
                    .then(() => {
                      this.disconnect(),
                        $(
                          "communicator.popup_unload.received",
                          { action: Q.unknown, componentType: J.unknown },
                          Z.high
                        );
                    })
                    .catch(() => {}),
                  this.onMessage(({ event: e }) => "PopupLoaded" === e)
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: {
                          version: d,
                          metadata: this.metadata,
                          preference: this.preference,
                          location: window.location.toString(),
                        },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw E.rpc.internal();
                      return (
                        $(
                          "communicator.popup_setup.completed",
                          { action: Q.unknown, componentType: J.unknown },
                          Z.high
                        ),
                        this.popup
                      );
                    }))),
            (this.url = new URL(e)),
            (this.metadata = t),
            (this.preference = n);
        }
      }
      function e4(e) {
        return void 0 !== e.errorMessage;
      }
      var e8 = n(17709);
      class e7 extends e8.b {}
      class e9 {
        constructor(e, t) {
          (this.scope = e), (this.module = t);
        }
        storeObject(e, t) {
          this.setItem(e, JSON.stringify(t));
        }
        loadObject(e) {
          let t = this.getItem(e);
          return t ? JSON.parse(t) : void 0;
        }
        setItem(e, t) {
          localStorage.setItem(this.scopedKey(e), t);
        }
        getItem(e) {
          return localStorage.getItem(this.scopedKey(e));
        }
        removeItem(e) {
          localStorage.removeItem(this.scopedKey(e));
        }
        clear() {
          let e = this.scopedKey(""),
            t = [];
          for (let n = 0; n < localStorage.length; n++) {
            let r = localStorage.key(n);
            "string" == typeof r && r.startsWith(e) && t.push(r);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
        }
        static clearAll() {
          new e9("CBWSDK").clear(), new e9("walletlink").clear();
        }
      }
      function te(e) {
        return Math.floor(e);
      }
      var tt = n(50887).Buffer;
      let tn = /^[0-9]*$/,
        tr = /^[a-f0-9]*$/;
      function ta(e) {
        return ti(crypto.getRandomValues(new Uint8Array(e)));
      }
      function ti(e) {
        return [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function ts(e) {
        return new Uint8Array(
          e.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16))
        );
      }
      function to(e, t = !1) {
        let n = e.toString("hex");
        return t ? `0x${n}` : n;
      }
      function tc(e) {
        return to(tg(e), !0);
      }
      function tu(e) {
        return e.toString(10);
      }
      function tl(e) {
        return `0x${BigInt(e).toString(16)}`;
      }
      function td(e) {
        return e.startsWith("0x") || e.startsWith("0X");
      }
      function tf(e) {
        return td(e) ? e.slice(2) : e;
      }
      function tp(e) {
        return td(e) ? `0x${e.slice(2)}` : `0x${e}`;
      }
      function tm(e) {
        if ("string" != typeof e) return !1;
        let t = tf(e).toLowerCase();
        return tr.test(t);
      }
      function th(e, t = !1) {
        if ("string" == typeof e) {
          let n = tf(e).toLowerCase();
          if (tr.test(n)) return t ? `0x${n}` : n;
        }
        throw E.rpc.invalidParams(`"${String(e)}" is not a hexadecimal string`);
      }
      function ty(e, t = !1) {
        let n = th(e, !1);
        return n.length % 2 == 1 && (n = `0${n}`), t ? `0x${n}` : n;
      }
      function tb(e) {
        if ("string" == typeof e) {
          let t = tf(e).toLowerCase();
          if (tm(t) && 40 === t.length) return tp(t);
        }
        throw E.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`);
      }
      function tg(e) {
        if (tt.isBuffer(e)) return e;
        if ("string" == typeof e) {
          if (tm(e)) {
            let t = ty(e, !1);
            return tt.from(t, "hex");
          }
          return tt.from(e, "utf8");
        }
        throw E.rpc.invalidParams(`Not binary data: ${String(e)}`);
      }
      function tv(e) {
        if ("number" == typeof e && Number.isInteger(e)) return te(e);
        if ("string" == typeof e) {
          if (tn.test(e)) return te(Number(e));
          if (tm(e)) return te(Number(BigInt(ty(e, !0))));
        }
        throw E.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      function tw(e) {
        if (
          null !== e &&
          ("bigint" == typeof e ||
            (function (e) {
              if (null == e || "function" != typeof e.constructor) return !1;
              let { constructor: t } = e;
              return (
                "function" == typeof t.config && "number" == typeof t.EUCLID
              );
            })(e))
        )
          return BigInt(e.toString(10));
        if ("number" == typeof e) return BigInt(tv(e));
        if ("string" == typeof e) {
          if (tn.test(e)) return BigInt(e);
          if (tm(e)) return BigInt(ty(e, !0));
        }
        throw E.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      let t_ = l(() => ({ correlationIds: new Map() })),
        tx = {
          get: (e) => t_.getState().correlationIds.get(e),
          set: (e, t) => {
            t_.setState((n) => {
              let r = new Map(n.correlationIds);
              return r.set(e, t), { correlationIds: r };
            });
          },
          delete: (e) => {
            t_.setState((t) => {
              let n = new Map(t.correlationIds);
              return n.delete(e), { correlationIds: n };
            });
          },
          clear: () => {
            t_.setState({ correlationIds: new Map() });
          },
        };
      var tk = n(42960),
        tA = n(1822);
      let tI = (e) =>
        "message" in e && "string" == typeof e.message ? e.message : "";
      var tS = n(55695),
        tE = n(98875),
        tT = n(90448),
        tP = n(45293),
        tC = n(10959),
        tO = n(33838),
        tj = n(93053),
        tM = n(99371),
        tL = n(82235);
      async function tN(e, t) {
        let { blockNumber: n, blockTag: r, name: a } = t,
          { chain: i } = e,
          o = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!i)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, tO.M)({
              blockNumber: n,
              chain: i,
              contract: "ensUniversalResolver",
            });
          })(),
          c = i?.ensTlds;
        if (c && !c.some((e) => a.endsWith(e)))
          throw Error(
            `${a} is not a valid ENS TLD (${c?.join(", ")}) for chain "${
              i.name
            }" (id: ${i.id}).`
          );
        let [u] = await (0, tM.T)(
          e,
          tL.J,
          "readContract"
        )({
          address: o,
          abi: [
            {
              inputs: [{ type: "bytes" }],
              name: "findResolver",
              outputs: [{ type: "address" }, { type: "bytes32" }],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "findResolver",
          args: [(0, s.nj)((0, tj.F)(a))],
          blockNumber: n,
          blockTag: r,
        });
        return u;
      }
      var tD = n(62319),
        tB = n(8422),
        tU = n(19342),
        tR = n(41851),
        tq = n(32654),
        tz = n(50596),
        tF = n(70285);
      async function tG(e, t) {
        let {
            account: n = e.account,
            blockNumber: r,
            blockTag: a = "latest",
            blobs: i,
            data: o,
            gas: c,
            gasPrice: u,
            maxFeePerBlobGas: l,
            maxFeePerGas: d,
            maxPriorityFeePerGas: f,
            to: p,
            value: m,
            ...h
          } = t,
          y = n ? (0, tU.J)(n) : void 0;
        try {
          (0, tF.c)(t);
          let n = "bigint" == typeof r ? (0, s.cK)(r) : void 0,
            b = e.chain?.formatters?.transactionRequest?.format,
            g = (b || tz.Bv)({
              ...(0, tq.o)(h, { format: b }),
              from: y?.address,
              blobs: i,
              data: o,
              gas: c,
              gasPrice: u,
              maxFeePerBlobGas: l,
              maxFeePerGas: d,
              maxPriorityFeePerGas: f,
              to: p,
              value: m,
            }),
            v = await e.request({
              method: "eth_createAccessList",
              params: [g, n || a],
            });
          return { accessList: v.accessList, gasUsed: BigInt(v.gasUsed) };
        } catch (n) {
          throw (0, tR.d)(n, { ...t, account: y, chain: e.chain });
        }
      }
      var t$ = n(59330);
      async function tH(e) {
        let t = (0, t$.g)(e, { method: "eth_newBlockFilter" }),
          n = await e.request({ method: "eth_newBlockFilter" });
        return { id: n, request: t(n), type: "block" };
      }
      var tW = n(75099),
        tK = n(4945);
      async function tV(
        e,
        {
          address: t,
          args: n,
          event: r,
          events: a,
          fromBlock: i,
          strict: o,
          toBlock: c,
        } = {}
      ) {
        let u = a ?? (r ? [r] : void 0),
          l = (0, t$.g)(e, { method: "eth_newFilter" }),
          d = [];
        u &&
          ((d = [
            u.flatMap((e) =>
              (0, tK.R)({ abi: [e], eventName: e.name, args: n })
            ),
          ]),
          r && (d = d[0]));
        let f = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: t,
              fromBlock: "bigint" == typeof i ? (0, s.cK)(i) : i,
              toBlock: "bigint" == typeof c ? (0, s.cK)(c) : c,
              ...(d.length ? { topics: d } : {}),
            },
          ],
        });
        return {
          abi: u,
          args: n,
          eventName: r ? r.name : void 0,
          fromBlock: i,
          id: f,
          request: l(f),
          strict: !!o,
          toBlock: c,
          type: "event",
        };
      }
      async function tJ(e) {
        let t = (0, t$.g)(e, { method: "eth_newPendingTransactionFilter" }),
          n = await e.request({ method: "eth_newPendingTransactionFilter" });
        return { id: n, request: t(n), type: "transaction" };
      }
      var tQ = n(25734),
        tZ = n(60778),
        tY = n(47899),
        tX = n(48637),
        t0 = n(62665);
      async function t1(e) {
        return BigInt(await e.request({ method: "eth_blobBaseFee" }));
      }
      var t2 = n(42588),
        t5 = n(70112);
      async function t3(
        e,
        { blockHash: t, blockNumber: n, blockTag: r = "latest" } = {}
      ) {
        let a,
          i = void 0 !== n ? (0, s.cK)(n) : void 0;
        return (
          (a = t
            ? await e.request(
                { method: "eth_getBlockTransactionCountByHash", params: [t] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockTransactionCountByNumber",
                  params: [i || r],
                },
                { dedupe: !!i }
              )),
          (0, tk.ME)(a)
        );
      }
      var t6 = n(19305),
        t4 = n(73458),
        t8 = n(86168),
        t7 = n(6616);
      class t9 extends t7.C {
        constructor({ address: e }) {
          super(`No EIP-712 domain found on contract "${e}".`, {
            metaMessages: [
              "Ensure that:",
              `- The contract is deployed at the address "${e}".`,
              "- `eip712Domain()` function exists on the contract.",
              "- `eip712Domain()` function matches signature to ERC-5267 specification.",
            ],
            name: "Eip712DomainNotFoundError",
          });
        }
      }
      async function ne(e, t) {
        let { address: n, factory: r, factoryData: a } = t;
        try {
          let [t, i, s, o, c, u, l] = await (0, tM.T)(
            e,
            tL.J,
            "readContract"
          )({
            abi: nt,
            address: n,
            functionName: "eip712Domain",
            factory: r,
            factoryData: a,
          });
          return {
            domain: {
              name: i,
              version: s,
              chainId: Number(o),
              verifyingContract: c,
              salt: u,
            },
            extensions: l,
            fields: t,
          };
        } catch (e) {
          if (
            "ContractFunctionExecutionError" === e.name &&
            "ContractFunctionZeroDataError" === e.cause.name
          )
            throw new t9({ address: n });
          throw e;
        }
      }
      let nt = [
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { name: "fields", type: "bytes1" },
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
            { name: "salt", type: "bytes32" },
            { name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      async function nn(
        e,
        {
          blockCount: t,
          blockNumber: n,
          blockTag: r = "latest",
          rewardPercentiles: a,
        }
      ) {
        var i;
        let o = "bigint" == typeof n ? (0, s.cK)(n) : void 0;
        return {
          baseFeePerGas: (i = await e.request(
            { method: "eth_feeHistory", params: [(0, s.cK)(t), o || r, a] },
            { dedupe: !!o }
          )).baseFeePerGas.map((e) => BigInt(e)),
          gasUsedRatio: i.gasUsedRatio,
          oldestBlock: BigInt(i.oldestBlock),
          reward: i.reward?.map((e) => e.map((e) => BigInt(e))),
        };
      }
      var nr = n(64630),
        na = n(36078),
        ni = n(55769);
      async function ns(e, { filter: t }) {
        let n = t.strict ?? !1,
          r = (
            await t.request({ method: "eth_getFilterLogs", params: [t.id] })
          ).map((e) => (0, ni.e)(e));
        return t.abi ? (0, na.p)({ abi: t.abi, logs: r, strict: n }) : r;
      }
      var no = n(46497),
        nc = n(53224);
      async function nu(
        e,
        { address: t, blockNumber: n, blockTag: r, storageKeys: a }
      ) {
        let i = void 0 !== n ? (0, s.cK)(n) : void 0;
        var o = await e.request({
          method: "eth_getProof",
          params: [t, a, i || (r ?? "latest")],
        });
        return {
          ...o,
          balance: o.balance ? BigInt(o.balance) : void 0,
          nonce: o.nonce ? (0, tk.ME)(o.nonce) : void 0,
          storageProof: o.storageProof
            ? o.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
            : void 0,
        };
      }
      async function nl(
        e,
        { address: t, blockNumber: n, blockTag: r = "latest", slot: a }
      ) {
        let i = void 0 !== n ? (0, s.cK)(n) : void 0;
        return await e.request({
          method: "eth_getStorageAt",
          params: [t, a, i || r],
        });
      }
      var nd = n(17857);
      async function nf(e, { hash: t, transactionReceipt: n }) {
        let [r, a] = await Promise.all([
            (0, tM.T)(e, t5.G, "getBlockNumber")({}),
            t ? (0, tM.T)(e, nd.x, "getTransaction")({ hash: t }) : void 0,
          ]),
          i = n?.blockNumber || a?.blockNumber;
        return i ? r - i + 1n : 0n;
      }
      var np = n(88540),
        nm = n(44063),
        nh = n(54346),
        ny = n(31918),
        nb = n(70779),
        ng = n(48064),
        nv = n(24887),
        nw = n(47067),
        n_ = n(97100),
        nx = n(39658),
        nk = n(82815),
        nA = n(2546),
        nI = n(69596);
      async function nS(e, t) {
        let {
          blockNumber: n,
          blockTag: r = e.experimental_blockTag ?? "latest",
          blocks: a,
          returnFullTransactions: o,
          traceTransfers: c,
          validation: u,
        } = t;
        try {
          let t = [];
          for (let e of a) {
            let n = e.blockOverrides ? ny.J(e.blockOverrides) : void 0,
              r = e.calls.map((e) => {
                let t = e.account ? (0, tU.J)(e.account) : void 0,
                  n = e.abi ? (0, i.p)(e) : e.data,
                  r = {
                    ...e,
                    data: e.dataSuffix
                      ? (0, n_.xW)([n || "0x", e.dataSuffix])
                      : n,
                    from: e.from ?? t?.address,
                  };
                return (0, tF.c)(r), (0, tz.Bv)(r);
              }),
              a = e.stateOverrides ? (0, nI.yH)(e.stateOverrides) : void 0;
            t.push({ blockOverrides: n, calls: r, stateOverrides: a });
          }
          let l = "bigint" == typeof n ? (0, s.cK)(n) : void 0;
          return (
            await e.request({
              method: "eth_simulateV1",
              params: [
                {
                  blockStateCalls: t,
                  returnFullTransactions: o,
                  traceTransfers: c,
                  validation: u,
                },
                l || r,
              ],
            })
          ).map((e, t) => ({
            ...(0, nA.$)(e),
            calls: e.calls.map((e, n) => {
              let { abi: r, args: i, functionName: s, to: o } = a[t].calls[n],
                c = e.error?.data ?? e.returnData,
                u = BigInt(e.gasUsed),
                l = e.logs?.map((e) => (0, ni.e)(e)),
                d = "0x1" === e.status ? "success" : "failure",
                f =
                  r && "success" === d && "0x" !== c
                    ? (0, nw.e)({ abi: r, data: c, functionName: s })
                    : null,
                p = (() => {
                  let t;
                  if (
                    "success" !== d &&
                    (e.error?.data === "0x"
                      ? (t = new nb.O())
                      : e.error && (t = new ng.$S(e.error)),
                    t)
                  )
                    return (0, nx.j)(t, {
                      abi: r ?? [],
                      address: o ?? "0x",
                      args: i,
                      functionName: s ?? "<unknown>",
                    });
                })();
              return {
                data: c,
                gasUsed: u,
                logs: l,
                status: d,
                ...("success" === d ? { result: f } : { error: p }),
              };
            }),
          }));
        } catch (t) {
          let e = (0, nk.l)(t, {});
          if (e instanceof nv.RM) throw t;
          throw e;
        }
      }
      var nE = n(55376),
        nT = n(44267),
        nP = n(72835),
        nC = n(49655),
        nO = n(13439),
        nj = n(62489),
        nM = n(62889),
        nL = n(75240);
      n(22501);
      let nN = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function nD(e) {
        return e >= nN.zero && e <= nN.nine
          ? e - nN.zero
          : e >= nN.A && e <= nN.F
          ? e - (nN.A - 10)
          : e >= nN.a && e <= nN.f
          ? e - (nN.a - 10)
          : void 0;
      }
      var nB = n(82104);
      let nU = new TextEncoder();
      nj.C, nj.C;
      class nR extends nj.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeOverflowError",
            });
        }
      }
      nj.C;
      class nq extends nj.C {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeExceedsPaddingSizeError",
            });
        }
      }
      function nz(e, t = {}) {
        var n;
        let { as: r = "string" == typeof e ? "Hex" : "Bytes" } = t,
          a = (0, nM.lY)(
            e instanceof Uint8Array
              ? e
              : "string" == typeof e
              ? (function (e, t = {}) {
                  let { size: n } = t,
                    r = e;
                  n && (nB.Sl(e, n), (r = nL.M7(e, n)));
                  let a = r.slice(2);
                  a.length % 2 && (a = `0${a}`);
                  let i = a.length / 2,
                    s = new Uint8Array(i);
                  for (let e = 0, t = 0; e < i; e++) {
                    let n = nD(a.charCodeAt(t++)),
                      r = nD(a.charCodeAt(t++));
                    if (void 0 === n || void 0 === r)
                      throw new nj.C(
                        `Invalid byte sequence ("${a[t - 2]}${
                          a[t - 1]
                        }" in "${a}").`
                      );
                    s[e] = 16 * n + r;
                  }
                  return s;
                })(e)
              : (n = e) instanceof Uint8Array
              ? n
              : new Uint8Array(n)
          );
        return "Bytes" === r ? a : nL.uK(a);
      }
      class nF extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          let t = super.get(e);
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
          );
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      let nG = { checksum: new nF(8192) }.checksum,
        n$ = /^0x[a-fA-F0-9]{40}$/;
      function nH(e, t = {}) {
        let { strict: n = !0 } = t;
        if (!n$.test(e)) throw new nK({ address: e, cause: new nV() });
        if (n) {
          if (e.toLowerCase() === e) return;
          if (
            (function (e) {
              if (nG.has(e)) return nG.get(e);
              nH(e, { strict: !1 });
              let t = e.substring(2).toLowerCase(),
                n = nz(
                  (function (e, t = {}) {
                    let { size: n } = t,
                      r = nU.encode(e);
                    if ("number" == typeof n) {
                      var a;
                      if (r.length > n)
                        throw new nR({ givenSize: r.length, maxSize: n });
                      return (
                        (a = r),
                        (function (e, t = {}) {
                          let { dir: n, size: r = 32 } = t;
                          if (0 === r) return e;
                          if (e.length > r)
                            throw new nq({
                              size: e.length,
                              targetSize: r,
                              type: "Bytes",
                            });
                          let a = new Uint8Array(r);
                          for (let t = 0; t < r; t++) {
                            let i = "right" === n;
                            a[i ? t : r - t - 1] = e[i ? t : e.length - t - 1];
                          }
                          return a;
                        })(a, { dir: "right", size: n })
                      );
                    }
                    return r;
                  })(t),
                  { as: "Bytes" }
                ),
                r = t.split("");
              for (let e = 0; e < 40; e += 2)
                n[e >> 1] >> 4 >= 8 && r[e] && (r[e] = r[e].toUpperCase()),
                  (15 & n[e >> 1]) >= 8 &&
                    r[e + 1] &&
                    (r[e + 1] = r[e + 1].toUpperCase());
              let a = `0x${r.join("")}`;
              return nG.set(e, a), a;
            })(e) !== e
          )
            throw new nK({ address: e, cause: new nJ() });
        }
      }
      function nW(e, t = {}) {
        let { strict: n = !0 } = t ?? {};
        try {
          return nH(e, { strict: n }), !0;
        } catch {
          return !1;
        }
      }
      class nK extends nj.C {
        constructor({ address: e, cause: t }) {
          super(`Address "${e}" is invalid.`, { cause: t }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidAddressError",
            });
        }
      }
      class nV extends nj.C {
        constructor() {
          super("Address is not a 20 byte (40 hexadecimal character) value."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidInputError",
            });
        }
      }
      class nJ extends nj.C {
        constructor() {
          super("Address does not match its checksum counterpart."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidChecksumError",
            });
        }
      }
      function nQ(e) {
        let t = !0,
          n = "",
          r = 0,
          a = "",
          i = !1;
        for (let s = 0; s < e.length; s++) {
          let o = e[s];
          if (
            (["(", ")", ","].includes(o) && (t = !0),
            "(" === o && r++,
            ")" === o && r--,
            t)
          ) {
            if (0 === r) {
              if (" " === o && ["event", "function", "error", ""].includes(a))
                a = "";
              else if (((a += o), ")" === o)) {
                i = !0;
                break;
              }
              continue;
            }
            if (" " === o) {
              "," !== e[s - 1] &&
                "," !== n &&
                ",(" !== n &&
                ((n = ""), (t = !1));
              continue;
            }
            (a += o), (n += o);
          }
        }
        if (!i) throw new nj.C("Unable to normalize signature.");
        return a;
      }
      function nZ(e, t = {}) {
        let { prepare: n = !0 } = t,
          r =
            Array.isArray(e) || "string" == typeof e
              ? (function (e) {
                  let t;
                  if ("string" == typeof e) t = (0, nC.uT)(e);
                  else {
                    let n = (0, nP.e)(e),
                      r = e.length;
                    for (let a = 0; a < r; a++) {
                      let r = e[a];
                      if (!(0, nT.WL)(r)) {
                        t = (0, nC.uT)(r, n);
                        break;
                      }
                    }
                  }
                  if (!t) throw new nE.xo({ signature: e });
                  return t;
                })(e)
              : e;
        return { ...r, ...(n ? { hash: nX(r) } : {}) };
      }
      function nY(e) {
        return nL.di(nX(e), 0, 4);
      }
      function nX(e) {
        return "string" != typeof e && "hash" in e && e.hash
          ? e.hash
          : nz(nL.sH(nQ("string" == typeof e ? e : nO.B(e))));
      }
      class n0 extends nj.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI Items.", {
            metaMessages: [
              `\`${e.type}\` in \`${nQ(nO.B(e.abiItem))}\`, and`,
              `\`${t.type}\` in \`${nQ(nO.B(t.abiItem))}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.AmbiguityError",
            });
        }
      }
      class n1 extends nj.C {
        constructor({ name: e, data: t, type: n = "item" }) {
          super(
            `ABI ${n}${
              e ? ` with name "${e}"` : t ? ` with data "${t}"` : ""
            } not found.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.NotFoundError",
            });
        }
      }
      nj.C, n(96987);
      let n2 = /^(.*)\[([0-9]*)\]$/,
        n5 = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        n3 =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
      function n6(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: r, encoded: a } = e[n];
          r ? (t += 32) : (t += nL.Ej(a));
        }
        let n = [],
          r = [],
          a = 0;
        for (let i = 0; i < e.length; i++) {
          let { dynamic: s, encoded: o } = e[i];
          s
            ? (n.push(nL.oB(t + a, { size: 32 })), r.push(o), (a += nL.Ej(o)))
            : n.push(o);
        }
        return nL.xW(...n, ...r);
      }
      function n4(e, t, n) {
        let { checksumAddress: r = !1 } = n ?? {};
        if (e.length !== t.length)
          throw new re({ expectedLength: e.length, givenLength: t.length });
        let a = n6(
          (function ({ checksumAddress: e, parameters: t, values: n }) {
            let r = [];
            for (let a = 0; a < t.length; a++)
              r.push(
                (function e({
                  checksumAddress: t = !1,
                  parameter: n,
                  value: r,
                }) {
                  let a = (function (e) {
                    let t = e.match(/^(.*)\[(\d+)?\]$/);
                    return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
                  })(n.type);
                  if (a) {
                    let [i, s] = a;
                    return (function (t, n) {
                      let { checksumAddress: r, length: a, parameter: i } = n,
                        s = null === a;
                      if (!Array.isArray(t)) throw new rt(t);
                      if (!s && t.length !== a)
                        throw new n7({
                          expectedLength: a,
                          givenLength: t.length,
                          type: `${i.type}[${a}]`,
                        });
                      let o = !1,
                        c = [];
                      for (let n = 0; n < t.length; n++) {
                        let a = e({
                          checksumAddress: r,
                          parameter: i,
                          value: t[n],
                        });
                        a.dynamic && (o = !0), c.push(a);
                      }
                      if (s || o) {
                        let e = n6(c);
                        if (s) {
                          let t = nL.oB(c.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: c.length > 0 ? nL.xW(t, e) : t,
                          };
                        }
                        if (o) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: nL.xW(...c.map(({ encoded: e }) => e)),
                      };
                    })(r, {
                      checksumAddress: t,
                      length: i,
                      parameter: { ...n, type: s },
                    });
                  }
                  if ("tuple" === n.type)
                    return (function (t, n) {
                      let { checksumAddress: r, parameter: a } = n,
                        i = !1,
                        s = [];
                      for (let n = 0; n < a.components.length; n++) {
                        let o = a.components[n],
                          c = Array.isArray(t) ? n : o.name,
                          u = e({
                            checksumAddress: r,
                            parameter: o,
                            value: t[c],
                          });
                        s.push(u), u.dynamic && (i = !0);
                      }
                      return {
                        dynamic: i,
                        encoded: i
                          ? n6(s)
                          : nL.xW(...s.map(({ encoded: e }) => e)),
                      };
                    })(r, { checksumAddress: t, parameter: n });
                  if ("address" === n.type) {
                    var i = r,
                      s = { checksum: t };
                    let { checksum: e = !1 } = s;
                    return (
                      nH(i, { strict: e }),
                      { dynamic: !1, encoded: nL.Ho(i.toLowerCase()) }
                    );
                  }
                  if ("bool" === n.type) {
                    var o = r;
                    if ("boolean" != typeof o)
                      throw new nj.C(
                        `Invalid boolean value: "${o}" (type: ${typeof o}). Expected: \`true\` or \`false\`.`
                      );
                    return { dynamic: !1, encoded: nL.Ho(nL.xb(o)) };
                  }
                  if (n.type.startsWith("uint") || n.type.startsWith("int")) {
                    let e = n.type.startsWith("int"),
                      [, , t = "256"] = n3.exec(n.type) ?? [];
                    return (function (e, { signed: t, size: n }) {
                      if ("number" == typeof n) {
                        let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
                          a = t ? -r - 1n : 0n;
                        if (e > r || e < a)
                          throw new nL.Ty({
                            max: r.toString(),
                            min: a.toString(),
                            signed: t,
                            size: n / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: nL.oB(e, { size: 32, signed: t }),
                      };
                    })(r, { signed: e, size: Number(t) });
                  }
                  if (n.type.startsWith("bytes"))
                    return (function (e, { type: t }) {
                      let [, n] = t.split("bytes"),
                        r = nL.Ej(e);
                      if (!n) {
                        let t = e;
                        return (
                          r % 32 != 0 &&
                            (t = nL.M7(
                              t,
                              32 * Math.ceil((e.length - 2) / 2 / 32)
                            )),
                          {
                            dynamic: !0,
                            encoded: nL.xW(nL.Ho(nL.oB(r, { size: 32 })), t),
                          }
                        );
                      }
                      if (r !== Number.parseInt(n))
                        throw new n9({
                          expectedSize: Number.parseInt(n),
                          value: e,
                        });
                      return { dynamic: !1, encoded: nL.M7(e) };
                    })(r, { type: n.type });
                  if ("string" === n.type) {
                    var c = r;
                    let e = nL.sH(c),
                      t = Math.ceil(nL.Ej(e) / 32),
                      n = [];
                    for (let r = 0; r < t; r++)
                      n.push(nL.M7(nL.di(e, 32 * r, (r + 1) * 32)));
                    return {
                      dynamic: !0,
                      encoded: nL.xW(
                        nL.M7(nL.oB(nL.Ej(e), { size: 32 })),
                        ...n
                      ),
                    };
                  }
                  throw new rn(n.type);
                })({ checksumAddress: e, parameter: t[a], value: n[a] })
              );
            return r;
          })({ checksumAddress: r, parameters: e, values: t })
        );
        return 0 === a.length ? "0x" : a;
      }
      function n8(e, t) {
        if (e.length !== t.length)
          throw new re({ expectedLength: e.length, givenLength: t.length });
        let n = [];
        for (let r = 0; r < e.length; r++) {
          let a = e[r],
            i = t[r];
          n.push(n8.encode(a, i));
        }
        return nL.xW(...n);
      }
      ((n8 || (n8 = {})).encode = function e(t, n, r = !1) {
        if ("address" === t) return nH(n), nL.Ho(n.toLowerCase(), 32 * !!r);
        if ("string" === t) return nL.sH(n);
        if ("bytes" === t) return n;
        if ("bool" === t) return nL.Ho(nL.xb(n), r ? 32 : 1);
        let a = t.match(n3);
        if (a) {
          let [e, t, i = "256"] = a,
            s = Number.parseInt(i) / 8;
          return nL.oB(n, { size: r ? 32 : s, signed: "int" === t });
        }
        let i = t.match(n5);
        if (i) {
          let [e, t] = i;
          if (Number.parseInt(t) !== (n.length - 2) / 2)
            throw new n9({ expectedSize: Number.parseInt(t), value: n });
          return nL.M7(n, 32 * !!r);
        }
        let s = t.match(n2);
        if (s && Array.isArray(n)) {
          let [t, r] = s,
            a = [];
          for (let t = 0; t < n.length; t++) a.push(e(r, n[t], !0));
          return 0 === a.length ? "0x" : nL.xW(...a);
        }
        throw new rn(t);
      }),
        nj.C,
        nj.C;
      class n7 extends nj.C {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(
            `Array length mismatch for type \`${n}\`. Expected: \`${e}\`. Given: \`${t}\`.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.ArrayLengthMismatchError",
            });
        }
      }
      class n9 extends nj.C {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${nL.Ej(
              t
            )}) does not match expected size (bytes${e}).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.BytesSizeMismatchError",
            });
        }
      }
      class re extends nj.C {
        constructor({ expectedLength: e, givenLength: t }) {
          super(`ABI encoding parameters/values length mismatch.
Expected length (parameters): ${e}
Given length (values): ${t}`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.LengthMismatchError",
            });
        }
      }
      class rt extends nj.C {
        constructor(e) {
          super(`Value \`${e}\` is not a valid array.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidArrayError",
            });
        }
      }
      class rn extends nj.C {
        constructor(e) {
          super(`Type \`${e}\` is not a valid ABI Type.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidTypeError",
            });
        }
      }
      function rr(e, t = {}) {
        return nZ(e, t);
      }
      var ra = n(81981),
        ri = n(67674);
      async function rs(e, t) {
        let {
            blockNumber: n,
            blockTag: r,
            calls: a,
            stateOverrides: s,
            traceAssetChanges: o,
            traceTransfers: c,
            validation: u,
          } = t,
          l = t.account ? (0, tU.J)(t.account) : void 0;
        if (o && !l)
          throw new t7.C(
            "`account` is required when `traceAssetChanges` is true"
          );
        let d = l
            ? (function (e, t) {
                let { bytecode: n, args: r } = t;
                return nL.xW(
                  n,
                  e.inputs?.length && r?.length ? n4(e.inputs, r) : "0x"
                );
              })(nZ("constructor(bytes, bytes)"), {
                bytecode: ri.LX,
                args: [
                  "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",
                  (function (e, ...t) {
                    let { overloads: n } = e,
                      r = n
                        ? (function (e, t, n) {
                            let r = (function (e, t, n) {
                              let r,
                                { args: a = [], prepare: i = !0 } = n ?? {},
                                s = nL.tf(t, { strict: !1 }),
                                o = e.filter((e) =>
                                  s
                                    ? "function" === e.type ||
                                      "error" === e.type
                                      ? nY(e) === nL.di(t, 0, 4)
                                      : "event" === e.type && nX(e) === t
                                    : "name" in e && e.name === t
                                );
                              if (0 === o.length) throw new n1({ name: t });
                              if (1 === o.length)
                                return {
                                  ...o[0],
                                  ...(i ? { hash: nX(o[0]) } : {}),
                                };
                              for (let e of o) {
                                if ("inputs" in e) {
                                  if (!a || 0 === a.length) {
                                    if (!e.inputs || 0 === e.inputs.length)
                                      return {
                                        ...e,
                                        ...(i ? { hash: nX(e) } : {}),
                                      };
                                    continue;
                                  }
                                  if (
                                    e.inputs &&
                                    0 !== e.inputs.length &&
                                    e.inputs.length === a.length &&
                                    a.every((t, n) => {
                                      let r = "inputs" in e && e.inputs[n];
                                      return (
                                        !!r &&
                                        (function e(t, n) {
                                          let r = typeof t,
                                            a = n.type;
                                          switch (a) {
                                            case "address":
                                              return nW(t, { strict: !1 });
                                            case "bool":
                                              return "boolean" === r;
                                            case "function":
                                            case "string":
                                              return "string" === r;
                                            default:
                                              if (
                                                "tuple" === a &&
                                                "components" in n
                                              )
                                                return Object.values(
                                                  n.components
                                                ).every((n, r) =>
                                                  e(Object.values(t)[r], n)
                                                );
                                              if (
                                                /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                                                  a
                                                )
                                              )
                                                return (
                                                  "number" === r ||
                                                  "bigint" === r
                                                );
                                              if (
                                                /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(
                                                  a
                                                )
                                              )
                                                return (
                                                  "string" === r ||
                                                  t instanceof Uint8Array
                                                );
                                              if (
                                                /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(
                                                  a
                                                )
                                              )
                                                return (
                                                  Array.isArray(t) &&
                                                  t.every((t) =>
                                                    e(t, {
                                                      ...n,
                                                      type: a.replace(
                                                        /(\[[0-9]{0,}\])$/,
                                                        ""
                                                      ),
                                                    })
                                                  )
                                                );
                                              return !1;
                                          }
                                        })(t, r)
                                      );
                                    })
                                  ) {
                                    if (r && "inputs" in r && r.inputs) {
                                      let t = (function e(t, n, r) {
                                        for (let a in t) {
                                          let i = t[a],
                                            s = n[a];
                                          if (
                                            "tuple" === i.type &&
                                            "tuple" === s.type &&
                                            "components" in i &&
                                            "components" in s
                                          )
                                            return e(
                                              i.components,
                                              s.components,
                                              r[a]
                                            );
                                          let o = [i.type, s.type];
                                          if (
                                            (o.includes("address") &&
                                              o.includes("bytes20")) ||
                                            (((o.includes("address") &&
                                              o.includes("string")) ||
                                              (o.includes("address") &&
                                                o.includes("bytes"))) &&
                                              nW(r[a], { strict: !1 }))
                                          )
                                            return o;
                                        }
                                      })(e.inputs, r.inputs, a);
                                      if (t)
                                        throw new n0(
                                          { abiItem: e, type: t[0] },
                                          { abiItem: r, type: t[1] }
                                        );
                                    }
                                    r = e;
                                  }
                                }
                              }
                              let c = (() => {
                                if (r) return r;
                                let [e, ...t] = o;
                                return { ...e, overloads: t };
                              })();
                              if (!c) throw new n1({ name: t });
                              return { ...c, ...(i ? { hash: nX(c) } : {}) };
                            })(e, t, n);
                            if ("function" !== r.type)
                              throw new n1({ name: t, type: "function" });
                            return r;
                          })([e, ...n], e.name, { args: t[0] })
                        : e,
                      a = nY(r),
                      i = t.length > 0 ? n4(r.inputs, t[0]) : void 0;
                    return i ? nL.xW(a, i) : a;
                  })(rr("function getBalance(address)"), [l.address]),
                ],
              })
            : void 0,
          f = o
            ? await Promise.all(
                t.calls.map(async (t) => {
                  if (!t.data && !t.abi) return;
                  let { accessList: n } = await tG(e, {
                    account: l.address,
                    ...t,
                    data: t.abi ? (0, i.p)(t) : t.data,
                  });
                  return n.map(({ address: e, storageKeys: t }) =>
                    t.length > 0 ? e : null
                  );
                })
              ).then((e) => e.flat().filter(Boolean))
            : [],
          p = await nS(e, {
            blockNumber: n,
            blockTag: r,
            blocks: [
              ...(o
                ? [
                    { calls: [{ data: d }], stateOverrides: s },
                    {
                      calls: f.map((e, t) => ({
                        abi: [
                          rr("function balanceOf(address) returns (uint256)"),
                        ],
                        functionName: "balanceOf",
                        args: [l.address],
                        to: e,
                        from: ra.Xd,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: ra.Xd, nonce: 0 }],
                    },
                  ]
                : []),
              {
                calls: [...a, {}].map((e) => ({ ...e, from: l?.address })),
                stateOverrides: s,
              },
              ...(o
                ? [
                    { calls: [{ data: d }] },
                    {
                      calls: f.map((e, t) => ({
                        abi: [
                          rr("function balanceOf(address) returns (uint256)"),
                        ],
                        functionName: "balanceOf",
                        args: [l.address],
                        to: e,
                        from: ra.Xd,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: ra.Xd, nonce: 0 }],
                    },
                    {
                      calls: f.map((e, t) => ({
                        to: e,
                        abi: [rr("function decimals() returns (uint256)")],
                        functionName: "decimals",
                        from: ra.Xd,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: ra.Xd, nonce: 0 }],
                    },
                    {
                      calls: f.map((e, t) => ({
                        to: e,
                        abi: [
                          rr("function tokenURI(uint256) returns (string)"),
                        ],
                        functionName: "tokenURI",
                        args: [0n],
                        from: ra.Xd,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: ra.Xd, nonce: 0 }],
                    },
                    {
                      calls: f.map((e, t) => ({
                        to: e,
                        abi: [rr("function symbol() returns (string)")],
                        functionName: "symbol",
                        from: ra.Xd,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: ra.Xd, nonce: 0 }],
                    },
                  ]
                : []),
            ],
            traceTransfers: c,
            validation: u,
          }),
          m = o ? p[2] : p[0],
          [h, y, , b, g, v, w, _] = o ? p : [],
          { calls: x, ...k } = m,
          A = x.slice(0, -1) ?? [],
          I = [...(h?.calls ?? []), ...(y?.calls ?? [])].map((e) =>
            "success" === e.status ? (0, tk.uU)(e.data) : null
          ),
          S = [...(b?.calls ?? []), ...(g?.calls ?? [])].map((e) =>
            "success" === e.status ? (0, tk.uU)(e.data) : null
          ),
          E = (v?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          T = (_?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          P = (w?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          C = [];
        for (let [e, t] of S.entries()) {
          let n = I[e];
          if ("bigint" != typeof t || "bigint" != typeof n) continue;
          let r = E[e - 1],
            a = T[e - 1],
            i = P[e - 1],
            s =
              0 === e
                ? { address: ra.m8, decimals: 18, symbol: "ETH" }
                : {
                    address: f[e - 1],
                    decimals: i || r ? Number(r ?? 1) : void 0,
                    symbol: a ?? void 0,
                  };
          C.some((e) => e.token.address === s.address) ||
            C.push({ token: s, value: { pre: n, post: t, diff: t - n } });
        }
        return { assetChanges: C, block: k, results: A };
      }
      var ro = n(87485),
        rc = n(10435),
        ru = n(95878),
        rl = n(8332),
        rd = n(23405),
        rf = n(83106),
        rp = n(79781);
      let rm =
        "0x6492649264926492649264926492649264926492649264926492649264926492";
      var rh = n(60510),
        ry = n(70335),
        rb = n(66956),
        rg = n(30761);
      function rv(e) {
        let { address: t, data: n, signature: r, to: a = "hex" } = e,
          i = (0, n_.aP)([
            (0, rb.h)(
              [{ type: "address" }, { type: "bytes" }, { type: "bytes" }],
              [t, n, r]
            ),
            rm,
          ]);
        return "hex" === a ? i : (0, rg.aT)(i);
      }
      var rw = n(66588);
      async function r_(e, t) {
        let {
            address: n,
            factory: r,
            factoryData: a,
            hash: o,
            signature: c,
            universalSignatureVerifierAddress: u = e.chain?.contracts
              ?.universalSignatureVerifier?.address,
            ...l
          } = t,
          d = (0, rp.q)(c)
            ? c
            : "object" == typeof c && "r" in c && "s" in c
            ? (0, rw.h)(c)
            : (0, s.My)(c),
          f = await (async () =>
            r || a
              ? (0, rh.iN)(d, -32) === rm
                ? d
                : rv({ address: r, data: a, signature: d })
              : d)();
        try {
          let t = u
              ? {
                  to: u,
                  data: (0, i.p)({
                    abi: rl._,
                    functionName: "isValidSig",
                    args: [n, o, f],
                  }),
                  ...l,
                }
              : {
                  data: (0, rd.m)({
                    abi: rl._,
                    args: [n, o, f],
                    bytecode: ri.nP,
                  }),
                  ...l,
                },
            { data: r } = await (0, tM.T)(e, tB.T, "call")(t);
          return (0, tk.Nx)(r ?? "0x0");
        } catch (e) {
          try {
            if (
              (0, tA.h)(
                (0, rf.b)(n),
                await (0, ry.x)({ hash: o, signature: c })
              )
            )
              return !0;
          } catch {}
          if (e instanceof ng.zX) return !1;
          throw e;
        }
      }
      async function rx(
        e,
        {
          address: t,
          message: n,
          factory: r,
          factoryData: a,
          signature: i,
          ...s
        }
      ) {
        return r_(e, {
          address: t,
          factory: r,
          factoryData: a,
          hash: (0, ru.A)(n),
          signature: i,
          ...s,
        });
      }
      var rk = n(46288);
      async function rA(e, t) {
        let {
          address: n,
          factory: r,
          factoryData: a,
          signature: i,
          message: s,
          primaryType: o,
          types: c,
          domain: u,
          ...l
        } = t;
        return r_(e, {
          address: n,
          factory: r,
          factoryData: a,
          hash: (0, rk.Zh)({ message: s, primaryType: o, types: c, domain: u }),
          signature: i,
          ...l,
        });
      }
      var rI = n(16403),
        rS = n(20512),
        rE = n(5794),
        rT = n(94102),
        rP = n(42217),
        rC = n(61378),
        rO = n(85552),
        rj = n(47298),
        rM = n(97068);
      let rL =
          /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
        rN =
          /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
      var rD = n(81734);
      async function rB(e, t) {
        let {
            address: n,
            domain: r,
            message: a,
            nonce: i,
            scheme: s,
            signature: o,
            time: c = new Date(),
            ...u
          } = t,
          l = (function (e) {
            let { scheme: t, statement: n, ...r } = e.match(rL)?.groups ?? {},
              {
                chainId: a,
                expirationTime: i,
                issuedAt: s,
                notBefore: o,
                requestId: c,
                ...u
              } = e.match(rN)?.groups ?? {},
              l = e.split("Resources:")[1]?.split("\n- ").slice(1);
            return {
              ...r,
              ...u,
              ...(a ? { chainId: Number(a) } : {}),
              ...(i ? { expirationTime: new Date(i) } : {}),
              ...(s ? { issuedAt: new Date(s) } : {}),
              ...(o ? { notBefore: new Date(o) } : {}),
              ...(c ? { requestId: c } : {}),
              ...(l ? { resources: l } : {}),
              ...(t ? { scheme: t } : {}),
              ...(n ? { statement: n } : {}),
            };
          })(a);
        if (
          !l.address ||
          !(function (e) {
            let {
              address: t,
              domain: n,
              message: r,
              nonce: a,
              scheme: i,
              time: s = new Date(),
            } = e;
            if (
              (n && r.domain !== n) ||
              (a && r.nonce !== a) ||
              (i && r.scheme !== i) ||
              (r.expirationTime && s >= r.expirationTime) ||
              (r.notBefore && s < r.notBefore)
            )
              return !1;
            try {
              if (
                !r.address ||
                !(0, rD.P)(r.address, { strict: !1 }) ||
                (t && !(0, tA.h)(r.address, t))
              )
                return !1;
            } catch {
              return !1;
            }
            return !0;
          })({
            address: n,
            domain: r,
            message: l,
            nonce: i,
            scheme: s,
            time: c,
          })
        )
          return !1;
        let d = (0, ru.A)(a);
        return r_(e, { address: l.address, hash: d, signature: o, ...u });
      }
      var rU = n(28661),
        rR = n(56997);
      function rq(e) {
        return {
          call: (t) => (0, tB.T)(e, t),
          createAccessList: (t) => tG(e, t),
          createBlockFilter: () => tH(e),
          createContractEventFilter: (t) => (0, tW.X)(e, t),
          createEventFilter: (t) => tV(e, t),
          createPendingTransactionFilter: () => tJ(e),
          estimateContractGas: (t) => (0, tQ.W)(e, t),
          estimateGas: (t) => (0, tY.Q)(e, t),
          getBalance: (t) => (0, t0.r)(e, t),
          getBlobBaseFee: () => t1(e),
          getBlock: (t) => (0, t2.g)(e, t),
          getBlockNumber: (t) => (0, t5.G)(e, t),
          getBlockTransactionCount: (t) => t3(e, t),
          getBytecode: (t) => (0, t4.Q)(e, t),
          getChainId: () => (0, t6.T)(e),
          getCode: (t) => (0, t4.Q)(e, t),
          getContractEvents: (t) => (0, t8.u)(e, t),
          getEip712Domain: (t) => ne(e, t),
          getEnsAddress: (t) => (0, tT.B)(e, t),
          getEnsAvatar: (t) => (0, tP.i)(e, t),
          getEnsName: (t) => (0, tC.s)(e, t),
          getEnsResolver: (t) => tN(e, t),
          getEnsText: (t) => (0, tD.m)(e, t),
          getFeeHistory: (t) => nn(e, t),
          estimateFeesPerGas: (t) => (0, tZ._)(e, t),
          getFilterChanges: (t) => (0, nr.I)(e, t),
          getFilterLogs: (t) => ns(e, t),
          getGasPrice: () => (0, no.L)(e),
          getLogs: (t) => (0, nc.a)(e, t),
          getProof: (t) => nu(e, t),
          estimateMaxPriorityFeePerGas: (t) => (0, tX.b)(e, t),
          getStorageAt: (t) => nl(e, t),
          getTransaction: (t) => (0, nd.x)(e, t),
          getTransactionConfirmations: (t) => nf(e, t),
          getTransactionCount: (t) => (0, np.y)(e, t),
          getTransactionReceipt: (t) => (0, nm.h)(e, t),
          multicall: (t) => (0, nh.C)(e, t),
          prepareTransactionRequest: (t) => (0, rU.ft)(e, t),
          readContract: (t) => (0, tL.J)(e, t),
          sendRawTransaction: (t) => (0, rR.L)(e, t),
          simulate: (t) => nS(e, t),
          simulateBlocks: (t) => nS(e, t),
          simulateCalls: (t) => rs(e, t),
          simulateContract: (t) => (0, ro.v)(e, t),
          verifyMessage: (t) => rx(e, t),
          verifySiweMessage: (t) => rB(e, t),
          verifyTypedData: (t) => rA(e, t),
          uninstallFilter: (t) => (0, rc.Z)(e, t),
          waitForTransactionReceipt: (t) => (0, rI.n)(e, t),
          watchBlocks: (t) => (0, rE.O)(e, t),
          watchBlockNumber: (t) => (0, rS.q)(e, t),
          watchContractEvent: (t) => (0, rT.q)(e, t),
          watchEvent: (t) =>
            (function (
              e,
              {
                address: t,
                args: n,
                batch: r = !0,
                event: a,
                events: i,
                fromBlock: s,
                onError: o,
                onLogs: c,
                poll: u,
                pollingInterval: l = e.pollingInterval,
                strict: d,
              }
            ) {
              let f,
                p,
                m =
                  void 0 !== u
                    ? u
                    : "bigint" == typeof s ||
                      ("webSocket" !== e.transport.type &&
                        "ipc" !== e.transport.type &&
                        ("fallback" !== e.transport.type ||
                          ("webSocket" !==
                            e.transport.transports[0].config.type &&
                            "ipc" !== e.transport.transports[0].config.type))),
                h = d ?? !1;
              return m
                ? (() => {
                    let u = (0, rO.A)(["watchEvent", t, n, r, e.uid, a, l, s]);
                    return (0, rP.lB)(u, { onLogs: c, onError: o }, (o) => {
                      let c, u;
                      void 0 !== s && (c = s - 1n);
                      let d = !1,
                        f = (0, rC.w)(
                          async () => {
                            if (!d) {
                              try {
                                u = await (0, tM.T)(
                                  e,
                                  tV,
                                  "createEventFilter"
                                )({
                                  address: t,
                                  args: n,
                                  event: a,
                                  events: i,
                                  strict: h,
                                  fromBlock: s,
                                });
                              } catch {}
                              d = !0;
                              return;
                            }
                            try {
                              let s;
                              if (u)
                                s = await (0, tM.T)(
                                  e,
                                  nr.I,
                                  "getFilterChanges"
                                )({ filter: u });
                              else {
                                let r = await (0, tM.T)(
                                  e,
                                  t5.G,
                                  "getBlockNumber"
                                )({});
                                (s =
                                  c && c !== r
                                    ? await (0, tM.T)(
                                        e,
                                        nc.a,
                                        "getLogs"
                                      )({
                                        address: t,
                                        args: n,
                                        event: a,
                                        events: i,
                                        fromBlock: c + 1n,
                                        toBlock: r,
                                      })
                                    : []),
                                  (c = r);
                              }
                              if (0 === s.length) return;
                              if (r) o.onLogs(s);
                              else for (let e of s) o.onLogs([e]);
                            } catch (e) {
                              u && e instanceof rj.Di && (d = !1),
                                o.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: l }
                        );
                      return async () => {
                        u &&
                          (await (0, tM.T)(
                            e,
                            rc.Z,
                            "uninstallFilter"
                          )({ filter: u })),
                          f();
                      };
                    });
                  })()
                : ((f = !0),
                  (p = () => (f = !1)),
                  (async () => {
                    try {
                      let r = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) =>
                                "webSocket" === e.config.type ||
                                "ipc" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        s = i ?? (a ? [a] : void 0),
                        u = [];
                      s &&
                        ((u = [
                          s.flatMap((e) =>
                            (0, tK.R)({ abi: [e], eventName: e.name, args: n })
                          ),
                        ]),
                        a && (u = u[0]));
                      let { unsubscribe: l } = await r.subscribe({
                        params: ["logs", { address: t, topics: u }],
                        onData(e) {
                          if (!f) return;
                          let t = e.result;
                          try {
                            let { eventName: e, args: n } = (0, rM.j)({
                                abi: s ?? [],
                                data: t.data,
                                topics: t.topics,
                                strict: h,
                              }),
                              r = (0, ni.e)(t, { args: n, eventName: e });
                            c([r]);
                          } catch (a) {
                            let e, n;
                            if (a instanceof nb.fo || a instanceof nb.l3) {
                              if (d) return;
                              (e = a.abiItem.name),
                                (n = a.abiItem.inputs?.some(
                                  (e) => !("name" in e && e.name)
                                ));
                            }
                            let r = (0, ni.e)(t, {
                              args: n ? [] : {},
                              eventName: e,
                            });
                            c([r]);
                          }
                        },
                        onError(e) {
                          o?.(e);
                        },
                      });
                      (p = l), f || p();
                    } catch (e) {
                      o?.(e);
                    }
                  })(),
                  () => p());
            })(e, t),
          watchPendingTransactions: (t) =>
            (function (
              e,
              {
                batch: t = !0,
                onError: n,
                onTransactions: r,
                poll: a,
                pollingInterval: i = e.pollingInterval,
              }
            ) {
              let s, o;
              return (
                void 0 !== a
                  ? a
                  : "webSocket" !== e.transport.type &&
                    "ipc" !== e.transport.type
              )
                ? (() => {
                    let a = (0, rO.A)([
                      "watchPendingTransactions",
                      e.uid,
                      t,
                      i,
                    ]);
                    return (0, rP.lB)(
                      a,
                      { onTransactions: r, onError: n },
                      (n) => {
                        let r,
                          a = (0, rC.w)(
                            async () => {
                              try {
                                if (!r)
                                  try {
                                    r = await (0, tM.T)(
                                      e,
                                      tJ,
                                      "createPendingTransactionFilter"
                                    )({});
                                    return;
                                  } catch (e) {
                                    throw (a(), e);
                                  }
                                let i = await (0, tM.T)(
                                  e,
                                  nr.I,
                                  "getFilterChanges"
                                )({ filter: r });
                                if (0 === i.length) return;
                                if (t) n.onTransactions(i);
                                else for (let e of i) n.onTransactions([e]);
                              } catch (e) {
                                n.onError?.(e);
                              }
                            },
                            { emitOnBegin: !0, interval: i }
                          );
                        return async () => {
                          r &&
                            (await (0, tM.T)(
                              e,
                              rc.Z,
                              "uninstallFilter"
                            )({ filter: r })),
                            a();
                        };
                      }
                    );
                  })()
                : ((s = !0),
                  (o = () => (s = !1)),
                  (async () => {
                    try {
                      let { unsubscribe: t } = await e.transport.subscribe({
                        params: ["newPendingTransactions"],
                        onData(e) {
                          if (!s) return;
                          let t = e.result;
                          r([t]);
                        },
                        onError(e) {
                          n?.(e);
                        },
                      });
                      (o = t), s || o();
                    } catch (e) {
                      n?.(e);
                    }
                  })(),
                  () => o());
            })(e, t),
        };
      }
      var rz = n(87240),
        rF = n(10250),
        rG = n(5565);
      class r$ extends t7.C {
        constructor({ cause: e }) {
          super("Smart Account is not deployed.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- No `factory`/`factoryData` or `initCode` properties are provided for Smart Account deployment.",
              "- An incorrect `sender` address is provided.",
            ],
            name: "AccountNotDeployedError",
          });
        }
      }
      Object.defineProperty(r$, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa20/,
      });
      class rH extends t7.C {
        constructor({ cause: e, data: t, message: n } = {}) {
          let r = n
            ?.replace("execution reverted: ", "")
            ?.replace("execution reverted", "");
          super(
            `Execution reverted ${
              r ? `with reason: ${r}` : "for an unknown reason"
            }.`,
            { cause: e, name: "ExecutionRevertedError" }
          ),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t);
        }
      }
      Object.defineProperty(rH, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32521,
      }),
        Object.defineProperty(rH, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class rW extends t7.C {
        constructor({ cause: e }) {
          super("Failed to send funds to beneficiary.", {
            cause: e,
            name: "FailedToSendToBeneficiaryError",
          });
        }
      }
      Object.defineProperty(rW, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa91/,
      });
      class rK extends t7.C {
        constructor({ cause: e }) {
          super("Gas value overflowed.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- one of the gas values exceeded 2**120 (uint120)",
            ].filter(Boolean),
            name: "GasValuesOverflowError",
          });
        }
      }
      Object.defineProperty(rK, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa94/,
      });
      class rV extends t7.C {
        constructor({ cause: e }) {
          super(
            "The `handleOps` function was called by the Bundler with a gas limit too low.",
            { cause: e, name: "HandleOpsOutOfGasError" }
          );
        }
      }
      Object.defineProperty(rV, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa95/,
      });
      class rJ extends t7.C {
        constructor({ cause: e, factory: t, factoryData: n, initCode: r }) {
          super("Failed to simulate deployment for Smart Account.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- Invalid `factory`/`factoryData` or `initCode` properties are present",
              "- Smart Account deployment execution ran out of gas (low `verificationGasLimit` value)",
              "- Smart Account deployment execution reverted with an error\n",
              t && `factory: ${t}`,
              n && `factoryData: ${n}`,
              r && `initCode: ${r}`,
            ].filter(Boolean),
            name: "InitCodeFailedError",
          });
        }
      }
      Object.defineProperty(rJ, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa13/,
      });
      class rQ extends t7.C {
        constructor({ cause: e, factory: t, factoryData: n, initCode: r }) {
          super(
            "Smart Account initialization implementation did not create an account.",
            {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "- `factory`/`factoryData` or `initCode` properties are invalid",
                "- Smart Account initialization implementation is incorrect\n",
                t && `factory: ${t}`,
                n && `factoryData: ${n}`,
                r && `initCode: ${r}`,
              ].filter(Boolean),
              name: "InitCodeMustCreateSenderError",
            }
          );
        }
      }
      Object.defineProperty(rQ, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa15/,
      });
      class rZ extends t7.C {
        constructor({
          cause: e,
          factory: t,
          factoryData: n,
          initCode: r,
          sender: a,
        }) {
          super(
            "Smart Account initialization implementation does not return the expected sender.",
            {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "Smart Account initialization implementation does not return a sender address\n",
                t && `factory: ${t}`,
                n && `factoryData: ${n}`,
                r && `initCode: ${r}`,
                a && `sender: ${a}`,
              ].filter(Boolean),
              name: "InitCodeMustReturnSenderError",
            }
          );
        }
      }
      Object.defineProperty(rZ, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa14/,
      });
      class rY extends t7.C {
        constructor({ cause: e }) {
          super(
            "Smart Account does not have sufficient funds to execute the User Operation.",
            {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "- the Smart Account does not have sufficient funds to cover the required prefund, or",
                "- a Paymaster was not provided",
              ].filter(Boolean),
              name: "InsufficientPrefundError",
            }
          );
        }
      }
      Object.defineProperty(rY, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa21/,
      });
      class rX extends t7.C {
        constructor({ cause: e }) {
          super(
            "Bundler attempted to call an invalid function on the EntryPoint.",
            { cause: e, name: "InternalCallOnlyError" }
          );
        }
      }
      Object.defineProperty(rX, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa92/,
      });
      class r0 extends t7.C {
        constructor({ cause: e }) {
          super(
            "Bundler used an invalid aggregator for handling aggregated User Operations.",
            { cause: e, name: "InvalidAggregatorError" }
          );
        }
      }
      Object.defineProperty(r0, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa96/,
      });
      class r1 extends t7.C {
        constructor({ cause: e, nonce: t }) {
          super("Invalid Smart Account nonce used for User Operation.", {
            cause: e,
            metaMessages: [t && `nonce: ${t}`].filter(Boolean),
            name: "InvalidAccountNonceError",
          });
        }
      }
      Object.defineProperty(r1, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa25/,
      });
      class r2 extends t7.C {
        constructor({ cause: e }) {
          super("Bundler has not set a beneficiary address.", {
            cause: e,
            name: "InvalidBeneficiaryError",
          });
        }
      }
      Object.defineProperty(r2, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa90/,
      });
      class r5 extends t7.C {
        constructor({ cause: e }) {
          super("Invalid fields set on User Operation.", {
            cause: e,
            name: "InvalidFieldsError",
          });
        }
      }
      Object.defineProperty(r5, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class r3 extends t7.C {
        constructor({ cause: e, paymasterAndData: t }) {
          super("Paymaster properties provided are invalid.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `paymasterAndData` property is of an incorrect length\n",
              t && `paymasterAndData: ${t}`,
            ].filter(Boolean),
            name: "InvalidPaymasterAndDataError",
          });
        }
      }
      Object.defineProperty(r3, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa93/,
      });
      class r6 extends t7.C {
        constructor({ cause: e }) {
          super("Paymaster deposit for the User Operation is too low.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the Paymaster has deposited less than the expected amount via the `deposit` function",
            ].filter(Boolean),
            name: "PaymasterDepositTooLowError",
          });
        }
      }
      Object.defineProperty(r6, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32508,
      }),
        Object.defineProperty(r6, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa31/,
        });
      class r4 extends t7.C {
        constructor({ cause: e }) {
          super(
            "The `validatePaymasterUserOp` function on the Paymaster reverted.",
            { cause: e, name: "PaymasterFunctionRevertedError" }
          );
        }
      }
      Object.defineProperty(r4, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa33/,
      });
      class r8 extends t7.C {
        constructor({ cause: e }) {
          super("The Paymaster contract has not been deployed.", {
            cause: e,
            name: "PaymasterNotDeployedError",
          });
        }
      }
      Object.defineProperty(r8, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa30/,
      });
      class r7 extends t7.C {
        constructor({ cause: e }) {
          super(
            "UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.",
            { cause: e, name: "PaymasterRateLimitError" }
          );
        }
      }
      Object.defineProperty(r7, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32504,
      });
      class r9 extends t7.C {
        constructor({ cause: e }) {
          super(
            "UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.",
            { cause: e, name: "PaymasterStakeTooLowError" }
          );
        }
      }
      Object.defineProperty(r9, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32505,
      });
      class ae extends t7.C {
        constructor({ cause: e }) {
          super("Paymaster `postOp` function reverted.", {
            cause: e,
            name: "PaymasterPostOpFunctionRevertedError",
          });
        }
      }
      Object.defineProperty(ae, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa50/,
      });
      class at extends t7.C {
        constructor({ cause: e, factory: t, factoryData: n, initCode: r }) {
          super("Smart Account has already been deployed.", {
            cause: e,
            metaMessages: [
              "Remove the following properties and try again:",
              t && "`factory`",
              n && "`factoryData`",
              r && "`initCode`",
            ].filter(Boolean),
            name: "SenderAlreadyConstructedError",
          });
        }
      }
      Object.defineProperty(at, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa10/,
      });
      class an extends t7.C {
        constructor({ cause: e }) {
          super(
            "UserOperation rejected because account signature check failed (or paymaster signature, if the paymaster uses its data as signature).",
            { cause: e, name: "SignatureCheckFailedError" }
          );
        }
      }
      Object.defineProperty(an, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32507,
      });
      class ar extends t7.C {
        constructor({ cause: e }) {
          super(
            "The `validateUserOp` function on the Smart Account reverted.",
            { cause: e, name: "SmartAccountFunctionRevertedError" }
          );
        }
      }
      Object.defineProperty(ar, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa23/,
      });
      class aa extends t7.C {
        constructor({ cause: e }) {
          super(
            "UserOperation rejected because account specified unsupported signature aggregator.",
            { cause: e, name: "UnsupportedSignatureAggregatorError" }
          );
        }
      }
      Object.defineProperty(aa, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32506,
      });
      class ai extends t7.C {
        constructor({ cause: e }) {
          super("User Operation expired.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `validAfter` or `validUntil` values returned from `validateUserOp` on the Smart Account are not satisfied",
            ].filter(Boolean),
            name: "UserOperationExpiredError",
          });
        }
      }
      Object.defineProperty(ai, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa22/,
      });
      class as extends t7.C {
        constructor({ cause: e }) {
          super("Paymaster for User Operation expired.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `validAfter` or `validUntil` values returned from `validatePaymasterUserOp` on the Paymaster are not satisfied",
            ].filter(Boolean),
            name: "UserOperationPaymasterExpiredError",
          });
        }
      }
      Object.defineProperty(as, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa32/,
      });
      class ao extends t7.C {
        constructor({ cause: e }) {
          super("Signature provided for the User Operation is invalid.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Smart Account",
            ].filter(Boolean),
            name: "UserOperationSignatureError",
          });
        }
      }
      Object.defineProperty(ao, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa24/,
      });
      class ac extends t7.C {
        constructor({ cause: e }) {
          super("Signature provided for the User Operation is invalid.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Paymaster",
            ].filter(Boolean),
            name: "UserOperationPaymasterSignatureError",
          });
        }
      }
      Object.defineProperty(ac, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa34/,
      });
      class au extends t7.C {
        constructor({ cause: e }) {
          super(
            "User Operation rejected by EntryPoint's `simulateValidation` during account creation or validation.",
            { cause: e, name: "UserOperationRejectedByEntryPointError" }
          );
        }
      }
      Object.defineProperty(au, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32500,
      });
      class al extends t7.C {
        constructor({ cause: e }) {
          super(
            "User Operation rejected by Paymaster's `validatePaymasterUserOp`.",
            { cause: e, name: "UserOperationRejectedByPaymasterError" }
          );
        }
      }
      Object.defineProperty(al, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32501,
      });
      class ad extends t7.C {
        constructor({ cause: e }) {
          super("User Operation rejected with op code validation error.", {
            cause: e,
            name: "UserOperationRejectedByOpCodeError",
          });
        }
      }
      Object.defineProperty(ad, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32502,
      });
      class af extends t7.C {
        constructor({ cause: e }) {
          super(
            "UserOperation out of time-range: either wallet or paymaster returned a time-range, and it is already expired (or will expire soon).",
            { cause: e, name: "UserOperationOutOfTimeRangeError" }
          );
        }
      }
      Object.defineProperty(af, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32503,
      });
      class ap extends t7.C {
        constructor({ cause: e }) {
          super(
            `An error occurred while executing user operation: ${e?.shortMessage}`,
            { cause: e, name: "UnknownBundlerError" }
          );
        }
      }
      class am extends t7.C {
        constructor({ cause: e }) {
          super("User Operation verification gas limit exceeded.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the gas used for verification exceeded the `verificationGasLimit`",
            ].filter(Boolean),
            name: "VerificationGasLimitExceededError",
          });
        }
      }
      Object.defineProperty(am, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa40/,
      });
      class ah extends t7.C {
        constructor({ cause: e }) {
          super("User Operation verification gas limit is too low.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `verificationGasLimit` is too low to verify the User Operation",
            ].filter(Boolean),
            name: "VerificationGasLimitTooLowError",
          });
        }
      }
      Object.defineProperty(ah, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa41/,
      });
      var ay = n(26769),
        ab = n(66105);
      class ag extends t7.C {
        constructor(
          e,
          {
            callData: t,
            callGasLimit: n,
            docsPath: r,
            factory: a,
            factoryData: i,
            initCode: s,
            maxFeePerGas: o,
            maxPriorityFeePerGas: c,
            nonce: u,
            paymaster: l,
            paymasterAndData: d,
            paymasterData: f,
            paymasterPostOpGasLimit: p,
            paymasterVerificationGasLimit: m,
            preVerificationGas: h,
            sender: y,
            signature: b,
            verificationGasLimit: g,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: r,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              (0, ay.aO)({
                callData: t,
                callGasLimit: n,
                factory: a,
                factoryData: i,
                initCode: s,
                maxFeePerGas: void 0 !== o && `${(0, ab.Q)(o)} gwei`,
                maxPriorityFeePerGas: void 0 !== c && `${(0, ab.Q)(c)} gwei`,
                nonce: u,
                paymaster: l,
                paymasterAndData: d,
                paymasterData: f,
                paymasterPostOpGasLimit: p,
                paymasterVerificationGasLimit: m,
                preVerificationGas: h,
                sender: y,
                signature: b,
                verificationGasLimit: g,
              }),
            ].filter(Boolean),
            name: "UserOperationExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class av extends t7.C {
        constructor({ hash: e }) {
          super(
            `User Operation receipt with hash "${e}" could not be found. The User Operation may not have been processed yet.`,
            { name: "UserOperationReceiptNotFoundError" }
          );
        }
      }
      class aw extends t7.C {
        constructor({ hash: e }) {
          super(`User Operation with hash "${e}" could not be found.`, {
            name: "UserOperationNotFoundError",
          });
        }
      }
      class a_ extends t7.C {
        constructor({ hash: e }) {
          super(
            `Timed out while waiting for User Operation with hash "${e}" to be confirmed.`,
            { name: "WaitForUserOperationReceiptTimeoutError" }
          );
        }
      }
      let ax = [rH, r5, r6, r7, r9, an, aa, af, au, al, ad];
      function ak(e, { calls: t, docsPath: n, ...r }) {
        return new ag(
          (() => {
            let n = (function (e, t) {
              let n = (e.details || "").toLowerCase();
              if (r$.message.test(n)) return new r$({ cause: e });
              if (rW.message.test(n)) return new rW({ cause: e });
              if (rK.message.test(n)) return new rK({ cause: e });
              if (rV.message.test(n)) return new rV({ cause: e });
              if (rJ.message.test(n))
                return new rJ({
                  cause: e,
                  factory: t.factory,
                  factoryData: t.factoryData,
                  initCode: t.initCode,
                });
              if (rQ.message.test(n))
                return new rQ({
                  cause: e,
                  factory: t.factory,
                  factoryData: t.factoryData,
                  initCode: t.initCode,
                });
              if (rZ.message.test(n))
                return new rZ({
                  cause: e,
                  factory: t.factory,
                  factoryData: t.factoryData,
                  initCode: t.initCode,
                  sender: t.sender,
                });
              if (rY.message.test(n)) return new rY({ cause: e });
              if (rX.message.test(n)) return new rX({ cause: e });
              if (r1.message.test(n))
                return new r1({ cause: e, nonce: t.nonce });
              if (r0.message.test(n)) return new r0({ cause: e });
              if (r2.message.test(n)) return new r2({ cause: e });
              if (r3.message.test(n)) return new r3({ cause: e });
              if (r6.message.test(n)) return new r6({ cause: e });
              if (r4.message.test(n)) return new r4({ cause: e });
              if (r8.message.test(n)) return new r8({ cause: e });
              if (ae.message.test(n)) return new ae({ cause: e });
              if (ar.message.test(n)) return new ar({ cause: e });
              if (at.message.test(n))
                return new at({
                  cause: e,
                  factory: t.factory,
                  factoryData: t.factoryData,
                  initCode: t.initCode,
                });
              if (ai.message.test(n)) return new ai({ cause: e });
              if (as.message.test(n)) return new as({ cause: e });
              if (ac.message.test(n)) return new ac({ cause: e });
              if (ao.message.test(n)) return new ao({ cause: e });
              if (am.message.test(n)) return new am({ cause: e });
              if (ah.message.test(n)) return new ah({ cause: e });
              let r = e.walk((e) => ax.some((t) => t.code === e.code));
              if (r) {
                if (r.code === rH.code)
                  return new rH({ cause: e, data: r.data, message: r.details });
                if (r.code === r5.code) return new r5({ cause: e });
                if (r.code === r6.code) return new r6({ cause: e });
                if (r.code === r7.code) return new r7({ cause: e });
                if (r.code === r9.code) return new r9({ cause: e });
                if (r.code === an.code) return new an({ cause: e });
                if (r.code === aa.code) return new aa({ cause: e });
                if (r.code === af.code) return new af({ cause: e });
                if (r.code === au.code) return new au({ cause: e });
                if (r.code === al.code) return new al({ cause: e });
                if (r.code === ad.code) return new ad({ cause: e });
              }
              return new ap({ cause: e });
            })(e, r);
            if (t && n instanceof rH) {
              let e,
                r =
                  (n.walk((t) => {
                    if (
                      "string" == typeof t.data ||
                      "string" == typeof t.data?.revertData ||
                      (!(t instanceof t7.C) && "string" == typeof t.message)
                    ) {
                      let n = (
                        t.data?.revertData ||
                        t.data ||
                        t.message
                      ).match?.(/(0x[A-Za-z0-9]*)/);
                      if (n) return (e = n[1]), !0;
                    }
                    return !1;
                  }),
                  e),
                a = t?.filter((e) => e.abi);
              if (r && a.length > 0)
                return (function (e) {
                  let { calls: t, revertData: n } = e,
                    {
                      abi: r,
                      functionName: a,
                      args: i,
                      to: s,
                    } = (() => {
                      let e = t?.filter((e) => !!e.abi);
                      if (1 === e.length) return e[0];
                      let r = e.filter((e) => {
                        try {
                          return !!(0, rG.W)({ abi: e.abi, data: n });
                        } catch {
                          return !1;
                        }
                      });
                      return 1 === r.length
                        ? r[0]
                        : {
                            abi: [],
                            functionName: e.reduce(
                              (e, t) =>
                                `${e ? `${e} | ` : ""}${t.functionName}`,
                              ""
                            ),
                            args: void 0,
                            to: void 0,
                          };
                    })(),
                    o =
                      "0x" === n
                        ? new ng.rR({ functionName: a })
                        : new ng.M({ abi: r, data: n, functionName: a });
                  return new ng.bG(o, {
                    abi: r,
                    args: i,
                    contractAddress: s,
                    functionName: a,
                  });
                })({ calls: a, revertData: r });
            }
            return n;
          })(),
          { docsPath: n, ...r }
        );
      }
      var aA = n(21169);
      function aI(e) {
        var t;
        let n = {};
        return (
          void 0 !== e.callData && (n.callData = e.callData),
          void 0 !== e.callGasLimit &&
            (n.callGasLimit = (0, s.cK)(e.callGasLimit)),
          void 0 !== e.factory && (n.factory = e.factory),
          void 0 !== e.factoryData && (n.factoryData = e.factoryData),
          void 0 !== e.initCode && (n.initCode = e.initCode),
          void 0 !== e.maxFeePerGas &&
            (n.maxFeePerGas = (0, s.cK)(e.maxFeePerGas)),
          void 0 !== e.maxPriorityFeePerGas &&
            (n.maxPriorityFeePerGas = (0, s.cK)(e.maxPriorityFeePerGas)),
          void 0 !== e.nonce && (n.nonce = (0, s.cK)(e.nonce)),
          void 0 !== e.paymaster && (n.paymaster = e.paymaster),
          void 0 !== e.paymasterAndData &&
            (n.paymasterAndData = e.paymasterAndData || "0x"),
          void 0 !== e.paymasterData && (n.paymasterData = e.paymasterData),
          void 0 !== e.paymasterPostOpGasLimit &&
            (n.paymasterPostOpGasLimit = (0, s.cK)(e.paymasterPostOpGasLimit)),
          void 0 !== e.paymasterVerificationGasLimit &&
            (n.paymasterVerificationGasLimit = (0, s.cK)(
              e.paymasterVerificationGasLimit
            )),
          void 0 !== e.preVerificationGas &&
            (n.preVerificationGas = (0, s.cK)(e.preVerificationGas)),
          void 0 !== e.sender && (n.sender = e.sender),
          void 0 !== e.signature && (n.signature = e.signature),
          void 0 !== e.verificationGasLimit &&
            (n.verificationGasLimit = (0, s.cK)(e.verificationGasLimit)),
          void 0 !== e.authorization &&
            (n.eip7702Auth = {
              address: (t = e.authorization).address,
              chainId: (0, s.cK)(t.chainId),
              nonce: (0, s.cK)(t.nonce),
              r: t.r
                ? (0, s.cK)(BigInt(t.r), { size: 32 })
                : (0, aA.eV)("0x", { size: 32 }),
              s: t.s
                ? (0, s.cK)(BigInt(t.s), { size: 32 })
                : (0, aA.eV)("0x", { size: 32 }),
              yParity: t.yParity
                ? (0, s.cK)(t.yParity, { size: 1 })
                : (0, aA.eV)("0x", { size: 32 }),
            }),
          n
        );
      }
      var aS = n(45965);
      async function aE(e, t) {
        let { chainId: n, entryPointAddress: r, context: a, ...i } = t,
          o = aI(i),
          {
            paymasterPostOpGasLimit: c,
            paymasterVerificationGasLimit: u,
            ...l
          } = await e.request({
            method: "pm_getPaymasterData",
            params: [
              {
                ...o,
                callGasLimit: o.callGasLimit ?? "0x0",
                verificationGasLimit: o.verificationGasLimit ?? "0x0",
                preVerificationGas: o.preVerificationGas ?? "0x0",
              },
              r,
              (0, s.cK)(n),
              a,
            ],
          });
        return {
          ...l,
          ...(c && { paymasterPostOpGasLimit: (0, tk.uU)(c) }),
          ...(u && { paymasterVerificationGasLimit: (0, tk.uU)(u) }),
        };
      }
      async function aT(e, t) {
        let { chainId: n, entryPointAddress: r, context: a, ...i } = t,
          o = aI(i),
          {
            paymasterPostOpGasLimit: c,
            paymasterVerificationGasLimit: u,
            ...l
          } = await e.request({
            method: "pm_getPaymasterStubData",
            params: [
              {
                ...o,
                callGasLimit: o.callGasLimit ?? "0x0",
                verificationGasLimit: o.verificationGasLimit ?? "0x0",
                preVerificationGas: o.preVerificationGas ?? "0x0",
              },
              r,
              (0, s.cK)(n),
              a,
            ],
          });
        return {
          ...l,
          ...(c && { paymasterPostOpGasLimit: (0, tk.uU)(c) }),
          ...(u && { paymasterVerificationGasLimit: (0, tk.uU)(u) }),
        };
      }
      let aP = [
        "factory",
        "fees",
        "gas",
        "paymaster",
        "nonce",
        "signature",
        "authorization",
      ];
      async function aC(e, t) {
        let n,
          { account: r = e.account, parameters: a = aP, stateOverride: s } = t;
        if (!r) throw new rF.T();
        let o = (0, tU.J)(r),
          c = t.paymaster ?? e?.paymaster,
          u = "string" == typeof c ? c : void 0,
          { getPaymasterStubData: l, getPaymasterData: d } = (() => {
            if (!0 === c)
              return {
                getPaymasterStubData: (t) =>
                  (0, tM.T)(e, aT, "getPaymasterStubData")(t),
                getPaymasterData: (t) =>
                  (0, tM.T)(e, aE, "getPaymasterData")(t),
              };
            if ("object" == typeof c) {
              let { getPaymasterStubData: e, getPaymasterData: t } = c;
              return {
                getPaymasterStubData: t && e ? e : t,
                getPaymasterData: t && e ? t : void 0,
              };
            }
            return { getPaymasterStubData: void 0, getPaymasterData: void 0 };
          })(),
          f = t.paymasterContext ? t.paymasterContext : e?.paymasterContext,
          p = { ...t, paymaster: u, sender: o.address },
          [m, h, y, b, g] = await Promise.all([
            (async () =>
              t.calls
                ? o.encodeCalls(
                    t.calls.map((e) =>
                      e.abi
                        ? { data: (0, i.p)(e), to: e.to, value: e.value }
                        : e
                    )
                  )
                : t.callData)(),
            (async () => {
              if (!a.includes("factory")) return;
              if (t.initCode) return { initCode: t.initCode };
              if (t.factory && t.factoryData)
                return { factory: t.factory, factoryData: t.factoryData };
              let { factory: e, factoryData: n } = await o.getFactoryArgs();
              return "0.6" === o.entryPoint.version
                ? { initCode: e && n ? (0, n_.xW)([e, n]) : void 0 }
                : { factory: e, factoryData: n };
            })(),
            (async () => {
              if (a.includes("fees")) {
                if (
                  "bigint" == typeof t.maxFeePerGas &&
                  "bigint" == typeof t.maxPriorityFeePerGas
                )
                  return p;
                if (e?.userOperation?.estimateFeesPerGas) {
                  let t = await e.userOperation.estimateFeesPerGas({
                    account: o,
                    bundlerClient: e,
                    userOperation: p,
                  });
                  return { ...p, ...t };
                }
                try {
                  let n = e.client ?? e,
                    r = await (0, tM.T)(
                      n,
                      tZ._,
                      "estimateFeesPerGas"
                    )({ chain: n.chain, type: "eip1559" });
                  return {
                    maxFeePerGas:
                      "bigint" == typeof t.maxFeePerGas
                        ? t.maxFeePerGas
                        : BigInt(2n * r.maxFeePerGas),
                    maxPriorityFeePerGas:
                      "bigint" == typeof t.maxPriorityFeePerGas
                        ? t.maxPriorityFeePerGas
                        : BigInt(2n * r.maxPriorityFeePerGas),
                  };
                } catch {
                  return;
                }
              }
            })(),
            (async () => {
              if (a.includes("nonce"))
                return "bigint" == typeof t.nonce ? t.nonce : o.getNonce();
            })(),
            (async () => {
              if (a.includes("authorization")) {
                if ("object" == typeof t.authorization) return t.authorization;
                if (o.authorization && !(await o.isDeployed()))
                  return {
                    ...(await (0, aS.h)(o.client, o.authorization)),
                    r: "0xfffffffffffffffffffffffffffffff000000000000000000000000000000000",
                    s: "0x7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    yParity: 1,
                  };
              }
            })(),
          ]);
        async function v() {
          return (
            n ||
            (e.chain
              ? e.chain.id
              : (n = await (0, tM.T)(e, t6.T, "getChainId")({})))
          );
        }
        void 0 !== m && (p.callData = m),
          void 0 !== h && (p = { ...p, ...h }),
          void 0 !== y && (p = { ...p, ...y }),
          void 0 !== b && (p.nonce = b),
          void 0 !== g && (p.authorization = g),
          a.includes("signature") &&
            (void 0 !== t.signature
              ? (p.signature = t.signature)
              : (p.signature = await o.getStubSignature(p))),
          "0.6" !== o.entryPoint.version || p.initCode || (p.initCode = "0x");
        let w = !1;
        if (a.includes("paymaster") && l && !u && !t.paymasterAndData) {
          let {
            isFinal: e = !1,
            sponsor: t,
            ...n
          } = await l({
            chainId: await v(),
            entryPointAddress: o.entryPoint.address,
            context: f,
            ...p,
          });
          (w = e), (p = { ...p, ...n });
        }
        if (
          ("0.6" !== o.entryPoint.version ||
            p.paymasterAndData ||
            (p.paymasterAndData = "0x"),
          a.includes("gas"))
        ) {
          if (o.userOperation?.estimateGas) {
            let e = await o.userOperation.estimateGas(p);
            p = { ...p, ...e };
          }
          if (
            void 0 === p.callGasLimit ||
            void 0 === p.preVerificationGas ||
            void 0 === p.verificationGasLimit ||
            (p.paymaster && void 0 === p.paymasterPostOpGasLimit) ||
            (p.paymaster && void 0 === p.paymasterVerificationGasLimit)
          ) {
            let t = await (0, tM.T)(
              e,
              aO,
              "estimateUserOperationGas"
            )({
              account: o,
              callGasLimit: 0n,
              preVerificationGas: 0n,
              verificationGasLimit: 0n,
              stateOverride: s,
              ...(p.paymaster
                ? {
                    paymasterPostOpGasLimit: 0n,
                    paymasterVerificationGasLimit: 0n,
                  }
                : {}),
              ...p,
            });
            p = {
              ...p,
              callGasLimit: p.callGasLimit ?? t.callGasLimit,
              preVerificationGas: p.preVerificationGas ?? t.preVerificationGas,
              verificationGasLimit:
                p.verificationGasLimit ?? t.verificationGasLimit,
              paymasterPostOpGasLimit:
                p.paymasterPostOpGasLimit ?? t.paymasterPostOpGasLimit,
              paymasterVerificationGasLimit:
                p.paymasterVerificationGasLimit ??
                t.paymasterVerificationGasLimit,
            };
          }
        }
        if (a.includes("paymaster") && d && !u && !t.paymasterAndData && !w) {
          let e = await d({
            chainId: await v(),
            entryPointAddress: o.entryPoint.address,
            context: f,
            ...p,
          });
          p = { ...p, ...e };
        }
        return (
          delete p.calls,
          delete p.parameters,
          delete p.paymasterContext,
          "string" != typeof p.paymaster && delete p.paymaster,
          p
        );
      }
      async function aO(e, t) {
        let {
          account: n = e.account,
          entryPointAddress: r,
          stateOverride: a,
        } = t;
        if (!n && !t.sender) throw new rF.T();
        let i = n ? (0, tU.J)(n) : void 0,
          s = (0, nI.yH)(a),
          o = i
            ? await (0, tM.T)(
                e,
                aC,
                "prepareUserOperation"
              )({
                ...t,
                parameters: [
                  "authorization",
                  "factory",
                  "nonce",
                  "paymaster",
                  "signature",
                ],
              })
            : t;
        try {
          let t = [aI(o), r ?? i?.entryPoint?.address];
          var c = await e.request({
            method: "eth_estimateUserOperationGas",
            params: s ? [...t, s] : [...t],
          });
          let n = {};
          return (
            c.callGasLimit && (n.callGasLimit = BigInt(c.callGasLimit)),
            c.preVerificationGas &&
              (n.preVerificationGas = BigInt(c.preVerificationGas)),
            c.verificationGasLimit &&
              (n.verificationGasLimit = BigInt(c.verificationGasLimit)),
            c.paymasterPostOpGasLimit &&
              (n.paymasterPostOpGasLimit = BigInt(c.paymasterPostOpGasLimit)),
            c.paymasterVerificationGasLimit &&
              (n.paymasterVerificationGasLimit = BigInt(
                c.paymasterVerificationGasLimit
              )),
            n
          );
        } catch (n) {
          let e = t.calls;
          throw ak(n, { ...o, ...(e ? { calls: e } : {}) });
        }
      }
      async function aj(e, { hash: t }) {
        let n = await e.request(
          { method: "eth_getUserOperationByHash", params: [t] },
          { dedupe: !0 }
        );
        if (!n) throw new aw({ hash: t });
        let {
          blockHash: r,
          blockNumber: a,
          entryPoint: i,
          transactionHash: s,
          userOperation: o,
        } = n;
        return {
          blockHash: r,
          blockNumber: BigInt(a),
          entryPoint: i,
          transactionHash: s,
          userOperation: (function (e) {
            let t = { ...e };
            return (
              e.callGasLimit && (t.callGasLimit = BigInt(e.callGasLimit)),
              e.maxFeePerGas && (t.maxFeePerGas = BigInt(e.maxFeePerGas)),
              e.maxPriorityFeePerGas &&
                (t.maxPriorityFeePerGas = BigInt(e.maxPriorityFeePerGas)),
              e.nonce && (t.nonce = BigInt(e.nonce)),
              e.paymasterPostOpGasLimit &&
                (t.paymasterPostOpGasLimit = BigInt(e.paymasterPostOpGasLimit)),
              e.paymasterVerificationGasLimit &&
                (t.paymasterVerificationGasLimit = BigInt(
                  e.paymasterVerificationGasLimit
                )),
              e.preVerificationGas &&
                (t.preVerificationGas = BigInt(e.preVerificationGas)),
              e.verificationGasLimit &&
                (t.verificationGasLimit = BigInt(e.verificationGasLimit)),
              t
            );
          })(o),
        };
      }
      var aM = n(66313);
      async function aL(e, { hash: t }) {
        let n = await e.request(
          { method: "eth_getUserOperationReceipt", params: [t] },
          { dedupe: !0 }
        );
        if (!n) throw new av({ hash: t });
        let r = { ...n };
        return (
          n.actualGasCost && (r.actualGasCost = BigInt(n.actualGasCost)),
          n.actualGasUsed && (r.actualGasUsed = BigInt(n.actualGasUsed)),
          n.logs && (r.logs = n.logs.map((e) => (0, ni.e)(e))),
          n.receipt && (r.receipt = (0, aM.uL)(r.receipt)),
          r
        );
      }
      async function aN(e, t) {
        let { account: n = e.account, entryPointAddress: r } = t;
        if (!n && !t.sender) throw new rF.T();
        let a = n ? (0, tU.J)(n) : void 0,
          i = a ? await (0, tM.T)(e, aC, "prepareUserOperation")(t) : t,
          s = t.signature || (await a?.signUserOperation?.(i)),
          o = aI({ ...i, signature: s });
        try {
          return await e.request(
            {
              method: "eth_sendUserOperation",
              params: [o, r ?? a?.entryPoint?.address],
            },
            { retryCount: 0 }
          );
        } catch (n) {
          let e = t.calls;
          throw ak(n, { ...i, ...(e ? { calls: e } : {}), signature: s });
        }
      }
      function aD(e) {
        return {
          estimateUserOperationGas: (t) => aO(e, t),
          getChainId: () => (0, t6.T)(e),
          getSupportedEntryPoints: () =>
            e.request({ method: "eth_supportedEntryPoints" }),
          getUserOperation: (t) => aj(e, t),
          getUserOperationReceipt: (t) => aL(e, t),
          prepareUserOperation: (t) => aC(e, t),
          sendUserOperation: (t) => aN(e, t),
          waitForUserOperationReceipt: (t) =>
            (function (e, t) {
              let {
                  hash: n,
                  pollingInterval: r = e.pollingInterval,
                  retryCount: a,
                  timeout: i = 12e4,
                } = t,
                s = 0,
                o = (0, rO.A)(["waitForUserOperationReceipt", e.uid, n]);
              return new Promise((t, c) => {
                let u = (0, rP.lB)(o, { resolve: t, reject: c }, (t) => {
                  let o = (e) => {
                      c(), e(), u();
                    },
                    c = (0, rC.w)(
                      async () => {
                        a && s >= a && o(() => t.reject(new a_({ hash: n })));
                        try {
                          let r = await (0, tM.T)(
                            e,
                            aL,
                            "getUserOperationReceipt"
                          )({ hash: n });
                          o(() => t.resolve(r));
                        } catch (e) {
                          "UserOperationReceiptNotFoundError" !== e.name &&
                            o(() => t.reject(e));
                        }
                        s++;
                      },
                      { emitOnBegin: !0, interval: r }
                    );
                  return (
                    i &&
                      setTimeout(
                        () => o(() => t.reject(new a_({ hash: n }))),
                        i
                      ),
                    c
                  );
                });
              });
            })(e, t),
        };
      }
      let aB = l(() => ({}));
      function aU(e) {
        e.forEach((e) => {
          var t, n, r, a, i, s, o, c;
          if (!e.rpcUrl) return;
          let u = (function (e) {
              let { key: t = "public", name: n = "Public Client" } = e;
              return (0, tE.U)({
                ...e,
                key: t,
                name: n,
                type: "publicClient",
              }).extend(rq);
            })({
              chain: (0, tS.x)({
                id: e.id,
                rpcUrls: { default: { http: [e.rpcUrl] } },
                name:
                  null != (n = null == (t = e.nativeCurrency) ? void 0 : t.name)
                    ? n
                    : "",
                nativeCurrency: {
                  name:
                    null !=
                    (a = null == (r = e.nativeCurrency) ? void 0 : r.name)
                      ? a
                      : "",
                  symbol:
                    null !=
                    (s = null == (i = e.nativeCurrency) ? void 0 : i.symbol)
                      ? s
                      : "",
                  decimals:
                    null !=
                    (c = null == (o = e.nativeCurrency) ? void 0 : o.decimal)
                      ? c
                      : 18,
                },
              }),
              transport: (0, rz.L)(e.rpcUrl),
            }),
            l = (function (e) {
              let {
                client: t,
                key: n = "bundler",
                name: r = "Bundler Client",
                paymaster: a,
                paymasterContext: i,
                transport: s,
                userOperation: o,
              } = e;
              return Object.assign(
                (0, tE.U)({
                  ...e,
                  chain: e.chain ?? t?.chain,
                  key: n,
                  name: r,
                  transport: s,
                  type: "bundlerClient",
                }),
                {
                  client: t,
                  paymaster: a,
                  paymasterContext: i,
                  userOperation: o,
                }
              ).extend(aD);
            })({ client: u, transport: (0, rz.L)(e.rpcUrl) });
          aB.setState({ [e.id]: { client: u, bundlerClient: l } });
        });
      }
      function aR(e) {
        var t;
        return null == (t = aB.getState()[e]) ? void 0 : t.client;
      }
      function aq(e) {
        if ("object" != typeof e || null === e)
          throw E.rpc.internal("sub account info is not an object");
        if (!("address" in e)) throw E.rpc.internal("sub account is invalid");
        if (
          "address" in e &&
          "string" == typeof e.address &&
          !(0, rD.P)(e.address)
        )
          throw E.rpc.internal("sub account address is invalid");
        if (
          "factory" in e &&
          "string" == typeof e.factory &&
          !(0, rD.P)(e.factory)
        )
          throw E.rpc.internal("sub account factory address is invalid");
        if (
          "factoryData" in e &&
          "string" == typeof e.factoryData &&
          !(0, rp.q)(e.factoryData)
        )
          throw E.rpc.internal("sub account factory data is invalid");
      }
      async function az() {
        return crypto.subtle.generateKey(
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          ["deriveKey"]
        );
      }
      async function aF(e, t) {
        return crypto.subtle.deriveKey(
          { name: "ECDH", public: t },
          e,
          { name: "AES-GCM", length: 256 },
          !1,
          ["encrypt", "decrypt"]
        );
      }
      async function aG(e, t) {
        let n = crypto.getRandomValues(new Uint8Array(12)),
          r = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: n },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: n, cipherText: r };
      }
      async function a$(e, { iv: t, cipherText: n }) {
        let r = await crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, n);
        return new TextDecoder().decode(r);
      }
      function aH(e) {
        switch (e) {
          case "public":
            return "spki";
          case "private":
            return "pkcs8";
        }
      }
      async function aW(e, t) {
        let n = aH(e);
        return ti(new Uint8Array(await crypto.subtle.exportKey(n, t)));
      }
      async function aK(e, t) {
        let n = aH(e),
          r = ts(t).buffer;
        return await crypto.subtle.importKey(
          n,
          new Uint8Array(r),
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          "private" === e ? ["deriveKey"] : []
        );
      }
      async function aV(e, t) {
        return aG(
          t,
          JSON.stringify(e, (e, t) =>
            t instanceof Error
              ? Object.assign(
                  Object.assign({}, t.code ? { code: t.code } : {}),
                  { message: t.message }
                )
              : t
          )
        );
      }
      async function aJ(e, t) {
        return JSON.parse(await a$(t, e));
      }
      var aQ = n(28782),
        aZ = n(61293),
        aY = n(92477);
      let aX = {
          p: BigInt(
            "0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"
          ),
          n: BigInt(
            "0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"
          ),
          h: BigInt(1),
          a: BigInt(
            "0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"
          ),
          b: BigInt(
            "0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"
          ),
          Gx: BigInt(
            "0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"
          ),
          Gy: BigInt(
            "0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
          ),
        },
        a0 = {
          p: BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"
          ),
          n: BigInt(
            "0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"
          ),
          h: BigInt(1),
          a: BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"
          ),
          b: BigInt(
            "0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"
          ),
          Gx: BigInt(
            "0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"
          ),
          Gy: BigInt(
            "0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f"
          ),
        },
        a1 = {
          p: BigInt(
            "0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
          ),
          n: BigInt(
            "0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"
          ),
          h: BigInt(1),
          a: BigInt(
            "0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"
          ),
          b: BigInt(
            "0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"
          ),
          Gx: BigInt(
            "0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"
          ),
          Gy: BigInt(
            "0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650"
          ),
        },
        a2 = (0, aY.D0)(aX.p),
        a5 = (0, aY.D0)(a0.p),
        a3 = (0, aY.D0)(a1.p),
        a6 = (0, aZ.s)({ ...aX, Fp: a2, lowS: !1 }, aQ.sc);
      (0, aZ.s)({ ...a0, Fp: a5, lowS: !1 }, aQ.qt),
        (0, aZ.s)(
          {
            ...a1,
            Fp: a3,
            lowS: !1,
            allowedPrivateKeyLengths: [130, 131, 132],
          },
          aQ.Zf
        );
      class a4 extends Error {
        constructor(e, t = {}) {
          let n = (() => {
              if (t.cause instanceof a4) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return t.cause?.message ? t.cause.message : t.details;
            })(),
            r = (t.cause instanceof a4 && t.cause.docsPath) || t.docsPath,
            a = `https://oxlib.sh${r ?? ""}`;
          super(
            [
              e || "An error occurred.",
              ...(t.metaMessages ? ["", ...t.metaMessages] : []),
              ...(n || r
                ? ["", n ? `Details: ${n}` : void 0, r ? `See: ${a}` : void 0]
                : []),
            ]
              .filter((e) => "string" == typeof e)
              .join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ox@0.1.1",
            }),
            (this.cause = t.cause),
            (this.details = n),
            (this.docs = a),
            (this.docsPath = r),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function e(t, n) {
            return n?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && t.cause
              ? e(t.cause, n)
              : n
              ? null
              : t;
          })(this, e);
        }
      }
      function a8(e, t, n) {
        return JSON.stringify(
          e,
          (e, n) =>
            "function" == typeof t
              ? t(e, n)
              : "bigint" == typeof n
              ? n.toString() + "#__bigint"
              : n,
          n
        );
      }
      function a7(e, t) {
        if (il(e) > t) throw new ih({ givenSize: il(e), maxSize: t });
      }
      function a9(e, t = {}) {
        let { dir: n, size: r = 32 } = t;
        if (0 === r) return e;
        let a = e.replace("0x", "");
        if (a.length > 2 * r)
          throw new ib({
            size: Math.ceil(a.length / 2),
            targetSize: r,
            type: "Hex",
          });
        return `0x${a["right" === n ? "padEnd" : "padStart"](2 * r, "0")}`;
      }
      let ie = new TextEncoder(),
        it = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function ir(...e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      function ia(e) {
        return e instanceof Uint8Array
          ? ii(e)
          : Array.isArray(e)
          ? ii(new Uint8Array(e))
          : e;
      }
      function ii(e, t = {}) {
        let n = "";
        for (let t = 0; t < e.length; t++) n += it[e[t]];
        let r = `0x${n}`;
        return "number" == typeof t.size ? (a7(r, t.size), ic(r, t.size)) : r;
      }
      function is(e, t = {}) {
        var n;
        let r,
          { signed: a, size: i } = t,
          s = BigInt(e);
        i
          ? (r = a
              ? (1n << (8n * BigInt(i) - 1n)) - 1n
              : 2n ** (8n * BigInt(i)) - 1n)
          : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
        let o = "bigint" == typeof r && a ? -r - 1n : 0;
        if ((r && s > r) || s < o) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new id({
            max: r ? `${r}${t}` : void 0,
            min: `${o}${t}`,
            signed: a,
            size: i,
            value: `${e}${t}`,
          });
        }
        let c = (a && s < 0 ? (1n << BigInt(8 * i)) + BigInt(s) : s).toString(
            16
          ),
          u = `0x${c}`;
        return i ? ((n = u), a9(n, { dir: "left", size: i })) : u;
      }
      function io(e, t = {}) {
        return ii(ie.encode(e), t);
      }
      function ic(e, t) {
        return a9(e, { dir: "right", size: t });
      }
      function iu(e, t, n, r = {}) {
        let { strict: a } = r;
        if ("number" == typeof t && t > 0 && t > il(e) - 1)
          throw new iy({ offset: t, position: "start", size: il(e) });
        let i = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
        return (
          a &&
            (function (e, t, n) {
              if (
                "number" == typeof t &&
                "number" == typeof n &&
                il(e) !== n - t
              )
                throw new iy({ offset: n, position: "end", size: il(e) });
            })(i, t, n),
          i
        );
      }
      function il(e) {
        return Math.ceil((e.length - 2) / 2);
      }
      class id extends a4 {
        constructor({ max: e, min: t, signed: n, size: r, value: a }) {
          super(
            `Number \`${a}\` is not in safe${r ? ` ${8 * r}-bit` : ""}${
              n ? " signed" : " unsigned"
            } integer range ${
              e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`
            }`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.IntegerOutOfRangeError",
            });
        }
      }
      class ip extends a4 {
        constructor(e) {
          super(
            `Value \`${
              "object" == typeof e ? a8(e) : e
            }\` of type \`${typeof e}\` is an invalid hex type.`,
            {
              metaMessages: [
                'Hex types must be represented as `"0x${string}"`.',
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexTypeError",
            });
        }
      }
      class im extends a4 {
        constructor(e) {
          super(`Value \`${e}\` is an invalid hex value.`, {
            metaMessages: [
              'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexValueError",
            });
        }
      }
      class ih extends a4 {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeOverflowError",
            });
        }
      }
      class iy extends a4 {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SliceOffsetOutOfBoundsError",
            });
        }
      }
      class ib extends a4 {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeExceedsPaddingSizeError",
            });
        }
      }
      let ig = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function iv(e) {
        return e >= ig.zero && e <= ig.nine
          ? e - ig.zero
          : e >= ig.A && e <= ig.F
          ? e - (ig.A - 10)
          : e >= ig.a && e <= ig.f
          ? e - (ig.a - 10)
          : void 0;
      }
      function iw(e) {
        return e instanceof Uint8Array
          ? e
          : "string" == typeof e
          ? ix(e)
          : i_(e);
      }
      function i_(e) {
        return e instanceof Uint8Array ? e : new Uint8Array(e);
      }
      function ix(e, t = {}) {
        let { size: n } = t,
          r = e;
        n && (a7(e, n), (r = ic(e, n)));
        let a = r.slice(2);
        a.length % 2 && (a = `0${a}`);
        let i = a.length / 2,
          s = new Uint8Array(i);
        for (let e = 0, t = 0; e < i; e++) {
          let n = iv(a.charCodeAt(t++)),
            r = iv(a.charCodeAt(t++));
          if (void 0 === n || void 0 === r)
            throw new a4(
              `Invalid byte sequence ("${a[t - 2]}${a[t - 1]}" in "${a}").`
            );
          s[e] = 16 * n + r;
        }
        return s;
      }
      function ik(e) {
        return e.length;
      }
      function iA(e, t, n, r = {}) {
        let { strict: a } = r;
        if ("number" == typeof t && t > 0 && t > ik(e) - 1)
          throw new iT({ offset: t, position: "start", size: ik(e) });
        let i = e.slice(t, n);
        return (
          a &&
            (function (e, t, n) {
              if (
                "number" == typeof t &&
                "number" == typeof n &&
                ik(e) !== n - t
              )
                throw new iT({ offset: n, position: "end", size: ik(e) });
            })(i, t, n),
          i
        );
      }
      function iI(e, t = {}) {
        let { size: n } = t;
        return (
          void 0 !== n &&
            (function (e, t) {
              if (ik(e) > t) throw new iE({ givenSize: ik(e), maxSize: t });
            })(e, n),
          (function (e, t = {}) {
            let { signed: n } = t;
            t.size && a7(e, t.size);
            let r = BigInt(e);
            if (!n) return r;
            let a = (1n << (8n * BigInt((e.length - 2) / 2))) - 1n;
            return r <= a >> 1n ? r : r - a - 1n;
          })(ii(e, t), t)
        );
      }
      class iS extends a4 {
        constructor(e) {
          super(
            `Value \`${
              "object" == typeof e ? a8(e) : e
            }\` of type \`${typeof e}\` is an invalid Bytes value.`,
            { metaMessages: ["Bytes values must be of type `Bytes`."] }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.InvalidBytesTypeError",
            });
        }
      }
      class iE extends a4 {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeOverflowError",
            });
        }
      }
      class iT extends a4 {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SliceOffsetOutOfBoundsError",
            });
        }
      }
      function iP(e, t = {}) {
        let { compressed: n } = t,
          { prefix: r, x: a, y: i } = e;
        if (!1 === n || ("bigint" == typeof a && "bigint" == typeof i)) {
          if (4 !== r) throw new iM({ prefix: r, cause: new iN() });
          return;
        }
        if (!0 === n || ("bigint" == typeof a && void 0 === i)) {
          if (3 !== r && 2 !== r) throw new iM({ prefix: r, cause: new iL() });
          return;
        }
        throw new ij({ publicKey: e });
      }
      function iC(e) {
        if (132 !== e.length && 130 !== e.length && 68 !== e.length)
          throw new iD({ publicKey: e });
        if (130 === e.length)
          return {
            prefix: 4,
            x: BigInt(iu(e, 0, 32)),
            y: BigInt(iu(e, 32, 64)),
          };
        if (132 === e.length) {
          let t = Number(iu(e, 0, 1));
          return {
            prefix: t,
            x: BigInt(iu(e, 1, 33)),
            y: BigInt(iu(e, 33, 65)),
          };
        }
        return { prefix: Number(iu(e, 0, 1)), x: BigInt(iu(e, 1, 33)) };
      }
      function iO(e, t = {}) {
        iP(e);
        let { prefix: n, x: r, y: a } = e,
          { includePrefix: i = !0 } = t;
        return ir(
          i ? is(n, { size: 1 }) : "0x",
          is(r, { size: 32 }),
          "bigint" == typeof a ? is(a, { size: 32 }) : "0x"
        );
      }
      class ij extends a4 {
        constructor({ publicKey: e }) {
          super(`Value \`${a8(e)}\` is not a valid public key.`, {
            metaMessages: [
              "Public key must contain:",
              "- an `x` and `prefix` value (compressed)",
              "- an `x`, `y`, and `prefix` value (uncompressed)",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidError",
            });
        }
      }
      class iM extends a4 {
        constructor({ prefix: e, cause: t }) {
          super(`Prefix "${e}" is invalid.`, { cause: t }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidPrefixError",
            });
        }
      }
      class iL extends a4 {
        constructor() {
          super("Prefix must be 2 or 3 for compressed public keys."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidCompressedPrefixError",
            });
        }
      }
      class iN extends a4 {
        constructor() {
          super("Prefix must be 4 for uncompressed public keys."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidUncompressedPrefixError",
            });
        }
      }
      class iD extends a4 {
        constructor({ publicKey: e }) {
          super(`Value \`${e}\` is an invalid public key size.`, {
            metaMessages: [
              "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
              `Received ${il(ia(e))} bytes.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidSerializedSizeError",
            });
        }
      }
      async function iB(e = {}) {
        let { extractable: t = !1 } = e,
          n = await globalThis.crypto.subtle.generateKey(
            { name: "ECDSA", namedCurve: "P-256" },
            t,
            ["sign", "verify"]
          ),
          r = (function (e) {
            let t = (() => {
              if (
                (function (e, t = {}) {
                  let { strict: n = !1 } = t;
                  try {
                    return (
                      !(function (e, t = {}) {
                        let { strict: n = !1 } = t;
                        if (!e || "string" != typeof e) throw new ip(e);
                        if (
                          (n && !/^0x[0-9a-fA-F]*$/.test(e)) ||
                          !e.startsWith("0x")
                        )
                          throw new im(e);
                      })(e, { strict: n }),
                      !0
                    );
                  } catch {
                    return !1;
                  }
                })(e)
              )
                return iC(e);
              if (
                (function (e) {
                  try {
                    if (
                      !(e instanceof Uint8Array) &&
                      (!e ||
                        "object" != typeof e ||
                        !("BYTES_PER_ELEMENT" in e) ||
                        1 !== e.BYTES_PER_ELEMENT ||
                        "Uint8Array" !== e.constructor.name)
                    )
                      throw new iS(e);
                    return !0;
                  } catch {
                    return !1;
                  }
                })(e)
              )
                return iC(ii(e));
              let { prefix: t, x: n, y: r } = e;
              return "bigint" == typeof n && "bigint" == typeof r
                ? { prefix: t ?? 4, x: n, y: r }
                : { prefix: t, x: n };
            })();
            return iP(t), t;
          })(
            new Uint8Array(
              await globalThis.crypto.subtle.exportKey("raw", n.publicKey)
            )
          );
        return { privateKey: n.privateKey, publicKey: r };
      }
      async function iU(e) {
        let { payload: t, privateKey: n } = e,
          r = i_(
            new Uint8Array(
              await globalThis.crypto.subtle.sign(
                { name: "ECDSA", hash: "SHA-256" },
                n,
                iw(t)
              )
            )
          ),
          a = iI(iA(r, 0, 32)),
          i = iI(iA(r, 32, 64));
        return i > a6.CURVE.n / 2n && (i = a6.CURVE.n - i), { r: a, s: i };
      }
      let iR = new TextDecoder(),
        iq = Object.fromEntries(
          Array.from(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          ).map((e, t) => [t, e.charCodeAt(0)])
        );
      function iz(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function iF(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function iG(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      function i$(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function iH(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      function iW(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e) throw Error("string expected");
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          iz(e),
          e
        );
      }
      ({
        ...Object.fromEntries(
          Array.from(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          ).map((e, t) => [e.charCodeAt(0), t])
        ),
        61: 0,
        45: 62,
        95: 63,
      });
      class iK {}
      class iV extends iK {
        constructor(e, t, n, r) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = r),
            (this.buffer = new Uint8Array(e)),
            (this.view = i$(this.buffer));
        }
        update(e) {
          iF(this), iz((e = iW(e)));
          let { view: t, buffer: n, blockLen: r } = this,
            a = e.length;
          for (let i = 0; i < a; ) {
            let s = Math.min(r - this.pos, a - i);
            if (s === r) {
              let t = i$(e);
              for (; r <= a - i; i += r) this.process(t, i);
              continue;
            }
            n.set(e.subarray(i, i + s), this.pos),
              (this.pos += s),
              (i += s),
              this.pos === r && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          iF(this);
          iz(e);
          let t = this.outputLen;
          if (e.length < t)
            throw Error(
              "digestInto() expects output buffer of length at least " + t
            );
          this.finished = !0;
          let { buffer: n, view: r, blockLen: a, isLE: i } = this,
            { pos: s } = this;
          (n[s++] = 128),
            iG(this.buffer.subarray(s)),
            this.padOffset > a - s && (this.process(r, 0), (s = 0));
          for (let e = s; e < a; e++) n[e] = 0;
          !(function (e, t, n, r) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, n, r);
            let a = BigInt(32),
              i = BigInt(0xffffffff),
              s = Number((n >> a) & i),
              o = Number(n & i),
              c = 4 * !!r,
              u = 4 * !r;
            e.setUint32(t + c, s, r), e.setUint32(t + u, o, r);
          })(r, a - 8, BigInt(8 * this.length), i),
            this.process(r, 0);
          let o = i$(e),
            c = this.outputLen;
          if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let u = c / 4,
            l = this.get();
          if (u > l.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < u; e++) o.setUint32(4 * e, l[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: n,
            length: r,
            finished: a,
            destroyed: i,
            pos: s,
          } = this;
          return (
            (e.destroyed = i),
            (e.finished = a),
            (e.length = r),
            (e.pos = s),
            r % t && e.buffer.set(n),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
      }
      let iJ = Uint32Array.from([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        iQ = BigInt(0x100000000 - 1),
        iZ = BigInt(32),
        iY = Uint32Array.from([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        iX = new Uint32Array(64);
      class i0 extends iV {
        constructor(e = 32) {
          super(64, e, 8, !1),
            (this.A = 0 | iJ[0]),
            (this.B = 0 | iJ[1]),
            (this.C = 0 | iJ[2]),
            (this.D = 0 | iJ[3]),
            (this.E = 0 | iJ[4]),
            (this.F = 0 | iJ[5]),
            (this.G = 0 | iJ[6]),
            (this.H = 0 | iJ[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: r, E: a, F: i, G: s, H: o } = this;
          return [e, t, n, r, a, i, s, o];
        }
        set(e, t, n, r, a, i, s, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | a),
            (this.F = 0 | i),
            (this.G = 0 | s),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) iX[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = iX[e - 15],
              n = iX[e - 2],
              r = iH(t, 7) ^ iH(t, 18) ^ (t >>> 3),
              a = iH(n, 17) ^ iH(n, 19) ^ (n >>> 10);
            iX[e] = (a + iX[e - 7] + r + iX[e - 16]) | 0;
          }
          let { A: n, B: r, C: a, D: i, E: s, F: o, G: c, H: u } = this;
          for (let e = 0; e < 64; e++) {
            var l, d, f, p;
            let t =
                (u +
                  (iH(s, 6) ^ iH(s, 11) ^ iH(s, 25)) +
                  (((l = s) & o) ^ (~l & c)) +
                  iY[e] +
                  iX[e]) |
                0,
              m =
                ((iH(n, 2) ^ iH(n, 13) ^ iH(n, 22)) +
                  (((d = n) & (f = r)) ^ (d & (p = a)) ^ (f & p))) |
                0;
            (u = c),
              (c = o),
              (o = s),
              (s = (i + t) | 0),
              (i = a),
              (a = r),
              (r = n),
              (n = (t + m) | 0);
          }
          (n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (a = (a + this.C) | 0),
            (i = (i + this.D) | 0),
            (s = (s + this.E) | 0),
            (o = (o + this.F) | 0),
            (c = (c + this.G) | 0),
            (u = (u + this.H) | 0),
            this.set(n, r, a, i, s, o, c, u);
        }
        roundClean() {
          iG(iX);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), iG(this.buffer);
        }
      }
      !(function (e, t = !1) {
        let n = e.length,
          r = new Uint32Array(n),
          a = new Uint32Array(n);
        for (let i = 0; i < n; i++) {
          let { h: n, l: s } = (function (e, t = !1) {
            return t
              ? { h: Number(e & iQ), l: Number((e >> iZ) & iQ) }
              : { h: 0 | Number((e >> iZ) & iQ), l: 0 | Number(e & iQ) };
          })(e[i], t);
          [r[i], a[i]] = [n, s];
        }
      })(
        [
          "0x428a2f98d728ae22",
          "0x7137449123ef65cd",
          "0xb5c0fbcfec4d3b2f",
          "0xe9b5dba58189dbbc",
          "0x3956c25bf348b538",
          "0x59f111f1b605d019",
          "0x923f82a4af194f9b",
          "0xab1c5ed5da6d8118",
          "0xd807aa98a3030242",
          "0x12835b0145706fbe",
          "0x243185be4ee4b28c",
          "0x550c7dc3d5ffb4e2",
          "0x72be5d74f27b896f",
          "0x80deb1fe3b1696b1",
          "0x9bdc06a725c71235",
          "0xc19bf174cf692694",
          "0xe49b69c19ef14ad2",
          "0xefbe4786384f25e3",
          "0x0fc19dc68b8cd5b5",
          "0x240ca1cc77ac9c65",
          "0x2de92c6f592b0275",
          "0x4a7484aa6ea6e483",
          "0x5cb0a9dcbd41fbd4",
          "0x76f988da831153b5",
          "0x983e5152ee66dfab",
          "0xa831c66d2db43210",
          "0xb00327c898fb213f",
          "0xbf597fc7beef0ee4",
          "0xc6e00bf33da88fc2",
          "0xd5a79147930aa725",
          "0x06ca6351e003826f",
          "0x142929670a0e6e70",
          "0x27b70a8546d22ffc",
          "0x2e1b21385c26c926",
          "0x4d2c6dfc5ac42aed",
          "0x53380d139d95b3df",
          "0x650a73548baf63de",
          "0x766a0abb3c77b2a8",
          "0x81c2c92e47edaee6",
          "0x92722c851482353b",
          "0xa2bfe8a14cf10364",
          "0xa81a664bbc423001",
          "0xc24b8b70d0f89791",
          "0xc76c51a30654be30",
          "0xd192e819d6ef5218",
          "0xd69906245565a910",
          "0xf40e35855771202a",
          "0x106aa07032bbd1b8",
          "0x19a4c116b8d2d0c8",
          "0x1e376c085141ab53",
          "0x2748774cdf8eeb99",
          "0x34b0bcb5e19b48a8",
          "0x391c0cb3c5c95a63",
          "0x4ed8aa4ae3418acb",
          "0x5b9cca4f7763e373",
          "0x682e6ff3d6b2b8a3",
          "0x748f82ee5defb2fc",
          "0x78a5636f43172f60",
          "0x84c87814a1f0ab72",
          "0x8cc702081a6439ec",
          "0x90befffa23631e28",
          "0xa4506cebde82bde9",
          "0xbef9a3f7b2c67915",
          "0xc67178f2e372532b",
          "0xca273eceea26619c",
          "0xd186b8c721c0c207",
          "0xeada7dd6cde0eb1e",
          "0xf57d4f7fee6ed178",
          "0x06f067aa72176fba",
          "0x0a637dc5a2c898a6",
          "0x113f9804bef90dae",
          "0x1b710b35131c471b",
          "0x28db77f523047d84",
          "0x32caab7b40c72493",
          "0x3c9ebe0a15c9bebc",
          "0x431d67c49c100d4c",
          "0x4cc5d4becb3e42b6",
          "0x597f299cfc657e2a",
          "0x5fcb6fab3ad6faec",
          "0x6c44198c4a475817",
        ].map((e) => BigInt(e))
      );
      let i1 = (function (e) {
        let t = (t) => e().update(iW(t)).digest(),
          n = e();
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = () => e()),
          t
        );
      })(() => new i0());
      function i2(e, t = {}) {
        let { as: n = "string" == typeof e ? "Hex" : "Bytes" } = t,
          r = i1(iw(e));
        return "Bytes" === n ? r : ii(r);
      }
      Uint8Array.from([
        105, 171, 180, 181, 160, 222, 75, 198, 42, 42, 32, 31, 141, 37, 186,
        233,
      ]);
      let i5 = 2n ** 256n - 1n;
      function i3(e) {
        if (130 !== e.length && 132 !== e.length)
          throw new i6({ signature: e });
        let t = BigInt(iu(e, 0, 32)),
          n = BigInt(iu(e, 32, 64)),
          r = (() => {
            let t = Number(`0x${e.slice(130)}`);
            if (!Number.isNaN(t))
              try {
                var n = t;
                if (0 === n || 27 === n) return 0;
                if (1 === n || 28 === n) return 1;
                if (n >= 35) return +(n % 2 == 0);
                throw new se({ value: n });
              } catch {
                throw new i9({ value: t });
              }
          })();
        return void 0 === r ? { r: t, s: n } : { r: t, s: n, yParity: r };
      }
      class i6 extends a4 {
        constructor({ signature: e }) {
          super(`Value \`${e}\` is an invalid signature size.`, {
            metaMessages: [
              "Expected: 64 bytes or 65 bytes.",
              `Received ${il(ia(e))} bytes.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidSerializedSizeError",
            });
        }
      }
      class i4 extends a4 {
        constructor({ signature: e }) {
          super(
            `Signature \`${a8(
              e
            )}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.MissingPropertiesError",
            });
        }
      }
      class i8 extends a4 {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidRError",
            });
        }
      }
      class i7 extends a4 {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidSError",
            });
        }
      }
      class i9 extends a4 {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidYParityError",
            });
        }
      }
      class se extends a4 {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidVError",
            });
        }
      }
      var st = n(50908);
      let sn = "activeId",
        sr = (function (e, t) {
          let n = "undefined" != typeof indexedDB ? (0, st.y$)(e, t) : void 0;
          return {
            getItem: async (e) => {
              let t = await (0, st.Jt)(e, n);
              return t || null;
            },
            removeItem: async (e) => (0, st.yH)(e, n),
            setItem: async (e, t) => (0, st.hZ)(e, t, n),
          };
        })("cbwsdk", "keys");
      async function sa() {
        let e = await iB({ extractable: !1 }),
          t = iu(iO(e.publicKey), 1);
        return await sr.setItem(t, e), await sr.setItem(sn, t), e;
      }
      async function si() {
        let e = await sr.getItem(sn);
        if (!e) return null;
        let t = await sr.getItem(e);
        return t || null;
      }
      async function ss() {
        let e = await si();
        if (!e) {
          let e = await sa(),
            t = iu(iO(e.publicKey), 1);
          return await sr.setItem(t, e), await sr.setItem(sn, t), e;
        }
        return e;
      }
      async function so() {
        let e = await ss(),
          t = iu(iO(e.publicKey), 1),
          n = async (t) => {
            let { payload: n, metadata: r } = (function (e) {
              let {
                  challenge: t,
                  crossOrigin: n,
                  extraClientData: r,
                  flag: a,
                  origin: i,
                  rpId: s,
                  signCount: o,
                  userVerification: c = "required",
                } = e,
                u = (function (e = {}) {
                  let {
                      flag: t = 5,
                      rpId: n = window.location.hostname,
                      signCount: r = 0,
                    } = e,
                    a = i2(io(n));
                  return ir(a, is(t, { size: 1 }), is(r, { size: 4 }));
                })({ flag: a, rpId: s, signCount: o }),
                l = (function (e) {
                  let {
                    challenge: t,
                    crossOrigin: n = !1,
                    extraClientData: r,
                    origin: a = window.location.origin,
                  } = e;
                  return JSON.stringify({
                    type: "webauthn.get",
                    challenge: (function (e, t = {}) {
                      return (function (e, t = {}) {
                        let { pad: n = !0, url: r = !1 } = t,
                          a = new Uint8Array(4 * Math.ceil(e.length / 3));
                        for (let t = 0, n = 0; n < e.length; t += 4, n += 3) {
                          let r =
                            (e[n] << 16) + (e[n + 1] << 8) + (0 | e[n + 2]);
                          (a[t] = iq[r >> 18]),
                            (a[t + 1] = iq[(r >> 12) & 63]),
                            (a[t + 2] = iq[(r >> 6) & 63]),
                            (a[t + 3] = iq[63 & r]);
                        }
                        let i = e.length % 3,
                          s = 4 * Math.floor(e.length / 3) + (i && i + 1),
                          o = iR.decode(new Uint8Array(a.buffer, 0, s));
                        return (
                          n && 1 === i && (o += "=="),
                          n && 2 === i && (o += "="),
                          r &&
                            (o = o.replaceAll("+", "-").replaceAll("/", "_")),
                          o
                        );
                      })(ix(e), t);
                    })(t, { url: !0, pad: !1 }),
                    origin: a,
                    crossOrigin: n,
                    ...r,
                  });
                })({
                  challenge: t,
                  crossOrigin: n,
                  extraClientData: r,
                  origin: i,
                }),
                d = i2(io(l)),
                f = l.indexOf('"challenge"'),
                p = l.indexOf('"type"');
              return {
                metadata: {
                  authenticatorData: u,
                  clientDataJSON: l,
                  challengeIndex: f,
                  typeIndex: p,
                  userVerificationRequired: "required" === c,
                },
                payload: ir(u, d),
              };
            })({
              challenge: t,
              origin: "https://keys.coinbase.com",
              userVerification: "preferred",
            });
            return {
              signature: (function (e) {
                !(function (e, t = {}) {
                  let { recovered: n } = t;
                  if (
                    void 0 === e.r ||
                    void 0 === e.s ||
                    (n && void 0 === e.yParity)
                  )
                    throw new i4({ signature: e });
                  if (e.r < 0n || e.r > i5) throw new i8({ value: e.r });
                  if (e.s < 0n || e.s > i5) throw new i7({ value: e.s });
                  if (
                    "number" == typeof e.yParity &&
                    0 !== e.yParity &&
                    1 !== e.yParity
                  )
                    throw new i9({ value: e.yParity });
                })(e);
                let t = e.r,
                  n = e.s;
                return ir(
                  is(t, { size: 32 }),
                  is(n, { size: 32 }),
                  "number" == typeof e.yParity
                    ? is(
                        (function (e) {
                          if (0 === e) return 27;
                          if (1 === e) return 28;
                          throw new i9({ value: e });
                        })(e.yParity),
                        { size: 1 }
                      )
                    : "0x"
                );
              })(await iU({ payload: n, privateKey: e.privateKey })),
              raw: {},
              webauthn: r,
            };
          };
        return {
          id: t,
          publicKey: t,
          sign: async ({ hash: e }) => n(e),
          signMessage: async ({ message: e }) => n((0, ru.A)(e)),
          signTypedData: async (e) => n((0, rk.Zh)(e)),
          type: "webAuthn",
        };
      }
      async function sc() {
        return { account: await so() };
      }
      let su = { storageKey: "ownPrivateKey", keyType: "private" },
        sl = { storageKey: "ownPublicKey", keyType: "public" },
        sd = { storageKey: "peerPublicKey", keyType: "public" };
      class sf {
        constructor() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null);
        }
        async getOwnPublicKey() {
          return await this.loadKeysIfNeeded(), this.ownPublicKey;
        }
        async getSharedSecret() {
          return await this.loadKeysIfNeeded(), this.sharedSecret;
        }
        async setPeerPublicKey(e) {
          (this.sharedSecret = null),
            (this.peerPublicKey = e),
            await this.storeKey(sd, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            h.keys.clear();
        }
        async generateKeyPair() {
          let e = await az();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(su, e.privateKey),
            await this.storeKey(sl, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey &&
            (this.ownPrivateKey = await this.loadKey(su)),
            null === this.ownPublicKey &&
              (this.ownPublicKey = await this.loadKey(sl)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey &&
              (this.peerPublicKey = await this.loadKey(sd)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await aF(
                this.ownPrivateKey,
                this.peerPublicKey
              ));
        }
        async loadKey(e) {
          let t = h.keys.get(e.storageKey);
          return t ? aK(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let n = await aW(e.keyType, t);
          h.keys.set(e.storageKey, n);
        }
      }
      var sp = n(11435);
      function sm(e, t) {
        if ("object" == typeof e && null !== e)
          return t
            .split(/[.[\]]+/)
            .filter(Boolean)
            .reduce((e, t) => {
              if ("object" == typeof e && null !== e) return e[t];
            }, e);
      }
      var sh = n(83564);
      function sy(e) {
        var t;
        if (!Array.isArray(e.params)) return null;
        switch (e.method) {
          case "personal_sign":
            return e.params[1];
          case "eth_signTypedData_v4":
            return e.params[0];
          case "eth_signTransaction":
          case "eth_sendTransaction":
          case "wallet_sendCalls":
            return null == (t = e.params[0]) ? void 0 : t.from;
          default:
            return null;
        }
      }
      function sb(e) {
        var t;
        if (
          !e ||
          !Array.isArray(e) ||
          !(null == (t = e[0]) ? void 0 : t.chainId) ||
          ("string" != typeof e[0].chainId && "number" != typeof e[0].chainId)
        )
          throw E.rpc.invalidParams();
      }
      function sg(e, t) {
        let n = Object.assign({}, e);
        if (t && e.method.startsWith("wallet_")) {
          let e = sm(n, "params.0.capabilities");
          if ((void 0 === e && (e = {}), "object" != typeof e))
            throw E.rpc.invalidParams();
          (e = Object.assign(Object.assign({}, t), e)),
            n.params &&
              Array.isArray(n.params) &&
              (n.params[0] = Object.assign(Object.assign({}, n.params[0]), {
                capabilities: e,
              }));
        }
        return n;
      }
      async function sv() {
        var e;
        let t = null != (e = h.subAccountsConfig.get()) ? e : {},
          n = {};
        if (t.enableAutoSubAccounts) {
          let { account: e } = t.toOwnerAccount
            ? await t.toOwnerAccount()
            : await sc();
          if (!e) throw E.provider.unauthorized("No owner account found");
          n.addSubAccount = {
            account: {
              type: "create",
              keys: [
                {
                  type: e.address ? "address" : "webauthn-p256",
                  publicKey: e.address || e.publicKey,
                },
              ],
            },
          };
        }
        h.subAccountsConfig.set({ capabilities: n });
      }
      async function sw({ client: e, id: t }) {
        var n;
        let r = await (0, sh.c)(e, { id: t });
        if ("success" === r.status)
          return null == (n = r.receipts) ? void 0 : n[0].transactionHash;
        throw E.rpc.internal("failed to send transaction");
      }
      function s_({ calls: e, from: t, chainId: n, capabilities: r }) {
        let a = m.get().paymasterUrls,
          i = {
            method: "wallet_sendCalls",
            params: [
              {
                version: "1.0",
                calls: e,
                chainId: (0, s.cK)(n),
                from: t,
                atomicRequired: !0,
                capabilities: r,
              },
            ],
          };
        return (
          (null == a ? void 0 : a[n]) &&
            (i = sg(i, {
              paymasterService: { url: null == a ? void 0 : a[n] },
            })),
          i
        );
      }
      async function sx() {
        let e = e3();
        return await new Promise((t) => {
          H({ snackbarContext: "sub_account_insufficient_balance" }),
            e.presentItem({
              autoExpand: !0,
              message: "Insufficient spend permission. Choose how to proceed:",
              menuItems: [
                {
                  isRed: !1,
                  info: "Create new Spend Permission",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    W({
                      snackbarContext: "sub_account_insufficient_balance",
                      snackbarAction: "create_permission",
                    }),
                      e.clear(),
                      t("update_permission");
                  },
                },
                {
                  isRed: !1,
                  info: "Continue in Popup",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    W({
                      snackbarContext: "sub_account_insufficient_balance",
                      snackbarAction: "continue_in_popup",
                    }),
                      e.clear(),
                      t("continue_popup");
                  },
                },
                {
                  isRed: !0,
                  info: "Cancel",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    W({
                      snackbarContext: "sub_account_insufficient_balance",
                      snackbarAction: "cancel",
                    }),
                      e.clear(),
                      t("cancel");
                  },
                },
              ],
            });
        });
      }
      function sk(e, t) {
        let n = e.filter((e) => e !== t);
        return [t, ...n];
      }
      function sA(e, t) {
        return [...e.filter((e) => e !== t), t];
      }
      async function sI() {
        let e = h.spendPermissions.get(),
          t = h.subAccounts.get(),
          n = h.account.get().accounts;
        return n
          ? {
              accounts:
                null == n
                  ? void 0
                  : n.map((n) => ({
                      address: n,
                      capabilities: {
                        subAccounts: t ? [t] : void 0,
                        spendPermissions:
                          e.length > 0 ? { permissions: e } : void 0,
                      },
                    })),
            }
          : null;
      }
      var sS = n(9036);
      function sE(e) {
        return btoa(String.fromCharCode(...new Uint8Array(e)))
          .replaceAll("+", "-")
          .replaceAll("/", "_")
          .replace(/=+$/, "");
      }
      var sT = n(6702),
        sP = n(15465),
        sC = n(66634),
        sO = n(7905),
        sj = n(30026);
      let sM = [
        {
          inputs: [
            { name: "preOpGas", type: "uint256" },
            { name: "paid", type: "uint256" },
            { name: "validAfter", type: "uint48" },
            { name: "validUntil", type: "uint48" },
            { name: "targetSuccess", type: "bool" },
            { name: "targetResult", type: "bytes" },
          ],
          name: "ExecutionResult",
          type: "error",
        },
        {
          inputs: [
            { name: "opIndex", type: "uint256" },
            { name: "reason", type: "string" },
          ],
          name: "FailedOp",
          type: "error",
        },
        {
          inputs: [{ name: "sender", type: "address" }],
          name: "SenderAddressResult",
          type: "error",
        },
        {
          inputs: [{ name: "aggregator", type: "address" }],
          name: "SignatureValidationFailed",
          type: "error",
        },
        {
          inputs: [
            {
              components: [
                { name: "preOpGas", type: "uint256" },
                { name: "prefund", type: "uint256" },
                { name: "sigFailed", type: "bool" },
                { name: "validAfter", type: "uint48" },
                { name: "validUntil", type: "uint48" },
                { name: "paymasterContext", type: "bytes" },
              ],
              name: "returnInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "senderInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "factoryInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "paymasterInfo",
              type: "tuple",
            },
          ],
          name: "ValidationResult",
          type: "error",
        },
        {
          inputs: [
            {
              components: [
                { name: "preOpGas", type: "uint256" },
                { name: "prefund", type: "uint256" },
                { name: "sigFailed", type: "bool" },
                { name: "validAfter", type: "uint48" },
                { name: "validUntil", type: "uint48" },
                { name: "paymasterContext", type: "bytes" },
              ],
              name: "returnInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "senderInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "factoryInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "paymasterInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "aggregator", type: "address" },
                {
                  components: [
                    { name: "stake", type: "uint256" },
                    { name: "unstakeDelaySec", type: "uint256" },
                  ],
                  name: "stakeInfo",
                  type: "tuple",
                },
              ],
              name: "aggregatorInfo",
              type: "tuple",
            },
          ],
          name: "ValidationResultWithAggregation",
          type: "error",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "userOpHash", type: "bytes32" },
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !1, name: "factory", type: "address" },
            { indexed: !1, name: "paymaster", type: "address" },
          ],
          name: "AccountDeployed",
          type: "event",
        },
        { anonymous: !1, inputs: [], name: "BeforeExecution", type: "event" },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "totalDeposit", type: "uint256" },
          ],
          name: "Deposited",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [{ indexed: !0, name: "aggregator", type: "address" }],
          name: "SignatureAggregatorChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "totalStaked", type: "uint256" },
            { indexed: !1, name: "unstakeDelaySec", type: "uint256" },
          ],
          name: "StakeLocked",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "withdrawTime", type: "uint256" },
          ],
          name: "StakeUnlocked",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "withdrawAddress", type: "address" },
            { indexed: !1, name: "amount", type: "uint256" },
          ],
          name: "StakeWithdrawn",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "userOpHash", type: "bytes32" },
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !0, name: "paymaster", type: "address" },
            { indexed: !1, name: "nonce", type: "uint256" },
            { indexed: !1, name: "success", type: "bool" },
            { indexed: !1, name: "actualGasCost", type: "uint256" },
            { indexed: !1, name: "actualGasUsed", type: "uint256" },
          ],
          name: "UserOperationEvent",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "userOpHash", type: "bytes32" },
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !1, name: "nonce", type: "uint256" },
            { indexed: !1, name: "revertReason", type: "bytes" },
          ],
          name: "UserOperationRevertReason",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "withdrawAddress", type: "address" },
            { indexed: !1, name: "amount", type: "uint256" },
          ],
          name: "Withdrawn",
          type: "event",
        },
        {
          inputs: [],
          name: "SIG_VALIDATION_FAILED",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "initCode", type: "bytes" },
            { name: "sender", type: "address" },
            { name: "paymasterAndData", type: "bytes" },
          ],
          name: "_validateSenderAndPaymaster",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "unstakeDelaySec", type: "uint32" }],
          name: "addStake",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "depositTo",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ name: "", type: "address" }],
          name: "deposits",
          outputs: [
            { name: "deposit", type: "uint112" },
            { name: "staked", type: "bool" },
            { name: "stake", type: "uint112" },
            { name: "unstakeDelaySec", type: "uint32" },
            { name: "withdrawTime", type: "uint48" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "getDepositInfo",
          outputs: [
            {
              components: [
                { name: "deposit", type: "uint112" },
                { name: "staked", type: "bool" },
                { name: "stake", type: "uint112" },
                { name: "unstakeDelaySec", type: "uint32" },
                { name: "withdrawTime", type: "uint48" },
              ],
              name: "info",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "sender", type: "address" },
            { name: "key", type: "uint192" },
          ],
          name: "getNonce",
          outputs: [{ name: "nonce", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "initCode", type: "bytes" }],
          name: "getSenderAddress",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "userOp",
              type: "tuple",
            },
          ],
          name: "getUserOpHash",
          outputs: [{ name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  components: [
                    { name: "sender", type: "address" },
                    { name: "nonce", type: "uint256" },
                    { name: "initCode", type: "bytes" },
                    { name: "callData", type: "bytes" },
                    { name: "callGasLimit", type: "uint256" },
                    { name: "verificationGasLimit", type: "uint256" },
                    { name: "preVerificationGas", type: "uint256" },
                    { name: "maxFeePerGas", type: "uint256" },
                    { name: "maxPriorityFeePerGas", type: "uint256" },
                    { name: "paymasterAndData", type: "bytes" },
                    { name: "signature", type: "bytes" },
                  ],
                  name: "userOps",
                  type: "tuple[]",
                },
                { name: "aggregator", type: "address" },
                { name: "signature", type: "bytes" },
              ],
              name: "opsPerAggregator",
              type: "tuple[]",
            },
            { name: "beneficiary", type: "address" },
          ],
          name: "handleAggregatedOps",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "ops",
              type: "tuple[]",
            },
            { name: "beneficiary", type: "address" },
          ],
          name: "handleOps",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ name: "key", type: "uint192" }],
          name: "incrementNonce",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "callData", type: "bytes" },
            {
              components: [
                {
                  components: [
                    { name: "sender", type: "address" },
                    { name: "nonce", type: "uint256" },
                    { name: "callGasLimit", type: "uint256" },
                    { name: "verificationGasLimit", type: "uint256" },
                    { name: "preVerificationGas", type: "uint256" },
                    { name: "paymaster", type: "address" },
                    { name: "maxFeePerGas", type: "uint256" },
                    { name: "maxPriorityFeePerGas", type: "uint256" },
                  ],
                  name: "mUserOp",
                  type: "tuple",
                },
                { name: "userOpHash", type: "bytes32" },
                { name: "prefund", type: "uint256" },
                { name: "contextOffset", type: "uint256" },
                { name: "preOpGas", type: "uint256" },
              ],
              name: "opInfo",
              type: "tuple",
            },
            { name: "context", type: "bytes" },
          ],
          name: "innerHandleOp",
          outputs: [{ name: "actualGasCost", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "", type: "address" },
            { name: "", type: "uint192" },
          ],
          name: "nonceSequenceNumber",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "op",
              type: "tuple",
            },
            { name: "target", type: "address" },
            { name: "targetCallData", type: "bytes" },
          ],
          name: "simulateHandleOp",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "userOp",
              type: "tuple",
            },
          ],
          name: "simulateValidation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "unlockStake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ name: "withdrawAddress", type: "address" }],
          name: "withdrawStake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "withdrawAddress", type: "address" },
            { name: "withdrawAmount", type: "uint256" },
          ],
          name: "withdrawTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        { stateMutability: "payable", type: "receive" },
      ];
      var sL = n(88398),
        sN = n(31960);
      async function sD(e) {
        let {
            extend: t,
            nonceKeyManager: n = (function (e) {
              let { source: t } = e,
                n = new Map(),
                r = new sN.A(8192),
                a = new Map(),
                i = ({ address: e, chainId: t }) => `${e}.${t}`;
              return {
                async consume({ address: e, chainId: n, client: a }) {
                  let s = i({ address: e, chainId: n }),
                    o = this.get({ address: e, chainId: n, client: a });
                  this.increment({ address: e, chainId: n });
                  let c = await o;
                  return (
                    await t.set({ address: e, chainId: n }, c), r.set(s, c), c
                  );
                },
                async increment({ address: e, chainId: t }) {
                  let r = i({ address: e, chainId: t }),
                    a = n.get(r) ?? 0;
                  n.set(r, a + 1);
                },
                async get({ address: e, chainId: s, client: o }) {
                  let c = i({ address: e, chainId: s }),
                    u = a.get(c);
                  return (
                    u ||
                      ((u = (async () => {
                        try {
                          let n = await t.get({
                              address: e,
                              chainId: s,
                              client: o,
                            }),
                            a = r.get(c) ?? 0;
                          if (a > 0 && n <= a) return a + 1;
                          return r.delete(c), n;
                        } finally {
                          this.reset({ address: e, chainId: s });
                        }
                      })()),
                      a.set(c, u)),
                    (n.get(c) ?? 0) + (await u)
                  );
                },
                reset({ address: e, chainId: t }) {
                  let r = i({ address: e, chainId: t });
                  n.delete(r), a.delete(r);
                },
              };
            })({ source: { get: () => Date.now(), set() {} } }),
            ...r
          } = e,
          a = !1,
          i = await e.getAddress();
        return {
          ...t,
          ...r,
          address: i,
          async getFactoryArgs() {
            return "isDeployed" in this && (await this.isDeployed())
              ? { factory: void 0, factoryData: void 0 }
              : e.getFactoryArgs();
          },
          async getNonce(t) {
            let r =
              t?.key ??
              BigInt(
                await n.consume({
                  address: i,
                  chainId: e.client.chain.id,
                  client: e.client,
                })
              );
            return e.getNonce
              ? await e.getNonce({ ...t, key: r })
              : await (0, tL.J)(e.client, {
                  abi: (0, sL.U)([
                    "function getNonce(address, uint192) pure returns (uint256)",
                  ]),
                  address: e.entryPoint.address,
                  functionName: "getNonce",
                  args: [i, r],
                });
          },
          isDeployed: async () =>
            !!a ||
            (a = !!(await (0, tM.T)(
              e.client,
              t4.Q,
              "getCode"
            )({ address: i }))),
          ...(e.sign
            ? {
                async sign(t) {
                  let [{ factory: n, factoryData: r }, a] = await Promise.all([
                    this.getFactoryArgs(),
                    e.sign(t),
                  ]);
                  return n && r ? rv({ address: n, data: r, signature: a }) : a;
                },
              }
            : {}),
          async signMessage(t) {
            let [{ factory: n, factoryData: r }, a] = await Promise.all([
              this.getFactoryArgs(),
              e.signMessage(t),
            ]);
            return n && r && "0x7702" !== n
              ? rv({ address: n, data: r, signature: a })
              : a;
          },
          async signTypedData(t) {
            let [{ factory: n, factoryData: r }, a] = await Promise.all([
              this.getFactoryArgs(),
              e.signTypedData(t),
            ]);
            return n && r && "0x7702" !== n
              ? rv({ address: n, data: r, signature: a })
              : a;
          },
          type: "smart",
        };
      }
      function sB(e) {
        let { authorization: t, factory: n, factoryData: r } = e;
        if (
          "0x7702" === n ||
          "0x7702000000000000000000000000000000000000" === n
        ) {
          if (!t) return "0x7702000000000000000000000000000000000000";
          let e = t.address;
          return (0, n_.xW)([e, r ?? "0x"]);
        }
        return n ? (0, n_.xW)([n, r ?? "0x"]) : "0x";
      }
      function sU(e) {
        let {
            callGasLimit: t,
            callData: n,
            maxPriorityFeePerGas: r,
            maxFeePerGas: a,
            paymaster: i,
            paymasterData: o,
            paymasterPostOpGasLimit: c,
            paymasterVerificationGasLimit: u,
            sender: l,
            signature: d = "0x",
            verificationGasLimit: f,
          } = e,
          p = (0, n_.xW)([
            (0, aA.eV)((0, s.cK)(f || 0n), { size: 16 }),
            (0, aA.eV)((0, s.cK)(t || 0n), { size: 16 }),
          ]),
          m = sB(e),
          h = (0, n_.xW)([
            (0, aA.eV)((0, s.cK)(r || 0n), { size: 16 }),
            (0, aA.eV)((0, s.cK)(a || 0n), { size: 16 }),
          ]),
          y = e.nonce ?? 0n;
        return {
          accountGasLimits: p,
          callData: n,
          initCode: m,
          gasFees: h,
          nonce: y,
          paymasterAndData: i
            ? (0, n_.xW)([
                i,
                (0, aA.eV)((0, s.cK)(u || 0n), { size: 16 }),
                (0, aA.eV)((0, s.cK)(c || 0n), { size: 16 }),
                o || "0x",
              ])
            : "0x",
          preVerificationGas: e.preVerificationGas ?? 0n,
          sender: l,
          signature: d,
        };
      }
      let sR = {
        PackedUserOperation: [
          { type: "address", name: "sender" },
          { type: "uint256", name: "nonce" },
          { type: "bytes", name: "initCode" },
          { type: "bytes", name: "callData" },
          { type: "bytes32", name: "accountGasLimits" },
          { type: "uint256", name: "preVerificationGas" },
          { type: "bytes32", name: "gasFees" },
          { type: "bytes", name: "paymasterAndData" },
        ],
      };
      var sq = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var a = 0, r = Object.getOwnPropertySymbols(e);
            a < r.length;
            a++
          )
            0 > t.indexOf(r[a]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        return n;
      };
      async function sz(e) {
        let {
            owner: t,
            ownerIndex: n,
            address: r,
            client: a,
            factoryData: s,
          } = e,
          o = {
            abi: sM,
            address: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
            version: "0.6",
          },
          c = { abi: v, address: y };
        return sD({
          client: a,
          entryPoint: o,
          extend: { abi: g, factory: c },
          async decodeCalls(e) {
            let t = (0, sT.J)({ abi: g, data: e });
            if ("execute" === t.functionName)
              return [{ to: t.args[0], value: t.args[1], data: t.args[2] }];
            if ("executeBatch" === t.functionName)
              return t.args[0].map((e) => ({
                to: e.target,
                value: e.value,
                data: e.data,
              }));
            throw new t7.C(`unable to decode calls for "${t.functionName}"`);
          },
          async encodeCalls(e) {
            var t, n;
            return 1 === e.length
              ? (0, i.p)({
                  abi: g,
                  functionName: "execute",
                  args: [
                    e[0].to,
                    null != (t = e[0].value) ? t : BigInt(0),
                    null != (n = e[0].data) ? n : "0x",
                  ],
                })
              : (0, i.p)({
                  abi: g,
                  functionName: "executeBatch",
                  args: [
                    e.map((e) => {
                      var t, n;
                      return {
                        data: null != (t = e.data) ? t : "0x",
                        target: e.to,
                        value: null != (n = e.value) ? n : BigInt(0),
                      };
                    }),
                  ],
                });
          },
          getAddress: async () => r,
          getFactoryArgs: async () => ({ factory: c.address, factoryData: s }),
          getStubSignature: async () =>
            "webAuthn" === t.type
              ? "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000170000000000000000000000000000000000000000000000000000000000000001949fc7c88032b9fcb5f6efc7a7b8c63668eae9871b765e23123bb473ff57aa831a7c0d9276168ebcc29f2875a0239cffdf2a9cd1c2007c5c77c071db9264df1d000000000000000000000000000000000000000000000000000000000000002549960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a7b2274797065223a22776562617574686e2e676574222c226368616c6c656e6765223a2273496a396e6164474850596759334b7156384f7a4a666c726275504b474f716d59576f4d57516869467773222c226f726967696e223a2268747470733a2f2f7369676e2e636f696e626173652e636f6d222c2263726f73734f726967696e223a66616c73657d00000000000000000000000000000000000000000000"
              : s$({
                  ownerIndex: n,
                  signature:
                    "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c",
                }),
          async sign(e) {
            let r = sG({
              address: await this.getAddress(),
              chainId: a.chain.id,
              hash: e.hash,
            });
            return s$({
              ownerIndex: n,
              signature: await sF({ hash: r, owner: t }),
            });
          },
          async signMessage(e) {
            let { message: r } = e,
              i = sG({
                address: await this.getAddress(),
                chainId: a.chain.id,
                hash: (0, ru.A)(r),
              });
            return s$({
              ownerIndex: n,
              signature: await sF({ hash: i, owner: t }),
            });
          },
          async signTypedData(e) {
            let { domain: r, types: i, primaryType: s, message: o } = e,
              c = sG({
                address: await this.getAddress(),
                chainId: a.chain.id,
                hash: (0, rk.Zh)({
                  domain: r,
                  message: o,
                  primaryType: s,
                  types: i,
                }),
              });
            return s$({
              ownerIndex: n,
              signature: await sF({ hash: c, owner: t }),
            });
          },
          async signUserOperation(e) {
            let { chainId: r = a.chain.id } = e,
              i = sq(e, ["chainId"]),
              s = await this.getAddress(),
              c = (function (e) {
                let {
                    chainId: t,
                    entryPointAddress: n,
                    entryPointVersion: r,
                  } = e,
                  a = e.userOperation,
                  {
                    authorization: i,
                    callData: s = "0x",
                    callGasLimit: o,
                    maxFeePerGas: c,
                    maxPriorityFeePerGas: u,
                    nonce: l,
                    paymasterAndData: d = "0x",
                    preVerificationGas: f,
                    sender: p,
                    verificationGasLimit: m,
                  } = a;
                if ("0.8" === r)
                  return (0, rk.Zh)(
                    (function (e) {
                      let {
                        chainId: t,
                        entryPointAddress: n,
                        userOperation: r,
                      } = e;
                      return {
                        types: sR,
                        primaryType: "PackedUserOperation",
                        domain: {
                          name: "ERC4337",
                          version: "1",
                          chainId: t,
                          verifyingContract: n,
                        },
                        message: sU(r),
                      };
                    })({ chainId: t, entryPointAddress: n, userOperation: a })
                  );
                let h = (() => {
                  if ("0.6" === r) {
                    let e = sB({
                      authorization: i,
                      factory: a.initCode?.slice(0, 42),
                      factoryData: a.initCode?.slice(42),
                    });
                    return (0, rb.h)(
                      [
                        { type: "address" },
                        { type: "uint256" },
                        { type: "bytes32" },
                        { type: "bytes32" },
                        { type: "uint256" },
                        { type: "uint256" },
                        { type: "uint256" },
                        { type: "uint256" },
                        { type: "uint256" },
                        { type: "bytes32" },
                      ],
                      [
                        p,
                        l,
                        (0, sp.S)(e),
                        (0, sp.S)(s),
                        o,
                        m,
                        f,
                        c,
                        u,
                        (0, sp.S)(d),
                      ]
                    );
                  }
                  if ("0.7" === r) {
                    let e = sU(a);
                    return (0, rb.h)(
                      [
                        { type: "address" },
                        { type: "uint256" },
                        { type: "bytes32" },
                        { type: "bytes32" },
                        { type: "bytes32" },
                        { type: "uint256" },
                        { type: "bytes32" },
                        { type: "bytes32" },
                      ],
                      [
                        e.sender,
                        e.nonce,
                        (0, sp.S)(e.initCode),
                        (0, sp.S)(e.callData),
                        e.accountGasLimits,
                        e.preVerificationGas,
                        e.gasFees,
                        (0, sp.S)(e.paymasterAndData),
                      ]
                    );
                  }
                  throw Error(`entryPointVersion "${r}" not supported.`);
                })();
                return (0, sp.S)(
                  (0, rb.h)(
                    [
                      { type: "bytes32" },
                      { type: "address" },
                      { type: "uint256" },
                    ],
                    [(0, sp.S)(h), n, BigInt(t)]
                  )
                );
              })({
                chainId: r,
                entryPointAddress: o.address,
                entryPointVersion: o.version,
                userOperation: Object.assign(Object.assign({}, i), {
                  sender: s,
                }),
              });
            return s$({
              ownerIndex: n,
              signature: await sF({ hash: c, owner: t }),
            });
          },
          userOperation: {
            async estimateGas(e) {
              var n;
              if ("webAuthn" === t.type)
                return {
                  verificationGasLimit: BigInt(
                    Math.max(
                      Number(
                        null != (n = e.verificationGasLimit) ? n : BigInt(0)
                      ),
                      8e5
                    )
                  ),
                };
            },
          },
        });
      }
      async function sF({ hash: e, owner: t }) {
        if ("webAuthn" === t.type) {
          let { signature: n, webauthn: r } = await t.sign({ hash: e });
          return (function ({ webauthn: e, signature: t }) {
            let { r: n, s: r } = i3(t);
            return (0, rb.h)(
              [
                {
                  components: [
                    { name: "authenticatorData", type: "bytes" },
                    { name: "clientDataJSON", type: "bytes" },
                    { name: "challengeIndex", type: "uint256" },
                    { name: "typeIndex", type: "uint256" },
                    { name: "r", type: "uint256" },
                    { name: "s", type: "uint256" },
                  ],
                  type: "tuple",
                },
              ],
              [
                {
                  authenticatorData: e.authenticatorData,
                  clientDataJSON: (0, s.i3)(e.clientDataJSON),
                  challengeIndex: BigInt(e.challengeIndex),
                  typeIndex: BigInt(e.typeIndex),
                  r: n,
                  s: r,
                },
              ]
            );
          })({ signature: n, webauthn: r });
        }
        if (t.sign) return t.sign({ hash: e });
        throw new t7.C("`owner` does not support raw sign.");
      }
      function sG({ address: e, chainId: t, hash: n }) {
        return (0, rk.Zh)({
          domain: {
            chainId: t,
            name: "Coinbase Smart Wallet",
            verifyingContract: e,
            version: "1",
          },
          types: {
            CoinbaseSmartWalletMessage: [{ name: "hash", type: "bytes32" }],
          },
          primaryType: "CoinbaseSmartWalletMessage",
          message: { hash: n },
        });
      }
      function s$(e) {
        let { ownerIndex: t = 0 } = e,
          n = (() => {
            if (65 !== (0, sP.E)(e.signature)) return e.signature;
            let t = (function (e) {
              let { r: t, s: n } = sC.secp256k1.Signature.fromCompact(
                  e.slice(2, 130)
                ),
                r = Number(`0x${e.slice(130)}`),
                [a, i] = (() => {
                  if (0 === r || 1 === r) return [void 0, r];
                  if (27 === r) return [BigInt(r), 0];
                  if (28 === r) return [BigInt(r), 1];
                  throw Error("Invalid yParityOrV value");
                })();
              return void 0 !== a
                ? {
                    r: (0, s.cK)(t, { size: 32 }),
                    s: (0, s.cK)(n, { size: 32 }),
                    v: a,
                    yParity: i,
                  }
                : {
                    r: (0, s.cK)(t, { size: 32 }),
                    s: (0, s.cK)(n, { size: 32 }),
                    yParity: i,
                  };
            })(e.signature);
            return (function (e, t) {
              if (e.length !== t.length)
                throw new nb.YE({
                  expectedLength: e.length,
                  givenLength: t.length,
                });
              let n = [];
              for (let r = 0; r < e.length; r++) {
                let a = e[r],
                  i = t[r];
                n.push(
                  (function e(t, n, r = !1) {
                    if ("address" === t) {
                      if (!(0, rD.P)(n)) throw new sO.M({ address: n });
                      return (0, aA.eV)(n.toLowerCase(), {
                        size: r ? 32 : null,
                      });
                    }
                    if ("string" === t) return (0, s.i3)(n);
                    if ("bytes" === t) return n;
                    if ("bool" === t)
                      return (0, aA.eV)((0, s.$P)(n), { size: r ? 32 : 1 });
                    let a = t.match(sj.Ge);
                    if (a) {
                      let [e, t, i = "256"] = a,
                        o = Number.parseInt(i) / 8;
                      return (0, s.cK)(n, {
                        size: r ? 32 : o,
                        signed: "int" === t,
                      });
                    }
                    let i = t.match(sj.BD);
                    if (i) {
                      let [e, t] = i;
                      if (Number.parseInt(t) !== (n.length - 2) / 2)
                        throw new nb.BI({
                          expectedSize: Number.parseInt(t),
                          givenSize: (n.length - 2) / 2,
                        });
                      return (0, aA.eV)(n, {
                        dir: "right",
                        size: r ? 32 : null,
                      });
                    }
                    let o = t.match(sj.D5);
                    if (o && Array.isArray(n)) {
                      let [t, r] = o,
                        a = [];
                      for (let t = 0; t < n.length; t++) a.push(e(r, n[t], !0));
                      return 0 === a.length ? "0x" : (0, n_.aP)(a);
                    }
                    throw new nb.Wl(t);
                  })(a, i)
                );
              }
              return (0, n_.aP)(n);
            })(
              ["bytes32", "bytes32", "uint8"],
              [t.r, t.s, 0 === t.yParity ? 27 : 28]
            );
          })();
        return (0, rb.h)(
          [
            {
              components: [
                { name: "ownerIndex", type: "uint8" },
                { name: "signatureData", type: "bytes" },
              ],
              type: "tuple",
            },
          ],
          [{ ownerIndex: t, signatureData: n }]
        );
      }
      async function sH({
        address: e,
        client: t,
        factory: n,
        factoryData: r,
        owner: a,
        ownerIndex: i,
        parentAddress: o,
        attribution: c,
      }) {
        var u;
        let l = { address: e, factory: n, factoryData: r },
          d = null == (u = t.chain) ? void 0 : u.id;
        if (!d) throw E.rpc.internal("chainId not found");
        let f = await sz({
            owner: a,
            ownerIndex: null != i ? i : 1,
            address: e,
            client: t,
            factoryData: r,
          }),
          p = async (e) => {
            var n, r, i, u, m;
            try {
              switch (e.method) {
                case "wallet_addSubAccount":
                  return l;
                case "eth_accounts":
                  return [l.address];
                case "eth_coinbase":
                  return l.address;
                case "net_version":
                  return d.toString();
                case "eth_chainId":
                  return (0, s.cK)(d);
                case "eth_sendTransaction": {
                  D(e.params);
                  let a = e.params[0];
                  N(a.to, E.rpc.invalidParams("to is required"));
                  let s = {
                      to: a.to,
                      data: th(null != (n = a.data) ? n : "0x", !0),
                      value: th(null != (r = a.value) ? r : "0x", !0),
                      from: null != (i = a.from) ? i : l.address,
                    },
                    o = s_({ calls: [s], chainId: d, from: s.from }),
                    c = await p(o);
                  return sw({ client: t, id: c });
                }
                case "wallet_sendCalls": {
                  let t;
                  D(e.params);
                  let n = sm(e.params[0], "chainId");
                  if (!n) throw E.rpc.invalidParams("chainId is required");
                  if (!(0, rp.q)(n))
                    throw E.rpc.invalidParams(
                      "chainId must be a hex encoded integer"
                    );
                  if (!e.params[0])
                    throw E.rpc.invalidParams("params are required");
                  if (!("calls" in e.params[0]))
                    throw E.rpc.invalidParams("calls are required");
                  let r = {
                    method: "wallet_prepareCalls",
                    params: [
                      {
                        version: "1.0",
                        calls: e.params[0].calls,
                        chainId: n,
                        from: l.address,
                        capabilities:
                          "capabilities" in e.params[0]
                            ? e.params[0].capabilities
                            : {},
                      },
                    ],
                  };
                  o &&
                    (r = sg(r, {
                      funding: [
                        {
                          type: "spendPermission",
                          data: {
                            autoApply: !0,
                            sources: [o],
                            preference: "PREFER_DIRECT_BALANCE",
                          },
                        },
                      ],
                    }));
                  let i = await p(r),
                    c = await (null == (u = a.sign)
                      ? void 0
                      : u.call(a, {
                          hash: (0, tk.IQ)(i.signatureRequest.hash),
                        }));
                  if (!c) throw E.rpc.internal("signature not found");
                  return (
                    (t = (0, rp.q)(c)
                      ? {
                          type: "secp256k1",
                          data: { address: a.address, signature: c },
                        }
                      : {
                          type: "webauthn",
                          data: {
                            signature: JSON.stringify(
                              (function ({ webauthn: e, signature: t, id: n }) {
                                let r = i3(t);
                                return {
                                  id: n,
                                  rawId: sE((0, rg.Af)(n)),
                                  response: {
                                    authenticatorData: sE(
                                      (0, rg.aT)(e.authenticatorData)
                                    ),
                                    clientDataJSON: sE(
                                      (0, rg.Af)(e.clientDataJSON)
                                    ),
                                    signature: sE(
                                      (function (e, t) {
                                        let n = (0, rg.aT)(
                                            (0, sS.B)((0, s.cK)(e))
                                          ),
                                          r = (0, rg.aT)(
                                            (0, sS.B)((0, s.cK)(t))
                                          ),
                                          a = n.length,
                                          i = r.length,
                                          o = a + i + 4,
                                          c = new Uint8Array(o + 2);
                                        return (
                                          (c[0] = 48),
                                          (c[1] = o),
                                          (c[2] = 2),
                                          (c[3] = a),
                                          c.set(n, 4),
                                          (c[a + 4] = 2),
                                          (c[a + 5] = i),
                                          c.set(r, a + 6),
                                          c
                                        );
                                      })(r.r, r.s)
                                    ),
                                  },
                                  type: JSON.parse(e.clientDataJSON).type,
                                };
                              })(
                                Object.assign(
                                  { id: null != (m = a.id) ? m : "1" },
                                  c
                                )
                              )
                            ),
                            publicKey: a.publicKey,
                          },
                        }),
                    (
                      await p({
                        method: "wallet_sendPreparedCalls",
                        params: [
                          {
                            version: "1.0",
                            type: i.type,
                            data: i.userOp,
                            chainId: i.chainId,
                            signature: t,
                          },
                        ],
                      })
                    )[0]
                  );
                }
                case "wallet_sendPreparedCalls": {
                  D(e.params);
                  let n = sm(e.params[0], "chainId");
                  if (!n) throw E.rpc.invalidParams("chainId is required");
                  if (!(0, rp.q)(n))
                    throw E.rpc.invalidParams(
                      "chainId must be a hex encoded integer"
                    );
                  return await t.request({
                    method: "wallet_sendPreparedCalls",
                    params: e.params,
                  });
                }
                case "wallet_prepareCalls": {
                  D(e.params);
                  let n = sm(e.params[0], "chainId");
                  if (!n) throw E.rpc.invalidParams("chainId is required");
                  if (!(0, rp.q)(n))
                    throw E.rpc.invalidParams(
                      "chainId must be a hex encoded integer"
                    );
                  if (!e.params[0])
                    throw E.rpc.invalidParams("params are required");
                  if (!sm(e.params[0], "calls"))
                    throw E.rpc.invalidParams("calls are required");
                  let r = e.params[0];
                  return (
                    !c ||
                      !r.capabilities ||
                      "attribution" in r.capabilities ||
                      (r.capabilities.attribution = c),
                    await t.request({
                      method: "wallet_prepareCalls",
                      params: [
                        Object.assign(Object.assign({}, e.params[0]), {
                          chainId: n,
                        }),
                      ],
                    })
                  );
                }
                case "personal_sign": {
                  if ((D(e.params), !(0, rp.q)(e.params[0])))
                    throw E.rpc.invalidParams(
                      "message must be a hex encoded string"
                    );
                  let t = (0, tk.IQ)(e.params[0]);
                  return f.signMessage({ message: t });
                }
                case "eth_signTypedData_v4": {
                  D(e.params);
                  let t =
                    "string" == typeof e.params[1]
                      ? JSON.parse(e.params[1])
                      : e.params[1];
                  return f.signTypedData(t);
                }
                default:
                  throw E.rpc.methodNotSupported();
              }
            } catch (e) {
              if (L(e)) {
                let t = (function (e) {
                  try {
                    let t = JSON.parse(e.details);
                    return new O(t.code, t.message, t.data);
                  } catch (e) {
                    return null;
                  }
                })(e);
                if (t) throw t;
              }
              throw e;
            }
          };
        return { request: p };
      }
      async function sW({
        address: e,
        client: t,
        publicKey: n,
        factory: r,
        factoryData: a,
      }) {
        if (!(await (0, t4.Q)(t, { address: e })) && r && a) {
          if ((0, rf.b)(r) !== (0, rf.b)(y))
            throw E.rpc.internal("unknown factory address");
          let e = (0, sT.J)({ abi: v, data: a });
          if ("createAccount" !== e.functionName)
            throw E.rpc.internal("unknown factory function");
          let [t] = e.args;
          return t.findIndex((e) => e.toLowerCase() === sK(n).toLowerCase());
        }
        let i = await (0, tL.J)(t, {
          address: e,
          abi: g,
          functionName: "ownerCount",
        });
        for (let r = Number(i) - 1; r >= 0; r--) {
          let a = await (0, tL.J)(t, {
              address: e,
              abi: g,
              functionName: "ownerAtIndex",
              args: [BigInt(r)],
            }),
            i = sK(n);
          if (a.toLowerCase() === i.toLowerCase()) return r;
        }
        return -1;
      }
      function sK(e) {
        return (0, rD.P)(e) ? (0, aA.eV)(e) : e;
      }
      async function sV() {
        let e = e3();
        return new Promise((t) => {
          H({ snackbarContext: "sub_account_add_owner" }),
            e.presentItem({
              autoExpand: !0,
              message: "App requires a signer update",
              menuItems: [
                {
                  isRed: !1,
                  info: "Confirm",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    W({
                      snackbarContext: "sub_account_add_owner",
                      snackbarAction: "confirm",
                    }),
                      e.clear(),
                      t("authenticate");
                  },
                },
                {
                  isRed: !0,
                  info: "Cancel",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    W({
                      snackbarContext: "sub_account_add_owner",
                      snackbarAction: "cancel",
                    }),
                      e.clear(),
                      t("cancel");
                  },
                },
              ],
            });
        });
      }
      async function sJ({ ownerAccount: e, globalAccountRequest: t }) {
        var n, r;
        let o = h.account.get(),
          c = h.subAccounts.get(),
          u =
            null == (n = o.accounts)
              ? void 0
              : n.find(
                  (e) =>
                    e.toLowerCase() !==
                    (null == c ? void 0 : c.address.toLowerCase())
                );
        N(u, E.provider.unauthorized("no global account")),
          N(
            null == (r = o.chain) ? void 0 : r.id,
            E.provider.unauthorized("no chain id")
          ),
          N(
            null == c ? void 0 : c.address,
            E.provider.unauthorized("no sub account")
          );
        let l = [];
        if (
          ("local" === e.type &&
            e.address &&
            l.push({
              to: c.address,
              data: (0, i.p)({
                abi: g,
                functionName: "addOwnerAddress",
                args: [e.address],
              }),
              value: (0, s.nj)(0),
            }),
          e.publicKey)
        ) {
          let [t, n] = (0, a.n)(
            [{ type: "bytes32" }, { type: "bytes32" }],
            e.publicKey
          );
          l.push({
            to: c.address,
            data: (0, i.p)({
              abi: g,
              functionName: "addOwnerPublicKey",
              args: [t, n],
            }),
            value: (0, s.nj)(0),
          });
        }
        let d = {
          method: "wallet_sendCalls",
          params: [
            { version: "1", calls: l, chainId: (0, s.cK)(84532), from: u },
          ],
        };
        if ("cancel" === (await sV()))
          throw E.provider.unauthorized("user cancelled");
        let f = await t(d),
          p = aR(o.chain.id);
        if (
          (N(p, E.rpc.internal(`client not found for chainId ${o.chain.id}`)),
          "success" !== (await (0, sh.c)(p, { id: f })).status)
        )
          throw E.rpc.internal("add owner call failed");
        let m = await sW({
          address: c.address,
          publicKey: "local" === e.type && e.address ? e.address : e.publicKey,
          client: p,
        });
        if (-1 === m) throw E.rpc.internal("failed to find owner index");
        return m;
      }
      async function sQ({
        errorData: e,
        globalAccountAddress: t,
        subAccountAddress: n,
        client: r,
        request: a,
        subAccountRequest: o,
        globalAccountRequest: c,
      }) {
        var u, l, d;
        let f,
          p,
          m = null == (u = r.chain) ? void 0 : u.id;
        N(m, E.rpc.internal("invalid chainId"));
        let h = (function ({ errorData: e, sourceAddress: t }) {
            var n;
            let r = [];
            for (let [a, { amount: i, sources: s }] of Object.entries(
              null != (n = null == e ? void 0 : e.required) ? n : {}
            )) {
              if (
                0 ===
                s.filter(
                  (e) =>
                    (0, tk.uU)(e.balance) >= (0, tk.uU)(i) &&
                    e.address.toLowerCase() ===
                      (null == t ? void 0 : t.toLowerCase())
                ).length
              )
                throw Error(
                  "Source address has insufficient balance for a token"
                );
              r.push({ token: a, requiredAmount: (0, tk.uU)(i) });
            }
            return r;
          })({ errorData: e, sourceAddress: t }),
          y = await sx();
        if ("cancel" === y) throw Error("User cancelled funding");
        if ("update_permission" === y) {
          if (1 === h.length) {
            let e = h[0],
              r = (function ({ spendPermission: e, chainId: t }) {
                return {
                  domain: {
                    name: "Spend Permission Manager",
                    version: "1",
                    chainId: t,
                    verifyingContract: b,
                  },
                  types: {
                    SpendPermission: [
                      { name: "account", type: "address" },
                      { name: "spender", type: "address" },
                      { name: "token", type: "address" },
                      { name: "allowance", type: "uint160" },
                      { name: "period", type: "uint48" },
                      { name: "start", type: "uint48" },
                      { name: "end", type: "uint48" },
                      { name: "salt", type: "uint256" },
                      { name: "extraData", type: "bytes" },
                    ],
                  },
                  primaryType: "SpendPermission",
                  message: {
                    account: e.account,
                    spender: e.spender,
                    token: e.token,
                    allowance: e.allowance,
                    period: e.period,
                    start: e.start,
                    end: e.end,
                    salt: e.salt,
                    extraData: e.extraData,
                  },
                };
              })({
                spendPermission: {
                  token: e.token,
                  allowance: (0, s.cK)(e.requiredAmount * BigInt(3)),
                  period: 86400,
                  account: t,
                  spender: n,
                  start: 0,
                  end: 0xffffffffffff,
                  salt: (0, s.cK)(
                    BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))
                  ),
                  extraData: "0x",
                },
                chainId: m,
              });
            f = { method: "eth_signTypedData_v4", params: [t, r] };
          } else {
            let e = (function ({ spendPermissionBatch: e, chainId: t }) {
              return {
                domain: {
                  name: "Spend Permission Manager",
                  version: "1",
                  chainId: t,
                  verifyingContract: b,
                },
                types: {
                  SpendPermissionBatch: [
                    { name: "account", type: "address" },
                    { name: "period", type: "uint48" },
                    { name: "start", type: "uint48" },
                    { name: "end", type: "uint48" },
                    { name: "permissions", type: "PermissionDetails[]" },
                  ],
                  PermissionDetails: [
                    { name: "spender", type: "address" },
                    { name: "token", type: "address" },
                    { name: "allowance", type: "uint160" },
                    { name: "salt", type: "uint256" },
                    { name: "extraData", type: "bytes" },
                  ],
                },
                primaryType: "SpendPermissionBatch",
                message: {
                  account: e.account,
                  period: e.period,
                  start: e.start,
                  end: e.end,
                  permissions: e.permissions.map((e) => ({
                    spender: e.spender,
                    token: e.token,
                    allowance: e.allowance,
                    salt: e.salt,
                    extraData: e.extraData,
                  })),
                },
              };
            })({
              spendPermissionBatch: {
                account: t,
                period: 86400,
                start: 0,
                end: 0xffffffffffff,
                permissions: h.map((e) => ({
                  token: e.token,
                  allowance: (0, s.cK)(e.requiredAmount * BigInt(3)),
                  period: 86400,
                  account: t,
                  spender: n,
                  salt: "0x0",
                  extraData: "0x",
                })),
              },
              chainId: m,
            });
            f = { method: "eth_signTypedData_v4", params: [t, e] };
          }
          try {
            await c(f);
          } catch (e) {
            throw (
              (console.error(e), Error("User denied spend permission request"))
            );
          }
          return o(a);
        }
        let v = h.map((e) =>
          "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" === e.token.toLowerCase()
            ? { to: n, value: (0, s.cK)(e.requiredAmount), data: "0x" }
            : {
                to: e.token,
                value: "0x0",
                data: (0, i.p)({
                  abi: rl.xw,
                  functionName: "transfer",
                  args: [n, e.requiredAmount],
                }),
              }
        );
        if (
          "wallet_sendCalls" === a.method &&
          "object" == typeof (l = a.params) &&
          null !== l &&
          "calls" in l
        )
          p = a.params[0];
        else if (
          "eth_sendTransaction" === a.method &&
          Array.isArray((d = a.params)) &&
          1 === d.length &&
          "object" == typeof d[0] &&
          null !== d[0] &&
          "to" in d[0]
        )
          p = s_({ calls: [a.params[0]], chainId: m, from: a.params[0].from })
            .params[0];
        else throw Error("Could not get original call");
        let w = [
            ...v,
            {
              data: (0, i.p)({
                abi: g,
                functionName: "executeBatch",
                args: [
                  p.calls.map((e) => {
                    var t, n;
                    return {
                      target: e.to,
                      value: (0, tk.uU)(null != (t = e.value) ? t : "0x0"),
                      data: null != (n = e.data) ? n : "0x",
                    };
                  }),
                ],
              }),
              to: n,
              value: "0x0",
            },
          ],
          _ = await c({
            method: "wallet_sendCalls",
            params: [
              Object.assign(Object.assign({}, p), { calls: w, from: t }),
            ],
          });
        return "eth_sendTransaction" === a.method
          ? sw({ client: r, id: _ })
          : _;
      }
      class sZ {
        constructor(e) {
          var t, n, r, a;
          (this.communicator = e.communicator),
            (this.callback = e.callback),
            (this.keyManager = new sf());
          let { account: i, chains: s } = h.getState();
          (this.accounts = null != (t = i.accounts) ? t : []),
            (this.chain =
              null != (n = i.chain)
                ? n
                : {
                    id:
                      null !=
                      (a = null == (r = e.metadata.appChainIds) ? void 0 : r[0])
                        ? a
                        : 1,
                  }),
            s && aU(s);
        }
        async handshake(e) {
          var t, n, r;
          let a = tx.get(e);
          (({ method: e, correlationId: t }) => {
            var n;
            $(
              "scw_signer.handshake.started",
              {
                action: Q.unknown,
                componentType: J.unknown,
                method: e,
                correlationId: t,
                enableAutoSubAccounts:
                  null == (n = h.subAccountsConfig.get())
                    ? void 0
                    : n.enableAutoSubAccounts,
              },
              Z.high
            );
          })({ method: e.method, correlationId: a });
          try {
            await (null == (n = (t = this.communicator).waitForPopupLoaded)
              ? void 0
              : n.call(t));
            let i = await this.createRequestMessage(
                {
                  handshake: {
                    method: e.method,
                    params: null != (r = e.params) ? r : [],
                  },
                },
                a
              ),
              s = await this.communicator.postRequestAndWaitForResponse(i);
            if ("failure" in s.content) throw s.content.failure;
            let o = await aK("public", s.sender);
            await this.keyManager.setPeerPublicKey(o);
            let c = await this.decryptResponseMessage(s);
            this.handleResponse(e, c),
              (({ method: e, correlationId: t }) => {
                var n;
                $(
                  "scw_signer.handshake.completed",
                  {
                    action: Q.unknown,
                    componentType: J.unknown,
                    method: e,
                    correlationId: t,
                    enableAutoSubAccounts:
                      null == (n = h.subAccountsConfig.get())
                        ? void 0
                        : n.enableAutoSubAccounts,
                  },
                  Z.high
                );
              })({ method: e.method, correlationId: a });
          } catch (t) {
            throw (
              ((({ method: e, correlationId: t, errorMessage: n }) => {
                var r;
                $(
                  "scw_signer.handshake.error",
                  {
                    action: Q.error,
                    componentType: J.unknown,
                    method: e,
                    correlationId: t,
                    errorMessage: n,
                    enableAutoSubAccounts:
                      null == (r = h.subAccountsConfig.get())
                        ? void 0
                        : r.enableAutoSubAccounts,
                  },
                  Z.high
                );
              })({ method: e.method, correlationId: a, errorMessage: tI(t) }),
              t)
            );
          }
        }
        async request(e) {
          let t = tx.get(e);
          (({ method: e, correlationId: t }) => {
            var n;
            $(
              "scw_signer.request.started",
              {
                action: Q.unknown,
                componentType: J.unknown,
                method: e,
                correlationId: t,
                enableAutoSubAccounts:
                  null == (n = h.subAccountsConfig.get())
                    ? void 0
                    : n.enableAutoSubAccounts,
              },
              Z.high
            );
          })({ method: e.method, correlationId: t });
          try {
            let n = await this._request(e);
            return (
              (({ method: e, correlationId: t }) => {
                var n;
                $(
                  "scw_signer.request.completed",
                  {
                    action: Q.unknown,
                    componentType: J.unknown,
                    method: e,
                    correlationId: t,
                    enableAutoSubAccounts:
                      null == (n = h.subAccountsConfig.get())
                        ? void 0
                        : n.enableAutoSubAccounts,
                  },
                  Z.high
                );
              })({ method: e.method, correlationId: t }),
              n
            );
          } catch (n) {
            throw (
              ((({ method: e, correlationId: t, errorMessage: n }) => {
                var r;
                $(
                  "scw_signer.request.error",
                  {
                    action: Q.error,
                    componentType: J.unknown,
                    method: e,
                    correlationId: t,
                    errorMessage: n,
                    enableAutoSubAccounts:
                      null == (r = h.subAccountsConfig.get())
                        ? void 0
                        : r.enableAutoSubAccounts,
                  },
                  Z.high
                );
              })({ method: e.method, correlationId: t, errorMessage: tI(n) }),
              n)
            );
          }
        }
        async _request(e) {
          var t, n, r, a, i, o, c, u, l, d, f, p, m, y;
          if (0 === this.accounts.length)
            switch (e.method) {
              case "eth_requestAccounts":
                return (
                  await (null ==
                  (n = (t = this.communicator).waitForPopupLoaded)
                    ? void 0
                    : n.call(t)),
                  await sv(),
                  await this.request({
                    method: "wallet_connect",
                    params: [
                      {
                        version: "1",
                        capabilities: Object.assign(
                          {},
                          null !=
                            (a =
                              null == (r = h.subAccountsConfig.get())
                                ? void 0
                                : r.capabilities)
                            ? a
                            : {}
                        ),
                      },
                    ],
                  }),
                  this.accounts
                );
              case "wallet_switchEthereumChain":
                sb(e.params), (this.chain.id = Number(e.params[0].chainId));
                return;
              case "wallet_connect": {
                await (null == (o = (i = this.communicator).waitForPopupLoaded)
                  ? void 0
                  : o.call(i)),
                  await sv();
                let t = {};
                (function (e, t) {
                  var n;
                  if (!Array.isArray(null == e ? void 0 : e.params)) return !1;
                  let r = null == (n = e.params[0]) ? void 0 : n.capabilities;
                  return !!r && "object" == typeof r && t in r;
                })(e, "addSubAccount") &&
                  (t =
                    null !=
                    (u =
                      null == (c = h.subAccountsConfig.get())
                        ? void 0
                        : c.capabilities)
                      ? u
                      : {});
                let n = sg(e, t);
                return this.sendRequestToPopup(n);
              }
              case "wallet_sendCalls":
              case "wallet_sign":
                return this.sendRequestToPopup(e);
              default:
                throw E.provider.unauthorized();
            }
          if (this.shouldRequestUseSubAccountSigner(e)) {
            let t = tx.get(e);
            (({ method: e, correlationId: t }) => {
              var n;
              $(
                "scw_sub_account.request.started",
                {
                  action: Q.unknown,
                  componentType: J.unknown,
                  method: e,
                  correlationId: t,
                  enableAutoSubAccounts:
                    null == (n = h.subAccountsConfig.get())
                      ? void 0
                      : n.enableAutoSubAccounts,
                },
                Z.high
              );
            })({ method: e.method, correlationId: t });
            try {
              let n = await this.sendRequestToSubAccountSigner(e);
              return (
                (({ method: e, correlationId: t }) => {
                  var n;
                  $(
                    "scw_sub_account.request.completed",
                    {
                      action: Q.unknown,
                      componentType: J.unknown,
                      method: e,
                      correlationId: t,
                      enableAutoSubAccounts:
                        null == (n = h.subAccountsConfig.get())
                          ? void 0
                          : n.enableAutoSubAccounts,
                    },
                    Z.high
                  );
                })({ method: e.method, correlationId: t }),
                n
              );
            } catch (n) {
              throw (
                ((({ method: e, correlationId: t, errorMessage: n }) => {
                  var r;
                  $(
                    "scw_sub_account.request.error",
                    {
                      action: Q.error,
                      componentType: J.unknown,
                      method: e,
                      correlationId: t,
                      errorMessage: n,
                      enableAutoSubAccounts:
                        null == (r = h.subAccountsConfig.get())
                          ? void 0
                          : r.enableAutoSubAccounts,
                    },
                    Z.high
                  );
                })({ method: e.method, correlationId: t, errorMessage: tI(n) }),
                n)
              );
            }
          }
          switch (e.method) {
            case "eth_requestAccounts":
            case "eth_accounts": {
              let e = h.subAccounts.get(),
                t = h.subAccountsConfig.get();
              return (
                (null == e ? void 0 : e.address) &&
                  (this.accounts = (
                    null == t ? void 0 : t.enableAutoSubAccounts
                  )
                    ? sk(this.accounts, e.address)
                    : sA(this.accounts, e.address)),
                null == (l = this.callback) ||
                  l.call(this, "connect", {
                    chainId: (0, s.cK)(this.chain.id),
                  }),
                this.accounts
              );
            }
            case "eth_coinbase":
              return this.accounts[0];
            case "net_version":
              return this.chain.id;
            case "eth_chainId":
              return (0, s.cK)(this.chain.id);
            case "wallet_getCapabilities":
              return this.handleGetCapabilitiesRequest(e);
            case "wallet_switchEthereumChain":
              return this.handleSwitchChainRequest(e);
            case "eth_ecRecover":
            case "personal_sign":
            case "wallet_sign":
            case "personal_ecRecover":
            case "eth_signTransaction":
            case "eth_sendTransaction":
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
            case "wallet_addEthereumChain":
            case "wallet_watchAsset":
            case "wallet_sendCalls":
            case "wallet_showCallsStatus":
            case "wallet_grantPermissions":
              return this.sendRequestToPopup(e);
            case "wallet_connect": {
              let t = await sI();
              if (t) return t;
              await (null == (f = (d = this.communicator).waitForPopupLoaded)
                ? void 0
                : f.call(d)),
                await sv();
              let n = h.subAccountsConfig.get(),
                r = sg(
                  e,
                  null != (p = null == n ? void 0 : n.capabilities) ? p : {}
                );
              return (
                null == (m = this.callback) ||
                  m.call(this, "connect", {
                    chainId: (0, s.cK)(this.chain.id),
                  }),
                this.sendRequestToPopup(r)
              );
            }
            case "wallet_getSubAccounts": {
              let t = h.subAccounts.get();
              if (null == t ? void 0 : t.address) return { subAccounts: [t] };
              if (!this.chain.rpcUrl)
                throw E.rpc.internal("No RPC URL set for chain");
              let n = await z(e, this.chain.rpcUrl);
              if ((D(n.subAccounts, "subAccounts"), n.subAccounts.length > 0)) {
                aq(n.subAccounts[0]);
                let e = n.subAccounts[0];
                h.subAccounts.set({
                  address: e.address,
                  factory: e.factory,
                  factoryData: e.factoryData,
                });
              }
              return n;
            }
            case "wallet_addSubAccount":
              return this.addSubAccount(e);
            case "coinbase_fetchPermissions": {
              !(function (e) {
                if (
                  "coinbase_fetchPermissions" !== e.method ||
                  void 0 !== e.params
                ) {
                  if (
                    "coinbase_fetchPermissions" === e.method &&
                    Array.isArray(e.params) &&
                    1 === e.params.length &&
                    "object" == typeof e.params[0]
                  ) {
                    if (
                      "string" != typeof e.params[0].account ||
                      !e.params[0].chainId.startsWith("0x")
                    )
                      throw E.rpc.invalidParams(
                        "FetchPermissions - Invalid params: params[0].account must be a hex string"
                      );
                    if (
                      "string" != typeof e.params[0].chainId ||
                      !e.params[0].chainId.startsWith("0x")
                    )
                      throw E.rpc.invalidParams(
                        "FetchPermissions - Invalid params: params[0].chainId must be a hex string"
                      );
                    if (
                      "string" != typeof e.params[0].spender ||
                      !e.params[0].spender.startsWith("0x")
                    )
                      throw E.rpc.invalidParams(
                        "FetchPermissions - Invalid params: params[0].spender must be a hex string"
                      );
                    return;
                  }
                  throw E.rpc.invalidParams();
                }
              })(e);
              let t = (function (e) {
                  var t, n, r;
                  if (void 0 !== e.params) return e;
                  let a =
                      null == (t = h.getState().account.accounts)
                        ? void 0
                        : t[0],
                    i =
                      null == (n = h.getState().account.chain) ? void 0 : n.id,
                    o =
                      null == (r = h.getState().subAccount)
                        ? void 0
                        : r.address;
                  if (!a || !o || !i)
                    throw E.rpc.invalidParams(
                      "FetchPermissions - one or more of account, sub account, or chain id is missing, connect to sub account via wallet_connect first"
                    );
                  return {
                    method: "coinbase_fetchPermissions",
                    params: [{ account: a, chainId: (0, s.cK)(i), spender: o }],
                  };
                })(e),
                n = await z(t, F),
                r = (0, tk.ME)(null == (y = t.params) ? void 0 : y[0].chainId);
              return (
                h.spendPermissions.set(
                  n.permissions.map((e) =>
                    Object.assign(Object.assign({}, e), { chainId: r })
                  )
                ),
                n
              );
            }
            default:
              if (!this.chain.rpcUrl)
                throw E.rpc.internal("No RPC URL set for chain");
              return z(e, this.chain.rpcUrl);
          }
        }
        async sendRequestToPopup(e) {
          var t, n;
          await (null == (n = (t = this.communicator).waitForPopupLoaded)
            ? void 0
            : n.call(t));
          let r = await this.sendEncryptedRequest(e),
            a = await this.decryptResponseMessage(r);
          return this.handleResponse(e, a);
        }
        async handleResponse(e, t) {
          var n, r, a, i, s;
          let o = t.result;
          if ("error" in o) throw o.error;
          switch (e.method) {
            case "eth_requestAccounts": {
              let e = o.value;
              (this.accounts = e),
                h.account.set({ accounts: e, chain: this.chain }),
                null == (n = this.callback) ||
                  n.call(this, "accountsChanged", e);
              break;
            }
            case "wallet_connect": {
              let e = o.value,
                t = e.accounts.map((e) => e.address);
              (this.accounts = t), h.account.set({ accounts: t });
              let n = e.accounts.at(0),
                s = null == n ? void 0 : n.capabilities;
              if (null == s ? void 0 : s.subAccounts) {
                let e = null == s ? void 0 : s.subAccounts;
                D(e, "subAccounts"),
                  aq(e[0]),
                  h.subAccounts.set({
                    address: e[0].address,
                    factory: e[0].factory,
                    factoryData: e[0].factoryData,
                  });
              }
              let c = [this.accounts[0]],
                u = h.subAccounts.get(),
                l = h.subAccountsConfig.get();
              (null == u ? void 0 : u.address) &&
                (this.accounts = (null == l ? void 0 : l.enableAutoSubAccounts)
                  ? sk(this.accounts, u.address)
                  : sA(this.accounts, u.address));
              let d =
                null ==
                (a =
                  null == (r = null == e ? void 0 : e.accounts)
                    ? void 0
                    : r[0].capabilities)
                  ? void 0
                  : a.spendPermissions;
              d &&
                "permissions" in d &&
                h.spendPermissions.set(null == d ? void 0 : d.permissions),
                null == (i = this.callback) ||
                  i.call(this, "accountsChanged", c);
              break;
            }
            case "wallet_addSubAccount": {
              aq(o.value);
              let e = o.value;
              h.subAccounts.set(e);
              let t = h.subAccountsConfig.get();
              (this.accounts = (null == t ? void 0 : t.enableAutoSubAccounts)
                ? sk(this.accounts, e.address)
                : sA(this.accounts, e.address)),
                null == (s = this.callback) ||
                  s.call(this, "accountsChanged", this.accounts);
            }
          }
          return o.value;
        }
        async cleanup() {
          var e, t;
          let n = h.config.get().metadata;
          await this.keyManager.clear(),
            h.account.clear(),
            h.subAccounts.clear(),
            h.spendPermissions.clear(),
            h.chains.clear(),
            (this.accounts = []),
            (this.chain = {
              id:
                null !=
                (t =
                  null == (e = null == n ? void 0 : n.appChainIds)
                    ? void 0
                    : e[0])
                  ? t
                  : 1,
            });
        }
        async handleSwitchChainRequest(e) {
          sb(e.params);
          let t = tv(e.params[0].chainId);
          if (this.updateChain(t)) return null;
          let n = await this.sendRequestToPopup(e);
          return null === n && this.updateChain(t), n;
        }
        async handleGetCapabilitiesRequest(e) {
          var t = e.params;
          if (
            !t ||
            !Array.isArray(t) ||
            (1 !== t.length && 2 !== t.length) ||
            "string" != typeof t[0] ||
            !(0, rD.P)(t[0])
          )
            throw E.rpc.invalidParams();
          if (2 === t.length) {
            if (!Array.isArray(t[1])) throw E.rpc.invalidParams();
            for (let e of t[1])
              if ("string" != typeof e || !e.startsWith("0x"))
                throw E.rpc.invalidParams();
          }
          let n = e.params[0],
            r = e.params[1];
          if (!this.accounts.some((e) => (0, tA.h)(e, n)))
            throw E.provider.unauthorized(
              "no active account found when getting capabilities"
            );
          let a = h.getState().account.capabilities;
          if (!a) return {};
          if (!r || 0 === r.length) return a;
          let i = new Set(r.map((e) => (0, tk.ME)(e)));
          return Object.fromEntries(
            Object.entries(a).filter(([e]) => {
              try {
                let t = (0, tk.ME)(e);
                return i.has(t);
              } catch (e) {
                return !1;
              }
            })
          );
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw E.provider.unauthorized(
              "No shared secret found when encrypting request"
            );
          let n = await aV({ action: e, chainId: this.chain.id }, t),
            r = tx.get(e),
            a = await this.createRequestMessage({ encrypted: n }, r);
          return this.communicator.postRequestAndWaitForResponse(a);
        }
        async createRequestMessage(e, t) {
          let n = await aW("public", await this.keyManager.getOwnPublicKey());
          return {
            id: crypto.randomUUID(),
            correlationId: t,
            sender: n,
            content: e,
            timestamp: new Date(),
          };
        }
        async decryptResponseMessage(e) {
          var t, n, r;
          let a = e.content;
          if ("failure" in a) throw a.failure;
          let i = await this.keyManager.getSharedSecret();
          if (!i)
            throw E.provider.unauthorized(
              "Invalid session: no shared secret found when decrypting response"
            );
          let s = await aJ(a.encrypted, i),
            o = null == (t = s.data) ? void 0 : t.chains;
          if (o) {
            let e = null == (n = s.data) ? void 0 : n.nativeCurrencies,
              t = Object.entries(o).map(([t, n]) => {
                let r = null == e ? void 0 : e[Number(t)];
                return Object.assign(
                  { id: Number(t), rpcUrl: n },
                  r ? { nativeCurrency: r } : {}
                );
              });
            h.chains.set(t), this.updateChain(this.chain.id, t), aU(t);
          }
          let c = null == (r = s.data) ? void 0 : r.capabilities;
          return c && h.account.set({ capabilities: c }), s;
        }
        updateChain(e, t) {
          var n;
          let r = h.getState(),
            a = null != t ? t : r.chains,
            i = null == a ? void 0 : a.find((t) => t.id === e);
          return (
            !!i &&
            (i !== this.chain &&
              ((this.chain = i),
              h.account.set({ chain: i }),
              null == (n = this.callback) ||
                n.call(this, "chainChanged", tl(i.id))),
            !0)
          );
        }
        async addSubAccount(e) {
          var t, n, r, a;
          let i = h.getState().subAccount,
            s = h.subAccountsConfig.get();
          if (null == i ? void 0 : i.address)
            return (
              (this.accounts = (null == s ? void 0 : s.enableAutoSubAccounts)
                ? sk(this.accounts, i.address)
                : sA(this.accounts, i.address)),
              null == (t = this.callback) ||
                t.call(this, "accountsChanged", this.accounts),
              i
            );
          if (
            (await (null == (r = (n = this.communicator).waitForPopupLoaded)
              ? void 0
              : r.call(n)),
            Array.isArray(e.params) &&
              e.params.length > 0 &&
              e.params[0].account &&
              "create" === e.params[0].account.type)
          ) {
            let t;
            if (e.params[0].account.keys && e.params[0].account.keys.length > 0)
              t = e.params[0].account.keys;
            else {
              let e = null != (a = h.subAccountsConfig.get()) ? a : {},
                { account: n } = e.toOwnerAccount
                  ? await e.toOwnerAccount()
                  : await sc();
              if (!n)
                throw E.provider.unauthorized(
                  "could not get subaccount owner account when adding sub account"
                );
              t = [
                {
                  type: n.address ? "address" : "webauthn-p256",
                  publicKey: n.address || n.publicKey,
                },
              ];
            }
            e.params[0].account.keys = t;
          }
          let o = await this.sendRequestToPopup(e);
          return aq(o), o;
        }
        shouldRequestUseSubAccountSigner(e) {
          let t = sy(e),
            n = h.subAccounts.get();
          return (
            !!t &&
            t.toLowerCase() === (null == n ? void 0 : n.address.toLowerCase())
          );
        }
        async sendRequestToSubAccountSigner(e) {
          var t;
          let n = h.subAccounts.get(),
            r = h.subAccountsConfig.get(),
            a = h.config.get();
          N(
            null == n ? void 0 : n.address,
            E.provider.unauthorized(
              "no active sub account when sending request to sub account signer"
            )
          );
          let i = (null == r ? void 0 : r.toOwnerAccount)
            ? await r.toOwnerAccount()
            : await sc();
          N(
            null == i ? void 0 : i.account,
            E.provider.unauthorized(
              "no active sub account owner when sending request to sub account signer"
            )
          ),
            void 0 === sy(e) &&
              (e = (function (e, t) {
                if (!Array.isArray(e.params)) throw E.rpc.invalidParams();
                let n = [...e.params];
                switch (e.method) {
                  case "eth_signTransaction":
                  case "eth_sendTransaction":
                  case "wallet_sendCalls":
                    n[0].from = t;
                    break;
                  case "eth_signTypedData_v4":
                    n[0] = t;
                    break;
                  case "personal_sign":
                    n[1] = t;
                }
                return Object.assign(Object.assign({}, e), { params: n });
              })(e, n.address));
          let o = aR(this.chain.id);
          N(
            o,
            E.rpc.internal(
              `client not found for chainId ${this.chain.id} when sending request to sub account signer`
            )
          );
          let c = this.accounts.find(
            (e) => e.toLowerCase() !== n.address.toLowerCase()
          );
          N(
            c,
            E.provider.unauthorized(
              "no global account found when sending request to sub account signer"
            )
          );
          let u = (function ({ attribution: e, dappOrigin: t }) {
              if (e) {
                if ("auto" in e && e.auto && t)
                  return (0, rh.di)((0, sp.S)((0, s.nj)(t)), 0, 16);
                if ("dataSuffix" in e) return e.dataSuffix;
              }
            })({
              attribution: null == (t = a.preference) ? void 0 : t.attribution,
              dappOrigin: window.location.origin,
            }),
            l =
              "local" === i.account.type
                ? i.account.address
                : i.account.publicKey,
            d = await sW({
              address: n.address,
              factory: n.factory,
              factoryData: n.factoryData,
              publicKey: l,
              client: o,
            });
          if (-1 === d) {
            let t = tx.get(e);
            (({ method: e, correlationId: t }) => {
              var n;
              $(
                "scw_sub_account.add_owner.started",
                {
                  action: Q.unknown,
                  componentType: J.unknown,
                  method: e,
                  correlationId: t,
                  enableAutoSubAccounts:
                    null == (n = h.subAccountsConfig.get())
                      ? void 0
                      : n.enableAutoSubAccounts,
                },
                Z.high
              );
            })({ method: e.method, correlationId: t });
            try {
              (d = await sJ({
                ownerAccount: i.account,
                globalAccountRequest: this.sendRequestToPopup.bind(this),
              })),
                (({ method: e, correlationId: t }) => {
                  var n;
                  $(
                    "scw_sub_account.add_owner.completed",
                    {
                      action: Q.unknown,
                      componentType: J.unknown,
                      method: e,
                      correlationId: t,
                      enableAutoSubAccounts:
                        null == (n = h.subAccountsConfig.get())
                          ? void 0
                          : n.enableAutoSubAccounts,
                    },
                    Z.high
                  );
                })({ method: e.method, correlationId: t });
            } catch (n) {
              return (
                (({ method: e, correlationId: t, errorMessage: n }) => {
                  var r;
                  $(
                    "scw_sub_account.add_owner.error",
                    {
                      action: Q.error,
                      componentType: J.unknown,
                      method: e,
                      correlationId: t,
                      errorMessage: n,
                      enableAutoSubAccounts:
                        null == (r = h.subAccountsConfig.get())
                          ? void 0
                          : r.enableAutoSubAccounts,
                    },
                    Z.high
                  );
                })({ method: e.method, correlationId: t, errorMessage: tI(n) }),
                E.provider.unauthorized(
                  "failed to add sub account owner when sending request to sub account signer"
                )
              );
            }
          }
          let { request: f } = await sH({
            address: n.address,
            owner: i.account,
            client: o,
            factory: n.factory,
            factoryData: n.factoryData,
            parentAddress: c,
            attribution: u ? { suffix: u } : void 0,
            ownerIndex: d,
          });
          try {
            return await f(e);
          } catch (a) {
            let t;
            if (L(a)) t = JSON.parse(a.details);
            else if (M(a)) t = a;
            else throw a;
            if (!(M(t) && t.data) || !t.data) throw a;
            let r = tx.get(e);
            (({ method: e, correlationId: t }) => {
              var n;
              $(
                "scw_sub_account.insufficient_balance.error_handling.started",
                {
                  action: Q.unknown,
                  componentType: J.unknown,
                  method: e,
                  correlationId: t,
                  enableAutoSubAccounts:
                    null == (n = h.subAccountsConfig.get())
                      ? void 0
                      : n.enableAutoSubAccounts,
                },
                Z.high
              );
            })({ method: e.method, correlationId: r });
            try {
              let a = await sQ({
                errorData: t.data,
                globalAccountAddress: c,
                subAccountAddress: n.address,
                client: o,
                request: e,
                subAccountRequest: f,
                globalAccountRequest: this.request.bind(this),
              });
              return (
                (({ method: e, correlationId: t }) => {
                  var n;
                  $(
                    "scw_sub_account.insufficient_balance.error_handling.completed",
                    {
                      action: Q.unknown,
                      componentType: J.unknown,
                      method: e,
                      correlationId: t,
                      enableAutoSubAccounts:
                        null == (n = h.subAccountsConfig.get())
                          ? void 0
                          : n.enableAutoSubAccounts,
                    },
                    Z.high
                  );
                })({ method: e.method, correlationId: r }),
                a
              );
            } catch (t) {
              throw (
                (console.error(t),
                (({ method: e, correlationId: t, errorMessage: n }) => {
                  var r;
                  $(
                    "scw_sub_account.insufficient_balance.error_handling.error",
                    {
                      action: Q.error,
                      componentType: J.unknown,
                      method: e,
                      correlationId: t,
                      errorMessage: n,
                      enableAutoSubAccounts:
                        null == (r = h.subAccountsConfig.get())
                          ? void 0
                          : r.enableAutoSubAccounts,
                    },
                    Z.high
                  );
                })({ method: e.method, correlationId: r, errorMessage: tI(t) }),
                a)
              );
            }
          }
        }
      }
      let sY = () => {
        $(
          "walletlink_signer.walletlink_connection.connection_failed",
          { action: Q.measurement, componentType: J.unknown },
          Z.high
        );
      };
      var sX = n(69267);
      let s0 = "Addresses";
      class s1 {
        constructor(e) {
          this.secret = e;
        }
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          let n = crypto.getRandomValues(new Uint8Array(12)),
            r = await crypto.subtle.importKey(
              "raw",
              ts(t),
              { name: "aes-gcm" },
              !1,
              ["encrypt", "decrypt"]
            ),
            a = new TextEncoder(),
            i = await window.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: n },
              r,
              a.encode(e)
            ),
            s = i.slice(i.byteLength - 16),
            o = i.slice(0, i.byteLength - 16),
            c = new Uint8Array(s),
            u = new Uint8Array(o);
          return ti(new Uint8Array([...n, ...c, ...u]));
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          return new Promise((n, r) => {
            (async () => {
              let a = await crypto.subtle.importKey(
                  "raw",
                  ts(t),
                  { name: "aes-gcm" },
                  !1,
                  ["encrypt", "decrypt"]
                ),
                i = ts(e),
                s = i.slice(0, 12),
                o = i.slice(12, 28),
                c = new Uint8Array([...i.slice(28), ...o]),
                u = { name: "AES-GCM", iv: new Uint8Array(s) };
              try {
                let e = await window.crypto.subtle.decrypt(u, a, c),
                  t = new TextDecoder();
                n(t.decode(e));
              } catch (e) {
                r(e);
              }
            })();
          });
        }
      }
      class s2 {
        constructor(e, t, n) {
          (this.linkAPIUrl = e), (this.sessionId = t);
          let r = `${t}:${n}`;
          this.auth = `Basic ${btoa(r)}`;
        }
        async markUnseenEventsAsSeen(e) {
          return Promise.all(
            e.map((e) =>
              fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                method: "POST",
                headers: { Authorization: this.auth },
              })
            )
          ).catch((e) => console.error("Unable to mark events as seen:", e));
        }
        async fetchUnseenEvents() {
          var e;
          let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: { Authorization: this.auth },
          });
          if (t.ok) {
            let { events: n, error: r } = await t.json();
            if (r) throw Error(`Check unseen events failed: ${r}`);
            let a =
              null !=
              (e =
                null == n
                  ? void 0
                  : n
                      .filter((e) => "Web3Response" === e.event)
                      .map((e) => ({
                        type: "Event",
                        sessionId: this.sessionId,
                        eventId: e.id,
                        event: e.event,
                        data: e.data,
                      })))
                ? e
                : [];
            return this.markUnseenEventsAsSeen(a), a;
          }
          throw Error(`Check unseen events failed: ${t.status}`);
        }
      }
      !(function (e) {
        (e[(e.DISCONNECTED = 0)] = "DISCONNECTED"),
          (e[(e.CONNECTING = 1)] = "CONNECTING"),
          (e[(e.CONNECTED = 2)] = "CONNECTED");
      })(r || (r = {}));
      class s5 {
        setConnectionStateListener(e) {
          this.connectionStateListener = e;
        }
        setIncomingDataListener(e) {
          this.incomingDataListener = e;
        }
        constructor(e, t = WebSocket) {
          (this.WebSocketClass = t),
            (this.webSocket = null),
            (this.isDisconnecting = !1),
            (this.url = e.replace(/^http/, "ws")),
            (this.instanceId = s5.instanceCounter++),
            s5.activeInstances.add(this.instanceId);
        }
        async connect() {
          if (this.webSocket) throw Error("webSocket object is not null");
          if (this.isDisconnecting)
            throw Error(
              "WebSocket is disconnecting, cannot reconnect on same instance"
            );
          return new Promise((e, t) => {
            var n;
            let a;
            try {
              this.webSocket = a = new this.WebSocketClass(this.url);
            } catch (e) {
              t(e);
              return;
            }
            null == (n = this.connectionStateListener) ||
              n.call(this, r.CONNECTING),
              (a.onclose = (e) => {
                var n;
                this.clearWebSocket(),
                  a.readyState !== WebSocket.OPEN &&
                    t(Error(`websocket error ${e.code}: ${e.reason}`)),
                  null == (n = this.connectionStateListener) ||
                    n.call(this, r.DISCONNECTED);
              }),
              (a.onopen = (t) => {
                var n;
                e(),
                  null == (n = this.connectionStateListener) ||
                    n.call(this, r.CONNECTED),
                  s5.pendingData.length > 0 &&
                    ([...s5.pendingData].forEach((e) => this.sendData(e)),
                    (s5.pendingData = []));
              }),
              (a.onmessage = (e) => {
                var t, n;
                if ("h" === e.data)
                  null == (t = this.incomingDataListener) ||
                    t.call(this, { type: "Heartbeat" });
                else
                  try {
                    let t = JSON.parse(e.data);
                    null == (n = this.incomingDataListener) || n.call(this, t);
                  } catch (e) {}
              });
          });
        }
        disconnect() {
          var e;
          let { webSocket: t } = this;
          if (t) {
            (this.isDisconnecting = !0),
              this.clearWebSocket(),
              null == (e = this.connectionStateListener) ||
                e.call(this, r.DISCONNECTED),
              (this.connectionStateListener = void 0),
              (this.incomingDataListener = void 0);
            try {
              t.close();
            } catch (e) {}
          }
        }
        sendData(e) {
          let { webSocket: t } = this;
          if (!t) {
            s5.pendingData.push(e), this.isDisconnecting || this.connect();
            return;
          }
          if (t.readyState !== WebSocket.OPEN)
            return void s5.pendingData.push(e);
          t.send(e);
        }
        clearWebSocket() {
          let { webSocket: e } = this;
          e &&
            ((this.webSocket = null),
            (e.onclose = null),
            (e.onerror = null),
            (e.onmessage = null),
            (e.onopen = null));
        }
        cleanup() {
          s5.activeInstances.delete(this.instanceId);
        }
      }
      (s5.instanceCounter = 0),
        (s5.activeInstances = new Set()),
        (s5.pendingData = []);
      class s3 {
        constructor({ session: e, linkAPIUrl: t, listener: n }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = te(1)),
            (this.reconnectAttempts = 0),
            (this.isReconnecting = !1),
            (this._connected = !1),
            (this._linked = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              e &&
                new Map([
                  ["__destroyed", this.handleDestroyed],
                  ["EthereumAddress", this.handleAccountUpdated],
                  ["WalletUsername", this.handleWalletUsernameUpdated],
                  ["AppVersion", this.handleAppVersionUpdated],
                  [
                    "ChainId",
                    (t) =>
                      e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl),
                  ],
                ]).forEach((t, n) => {
                  let r = e[n];
                  void 0 !== r && t(r);
                });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              "1" === e && (null == (t = this.listener) || t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              try {
                let n = await this.cipher.decrypt(e);
                null == (t = this.listener) || t.accountUpdated(n);
              } catch (e) {}
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var n;
              try {
                let r = await this.cipher.decrypt(t);
                null == (n = this.listener) || n.metadataUpdated(e, r);
              } catch (e) {}
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated("walletUsername", e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated("AppVersion", e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var n;
              try {
                let r = await this.cipher.decrypt(e),
                  a = await this.cipher.decrypt(t);
                null == (n = this.listener) || n.chainUpdated(r, a);
              } catch (e) {}
            }),
            (this.session = e),
            (this.cipher = new s1(e.secret)),
            (this.listener = n),
            (this.linkAPIUrl = t),
            (this.WebSocketClass = WebSocket);
          let r = this.createWebSocket();
          (this.ws = r),
            (this.http = new s2(t, e.id, e.key)),
            this.setupVisibilityChangeHandler();
        }
        createWebSocket() {
          let e = new s5(`${this.linkAPIUrl}/rpc`, this.WebSocketClass);
          return (
            (this.activeWsInstance = e),
            e.setConnectionStateListener(async (t) => {
              if (e !== this.activeWsInstance) return;
              let n = !1;
              switch (t) {
                case r.DISCONNECTED:
                  this.heartbeatIntervalId &&
                    (clearInterval(this.heartbeatIntervalId),
                    (this.heartbeatIntervalId = void 0)),
                    (this.lastHeartbeatResponse = 0),
                    (n = !1),
                    this.destroyed ||
                      (async () => {
                        if (this.isReconnecting) return;
                        this.isReconnecting = !0;
                        let t = 3e3 * (0 !== this.reconnectAttempts);
                        await new Promise((e) => setTimeout(e, t)),
                          this.destroyed || e !== this.activeWsInstance
                            ? (this.isReconnecting = !1)
                            : (this.reconnectAttempts++,
                              "cleanup" in this.ws &&
                                "function" == typeof this.ws.cleanup &&
                                this.ws.cleanup(),
                              (this.ws = this.createWebSocket()),
                              this.ws
                                .connect()
                                .catch(() => {
                                  sY();
                                })
                                .finally(() => {
                                  this.isReconnecting = !1;
                                }));
                      })();
                  break;
                case r.CONNECTED:
                  this.reconnectAttempts = 0;
                  try {
                    (n = await this.handleConnected()),
                      this.fetchUnseenEventsAPI().catch(() => {});
                  } catch (e) {
                    break;
                  }
                  (this.connected = n),
                    this.updateLastHeartbeat(),
                    this.heartbeatIntervalId &&
                      clearInterval(this.heartbeatIntervalId),
                    (this.heartbeatIntervalId = window.setInterval(() => {
                      this.heartbeat();
                    }, 1e4)),
                    setTimeout(() => {
                      this.heartbeat();
                    }, 100);
                case r.CONNECTING:
              }
              t !== r.CONNECTED && (this.connected = n);
            }),
            e.setIncomingDataListener((e) => {
              var t;
              switch (e.type) {
                case "Heartbeat":
                  this.updateLastHeartbeat();
                  return;
                case "IsLinkedOK":
                case "Linked": {
                  let t = "IsLinkedOK" === e.type ? e.linked : void 0;
                  this.linked = t || e.onlineGuests > 0;
                  break;
                }
                case "GetSessionConfigOK":
                case "SessionConfigUpdated":
                  this.handleSessionMetadataUpdated(e.metadata);
                  break;
                case "Event":
                  this.handleIncomingEvent(e);
              }
              void 0 !== e.id &&
                (null == (t = this.requestResolutions.get(e.id)) || t(e));
            }),
            e
          );
        }
        setupVisibilityChangeHandler() {
          (this.visibilityChangeHandler = () => {
            document.hidden ||
              this.destroyed ||
              (this.connected
                ? this.heartbeat()
                : this.reconnectWithFreshWebSocket());
          }),
            (this.focusHandler = () => {
              this.destroyed ||
                this.connected ||
                this.reconnectWithFreshWebSocket();
            }),
            document.addEventListener(
              "visibilitychange",
              this.visibilityChangeHandler
            ),
            window.addEventListener("focus", this.focusHandler),
            window.addEventListener("pageshow", (e) => {
              e.persisted && this.focusHandler && this.focusHandler();
            });
        }
        reconnectWithFreshWebSocket() {
          if (this.destroyed) return;
          let e = this.ws;
          (this.activeWsInstance = void 0),
            e.disconnect(),
            "cleanup" in e && "function" == typeof e.cleanup && e.cleanup(),
            (this.ws = this.createWebSocket()),
            this.ws.connect().catch(() => {
              sY();
            });
        }
        connect() {
          if (this.destroyed) throw Error("instance is destroyed");
          this.ws.connect();
        }
        async destroy() {
          this.destroyed ||
            (await this.makeRequest(
              {
                type: "SetSessionConfig",
                id: te(this.nextReqId++),
                sessionId: this.session.id,
                metadata: { __destroyed: "1" },
              },
              { timeout: 1e3 }
            ),
            (this.destroyed = !0),
            (this.activeWsInstance = void 0),
            this.heartbeatIntervalId &&
              (clearInterval(this.heartbeatIntervalId),
              (this.heartbeatIntervalId = void 0)),
            this.visibilityChangeHandler &&
              document.removeEventListener(
                "visibilitychange",
                this.visibilityChangeHandler
              ),
            this.focusHandler &&
              window.removeEventListener("focus", this.focusHandler),
            this.ws.disconnect(),
            "cleanup" in this.ws &&
              "function" == typeof this.ws.cleanup &&
              this.ws.cleanup(),
            (this.listener = void 0));
        }
        get connected() {
          return this._connected;
        }
        set connected(e) {
          this._connected = e;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          var t, n;
          (this._linked = e),
            e && (null == (t = this.onceLinked) || t.call(this)),
            null == (n = this.listener) || n.linkedUpdated(e);
        }
        setOnceLinked(e) {
          return new Promise((t) => {
            this.linked
              ? e().then(t)
              : (this.onceLinked = () => {
                  e().then(t), (this.onceLinked = void 0);
                });
          });
        }
        async handleIncomingEvent(e) {
          var t;
          if ("Event" === e.type && "Web3Response" === e.event)
            try {
              let n = await this.cipher.decrypt(e.data),
                r = JSON.parse(n);
              if ("WEB3_RESPONSE" !== r.type) return;
              null == (t = this.listener) ||
                t.handleWeb3ResponseMessage(r.id, r.response);
            } catch (e) {}
        }
        async checkUnseenEvents() {
          await new Promise((e) => setTimeout(e, 250));
          try {
            await this.fetchUnseenEventsAPI();
          } catch (e) {
            console.error("Unable to check for unseen events", e);
          }
        }
        async fetchUnseenEventsAPI() {
          try {
            (await this.http.fetchUnseenEvents()).forEach((e) => {
              this.handleIncomingEvent(e);
            });
          } catch (e) {
            $(
              "walletlink_signer.walletlink_connection.fetch_unseen_events_failed",
              { action: Q.measurement, componentType: J.unknown },
              Z.high
            );
          }
        }
        async publishEvent(e, t, n = !1) {
          let r = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  location: location.href,
                  relaySource:
                    "coinbaseWalletExtension" in window &&
                    window.coinbaseWalletExtension
                      ? "injected_sdk"
                      : "sdk",
                })
              )
            ),
            a = {
              type: "PublishEvent",
              id: te(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: r,
              callWebhook: n,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(a);
            if ("Fail" === e.type)
              throw Error(e.error || "failed to publish event");
            return e.eventId;
          });
        }
        sendData(e) {
          this.ws.sendData(JSON.stringify(e));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4)
            return void this.ws.disconnect();
          if (this.connected)
            try {
              this.ws.sendData("h");
            } catch (e) {}
        }
        async makeRequest(e, t = { timeout: 6e4 }) {
          let n,
            r = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, a) => {
                n = window.setTimeout(() => {
                  a(Error(`request ${r} timed out`));
                }, t.timeout);
              }),
              new Promise((e) => {
                this.requestResolutions.set(r, (t) => {
                  clearTimeout(n), e(t), this.requestResolutions.delete(r);
                });
              }),
            ])
          );
        }
        async handleConnected() {
          return (
            "Fail" !==
              (
                await this.makeRequest({
                  type: "HostSession",
                  id: te(this.nextReqId++),
                  sessionId: this.session.id,
                  sessionKey: this.session.key,
                })
              ).type &&
            (this.sendData({
              type: "IsLinked",
              id: te(this.nextReqId++),
              sessionId: this.session.id,
            }),
            this.sendData({
              type: "GetSessionConfig",
              id: te(this.nextReqId++),
              sessionId: this.session.id,
            }),
            !0)
          );
        }
      }
      class s6 {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 0x7fffffff;
          let e = this._nextRequestId,
            t = tp(e.toString(16));
          return this.callbacks.get(t) && this.callbacks.delete(t), e;
        }
      }
      function s4(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (null != e &&
              "object" == typeof e &&
              "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            `Uint8Array expected of length ${t}, not of length=${e.length}`
          );
      }
      function s8(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      let s7 = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        s9 = (e, t) => (e << (32 - t)) | (e >>> t);
      new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      let oe = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function ot(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error(`utf8ToBytes expected string, got ${typeof e}`);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          s4(e),
          e
        );
      }
      class on {
        clone() {
          return this._cloneInto();
        }
      }
      let or = (e, t, n) => (e & t) ^ (~e & n),
        oa = (e, t, n) => (e & t) ^ (e & n) ^ (t & n);
      class oi extends on {
        constructor(e, t, n, r) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = s7(this.buffer));
        }
        update(e) {
          s8(this);
          let { view: t, buffer: n, blockLen: r } = this,
            a = (e = ot(e)).length;
          for (let i = 0; i < a; ) {
            let s = Math.min(r - this.pos, a - i);
            if (s === r) {
              let t = s7(e);
              for (; r <= a - i; i += r) this.process(t, i);
              continue;
            }
            n.set(e.subarray(i, i + s), this.pos),
              (this.pos += s),
              (i += s),
              this.pos === r && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          s8(this);
          s4(e);
          let t = this.outputLen;
          if (e.length < t)
            throw Error(
              `digestInto() expects output buffer of length at least ${t}`
            );
          this.finished = !0;
          let { buffer: n, view: r, blockLen: a, isLE: i } = this,
            { pos: s } = this;
          (n[s++] = 128),
            this.buffer.subarray(s).fill(0),
            this.padOffset > a - s && (this.process(r, 0), (s = 0));
          for (let e = s; e < a; e++) n[e] = 0;
          !(function (e, t, n, r) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, n, r);
            let a = BigInt(32),
              i = BigInt(0xffffffff),
              s = Number((n >> a) & i),
              o = Number(n & i),
              c = 4 * !!r,
              u = 4 * !r;
            e.setUint32(t + c, s, r), e.setUint32(t + u, o, r);
          })(r, a - 8, BigInt(8 * this.length), i),
            this.process(r, 0);
          let o = s7(e),
            c = this.outputLen;
          if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let u = c / 4,
            l = this.get();
          if (u > l.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < u; e++) o.setUint32(4 * e, l[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: n,
            length: r,
            finished: a,
            destroyed: i,
            pos: s,
          } = this;
          return (
            (e.length = r),
            (e.pos = s),
            (e.finished = a),
            (e.destroyed = i),
            r % t && e.buffer.set(n),
            e
          );
        }
      }
      let os = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        oo = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        oc = new Uint32Array(64);
      class ou extends oi {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | oo[0]),
            (this.B = 0 | oo[1]),
            (this.C = 0 | oo[2]),
            (this.D = 0 | oo[3]),
            (this.E = 0 | oo[4]),
            (this.F = 0 | oo[5]),
            (this.G = 0 | oo[6]),
            (this.H = 0 | oo[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: r, E: a, F: i, G: s, H: o } = this;
          return [e, t, n, r, a, i, s, o];
        }
        set(e, t, n, r, a, i, s, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | a),
            (this.F = 0 | i),
            (this.G = 0 | s),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) oc[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = oc[e - 15],
              n = oc[e - 2],
              r = s9(t, 7) ^ s9(t, 18) ^ (t >>> 3),
              a = s9(n, 17) ^ s9(n, 19) ^ (n >>> 10);
            oc[e] = (a + oc[e - 7] + r + oc[e - 16]) | 0;
          }
          let { A: n, B: r, C: a, D: i, E: s, F: o, G: c, H: u } = this;
          for (let e = 0; e < 64; e++) {
            let t =
                (u +
                  (s9(s, 6) ^ s9(s, 11) ^ s9(s, 25)) +
                  or(s, o, c) +
                  os[e] +
                  oc[e]) |
                0,
              l = ((s9(n, 2) ^ s9(n, 13) ^ s9(n, 22)) + oa(n, r, a)) | 0;
            (u = c),
              (c = o),
              (o = s),
              (s = (i + t) | 0),
              (i = a),
              (a = r),
              (r = n),
              (n = (t + l) | 0);
          }
          (n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (a = (a + this.C) | 0),
            (i = (i + this.D) | 0),
            (s = (s + this.E) | 0),
            (o = (o + this.F) | 0),
            (c = (c + this.G) | 0),
            (u = (u + this.H) | 0),
            this.set(n, r, a, i, s, o, c, u);
        }
        roundClean() {
          oc.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let ol = (function (e) {
          let t = (t) => e().update(ot(t)).digest(),
            n = e();
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = () => e()),
            t
          );
        })(() => new ou()),
        od = "session:id",
        of = "session:secret",
        op = "session:linked";
      class om {
        constructor(e, t, n, r = !1) {
          (this.storage = e),
            (this.id = t),
            (this.secret = n),
            (this.key = (function (e) {
              s4(e);
              let t = "";
              for (let n = 0; n < e.length; n++) t += oe[e[n]];
              return t;
            })(ol(`${t}, ${n} WalletLink`))),
            (this._linked = !!r);
        }
        static create(e) {
          return new om(e, ta(16), ta(32)).save();
        }
        static load(e) {
          let t = e.getItem(od),
            n = e.getItem(op),
            r = e.getItem(of);
          return t && r ? new om(e, t, r, "1" === n) : null;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this.storage.setItem(od, this.id),
            this.storage.setItem(of, this.secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this.storage.setItem(op, this._linked ? "1" : "0");
        }
      }
      class oh {
        constructor() {
          (this.root = null), (this.darkMode = eQ());
        }
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-css-reset"),
            e.appendChild(this.root),
            K();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            (eP(null, this.root),
            e &&
              eP(
                em(
                  oy,
                  Object.assign({}, e, {
                    onDismiss: () => {
                      this.clear();
                    },
                    darkMode: this.darkMode,
                  })
                ),
                this.root
              ));
        }
      }
      let oy = ({
        title: e,
        buttonText: t,
        darkMode: n,
        onButtonClick: r,
        onDismiss: a,
      }) =>
        em(
          eY,
          { darkMode: n },
          em(
            "div",
            { class: "-cbwsdk-redirect-dialog" },
            em(
              "style",
              null,
              ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
            ),
            em("div", {
              class: "-cbwsdk-redirect-dialog-backdrop",
              onClick: a,
            }),
            em(
              "div",
              { class: V("-cbwsdk-redirect-dialog-box", n ? "dark" : "light") },
              em("p", null, e),
              em("button", { onClick: r }, t)
            )
          )
        );
      class ob {
        constructor() {
          (this.attached = !1), (this.redirectDialog = new oh());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          this.redirectDialog.attach(), (this.attached = !0);
        }
        redirectToCoinbaseWallet(e) {
          let t = new URL("https://go.cb-w.com/walletlink");
          t.searchParams.append(
            "redirect_url",
            (function () {
              try {
                if (
                  (function () {
                    try {
                      return null !== window.frameElement;
                    } catch (e) {
                      return !1;
                    }
                  })() &&
                  window.top
                )
                  return window.top.location;
                return window.location;
              } catch (e) {
                return window.location;
              }
            })().href
          ),
            e && t.searchParams.append("wl_url", e);
          let n = document.createElement("a");
          (n.target = "cbw-opener"),
            (n.href = t.href),
            (n.rel = "noreferrer noopener"),
            n.click();
        }
        openCoinbaseWalletDeeplink(e) {
          this.redirectToCoinbaseWallet(e),
            setTimeout(() => {
              this.redirectDialog.present({
                title: "Redirecting to Coinbase Wallet...",
                buttonText: "Open",
                onButtonClick: () => {
                  this.redirectToCoinbaseWallet(e);
                },
              });
            }, 99);
        }
        showConnecting(e) {
          return () => {
            this.redirectDialog.clear();
          };
        }
      }
      class og {
        constructor(e) {
          (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
            (this.isMobileWeb = (function () {
              var e;
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                null == (e = null == window ? void 0 : window.navigator)
                  ? void 0
                  : e.userAgent
              );
            })()),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(s0);
              if (
                (e && (this._session.linked = e),
                (this.isUnlinkedErrorState = !1),
                t)
              ) {
                let n = t.split(" "),
                  r = "true" === this.storage.getItem("IsStandaloneSigning");
                "" === n[0] ||
                  e ||
                  !this._session.linked ||
                  r ||
                  (this.isUnlinkedErrorState = !0);
              }
            }),
            (this.metadataUpdated = (e, t) => {
              this.storage.setItem(e, t);
            }),
            (this.chainUpdated = (e, t) => {
              (this.chainCallbackParams.chainId !== e ||
                this.chainCallbackParams.jsonRpcUrl !== t) &&
                ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                this.chainCallback &&
                  this.chainCallback(t, Number.parseInt(e, 10)));
            }),
            (this.accountUpdated = (e) => {
              this.accountsCallback && this.accountsCallback([e]),
                og.accountRequestCallbackIds.size > 0 &&
                  (Array.from(og.accountRequestCallbackIds.values()).forEach(
                    (t) => {
                      this.invokeCallback(t, {
                        method: "requestEthereumAccounts",
                        result: [e],
                      });
                    }
                  ),
                  og.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage),
            (this.metadata = e.metadata),
            (this.accountsCallback = e.accountsCallback),
            (this.chainCallback = e.chainCallback);
          let { session: t, ui: n, connection: r } = this.subscribe();
          (this._session = t),
            (this.connection = r),
            (this.relayEventManager = new s6()),
            (this.ui = n),
            this.ui.attach();
        }
        subscribe() {
          let e = om.load(this.storage) || om.create(this.storage),
            { linkAPIUrl: t } = this,
            n = new s3({ session: e, linkAPIUrl: t, listener: this }),
            r = this.isMobileWeb ? new ob() : new e1();
          return n.connect(), { session: e, ui: r, connection: n };
        }
        resetAndReload() {
          this.connection
            .destroy()
            .then(() => {
              let e = om.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id && e9.clearAll(),
                document.location.reload();
            })
            .catch((e) => {});
        }
        signEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: tu(e.weiValue),
              data: to(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? tu(e.gasPriceInWei) : null,
              maxFeePerGas: e.gasPriceInWei ? tu(e.gasPriceInWei) : null,
              maxPriorityFeePerGas: e.gasPriceInWei
                ? tu(e.gasPriceInWei)
                : null,
              gasLimit: e.gasLimit ? tu(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: tu(e.weiValue),
              data: to(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? tu(e.gasPriceInWei) : null,
              maxFeePerGas: e.maxFeePerGas ? tu(e.maxFeePerGas) : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas
                ? tu(e.maxPriorityFeePerGas)
                : null,
              gasLimit: e.gasLimit ? tu(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: "submitEthereumTransaction",
            params: { signedTransaction: to(e, !0), chainId: t },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        sendRequest(e) {
          let t = null,
            n = ta(8),
            r = (r) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, e.method, r),
                null == t || t();
            };
          return new Promise((a, i) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: r,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(n, (e) => {
                if ((null == t || t(), e4(e))) return i(Error(e.errorMessage));
                a(e);
              }),
              this.publishWeb3RequestEvent(n, e);
          });
        }
        publishWeb3RequestEvent(e, t) {
          let n = { type: "WEB3_REQUEST", id: e, request: t };
          this.publishEvent("Web3Request", n, !0)
            .then((e) => {})
            .catch((e) => {
              this.handleWeb3ResponseMessage(n.id, {
                method: t.method,
                errorMessage: e.message,
              });
            }),
            this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
        }
        openCoinbaseWalletDeeplink(e) {
          if (this.ui instanceof ob)
            switch (e) {
              case "requestEthereumAccounts":
              case "switchEthereumChain":
                return;
              default:
                window.addEventListener(
                  "blur",
                  () => {
                    window.addEventListener(
                      "focus",
                      () => {
                        this.connection.checkUnseenEvents();
                      },
                      { once: !0 }
                    );
                  },
                  { once: !0 }
                ),
                  this.ui.openCoinbaseWalletDeeplink();
            }
        }
        publishWeb3RequestCanceledEvent(e) {
          this.publishEvent(
            "Web3RequestCanceled",
            { type: "WEB3_REQUEST_CANCELED", id: e },
            !1
          ).then();
        }
        publishEvent(e, t, n) {
          return this.connection.publishEvent(e, t, n);
        }
        handleWeb3ResponseMessage(e, t) {
          if ("requestEthereumAccounts" === t.method) {
            og.accountRequestCallbackIds.forEach((e) =>
              this.invokeCallback(e, t)
            ),
              og.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e, t);
        }
        handleErrorResponse(e, t, n) {
          var r;
          let a =
            null != (r = null == n ? void 0 : n.message)
              ? r
              : "Unspecified error message.";
          this.handleWeb3ResponseMessage(e, { method: t, errorMessage: a });
        }
        invokeCallback(e, t) {
          let n = this.relayEventManager.callbacks.get(e);
          n && (n(t), this.relayEventManager.callbacks.delete(e));
        }
        requestEthereumAccounts() {
          let { appName: e, appLogoUrl: t } = this.metadata,
            n = {
              method: "requestEthereumAccounts",
              params: { appName: e, appLogoUrl: t },
            },
            r = ta(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(r, (n) => {
              if (e4(n)) return t(Error(n.errorMessage));
              e(n);
            }),
              og.accountRequestCallbackIds.add(r),
              this.publishWeb3RequestEvent(r, n);
          });
        }
        watchAsset(e, t, n, r, a, i) {
          let s = {
              method: "watchAsset",
              params: {
                type: e,
                options: { address: t, symbol: n, decimals: r, image: a },
                chainId: i,
              },
            },
            o = null,
            c = ta(8),
            u = (e) => {
              this.publishWeb3RequestCanceledEvent(c),
                this.handleErrorResponse(c, s.method, e),
                null == o || o();
            };
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: u,
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), e4(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, s);
            })
          );
        }
        addEthereumChain(e, t, n, r, a, i) {
          let s = {
              method: "addEthereumChain",
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: r,
                chainName: a,
                iconUrls: n,
                nativeCurrency: i,
              },
            },
            o = null,
            c = ta(8),
            u = (e) => {
              this.publishWeb3RequestCanceledEvent(c),
                this.handleErrorResponse(c, s.method, e),
                null == o || o();
            };
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: u,
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), e4(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, s);
            })
          );
        }
        switchEthereumChain(e, t) {
          let n = {
              method: "switchEthereumChain",
              params: Object.assign({ chainId: e }, { address: t }),
            },
            r = null,
            a = ta(8),
            i = (e) => {
              this.publishWeb3RequestCanceledEvent(a),
                this.handleErrorResponse(a, n.method, e),
                null == r || r();
            };
          return (
            (r = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: i,
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(a, (n) =>
                (null == r || r(), e4(n) && n.errorCode)
                  ? t(
                      E.provider.custom({
                        code: n.errorCode,
                        message:
                          "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                      })
                    )
                  : e4(n)
                  ? t(Error(n.errorMessage))
                  : void e(n)
              ),
                this.publishWeb3RequestEvent(a, n);
            })
          );
        }
      }
      og.accountRequestCallbackIds = new Set();
      var ov = n(50887).Buffer;
      let ow = "DefaultChainId",
        o_ = "DefaultJsonRpcUrl";
      class ox {
        constructor(e) {
          (this._relay = null),
            (this._addresses = []),
            (this.metadata = e.metadata),
            (this._storage = new e9("walletlink", G)),
            (this.callback = e.callback || null);
          let t = this._storage.getItem(s0);
          if (t) {
            let e = t.split(" ");
            "" !== e[0] && (this._addresses = e.map((e) => tb(e)));
          }
          this.initializeRelay();
        }
        getSession() {
          let { id: e, secret: t } =
            this.initializeRelay().getWalletLinkSession();
          return { id: e, secret: t };
        }
        async handshake(e) {
          let t = "eth_requestAccounts",
            n = tx.get(e);
          (({ method: e, correlationId: t }) => {
            $(
              "walletlink_signer.handshake.started",
              {
                action: Q.unknown,
                componentType: J.unknown,
                method: e,
                correlationId: t,
              },
              Z.high
            );
          })({ method: t, correlationId: n });
          try {
            await this._eth_requestAccounts(),
              (({ method: e, correlationId: t }) => {
                $(
                  "walletlink_signer.handshake.completed",
                  {
                    action: Q.unknown,
                    componentType: J.unknown,
                    method: e,
                    correlationId: t,
                  },
                  Z.high
                );
              })({ method: t, correlationId: n });
          } catch (e) {
            throw (
              ((({ method: e, correlationId: t, errorMessage: n }) => {
                $(
                  "walletlink_signer.handshake.error",
                  {
                    action: Q.error,
                    componentType: J.unknown,
                    method: e,
                    correlationId: t,
                    errorMessage: n,
                  },
                  Z.high
                );
              })({ method: t, correlationId: n, errorMessage: tI(e) }),
              e)
            );
          }
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null != (e = this._storage.getItem(o_)) ? e : void 0;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(o_, e);
        }
        updateProviderInfo(e, t) {
          var n;
          this.jsonRpcUrl = e;
          let r = this.getChainId();
          this._storage.setItem(ow, t.toString(10)),
            tv(t) !== r &&
              (null == (n = this.callback) ||
                n.call(this, "chainChanged", tl(t)));
        }
        async watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type) throw E.rpc.invalidParams("Type is required");
          if ((null == t ? void 0 : t.type) !== "ERC20")
            throw E.rpc.invalidParams(
              `Asset of type '${t.type}' is not supported`
            );
          if (!(null == t ? void 0 : t.options))
            throw E.rpc.invalidParams("Options are required");
          if (!(null == t ? void 0 : t.options.address))
            throw E.rpc.invalidParams("Address is required");
          let n = this.getChainId(),
            { address: r, symbol: a, image: i, decimals: s } = t.options,
            o = this.initializeRelay(),
            c = await o.watchAsset(
              t.type,
              r,
              a,
              s,
              i,
              null == n ? void 0 : n.toString()
            );
          return !e4(c) && !!c.result;
        }
        async addEthereumChain(e) {
          var t, n;
          let r = e[0];
          if ((null == (t = r.rpcUrls) ? void 0 : t.length) === 0)
            throw E.rpc.invalidParams("please pass in at least 1 rpcUrl");
          if (!r.chainName || "" === r.chainName.trim())
            throw E.rpc.invalidParams("chainName is a required field");
          if (!r.nativeCurrency)
            throw E.rpc.invalidParams("nativeCurrency is a required field");
          let a = Number.parseInt(r.chainId, 16);
          if (a === this.getChainId()) return !1;
          let i = this.initializeRelay(),
            {
              rpcUrls: s = [],
              blockExplorerUrls: o = [],
              chainName: c,
              iconUrls: u = [],
              nativeCurrency: l,
            } = r,
            d = await i.addEthereumChain(a.toString(), s, u, o, c, l);
          if (e4(d)) return !1;
          if ((null == (n = d.result) ? void 0 : n.isApproved) === !0)
            return this.updateProviderInfo(s[0], a), null;
          throw E.rpc.internal("unable to add ethereum chain");
        }
        async switchEthereumChain(e) {
          let t = Number.parseInt(e[0].chainId, 16),
            n = this.initializeRelay(),
            r = await n.switchEthereumChain(
              t.toString(10),
              this.selectedAddress || void 0
            );
          if (e4(r)) throw r;
          let a = r.result;
          return (
            a.isApproved &&
              a.rpcUrl.length > 0 &&
              this.updateProviderInfo(a.rpcUrl, t),
            null
          );
        }
        async cleanup() {
          (this.callback = null),
            this._relay && this._relay.resetAndReload(),
            this._storage.clear();
        }
        _setAddresses(e, t) {
          var n;
          if (!Array.isArray(e)) throw Error("addresses is not an array");
          let r = e.map((e) => tb(e));
          JSON.stringify(r) !== JSON.stringify(this._addresses) &&
            ((this._addresses = r),
            null == (n = this.callback) || n.call(this, "accountsChanged", r),
            this._storage.setItem(s0, r.join(" ")));
        }
        async request(e) {
          let t = tx.get(e);
          (({ method: e, correlationId: t }) => {
            $(
              "walletlink_signer.request.started",
              {
                action: Q.unknown,
                componentType: J.unknown,
                method: e,
                correlationId: t,
              },
              Z.high
            );
          })({ method: e.method, correlationId: t });
          try {
            let n = await this._request(e);
            return (
              (({ method: e, correlationId: t }) => {
                $(
                  "walletlink_signer.request.completed",
                  {
                    action: Q.unknown,
                    componentType: J.unknown,
                    method: e,
                    correlationId: t,
                  },
                  Z.high
                );
              })({ method: e.method, correlationId: t }),
              n
            );
          } catch (n) {
            throw (
              ((({ method: e, correlationId: t, errorMessage: n }) => {
                $(
                  "walletlink_signer.request.error",
                  {
                    action: Q.error,
                    componentType: J.unknown,
                    method: e,
                    correlationId: t,
                    errorMessage: n,
                  },
                  Z.high
                );
              })({ method: e.method, correlationId: t, errorMessage: tI(n) }),
              n)
            );
          }
        }
        async _request(e) {
          let t = e.params || [];
          switch (e.method) {
            case "eth_accounts":
              return [...this._addresses];
            case "eth_coinbase":
              return this.selectedAddress || null;
            case "net_version":
              return this.getChainId().toString(10);
            case "eth_chainId":
              return tl(this.getChainId());
            case "eth_requestAccounts":
              return this._eth_requestAccounts();
            case "eth_ecRecover":
            case "personal_ecRecover":
              return this.ecRecover(e);
            case "personal_sign":
              return this.personalSign(e);
            case "eth_signTransaction":
              return this._eth_signTransaction(t);
            case "eth_sendRawTransaction":
              return this._eth_sendRawTransaction(t);
            case "eth_sendTransaction":
              return this._eth_sendTransaction(t);
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
              return this.signTypedData(e);
            case "wallet_addEthereumChain":
              return this.addEthereumChain(t);
            case "wallet_switchEthereumChain":
              return this.switchEthereumChain(t);
            case "wallet_watchAsset":
              return this.watchAsset(t);
            default:
              if (!this.jsonRpcUrl)
                throw E.rpc.internal("No RPC URL set for chain");
              return z(e, this.jsonRpcUrl);
          }
        }
        _ensureKnownAddress(e) {
          let t = tb(e);
          if (!this._addresses.map((e) => tb(e)).includes(t))
            throw Error("Unknown Ethereum address");
        }
        _prepareTransactionParams(e) {
          let t = e.from ? tb(e.from) : this.selectedAddress;
          if (!t) throw Error("Ethereum address is unavailable");
          this._ensureKnownAddress(t);
          let n = e.to ? tb(e.to) : null,
            r = null != e.value ? tw(e.value) : BigInt(0),
            a = e.data ? tg(e.data) : ov.alloc(0),
            i = null != e.nonce ? tv(e.nonce) : null,
            s = null != e.gasPrice ? tw(e.gasPrice) : null,
            o = null != e.maxFeePerGas ? tw(e.maxFeePerGas) : null,
            c =
              null != e.maxPriorityFeePerGas
                ? tw(e.maxPriorityFeePerGas)
                : null;
          return {
            fromAddress: t,
            toAddress: n,
            weiValue: r,
            data: a,
            nonce: i,
            gasPriceInWei: s,
            maxFeePerGas: o,
            maxPriorityFeePerGas: c,
            gasLimit: null != e.gas ? tw(e.gas) : null,
            chainId: e.chainId ? tv(e.chainId) : this.getChainId(),
          };
        }
        async ecRecover(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw E.rpc.invalidParams();
          let r = this.initializeRelay(),
            a = await r.sendRequest({
              method: "ethereumAddressFromSignedMessage",
              params: {
                message: tc(n[0]),
                signature: tc(n[1]),
                addPrefix: "personal_ecRecover" === t,
              },
            });
          if (e4(a)) throw a;
          return a.result;
        }
        getChainId() {
          var e;
          return Number.parseInt(
            null != (e = this._storage.getItem(ow)) ? e : "1",
            10
          );
        }
        async _eth_requestAccounts() {
          var e, t;
          if (this._addresses.length > 0)
            return (
              null == (e = this.callback) ||
                e.call(this, "connect", { chainId: tl(this.getChainId()) }),
              this._addresses
            );
          let n = this.initializeRelay(),
            r = await n.requestEthereumAccounts();
          if (e4(r)) throw r;
          if (!r.result) throw Error("accounts received is empty");
          return (
            this._setAddresses(r.result),
            null == (t = this.callback) ||
              t.call(this, "connect", { chainId: tl(this.getChainId()) }),
            this._addresses
          );
        }
        async personalSign({ params: e }) {
          if (!Array.isArray(e)) throw E.rpc.invalidParams();
          let t = e[1],
            n = e[0];
          this._ensureKnownAddress(t);
          let r = this.initializeRelay(),
            a = await r.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: tb(t),
                message: tc(n),
                addPrefix: !0,
                typedDataJson: null,
              },
            });
          if (e4(a)) throw a;
          return a.result;
        }
        async _eth_signTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            r = await n.signEthereumTransaction(t);
          if (e4(r)) throw r;
          return r.result;
        }
        async _eth_sendRawTransaction(e) {
          let t = tg(e[0]),
            n = this.initializeRelay(),
            r = await n.submitEthereumTransaction(t, this.getChainId());
          if (e4(r)) throw r;
          return r.result;
        }
        async _eth_sendTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            r = await n.signAndSubmitEthereumTransaction(t);
          if (e4(r)) throw r;
          return r.result;
        }
        async signTypedData(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw E.rpc.invalidParams();
          let r = n[+("eth_signTypedData_v1" === t)],
            a = n[+("eth_signTypedData_v1" !== t)];
          this._ensureKnownAddress(r);
          let i = this.initializeRelay(),
            s = await i.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: tb(r),
                message: to(
                  {
                    eth_signTypedData_v1: sX.hashForSignTypedDataLegacy,
                    eth_signTypedData_v3: sX.hashForSignTypedData_v3,
                    eth_signTypedData_v4: sX.hashForSignTypedData_v4,
                    eth_signTypedData: sX.hashForSignTypedData_v4,
                  }[t]({
                    data: (function (e) {
                      if ("string" == typeof e) return JSON.parse(e);
                      if ("object" == typeof e) return e;
                      throw E.rpc.invalidParams(
                        `Not a JSON string or an object: ${String(e)}`
                      );
                    })(a),
                  }),
                  !0
                ),
                typedDataJson: JSON.stringify(a, null, 2),
                addPrefix: !1,
              },
            });
          if (e4(s)) throw s;
          return s.result;
        }
        initializeRelay() {
          return (
            this._relay ||
              (this._relay = new og({
                linkAPIUrl: G,
                storage: this._storage,
                metadata: this.metadata,
                accountsCallback: this._setAddresses.bind(this),
                chainCallback: this.updateProviderInfo.bind(this),
              })),
            this._relay
          );
        }
      }
      let ok = "SignerType",
        oA = new e9("CBWSDK", "SignerConfigurator");
      function oI(e) {
        if (e) return e instanceof sZ ? "scw" : "walletlink";
      }
      async function oS(e) {
        let {
          communicator: t,
          metadata: n,
          handshakeRequest: r,
          callback: a,
        } = e;
        oE(t, n, a, r).catch(() => {});
        let i = {
            id: crypto.randomUUID(),
            event: "selectSignerType",
            data: Object.assign(Object.assign({}, e.preference), {
              handshakeRequest: r,
            }),
          },
          { data: s } = await t.postRequestAndWaitForResponse(i);
        return s;
      }
      async function oE(e, t, n, r) {
        await e.onMessage(({ event: e }) => "WalletLinkSessionRequest" === e);
        let a = new ox({ metadata: t, callback: n });
        e.postMessage({
          event: "WalletLinkUpdate",
          data: { session: a.getSession() },
        }),
          await a.handshake(r),
          e.postMessage({ event: "WalletLinkUpdate", data: { connected: !0 } });
      }
      var oT = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var a = 0, r = Object.getOwnPropertySymbols(e);
            a < r.length;
            a++
          )
            0 > t.indexOf(r[a]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        return n;
      };
      class oP extends e7 {
        constructor(e) {
          var { metadata: t } = e,
            n = e.preference,
            { keysUrl: r } = n,
            a = oT(n, ["keysUrl"]);
          super(),
            (this.signer = null),
            (this.isCoinbaseWallet = !0),
            (this.metadata = t),
            (this.preference = a),
            (this.communicator = new e6({
              url: r,
              metadata: t,
              preference: a,
            }));
          let i = oA.getItem(ok);
          i &&
            ((this.signer = this.initSigner(i)),
            (({ signerType: e }) => {
              $(
                "provider.signer.loaded_from_storage",
                {
                  action: Q.measurement,
                  componentType: J.unknown,
                  signerType: e,
                },
                Z.low
              );
            })({ signerType: i }));
        }
        async request(e) {
          let t = crypto.randomUUID();
          tx.set(e, t),
            (({ method: e, correlationId: t }) => {
              $(
                "provider.request.started",
                {
                  action: Q.unknown,
                  componentType: J.unknown,
                  method: e,
                  correlationId: t,
                },
                Z.high
              );
            })({ method: e.method, correlationId: t });
          try {
            let n = await this._request(e);
            return (
              (({ method: e, signerType: t, correlationId: n }) => {
                $(
                  "provider.request.responded",
                  {
                    action: Q.unknown,
                    componentType: J.unknown,
                    method: e,
                    signerType: t,
                    correlationId: n,
                  },
                  Z.high
                );
              })({
                method: e.method,
                signerType: oI(this.signer),
                correlationId: t,
              }),
              n
            );
          } catch (n) {
            throw (
              ((({
                method: e,
                correlationId: t,
                signerType: n,
                errorMessage: r,
              }) => {
                $(
                  "provider.request.error",
                  {
                    action: Q.error,
                    componentType: J.unknown,
                    method: e,
                    signerType: n,
                    correlationId: t,
                    errorMessage: r,
                  },
                  Z.high
                );
              })({
                method: e.method,
                correlationId: t,
                signerType: oI(this.signer),
                errorMessage: n instanceof Error ? n.message : "",
              }),
              n)
            );
          } finally {
            tx.delete(e);
          }
        }
        async _request(e) {
          try {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw E.rpc.invalidParams({
                message: "Expected a single, non-array, object argument.",
                data: e,
              });
            let { method: t, params: n } = e;
            if ("string" != typeof t || 0 === t.length)
              throw E.rpc.invalidParams({
                message: "'args.method' must be a non-empty string.",
                data: e,
              });
            if (
              void 0 !== n &&
              !Array.isArray(n) &&
              ("object" != typeof n || null === n)
            )
              throw E.rpc.invalidParams({
                message:
                  "'args.params' must be an object or array if provided.",
                data: e,
              });
            switch (t) {
              case "eth_sign":
              case "eth_signTypedData_v2":
              case "eth_subscribe":
              case "eth_unsubscribe":
                throw E.provider.unsupportedMethod();
            }
            if (!this.signer)
              switch (e.method) {
                case "eth_requestAccounts": {
                  let t,
                    n = h.subAccountsConfig.get();
                  t = (null == n ? void 0 : n.enableAutoSubAccounts)
                    ? "scw"
                    : await this.requestSignerSelection(e);
                  let r = this.initSigner(t);
                  "scw" === t && (null == n ? void 0 : n.enableAutoSubAccounts)
                    ? (await r.handshake({ method: "handshake" }),
                      await r.request(e))
                    : await r.handshake(e),
                    (this.signer = r),
                    oA.setItem(ok, t);
                  break;
                }
                case "wallet_connect": {
                  let t = this.initSigner("scw");
                  await t.handshake({ method: "handshake" });
                  let n = await t.request(e);
                  return (this.signer = t), n;
                }
                case "wallet_sendCalls":
                case "wallet_sign": {
                  let t = this.initSigner("scw");
                  await t.handshake({ method: "handshake" });
                  let n = await t.request(e);
                  return await t.cleanup(), n;
                }
                case "wallet_getCallsStatus":
                  return await z(e, F);
                case "net_version":
                  return 1;
                case "eth_chainId":
                  return tl(1);
                default:
                  throw E.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
              }
            return await this.signer.request(e);
          } catch (t) {
            let { code: e } = t;
            return (
              e === w.provider.unauthorized && this.disconnect(),
              Promise.reject(
                (function (e) {
                  let t = (function (e, { shouldIncludeStack: t = !1 } = {}) {
                      var n, r;
                      let a = {};
                      if (
                        e &&
                        "object" == typeof e &&
                        !Array.isArray(e) &&
                        I(e, "code") &&
                        Number.isInteger((n = e.code)) &&
                        (_[n.toString()] || ((r = n) >= -32099 && r <= -32e3))
                      )
                        (a.code = e.code),
                          e.message && "string" == typeof e.message
                            ? ((a.message = e.message),
                              I(e, "data") && (a.data = e.data))
                            : ((a.message = k(a.code)),
                              (a.data = { originalError: A(e) }));
                      else
                        (a.code = w.rpc.internal),
                          (a.message = S(e, "message") ? e.message : x),
                          (a.data = { originalError: A(e) });
                      return (
                        t && (a.stack = S(e, "stack") ? e.stack : void 0), a
                      );
                    })(
                      (function (e) {
                        var t;
                        if ("string" == typeof e)
                          return { message: e, code: w.rpc.internal };
                        if (e4(e)) {
                          let n = e.errorMessage,
                            r =
                              null != (t = e.errorCode)
                                ? t
                                : n.match(/(denied|rejected)/i)
                                ? w.provider.userRejectedRequest
                                : void 0;
                          return Object.assign(Object.assign({}, e), {
                            message: n,
                            code: r,
                            data: { method: e.method },
                          });
                        }
                        return e;
                      })(e),
                      { shouldIncludeStack: !0 }
                    ),
                    n = new URL(
                      "https://docs.cloud.coinbase.com/wallet-sdk/docs/errors"
                    );
                  return (
                    n.searchParams.set("version", d),
                    n.searchParams.set("code", t.code.toString()),
                    n.searchParams.set("message", t.message),
                    Object.assign(Object.assign({}, t), { docUrl: n.href })
                  );
                })(t)
              )
            );
          }
        }
        async enable() {
          return (
            console.warn(
              '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
            ),
            $(
              "provider.enable_function.called",
              { action: Q.measurement, componentType: J.unknown },
              Z.high
            ),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async disconnect() {
          var e;
          await (null == (e = this.signer) ? void 0 : e.cleanup()),
            (this.signer = null),
            e9.clearAll(),
            tx.clear(),
            this.emit(
              "disconnect",
              E.provider.disconnected("User initiated disconnection")
            );
        }
        async requestSignerSelection(e) {
          $(
            "signer.selection.requested",
            { action: Q.unknown, componentType: J.unknown },
            Z.high
          );
          let t = await oS({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
            handshakeRequest: e,
            callback: this.emit.bind(this),
          });
          return (
            $(
              "signer.selection.responded",
              { action: Q.unknown, componentType: J.unknown, signerType: t },
              Z.high
            ),
            t
          );
        }
        initSigner(e) {
          let {
            signerType: t,
            metadata: n,
            communicator: r,
            callback: a,
          } = {
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
          };
          switch (t) {
            case "scw":
              return new sZ({ metadata: n, callback: a, communicator: r });
            case "walletlink":
              return new ox({ metadata: n, callback: a });
          }
        }
      }
      let oC = { options: "all" };
      function oO(e) {
        let t = {
          metadata: {
            appName: e.appName || "Dapp",
            appLogoUrl: e.appLogoUrl || "",
            appChainIds: e.appChainIds || [],
          },
          preference: Object.assign(oC, null != (n = e.preference) ? n : {}),
          paymasterUrls: e.paymasterUrls,
        };
        (null == (r = e.subAccounts) ? void 0 : r.toOwnerAccount) &&
          q(e.subAccounts.toOwnerAccount),
          h.subAccountsConfig.set({
            toOwnerAccount:
              null == (o = e.subAccounts) ? void 0 : o.toOwnerAccount,
            enableAutoSubAccounts:
              null == (c = e.subAccounts) ? void 0 : c.enableAutoSubAccounts,
          }),
          h.config.set(t),
          h.persist.rehydrate(),
          U(),
          !1 !== t.preference.telemetry &&
            new Promise((e, t) => {
              if (window.ClientAnalytics) return e();
              try {
                let t = document.createElement("script");
                (t.textContent =
                  '!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ClientAnalytics=t():e.ClientAnalytics=t()}(this,(function(){return(()=>{var e={792:e=>{var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=t},562:e=>{var t,n;t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],r=0;r<e.length;r+=3)for(var i=e[r]<<16|e[r+1]<<8|e[r+2],a=0;a<4;a++)8*r+6*a<=8*e.length?n.push(t.charAt(i>>>6*(3-a)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\\/]/gi,"");for(var n=[],r=0,i=0;r<e.length;i=++r%4)0!=i&&n.push((t.indexOf(e.charAt(r-1))&Math.pow(2,-2*i+8)-1)<<2*i|t.indexOf(e.charAt(r))>>>6-2*i);return n}},e.exports=n},335:e=>{function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},762:(e,t,n)=>{var r,i,a,o,s;r=n(562),i=n(792).utf8,a=n(335),o=n(792).bin,(s=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?o.stringToBytes(e):i.stringToBytes(e):a(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var n=r.bytesToWords(e),c=8*e.length,u=1732584193,l=-271733879,d=-1732584194,p=271733878,m=0;m<n.length;m++)n[m]=16711935&(n[m]<<8|n[m]>>>24)|4278255360&(n[m]<<24|n[m]>>>8);n[c>>>5]|=128<<c%32,n[14+(c+64>>>9<<4)]=c;var f=s._ff,v=s._gg,g=s._hh,b=s._ii;for(m=0;m<n.length;m+=16){var h=u,w=l,y=d,T=p;u=f(u,l,d,p,n[m+0],7,-680876936),p=f(p,u,l,d,n[m+1],12,-389564586),d=f(d,p,u,l,n[m+2],17,606105819),l=f(l,d,p,u,n[m+3],22,-1044525330),u=f(u,l,d,p,n[m+4],7,-176418897),p=f(p,u,l,d,n[m+5],12,1200080426),d=f(d,p,u,l,n[m+6],17,-1473231341),l=f(l,d,p,u,n[m+7],22,-45705983),u=f(u,l,d,p,n[m+8],7,1770035416),p=f(p,u,l,d,n[m+9],12,-1958414417),d=f(d,p,u,l,n[m+10],17,-42063),l=f(l,d,p,u,n[m+11],22,-1990404162),u=f(u,l,d,p,n[m+12],7,1804603682),p=f(p,u,l,d,n[m+13],12,-40341101),d=f(d,p,u,l,n[m+14],17,-1502002290),u=v(u,l=f(l,d,p,u,n[m+15],22,1236535329),d,p,n[m+1],5,-165796510),p=v(p,u,l,d,n[m+6],9,-1069501632),d=v(d,p,u,l,n[m+11],14,643717713),l=v(l,d,p,u,n[m+0],20,-373897302),u=v(u,l,d,p,n[m+5],5,-701558691),p=v(p,u,l,d,n[m+10],9,38016083),d=v(d,p,u,l,n[m+15],14,-660478335),l=v(l,d,p,u,n[m+4],20,-405537848),u=v(u,l,d,p,n[m+9],5,568446438),p=v(p,u,l,d,n[m+14],9,-1019803690),d=v(d,p,u,l,n[m+3],14,-187363961),l=v(l,d,p,u,n[m+8],20,1163531501),u=v(u,l,d,p,n[m+13],5,-1444681467),p=v(p,u,l,d,n[m+2],9,-51403784),d=v(d,p,u,l,n[m+7],14,1735328473),u=g(u,l=v(l,d,p,u,n[m+12],20,-1926607734),d,p,n[m+5],4,-378558),p=g(p,u,l,d,n[m+8],11,-2022574463),d=g(d,p,u,l,n[m+11],16,1839030562),l=g(l,d,p,u,n[m+14],23,-35309556),u=g(u,l,d,p,n[m+1],4,-1530992060),p=g(p,u,l,d,n[m+4],11,1272893353),d=g(d,p,u,l,n[m+7],16,-155497632),l=g(l,d,p,u,n[m+10],23,-1094730640),u=g(u,l,d,p,n[m+13],4,681279174),p=g(p,u,l,d,n[m+0],11,-358537222),d=g(d,p,u,l,n[m+3],16,-722521979),l=g(l,d,p,u,n[m+6],23,76029189),u=g(u,l,d,p,n[m+9],4,-640364487),p=g(p,u,l,d,n[m+12],11,-421815835),d=g(d,p,u,l,n[m+15],16,530742520),u=b(u,l=g(l,d,p,u,n[m+2],23,-995338651),d,p,n[m+0],6,-198630844),p=b(p,u,l,d,n[m+7],10,1126891415),d=b(d,p,u,l,n[m+14],15,-1416354905),l=b(l,d,p,u,n[m+5],21,-57434055),u=b(u,l,d,p,n[m+12],6,1700485571),p=b(p,u,l,d,n[m+3],10,-1894986606),d=b(d,p,u,l,n[m+10],15,-1051523),l=b(l,d,p,u,n[m+1],21,-2054922799),u=b(u,l,d,p,n[m+8],6,1873313359),p=b(p,u,l,d,n[m+15],10,-30611744),d=b(d,p,u,l,n[m+6],15,-1560198380),l=b(l,d,p,u,n[m+13],21,1309151649),u=b(u,l,d,p,n[m+4],6,-145523070),p=b(p,u,l,d,n[m+11],10,-1120210379),d=b(d,p,u,l,n[m+2],15,718787259),l=b(l,d,p,u,n[m+9],21,-343485551),u=u+h>>>0,l=l+w>>>0,d=d+y>>>0,p=p+T>>>0}return r.endian([u,l,d,p])})._ff=function(e,t,n,r,i,a,o){var s=e+(t&n|~t&r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._gg=function(e,t,n,r,i,a,o){var s=e+(t&r|n&~r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._hh=function(e,t,n,r,i,a,o){var s=e+(t^n^r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._ii=function(e,t,n,r,i,a,o){var s=e+(n^(t|~r))+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=r.wordsToBytes(s(e,t));return t&&t.asBytes?n:t&&t.asString?o.bytesToString(n):r.bytesToHex(n)}},2:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Perfume:()=>ze,incrementUjNavigation:()=>Le,markStep:()=>Re,markStepOnce:()=>qe});var r,i,a={isResourceTiming:!1,isElementTiming:!1,maxTime:3e4,reportOptions:{},enableNavigationTracking:!0},o=window,s=o.console,c=o.navigator,u=o.performance,l=function(){return c.deviceMemory},d=function(){return c.hardwareConcurrency},p="mark.",m=function(){return u&&!!u.getEntriesByType&&!!u.now&&!!u.mark},f="4g",v=!1,g={},b={value:0},h={value:{beacon:0,css:0,fetch:0,img:0,other:0,script:0,total:0,xmlhttprequest:0}},w={value:0},y={value:0},T={},k={isHidden:!1,didChange:!1},_=function(){k.isHidden=!1,document.hidden&&(k.isHidden=document.hidden,k.didChange=!0)},S=function(e,t){try{var n=new PerformanceObserver((function(e){t(e.getEntries())}));return n.observe({type:e,buffered:!0}),n}catch(e){s.warn("Perfume.js:",e)}return null},E=function(){return!!(d()&&d()<=4)||!!(l()&&l()<=4)},x=function(e,t){switch(e){case"slow-2g":case"2g":case"3g":return!0;default:return E()||t}},O=function(e){return parseFloat(e.toFixed(4))},j=function(e){return"number"!=typeof e?null:O(e/Math.pow(1024,2))},N=function(e,t,n,r,i){var s,u=function(){a.analyticsTracker&&(k.isHidden&&!["CLS","INP"].includes(e)||a.analyticsTracker({attribution:r,metricName:e,data:t,navigatorInformation:c?{deviceMemory:l()||0,hardwareConcurrency:d()||0,serviceWorkerStatus:"serviceWorker"in c?c.serviceWorker.controller?"controlled":"supported":"unsupported",isLowEndDevice:E(),isLowEndExperience:x(f,v)}:{},rating:n,navigationType:i}))};["CLS","INP"].includes(e)?u():(s=u,"requestIdleCallback"in o?o.requestIdleCallback(s,{timeout:3e3}):s())},I=function(e){e.forEach((function(e){if(!("self"!==e.name||e.startTime<b.value)){var t=e.duration-50;t>0&&(w.value+=t,y.value+=t)}}))};!function(e){e.instant="instant",e.quick="quick",e.moderate="moderate",e.slow="slow",e.unavoidable="unavoidable"}(r||(r={}));var P,M,B,C,D,A=((i={})[r.instant]={vitalsThresholds:[100,200],maxOutlierThreshold:1e4},i[r.quick]={vitalsThresholds:[200,500],maxOutlierThreshold:1e4},i[r.moderate]={vitalsThresholds:[500,1e3],maxOutlierThreshold:1e4},i[r.slow]={vitalsThresholds:[1e3,2e3],maxOutlierThreshold:1e4},i[r.unavoidable]={vitalsThresholds:[2e3,5e3],maxOutlierThreshold:2e4},i),L={RT:[100,200],TBT:[200,600],NTBT:[200,600]},U=function(e,t){return L[e]?t<=L[e][0]?"good":t<=L[e][1]?"needsImprovement":"poor":null},R=function(e,t,n){Object.keys(t).forEach((function(e){"number"==typeof t[e]&&(t[e]=O(t[e]))})),N(e,t,null,n||{})},q=function(e){var t=e.attribution,n=e.name,r=e.rating,i=e.value,o=e.navigationType;"FCP"===n&&(b.value=i),["FCP","LCP"].includes(n)&&!T[0]&&(T[0]=S("longtask",I)),"FID"===n&&setTimeout((function(){k.didChange||(q({attribution:t,name:"TBT",rating:U("TBT",w.value),value:w.value,navigationType:o}),R("dataConsumption",h.value))}),1e4);var s=O(i);s<=a.maxTime&&s>=0&&N(n,s,r,t,o)},F=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},z=function(e){if("loading"===document.readyState)return"loading";var t=F();if(t){if(e<t.domInteractive)return"loading";if(0===t.domContentLoadedEventStart||e<t.domContentLoadedEventStart)return"dom-interactive";if(0===t.domComplete||e<t.domComplete)return"dom-content-loaded"}return"complete"},K=function(e){var t=e.nodeName;return 1===e.nodeType?t.toLowerCase():t.toUpperCase().replace(/^#/,"")},$=function(e,t){var n="";try{for(;e&&9!==e.nodeType;){var r=e,i=r.id?"#"+r.id:K(r)+(r.className&&r.className.length?"."+r.className.replace(/\\s+/g,"."):"");if(n.length+i.length>(t||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;e=r.parentNode}}catch(e){}return n},Q=-1,W=function(){return Q},H=function(e){addEventListener("pageshow",(function(t){t.persisted&&(Q=t.timeStamp,e(t))}),!0)},V=function(){var e=F();return e&&e.activationStart||0},J=function(e,t){var n=F(),r="navigate";return W()>=0?r="back-forward-cache":n&&(r=document.prerendering||V()>0?"prerender":document.wasDiscarded?"restore":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},X=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},G=function(e,t){var n=function n(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(e(r),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},Z=function(e,t,n,r){var i,a;return function(o){t.value>=0&&(o||r)&&((a=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=a,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},Y=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},ee=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},te=-1,ne=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},re=function(e){"hidden"===document.visibilityState&&te>-1&&(te="visibilitychange"===e.type?e.timeStamp:0,ae())},ie=function(){addEventListener("visibilitychange",re,!0),addEventListener("prerenderingchange",re,!0)},ae=function(){removeEventListener("visibilitychange",re,!0),removeEventListener("prerenderingchange",re,!0)},oe=function(){return te<0&&(te=ne(),ie(),H((function(){setTimeout((function(){te=ne(),ie()}),0)}))),{get firstHiddenTime(){return te}}},se=function(e,t){t=t||{},ee((function(){var n,r=[1800,3e3],i=oe(),a=J("FCP"),o=X("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<i.firstHiddenTime&&(a.value=Math.max(e.startTime-V(),0),a.entries.push(e),n(!0)))}))}));o&&(n=Z(e,a,r,t.reportAllChanges),H((function(i){a=J("FCP"),n=Z(e,a,r,t.reportAllChanges),Y((function(){a.value=performance.now()-i.timeStamp,n(!0)}))})))}))},ce={passive:!0,capture:!0},ue=new Date,le=function(e,t){P||(P=t,M=e,B=new Date,me(removeEventListener),de())},de=function(){if(M>=0&&M<B-ue){var e={entryType:"first-input",name:P.type,target:P.target,cancelable:P.cancelable,startTime:P.timeStamp,processingStart:P.timeStamp+M};C.forEach((function(t){t(e)})),C=[]}},pe=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){le(e,t),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,ce),removeEventListener("pointercancel",r,ce)};addEventListener("pointerup",n,ce),addEventListener("pointercancel",r,ce)}(t,e):le(t,e)}},me=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,pe,ce)}))},fe=0,ve=1/0,ge=0,be=function(e){e.forEach((function(e){e.interactionId&&(ve=Math.min(ve,e.interactionId),ge=Math.max(ge,e.interactionId),fe=ge?(ge-ve)/7+1:0)}))},he=function(){return D?fe:performance.interactionCount||0},we=0,ye=function(){return he()-we},Te=[],ke={},_e=function(e){var t=Te[Te.length-1],n=ke[e.interactionId];if(n||Te.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};ke[r.id]=r,Te.push(r)}Te.sort((function(e,t){return t.latency-e.latency})),Te.splice(10).forEach((function(e){delete ke[e.id]}))}},Se={},Ee=function e(t){document.prerendering?ee((function(){return e(t)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0)},xe=function(e,t){t=t||{};var n=[800,1800],r=J("TTFB"),i=Z(e,r,n,t.reportAllChanges);Ee((function(){var a=F();if(a){var o=a.responseStart;if(o<=0||o>performance.now())return;r.value=Math.max(o-V(),0),r.entries=[a],i(!0),H((function(){r=J("TTFB",0),(i=Z(e,r,n,t.reportAllChanges))(!0)}))}}))},Oe=function(e){e.forEach((function(e){e.identifier&&q({attribution:{identifier:e.identifier},name:"ET",rating:null,value:e.startTime})}))},je=function(e){e.forEach((function(e){if(a.isResourceTiming&&R("resourceTiming",e),e.decodedBodySize&&e.initiatorType){var t=e.decodedBodySize/1e3;h.value[e.initiatorType]+=t,h.value.total+=t}}))},Ne=function(){!function(e,t){xe((function(e){!function(e){if(e.entries.length){var t=e.entries[0],n=t.activationStart||0,r=Math.max(t.domainLookupStart-n,0),i=Math.max(t.connectStart-n,0),a=Math.max(t.requestStart-n,0);e.attribution={waitingTime:r,dnsTime:i-r,connectionTime:a-i,requestTime:e.value-a,navigationEntry:t}}else e.attribution={waitingTime:0,dnsTime:0,connectionTime:0,requestTime:0}}(e),function(e){e.value>0&&q(e)}(e)}),t)}(0,a.reportOptions.ttfb),function(e,t){!function(e,t){t=t||{},ee((function(){var e,n=[.1,.25],r=J("CLS"),i=-1,a=0,o=[],s=function(e){i>-1&&function(e){!function(e){if(e.entries.length){var t=e.entries.reduce((function(e,t){return e&&e.value>t.value?e:t}));if(t&&t.sources&&t.sources.length){var n=(r=t.sources).find((function(e){return e.node&&1===e.node.nodeType}))||r[0];if(n)return void(e.attribution={largestShiftTarget:$(n.node),largestShiftTime:t.startTime,largestShiftValue:t.value,largestShiftSource:n,largestShiftEntry:t,loadState:z(t.startTime)})}}var r;e.attribution={}}(e),function(e){q(e)}(e)}(e)},c=function(t){t.forEach((function(t){if(!t.hadRecentInput){var n=o[0],i=o[o.length-1];a&&t.startTime-i.startTime<1e3&&t.startTime-n.startTime<5e3?(a+=t.value,o.push(t)):(a=t.value,o=[t]),a>r.value&&(r.value=a,r.entries=o,e())}}))},u=X("layout-shift",c);u&&(e=Z(s,r,n,t.reportAllChanges),se((function(t){i=t.value,r.value<0&&(r.value=0,e())})),G((function(){c(u.takeRecords()),e(!0)})),H((function(){a=0,i=-1,r=J("CLS",0),e=Z(s,r,n,t.reportAllChanges),Y((function(){return e()}))})))}))}(0,t)}(0,a.reportOptions.cls),function(e,t){se((function(e){!function(e){if(e.entries.length){var t=F(),n=e.entries[e.entries.length-1];if(t){var r=t.activationStart||0,i=Math.max(0,t.responseStart-r);return void(e.attribution={timeToFirstByte:i,firstByteToFCP:e.value-i,loadState:z(e.entries[0].startTime),navigationEntry:t,fcpEntry:n})}}e.attribution={timeToFirstByte:0,firstByteToFCP:e.value,loadState:z(W())}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.fcp),function(e,t){!function(e,t){t=t||{},ee((function(){var n,r=[100,300],i=oe(),a=J("FID"),o=function(e){e.startTime<i.firstHiddenTime&&(a.value=e.processingStart-e.startTime,a.entries.push(e),n(!0))},s=function(e){e.forEach(o)},c=X("first-input",s);n=Z(e,a,r,t.reportAllChanges),c&&G((function(){s(c.takeRecords()),c.disconnect()}),!0),c&&H((function(){var i;a=J("FID"),n=Z(e,a,r,t.reportAllChanges),C=[],M=-1,P=null,me(addEventListener),i=o,C.push(i),de()}))}))}((function(e){!function(e){var t=e.entries[0];e.attribution={eventTarget:$(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:z(t.startTime)}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.fid),function(e,t){!function(e,t){t=t||{},ee((function(){var n,r=[2500,4e3],i=oe(),a=J("LCP"),o=function(e){var t=e[e.length-1];if(t){var r=Math.max(t.startTime-V(),0);r<i.firstHiddenTime&&(a.value=r,a.entries=[t],n())}},s=X("largest-contentful-paint",o);if(s){n=Z(e,a,r,t.reportAllChanges);var c=function(){Se[a.id]||(o(s.takeRecords()),s.disconnect(),Se[a.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,c,{once:!0,capture:!0})})),G(c,!0),H((function(i){a=J("LCP"),n=Z(e,a,r,t.reportAllChanges),Y((function(){a.value=performance.now()-i.timeStamp,Se[a.id]=!0,n(!0)}))}))}}))}((function(e){!function(e){if(e.entries.length){var t=F();if(t){var n=t.activationStart||0,r=e.entries[e.entries.length-1],i=r.url&&performance.getEntriesByType("resource").filter((function(e){return e.name===r.url}))[0],a=Math.max(0,t.responseStart-n),o=Math.max(a,i?(i.requestStart||i.startTime)-n:0),s=Math.max(o,i?i.responseEnd-n:0),c=Math.max(s,r?r.startTime-n:0),u={element:$(r.element),timeToFirstByte:a,resourceLoadDelay:o-a,resourceLoadTime:s-o,elementRenderDelay:c-s,navigationEntry:t,lcpEntry:r};return r.url&&(u.url=r.url),i&&(u.lcpResourceEntry=i),void(e.attribution=u)}}e.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadTime:0,elementRenderDelay:e.value}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.lcp),function(e,t){!function(e,t){t=t||{},ee((function(){var n=[200,500];"interactionCount"in performance||D||(D=X("event",be,{type:"event",buffered:!0,durationThreshold:0}));var r,i=J("INP"),a=function(e){e.forEach((function(e){e.interactionId&&_e(e),"first-input"===e.entryType&&!Te.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&_e(e)}));var t,n=(t=Math.min(Te.length-1,Math.floor(ye()/50)),Te[t]);n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,r())},o=X("event",a,{durationThreshold:t.durationThreshold||40});r=Z(e,i,n,t.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),G((function(){a(o.takeRecords()),i.value<0&&ye()>0&&(i.value=0,i.entries=[]),r(!0)})),H((function(){Te=[],we=he(),i=J("INP"),r=Z(e,i,n,t.reportAllChanges)})))}))}((function(t){!function(e){if(e.entries.length){var t=e.entries.sort((function(e,t){return t.duration-e.duration||t.processingEnd-t.processingStart-(e.processingEnd-e.processingStart)}))[0];e.attribution={eventTarget:$(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:z(t.startTime)}}else e.attribution={}}(t),e(t)}),t)}((function(e){return q(e)}),a.reportOptions.inp),a.isResourceTiming&&S("resource",je),a.isElementTiming&&S("element",Oe)},Ie=function(e){var t="usageDetails"in e?e.usageDetails:{};R("storageEstimate",{quota:j(e.quota),usage:j(e.usage),caches:j(t.caches),indexedDB:j(t.indexedDB),serviceWorker:j(t.serviceWorkerRegistrations)})},Pe={finalMarkToStepsMap:{},startMarkToStepsMap:{},active:{},navigationSteps:{}},Me=function(e){delete Pe.active[e]},Be=function(){return Pe.navigationSteps},Ce=function(e){var t;return null!==(t=Be()[e])&&void 0!==t?t:{}},De=function(e,t,n){var r="step."+e,i=u.getEntriesByName(p+t).length>0;if(u.getEntriesByName(p+n).length>0&&a.steps){var o=A[a.steps[e].threshold],s=o.maxOutlierThreshold,c=o.vitalsThresholds;if(i){var l=u.measure(r,p+t,p+n),d=l.duration;if(d<=s){var m=function(e,t){return e<=t[0]?"good":e<=t[1]?"needsImprovement":"poor"}(d,c);d>=0&&(N("userJourneyStep",d,m,{stepName:e},void 0),u.measure("step.".concat(e,"_vitals_").concat(m),{start:l.startTime+l.duration,end:l.startTime+l.duration,detail:{type:"stepVital",duration:d}}))}}}},Ae=function(){var e=Be(),t=Pe.startMarkToStepsMap,n=Object.keys(e).length;if(0===n)return{};var r={},i=n-1,a=Ce(i);if(Object.keys(a).forEach((function(e){var n,i=null!==(n=t[e])&&void 0!==n?n:[];Object.keys(i).forEach((function(e){r[e]=!0}))})),n>1){var o=Ce(i-1);Object.keys(o).forEach((function(e){var n,i=null!==(n=t[e])&&void 0!==n?n:[];Object.keys(i).forEach((function(e){r[e]=!0}))}))}return r},Le=function(){var e,t=Object.keys(Pe.navigationSteps).length;Pe.navigationSteps[t]={};var n=Ae();null===(e=a.onMarkStep)||void 0===e||e.call(a,"",Object.keys(n))},Ue=function(e){var t,n,r,i,o,s,c;if(Pe.finalMarkToStepsMap[e]){!function(e){var t=Pe.navigationSteps,n=Pe.finalMarkToStepsMap,r=Object.keys(t).length;if(0!==r){var i=r-1,a=Ce(i);if(a&&n[e]){var o=n[e];o&&Object.keys(o).forEach((function(e){if(a[e]){var n=Ce(i)||{};n[e]=!1,t[i]=n}if(r>1){var o=i-1,s=Ce(o);s[e]&&(s[e]=!1,t[o]=s)}}))}}}(e);var u=Pe.finalMarkToStepsMap[e];Object.keys(u).forEach((function(t){var n=u[t];n.forEach(Me),Promise.all(n.map((function(n){return function(e,t,n,r){return new(n||(n=Promise))((function(e,t){function i(e){try{o(r.next(e))}catch(e){t(e)}}function a(e){try{o(r.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,a)}o((r=r.apply(undefined,[])).next())}))}(0,0,void 0,(function(){return function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(r){switch(r.label){case 0:return[4,De(n,t,e)];case 1:return r.sent(),[2]}}))}))}))).catch((function(){}))}))}else r=e,i=Pe.navigationSteps,o=Object.keys(i).length,(c=Ce(s=(o>0?o:1)-1)||[])[r]=!0,i[s]=c,function(e){var t,n=null!==(t=Pe.startMarkToStepsMap[e])&&void 0!==t?t:[];Object.keys(n).forEach((function(e){Pe.active[e]||(Pe.active[e]=!0)}))}(e);if(a.enableNavigationTracking){var l=Ae();null===(t=a.onMarkStep)||void 0===t||t.call(a,e,Object.keys(l))}else null===(n=a.onMarkStep)||void 0===n||n.call(a,e,Object.keys(Pe.active))},Re=function(e){u.mark(p+e),Ue(e)},qe=function(e){0===u.getEntriesByName(p+e).length&&(u.mark(p+e),Ue(e))},Fe=0,ze=function(){function e(e){if(void 0===e&&(e={}),this.v="9.0.0-rc.3",a.analyticsTracker=e.analyticsTracker,a.isResourceTiming=!!e.resourceTiming,a.isElementTiming=!!e.elementTiming,a.maxTime=e.maxMeasureTime||a.maxTime,a.reportOptions=e.reportOptions||a.reportOptions,a.steps=e.steps,a.onMarkStep=e.onMarkStep,a.enableNavigationTracking=e.enableNavigationTracking,m()){"PerformanceObserver"in o&&Ne(),void 0!==document.hidden&&document.addEventListener("visibilitychange",_);var t=function(){if(!m())return{};var e=u.getEntriesByType("navigation")[0];if(!e)return{};var t=e.responseStart,n=e.responseEnd;return{fetchTime:n-e.fetchStart,workerTime:e.workerStart>0?n-e.workerStart:0,totalTime:n-e.requestStart,downloadTime:n-t,timeToFirstByte:t-e.requestStart,headerSize:e.transferSize-e.encodedBodySize||0,dnsLookupTime:e.domainLookupEnd-e.domainLookupStart,redirectTime:e.redirectEnd-e.redirectStart}}();R("navigationTiming",t),t.redirectTime&&q({attribution:{},name:"RT",rating:U("RT",t.redirectTime),value:t.redirectTime}),R("networkInformation",function(){if("connection"in c){var e=c.connection;return"object"!=typeof e?{}:(f=e.effectiveType,v=!!e.saveData,{downlink:e.downlink,effectiveType:e.effectiveType,rtt:e.rtt,saveData:!!e.saveData})}return{}}()),c&&c.storage&&"function"==typeof c.storage.estimate&&c.storage.estimate().then(Ie),a.steps&&a.steps&&(Pe.startMarkToStepsMap={},Pe.finalMarkToStepsMap={},Pe.active={},Pe.navigationSteps={},Object.entries(a.steps).forEach((function(e){var t,n,r=e[0],i=e[1].marks,a=i[0],o=i[1],s=null!==(n=Pe.startMarkToStepsMap[a])&&void 0!==n?n:{};if(s[r]=!0,Pe.startMarkToStepsMap[a]=s,Pe.finalMarkToStepsMap[o]){var c=Pe.finalMarkToStepsMap[o][a]||[];c.push(r),Pe.finalMarkToStepsMap[o][a]=c}else Pe.finalMarkToStepsMap[o]=((t={})[a]=[r],t)})))}}return e.prototype.start=function(e){m()&&!g[e]&&(g[e]=!0,u.mark("mark_".concat(e,"_start")))},e.prototype.end=function(e,t,n){if(void 0===t&&(t={}),void 0===n&&(n=!0),m()&&g[e]){u.mark("mark_".concat(e,"_end")),delete g[e];var r=function(e){u.measure(e,"mark_".concat(e,"_start"),"mark_".concat(e,"_end"));var t=u.getEntriesByName(e).pop();return t&&"measure"===t.entryType?t.duration:-1}(e);n&&R(e,O(r),t)}},e.prototype.endPaint=function(e,t){var n=this;setTimeout((function(){n.end(e,t)}))},e.prototype.clear=function(e){delete g[e],u.clearMarks&&(u.clearMarks("mark_".concat(e,"_start")),u.clearMarks("mark_".concat(e,"_end")))},e.prototype.markNTBT=function(){var e=this;this.start("ntbt"),y.value=0,clearTimeout(Fe),Fe=setTimeout((function(){e.end("ntbt",{},!1),q({attribution:{},name:"NTBT",rating:U("NTBT",y.value),value:y.value}),y.value=0}),2e3)},e}()},426:(e,t)=>{"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator;var n={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r=Object.assign,i={};function a(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}function o(){}function s(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}a.prototype.isReactComponent={},a.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},a.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},o.prototype=a.prototype;var c=s.prototype=new o;c.constructor=s,r(c,a.prototype),c.isPureReactComponent=!0;Array.isArray,Object.prototype.hasOwnProperty;var u={current:null};t.useCallback=function(e,t){return u.current.useCallback(e,t)},t.useEffect=function(e,t){return u.current.useEffect(e,t)},t.useRef=function(e){return u.current.useRef(e)}},784:(e,t,n)=>{"use strict";e.exports=n(426)},353:function(e,t,n){var r;!function(i,a){"use strict";var o="function",s="undefined",c="object",u="string",l="major",d="model",p="name",m="type",f="vendor",v="version",g="architecture",b="console",h="mobile",w="tablet",y="smarttv",T="wearable",k="embedded",_="Amazon",S="Apple",E="ASUS",x="BlackBerry",O="Browser",j="Chrome",N="Firefox",I="Google",P="Huawei",M="LG",B="Microsoft",C="Motorola",D="Opera",A="Samsung",L="Sharp",U="Sony",R="Xiaomi",q="Zebra",F="Facebook",z="Chromium OS",K="Mac OS",$=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].toUpperCase()]=e[n];return t},Q=function(e,t){return typeof e===u&&-1!==W(t).indexOf(W(e))},W=function(e){return e.toLowerCase()},H=function(e,t){if(typeof e===u)return e=e.replace(/^\\s\\s*/,""),typeof t===s?e:e.substring(0,350)},V=function(e,t){for(var n,r,i,s,u,l,d=0;d<t.length&&!u;){var p=t[d],m=t[d+1];for(n=r=0;n<p.length&&!u&&p[n];)if(u=p[n++].exec(e))for(i=0;i<m.length;i++)l=u[++r],typeof(s=m[i])===c&&s.length>0?2===s.length?typeof s[1]==o?this[s[0]]=s[1].call(this,l):this[s[0]]=s[1]:3===s.length?typeof s[1]!==o||s[1].exec&&s[1].test?this[s[0]]=l?l.replace(s[1],s[2]):a:this[s[0]]=l?s[1].call(this,l,s[2]):a:4===s.length&&(this[s[0]]=l?s[3].call(this,l.replace(s[1],s[2])):a):this[s]=l||a;d+=2}},J=function(e,t){for(var n in t)if(typeof t[n]===c&&t[n].length>0){for(var r=0;r<t[n].length;r++)if(Q(t[n][r],e))return"?"===n?a:n}else if(Q(t[n],e))return"?"===n?a:n;return e},X={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},G={browser:[[/\\b(?:crmo|crios)\\/([\\w\\.]+)/i],[v,[p,"Chrome"]],[/edg(?:e|ios|a)?\\/([\\w\\.]+)/i],[v,[p,"Edge"]],[/(opera mini)\\/([-\\w\\.]+)/i,/(opera [mobiletab]{3,6})\\b.+version\\/([-\\w\\.]+)/i,/(opera)(?:.+version\\/|[\\/ ]+)([\\w\\.]+)/i],[p,v],[/opios[\\/ ]+([\\w\\.]+)/i],[v,[p,D+" Mini"]],[/\\bopr\\/([\\w\\.]+)/i],[v,[p,D]],[/(kindle)\\/([\\w\\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\\/ ]?([\\w\\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\\/ ]?([\\w\\.]*)/i,/(ba?idubrowser)[\\/ ]?([\\w\\.]+)/i,/(?:ms|\\()(ie) ([\\w\\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\\/([-\\w\\.]+)/i,/(heytap|ovi)browser\\/([\\d\\.]+)/i,/(weibo)__([\\d\\.]+)/i],[p,v],[/(?:\\buc? ?browser|(?:juc.+)ucweb)[\\/ ]?([\\w\\.]+)/i],[v,[p,"UC"+O]],[/microm.+\\bqbcore\\/([\\w\\.]+)/i,/\\bqbcore\\/([\\w\\.]+).+microm/i],[v,[p,"WeChat(Win) Desktop"]],[/micromessenger\\/([\\w\\.]+)/i],[v,[p,"WeChat"]],[/konqueror\\/([\\w\\.]+)/i],[v,[p,"Konqueror"]],[/trident.+rv[: ]([\\w\\.]{1,9})\\b.+like gecko/i],[v,[p,"IE"]],[/ya(?:search)?browser\\/([\\w\\.]+)/i],[v,[p,"Yandex"]],[/(avast|avg)\\/([\\w\\.]+)/i],[[p,/(.+)/,"$1 Secure "+O],v],[/\\bfocus\\/([\\w\\.]+)/i],[v,[p,N+" Focus"]],[/\\bopt\\/([\\w\\.]+)/i],[v,[p,D+" Touch"]],[/coc_coc\\w+\\/([\\w\\.]+)/i],[v,[p,"Coc Coc"]],[/dolfin\\/([\\w\\.]+)/i],[v,[p,"Dolphin"]],[/coast\\/([\\w\\.]+)/i],[v,[p,D+" Coast"]],[/miuibrowser\\/([\\w\\.]+)/i],[v,[p,"MIUI "+O]],[/fxios\\/([-\\w\\.]+)/i],[v,[p,N]],[/\\bqihu|(qi?ho?o?|360)browser/i],[[p,"360 "+O]],[/(oculus|samsung|sailfish|huawei)browser\\/([\\w\\.]+)/i],[[p,/(.+)/,"$1 "+O],v],[/(comodo_dragon)\\/([\\w\\.]+)/i],[[p,/_/g," "],v],[/(electron)\\/([\\w\\.]+) safari/i,/(tesla)(?: qtcarbrowser|\\/(20\\d\\d\\.[-\\w\\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\\/ ]?([\\w\\.]+)/i],[p,v],[/(metasr)[\\/ ]?([\\w\\.]+)/i,/(lbbrowser)/i,/\\[(linkedin)app\\]/i],[p],[/((?:fban\\/fbios|fb_iab\\/fb4a)(?!.+fbav)|;fbav\\/([\\w\\.]+);)/i],[[p,F],v],[/(kakao(?:talk|story))[\\/ ]([\\w\\.]+)/i,/(naver)\\(.*?(\\d+\\.[\\w\\.]+).*\\)/i,/safari (line)\\/([\\w\\.]+)/i,/\\b(line)\\/([\\w\\.]+)\\/iab/i,/(chromium|instagram)[\\/ ]([-\\w\\.]+)/i],[p,v],[/\\bgsa\\/([\\w\\.]+) .*safari\\//i],[v,[p,"GSA"]],[/musical_ly(?:.+app_?version\\/|_)([\\w\\.]+)/i],[v,[p,"TikTok"]],[/headlesschrome(?:\\/([\\w\\.]+)| )/i],[v,[p,j+" Headless"]],[/ wv\\).+(chrome)\\/([\\w\\.]+)/i],[[p,j+" WebView"],v],[/droid.+ version\\/([\\w\\.]+)\\b.+(?:mobile safari|safari)/i],[v,[p,"Android "+O]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\\/v?([\\w\\.]+)/i],[p,v],[/version\\/([\\w\\.\\,]+) .*mobile\\/\\w+ (safari)/i],[v,[p,"Mobile Safari"]],[/version\\/([\\w(\\.|\\,)]+) .*(mobile ?safari|safari)/i],[v,p],[/webkit.+?(mobile ?safari|safari)(\\/[\\w\\.]+)/i],[p,[v,J,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\\/([\\w\\.]+)/i],[p,v],[/(navigator|netscape\\d?)\\/([-\\w\\.]+)/i],[[p,"Netscape"],v],[/mobile vr; rv:([\\w\\.]+)\\).+firefox/i],[v,[p,N+" Reality"]],[/ekiohf.+(flow)\\/([\\w\\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\\/ ]?([\\w\\.\\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\\/([-\\w\\.]+)$/i,/(firefox)\\/([\\w\\.]+)/i,/(mozilla)\\/([\\w\\.]+) .+rv\\:.+gecko\\/\\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\\. ]?browser)[-\\/ ]?v?([\\w\\.]+)/i,/(links) \\(([\\w\\.]+)/i,/panasonic;(viera)/i],[p,v],[/(cobalt)\\/([\\w\\.]+)/i],[p,[v,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,W]],[/((?:i[346]|x)86)[;\\)]/i],[[g,"ia32"]],[/\\b(aarch64|arm(v?8e?l?|_?64))\\b/i],[[g,"arm64"]],[/\\b(arm(?:v[67])?ht?n?[fl]p?)\\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\\))/i],[[g,/ower/,"",W]],[/(sun4\\w)[;\\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\\))|\\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\\b|pa-risc)/i],[[g,W]]],device:[[/\\b(sch-i[89]0\\d|shw-m380s|sm-[ptx]\\w{2,4}|gt-[pn]\\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[f,A],[m,w]],[/\\b((?:s[cgp]h|gt|sm)-\\w+|sc[g-]?[\\d]+a?|galaxy nexus)/i,/samsung[- ]([-\\w]+)/i,/sec-(sgh\\w+)/i],[d,[f,A],[m,h]],[/(?:\\/|\\()(ip(?:hone|od)[\\w, ]*)(?:\\/|;)/i],[d,[f,S],[m,h]],[/\\((ipad);[-\\w\\),; ]+apple/i,/applecoremedia\\/[\\w\\.]+ \\((ipad)/i,/\\b(ipad)\\d\\d?,\\d\\d?[;\\]].+ios/i],[d,[f,S],[m,w]],[/(macintosh);/i],[d,[f,S]],[/\\b(sh-?[altvz]?\\d\\d[a-ekm]?)/i],[d,[f,L],[m,h]],[/\\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\\d{2})\\b(?!.+d\\/s)/i],[d,[f,P],[m,w]],[/(?:huawei|honor)([-\\w ]+)[;\\)]/i,/\\b(nexus 6p|\\w{2,4}e?-[atu]?[ln][\\dx][012359c][adn]?)\\b(?!.+d\\/s)/i],[d,[f,P],[m,h]],[/\\b(poco[\\w ]+)(?: bui|\\))/i,/\\b; (\\w+) build\\/hm\\1/i,/\\b(hm[-_ ]?note?[_ ]?(?:\\d\\w)?) bui/i,/\\b(redmi[\\-_ ]?(?:note|k)?[\\w_ ]+)(?: bui|\\))/i,/\\b(mi[-_ ]?(?:a\\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\\d?\\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\\))/i],[[d,/_/g," "],[f,R],[m,h]],[/\\b(mi[-_ ]?(?:pad)(?:[\\w_ ]+))(?: bui|\\))/i],[[d,/_/g," "],[f,R],[m,w]],[/; (\\w+) bui.+ oppo/i,/\\b(cph[12]\\d{3}|p(?:af|c[al]|d\\w|e[ar])[mt]\\d0|x9007|a101op)\\b/i],[d,[f,"OPPO"],[m,h]],[/vivo (\\w+)(?: bui|\\))/i,/\\b(v[12]\\d{3}\\w?[at])(?: bui|;)/i],[d,[f,"Vivo"],[m,h]],[/\\b(rmx[12]\\d{3})(?: bui|;|\\))/i],[d,[f,"Realme"],[m,h]],[/\\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\\b[\\w ]+build\\//i,/\\bmot(?:orola)?[- ](\\w*)/i,/((?:moto[\\w\\(\\) ]+|xt\\d{3,4}|nexus 6)(?= bui|\\)))/i],[d,[f,C],[m,h]],[/\\b(mz60\\d|xoom[2 ]{0,2}) build\\//i],[d,[f,C],[m,w]],[/((?=lg)?[vl]k\\-?\\d{3}) bui| 3\\.[-\\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[f,M],[m,w]],[/(lm(?:-?f100[nv]?|-[\\w\\.]+)(?= bui|\\))|nexus [45])/i,/\\blg[-e;\\/ ]+((?!browser|netcast|android tv)\\w+)/i,/\\blg-?([\\d\\w]+) bui/i],[d,[f,M],[m,h]],[/(ideatab[-\\w ]+)/i,/lenovo ?(s[56]000[-\\w]+|tab(?:[\\w ]+)|yt[-\\d\\w]{6}|tb[-\\d\\w]{6})/i],[d,[f,"Lenovo"],[m,w]],[/(?:maemo|nokia).*(n900|lumia \\d+)/i,/nokia[-_ ]?([-\\w\\.]*)/i],[[d,/_/g," "],[f,"Nokia"],[m,h]],[/(pixel c)\\b/i],[d,[f,I],[m,w]],[/droid.+; (pixel[\\daxl ]{0,6})(?: bui|\\))/i],[d,[f,I],[m,h]],[/droid.+ (a?\\d[0-2]{2}so|[c-g]\\d{4}|so[-gl]\\w+|xq-a\\w[4-7][12])(?= bui|\\).+chrome\\/(?![1-6]{0,1}\\d\\.))/i],[d,[f,U],[m,h]],[/sony tablet [ps]/i,/\\b(?:sony)?sgp\\w+(?: bui|\\))/i],[[d,"Xperia Tablet"],[f,U],[m,w]],[/ (kb2005|in20[12]5|be20[12][59])\\b/i,/(?:one)?(?:plus)? (a\\d0\\d\\d)(?: b|\\))/i],[d,[f,"OnePlus"],[m,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\\))/i,/(kf[a-z]+)( bui|\\)).+silk\\//i],[d,[f,_],[m,w]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\\)).+silk\\//i],[[d,/(.+)/g,"Fire Phone $1"],[f,_],[m,h]],[/(playbook);[-\\w\\),; ]+(rim)/i],[d,f,[m,w]],[/\\b((?:bb[a-f]|st[hv])100-\\d)/i,/\\(bb10; (\\w+)/i],[d,[f,x],[m,h]],[/(?:\\b|asus_)(transfo[prime ]{4,10} \\w+|eeepc|slider \\w+|nexus 7|padfone|p00[cj])/i],[d,[f,E],[m,w]],[/ (z[bes]6[027][012][km][ls]|zenfone \\d\\w?)\\b/i],[d,[f,E],[m,h]],[/(nexus 9)/i],[d,[f,"HTC"],[m,w]],[/(htc)[-;_ ]{1,2}([\\w ]+(?=\\)| bui)|\\w+)/i,/(zte)[- ]([\\w ]+?)(?: bui|\\/|\\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\\.))|sony(?!-bra))[-_ ]?([-\\w]*)/i],[f,[d,/_/g," "],[m,h]],[/droid.+; ([ab][1-7]-?[0178a]\\d\\d?)/i],[d,[f,"Acer"],[m,w]],[/droid.+; (m[1-5] note) bui/i,/\\bmz-([-\\w]{2,})/i],[d,[f,"Meizu"],[m,h]],[/(blackberry|benq|palm(?=\\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\\w]*)/i,/(hp) ([\\w ]+\\w)/i,/(asus)-?(\\w+)/i,/(microsoft); (lumia[\\w ]+)/i,/(lenovo)[-_ ]?([-\\w]+)/i,/(jolla)/i,/(oppo) ?([\\w ]+) bui/i],[f,d,[m,h]],[/(kobo)\\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\\/([\\w\\.]+)/i,/(nook)[\\w ]+build\\/(\\w+)/i,/(dell) (strea[kpr\\d ]*[\\dko])/i,/(le[- ]+pan)[- ]+(\\w{1,9}) bui/i,/(trinity)[- ]*(t\\d{3}) bui/i,/(gigaset)[- ]+(q\\w{1,9}) bui/i,/(vodafone) ([\\w ]+)(?:\\)| bui)/i],[f,d,[m,w]],[/(surface duo)/i],[d,[f,B],[m,w]],[/droid [\\d\\.]+; (fp\\du?)(?: b|\\))/i],[d,[f,"Fairphone"],[m,h]],[/(u304aa)/i],[d,[f,"AT&T"],[m,h]],[/\\bsie-(\\w*)/i],[d,[f,"Siemens"],[m,h]],[/\\b(rct\\w+) b/i],[d,[f,"RCA"],[m,w]],[/\\b(venue[\\d ]{2,7}) b/i],[d,[f,"Dell"],[m,w]],[/\\b(q(?:mv|ta)\\w+) b/i],[d,[f,"Verizon"],[m,w]],[/\\b(?:barnes[& ]+noble |bn[rt])([\\w\\+ ]*) b/i],[d,[f,"Barnes & Noble"],[m,w]],[/\\b(tm\\d{3}\\w+) b/i],[d,[f,"NuVision"],[m,w]],[/\\b(k88) b/i],[d,[f,"ZTE"],[m,w]],[/\\b(nx\\d{3}j) b/i],[d,[f,"ZTE"],[m,h]],[/\\b(gen\\d{3}) b.+49h/i],[d,[f,"Swiss"],[m,h]],[/\\b(zur\\d{3}) b/i],[d,[f,"Swiss"],[m,w]],[/\\b((zeki)?tb.*\\b) b/i],[d,[f,"Zeki"],[m,w]],[/\\b([yr]\\d{2}) b/i,/\\b(dragon[- ]+touch |dt)(\\w{5}) b/i],[[f,"Dragon Touch"],d,[m,w]],[/\\b(ns-?\\w{0,9}) b/i],[d,[f,"Insignia"],[m,w]],[/\\b((nxa|next)-?\\w{0,9}) b/i],[d,[f,"NextBook"],[m,w]],[/\\b(xtreme\\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],d,[m,h]],[/\\b(lvtel\\-)?(v1[12]) b/i],[[f,"LvTel"],d,[m,h]],[/\\b(ph-1) /i],[d,[f,"Essential"],[m,h]],[/\\b(v(100md|700na|7011|917g).*\\b) b/i],[d,[f,"Envizen"],[m,w]],[/\\b(trio[-\\w\\. ]+) b/i],[d,[f,"MachSpeed"],[m,w]],[/\\btu_(1491) b/i],[d,[f,"Rotor"],[m,w]],[/(shield[\\w ]+) b/i],[d,[f,"Nvidia"],[m,w]],[/(sprint) (\\w+)/i],[f,d,[m,h]],[/(kin\\.[onetw]{3})/i],[[d,/\\./g," "],[f,B],[m,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\\)/i],[d,[f,q],[m,w]],[/droid.+; (ec30|ps20|tc[2-8]\\d[kx])\\)/i],[d,[f,q],[m,h]],[/smart-tv.+(samsung)/i],[f,[m,y]],[/hbbtv.+maple;(\\d+)/i],[[d,/^/,"SmartTV"],[f,A],[m,y]],[/(nux; netcast.+smarttv|lg (netcast\\.tv-201\\d|android tv))/i],[[f,M],[m,y]],[/(apple) ?tv/i],[f,[d,S+" TV"],[m,y]],[/crkey/i],[[d,j+"cast"],[f,I],[m,y]],[/droid.+aft(\\w)( bui|\\))/i],[d,[f,_],[m,y]],[/\\(dtv[\\);].+(aquos)/i,/(aquos-tv[\\w ]+)\\)/i],[d,[f,L],[m,y]],[/(bravia[\\w ]+)( bui|\\))/i],[d,[f,U],[m,y]],[/(mitv-\\w{5}) bui/i],[d,[f,R],[m,y]],[/Hbbtv.*(technisat) (.*);/i],[f,d,[m,y]],[/\\b(roku)[\\dx]*[\\)\\/]((?:dvp-)?[\\d\\.]*)/i,/hbbtv\\/\\d+\\.\\d+\\.\\d+ +\\([\\w\\+ ]*; *([\\w\\d][^;]*);([^;]*)/i],[[f,H],[d,H],[m,y]],[/\\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\\b/i],[[m,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,d,[m,b]],[/droid.+; (shield) bui/i],[d,[f,"Nvidia"],[m,b]],[/(playstation [345portablevi]+)/i],[d,[f,U],[m,b]],[/\\b(xbox(?: one)?(?!; xbox))[\\); ]/i],[d,[f,B],[m,b]],[/((pebble))app/i],[f,d,[m,T]],[/(watch)(?: ?os[,\\/]|\\d,\\d\\/)[\\d\\.]+/i],[d,[f,S],[m,T]],[/droid.+; (glass) \\d/i],[d,[f,I],[m,T]],[/droid.+; (wt63?0{2,3})\\)/i],[d,[f,q],[m,T]],[/(quest( 2| pro)?)/i],[d,[f,F],[m,T]],[/(tesla)(?: qtcarbrowser|\\/[-\\w\\.]+)/i],[f,[m,k]],[/(aeobc)\\b/i],[d,[f,_],[m,k]],[/droid .+?; ([^;]+?)(?: bui|\\) applew).+? mobile safari/i],[d,[m,h]],[/droid .+?; ([^;]+?)(?: bui|\\) applew).+?(?! mobile) safari/i],[d,[m,w]],[/\\b((tablet|tab)[;\\/]|focus\\/\\d(?!.+mobile))/i],[[m,w]],[/(phone|mobile(?:[;\\/]| [ \\w\\/\\.]*safari)|pda(?=.+windows ce))/i],[[m,h]],[/(android[-\\w\\. ]{0,9});.+buil/i],[d,[f,"Generic"]]],engine:[[/windows.+ edge\\/([\\w\\.]+)/i],[v,[p,"EdgeHTML"]],[/webkit\\/537\\.36.+chrome\\/(?!27)([\\w\\.]+)/i],[v,[p,"Blink"]],[/(presto)\\/([\\w\\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\\/([\\w\\.]+)/i,/ekioh(flow)\\/([\\w\\.]+)/i,/(khtml|tasman|links)[\\/ ]\\(?([\\w\\.]+)/i,/(icab)[\\/ ]([23]\\.[\\d\\.]+)/i,/\\b(libweb)/i],[p,v],[/rv\\:([\\w\\.]{1,9})\\b.+(gecko)/i],[v,p]],os:[[/microsoft (windows) (vista|xp)/i],[p,v],[/(windows) nt 6\\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\\/ ]?([\\d\\.\\w ]*)/i,/(windows)[\\/ ]?([ntce\\d\\. ]+\\w)(?!.+xbox)/i],[p,[v,J,X]],[/(win(?=3|9|n)|win 9x )([nt\\d\\.]+)/i],[[p,"Windows"],[v,J,X]],[/ip[honead]{2,4}\\b(?:.*os ([\\w]+) like mac|; opera)/i,/ios;fbsv\\/([\\d\\.]+)/i,/cfnetwork\\/.+darwin/i],[[v,/_/g,"."],[p,"iOS"]],[/(mac os x) ?([\\w\\. ]*)/i,/(macintosh|mac_powerpc\\b)(?!.+haiku)/i],[[p,K],[v,/_/g,"."]],[/droid ([\\w\\.]+)\\b.+(android[- ]x86|harmonyos)/i],[v,p],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\\/ ]?([\\w\\.]*)/i,/(blackberry)\\w*\\/([\\w\\.]*)/i,/(tizen|kaios)[\\/ ]([\\w\\.]+)/i,/\\((series40);/i],[p,v],[/\\(bb(10);/i],[v,[p,x]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\\/ ]?([\\w\\.]*)/i],[v,[p,"Symbian"]],[/mozilla\\/[\\d\\.]+ \\((?:mobile|tablet|tv|mobile; [\\w ]+); rv:.+ gecko\\/([\\w\\.]+)/i],[v,[p,N+" OS"]],[/web0s;.+rt(tv)/i,/\\b(?:hp)?wos(?:browser)?\\/([\\w\\.]+)/i],[v,[p,"webOS"]],[/watch(?: ?os[,\\/]|\\d,\\d\\/)([\\d\\.]+)/i],[v,[p,"watchOS"]],[/crkey\\/([\\d\\.]+)/i],[v,[p,j+"cast"]],[/(cros) [\\w]+(?:\\)| ([\\w\\.]+)\\b)/i],[[p,z],v],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\\/(\\d+\\.[\\w\\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\\);]+)/i,/\\b(joli|palm)\\b ?(?:os)?\\/?([\\w\\.]*)/i,/(mint)[\\/\\(\\) ]?(\\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\\/ ]?(?!chrom|package)([-\\w\\.]*)/i,/(hurd|linux) ?([\\w\\.]*)/i,/(gnu) ?([\\w\\.]*)/i,/\\b([-frentopcghs]{0,5}bsd|dragonfly)[\\/ ]?(?!amd|[ix346]{1,2}86)([\\w\\.]*)/i,/(haiku) (\\w+)/i],[p,v],[/(sunos) ?([\\w\\.\\d]*)/i],[[p,"Solaris"],v],[/((?:open)?solaris)[-\\/ ]?([\\w\\.]*)/i,/(aix) ((\\d)(?=\\.|\\)| )[\\w\\.])*/i,/\\b(beos|os\\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\\w\\.]*)/i],[p,v]]},Z=function(e,t){if(typeof e===c&&(t=e,e=a),!(this instanceof Z))return new Z(e,t).getResult();var n=typeof i!==s&&i.navigator?i.navigator:a,r=e||(n&&n.userAgent?n.userAgent:""),b=n&&n.userAgentData?n.userAgentData:a,y=t?function(e,t){var n={};for(var r in e)t[r]&&t[r].length%2==0?n[r]=t[r].concat(e[r]):n[r]=e[r];return n}(G,t):G,T=n&&n.userAgent==r;return this.getBrowser=function(){var e,t={};return t[p]=a,t[v]=a,V.call(t,r,y.browser),t[l]=typeof(e=t[v])===u?e.replace(/[^\\d\\.]/g,"").split(".")[0]:a,T&&n&&n.brave&&typeof n.brave.isBrave==o&&(t[p]="Brave"),t},this.getCPU=function(){var e={};return e[g]=a,V.call(e,r,y.cpu),e},this.getDevice=function(){var e={};return e[f]=a,e[d]=a,e[m]=a,V.call(e,r,y.device),T&&!e[m]&&b&&b.mobile&&(e[m]=h),T&&"Macintosh"==e[d]&&n&&typeof n.standalone!==s&&n.maxTouchPoints&&n.maxTouchPoints>2&&(e[d]="iPad",e[m]=w),e},this.getEngine=function(){var e={};return e[p]=a,e[v]=a,V.call(e,r,y.engine),e},this.getOS=function(){var e={};return e[p]=a,e[v]=a,V.call(e,r,y.os),T&&!e[p]&&b&&"Unknown"!=b.platform&&(e[p]=b.platform.replace(/chrome os/i,z).replace(/macos/i,K)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===u&&e.length>350?H(e,350):e,this},this.setUA(r),this};Z.VERSION="1.0.35",Z.BROWSER=$([p,v,l]),Z.CPU=$([g]),Z.DEVICE=$([d,f,m,b,h,y,w,T,k]),Z.ENGINE=Z.OS=$([p,v]),typeof t!==s?(e.exports&&(t=e.exports=Z),t.UAParser=Z):n.amdO?(r=function(){return Z}.call(t,n,t,e))===a||(e.exports=r):typeof i!==s&&(i.UAParser=Z);var Y=typeof i!==s&&(i.jQuery||i.Zepto);if(Y&&!Y.ua){var ee=new Z;Y.ua=ee.getResult(),Y.ua.get=function(){return ee.getUA()},Y.ua.set=function(e){ee.setUA(e);var t=ee.getResult();for(var n in t)Y.ua[n]=t[n]}}}("object"==typeof window?window:this)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.amdO={},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{ActionType:()=>f,AmplitudePlatformName:()=>g,AnalyticsEventImportance:()=>l,AnalyticsQueries:()=>e,AuthStatus:()=>b,ComponentType:()=>m,IThresholdTier:()=>Jt,MetricType:()=>d,PlatformName:()=>v,SessionActions:()=>h,SessionAutomatedEvents:()=>w,SessionRank:()=>y,SubjectType:()=>p,UserTypeCommerce:()=>c,UserTypeInsto:()=>i,UserTypeRetail:()=>t,UserTypeRetailBusinessBanking:()=>s,UserTypeRetailEmployeeInternal:()=>a,UserTypeRetailEmployeePersonal:()=>o,UserTypeWallet:()=>u,automatedEvents:()=>xn,automatedMappingConfig:()=>In,clearMarkEntry:()=>Vn,clearPerformanceMarkEntries:()=>Xn,config:()=>A,createEventConfig:()=>On,createNewSpan:()=>Ln,createNewTrace:()=>Un,device:()=>W,endPerfMark:()=>Jn,exposeExperiment:()=>wn,flushQueue:()=>or,generateUUID:()=>V,getAnalyticsHeaders:()=>sr,getReferrerData:()=>le,getTracingHeaders:()=>An,getTracingId:()=>Dn,getUrlHostname:()=>pe,getUrlParams:()=>me,getUrlPathname:()=>fe,getUserContext:()=>ar,identify:()=>Tn,identifyFlow:()=>xe,identity:()=>H,identityFlow:()=>Se,incrementUjNavigation:()=>an,init:()=>yn,initNextJsTrackPageview:()=>_n,initTrackPageview:()=>kn,isEventKeyFormatValid:()=>we,isSessionEnded:()=>pt,location:()=>re,logEvent:()=>$t,logMetric:()=>Ht,logPageView:()=>on,logTrace:()=>Rn,markNTBT:()=>tn,markStep:()=>nn,markStepOnce:()=>rn,onVisibilityChange:()=>ln,optIn:()=>En,optOut:()=>Sn,perfMark:()=>Wn,persistentData:()=>oe,postMessage:()=>K,recordSessionDuration:()=>pn,removeFromIdentifyFlow:()=>Ee,savePersistentData:()=>st,sendScheduledEvents:()=>Bt,setBreadcrumbs:()=>ie,setConfig:()=>U,setLocation:()=>ae,setPagePath:()=>ve,setPageview:()=>Kt,setPersistentData:()=>se,setSessionStart:()=>dt,setTime:()=>Ue,startPerfMark:()=>Hn,timeStone:()=>Le,useEventLogger:()=>Yn,useLogEventOnMount:()=>tr,usePerformanceMarks:()=>rr});let e=function(e){return e.fbclid="fbclid",e.gclid="gclid",e.msclkid="msclkid",e.ptclid="ptclid",e.ttclid="ttclid",e.utm_source="utm_source",e.utm_medium="utm_medium",e.utm_campaign="utm_campaign",e.utm_term="utm_term",e.utm_content="utm_content",e}({});const t=0,i=1,a=2,o=3,s=4,c=5,u=6;let l=function(e){return e.low="low",e.high="high",e}({}),d=function(e){return e.count="count",e.rate="rate",e.gauge="gauge",e.distribution="distribution",e.histogram="histogram",e}({}),p=function(e){return e.commerce_merchant="commerce_merchant",e.device="device",e.edp_fingerprint_id="edp_fingerprint_id",e.nft_user="nft_user",e.user="user",e.wallet_user="wallet_user",e.uuid="user_uuid",e}({}),m=function(e){return e.unknown="unknown",e.banner="banner",e.button="button",e.card="card",e.chart="chart",e.content_script="content_script",e.dropdown="dropdown",e.link="link",e.page="page",e.modal="modal",e.table="table",e.search_bar="search_bar",e.service_worker="service_worker",e.text="text",e.text_input="text_input",e.tray="tray",e.checkbox="checkbox",e.icon="icon",e}({}),f=function(e){return e.unknown="unknown",e.blur="blur",e.click="click",e.change="change",e.dismiss="dismiss",e.focus="focus",e.hover="hover",e.select="select",e.measurement="measurement",e.move="move",e.process="process",e.render="render",e.scroll="scroll",e.view="view",e.search="search",e.keyPress="keyPress",e}({}),v=function(e){return e.unknown="unknown",e.web="web",e.android="android",e.ios="ios",e.mobile_web="mobile_web",e.tablet_web="tablet_web",e.server="server",e.windows="windows",e.macos="macos",e.extension="extension",e}({}),g=function(e){return e.web="Web",e.ios="iOS",e.android="Android",e}({}),b=function(e){return e[e.notLoggedIn=0]="notLoggedIn",e[e.loggedIn=1]="loggedIn",e}({}),h=function(e){return e.ac="ac",e.af="af",e.ah="ah",e.al="al",e.am="am",e.ar="ar",e.as="as",e}({}),w=function(e){return e.pv="pv",e}({}),y=function(e){return e.xs="xs",e.s="s",e.m="m",e.l="l",e.xl="xl",e.xxl="xxl",e}({});const T="https://analytics-service-dev.cbhq.net",k=3e5,_=5e3,S="analytics-db",E="experiment-exposure-db",x="Analytics SDK:",O=Object.values(e),j="pageview",N="session_duration",I={navigationTiming:{eventName:"perf_navigation_timing"},redirectTime:{eventName:"perf_redirect_time"},RT:{eventName:"perf_redirect_time"},TTFB:{eventName:"perf_time_to_first_byte"},networkInformation:{eventName:"perf_network_information"},storageEstimate:{eventName:"perf_storage_estimate"},FCP:{eventName:"perf_first_contentful_paint"},FID:{eventName:"perf_first_input_delay"},LCP:{eventName:"perf_largest_contentful_paint"},CLS:{eventName:"perf_cumulative_layout_shift"},TBT:{eventName:"perf_total_blocking_time"},NTBT:{eventName:"perf_navigation_total_blocking_time"},INP:{eventName:"perf_interact_to_next_paint"},ET:{eventName:"perf_element_timing"},userJourneyStep:{eventName:"perf_user_journey_step"}},P="1",M="web";function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}const C=/^(https?:\\/\\/)/;function D(e){return{eventsEndpoint:e+"/amp",metricsEndPoint:e+"/metrics",exposureEndpoint:e+"/track-exposures",tracesEndpoint:e+"/traces"}}const A=B({authCookie:"logged_in",amplitudeApiKey:"",batchEventsPeriod:_,batchEventsThreshold:30,batchMetricsPeriod:_,batchMetricsThreshold:30,batchTracesPeriod:_,batchTracesThreshold:30,headers:{},interactionManager:null,isAlwaysAuthed:!1,isProd:!1,isInternalApplication:!1,onError:(e,t)=>{console.error(x,e,t)},platform:v.unknown,projectName:"",ricTimeoutScheduleEvent:1e3,ricTimeoutSetDevice:500,showDebugLogging:!1,trackUserId:!1,version:null,apiEndpoint:T},D(T),{steps:{}}),L=[].reduce(((e,t)=>n=>e(t(n))),(e=>{if(!e.isProd)return e.isInternalApplication?(e.apiEndpoint="https://analytics-service-internal-dev.cbhq.net",B({},e,D(e.apiEndpoint))):e;const t=(e=>e.apiEndpoint?C.test(e.apiEndpoint)?e.apiEndpoint:`https://${e.apiEndpoint}`:e.isInternalApplication?"https://analytics-service-internal.cbhq.net":"https://as.coinbase.com")(e);return B({},e,{apiEndpoint:t},D(t))})),U=e=>{const{batchEventsThreshold:t,batchMetricsThreshold:n,batchTracesThreshold:r}=e,i=[t,n,r];for(const e of i)if((e||0)>30){console.warn("You are setting the threshhold for the batch limit to be greater than 30. This may cause request overload.");break}Object.assign(A,L(e))},R=[v.web,v.mobile_web,v.tablet_web];function q(){return"android"===A.platform}function F(){return"ios"===A.platform}function z(){return R.includes(A.platform)}function K(e){if(z()&&navigator&&"serviceWorker"in navigator&&navigator.serviceWorker.controller)try{navigator.serviceWorker.controller.postMessage(e)}catch(e){e instanceof Error&&A.onError(e)}}var $=n(353),Q=n.n($);const W={amplitudeOSName:null,amplitudeOSVersion:null,amplitudeDeviceModel:null,amplitudePlatform:null,browserName:null,browserMajor:null,osName:null,userAgent:null,width:null,height:null},H={countryCode:null,deviceId:null,device_os:null,isOptOut:!1,languageCode:null,locale:null,jwt:null,session_lcc_id:null,userAgent:null,userId:null},V=e=>e?(e^16*Math.random()>>e/4).toString(16):"10000000-1000-4000-8000-100000000000".replace(/[018]/g,V),J=()=>A.isAlwaysAuthed||!!H.userId,X=()=>{const e={};return H.countryCode&&(e.country_code=H.countryCode),e},G=()=>{const{platform:e}=A;if(e===v.web)switch(!0){case window.matchMedia("(max-width: 560px)").matches:return v.mobile_web;case window.matchMedia("(max-width: 1024px, min-width: 561px)").matches:return v.tablet_web}return e},Z=()=>{var e,t,n,r,i;z()?("requestIdleCallback"in window?window.requestIdleCallback(ne,{timeout:A.ricTimeoutSetDevice}):ne(),W.amplitudePlatform=g.web,W.userAgent=(null==(e=window)||null==(e=e.navigator)?void 0:e.userAgent)||null,ee({height:null!=(t=null==(n=window)?void 0:n.innerHeight)?t:null,width:null!=(r=null==(i=window)?void 0:i.innerWidth)?r:null})):F()?(W.amplitudePlatform=g.ios,W.userAgent=H.userAgent,W.userAgent&&ne()):q()&&(W.userAgent=H.userAgent,W.amplitudePlatform=g.android,W.userAgent&&ne())},Y=e=>{Object.assign(H,e),z()&&K({identity:{isAuthed:!!H.userId,locale:H.locale||null}})},ee=e=>{W.height=e.height,W.width=e.width},te=()=>{U({platform:G()}),z()&&K({config:{platform:A.platform}})},ne=()=>{var e;performance.mark&&performance.mark("ua_parser_start");const t=new(Q())(null!=(e=W.userAgent)?e:"").getResult();W.browserName=t.browser.name||null,W.browserMajor=t.browser.major||null,W.osName=t.os.name||null,W.amplitudeOSName=W.browserName,W.amplitudeOSVersion=W.browserMajor,W.amplitudeDeviceModel=W.osName,K({device:{browserName:W.browserName,osName:W.osName}}),performance.mark&&(performance.mark("ua_parser_end"),performance.measure("ua_parser","ua_parser_start","ua_parser_end"))},re={breadcrumbs:[],initialUAAData:{},pageKey:"",pageKeyRegex:{},pagePath:"",prevPageKey:"",prevPagePath:""};function ie(e){Object.assign(re,{breadcrumbs:e})}function ae(e){Object.assign(re,e)}const oe={eventId:0,sequenceNumber:0,sessionId:0,lastEventTime:0,sessionStart:0,sessionUUID:null,userId:null,ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0};function se(e){Object.assign(oe,e)}function ce(){var e,t;return null!=(e=null==(t=document)?void 0:t.referrer)?e:""}function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}const le=()=>{const e=ce();if(!e)return{};const t=new URL(e);return t.hostname===pe()?{}:{referrer:e,referring_domain:t.hostname}},de=()=>{const e=new URLSearchParams(me()),t={};return O.forEach((n=>{e.has(n)&&(t[n]=(e.get(n)||"").toLowerCase())})),t},pe=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.hostname)||""},me=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.search)||""},fe=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.pathname)||""},ve=()=>{const e=A.overrideWindowLocation?re.pagePath:fe()+me();e&&e!==re.pagePath&&(e!==re.pagePath&&ge(),re.pagePath=e,re.pageKeyRegex&&Object.keys(re.pageKeyRegex).some((e=>{if(re.pageKeyRegex[e].test(re.pagePath))return re.pageKey=e,!0})))},ge=()=>{if(z()){const e=ce();if(!re.prevPagePath&&e){const t=new URL(e);if(t.hostname===pe())return void(re.prevPagePath=t.pathname)}}re.prevPagePath=re.pagePath,re.prevPageKey=re.pageKey},be=e=>{z()&&Object.assign(e,z()?(Object.keys(re.initialUAAData).length>0||(new URLSearchParams(me()),re.initialUAAData=ue({},(()=>{const e={};return O.forEach((t=>{oe[t]&&(e[t]=oe[t])})),e})(),de(),le())),re.initialUAAData):re.initialUAAData)},he=/^[a-zd]+(_[a-zd]+)*$/;function we(e){return he.test(e)}function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ye.apply(this,arguments)}const Te=["action","component_type","component_name","context","logging_id"],ke=["num_non_hardware_accounts","ujs"],_e="ujs_",Se={};function Ee(e){e.forEach((e=>{ke.includes(e)&&delete Se[e]}))}function xe(e){var t;const n=Object.entries(e).reduce(((e,t)=>{const[n,r]=t;return!Te.includes(n)&&ke.includes(n)?we(n)?ye({},e,{[n]:r}):(A.onError(new Error("IdentityFlow property names must have snake case format"),{[n]:r}),e):e}),{});null!=(t=n.ujs)&&t.length&&(n.ujs=n.ujs.map((e=>`${_e}${e}`))),Object.assign(Se,n)}function Oe(){return A.platform!==v.unknown||(A.onError(new Error("SDK platform not initialized")),!1)}const je={eventsQueue:[],eventsScheduled:!1,metricsQueue:[],metricsScheduled:!1,tracesQueue:[],tracesScheduled:!1};function Ne(e){Object.assign(je,e)}const Ie={ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0,sqs:0},Pe={ac:20,af:5,ah:1,al:1,am:0,ar:10,as:20},Me={pv:25},Be={xs:0,s:1,m:1,l:2,xl:2,xxl:2},Ce=e=>e<15?y.xs:e<60?y.s:e<240?y.m:e<960?y.l:e<3840?y.xl:y.xxl,De=e=>{Object.assign(Ie,e)};function Ae(){return(new Date).getTime()}const Le={timeStart:Ae(),timeOnPagePath:0,timeOnPageKey:0,prevTimeOnPagePath:0,prevTimeOnPageKey:0,sessionDuration:0,sessionEnd:0,sessionStart:0,prevSessionDuration:0};function Ue(e){Object.assign(Le,e)}const Re=(e,t)=>t.some((t=>e instanceof t));let qe,Fe;const ze=new WeakMap,Ke=new WeakMap,$e=new WeakMap,Qe=new WeakMap,We=new WeakMap;let He={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ke.get(e);if("objectStoreNames"===t)return e.objectStoreNames||$e.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Je(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ve(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Fe||(Fe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Xe(this),e),Je(ze.get(this))}:function(...e){return Je(t.apply(Xe(this),e))}:function(e,...n){const r=t.call(Xe(this),e,...n);return $e.set(r,e.sort?e.sort():[e]),Je(r)}:(e instanceof IDBTransaction&&function(e){if(Ke.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Ke.set(e,t)}(e),Re(e,qe||(qe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,He):e);var t}function Je(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(Je(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&ze.set(t,e)})).catch((()=>{})),We.set(t,e),t}(e);if(Qe.has(e))return Qe.get(e);const t=Ve(e);return t!==e&&(Qe.set(e,t),We.set(t,e)),t}const Xe=e=>We.get(e),Ge=["get","getKey","getAll","getAllKeys","count"],Ze=["put","add","delete","clear"],Ye=new Map;function et(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ye.get(t))return Ye.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ze.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ge.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,i?"readwrite":"readonly");let o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return Ye.set(t,a),a}var tt;tt=He,He={...tt,get:(e,t,n)=>et(e,t)||tt.get(e,t,n),has:(e,t)=>!!et(e,t)||tt.has(e,t)};const nt={isReady:!1,idbKeyval:null};function rt(e){Object.assign(nt,e)}const it={},at=async e=>{if(!nt.idbKeyval)return Promise.resolve(null);try{return await nt.idbKeyval.get(e)}catch(e){return A.onError(new Error("IndexedDB:Get:InternalError")),Promise.resolve(null)}},ot=async(e,t)=>{if(nt.idbKeyval)try{await nt.idbKeyval.set(e,t)}catch(e){A.onError(new Error("IndexedDB:Set:InternalError"))}},st=()=>{"server"!==A.platform&&(se({sessionStart:Le.sessionStart,ac:Ie.ac,af:Ie.af,ah:Ie.ah,al:Ie.al,am:Ie.am,ar:Ie.ar,as:Ie.as,pv:Ie.pv}),H.userId&&se({userId:H.userId}),ot(S,oe))},ct="rgb(5,177,105)",ut=e=>{const{metricName:t,data:n}=e,r=e.importance||l.low;if(!A.showDebugLogging||!console)return;const i=`%c ${x}`,a=`color:${ct};font-size:11px;`,o=`Importance: ${r}`;console.group(i,a,t,o),n.forEach((e=>{e.event_type?console.log(e.event_type,e):console.log(e)})),console.groupEnd()},lt=e=>{const{metricName:t,data:n}=e,r=e.importance||l.low;if(!A.showDebugLogging||!console)return;const i=`color:${ct};font-size:11px;`,a=`%c ${x}`,o=`Importance: ${r}`;console.log(a,i,t,n,o)},dt=()=>{const e=Ae();oe.sessionId&&oe.lastEventTime&&oe.sessionUUID&&!pt(e)||(oe.sessionId=e,oe.sessionUUID=V(),Ue({sessionStart:e}),lt({metricName:"Started new session:",data:{persistentData:oe,timeStone:Le}})),oe.lastEventTime=e},pt=e=>e-oe.lastEventTime>18e5;function mt(){return mt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mt.apply(this,arguments)}const ft=e=>{var t;(e=>{switch(e.action){case f.click:Ie.ac+=1;break;case f.focus:Ie.af+=1;break;case f.hover:Ie.ah+=1;break;case f.move:Ie.am+=1;break;case f.scroll:Ie.al+=1;break;case f.search:Ie.ar+=1;break;case f.select:Ie.as+=1}})(t=e),t.event_type!==j?t.event_type===N&&((e=>{if(!e.session_rank)return;const t=e.session_rank;Object.values(h).forEach((e=>{Ie.sqs+=Ie[e]*Pe[e]})),Object.values(w).forEach((e=>{Ie.sqs+=Ie[e]*Me[e]})),Ie.sqs*=Be[t]})(t),Object.assign(t,Ie),De({ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0,sqs:0})):Ie.pv+=1;const n=e.event_type;delete e.event_type;const r=e.deviceId?e.deviceId:null,i=e.timestamp;return delete e.timestamp,se({eventId:oe.eventId+1}),se({sequenceNumber:oe.sequenceNumber+1}),dt(),st(),{device_id:H.deviceId||r||null,user_id:H.userId,timestamp:i,event_id:oe.eventId,session_id:oe.sessionId||-1,event_type:n,version_name:A.version||null,platform:W.amplitudePlatform,os_name:W.amplitudeOSName,os_version:W.amplitudeOSVersion,device_model:W.amplitudeDeviceModel,language:H.languageCode,event_properties:mt({},e,{session_uuid:oe.sessionUUID,height:W.height,width:W.width}),user_properties:X(),uuid:V(),library:{name:"@cbhq/client-analytics",version:"10.6.0"},sequence_number:oe.sequenceNumber,user_agent:W.userAgent||H.userAgent}},vt=e=>e.map((e=>ft(e)));function gt(){return gt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gt.apply(this,arguments)}const bt=e=>e.map((e=>(e=>{const t=e.tags||{},n=gt({authed:J()?"true":"false",platform:A.platform},t,{project_name:A.projectName,version_name:A.version||null});return{metric_name:e.metricName,page_path:e.pagePath||null,value:e.value,tags:n,type:e.metricType}})(e))),ht=e=>0!==je.metricsQueue.length&&(je.metricsQueue.length>=A.batchMetricsThreshold||(je.metricsScheduled||(je.metricsScheduled=!0,setTimeout((()=>{je.metricsScheduled=!1,e(bt(je.metricsQueue)),je.metricsQueue=[]}),A.batchMetricsPeriod)),!1)),wt=e=>0!==je.tracesQueue.length&&(je.tracesQueue.length>=A.batchTracesThreshold||(je.tracesScheduled||(je.tracesScheduled=!0,setTimeout((()=>{je.tracesScheduled=!1,e(je.tracesQueue),je.tracesQueue=[]}),A.batchTracesPeriod)),!1)),yt=e=>{var t;z()&&null!=(t=window)&&t.requestIdleCallback?window.requestIdleCallback(e,{timeout:A.ricTimeoutScheduleEvent}):(q()||F())&&A.interactionManager?A.interactionManager.runAfterInteractions(e):e()};function Tt(){return Tt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tt.apply(this,arguments)}const kt="application/x-www-form-urlencoded; charset=UTF-8",_t=e=>{const{data:t,importance:n,isJSON:r,onError:i,url:a}=e,o=r?"application/json":kt,s=n||l.low,c=r?JSON.stringify(t):new URLSearchParams(t).toString();function u(){const e=new XMLHttpRequest;e.open("POST",a,!0),Object.keys(A.headers||{}).forEach((t=>{e.setRequestHeader(t,A.headers[t])})),e.setRequestHeader("Content-Type",kt),H.jwt&&e.setRequestHeader("authorization",`Bearer ${H.jwt}`),e.send(c)}if(!z()||r||!("sendBeacon"in navigator)||s!==l.low||A.headers&&0!==Object.keys(A.headers).length)if(z()&&!r)u();else{const e=Tt({},A.headers,{"Content-Type":o});H.jwt&&(e.Authorization=`Bearer ${H.jwt}`),fetch(a,{method:"POST",mode:"no-cors",headers:e,body:c}).catch((e=>{i(e,{context:"AnalyticsSDKApiError"})}))}else{const e=new Blob([c],{type:kt});try{navigator.sendBeacon.bind(navigator)(a,e)||u()}catch(e){console.error(e),u()}}};var St=n(762),Et=n.n(St);const xt=(e,t,n)=>{const r=e||"";return Et()("2"+r+t+n)};function Ot(){return Ot=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ot.apply(this,arguments)}class jt extends Error{constructor(e){super(e),this.name="CircularJsonReference",this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}}class Nt extends jt{constructor(...e){super(...e),this.name="DomReferenceInAnalyticsEvent"}}function It(){return It=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},It.apply(this,arguments)}const Pt=(e,t=l.low)=>{var n;e&&je.eventsQueue.push(e),nt.isReady&&(!A.trackUserId||H.userId?(t===l.high||(n=Mt,0!==je.eventsQueue.length&&(je.eventsQueue.length>=A.batchEventsThreshold||(je.eventsScheduled||(je.eventsScheduled=!0,setTimeout((()=>{je.eventsScheduled=!1,n(vt(je.eventsQueue)),je.eventsQueue=[]}),A.batchEventsPeriod)),0))))&&Bt():je.eventsQueue.length>10&&(A.trackUserId=!1,A.onError(new Error("userId not set in Logged-in"))))},Mt=(e,t=l.low)=>{if(H.isOptOut||0===e.length)return;let n;try{n=JSON.stringify(e)}catch(t){const r=e.map((e=>e.event_type)).join(", "),[i,a]=(e=>{try{const n=[];for(const r of e){const e=Ot({},r);r.event_properties&&(e.event_properties=Ot({},e.event_properties,{currentTarget:null,target:null,relatedTarget:null,_dispatchInstances:null,_targetInst:null,view:(t=r.event_properties.view,["string","number","boolean"].includes(typeof t)?r.event_properties.view:null)})),n.push(e)}return[!0,JSON.stringify(n)]}catch(e){return[!1,""]}var t})(e);if(!i)return void A.onError(new jt(t instanceof Error?t.message:"unknown"),{listEventType:r});n=a,A.onError(new Nt("Found DOM element reference"),{listEventType:r,stringifiedEventData:n})}const r=Ae().toString(),i=It({},{e:n,v:"2",upload_time:r},{client:A.amplitudeApiKey,checksum:xt(A.amplitudeApiKey,n,r)});_t({url:A.eventsEndpoint,data:i,importance:t,onError:A.onError}),ut({metricName:"Batch Events",data:e,importance:t})},Bt=()=>{Mt(vt(je.eventsQueue)),Ne({eventsQueue:[]})};function Ct(){return Ct=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ct.apply(this,arguments)}const Dt=Object.values(f),At=Object.values(m),Lt=e=>Dt.includes(e)?e:f.unknown,Ut=e=>At.includes(e)?e:m.unknown,Rt=(e,t,n)=>{const r={auth:J()?b.loggedIn:b.notLoggedIn,action:Lt(e),component_type:Ut(t),logging_id:n,platform:A.platform,project_name:A.projectName};return"number"==typeof H.userTypeEnum&&(r.user_type_enum=H.userTypeEnum),r},qt=e=>{const t=Ae();if(!e)return A.onError(new Error("missing logData")),Ct({},Rt(f.unknown,m.unknown),{locale:H.locale,session_lcc_id:H.session_lcc_id,timestamp:t,time_start:Le.timeStart});const n=Ct({},e,Rt(e.action,e.componentType,e.loggingId),{locale:H.locale,session_lcc_id:H.session_lcc_id,timestamp:t,time_start:Le.timeStart});return delete n.componentType,delete n.loggingId,n},Ft={blacklistRegex:[],isEnabled:!1};function zt(){return{page_key:re.pageKey,page_path:re.pagePath,prev_page_key:re.prevPageKey,prev_page_path:re.prevPagePath}}function Kt(e){Object.assign(Ft,e)}function $t(e,t,n=l.low){if(H.isOptOut)return;if(!Oe())return;const r=qt(t);!function(e){Ft.isEnabled&&(ve(),Object.assign(e,zt()))}(r),be(r),function(e){Object.keys(Se).length>0&&Object.assign(e,Se)}(r),r.has_double_fired=!1,r.event_type=e,n===l.high?Pt(r,n):yt((()=>{Pt(r)}))}function Qt(e,t=!1){t?_t({url:A.metricsEndPoint,data:{metrics:e},isJSON:!0,onError:A.onError}):yt((()=>{_t({url:A.metricsEndPoint,data:{metrics:e},isJSON:!0,onError:A.onError})})),ut({metricName:"Batch Metrics",data:e})}function Wt(){return Wt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wt.apply(this,arguments)}function Ht(e){if(!Oe())return;v.server!==A.platform&&!e.pagePath&&re.pagePath&&(e.pagePath=re.pagePath);const t=Object.keys(Se).length?Wt({},e.tags,Se):e.tags;t&&Object.assign(e,{tags:t}),je.metricsQueue.push(e),ht(Qt)&&(Qt(bt(je.metricsQueue)),je.metricsQueue=[])}function Vt(){return Vt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vt.apply(this,arguments)}let Jt=function(e){return e.instant="instant",e.quick="quick",e.moderate="moderate",e.slow="slow",e.unavoidable="unavoidable",e}({});function Xt(e){return e.toLowerCase()}let Gt={};const Zt=(e,t)=>{null!=A&&A.onMarkStep&&A.onMarkStep(e,t),xe({ujs:t})};let Yt;const en={Perfume:()=>{},markStep:e=>{},markStepOnce:e=>{},incrementUjNavigation:()=>{}},tn=()=>{z()&&Yt&&Yt.markNTBT&&Yt.markNTBT()},nn=e=>{z()&&Yt&&en.markStep&&en.markStep(e)},rn=e=>{z()&&Yt&&en.markStepOnce&&en.markStepOnce(e)},an=()=>{z()&&Yt&&en.incrementUjNavigation&&en.incrementUjNavigation()};function on(e={callMarkNTBT:!0}){"unknown"!==A.platform&&(Ft.blacklistRegex.some((e=>e.test(fe())))||($t(j,{action:f.render,componentType:m.page}),e.callMarkNTBT&&tn()))}let sn=!1,cn=!1;const un=e=>{sn=!e.persisted},ln=(e,t="hidden",n=!1)=>{cn||(addEventListener("pagehide",un),addEventListener("beforeunload",(()=>{})),cn=!0),addEventListener("visibilitychange",(({timeStamp:n})=>{document.visibilityState===t&&e({timeStamp:n,isUnloading:sn})}),{capture:!0,once:n})},dn=36e3;function pn(){const e=pt(Ae());if(e&&(O.forEach((e=>{oe[e]&&delete oe[e]})),st()),!oe.lastEventTime||!Le.sessionStart||!e)return;const t=Math.round((oe.lastEventTime-Le.sessionStart)/1e3);if(t<1||t>dn)return;const n=Ce(t);$t(N,{action:f.measurement,componentType:m.page,session_duration:t,session_end:oe.lastEventTime,session_start:Le.sessionStart,session_rank:n})}function mn(){return mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mn.apply(this,arguments)}const fn=[],vn=[],gn=()=>{const e=fn.shift();e&&e()},bn=()=>{const e=vn.shift();e&&e()};let hn={};function wn(e){const t=function(e){return{test_name:e.testName,group_name:e.group,subject_id:e.subjectId,exposed_at:Ae(),subject_type:e.subjectType,platform:A.platform}}(e);hn[e.testName]=hn[e.testName]||0,hn[e.testName]+k>Ae()?lt({metricName:`Event: exposeExperiment ${e.testName} not sent`,data:t}):(hn[e.testName]=Ae(),ot(E,hn),lt({metricName:`Event: exposeExperiment ${e.testName} sent`,data:t}),_t({url:A.exposureEndpoint,data:[t],onError:(t,n)=>{hn[e.testName]=0,ot(E,hn),A.onError(t,n)},isJSON:!0,importance:l.high}))}const yn=e=>{var t,r,i;U(e),z()&&(H.languageCode=(null==(t=navigator)?void 0:t.languages[0])||(null==(r=navigator)?void 0:r.language)||""),te(),(()=>{var e;if(z()&&null!=(e=window)&&e.indexedDB){const e=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Je(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Je(o.result),e.oldVersion,e.newVersion,Je(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{a&&e.addEventListener("close",(()=>a())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}("keyval-store",1,{upgrade(e){e.createObjectStore("keyval")}});rt({idbKeyval:{get:async t=>(await e).get("keyval",t),set:async(t,n)=>(await e).put("keyval",n,t),delete:async t=>(await e).delete("keyval",t),keys:async()=>(await e).getAllKeys("keyval")}})}else rt({idbKeyval:{get:async e=>new Promise((t=>{t(it[e])})),set:async(e,t)=>new Promise((n=>{it[e]=t,n(e)})),delete:async e=>new Promise((()=>{delete it[e]})),keys:async()=>new Promise((e=>{e(Object.keys(it))}))}})})(),lt({metricName:"Initialized Analytics:",data:{deviceId:H.deviceId}}),fn.push((()=>{Pt()})),(async()=>{const e=await at(S);rt({isReady:!0}),gn(),e&&(bn(),se({eventId:e.eventId||oe.eventId,sequenceNumber:e.sequenceNumber||oe.sequenceNumber,sessionId:e.sessionId||oe.sessionId,lastEventTime:e.lastEventTime||oe.lastEventTime,sessionUUID:e.sessionUUID||oe.sessionUUID}),function(e){se(mn({},function(e){const t={};return O.forEach((n=>{e[n]&&(t[n]=e[n])})),t}(e),de()))}(e),Ue({sessionStart:e.sessionStart||oe.sessionStart}),De({ac:e.ac||Ie.ac,af:e.af||Ie.af,ah:e.ah||Ie.ah,al:e.al||Ie.al,am:e.am||Ie.am,ar:e.ar||Ie.ar,as:e.as||Ie.as,pv:e.pv||Ie.pv}),A.trackUserId&&Y({userId:e.userId||H.userId}),pn(),lt({metricName:"Initialized Analytics IndexedDB:",data:e}))})(),async function(){at(E).then((e=>{hn=null!=e?e:{}})).catch((e=>{e instanceof Error&&A.onError(e)}))}(),Z(),z()&&(ln((()=>{se({lastEventTime:Ae()}),st(),Bt()}),"hidden"),ln((()=>{pn()}),"visible")),z()&&(i=()=>{var e,t,n,r;te(),ee({width:null!=(e=null==(t=window)?void 0:t.innerWidth)?e:null,height:null!=(n=null==(r=window)?void 0:r.innerHeight)?n:null})},addEventListener("resize",(()=>{requestAnimationFrame((()=>{i()}))}))),(()=>{if(z())try{const e=n(2);en.markStep=e.markStep,en.markStepOnce=e.markStepOnce,en.incrementUjNavigation=e.incrementUjNavigation,Yt=new e.Perfume({analyticsTracker:e=>{const{data:t,attribution:n,metricName:r,navigatorInformation:i,rating:a}=e,o=I[r],s=(null==n?void 0:n.category)||null;if(!o&&!s)return;const c=(null==i?void 0:i.deviceMemory)||0,u=(null==i?void 0:i.hardwareConcurrency)||0,l=(null==i?void 0:i.isLowEndDevice)||!1,p=(null==i?void 0:i.isLowEndExperience)||!1,v=(null==i?void 0:i.serviceWorkerStatus)||"unsupported",g=Vt({deviceMemory:c,hardwareConcurrency:u,isLowEndDevice:l,isLowEndExperience:p,serviceWorkerStatus:v},Gt),b={is_low_end_device:l,is_low_end_experience:p,page_key:re.pageKey||"",save_data:t.saveData||!1,service_worker:v,is_perf_metric:!0};if("navigationTiming"===r)t&&"number"==typeof t.redirectTime&&Ht({metricName:I.redirectTime.eventName,metricType:d.histogram,tags:b,value:t.redirectTime||0});else if("TTFB"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,vitalsScore:a||null},g)),Ht({metricName:I.TTFB.eventName,metricType:d.histogram,tags:Vt({},b),value:t}),a&&Ht({metricName:`perf_web_vitals_ttfb_${a}`,metricType:d.count,tags:b,value:1});else if("networkInformation"===r)null!=t&&t.effectiveType&&(Gt=t,$t(o.eventName,{action:f.measurement,componentType:m.page,networkInformationDownlink:t.downlink,networkInformationEffectiveType:t.effectiveType,networkInformationRtt:t.rtt,networkInformationSaveData:t.saveData,navigatorDeviceMemory:c,navigatorHardwareConcurrency:u}));else if("storageEstimate"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page},t,g)),Ht({metricName:"perf_storage_estimate_caches",metricType:d.histogram,tags:b,value:t.caches}),Ht({metricName:"perf_storage_estimate_indexed_db",metricType:d.histogram,tags:b,value:t.indexedDB});else if("CLS"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page,score:100*t||null,vitalsScore:a||null},g)),a&&Ht({metricName:`perf_web_vitals_cls_${a}`,metricType:d.count,tags:b,value:1});else if("FID"===r){const e=(null==n?void 0:n.performanceEntry)||null,r=parseInt((null==e?void 0:e.processingStart)||"");$t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,processingStart:null!=e&&e.processingStart?r:null,startTime:null!=e&&e.startTime?parseInt(e.startTime):null,vitalsScore:a||null},g)),a&&Ht({metricName:`perf_web_vitals_fidVitals_${a}`,metricType:d.count,tags:b,value:1})}else"userJourneyStep"===r?($t("perf_user_journey_step",Vt({action:f.measurement,componentType:m.page,duration:t||null,rating:null!=a?a:null,step_name:(null==n?void 0:n.stepName)||""},g)),Ht({metricName:`user_journey_step.${A.projectName}.${A.platform}.${(null==n?void 0:n.stepName)||""}_vitals_${a}`,metricType:d.count,tags:b,value:1}),Ht({metricName:`user_journey_step.${A.projectName}.${A.platform}.${(null==n?void 0:n.stepName)||""}`,metricType:d.distribution,tags:b,value:t||null})):I[r]&&t&&($t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,vitalsScore:a||null},g)),a&&(Ht({metricName:`perf_web_vitals_${Xt(r)}_${a}`,metricType:d.count,tags:b,value:1}),"LCP"===r&&Ht({metricName:`perf_web_vitals_${Xt(r)}`,metricType:d.distribution,tags:b,value:t})))},maxMeasureTime:3e4,steps:A.steps,onMarkStep:Zt})}catch(e){e instanceof Error&&A.onError(e)}})()},Tn=e=>{Y(e),e.userAgent&&Z(),lt({metricName:"Identify:",data:{countryCode:H.countryCode,deviceId:H.deviceId,userId:H.userId}})},kn=({blacklistRegex:e,pageKeyRegex:t,browserHistory:n})=>{Kt({blacklistRegex:e||[],isEnabled:!0}),ae({pageKeyRegex:t}),on({callMarkNTBT:!1}),n.listen((()=>{on()}))},_n=({blacklistRegex:e,pageKeyRegex:t,nextJsRouter:n})=>{Kt({blacklistRegex:e||[],isEnabled:!0}),ae({pageKeyRegex:t}),on({callMarkNTBT:!1}),n.events.on("routeChangeComplete",(()=>{on()}))},Sn=()=>{Y({isOptOut:!0}),ot(S,{})},En=()=>{Y({isOptOut:!1})},xn={Button:{label:"cb_button",uuid:"e921a074-40e6-4371-8700-134d5cd633e6",componentType:m.button}};function On(e,t,n){return{componentName:e,actions:t,data:n}}function jn(){return jn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jn.apply(this,arguments)}function Nn(e,t,n){const{componentName:r,data:i}=n;$t(e.label,jn({componentType:e.componentType,action:t,loggingId:e.uuid,component_name:r},i))}const In={actionMapping:{onPress:f.click,onHover:f.hover},handlers:{Button:{[f.click]:e=>Nn(xn.Button,f.click,e),[f.hover]:e=>Nn(xn.Button,f.hover,e)}}};function Pn(e,t=!1){t?_t({url:A.tracesEndpoint,data:{traces:e},isJSON:!0,onError:A.onError}):yt((()=>{_t({url:A.tracesEndpoint,data:{traces:e},isJSON:!0,onError:A.onError})})),ut({metricName:"Batch Traces",data:e})}function Mn(){return Mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mn.apply(this,arguments)}const Bn=1e6;function Cn(e){return e*Bn}function Dn(e=function(){var e;return null==(e=window)?void 0:e.crypto}()){const t=new Uint32Array(2);return null==e||e.getRandomValues(t),((BigInt(t[0])<<BigInt(32))+BigInt(t[1])).toString()}function An(e,t){return{"x-datadog-origin":"rum","x-datadog-parent-id":t,"x-datadog-sampling-priority":"1","x-datadog-trace-id":e}}function Ln(e){var t;const{name:n,traceId:r,spanId:i,start:a,duration:o,resource:s,meta:c}=e;return{duration:o?Cn(o):0,name:n,resource:s,service:A.projectName,span_id:null!=i?i:Dn(),start:a?Cn(a):0,trace_id:null!=r?r:Dn(),parent_id:P,type:M,meta:Mn({platform:A.platform},re.pageKey?{page_key:re.pageKey}:{},null!=(t=Se.ujs)&&t.length?{last_ujs:Se.ujs[Se.ujs.length-1]}:{},null!=c?c:{})}}function Un(e){return[Ln(e)]}function Rn(e,t){Oe()&&function(e){return e.length>0}(e)&&(t&&function(e,t){e.forEach((e=>function(e,t){const n=Mn({},e.meta,t.meta),r={start:t.start?Cn(t.start):e.start,duration:t.duration?Cn(t.duration):e.duration};Object.assign(e,t,Mn({meta:n},r))}(e,t)))}(e,t),je.tracesQueue.push(e),wt(Pn)&&(Pn(je.tracesQueue),je.tracesQueue=[]))}function qn(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}function Fn(){return Fn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fn.apply(this,arguments)}function zn(){return void 0!==typeof window&&"performance"in window&&"mark"in performance&&"getEntriesByName"in performance}function Kn(e,t){return`perf_${e}${null!=t&&t.label?`_${t.label}`:""}`}function $n(e,t,n){return`${Kn(e,n)}__${t}`}let Qn={};function Wn(e,t,n){if(!zn())return;const r=$n(e,t,n);if(performance.mark(r),"end"===t){const t=Kn(e,n);!function(e,t,n){try{performance.measure(e,t,n)}catch(e){A.onError(e)}}(t,$n(e,"start",n),r);const i=performance.getEntriesByName(t).pop();i&&Ht(Fn({metricName:e,metricType:d.distribution,value:i.duration},null!=n&&n.tags?{tags:n.tags}:{}))}}function Hn(e,t){if(!zn())return;const n=$n(e,"start",t);Qn[n]||(Wn(e,"start",t),Qn[n]=!0)}function Vn(e,t){const n=$n(e,"start",t),r=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(Qn,[n].map(qn));Qn=r}function Jn(e,t){if(!zn())return;const n=$n(e,"start",t);Qn[n]&&(Wn(e,"end",t),Vn(e,t))}function Xn(){zn()&&(performance.clearMarks(),Qn={})}var Gn=n(784);function Zn(){return Zn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zn.apply(this,arguments)}function Yn(e,t,n=l.low){const r=(0,Gn.useRef)(t);return(0,Gn.useEffect)((()=>{r.current=t}),[t]),(0,Gn.useCallback)((t=>{$t(e,Zn({},r.current,t),n)}),[e,n])}function er(){return er=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},er.apply(this,arguments)}function tr(e,t,n=l.low){(0,Gn.useEffect)((()=>{const r=er({},t,{action:f.render});$t(e,r,n)}),[])}function nr(){return nr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nr.apply(this,arguments)}const rr=function(e,t){return{markStartPerf:(0,Gn.useCallback)((()=>Hn(e,t)),[e,t]),markEndPerf:(0,Gn.useCallback)((n=>Jn(e,nr({},t,n))),[e,t])}};function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}function ar(){return Object.entries(ir({},Se,zt(),{sessionUUID:oe.sessionUUID,userId:oe.userId})).reduce(((e,t)=>{return null!=(n=t[1])&&""!==n?ir({},e,{[t[0]]:t[1]}):e;var n}),{})}async function or(){return new Promise((e=>{Mt(vt(je.eventsQueue)),Qt(bt(je.metricsQueue),!0),Pn(je.tracesQueue,!0),Ne({eventsQueue:[],metricsQueue:[],tracesQueue:[]}),e()}))}function sr(){return{"X-CB-Device-ID":H.deviceId||"unknown","X-CB-Is-Logged-In":H.userId?"true":"false","X-CB-Pagekey":re.pageKey||"unknown","X-CB-UJS":(e=Se.ujs,void 0===e||0===e.length?"":e.join(",")),"X-CB-Platform":A.platform||"unknown","X-CB-Project-Name":A.projectName||"unknown","X-CB-Session-UUID":oe.sessionUUID||"unknown","X-CB-Version-Name":A.version?String(A.version):"unknown"};var e}})(),r})()}));'),
                  (t.type = "text/javascript"),
                  document.head.appendChild(t),
                  (() => {
                    var e, t, n;
                    if ("undefined" != typeof window) {
                      let r =
                        null !=
                        (n =
                          null != (e = h.config.get().deviceId)
                            ? e
                            : null == (t = window.crypto)
                            ? void 0
                            : t.randomUUID())
                          ? n
                          : "";
                      if (window.ClientAnalytics) {
                        let {
                          init: e,
                          identify: t,
                          PlatformName: n,
                        } = window.ClientAnalytics;
                        e({
                          isProd: !0,
                          amplitudeApiKey: "c66737ad47ec354ced777935b0af822e",
                          platform: n.web,
                          projectName: "base_account_sdk",
                          showDebugLogging: !1,
                          version: "1.0.0",
                          apiEndpoint: "https://cca-lite.coinbase.com",
                        }),
                          t({ deviceId: r }),
                          h.config.set({ deviceId: r });
                      }
                    }
                  })(),
                  document.head.removeChild(t),
                  e();
              } catch (e) {
                console.error("Failed to execute inlined telemetry script"),
                  t();
              }
            });
        var n,
          r,
          o,
          c,
          u = t.preference;
        if (u) {
          if (!["all", "smartWalletOnly", "eoaOnly"].includes(u.options))
            throw Error(`Invalid options: ${u.options}`);
          if (
            u.attribution &&
            void 0 !== u.attribution.auto &&
            void 0 !== u.attribution.dataSuffix
          )
            throw Error(
              "Attribution cannot contain both auto and dataSuffix properties"
            );
          if (u.telemetry && "boolean" != typeof u.telemetry)
            throw Error("Telemetry must be a boolean");
        }
        let l = null,
          d = {
            getProvider: () => (
              l ||
                (l = (function (e) {
                  var t;
                  let n = { metadata: e.metadata, preference: e.preference };
                  return null !=
                    (t = (function ({ metadata: e, preference: t }) {
                      var n, r;
                      let { appName: a, appLogoUrl: i, appChainIds: s } = e;
                      if ("smartWalletOnly" !== t.options) {
                        let e = globalThis.coinbaseWalletExtension;
                        if (e)
                          return (
                            null == (n = e.setAppInfo) || n.call(e, a, i, s, t),
                            e
                          );
                      }
                      let o = (function () {
                        var e, t;
                        try {
                          let n = globalThis;
                          return null != (e = n.ethereum)
                            ? e
                            : null == (t = n.top)
                            ? void 0
                            : t.ethereum;
                        } catch (e) {
                          return;
                        }
                      })();
                      if (null == o ? void 0 : o.isCoinbaseBrowser)
                        return (
                          null == (r = o.setAppInfo) || r.call(o, a, i, s, t), o
                        );
                    })(n))
                    ? t
                    : new oP(n);
                })(t)),
              (l.sdk = d),
              l
            ),
            subAccount: {
              async create(e) {
                var t, n;
                return (
                  N(
                    null == (t = h.getState().subAccount) ? void 0 : t.address,
                    Error("subaccount already exists")
                  ),
                  await (null == (n = d.getProvider())
                    ? void 0
                    : n.request({
                        method: "wallet_addSubAccount",
                        params: [{ version: "1", account: e }],
                      }))
                );
              },
              async get() {
                var e, t;
                let n = h.subAccounts.get();
                if (null == n ? void 0 : n.address) return n;
                let r =
                  null ==
                  (t = (
                    await (null == (e = d.getProvider())
                      ? void 0
                      : e.request({
                          method: "wallet_connect",
                          params: [{ version: "1", capabilities: {} }],
                        }))
                  ).accounts[0].capabilities)
                    ? void 0
                    : t.subAccounts;
                return Array.isArray(r) ? r[0] : null;
              },
              async addOwner({ address: e, publicKey: t, chainId: n }) {
                var r, o;
                let c = h.subAccounts.get(),
                  u = h.account.get();
                N(u, Error("account does not exist")),
                  N(
                    null == c ? void 0 : c.address,
                    Error("subaccount does not exist")
                  );
                let l = [];
                if (t) {
                  let [e, n] = (0, a.n)(
                    [{ type: "bytes32" }, { type: "bytes32" }],
                    t
                  );
                  l.push({
                    to: c.address,
                    data: (0, i.p)({
                      abi: g,
                      functionName: "addOwnerPublicKey",
                      args: [e, n],
                    }),
                    value: (0, s.nj)(0),
                  });
                }
                return (
                  e &&
                    l.push({
                      to: c.address,
                      data: (0, i.p)({
                        abi: g,
                        functionName: "addOwnerAddress",
                        args: [e],
                      }),
                      value: (0, s.nj)(0),
                    }),
                  await (null == (r = d.getProvider())
                    ? void 0
                    : r.request({
                        method: "wallet_sendCalls",
                        params: [
                          {
                            calls: l,
                            chainId: (0, s.nj)(n),
                            from: null == (o = u.accounts) ? void 0 : o[0],
                            version: "1",
                          },
                        ],
                      }))
                );
              },
              setToOwnerAccount(e) {
                q(e), h.subAccountsConfig.set({ toOwnerAccount: e });
              },
            },
          };
        return d;
      }
    },
    16403: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => m });
      var r = n(23564),
        a = n(26769),
        i = n(99371),
        s = n(42217),
        o = n(16228),
        c = n(50377),
        u = n(85552),
        l = n(42588),
        d = n(17857),
        f = n(44063),
        p = n(20512);
      async function m(e, t) {
        let n,
          m,
          h,
          y,
          b,
          {
            checkReplacement: g = !0,
            confirmations: v = 1,
            hash: w,
            onReplaced: _,
            retryCount: x = 6,
            retryDelay: k = ({ count: e }) => 200 * ~~(1 << e),
            timeout: A = 18e4,
          } = t,
          I = (0, u.A)(["waitForTransactionReceipt", e.uid, w]),
          S = t.pollingInterval
            ? t.pollingInterval
            : e.chain?.experimental_preconfirmationTime
            ? e.chain.experimental_preconfirmationTime
            : e.pollingInterval,
          E = !1,
          { promise: T, resolve: P, reject: C } = (0, o.Y)(),
          O = A
            ? setTimeout(() => {
                b(), y(), C(new a.WA({ hash: w }));
              }, A)
            : void 0;
        return (
          (y = (0, s.lB)(
            I,
            { onReplaced: _, resolve: P, reject: C },
            async (t) => {
              if (
                (h = await (0, i.T)(
                  e,
                  f.h,
                  "getTransactionReceipt"
                )({ hash: w }).catch(() => void 0)) &&
                v <= 1
              ) {
                clearTimeout(O), t.resolve(h), y();
                return;
              }
              b = (0, i.T)(
                e,
                p.q,
                "watchBlockNumber"
              )({
                emitMissed: !0,
                emitOnBegin: !0,
                poll: !0,
                pollingInterval: S,
                async onBlockNumber(s) {
                  let o = (e) => {
                      clearTimeout(O), b(), e(), y();
                    },
                    u = s;
                  if (!E)
                    try {
                      if (h) {
                        if (
                          v > 1 &&
                          (!h.blockNumber || u - h.blockNumber + 1n < v)
                        )
                          return;
                        o(() => t.resolve(h));
                        return;
                      }
                      if (
                        (g &&
                          !n &&
                          ((E = !0),
                          await (0, c.b)(
                            async () => {
                              (n = await (0, i.T)(
                                e,
                                d.x,
                                "getTransaction"
                              )({ hash: w })).blockNumber &&
                                (u = n.blockNumber);
                            },
                            { delay: k, retryCount: x }
                          ),
                          (E = !1)),
                        (h = await (0, i.T)(
                          e,
                          f.h,
                          "getTransactionReceipt"
                        )({ hash: w })),
                        v > 1 && (!h.blockNumber || u - h.blockNumber + 1n < v))
                      )
                        return;
                      o(() => t.resolve(h));
                    } catch (s) {
                      if (s instanceof a.Kz || s instanceof a.Kc) {
                        if (!n) {
                          E = !1;
                          return;
                        }
                        try {
                          (m = n), (E = !0);
                          let a = await (0, c.b)(
                            () =>
                              (0, i.T)(
                                e,
                                l.g,
                                "getBlock"
                              )({ blockNumber: u, includeTransactions: !0 }),
                            {
                              delay: k,
                              retryCount: x,
                              shouldRetry: ({ error: e }) => e instanceof r.l,
                            }
                          );
                          E = !1;
                          let s = a.transactions.find(
                            ({ from: e, nonce: t }) =>
                              e === m.from && t === m.nonce
                          );
                          if (
                            !s ||
                            ((h = await (0, i.T)(
                              e,
                              f.h,
                              "getTransactionReceipt"
                            )({ hash: s.hash })),
                            v > 1 &&
                              (!h.blockNumber || u - h.blockNumber + 1n < v))
                          )
                            return;
                          let d = "replaced";
                          s.to === m.to &&
                          s.value === m.value &&
                          s.input === m.input
                            ? (d = "repriced")
                            : s.from === s.to &&
                              0n === s.value &&
                              (d = "cancelled"),
                            o(() => {
                              t.onReplaced?.({
                                reason: d,
                                replacedTransaction: m,
                                transaction: s,
                                transactionReceipt: h,
                              }),
                                t.resolve(h);
                            });
                        } catch (e) {
                          o(() => t.reject(e));
                        }
                      } else o(() => t.reject(s));
                    }
                },
              });
            }
          )),
          T
        );
      }
    },
    17857: (e, t, n) => {
      "use strict";
      n.d(t, { x: () => s });
      var r = n(26769),
        a = n(82663),
        i = n(2167);
      async function s(
        e,
        { blockHash: t, blockNumber: n, blockTag: s, hash: o, index: c }
      ) {
        let u = s || "latest",
          l = void 0 !== n ? (0, a.cK)(n) : void 0,
          d = null;
        if (
          (o
            ? (d = await e.request(
                { method: "eth_getTransactionByHash", params: [o] },
                { dedupe: !0 }
              ))
            : t
            ? (d = await e.request(
                {
                  method: "eth_getTransactionByBlockHashAndIndex",
                  params: [t, (0, a.cK)(c)],
                },
                { dedupe: !0 }
              ))
            : (l || u) &&
              (d = await e.request(
                {
                  method: "eth_getTransactionByBlockNumberAndIndex",
                  params: [l || u, (0, a.cK)(c)],
                },
                { dedupe: !!l }
              )),
          !d)
        )
          throw new r.Kz({
            blockHash: t,
            blockNumber: n,
            blockTag: u,
            hash: o,
            index: c,
          });
        return (e.chain?.formatters?.transaction?.format || i.uP)(d);
      }
    },
    25734: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => c });
      var r = n(19342),
        a = n(2780),
        i = n(39658),
        s = n(99371),
        o = n(47899);
      async function c(e, t) {
        let {
            abi: n,
            address: c,
            args: u,
            functionName: l,
            dataSuffix: d,
            ...f
          } = t,
          p = (0, a.p)({ abi: n, args: u, functionName: l });
        try {
          return await (0, s.T)(
            e,
            o.Q,
            "estimateGas"
          )({ data: `${p}${d ? d.replace("0x", "") : ""}`, to: c, ...f });
        } catch (t) {
          let e = f.account ? (0, r.J)(f.account) : void 0;
          throw (0, i.j)(t, {
            abi: n,
            address: c,
            args: u,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: l,
            sender: e?.address,
          });
        }
      }
    },
    36078: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => u });
      var r = n(70779),
        a = n(1822),
        i = n(30761),
        s = n(11435),
        o = n(97878),
        c = n(97068);
      function u(e) {
        let { abi: t, args: n, logs: u, strict: l = !0 } = e,
          d = (() => {
            if (e.eventName)
              return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
          })();
        return u
          .map((e) => {
            try {
              let r = t.find(
                (t) => "event" === t.type && e.topics[0] === (0, o.h)(t)
              );
              if (!r) return null;
              let u = (0, c.j)({ ...e, abi: [r], strict: l });
              if (
                (d && !d.includes(u.eventName)) ||
                !(function (e) {
                  let { args: t, inputs: n, matchArgs: r } = e;
                  if (!r) return !0;
                  if (!t) return !1;
                  function o(e, t, n) {
                    try {
                      if ("address" === e.type) return (0, a.h)(t, n);
                      if ("string" === e.type || "bytes" === e.type)
                        return (0, s.S)((0, i.ZJ)(t)) === n;
                      return t === n;
                    } catch {
                      return !1;
                    }
                  }
                  return Array.isArray(t) && Array.isArray(r)
                    ? r.every((e, r) => {
                        if (null == e) return !0;
                        let a = n[r];
                        return (
                          !!a &&
                          (Array.isArray(e) ? e : [e]).some((e) =>
                            o(a, e, t[r])
                          )
                        );
                      })
                    : !(
                        "object" != typeof t ||
                        Array.isArray(t) ||
                        "object" != typeof r ||
                        Array.isArray(r)
                      ) &&
                        Object.entries(r).every(([e, r]) => {
                          if (null == r) return !0;
                          let a = n.find((t) => t.name === e);
                          return (
                            !!a &&
                            (Array.isArray(r) ? r : [r]).some((n) =>
                              o(a, n, t[e])
                            )
                          );
                        });
                })({ args: u.args, inputs: r.inputs, matchArgs: n })
              )
                return null;
              return { ...u, ...e };
            } catch (a) {
              let t, n;
              if (a instanceof r.kE) return null;
              if (a instanceof r.fo || a instanceof r.l3) {
                if (l) return null;
                (t = a.abiItem.name),
                  (n = a.abiItem.inputs?.some((e) => !("name" in e && e.name)));
              }
              return { ...e, args: n ? [] : {}, eventName: t };
            }
          })
          .filter(Boolean);
      }
    },
    44063: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => i });
      var r = n(26769),
        a = n(66313);
      async function i(e, { hash: t }) {
        let n = await e.request(
          { method: "eth_getTransactionReceipt", params: [t] },
          { dedupe: !0 }
        );
        if (!n) throw new r.Kc({ hash: t });
        return (e.chain?.formatters?.transactionReceipt?.format || a.uL)(n);
      }
    },
    50908: (e, t, n) => {
      "use strict";
      let r;
      function a(e) {
        return new Promise((t, n) => {
          (e.oncomplete = e.onsuccess = () => t(e.result)),
            (e.onabort = e.onerror = () => n(e.error));
        });
      }
      function i(e, t) {
        let n = indexedDB.open(e);
        n.onupgradeneeded = () => n.result.createObjectStore(t);
        let r = a(n);
        return (e, n) => r.then((r) => n(r.transaction(t, e).objectStore(t)));
      }
      function s() {
        return r || (r = i("keyval-store", "keyval")), r;
      }
      function o(e, t = s()) {
        return t("readonly", (t) => a(t.get(e)));
      }
      function c(e, t, n = s()) {
        return n("readwrite", (n) => (n.put(t, e), a(n.transaction)));
      }
      function u(e, t = s()) {
        return t("readwrite", (t) => (t.delete(e), a(t.transaction)));
      }
      function l(e = s()) {
        return e("readwrite", (e) => (e.clear(), a(e.transaction)));
      }
      function d(e = s()) {
        return e("readonly", (e) => {
          var t;
          if (e.getAllKeys) return a(e.getAllKeys());
          let n = [];
          return ((t = (e) => n.push(e.key)),
          (e.openCursor().onsuccess = function () {
            this.result && (t(this.result), this.result.continue());
          }),
          a(e.transaction)).then(() => n);
        });
      }
      n.d(t, {
        HP: () => d,
        IU: () => l,
        Jt: () => o,
        hZ: () => c,
        y$: () => i,
        yH: () => u,
      });
    },
    53224: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => o });
      var r = n(4945),
        a = n(36078),
        i = n(82663),
        s = n(55769);
      async function o(
        e,
        {
          address: t,
          blockHash: n,
          fromBlock: c,
          toBlock: u,
          event: l,
          events: d,
          args: f,
          strict: p,
        } = {}
      ) {
        let m = d ?? (l ? [l] : void 0),
          h = [];
        m &&
          ((h = [
            m.flatMap((e) =>
              (0, r.R)({ abi: [e], eventName: e.name, args: d ? void 0 : f })
            ),
          ]),
          l && (h = h[0]));
        let y = (
          n
            ? await e.request({
                method: "eth_getLogs",
                params: [{ address: t, topics: h, blockHash: n }],
              })
            : await e.request({
                method: "eth_getLogs",
                params: [
                  {
                    address: t,
                    topics: h,
                    fromBlock: "bigint" == typeof c ? (0, i.cK)(c) : c,
                    toBlock: "bigint" == typeof u ? (0, i.cK)(u) : u,
                  },
                ],
              })
        ).map((e) => (0, s.e)(e));
        return m ? (0, a.p)({ abi: m, args: f, logs: y, strict: p ?? !1 }) : y;
      }
    },
    56321: (e, t, n) => {
      var r = n(50887).Buffer;
      let a = n(98955);
      function i(e) {
        if (e.startsWith("int[")) return "int256" + e.slice(3);
        if ("int" === e) return "int256";
        if (e.startsWith("uint[")) return "uint256" + e.slice(4);
        if ("uint" === e) return "uint256";
        if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
        else if ("fixed" === e) return "fixed128x128";
        else if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
        else if ("ufixed" === e) return "ufixed128x128";
        return e;
      }
      function s(e) {
        return Number.parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
      }
      function o(e) {
        var t = /^\D+(\d+)x(\d+)$/.exec(e);
        return [Number.parseInt(t[1], 10), Number.parseInt(t[2], 10)];
      }
      function c(e) {
        var t = e.match(/(.*)\[(.*?)\]$/);
        return t ? ("" === t[2] ? "dynamic" : Number.parseInt(t[2], 10)) : null;
      }
      function u(e) {
        var t = typeof e;
        if ("string" === t || "number" === t) return BigInt(e);
        if ("bigint" === t) return e;
        throw Error("Argument is not a number");
      }
      function l(e, t) {
        if ("address" === e) return l("uint160", u(t));
        if ("bool" === e) return l("uint8", +!!t);
        if ("string" === e) return l("bytes", new r(t, "utf8"));
        if ((p = e).lastIndexOf("]") === p.length - 1) {
          if (void 0 === t.length) throw Error("Not an array?");
          if ("dynamic" !== (n = c(e)) && 0 !== n && t.length > n)
            throw Error("Elements exceed array size: " + n);
          for (f in ((d = []),
          (e = e.slice(0, e.lastIndexOf("["))),
          "string" == typeof t && (t = JSON.parse(t)),
          t))
            d.push(l(e, t[f]));
          if ("dynamic" === n) {
            var n,
              i,
              d,
              f,
              p,
              m = l("uint256", t.length);
            d.unshift(m);
          }
          return r.concat(d);
        } else if ("bytes" === e)
          return (
            (t = new r(t)),
            (d = r.concat([l("uint256", t.length), t])),
            t.length % 32 != 0 &&
              (d = r.concat([d, a.zeros(32 - (t.length % 32))])),
            d
          );
        else if (e.startsWith("bytes")) {
          if ((n = s(e)) < 1 || n > 32)
            throw Error("Invalid bytes<N> width: " + n);
          return a.setLengthRight(t, 32);
        } else if (e.startsWith("uint")) {
          if ((n = s(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid uint<N> width: " + n);
          i = u(t);
          let r = a.bitLengthFromBigInt(i);
          if (r > n)
            throw Error("Supplied uint exceeds width: " + n + " vs " + r);
          if (i < 0) throw Error("Supplied uint is negative");
          return a.bufferBEFromBigInt(i, 32);
        } else if (e.startsWith("int")) {
          if ((n = s(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid int<N> width: " + n);
          i = u(t);
          let r = a.bitLengthFromBigInt(i);
          if (r > n)
            throw Error("Supplied int exceeds width: " + n + " vs " + r);
          let o = a.twosFromBigInt(i, 256);
          return a.bufferBEFromBigInt(o, 32);
        } else if (e.startsWith("ufixed")) {
          if (((n = o(e)), (i = u(t)) < 0))
            throw Error("Supplied ufixed is negative");
          return l("uint256", i * BigInt(2) ** BigInt(n[1]));
        } else if (e.startsWith("fixed"))
          return (n = o(e)), l("int256", u(t) * BigInt(2) ** BigInt(n[1]));
        throw Error("Unsupported or invalid type: " + e);
      }
      function d(e, t) {
        if (e.length !== t.length)
          throw Error("Number of types are not matching the values");
        for (var n, o, c = [], l = 0; l < e.length; l++) {
          var d = i(e[l]),
            f = t[l];
          if ("bytes" === d) c.push(f);
          else if ("string" === d) c.push(new r(f, "utf8"));
          else if ("bool" === d) c.push(new r(f ? "01" : "00", "hex"));
          else if ("address" === d) c.push(a.setLength(f, 20));
          else if (d.startsWith("bytes")) {
            if ((n = s(d)) < 1 || n > 32)
              throw Error("Invalid bytes<N> width: " + n);
            c.push(a.setLengthRight(f, n));
          } else if (d.startsWith("uint")) {
            if ((n = s(d)) % 8 || n < 8 || n > 256)
              throw Error("Invalid uint<N> width: " + n);
            o = u(f);
            let e = a.bitLengthFromBigInt(o);
            if (e > n)
              throw Error("Supplied uint exceeds width: " + n + " vs " + e);
            c.push(a.bufferBEFromBigInt(o, n / 8));
          } else if (d.startsWith("int")) {
            if ((n = s(d)) % 8 || n < 8 || n > 256)
              throw Error("Invalid int<N> width: " + n);
            o = u(f);
            let e = a.bitLengthFromBigInt(o);
            if (e > n)
              throw Error("Supplied int exceeds width: " + n + " vs " + e);
            let t = a.twosFromBigInt(o, n);
            c.push(a.bufferBEFromBigInt(t, n / 8));
          } else throw Error("Unsupported or invalid type: " + d);
        }
        return r.concat(c);
      }
      e.exports = {
        rawEncode: function (e, t) {
          var n = [],
            a = [],
            s = 32 * e.length;
          for (var o in e) {
            var u = i(e[o]),
              d = l(u, t[o]);
            "string" === u || "bytes" === u || "dynamic" === c(u)
              ? (n.push(l("uint256", s)), a.push(d), (s += d.length))
              : n.push(d);
          }
          return r.concat(n.concat(a));
        },
        solidityPack: d,
        soliditySHA3: function (e, t) {
          return a.keccak(d(e, t));
        },
      };
    },
    57330: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.shake256 =
          t.shake128 =
          t.keccak_512 =
          t.keccak_384 =
          t.keccak_256 =
          t.keccak_224 =
          t.sha3_512 =
          t.sha3_384 =
          t.sha3_256 =
          t.sha3_224 =
          t.Keccak =
          t.keccakP =
            void 0);
      let r = n(12556),
        a = n(12471),
        i = n(88158),
        s = [],
        o = [],
        c = [],
        u = BigInt(0),
        l = BigInt(1),
        d = BigInt(2),
        f = BigInt(7),
        p = BigInt(256),
        m = BigInt(113);
      for (let e = 0, t = l, n = 1, r = 0; e < 24; e++) {
        ([n, r] = [r, (2 * n + 3 * r) % 5]),
          s.push(2 * (5 * r + n)),
          o.push((((e + 1) * (e + 2)) / 2) % 64);
        let a = u;
        for (let e = 0; e < 7; e++)
          (t = ((t << l) ^ ((t >> f) * m)) % p) & d &&
            (a ^= l << ((l << BigInt(e)) - l));
        c.push(a);
      }
      let [h, y] = (0, a.split)(c, !0),
        b = (e, t, n) =>
          n > 32 ? (0, a.rotlBH)(e, t, n) : (0, a.rotlSH)(e, t, n),
        g = (e, t, n) =>
          n > 32 ? (0, a.rotlBL)(e, t, n) : (0, a.rotlSL)(e, t, n);
      function v(e, t = 24) {
        let n = new Uint32Array(10);
        for (let r = 24 - t; r < 24; r++) {
          for (let t = 0; t < 10; t++)
            n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
          for (let t = 0; t < 10; t += 2) {
            let r = (t + 8) % 10,
              a = (t + 2) % 10,
              i = n[a],
              s = n[a + 1],
              o = b(i, s, 1) ^ n[r],
              c = g(i, s, 1) ^ n[r + 1];
            for (let n = 0; n < 50; n += 10)
              (e[t + n] ^= o), (e[t + n + 1] ^= c);
          }
          let t = e[2],
            a = e[3];
          for (let n = 0; n < 24; n++) {
            let r = o[n],
              i = b(t, a, r),
              c = g(t, a, r),
              u = s[n];
            (t = e[u]), (a = e[u + 1]), (e[u] = i), (e[u + 1] = c);
          }
          for (let t = 0; t < 50; t += 10) {
            for (let r = 0; r < 10; r++) n[r] = e[t + r];
            for (let r = 0; r < 10; r++)
              e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
          }
          (e[0] ^= h[r]), (e[1] ^= y[r]);
        }
        n.fill(0);
      }
      t.keccakP = v;
      class w extends i.Hash {
        constructor(e, t, n, a = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = n),
            (this.enableXOF = a),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, r.number)(n),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, i.u32)(this.state));
        }
        keccak() {
          i.isLE || (0, i.byteSwap32)(this.state32),
            v(this.state32, this.rounds),
            i.isLE || (0, i.byteSwap32)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, r.exists)(this);
          let { blockLen: t, state: n } = this,
            a = (e = (0, i.toBytes)(e)).length;
          for (let r = 0; r < a; ) {
            let i = Math.min(t - this.pos, a - r);
            for (let t = 0; t < i; t++) n[this.pos++] ^= e[r++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: n, blockLen: r } = this;
          (e[n] ^= t),
            (128 & t) != 0 && n === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, r.exists)(this, !1), (0, r.bytes)(e), this.finish();
          let t = this.state,
            { blockLen: n } = this;
          for (let r = 0, a = e.length; r < a; ) {
            this.posOut >= n && this.keccak();
            let i = Math.min(n - this.posOut, a - r);
            e.set(t.subarray(this.posOut, this.posOut + i), r),
              (this.posOut += i),
              (r += i);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, r.number)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, r.output)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: n,
            outputLen: r,
            rounds: a,
            enableXOF: i,
          } = this;
          return (
            e || (e = new w(t, n, r, i, a)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = a),
            (e.suffix = n),
            (e.outputLen = r),
            (e.enableXOF = i),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      t.Keccak = w;
      let _ = (e, t, n) => (0, i.wrapConstructor)(() => new w(t, e, n));
      (t.sha3_224 = _(6, 144, 28)),
        (t.sha3_256 = _(6, 136, 32)),
        (t.sha3_384 = _(6, 104, 48)),
        (t.sha3_512 = _(6, 72, 64)),
        (t.keccak_224 = _(1, 144, 28)),
        (t.keccak_256 = _(1, 136, 32)),
        (t.keccak_384 = _(1, 104, 48)),
        (t.keccak_512 = _(1, 72, 64));
      let x = (e, t, n) =>
        (0, i.wrapXOFConstructorWithOpts)(
          (r = {}) => new w(t, e, void 0 === r.dkLen ? n : r.dkLen, !0)
        );
      (t.shake128 = x(31, 168, 16)), (t.shake256 = x(31, 136, 32));
    },
    59330: (e, t, n) => {
      "use strict";
      function r(e, { method: t }) {
        let n = {};
        return (
          "fallback" === e.transport.type &&
            e.transport.onResponse?.(
              ({ method: e, response: r, status: a, transport: i }) => {
                "success" === a && t === e && (n[r] = i.request);
              }
            ),
          (t) => n[t] || e.request
        );
      }
      n.d(t, { g: () => r });
    },
    64630: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => i });
      var r = n(36078),
        a = n(55769);
      async function i(e, { filter: t }) {
        let n = "strict" in t && t.strict,
          i = await t.request({
            method: "eth_getFilterChanges",
            params: [t.id],
          });
        if ("string" == typeof i[0]) return i;
        let s = i.map((e) => (0, a.e)(e));
        return "abi" in t && t.abi
          ? (0, r.p)({ abi: t.abi, logs: s, strict: n })
          : s;
      }
    },
    69267: (e, t, n) => {
      var r = n(50887).Buffer;
      let a = n(98955),
        i = n(56321),
        s = {
          type: "object",
          properties: {
            types: {
              type: "object",
              additionalProperties: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    type: { type: "string" },
                  },
                  required: ["name", "type"],
                },
              },
            },
            primaryType: { type: "string" },
            domain: { type: "object" },
            message: { type: "object" },
          },
          required: ["types", "primaryType", "domain", "message"],
        },
        o = {
          encodeData(e, t, n, s = !0) {
            let o = ["bytes32"],
              c = [this.hashType(e, n)];
            if (s) {
              let u = (e, t, o) => {
                if (void 0 !== n[t])
                  return [
                    "bytes32",
                    null == o
                      ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                      : a.keccak(this.encodeData(t, o, n, s)),
                  ];
                if (void 0 === o)
                  throw Error(`missing value for field ${e} of type ${t}`);
                if ("bytes" === t) return ["bytes32", a.keccak(o)];
                if ("string" === t)
                  return (
                    "string" == typeof o && (o = r.from(o, "utf8")),
                    ["bytes32", a.keccak(o)]
                  );
                if (t.lastIndexOf("]") === t.length - 1) {
                  let n = t.slice(0, t.lastIndexOf("[")),
                    r = o.map((t) => u(e, n, t));
                  return [
                    "bytes32",
                    a.keccak(
                      i.rawEncode(
                        r.map(([e]) => e),
                        r.map(([, e]) => e)
                      )
                    ),
                  ];
                }
                return [t, o];
              };
              for (let r of n[e]) {
                let [e, n] = u(r.name, r.type, t[r.name]);
                o.push(e), c.push(n);
              }
            } else
              for (let i of n[e]) {
                let e = t[i.name];
                if (void 0 !== e)
                  if ("bytes" === i.type)
                    o.push("bytes32"), (e = a.keccak(e)), c.push(e);
                  else if ("string" === i.type)
                    o.push("bytes32"),
                      "string" == typeof e && (e = r.from(e, "utf8")),
                      (e = a.keccak(e)),
                      c.push(e);
                  else if (void 0 !== n[i.type])
                    o.push("bytes32"),
                      (e = a.keccak(this.encodeData(i.type, e, n, s))),
                      c.push(e);
                  else if (i.type.lastIndexOf("]") === i.type.length - 1)
                    throw Error("Arrays currently unimplemented in encodeData");
                  else o.push(i.type), c.push(e);
              }
            return i.rawEncode(o, c);
          },
          encodeType(e, t) {
            let n = "",
              r = this.findTypeDependencies(e, t).filter((t) => t !== e);
            for (let a of (r = [e].concat(r.sort()))) {
              if (!t[a]) throw Error("No type definition specified: " + a);
              n +=
                a +
                "(" +
                t[a].map(({ name: e, type: t }) => t + " " + e).join(",") +
                ")";
            }
            return n;
          },
          findTypeDependencies(e, t, n = []) {
            if (((e = e.match(/^\w*/)[0]), n.includes(e) || void 0 === t[e]))
              return n;
            for (let r of (n.push(e), t[e]))
              for (let e of this.findTypeDependencies(r.type, t, n))
                n.includes(e) || n.push(e);
            return n;
          },
          hashStruct(e, t, n, r = !0) {
            return a.keccak(this.encodeData(e, t, n, r));
          },
          hashType(e, t) {
            return a.keccak(this.encodeType(e, t));
          },
          sanitizeData(e) {
            let t = {};
            for (let n in s.properties) e[n] && (t[n] = e[n]);
            return (
              t.types &&
                (t.types = Object.assign({ EIP712Domain: [] }, t.types)),
              t
            );
          },
          hash(e, t = !0) {
            let n = this.sanitizeData(e),
              i = [r.from("1901", "hex")];
            return (
              i.push(this.hashStruct("EIP712Domain", n.domain, n.types, t)),
              "EIP712Domain" !== n.primaryType &&
                i.push(this.hashStruct(n.primaryType, n.message, n.types, t)),
              a.keccak(r.concat(i))
            );
          },
        };
      e.exports = {
        TYPED_MESSAGE_SCHEMA: s,
        TypedDataUtils: o,
        hashForSignTypedDataLegacy: function (e) {
          return (function (e) {
            let t = Error("Expect argument to be non-empty array");
            if ("object" != typeof e || !e.length) throw t;
            let n = e.map(function (e) {
                return "bytes" === e.type ? a.toBuffer(e.value) : e.value;
              }),
              r = e.map(function (e) {
                return e.type;
              }),
              s = e.map(function (e) {
                if (!e.name) throw t;
                return e.type + " " + e.name;
              });
            return i.soliditySHA3(
              ["bytes32", "bytes32"],
              [
                i.soliditySHA3(Array(e.length).fill("string"), s),
                i.soliditySHA3(r, n),
              ]
            );
          })(e.data);
        },
        hashForSignTypedData_v3: function (e) {
          return o.hash(e.data, !1);
        },
        hashForSignTypedData_v4: function (e) {
          return o.hash(e.data);
        },
      };
    },
    75099: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => s });
      var r = n(4945),
        a = n(82663),
        i = n(59330);
      async function s(e, t) {
        let {
            address: n,
            abi: s,
            args: o,
            eventName: c,
            fromBlock: u,
            strict: l,
            toBlock: d,
          } = t,
          f = (0, i.g)(e, { method: "eth_newFilter" }),
          p = c ? (0, r.R)({ abi: s, args: o, eventName: c }) : void 0,
          m = await e.request({
            method: "eth_newFilter",
            params: [
              {
                address: n,
                fromBlock: "bigint" == typeof u ? (0, a.cK)(u) : u,
                toBlock: "bigint" == typeof d ? (0, a.cK)(d) : d,
                topics: p,
              },
            ],
          });
        return {
          abi: s,
          args: o,
          eventName: c,
          id: m,
          request: f(m),
          strict: !!l,
          type: "event",
        };
      }
    },
    76592: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.crypto = void 0),
        (t.crypto =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0);
    },
    81981: (e, t, n) => {
      "use strict";
      n.d(t, { Xd: () => a, m8: () => r });
      let r = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        a = "0x0000000000000000000000000000000000000000";
    },
    86168: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => s });
      var r = n(46949),
        a = n(99371),
        i = n(53224);
      async function s(e, t) {
        let {
            abi: n,
            address: s,
            args: o,
            blockHash: c,
            eventName: u,
            fromBlock: l,
            toBlock: d,
            strict: f,
          } = t,
          p = u ? (0, r.iY)({ abi: n, name: u }) : void 0,
          m = p ? void 0 : n.filter((e) => "event" === e.type);
        return (0, a.T)(
          e,
          i.a,
          "getLogs"
        )({
          address: s,
          args: o,
          blockHash: c,
          event: p,
          events: m,
          fromBlock: l,
          toBlock: d,
          strict: f,
        });
      }
    },
    87485: (e, t, n) => {
      "use strict";
      n.d(t, { v: () => u });
      var r = n(19342),
        a = n(47067),
        i = n(2780),
        s = n(39658),
        o = n(99371),
        c = n(8422);
      async function u(e, t) {
        let {
            abi: n,
            address: u,
            args: l,
            dataSuffix: d,
            functionName: f,
            ...p
          } = t,
          m = p.account ? (0, r.J)(p.account) : e.account,
          h = (0, i.p)({ abi: n, args: l, functionName: f });
        try {
          let { data: r } = await (0, o.T)(
              e,
              c.T,
              "call"
            )({
              batch: !1,
              data: `${h}${d ? d.replace("0x", "") : ""}`,
              to: u,
              ...p,
              account: m,
            }),
            i = (0, a.e)({ abi: n, args: l, functionName: f, data: r || "0x" }),
            s = n.filter((e) => "name" in e && e.name === t.functionName);
          return {
            result: i,
            request: {
              abi: s,
              address: u,
              args: l,
              dataSuffix: d,
              functionName: f,
              ...p,
              account: m,
            },
          };
        } catch (e) {
          throw (0, s.j)(e, {
            abi: n,
            address: u,
            args: l,
            docsPath: "/docs/contract/simulateContract",
            functionName: f,
            sender: m?.address,
          });
        }
      }
    },
    88158: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomBytes =
          t.wrapXOFConstructorWithOpts =
          t.wrapConstructorWithOpts =
          t.wrapConstructor =
          t.checkOpts =
          t.Hash =
          t.concatBytes =
          t.toBytes =
          t.utf8ToBytes =
          t.asyncLoop =
          t.nextTick =
          t.hexToBytes =
          t.bytesToHex =
          t.byteSwap32 =
          t.byteSwapIfBE =
          t.byteSwap =
          t.isLE =
          t.rotl =
          t.rotr =
          t.createView =
          t.u32 =
          t.u8 =
          t.isBytes =
            void 0);
      let r = n(76592),
        a = n(12556);
      (t.isBytes = function (e) {
        return (
          e instanceof Uint8Array ||
          (null != e &&
            "object" == typeof e &&
            "Uint8Array" === e.constructor.name)
        );
      }),
        (t.u8 = (e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength)),
        (t.u32 = (e) =>
          new Uint32Array(
            e.buffer,
            e.byteOffset,
            Math.floor(e.byteLength / 4)
          )),
        (t.createView = (e) =>
          new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (t.rotr = (e, t) => (e << (32 - t)) | (e >>> t)),
        (t.rotl = (e, t) => (e << t) | ((e >>> (32 - t)) >>> 0)),
        (t.isLE =
          68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]),
        (t.byteSwap = (e) =>
          ((e << 24) & 0xff000000) |
          ((e << 8) & 0xff0000) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255)),
        (t.byteSwapIfBE = t.isLE ? (e) => e : (e) => (0, t.byteSwap)(e)),
        (t.byteSwap32 = function (e) {
          for (let n = 0; n < e.length; n++) e[n] = (0, t.byteSwap)(e[n]);
        });
      let i = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      t.bytesToHex = function (e) {
        (0, a.bytes)(e);
        let t = "";
        for (let n = 0; n < e.length; n++) t += i[e[n]];
        return t;
      };
      let s = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
      function o(e) {
        return e >= s._0 && e <= s._9
          ? e - s._0
          : e >= s._A && e <= s._F
          ? e - (s._A - 10)
          : e >= s._a && e <= s._f
          ? e - (s._a - 10)
          : void 0;
      }
      async function c(e, n, r) {
        let a = Date.now();
        for (let i = 0; i < e; i++) {
          r(i);
          let e = Date.now() - a;
          (e >= 0 && e < n) || (await (0, t.nextTick)(), (a += e));
        }
      }
      function u(e) {
        if ("string" != typeof e)
          throw Error(`utf8ToBytes expected string, got ${typeof e}`);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function l(e) {
        return "string" == typeof e && (e = u(e)), (0, a.bytes)(e), e;
      }
      (t.hexToBytes = function (e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        let t = e.length,
          n = t / 2;
        if (t % 2)
          throw Error(
            "padded hex string expected, got unpadded hex of length " + t
          );
        let r = new Uint8Array(n);
        for (let t = 0, a = 0; t < n; t++, a += 2) {
          let n = o(e.charCodeAt(a)),
            i = o(e.charCodeAt(a + 1));
          if (void 0 === n || void 0 === i)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[a] + e[a + 1]) +
                '" at index ' +
                a
            );
          r[t] = 16 * n + i;
        }
        return r;
      }),
        (t.nextTick = async () => {}),
        (t.asyncLoop = c),
        (t.utf8ToBytes = u),
        (t.toBytes = l),
        (t.concatBytes = function (...e) {
          let t = 0;
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            (0, a.bytes)(r), (t += r.length);
          }
          let n = new Uint8Array(t);
          for (let t = 0, r = 0; t < e.length; t++) {
            let a = e[t];
            n.set(a, r), (r += a.length);
          }
          return n;
        });
      class d {
        clone() {
          return this._cloneInto();
        }
      }
      t.Hash = d;
      let f = {}.toString;
      (t.checkOpts = function (e, t) {
        if (void 0 !== t && "[object Object]" !== f.call(t))
          throw Error("Options should be object or undefined");
        return Object.assign(e, t);
      }),
        (t.wrapConstructor = function (e) {
          let t = (t) => e().update(l(t)).digest(),
            n = e();
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = () => e()),
            t
          );
        }),
        (t.wrapConstructorWithOpts = function (e) {
          let t = (t, n) => e(n).update(l(t)).digest(),
            n = e({});
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        }),
        (t.wrapXOFConstructorWithOpts = function (e) {
          let t = (t, n) => e(n).update(l(t)).digest(),
            n = e({});
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        }),
        (t.randomBytes = function (e = 32) {
          if (r.crypto && "function" == typeof r.crypto.getRandomValues)
            return r.crypto.getRandomValues(new Uint8Array(e));
          throw Error("crypto.getRandomValues must be defined");
        });
    },
    94102: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => b });
      var r = n(70779),
        a = n(47298),
        i = n(97068),
        s = n(4945),
        o = n(55769),
        c = n(99371),
        u = n(42217),
        l = n(61378),
        d = n(85552),
        f = n(75099),
        p = n(70112),
        m = n(86168),
        h = n(64630),
        y = n(10435);
      function b(e, t) {
        let {
          abi: n,
          address: b,
          args: g,
          batch: v = !0,
          eventName: w,
          fromBlock: _,
          onError: x,
          onLogs: k,
          poll: A,
          pollingInterval: I = e.pollingInterval,
          strict: S,
        } = t;
        return (
          void 0 !== A
            ? A
            : "bigint" == typeof _ ||
              ("webSocket" !== e.transport.type &&
                "ipc" !== e.transport.type &&
                ("fallback" !== e.transport.type ||
                  ("webSocket" !== e.transport.transports[0].config.type &&
                    "ipc" !== e.transport.transports[0].config.type)))
        )
          ? (() => {
              let t = S ?? !1,
                r = (0, d.A)([
                  "watchContractEvent",
                  b,
                  g,
                  v,
                  e.uid,
                  w,
                  I,
                  t,
                  _,
                ]);
              return (0, u.lB)(r, { onLogs: k, onError: x }, (r) => {
                let i, s;
                void 0 !== _ && (i = _ - 1n);
                let o = !1,
                  u = (0, l.w)(
                    async () => {
                      if (!o) {
                        try {
                          s = await (0, c.T)(
                            e,
                            f.X,
                            "createContractEventFilter"
                          )({
                            abi: n,
                            address: b,
                            args: g,
                            eventName: w,
                            strict: t,
                            fromBlock: _,
                          });
                        } catch {}
                        o = !0;
                        return;
                      }
                      try {
                        let a;
                        if (s)
                          a = await (0, c.T)(
                            e,
                            h.I,
                            "getFilterChanges"
                          )({ filter: s });
                        else {
                          let r = await (0, c.T)(e, p.G, "getBlockNumber")({});
                          (a =
                            i && i < r
                              ? await (0, c.T)(
                                  e,
                                  m.u,
                                  "getContractEvents"
                                )({
                                  abi: n,
                                  address: b,
                                  args: g,
                                  eventName: w,
                                  fromBlock: i + 1n,
                                  toBlock: r,
                                  strict: t,
                                })
                              : []),
                            (i = r);
                        }
                        if (0 === a.length) return;
                        if (v) r.onLogs(a);
                        else for (let e of a) r.onLogs([e]);
                      } catch (e) {
                        s && e instanceof a.Di && (o = !1), r.onError?.(e);
                      }
                    },
                    { emitOnBegin: !0, interval: I }
                  );
                return async () => {
                  s &&
                    (await (0, c.T)(e, y.Z, "uninstallFilter")({ filter: s })),
                    u();
                };
              });
            })()
          : (() => {
              let t = (0, d.A)([
                  "watchContractEvent",
                  b,
                  g,
                  v,
                  e.uid,
                  w,
                  I,
                  S ?? !1,
                ]),
                a = !0,
                c = () => (a = !1);
              return (0, u.lB)(
                t,
                { onLogs: k, onError: x },
                (t) => (
                  (async () => {
                    try {
                      let u = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) =>
                                "webSocket" === e.config.type ||
                                "ipc" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        l = w
                          ? (0, s.R)({ abi: n, eventName: w, args: g })
                          : [],
                        { unsubscribe: d } = await u.subscribe({
                          params: ["logs", { address: b, topics: l }],
                          onData(e) {
                            if (!a) return;
                            let s = e.result;
                            try {
                              let { eventName: e, args: r } = (0, i.j)({
                                  abi: n,
                                  data: s.data,
                                  topics: s.topics,
                                  strict: S,
                                }),
                                a = (0, o.e)(s, { args: r, eventName: e });
                              t.onLogs([a]);
                            } catch (i) {
                              let e, n;
                              if (i instanceof r.fo || i instanceof r.l3) {
                                if (S) return;
                                (e = i.abiItem.name),
                                  (n = i.abiItem.inputs?.some(
                                    (e) => !("name" in e && e.name)
                                  ));
                              }
                              let a = (0, o.e)(s, {
                                args: n ? [] : {},
                                eventName: e,
                              });
                              t.onLogs([a]);
                            }
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (c = d), a || c();
                    } catch (e) {
                      x?.(e);
                    }
                  })(),
                  () => c()
                )
              );
            })();
      }
    },
    97068: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => l });
      var r = n(70779),
        a = n(15465),
        i = n(97878),
        s = n(9221),
        o = n(8954),
        c = n(69092);
      let u = "/docs/contract/decodeEventLog";
      function l(e) {
        let { abi: t, data: n, strict: l, topics: d } = e,
          f = l ?? !0,
          [p, ...m] = d;
        if (!p) throw new r._z({ docsPath: u });
        let h = t.find(
          (e) => "event" === e.type && p === (0, i.h)((0, c.B)(e))
        );
        if (!(h && "name" in h) || "event" !== h.type)
          throw new r.kE(p, { docsPath: u });
        let { name: y, inputs: b } = h,
          g = b?.some((e) => !("name" in e && e.name)),
          v = g ? [] : {},
          w = b
            .map((e, t) => [e, t])
            .filter(([e]) => "indexed" in e && e.indexed);
        for (let e = 0; e < w.length; e++) {
          let [t, n] = w[e],
            a = m[e];
          if (!a) throw new r.l3({ abiItem: h, param: t });
          v[g ? n : t.name || n] = (function ({ param: e, value: t }) {
            return "string" === e.type ||
              "bytes" === e.type ||
              "tuple" === e.type ||
              e.type.match(/^(.*)\[(\d+)?\]$/)
              ? t
              : ((0, o.n)([e], t) || [])[0];
          })({ param: t, value: a });
        }
        let _ = b.filter((e) => !("indexed" in e && e.indexed));
        if (_.length > 0) {
          if (n && "0x" !== n)
            try {
              let e = (0, o.n)(_, n);
              if (e)
                if (g)
                  for (let t = 0; t < b.length; t++) v[t] = v[t] ?? e.shift();
                else for (let t = 0; t < _.length; t++) v[_[t].name] = e[t];
            } catch (e) {
              if (f) {
                if (e instanceof r.Iy || e instanceof s.SK)
                  throw new r.fo({
                    abiItem: h,
                    data: n,
                    params: _,
                    size: (0, a.E)(n),
                  });
                throw e;
              }
            }
          else if (f)
            throw new r.fo({ abiItem: h, data: "0x", params: _, size: 0 });
        }
        return { eventName: y, args: Object.values(v).length > 0 ? v : void 0 };
      }
    },
    98955: (e, t, n) => {
      var r = n(50887).Buffer;
      let { keccak_256: a } = n(57330);
      function i(e) {
        return r.allocUnsafe(e).fill(0);
      }
      function s(e, t) {
        let n = e.toString(16);
        n.length % 2 != 0 && (n = "0" + n);
        let a = n.match(/.{1,2}/g).map((e) => parseInt(e, 16));
        for (; a.length < t; ) a.unshift(0);
        return r.from(a);
      }
      function o(e, t, n) {
        let r = i(t);
        return ((e = c(e)), n)
          ? e.length < t
            ? (e.copy(r), r)
            : e.slice(0, t)
          : e.length < t
          ? (e.copy(r, t - e.length), r)
          : e.slice(-t);
      }
      function c(e) {
        if (!r.isBuffer(e))
          if (Array.isArray(e)) e = r.from(e);
          else if ("string" == typeof e)
            e = l(e) ? r.from(u(d(e)), "hex") : r.from(e);
          else if ("number" == typeof e)
            e = new r(
              u(
                (function (e) {
                  let t = e.toString(16);
                  return `0x${t}`;
                })(e).slice(2)
              ),
              "hex"
            );
          else if (null == e) e = r.allocUnsafe(0);
          else if ("bigint" == typeof e) e = s(e);
          else if (e.toArray) e = r.from(e.toArray());
          else throw Error("invalid type");
        return e;
      }
      function u(e) {
        return e.length % 2 ? "0" + e : e;
      }
      function l(e) {
        return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
      }
      function d(e) {
        return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
      }
      e.exports = {
        zeros: i,
        setLength: o,
        setLengthRight: function (e, t) {
          return o(e, t, !0);
        },
        isHexString: l,
        stripHexPrefix: d,
        toBuffer: c,
        bufferToHex: function (e) {
          return "0x" + (e = c(e)).toString("hex");
        },
        keccak: function (e, t) {
          if (((e = c(e)), t || (t = 256), 256 !== t))
            throw Error("unsupported");
          return r.from(a(new Uint8Array(e)));
        },
        bitLengthFromBigInt: function (e) {
          return e.toString(2).length;
        },
        bufferBEFromBigInt: s,
        twosFromBigInt: function (e, t) {
          return (
            (e < 0n ? (~e & ((1n << BigInt(t)) - 1n)) + 1n : e) &
            ((1n << BigInt(t)) - 1n)
          );
        },
      };
    },
  },
]);
