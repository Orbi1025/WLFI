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
      (e._sentryDebugIds[t] = "63fc5369-5b8f-4b6c-b4d6-37daf93add33"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-63fc5369-5b8f-4b6c-b4d6-37daf93add33"));
  })();
} catch (e) {}
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3195],
  {
    10408: (e, t, r) => {
      r.r(t), r.d(t, { randomBytes: () => n.p, shuffled: () => o.A });
      var n = r(8676),
        o = r(68697);
    },
    11376: (e, t, r) => {
      r.d(t, { W: () => a });
      var n = r(7620),
        o = r(68499);
      let i = { some: 0, all: 1 };
      function a(
        e,
        { root: t, margin: r, amount: s, once: u = !1, initial: c = !1 } = {}
      ) {
        let [l, d] = (0, n.useState)(c);
        return (
          (0, n.useEffect)(() => {
            if (!e.current || (u && l)) return;
            let n = { root: (t && t.current) || void 0, margin: r, amount: s };
            return (function (
              e,
              t,
              { root: r, margin: n, amount: a = "some" } = {}
            ) {
              let s = (0, o.K)(e),
                u = new WeakMap(),
                c = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let r = u.get(e.target);
                      if (!!r !== e.isIntersecting)
                        if (e.isIntersecting) {
                          let r = t(e.target, e);
                          "function" == typeof r
                            ? u.set(e.target, r)
                            : c.unobserve(e.target);
                        } else
                          "function" == typeof r && (r(e), u.delete(e.target));
                    });
                  },
                  {
                    root: r,
                    rootMargin: n,
                    threshold: "number" == typeof a ? a : i[a],
                  }
                );
              return s.forEach((e) => c.observe(e)), () => c.disconnect();
            })(e.current, () => (d(!0), u ? void 0 : () => d(!1)), n);
          }, [t, e, r, u, s]),
          l
        );
      }
    },
    14884: (e, t, r) => {
      r.d(t, { t: () => a });
      var n = r(76640),
        o = r(84509),
        i = r(29344);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, i.U)(e);
        return (0, o.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: r } = t;
              return e.subscribe(() => (0, n.K)(e), r, {
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
    22702: (e, t, r) => {
      r.d(t, { Z: () => o });
      var n = r(7620);
      function o(e) {
        let t = n.useRef({ value: e, previous: e });
        return n.useMemo(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    25173: (e, t, r) => {
      r.d(t, {
        UC: () => er,
        VY: () => eo,
        ZL: () => ee,
        bL: () => Y,
        bm: () => ei,
        hE: () => en,
        hJ: () => et,
        l9: () => X,
      });
      var n = r(7620),
        o = r(29254),
        i = r(49640),
        a = r(80482),
        s = r(60728),
        u = r(87076),
        c = r(82491),
        l = r(38552),
        d = r(93343),
        f = r(18400),
        p = r(7156),
        b = r(17848),
        g = r(23855),
        m = r(23027),
        y = r(79649),
        h = r(54568),
        P = "Dialog",
        [v, O] = (0, a.A)(P),
        [j, E] = v(P),
        C = (e) => {
          let {
              __scopeDialog: t,
              children: r,
              open: o,
              defaultOpen: i,
              onOpenChange: a,
              modal: c = !0,
            } = e,
            l = n.useRef(null),
            d = n.useRef(null),
            [f, p] = (0, u.i)({
              prop: o,
              defaultProp: null != i && i,
              onChange: a,
              caller: P,
            });
          return (0, h.jsx)(j, {
            scope: t,
            triggerRef: l,
            contentRef: d,
            contentId: (0, s.B)(),
            titleId: (0, s.B)(),
            descriptionId: (0, s.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: n.useCallback(() => p((e) => !e), [p]),
            modal: c,
            children: r,
          });
        };
      C.displayName = P;
      var D = "DialogTrigger",
        R = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            a = E(D, r),
            s = (0, i.s)(t, a.triggerRef);
          return (0, h.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": a.open,
            "aria-controls": a.contentId,
            "data-state": q(a.open),
            ...n,
            ref: s,
            onClick: (0, o.m)(e.onClick, a.onOpenToggle),
          });
        });
      R.displayName = D;
      var x = "DialogPortal",
        [S, w] = v(x, { forceMount: void 0 }),
        F = (e) => {
          let {
              __scopeDialog: t,
              forceMount: r,
              children: o,
              container: i,
            } = e,
            a = E(x, t);
          return (0, h.jsx)(S, {
            scope: t,
            forceMount: r,
            children: n.Children.map(o, (e) =>
              (0, h.jsx)(f.C, {
                present: r || a.open,
                children: (0, h.jsx)(d.Z, {
                  asChild: !0,
                  container: i,
                  children: e,
                }),
              })
            ),
          });
        };
      F.displayName = x;
      var A = "DialogOverlay",
        T = n.forwardRef((e, t) => {
          let r = w(A, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...o } = e,
            i = E(A, e.__scopeDialog);
          return i.modal
            ? (0, h.jsx)(f.C, {
                present: n || i.open,
                children: (0, h.jsx)(U, { ...o, ref: t }),
              })
            : null;
        });
      T.displayName = A;
      var _ = (0, y.TL)("DialogOverlay.RemoveScroll"),
        U = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = E(A, r);
          return (0, h.jsx)(g.A, {
            as: _,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, h.jsx)(p.sG.div, {
              "data-state": q(o.open),
              ...n,
              ref: t,
              style: { pointerEvents: "auto", ...n.style },
            }),
          });
        }),
        k = "DialogContent",
        I = n.forwardRef((e, t) => {
          let r = w(k, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...o } = e,
            i = E(k, e.__scopeDialog);
          return (0, h.jsx)(f.C, {
            present: n || i.open,
            children: i.modal
              ? (0, h.jsx)(M, { ...o, ref: t })
              : (0, h.jsx)(B, { ...o, ref: t }),
          });
        });
      I.displayName = k;
      var M = n.forwardRef((e, t) => {
          let r = E(k, e.__scopeDialog),
            a = n.useRef(null),
            s = (0, i.s)(t, r.contentRef, a);
          return (
            n.useEffect(() => {
              let e = a.current;
              if (e) return (0, m.Eq)(e);
            }, []),
            (0, h.jsx)(N, {
              ...e,
              ref: s,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e) => {
                var t;
                e.preventDefault(),
                  null == (t = r.triggerRef.current) || t.focus();
              }),
              onPointerDownOutside: (0, o.m)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || r) && e.preventDefault();
              }),
              onFocusOutside: (0, o.m)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        B = n.forwardRef((e, t) => {
          let r = E(k, e.__scopeDialog),
            o = n.useRef(!1),
            i = n.useRef(!1);
          return (0, h.jsx)(N, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var n, a;
              null == (n = e.onCloseAutoFocus) || n.call(e, t),
                t.defaultPrevented ||
                  (o.current || null == (a = r.triggerRef.current) || a.focus(),
                  t.preventDefault()),
                (o.current = !1),
                (i.current = !1);
            },
            onInteractOutside: (t) => {
              var n, a;
              null == (n = e.onInteractOutside) || n.call(e, t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  "pointerdown" === t.detail.originalEvent.type &&
                    (i.current = !0));
              let s = t.target;
              (null == (a = r.triggerRef.current) ? void 0 : a.contains(s)) &&
                t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  i.current &&
                  t.preventDefault();
            },
          });
        }),
        N = n.forwardRef((e, t) => {
          let {
              __scopeDialog: r,
              trapFocus: o,
              onOpenAutoFocus: a,
              onCloseAutoFocus: s,
              ...u
            } = e,
            d = E(k, r),
            f = n.useRef(null),
            p = (0, i.s)(t, f);
          return (
            (0, b.Oh)(),
            (0, h.jsxs)(h.Fragment, {
              children: [
                (0, h.jsx)(l.n, {
                  asChild: !0,
                  loop: !0,
                  trapped: o,
                  onMountAutoFocus: a,
                  onUnmountAutoFocus: s,
                  children: (0, h.jsx)(c.qW, {
                    role: "dialog",
                    id: d.contentId,
                    "aria-describedby": d.descriptionId,
                    "aria-labelledby": d.titleId,
                    "data-state": q(d.open),
                    ...u,
                    ref: p,
                    onDismiss: () => d.onOpenChange(!1),
                  }),
                }),
                (0, h.jsxs)(h.Fragment, {
                  children: [
                    (0, h.jsx)(G, { titleId: d.titleId }),
                    (0, h.jsx)($, {
                      contentRef: f,
                      descriptionId: d.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        L = "DialogTitle",
        K = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = E(L, r);
          return (0, h.jsx)(p.sG.h2, { id: o.titleId, ...n, ref: t });
        });
      K.displayName = L;
      var H = "DialogDescription",
        Q = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = E(H, r);
          return (0, h.jsx)(p.sG.p, { id: o.descriptionId, ...n, ref: t });
        });
      Q.displayName = H;
      var Z = "DialogClose",
        z = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            i = E(Z, r);
          return (0, h.jsx)(p.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, o.m)(e.onClick, () => i.onOpenChange(!1)),
          });
        });
      function q(e) {
        return e ? "open" : "closed";
      }
      z.displayName = Z;
      var V = "DialogTitleWarning",
        [W, J] = (0, a.q)(V, {
          contentName: k,
          titleName: L,
          docsSlug: "dialog",
        }),
        G = (e) => {
          let { titleId: t } = e,
            r = J(V),
            o = "`"
              .concat(r.contentName, "` requires a `")
              .concat(
                r.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `"
              )
              .concat(
                r.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/"
              )
              .concat(r.docsSlug);
          return (
            n.useEffect(() => {
              t && (document.getElementById(t) || console.error(o));
            }, [o, t]),
            null
          );
        },
        $ = (e) => {
          let { contentRef: t, descriptionId: r } = e,
            o = J("DialogDescriptionWarning"),
            i =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                o.contentName,
                "}."
              );
          return (
            n.useEffect(() => {
              var e;
              let n =
                null == (e = t.current)
                  ? void 0
                  : e.getAttribute("aria-describedby");
              r && n && (document.getElementById(r) || console.warn(i));
            }, [i, t, r]),
            null
          );
        },
        Y = C,
        X = R,
        ee = F,
        et = T,
        er = I,
        en = K,
        eo = Q,
        ei = z;
    },
    25991: (e, t, r) => {
      r.r(t),
        r.d(t, {
          _TypedDataEncoder: () => a.z,
          dnsEncode: () => o.Wh,
          ensNormalize: () => o.Q8,
          hashMessage: () => i.A,
          id: () => n.id,
          isValidName: () => o.uV,
          messagePrefix: () => i.o,
          namehash: () => o.kM,
        });
      var n = r(99764),
        o = r(27167),
        i = r(14408),
        a = r(92442);
    },
    40927: (e, t, r) => {
      r.r(t),
        r.d(t, {
          SupportedAlgorithm: () => o.q,
          computeHmac: () => n.L5,
          ripemd160: () => n.HE,
          sha256: () => n.sc,
          sha512: () => n.Zf,
        });
      var n = r(92921),
        o = r(23786);
    },
    56559: (e, t, r) => {
      r.d(t, { b: () => s });
      var n = r(7620),
        o = r(7156),
        i = r(54568),
        a = n.forwardRef((e, t) =>
          (0, i.jsx)(o.sG.label, {
            ...e,
            ref: t,
            onMouseDown: (t) => {
              var r;
              t.target.closest("button, input, select, textarea") ||
                (null == (r = e.onMouseDown) || r.call(e, t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault());
            },
          })
        );
      a.displayName = "Label";
      var s = a;
    },
    66733: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        o =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        i =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return o(t, e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatBytes32String =
          t.Utf8ErrorFuncs =
          t.toUtf8String =
          t.toUtf8CodePoints =
          t.toUtf8Bytes =
          t._toEscapedUtf8String =
          t.nameprep =
          t.hexDataSlice =
          t.hexDataLength =
          t.hexZeroPad =
          t.hexValue =
          t.hexStripZeros =
          t.hexConcat =
          t.isHexString =
          t.hexlify =
          t.base64 =
          t.base58 =
          t.TransactionDescription =
          t.LogDescription =
          t.Interface =
          t.SigningKey =
          t.HDNode =
          t.defaultPath =
          t.isBytesLike =
          t.isBytes =
          t.zeroPad =
          t.stripZeros =
          t.concat =
          t.arrayify =
          t.shallowCopy =
          t.resolveProperties =
          t.getStatic =
          t.defineReadOnly =
          t.deepCopy =
          t.checkProperties =
          t.poll =
          t.fetchJson =
          t._fetchData =
          t.RLP =
          t.Logger =
          t.checkResultErrors =
          t.FormatTypes =
          t.ParamType =
          t.FunctionFragment =
          t.EventFragment =
          t.ErrorFragment =
          t.ConstructorFragment =
          t.Fragment =
          t.defaultAbiCoder =
          t.AbiCoder =
            void 0),
        (t.Indexed =
          t.Utf8ErrorReason =
          t.UnicodeNormalizationForm =
          t.SupportedAlgorithm =
          t.mnemonicToSeed =
          t.isValidMnemonic =
          t.entropyToMnemonic =
          t.mnemonicToEntropy =
          t.getAccountPath =
          t.verifyTypedData =
          t.verifyMessage =
          t.recoverPublicKey =
          t.computePublicKey =
          t.recoverAddress =
          t.computeAddress =
          t.getJsonWalletAddress =
          t.TransactionTypes =
          t.serializeTransaction =
          t.parseTransaction =
          t.accessListify =
          t.joinSignature =
          t.splitSignature =
          t.soliditySha256 =
          t.solidityKeccak256 =
          t.solidityPack =
          t.shuffled =
          t.randomBytes =
          t.sha512 =
          t.sha256 =
          t.ripemd160 =
          t.keccak256 =
          t.computeHmac =
          t.commify =
          t.parseUnits =
          t.formatUnits =
          t.parseEther =
          t.formatEther =
          t.isAddress =
          t.getCreate2Address =
          t.getContractAddress =
          t.getIcapAddress =
          t.getAddress =
          t._TypedDataEncoder =
          t.id =
          t.isValidName =
          t.namehash =
          t.hashMessage =
          t.dnsEncode =
          t.parseBytes32String =
            void 0);
      var a = r(67627);
      Object.defineProperty(t, "AbiCoder", {
        enumerable: !0,
        get: function () {
          return a.AbiCoder;
        },
      }),
        Object.defineProperty(t, "checkResultErrors", {
          enumerable: !0,
          get: function () {
            return a.checkResultErrors;
          },
        }),
        Object.defineProperty(t, "ConstructorFragment", {
          enumerable: !0,
          get: function () {
            return a.ConstructorFragment;
          },
        }),
        Object.defineProperty(t, "defaultAbiCoder", {
          enumerable: !0,
          get: function () {
            return a.defaultAbiCoder;
          },
        }),
        Object.defineProperty(t, "ErrorFragment", {
          enumerable: !0,
          get: function () {
            return a.ErrorFragment;
          },
        }),
        Object.defineProperty(t, "EventFragment", {
          enumerable: !0,
          get: function () {
            return a.EventFragment;
          },
        }),
        Object.defineProperty(t, "FormatTypes", {
          enumerable: !0,
          get: function () {
            return a.FormatTypes;
          },
        }),
        Object.defineProperty(t, "Fragment", {
          enumerable: !0,
          get: function () {
            return a.Fragment;
          },
        }),
        Object.defineProperty(t, "FunctionFragment", {
          enumerable: !0,
          get: function () {
            return a.FunctionFragment;
          },
        }),
        Object.defineProperty(t, "Indexed", {
          enumerable: !0,
          get: function () {
            return a.Indexed;
          },
        }),
        Object.defineProperty(t, "Interface", {
          enumerable: !0,
          get: function () {
            return a.Interface;
          },
        }),
        Object.defineProperty(t, "LogDescription", {
          enumerable: !0,
          get: function () {
            return a.LogDescription;
          },
        }),
        Object.defineProperty(t, "ParamType", {
          enumerable: !0,
          get: function () {
            return a.ParamType;
          },
        }),
        Object.defineProperty(t, "TransactionDescription", {
          enumerable: !0,
          get: function () {
            return a.TransactionDescription;
          },
        });
      var s = r(13679);
      Object.defineProperty(t, "getAddress", {
        enumerable: !0,
        get: function () {
          return s.getAddress;
        },
      }),
        Object.defineProperty(t, "getCreate2Address", {
          enumerable: !0,
          get: function () {
            return s.getCreate2Address;
          },
        }),
        Object.defineProperty(t, "getContractAddress", {
          enumerable: !0,
          get: function () {
            return s.getContractAddress;
          },
        }),
        Object.defineProperty(t, "getIcapAddress", {
          enumerable: !0,
          get: function () {
            return s.getIcapAddress;
          },
        }),
        Object.defineProperty(t, "isAddress", {
          enumerable: !0,
          get: function () {
            return s.isAddress;
          },
        }),
        (t.base64 = i(r(47200)));
      var u = r(8898);
      Object.defineProperty(t, "base58", {
        enumerable: !0,
        get: function () {
          return u.Base58;
        },
      });
      var c = r(20037);
      Object.defineProperty(t, "arrayify", {
        enumerable: !0,
        get: function () {
          return c.arrayify;
        },
      }),
        Object.defineProperty(t, "concat", {
          enumerable: !0,
          get: function () {
            return c.concat;
          },
        }),
        Object.defineProperty(t, "hexConcat", {
          enumerable: !0,
          get: function () {
            return c.hexConcat;
          },
        }),
        Object.defineProperty(t, "hexDataSlice", {
          enumerable: !0,
          get: function () {
            return c.hexDataSlice;
          },
        }),
        Object.defineProperty(t, "hexDataLength", {
          enumerable: !0,
          get: function () {
            return c.hexDataLength;
          },
        }),
        Object.defineProperty(t, "hexlify", {
          enumerable: !0,
          get: function () {
            return c.hexlify;
          },
        }),
        Object.defineProperty(t, "hexStripZeros", {
          enumerable: !0,
          get: function () {
            return c.hexStripZeros;
          },
        }),
        Object.defineProperty(t, "hexValue", {
          enumerable: !0,
          get: function () {
            return c.hexValue;
          },
        }),
        Object.defineProperty(t, "hexZeroPad", {
          enumerable: !0,
          get: function () {
            return c.hexZeroPad;
          },
        }),
        Object.defineProperty(t, "isBytes", {
          enumerable: !0,
          get: function () {
            return c.isBytes;
          },
        }),
        Object.defineProperty(t, "isBytesLike", {
          enumerable: !0,
          get: function () {
            return c.isBytesLike;
          },
        }),
        Object.defineProperty(t, "isHexString", {
          enumerable: !0,
          get: function () {
            return c.isHexString;
          },
        }),
        Object.defineProperty(t, "joinSignature", {
          enumerable: !0,
          get: function () {
            return c.joinSignature;
          },
        }),
        Object.defineProperty(t, "zeroPad", {
          enumerable: !0,
          get: function () {
            return c.zeroPad;
          },
        }),
        Object.defineProperty(t, "splitSignature", {
          enumerable: !0,
          get: function () {
            return c.splitSignature;
          },
        }),
        Object.defineProperty(t, "stripZeros", {
          enumerable: !0,
          get: function () {
            return c.stripZeros;
          },
        });
      var l = r(25991);
      Object.defineProperty(t, "_TypedDataEncoder", {
        enumerable: !0,
        get: function () {
          return l._TypedDataEncoder;
        },
      }),
        Object.defineProperty(t, "dnsEncode", {
          enumerable: !0,
          get: function () {
            return l.dnsEncode;
          },
        }),
        Object.defineProperty(t, "hashMessage", {
          enumerable: !0,
          get: function () {
            return l.hashMessage;
          },
        }),
        Object.defineProperty(t, "id", {
          enumerable: !0,
          get: function () {
            return l.id;
          },
        }),
        Object.defineProperty(t, "isValidName", {
          enumerable: !0,
          get: function () {
            return l.isValidName;
          },
        }),
        Object.defineProperty(t, "namehash", {
          enumerable: !0,
          get: function () {
            return l.namehash;
          },
        });
      var d = r(40341);
      Object.defineProperty(t, "defaultPath", {
        enumerable: !0,
        get: function () {
          return d.defaultPath;
        },
      }),
        Object.defineProperty(t, "entropyToMnemonic", {
          enumerable: !0,
          get: function () {
            return d.entropyToMnemonic;
          },
        }),
        Object.defineProperty(t, "getAccountPath", {
          enumerable: !0,
          get: function () {
            return d.getAccountPath;
          },
        }),
        Object.defineProperty(t, "HDNode", {
          enumerable: !0,
          get: function () {
            return d.HDNode;
          },
        }),
        Object.defineProperty(t, "isValidMnemonic", {
          enumerable: !0,
          get: function () {
            return d.isValidMnemonic;
          },
        }),
        Object.defineProperty(t, "mnemonicToEntropy", {
          enumerable: !0,
          get: function () {
            return d.mnemonicToEntropy;
          },
        }),
        Object.defineProperty(t, "mnemonicToSeed", {
          enumerable: !0,
          get: function () {
            return d.mnemonicToSeed;
          },
        });
      var f = r(25667);
      Object.defineProperty(t, "getJsonWalletAddress", {
        enumerable: !0,
        get: function () {
          return f.getJsonWalletAddress;
        },
      });
      var p = r(40138);
      Object.defineProperty(t, "keccak256", {
        enumerable: !0,
        get: function () {
          return p.keccak256;
        },
      });
      var b = r(6865);
      Object.defineProperty(t, "Logger", {
        enumerable: !0,
        get: function () {
          return b.Logger;
        },
      });
      var g = r(40927);
      Object.defineProperty(t, "computeHmac", {
        enumerable: !0,
        get: function () {
          return g.computeHmac;
        },
      }),
        Object.defineProperty(t, "ripemd160", {
          enumerable: !0,
          get: function () {
            return g.ripemd160;
          },
        }),
        Object.defineProperty(t, "sha256", {
          enumerable: !0,
          get: function () {
            return g.sha256;
          },
        }),
        Object.defineProperty(t, "sha512", {
          enumerable: !0,
          get: function () {
            return g.sha512;
          },
        });
      var m = r(14546);
      Object.defineProperty(t, "solidityKeccak256", {
        enumerable: !0,
        get: function () {
          return m.keccak256;
        },
      }),
        Object.defineProperty(t, "solidityPack", {
          enumerable: !0,
          get: function () {
            return m.pack;
          },
        }),
        Object.defineProperty(t, "soliditySha256", {
          enumerable: !0,
          get: function () {
            return m.sha256;
          },
        });
      var y = r(10408);
      Object.defineProperty(t, "randomBytes", {
        enumerable: !0,
        get: function () {
          return y.randomBytes;
        },
      }),
        Object.defineProperty(t, "shuffled", {
          enumerable: !0,
          get: function () {
            return y.shuffled;
          },
        });
      var h = r(71182);
      Object.defineProperty(t, "checkProperties", {
        enumerable: !0,
        get: function () {
          return h.checkProperties;
        },
      }),
        Object.defineProperty(t, "deepCopy", {
          enumerable: !0,
          get: function () {
            return h.deepCopy;
          },
        }),
        Object.defineProperty(t, "defineReadOnly", {
          enumerable: !0,
          get: function () {
            return h.defineReadOnly;
          },
        }),
        Object.defineProperty(t, "getStatic", {
          enumerable: !0,
          get: function () {
            return h.getStatic;
          },
        }),
        Object.defineProperty(t, "resolveProperties", {
          enumerable: !0,
          get: function () {
            return h.resolveProperties;
          },
        }),
        Object.defineProperty(t, "shallowCopy", {
          enumerable: !0,
          get: function () {
            return h.shallowCopy;
          },
        }),
        (t.RLP = i(r(16421)));
      var P = r(86166);
      Object.defineProperty(t, "computePublicKey", {
        enumerable: !0,
        get: function () {
          return P.computePublicKey;
        },
      }),
        Object.defineProperty(t, "recoverPublicKey", {
          enumerable: !0,
          get: function () {
            return P.recoverPublicKey;
          },
        }),
        Object.defineProperty(t, "SigningKey", {
          enumerable: !0,
          get: function () {
            return P.SigningKey;
          },
        });
      var v = r(84899);
      Object.defineProperty(t, "formatBytes32String", {
        enumerable: !0,
        get: function () {
          return v.formatBytes32String;
        },
      }),
        Object.defineProperty(t, "nameprep", {
          enumerable: !0,
          get: function () {
            return v.nameprep;
          },
        }),
        Object.defineProperty(t, "parseBytes32String", {
          enumerable: !0,
          get: function () {
            return v.parseBytes32String;
          },
        }),
        Object.defineProperty(t, "_toEscapedUtf8String", {
          enumerable: !0,
          get: function () {
            return v._toEscapedUtf8String;
          },
        }),
        Object.defineProperty(t, "toUtf8Bytes", {
          enumerable: !0,
          get: function () {
            return v.toUtf8Bytes;
          },
        }),
        Object.defineProperty(t, "toUtf8CodePoints", {
          enumerable: !0,
          get: function () {
            return v.toUtf8CodePoints;
          },
        }),
        Object.defineProperty(t, "toUtf8String", {
          enumerable: !0,
          get: function () {
            return v.toUtf8String;
          },
        }),
        Object.defineProperty(t, "Utf8ErrorFuncs", {
          enumerable: !0,
          get: function () {
            return v.Utf8ErrorFuncs;
          },
        });
      var O = r(34062);
      Object.defineProperty(t, "accessListify", {
        enumerable: !0,
        get: function () {
          return O.accessListify;
        },
      }),
        Object.defineProperty(t, "computeAddress", {
          enumerable: !0,
          get: function () {
            return O.computeAddress;
          },
        }),
        Object.defineProperty(t, "parseTransaction", {
          enumerable: !0,
          get: function () {
            return O.parse;
          },
        }),
        Object.defineProperty(t, "recoverAddress", {
          enumerable: !0,
          get: function () {
            return O.recoverAddress;
          },
        }),
        Object.defineProperty(t, "serializeTransaction", {
          enumerable: !0,
          get: function () {
            return O.serialize;
          },
        }),
        Object.defineProperty(t, "TransactionTypes", {
          enumerable: !0,
          get: function () {
            return O.TransactionTypes;
          },
        });
      var j = r(56005);
      Object.defineProperty(t, "commify", {
        enumerable: !0,
        get: function () {
          return j.commify;
        },
      }),
        Object.defineProperty(t, "formatEther", {
          enumerable: !0,
          get: function () {
            return j.formatEther;
          },
        }),
        Object.defineProperty(t, "parseEther", {
          enumerable: !0,
          get: function () {
            return j.parseEther;
          },
        }),
        Object.defineProperty(t, "formatUnits", {
          enumerable: !0,
          get: function () {
            return j.formatUnits;
          },
        }),
        Object.defineProperty(t, "parseUnits", {
          enumerable: !0,
          get: function () {
            return j.parseUnits;
          },
        });
      var E = r(99186);
      Object.defineProperty(t, "verifyMessage", {
        enumerable: !0,
        get: function () {
          return E.verifyMessage;
        },
      }),
        Object.defineProperty(t, "verifyTypedData", {
          enumerable: !0,
          get: function () {
            return E.verifyTypedData;
          },
        });
      var C = r(84205);
      Object.defineProperty(t, "_fetchData", {
        enumerable: !0,
        get: function () {
          return C._fetchData;
        },
      }),
        Object.defineProperty(t, "fetchJson", {
          enumerable: !0,
          get: function () {
            return C.fetchJson;
          },
        }),
        Object.defineProperty(t, "poll", {
          enumerable: !0,
          get: function () {
            return C.poll;
          },
        });
      var D = r(40927);
      Object.defineProperty(t, "SupportedAlgorithm", {
        enumerable: !0,
        get: function () {
          return D.SupportedAlgorithm;
        },
      });
      var R = r(84899);
      Object.defineProperty(t, "UnicodeNormalizationForm", {
        enumerable: !0,
        get: function () {
          return R.UnicodeNormalizationForm;
        },
      }),
        Object.defineProperty(t, "Utf8ErrorReason", {
          enumerable: !0,
          get: function () {
            return R.Utf8ErrorReason;
          },
        });
    },
    67627: (e, t, r) => {
      r.r(t),
        r.d(t, {
          AbiCoder: () => o.y,
          ConstructorFragment: () => n.Pw,
          ErrorFragment: () => n.bp,
          EventFragment: () => n.Zp,
          FormatTypes: () => n.$o,
          Fragment: () => n.FK,
          FunctionFragment: () => n.hc,
          Indexed: () => i.wu,
          Interface: () => i.KA,
          LogDescription: () => i.FW,
          ParamType: () => n.aX,
          TransactionDescription: () => i.dJ,
          checkResultErrors: () => a.$v,
          defaultAbiCoder: () => o.D,
        });
      var n = r(42726),
        o = r(44203),
        i = r(75644),
        a = r(73450);
    },
    76640: (e, t, r) => {
      r.d(t, { K: () => n });
      function n(e, t = {}) {
        try {
          return e.getClient(t);
        } catch {
          return;
        }
      }
    },
    84007: (e, t, r) => {
      r.d(t, { E: () => g });
      var n = r(7620),
        o = r(60494),
        i = r(28592),
        a = r(72327),
        s = r(7703);
      function u(e, t) {
        let r = new Set(t);
        return e.filter((e) => !r.has(e));
      }
      var c = class extends a.Q {
          #e;
          #t;
          #r;
          #n;
          #o;
          #i;
          #a;
          #s;
          #u = [];
          constructor(e, t, r) {
            super(),
              (this.#e = e),
              (this.#n = r),
              (this.#r = []),
              (this.#o = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#o.forEach((e) => {
                e.subscribe((t) => {
                  this.#c(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#o.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t) {
            (this.#r = e),
              (this.#n = t),
              o.jG.batch(() => {
                let e = this.#o,
                  t = this.#l(this.#r);
                (this.#u = t),
                  t.forEach((e) =>
                    e.observer.setOptions(e.defaultedQueryOptions)
                  );
                let r = t.map((e) => e.observer),
                  n = r.map((e) => e.getCurrentResult()),
                  o = r.some((t, r) => t !== e[r]);
                (e.length !== r.length || o) &&
                  ((this.#o = r),
                  (this.#t = n),
                  this.hasListeners() &&
                    (u(e, r).forEach((e) => {
                      e.destroy();
                    }),
                    u(r, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#c(e, t);
                      });
                    }),
                    this.#d()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#o.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#o;
          }
          getOptimisticResult(e, t) {
            let r = this.#l(e),
              n = r.map((e) =>
                e.observer.getOptimisticResult(e.defaultedQueryOptions)
              );
            return [n, (e) => this.#f(e ?? n, t), () => this.#p(n, r)];
          }
          #p(e, t) {
            return t.map((r, n) => {
              let o = e[n];
              return r.defaultedQueryOptions.notifyOnChangeProps
                ? o
                : r.observer.trackResult(o, (e) => {
                    t.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #f(e, t) {
            return t
              ? ((this.#i && this.#t === this.#s && t === this.#a) ||
                  ((this.#a = t),
                  (this.#s = this.#t),
                  (this.#i = (0, s.BH)(this.#i, t(e)))),
                this.#i)
              : e;
          }
          #l(e) {
            let t = new Map(this.#o.map((e) => [e.options.queryHash, e])),
              r = [];
            return (
              e.forEach((e) => {
                let n = this.#e.defaultQueryOptions(e),
                  o = t.get(n.queryHash);
                o
                  ? r.push({ defaultedQueryOptions: n, observer: o })
                  : r.push({
                      defaultedQueryOptions: n,
                      observer: new i.$(this.#e, n),
                    });
              }),
              r
            );
          }
          #c(e, t) {
            let r = this.#o.indexOf(e);
            -1 !== r &&
              ((this.#t = (function (e, t, r) {
                let n = e.slice(0);
                return (n[t] = r), n;
              })(this.#t, r, t)),
              this.#d());
          }
          #d() {
            if (this.hasListeners()) {
              let e = this.#i,
                t = this.#p(this.#t, this.#u);
              e !== this.#f(t, this.#n?.combine) &&
                o.jG.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        l = r(87606),
        d = r(26388),
        f = r(24199),
        p = r(3969),
        b = r(33444);
      function g(e, t) {
        let { queries: r, ...a } = e,
          u = (0, l.jE)(t),
          g = (0, d.w)(),
          m = (0, f.h)(),
          y = n.useMemo(
            () =>
              r.map((e) => {
                let t = u.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = g ? "isRestoring" : "optimistic"), t
                );
              }),
            [r, u, g]
          );
        y.forEach((e) => {
          (0, b.jv)(e), (0, p.LJ)(e, m);
        }),
          (0, p.wZ)(m);
        let [h] = n.useState(() => new c(u, y, a)),
          [P, v, O] = h.getOptimisticResult(y, a.combine),
          j = !g && !1 !== a.subscribed;
        n.useSyncExternalStore(
          n.useCallback(
            (e) => (j ? h.subscribe(o.jG.batchCalls(e)) : s.lQ),
            [h, j]
          ),
          () => h.getCurrentResult(),
          () => h.getCurrentResult()
        ),
          n.useEffect(() => {
            h.setQueries(y, a);
          }, [y, a, h]);
        let E = P.some((e, t) => (0, b.EU)(y[t], e))
          ? P.flatMap((e, t) => {
              let r = y[t];
              if (r) {
                let t = new i.$(u, r);
                if ((0, b.EU)(r, e)) return (0, b.iL)(r, t, m);
                (0, b.nE)(e, g) && (0, b.iL)(r, t, m);
              }
              return [];
            })
          : [];
        if (E.length > 0) throw Promise.all(E);
        let C = P.find((e, t) => {
          let r = y[t];
          return (
            r &&
            (0, p.$1)({
              result: e,
              errorResetBoundary: m,
              throwOnError: r.throwOnError,
              query: u.getQueryCache().get(r.queryHash),
              suspense: r.suspense,
            })
          );
        });
        if (null == C ? void 0 : C.error) throw C.error;
        return v(O());
      }
    },
    84322: (e, t, r) => {
      r.d(t, { E: () => c });
      var n = r(19342),
        o = r(10250),
        i = r(2780),
        a = r(39658),
        s = r(99371),
        u = r(9953);
      async function c(e, t) {
        let {
          abi: r,
          account: c = e.account,
          address: l,
          args: d,
          dataSuffix: f,
          functionName: p,
          ...b
        } = t;
        if (void 0 === c)
          throw new o.T({ docsPath: "/docs/contract/writeContract" });
        let g = c ? (0, n.J)(c) : null,
          m = (0, i.p)({ abi: r, args: d, functionName: p });
        try {
          return await (0, s.T)(
            e,
            u.v,
            "sendTransaction"
          )({
            data: `${m}${f ? f.replace("0x", "") : ""}`,
            to: l,
            account: g,
            ...b,
          });
        } catch (e) {
          throw (0, a.j)(e, {
            abi: r,
            address: l,
            args: d,
            docsPath: "/docs/contract/writeContract",
            functionName: p,
            sender: g?.address,
          });
        }
      }
    },
    84899: (e, t, r) => {
      r.r(t),
        r.d(t, {
          UnicodeNormalizationForm: () => i.dz,
          Utf8ErrorFuncs: () => i.d5,
          Utf8ErrorReason: () => i._E,
          _toEscapedUtf8String: () => i.Wj,
          formatBytes32String: () => n.R,
          nameprep: () => o.j9,
          parseBytes32String: () => n.V,
          toUtf8Bytes: () => i.YW,
          toUtf8CodePoints: () => i.dg,
          toUtf8String: () => i._v,
        });
      var n = r(22437),
        o = r(69625),
        i = r(19744);
    },
  },
]);
