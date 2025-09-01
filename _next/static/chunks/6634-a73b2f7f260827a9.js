try {
  !(function () {
    var t =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
          ? self
          : {},
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "97ef98a7-1cd2-4c85-81a8-fb31ccade9e7"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-97ef98a7-1cd2-4c85-81a8-fb31ccade9e7"));
  })();
} catch (t) {}
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6634],
  {
    47589: (t, e, r) => {
      r.d(e, { w: () => o });
      var i = r(29272);
      class n extends i.Vw {
        constructor(t, e) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, i.sd)(t);
          let r = (0, i.ZJ)(e);
          if (
            ((this.iHash = t.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let n = this.blockLen,
            o = new Uint8Array(n);
          o.set(r.length > n ? t.create().update(r).digest() : r);
          for (let t = 0; t < o.length; t++) o[t] ^= 54;
          this.iHash.update(o), (this.oHash = t.create());
          for (let t = 0; t < o.length; t++) o[t] ^= 106;
          this.oHash.update(o), (0, i.uH)(o);
        }
        update(t) {
          return (0, i.CC)(this), this.iHash.update(t), this;
        }
        digestInto(t) {
          (0, i.CC)(this),
            (0, i.DO)(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy();
        }
        digest() {
          let t = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(t), t;
        }
        _cloneInto(t) {
          t || (t = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: e,
            iHash: r,
            finished: i,
            destroyed: n,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (t.finished = i),
            (t.destroyed = n),
            (t.blockLen = o),
            (t.outputLen = s),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = r._cloneInto(t.iHash)),
            t
          );
        }
        clone() {
          return this._cloneInto();
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let o = (t, e, r) => new n(t, e).update(r).digest();
      o.create = (t, e) => new n(t, e);
    },
    61293: (t, e, r) => {
      r.d(e, { s: () => R });
      var i = r(47589),
        n = r(68907),
        o = r(29272),
        s = r(92477);
      let l = BigInt(0),
        a = BigInt(1);
      function f(t, e) {
        let r = e.negate();
        return t ? r : e;
      }
      function u(t, e) {
        if (!Number.isSafeInteger(t) || t <= 0 || t > e)
          throw Error(
            "invalid window size, expected [1.." + e + "], got W=" + t
          );
      }
      function d(t, e) {
        u(t, e);
        let r = Math.ceil(e / t) + 1,
          i = 2 ** (t - 1),
          o = 2 ** t;
        return {
          windows: r,
          windowSize: i,
          mask: (0, n.OG)(t),
          maxNumber: o,
          shiftBy: BigInt(t),
        };
      }
      function c(t, e, r) {
        let { windowSize: i, mask: n, maxNumber: o, shiftBy: s } = r,
          l = Number(t & n),
          f = t >> s;
        l > i && ((l -= o), (f += a));
        let u = e * i,
          d = u + Math.abs(l) - 1,
          c = 0 === l;
        return {
          nextN: f,
          offset: d,
          isZero: c,
          isNeg: l < 0,
          isNegF: e % 2 != 0,
          offsetF: u,
        };
      }
      let h = new WeakMap(),
        p = new WeakMap();
      function g(t) {
        return p.get(t) || 1;
      }
      function y(t) {
        if (t !== l) throw Error("invalid wNAF");
      }
      function m(t, e) {
        if (!e) return (0, s.D0)(t);
        if (e.ORDER !== t)
          throw Error("Field.ORDER must match order: Fp == p, Fn == n");
        return (0, s.jr)(e), e;
      }
      function w(t) {
        void 0 !== t.lowS && (0, n.e8)("lowS", t.lowS),
          void 0 !== t.prehash && (0, n.e8)("prehash", t.prehash);
      }
      class E extends Error {
        constructor(t = "") {
          super(t);
        }
      }
      let b = {
          Err: E,
          _tlv: {
            encode: (t, e) => {
              let { Err: r } = b;
              if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
              if (1 & e.length) throw new r("tlv.encode: unpadded data");
              let i = e.length / 2,
                o = (0, n.zW)(i);
              if ((o.length / 2) & 128)
                throw new r("tlv.encode: long form length too big");
              let s = i > 127 ? (0, n.zW)((o.length / 2) | 128) : "";
              return (0, n.zW)(t) + s + o + e;
            },
            decode(t, e) {
              let { Err: r } = b,
                i = 0;
              if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
              if (e.length < 2 || e[i++] !== t)
                throw new r("tlv.decode: wrong tlv");
              let n = e[i++],
                o = 0;
              if (128 & n) {
                let t = 127 & n;
                if (!t)
                  throw new r(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (t > 4)
                  throw new r("tlv.decode(long): byte length is too big");
                let s = e.subarray(i, i + t);
                if (s.length !== t)
                  throw new r("tlv.decode: length bytes not complete");
                if (0 === s[0])
                  throw new r("tlv.decode(long): zero leftmost byte");
                for (let t of s) o = (o << 8) | t;
                if (((i += t), o < 128))
                  throw new r("tlv.decode(long): not minimal encoding");
              } else o = n;
              let s = e.subarray(i, i + o);
              if (s.length !== o) throw new r("tlv.decode: wrong value length");
              return { v: s, l: e.subarray(i + o) };
            },
          },
          _int: {
            encode(t) {
              let { Err: e } = b;
              if (t < v)
                throw new e("integer: negative integers are not allowed");
              let r = (0, n.zW)(t);
              if (
                (8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length)
              )
                throw new e("unexpected DER parsing assertion: unpadded hex");
              return r;
            },
            decode(t) {
              let { Err: e } = b;
              if (128 & t[0])
                throw new e("invalid signature integer: negative");
              if (0 === t[0] && !(128 & t[1]))
                throw new e(
                  "invalid signature integer: unnecessary leading zero"
                );
              return (0, n.Ph)(t);
            },
          },
          toSig(t) {
            let { Err: e, _int: r, _tlv: i } = b,
              o = (0, n.qj)("signature", t),
              { v: s, l: l } = i.decode(48, o);
            if (l.length)
              throw new e("invalid signature: left bytes after parsing");
            let { v: a, l: f } = i.decode(2, s),
              { v: u, l: d } = i.decode(2, f);
            if (d.length)
              throw new e("invalid signature: left bytes after parsing");
            return { r: r.decode(a), s: r.decode(u) };
          },
          hexFromSig(t) {
            let { _tlv: e, _int: r } = b,
              i = e.encode(2, r.encode(t.r)),
              n = e.encode(2, r.encode(t.s));
            return e.encode(48, i + n);
          },
        },
        v = BigInt(0),
        B = BigInt(1),
        x = BigInt(2),
        O = BigInt(3),
        I = BigInt(4);
      function S(t, e, r) {
        let { BYTES: i } = t;
        return function (o) {
          let s;
          if ("bigint" == typeof o) s = o;
          else {
            let r = (0, n.qj)("private key", o);
            if (e) {
              if (!e.includes(2 * r.length)) throw Error("invalid private key");
              let t = new Uint8Array(i);
              t.set(r, t.length - r.length), (r = t);
            }
            try {
              s = t.fromBytes(r);
            } catch (t) {
              throw Error(
                `invalid private key: expected ui8a of size ${i}, got ${typeof o}`
              );
            }
          }
          if ((r && (s = t.create(s)), !t.isValidNot0(s)))
            throw Error("invalid private key: out of range [1..N-1]");
          return s;
        };
      }
      function q(t) {
        return Uint8Array.of(t ? 2 : 3);
      }
      function R(t, e) {
        let r = (e) =>
          (function (t) {
            let {
                CURVE: e,
                curveOpts: r,
                ecdsaOpts: E,
              } = (function (t) {
                let { CURVE: e, curveOpts: r } = (function (t) {
                  let e = {
                      a: t.a,
                      b: t.b,
                      p: t.Fp.ORDER,
                      n: t.n,
                      h: t.h,
                      Gx: t.Gx,
                      Gy: t.Gy,
                    },
                    r = {
                      Fp: t.Fp,
                      Fn: (0, s.D0)(e.n, t.nBitLength),
                      allowedPrivateKeyLengths: t.allowedPrivateKeyLengths,
                      allowInfinityPoint: t.allowInfinityPoint,
                      endo: t.endo,
                      wrapPrivateKey: t.wrapPrivateKey,
                      isTorsionFree: t.isTorsionFree,
                      clearCofactor: t.clearCofactor,
                      fromBytes: t.fromBytes,
                      toBytes: t.toBytes,
                    };
                  return { CURVE: e, curveOpts: r };
                })(t);
                return {
                  CURVE: e,
                  curveOpts: r,
                  ecdsaOpts: {
                    hash: t.hash,
                    hmac: t.hmac,
                    randomBytes: t.randomBytes,
                    lowS: t.lowS,
                    bits2int: t.bits2int,
                    bits2int_modN: t.bits2int_modN,
                  },
                };
              })(t),
              R = (function (t, e, r = {}) {
                (0, n.DS)(
                  e,
                  { hash: "function" },
                  {
                    hmac: "function",
                    lowS: "boolean",
                    randomBytes: "function",
                    bits2int: "function",
                    bits2int_modN: "function",
                  }
                );
                let l = e.randomBytes || o.po,
                  a =
                    e.hmac ||
                    ((t, ...r) => (0, i.w)(e.hash, t, (0, o.Id)(...r))),
                  { Fp: f, Fn: u } = t,
                  { ORDER: d, BITS: c } = u;
                function h(t, e) {
                  if (!u.isValidNot0(e))
                    throw Error(
                      `invalid signature ${t}: out of range 1..CURVE.n`
                    );
                }
                class p {
                  constructor(t, e, r) {
                    h("r", t),
                      h("s", e),
                      (this.r = t),
                      (this.s = e),
                      null != r && (this.recovery = r),
                      Object.freeze(this);
                  }
                  static fromCompact(t) {
                    let e = u.BYTES,
                      r = (0, n.qj)("compactSignature", t, 2 * e);
                    return new p(
                      u.fromBytes(r.subarray(0, e)),
                      u.fromBytes(r.subarray(e, 2 * e))
                    );
                  }
                  static fromDER(t) {
                    let { r: e, s: r } = b.toSig((0, n.qj)("DER", t));
                    return new p(e, r);
                  }
                  assertValidity() {}
                  addRecoveryBit(t) {
                    return new p(this.r, this.s, t);
                  }
                  recoverPublicKey(e) {
                    let r = f.ORDER,
                      { r: i, s, recovery: l } = this;
                    if (null == l || ![0, 1, 2, 3].includes(l))
                      throw Error("recovery id invalid");
                    if (d * x < r && l > 1)
                      throw Error("recovery id is ambiguous for h>1 curve");
                    let a = 2 === l || 3 === l ? i + d : i;
                    if (!f.isValid(a))
                      throw Error("recovery id 2 or 3 invalid");
                    let c = f.toBytes(a),
                      h = t.fromHex((0, o.Id)(q((1 & l) == 0), c)),
                      p = u.inv(a),
                      g = E((0, n.qj)("msgHash", e)),
                      y = u.create(-g * p),
                      m = u.create(s * p),
                      w = t.BASE.multiplyUnsafe(y).add(h.multiplyUnsafe(m));
                    if (w.is0()) throw Error("point at infinify");
                    return w.assertValidity(), w;
                  }
                  hasHighS() {
                    return this.s > d >> B;
                  }
                  normalizeS() {
                    return this.hasHighS()
                      ? new p(this.r, u.neg(this.s), this.recovery)
                      : this;
                  }
                  toBytes(t) {
                    if ("compact" === t)
                      return (0, o.Id)(u.toBytes(this.r), u.toBytes(this.s));
                    if ("der" === t) return (0, o.aT)(b.hexFromSig(this));
                    throw Error("invalid format");
                  }
                  toDERRawBytes() {
                    return this.toBytes("der");
                  }
                  toDERHex() {
                    return (0, o.My)(this.toBytes("der"));
                  }
                  toCompactRawBytes() {
                    return this.toBytes("compact");
                  }
                  toCompactHex() {
                    return (0, o.My)(this.toBytes("compact"));
                  }
                }
                let g = S(u, r.allowedPrivateKeyLengths, r.wrapPrivateKey);
                function y(e) {
                  if ("bigint" == typeof e) return !1;
                  if (e instanceof t) return !0;
                  let i = (0, n.qj)("key", e).length,
                    o = f.BYTES,
                    s = o + 1;
                  if (!r.allowedPrivateKeyLengths && u.BYTES !== s)
                    return i === s || i === 2 * o + 1;
                }
                let m =
                    e.bits2int ||
                    function (t) {
                      if (t.length > 8192) throw Error("input is too large");
                      let e = (0, n.Ph)(t),
                        r = 8 * t.length - c;
                      return r > 0 ? e >> BigInt(r) : e;
                    },
                  E =
                    e.bits2int_modN ||
                    function (t) {
                      return u.create(m(t));
                    },
                  O = (0, n.OG)(c);
                function I(t) {
                  return (0, n.aK)("num < 2^" + c, t, v, O), u.toBytes(t);
                }
                let R = { lowS: e.lowS, prehash: !1 },
                  N = { lowS: e.lowS, prehash: !1 };
                return (
                  t.BASE.precompute(8),
                  Object.freeze({
                    getPublicKey: function (e, r = !0) {
                      return t.fromPrivateKey(e).toBytes(r);
                    },
                    getSharedSecret: function (e, r, i = !0) {
                      if (!0 === y(e))
                        throw Error("first arg must be private key");
                      if (!1 === y(r))
                        throw Error("second arg must be public key");
                      return t.fromHex(r).multiply(g(e)).toBytes(i);
                    },
                    sign: function (r, i, s = R) {
                      let { seed: c, k2sig: h } = (function (r, i, s = R) {
                        if (["recovered", "canonical"].some((t) => t in s))
                          throw Error("sign() legacy options not supported");
                        let { hash: a } = e,
                          { lowS: c, prehash: h, extraEntropy: y } = s;
                        null == c && (c = !0),
                          (r = (0, n.qj)("msgHash", r)),
                          w(s),
                          h && (r = (0, n.qj)("prehashed msgHash", a(r)));
                        let b = E(r),
                          x = g(i),
                          O = [I(x), I(b)];
                        if (null != y && !1 !== y) {
                          let t = !0 === y ? l(f.BYTES) : y;
                          O.push((0, n.qj)("extraEntropy", t));
                        }
                        return {
                          seed: (0, o.Id)(...O),
                          k2sig: function (e) {
                            var r;
                            let i = m(e);
                            if (!u.isValidNot0(i)) return;
                            let n = u.inv(i),
                              o = t.BASE.multiply(i).toAffine(),
                              s = u.create(o.x);
                            if (s === v) return;
                            let l = u.create(n * u.create(b + s * x));
                            if (l === v) return;
                            let a = (2 * (o.x !== s)) | Number(o.y & B),
                              f = l;
                            return (
                              c &&
                                l > d >> B &&
                                ((f = (r = l) > d >> B ? u.neg(r) : r),
                                (a ^= 1)),
                              new p(s, f, a)
                            );
                          },
                        };
                      })(r, i, s);
                      return (0, n.fg)(e.hash.outputLen, u.BYTES, a)(c, h);
                    },
                    verify: function (r, i, s, l = N) {
                      let a, f;
                      (i = (0, n.qj)("msgHash", i)),
                        (s = (0, n.qj)("publicKey", s)),
                        w(l);
                      let { lowS: d, prehash: c, format: h } = l;
                      if ("strict" in l)
                        throw Error("options.strict was renamed to lowS");
                      if (void 0 !== h && !["compact", "der", "js"].includes(h))
                        throw Error('format must be "compact", "der" or "js"');
                      let g = "string" == typeof r || (0, o.aY)(r),
                        y =
                          !g &&
                          !h &&
                          "object" == typeof r &&
                          null !== r &&
                          "bigint" == typeof r.r &&
                          "bigint" == typeof r.s;
                      if (!g && !y)
                        throw Error(
                          "invalid signature, expected Uint8Array, hex string or Signature instance"
                        );
                      try {
                        if (y)
                          if (void 0 === h || "js" === h) f = new p(r.r, r.s);
                          else throw Error("invalid format");
                        if (g) {
                          try {
                            "compact" !== h && (f = p.fromDER(r));
                          } catch (t) {
                            if (!(t instanceof b.Err)) throw t;
                          }
                          f || "der" === h || (f = p.fromCompact(r));
                        }
                        a = t.fromHex(s);
                      } catch (t) {
                        return !1;
                      }
                      if (!f || (d && f.hasHighS())) return !1;
                      c && (i = e.hash(i));
                      let { r: m, s: v } = f,
                        B = E(i),
                        x = u.inv(v),
                        O = u.create(B * x),
                        I = u.create(m * x),
                        S = t.BASE.multiplyUnsafe(O).add(a.multiplyUnsafe(I));
                      return !S.is0() && u.create(S.x) === m;
                    },
                    utils: {
                      isValidPrivateKey(t) {
                        try {
                          return g(t), !0;
                        } catch (t) {
                          return !1;
                        }
                      },
                      normPrivateKeyToScalar: g,
                      randomPrivateKey: () => (0, s.qy)(l((0, s.Tp)(d)), d),
                      precompute: (e = 8, r = t.BASE) => r.precompute(e, !1),
                    },
                    Point: t,
                    Signature: p,
                  })
                );
              })(
                (function (t, e = {}) {
                  var r, i, w;
                  let { Fp: E, Fn: b } = (function (t, e, r = {}) {
                      if (!e || "object" != typeof e)
                        throw Error(`expected valid ${t} CURVE object`);
                      for (let t of ["p", "n", "h"]) {
                        let r = e[t];
                        if (!("bigint" == typeof r && r > l))
                          throw Error(`CURVE.${t} must be positive bigint`);
                      }
                      let i = m(e.p, r.Fp),
                        n = m(e.n, r.Fn);
                      for (let r of [
                        "Gx",
                        "Gy",
                        "a",
                        "weierstrass" === t ? "b" : "d",
                      ])
                        if (!i.isValid(e[r]))
                          throw Error(
                            `CURVE.${r} must be valid field element of CURVE.Fp`
                          );
                      return { Fp: i, Fn: n };
                    })("weierstrass", t, e),
                    { h: x, n: R } = t;
                  (0, n.DS)(
                    e,
                    {},
                    {
                      allowInfinityPoint: "boolean",
                      clearCofactor: "function",
                      isTorsionFree: "function",
                      fromBytes: "function",
                      toBytes: "function",
                      endo: "object",
                      wrapPrivateKey: "boolean",
                    }
                  );
                  let { endo: N } = e;
                  if (
                    N &&
                    (!E.is0(t.a) ||
                      "bigint" != typeof N.beta ||
                      "function" != typeof N.splitScalar)
                  )
                    throw Error(
                      'invalid endo: expected "beta": bigint and "splitScalar": function'
                    );
                  function z() {
                    if (!E.isOdd)
                      throw Error(
                        "compression is not supported: Field does not have .isOdd()"
                      );
                  }
                  let A =
                      e.toBytes ||
                      function (t, e, r) {
                        let { x: i, y: s } = e.toAffine(),
                          l = E.toBytes(i);
                        if (((0, n.e8)("isCompressed", r), !r))
                          return (0, o.Id)(Uint8Array.of(4), l, E.toBytes(s));
                        {
                          z();
                          let t = !E.isOdd(s);
                          return (0, o.Id)(q(t), l);
                        }
                      },
                    H =
                      e.fromBytes ||
                      function (t) {
                        (0, o.DO)(t);
                        let e = E.BYTES,
                          r = e + 1,
                          i = 2 * e + 1,
                          n = t.length,
                          s = t[0],
                          l = t.subarray(1);
                        if (n === r && (2 === s || 3 === s)) {
                          let t,
                            e = E.fromBytes(l);
                          if (!E.isValid(e))
                            throw Error("bad point: is not on curve, wrong x");
                          let r = P(e);
                          try {
                            t = E.sqrt(r);
                          } catch (t) {
                            throw Error(
                              "bad point: is not on curve, sqrt error" +
                                (t instanceof Error ? ": " + t.message : "")
                            );
                          }
                          return (
                            z(),
                            ((1 & s) == 1) !== E.isOdd(t) && (t = E.neg(t)),
                            { x: e, y: t }
                          );
                        }
                        if (n === i && 4 === s) {
                          let t = E.fromBytes(l.subarray(0 * e, +e)),
                            r = E.fromBytes(l.subarray(+e, 2 * e));
                          if (!j(t, r))
                            throw Error("bad point: is not on curve");
                          return { x: t, y: r };
                        }
                        throw Error(
                          `bad point: got length ${n}, expected compressed=${r} or uncompressed=${i}`
                        );
                      },
                    P =
                      ((r = t.a),
                      (i = t.b),
                      function (t) {
                        let e = E.sqr(t),
                          n = E.mul(e, t);
                        return E.add(E.add(n, E.mul(t, r)), i);
                      });
                  function j(t, e) {
                    let r = E.sqr(e),
                      i = P(t);
                    return E.eql(r, i);
                  }
                  if (!j(t.Gx, t.Gy))
                    throw Error("bad curve params: generator point");
                  let F = E.mul(E.pow(t.a, O), I),
                    C = E.mul(E.sqr(t.b), BigInt(27));
                  if (E.is0(E.add(F, C)))
                    throw Error("bad curve params: a or b");
                  function D(t, e, r = !1) {
                    if (!E.isValid(e) || (r && E.is0(e)))
                      throw Error(`bad point coordinate ${t}`);
                    return e;
                  }
                  function U(t) {
                    if (!(t instanceof L))
                      throw Error("ProjectivePoint expected");
                  }
                  let V = (0, n.x)((t, e) => {
                      let { px: r, py: i, pz: n } = t;
                      if (E.eql(n, E.ONE)) return { x: r, y: i };
                      let o = t.is0();
                      null == e && (e = o ? E.ONE : E.inv(n));
                      let s = E.mul(r, e),
                        l = E.mul(i, e),
                        a = E.mul(n, e);
                      if (o) return { x: E.ZERO, y: E.ZERO };
                      if (!E.eql(a, E.ONE)) throw Error("invZ was invalid");
                      return { x: s, y: l };
                    }),
                    Z = (0, n.x)((t) => {
                      if (t.is0()) {
                        if (e.allowInfinityPoint && !E.is0(t.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: r, y: i } = t.toAffine();
                      if (!E.isValid(r) || !E.isValid(i))
                        throw Error("bad point: x or y not field elements");
                      if (!j(r, i))
                        throw Error("bad point: equation left != right");
                      if (!t.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  function T(t, e, r, i, n) {
                    return (
                      (r = new L(E.mul(r.px, t), r.py, r.pz)),
                      (e = f(i, e)),
                      (r = f(n, r)),
                      e.add(r)
                    );
                  }
                  class L {
                    constructor(t, e, r) {
                      (this.px = D("x", t)),
                        (this.py = D("y", e, !0)),
                        (this.pz = D("z", r)),
                        Object.freeze(this);
                    }
                    static fromAffine(t) {
                      let { x: e, y: r } = t || {};
                      if (!t || !E.isValid(e) || !E.isValid(r))
                        throw Error("invalid affine point");
                      if (t instanceof L)
                        throw Error("projective point not allowed");
                      return E.is0(e) && E.is0(r) ? L.ZERO : new L(e, r, E.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(t) {
                      let e = (0, s.pS)(
                        L.Fp,
                        t.map((t) => t.pz)
                      );
                      return t
                        .map((t, r) => t.toAffine(e[r]))
                        .map(L.fromAffine);
                    }
                    static fromBytes(t) {
                      return (0, o.DO)(t), L.fromHex(t);
                    }
                    static fromHex(t) {
                      let e = L.fromAffine(H((0, n.qj)("pointHex", t)));
                      return e.assertValidity(), e;
                    }
                    static fromPrivateKey(t) {
                      let r = S(
                        b,
                        e.allowedPrivateKeyLengths,
                        e.wrapPrivateKey
                      );
                      return L.BASE.multiply(r(t));
                    }
                    static msm(t, e) {
                      return (function (t, e, r, i) {
                        if (!Array.isArray(r)) throw Error("array expected");
                        r.forEach((e, r) => {
                          if (!(e instanceof t))
                            throw Error("invalid point at index " + r);
                        });
                        if (!Array.isArray(i))
                          throw Error("array of scalars expected");
                        i.forEach((t, r) => {
                          if (!e.isValid(t))
                            throw Error("invalid scalar at index " + r);
                        });
                        let o = r.length,
                          s = i.length;
                        if (o !== s)
                          throw Error(
                            "arrays of points and scalars must have equal length"
                          );
                        let l = t.ZERO,
                          a = (0, n.dJ)(BigInt(o)),
                          f = 1;
                        a > 12
                          ? (f = a - 3)
                          : a > 4
                          ? (f = a - 2)
                          : a > 0 && (f = 2);
                        let u = (0, n.OG)(f),
                          d = Array(Number(u) + 1).fill(l),
                          c = Math.floor((e.BITS - 1) / f) * f,
                          h = l;
                        for (let t = c; t >= 0; t -= f) {
                          d.fill(l);
                          for (let e = 0; e < s; e++) {
                            let n = Number((i[e] >> BigInt(t)) & u);
                            d[n] = d[n].add(r[e]);
                          }
                          let e = l;
                          for (let t = d.length - 1, r = l; t > 0; t--)
                            (r = r.add(d[t])), (e = e.add(r));
                          if (((h = h.add(e)), 0 !== t))
                            for (let t = 0; t < f; t++) h = h.double();
                        }
                        return h;
                      })(L, b, t, e);
                    }
                    precompute(t = 8, e = !0) {
                      return (
                        _.setWindowSize(this, t), e || this.multiply(O), this
                      );
                    }
                    _setWindowSize(t) {
                      this.precompute(t);
                    }
                    assertValidity() {
                      Z(this);
                    }
                    hasEvenY() {
                      let { y: t } = this.toAffine();
                      if (!E.isOdd) throw Error("Field doesn't support isOdd");
                      return !E.isOdd(t);
                    }
                    equals(t) {
                      U(t);
                      let { px: e, py: r, pz: i } = this,
                        { px: n, py: o, pz: s } = t,
                        l = E.eql(E.mul(e, s), E.mul(n, i)),
                        a = E.eql(E.mul(r, s), E.mul(o, i));
                      return l && a;
                    }
                    negate() {
                      return new L(this.px, E.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: r } = t,
                        i = E.mul(r, O),
                        { px: n, py: o, pz: s } = this,
                        l = E.ZERO,
                        a = E.ZERO,
                        f = E.ZERO,
                        u = E.mul(n, n),
                        d = E.mul(o, o),
                        c = E.mul(s, s),
                        h = E.mul(n, o);
                      return (
                        (h = E.add(h, h)),
                        (f = E.mul(n, s)),
                        (f = E.add(f, f)),
                        (l = E.mul(e, f)),
                        (a = E.mul(i, c)),
                        (a = E.add(l, a)),
                        (l = E.sub(d, a)),
                        (a = E.add(d, a)),
                        (a = E.mul(l, a)),
                        (l = E.mul(h, l)),
                        (f = E.mul(i, f)),
                        (c = E.mul(e, c)),
                        (h = E.sub(u, c)),
                        (h = E.mul(e, h)),
                        (h = E.add(h, f)),
                        (f = E.add(u, u)),
                        (u = E.add(f, u)),
                        (u = E.add(u, c)),
                        (u = E.mul(u, h)),
                        (a = E.add(a, u)),
                        (c = E.mul(o, s)),
                        (c = E.add(c, c)),
                        (u = E.mul(c, h)),
                        (l = E.sub(l, u)),
                        (f = E.mul(c, d)),
                        (f = E.add(f, f)),
                        new L(l, a, (f = E.add(f, f)))
                      );
                    }
                    add(e) {
                      U(e);
                      let { px: r, py: i, pz: n } = this,
                        { px: o, py: s, pz: l } = e,
                        a = E.ZERO,
                        f = E.ZERO,
                        u = E.ZERO,
                        d = t.a,
                        c = E.mul(t.b, O),
                        h = E.mul(r, o),
                        p = E.mul(i, s),
                        g = E.mul(n, l),
                        y = E.add(r, i),
                        m = E.add(o, s);
                      (y = E.mul(y, m)),
                        (m = E.add(h, p)),
                        (y = E.sub(y, m)),
                        (m = E.add(r, n));
                      let w = E.add(o, l);
                      return (
                        (m = E.mul(m, w)),
                        (w = E.add(h, g)),
                        (m = E.sub(m, w)),
                        (w = E.add(i, n)),
                        (a = E.add(s, l)),
                        (w = E.mul(w, a)),
                        (a = E.add(p, g)),
                        (w = E.sub(w, a)),
                        (u = E.mul(d, m)),
                        (a = E.mul(c, g)),
                        (u = E.add(a, u)),
                        (a = E.sub(p, u)),
                        (u = E.add(p, u)),
                        (f = E.mul(a, u)),
                        (p = E.add(h, h)),
                        (p = E.add(p, h)),
                        (g = E.mul(d, g)),
                        (m = E.mul(c, m)),
                        (p = E.add(p, g)),
                        (g = E.sub(h, g)),
                        (g = E.mul(d, g)),
                        (m = E.add(m, g)),
                        (h = E.mul(p, m)),
                        (f = E.add(f, h)),
                        (h = E.mul(w, m)),
                        (a = E.mul(y, a)),
                        (a = E.sub(a, h)),
                        (h = E.mul(y, p)),
                        (u = E.mul(w, u)),
                        new L(a, f, (u = E.add(u, h)))
                      );
                    }
                    subtract(t) {
                      return this.add(t.negate());
                    }
                    is0() {
                      return this.equals(L.ZERO);
                    }
                    multiply(t) {
                      let r,
                        i,
                        { endo: n } = e;
                      if (!b.isValidNot0(t))
                        throw Error("invalid scalar: out of range");
                      let o = (t) => _.wNAFCached(this, t, L.normalizeZ);
                      if (n) {
                        let {
                            k1neg: e,
                            k1: s,
                            k2neg: l,
                            k2: a,
                          } = n.splitScalar(t),
                          { p: f, f: u } = o(s),
                          { p: d, f: c } = o(a);
                        (i = u.add(c)), (r = T(n.beta, f, d, e, l));
                      } else {
                        let { p: e, f: n } = o(t);
                        (r = e), (i = n);
                      }
                      return L.normalizeZ([r, i])[0];
                    }
                    multiplyUnsafe(t) {
                      let { endo: r } = e;
                      if (!b.isValid(t))
                        throw Error("invalid scalar: out of range");
                      if (t === v || this.is0()) return L.ZERO;
                      if (t === B) return this;
                      if (_.hasPrecomputes(this)) return this.multiply(t);
                      if (!r) return _.wNAFCachedUnsafe(this, t);
                      {
                        let {
                            k1neg: e,
                            k1: i,
                            k2neg: n,
                            k2: o,
                          } = r.splitScalar(t),
                          { p1: s, p2: f } = (function (t, e, r, i) {
                            let n = e,
                              o = t.ZERO,
                              s = t.ZERO;
                            for (; r > l || i > l; )
                              r & a && (o = o.add(n)),
                                i & a && (s = s.add(n)),
                                (n = n.double()),
                                (r >>= a),
                                (i >>= a);
                            return { p1: o, p2: s };
                          })(L, this, i, o);
                        return T(r.beta, s, f, e, n);
                      }
                    }
                    multiplyAndAddUnsafe(t, e, r) {
                      let i = this.multiplyUnsafe(e).add(t.multiplyUnsafe(r));
                      return i.is0() ? void 0 : i;
                    }
                    toAffine(t) {
                      return V(this, t);
                    }
                    isTorsionFree() {
                      let { isTorsionFree: t } = e;
                      return (
                        x === B ||
                        (t ? t(L, this) : _.wNAFCachedUnsafe(this, R).is0())
                      );
                    }
                    clearCofactor() {
                      let { clearCofactor: t } = e;
                      return x === B
                        ? this
                        : t
                        ? t(L, this)
                        : this.multiplyUnsafe(x);
                    }
                    toBytes(t = !0) {
                      return (
                        (0, n.e8)("isCompressed", t),
                        this.assertValidity(),
                        A(L, this, t)
                      );
                    }
                    toRawBytes(t = !0) {
                      return this.toBytes(t);
                    }
                    toHex(t = !0) {
                      return (0, o.My)(this.toBytes(t));
                    }
                    toString() {
                      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
                    }
                  }
                  (L.BASE = new L(t.Gx, t.Gy, E.ONE)),
                    (L.ZERO = new L(E.ZERO, E.ONE, E.ZERO)),
                    (L.Fp = E),
                    (L.Fn = b);
                  let k = b.BITS,
                    _ =
                      ((w = e.endo ? Math.ceil(k / 2) : k),
                      {
                        constTimeNegate: f,
                        hasPrecomputes: (t) => 1 !== g(t),
                        unsafeLadder(t, e, r = L.ZERO) {
                          let i = t;
                          for (; e > l; )
                            e & a && (r = r.add(i)),
                              (i = i.double()),
                              (e >>= a);
                          return r;
                        },
                        precomputeWindow(t, e) {
                          let { windows: r, windowSize: i } = d(e, w),
                            n = [],
                            o = t,
                            s = o;
                          for (let t = 0; t < r; t++) {
                            (s = o), n.push(s);
                            for (let t = 1; t < i; t++)
                              (s = s.add(o)), n.push(s);
                            o = s.double();
                          }
                          return n;
                        },
                        wNAF(t, e, r) {
                          let i = L.ZERO,
                            n = L.BASE,
                            o = d(t, w);
                          for (let t = 0; t < o.windows; t++) {
                            let {
                              nextN: s,
                              offset: l,
                              isZero: a,
                              isNeg: u,
                              isNegF: d,
                              offsetF: h,
                            } = c(r, t, o);
                            (r = s),
                              a
                                ? (n = n.add(f(d, e[h])))
                                : (i = i.add(f(u, e[l])));
                          }
                          return y(r), { p: i, f: n };
                        },
                        wNAFUnsafe(t, e, r, i = L.ZERO) {
                          let n = d(t, w);
                          for (let t = 0; t < n.windows && r !== l; t++) {
                            let {
                              nextN: o,
                              offset: s,
                              isZero: l,
                              isNeg: a,
                            } = c(r, t, n);
                            if (((r = o), !l)) {
                              let t = e[s];
                              i = i.add(a ? t.negate() : t);
                            }
                          }
                          return y(r), i;
                        },
                        getPrecomputes(t, e, r) {
                          let i = h.get(e);
                          return (
                            i ||
                              ((i = this.precomputeWindow(e, t)),
                              1 !== t &&
                                ("function" == typeof r && (i = r(i)),
                                h.set(e, i))),
                            i
                          );
                        },
                        wNAFCached(t, e, r) {
                          let i = g(t);
                          return this.wNAF(i, this.getPrecomputes(i, t, r), e);
                        },
                        wNAFCachedUnsafe(t, e, r, i) {
                          let n = g(t);
                          return 1 === n
                            ? this.unsafeLadder(t, e, i)
                            : this.wNAFUnsafe(
                                n,
                                this.getPrecomputes(n, t, r),
                                e,
                                i
                              );
                        },
                        setWindowSize(t, e) {
                          u(e, w), p.set(t, e), h.delete(t);
                        },
                      });
                  return L;
                })(e, r),
                E,
                r
              );
            return Object.assign({}, R, { ProjectivePoint: R.Point, CURVE: t });
          })({ ...t, hash: e });
        return { ...r(e), create: r };
      }
    },
    66634: (t, e, r) => {
      r.d(e, { secp256k1: () => d });
      var i = r(28782),
        n = r(61293),
        o = r(92477);
      let s = {
        p: BigInt(
          "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
        ),
        n: BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        h: BigInt(1),
        a: BigInt(0),
        b: BigInt(7),
        Gx: BigInt(
          "0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
        ),
        Gy: BigInt(
          "0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
        ),
      };
      BigInt(0);
      let l = BigInt(1),
        a = BigInt(2),
        f = (t, e) => (t + e / a) / e,
        u = (0, o.D0)(s.p, void 0, void 0, {
          sqrt: function (t) {
            let e = s.p,
              r = BigInt(3),
              i = BigInt(6),
              n = BigInt(11),
              l = BigInt(22),
              f = BigInt(23),
              d = BigInt(44),
              c = BigInt(88),
              h = (t * t * t) % e,
              p = (h * h * t) % e,
              g = ((0, o.zH)(p, r, e) * p) % e,
              y = ((0, o.zH)(g, r, e) * p) % e,
              m = ((0, o.zH)(y, a, e) * h) % e,
              w = ((0, o.zH)(m, n, e) * m) % e,
              E = ((0, o.zH)(w, l, e) * w) % e,
              b = ((0, o.zH)(E, d, e) * E) % e,
              v = ((0, o.zH)(b, c, e) * b) % e,
              B = ((0, o.zH)(v, d, e) * E) % e,
              x = ((0, o.zH)(B, r, e) * p) % e,
              O = ((0, o.zH)(x, f, e) * w) % e,
              I = ((0, o.zH)(O, i, e) * h) % e,
              S = (0, o.zH)(I, a, e);
            if (!u.eql(u.sqr(S), t)) throw Error("Cannot find square root");
            return S;
          },
        }),
        d = (0, n.s)(
          {
            ...s,
            Fp: u,
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (t) => {
                let e = s.n,
                  r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  i = -l * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  a = BigInt("0x100000000000000000000000000000000"),
                  u = f(r * t, e),
                  d = f(-i * t, e),
                  c = (0, o.zi)(t - u * r - d * n, e),
                  h = (0, o.zi)(-u * i - d * r, e),
                  p = c > a,
                  g = h > a;
                if ((p && (c = e - c), g && (h = e - h), c > a || h > a))
                  throw Error("splitScalar: Endomorphism failed, k=" + t);
                return { k1neg: p, k1: c, k2neg: g, k2: h };
              },
            },
          },
          i.sc
        );
    },
    68907: (t, e, r) => {
      r.d(e, {
        DS: () => E,
        OG: () => m,
        Ph: () => f,
        aK: () => g,
        dJ: () => y,
        e8: () => s,
        fg: () => w,
        lX: () => u,
        lq: () => d,
        qj: () => h,
        x: () => b,
        z: () => c,
        zW: () => l,
      });
      var i = r(29272);
      let n = BigInt(0),
        o = BigInt(1);
      function s(t, e) {
        if ("boolean" != typeof e)
          throw Error(t + " boolean expected, got " + e);
      }
      function l(t) {
        let e = t.toString(16);
        return 1 & e.length ? "0" + e : e;
      }
      function a(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        return "" === t ? n : BigInt("0x" + t);
      }
      function f(t) {
        return a((0, i.My)(t));
      }
      function u(t) {
        return (0, i.DO)(t), a((0, i.My)(Uint8Array.from(t).reverse()));
      }
      function d(t, e) {
        return (0, i.aT)(t.toString(16).padStart(2 * e, "0"));
      }
      function c(t, e) {
        return d(t, e).reverse();
      }
      function h(t, e, r) {
        let n;
        if ("string" == typeof e)
          try {
            n = (0, i.aT)(e);
          } catch (e) {
            throw Error(t + " must be hex string or Uint8Array, cause: " + e);
          }
        else if ((0, i.aY)(e)) n = Uint8Array.from(e);
        else throw Error(t + " must be hex string or Uint8Array");
        let o = n.length;
        if ("number" == typeof r && o !== r)
          throw Error(t + " of length " + r + " expected, got " + o);
        return n;
      }
      let p = (t) => "bigint" == typeof t && n <= t;
      function g(t, e, r, i) {
        if (!(p(e) && p(r) && p(i)) || !(r <= e) || !(e < i))
          throw Error(
            "expected valid " + t + ": " + r + " <= n < " + i + ", got " + e
          );
      }
      function y(t) {
        let e;
        for (e = 0; t > n; t >>= o, e += 1);
        return e;
      }
      let m = (t) => (o << BigInt(t)) - o;
      function w(t, e, r) {
        if ("number" != typeof t || t < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof e || e < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof r) throw Error("hmacFn must be a function");
        let n = (t) => new Uint8Array(t),
          o = (t) => Uint8Array.of(t),
          s = n(t),
          l = n(t),
          a = 0,
          f = () => {
            s.fill(1), l.fill(0), (a = 0);
          },
          u = (...t) => r(l, s, ...t),
          d = (t = n(0)) => {
            (l = u(o(0), t)),
              (s = u()),
              0 !== t.length && ((l = u(o(1), t)), (s = u()));
          },
          c = () => {
            if (a++ >= 1e3) throw Error("drbg: tried 1000 values");
            let t = 0,
              r = [];
            for (; t < e; ) {
              let e = (s = u()).slice();
              r.push(e), (t += s.length);
            }
            return (0, i.Id)(...r);
          };
        return (t, e) => {
          let r;
          for (f(), d(t); !(r = e(c())); ) d();
          return f(), r;
        };
      }
      function E(t, e, r = {}) {
        if (!t || "object" != typeof t)
          throw Error("expected valid options object");
        function i(e, r, i) {
          let n = t[e];
          if (i && void 0 === n) return;
          let o = typeof n;
          if (o !== r || null === n)
            throw Error(`param "${e}" is invalid: expected ${r}, got ${o}`);
        }
        Object.entries(e).forEach(([t, e]) => i(t, e, !1)),
          Object.entries(r).forEach(([t, e]) => i(t, e, !0));
      }
      function b(t) {
        let e = new WeakMap();
        return (r, ...i) => {
          let n = e.get(r);
          if (void 0 !== n) return n;
          let o = t(r, ...i);
          return e.set(r, o), o;
        };
      }
    },
    92477: (t, e, r) => {
      r.d(e, {
        D0: () =>
          function t(e, r, h = !1, m = {}) {
            let w, v, B;
            if (e <= o)
              throw Error("invalid field: expected ORDER > 0, got " + e);
            if ("object" == typeof r && null != r) {
              if (m.sqrt || h)
                throw Error("cannot specify opts in two arguments");
              r.BITS && (v = r.BITS),
                r.sqrt && (B = r.sqrt),
                "boolean" == typeof r.isLE && (h = r.isLE);
            } else "number" == typeof r && (v = r), m.sqrt && (B = m.sqrt);
            let { nBitLength: x, nByteLength: O } = (function (t, e) {
              void 0 !== e && (0, n.Fe)(e);
              let r = void 0 !== e ? e : t.toString(2).length,
                i = Math.ceil(r / 8);
              return { nBitLength: r, nByteLength: i };
            })(e, v);
            if (O > 2048)
              throw Error("invalid field: expected ORDER of <= 2048 bytes");
            let I = Object.freeze({
              ORDER: e,
              isLE: h,
              BITS: x,
              BYTES: O,
              MASK: (0, i.OG)(x),
              ZERO: o,
              ONE: s,
              create: (t) => c(t, e),
              isValid: (t) => {
                if ("bigint" != typeof t)
                  throw Error(
                    "invalid field element: expected bigint, got " + typeof t
                  );
                return o <= t && t < e;
              },
              is0: (t) => t === o,
              isValidNot0: (t) => !I.is0(t) && I.isValid(t),
              isOdd: (t) => (t & s) === s,
              neg: (t) => c(-t, e),
              eql: (t, e) => t === e,
              sqr: (t) => c(t * t, e),
              add: (t, r) => c(t + r, e),
              sub: (t, r) => c(t - r, e),
              mul: (t, r) => c(t * r, e),
              pow: (t, e) =>
                (function (t, e, r) {
                  if (r < o)
                    throw Error("invalid exponent, negatives unsupported");
                  if (r === o) return t.ONE;
                  if (r === s) return e;
                  let i = t.ONE,
                    n = e;
                  for (; r > o; )
                    r & s && (i = t.mul(i, n)), (n = t.sqr(n)), (r >>= s);
                  return i;
                })(I, t, e),
              div: (t, r) => c(t * p(r, e), e),
              sqrN: (t) => t * t,
              addN: (t, e) => t + e,
              subN: (t, e) => t - e,
              mulN: (t, e) => t * e,
              inv: (t) => p(t, e),
              sqrt:
                B ||
                ((r) => (
                  w ||
                    (w =
                      e % f === a
                        ? g
                        : e % d === u
                        ? y
                        : (function (e) {
                            if (e < BigInt(3))
                              throw Error(
                                "sqrt is not defined for small field"
                              );
                            let r = e - s,
                              i = 0;
                            for (; r % l === o; ) (r /= l), i++;
                            let n = l,
                              a = t(e);
                            for (; 1 === b(a, n); )
                              if (n++ > 1e3)
                                throw Error(
                                  "Cannot find square root: probably non-prime P"
                                );
                            if (1 === i) return g;
                            let f = a.pow(n, r),
                              u = (r + s) / l;
                            return function (t, e) {
                              if (t.is0(e)) return e;
                              if (1 !== b(t, e))
                                throw Error("Cannot find square root");
                              let n = i,
                                o = t.mul(t.ONE, f),
                                l = t.pow(e, r),
                                a = t.pow(e, u);
                              for (; !t.eql(l, t.ONE); ) {
                                if (t.is0(l)) return t.ZERO;
                                let e = 1,
                                  r = t.sqr(l);
                                for (; !t.eql(r, t.ONE); )
                                  if ((e++, (r = t.sqr(r)), e === n))
                                    throw Error("Cannot find square root");
                                let i = s << BigInt(n - e - 1),
                                  f = t.pow(o, i);
                                (n = e),
                                  (o = t.sqr(f)),
                                  (l = t.mul(l, o)),
                                  (a = t.mul(a, f));
                              }
                              return a;
                            };
                          })(e)),
                  w(I, r)
                )),
              toBytes: (t) => (h ? (0, i.z)(t, O) : (0, i.lq)(t, O)),
              fromBytes: (t) => {
                if (t.length !== O)
                  throw Error(
                    "Field.fromBytes: expected " + O + " bytes, got " + t.length
                  );
                return h ? (0, i.lX)(t) : (0, i.Ph)(t);
              },
              invertBatch: (t) => E(I, t),
              cmov: (t, e, r) => (r ? e : t),
            });
            return Object.freeze(I);
          },
        Tp: () => B,
        jr: () => w,
        pS: () => E,
        qy: () => x,
        zH: () => h,
        zi: () => c,
      });
      var i = r(68907),
        n = r(29272);
      let o = BigInt(0),
        s = BigInt(1),
        l = BigInt(2),
        a = BigInt(3),
        f = BigInt(4),
        u = BigInt(5),
        d = BigInt(8);
      function c(t, e) {
        let r = t % e;
        return r >= o ? r : e + r;
      }
      function h(t, e, r) {
        let i = t;
        for (; e-- > o; ) (i *= i), (i %= r);
        return i;
      }
      function p(t, e) {
        if (t === o) throw Error("invert: expected non-zero number");
        if (e <= o) throw Error("invert: expected positive modulus, got " + e);
        let r = c(t, e),
          i = e,
          n = o,
          l = s,
          a = s,
          f = o;
        for (; r !== o; ) {
          let t = i / r,
            e = i % r,
            o = n - a * t,
            s = l - f * t;
          (i = r), (r = e), (n = a), (l = f), (a = o), (f = s);
        }
        if (i !== s) throw Error("invert: does not exist");
        return c(n, e);
      }
      function g(t, e) {
        let r = (t.ORDER + s) / f,
          i = t.pow(e, r);
        if (!t.eql(t.sqr(i), e)) throw Error("Cannot find square root");
        return i;
      }
      function y(t, e) {
        let r = (t.ORDER - u) / d,
          i = t.mul(e, l),
          n = t.pow(i, r),
          o = t.mul(e, n),
          s = t.mul(t.mul(o, l), n),
          a = t.mul(o, t.sub(s, t.ONE));
        if (!t.eql(t.sqr(a), e)) throw Error("Cannot find square root");
        return a;
      }
      let m = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function w(t) {
        let e = m.reduce((t, e) => ((t[e] = "function"), t), {
          ORDER: "bigint",
          MASK: "bigint",
          BYTES: "number",
          BITS: "number",
        });
        return (0, i.DS)(t, e), t;
      }
      function E(t, e, r = !1) {
        let i = Array(e.length).fill(r ? t.ZERO : void 0),
          n = e.reduce(
            (e, r, n) => (t.is0(r) ? e : ((i[n] = e), t.mul(e, r))),
            t.ONE
          ),
          o = t.inv(n);
        return (
          e.reduceRight(
            (e, r, n) =>
              t.is0(r) ? e : ((i[n] = t.mul(e, i[n])), t.mul(e, r)),
            o
          ),
          i
        );
      }
      function b(t, e) {
        let r = (t.ORDER - s) / l,
          i = t.pow(e, r),
          n = t.eql(i, t.ONE),
          o = t.eql(i, t.ZERO),
          a = t.eql(i, t.neg(t.ONE));
        if (!n && !o && !a) throw Error("invalid Legendre symbol result");
        return n ? 1 : o ? 0 : -1;
      }
      function v(t) {
        if ("bigint" != typeof t) throw Error("field order must be bigint");
        return Math.ceil(t.toString(2).length / 8);
      }
      function B(t) {
        let e = v(t);
        return e + Math.ceil(e / 2);
      }
      function x(t, e, r = !1) {
        let n = t.length,
          o = v(e),
          l = B(e);
        if (n < 16 || n < l || n > 1024)
          throw Error("expected " + l + "-1024 bytes of input, got " + n);
        let a = c(r ? (0, i.lX)(t) : (0, i.Ph)(t), e - s) + s;
        return r ? (0, i.z)(a, o) : (0, i.lq)(a, o);
      }
    },
  },
]);
