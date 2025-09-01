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
      r = new e.Error().stack;
    r &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[r] = "12aab826-2cae-46fe-8f04-7bc02f813cbc"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-12aab826-2cae-46fe-8f04-7bc02f813cbc"));
  })();
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7453],
  {
    5577: (e, r, n) => {
      "use strict";
      n.d(r, { RG: () => x, bL: () => I, q7: () => S });
      var t = n(7620),
        o = n(29254),
        a = n(91675),
        u = n(49640),
        l = n(80482),
        i = n(60728),
        c = n(7156),
        s = n(93568),
        d = n(87076),
        f = n(17644),
        p = n(54568),
        v = "rovingFocusGroup.onEntryFocus",
        m = { bubbles: !1, cancelable: !0 },
        h = "RovingFocusGroup",
        [g, w, b] = (0, a.N)(h),
        [y, x] = (0, l.A)(h, [b]),
        [C, R] = y(h),
        j = t.forwardRef((e, r) =>
          (0, p.jsx)(g.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, p.jsx)(g.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, p.jsx)(M, { ...e, ref: r }),
            }),
          })
        );
      j.displayName = h;
      var M = t.forwardRef((e, r) => {
          let {
              __scopeRovingFocusGroup: n,
              orientation: a,
              loop: l = !1,
              dir: i,
              currentTabStopId: g,
              defaultCurrentTabStopId: b,
              onCurrentTabStopIdChange: y,
              onEntryFocus: x,
              preventScrollOnEntryFocus: R = !1,
              ...j
            } = e,
            M = t.useRef(null),
            D = (0, u.s)(r, M),
            k = (0, f.jH)(i),
            [_, I] = (0, d.i)({
              prop: g,
              defaultProp: null != b ? b : null,
              onChange: y,
              caller: h,
            }),
            [S, T] = t.useState(!1),
            P = (0, s.c)(x),
            O = w(n),
            F = t.useRef(!1),
            [L, N] = t.useState(0);
          return (
            t.useEffect(() => {
              let e = M.current;
              if (e)
                return (
                  e.addEventListener(v, P), () => e.removeEventListener(v, P)
                );
            }, [P]),
            (0, p.jsx)(C, {
              scope: n,
              orientation: a,
              dir: k,
              loop: l,
              currentTabStopId: _,
              onItemFocus: t.useCallback((e) => I(e), [I]),
              onItemShiftTab: t.useCallback(() => T(!0), []),
              onFocusableItemAdd: t.useCallback(() => N((e) => e + 1), []),
              onFocusableItemRemove: t.useCallback(() => N((e) => e - 1), []),
              children: (0, p.jsx)(c.sG.div, {
                tabIndex: S || 0 === L ? -1 : 0,
                "data-orientation": a,
                ...j,
                ref: D,
                style: { outline: "none", ...e.style },
                onMouseDown: (0, o.m)(e.onMouseDown, () => {
                  F.current = !0;
                }),
                onFocus: (0, o.m)(e.onFocus, (e) => {
                  let r = !F.current;
                  if (e.target === e.currentTarget && r && !S) {
                    let r = new CustomEvent(v, m);
                    if (
                      (e.currentTarget.dispatchEvent(r), !r.defaultPrevented)
                    ) {
                      let e = O().filter((e) => e.focusable);
                      E(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === _),
                          ...e,
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        R
                      );
                    }
                  }
                  F.current = !1;
                }),
                onBlur: (0, o.m)(e.onBlur, () => T(!1)),
              }),
            })
          );
        }),
        D = "RovingFocusGroupItem",
        k = t.forwardRef((e, r) => {
          let {
              __scopeRovingFocusGroup: n,
              focusable: a = !0,
              active: u = !1,
              tabStopId: l,
              children: s,
              ...d
            } = e,
            f = (0, i.B)(),
            v = l || f,
            m = R(D, n),
            h = m.currentTabStopId === v,
            b = w(n),
            {
              onFocusableItemAdd: y,
              onFocusableItemRemove: x,
              currentTabStopId: C,
            } = m;
          return (
            t.useEffect(() => {
              if (a) return y(), () => x();
            }, [a, y, x]),
            (0, p.jsx)(g.ItemSlot, {
              scope: n,
              id: v,
              focusable: a,
              active: u,
              children: (0, p.jsx)(c.sG.span, {
                tabIndex: h ? 0 : -1,
                "data-orientation": m.orientation,
                ...d,
                ref: r,
                onMouseDown: (0, o.m)(e.onMouseDown, (e) => {
                  a ? m.onItemFocus(v) : e.preventDefault();
                }),
                onFocus: (0, o.m)(e.onFocus, () => m.onItemFocus(v)),
                onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
                  if ("Tab" === e.key && e.shiftKey)
                    return void m.onItemShiftTab();
                  if (e.target !== e.currentTarget) return;
                  let r = (function (e, r, n) {
                    var t;
                    let o =
                      ((t = e.key),
                      "rtl" !== n
                        ? t
                        : "ArrowLeft" === t
                        ? "ArrowRight"
                        : "ArrowRight" === t
                        ? "ArrowLeft"
                        : t);
                    if (
                      !(
                        "vertical" === r &&
                        ["ArrowLeft", "ArrowRight"].includes(o)
                      ) &&
                      !(
                        "horizontal" === r &&
                        ["ArrowUp", "ArrowDown"].includes(o)
                      )
                    )
                      return _[o];
                  })(e, m.orientation, m.dir);
                  if (void 0 !== r) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let n = b()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current);
                    if ("last" === r) n.reverse();
                    else if ("prev" === r || "next" === r) {
                      "prev" === r && n.reverse();
                      let t = n.indexOf(e.currentTarget);
                      n = m.loop
                        ? (function (e, r) {
                            return e.map((n, t) => e[(r + t) % e.length]);
                          })(n, t + 1)
                        : n.slice(t + 1);
                    }
                    setTimeout(() => E(n));
                  }
                }),
                children:
                  "function" == typeof s
                    ? s({ isCurrentTabStop: h, hasTabStop: null != C })
                    : s,
              }),
            })
          );
        });
      k.displayName = D;
      var _ = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      };
      function E(e) {
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = document.activeElement;
        for (let t of e)
          if (
            t === n ||
            (t.focus({ preventScroll: r }), document.activeElement !== n)
          )
            return;
      }
      var I = j,
        S = k;
    },
    26631: (e, r, n) => {
      "use strict";
      n.d(r, {
        H_: () => e4,
        UC: () => e7,
        YJ: () => e5,
        q7: () => e8,
        VF: () => re,
        JU: () => e2,
        ZL: () => e6,
        z6: () => e3,
        hN: () => e9,
        bL: () => e0,
        wv: () => rr,
        Pb: () => rn,
        G5: () => ro,
        ZP: () => rt,
        l9: () => e1,
      });
      var t = n(7620),
        o = n(29254),
        a = n(49640),
        u = n(80482),
        l = n(87076),
        i = n(7156),
        c = n(91675),
        s = n(17644),
        d = n(82491),
        f = n(17848),
        p = n(38552),
        v = n(60728),
        m = n(61611),
        h = n(93343),
        g = n(18400),
        w = n(5577),
        b = n(79649),
        y = n(93568),
        x = n(23027),
        C = n(23855),
        R = n(54568),
        j = ["Enter", " "],
        M = ["ArrowUp", "PageDown", "End"],
        D = ["ArrowDown", "PageUp", "Home", ...M],
        k = { ltr: [...j, "ArrowRight"], rtl: [...j, "ArrowLeft"] },
        _ = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
        E = "Menu",
        [I, S, T] = (0, c.N)(E),
        [P, O] = (0, u.A)(E, [T, m.Bk, w.RG]),
        F = (0, m.Bk)(),
        L = (0, w.RG)(),
        [N, A] = P(E),
        [G, K] = P(E),
        B = (e) => {
          let {
              __scopeMenu: r,
              open: n = !1,
              children: o,
              dir: a,
              onOpenChange: u,
              modal: l = !0,
            } = e,
            i = F(r),
            [c, d] = t.useState(null),
            f = t.useRef(!1),
            p = (0, y.c)(u),
            v = (0, s.jH)(a);
          return (
            t.useEffect(() => {
              let e = () => {
                  (f.current = !0),
                    document.addEventListener("pointerdown", r, {
                      capture: !0,
                      once: !0,
                    }),
                    document.addEventListener("pointermove", r, {
                      capture: !0,
                      once: !0,
                    });
                },
                r = () => (f.current = !1);
              return (
                document.addEventListener("keydown", e, { capture: !0 }),
                () => {
                  document.removeEventListener("keydown", e, { capture: !0 }),
                    document.removeEventListener("pointerdown", r, {
                      capture: !0,
                    }),
                    document.removeEventListener("pointermove", r, {
                      capture: !0,
                    });
                }
              );
            }, []),
            (0, R.jsx)(m.bL, {
              ...i,
              children: (0, R.jsx)(N, {
                scope: r,
                open: n,
                onOpenChange: p,
                content: c,
                onContentChange: d,
                children: (0, R.jsx)(G, {
                  scope: r,
                  onClose: t.useCallback(() => p(!1), [p]),
                  isUsingKeyboardRef: f,
                  dir: v,
                  modal: l,
                  children: o,
                }),
              }),
            })
          );
        };
      B.displayName = E;
      var z = t.forwardRef((e, r) => {
        let { __scopeMenu: n, ...t } = e,
          o = F(n);
        return (0, R.jsx)(m.Mz, { ...o, ...t, ref: r });
      });
      z.displayName = "MenuAnchor";
      var U = "MenuPortal",
        [V, q] = P(U, { forceMount: void 0 }),
        H = (e) => {
          let { __scopeMenu: r, forceMount: n, children: t, container: o } = e,
            a = A(U, r);
          return (0, R.jsx)(V, {
            scope: r,
            forceMount: n,
            children: (0, R.jsx)(g.C, {
              present: n || a.open,
              children: (0, R.jsx)(h.Z, {
                asChild: !0,
                container: o,
                children: t,
              }),
            }),
          });
        };
      H.displayName = U;
      var W = "MenuContent",
        [X, Y] = P(W),
        Z = t.forwardRef((e, r) => {
          let n = q(W, e.__scopeMenu),
            { forceMount: t = n.forceMount, ...o } = e,
            a = A(W, e.__scopeMenu),
            u = K(W, e.__scopeMenu);
          return (0, R.jsx)(I.Provider, {
            scope: e.__scopeMenu,
            children: (0, R.jsx)(g.C, {
              present: t || a.open,
              children: (0, R.jsx)(I.Slot, {
                scope: e.__scopeMenu,
                children: u.modal
                  ? (0, R.jsx)($, { ...o, ref: r })
                  : (0, R.jsx)(J, { ...o, ref: r }),
              }),
            }),
          });
        }),
        $ = t.forwardRef((e, r) => {
          let n = A(W, e.__scopeMenu),
            u = t.useRef(null),
            l = (0, a.s)(r, u);
          return (
            t.useEffect(() => {
              let e = u.current;
              if (e) return (0, x.Eq)(e);
            }, []),
            (0, R.jsx)(ee, {
              ...e,
              ref: l,
              trapFocus: n.open,
              disableOutsidePointerEvents: n.open,
              disableOutsideScroll: !0,
              onFocusOutside: (0, o.m)(
                e.onFocusOutside,
                (e) => e.preventDefault(),
                { checkForDefaultPrevented: !1 }
              ),
              onDismiss: () => n.onOpenChange(!1),
            })
          );
        }),
        J = t.forwardRef((e, r) => {
          let n = A(W, e.__scopeMenu);
          return (0, R.jsx)(ee, {
            ...e,
            ref: r,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => n.onOpenChange(!1),
          });
        }),
        Q = (0, b.TL)("MenuContent.ScrollLock"),
        ee = t.forwardRef((e, r) => {
          let {
              __scopeMenu: n,
              loop: u = !1,
              trapFocus: l,
              onOpenAutoFocus: i,
              onCloseAutoFocus: c,
              disableOutsidePointerEvents: s,
              onEntryFocus: v,
              onEscapeKeyDown: h,
              onPointerDownOutside: g,
              onFocusOutside: b,
              onInteractOutside: y,
              onDismiss: x,
              disableOutsideScroll: j,
              ...k
            } = e,
            _ = A(W, n),
            E = K(W, n),
            I = F(n),
            T = L(n),
            P = S(n),
            [O, N] = t.useState(null),
            G = t.useRef(null),
            B = (0, a.s)(r, G, _.onContentChange),
            z = t.useRef(0),
            U = t.useRef(""),
            V = t.useRef(0),
            q = t.useRef(null),
            H = t.useRef("right"),
            Y = t.useRef(0),
            Z = j ? C.A : t.Fragment;
          t.useEffect(() => () => window.clearTimeout(z.current), []),
            (0, f.Oh)();
          let $ = t.useCallback((e) => {
            var r, n;
            return (
              H.current === (null == (r = q.current) ? void 0 : r.side) &&
              (function (e, r) {
                return (
                  !!r &&
                  (function (e, r) {
                    let { x: n, y: t } = e,
                      o = !1;
                    for (let e = 0, a = r.length - 1; e < r.length; a = e++) {
                      let u = r[e],
                        l = r[a],
                        i = u.x,
                        c = u.y,
                        s = l.x,
                        d = l.y;
                      c > t != d > t &&
                        n < ((s - i) * (t - c)) / (d - c) + i &&
                        (o = !o);
                    }
                    return o;
                  })({ x: e.clientX, y: e.clientY }, r)
                );
              })(e, null == (n = q.current) ? void 0 : n.area)
            );
          }, []);
          return (0, R.jsx)(X, {
            scope: n,
            searchRef: U,
            onItemEnter: t.useCallback(
              (e) => {
                $(e) && e.preventDefault();
              },
              [$]
            ),
            onItemLeave: t.useCallback(
              (e) => {
                var r;
                $(e) || (null == (r = G.current) || r.focus(), N(null));
              },
              [$]
            ),
            onTriggerLeave: t.useCallback(
              (e) => {
                $(e) && e.preventDefault();
              },
              [$]
            ),
            pointerGraceTimerRef: V,
            onPointerGraceIntentChange: t.useCallback((e) => {
              q.current = e;
            }, []),
            children: (0, R.jsx)(Z, {
              ...(j ? { as: Q, allowPinchZoom: !0 } : void 0),
              children: (0, R.jsx)(p.n, {
                asChild: !0,
                trapped: l,
                onMountAutoFocus: (0, o.m)(i, (e) => {
                  var r;
                  e.preventDefault(),
                    null == (r = G.current) || r.focus({ preventScroll: !0 });
                }),
                onUnmountAutoFocus: c,
                children: (0, R.jsx)(d.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: s,
                  onEscapeKeyDown: h,
                  onPointerDownOutside: g,
                  onFocusOutside: b,
                  onInteractOutside: y,
                  onDismiss: x,
                  children: (0, R.jsx)(w.bL, {
                    asChild: !0,
                    ...T,
                    dir: E.dir,
                    orientation: "vertical",
                    loop: u,
                    currentTabStopId: O,
                    onCurrentTabStopIdChange: N,
                    onEntryFocus: (0, o.m)(v, (e) => {
                      E.isUsingKeyboardRef.current || e.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: (0, R.jsx)(m.UC, {
                      role: "menu",
                      "aria-orientation": "vertical",
                      "data-state": e_(_.open),
                      "data-radix-menu-content": "",
                      dir: E.dir,
                      ...I,
                      ...k,
                      ref: B,
                      style: { outline: "none", ...k.style },
                      onKeyDown: (0, o.m)(k.onKeyDown, (e) => {
                        let r =
                            e.target.closest("[data-radix-menu-content]") ===
                            e.currentTarget,
                          n = e.ctrlKey || e.altKey || e.metaKey,
                          t = 1 === e.key.length;
                        r &&
                          ("Tab" === e.key && e.preventDefault(),
                          !n &&
                            t &&
                            ((e) => {
                              var r, n;
                              let t = U.current + e,
                                o = P().filter((e) => !e.disabled),
                                a = document.activeElement,
                                u =
                                  null ==
                                  (r = o.find((e) => e.ref.current === a))
                                    ? void 0
                                    : r.textValue,
                                l = (function (e, r, n) {
                                  var t;
                                  let o =
                                      r.length > 1 &&
                                      Array.from(r).every((e) => e === r[0])
                                        ? r[0]
                                        : r,
                                    a = n ? e.indexOf(n) : -1,
                                    u =
                                      ((t = Math.max(a, 0)),
                                      e.map((r, n) => e[(t + n) % e.length]));
                                  1 === o.length &&
                                    (u = u.filter((e) => e !== n));
                                  let l = u.find((e) =>
                                    e.toLowerCase().startsWith(o.toLowerCase())
                                  );
                                  return l !== n ? l : void 0;
                                })(
                                  o.map((e) => e.textValue),
                                  t,
                                  u
                                ),
                                i =
                                  null == (n = o.find((e) => e.textValue === l))
                                    ? void 0
                                    : n.ref.current;
                              !(function e(r) {
                                (U.current = r),
                                  window.clearTimeout(z.current),
                                  "" !== r &&
                                    (z.current = window.setTimeout(
                                      () => e(""),
                                      1e3
                                    ));
                              })(t),
                                i && setTimeout(() => i.focus());
                            })(e.key));
                        let o = G.current;
                        if (e.target !== o || !D.includes(e.key)) return;
                        e.preventDefault();
                        let a = P()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        M.includes(e.key) && a.reverse(),
                          (function (e) {
                            let r = document.activeElement;
                            for (let n of e)
                              if (
                                n === r ||
                                (n.focus(), document.activeElement !== r)
                              )
                                return;
                          })(a);
                      }),
                      onBlur: (0, o.m)(e.onBlur, (e) => {
                        e.currentTarget.contains(e.target) ||
                          (window.clearTimeout(z.current), (U.current = ""));
                      }),
                      onPointerMove: (0, o.m)(
                        e.onPointerMove,
                        eS((e) => {
                          let r = e.target,
                            n = Y.current !== e.clientX;
                          e.currentTarget.contains(r) &&
                            n &&
                            ((H.current =
                              e.clientX > Y.current ? "right" : "left"),
                            (Y.current = e.clientX));
                        })
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      Z.displayName = W;
      var er = t.forwardRef((e, r) => {
        let { __scopeMenu: n, ...t } = e;
        return (0, R.jsx)(i.sG.div, { role: "group", ...t, ref: r });
      });
      er.displayName = "MenuGroup";
      var en = t.forwardRef((e, r) => {
        let { __scopeMenu: n, ...t } = e;
        return (0, R.jsx)(i.sG.div, { ...t, ref: r });
      });
      en.displayName = "MenuLabel";
      var et = "MenuItem",
        eo = "menu.itemSelect",
        ea = t.forwardRef((e, r) => {
          let { disabled: n = !1, onSelect: u, ...l } = e,
            c = t.useRef(null),
            s = K(et, e.__scopeMenu),
            d = Y(et, e.__scopeMenu),
            f = (0, a.s)(r, c),
            p = t.useRef(!1);
          return (0, R.jsx)(eu, {
            ...l,
            ref: f,
            disabled: n,
            onClick: (0, o.m)(e.onClick, () => {
              let e = c.current;
              if (!n && e) {
                let r = new CustomEvent(eo, { bubbles: !0, cancelable: !0 });
                e.addEventListener(eo, (e) => (null == u ? void 0 : u(e)), {
                  once: !0,
                }),
                  (0, i.hO)(e, r),
                  r.defaultPrevented ? (p.current = !1) : s.onClose();
              }
            }),
            onPointerDown: (r) => {
              var n;
              null == (n = e.onPointerDown) || n.call(e, r), (p.current = !0);
            },
            onPointerUp: (0, o.m)(e.onPointerUp, (e) => {
              var r;
              p.current || null == (r = e.currentTarget) || r.click();
            }),
            onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
              let r = "" !== d.searchRef.current;
              n ||
                (r && " " === e.key) ||
                (j.includes(e.key) &&
                  (e.currentTarget.click(), e.preventDefault()));
            }),
          });
        });
      ea.displayName = et;
      var eu = t.forwardRef((e, r) => {
          let { __scopeMenu: n, disabled: u = !1, textValue: l, ...c } = e,
            s = Y(et, n),
            d = L(n),
            f = t.useRef(null),
            p = (0, a.s)(r, f),
            [v, m] = t.useState(!1),
            [h, g] = t.useState("");
          return (
            t.useEffect(() => {
              let e = f.current;
              if (e) {
                var r;
                g((null != (r = e.textContent) ? r : "").trim());
              }
            }, [c.children]),
            (0, R.jsx)(I.ItemSlot, {
              scope: n,
              disabled: u,
              textValue: null != l ? l : h,
              children: (0, R.jsx)(w.q7, {
                asChild: !0,
                ...d,
                focusable: !u,
                children: (0, R.jsx)(i.sG.div, {
                  role: "menuitem",
                  "data-highlighted": v ? "" : void 0,
                  "aria-disabled": u || void 0,
                  "data-disabled": u ? "" : void 0,
                  ...c,
                  ref: p,
                  onPointerMove: (0, o.m)(
                    e.onPointerMove,
                    eS((e) => {
                      u
                        ? s.onItemLeave(e)
                        : (s.onItemEnter(e),
                          e.defaultPrevented ||
                            e.currentTarget.focus({ preventScroll: !0 }));
                    })
                  ),
                  onPointerLeave: (0, o.m)(
                    e.onPointerLeave,
                    eS((e) => s.onItemLeave(e))
                  ),
                  onFocus: (0, o.m)(e.onFocus, () => m(!0)),
                  onBlur: (0, o.m)(e.onBlur, () => m(!1)),
                }),
              }),
            })
          );
        }),
        el = t.forwardRef((e, r) => {
          let { checked: n = !1, onCheckedChange: t, ...a } = e;
          return (0, R.jsx)(em, {
            scope: e.__scopeMenu,
            checked: n,
            children: (0, R.jsx)(ea, {
              role: "menuitemcheckbox",
              "aria-checked": eE(n) ? "mixed" : n,
              ...a,
              ref: r,
              "data-state": eI(n),
              onSelect: (0, o.m)(
                a.onSelect,
                () => (null == t ? void 0 : t(!!eE(n) || !n)),
                { checkForDefaultPrevented: !1 }
              ),
            }),
          });
        });
      el.displayName = "MenuCheckboxItem";
      var ei = "MenuRadioGroup",
        [ec, es] = P(ei, { value: void 0, onValueChange: () => {} }),
        ed = t.forwardRef((e, r) => {
          let { value: n, onValueChange: t, ...o } = e,
            a = (0, y.c)(t);
          return (0, R.jsx)(ec, {
            scope: e.__scopeMenu,
            value: n,
            onValueChange: a,
            children: (0, R.jsx)(er, { ...o, ref: r }),
          });
        });
      ed.displayName = ei;
      var ef = "MenuRadioItem",
        ep = t.forwardRef((e, r) => {
          let { value: n, ...t } = e,
            a = es(ef, e.__scopeMenu),
            u = n === a.value;
          return (0, R.jsx)(em, {
            scope: e.__scopeMenu,
            checked: u,
            children: (0, R.jsx)(ea, {
              role: "menuitemradio",
              "aria-checked": u,
              ...t,
              ref: r,
              "data-state": eI(u),
              onSelect: (0, o.m)(
                t.onSelect,
                () => {
                  var e;
                  return null == (e = a.onValueChange) ? void 0 : e.call(a, n);
                },
                { checkForDefaultPrevented: !1 }
              ),
            }),
          });
        });
      ep.displayName = ef;
      var ev = "MenuItemIndicator",
        [em, eh] = P(ev, { checked: !1 }),
        eg = t.forwardRef((e, r) => {
          let { __scopeMenu: n, forceMount: t, ...o } = e,
            a = eh(ev, n);
          return (0, R.jsx)(g.C, {
            present: t || eE(a.checked) || !0 === a.checked,
            children: (0, R.jsx)(i.sG.span, {
              ...o,
              ref: r,
              "data-state": eI(a.checked),
            }),
          });
        });
      eg.displayName = ev;
      var ew = t.forwardRef((e, r) => {
        let { __scopeMenu: n, ...t } = e;
        return (0, R.jsx)(i.sG.div, {
          role: "separator",
          "aria-orientation": "horizontal",
          ...t,
          ref: r,
        });
      });
      ew.displayName = "MenuSeparator";
      var eb = t.forwardRef((e, r) => {
        let { __scopeMenu: n, ...t } = e,
          o = F(n);
        return (0, R.jsx)(m.i3, { ...o, ...t, ref: r });
      });
      eb.displayName = "MenuArrow";
      var ey = "MenuSub",
        [ex, eC] = P(ey),
        eR = (e) => {
          let {
              __scopeMenu: r,
              children: n,
              open: o = !1,
              onOpenChange: a,
            } = e,
            u = A(ey, r),
            l = F(r),
            [i, c] = t.useState(null),
            [s, d] = t.useState(null),
            f = (0, y.c)(a);
          return (
            t.useEffect(
              () => (!1 === u.open && f(!1), () => f(!1)),
              [u.open, f]
            ),
            (0, R.jsx)(m.bL, {
              ...l,
              children: (0, R.jsx)(N, {
                scope: r,
                open: o,
                onOpenChange: f,
                content: s,
                onContentChange: d,
                children: (0, R.jsx)(ex, {
                  scope: r,
                  contentId: (0, v.B)(),
                  triggerId: (0, v.B)(),
                  trigger: i,
                  onTriggerChange: c,
                  children: n,
                }),
              }),
            })
          );
        };
      eR.displayName = ey;
      var ej = "MenuSubTrigger",
        eM = t.forwardRef((e, r) => {
          let n = A(ej, e.__scopeMenu),
            u = K(ej, e.__scopeMenu),
            l = eC(ej, e.__scopeMenu),
            i = Y(ej, e.__scopeMenu),
            c = t.useRef(null),
            { pointerGraceTimerRef: s, onPointerGraceIntentChange: d } = i,
            f = { __scopeMenu: e.__scopeMenu },
            p = t.useCallback(() => {
              c.current && window.clearTimeout(c.current), (c.current = null);
            }, []);
          return (
            t.useEffect(() => p, [p]),
            t.useEffect(() => {
              let e = s.current;
              return () => {
                window.clearTimeout(e), d(null);
              };
            }, [s, d]),
            (0, R.jsx)(z, {
              asChild: !0,
              ...f,
              children: (0, R.jsx)(eu, {
                id: l.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": n.open,
                "aria-controls": l.contentId,
                "data-state": e_(n.open),
                ...e,
                ref: (0, a.t)(r, l.onTriggerChange),
                onClick: (r) => {
                  var t;
                  null == (t = e.onClick) || t.call(e, r),
                    e.disabled ||
                      r.defaultPrevented ||
                      (r.currentTarget.focus(), n.open || n.onOpenChange(!0));
                },
                onPointerMove: (0, o.m)(
                  e.onPointerMove,
                  eS((r) => {
                    i.onItemEnter(r),
                      !r.defaultPrevented &&
                        (e.disabled ||
                          n.open ||
                          c.current ||
                          (i.onPointerGraceIntentChange(null),
                          (c.current = window.setTimeout(() => {
                            n.onOpenChange(!0), p();
                          }, 100))));
                  })
                ),
                onPointerLeave: (0, o.m)(
                  e.onPointerLeave,
                  eS((e) => {
                    var r, t;
                    p();
                    let o =
                      null == (r = n.content)
                        ? void 0
                        : r.getBoundingClientRect();
                    if (o) {
                      let r = null == (t = n.content) ? void 0 : t.dataset.side,
                        a = "right" === r,
                        u = o[a ? "left" : "right"],
                        l = o[a ? "right" : "left"];
                      i.onPointerGraceIntentChange({
                        area: [
                          { x: e.clientX + (a ? -5 : 5), y: e.clientY },
                          { x: u, y: o.top },
                          { x: l, y: o.top },
                          { x: l, y: o.bottom },
                          { x: u, y: o.bottom },
                        ],
                        side: r,
                      }),
                        window.clearTimeout(s.current),
                        (s.current = window.setTimeout(
                          () => i.onPointerGraceIntentChange(null),
                          300
                        ));
                    } else {
                      if ((i.onTriggerLeave(e), e.defaultPrevented)) return;
                      i.onPointerGraceIntentChange(null);
                    }
                  })
                ),
                onKeyDown: (0, o.m)(e.onKeyDown, (r) => {
                  let t = "" !== i.searchRef.current;
                  if (
                    !e.disabled &&
                    (!t || " " !== r.key) &&
                    k[u.dir].includes(r.key)
                  ) {
                    var o;
                    n.onOpenChange(!0),
                      null == (o = n.content) || o.focus(),
                      r.preventDefault();
                  }
                }),
              }),
            })
          );
        });
      eM.displayName = ej;
      var eD = "MenuSubContent",
        ek = t.forwardRef((e, r) => {
          let n = q(W, e.__scopeMenu),
            { forceMount: u = n.forceMount, ...l } = e,
            i = A(W, e.__scopeMenu),
            c = K(W, e.__scopeMenu),
            s = eC(eD, e.__scopeMenu),
            d = t.useRef(null),
            f = (0, a.s)(r, d);
          return (0, R.jsx)(I.Provider, {
            scope: e.__scopeMenu,
            children: (0, R.jsx)(g.C, {
              present: u || i.open,
              children: (0, R.jsx)(I.Slot, {
                scope: e.__scopeMenu,
                children: (0, R.jsx)(ee, {
                  id: s.contentId,
                  "aria-labelledby": s.triggerId,
                  ...l,
                  ref: f,
                  align: "start",
                  side: "rtl" === c.dir ? "left" : "right",
                  disableOutsidePointerEvents: !1,
                  disableOutsideScroll: !1,
                  trapFocus: !1,
                  onOpenAutoFocus: (e) => {
                    var r;
                    c.isUsingKeyboardRef.current &&
                      (null == (r = d.current) || r.focus()),
                      e.preventDefault();
                  },
                  onCloseAutoFocus: (e) => e.preventDefault(),
                  onFocusOutside: (0, o.m)(e.onFocusOutside, (e) => {
                    e.target !== s.trigger && i.onOpenChange(!1);
                  }),
                  onEscapeKeyDown: (0, o.m)(e.onEscapeKeyDown, (e) => {
                    c.onClose(), e.preventDefault();
                  }),
                  onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
                    let r = e.currentTarget.contains(e.target),
                      n = _[c.dir].includes(e.key);
                    if (r && n) {
                      var t;
                      i.onOpenChange(!1),
                        null == (t = s.trigger) || t.focus(),
                        e.preventDefault();
                    }
                  }),
                }),
              }),
            }),
          });
        });
      function e_(e) {
        return e ? "open" : "closed";
      }
      function eE(e) {
        return "indeterminate" === e;
      }
      function eI(e) {
        return eE(e) ? "indeterminate" : e ? "checked" : "unchecked";
      }
      function eS(e) {
        return (r) => ("mouse" === r.pointerType ? e(r) : void 0);
      }
      ek.displayName = eD;
      var eT = "DropdownMenu",
        [eP, eO] = (0, u.A)(eT, [O]),
        eF = O(),
        [eL, eN] = eP(eT),
        eA = (e) => {
          let {
              __scopeDropdownMenu: r,
              children: n,
              dir: o,
              open: a,
              defaultOpen: u,
              onOpenChange: i,
              modal: c = !0,
            } = e,
            s = eF(r),
            d = t.useRef(null),
            [f, p] = (0, l.i)({
              prop: a,
              defaultProp: null != u && u,
              onChange: i,
              caller: eT,
            });
          return (0, R.jsx)(eL, {
            scope: r,
            triggerId: (0, v.B)(),
            triggerRef: d,
            contentId: (0, v.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: t.useCallback(() => p((e) => !e), [p]),
            modal: c,
            children: (0, R.jsx)(B, {
              ...s,
              open: f,
              onOpenChange: p,
              dir: o,
              modal: c,
              children: n,
            }),
          });
        };
      eA.displayName = eT;
      var eG = "DropdownMenuTrigger",
        eK = t.forwardRef((e, r) => {
          let { __scopeDropdownMenu: n, disabled: t = !1, ...u } = e,
            l = eN(eG, n),
            c = eF(n);
          return (0, R.jsx)(z, {
            asChild: !0,
            ...c,
            children: (0, R.jsx)(i.sG.button, {
              type: "button",
              id: l.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": l.open,
              "aria-controls": l.open ? l.contentId : void 0,
              "data-state": l.open ? "open" : "closed",
              "data-disabled": t ? "" : void 0,
              disabled: t,
              ...u,
              ref: (0, a.t)(r, l.triggerRef),
              onPointerDown: (0, o.m)(e.onPointerDown, (e) => {
                !t &&
                  0 === e.button &&
                  !1 === e.ctrlKey &&
                  (l.onOpenToggle(), l.open || e.preventDefault());
              }),
              onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
                !t &&
                  (["Enter", " "].includes(e.key) && l.onOpenToggle(),
                  "ArrowDown" === e.key && l.onOpenChange(!0),
                  ["Enter", " ", "ArrowDown"].includes(e.key) &&
                    e.preventDefault());
              }),
            }),
          });
        });
      eK.displayName = eG;
      var eB = (e) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          t = eF(r);
        return (0, R.jsx)(H, { ...t, ...n });
      };
      eB.displayName = "DropdownMenuPortal";
      var ez = "DropdownMenuContent",
        eU = t.forwardRef((e, r) => {
          let { __scopeDropdownMenu: n, ...a } = e,
            u = eN(ez, n),
            l = eF(n),
            i = t.useRef(!1);
          return (0, R.jsx)(Z, {
            id: u.contentId,
            "aria-labelledby": u.triggerId,
            ...l,
            ...a,
            ref: r,
            onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e) => {
              var r;
              i.current || null == (r = u.triggerRef.current) || r.focus(),
                (i.current = !1),
                e.preventDefault();
            }),
            onInteractOutside: (0, o.m)(e.onInteractOutside, (e) => {
              let r = e.detail.originalEvent,
                n = 0 === r.button && !0 === r.ctrlKey,
                t = 2 === r.button || n;
              (!u.modal || t) && (i.current = !0);
            }),
            style: {
              ...e.style,
              "--radix-dropdown-menu-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-dropdown-menu-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-dropdown-menu-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-dropdown-menu-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-dropdown-menu-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          });
        });
      eU.displayName = ez;
      var eV = t.forwardRef((e, r) => {
        let { __scopeDropdownMenu: n, ...t } = e,
          o = eF(n);
        return (0, R.jsx)(er, { ...o, ...t, ref: r });
      });
      eV.displayName = "DropdownMenuGroup";
      var eq = t.forwardRef((e, r) => {
        let { __scopeDropdownMenu: n, ...t } = e,
          o = eF(n);
        return (0, R.jsx)(en, { ...o, ...t, ref: r });
      });
      eq.displayName = "DropdownMenuLabel";
      var eH = t.forwardRef((e, r) => {
        let { __scopeDropdownMenu: n, ...t } = e,
          o = eF(n);
        return (0, R.jsx)(ea, { ...o, ...t, ref: r });
      });
      eH.displayName = "DropdownMenuItem";
      var eW = t.forwardRef((e, r) => {
        let { __scopeDropdownMenu: n, ...t } = e,
          o = eF(n);
        return (0, R.jsx)(el, { ...o, ...t, ref: r });
      });
      eW.displayName = "DropdownMenuCheckboxItem";
      var eX = t.forwardRef((e, r) => {
        let { __scopeDropdownMenu: n, ...t } = e,
          o = eF(n);
        return (0, R.jsx)(ed, { ...o, ...t, ref: r });
      });
      eX.displayName = "DropdownMenuRadioGroup";
      var eY = t.forwardRef((e, r) => {
        let { __scopeDropdownMenu: n, ...t } = e,
          o = eF(n);
        return (0, R.jsx)(ep, { ...o, ...t, ref: r });
      });
      eY.displayName = "DropdownMenuRadioItem";
      var eZ = t.forwardRef((e, r) => {
        let { __scopeDropdownMenu: n, ...t } = e,
          o = eF(n);
        return (0, R.jsx)(eg, { ...o, ...t, ref: r });
      });
      eZ.displayName = "DropdownMenuItemIndicator";
      var e$ = t.forwardRef((e, r) => {
        let { __scopeDropdownMenu: n, ...t } = e,
          o = eF(n);
        return (0, R.jsx)(ew, { ...o, ...t, ref: r });
      });
      (e$.displayName = "DropdownMenuSeparator"),
        (t.forwardRef((e, r) => {
          let { __scopeDropdownMenu: n, ...t } = e,
            o = eF(n);
          return (0, R.jsx)(eb, { ...o, ...t, ref: r });
        }).displayName = "DropdownMenuArrow");
      var eJ = t.forwardRef((e, r) => {
        let { __scopeDropdownMenu: n, ...t } = e,
          o = eF(n);
        return (0, R.jsx)(eM, { ...o, ...t, ref: r });
      });
      eJ.displayName = "DropdownMenuSubTrigger";
      var eQ = t.forwardRef((e, r) => {
        let { __scopeDropdownMenu: n, ...t } = e,
          o = eF(n);
        return (0, R.jsx)(ek, {
          ...o,
          ...t,
          ref: r,
          style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width":
              "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      eQ.displayName = "DropdownMenuSubContent";
      var e0 = eA,
        e1 = eK,
        e6 = eB,
        e7 = eU,
        e5 = eV,
        e2 = eq,
        e8 = eH,
        e4 = eW,
        e3 = eX,
        e9 = eY,
        re = eZ,
        rr = e$,
        rn = (e) => {
          let {
              __scopeDropdownMenu: r,
              children: n,
              open: t,
              onOpenChange: o,
              defaultOpen: a,
            } = e,
            u = eF(r),
            [i, c] = (0, l.i)({
              prop: t,
              defaultProp: null != a && a,
              onChange: o,
              caller: "DropdownMenuSub",
            });
          return (0, R.jsx)(eR, {
            ...u,
            open: i,
            onOpenChange: c,
            children: n,
          });
        },
        rt = eJ,
        ro = eQ;
    },
    60357: (e, r, n) => {
      "use strict";
      n.d(r, {
        Cj: () => u,
        DE: () => c,
        L4: () => l,
        Q3: () => i,
        wY: () => d,
      });
      var t = n(7620),
        o = n(70095),
        a = "undefined" != typeof window ? t.useLayoutEffect : t.useEffect;
      function u() {
        let [e, r] = (0, t.useState)(null);
        return [
          e,
          (0, t.useCallback)(async (e) => {
            if (!(null == navigator ? void 0 : navigator.clipboard))
              return console.warn("Clipboard not supported"), !1;
            try {
              return await navigator.clipboard.writeText(e), r(e), !0;
            } catch (e) {
              return console.warn("Copy failed", e), r(null), !1;
            }
          }, []),
        ];
      }
      function l({
        countStart: e,
        countStop: r = 0,
        intervalMs: n = 1e3,
        isIncrement: o = !1,
      }) {
        let {
            count: u,
            increment: l,
            decrement: i,
            reset: c,
          } = (function (e) {
            let [r, n] = (0, t.useState)(e ?? 0),
              o = (0, t.useCallback)(() => {
                n((e) => e + 1);
              }, []);
            return {
              count: r,
              increment: o,
              decrement: (0, t.useCallback)(() => {
                n((e) => e - 1);
              }, []),
              reset: (0, t.useCallback)(() => {
                n(e ?? 0);
              }, [e]),
              setCount: n,
            };
          })(e),
          {
            value: s,
            setTrue: d,
            setFalse: f,
          } = (function (e = !1) {
            if ("boolean" != typeof e)
              throw Error("defaultValue must be `true` or `false`");
            let [r, n] = (0, t.useState)(e),
              o = (0, t.useCallback)(() => {
                n(!0);
              }, []),
              a = (0, t.useCallback)(() => {
                n(!1);
              }, []),
              u = (0, t.useCallback)(() => {
                n((e) => !e);
              }, []);
            return {
              value: r,
              setValue: n,
              setTrue: o,
              setFalse: a,
              toggle: u,
            };
          })(!1),
          p = (0, t.useCallback)(() => {
            f(), c();
          }, [f, c]);
        var v = (0, t.useCallback)(() => {
            if (u === r) return void f();
            o ? l() : i();
          }, [u, r, i, l, o, f]),
          m = s ? n : null;
        let h = (0, t.useRef)(v);
        return (
          a(() => {
            h.current = v;
          }, [v]),
          (0, t.useEffect)(() => {
            if (null === m) return;
            let e = setInterval(() => {
              h.current();
            }, m);
            return () => {
              clearInterval(e);
            };
          }, [m]),
          [u, { startCountdown: d, stopCountdown: f, resetCountdown: p }]
        );
      }
      function i(e, r, n) {
        let a = (null == n ? void 0 : n.equalityFn) ?? ((e, r) => e === r),
          u = e instanceof Function ? e() : e,
          [l, i] = (0, t.useState)(u),
          c = (0, t.useRef)(u),
          s = (function (e, r = 500, n) {
            let a = (0, t.useRef)();
            var u = () => {
              a.current && a.current.cancel();
            };
            let l = (0, t.useRef)(u);
            (l.current = u),
              (0, t.useEffect)(
                () => () => {
                  l.current();
                },
                []
              );
            let i = (0, t.useMemo)(() => {
              let t = o(e, r, n),
                u = (...e) => t(...e);
              return (
                (u.cancel = () => {
                  t.cancel();
                }),
                (u.isPending = () => !!a.current),
                (u.flush = () => t.flush()),
                u
              );
            }, [e, r, n]);
            return (
              (0, t.useEffect)(() => {
                a.current = o(e, r, n);
              }, [e, r, n]),
              i
            );
          })(i, r, n);
        return a(c.current, u) || (s(u), (c.current = u)), [l, s];
      }
      function c() {
        let [e, r] = (0, t.useState)(!1);
        return (
          (0, t.useEffect)(() => {
            r(!0);
          }, []),
          e
        );
      }
      var s = { width: void 0, height: void 0 };
      function d(e) {
        let { ref: r, box: n = "content-box" } = e,
          [{ width: o, height: a }, u] = (0, t.useState)(s),
          l = (function () {
            let e = (0, t.useRef)(!1);
            return (
              (0, t.useEffect)(
                () => (
                  (e.current = !0),
                  () => {
                    e.current = !1;
                  }
                ),
                []
              ),
              (0, t.useCallback)(() => e.current, [])
            );
          })(),
          i = (0, t.useRef)({ ...s }),
          c = (0, t.useRef)(void 0);
        return (
          (c.current = e.onResize),
          (0, t.useEffect)(() => {
            if (
              !r.current ||
              "undefined" == typeof window ||
              !("ResizeObserver" in window)
            )
              return;
            let e = new ResizeObserver(([e]) => {
              let r =
                  "border-box" === n
                    ? "borderBoxSize"
                    : "device-pixel-content-box" === n
                    ? "devicePixelContentBoxSize"
                    : "contentBoxSize",
                t = f(e, r, "inlineSize"),
                o = f(e, r, "blockSize");
              if (i.current.width !== t || i.current.height !== o) {
                let e = { width: t, height: o };
                (i.current.width = t),
                  (i.current.height = o),
                  c.current ? c.current(e) : l() && u(e);
              }
            });
            return (
              e.observe(r.current, { box: n }),
              () => {
                e.disconnect();
              }
            );
          }, [n, r, l]),
          { width: o, height: a }
        );
      }
      function f(e, r, n) {
        return e[r]
          ? Array.isArray(e[r])
            ? e[r][0][n]
            : e[r][n]
          : "contentBoxSize" === r
          ? e.contentRect["inlineSize" === n ? "width" : "height"]
          : void 0;
      }
    },
    70095: (e, r, n) => {
      var t = 0 / 0,
        o = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        i = parseInt,
        c = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
        s = "object" == typeof self && self && self.Object === Object && self,
        d = c || s || Function("return this")(),
        f = Object.prototype.toString,
        p = Math.max,
        v = Math.min,
        m = function () {
          return d.Date.now();
        };
      function h(e) {
        var r = typeof e;
        return !!e && ("object" == r || "function" == r);
      }
      function g(e) {
        if ("number" == typeof e) return e;
        if (
          "symbol" == typeof (r = e) ||
          (r && "object" == typeof r && "[object Symbol]" == f.call(r))
        )
          return t;
        if (h(e)) {
          var r,
            n = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = h(n) ? n + "" : n;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(o, "");
        var c = u.test(e);
        return c || l.test(e) ? i(e.slice(2), c ? 2 : 8) : a.test(e) ? t : +e;
      }
      e.exports = function (e, r, n) {
        var t,
          o,
          a,
          u,
          l,
          i,
          c = 0,
          s = !1,
          d = !1,
          f = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function w(r) {
          var n = t,
            a = o;
          return (t = o = void 0), (c = r), (u = e.apply(a, n));
        }
        function b(e) {
          var n = e - i,
            t = e - c;
          return void 0 === i || n >= r || n < 0 || (d && t >= a);
        }
        function y() {
          var e,
            n,
            t,
            o = m();
          if (b(o)) return x(o);
          l = setTimeout(
            y,
            ((e = o - i), (n = o - c), (t = r - e), d ? v(t, a - n) : t)
          );
        }
        function x(e) {
          return ((l = void 0), f && t) ? w(e) : ((t = o = void 0), u);
        }
        function C() {
          var e,
            n = m(),
            a = b(n);
          if (((t = arguments), (o = this), (i = n), a)) {
            if (void 0 === l)
              return (c = e = i), (l = setTimeout(y, r)), s ? w(e) : u;
            if (d) return (l = setTimeout(y, r)), w(i);
          }
          return void 0 === l && (l = setTimeout(y, r)), u;
        }
        return (
          (r = g(r) || 0),
          h(n) &&
            ((s = !!n.leading),
            (a = (d = "maxWait" in n) ? p(g(n.maxWait) || 0, r) : a),
            (f = "trailing" in n ? !!n.trailing : f)),
          (C.cancel = function () {
            void 0 !== l && clearTimeout(l), (c = 0), (t = i = o = l = void 0);
          }),
          (C.flush = function () {
            return void 0 === l ? u : x(m());
          }),
          C
        );
      };
    },
    81603: (e, r, n) => {
      "use strict";
      n.d(r, { Qg: () => u, bL: () => i });
      var t = n(7620),
        o = n(7156),
        a = n(54568),
        u = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
        }),
        l = t.forwardRef((e, r) =>
          (0, a.jsx)(o.sG.span, { ...e, ref: r, style: { ...u, ...e.style } })
        );
      l.displayName = "VisuallyHidden";
      var i = l;
    },
  },
]);
