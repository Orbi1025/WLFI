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
      (e._sentryDebugIds[t] = "921d0b59-07f3-4d28-805b-2da69292c31c"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-921d0b59-07f3-4d28-805b-2da69292c31c"));
  })();
} catch (e) {}
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7287],
  {
    1822: (e, t, a) => {
      a.d(t, { h: () => i });
      var n = a(7905),
        r = a(81734);
      function i(e, t) {
        if (!(0, r.P)(e, { strict: !1 })) throw new n.M({ address: e });
        if (!(0, r.P)(t, { strict: !1 })) throw new n.M({ address: t });
        return e.toLowerCase() === t.toLowerCase();
      }
    },
    42286: (e, t, a) => {
      a.d(t, { k: () => u });
      var n = a(60510),
        r = a(9036),
        i = a(42960),
        s = a(66313),
        o = a(84320);
      async function u(e, t) {
        async function a(t) {
          if (t.endsWith(o.vB.slice(2))) {
            let a = (0, r.B)((0, n.iN)(t, -64, -32)),
              s = (0, n.iN)(t, 0, -64)
                .slice(2)
                .match(/.{1,64}/g),
              u = await Promise.all(
                s.map((t) =>
                  o.BH.slice(2) !== t
                    ? e.request(
                        {
                          method: "eth_getTransactionReceipt",
                          params: [`0x${t}`],
                        },
                        { dedupe: !0 }
                      )
                    : void 0
                )
              ),
              d = u.some((e) => null === e)
                ? 100
                : u.every((e) => e?.status === "0x1")
                ? 200
                : u.every((e) => e?.status === "0x0")
                ? 500
                : 600;
            return {
              atomic: !1,
              chainId: (0, i.ME)(a),
              receipts: u.filter(Boolean),
              status: d,
              version: "2.0.0",
            };
          }
          return e.request({ method: "wallet_getCallsStatus", params: [t] });
        }
        let {
            atomic: u = !1,
            chainId: d,
            receipts: l,
            version: c = "2.0.0",
            ...f
          } = await a(t.id),
          [p, y] = (() => {
            let e = f.status;
            return e >= 100 && e < 200
              ? ["pending", e]
              : e >= 200 && e < 300
              ? ["success", e]
              : e >= 300 && e < 700
              ? ["failure", e]
              : "CONFIRMED" === e
              ? ["success", 200]
              : "PENDING" === e
              ? ["pending", 100]
              : [void 0, e];
          })();
        return {
          ...f,
          atomic: u,
          chainId: d ? (0, i.ME)(d) : void 0,
          receipts:
            l?.map((e) => ({
              ...e,
              blockNumber: (0, i.uU)(e.blockNumber),
              gasUsed: (0, i.uU)(e.gasUsed),
              status: s.Lj[e.status],
            })) ?? [],
          statusCode: y,
          status: p,
          version: c,
        };
      }
    },
    42360: (e, t, a) => {
      a.d(t, { H4: () => h, v8: () => y, $$: () => m });
      var n = a(70779),
        r = a(7905),
        i = a(85552),
        s = a(6616);
      class o extends s.C {
        constructor({ domain: e }) {
          super(`Invalid domain "${(0, i.A)(e)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."],
          });
        }
      }
      class u extends s.C {
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
      class d extends s.C {
        constructor({ type: e }) {
          super(`Struct type "${e}" is invalid.`, {
            metaMessages: ["Struct type must not be a Solidity type."],
            name: "InvalidStructTypeError",
          });
        }
      }
      var l = a(81734),
        c = a(15465),
        f = a(82663),
        p = a(30026);
      function y(e) {
        let { domain: t, message: a, primaryType: n, types: r } = e,
          s = (e, t) => {
            let a = { ...t };
            for (let t of e) {
              let { name: e, type: n } = t;
              "address" === n && (a[e] = a[e].toLowerCase());
            }
            return a;
          },
          o = r.EIP712Domain && t ? s(r.EIP712Domain, t) : {},
          u = (() => {
            if ("EIP712Domain" !== n) return s(r[n], a);
          })();
        return (0, i.A)({ domain: o, message: u, primaryType: n, types: r });
      }
      function m(e) {
        let { domain: t, message: a, primaryType: i, types: s } = e,
          y = (e, t) => {
            for (let a of e) {
              let { name: e, type: i } = a,
                o = t[e],
                u = i.match(p.Ge);
              if (u && ("number" == typeof o || "bigint" == typeof o)) {
                let [e, t, a] = u;
                (0, f.cK)(o, {
                  signed: "int" === t,
                  size: Number.parseInt(a) / 8,
                });
              }
              if ("address" === i && "string" == typeof o && !(0, l.P)(o))
                throw new r.M({ address: o });
              let m = i.match(p.BD);
              if (m) {
                let [e, t] = m;
                if (t && (0, c.E)(o) !== Number.parseInt(t))
                  throw new n.BI({
                    expectedSize: Number.parseInt(t),
                    givenSize: (0, c.E)(o),
                  });
              }
              let h = s[i];
              h &&
                ((function (e) {
                  if (
                    "address" === e ||
                    "bool" === e ||
                    "string" === e ||
                    e.startsWith("bytes") ||
                    e.startsWith("uint") ||
                    e.startsWith("int")
                  )
                    throw new d({ type: e });
                })(i),
                y(h, o));
            }
          };
        if (s.EIP712Domain && t) {
          if ("object" != typeof t) throw new o({ domain: t });
          y(s.EIP712Domain, t);
        }
        if ("EIP712Domain" !== i)
          if (s[i]) y(s[i], a);
          else throw new u({ primaryType: i, types: s });
      }
      function h({ domain: e }) {
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
    45965: (e, t, a) => {
      a.d(t, { h: () => d });
      var n = a(19342),
        r = a(10250),
        i = a(1822),
        s = a(99371),
        o = a(19305),
        u = a(88540);
      async function d(e, t) {
        let { account: a = e.account, chainId: d, nonce: l } = t;
        if (!a)
          throw new r.T({ docsPath: "/docs/eip7702/prepareAuthorization" });
        let c = (0, n.J)(a),
          f = (() => {
            if (t.executor)
              return "self" === t.executor ? t.executor : (0, n.J)(t.executor);
          })(),
          p = { address: t.contractAddress ?? t.address, chainId: d, nonce: l };
        return (
          void 0 === p.chainId &&
            (p.chainId =
              e.chain?.id ?? (await (0, s.T)(e, o.T, "getChainId")({}))),
          void 0 === p.nonce &&
            ((p.nonce = await (0, s.T)(
              e,
              u.y,
              "getTransactionCount"
            )({ address: c.address, blockTag: "pending" })),
            ("self" === f || (f?.address && (0, i.h)(f.address, c.address))) &&
              (p.nonce += 1)),
          p
        );
      }
    },
    46288: (e, t, a) => {
      a.d(t, { Zh: () => u });
      var n = a(66956),
        r = a(97100),
        i = a(82663),
        s = a(11435),
        o = a(42360);
      function u(e) {
        let { domain: t = {}, message: a, primaryType: n } = e,
          i = { EIP712Domain: (0, o.H4)({ domain: t }), ...e.types };
        (0, o.$$)({ domain: t, message: a, primaryType: n, types: i });
        let u = ["0x1901"];
        return (
          t &&
            u.push(
              (function ({ domain: e, types: t }) {
                return d({ data: e, primaryType: "EIP712Domain", types: t });
              })({ domain: t, types: i })
            ),
          "EIP712Domain" !== n &&
            u.push(d({ data: a, primaryType: n, types: i })),
          (0, s.S)((0, r.xW)(u))
        );
      }
      function d({ data: e, primaryType: t, types: a }) {
        let r = (function e({ data: t, primaryType: a, types: r }) {
          let o = [{ type: "bytes32" }],
            u = [
              (function ({ primaryType: e, types: t }) {
                let a = (0, i.nj)(
                  (function ({ primaryType: e, types: t }) {
                    let a = "",
                      n = (function e(
                        { primaryType: t, types: a },
                        n = new Set()
                      ) {
                        let r = t.match(/^\w*/u),
                          i = r?.[0];
                        if (n.has(i) || void 0 === a[i]) return n;
                        for (let t of (n.add(i), a[i]))
                          e({ primaryType: t.type, types: a }, n);
                        return n;
                      })({ primaryType: e, types: t });
                    for (let r of (n.delete(e), [e, ...Array.from(n).sort()]))
                      a += `${r}(${t[r]
                        .map(({ name: e, type: t }) => `${t} ${e}`)
                        .join(",")})`;
                    return a;
                  })({ primaryType: e, types: t })
                );
                return (0, s.S)(a);
              })({ primaryType: a, types: r }),
            ];
          for (let d of r[a]) {
            let [a, l] = (function t({ types: a, name: r, type: o, value: u }) {
              if (void 0 !== a[o])
                return [
                  { type: "bytes32" },
                  (0, s.S)(e({ data: u, primaryType: o, types: a })),
                ];
              if ("bytes" === o) {
                let e = u.length % 2 ? "0" : "";
                return (
                  (u = `0x${e + u.slice(2)}`),
                  [{ type: "bytes32" }, (0, s.S)(u)]
                );
              }
              if ("string" === o)
                return [{ type: "bytes32" }, (0, s.S)((0, i.nj)(u))];
              if (o.lastIndexOf("]") === o.length - 1) {
                let e = o.slice(0, o.lastIndexOf("[")),
                  i = u.map((n) => t({ name: r, type: e, types: a, value: n }));
                return [
                  { type: "bytes32" },
                  (0, s.S)(
                    (0, n.h)(
                      i.map(([e]) => e),
                      i.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: o }, u];
            })({ types: r, name: d.name, type: d.type, value: t[d.name] });
            o.push(a), u.push(l);
          }
          return (0, n.h)(o, u);
        })({ data: e, primaryType: t, types: a });
        return (0, s.S)(r);
      }
    },
    66588: (e, t, a) => {
      a.d(t, { h: () => s });
      var n = a(66634),
        r = a(42960),
        i = a(30761);
      function s({ r: e, s: t, to: a = "hex", v: s, yParity: o }) {
        let u = (() => {
            if (0 === o || 1 === o) return o;
            if (s && (27n === s || 28n === s || s >= 35n))
              return +(s % 2n === 0n);
            throw Error("Invalid `v` or `yParity` value");
          })(),
          d = `0x${new n.secp256k1.Signature(
            (0, r.uU)(e),
            (0, r.uU)(t)
          ).toCompactHex()}${0 === u ? "1b" : "1c"}`;
        return "hex" === a ? d : (0, i.aT)(d);
      }
    },
    83564: (e, t, a) => {
      a.d(t, { c: () => c });
      var n = a(6616);
      class r extends n.C {
        constructor(e) {
          super(`Call bundle failed with status: ${e.statusCode}`, {
            name: "BundleFailedError",
          }),
            Object.defineProperty(this, "result", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.result = e);
        }
      }
      var i = a(42217),
        s = a(61378),
        o = a(16228),
        u = a(50377),
        d = a(85552),
        l = a(42286);
      async function c(e, t) {
        let a,
          {
            id: n,
            pollingInterval: c = e.pollingInterval,
            status: p = ({ statusCode: e }) => 200 === e || e >= 300,
            retryCount: y = 4,
            retryDelay: m = ({ count: e }) => 200 * ~~(1 << e),
            timeout: h = 6e4,
            throwOnFailure: w = !1,
          } = t,
          v = (0, d.A)(["waitForCallsStatus", e.uid, n]),
          { promise: b, resolve: g, reject: I } = (0, o.Y)(),
          C = (0, i.lB)(v, { resolve: g, reject: I }, (t) => {
            let i = (0, s.w)(
              async () => {
                let s = (e) => {
                  clearTimeout(a), i(), e(), C();
                };
                try {
                  let a = await (0, u.b)(
                    async () => {
                      let t = await (0, l.k)(e, { id: n });
                      if (w && "failure" === t.status) throw new r(t);
                      return t;
                    },
                    { retryCount: y, delay: m }
                  );
                  if (!p(a)) return;
                  s(() => t.resolve(a));
                } catch (e) {
                  s(() => t.reject(e));
                }
              },
              { interval: c, emitOnBegin: !0 }
            );
            return i;
          });
        return (
          (a = h
            ? setTimeout(() => {
                C(), clearTimeout(a), I(new f({ id: n }));
              }, h)
            : void 0),
          await b
        );
      }
      class f extends n.C {
        constructor({ id: e }) {
          super(
            `Timed out while waiting for call bundle with id "${e}" to be confirmed.`,
            { name: "WaitForCallsStatusTimeoutError" }
          );
        }
      }
    },
    84320: (e, t, a) => {
      a.d(t, { BH: () => p, vB: () => f, yM: () => y });
      var n = a(19342),
        r = a(6616),
        i = a(47298),
        s = a(2780),
        o = a(97100),
        u = a(42960),
        d = a(82663),
        l = a(44189),
        c = a(9953);
      let f =
          "0x5792579257925792579257925792579257925792579257925792579257925792",
        p = (0, d.cK)(0, { size: 32 });
      async function y(e, t) {
        let {
            account: a = e.account,
            capabilities: y,
            chain: m = e.chain,
            experimental_fallback: h,
            experimental_fallbackDelay: w = 32,
            forceAtomic: v = !1,
            id: b,
            version: g = "2.0.0",
          } = t,
          I = a ? (0, n.J)(a) : null,
          C = t.calls.map((e) => {
            let t = e.abi
              ? (0, s.p)({
                  abi: e.abi,
                  functionName: e.functionName,
                  args: e.args,
                })
              : e.data;
            return {
              data: e.dataSuffix && t ? (0, o.xW)([t, e.dataSuffix]) : t,
              to: e.to,
              value: e.value ? (0, d.cK)(e.value) : void 0,
            };
          });
        try {
          let t = await e.request(
            {
              method: "wallet_sendCalls",
              params: [
                {
                  atomicRequired: v,
                  calls: C,
                  capabilities: y,
                  chainId: (0, d.cK)(m.id),
                  from: I?.address,
                  id: b,
                  version: g,
                },
              ],
            },
            { retryCount: 0 }
          );
          if ("string" == typeof t) return { id: t };
          return t;
        } catch (a) {
          if (
            h &&
            ("MethodNotFoundRpcError" === a.name ||
              "MethodNotSupportedRpcError" === a.name ||
              "UnknownRpcError" === a.name ||
              a.details
                .toLowerCase()
                .includes("does not exist / is not available") ||
              a.details
                .toLowerCase()
                .includes("missing or invalid. request()") ||
              a.details
                .toLowerCase()
                .includes("did not match any variant of untagged enum") ||
              a.details
                .toLowerCase()
                .includes("account upgraded to unsupported contract") ||
              a.details.toLowerCase().includes("eip-7702 not supported") ||
              a.details.toLowerCase().includes("unsupported wc_ method"))
          ) {
            if (y && Object.values(y).some((e) => !e.optional)) {
              let e =
                "non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";
              throw new i.L5(new r.C(e, { details: e }));
            }
            if (v && C.length > 1) {
              let e =
                "`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";
              throw new i.jz(new r.C(e, { details: e }));
            }
            let t = [];
            for (let a of C) {
              let n = (0, c.v)(e, {
                account: I,
                chain: m,
                data: a.data,
                to: a.to,
                value: a.value ? (0, u.uU)(a.value) : void 0,
              });
              t.push(n), w > 0 && (await new Promise((e) => setTimeout(e, w)));
            }
            let a = await Promise.allSettled(t);
            if (a.every((e) => "rejected" === e.status)) throw a[0].reason;
            let n = a.map((e) => ("fulfilled" === e.status ? e.value : p));
            return { id: (0, o.xW)([...n, (0, d.cK)(m.id, { size: 32 }), f]) };
          }
          throw (0, l.p)(a, { ...t, account: I, chain: t.chain });
        }
      }
    },
    95878: (e, t, a) => {
      a.d(t, { A: () => o });
      var n = a(11435),
        r = a(97100),
        i = a(15465),
        s = a(82663);
      function o(e, t) {
        return (0, n.S)(
          (function (e) {
            let t =
                "string" == typeof e
                  ? (0, s.i3)(e)
                  : "string" == typeof e.raw
                  ? e.raw
                  : (0, s.My)(e.raw),
              a = (0, s.i3)(`\x19Ethereum Signed Message:
${(0, i.E)(t)}`);
            return (0, r.xW)([a, t]);
          })(e),
          t
        );
      }
    },
  },
]);
