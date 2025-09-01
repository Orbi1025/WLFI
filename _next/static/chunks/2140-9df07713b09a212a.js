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
      (t._sentryDebugIds[e] = "641cd078-322c-476d-9a17-cd3836a5f1ef"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-641cd078-322c-476d-9a17-cd3836a5f1ef"));
  })();
} catch (t) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2140],
  {
    223: function (t) {
      t.exports = (function () {
        "use strict";
        var t = "millisecond",
          e = "second",
          r = "minute",
          n = "hour",
          i = "week",
          a = "month",
          o = "quarter",
          s = "year",
          u = "date",
          l = "Invalid Date",
          c =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          f =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          p = function (t, e, r) {
            var n = String(t);
            return !n || n.length >= e
              ? t
              : "" + Array(e + 1 - n.length).join(r) + t;
          },
          d = "en",
          h = {};
        h[d] = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          ordinal: function (t) {
            var e = ["th", "st", "nd", "rd"],
              r = t % 100;
            return "[" + t + (e[(r - 20) % 10] || e[r] || e[0]) + "]";
          },
        };
        var m = "$isDayjsObject",
          y = function (t) {
            return t instanceof O || !(!t || !t[m]);
          },
          v = function t(e, r, n) {
            var i;
            if (!e) return d;
            if ("string" == typeof e) {
              var a = e.toLowerCase();
              h[a] && (i = a), r && ((h[a] = r), (i = a));
              var o = e.split("-");
              if (!i && o.length > 1) return t(o[0]);
            } else {
              var s = e.name;
              (h[s] = e), (i = s);
            }
            return !n && i && (d = i), i || (!n && d);
          },
          b = function (t, e) {
            if (y(t)) return t.clone();
            var r = "object" == typeof e ? e : {};
            return (r.date = t), (r.args = arguments), new O(r);
          },
          g = {
            s: p,
            z: function (t) {
              var e = -t.utcOffset(),
                r = Math.abs(e);
              return (
                (e <= 0 ? "+" : "-") +
                p(Math.floor(r / 60), 2, "0") +
                ":" +
                p(r % 60, 2, "0")
              );
            },
            m: function t(e, r) {
              if (e.date() < r.date()) return -t(r, e);
              var n = 12 * (r.year() - e.year()) + (r.month() - e.month()),
                i = e.clone().add(n, a),
                o = r - i < 0,
                s = e.clone().add(n + (o ? -1 : 1), a);
              return +(-(n + (r - i) / (o ? i - s : s - i)) || 0);
            },
            a: function (t) {
              return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
            },
            p: function (l) {
              return (
                {
                  M: a,
                  y: s,
                  w: i,
                  d: "day",
                  D: u,
                  h: n,
                  m: r,
                  s: e,
                  ms: t,
                  Q: o,
                }[l] ||
                String(l || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (t) {
              return void 0 === t;
            },
          };
        (g.l = v),
          (g.i = y),
          (g.w = function (t, e) {
            return b(t, {
              locale: e.$L,
              utc: e.$u,
              x: e.$x,
              $offset: e.$offset,
            });
          });
        var O = (function () {
            function p(t) {
              (this.$L = v(t.locale, null, !0)),
                this.parse(t),
                (this.$x = this.$x || t.x || {}),
                (this[m] = !0);
            }
            var d = p.prototype;
            return (
              (d.parse = function (t) {
                (this.$d = (function (t) {
                  var e = t.date,
                    r = t.utc;
                  if (null === e) return new Date(NaN);
                  if (g.u(e)) return new Date();
                  if (e instanceof Date) return new Date(e);
                  if ("string" == typeof e && !/Z$/i.test(e)) {
                    var n = e.match(c);
                    if (n) {
                      var i = n[2] - 1 || 0,
                        a = (n[7] || "0").substring(0, 3);
                      return r
                        ? new Date(
                            Date.UTC(
                              n[1],
                              i,
                              n[3] || 1,
                              n[4] || 0,
                              n[5] || 0,
                              n[6] || 0,
                              a
                            )
                          )
                        : new Date(
                            n[1],
                            i,
                            n[3] || 1,
                            n[4] || 0,
                            n[5] || 0,
                            n[6] || 0,
                            a
                          );
                    }
                  }
                  return new Date(e);
                })(t)),
                  this.init();
              }),
              (d.init = function () {
                var t = this.$d;
                (this.$y = t.getFullYear()),
                  (this.$M = t.getMonth()),
                  (this.$D = t.getDate()),
                  (this.$W = t.getDay()),
                  (this.$H = t.getHours()),
                  (this.$m = t.getMinutes()),
                  (this.$s = t.getSeconds()),
                  (this.$ms = t.getMilliseconds());
              }),
              (d.$utils = function () {
                return g;
              }),
              (d.isValid = function () {
                return this.$d.toString() !== l;
              }),
              (d.isSame = function (t, e) {
                var r = b(t);
                return this.startOf(e) <= r && r <= this.endOf(e);
              }),
              (d.isAfter = function (t, e) {
                return b(t) < this.startOf(e);
              }),
              (d.isBefore = function (t, e) {
                return this.endOf(e) < b(t);
              }),
              (d.$g = function (t, e, r) {
                return g.u(t) ? this[e] : this.set(r, t);
              }),
              (d.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (d.valueOf = function () {
                return this.$d.getTime();
              }),
              (d.startOf = function (t, o) {
                var l = this,
                  c = !!g.u(o) || o,
                  f = g.p(t),
                  p = function (t, e) {
                    var r = g.w(
                      l.$u ? Date.UTC(l.$y, e, t) : new Date(l.$y, e, t),
                      l
                    );
                    return c ? r : r.endOf("day");
                  },
                  d = function (t, e) {
                    return g.w(
                      l
                        .toDate()
                        [t].apply(
                          l.toDate("s"),
                          (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                        ),
                      l
                    );
                  },
                  h = this.$W,
                  m = this.$M,
                  y = this.$D,
                  v = "set" + (this.$u ? "UTC" : "");
                switch (f) {
                  case s:
                    return c ? p(1, 0) : p(31, 11);
                  case a:
                    return c ? p(1, m) : p(0, m + 1);
                  case i:
                    var b = this.$locale().weekStart || 0,
                      O = (h < b ? h + 7 : h) - b;
                    return p(c ? y - O : y + (6 - O), m);
                  case "day":
                  case u:
                    return d(v + "Hours", 0);
                  case n:
                    return d(v + "Minutes", 1);
                  case r:
                    return d(v + "Seconds", 2);
                  case e:
                    return d(v + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (d.endOf = function (t) {
                return this.startOf(t, !1);
              }),
              (d.$set = function (i, o) {
                var l,
                  c = g.p(i),
                  f = "set" + (this.$u ? "UTC" : ""),
                  p = (((l = {}).day = f + "Date"),
                  (l[u] = f + "Date"),
                  (l[a] = f + "Month"),
                  (l[s] = f + "FullYear"),
                  (l[n] = f + "Hours"),
                  (l[r] = f + "Minutes"),
                  (l[e] = f + "Seconds"),
                  (l[t] = f + "Milliseconds"),
                  l)[c],
                  d = "day" === c ? this.$D + (o - this.$W) : o;
                if (c === a || c === s) {
                  var h = this.clone().set(u, 1);
                  h.$d[p](d),
                    h.init(),
                    (this.$d = h.set(u, Math.min(this.$D, h.daysInMonth())).$d);
                } else p && this.$d[p](d);
                return this.init(), this;
              }),
              (d.set = function (t, e) {
                return this.clone().$set(t, e);
              }),
              (d.get = function (t) {
                return this[g.p(t)]();
              }),
              (d.add = function (t, o) {
                var u,
                  l = this;
                t = Number(t);
                var c = g.p(o),
                  f = function (e) {
                    var r = b(l);
                    return g.w(r.date(r.date() + Math.round(e * t)), l);
                  };
                if (c === a) return this.set(a, this.$M + t);
                if (c === s) return this.set(s, this.$y + t);
                if ("day" === c) return f(1);
                if (c === i) return f(7);
                var p =
                    (((u = {})[r] = 6e4), (u[n] = 36e5), (u[e] = 1e3), u)[c] ||
                    1,
                  d = this.$d.getTime() + t * p;
                return g.w(d, this);
              }),
              (d.subtract = function (t, e) {
                return this.add(-1 * t, e);
              }),
              (d.format = function (t) {
                var e = this,
                  r = this.$locale();
                if (!this.isValid()) return r.invalidDate || l;
                var n = t || "YYYY-MM-DDTHH:mm:ssZ",
                  i = g.z(this),
                  a = this.$H,
                  o = this.$m,
                  s = this.$M,
                  u = r.weekdays,
                  c = r.months,
                  p = r.meridiem,
                  d = function (t, r, i, a) {
                    return (t && (t[r] || t(e, n))) || i[r].slice(0, a);
                  },
                  h = function (t) {
                    return g.s(a % 12 || 12, t, "0");
                  },
                  m =
                    p ||
                    function (t, e, r) {
                      var n = t < 12 ? "AM" : "PM";
                      return r ? n.toLowerCase() : n;
                    };
                return n.replace(f, function (t, n) {
                  return (
                    n ||
                    (function (t) {
                      switch (t) {
                        case "YY":
                          return String(e.$y).slice(-2);
                        case "YYYY":
                          return g.s(e.$y, 4, "0");
                        case "M":
                          return s + 1;
                        case "MM":
                          return g.s(s + 1, 2, "0");
                        case "MMM":
                          return d(r.monthsShort, s, c, 3);
                        case "MMMM":
                          return d(c, s);
                        case "D":
                          return e.$D;
                        case "DD":
                          return g.s(e.$D, 2, "0");
                        case "d":
                          return String(e.$W);
                        case "dd":
                          return d(r.weekdaysMin, e.$W, u, 2);
                        case "ddd":
                          return d(r.weekdaysShort, e.$W, u, 3);
                        case "dddd":
                          return u[e.$W];
                        case "H":
                          return String(a);
                        case "HH":
                          return g.s(a, 2, "0");
                        case "h":
                          return h(1);
                        case "hh":
                          return h(2);
                        case "a":
                          return m(a, o, !0);
                        case "A":
                          return m(a, o, !1);
                        case "m":
                          return String(o);
                        case "mm":
                          return g.s(o, 2, "0");
                        case "s":
                          return String(e.$s);
                        case "ss":
                          return g.s(e.$s, 2, "0");
                        case "SSS":
                          return g.s(e.$ms, 3, "0");
                        case "Z":
                          return i;
                      }
                      return null;
                    })(t) ||
                    i.replace(":", "")
                  );
                });
              }),
              (d.utcOffset = function () {
                return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
              }),
              (d.diff = function (t, u, l) {
                var c,
                  f = this,
                  p = g.p(u),
                  d = b(t),
                  h = (d.utcOffset() - this.utcOffset()) * 6e4,
                  m = this - d,
                  y = function () {
                    return g.m(f, d);
                  };
                switch (p) {
                  case s:
                    c = y() / 12;
                    break;
                  case a:
                    c = y();
                    break;
                  case o:
                    c = y() / 3;
                    break;
                  case i:
                    c = (m - h) / 6048e5;
                    break;
                  case "day":
                    c = (m - h) / 864e5;
                    break;
                  case n:
                    c = m / 36e5;
                    break;
                  case r:
                    c = m / 6e4;
                    break;
                  case e:
                    c = m / 1e3;
                    break;
                  default:
                    c = m;
                }
                return l ? c : g.a(c);
              }),
              (d.daysInMonth = function () {
                return this.endOf(a).$D;
              }),
              (d.$locale = function () {
                return h[this.$L];
              }),
              (d.locale = function (t, e) {
                if (!t) return this.$L;
                var r = this.clone(),
                  n = v(t, e, !0);
                return n && (r.$L = n), r;
              }),
              (d.clone = function () {
                return g.w(this.$d, this);
              }),
              (d.toDate = function () {
                return new Date(this.valueOf());
              }),
              (d.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (d.toISOString = function () {
                return this.$d.toISOString();
              }),
              (d.toString = function () {
                return this.$d.toUTCString();
              }),
              p
            );
          })(),
          A = O.prototype;
        return (
          (b.prototype = A),
          [
            ["$ms", t],
            ["$s", e],
            ["$m", r],
            ["$H", n],
            ["$W", "day"],
            ["$M", a],
            ["$y", s],
            ["$D", u],
          ].forEach(function (t) {
            A[t[1]] = function (e) {
              return this.$g(e, t[0], t[1]);
            };
          }),
          (b.extend = function (t, e) {
            return t.$i || (t(e, O, b), (t.$i = !0)), b;
          }),
          (b.locale = v),
          (b.isDayjs = y),
          (b.unix = function (t) {
            return b(1e3 * t);
          }),
          (b.en = h[d]),
          (b.Ls = h),
          (b.p = {}),
          b
        );
      })();
    },
    2845: (t, e, r) => {
      "use strict";
      r.d(e, { X: () => l });
      var n = r(64252),
        i = r(79261),
        a = r(7620),
        o = r(13093),
        s = r(92797),
        u = r(29344);
      function l() {
        var t;
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { contracts: r = [], query: l = {} } = e,
          c = (0, u.U)(e),
          f = (0, s.i)({ config: c }),
          p = (function (t, e = {}) {
            return {
              async queryFn({ queryKey: r }) {
                let i = [],
                  a = r[1].contracts.length;
                for (let t = 0; t < a; t++) {
                  let n = r[1].contracts[t],
                    a = (e.contracts?.[t]).abi;
                  i.push({ ...n, abi: a });
                }
                let { scopeKey: o, ...s } = r[1];
                return (0, n.I)(t, { ...s, contracts: i });
              },
              queryKey: (function (t = {}) {
                let e = [];
                for (let r of t.contracts ?? []) {
                  let { abi: n, ...i } = r;
                  e.push({ ...i, chainId: i.chainId ?? t.chainId });
                }
                return ["readContracts", (0, i.xO)({ ...t, contracts: e })];
              })(e),
            };
          })(c, { ...e, chainId: f }),
          d = (0, a.useMemo)(() => {
            var t;
            let e = !1;
            for (let t of r) {
              let { abi: r, address: n, functionName: i } = t;
              if (!r || !n || !i) {
                e = !1;
                break;
              }
              e = !0;
            }
            return !!(e && (null == (t = l.enabled) || t));
          }, [r, l.enabled]);
        return (0, o.IT)({
          ...p,
          ...l,
          enabled: d,
          structuralSharing: null != (t = l.structuralSharing) ? t : i.I_,
        });
      }
    },
    4872: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => c });
      var n = r(46524),
        i = r.n(n),
        a = r(7620),
        o = r(77785),
        s = r.n(o),
        u = ["top", "left", "transform", "className", "children", "innerRef"];
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function c(t) {
        var e = t.top,
          r = t.left,
          n = t.transform,
          i = t.className,
          o = t.children,
          c = t.innerRef,
          f = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              a = Object.keys(t);
            for (n = 0; n < a.length; n++)
              (r = a[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, u);
        return a.createElement(
          "g",
          l(
            {
              ref: c,
              className: s()("visx-group", i),
              transform:
                n ||
                "translate(" +
                  (void 0 === r ? 0 : r) +
                  ", " +
                  (void 0 === e ? 0 : e) +
                  ")",
            },
            f
          ),
          o
        );
      }
      c.propTypes = {
        top: i().number,
        left: i().number,
        transform: i().string,
        className: i().string,
        children: i().node,
        innerRef: i().oneOfType([i().string, i().func, i().object]),
      };
    },
    5074: function (t) {
      t.exports = (function () {
        "use strict";
        var t = "minute",
          e = /[+-]\d\d(?::?\d\d)?/g,
          r = /([+-]|\d\d)/g;
        return function (n, i, a) {
          var o = i.prototype;
          (a.utc = function (t) {
            var e = { date: t, utc: !0, args: arguments };
            return new i(e);
          }),
            (o.utc = function (e) {
              var r = a(this.toDate(), { locale: this.$L, utc: !0 });
              return e ? r.add(this.utcOffset(), t) : r;
            }),
            (o.local = function () {
              return a(this.toDate(), { locale: this.$L, utc: !1 });
            });
          var s = o.parse;
          o.parse = function (t) {
            t.utc && (this.$u = !0),
              this.$utils().u(t.$offset) || (this.$offset = t.$offset),
              s.call(this, t);
          };
          var u = o.init;
          o.init = function () {
            if (this.$u) {
              var t = this.$d;
              (this.$y = t.getUTCFullYear()),
                (this.$M = t.getUTCMonth()),
                (this.$D = t.getUTCDate()),
                (this.$W = t.getUTCDay()),
                (this.$H = t.getUTCHours()),
                (this.$m = t.getUTCMinutes()),
                (this.$s = t.getUTCSeconds()),
                (this.$ms = t.getUTCMilliseconds());
            } else u.call(this);
          };
          var l = o.utcOffset;
          o.utcOffset = function (n, i) {
            var a = this.$utils().u;
            if (a(n))
              return this.$u
                ? 0
                : a(this.$offset)
                ? l.call(this)
                : this.$offset;
            if (
              "string" == typeof n &&
              null ===
                (n = (function (t) {
                  void 0 === t && (t = "");
                  var n = t.match(e);
                  if (!n) return null;
                  var i = ("" + n[0]).match(r) || ["-", 0, 0],
                    a = i[0],
                    o = 60 * i[1] + +i[2];
                  return 0 === o ? 0 : "+" === a ? o : -o;
                })(n))
            )
              return this;
            var o = 16 >= Math.abs(n) ? 60 * n : n,
              s = this;
            if (i) return (s.$offset = o), (s.$u = 0 === n), s;
            if (0 !== n) {
              var u = this.$u
                ? this.toDate().getTimezoneOffset()
                : -1 * this.utcOffset();
              ((s = this.local().add(o + u, t)).$offset = o),
                (s.$x.$localOffset = u);
            } else s = this.utc();
            return s;
          };
          var c = o.format;
          (o.format = function (t) {
            var e = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return c.call(this, e);
          }),
            (o.valueOf = function () {
              var t = this.$utils().u(this.$offset)
                ? 0
                : this.$offset +
                  (this.$x.$localOffset || this.$d.getTimezoneOffset());
              return this.$d.valueOf() - 6e4 * t;
            }),
            (o.isUTC = function () {
              return !!this.$u;
            }),
            (o.toISOString = function () {
              return this.toDate().toISOString();
            }),
            (o.toString = function () {
              return this.toDate().toUTCString();
            });
          var f = o.toDate;
          o.toDate = function (t) {
            return "s" === t && this.$offset
              ? a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
              : f.call(this);
          };
          var p = o.diff;
          o.diff = function (t, e, r) {
            if (t && this.$u === t.$u) return p.call(this, t, e, r);
            var n = this.local(),
              i = a(t).local();
            return p.call(n, i, e, r);
          };
        };
      })();
    },
    7110: (t, e, r) => {
      "use strict";
      r.d(e, { G: () => R });
      var n = r(7620),
        i = r(32987),
        a = r(12885),
        o = r(23164),
        s = r.n(o),
        u = r(12794),
        l = r.n(u),
        c = r(62239),
        f = r.n(c),
        p = r(10541),
        d = r.n(p),
        h = r(92012),
        m = r.n(h),
        y = r(24828),
        v = r(81005),
        b = r(66349),
        g = r(84958),
        O = r(74742),
        A = r(25338),
        S = r(33048),
        w = r(90625),
        k = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
        x = ["key"];
      function P(t) {
        return (P =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function D(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              !(e.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, r) &&
                (i[r] = t[r]);
        }
        return i;
      }
      function E() {
        return (E = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function $(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function T(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? $(Object(r), !0).forEach(function (e) {
                I(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : $(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function j(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, N(n.key), n);
        }
      }
      function M() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (M = function () {
          return !!t;
        })();
      }
      function _(t) {
        return (_ = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function C(t, e) {
        return (C = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function I(t, e, r) {
        return (
          (e = N(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function N(t) {
        var e = (function (t, e) {
          if ("object" != P(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != P(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == P(e) ? e : e + "";
      }
      var R = (function (t) {
        var e, r;
        function o() {
          var t, e, r;
          if (!(this instanceof o))
            throw TypeError("Cannot call a class as a function");
          for (var n = arguments.length, i = Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
          return (
            (e = o),
            (r = [].concat(i)),
            (e = _(e)),
            I(
              (t = (function (t, e) {
                if (e && ("object" === P(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                var r = t;
                if (void 0 === r)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return r;
              })(
                this,
                M()
                  ? Reflect.construct(e, r || [], _(this).constructor)
                  : e.apply(this, r)
              )),
              "state",
              { isAnimationFinished: !0 }
            ),
            I(t, "id", (0, A.NF)("recharts-area-")),
            I(t, "handleAnimationEnd", function () {
              var e = t.props.onAnimationEnd;
              t.setState({ isAnimationFinished: !0 }), s()(e) && e();
            }),
            I(t, "handleAnimationStart", function () {
              var e = t.props.onAnimationStart;
              t.setState({ isAnimationFinished: !1 }), s()(e) && e();
            }),
            t
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (o.prototype = Object.create(t && t.prototype, {
            constructor: { value: o, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(o, "prototype", { writable: !1 }),
          t && C(o, t),
          (e = [
            {
              key: "renderDots",
              value: function (t, e, r) {
                var i = this.props.isAnimationActive,
                  a = this.state.isAnimationFinished;
                if (i && !a) return null;
                var s = this.props,
                  u = s.dot,
                  l = s.points,
                  c = s.dataKey,
                  f = (0, w.J9)(this.props, !1),
                  p = (0, w.J9)(u, !0),
                  d = l.map(function (t, e) {
                    var r = T(
                      T(T({ key: "dot-".concat(e), r: 3 }, f), p),
                      {},
                      {
                        index: e,
                        cx: t.x,
                        cy: t.y,
                        dataKey: c,
                        value: t.value,
                        payload: t.payload,
                        points: l,
                      }
                    );
                    return o.renderDotItem(u, r);
                  }),
                  h = {
                    clipPath: t
                      ? "url(#clipPath-".concat(e ? "" : "dots-").concat(r, ")")
                      : null,
                  };
                return n.createElement(
                  b.W,
                  E({ className: "recharts-area-dots" }, h),
                  d
                );
              },
            },
            {
              key: "renderHorizontalRect",
              value: function (t) {
                var e = this.props,
                  r = e.baseLine,
                  i = e.points,
                  a = e.strokeWidth,
                  o = i[0].x,
                  s = i[i.length - 1].x,
                  u = t * Math.abs(o - s),
                  c = l()(
                    i.map(function (t) {
                      return t.y || 0;
                    })
                  );
                return ((0, A.Et)(r) && "number" == typeof r
                  ? (c = Math.max(r, c))
                  : r &&
                    Array.isArray(r) &&
                    r.length &&
                    (c = Math.max(
                      l()(
                        r.map(function (t) {
                          return t.y || 0;
                        })
                      ),
                      c
                    )),
                (0, A.Et)(c))
                  ? n.createElement("rect", {
                      x: o < s ? o : o - u,
                      y: 0,
                      width: u,
                      height: Math.floor(
                        c + (a ? parseInt("".concat(a), 10) : 1)
                      ),
                    })
                  : null;
              },
            },
            {
              key: "renderVerticalRect",
              value: function (t) {
                var e = this.props,
                  r = e.baseLine,
                  i = e.points,
                  a = e.strokeWidth,
                  o = i[0].y,
                  s = i[i.length - 1].y,
                  u = t * Math.abs(o - s),
                  c = l()(
                    i.map(function (t) {
                      return t.x || 0;
                    })
                  );
                return ((0, A.Et)(r) && "number" == typeof r
                  ? (c = Math.max(r, c))
                  : r &&
                    Array.isArray(r) &&
                    r.length &&
                    (c = Math.max(
                      l()(
                        r.map(function (t) {
                          return t.x || 0;
                        })
                      ),
                      c
                    )),
                (0, A.Et)(c))
                  ? n.createElement("rect", {
                      x: 0,
                      y: o < s ? o : o - u,
                      width: c + (a ? parseInt("".concat(a), 10) : 1),
                      height: Math.floor(u),
                    })
                  : null;
              },
            },
            {
              key: "renderClipRect",
              value: function (t) {
                return "vertical" === this.props.layout
                  ? this.renderVerticalRect(t)
                  : this.renderHorizontalRect(t);
              },
            },
            {
              key: "renderAreaStatically",
              value: function (t, e, r, i) {
                var a = this.props,
                  o = a.layout,
                  s = a.type,
                  u = a.stroke,
                  l = a.connectNulls,
                  c = a.isRange,
                  f = (a.ref, D(a, k));
                return n.createElement(
                  b.W,
                  { clipPath: r ? "url(#clipPath-".concat(i, ")") : null },
                  n.createElement(
                    y.I,
                    E({}, (0, w.J9)(f, !0), {
                      points: t,
                      connectNulls: l,
                      type: s,
                      baseLine: e,
                      layout: o,
                      stroke: "none",
                      className: "recharts-area-area",
                    })
                  ),
                  "none" !== u &&
                    n.createElement(
                      y.I,
                      E({}, (0, w.J9)(this.props, !1), {
                        className: "recharts-area-curve",
                        layout: o,
                        type: s,
                        connectNulls: l,
                        fill: "none",
                        points: t,
                      })
                    ),
                  "none" !== u &&
                    c &&
                    n.createElement(
                      y.I,
                      E({}, (0, w.J9)(this.props, !1), {
                        className: "recharts-area-curve",
                        layout: o,
                        type: s,
                        connectNulls: l,
                        fill: "none",
                        points: e,
                      })
                    )
                );
              },
            },
            {
              key: "renderAreaWithAnimation",
              value: function (t, e) {
                var r = this,
                  i = this.props,
                  o = i.points,
                  s = i.baseLine,
                  u = i.isAnimationActive,
                  l = i.animationBegin,
                  c = i.animationDuration,
                  p = i.animationEasing,
                  h = i.animationId,
                  m = this.state,
                  y = m.prevPoints,
                  v = m.prevBaseLine;
                return n.createElement(
                  a.Ay,
                  {
                    begin: l,
                    duration: c,
                    isActive: u,
                    easing: p,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "area-".concat(h),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (i) {
                    var a = i.t;
                    if (y) {
                      var u,
                        l = y.length / o.length,
                        c = o.map(function (t, e) {
                          var r = Math.floor(e * l);
                          if (y[r]) {
                            var n = y[r],
                              i = (0, A.Dj)(n.x, t.x),
                              o = (0, A.Dj)(n.y, t.y);
                            return T(T({}, t), {}, { x: i(a), y: o(a) });
                          }
                          return t;
                        });
                      return (
                        (u =
                          (0, A.Et)(s) && "number" == typeof s
                            ? (0, A.Dj)(v, s)(a)
                            : f()(s) || d()(s)
                            ? (0, A.Dj)(v, 0)(a)
                            : s.map(function (t, e) {
                                var r = Math.floor(e * l);
                                if (v[r]) {
                                  var n = v[r],
                                    i = (0, A.Dj)(n.x, t.x),
                                    o = (0, A.Dj)(n.y, t.y);
                                  return T(T({}, t), {}, { x: i(a), y: o(a) });
                                }
                                return t;
                              })),
                        r.renderAreaStatically(c, u, t, e)
                      );
                    }
                    return n.createElement(
                      b.W,
                      null,
                      n.createElement(
                        "defs",
                        null,
                        n.createElement(
                          "clipPath",
                          { id: "animationClipPath-".concat(e) },
                          r.renderClipRect(a)
                        )
                      ),
                      n.createElement(
                        b.W,
                        { clipPath: "url(#animationClipPath-".concat(e, ")") },
                        r.renderAreaStatically(o, s, t, e)
                      )
                    );
                  }
                );
              },
            },
            {
              key: "renderArea",
              value: function (t, e) {
                var r = this.props,
                  n = r.points,
                  i = r.baseLine,
                  a = r.isAnimationActive,
                  o = this.state,
                  s = o.prevPoints,
                  u = o.prevBaseLine,
                  l = o.totalLength;
                return a &&
                  n &&
                  n.length &&
                  ((!s && l > 0) || !m()(s, n) || !m()(u, i))
                  ? this.renderAreaWithAnimation(t, e)
                  : this.renderAreaStatically(n, i, t, e);
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e = this.props,
                  r = e.hide,
                  a = e.dot,
                  o = e.points,
                  s = e.className,
                  u = e.top,
                  l = e.left,
                  c = e.xAxis,
                  p = e.yAxis,
                  d = e.width,
                  h = e.height,
                  m = e.isAnimationActive,
                  y = e.id;
                if (r || !o || !o.length) return null;
                var v = this.state.isAnimationFinished,
                  O = 1 === o.length,
                  A = (0, i.A)("recharts-area", s),
                  S = c && c.allowDataOverflow,
                  k = p && p.allowDataOverflow,
                  x = S || k,
                  P = f()(y) ? this.id : y,
                  D =
                    null != (t = (0, w.J9)(a, !1))
                      ? t
                      : { r: 3, strokeWidth: 2 },
                  E = D.r,
                  $ = D.strokeWidth,
                  T = ((0, w.sT)(a) ? a : {}).clipDot,
                  j = void 0 === T || T,
                  M = 2 * (void 0 === E ? 3 : E) + (void 0 === $ ? 2 : $);
                return n.createElement(
                  b.W,
                  { className: A },
                  S || k
                    ? n.createElement(
                        "defs",
                        null,
                        n.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(P) },
                          n.createElement("rect", {
                            x: S ? l : l - d / 2,
                            y: k ? u : u - h / 2,
                            width: S ? d : 2 * d,
                            height: k ? h : 2 * h,
                          })
                        ),
                        !j &&
                          n.createElement(
                            "clipPath",
                            { id: "clipPath-dots-".concat(P) },
                            n.createElement("rect", {
                              x: l - M / 2,
                              y: u - M / 2,
                              width: d + M,
                              height: h + M,
                            })
                          )
                      )
                    : null,
                  O ? null : this.renderArea(x, P),
                  (a || O) && this.renderDots(x, j, P),
                  (!m || v) && g.Z.renderCallByParent(this.props, o)
                );
              },
            },
          ]),
          (r = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                return t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curPoints: t.points,
                      curBaseLine: t.baseLine,
                      prevPoints: e.curPoints,
                      prevBaseLine: e.curBaseLine,
                    }
                  : t.points !== e.curPoints || t.baseLine !== e.curBaseLine
                  ? { curPoints: t.points, curBaseLine: t.baseLine }
                  : null;
              },
            },
          ]),
          e && j(o.prototype, e),
          r && j(o, r),
          Object.defineProperty(o, "prototype", { writable: !1 }),
          o
        );
      })(n.PureComponent);
      I(R, "displayName", "Area"),
        I(R, "defaultProps", {
          stroke: "#3182bd",
          fill: "#3182bd",
          fillOpacity: 0.6,
          xAxisId: 0,
          yAxisId: 0,
          legendType: "line",
          connectNulls: !1,
          points: [],
          dot: !1,
          activeDot: !0,
          hide: !1,
          isAnimationActive: !O.m.isSsr,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        }),
        I(R, "getBaseValue", function (t, e, r, n) {
          var i = t.layout,
            a = t.baseValue,
            o = e.props.baseValue,
            s = null != o ? o : a;
          if ((0, A.Et)(s) && "number" == typeof s) return s;
          var u = "horizontal" === i ? n : r,
            l = u.scale.domain();
          if ("number" === u.type) {
            var c = Math.max(l[0], l[1]),
              f = Math.min(l[0], l[1]);
            return "dataMin" === s
              ? f
              : "dataMax" === s || c < 0
              ? c
              : Math.max(Math.min(l[0], l[1]), 0);
          }
          return "dataMin" === s ? l[0] : "dataMax" === s ? l[1] : l[0];
        }),
        I(R, "getComposedData", function (t) {
          var e,
            r = t.props,
            n = t.item,
            i = t.xAxis,
            a = t.yAxis,
            o = t.xAxisTicks,
            s = t.yAxisTicks,
            u = t.bandSize,
            l = t.dataKey,
            c = t.stackedData,
            f = t.dataStartIndex,
            p = t.displayedData,
            d = t.offset,
            h = r.layout,
            m = c && c.length,
            y = R.getBaseValue(r, n, i, a),
            v = "horizontal" === h,
            b = !1,
            g = p.map(function (t, e) {
              m
                ? (r = c[f + e])
                : Array.isArray((r = (0, S.kr)(t, l)))
                ? (b = !0)
                : (r = [y, r]);
              var r,
                n = null == r[1] || (m && null == (0, S.kr)(t, l));
              return v
                ? {
                    x: (0, S.nb)({
                      axis: i,
                      ticks: o,
                      bandSize: u,
                      entry: t,
                      index: e,
                    }),
                    y: n ? null : a.scale(r[1]),
                    value: r,
                    payload: t,
                  }
                : {
                    x: n ? null : i.scale(r[1]),
                    y: (0, S.nb)({
                      axis: a,
                      ticks: s,
                      bandSize: u,
                      entry: t,
                      index: e,
                    }),
                    value: r,
                    payload: t,
                  };
            });
          return (
            (e =
              m || b
                ? g.map(function (t) {
                    var e = Array.isArray(t.value) ? t.value[0] : null;
                    return v
                      ? {
                          x: t.x,
                          y: null != e && null != t.y ? a.scale(e) : null,
                        }
                      : { x: null != e ? i.scale(e) : null, y: t.y };
                  })
                : v
                ? a.scale(y)
                : i.scale(y)),
            T({ points: g, baseLine: e, layout: h, isRange: b }, d)
          );
        }),
        I(R, "renderDotItem", function (t, e) {
          var r;
          if (n.isValidElement(t)) r = n.cloneElement(t, e);
          else if (s()(t)) r = t(e);
          else {
            var a = (0, i.A)(
                "recharts-area-dot",
                "boolean" != typeof t ? t.className : ""
              ),
              o = e.key,
              u = D(e, x);
            r = n.createElement(v.c, E({}, u, { key: o, className: a }));
          }
          return r;
        });
    },
    11376: (t, e, r) => {
      "use strict";
      r.d(e, { W: () => o });
      var n = r(7620),
        i = r(68499);
      let a = { some: 0, all: 1 };
      function o(
        t,
        { root: e, margin: r, amount: s, once: u = !1, initial: l = !1 } = {}
      ) {
        let [c, f] = (0, n.useState)(l);
        return (
          (0, n.useEffect)(() => {
            if (!t.current || (u && c)) return;
            let n = { root: (e && e.current) || void 0, margin: r, amount: s };
            return (function (
              t,
              e,
              { root: r, margin: n, amount: o = "some" } = {}
            ) {
              let s = (0, i.K)(t),
                u = new WeakMap(),
                l = new IntersectionObserver(
                  (t) => {
                    t.forEach((t) => {
                      let r = u.get(t.target);
                      if (!!r !== t.isIntersecting)
                        if (t.isIntersecting) {
                          let r = e(t.target, t);
                          "function" == typeof r
                            ? u.set(t.target, r)
                            : l.unobserve(t.target);
                        } else
                          "function" == typeof r && (r(t), u.delete(t.target));
                    });
                  },
                  {
                    root: r,
                    rootMargin: n,
                    threshold: "number" == typeof o ? o : a[o],
                  }
                );
              return s.forEach((t) => l.observe(t)), () => l.disconnect();
            })(t.current, () => (f(!0), u ? void 0 : () => f(!1)), n);
          }, [e, t, r, u, s]),
          c
        );
      }
    },
    22702: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => i });
      var n = r(7620);
      function i(t) {
        let e = n.useRef({ value: t, previous: t });
        return n.useMemo(
          () => (
            e.current.value !== t &&
              ((e.current.previous = e.current.value), (e.current.value = t)),
            e.current.previous
          ),
          [t]
        );
      }
    },
    24558: (t, e, r) => {
      "use strict";
      r.d(e, { j: () => o });
      var n = r(39672),
        i = r(63021),
        a = r(28978);
      function o(t, e) {
        let r = (0, a.d)(e()),
          o = () => r.set(e());
        return (
          o(),
          (0, i.E)(() => {
            let e = () => n.Gt.preRender(o, !1, !0),
              r = t.map((t) => t.on("change", e));
            return () => {
              r.forEach((t) => t()), (0, n.WG)(o);
            };
          }),
          r
        );
      }
    },
    26643: (t, e, r) => {
      "use strict";
      r.d(e, { N: () => b });
      var n = r(54568),
        i = r(7620),
        a = r(55300),
        o = r(48860),
        s = r(63021),
        u = r(33362),
        l = r(5840),
        c = r(39611);
      class f extends i.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = e.offsetParent,
              r = ((0, l.s)(t) && t.offsetWidth) || 0,
              n = this.props.sizeRef.current;
            (n.height = e.offsetHeight || 0),
              (n.width = e.offsetWidth || 0),
              (n.top = e.offsetTop),
              (n.left = e.offsetLeft),
              (n.right = r - n.width - n.left);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function p(t) {
        let { children: e, isPresent: r, anchorX: a, root: o } = t,
          s = (0, i.useId)(),
          u = (0, i.useRef)(null),
          l = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: p } = (0, i.useContext)(c.Q);
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: t, height: e, top: n, left: i, right: c } = l.current;
            if (r || !u.current || !t || !e) return;
            u.current.dataset.motionPopId = s;
            let f = document.createElement("style");
            p && (f.nonce = p);
            let d = null != o ? o : document.head;
            return (
              d.appendChild(f),
              f.sheet &&
                f.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      s,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(t, "px !important;\n            height: ")
                    .concat(e, "px !important;\n            ")
                    .concat(
                      "left" === a ? "left: ".concat(i) : "right: ".concat(c),
                      "px !important;\n            top: "
                    )
                    .concat(n, "px !important;\n          }\n        ")
                ),
              () => {
                d.contains(f) && d.removeChild(f);
              }
            );
          }, [r]),
          (0, n.jsx)(f, {
            isPresent: r,
            childRef: u,
            sizeRef: l,
            children: i.cloneElement(e, { ref: u }),
          })
        );
      }
      let d = (t) => {
        let {
            children: e,
            initial: r,
            isPresent: a,
            onExitComplete: s,
            custom: l,
            presenceAffectsLayout: c,
            mode: f,
            anchorX: d,
            root: m,
          } = t,
          y = (0, o.M)(h),
          v = (0, i.useId)(),
          b = !0,
          g = (0, i.useMemo)(
            () => (
              (b = !1),
              {
                id: v,
                initial: r,
                isPresent: a,
                custom: l,
                onExitComplete: (t) => {
                  for (let e of (y.set(t, !0), y.values())) if (!e) return;
                  s && s();
                },
                register: (t) => (y.set(t, !1), () => y.delete(t)),
              }
            ),
            [a, y, s]
          );
        return (
          c && b && (g = { ...g }),
          (0, i.useMemo)(() => {
            y.forEach((t, e) => y.set(e, !1));
          }, [a]),
          i.useEffect(() => {
            a || y.size || !s || s();
          }, [a]),
          "popLayout" === f &&
            (e = (0, n.jsx)(p, {
              isPresent: a,
              anchorX: d,
              root: m,
              children: e,
            })),
          (0, n.jsx)(u.t.Provider, { value: g, children: e })
        );
      };
      function h() {
        return new Map();
      }
      var m = r(24101);
      let y = (t) => t.key || "";
      function v(t) {
        let e = [];
        return (
          i.Children.forEach(t, (t) => {
            (0, i.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      let b = (t) => {
        let {
            children: e,
            custom: r,
            initial: u = !0,
            onExitComplete: l,
            presenceAffectsLayout: c = !0,
            mode: f = "sync",
            propagate: p = !1,
            anchorX: h = "left",
            root: b,
          } = t,
          [g, O] = (0, m.xQ)(p),
          A = (0, i.useMemo)(() => v(e), [e]),
          S = p && !g ? [] : A.map(y),
          w = (0, i.useRef)(!0),
          k = (0, i.useRef)(A),
          x = (0, o.M)(() => new Map()),
          [P, D] = (0, i.useState)(A),
          [E, $] = (0, i.useState)(A);
        (0, s.E)(() => {
          (w.current = !1), (k.current = A);
          for (let t = 0; t < E.length; t++) {
            let e = y(E[t]);
            S.includes(e) ? x.delete(e) : !0 !== x.get(e) && x.set(e, !1);
          }
        }, [E, S.length, S.join("-")]);
        let T = [];
        if (A !== P) {
          let t = [...A];
          for (let e = 0; e < E.length; e++) {
            let r = E[e],
              n = y(r);
            S.includes(n) || (t.splice(e, 0, r), T.push(r));
          }
          return "wait" === f && T.length && (t = T), $(v(t)), D(A), null;
        }
        let { forceRender: j } = (0, i.useContext)(a.L);
        return (0, n.jsx)(n.Fragment, {
          children: E.map((t) => {
            let e = y(t),
              i = (!p || !!g) && (A === E || S.includes(e));
            return (0, n.jsx)(
              d,
              {
                isPresent: i,
                initial: (!w.current || !!u) && void 0,
                custom: r,
                presenceAffectsLayout: c,
                mode: f,
                root: b,
                onExitComplete: i
                  ? void 0
                  : () => {
                      if (!x.has(e)) return;
                      x.set(e, !0);
                      let t = !0;
                      x.forEach((e) => {
                        e || (t = !1);
                      }),
                        t &&
                          (null == j || j(),
                          $(k.current),
                          p && (null == O || O()),
                          l && l());
                    },
                anchorX: h,
                children: t,
              },
              e
            );
          }),
        });
      };
    },
    28978: (t, e, r) => {
      "use strict";
      r.d(e, { d: () => s });
      var n = r(89897),
        i = r(7620),
        a = r(39611),
        o = r(48860);
      function s(t) {
        let e = (0, o.M)(() => (0, n.OQ)(t)),
          { isStatic: r } = (0, i.useContext)(a.Q);
        if (r) {
          let [, r] = (0, i.useState)(t);
          (0, i.useEffect)(() => e.on("change", r), []);
        }
        return e;
      }
    },
    37605: function (t) {
      t.exports = function (t, e, r) {
        t = t || {};
        var n = e.prototype,
          i = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          };
        function a(t, e, r, i) {
          return n.fromToBase(t, e, r, i);
        }
        (r.en.relativeTime = i),
          (n.fromToBase = function (e, n, a, o, s) {
            for (
              var u,
                l,
                c,
                f = a.$locale().relativeTime || i,
                p = t.thresholds || [
                  { l: "s", r: 44, d: "second" },
                  { l: "m", r: 89 },
                  { l: "mm", r: 44, d: "minute" },
                  { l: "h", r: 89 },
                  { l: "hh", r: 21, d: "hour" },
                  { l: "d", r: 35 },
                  { l: "dd", r: 25, d: "day" },
                  { l: "M", r: 45 },
                  { l: "MM", r: 10, d: "month" },
                  { l: "y", r: 17 },
                  { l: "yy", d: "year" },
                ],
                d = p.length,
                h = 0;
              h < d;
              h += 1
            ) {
              var m = p[h];
              m.d && (u = o ? r(e).diff(a, m.d, !0) : a.diff(e, m.d, !0));
              var y = (t.rounding || Math.round)(Math.abs(u));
              if (((c = u > 0), y <= m.r || !m.r)) {
                y <= 1 && h > 0 && (m = p[h - 1]);
                var v = f[m.l];
                s && (y = s("" + y)),
                  (l =
                    "string" == typeof v
                      ? v.replace("%d", y)
                      : v(y, n, m.l, c));
                break;
              }
            }
            if (n) return l;
            var b = c ? f.future : f.past;
            return "function" == typeof b ? b(l) : b.replace("%s", l);
          }),
          (n.to = function (t, e) {
            return a(t, e, this, !0);
          }),
          (n.from = function (t, e) {
            return a(t, e, this);
          });
        var o = function (t) {
          return t.$u ? r.utc() : r();
        };
        (n.toNow = function (t) {
          return this.to(o(this), t);
        }),
          (n.fromNow = function (t) {
            return this.from(o(this), t);
          });
      };
    },
    54301: (t, e, r) => {
      "use strict";
      r.d(e, { Ar: () => o, I7: () => u, S8: () => s, cG: () => a });
      var n = r(37653);
      let i = n.g.clone({ DECIMAL_PLACES: 0, ROUNDING_MODE: n.g.ROUND_DOWN });
      function a(t) {
        return t instanceof n.g ? t : new n.g(t);
      }
      function o(t) {
        return new i(t);
      }
      function s(t, e) {
        return u(t, e).toString(10);
      }
      function u(t, e) {
        return a(t).shiftedBy(-1 * e);
      }
    },
    56559: (t, e, r) => {
      "use strict";
      r.d(e, { b: () => s });
      var n = r(7620),
        i = r(7156),
        a = r(54568),
        o = n.forwardRef((t, e) =>
          (0, a.jsx)(i.sG.label, {
            ...t,
            ref: e,
            onMouseDown: (e) => {
              var r;
              e.target.closest("button, input, select, textarea") ||
                (null == (r = t.onMouseDown) || r.call(t, e),
                !e.defaultPrevented && e.detail > 1 && e.preventDefault());
            },
          })
        );
      o.displayName = "Label";
      var s = o;
    },
    59714: (t, e, r) => {
      "use strict";
      r.d(e, { G: () => s });
      var n = r(50180),
        i = r(48860),
        a = r(24558),
        o = r(89897);
      function s(t, e, r, i) {
        if ("function" == typeof t) {
          (o.bt.current = []), t();
          let e = (0, a.j)(o.bt.current, t);
          return (o.bt.current = void 0), e;
        }
        let s =
          "function" == typeof e
            ? e
            : (function (...t) {
                let e = !Array.isArray(t[0]),
                  r = e ? 0 : -1,
                  i = t[0 + r],
                  a = t[1 + r],
                  o = t[2 + r],
                  s = t[3 + r],
                  u = (0, n.G)(a, o, s);
                return e ? u(i) : u;
              })(e, r, i);
        return Array.isArray(t) ? u(t, s) : u([t], ([t]) => s(t));
      }
      function u(t, e) {
        let r = (0, i.M)(() => []);
        return (0, a.j)(t, () => {
          r.length = 0;
          let n = t.length;
          for (let e = 0; e < n; e++) r[e] = t[e].get();
          return e(r);
        });
      }
    },
    61272: (t, e, r) => {
      "use strict";
      r.d(e, { z: () => f });
      var n = r(41160),
        i = r(87541),
        a = r(39672);
      function o(t) {
        return "number" == typeof t ? t : parseFloat(t);
      }
      var s = r(7620),
        u = r(39611),
        l = r(28978),
        c = r(59714);
      function f(t, e = {}) {
        let { isStatic: r } = (0, s.useContext)(u.Q),
          p = () => ((0, n.S)(t) ? t.get() : t);
        if (r) return (0, c.G)(p);
        let d = (0, l.d)(p());
        return (
          (0, s.useInsertionEffect)(
            () =>
              (function (t, e, r) {
                let s,
                  u = t.get(),
                  l = null,
                  c = u,
                  f = "string" == typeof u ? u.replace(/[\d.-]/g, "") : void 0,
                  p = () => {
                    l && (l.stop(), (l = null));
                  },
                  d = () => {
                    p(),
                      (l = new i.s({
                        keyframes: [o(t.get()), o(c)],
                        velocity: t.getVelocity(),
                        type: "spring",
                        restDelta: 0.001,
                        restSpeed: 0.01,
                        ...r,
                        onUpdate: s,
                      }));
                  };
                if (
                  (t.attach(
                    (e, r) => (
                      (c = e),
                      (s = (t) => {
                        var e, n;
                        return r(((e = t), (n = f) ? e + n : e));
                      }),
                      a.Gt.postRender(d),
                      t.get()
                    ),
                    p
                  ),
                  (0, n.S)(e))
                ) {
                  let r = e.on("change", (e) => {
                      var r, n;
                      return t.set(((r = e), (n = f) ? r + n : r));
                    }),
                    n = t.on("destroy", r);
                  return () => {
                    r(), n();
                  };
                }
                return p;
              })(d, t, e),
            [d, JSON.stringify(e)]
          ),
          d
        );
      }
    },
    65738: (t, e, r) => {
      "use strict";
      var n, i, a, o, s, u;
      r.d(e, {
        Du: () => c,
        Tf: () => u,
        X3: () => n,
        gr: () => l,
        jt: () => s,
        lY: () => a,
        ld: () => o,
        nU: () => i,
      }),
        (function (t) {
          (t.None = "None"), (t.Stable = "Stable"), (t.Variable = "Variable");
        })(n || (n = {}));
      let l = {
        1: "mainnet",
        3: "ropsten",
        4: "rinkeby",
        5: "goerli",
        42: "kovan",
        100: "xDAI",
        137: "polygon",
        80001: "mumbai",
        43114: "avalanche",
        43113: "fuji",
        42161: "arbitrum_one",
        421613: "arbitrum_goerli",
        421614: "arbitrum_sepolia",
        250: "fantom_opera",
        4002: "fantom_testnet",
        10: "optimism",
        0xaa37dc: "optimism_sepolia",
        16666e5: "harmony",
        16667e5: "harmony_testnet",
        0xaa36a7: "sepolia",
        534353: "scroll_alpha",
        534351: "scroll_sepolia",
        534352: "scroll",
        1088: "metis_andromeda",
        8453: "base",
        84532: "base_sepolia",
        56: "bnb",
        324: "zksync",
        59144: "linea",
        146: "sonic",
        42220: "celo",
        1868: "soneium",
      };
      !(function (t) {
        (t[(t.mainnet = 1)] = "mainnet"),
          (t[(t.ropsten = 3)] = "ropsten"),
          (t[(t.rinkeby = 4)] = "rinkeby"),
          (t[(t.goerli = 5)] = "goerli"),
          (t[(t.kovan = 42)] = "kovan"),
          (t[(t.xdai = 100)] = "xdai"),
          (t[(t.polygon = 137)] = "polygon"),
          (t[(t.mumbai = 80001)] = "mumbai"),
          (t[(t.avalanche = 43114)] = "avalanche"),
          (t[(t.fuji = 43113)] = "fuji"),
          (t[(t.arbitrum_one = 42161)] = "arbitrum_one"),
          (t[(t.arbitrum_goerli = 421613)] = "arbitrum_goerli"),
          (t[(t.arbitrum_sepolia = 421614)] = "arbitrum_sepolia"),
          (t[(t.fantom = 250)] = "fantom"),
          (t[(t.fantom_testnet = 4002)] = "fantom_testnet"),
          (t[(t.optimism = 10)] = "optimism"),
          (t[(t.optimism_sepolia = 0xaa37dc)] = "optimism_sepolia"),
          (t[(t.harmony = 16666e5)] = "harmony"),
          (t[(t.harmony_testnet = 16667e5)] = "harmony_testnet"),
          (t[(t.zkevm_testnet = 1402)] = "zkevm_testnet"),
          (t[(t.sepolia = 0xaa36a7)] = "sepolia"),
          (t[(t.scroll_alpha = 534353)] = "scroll_alpha"),
          (t[(t.scroll_sepolia = 534351)] = "scroll_sepolia"),
          (t[(t.scroll = 534352)] = "scroll"),
          (t[(t.metis_andromeda = 1088)] = "metis_andromeda"),
          (t[(t.base = 8453)] = "base"),
          (t[(t.base_sepolia = 84532)] = "base_sepolia"),
          (t[(t.bnb = 56)] = "bnb"),
          (t[(t.zksync = 324)] = "zksync"),
          (t[(t.linea = 59144)] = "linea"),
          (t[(t.sonic = 146)] = "sonic"),
          (t[(t.celo = 42220)] = "celo"),
          (t[(t.soneium = 1868)] = "soneium");
      })(i || (i = {})),
        (function (t) {
          (t.ERC20_APPROVAL = "ERC20_APPROVAL"),
            (t.DLP_ACTION = "DLP_ACTION"),
            (t.GOVERNANCE_ACTION = "GOVERNANCE_ACTION"),
            (t.GOV_DELEGATION_ACTION = "GOV_DELEGATION_ACTION"),
            (t.STAKE_ACTION = "STAKE_ACTION"),
            (t.MIGRATION_LEND_AAVE = "MIGRATION_LEND_AAVE"),
            (t.FAUCET_MINT = "FAUCET_MINT"),
            (t.REWARD_ACTION = "REWARD_ACTION"),
            (t.V3_MIGRATION_ACTION = "V3_MIGRATION_ACTION"),
            (t.FAUCET_V2_MINT = "FAUCET_V2_MINT");
        })(a || (a = {})),
        (function (t) {
          (t.default = "default"),
            (t.supply = "supply"),
            (t.borrow = "borrow"),
            (t.withdraw = "withdraw"),
            (t.deposit = "deposit"),
            (t.liquidationCall = "liquidationCall"),
            (t.liquidationFlash = "liquidationFlash"),
            (t.repay = "repay"),
            (t.repayETH = "repayETH"),
            (t.repayWithATokens = "repayWithATokens"),
            (t.swapCollateral = "swapCollateral"),
            (t.repayCollateral = "repayCollateral"),
            (t.withdrawETH = "withdrawETH"),
            (t.borrowETH = "borrwoETH"),
            (t.migrateV3 = "migrateV3"),
            (t.supplyWithPermit = "supplyWithPermit"),
            (t.repayWithPermit = "repayWithPermit"),
            (t.stakeWithPermit = "stakeWithPermit"),
            (t.vote = "vote"),
            (t.approval = "approval"),
            (t.creditDelegationApproval = "creditDelegationApproval"),
            (t.stake = "stake"),
            (t.stakeCooldown = "stakeCooldown"),
            (t.unstake = "unstake"),
            (t.switchBorrowRateMode = "switchBorrowRateMode"),
            (t.setEModeUsage = "setEModeUsage"),
            (t.governanceDelegation = "governanceDelegation"),
            (t.claimRewards = "claimRewards"),
            (t.claimRewardsAndStake = "claimRewardsAndStake"),
            (t.setUsageAsCollateral = "setUsageAsCollateral"),
            (t.withdrawAndSwitch = "withdrawAndSwitch"),
            (t.batchMetaDelegate = "batchMetaDelegate"),
            (t.updateRepresentatives = "updateRepresentatives"),
            (t.migrateABPT = "migrateABPT"),
            (t.umbrellaStake = "umbrellaStake"),
            (t.umbrellaStakeWithPermit = "umbrellaStakeWithPermit"),
            (t.umbrellaStakeWithATokens = "umbrellaStakeWithATokens"),
            (t.umbrellaStakeWithATokensWithPermit =
              "umbrellaStakeWithATokensWithPermit"),
            (t.umbrellaRedeem = "umbrellaRedeem"),
            (t.umbrellaRedeemATokens = "umbrellaRedeemATokens"),
            (t.umbrellaStakeTokenCooldown = "umbrellaStakeTokenCooldown"),
            (t.umbrellaStakeTokenDeposit = "umbrellaStakeTokenDeposit"),
            (t.umbrellaStakeTokenDepositWithPermit =
              "umbrellaStakeTokenDepositWithPermit"),
            (t.umbrellaStakeTokenRedeem = "umbrellaStakeTokenRedeem"),
            (t.umbrellaClaimAllRewards = "umbrellaClaimAllRewards"),
            (t.umbrellaClaimSelectedRewards = "umbrellaClaimSelectedRewards"),
            (t.umbrellaStakeGatewayStake = "umbrellaStakeGatewayStake"),
            (t.umbrellaStakeGatewayStakeWithPermit =
              "umbrellaStakeGatewayStakeWithPermit"),
            (t.umbrellaStakeGatewayStakeATokens =
              "umbrellaStakeGatewayStakeATokens"),
            (t.umbrellaStakeGatewayStakeATokensWithPermit =
              "umbrellaStakeGatewayStakeATokensWithPermit"),
            (t.umbrellaStakeGatewayStakeNativeTokens =
              "umbrellaStakeGatewayStakeNativeTokens"),
            (t.umbrellaStakeGatewayRedeem = "umbrellaStakeGatewayRedeem"),
            (t.umbrellaStakeGatewayRedeemATokens =
              "umbrellaStakeGatewayRedeemATokens"),
            (t.umbrellaStakeGatewayRedeemNativeTokens =
              "umbrellaStakeGatewayRedeemNativeTokens");
        })(o || (o = {})),
        (function (t) {
          (t[(t.Abstain = 0)] = "Abstain"),
            (t[(t.Yes = 1)] = "Yes"),
            (t[(t.No = 2)] = "No");
        })(s || (s = {})),
        (function (t) {
          (t.aave = "aave"),
            (t.bpt = "bpt"),
            (t.gho = "gho"),
            (t.bptv2 = "bptv2");
        })(u || (u = {}));
      let c = Math.floor(Date.now() / 1e3 + 3600).toString();
    },
    77785: (t, e) => {
      var r;
      !(function () {
        "use strict";
        var n = {}.hasOwnProperty;
        function i() {
          for (var t = "", e = 0; e < arguments.length; e++) {
            var r = arguments[e];
            r &&
              (t = a(
                t,
                (function (t) {
                  if ("string" == typeof t || "number" == typeof t) return t;
                  if ("object" != typeof t) return "";
                  if (Array.isArray(t)) return i.apply(null, t);
                  if (
                    t.toString !== Object.prototype.toString &&
                    !t.toString.toString().includes("[native code]")
                  )
                    return t.toString();
                  var e = "";
                  for (var r in t) n.call(t, r) && t[r] && (e = a(e, r));
                  return e;
                })(r)
              ));
          }
          return t;
        }
        function a(t, e) {
          return e ? (t ? t + " " + e : t + e) : t;
        }
        t.exports
          ? ((i.default = i), (t.exports = i))
          : void 0 ===
              (r = function () {
                return i;
              }.apply(e, [])) || (t.exports = r);
      })();
    },
    82559: function (t) {
      t.exports = (function () {
        "use strict";
        var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
          e = {};
        return function (r, n, i) {
          var a,
            o = function (t, r, n) {
              void 0 === n && (n = {});
              var i,
                a,
                o,
                s,
                u = new Date(t);
              return (void 0 === (i = n) && (i = {}),
              (s = e[(o = r + "|" + (a = i.timeZoneName || "short"))]) ||
                ((s = new Intl.DateTimeFormat("en-US", {
                  hour12: !1,
                  timeZone: r,
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  timeZoneName: a,
                })),
                (e[o] = s)),
              s).formatToParts(u);
            },
            s = function (e, r) {
              for (var n = o(e, r), a = [], s = 0; s < n.length; s += 1) {
                var u = n[s],
                  l = u.type,
                  c = u.value,
                  f = t[l];
                f >= 0 && (a[f] = parseInt(c, 10));
              }
              var p = a[3],
                d =
                  a[0] +
                  "-" +
                  a[1] +
                  "-" +
                  a[2] +
                  " " +
                  (24 === p ? 0 : p) +
                  ":" +
                  a[4] +
                  ":" +
                  a[5] +
                  ":000",
                h = +e;
              return (i.utc(d).valueOf() - (h -= h % 1e3)) / 6e4;
            },
            u = n.prototype;
          (u.tz = function (t, e) {
            void 0 === t && (t = a);
            var r,
              n = this.utcOffset(),
              o = this.toDate(),
              s = o.toLocaleString("en-US", { timeZone: t }),
              u = Math.round((o - new Date(s)) / 1e3 / 60),
              l = -(15 * Math.round(o.getTimezoneOffset() / 15)) - u;
            if (Number(l)) {
              if (
                ((r = i(s, { locale: this.$L })
                  .$set("millisecond", this.$ms)
                  .utcOffset(l, !0)),
                e)
              ) {
                var c = r.utcOffset();
                r = r.add(n - c, "minute");
              }
            } else r = this.utcOffset(0, e);
            return (r.$x.$timezone = t), r;
          }),
            (u.offsetName = function (t) {
              var e = this.$x.$timezone || i.tz.guess(),
                r = o(this.valueOf(), e, { timeZoneName: t }).find(function (
                  t
                ) {
                  return "timezonename" === t.type.toLowerCase();
                });
              return r && r.value;
            });
          var l = u.startOf;
          (u.startOf = function (t, e) {
            if (!this.$x || !this.$x.$timezone) return l.call(this, t, e);
            var r = i(this.format("YYYY-MM-DD HH:mm:ss:SSS"), {
              locale: this.$L,
            });
            return l.call(r, t, e).tz(this.$x.$timezone, !0);
          }),
            (i.tz = function (t, e, r) {
              var n = r && e,
                o = r || e || a,
                u = s(+i(), o);
              if ("string" != typeof t) return i(t).tz(o);
              var l = (function (t, e, r) {
                  var n = t - 60 * e * 1e3,
                    i = s(n, r);
                  if (e === i) return [n, e];
                  var a = s((n -= 60 * (i - e) * 1e3), r);
                  return i === a
                    ? [n, i]
                    : [t - 60 * Math.min(i, a) * 1e3, Math.max(i, a)];
                })(i.utc(t, n).valueOf(), u, o),
                c = l[0],
                f = l[1],
                p = i(c).utcOffset(f);
              return (p.$x.$timezone = o), p;
            }),
            (i.tz.guess = function () {
              return Intl.DateTimeFormat().resolvedOptions().timeZone;
            }),
            (i.tz.setDefault = function (t) {
              a = t;
            });
        };
      })();
    },
    83957: (t, e, r) => {
      "use strict";
      r.d(e, { X: () => X });
      var n = r(25576),
        i = r(7110),
        a = r(35493),
        o = r(57617),
        s = r(7620),
        u = r(12885),
        l = r(62239),
        c = r.n(l),
        f = r(92012),
        p = r.n(f),
        d = r(23164),
        h = r.n(d),
        m = r(32987),
        y = r(66349),
        v = r(84958),
        b = r(90625),
        g = r(74742);
      function O(t) {
        return (O =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function A() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (A = function () {
          return !!t;
        })();
      }
      function S(t) {
        return (S = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function w(t, e) {
        return (w = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function k(t, e, r) {
        return (
          (e = x(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function x(t) {
        var e = (function (t, e) {
          if ("object" != O(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != O(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == O(e) ? e : e + "";
      }
      var P = (function (t) {
        var e;
        function r() {
          var t, e;
          if (!(this instanceof r))
            throw TypeError("Cannot call a class as a function");
          return (
            (t = r),
            (e = arguments),
            (t = S(t)),
            (function (t, e) {
              if (e && ("object" === O(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return r;
            })(
              this,
              A()
                ? Reflect.construct(t, e || [], S(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (r.prototype = Object.create(t && t.prototype, {
            constructor: { value: r, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          t && w(r, t),
          (e = [
            {
              key: "render",
              value: function () {
                return null;
              },
            },
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, x(n.key), n);
            }
          })(r.prototype, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })(s.Component);
      k(P, "displayName", "ZAxis"),
        k(P, "defaultProps", {
          zAxisId: 0,
          range: [64, 64],
          scale: "auto",
          type: "number",
        });
      var D = r(24828),
        E = r(49788),
        $ = r(132),
        T = r(25338),
        j = r(33048),
        M = r(70390),
        _ = r(23345),
        C = r(55437),
        I = ["option", "isActive"];
      function N() {
        return (N = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function R(t) {
        var e = t.option,
          r = t.isActive,
          n = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = (function (t, e) {
                if (null == t) return {};
                var r = {};
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    if (e.indexOf(n) >= 0) continue;
                    r[n] = t[n];
                  }
                return r;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(t);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  !(e.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (i[r] = t[r]);
            }
            return i;
          })(t, I);
        return "string" == typeof e
          ? s.createElement(
              C.yp,
              N(
                {
                  option: s.createElement(_.i, N({ type: e }, n)),
                  isActive: r,
                  shapeType: "symbols",
                },
                n
              )
            )
          : s.createElement(
              C.yp,
              N({ option: e, isActive: r, shapeType: "symbols" }, n)
            );
      }
      function W(t) {
        return (W =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function z() {
        return (z = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function L(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function G(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? L(Object(r), !0).forEach(function (e) {
                V(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : L(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function B(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Y(n.key), n);
        }
      }
      function U() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (U = function () {
          return !!t;
        })();
      }
      function F(t) {
        return (F = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function H(t, e) {
        return (H = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function V(t, e, r) {
        return (
          (e = Y(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function Y(t) {
        var e = (function (t, e) {
          if ("object" != W(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != W(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == W(e) ? e : e + "";
      }
      var K = (function (t) {
        var e, r;
        function n() {
          var t, e, r;
          if (!(this instanceof n))
            throw TypeError("Cannot call a class as a function");
          for (var i = arguments.length, a = Array(i), o = 0; o < i; o++)
            a[o] = arguments[o];
          return (
            (e = n),
            (r = [].concat(a)),
            (e = F(e)),
            V(
              (t = (function (t, e) {
                if (e && ("object" === W(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                var r = t;
                if (void 0 === r)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return r;
              })(
                this,
                U()
                  ? Reflect.construct(e, r || [], F(this).constructor)
                  : e.apply(this, r)
              )),
              "state",
              { isAnimationFinished: !1 }
            ),
            V(t, "handleAnimationEnd", function () {
              t.setState({ isAnimationFinished: !0 });
            }),
            V(t, "handleAnimationStart", function () {
              t.setState({ isAnimationFinished: !1 });
            }),
            V(t, "id", (0, T.NF)("recharts-scatter-")),
            t
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (n.prototype = Object.create(t && t.prototype, {
            constructor: { value: n, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          t && H(n, t),
          (e = [
            {
              key: "renderSymbolsStatically",
              value: function (t) {
                var e = this,
                  r = this.props,
                  n = r.shape,
                  i = r.activeShape,
                  a = r.activeIndex,
                  o = (0, b.J9)(this.props, !1);
                return t.map(function (t, r) {
                  var u = a === r,
                    l = G(G({}, o), t);
                  return s.createElement(
                    y.W,
                    z(
                      {
                        className: "recharts-scatter-symbol",
                        key: "symbol-"
                          .concat(null == t ? void 0 : t.cx, "-")
                          .concat(null == t ? void 0 : t.cy, "-")
                          .concat(null == t ? void 0 : t.size, "-")
                          .concat(r),
                      },
                      (0, M.XC)(e.props, t, r),
                      { role: "img" }
                    ),
                    s.createElement(
                      R,
                      z(
                        {
                          option: u ? i : n,
                          isActive: u,
                          key: "symbol-".concat(r),
                        },
                        l
                      )
                    )
                  );
                });
              },
            },
            {
              key: "renderSymbolsWithAnimation",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.points,
                  n = e.isAnimationActive,
                  i = e.animationBegin,
                  a = e.animationDuration,
                  o = e.animationEasing,
                  l = e.animationId,
                  c = this.state.prevPoints;
                return s.createElement(
                  u.Ay,
                  {
                    begin: i,
                    duration: a,
                    isActive: n,
                    easing: o,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "pie-".concat(l),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (e) {
                    var n = e.t,
                      i = r.map(function (t, e) {
                        var r = c && c[e];
                        if (r) {
                          var i = (0, T.Dj)(r.cx, t.cx),
                            a = (0, T.Dj)(r.cy, t.cy),
                            o = (0, T.Dj)(r.size, t.size);
                          return G(
                            G({}, t),
                            {},
                            { cx: i(n), cy: a(n), size: o(n) }
                          );
                        }
                        var s = (0, T.Dj)(0, t.size);
                        return G(G({}, t), {}, { size: s(n) });
                      });
                    return s.createElement(
                      y.W,
                      null,
                      t.renderSymbolsStatically(i)
                    );
                  }
                );
              },
            },
            {
              key: "renderSymbols",
              value: function () {
                var t = this.props,
                  e = t.points,
                  r = t.isAnimationActive,
                  n = this.state.prevPoints;
                return r && e && e.length && (!n || !p()(n, e))
                  ? this.renderSymbolsWithAnimation()
                  : this.renderSymbolsStatically(e);
              },
            },
            {
              key: "renderErrorBar",
              value: function () {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var t = this.props,
                  e = t.points,
                  r = t.xAxis,
                  n = t.yAxis,
                  i = t.children,
                  a = (0, b.aS)(i, E.u);
                return a
                  ? a.map(function (t, i) {
                      var a = t.props,
                        o = a.direction,
                        u = a.dataKey;
                      return s.cloneElement(t, {
                        key: "".concat(o, "-").concat(u, "-").concat(e[i]),
                        data: e,
                        xAxis: r,
                        yAxis: n,
                        layout: "x" === o ? "vertical" : "horizontal",
                        dataPointFormatter: function (t, e) {
                          return {
                            x: t.cx,
                            y: t.cy,
                            value: "x" === o ? +t.node.x : +t.node.y,
                            errorVal: (0, j.kr)(t, e),
                          };
                        },
                      });
                    })
                  : null;
              },
            },
            {
              key: "renderLine",
              value: function () {
                var t,
                  e,
                  r = this.props,
                  n = r.points,
                  i = r.line,
                  a = r.lineType,
                  o = r.lineJointType,
                  u = (0, b.J9)(this.props, !1),
                  l = (0, b.J9)(i, !1);
                if ("joint" === a)
                  t = n.map(function (t) {
                    return { x: t.cx, y: t.cy };
                  });
                else if ("fitting" === a) {
                  var c = (0, T.jG)(n),
                    f = c.xmin,
                    p = c.xmax,
                    d = c.a,
                    m = c.b,
                    v = function (t) {
                      return d * t + m;
                    };
                  t = [
                    { x: f, y: v(f) },
                    { x: p, y: v(p) },
                  ];
                }
                var g = G(
                  G(G({}, u), {}, { fill: "none", stroke: u && u.fill }, l),
                  {},
                  { points: t }
                );
                return (
                  (e = s.isValidElement(i)
                    ? s.cloneElement(i, g)
                    : h()(i)
                    ? i(g)
                    : s.createElement(D.I, z({}, g, { type: o }))),
                  s.createElement(
                    y.W,
                    {
                      className: "recharts-scatter-line",
                      key: "recharts-scatter-line",
                    },
                    e
                  )
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.hide,
                  r = t.points,
                  n = t.line,
                  i = t.className,
                  a = t.xAxis,
                  o = t.yAxis,
                  u = t.left,
                  l = t.top,
                  f = t.width,
                  p = t.height,
                  d = t.id,
                  h = t.isAnimationActive;
                if (e || !r || !r.length) return null;
                var b = this.state.isAnimationFinished,
                  g = (0, m.A)("recharts-scatter", i),
                  O = a && a.allowDataOverflow,
                  A = o && o.allowDataOverflow,
                  S = c()(d) ? this.id : d;
                return s.createElement(
                  y.W,
                  {
                    className: g,
                    clipPath: O || A ? "url(#clipPath-".concat(S, ")") : null,
                  },
                  O || A
                    ? s.createElement(
                        "defs",
                        null,
                        s.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(S) },
                          s.createElement("rect", {
                            x: O ? u : u - f / 2,
                            y: A ? l : l - p / 2,
                            width: O ? f : 2 * f,
                            height: A ? p : 2 * p,
                          })
                        )
                      )
                    : null,
                  n && this.renderLine(),
                  this.renderErrorBar(),
                  s.createElement(
                    y.W,
                    { key: "recharts-scatter-symbols" },
                    this.renderSymbols()
                  ),
                  (!h || b) && v.Z.renderCallByParent(this.props, r)
                );
              },
            },
          ]),
          (r = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                return t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curPoints: t.points,
                      prevPoints: e.curPoints,
                    }
                  : t.points !== e.curPoints
                  ? { curPoints: t.points }
                  : null;
              },
            },
          ]),
          e && B(n.prototype, e),
          r && B(n, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      })(s.PureComponent);
      V(K, "displayName", "Scatter"),
        V(K, "defaultProps", {
          xAxisId: 0,
          yAxisId: 0,
          zAxisId: 0,
          legendType: "circle",
          lineType: "joint",
          lineJointType: "linear",
          data: [],
          shape: "circle",
          hide: !1,
          isAnimationActive: !g.m.isSsr,
          animationBegin: 0,
          animationDuration: 400,
          animationEasing: "linear",
        }),
        V(K, "getComposedData", function (t) {
          var e = t.xAxis,
            r = t.yAxis,
            n = t.zAxis,
            i = t.item,
            a = t.displayedData,
            o = t.xAxisTicks,
            s = t.yAxisTicks,
            u = t.offset,
            l = i.props.tooltipType,
            f = (0, b.aS)(i.props.children, $.f),
            p = c()(e.dataKey) ? i.props.dataKey : e.dataKey,
            d = c()(r.dataKey) ? i.props.dataKey : r.dataKey,
            h = n && n.dataKey,
            m = n ? n.range : P.defaultProps.range,
            y = m && m[0],
            v = e.scale.bandwidth ? e.scale.bandwidth() : 0,
            g = r.scale.bandwidth ? r.scale.bandwidth() : 0,
            O = a.map(function (t, a) {
              var u = (0, j.kr)(t, p),
                m = (0, j.kr)(t, d),
                b = (!c()(h) && (0, j.kr)(t, h)) || "-",
                O = [
                  {
                    name: c()(e.dataKey) ? i.props.name : e.name || e.dataKey,
                    unit: e.unit || "",
                    value: u,
                    payload: t,
                    dataKey: p,
                    type: l,
                  },
                  {
                    name: c()(r.dataKey) ? i.props.name : r.name || r.dataKey,
                    unit: r.unit || "",
                    value: m,
                    payload: t,
                    dataKey: d,
                    type: l,
                  },
                ];
              "-" !== b &&
                O.push({
                  name: n.name || n.dataKey,
                  unit: n.unit || "",
                  value: b,
                  payload: t,
                  dataKey: h,
                  type: l,
                });
              var A = (0, j.nb)({
                  axis: e,
                  ticks: o,
                  bandSize: v,
                  entry: t,
                  index: a,
                  dataKey: p,
                }),
                S = (0, j.nb)({
                  axis: r,
                  ticks: s,
                  bandSize: g,
                  entry: t,
                  index: a,
                  dataKey: d,
                }),
                w = "-" !== b ? n.scale(b) : y,
                k = Math.sqrt(Math.max(w, 0) / Math.PI);
              return G(
                G({}, t),
                {},
                {
                  cx: A,
                  cy: S,
                  x: A - k,
                  y: S - k,
                  xAxis: e,
                  yAxis: r,
                  zAxis: n,
                  width: 2 * k,
                  height: 2 * k,
                  size: w,
                  node: { x: u, y: m, z: b },
                  tooltipPayload: O,
                  tooltipPosition: { x: A, y: S },
                  payload: t,
                },
                f && f[a] && f[a].props
              );
            });
          return G({ points: O }, u);
        });
      var J = r(17296),
        Z = r(45155),
        q = r(92686),
        X = (0, n.gu)({
          chartName: "ComposedChart",
          GraphicalChild: [o.N, i.G, a.y, K],
          axisComponents: [
            { axisType: "xAxis", AxisComp: J.W },
            { axisType: "yAxis", AxisComp: Z.h },
            { axisType: "zAxis", AxisComp: P },
          ],
          formatAxisMap: q.pr,
        });
    },
    95145: (t, e, r) => {
      "use strict";
      r.d(e, { bL: () => S, zi: () => w });
      var n = r(7620),
        i = r(29254),
        a = r(49640),
        o = r(80482),
        s = r(87076),
        u = r(22702),
        l = r(90210),
        c = r(7156),
        f = r(54568),
        p = "Switch",
        [d, h] = (0, o.A)(p),
        [m, y] = d(p),
        v = n.forwardRef((t, e) => {
          let {
              __scopeSwitch: r,
              name: o,
              checked: u,
              defaultChecked: l,
              required: d,
              disabled: h,
              value: y = "on",
              onCheckedChange: v,
              form: b,
              ...g
            } = t,
            [S, w] = n.useState(null),
            k = (0, a.s)(e, (t) => w(t)),
            x = n.useRef(!1),
            P = !S || b || !!S.closest("form"),
            [D, E] = (0, s.i)({
              prop: u,
              defaultProp: null != l && l,
              onChange: v,
              caller: p,
            });
          return (0, f.jsxs)(m, {
            scope: r,
            checked: D,
            disabled: h,
            children: [
              (0, f.jsx)(c.sG.button, {
                type: "button",
                role: "switch",
                "aria-checked": D,
                "aria-required": d,
                "data-state": A(D),
                "data-disabled": h ? "" : void 0,
                disabled: h,
                value: y,
                ...g,
                ref: k,
                onClick: (0, i.m)(t.onClick, (t) => {
                  E((t) => !t),
                    P &&
                      ((x.current = t.isPropagationStopped()),
                      x.current || t.stopPropagation());
                }),
              }),
              P &&
                (0, f.jsx)(O, {
                  control: S,
                  bubbles: !x.current,
                  name: o,
                  value: y,
                  checked: D,
                  required: d,
                  disabled: h,
                  form: b,
                  style: { transform: "translateX(-100%)" },
                }),
            ],
          });
        });
      v.displayName = p;
      var b = "SwitchThumb",
        g = n.forwardRef((t, e) => {
          let { __scopeSwitch: r, ...n } = t,
            i = y(b, r);
          return (0, f.jsx)(c.sG.span, {
            "data-state": A(i.checked),
            "data-disabled": i.disabled ? "" : void 0,
            ...n,
            ref: e,
          });
        });
      g.displayName = b;
      var O = n.forwardRef((t, e) => {
        let {
            __scopeSwitch: r,
            control: i,
            checked: o,
            bubbles: s = !0,
            ...c
          } = t,
          p = n.useRef(null),
          d = (0, a.s)(p, e),
          h = (0, u.Z)(o),
          m = (0, l.X)(i);
        return (
          n.useEffect(() => {
            let t = p.current;
            if (!t) return;
            let e = Object.getOwnPropertyDescriptor(
              window.HTMLInputElement.prototype,
              "checked"
            ).set;
            if (h !== o && e) {
              let r = new Event("click", { bubbles: s });
              e.call(t, o), t.dispatchEvent(r);
            }
          }, [h, o, s]),
          (0, f.jsx)("input", {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: o,
            ...c,
            tabIndex: -1,
            ref: d,
            style: {
              ...c.style,
              ...m,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
            },
          })
        );
      });
      function A(t) {
        return t ? "checked" : "unchecked";
      }
      O.displayName = "SwitchBubbleInput";
      var S = v,
        w = g;
    },
  },
]);
