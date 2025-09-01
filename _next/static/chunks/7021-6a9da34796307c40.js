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
      (e._sentryDebugIds[t] = "589c9647-3f47-44df-9d12-d8d894a604b7"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-589c9647-3f47-44df-9d12-d8d894a604b7"));
  })();
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7021],
  {
    11376: (e, t, r) => {
      "use strict";
      r.d(t, { W: () => a });
      var n = r(7620),
        o = r(68499);
      let l = { some: 0, all: 1 };
      function a(
        e,
        { root: t, margin: r, amount: i, once: u = !1, initial: c = !1 } = {}
      ) {
        let [s, d] = (0, n.useState)(c);
        return (
          (0, n.useEffect)(() => {
            if (!e.current || (u && s)) return;
            let n = { root: (t && t.current) || void 0, margin: r, amount: i };
            return (function (
              e,
              t,
              { root: r, margin: n, amount: a = "some" } = {}
            ) {
              let i = (0, o.K)(e),
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
                    threshold: "number" == typeof a ? a : l[a],
                  }
                );
              return i.forEach((e) => c.observe(e)), () => c.disconnect();
            })(e.current, () => (d(!0), u ? void 0 : () => d(!1)), n);
          }, [t, e, r, u, i]),
          s
        );
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
      r.d(t, { C1: () => E, bL: () => x });
      var n = r(7620),
        o = r(49640),
        l = r(80482),
        a = r(29254),
        i = r(87076),
        u = r(22702),
        c = r(90210),
        s = r(18400),
        d = r(7156),
        f = r(54568),
        p = "Checkbox",
        [v, m] = (0, l.A)(p),
        [h, g] = v(p);
      function b(e) {
        let {
            __scopeCheckbox: t,
            checked: r,
            children: o,
            defaultChecked: l,
            disabled: a,
            form: u,
            name: c,
            onCheckedChange: s,
            required: d,
            value: v = "on",
            internal_do_not_use_render: m,
          } = e,
          [g, b] = (0, i.i)({
            prop: r,
            defaultProp: null != l && l,
            onChange: s,
            caller: p,
          }),
          [y, w] = n.useState(null),
          [x, C] = n.useState(null),
          E = n.useRef(!1),
          k = !y || !!u || !!y.closest("form"),
          R = {
            checked: g,
            disabled: a,
            setChecked: b,
            control: y,
            setControl: w,
            name: c,
            form: u,
            value: v,
            hasConsumerStoppedPropagationRef: E,
            required: d,
            defaultChecked: !j(l) && l,
            isFormControl: k,
            bubbleInput: x,
            setBubbleInput: C,
          };
        return (0, f.jsx)(h, {
          scope: t,
          ...R,
          children: "function" == typeof m ? m(R) : o,
        });
      }
      var y = "CheckboxTrigger",
        w = n.forwardRef((e, t) => {
          let { __scopeCheckbox: r, onKeyDown: l, onClick: i, ...u } = e,
            {
              control: c,
              value: s,
              disabled: p,
              checked: v,
              required: m,
              setControl: h,
              setChecked: b,
              hasConsumerStoppedPropagationRef: w,
              isFormControl: x,
              bubbleInput: C,
            } = g(y, r),
            E = (0, o.s)(t, h),
            k = n.useRef(v);
          return (
            n.useEffect(() => {
              let e = null == c ? void 0 : c.form;
              if (e) {
                let t = () => b(k.current);
                return (
                  e.addEventListener("reset", t),
                  () => e.removeEventListener("reset", t)
                );
              }
            }, [c, b]),
            (0, f.jsx)(d.sG.button, {
              type: "button",
              role: "checkbox",
              "aria-checked": j(v) ? "mixed" : v,
              "aria-required": m,
              "data-state": I(v),
              "data-disabled": p ? "" : void 0,
              disabled: p,
              value: s,
              ...u,
              ref: E,
              onKeyDown: (0, a.m)(l, (e) => {
                "Enter" === e.key && e.preventDefault();
              }),
              onClick: (0, a.m)(i, (e) => {
                b((e) => !!j(e) || !e),
                  C &&
                    x &&
                    ((w.current = e.isPropagationStopped()),
                    w.current || e.stopPropagation());
              }),
            })
          );
        });
      w.displayName = y;
      var x = n.forwardRef((e, t) => {
        let {
          __scopeCheckbox: r,
          name: n,
          checked: o,
          defaultChecked: l,
          required: a,
          disabled: i,
          value: u,
          onCheckedChange: c,
          form: s,
          ...d
        } = e;
        return (0, f.jsx)(b, {
          __scopeCheckbox: r,
          checked: o,
          defaultChecked: l,
          disabled: i,
          required: a,
          onCheckedChange: c,
          name: n,
          form: s,
          value: u,
          internal_do_not_use_render: (e) => {
            let { isFormControl: n } = e;
            return (0, f.jsxs)(f.Fragment, {
              children: [
                (0, f.jsx)(w, { ...d, ref: t, __scopeCheckbox: r }),
                n && (0, f.jsx)(R, { __scopeCheckbox: r }),
              ],
            });
          },
        });
      });
      x.displayName = p;
      var C = "CheckboxIndicator",
        E = n.forwardRef((e, t) => {
          let { __scopeCheckbox: r, forceMount: n, ...o } = e,
            l = g(C, r);
          return (0, f.jsx)(s.C, {
            present: n || j(l.checked) || !0 === l.checked,
            children: (0, f.jsx)(d.sG.span, {
              "data-state": I(l.checked),
              "data-disabled": l.disabled ? "" : void 0,
              ...o,
              ref: t,
              style: { pointerEvents: "none", ...e.style },
            }),
          });
        });
      E.displayName = C;
      var k = "CheckboxBubbleInput",
        R = n.forwardRef((e, t) => {
          let { __scopeCheckbox: r, ...l } = e,
            {
              control: a,
              hasConsumerStoppedPropagationRef: i,
              checked: s,
              defaultChecked: p,
              required: v,
              disabled: m,
              name: h,
              value: b,
              form: y,
              bubbleInput: w,
              setBubbleInput: x,
            } = g(k, r),
            C = (0, o.s)(t, x),
            E = (0, u.Z)(s),
            R = (0, c.X)(a);
          n.useEffect(() => {
            if (!w) return;
            let e = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "checked"
              ).set,
              t = !i.current;
            if (E !== s && e) {
              let r = new Event("click", { bubbles: t });
              (w.indeterminate = j(s)),
                e.call(w, !j(s) && s),
                w.dispatchEvent(r);
            }
          }, [w, E, s, i]);
          let I = n.useRef(!j(s) && s);
          return (0, f.jsx)(d.sG.input, {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: null != p ? p : I.current,
            required: v,
            disabled: m,
            name: h,
            value: b,
            form: y,
            ...l,
            tabIndex: -1,
            ref: C,
            style: {
              ...l.style,
              ...R,
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
      function I(e) {
        return j(e) ? "indeterminate" : e ? "checked" : "unchecked";
      }
      R.displayName = k;
    },
    25173: (e, t, r) => {
      "use strict";
      r.d(t, {
        UC: () => er,
        VY: () => eo,
        ZL: () => ee,
        bL: () => Y,
        bm: () => el,
        hE: () => en,
        hJ: () => et,
        l9: () => Q,
      });
      var n = r(7620),
        o = r(29254),
        l = r(49640),
        a = r(80482),
        i = r(60728),
        u = r(87076),
        c = r(82491),
        s = r(38552),
        d = r(93343),
        f = r(18400),
        p = r(7156),
        v = r(17848),
        m = r(23855),
        h = r(23027),
        g = r(79649),
        b = r(54568),
        y = "Dialog",
        [w, x] = (0, a.A)(y),
        [C, E] = w(y),
        k = (e) => {
          let {
              __scopeDialog: t,
              children: r,
              open: o,
              defaultOpen: l,
              onOpenChange: a,
              modal: c = !0,
            } = e,
            s = n.useRef(null),
            d = n.useRef(null),
            [f, p] = (0, u.i)({
              prop: o,
              defaultProp: null != l && l,
              onChange: a,
              caller: y,
            });
          return (0, b.jsx)(C, {
            scope: t,
            triggerRef: s,
            contentRef: d,
            contentId: (0, i.B)(),
            titleId: (0, i.B)(),
            descriptionId: (0, i.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: n.useCallback(() => p((e) => !e), [p]),
            modal: c,
            children: r,
          });
        };
      k.displayName = y;
      var R = "DialogTrigger",
        j = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            a = E(R, r),
            i = (0, l.s)(t, a.triggerRef);
          return (0, b.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": a.open,
            "aria-controls": a.contentId,
            "data-state": Z(a.open),
            ...n,
            ref: i,
            onClick: (0, o.m)(e.onClick, a.onOpenToggle),
          });
        });
      j.displayName = R;
      var I = "DialogPortal",
        [S, D] = w(I, { forceMount: void 0 }),
        A = (e) => {
          let {
              __scopeDialog: t,
              forceMount: r,
              children: o,
              container: l,
            } = e,
            a = E(I, t);
          return (0, b.jsx)(S, {
            scope: t,
            forceMount: r,
            children: n.Children.map(o, (e) =>
              (0, b.jsx)(f.C, {
                present: r || a.open,
                children: (0, b.jsx)(d.Z, {
                  asChild: !0,
                  container: l,
                  children: e,
                }),
              })
            ),
          });
        };
      A.displayName = I;
      var P = "DialogOverlay",
        O = n.forwardRef((e, t) => {
          let r = D(P, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...o } = e,
            l = E(P, e.__scopeDialog);
          return l.modal
            ? (0, b.jsx)(f.C, {
                present: n || l.open,
                children: (0, b.jsx)(F, { ...o, ref: t }),
              })
            : null;
        });
      O.displayName = P;
      var M = (0, g.TL)("DialogOverlay.RemoveScroll"),
        F = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = E(P, r);
          return (0, b.jsx)(m.A, {
            as: M,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, b.jsx)(p.sG.div, {
              "data-state": Z(o.open),
              ...n,
              ref: t,
              style: { pointerEvents: "auto", ...n.style },
            }),
          });
        }),
        _ = "DialogContent",
        N = n.forwardRef((e, t) => {
          let r = D(_, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...o } = e,
            l = E(_, e.__scopeDialog);
          return (0, b.jsx)(f.C, {
            present: n || l.open,
            children: l.modal
              ? (0, b.jsx)(L, { ...o, ref: t })
              : (0, b.jsx)(B, { ...o, ref: t }),
          });
        });
      N.displayName = _;
      var L = n.forwardRef((e, t) => {
          let r = E(_, e.__scopeDialog),
            a = n.useRef(null),
            i = (0, l.s)(t, r.contentRef, a);
          return (
            n.useEffect(() => {
              let e = a.current;
              if (e) return (0, h.Eq)(e);
            }, []),
            (0, b.jsx)(T, {
              ...e,
              ref: i,
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
          let r = E(_, e.__scopeDialog),
            o = n.useRef(!1),
            l = n.useRef(!1);
          return (0, b.jsx)(T, {
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
                (l.current = !1);
            },
            onInteractOutside: (t) => {
              var n, a;
              null == (n = e.onInteractOutside) || n.call(e, t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  "pointerdown" === t.detail.originalEvent.type &&
                    (l.current = !0));
              let i = t.target;
              (null == (a = r.triggerRef.current) ? void 0 : a.contains(i)) &&
                t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  l.current &&
                  t.preventDefault();
            },
          });
        }),
        T = n.forwardRef((e, t) => {
          let {
              __scopeDialog: r,
              trapFocus: o,
              onOpenAutoFocus: a,
              onCloseAutoFocus: i,
              ...u
            } = e,
            d = E(_, r),
            f = n.useRef(null),
            p = (0, l.s)(t, f);
          return (
            (0, v.Oh)(),
            (0, b.jsxs)(b.Fragment, {
              children: [
                (0, b.jsx)(s.n, {
                  asChild: !0,
                  loop: !0,
                  trapped: o,
                  onMountAutoFocus: a,
                  onUnmountAutoFocus: i,
                  children: (0, b.jsx)(c.qW, {
                    role: "dialog",
                    id: d.contentId,
                    "aria-describedby": d.descriptionId,
                    "aria-labelledby": d.titleId,
                    "data-state": Z(d.open),
                    ...u,
                    ref: p,
                    onDismiss: () => d.onOpenChange(!1),
                  }),
                }),
                (0, b.jsxs)(b.Fragment, {
                  children: [
                    (0, b.jsx)(J, { titleId: d.titleId }),
                    (0, b.jsx)(X, {
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
        z = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = E(G, r);
          return (0, b.jsx)(p.sG.h2, { id: o.titleId, ...n, ref: t });
        });
      z.displayName = G;
      var q = "DialogDescription",
        K = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = E(q, r);
          return (0, b.jsx)(p.sG.p, { id: o.descriptionId, ...n, ref: t });
        });
      K.displayName = q;
      var V = "DialogClose",
        W = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            l = E(V, r);
          return (0, b.jsx)(p.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, o.m)(e.onClick, () => l.onOpenChange(!1)),
          });
        });
      function Z(e) {
        return e ? "open" : "closed";
      }
      W.displayName = V;
      var U = "DialogTitleWarning",
        [$, H] = (0, a.q)(U, {
          contentName: _,
          titleName: G,
          docsSlug: "dialog",
        }),
        J = (e) => {
          let { titleId: t } = e,
            r = H(U),
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
        X = (e) => {
          let { contentRef: t, descriptionId: r } = e,
            o = H("DialogDescriptionWarning"),
            l =
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
              r && n && (document.getElementById(r) || console.warn(l));
            }, [l, t, r]),
            null
          );
        },
        Y = k,
        Q = j,
        ee = A,
        et = O,
        er = N,
        en = z,
        eo = K,
        el = W;
    },
    38360: (e, t, r) => {
      "use strict";
      r.d(t, {
        Mz: () => V,
        UC: () => U,
        ZL: () => Z,
        bL: () => K,
        l9: () => W,
      });
      var n = r(7620),
        o = r(29254),
        l = r(49640),
        a = r(80482),
        i = r(82491),
        u = r(17848),
        c = r(38552),
        s = r(60728),
        d = r(61611),
        f = r(93343),
        p = r(18400),
        v = r(7156),
        m = r(79649),
        h = r(87076),
        g = r(23027),
        b = r(23855),
        y = r(54568),
        w = "Popover",
        [x, C] = (0, a.A)(w, [d.Bk]),
        E = (0, d.Bk)(),
        [k, R] = x(w),
        j = (e) => {
          let {
              __scopePopover: t,
              children: r,
              open: o,
              defaultOpen: l,
              onOpenChange: a,
              modal: i = !1,
            } = e,
            u = E(t),
            c = n.useRef(null),
            [f, p] = n.useState(!1),
            [v, m] = (0, h.i)({
              prop: o,
              defaultProp: null != l && l,
              onChange: a,
              caller: w,
            });
          return (0, y.jsx)(d.bL, {
            ...u,
            children: (0, y.jsx)(k, {
              scope: t,
              contentId: (0, s.B)(),
              triggerRef: c,
              open: v,
              onOpenChange: m,
              onOpenToggle: n.useCallback(() => m((e) => !e), [m]),
              hasCustomAnchor: f,
              onCustomAnchorAdd: n.useCallback(() => p(!0), []),
              onCustomAnchorRemove: n.useCallback(() => p(!1), []),
              modal: i,
              children: r,
            }),
          });
        };
      j.displayName = w;
      var I = "PopoverAnchor",
        S = n.forwardRef((e, t) => {
          let { __scopePopover: r, ...o } = e,
            l = R(I, r),
            a = E(r),
            { onCustomAnchorAdd: i, onCustomAnchorRemove: u } = l;
          return (
            n.useEffect(() => (i(), () => u()), [i, u]),
            (0, y.jsx)(d.Mz, { ...a, ...o, ref: t })
          );
        });
      S.displayName = I;
      var D = "PopoverTrigger",
        A = n.forwardRef((e, t) => {
          let { __scopePopover: r, ...n } = e,
            a = R(D, r),
            i = E(r),
            u = (0, l.s)(t, a.triggerRef),
            c = (0, y.jsx)(v.sG.button, {
              type: "button",
              "aria-haspopup": "dialog",
              "aria-expanded": a.open,
              "aria-controls": a.contentId,
              "data-state": q(a.open),
              ...n,
              ref: u,
              onClick: (0, o.m)(e.onClick, a.onOpenToggle),
            });
          return a.hasCustomAnchor
            ? c
            : (0, y.jsx)(d.Mz, { asChild: !0, ...i, children: c });
        });
      A.displayName = D;
      var P = "PopoverPortal",
        [O, M] = x(P, { forceMount: void 0 }),
        F = (e) => {
          let {
              __scopePopover: t,
              forceMount: r,
              children: n,
              container: o,
            } = e,
            l = R(P, t);
          return (0, y.jsx)(O, {
            scope: t,
            forceMount: r,
            children: (0, y.jsx)(p.C, {
              present: r || l.open,
              children: (0, y.jsx)(f.Z, {
                asChild: !0,
                container: o,
                children: n,
              }),
            }),
          });
        };
      F.displayName = P;
      var _ = "PopoverContent",
        N = n.forwardRef((e, t) => {
          let r = M(_, e.__scopePopover),
            { forceMount: n = r.forceMount, ...o } = e,
            l = R(_, e.__scopePopover);
          return (0, y.jsx)(p.C, {
            present: n || l.open,
            children: l.modal
              ? (0, y.jsx)(B, { ...o, ref: t })
              : (0, y.jsx)(T, { ...o, ref: t }),
          });
        });
      N.displayName = _;
      var L = (0, m.TL)("PopoverContent.RemoveScroll"),
        B = n.forwardRef((e, t) => {
          let r = R(_, e.__scopePopover),
            a = n.useRef(null),
            i = (0, l.s)(t, a),
            u = n.useRef(!1);
          return (
            n.useEffect(() => {
              let e = a.current;
              if (e) return (0, g.Eq)(e);
            }, []),
            (0, y.jsx)(b.A, {
              as: L,
              allowPinchZoom: !0,
              children: (0, y.jsx)(G, {
                ...e,
                ref: i,
                trapFocus: r.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e) => {
                  var t;
                  e.preventDefault(),
                    u.current ||
                      null == (t = r.triggerRef.current) ||
                      t.focus();
                }),
                onPointerDownOutside: (0, o.m)(
                  e.onPointerDownOutside,
                  (e) => {
                    let t = e.detail.originalEvent,
                      r = 0 === t.button && !0 === t.ctrlKey;
                    u.current = 2 === t.button || r;
                  },
                  { checkForDefaultPrevented: !1 }
                ),
                onFocusOutside: (0, o.m)(
                  e.onFocusOutside,
                  (e) => e.preventDefault(),
                  { checkForDefaultPrevented: !1 }
                ),
              }),
            })
          );
        }),
        T = n.forwardRef((e, t) => {
          let r = R(_, e.__scopePopover),
            o = n.useRef(!1),
            l = n.useRef(!1);
          return (0, y.jsx)(G, {
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
                (l.current = !1);
            },
            onInteractOutside: (t) => {
              var n, a;
              null == (n = e.onInteractOutside) || n.call(e, t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  "pointerdown" === t.detail.originalEvent.type &&
                    (l.current = !0));
              let i = t.target;
              (null == (a = r.triggerRef.current) ? void 0 : a.contains(i)) &&
                t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  l.current &&
                  t.preventDefault();
            },
          });
        }),
        G = n.forwardRef((e, t) => {
          let {
              __scopePopover: r,
              trapFocus: n,
              onOpenAutoFocus: o,
              onCloseAutoFocus: l,
              disableOutsidePointerEvents: a,
              onEscapeKeyDown: s,
              onPointerDownOutside: f,
              onFocusOutside: p,
              onInteractOutside: v,
              ...m
            } = e,
            h = R(_, r),
            g = E(r);
          return (
            (0, u.Oh)(),
            (0, y.jsx)(c.n, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: l,
              children: (0, y.jsx)(i.qW, {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onInteractOutside: v,
                onEscapeKeyDown: s,
                onPointerDownOutside: f,
                onFocusOutside: p,
                onDismiss: () => h.onOpenChange(!1),
                children: (0, y.jsx)(d.UC, {
                  "data-state": q(h.open),
                  role: "dialog",
                  id: h.contentId,
                  ...g,
                  ...m,
                  ref: t,
                  style: {
                    ...m.style,
                    "--radix-popover-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                }),
              }),
            })
          );
        }),
        z = "PopoverClose";
      function q(e) {
        return e ? "open" : "closed";
      }
      (n.forwardRef((e, t) => {
        let { __scopePopover: r, ...n } = e,
          l = R(z, r);
        return (0, y.jsx)(v.sG.button, {
          type: "button",
          ...n,
          ref: t,
          onClick: (0, o.m)(e.onClick, () => l.onOpenChange(!1)),
        });
      }).displayName = z),
        (n.forwardRef((e, t) => {
          let { __scopePopover: r, ...n } = e,
            o = E(r);
          return (0, y.jsx)(d.i3, { ...o, ...n, ref: t });
        }).displayName = "PopoverArrow");
      var K = j,
        V = S,
        W = A,
        Z = F,
        U = N;
    },
    44491: (e, t, r) => {
      "use strict";
      r.d(t, { uB: () => O });
      var n = /[\\\/_+.#"@\[\(\{&]/,
        o = /[\\\/_+.#"@\[\(\{&]/g,
        l = /[\s-]/,
        a = /[\s-]/g;
      function i(e) {
        return e.toLowerCase().replace(a, " ");
      }
      var u = r(25173),
        c = r(7620),
        s = r(7156),
        d = r(60728),
        f = r(49640),
        p = '[cmdk-group=""]',
        v = '[cmdk-group-items=""]',
        m = '[cmdk-item=""]',
        h = "".concat(m, ':not([aria-disabled="true"])'),
        g = "cmdk-item-select",
        b = "data-value",
        y = (e, t, r) =>
          (function (e, t, r) {
            return (function e(t, r, i, u, c, s, d) {
              if (s === r.length) return c === t.length ? 1 : 0.99;
              var f = `${c},${s}`;
              if (void 0 !== d[f]) return d[f];
              for (
                var p, v, m, h, g = u.charAt(s), b = i.indexOf(g, c), y = 0;
                b >= 0;

              )
                (p = e(t, r, i, u, b + 1, s + 1, d)) > y &&
                  (b === c
                    ? (p *= 1)
                    : n.test(t.charAt(b - 1))
                    ? ((p *= 0.8),
                      (m = t.slice(c, b - 1).match(o)) &&
                        c > 0 &&
                        (p *= Math.pow(0.999, m.length)))
                    : l.test(t.charAt(b - 1))
                    ? ((p *= 0.9),
                      (h = t.slice(c, b - 1).match(a)) &&
                        c > 0 &&
                        (p *= Math.pow(0.999, h.length)))
                    : ((p *= 0.17), c > 0 && (p *= Math.pow(0.999, b - c))),
                  t.charAt(b) !== r.charAt(s) && (p *= 0.9999)),
                  ((p < 0.1 && i.charAt(b - 1) === u.charAt(s + 1)) ||
                    (u.charAt(s + 1) === u.charAt(s) &&
                      i.charAt(b - 1) !== u.charAt(s))) &&
                    0.1 * (v = e(t, r, i, u, b + 1, s + 2, d)) > p &&
                    (p = 0.1 * v),
                  p > y && (y = p),
                  (b = i.indexOf(g, b + 1));
              return (d[f] = y), y;
            })(
              (e = r && r.length > 0 ? `${e + " " + r.join(" ")}` : e),
              t,
              i(e),
              i(t),
              0,
              0,
              {}
            );
          })(e, t, r),
        w = c.createContext(void 0),
        x = () => c.useContext(w),
        C = c.createContext(void 0),
        E = () => c.useContext(C),
        k = c.createContext(void 0),
        R = c.forwardRef((e, t) => {
          let r = _(() => {
              var t, r;
              return {
                search: "",
                value:
                  null != (r = null != (t = e.value) ? t : e.defaultValue)
                    ? r
                    : "",
                selectedItemId: void 0,
                filtered: { count: 0, items: new Map(), groups: new Set() },
              };
            }),
            n = _(() => new Set()),
            o = _(() => new Map()),
            l = _(() => new Map()),
            a = _(() => new Set()),
            i = M(e),
            {
              label: u,
              children: f,
              value: x,
              onValueChange: E,
              filter: k,
              shouldFilter: R,
              loop: j,
              disablePointerSelection: I = !1,
              vimBindings: S = !0,
              ...D
            } = e,
            A = (0, d.B)(),
            P = (0, d.B)(),
            O = (0, d.B)(),
            N = c.useRef(null),
            L = B();
          F(() => {
            if (void 0 !== x) {
              let e = x.trim();
              (r.current.value = e), z.emit();
            }
          }, [x]),
            F(() => {
              L(6, U);
            }, []);
          let z = c.useMemo(
              () => ({
                subscribe: (e) => (a.current.add(e), () => a.current.delete(e)),
                snapshot: () => r.current,
                setState: (e, t, n) => {
                  var o, l, a, u;
                  if (!Object.is(r.current[e], t)) {
                    if (((r.current[e] = t), "search" === e)) Z(), V(), L(1, W);
                    else if ("value" === e) {
                      if (
                        document.activeElement.hasAttribute("cmdk-input") ||
                        document.activeElement.hasAttribute("cmdk-root")
                      ) {
                        let e = document.getElementById(O);
                        e
                          ? e.focus()
                          : null == (o = document.getElementById(A)) ||
                            o.focus();
                      }
                      if (
                        (L(7, () => {
                          var e;
                          (r.current.selectedItemId =
                            null == (e = $()) ? void 0 : e.id),
                            z.emit();
                        }),
                        n || L(5, U),
                        (null == (l = i.current) ? void 0 : l.value) !== void 0)
                      ) {
                        null == (u = (a = i.current).onValueChange) ||
                          u.call(a, null != t ? t : "");
                        return;
                      }
                    }
                    z.emit();
                  }
                },
                emit: () => {
                  a.current.forEach((e) => e());
                },
              }),
              []
            ),
            q = c.useMemo(
              () => ({
                value: (e, t, n) => {
                  var o;
                  t !== (null == (o = l.current.get(e)) ? void 0 : o.value) &&
                    (l.current.set(e, { value: t, keywords: n }),
                    r.current.filtered.items.set(e, K(t, n)),
                    L(2, () => {
                      V(), z.emit();
                    }));
                },
                item: (e, t) => (
                  n.current.add(e),
                  t &&
                    (o.current.has(t)
                      ? o.current.get(t).add(e)
                      : o.current.set(t, new Set([e]))),
                  L(3, () => {
                    Z(), V(), r.current.value || W(), z.emit();
                  }),
                  () => {
                    l.current.delete(e),
                      n.current.delete(e),
                      r.current.filtered.items.delete(e);
                    let t = $();
                    L(4, () => {
                      Z(),
                        (null == t ? void 0 : t.getAttribute("id")) === e &&
                          W(),
                        z.emit();
                    });
                  }
                ),
                group: (e) => (
                  o.current.has(e) || o.current.set(e, new Set()),
                  () => {
                    l.current.delete(e), o.current.delete(e);
                  }
                ),
                filter: () => i.current.shouldFilter,
                label: u || e["aria-label"],
                getDisablePointerSelection: () =>
                  i.current.disablePointerSelection,
                listId: A,
                inputId: O,
                labelId: P,
                listInnerRef: N,
              }),
              []
            );
          function K(e, t) {
            var n, o;
            let l =
              null != (o = null == (n = i.current) ? void 0 : n.filter) ? o : y;
            return e ? l(e, r.current.search, t) : 0;
          }
          function V() {
            if (!r.current.search || !1 === i.current.shouldFilter) return;
            let e = r.current.filtered.items,
              t = [];
            r.current.filtered.groups.forEach((r) => {
              let n = o.current.get(r),
                l = 0;
              n.forEach((t) => {
                l = Math.max(e.get(t), l);
              }),
                t.push([r, l]);
            });
            let n = N.current;
            H()
              .sort((t, r) => {
                var n, o;
                let l = t.getAttribute("id"),
                  a = r.getAttribute("id");
                return (
                  (null != (n = e.get(a)) ? n : 0) -
                  (null != (o = e.get(l)) ? o : 0)
                );
              })
              .forEach((e) => {
                let t = e.closest(v);
                t
                  ? t.appendChild(
                      e.parentElement === t
                        ? e
                        : e.closest("".concat(v, " > *"))
                    )
                  : n.appendChild(
                      e.parentElement === n
                        ? e
                        : e.closest("".concat(v, " > *"))
                    );
              }),
              t
                .sort((e, t) => t[1] - e[1])
                .forEach((e) => {
                  var t;
                  let r =
                    null == (t = N.current)
                      ? void 0
                      : t.querySelector(
                          ""
                            .concat(p, "[")
                            .concat(b, '="')
                            .concat(encodeURIComponent(e[0]), '"]')
                        );
                  null == r || r.parentElement.appendChild(r);
                });
          }
          function W() {
            let e = H().find((e) => "true" !== e.getAttribute("aria-disabled")),
              t = null == e ? void 0 : e.getAttribute(b);
            z.setState("value", t || void 0);
          }
          function Z() {
            var e, t, a, u;
            if (!r.current.search || !1 === i.current.shouldFilter) {
              r.current.filtered.count = n.current.size;
              return;
            }
            r.current.filtered.groups = new Set();
            let c = 0;
            for (let o of n.current) {
              let n = K(
                null != (t = null == (e = l.current.get(o)) ? void 0 : e.value)
                  ? t
                  : "",
                null !=
                  (u = null == (a = l.current.get(o)) ? void 0 : a.keywords)
                  ? u
                  : []
              );
              r.current.filtered.items.set(o, n), n > 0 && c++;
            }
            for (let [e, t] of o.current)
              for (let n of t)
                if (r.current.filtered.items.get(n) > 0) {
                  r.current.filtered.groups.add(e);
                  break;
                }
            r.current.filtered.count = c;
          }
          function U() {
            var e, t, r;
            let n = $();
            n &&
              ((null == (e = n.parentElement) ? void 0 : e.firstChild) === n &&
                (null ==
                  (r =
                    null == (t = n.closest(p))
                      ? void 0
                      : t.querySelector('[cmdk-group-heading=""]')) ||
                  r.scrollIntoView({ block: "nearest" })),
              n.scrollIntoView({ block: "nearest" }));
          }
          function $() {
            var e;
            return null == (e = N.current)
              ? void 0
              : e.querySelector("".concat(m, '[aria-selected="true"]'));
          }
          function H() {
            var e;
            return Array.from(
              (null == (e = N.current) ? void 0 : e.querySelectorAll(h)) || []
            );
          }
          function J(e) {
            let t = H()[e];
            t && z.setState("value", t.getAttribute(b));
          }
          function X(e) {
            var t;
            let r = $(),
              n = H(),
              o = n.findIndex((e) => e === r),
              l = n[o + e];
            null != (t = i.current) &&
              t.loop &&
              (l =
                o + e < 0
                  ? n[n.length - 1]
                  : o + e === n.length
                  ? n[0]
                  : n[o + e]),
              l && z.setState("value", l.getAttribute(b));
          }
          function Y(e) {
            let t = $(),
              r = null == t ? void 0 : t.closest(p),
              n;
            for (; r && !n; )
              n =
                null ==
                (r =
                  e > 0
                    ? (function (e, t) {
                        let r = e.nextElementSibling;
                        for (; r; ) {
                          if (r.matches(t)) return r;
                          r = r.nextElementSibling;
                        }
                      })(r, p)
                    : (function (e, t) {
                        let r = e.previousElementSibling;
                        for (; r; ) {
                          if (r.matches(t)) return r;
                          r = r.previousElementSibling;
                        }
                      })(r, p))
                  ? void 0
                  : r.querySelector(h);
            n ? z.setState("value", n.getAttribute(b)) : X(e);
          }
          let Q = () => J(H().length - 1),
            ee = (e) => {
              e.preventDefault(), e.metaKey ? Q() : e.altKey ? Y(1) : X(1);
            },
            et = (e) => {
              e.preventDefault(), e.metaKey ? J(0) : e.altKey ? Y(-1) : X(-1);
            };
          return c.createElement(
            s.sG.div,
            {
              ref: t,
              tabIndex: -1,
              ...D,
              "cmdk-root": "",
              onKeyDown: (e) => {
                var t;
                null == (t = D.onKeyDown) || t.call(D, e);
                let r = e.nativeEvent.isComposing || 229 === e.keyCode;
                if (!(e.defaultPrevented || r))
                  switch (e.key) {
                    case "n":
                    case "j":
                      S && e.ctrlKey && ee(e);
                      break;
                    case "ArrowDown":
                      ee(e);
                      break;
                    case "p":
                    case "k":
                      S && e.ctrlKey && et(e);
                      break;
                    case "ArrowUp":
                      et(e);
                      break;
                    case "Home":
                      e.preventDefault(), J(0);
                      break;
                    case "End":
                      e.preventDefault(), Q();
                      break;
                    case "Enter": {
                      e.preventDefault();
                      let t = $();
                      if (t) {
                        let e = new Event(g);
                        t.dispatchEvent(e);
                      }
                    }
                  }
              },
            },
            c.createElement(
              "label",
              { "cmdk-label": "", htmlFor: q.inputId, id: q.labelId, style: G },
              u
            ),
            T(e, (e) =>
              c.createElement(
                C.Provider,
                { value: z },
                c.createElement(w.Provider, { value: q }, e)
              )
            )
          );
        }),
        j = c.forwardRef((e, t) => {
          var r, n;
          let o = (0, d.B)(),
            l = c.useRef(null),
            a = c.useContext(k),
            i = x(),
            u = M(e),
            p =
              null != (n = null == (r = u.current) ? void 0 : r.forceMount)
                ? n
                : null == a
                ? void 0
                : a.forceMount;
          F(() => {
            if (!p) return i.item(o, null == a ? void 0 : a.id);
          }, [p]);
          let v = L(o, l, [e.value, e.children, l], e.keywords),
            m = E(),
            h = N((e) => e.value && e.value === v.current),
            b = N(
              (e) =>
                !!p ||
                !1 === i.filter() ||
                !e.search ||
                e.filtered.items.get(o) > 0
            );
          function y() {
            var e, t;
            w(), null == (t = (e = u.current).onSelect) || t.call(e, v.current);
          }
          function w() {
            m.setState("value", v.current, !0);
          }
          if (
            (c.useEffect(() => {
              let t = l.current;
              if (!(!t || e.disabled))
                return (
                  t.addEventListener(g, y), () => t.removeEventListener(g, y)
                );
            }, [b, e.onSelect, e.disabled]),
            !b)
          )
            return null;
          let {
            disabled: C,
            value: R,
            onSelect: j,
            forceMount: I,
            keywords: S,
            ...D
          } = e;
          return c.createElement(
            s.sG.div,
            {
              ref: (0, f.t)(l, t),
              ...D,
              id: o,
              "cmdk-item": "",
              role: "option",
              "aria-disabled": !!C,
              "aria-selected": !!h,
              "data-disabled": !!C,
              "data-selected": !!h,
              onPointerMove: C || i.getDisablePointerSelection() ? void 0 : w,
              onClick: C ? void 0 : y,
            },
            e.children
          );
        }),
        I = c.forwardRef((e, t) => {
          let { heading: r, children: n, forceMount: o, ...l } = e,
            a = (0, d.B)(),
            i = c.useRef(null),
            u = c.useRef(null),
            p = (0, d.B)(),
            v = x(),
            m = N(
              (e) =>
                !!o ||
                !1 === v.filter() ||
                !e.search ||
                e.filtered.groups.has(a)
            );
          F(() => v.group(a), []), L(a, i, [e.value, e.heading, u]);
          let h = c.useMemo(() => ({ id: a, forceMount: o }), [o]);
          return c.createElement(
            s.sG.div,
            {
              ref: (0, f.t)(i, t),
              ...l,
              "cmdk-group": "",
              role: "presentation",
              hidden: !m || void 0,
            },
            r &&
              c.createElement(
                "div",
                { ref: u, "cmdk-group-heading": "", "aria-hidden": !0, id: p },
                r
              ),
            T(e, (e) =>
              c.createElement(
                "div",
                {
                  "cmdk-group-items": "",
                  role: "group",
                  "aria-labelledby": r ? p : void 0,
                },
                c.createElement(k.Provider, { value: h }, e)
              )
            )
          );
        }),
        S = c.forwardRef((e, t) => {
          let { alwaysRender: r, ...n } = e,
            o = c.useRef(null),
            l = N((e) => !e.search);
          return r || l
            ? c.createElement(s.sG.div, {
                ref: (0, f.t)(o, t),
                ...n,
                "cmdk-separator": "",
                role: "separator",
              })
            : null;
        }),
        D = c.forwardRef((e, t) => {
          let { onValueChange: r, ...n } = e,
            o = null != e.value,
            l = E(),
            a = N((e) => e.search),
            i = N((e) => e.selectedItemId),
            u = x();
          return (
            c.useEffect(() => {
              null != e.value && l.setState("search", e.value);
            }, [e.value]),
            c.createElement(s.sG.input, {
              ref: t,
              ...n,
              "cmdk-input": "",
              autoComplete: "off",
              autoCorrect: "off",
              spellCheck: !1,
              "aria-autocomplete": "list",
              role: "combobox",
              "aria-expanded": !0,
              "aria-controls": u.listId,
              "aria-labelledby": u.labelId,
              "aria-activedescendant": i,
              id: u.inputId,
              type: "text",
              value: o ? e.value : a,
              onChange: (e) => {
                o || l.setState("search", e.target.value),
                  null == r || r(e.target.value);
              },
            })
          );
        }),
        A = c.forwardRef((e, t) => {
          let { children: r, label: n = "Suggestions", ...o } = e,
            l = c.useRef(null),
            a = c.useRef(null),
            i = N((e) => e.selectedItemId),
            u = x();
          return (
            c.useEffect(() => {
              if (a.current && l.current) {
                let e = a.current,
                  t = l.current,
                  r,
                  n = new ResizeObserver(() => {
                    r = requestAnimationFrame(() => {
                      let r = e.offsetHeight;
                      t.style.setProperty(
                        "--cmdk-list-height",
                        r.toFixed(1) + "px"
                      );
                    });
                  });
                return (
                  n.observe(e),
                  () => {
                    cancelAnimationFrame(r), n.unobserve(e);
                  }
                );
              }
            }, []),
            c.createElement(
              s.sG.div,
              {
                ref: (0, f.t)(l, t),
                ...o,
                "cmdk-list": "",
                role: "listbox",
                tabIndex: -1,
                "aria-activedescendant": i,
                "aria-label": n,
                id: u.listId,
              },
              T(e, (e) =>
                c.createElement(
                  "div",
                  { ref: (0, f.t)(a, u.listInnerRef), "cmdk-list-sizer": "" },
                  e
                )
              )
            )
          );
        }),
        P = c.forwardRef((e, t) => {
          let {
            open: r,
            onOpenChange: n,
            overlayClassName: o,
            contentClassName: l,
            container: a,
            ...i
          } = e;
          return c.createElement(
            u.bL,
            { open: r, onOpenChange: n },
            c.createElement(
              u.ZL,
              { container: a },
              c.createElement(u.hJ, { "cmdk-overlay": "", className: o }),
              c.createElement(
                u.UC,
                { "aria-label": e.label, "cmdk-dialog": "", className: l },
                c.createElement(R, { ref: t, ...i })
              )
            )
          );
        }),
        O = Object.assign(R, {
          List: A,
          Item: j,
          Input: D,
          Group: I,
          Separator: S,
          Dialog: P,
          Empty: c.forwardRef((e, t) =>
            N((e) => 0 === e.filtered.count)
              ? c.createElement(s.sG.div, {
                  ref: t,
                  ...e,
                  "cmdk-empty": "",
                  role: "presentation",
                })
              : null
          ),
          Loading: c.forwardRef((e, t) => {
            let { progress: r, children: n, label: o = "Loading...", ...l } = e;
            return c.createElement(
              s.sG.div,
              {
                ref: t,
                ...l,
                "cmdk-loading": "",
                role: "progressbar",
                "aria-valuenow": r,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-label": o,
              },
              T(e, (e) => c.createElement("div", { "aria-hidden": !0 }, e))
            );
          }),
        });
      function M(e) {
        let t = c.useRef(e);
        return (
          F(() => {
            t.current = e;
          }),
          t
        );
      }
      var F = "undefined" == typeof window ? c.useEffect : c.useLayoutEffect;
      function _(e) {
        let t = c.useRef();
        return void 0 === t.current && (t.current = e()), t;
      }
      function N(e) {
        let t = E(),
          r = () => e(t.snapshot());
        return c.useSyncExternalStore(t.subscribe, r, r);
      }
      function L(e, t, r) {
        let n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          o = c.useRef(),
          l = x();
        return (
          F(() => {
            var a;
            let i = (() => {
                var e;
                for (let t of r) {
                  if ("string" == typeof t) return t.trim();
                  if ("object" == typeof t && "current" in t)
                    return t.current
                      ? null == (e = t.current.textContent)
                        ? void 0
                        : e.trim()
                      : o.current;
                }
              })(),
              u = n.map((e) => e.trim());
            l.value(e, i, u),
              null == (a = t.current) || a.setAttribute(b, i),
              (o.current = i);
          }),
          o
        );
      }
      var B = () => {
        let [e, t] = c.useState(),
          r = _(() => new Map());
        return (
          F(() => {
            r.current.forEach((e) => e()), (r.current = new Map());
          }, [e]),
          (e, n) => {
            r.current.set(e, n), t({});
          }
        );
      };
      function T(e, t) {
        let r,
          { asChild: n, children: o } = e;
        return n && c.isValidElement(o)
          ? c.cloneElement(
              "function" == typeof (r = o.type)
                ? r(o.props)
                : "render" in r
                ? r.render(o.props)
                : o,
              { ref: o.ref },
              t(o.props.children)
            )
          : t(o);
      }
      var G = {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
      };
    },
    56559: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => i });
      var n = r(7620),
        o = r(7156),
        l = r(54568),
        a = n.forwardRef((e, t) =>
          (0, l.jsx)(o.sG.label, {
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
      var i = a;
    },
    60357: (e, t, r) => {
      "use strict";
      r.d(t, {
        Cj: () => a,
        DE: () => c,
        L4: () => i,
        Q3: () => u,
        wY: () => d,
      });
      var n = r(7620),
        o = r(70095),
        l = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect;
      function a() {
        let [e, t] = (0, n.useState)(null);
        return [
          e,
          (0, n.useCallback)(async (e) => {
            if (!(null == navigator ? void 0 : navigator.clipboard))
              return console.warn("Clipboard not supported"), !1;
            try {
              return await navigator.clipboard.writeText(e), t(e), !0;
            } catch (e) {
              return console.warn("Copy failed", e), t(null), !1;
            }
          }, []),
        ];
      }
      function i({
        countStart: e,
        countStop: t = 0,
        intervalMs: r = 1e3,
        isIncrement: o = !1,
      }) {
        let {
            count: a,
            increment: i,
            decrement: u,
            reset: c,
          } = (function (e) {
            let [t, r] = (0, n.useState)(e ?? 0),
              o = (0, n.useCallback)(() => {
                r((e) => e + 1);
              }, []);
            return {
              count: t,
              increment: o,
              decrement: (0, n.useCallback)(() => {
                r((e) => e - 1);
              }, []),
              reset: (0, n.useCallback)(() => {
                r(e ?? 0);
              }, [e]),
              setCount: r,
            };
          })(e),
          {
            value: s,
            setTrue: d,
            setFalse: f,
          } = (function (e = !1) {
            if ("boolean" != typeof e)
              throw Error("defaultValue must be `true` or `false`");
            let [t, r] = (0, n.useState)(e),
              o = (0, n.useCallback)(() => {
                r(!0);
              }, []),
              l = (0, n.useCallback)(() => {
                r(!1);
              }, []),
              a = (0, n.useCallback)(() => {
                r((e) => !e);
              }, []);
            return {
              value: t,
              setValue: r,
              setTrue: o,
              setFalse: l,
              toggle: a,
            };
          })(!1),
          p = (0, n.useCallback)(() => {
            f(), c();
          }, [f, c]);
        var v = (0, n.useCallback)(() => {
            if (a === t) return void f();
            o ? i() : u();
          }, [a, t, u, i, o, f]),
          m = s ? r : null;
        let h = (0, n.useRef)(v);
        return (
          l(() => {
            h.current = v;
          }, [v]),
          (0, n.useEffect)(() => {
            if (null === m) return;
            let e = setInterval(() => {
              h.current();
            }, m);
            return () => {
              clearInterval(e);
            };
          }, [m]),
          [a, { startCountdown: d, stopCountdown: f, resetCountdown: p }]
        );
      }
      function u(e, t, r) {
        let l = (null == r ? void 0 : r.equalityFn) ?? ((e, t) => e === t),
          a = e instanceof Function ? e() : e,
          [i, u] = (0, n.useState)(a),
          c = (0, n.useRef)(a),
          s = (function (e, t = 500, r) {
            let l = (0, n.useRef)();
            var a = () => {
              l.current && l.current.cancel();
            };
            let i = (0, n.useRef)(a);
            (i.current = a),
              (0, n.useEffect)(
                () => () => {
                  i.current();
                },
                []
              );
            let u = (0, n.useMemo)(() => {
              let n = o(e, t, r),
                a = (...e) => n(...e);
              return (
                (a.cancel = () => {
                  n.cancel();
                }),
                (a.isPending = () => !!l.current),
                (a.flush = () => n.flush()),
                a
              );
            }, [e, t, r]);
            return (
              (0, n.useEffect)(() => {
                l.current = o(e, t, r);
              }, [e, t, r]),
              u
            );
          })(u, t, r);
        return l(c.current, a) || (s(a), (c.current = a)), [i, s];
      }
      function c() {
        let [e, t] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            t(!0);
          }, []),
          e
        );
      }
      var s = { width: void 0, height: void 0 };
      function d(e) {
        let { ref: t, box: r = "content-box" } = e,
          [{ width: o, height: l }, a] = (0, n.useState)(s),
          i = (function () {
            let e = (0, n.useRef)(!1);
            return (
              (0, n.useEffect)(
                () => (
                  (e.current = !0),
                  () => {
                    e.current = !1;
                  }
                ),
                []
              ),
              (0, n.useCallback)(() => e.current, [])
            );
          })(),
          u = (0, n.useRef)({ ...s }),
          c = (0, n.useRef)(void 0);
        return (
          (c.current = e.onResize),
          (0, n.useEffect)(() => {
            if (
              !t.current ||
              "undefined" == typeof window ||
              !("ResizeObserver" in window)
            )
              return;
            let e = new ResizeObserver(([e]) => {
              let t =
                  "border-box" === r
                    ? "borderBoxSize"
                    : "device-pixel-content-box" === r
                    ? "devicePixelContentBoxSize"
                    : "contentBoxSize",
                n = f(e, t, "inlineSize"),
                o = f(e, t, "blockSize");
              if (u.current.width !== n || u.current.height !== o) {
                let e = { width: n, height: o };
                (u.current.width = n),
                  (u.current.height = o),
                  c.current ? c.current(e) : i() && a(e);
              }
            });
            return (
              e.observe(t.current, { box: r }),
              () => {
                e.disconnect();
              }
            );
          }, [r, t, i]),
          { width: o, height: l }
        );
      }
      function f(e, t, r) {
        return e[t]
          ? Array.isArray(e[t])
            ? e[t][0][r]
            : e[t][r]
          : "contentBoxSize" === t
          ? e.contentRect["inlineSize" === r ? "width" : "height"]
          : void 0;
      }
    },
    61773: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => o.a });
      var n = r(64930),
        o = r.n(n);
    },
    64930: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return u;
          },
          getImageProps: function () {
            return i;
          },
        });
      let n = r(21510),
        o = r(57258),
        l = r(73970),
        a = n._(r(50170));
      function i(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let u = l.Image;
    },
    70095: (e, t, r) => {
      var n = 0 / 0,
        o = /^\s+|\s+$/g,
        l = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        i = /^0o[0-7]+$/i,
        u = parseInt,
        c = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
        s = "object" == typeof self && self && self.Object === Object && self,
        d = c || s || Function("return this")(),
        f = Object.prototype.toString,
        p = Math.max,
        v = Math.min,
        m = function () {
          return d.Date.now();
        };
      function h(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function g(e) {
        if ("number" == typeof e) return e;
        if (
          "symbol" == typeof (t = e) ||
          (t && "object" == typeof t && "[object Symbol]" == f.call(t))
        )
          return n;
        if (h(e)) {
          var t,
            r = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = h(r) ? r + "" : r;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(o, "");
        var c = a.test(e);
        return c || i.test(e) ? u(e.slice(2), c ? 2 : 8) : l.test(e) ? n : +e;
      }
      e.exports = function (e, t, r) {
        var n,
          o,
          l,
          a,
          i,
          u,
          c = 0,
          s = !1,
          d = !1,
          f = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function b(t) {
          var r = n,
            l = o;
          return (n = o = void 0), (c = t), (a = e.apply(l, r));
        }
        function y(e) {
          var r = e - u,
            n = e - c;
          return void 0 === u || r >= t || r < 0 || (d && n >= l);
        }
        function w() {
          var e,
            r,
            n,
            o = m();
          if (y(o)) return x(o);
          i = setTimeout(
            w,
            ((e = o - u), (r = o - c), (n = t - e), d ? v(n, l - r) : n)
          );
        }
        function x(e) {
          return ((i = void 0), f && n) ? b(e) : ((n = o = void 0), a);
        }
        function C() {
          var e,
            r = m(),
            l = y(r);
          if (((n = arguments), (o = this), (u = r), l)) {
            if (void 0 === i)
              return (c = e = u), (i = setTimeout(w, t)), s ? b(e) : a;
            if (d) return (i = setTimeout(w, t)), b(u);
          }
          return void 0 === i && (i = setTimeout(w, t)), a;
        }
        return (
          (t = g(t) || 0),
          h(r) &&
            ((s = !!r.leading),
            (l = (d = "maxWait" in r) ? p(g(r.maxWait) || 0, t) : l),
            (f = "trailing" in r ? !!r.trailing : f)),
          (C.cancel = function () {
            void 0 !== i && clearTimeout(i), (c = 0), (n = u = o = i = void 0);
          }),
          (C.flush = function () {
            return void 0 === i ? a : x(m());
          }),
          C
        );
      };
    },
    75038: (e, t, r) => {
      "use strict";
      function n(e, [t, r]) {
        return Math.min(r, Math.max(t, e));
      }
      r.d(t, { q: () => n });
    },
  },
]);
