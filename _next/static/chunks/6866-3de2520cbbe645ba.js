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
      (e._sentryDebugIds[t] = "68eb5b07-5503-40ef-9583-30352769a309"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-68eb5b07-5503-40ef-9583-30352769a309"));
  })();
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6866],
  {
    583: (e, t, r) => {
      "use strict";
      r.d(t, { l: () => p });
      var n = r(87606),
        o = r(42588),
        i = r(43339);
      async function l(e, t = {}) {
        let { chainId: r, ...n } = t,
          a = e.getClient({ chainId: r }),
          s = (0, i.T)(a, o.g, "getBlock");
        return { ...(await s(n)), chainId: a.chain.id };
      }
      var a = r(79261),
        s = r(13093),
        c = r(92797),
        u = r(29344),
        d = r(5794),
        f = r(7620);
      function p() {
        var e, t;
        let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: o = {}, watch: p } = r,
          m = (0, u.U)(r),
          g = (0, n.jE)(),
          b = (0, c.i)({ config: m }),
          y = null != (e = r.chainId) ? e : b,
          v = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { scopeKey: r, ...n } = t[1];
                return (await l(e, n)) ?? null;
              },
              queryKey: (function (e = {}) {
                return ["block", (0, a.xO)(e)];
              })(t),
            };
          })(m, { ...r, chainId: y }),
          h = !!(null == (t = o.enabled) || t);
        return (
          !(function () {
            var e;
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              { enabled: r = !0, onBlock: n, config: o, ...l } = t,
              a = (0, u.U)(t),
              s = (0, c.i)({ config: a }),
              p = null != (e = t.chainId) ? e : s;
            (0, f.useEffect)(() => {
              if (r && n)
                return (function (e, t) {
                  let r,
                    n,
                    {
                      syncConnectedChain: o = e._internal.syncConnectedChain,
                      ...l
                    } = t,
                    a = (t) => {
                      r && r();
                      let n = e.getClient({ chainId: t });
                      return (r = (0, i.T)(n, d.O, "watchBlocks")(l));
                    },
                    s = a(t.chainId);
                  return (
                    o &&
                      !t.chainId &&
                      (n = e.subscribe(
                        ({ chainId: e }) => e,
                        async (e) => a(e)
                      )),
                    () => {
                      s?.(), n?.();
                    }
                  );
                })(a, { ...l, chainId: p, onBlock: n });
            }, [
              p,
              a,
              r,
              n,
              l.blockTag,
              l.emitMissed,
              l.emitOnBegin,
              l.includeTransactions,
              l.onError,
              l.poll,
              l.pollingInterval,
              l.syncConnectedChain,
            ]);
          })({
            ...{
              config: r.config,
              chainId: r.chainId,
              ...("object" == typeof p ? p : {}),
            },
            enabled: !!(h && ("object" == typeof p ? p.enabled : p)),
            onBlock(e) {
              g.setQueryData(v.queryKey, e);
            },
          }),
          (0, s.IT)({ ...o, ...v, enabled: h })
        );
      }
    },
    5794: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => s });
      var n = r(99371),
        o = r(42217),
        i = r(61378),
        l = r(85552),
        a = r(42588);
      function s(
        e,
        {
          blockTag: t = e.experimental_blockTag ?? "latest",
          emitMissed: r = !1,
          emitOnBegin: s = !1,
          onBlock: c,
          onError: u,
          includeTransactions: d,
          poll: f,
          pollingInterval: p = e.pollingInterval,
        }
      ) {
        let m,
          g,
          b,
          y,
          v =
            void 0 !== f
              ? f
              : "webSocket" !== e.transport.type &&
                "ipc" !== e.transport.type &&
                ("fallback" !== e.transport.type ||
                  ("webSocket" !== e.transport.transports[0].config.type &&
                    "ipc" !== e.transport.transports[0].config.type)),
          h = d ?? !1;
        return v
          ? (() => {
              let d = (0, l.A)(["watchBlocks", e.uid, t, r, s, h, p]);
              return (0, o.lB)(d, { onBlock: c, onError: u }, (o) =>
                (0, i.w)(
                  async () => {
                    try {
                      let i = await (0, n.T)(
                        e,
                        a.g,
                        "getBlock"
                      )({ blockTag: t, includeTransactions: h });
                      if (null !== i.number && m?.number != null) {
                        if (i.number === m.number) return;
                        if (i.number - m.number > 1 && r)
                          for (let t = m?.number + 1n; t < i.number; t++) {
                            let r = await (0, n.T)(
                              e,
                              a.g,
                              "getBlock"
                            )({ blockNumber: t, includeTransactions: h });
                            o.onBlock(r, m), (m = r);
                          }
                      }
                      (m?.number == null ||
                        ("pending" === t && i?.number == null) ||
                        (null !== i.number && i.number > m.number)) &&
                        (o.onBlock(i, m), (m = i));
                    } catch (e) {
                      o.onError?.(e);
                    }
                  },
                  { emitOnBegin: s, interval: p }
                )
              );
            })()
          : ((g = !0),
            (b = !0),
            (y = () => (g = !1)),
            (async () => {
              try {
                s &&
                  (0, n.T)(
                    e,
                    a.g,
                    "getBlock"
                  )({ blockTag: t, includeTransactions: h })
                    .then((e) => {
                      g && b && (c(e, void 0), (b = !1));
                    })
                    .catch(u);
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
                  { unsubscribe: o } = await r.subscribe({
                    params: ["newHeads"],
                    async onData(t) {
                      if (!g) return;
                      let r = await (0, n.T)(
                        e,
                        a.g,
                        "getBlock"
                      )({
                        blockNumber: t.result?.number,
                        includeTransactions: h,
                      }).catch(() => {});
                      g && (c(r, m), (b = !1), (m = r));
                    },
                    onError(e) {
                      u?.(e);
                    },
                  });
                (y = o), g || y();
              } catch (e) {
                u?.(e);
              }
            })(),
            () => y());
      }
    },
    11376: (e, t, r) => {
      "use strict";
      r.d(t, { W: () => l });
      var n = r(7620),
        o = r(68499);
      let i = { some: 0, all: 1 };
      function l(
        e,
        { root: t, margin: r, amount: a, once: s = !1, initial: c = !1 } = {}
      ) {
        let [u, d] = (0, n.useState)(c);
        return (
          (0, n.useEffect)(() => {
            if (!e.current || (s && u)) return;
            let n = { root: (t && t.current) || void 0, margin: r, amount: a };
            return (function (
              e,
              t,
              { root: r, margin: n, amount: l = "some" } = {}
            ) {
              let a = (0, o.K)(e),
                s = new WeakMap(),
                c = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let r = s.get(e.target);
                      if (!!r !== e.isIntersecting)
                        if (e.isIntersecting) {
                          let r = t(e.target, e);
                          "function" == typeof r
                            ? s.set(e.target, r)
                            : c.unobserve(e.target);
                        } else
                          "function" == typeof r && (r(e), s.delete(e.target));
                    });
                  },
                  {
                    root: r,
                    rootMargin: n,
                    threshold: "number" == typeof l ? l : i[l],
                  }
                );
              return a.forEach((e) => c.observe(e)), () => c.disconnect();
            })(e.current, () => (d(!0), s ? void 0 : () => d(!1)), n);
          }, [t, e, r, s, a]),
          u
        );
      }
    },
    18208: (e, t, r) => {
      "use strict";
      r.d(t, { g: () => s });
      var n = r(76099),
        o = r(79261),
        i = r(13093),
        l = r(92797),
        a = r(29344);
      function s() {
        var e, t;
        let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: s, query: c = {} } = r,
          u = (0, a.U)(r),
          d = (0, l.i)({ config: u }),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: r }) {
                let { hash: o, ...i } = r[1];
                if (!o) throw Error("hash is required");
                return (0, n.n)(e, { ...i, onReplaced: t.onReplaced, hash: o });
              },
              queryKey: (function (e = {}) {
                let { onReplaced: t, ...r } = e;
                return ["waitForTransactionReceipt", (0, o.xO)(r)];
              })(t),
            };
          })(u, { ...r, chainId: null != (e = r.chainId) ? e : d }),
          p = !!(s && (null == (t = c.enabled) || t));
        return (0, i.IT)({ ...c, ...f, enabled: p });
      }
    },
    22702: (e, t, r) => {
      "use strict";
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
    23180: (e, t, r) => {
      "use strict";
      r.d(t, { C1: () => T, bL: () => x });
      var n = r(7620),
        o = r(49640),
        i = r(80482),
        l = r(29254),
        a = r(87076),
        s = r(22702),
        c = r(90210),
        u = r(18400),
        d = r(7156),
        f = r(54568),
        p = "Checkbox",
        [m, g] = (0, i.A)(p),
        [b, y] = m(p);
      function v(e) {
        let {
            __scopeCheckbox: t,
            checked: r,
            children: o,
            defaultChecked: i,
            disabled: l,
            form: s,
            name: c,
            onCheckedChange: u,
            required: d,
            value: m = "on",
            internal_do_not_use_render: g,
          } = e,
          [y, v] = (0, a.i)({
            prop: r,
            defaultProp: null != i && i,
            onChange: u,
            caller: p,
          }),
          [h, w] = n.useState(null),
          [x, k] = n.useState(null),
          T = n.useRef(!1),
          E = !h || !!s || !!h.closest("form"),
          D = {
            checked: y,
            disabled: l,
            setChecked: v,
            control: h,
            setControl: w,
            name: c,
            form: s,
            value: m,
            hasConsumerStoppedPropagationRef: T,
            required: d,
            defaultChecked: !j(i) && i,
            isFormControl: E,
            bubbleInput: x,
            setBubbleInput: k,
          };
        return (0, f.jsx)(b, {
          scope: t,
          ...D,
          children: "function" == typeof g ? g(D) : o,
        });
      }
      var h = "CheckboxTrigger",
        w = n.forwardRef((e, t) => {
          let { __scopeCheckbox: r, onKeyDown: i, onClick: a, ...s } = e,
            {
              control: c,
              value: u,
              disabled: p,
              checked: m,
              required: g,
              setControl: b,
              setChecked: v,
              hasConsumerStoppedPropagationRef: w,
              isFormControl: x,
              bubbleInput: k,
            } = y(h, r),
            T = (0, o.s)(t, b),
            E = n.useRef(m);
          return (
            n.useEffect(() => {
              let e = null == c ? void 0 : c.form;
              if (e) {
                let t = () => v(E.current);
                return (
                  e.addEventListener("reset", t),
                  () => e.removeEventListener("reset", t)
                );
              }
            }, [c, v]),
            (0, f.jsx)(d.sG.button, {
              type: "button",
              role: "checkbox",
              "aria-checked": j(m) ? "mixed" : m,
              "aria-required": g,
              "data-state": C(m),
              "data-disabled": p ? "" : void 0,
              disabled: p,
              value: u,
              ...s,
              ref: T,
              onKeyDown: (0, l.m)(i, (e) => {
                "Enter" === e.key && e.preventDefault();
              }),
              onClick: (0, l.m)(a, (e) => {
                v((e) => !!j(e) || !e),
                  k &&
                    x &&
                    ((w.current = e.isPropagationStopped()),
                    w.current || e.stopPropagation());
              }),
            })
          );
        });
      w.displayName = h;
      var x = n.forwardRef((e, t) => {
        let {
          __scopeCheckbox: r,
          name: n,
          checked: o,
          defaultChecked: i,
          required: l,
          disabled: a,
          value: s,
          onCheckedChange: c,
          form: u,
          ...d
        } = e;
        return (0, f.jsx)(v, {
          __scopeCheckbox: r,
          checked: o,
          defaultChecked: i,
          disabled: a,
          required: l,
          onCheckedChange: c,
          name: n,
          form: u,
          value: s,
          internal_do_not_use_render: (e) => {
            let { isFormControl: n } = e;
            return (0, f.jsxs)(f.Fragment, {
              children: [
                (0, f.jsx)(w, { ...d, ref: t, __scopeCheckbox: r }),
                n && (0, f.jsx)(D, { __scopeCheckbox: r }),
              ],
            });
          },
        });
      });
      x.displayName = p;
      var k = "CheckboxIndicator",
        T = n.forwardRef((e, t) => {
          let { __scopeCheckbox: r, forceMount: n, ...o } = e,
            i = y(k, r);
          return (0, f.jsx)(u.C, {
            present: n || j(i.checked) || !0 === i.checked,
            children: (0, f.jsx)(d.sG.span, {
              "data-state": C(i.checked),
              "data-disabled": i.disabled ? "" : void 0,
              ...o,
              ref: t,
              style: { pointerEvents: "none", ...e.style },
            }),
          });
        });
      T.displayName = k;
      var E = "CheckboxBubbleInput",
        D = n.forwardRef((e, t) => {
          let { __scopeCheckbox: r, ...i } = e,
            {
              control: l,
              hasConsumerStoppedPropagationRef: a,
              checked: u,
              defaultChecked: p,
              required: m,
              disabled: g,
              name: b,
              value: v,
              form: h,
              bubbleInput: w,
              setBubbleInput: x,
            } = y(E, r),
            k = (0, o.s)(t, x),
            T = (0, s.Z)(u),
            D = (0, c.X)(l);
          n.useEffect(() => {
            if (!w) return;
            let e = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "checked"
              ).set,
              t = !a.current;
            if (T !== u && e) {
              let r = new Event("click", { bubbles: t });
              (w.indeterminate = j(u)),
                e.call(w, !j(u) && u),
                w.dispatchEvent(r);
            }
          }, [w, T, u, a]);
          let C = n.useRef(!j(u) && u);
          return (0, f.jsx)(d.sG.input, {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: null != p ? p : C.current,
            required: m,
            disabled: g,
            name: b,
            value: v,
            form: h,
            ...i,
            tabIndex: -1,
            ref: k,
            style: {
              ...i.style,
              ...D,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
              transform: "translateX(-100%)",
            },
          });
        });
      function j(e) {
        return "indeterminate" === e;
      }
      function C(e) {
        return j(e) ? "indeterminate" : e ? "checked" : "unchecked";
      }
      D.displayName = E;
    },
    25173: (e, t, r) => {
      "use strict";
      r.d(t, {
        UC: () => er,
        VY: () => eo,
        ZL: () => ee,
        bL: () => Y,
        bm: () => ei,
        hE: () => en,
        hJ: () => et,
        l9: () => $,
      });
      var n = r(7620),
        o = r(29254),
        i = r(49640),
        l = r(80482),
        a = r(60728),
        s = r(87076),
        c = r(82491),
        u = r(38552),
        d = r(93343),
        f = r(18400),
        p = r(7156),
        m = r(17848),
        g = r(23855),
        b = r(23027),
        y = r(79649),
        v = r(54568),
        h = "Dialog",
        [w, x] = (0, l.A)(h),
        [k, T] = w(h),
        E = (e) => {
          let {
              __scopeDialog: t,
              children: r,
              open: o,
              defaultOpen: i,
              onOpenChange: l,
              modal: c = !0,
            } = e,
            u = n.useRef(null),
            d = n.useRef(null),
            [f, p] = (0, s.i)({
              prop: o,
              defaultProp: null != i && i,
              onChange: l,
              caller: h,
            });
          return (0, v.jsx)(k, {
            scope: t,
            triggerRef: u,
            contentRef: d,
            contentId: (0, a.B)(),
            titleId: (0, a.B)(),
            descriptionId: (0, a.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: n.useCallback(() => p((e) => !e), [p]),
            modal: c,
            children: r,
          });
        };
      E.displayName = h;
      var D = "DialogTrigger",
        j = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            l = T(D, r),
            a = (0, i.s)(t, l.triggerRef);
          return (0, v.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l.open,
            "aria-controls": l.contentId,
            "data-state": H(l.open),
            ...n,
            ref: a,
            onClick: (0, o.m)(e.onClick, l.onOpenToggle),
          });
        });
      j.displayName = D;
      var C = "DialogPortal",
        [I, M] = w(C, { forceMount: void 0 }),
        R = (e) => {
          let {
              __scopeDialog: t,
              forceMount: r,
              children: o,
              container: i,
            } = e,
            l = T(C, t);
          return (0, v.jsx)(I, {
            scope: t,
            forceMount: r,
            children: n.Children.map(o, (e) =>
              (0, v.jsx)(f.C, {
                present: r || l.open,
                children: (0, v.jsx)(d.Z, {
                  asChild: !0,
                  container: i,
                  children: e,
                }),
              })
            ),
          });
        };
      R.displayName = C;
      var F = "DialogOverlay",
        O = n.forwardRef((e, t) => {
          let r = M(F, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...o } = e,
            i = T(F, e.__scopeDialog);
          return i.modal
            ? (0, v.jsx)(f.C, {
                present: n || i.open,
                children: (0, v.jsx)(N, { ...o, ref: t }),
              })
            : null;
        });
      O.displayName = F;
      var S = (0, y.TL)("DialogOverlay.RemoveScroll"),
        N = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = T(F, r);
          return (0, v.jsx)(g.A, {
            as: S,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, v.jsx)(p.sG.div, {
              "data-state": H(o.open),
              ...n,
              ref: t,
              style: { pointerEvents: "auto", ...n.style },
            }),
          });
        }),
        _ = "DialogContent",
        P = n.forwardRef((e, t) => {
          let r = M(_, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...o } = e,
            i = T(_, e.__scopeDialog);
          return (0, v.jsx)(f.C, {
            present: n || i.open,
            children: i.modal
              ? (0, v.jsx)(B, { ...o, ref: t })
              : (0, v.jsx)(q, { ...o, ref: t }),
          });
        });
      P.displayName = _;
      var B = n.forwardRef((e, t) => {
          let r = T(_, e.__scopeDialog),
            l = n.useRef(null),
            a = (0, i.s)(t, r.contentRef, l);
          return (
            n.useEffect(() => {
              let e = l.current;
              if (e) return (0, b.Eq)(e);
            }, []),
            (0, v.jsx)(A, {
              ...e,
              ref: a,
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
        q = n.forwardRef((e, t) => {
          let r = T(_, e.__scopeDialog),
            o = n.useRef(!1),
            i = n.useRef(!1);
          return (0, v.jsx)(A, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var n, l;
              null == (n = e.onCloseAutoFocus) || n.call(e, t),
                t.defaultPrevented ||
                  (o.current || null == (l = r.triggerRef.current) || l.focus(),
                  t.preventDefault()),
                (o.current = !1),
                (i.current = !1);
            },
            onInteractOutside: (t) => {
              var n, l;
              null == (n = e.onInteractOutside) || n.call(e, t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  "pointerdown" === t.detail.originalEvent.type &&
                    (i.current = !0));
              let a = t.target;
              (null == (l = r.triggerRef.current) ? void 0 : l.contains(a)) &&
                t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  i.current &&
                  t.preventDefault();
            },
          });
        }),
        A = n.forwardRef((e, t) => {
          let {
              __scopeDialog: r,
              trapFocus: o,
              onOpenAutoFocus: l,
              onCloseAutoFocus: a,
              ...s
            } = e,
            d = T(_, r),
            f = n.useRef(null),
            p = (0, i.s)(t, f);
          return (
            (0, m.Oh)(),
            (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsx)(u.n, {
                  asChild: !0,
                  loop: !0,
                  trapped: o,
                  onMountAutoFocus: l,
                  onUnmountAutoFocus: a,
                  children: (0, v.jsx)(c.qW, {
                    role: "dialog",
                    id: d.contentId,
                    "aria-describedby": d.descriptionId,
                    "aria-labelledby": d.titleId,
                    "data-state": H(d.open),
                    ...s,
                    ref: p,
                    onDismiss: () => d.onOpenChange(!1),
                  }),
                }),
                (0, v.jsxs)(v.Fragment, {
                  children: [
                    (0, v.jsx)(J, { titleId: d.titleId }),
                    (0, v.jsx)(Q, {
                      contentRef: f,
                      descriptionId: d.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        G = "DialogTitle",
        L = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = T(G, r);
          return (0, v.jsx)(p.sG.h2, { id: o.titleId, ...n, ref: t });
        });
      L.displayName = G;
      var K = "DialogDescription",
        W = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = T(K, r);
          return (0, v.jsx)(p.sG.p, { id: o.descriptionId, ...n, ref: t });
        });
      W.displayName = K;
      var Z = "DialogClose",
        U = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            i = T(Z, r);
          return (0, v.jsx)(p.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, o.m)(e.onClick, () => i.onOpenChange(!1)),
          });
        });
      function H(e) {
        return e ? "open" : "closed";
      }
      U.displayName = Z;
      var X = "DialogTitleWarning",
        [z, V] = (0, l.q)(X, {
          contentName: _,
          titleName: G,
          docsSlug: "dialog",
        }),
        J = (e) => {
          let { titleId: t } = e,
            r = V(X),
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
        Q = (e) => {
          let { contentRef: t, descriptionId: r } = e,
            o = V("DialogDescriptionWarning"),
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
        Y = E,
        $ = j,
        ee = R,
        et = O,
        er = P,
        en = L,
        eo = W,
        ei = U;
    },
    34651: function (e, t, r) {
      let n;
      "undefined" != typeof self && self,
        (n = r(7620)),
        (e.exports = (() => {
          "use strict";
          var e = {
              155: (e) => {
                e.exports = n;
              },
            },
            t = {};
          function r(n) {
            var o = t[n];
            if (void 0 !== o) return o.exports;
            var i = (t[n] = { exports: {} });
            return e[n](i, i.exports, r), i.exports;
          }
          (r.d = (e, t) => {
            for (var n in t)
              r.o(t, n) &&
                !r.o(e, n) &&
                Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
          }),
            (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
            (r.r = (e) => {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            });
          var o = {};
          r.r(o),
            r.d(o, {
              useStopwatch: () => u,
              useTime: () => d,
              useTimer: () => c,
            });
          var i = r(155);
          class l {
            static getTimeFromMilliseconds(e, t = !0) {
              let r = t ? Math.ceil(e / 1e3) : Math.floor(e / 1e3),
                n = Math.floor(r / 86400),
                o = Math.floor((r % 86400) / 3600),
                i = Math.floor((r % 3600) / 60),
                l = Math.floor(r % 60);
              return {
                totalMilliseconds: e,
                totalSeconds: r,
                milliseconds: Math.floor(e % 1e3),
                seconds: l,
                minutes: i,
                hours: o,
                days: n,
              };
            }
            static getMillisecondsFromExpiry(e) {
              let t = new Date().getTime(),
                r = (null == e ? void 0 : e.getTime()) - t;
              return r > 0 ? r : 0;
            }
            static getMillisecondsFromPrevTime(e) {
              let t = new Date().getTime() - e;
              return t > 0 ? t : 0;
            }
            static getMillisecondsFromTimeNow() {
              let e = new Date();
              return e.getTime() - 60 * e.getTimezoneOffset() * 1e3;
            }
            static getFormattedTimeFromMilliseconds(e, t) {
              let {
                  milliseconds: r,
                  seconds: n,
                  minutes: o,
                  hours: i,
                } = l.getTimeFromMilliseconds(e),
                a = "",
                s = i;
              return (
                "12-hour" === t && ((a = i >= 12 ? "pm" : "am"), (s = i % 12)),
                { milliseconds: r, seconds: n, minutes: o, hours: s, ampm: a }
              );
            }
          }
          class a {
            static expiryTimestamp(e) {
              let t = new Date(e).getTime() > 0;
              return (
                t ||
                  console.warn(
                    "react-timer-hook: { useTimer } Invalid expiryTimestamp settings",
                    e
                  ),
                t
              );
            }
            static onExpire(e) {
              let t = e && "function" == typeof e;
              return (
                e &&
                  !t &&
                  console.warn(
                    "react-timer-hook: { useTimer } Invalid onExpire settings function",
                    e
                  ),
                t
              );
            }
          }
          function s(e, t) {
            let r = (0, i.useRef)(e);
            (0, i.useEffect)(() => {
              r.current = e;
            }),
              (0, i.useEffect)(() => {
                if (!t) return () => {};
                let e = setInterval(() => {
                  var e;
                  null == (e = null == r ? void 0 : r.current) || e.call(r);
                }, t);
                return () => clearInterval(e);
              }, [t]);
          }
          function c({
            expiryTimestamp: e,
            onExpire: t = () => {},
            autoStart: r = !0,
            interval: n = 1e3,
          }) {
            let [o, c] = (0, i.useState)(e),
              [u, d] = (0, i.useState)(l.getMillisecondsFromExpiry(o)),
              [f, p] = (0, i.useState)(r),
              [m, g] = (0, i.useState)(r),
              [b, y] = (0, i.useState)(n),
              v = (0, i.useCallback)(() => {
                a.onExpire(t) && t(), p(!1), y(null);
              }, [t]),
              h = (0, i.useCallback)(() => {
                p(!1);
              }, []),
              w = (0, i.useCallback)(
                (e, t = !0) => {
                  y(n), g(t), p(t), c(e), d(l.getMillisecondsFromExpiry(e));
                },
                [n]
              ),
              x = (0, i.useCallback)(() => {
                let e = new Date();
                e.setMilliseconds(e.getMilliseconds() + u), w(e);
              }, [u, w]),
              k = (0, i.useCallback)(() => {
                m ? (d(l.getMillisecondsFromExpiry(o)), p(!0)) : x();
              }, [o, m, x]);
            return (
              s(
                () => {
                  let e = l.getMillisecondsFromExpiry(o);
                  d(e), e <= 0 ? v() : b && e < b && y(e);
                },
                f ? b : null
              ),
              (0, i.useEffect)(() => {
                a.expiryTimestamp(o);
              }, [o]),
              Object.assign(Object.assign({}, l.getTimeFromMilliseconds(u)), {
                start: k,
                pause: h,
                resume: x,
                restart: w,
                isRunning: f,
              })
            );
          }
          function u({
            autoStart: e = !0,
            offsetTimestamp: t,
            interval: r = 1e3,
          } = {}) {
            let n = t ? l.getMillisecondsFromExpiry(t) : 0,
              [o, a] = (0, i.useState)(
                new Date().getTime() - new Date(n).getTime()
              ),
              [c, d] = (0, i.useState)(l.getMillisecondsFromPrevTime(o || 0)),
              [f, p] = (0, i.useState)(e),
              m = 1e3 - (c % 1e3),
              [g, b] = (0, i.useState)(r < m ? r : m);
            s(
              () => {
                g !== r && b(r), d(l.getMillisecondsFromPrevTime(o));
              },
              f ? g : null
            );
            let y = (0, i.useCallback)(() => {
                a(new Date().getTime() - new Date(c).getTime()), p(!0);
              }, [c]),
              v = (0, i.useCallback)(() => {
                f && (d(l.getMillisecondsFromPrevTime(o)), p(!1));
              }, [o, f]),
              h = (0, i.useCallback)(
                (e, t = !0) => {
                  let n = e ? l.getMillisecondsFromExpiry(e) : 0,
                    o = new Date().getTime() - new Date(n).getTime(),
                    i = l.getMillisecondsFromPrevTime(o),
                    s = 1e3 - (i % 1e3);
                  a(o), d(i), b(r < s ? r : s), p(t);
                },
                [r]
              );
            return Object.assign(
              Object.assign({}, l.getTimeFromMilliseconds(c, !1)),
              { start: y, pause: v, reset: h, isRunning: f }
            );
          }
          function d({ format: e, interval: t = 1e3 } = {}) {
            let [r, n] = (0, i.useState)(l.getMillisecondsFromTimeNow());
            return (
              s(() => {
                n(l.getMillisecondsFromTimeNow());
              }, t),
              Object.assign({}, l.getFormattedTimeFromMilliseconds(r, e))
            );
          }
          return o;
        })());
    },
    56559: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => a });
      var n = r(7620),
        o = r(7156),
        i = r(54568),
        l = n.forwardRef((e, t) =>
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
      l.displayName = "Label";
      var a = l;
    },
    95145: (e, t, r) => {
      "use strict";
      r.d(t, { bL: () => k, zi: () => T });
      var n = r(7620),
        o = r(29254),
        i = r(49640),
        l = r(80482),
        a = r(87076),
        s = r(22702),
        c = r(90210),
        u = r(7156),
        d = r(54568),
        f = "Switch",
        [p, m] = (0, l.A)(f),
        [g, b] = p(f),
        y = n.forwardRef((e, t) => {
          let {
              __scopeSwitch: r,
              name: l,
              checked: s,
              defaultChecked: c,
              required: p,
              disabled: m,
              value: b = "on",
              onCheckedChange: y,
              form: v,
              ...h
            } = e,
            [k, T] = n.useState(null),
            E = (0, i.s)(t, (e) => T(e)),
            D = n.useRef(!1),
            j = !k || v || !!k.closest("form"),
            [C, I] = (0, a.i)({
              prop: s,
              defaultProp: null != c && c,
              onChange: y,
              caller: f,
            });
          return (0, d.jsxs)(g, {
            scope: r,
            checked: C,
            disabled: m,
            children: [
              (0, d.jsx)(u.sG.button, {
                type: "button",
                role: "switch",
                "aria-checked": C,
                "aria-required": p,
                "data-state": x(C),
                "data-disabled": m ? "" : void 0,
                disabled: m,
                value: b,
                ...h,
                ref: E,
                onClick: (0, o.m)(e.onClick, (e) => {
                  I((e) => !e),
                    j &&
                      ((D.current = e.isPropagationStopped()),
                      D.current || e.stopPropagation());
                }),
              }),
              j &&
                (0, d.jsx)(w, {
                  control: k,
                  bubbles: !D.current,
                  name: l,
                  value: b,
                  checked: C,
                  required: p,
                  disabled: m,
                  form: v,
                  style: { transform: "translateX(-100%)" },
                }),
            ],
          });
        });
      y.displayName = f;
      var v = "SwitchThumb",
        h = n.forwardRef((e, t) => {
          let { __scopeSwitch: r, ...n } = e,
            o = b(v, r);
          return (0, d.jsx)(u.sG.span, {
            "data-state": x(o.checked),
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: t,
          });
        });
      h.displayName = v;
      var w = n.forwardRef((e, t) => {
        let {
            __scopeSwitch: r,
            control: o,
            checked: l,
            bubbles: a = !0,
            ...u
          } = e,
          f = n.useRef(null),
          p = (0, i.s)(f, t),
          m = (0, s.Z)(l),
          g = (0, c.X)(o);
        return (
          n.useEffect(() => {
            let e = f.current;
            if (!e) return;
            let t = Object.getOwnPropertyDescriptor(
              window.HTMLInputElement.prototype,
              "checked"
            ).set;
            if (m !== l && t) {
              let r = new Event("click", { bubbles: a });
              t.call(e, l), e.dispatchEvent(r);
            }
          }, [m, l, a]),
          (0, d.jsx)("input", {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: l,
            ...u,
            tabIndex: -1,
            ref: p,
            style: {
              ...u.style,
              ...g,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
            },
          })
        );
      });
      function x(e) {
        return e ? "checked" : "unchecked";
      }
      w.displayName = "SwitchBubbleInput";
      var k = y,
        T = h;
    },
  },
]);
