"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6489],
  {
    9744: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.344.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(7461).Z)("Menu", [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
      ]);
    },
    2235: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.344.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(7461).Z)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    7907: function (e, t, n) {
      var r = n(5313);
      n.o(r, "usePathname") &&
        n.d(t, {
          usePathname: function () {
            return r.usePathname;
          },
        }),
        n.o(r, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return r.useRouter;
            },
          });
    },
    7729: function (e, t, n) {
      let r, i;
      n.d(t, {
        x8: function () {
          return te;
        },
        VY: function () {
          return e8;
        },
        dk: function () {
          return e9;
        },
        aV: function () {
          return e5;
        },
        h_: function () {
          return e4;
        },
        fC: function () {
          return e6;
        },
        Dx: function () {
          return e3;
        },
        xz: function () {
          return e7;
        },
      });
      var o,
        a,
        s,
        u,
        l,
        c,
        d = n(2110),
        h = n(2265),
        f = n.t(h, 2);
      function p(e, t) {
        let { checkForDefaultPrevented: n = !0 } =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return function (r) {
          if ((null == e || e(r), !1 === n || !r.defaultPrevented))
            return null == t ? void 0 : t(r);
        };
      }
      var m = n(1266);
      let y = (null == globalThis ? void 0 : globalThis.document)
          ? h.useLayoutEffect
          : () => {},
        g = f["useId".toString()] || (() => void 0),
        _ = 0;
      function b(e) {
        let [t, n] = h.useState(g());
        return (
          y(() => {
            e || n((e) => (null != e ? e : String(_++)));
          }, [e]),
          e || (t ? "radix-".concat(t) : "")
        );
      }
      function w(e) {
        let t = (0, h.useRef)(e);
        return (
          (0, h.useEffect)(() => {
            t.current = e;
          }),
          (0, h.useMemo)(
            () =>
              function () {
                for (
                  var e, n = arguments.length, r = Array(n), i = 0;
                  i < n;
                  i++
                )
                  r[i] = arguments[i];
                return null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.call(t, ...r);
              },
            []
          )
        );
      }
      var E = n(9586);
      let C = "dismissableLayer.update",
        O = (0, h.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        M = (0, h.forwardRef)((e, t) => {
          var n;
          let {
              disableOutsidePointerEvents: i = !1,
              onEscapeKeyDown: o,
              onPointerDownOutside: a,
              onFocusOutside: s,
              onInteractOutside: u,
              onDismiss: l,
              ...c
            } = e,
            f = (0, h.useContext)(O),
            [y, g] = (0, h.useState)(null),
            _ =
              null !== (n = null == y ? void 0 : y.ownerDocument) &&
              void 0 !== n
                ? n
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, b] = (0, h.useState)({}),
            M = (0, m.e)(t, (e) => g(e)),
            S = Array.from(f.layers),
            [T] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1),
            k = S.indexOf(T),
            R = y ? S.indexOf(y) : -1,
            A = f.layersWithOutsidePointerEventsDisabled.size > 0,
            F = R >= k,
            N = (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == globalThis
                    ? void 0
                    : globalThis.document,
                n = w(e),
                r = (0, h.useRef)(!1),
                i = (0, h.useRef)(() => {});
              return (
                (0, h.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = { originalEvent: e };
                        function o() {
                          D("dismissableLayer.pointerDownOutside", n, r, {
                            discrete: !0,
                          });
                        }
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", i.current),
                            (i.current = o),
                            t.addEventListener("click", i.current, {
                              once: !0,
                            }))
                          : o();
                      } else t.removeEventListener("click", i.current);
                      r.current = !1;
                    },
                    o = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(o),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", i.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...f.branches].some((e) => e.contains(t));
              !F ||
                n ||
                (null == a || a(e),
                null == u || u(e),
                e.defaultPrevented || null == l || l());
            }, _),
            x = (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == globalThis
                    ? void 0
                    : globalThis.document,
                n = w(e),
                r = (0, h.useRef)(!1);
              return (
                (0, h.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      D(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...f.branches].some((e) => e.contains(t)) ||
                (null == s || s(e),
                null == u || u(e),
                e.defaultPrevented || null == l || l());
            }, _);
          return (
            !(function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == globalThis
                    ? void 0
                    : globalThis.document,
                n = w(e);
              (0, h.useEffect)(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e),
                  () => t.removeEventListener("keydown", e)
                );
              }, [n, t]);
            })((e) => {
              R !== f.layers.size - 1 ||
                (null == o || o(e),
                !e.defaultPrevented && l && (e.preventDefault(), l()));
            }, _),
            (0, h.useEffect)(() => {
              if (y)
                return (
                  i &&
                    (0 === f.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = _.body.style.pointerEvents),
                      (_.body.style.pointerEvents = "none")),
                    f.layersWithOutsidePointerEventsDisabled.add(y)),
                  f.layers.add(y),
                  P(),
                  () => {
                    i &&
                      1 === f.layersWithOutsidePointerEventsDisabled.size &&
                      (_.body.style.pointerEvents = r);
                  }
                );
            }, [y, _, i, f]),
            (0, h.useEffect)(
              () => () => {
                y &&
                  (f.layers.delete(y),
                  f.layersWithOutsidePointerEventsDisabled.delete(y),
                  P());
              },
              [y, f]
            ),
            (0, h.useEffect)(() => {
              let e = () => b({});
              return (
                document.addEventListener(C, e),
                () => document.removeEventListener(C, e)
              );
            }, []),
            (0, h.createElement)(
              E.WV.div,
              (0, d.Z)({}, c, {
                ref: M,
                style: {
                  pointerEvents: A ? (F ? "auto" : "none") : void 0,
                  ...e.style,
                },
                onFocusCapture: p(e.onFocusCapture, x.onFocusCapture),
                onBlurCapture: p(e.onBlurCapture, x.onBlurCapture),
                onPointerDownCapture: p(
                  e.onPointerDownCapture,
                  N.onPointerDownCapture
                ),
              })
            )
          );
        });
      function P() {
        let e = new CustomEvent(C);
        document.dispatchEvent(e);
      }
      function D(e, t, n, r) {
        let { discrete: i } = r,
          o = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && o.addEventListener(e, t, { once: !0 }),
          i ? (0, E.jH)(o, a) : o.dispatchEvent(a);
      }
      let S = "focusScope.autoFocusOnMount",
        T = "focusScope.autoFocusOnUnmount",
        k = { bubbles: !1, cancelable: !0 },
        R = (0, h.forwardRef)((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: i,
              onUnmountAutoFocus: o,
              ...a
            } = e,
            [s, u] = (0, h.useState)(null),
            l = w(i),
            c = w(o),
            f = (0, h.useRef)(null),
            p = (0, m.e)(t, (e) => u(e)),
            y = (0, h.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, h.useEffect)(() => {
            if (r) {
              function e(e) {
                if (y.paused || !s) return;
                let t = e.target;
                s.contains(t) ? (f.current = t) : N(f.current, { select: !0 });
              }
              function t(e) {
                if (y.paused || !s) return;
                let t = e.relatedTarget;
                null === t || s.contains(t) || N(f.current, { select: !0 });
              }
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && N(s);
              });
              return (
                s && n.observe(s, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, s, y.paused]),
            (0, h.useEffect)(() => {
              if (s) {
                x.add(y);
                let e = document.activeElement;
                if (!s.contains(e)) {
                  let t = new CustomEvent(S, k);
                  s.addEventListener(S, l),
                    s.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (N(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        A(s).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && N(s));
                }
                return () => {
                  s.removeEventListener(S, l),
                    setTimeout(() => {
                      let t = new CustomEvent(T, k);
                      s.addEventListener(T, c),
                        s.dispatchEvent(t),
                        t.defaultPrevented ||
                          N(null != e ? e : document.body, { select: !0 }),
                        s.removeEventListener(T, c),
                        x.remove(y);
                    }, 0);
                };
              }
            }, [s, l, c, y]);
          let g = (0, h.useCallback)(
            (e) => {
              if ((!n && !r) || y.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                i = document.activeElement;
              if (t && i) {
                let t = e.currentTarget,
                  [r, o] = (function (e) {
                    let t = A(e);
                    return [F(t, e), F(t.reverse(), e)];
                  })(t);
                r && o
                  ? e.shiftKey || i !== o
                    ? e.shiftKey &&
                      i === r &&
                      (e.preventDefault(), n && N(o, { select: !0 }))
                    : (e.preventDefault(), n && N(r, { select: !0 }))
                  : i === t && e.preventDefault();
              }
            },
            [n, r, y.paused]
          );
          return (0, h.createElement)(
            E.WV.div,
            (0, d.Z)({ tabIndex: -1 }, a, { ref: p, onKeyDown: g })
          );
        });
      function A(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function F(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function N(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      let x =
        ((i = []),
        {
          add(e) {
            let t = i[0];
            e !== t && (null == t || t.pause()), (i = W(i, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (i = W(i, e))[0]) || void 0 === t || t.resume();
          },
        });
      function W(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      var I = n(4887);
      let L = (0, h.forwardRef)((e, t) => {
          var n;
          let {
            container: r = null == globalThis
              ? void 0
              : null === (n = globalThis.document) || void 0 === n
              ? void 0
              : n.body,
            ...i
          } = e;
          return r
            ? I.createPortal(
                (0, h.createElement)(E.WV.div, (0, d.Z)({}, i, { ref: t })),
                r
              )
            : null;
        }),
        q = (e) => {
          let { present: t, children: n } = e,
            r = (function (e) {
              var t, n;
              let [r, i] = (0, h.useState)(),
                o = (0, h.useRef)({}),
                a = (0, h.useRef)(e),
                s = (0, h.useRef)("none"),
                [u, l] =
                  ((t = e ? "mounted" : "unmounted"),
                  (n = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  (0, h.useReducer)((e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e;
                  }, t));
              return (
                (0, h.useEffect)(() => {
                  let e = Q(o.current);
                  s.current = "mounted" === u ? e : "none";
                }, [u]),
                y(() => {
                  let t = o.current,
                    n = a.current;
                  if (n !== e) {
                    let r = s.current,
                      i = Q(t);
                    e
                      ? l("MOUNT")
                      : "none" === i ||
                        (null == t ? void 0 : t.display) === "none"
                      ? l("UNMOUNT")
                      : n && r !== i
                      ? l("ANIMATION_OUT")
                      : l("UNMOUNT"),
                      (a.current = e);
                  }
                }, [e, l]),
                y(() => {
                  if (r) {
                    let e = (e) => {
                        let t = Q(o.current).includes(e.animationName);
                        e.target === r &&
                          t &&
                          (0, I.flushSync)(() => l("ANIMATION_END"));
                      },
                      t = (e) => {
                        e.target === r && (s.current = Q(o.current));
                      };
                    return (
                      r.addEventListener("animationstart", t),
                      r.addEventListener("animationcancel", e),
                      r.addEventListener("animationend", e),
                      () => {
                        r.removeEventListener("animationstart", t),
                          r.removeEventListener("animationcancel", e),
                          r.removeEventListener("animationend", e);
                      }
                    );
                  }
                  l("ANIMATION_END");
                }, [r, l]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(u),
                  ref: (0, h.useCallback)((e) => {
                    e && (o.current = getComputedStyle(e)), i(e);
                  }, []),
                }
              );
            })(t),
            i =
              "function" == typeof n
                ? n({ present: r.isPresent })
                : h.Children.only(n),
            o = (0, m.e)(r.ref, i.ref);
          return "function" == typeof n || r.isPresent
            ? (0, h.cloneElement)(i, { ref: o })
            : null;
        };
      function Q(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      q.displayName = "Presence";
      let Z = 0;
      function U() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
      var K = function () {
        return (K =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function V(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        return n;
      }
      "function" == typeof SuppressedError && SuppressedError;
      var j = "right-scroll-bar-position",
        H = "width-before-scroll-bar";
      function B(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var G = new WeakMap(),
        z =
          (void 0 === o && (o = {}),
          ((void 0 === a &&
            (a = function (e) {
              return e;
            }),
          (s = []),
          (u = !1),
          (l = {
            read: function () {
              if (u)
                throw Error(
                  "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                );
              return s.length ? s[s.length - 1] : null;
            },
            useMedium: function (e) {
              var t = a(e, u);
              return (
                s.push(t),
                function () {
                  s = s.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (u = !0; s.length; ) {
                var t = s;
                (s = []), t.forEach(e);
              }
              s = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return s;
                },
              };
            },
            assignMedium: function (e) {
              u = !0;
              var t = [];
              if (s.length) {
                var n = s;
                (s = []), n.forEach(e), (t = s);
              }
              var r = function () {
                  var n = t;
                  (t = []), n.forEach(e);
                },
                i = function () {
                  return Promise.resolve().then(r);
                };
              i(),
                (s = {
                  push: function (e) {
                    t.push(e), i();
                  },
                  filter: function (e) {
                    return (t = t.filter(e)), s;
                  },
                });
            },
          })).options = K({ async: !0, ssr: !1 }, o)),
          l),
        X = function () {},
        Y = h.forwardRef(function (e, t) {
          var n,
            r,
            i,
            o,
            a = h.useRef(null),
            s = h.useState({
              onScrollCapture: X,
              onWheelCapture: X,
              onTouchMoveCapture: X,
            }),
            u = s[0],
            l = s[1],
            c = e.forwardProps,
            d = e.children,
            f = e.className,
            p = e.removeScrollBar,
            m = e.enabled,
            y = e.shards,
            g = e.sideCar,
            _ = e.noIsolation,
            b = e.inert,
            w = e.allowPinchZoom,
            E = e.as,
            C = V(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
            ]),
            O =
              ((n = [a, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return B(t, e);
                });
              }),
              ((i = (0, h.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return i.value;
                    },
                    set current(value) {
                      var e = i.value;
                      e !== value && ((i.value = value), i.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (o = i.facade),
              h.useLayoutEffect(
                function () {
                  var e = G.get(o);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      i = o.current;
                    t.forEach(function (e) {
                      r.has(e) || B(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || B(e, i);
                      });
                  }
                  G.set(o, n);
                },
                [n]
              ),
              o),
            M = K(K({}, C), u);
          return h.createElement(
            h.Fragment,
            null,
            m &&
              h.createElement(g, {
                sideCar: z,
                removeScrollBar: p,
                shards: y,
                noIsolation: _,
                inert: b,
                setCallbacks: l,
                allowPinchZoom: !!w,
                lockRef: a,
              }),
            c
              ? h.cloneElement(h.Children.only(d), K(K({}, M), { ref: O }))
              : h.createElement(
                  void 0 === E ? "div" : E,
                  K({}, M, { className: f, ref: O }),
                  d
                )
          );
        });
      (Y.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (Y.classNames = { fullWidth: H, zeroRight: j });
      var J = function (e) {
        var t = e.sideCar,
          n = V(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return h.createElement(r, K({}, n));
      };
      J.isSideCarExport = !0;
      var $ = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = c || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var i, o;
                (i = t).styleSheet
                  ? (i.styleSheet.cssText = r)
                  : i.appendChild(document.createTextNode(r)),
                  (o = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(o);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        ee = function () {
          var e = $();
          return function (t, n) {
            h.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        et = function () {
          var e = ee();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        en = { left: 0, top: 0, right: 0, gap: 0 },
        er = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        ei = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            i = t["padding" === e ? "paddingRight" : "marginRight"];
          return [er(n), er(r), er(i)];
        },
        eo = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return en;
          var t = ei(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        ea = et(),
        es = "data-scroll-locked",
        eu = function (e, t, n, r) {
          var i = e.left,
            o = e.top,
            a = e.right,
            s = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(s, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(es, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(i, "px;\n    padding-top: ")
                      .concat(o, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(s, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(s, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(j, " {\n    right: ")
              .concat(s, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(H, " {\n    margin-right: ")
              .concat(s, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(j, " .")
              .concat(j, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(H, " .")
              .concat(H, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(es, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(s, "px;\n  }\n")
          );
        },
        el = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            i = void 0 === r ? "margin" : r,
            o = h.useMemo(
              function () {
                return eo(i);
              },
              [i]
            );
          return (
            h.useEffect(function () {
              return (
                document.body.setAttribute(es, ""),
                function () {
                  document.body.removeAttribute(es);
                }
              );
            }, []),
            h.createElement(ea, { styles: eu(o, !t, i, n ? "" : "!important") })
          );
        },
        ec = !1;
      if ("undefined" != typeof window)
        try {
          var ed = Object.defineProperty({}, "passive", {
            get: function () {
              return (ec = !0), !0;
            },
          });
          window.addEventListener("test", ed, ed),
            window.removeEventListener("test", ed, ed);
        } catch (e) {
          ec = !1;
        }
      var eh = !!ec && { passive: !1 },
        ef = function (e, t) {
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        ev = function (e, t) {
          var n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              ep(e, n))
            ) {
              var r = em(e, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        ep = function (e, t) {
          return "v" === e ? ef(t, "overflowY") : ef(t, "overflowX");
        },
        em = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        ey = function (e, t, n, r, i) {
          var o,
            a =
              ((o = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === o ? -1 : 1),
            s = a * r,
            u = n.target,
            l = t.contains(u),
            c = !1,
            d = s > 0,
            h = 0,
            f = 0;
          do {
            var p = em(e, u),
              m = p[0],
              y = p[1] - p[2] - a * m;
            (m || y) && ep(e, u) && ((h += y), (f += m)), (u = u.parentNode);
          } while (
            (!l && u !== document.body) ||
            (l && (t.contains(u) || t === u))
          );
          return (
            d && ((i && 0 === h) || (!i && s > h))
              ? (c = !0)
              : !d && ((i && 0 === f) || (!i && -s > f)) && (c = !0),
            c
          );
        },
        eg = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        e_ = function (e) {
          return [e.deltaX, e.deltaY];
        },
        eb = function (e) {
          return e && "current" in e ? e.current : e;
        },
        ew = 0,
        eE = [],
        eC =
          (z.useMedium(function (e) {
            var t = h.useRef([]),
              n = h.useRef([0, 0]),
              r = h.useRef(),
              i = h.useState(ew++)[0],
              o = h.useState(function () {
                return et();
              })[0],
              a = h.useRef(e);
            h.useEffect(
              function () {
                a.current = e;
              },
              [e]
            ),
              h.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(i)
                    );
                    var t = (function (e, t, n) {
                      if (n || 2 == arguments.length)
                        for (var r, i = 0, o = t.length; i < o; i++)
                          (!r && i in t) ||
                            (r || (r = Array.prototype.slice.call(t, 0, i)),
                            (r[i] = t[i]));
                      return e.concat(r || Array.prototype.slice.call(t));
                    })(
                      [e.lockRef.current],
                      (e.shards || []).map(eb),
                      !0
                    ).filter(Boolean);
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          "allow-interactivity-".concat(i)
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          "block-interactivity-".concat(i)
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              "allow-interactivity-".concat(i)
                            );
                          });
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards]
              );
            var s = h.useCallback(function (e, t) {
                if ("touches" in e && 2 === e.touches.length)
                  return !a.current.allowPinchZoom;
                var i,
                  o = eg(e),
                  s = n.current,
                  u = "deltaX" in e ? e.deltaX : s[0] - o[0],
                  l = "deltaY" in e ? e.deltaY : s[1] - o[1],
                  c = e.target,
                  d = Math.abs(u) > Math.abs(l) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === c.type)
                  return !1;
                var h = ev(d, c);
                if (!h) return !0;
                if (
                  (h ? (i = d) : ((i = "v" === d ? "h" : "v"), (h = ev(d, c))),
                  !h)
                )
                  return !1;
                if (
                  (!r.current &&
                    "changedTouches" in e &&
                    (u || l) &&
                    (r.current = i),
                  !i)
                )
                  return !0;
                var f = r.current || i;
                return ey(f, t, e, "h" === f ? u : l, !0);
              }, []),
              u = h.useCallback(function (e) {
                if (eE.length && eE[eE.length - 1] === o) {
                  var n = "deltaY" in e ? e_(e) : eg(e),
                    r = t.current.filter(function (t) {
                      var r;
                      return (
                        t.name === e.type &&
                        t.target === e.target &&
                        (r = t.delta)[0] === n[0] &&
                        r[1] === n[1]
                      );
                    })[0];
                  if (r && r.should) {
                    e.cancelable && e.preventDefault();
                    return;
                  }
                  if (!r) {
                    var i = (a.current.shards || [])
                      .map(eb)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (i.length > 0 ? s(e, i[0]) : !a.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              l = h.useCallback(function (e, n, r, i) {
                var o = { name: e, delta: n, target: r, should: i };
                t.current.push(o),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== o;
                    });
                  }, 1);
              }, []),
              c = h.useCallback(function (e) {
                (n.current = eg(e)), (r.current = void 0);
              }, []),
              d = h.useCallback(function (t) {
                l(t.type, e_(t), t.target, s(t, e.lockRef.current));
              }, []),
              f = h.useCallback(function (t) {
                l(t.type, eg(t), t.target, s(t, e.lockRef.current));
              }, []);
            h.useEffect(function () {
              return (
                eE.push(o),
                e.setCallbacks({
                  onScrollCapture: d,
                  onWheelCapture: d,
                  onTouchMoveCapture: f,
                }),
                document.addEventListener("wheel", u, eh),
                document.addEventListener("touchmove", u, eh),
                document.addEventListener("touchstart", c, eh),
                function () {
                  (eE = eE.filter(function (e) {
                    return e !== o;
                  })),
                    document.removeEventListener("wheel", u, eh),
                    document.removeEventListener("touchmove", u, eh),
                    document.removeEventListener("touchstart", c, eh);
                }
              );
            }, []);
            var p = e.removeScrollBar,
              m = e.inert;
            return h.createElement(
              h.Fragment,
              null,
              m
                ? h.createElement(o, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        i,
                        " {pointer-events: none;}\n  .allow-interactivity-"
                      )
                      .concat(i, " {pointer-events: all;}\n"),
                  })
                : null,
              p ? h.createElement(el, { gapMode: "margin" }) : null
            );
          }),
          J),
        eO = h.forwardRef(function (e, t) {
          return h.createElement(Y, K({}, e, { ref: t, sideCar: eC }));
        });
      eO.classNames = Y.classNames;
      var eM = new WeakMap(),
        eP = new WeakMap(),
        eD = {},
        eS = 0,
        eT = function (e) {
          return e && (e.host || eT(e.parentNode));
        },
        ek = function (e, t, n, r) {
          var i = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = eT(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          eD[n] || (eD[n] = new WeakMap());
          var o = eD[n],
            a = [],
            s = new Set(),
            u = new Set(i),
            l = function (e) {
              !e || s.has(e) || (s.add(e), l(e.parentNode));
            };
          i.forEach(l);
          var c = function (e) {
            !e ||
              u.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (s.has(e)) c(e);
                else {
                  var t = e.getAttribute(r),
                    i = null !== t && "false" !== t,
                    u = (eM.get(e) || 0) + 1,
                    l = (o.get(e) || 0) + 1;
                  eM.set(e, u),
                    o.set(e, l),
                    a.push(e),
                    1 === u && i && eP.set(e, !0),
                    1 === l && e.setAttribute(n, "true"),
                    i || e.setAttribute(r, "true");
                }
              });
          };
          return (
            c(t),
            s.clear(),
            eS++,
            function () {
              a.forEach(function (e) {
                var t = eM.get(e) - 1,
                  i = o.get(e) - 1;
                eM.set(e, t),
                  o.set(e, i),
                  t || (eP.has(e) || e.removeAttribute(r), eP.delete(e)),
                  i || e.removeAttribute(n);
              }),
                --eS ||
                  ((eM = new WeakMap()),
                  (eM = new WeakMap()),
                  (eP = new WeakMap()),
                  (eD = {}));
            }
          );
        },
        eR = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            i =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return i
            ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live]"))),
              ek(r, i, n, "aria-hidden"))
            : function () {
                return null;
              };
        },
        eA = n(9143);
      let eF = "Dialog",
        [eN, ex] = (function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n = [],
            r = () => {
              let t = n.map((e) => (0, h.createContext)(e));
              return function (n) {
                let r = (null == n ? void 0 : n[e]) || t;
                return (0, h.useMemo)(
                  () => ({ ["__scope".concat(e)]: { ...n, [e]: r } }),
                  [n, r]
                );
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let i = (0, h.createContext)(r),
                  o = n.length;
                function a(t) {
                  let { scope: n, children: r, ...a } = t,
                    s = (null == n ? void 0 : n[e][o]) || i,
                    u = (0, h.useMemo)(() => a, Object.values(a));
                  return (0, h.createElement)(s.Provider, { value: u }, r);
                }
                return (
                  (n = [...n, r]),
                  (a.displayName = t + "Provider"),
                  [
                    a,
                    function (n, a) {
                      let s = (null == a ? void 0 : a[e][o]) || i,
                        u = (0, h.useContext)(s);
                      if (u) return u;
                      if (void 0 !== r) return r;
                      throw Error(
                        "`".concat(n, "` must be used within `").concat(t, "`")
                      );
                    },
                  ]
                );
              },
              (function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                let r = t[0];
                if (1 === t.length) return r;
                let i = () => {
                  let e = t.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (t) {
                    let n = e.reduce((e, n) => {
                      let { useScope: r, scopeName: i } = n,
                        o = r(t)["__scope".concat(i)];
                      return { ...e, ...o };
                    }, {});
                    return (0, h.useMemo)(
                      () => ({ ["__scope".concat(r.scopeName)]: n }),
                      [n]
                    );
                  };
                };
                return (i.scopeName = r.scopeName), i;
              })(r, ...t),
            ]
          );
        })(eF),
        [eW, eI] = eN(eF),
        eL = (0, h.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = eI("DialogTrigger", n),
            o = (0, m.e)(t, i.triggerRef);
          return (0, h.createElement)(
            E.WV.button,
            (0, d.Z)(
              {
                type: "button",
                "aria-haspopup": "dialog",
                "aria-expanded": i.open,
                "aria-controls": i.contentId,
                "data-state": e0(i.open),
              },
              r,
              { ref: o, onClick: p(e.onClick, i.onOpenToggle) }
            )
          );
        }),
        eq = "DialogPortal",
        [eQ, eZ] = eN(eq, { forceMount: void 0 }),
        eU = "DialogOverlay",
        eK = (0, h.forwardRef)((e, t) => {
          let n = eZ(eU, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...i } = e,
            o = eI(eU, e.__scopeDialog);
          return o.modal
            ? (0, h.createElement)(
                q,
                { present: r || o.open },
                (0, h.createElement)(eV, (0, d.Z)({}, i, { ref: t }))
              )
            : null;
        }),
        eV = (0, h.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = eI(eU, n);
          return (0, h.createElement)(
            eO,
            { as: eA.g7, allowPinchZoom: !0, shards: [i.contentRef] },
            (0, h.createElement)(
              E.WV.div,
              (0, d.Z)({ "data-state": e0(i.open) }, r, {
                ref: t,
                style: { pointerEvents: "auto", ...r.style },
              })
            )
          );
        }),
        ej = "DialogContent",
        eH = (0, h.forwardRef)((e, t) => {
          let n = eZ(ej, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...i } = e,
            o = eI(ej, e.__scopeDialog);
          return (0, h.createElement)(
            q,
            { present: r || o.open },
            o.modal
              ? (0, h.createElement)(eB, (0, d.Z)({}, i, { ref: t }))
              : (0, h.createElement)(eG, (0, d.Z)({}, i, { ref: t }))
          );
        }),
        eB = (0, h.forwardRef)((e, t) => {
          let n = eI(ej, e.__scopeDialog),
            r = (0, h.useRef)(null),
            i = (0, m.e)(t, n.contentRef, r);
          return (
            (0, h.useEffect)(() => {
              let e = r.current;
              if (e) return eR(e);
            }, []),
            (0, h.createElement)(
              ez,
              (0, d.Z)({}, e, {
                ref: i,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: p(e.onCloseAutoFocus, (e) => {
                  var t;
                  e.preventDefault(),
                    null === (t = n.triggerRef.current) ||
                      void 0 === t ||
                      t.focus();
                }),
                onPointerDownOutside: p(e.onPointerDownOutside, (e) => {
                  let t = e.detail.originalEvent,
                    n = 0 === t.button && !0 === t.ctrlKey;
                  (2 === t.button || n) && e.preventDefault();
                }),
                onFocusOutside: p(e.onFocusOutside, (e) => e.preventDefault()),
              })
            )
          );
        }),
        eG = (0, h.forwardRef)((e, t) => {
          let n = eI(ej, e.__scopeDialog),
            r = (0, h.useRef)(!1),
            i = (0, h.useRef)(!1);
          return (0, h.createElement)(
            ez,
            (0, d.Z)({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (t) => {
                var o, a;
                null === (o = e.onCloseAutoFocus) ||
                  void 0 === o ||
                  o.call(e, t),
                  t.defaultPrevented ||
                    (r.current ||
                      null === (a = n.triggerRef.current) ||
                      void 0 === a ||
                      a.focus(),
                    t.preventDefault()),
                  (r.current = !1),
                  (i.current = !1);
              },
              onInteractOutside: (t) => {
                var o, a;
                null === (o = e.onInteractOutside) ||
                  void 0 === o ||
                  o.call(e, t),
                  t.defaultPrevented ||
                    ((r.current = !0),
                    "pointerdown" !== t.detail.originalEvent.type ||
                      (i.current = !0));
                let s = t.target;
                (null === (a = n.triggerRef.current) || void 0 === a
                  ? void 0
                  : a.contains(s)) && t.preventDefault(),
                  "focusin" === t.detail.originalEvent.type &&
                    i.current &&
                    t.preventDefault();
              },
            })
          );
        }),
        ez = (0, h.forwardRef)((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: r,
              onOpenAutoFocus: i,
              onCloseAutoFocus: o,
              ...a
            } = e,
            s = eI(ej, n),
            u = (0, h.useRef)(null),
            l = (0, m.e)(t, u);
          return (
            (0, h.useEffect)(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = n[0]) && void 0 !== e ? e : U()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = n[1]) && void 0 !== t ? t : U()
                ),
                Z++,
                () => {
                  1 === Z &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    Z--;
                }
              );
            }, []),
            (0, h.createElement)(
              h.Fragment,
              null,
              (0, h.createElement)(
                R,
                {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: i,
                  onUnmountAutoFocus: o,
                },
                (0, h.createElement)(
                  M,
                  (0, d.Z)(
                    {
                      role: "dialog",
                      id: s.contentId,
                      "aria-describedby": s.descriptionId,
                      "aria-labelledby": s.titleId,
                      "data-state": e0(s.open),
                    },
                    a,
                    { ref: l, onDismiss: () => s.onOpenChange(!1) }
                  )
                )
              ),
              !1
            )
          );
        }),
        eX = "DialogTitle",
        eY = (0, h.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = eI(eX, n);
          return (0, h.createElement)(
            E.WV.h2,
            (0, d.Z)({ id: i.titleId }, r, { ref: t })
          );
        }),
        eJ = (0, h.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = eI("DialogDescription", n);
          return (0, h.createElement)(
            E.WV.p,
            (0, d.Z)({ id: i.descriptionId }, r, { ref: t })
          );
        }),
        e$ = (0, h.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = eI("DialogClose", n);
          return (0, h.createElement)(
            E.WV.button,
            (0, d.Z)({ type: "button" }, r, {
              ref: t,
              onClick: p(e.onClick, () => i.onOpenChange(!1)),
            })
          );
        });
      function e0(e) {
        return e ? "open" : "closed";
      }
      let [e1, e2] = (function (e, t) {
          let n = (0, h.createContext)(t);
          function r(e) {
            let { children: t, ...r } = e,
              i = (0, h.useMemo)(() => r, Object.values(r));
            return (0, h.createElement)(n.Provider, { value: i }, t);
          }
          return (
            (r.displayName = e + "Provider"),
            [
              r,
              function (r) {
                let i = (0, h.useContext)(n);
                if (i) return i;
                if (void 0 !== t) return t;
                throw Error(
                  "`".concat(r, "` must be used within `").concat(e, "`")
                );
              },
            ]
          );
        })("DialogTitleWarning", {
          contentName: ej,
          titleName: eX,
          docsSlug: "dialog",
        }),
        e6 = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: i,
              onOpenChange: o,
              modal: a = !0,
            } = e,
            s = (0, h.useRef)(null),
            u = (0, h.useRef)(null),
            [l = !1, c] = (function (e) {
              let { prop: t, defaultProp: n, onChange: r = () => {} } = e,
                [i, o] = (function (e) {
                  let { defaultProp: t, onChange: n } = e,
                    r = (0, h.useState)(t),
                    [i] = r,
                    o = (0, h.useRef)(i),
                    a = w(n);
                  return (
                    (0, h.useEffect)(() => {
                      o.current !== i && (a(i), (o.current = i));
                    }, [i, o, a]),
                    r
                  );
                })({ defaultProp: n, onChange: r }),
                a = void 0 !== t,
                s = a ? t : i,
                u = w(r);
              return [
                s,
                (0, h.useCallback)(
                  (e) => {
                    if (a) {
                      let n = "function" == typeof e ? e(t) : e;
                      n !== t && u(n);
                    } else o(e);
                  },
                  [a, t, o, u]
                ),
              ];
            })({ prop: r, defaultProp: i, onChange: o });
          return (0, h.createElement)(
            eW,
            {
              scope: t,
              triggerRef: s,
              contentRef: u,
              contentId: b(),
              titleId: b(),
              descriptionId: b(),
              open: l,
              onOpenChange: c,
              onOpenToggle: (0, h.useCallback)(() => c((e) => !e), [c]),
              modal: a,
            },
            n
          );
        },
        e7 = eL,
        e4 = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: i,
            } = e,
            o = eI(eq, t);
          return (0, h.createElement)(
            eQ,
            { scope: t, forceMount: n },
            h.Children.map(r, (e) =>
              (0, h.createElement)(
                q,
                { present: n || o.open },
                (0, h.createElement)(L, { asChild: !0, container: i }, e)
              )
            )
          );
        },
        e5 = eK,
        e8 = eH,
        e3 = eY,
        e9 = eJ,
        te = e$;
    },
    9586: function (e, t, n) {
      n.d(t, {
        WV: function () {
          return s;
        },
        jH: function () {
          return u;
        },
      });
      var r = n(2110),
        i = n(2265),
        o = n(4887),
        a = n(9143);
      let s = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let n = (0, i.forwardRef)((e, n) => {
          let { asChild: o, ...s } = e,
            u = o ? a.g7 : t;
          return (
            (0, i.useEffect)(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            (0, i.createElement)(u, (0, r.Z)({}, s, { ref: n }))
          );
        });
        return (n.displayName = "Primitive.".concat(t)), { ...e, [t]: n };
      }, {});
      function u(e, t) {
        e && (0, o.flushSync)(() => e.dispatchEvent(t));
      }
    },
    1014: function (e, t, n) {
      n.d(t, {
        f: function () {
          return c;
        },
      });
      var r = n(2110),
        i = n(2265),
        o = n(9586);
      let a = "horizontal",
        s = ["horizontal", "vertical"],
        u = (0, i.forwardRef)((e, t) => {
          let { decorative: n, orientation: s = a, ...u } = e,
            c = l(s) ? s : a;
          return (0, i.createElement)(
            o.WV.div,
            (0, r.Z)(
              { "data-orientation": c },
              n
                ? { role: "none" }
                : {
                    "aria-orientation": "vertical" === c ? c : void 0,
                    role: "separator",
                  },
              u,
              { ref: t }
            )
          );
        });
      function l(e) {
        return s.includes(e);
      }
      u.propTypes = {
        orientation(e, t, n) {
          let r = e[t],
            i = String(r);
          return r && !l(r)
            ? Error(
                "Invalid prop `orientation` of value `"
                  .concat(i, "` supplied to `")
                  .concat(
                    n,
                    "`, expected one of:\n  - horizontal\n  - vertical\n\nDefaulting to `"
                  )
                  .concat(a, "`.")
              )
            : null;
        },
      };
      let c = u;
    },
    6068: function (e, t, n) {
      n.d(t, {
        S: function () {
          return Y;
        },
      });
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        d,
        h,
        f,
        p,
        m,
        y,
        g,
        _,
        b,
        w,
        E,
        C,
        O,
        M,
        P,
        D,
        S,
        T,
        k = n(2731),
        R = n(8146),
        A = n(5577),
        F = n(7354);
      function N(e, t) {
        var n = (0, F.J)(e, t, "update");
        return (function (e, t) {
          if (t.set) {
            if (!t.get)
              throw TypeError("attempted to read set only private field");
            return (
              "__destrWrapper" in t ||
                (t.__destrWrapper = {
                  set value(v) {
                    t.set.call(e, v);
                  },
                  get value() {
                    return t.get.call(e);
                  },
                }),
              t.__destrWrapper
            );
          }
          if (!t.writable)
            throw TypeError("attempted to set read only private field");
          return t;
        })(e, n);
      }
      var x = n(6063),
        W = n(4831),
        I = n(7920),
        L = n(5139),
        q = n(326),
        Q =
          ((r = new WeakMap()),
          class {
            destroy() {
              this.clearGcTimeout();
            }
            scheduleGc() {
              this.clearGcTimeout(),
                (0, x.PN)(this.gcTime) &&
                  (0, A._)(
                    this,
                    r,
                    setTimeout(() => {
                      this.optionalRemove();
                    }, this.gcTime)
                  );
            }
            updateGcTime(e) {
              this.gcTime = Math.max(
                this.gcTime || 0,
                null != e ? e : x.sk ? 1 / 0 : 3e5
              );
            }
            clearGcTimeout() {
              (0, k._)(this, r) &&
                (clearTimeout((0, k._)(this, r)), (0, A._)(this, r, void 0));
            }
            constructor() {
              (0, R._)(this, r, { writable: !0, value: void 0 });
            }
          }),
        Z =
          ((i = new WeakMap()),
          (o = new WeakMap()),
          (a = new WeakMap()),
          (s = new WeakMap()),
          (u = new WeakMap()),
          (l = new WeakMap()),
          (c = new WeakMap()),
          (d = new WeakSet()),
          class extends Q {
            get meta() {
              return this.options.meta;
            }
            setOptions(e) {
              (this.options = { ...(0, k._)(this, l), ...e }),
                this.updateGcTime(this.options.gcTime);
            }
            optionalRemove() {
              (0, k._)(this, u).length ||
                "idle" !== this.state.fetchStatus ||
                (0, k._)(this, a).remove(this);
            }
            setData(e, t) {
              let n = (0, x.oE)(this.state.data, e, this.options);
              return (
                (0, W._)(this, d, U).call(this, {
                  data: n,
                  type: "success",
                  dataUpdatedAt: null == t ? void 0 : t.updatedAt,
                  manual: null == t ? void 0 : t.manual,
                }),
                n
              );
            }
            setState(e, t) {
              (0, W._)(this, d, U).call(this, {
                type: "setState",
                state: e,
                setStateOptions: t,
              });
            }
            cancel(e) {
              var t, n;
              let r =
                null === (t = (0, k._)(this, s)) || void 0 === t
                  ? void 0
                  : t.promise;
              return (
                null === (n = (0, k._)(this, s)) || void 0 === n || n.cancel(e),
                r ? r.then(x.ZT).catch(x.ZT) : Promise.resolve()
              );
            }
            destroy() {
              super.destroy(), this.cancel({ silent: !0 });
            }
            reset() {
              this.destroy(), this.setState((0, k._)(this, i));
            }
            isActive() {
              return (0, k._)(this, u).some((e) => !1 !== e.options.enabled);
            }
            isDisabled() {
              return this.getObserversCount() > 0 && !this.isActive();
            }
            isStale() {
              return (
                !!this.state.isInvalidated ||
                (this.getObserversCount() > 0
                  ? (0, k._)(this, u).some((e) => e.getCurrentResult().isStale)
                  : void 0 === this.state.data)
              );
            }
            isStaleByTime() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              return (
                this.state.isInvalidated ||
                void 0 === this.state.data ||
                !(0, x.Kp)(this.state.dataUpdatedAt, e)
              );
            }
            onFocus() {
              var e;
              let t = (0, k._)(this, u).find((e) =>
                e.shouldFetchOnWindowFocus()
              );
              null == t || t.refetch({ cancelRefetch: !1 }),
                null === (e = (0, k._)(this, s)) ||
                  void 0 === e ||
                  e.continue();
            }
            onOnline() {
              var e;
              let t = (0, k._)(this, u).find((e) => e.shouldFetchOnReconnect());
              null == t || t.refetch({ cancelRefetch: !1 }),
                null === (e = (0, k._)(this, s)) ||
                  void 0 === e ||
                  e.continue();
            }
            addObserver(e) {
              (0, k._)(this, u).includes(e) ||
                ((0, k._)(this, u).push(e),
                this.clearGcTimeout(),
                (0, k._)(this, a).notify({
                  type: "observerAdded",
                  query: this,
                  observer: e,
                }));
            }
            removeObserver(e) {
              (0, k._)(this, u).includes(e) &&
                ((0, A._)(
                  this,
                  u,
                  (0, k._)(this, u).filter((t) => t !== e)
                ),
                (0, k._)(this, u).length ||
                  ((0, k._)(this, s) &&
                    ((0, k._)(this, c)
                      ? (0, k._)(this, s).cancel({ revert: !0 })
                      : (0, k._)(this, s).cancelRetry()),
                  this.scheduleGc()),
                (0, k._)(this, a).notify({
                  type: "observerRemoved",
                  query: this,
                  observer: e,
                }));
            }
            getObserversCount() {
              return (0, k._)(this, u).length;
            }
            invalidate() {
              this.state.isInvalidated ||
                (0, W._)(this, d, U).call(this, { type: "invalidate" });
            }
            fetch(e, t) {
              var n, r, i;
              if ("idle" !== this.state.fetchStatus) {
                if (
                  void 0 !== this.state.data &&
                  (null == t ? void 0 : t.cancelRefetch)
                )
                  this.cancel({ silent: !0 });
                else if ((0, k._)(this, s))
                  return (
                    (0, k._)(this, s).continueRetry(), (0, k._)(this, s).promise
                  );
              }
              if ((e && this.setOptions(e), !this.options.queryFn)) {
                let e = (0, k._)(this, u).find((e) => e.options.queryFn);
                e && this.setOptions(e.options);
              }
              let l = new AbortController(),
                h = { queryKey: this.queryKey, meta: this.meta },
                f = (e) => {
                  Object.defineProperty(e, "signal", {
                    enumerable: !0,
                    get: () => ((0, A._)(this, c, !0), l.signal),
                  });
                };
              f(h);
              let p = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn: () =>
                  this.options.queryFn && this.options.queryFn !== x.CN
                    ? ((0, A._)(this, c, !1), this.options.persister)
                      ? this.options.persister(this.options.queryFn, h, this)
                      : this.options.queryFn(h)
                    : Promise.reject(
                        Error(
                          "Missing queryFn: '".concat(
                            this.options.queryHash,
                            "'"
                          )
                        )
                      ),
              };
              f(p),
                null === (n = this.options.behavior) ||
                  void 0 === n ||
                  n.onFetch(p, this),
                (0, A._)(this, o, this.state),
                ("idle" === this.state.fetchStatus ||
                  this.state.fetchMeta !==
                    (null === (r = p.fetchOptions) || void 0 === r
                      ? void 0
                      : r.meta)) &&
                  (0, W._)(this, d, U).call(this, {
                    type: "fetch",
                    meta:
                      null === (i = p.fetchOptions) || void 0 === i
                        ? void 0
                        : i.meta,
                  });
              let m = (e) => {
                if (
                  (((0, q.DV)(e) && e.silent) ||
                    (0, W._)(this, d, U).call(this, {
                      type: "error",
                      error: e,
                    }),
                  !(0, q.DV)(e))
                ) {
                  var t, n, r, i;
                  null === (t = (n = (0, k._)(this, a).config).onError) ||
                    void 0 === t ||
                    t.call(n, e, this),
                    null === (r = (i = (0, k._)(this, a).config).onSettled) ||
                      void 0 === r ||
                      r.call(i, this.state.data, e, this);
                }
                this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              };
              return (
                (0, A._)(
                  this,
                  s,
                  (0, q.Mz)({
                    fn: p.fetchFn,
                    abort: l.abort.bind(l),
                    onSuccess: (e) => {
                      var t, n, r, i;
                      if (void 0 === e) {
                        m(
                          Error("".concat(this.queryHash, " data is undefined"))
                        );
                        return;
                      }
                      this.setData(e),
                        null ===
                          (t = (n = (0, k._)(this, a).config).onSuccess) ||
                          void 0 === t ||
                          t.call(n, e, this),
                        null ===
                          (r = (i = (0, k._)(this, a).config).onSettled) ||
                          void 0 === r ||
                          r.call(i, e, this.state.error, this),
                        this.isFetchingOptimistic || this.scheduleGc(),
                        (this.isFetchingOptimistic = !1);
                    },
                    onError: m,
                    onFail: (e, t) => {
                      (0, W._)(this, d, U).call(this, {
                        type: "failed",
                        failureCount: e,
                        error: t,
                      });
                    },
                    onPause: () => {
                      (0, W._)(this, d, U).call(this, { type: "pause" });
                    },
                    onContinue: () => {
                      (0, W._)(this, d, U).call(this, { type: "continue" });
                    },
                    retry: p.options.retry,
                    retryDelay: p.options.retryDelay,
                    networkMode: p.options.networkMode,
                  })
                ),
                (0, k._)(this, s).promise
              );
            }
            constructor(e) {
              super(),
                (0, I._)(this, d),
                (0, R._)(this, i, { writable: !0, value: void 0 }),
                (0, R._)(this, o, { writable: !0, value: void 0 }),
                (0, R._)(this, a, { writable: !0, value: void 0 }),
                (0, R._)(this, s, { writable: !0, value: void 0 }),
                (0, R._)(this, u, { writable: !0, value: void 0 }),
                (0, R._)(this, l, { writable: !0, value: void 0 }),
                (0, R._)(this, c, { writable: !0, value: void 0 }),
                (0, A._)(this, c, !1),
                (0, A._)(this, l, e.defaultOptions),
                this.setOptions(e.options),
                (0, A._)(this, u, []),
                (0, A._)(this, a, e.cache),
                (this.queryKey = e.queryKey),
                (this.queryHash = e.queryHash),
                (0, A._)(
                  this,
                  i,
                  e.state ||
                    (function (e) {
                      let t =
                          "function" == typeof e.initialData
                            ? e.initialData()
                            : e.initialData,
                        n = void 0 !== t,
                        r = n
                          ? "function" == typeof e.initialDataUpdatedAt
                            ? e.initialDataUpdatedAt()
                            : e.initialDataUpdatedAt
                          : 0;
                      return {
                        data: t,
                        dataUpdateCount: 0,
                        dataUpdatedAt: n ? (null != r ? r : Date.now()) : 0,
                        error: null,
                        errorUpdateCount: 0,
                        errorUpdatedAt: 0,
                        fetchFailureCount: 0,
                        fetchFailureReason: null,
                        fetchMeta: null,
                        isInvalidated: !1,
                        status: n ? "success" : "pending",
                        fetchStatus: "idle",
                      };
                    })(this.options)
                ),
                (this.state = (0, k._)(this, i)),
                this.scheduleGc();
            }
          });
      function U(e) {
        (this.state = ((t) => {
          var n, r;
          switch (e.type) {
            case "failed":
              return {
                ...t,
                fetchFailureCount: e.failureCount,
                fetchFailureReason: e.error,
              };
            case "pause":
              return { ...t, fetchStatus: "paused" };
            case "continue":
              return { ...t, fetchStatus: "fetching" };
            case "fetch":
              return {
                ...t,
                fetchFailureCount: 0,
                fetchFailureReason: null,
                fetchMeta: null !== (n = e.meta) && void 0 !== n ? n : null,
                fetchStatus: (0, q.Kw)(this.options.networkMode)
                  ? "fetching"
                  : "paused",
                ...(void 0 === t.data && { error: null, status: "pending" }),
              };
            case "success":
              return {
                ...t,
                data: e.data,
                dataUpdateCount: t.dataUpdateCount + 1,
                dataUpdatedAt:
                  null !== (r = e.dataUpdatedAt) && void 0 !== r
                    ? r
                    : Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!e.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              };
            case "error":
              let i = e.error;
              if ((0, q.DV)(i) && i.revert && (0, k._)(this, o))
                return { ...(0, k._)(this, o), fetchStatus: "idle" };
              return {
                ...t,
                error: i,
                errorUpdateCount: t.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: t.fetchFailureCount + 1,
                fetchFailureReason: i,
                fetchStatus: "idle",
                status: "error",
              };
            case "invalidate":
              return { ...t, isInvalidated: !0 };
            case "setState":
              return { ...t, ...e.state };
          }
        })(this.state)),
          L.V.batch(() => {
            (0, k._)(this, u).forEach((e) => {
              e.onQueryUpdate();
            }),
              (0, k._)(this, a).notify({
                query: this,
                type: "updated",
                action: e,
              });
          });
      }
      var K = n(4614),
        V =
          ((h = new WeakMap()),
          class extends K.l {
            build(e, t, n) {
              var r;
              let i = t.queryKey,
                o =
                  null !== (r = t.queryHash) && void 0 !== r
                    ? r
                    : (0, x.Rm)(i, t),
                a = this.get(o);
              return (
                a ||
                  ((a = new Z({
                    cache: this,
                    queryKey: i,
                    queryHash: o,
                    options: e.defaultQueryOptions(t),
                    state: n,
                    defaultOptions: e.getQueryDefaults(i),
                  })),
                  this.add(a)),
                a
              );
            }
            add(e) {
              (0, k._)(this, h).has(e.queryHash) ||
                ((0, k._)(this, h).set(e.queryHash, e),
                this.notify({ type: "added", query: e }));
            }
            remove(e) {
              let t = (0, k._)(this, h).get(e.queryHash);
              t &&
                (e.destroy(),
                t === e && (0, k._)(this, h).delete(e.queryHash),
                this.notify({ type: "removed", query: e }));
            }
            clear() {
              L.V.batch(() => {
                this.getAll().forEach((e) => {
                  this.remove(e);
                });
              });
            }
            get(e) {
              return (0, k._)(this, h).get(e);
            }
            getAll() {
              return [...(0, k._)(this, h).values()];
            }
            find(e) {
              let t = { exact: !0, ...e };
              return this.getAll().find((e) => (0, x._x)(t, e));
            }
            findAll() {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = this.getAll();
              return Object.keys(e).length > 0
                ? t.filter((t) => (0, x._x)(e, t))
                : t;
            }
            notify(e) {
              L.V.batch(() => {
                this.listeners.forEach((t) => {
                  t(e);
                });
              });
            }
            onFocus() {
              L.V.batch(() => {
                this.getAll().forEach((e) => {
                  e.onFocus();
                });
              });
            }
            onOnline() {
              L.V.batch(() => {
                this.getAll().forEach((e) => {
                  e.onOnline();
                });
              });
            }
            constructor(e = {}) {
              super(),
                (0, R._)(this, h, { writable: !0, value: void 0 }),
                (this.config = e),
                (0, A._)(this, h, new Map());
            }
          }),
        j =
          ((f = new WeakMap()),
          (p = new WeakMap()),
          (m = new WeakMap()),
          (y = new WeakMap()),
          (g = new WeakSet()),
          class extends Q {
            setOptions(e) {
              (this.options = { ...(0, k._)(this, p), ...e }),
                this.updateGcTime(this.options.gcTime);
            }
            get meta() {
              return this.options.meta;
            }
            addObserver(e) {
              (0, k._)(this, f).includes(e) ||
                ((0, k._)(this, f).push(e),
                this.clearGcTimeout(),
                (0, k._)(this, m).notify({
                  type: "observerAdded",
                  mutation: this,
                  observer: e,
                }));
            }
            removeObserver(e) {
              (0, A._)(
                this,
                f,
                (0, k._)(this, f).filter((t) => t !== e)
              ),
                this.scheduleGc(),
                (0, k._)(this, m).notify({
                  type: "observerRemoved",
                  mutation: this,
                  observer: e,
                });
            }
            optionalRemove() {
              (0, k._)(this, f).length ||
                ("pending" === this.state.status
                  ? this.scheduleGc()
                  : (0, k._)(this, m).remove(this));
            }
            continue() {
              var e, t;
              return null !==
                (t =
                  null === (e = (0, k._)(this, y)) || void 0 === e
                    ? void 0
                    : e.continue()) && void 0 !== t
                ? t
                : this.execute(this.state.variables);
            }
            async execute(e) {
              var t, n, r, i, o, a, s, u, l, c, d, h, f, p, _, b, w, E, C, O;
              let M = "pending" === this.state.status;
              try {
                if (!M) {
                  (0, W._)(this, g, H).call(this, {
                    type: "pending",
                    variables: e,
                  }),
                    await (null ===
                      (l = (c = (0, k._)(this, m).config).onMutate) ||
                    void 0 === l
                      ? void 0
                      : l.call(c, e, this));
                  let t = await (null === (d = (h = this.options).onMutate) ||
                  void 0 === d
                    ? void 0
                    : d.call(h, e));
                  t !== this.state.context &&
                    (0, W._)(this, g, H).call(this, {
                      type: "pending",
                      context: t,
                      variables: e,
                    });
                }
                let f = await (() => {
                  var t;
                  return (
                    (0, A._)(
                      this,
                      y,
                      (0, q.Mz)({
                        fn: () =>
                          this.options.mutationFn
                            ? this.options.mutationFn(e)
                            : Promise.reject(Error("No mutationFn found")),
                        onFail: (e, t) => {
                          (0, W._)(this, g, H).call(this, {
                            type: "failed",
                            failureCount: e,
                            error: t,
                          });
                        },
                        onPause: () => {
                          (0, W._)(this, g, H).call(this, { type: "pause" });
                        },
                        onContinue: () => {
                          (0, W._)(this, g, H).call(this, { type: "continue" });
                        },
                        retry:
                          null !== (t = this.options.retry) && void 0 !== t
                            ? t
                            : 0,
                        retryDelay: this.options.retryDelay,
                        networkMode: this.options.networkMode,
                      })
                    ),
                    (0, k._)(this, y).promise
                  );
                })();
                return (
                  await (null ===
                    (t = (n = (0, k._)(this, m).config).onSuccess) ||
                  void 0 === t
                    ? void 0
                    : t.call(n, f, e, this.state.context, this)),
                  await (null === (r = (i = this.options).onSuccess) ||
                  void 0 === r
                    ? void 0
                    : r.call(i, f, e, this.state.context)),
                  await (null ===
                    (o = (a = (0, k._)(this, m).config).onSettled) ||
                  void 0 === o
                    ? void 0
                    : o.call(
                        a,
                        f,
                        null,
                        this.state.variables,
                        this.state.context,
                        this
                      )),
                  await (null === (s = (u = this.options).onSettled) ||
                  void 0 === s
                    ? void 0
                    : s.call(u, f, null, e, this.state.context)),
                  (0, W._)(this, g, H).call(this, { type: "success", data: f }),
                  f
                );
              } catch (t) {
                try {
                  throw (
                    (await (null ===
                      (f = (p = (0, k._)(this, m).config).onError) ||
                    void 0 === f
                      ? void 0
                      : f.call(p, t, e, this.state.context, this)),
                    await (null === (_ = (b = this.options).onError) ||
                    void 0 === _
                      ? void 0
                      : _.call(b, t, e, this.state.context)),
                    await (null ===
                      (w = (E = (0, k._)(this, m).config).onSettled) ||
                    void 0 === w
                      ? void 0
                      : w.call(
                          E,
                          void 0,
                          t,
                          this.state.variables,
                          this.state.context,
                          this
                        )),
                    await (null === (C = (O = this.options).onSettled) ||
                    void 0 === C
                      ? void 0
                      : C.call(O, void 0, t, e, this.state.context)),
                    t)
                  );
                } finally {
                  (0, W._)(this, g, H).call(this, { type: "error", error: t });
                }
              }
            }
            constructor(e) {
              super(),
                (0, I._)(this, g),
                (0, R._)(this, f, { writable: !0, value: void 0 }),
                (0, R._)(this, p, { writable: !0, value: void 0 }),
                (0, R._)(this, m, { writable: !0, value: void 0 }),
                (0, R._)(this, y, { writable: !0, value: void 0 }),
                (this.mutationId = e.mutationId),
                (0, A._)(this, p, e.defaultOptions),
                (0, A._)(this, m, e.mutationCache),
                (0, A._)(this, f, []),
                (this.state = e.state || {
                  context: void 0,
                  data: void 0,
                  error: null,
                  failureCount: 0,
                  failureReason: null,
                  isPaused: !1,
                  status: "idle",
                  variables: void 0,
                  submittedAt: 0,
                }),
                this.setOptions(e.options),
                this.scheduleGc();
            }
          });
      function H(e) {
        (this.state = ((t) => {
          switch (e.type) {
            case "failed":
              return {
                ...t,
                failureCount: e.failureCount,
                failureReason: e.error,
              };
            case "pause":
              return { ...t, isPaused: !0 };
            case "continue":
              return { ...t, isPaused: !1 };
            case "pending":
              return {
                ...t,
                context: e.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: !(0, q.Kw)(this.options.networkMode),
                status: "pending",
                variables: e.variables,
                submittedAt: Date.now(),
              };
            case "success":
              return {
                ...t,
                data: e.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1,
              };
            case "error":
              return {
                ...t,
                data: void 0,
                error: e.error,
                failureCount: t.failureCount + 1,
                failureReason: e.error,
                isPaused: !1,
                status: "error",
              };
          }
        })(this.state)),
          L.V.batch(() => {
            (0, k._)(this, f).forEach((t) => {
              t.onMutationUpdate(e);
            }),
              (0, k._)(this, m).notify({
                mutation: this,
                type: "updated",
                action: e,
              });
          });
      }
      var B =
          ((_ = new WeakMap()),
          (b = new WeakMap()),
          (w = new WeakMap()),
          class extends K.l {
            build(e, t, n) {
              let r = new j({
                mutationCache: this,
                mutationId: ++N(this, b).value,
                options: e.defaultMutationOptions(t),
                state: n,
              });
              return this.add(r), r;
            }
            add(e) {
              (0, k._)(this, _).push(e),
                this.notify({ type: "added", mutation: e });
            }
            remove(e) {
              (0, A._)(
                this,
                _,
                (0, k._)(this, _).filter((t) => t !== e)
              ),
                this.notify({ type: "removed", mutation: e });
            }
            clear() {
              L.V.batch(() => {
                (0, k._)(this, _).forEach((e) => {
                  this.remove(e);
                });
              });
            }
            getAll() {
              return (0, k._)(this, _);
            }
            find(e) {
              let t = { exact: !0, ...e };
              return (0, k._)(this, _).find((e) => (0, x.X7)(t, e));
            }
            findAll() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return (0, k._)(this, _).filter((t) => (0, x.X7)(e, t));
            }
            notify(e) {
              L.V.batch(() => {
                this.listeners.forEach((t) => {
                  t(e);
                });
              });
            }
            resumePausedMutations() {
              var e;
              return (
                (0, A._)(
                  this,
                  w,
                  (null !== (e = (0, k._)(this, w)) && void 0 !== e
                    ? e
                    : Promise.resolve()
                  )
                    .then(() => {
                      let e = (0, k._)(this, _).filter((e) => e.state.isPaused);
                      return L.V.batch(() =>
                        e.reduce(
                          (e, t) => e.then(() => t.continue().catch(x.ZT)),
                          Promise.resolve()
                        )
                      );
                    })
                    .then(() => {
                      (0, A._)(this, w, void 0);
                    })
                ),
                (0, k._)(this, w)
              );
            }
            constructor(e = {}) {
              super(),
                (0, R._)(this, _, { writable: !0, value: void 0 }),
                (0, R._)(this, b, { writable: !0, value: void 0 }),
                (0, R._)(this, w, { writable: !0, value: void 0 }),
                (this.config = e),
                (0, A._)(this, _, []),
                (0, A._)(this, b, 0);
            }
          }),
        G = n(9555),
        z = n(7211);
      function X(e, t) {
        let { pages: n, pageParams: r } = t,
          i = n.length - 1;
        return e.getNextPageParam(n[i], n, r[i], r);
      }
      var Y =
        ((E = new WeakMap()),
        (C = new WeakMap()),
        (O = new WeakMap()),
        (M = new WeakMap()),
        (P = new WeakMap()),
        (D = new WeakMap()),
        (S = new WeakMap()),
        (T = new WeakMap()),
        class {
          mount() {
            N(this, D).value++,
              1 === (0, k._)(this, D) &&
                ((0, A._)(
                  this,
                  S,
                  G.j.subscribe(async (e) => {
                    e &&
                      (await this.resumePausedMutations(),
                      (0, k._)(this, E).onFocus());
                  })
                ),
                (0, A._)(
                  this,
                  T,
                  z.N.subscribe(async (e) => {
                    e &&
                      (await this.resumePausedMutations(),
                      (0, k._)(this, E).onOnline());
                  })
                ));
          }
          unmount() {
            var e, t;
            N(this, D).value--,
              0 === (0, k._)(this, D) &&
                (null === (e = (0, k._)(this, S)) ||
                  void 0 === e ||
                  e.call(this),
                (0, A._)(this, S, void 0),
                null === (t = (0, k._)(this, T)) ||
                  void 0 === t ||
                  t.call(this),
                (0, A._)(this, T, void 0));
          }
          isFetching(e) {
            return (0, k._)(this, E).findAll({ ...e, fetchStatus: "fetching" })
              .length;
          }
          isMutating(e) {
            return (0, k._)(this, C).findAll({ ...e, status: "pending" })
              .length;
          }
          getQueryData(e) {
            var t;
            let n = this.defaultQueryOptions({ queryKey: e });
            return null === (t = (0, k._)(this, E).get(n.queryHash)) ||
              void 0 === t
              ? void 0
              : t.state.data;
          }
          ensureQueryData(e) {
            let t = this.getQueryData(e.queryKey);
            if (void 0 === t) return this.fetchQuery(e);
            {
              let n = this.defaultQueryOptions(e),
                r = (0, k._)(this, E).build(this, n);
              return (
                e.revalidateIfStale &&
                  r.isStaleByTime(n.staleTime) &&
                  this.prefetchQuery(n),
                Promise.resolve(t)
              );
            }
          }
          getQueriesData(e) {
            return this.getQueryCache()
              .findAll(e)
              .map((e) => {
                let { queryKey: t, state: n } = e;
                return [t, n.data];
              });
          }
          setQueryData(e, t, n) {
            let r = this.defaultQueryOptions({ queryKey: e }),
              i = (0, k._)(this, E).get(r.queryHash),
              o = null == i ? void 0 : i.state.data,
              a = (0, x.SE)(t, o);
            if (void 0 !== a)
              return (0, k._)(this, E)
                .build(this, r)
                .setData(a, { ...n, manual: !0 });
          }
          setQueriesData(e, t, n) {
            return L.V.batch(() =>
              this.getQueryCache()
                .findAll(e)
                .map((e) => {
                  let { queryKey: r } = e;
                  return [r, this.setQueryData(r, t, n)];
                })
            );
          }
          getQueryState(e) {
            var t;
            let n = this.defaultQueryOptions({ queryKey: e });
            return null === (t = (0, k._)(this, E).get(n.queryHash)) ||
              void 0 === t
              ? void 0
              : t.state;
          }
          removeQueries(e) {
            let t = (0, k._)(this, E);
            L.V.batch(() => {
              t.findAll(e).forEach((e) => {
                t.remove(e);
              });
            });
          }
          resetQueries(e, t) {
            let n = (0, k._)(this, E),
              r = { type: "active", ...e };
            return L.V.batch(
              () => (
                n.findAll(e).forEach((e) => {
                  e.reset();
                }),
                this.refetchQueries(r, t)
              )
            );
          }
          cancelQueries() {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = { revert: !0, ...t };
            return Promise.all(
              L.V.batch(() =>
                (0, k._)(this, E)
                  .findAll(e)
                  .map((e) => e.cancel(n))
              )
            )
              .then(x.ZT)
              .catch(x.ZT);
          }
          invalidateQueries() {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return L.V.batch(() => {
              var n, r;
              if (
                ((0, k._)(this, E)
                  .findAll(e)
                  .forEach((e) => {
                    e.invalidate();
                  }),
                "none" === e.refetchType)
              )
                return Promise.resolve();
              let i = {
                ...e,
                type:
                  null !==
                    (r =
                      null !== (n = e.refetchType) && void 0 !== n
                        ? n
                        : e.type) && void 0 !== r
                    ? r
                    : "active",
              };
              return this.refetchQueries(i, t);
            });
          }
          refetchQueries() {
            var e;
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = arguments.length > 1 ? arguments[1] : void 0,
              r = {
                ...n,
                cancelRefetch:
                  null === (e = null == n ? void 0 : n.cancelRefetch) ||
                  void 0 === e ||
                  e,
              };
            return Promise.all(
              L.V.batch(() =>
                (0, k._)(this, E)
                  .findAll(t)
                  .filter((e) => !e.isDisabled())
                  .map((e) => {
                    let t = e.fetch(void 0, r);
                    return (
                      r.throwOnError || (t = t.catch(x.ZT)),
                      "paused" === e.state.fetchStatus ? Promise.resolve() : t
                    );
                  })
              )
            ).then(x.ZT);
          }
          fetchQuery(e) {
            let t = this.defaultQueryOptions(e);
            void 0 === t.retry && (t.retry = !1);
            let n = (0, k._)(this, E).build(this, t);
            return n.isStaleByTime(t.staleTime)
              ? n.fetch(t)
              : Promise.resolve(n.state.data);
          }
          prefetchQuery(e) {
            return this.fetchQuery(e).then(x.ZT).catch(x.ZT);
          }
          fetchInfiniteQuery(e) {
            var t;
            return (
              (e.behavior =
                ((t = e.pages),
                {
                  onFetch: (e, n) => {
                    let r = async () => {
                      var n, r, i, o, a, s;
                      let u;
                      let l = e.options,
                        c =
                          null === (i = e.fetchOptions) || void 0 === i
                            ? void 0
                            : null === (r = i.meta) || void 0 === r
                            ? void 0
                            : null === (n = r.fetchMore) || void 0 === n
                            ? void 0
                            : n.direction,
                        d =
                          (null === (o = e.state.data) || void 0 === o
                            ? void 0
                            : o.pages) || [],
                        h =
                          (null === (a = e.state.data) || void 0 === a
                            ? void 0
                            : a.pageParams) || [],
                        f = !1,
                        p = (t) => {
                          Object.defineProperty(t, "signal", {
                            enumerable: !0,
                            get: () => (
                              e.signal.aborted
                                ? (f = !0)
                                : e.signal.addEventListener("abort", () => {
                                    f = !0;
                                  }),
                              e.signal
                            ),
                          });
                        },
                        m =
                          e.options.queryFn && e.options.queryFn !== x.CN
                            ? e.options.queryFn
                            : () =>
                                Promise.reject(
                                  Error(
                                    "Missing queryFn: '".concat(
                                      e.options.queryHash,
                                      "'"
                                    )
                                  )
                                ),
                        y = async (t, n, r) => {
                          if (f) return Promise.reject();
                          if (null == n && t.pages.length)
                            return Promise.resolve(t);
                          let i = {
                            queryKey: e.queryKey,
                            pageParam: n,
                            direction: r ? "backward" : "forward",
                            meta: e.options.meta,
                          };
                          p(i);
                          let o = await m(i),
                            { maxPages: a } = e.options,
                            s = r ? x.Ht : x.VX;
                          return {
                            pages: s(t.pages, o, a),
                            pageParams: s(t.pageParams, n, a),
                          };
                        };
                      if (c && d.length) {
                        let e = "backward" === c,
                          t = { pages: d, pageParams: h },
                          n = (
                            e
                              ? function (e, t) {
                                  var n;
                                  let { pages: r, pageParams: i } = t;
                                  return null ===
                                    (n = e.getPreviousPageParam) || void 0 === n
                                    ? void 0
                                    : n.call(e, r[0], r, i[0], i);
                                }
                              : X
                          )(l, t);
                        u = await y(t, n, e);
                      } else {
                        u = await y(
                          { pages: [], pageParams: [] },
                          null !== (s = h[0]) && void 0 !== s
                            ? s
                            : l.initialPageParam
                        );
                        let e = null != t ? t : d.length;
                        for (let t = 1; t < e; t++) {
                          let e = X(l, u);
                          u = await y(u, e);
                        }
                      }
                      return u;
                    };
                    e.options.persister
                      ? (e.fetchFn = () => {
                          var t, i;
                          return null === (t = (i = e.options).persister) ||
                            void 0 === t
                            ? void 0
                            : t.call(
                                i,
                                r,
                                {
                                  queryKey: e.queryKey,
                                  meta: e.options.meta,
                                  signal: e.signal,
                                },
                                n
                              );
                        })
                      : (e.fetchFn = r);
                  },
                })),
              this.fetchQuery(e)
            );
          }
          prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(x.ZT).catch(x.ZT);
          }
          resumePausedMutations() {
            return z.N.isOnline()
              ? (0, k._)(this, C).resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return (0, k._)(this, E);
          }
          getMutationCache() {
            return (0, k._)(this, C);
          }
          getDefaultOptions() {
            return (0, k._)(this, O);
          }
          setDefaultOptions(e) {
            (0, A._)(this, O, e);
          }
          setQueryDefaults(e, t) {
            (0, k._)(this, M).set((0, x.Ym)(e), {
              queryKey: e,
              defaultOptions: t,
            });
          }
          getQueryDefaults(e) {
            let t = [...(0, k._)(this, M).values()],
              n = {};
            return (
              t.forEach((t) => {
                (0, x.to)(e, t.queryKey) && (n = { ...n, ...t.defaultOptions });
              }),
              n
            );
          }
          setMutationDefaults(e, t) {
            (0, k._)(this, P).set((0, x.Ym)(e), {
              mutationKey: e,
              defaultOptions: t,
            });
          }
          getMutationDefaults(e) {
            let t = [...(0, k._)(this, P).values()],
              n = {};
            return (
              t.forEach((t) => {
                (0, x.to)(e, t.mutationKey) &&
                  (n = { ...n, ...t.defaultOptions });
              }),
              n
            );
          }
          defaultQueryOptions(e) {
            if (e._defaulted) return e;
            let t = {
              ...(0, k._)(this, O).queries,
              ...this.getQueryDefaults(e.queryKey),
              ...e,
              _defaulted: !0,
            };
            return (
              t.queryHash || (t.queryHash = (0, x.Rm)(t.queryKey, t)),
              void 0 === t.refetchOnReconnect &&
                (t.refetchOnReconnect = "always" !== t.networkMode),
              void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
              !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
              !0 !== t.enabled && t.queryFn === x.CN && (t.enabled = !1),
              t
            );
          }
          defaultMutationOptions(e) {
            return (null == e ? void 0 : e._defaulted)
              ? e
              : {
                  ...(0, k._)(this, O).mutations,
                  ...((null == e ? void 0 : e.mutationKey) &&
                    this.getMutationDefaults(e.mutationKey)),
                  ...e,
                  _defaulted: !0,
                };
          }
          clear() {
            (0, k._)(this, E).clear(), (0, k._)(this, C).clear();
          }
          constructor(e = {}) {
            (0, R._)(this, E, { writable: !0, value: void 0 }),
              (0, R._)(this, C, { writable: !0, value: void 0 }),
              (0, R._)(this, O, { writable: !0, value: void 0 }),
              (0, R._)(this, M, { writable: !0, value: void 0 }),
              (0, R._)(this, P, { writable: !0, value: void 0 }),
              (0, R._)(this, D, { writable: !0, value: void 0 }),
              (0, R._)(this, S, { writable: !0, value: void 0 }),
              (0, R._)(this, T, { writable: !0, value: void 0 }),
              (0, A._)(this, E, e.queryCache || new V()),
              (0, A._)(this, C, e.mutationCache || new B()),
              (0, A._)(this, O, e.defaultOptions || {}),
              (0, A._)(this, M, new Map()),
              (0, A._)(this, P, new Map()),
              (0, A._)(this, D, 0);
          }
        });
    },
    3617: function (e, t, n) {
      n.d(t, {
        t: function () {
          return r;
        },
      });
      var r = function () {
        return null;
      };
    },
  },
]);
