"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2861],
  {
    2956: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(2139);
      let n = function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6406: function (e, t, r) {
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(2139),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1749: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let n = r(6921),
        o = r(1884),
        i = r(7437),
        l = o._(r(2265)),
        a = n._(r(4887)),
        s = n._(r(2251)),
        u = r(8630),
        c = r(6906),
        d = r(337);
      r(6184);
      let f = r(6993),
        p = n._(r(536)),
        h = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function m(e, t, r, n, o, i) {
        let l = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== l &&
          ((e["data-loaded-src"] = l),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let n = !1,
                    o = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(e);
              }
            }));
      }
      function g(e) {
        let [t, r] = l.version.split(".", 2),
          n = parseInt(t, 10),
          o = parseInt(r, 10);
        return n > 18 || (18 === n && o >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let b = (0, l.forwardRef)((e, t) => {
        let {
          src: r,
          srcSet: n,
          sizes: o,
          height: a,
          width: s,
          decoding: u,
          className: c,
          style: d,
          fetchPriority: f,
          placeholder: p,
          loading: h,
          unoptimized: b,
          fill: y,
          onLoadRef: v,
          onLoadingCompleteRef: w,
          setBlurComplete: x,
          setShowAltText: _,
          onLoad: j,
          onError: P,
          ...S
        } = e;
        return (0, i.jsx)("img", {
          ...S,
          ...g(f),
          loading: h,
          width: s,
          height: a,
          decoding: u,
          "data-nimg": y ? "fill" : "1",
          className: c,
          style: d,
          sizes: o,
          srcSet: n,
          src: r,
          ref: (0, l.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e && (P && (e.src = e.src), e.complete && m(e, p, v, w, x, b));
            },
            [r, p, v, w, x, P, b, t]
          ),
          onLoad: (e) => {
            m(e.currentTarget, p, v, w, x, b);
          },
          onError: (e) => {
            _(!0), "empty" !== p && x(!0), P && P(e);
          },
        });
      });
      function y(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...g(r.fetchPriority),
          };
        return t && a.default.preload
          ? (a.default.preload(r.src, n), null)
          : (0, i.jsx)(s.default, {
              children: (0, i.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let v = (0, l.forwardRef)((e, t) => {
        let r = (0, l.useContext)(f.RouterContext),
          n = (0, l.useContext)(d.ImageConfigContext),
          o = (0, l.useMemo)(() => {
            let e = h || n || c.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [n]),
          { onLoad: a, onLoadingComplete: s } = e,
          m = (0, l.useRef)(a);
        (0, l.useEffect)(() => {
          m.current = a;
        }, [a]);
        let g = (0, l.useRef)(s);
        (0, l.useEffect)(() => {
          g.current = s;
        }, [s]);
        let [v, w] = (0, l.useState)(!1),
          [x, _] = (0, l.useState)(!1),
          { props: j, meta: P } = (0, u.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: v,
            showAltText: x,
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(b, {
              ...j,
              unoptimized: P.unoptimized,
              placeholder: P.placeholder,
              fill: P.fill,
              onLoadRef: m,
              onLoadingCompleteRef: g,
              setBlurComplete: w,
              setShowAltText: _,
              ref: t,
            }),
            P.priority
              ? (0, i.jsx)(y, { isAppRouter: !r, imgAttributes: j })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5250: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let n = r(6921),
        o = r(7437),
        i = n._(r(2265)),
        l = r(4542),
        a = r(7434),
        s = r(1030),
        u = r(6874),
        c = r(2956),
        d = r(6993),
        f = r(8599),
        p = r(5291),
        h = r(6406),
        m = r(5786),
        g = r(1414),
        b = new Set();
      function y(e, t, r, n, o, i) {
        if ("undefined" != typeof window && (i || (0, a.isLocalURL)(t))) {
          if (!n.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (b.has(o)) return;
            b.add(o);
          }
          Promise.resolve(i ? e.prefetch(t, o) : e.prefetch(t, r, n)).catch(
            (e) => {}
          );
        }
      }
      function v(e) {
        return "string" == typeof e ? e : (0, s.formatUrl)(e);
      }
      let w = i.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: s,
          as: b,
          children: w,
          prefetch: x = null,
          passHref: _,
          replace: j,
          shallow: P,
          scroll: S,
          locale: O,
          onClick: k,
          onMouseEnter: C,
          onTouchStart: R,
          legacyBehavior: E = !1,
          ...M
        } = e;
        (r = w),
          E &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, o.jsx)("a", { children: r }));
        let z = i.default.useContext(d.RouterContext),
          I = i.default.useContext(f.AppRouterContext),
          N = null != z ? z : I,
          A = !z,
          T = !1 !== x,
          U = null === x ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: L, as: W } = i.default.useMemo(() => {
            if (!z) {
              let e = v(s);
              return { href: e, as: b ? v(b) : e };
            }
            let [e, t] = (0, l.resolveHref)(z, s, !0);
            return { href: e, as: b ? (0, l.resolveHref)(z, b) : t || e };
          }, [z, s, b]),
          D = i.default.useRef(L),
          G = i.default.useRef(W);
        E && (n = i.default.Children.only(r));
        let $ = E ? n && "object" == typeof n && n.ref : t,
          [F, B, q] = (0, p.useIntersection)({ rootMargin: "200px" }),
          K = i.default.useCallback(
            (e) => {
              (G.current !== W || D.current !== L) &&
                (q(), (G.current = W), (D.current = L)),
                F(e),
                $ &&
                  ("function" == typeof $
                    ? $(e)
                    : "object" == typeof $ && ($.current = e));
            },
            [W, $, L, q, F]
          );
        i.default.useEffect(() => {
          N && B && T && y(N, L, W, { locale: O }, { kind: U }, A);
        }, [W, L, B, O, T, null == z ? void 0 : z.locale, N, A, U]);
        let V = {
          ref: K,
          onClick(e) {
            E || "function" != typeof k || k(e),
              E &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              N &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, l, s, u, c) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, a.isLocalURL)(r)))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    let e = null == s || s;
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](r, n, {
                          shallow: l,
                          locale: u,
                          scroll: e,
                        })
                      : t[o ? "replace" : "push"](n || r, { scroll: e });
                  };
                  c ? i.default.startTransition(f) : f();
                })(e, N, L, W, j, P, S, O, A);
          },
          onMouseEnter(e) {
            E || "function" != typeof C || C(e),
              E &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              N &&
                (T || !A) &&
                y(
                  N,
                  L,
                  W,
                  { locale: O, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: U },
                  A
                );
          },
          onTouchStart(e) {
            E || "function" != typeof R || R(e),
              E &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              N &&
                (T || !A) &&
                y(
                  N,
                  L,
                  W,
                  { locale: O, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: U },
                  A
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(W)) V.href = W;
        else if (!E || _ || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== O ? O : null == z ? void 0 : z.locale,
            t =
              (null == z ? void 0 : z.isLocaleDomain) &&
              (0, h.getDomainLocale)(
                W,
                e,
                null == z ? void 0 : z.locales,
                null == z ? void 0 : z.domainLocales
              );
          V.href =
            t ||
            (0, m.addBasePath)(
              (0, c.addLocale)(W, e, null == z ? void 0 : z.defaultLocale)
            );
        }
        return E
          ? i.default.cloneElement(n, V)
          : (0, o.jsx)("a", { ...M, ...V, children: r });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2185: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          requestIdleCallback: function () {
            return r;
          },
          cancelIdleCallback: function () {
            return n;
          },
        });
      let r =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4542: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let n = r(5770),
        o = r(1030),
        i = r(4544),
        l = r(6874),
        a = r(2139),
        s = r(7434),
        u = r(2360),
        c = r(6735);
      function d(e, t, r) {
        let d;
        let f = "string" == typeof t ? t : (0, o.formatWithValidation)(t),
          p = f.match(/^[a-zA-Z]{1,}:\/\//),
          h = p ? f.slice(p[0].length) : f;
        if ((h.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              f +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let t = (0, l.normalizeRepeatedSlashes)(h);
          f = (p ? p[0] : "") + t;
        }
        if (!(0, s.isLocalURL)(f)) return r ? [f] : f;
        try {
          d = new URL(f.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          d = new URL("/", "http://n");
        }
        try {
          let e = new URL(f, d);
          e.pathname = (0, a.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, u.isDynamicRoute)(e.pathname) && e.searchParams && r) {
            let r = (0, n.searchParamsToUrlQuery)(e.searchParams),
              { result: l, params: a } = (0, c.interpolateAs)(
                e.pathname,
                e.pathname,
                r
              );
            l &&
              (t = (0, o.formatWithValidation)({
                pathname: l,
                hash: e.hash,
                query: (0, i.omit)(r, a),
              }));
          }
          let l =
            e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return r ? [l, t || l] : l;
        } catch (e) {
          return r ? [f] : f;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5291: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = r(2265),
        o = r(2185),
        i = "function" == typeof IntersectionObserver,
        l = new Map(),
        a = [];
      function s(e) {
        let { rootRef: t, rootMargin: r, disabled: s } = e,
          u = s || !i,
          [c, d] = (0, n.useState)(!1),
          f = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (i) {
              if (u || c) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: i,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = a.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = l.get(n))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: o,
                      }),
                      a.push(r),
                      l.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    i.set(e, t),
                    o.observe(e),
                    function () {
                      if ((i.delete(e), o.unobserve(e), 0 === i.size)) {
                        o.disconnect(), l.delete(n);
                        let e = a.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && a.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!c) {
              let e = (0, o.requestIdleCallback)(() => d(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [u, r, t, c, f.current]),
          [
            p,
            c,
            (0, n.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5827: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(6921)._(r(2265)).default.createContext({});
    },
    3044: function (e, t) {
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: n = !1,
        } = void 0 === e ? {} : e;
        return t || (r && n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    2202: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
      function o(e) {
        return r.test(e) ? e.replace(n, "\\$&") : e;
      }
    },
    8630: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        r(6184);
      let n = r(7160),
        o = r(6906);
      function i(e) {
        return void 0 !== e.default;
      }
      function l(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function a(e, t) {
        var r;
        let a,
          s,
          u,
          {
            src: c,
            sizes: d,
            unoptimized: f = !1,
            priority: p = !1,
            loading: h,
            className: m,
            quality: g,
            width: b,
            height: y,
            fill: v = !1,
            style: w,
            onLoad: x,
            onLoadingComplete: _,
            placeholder: j = "empty",
            blurDataURL: P,
            fetchPriority: S,
            layout: O,
            objectFit: k,
            objectPosition: C,
            lazyBoundary: R,
            lazyRoot: E,
            ...M
          } = e,
          { imgConf: z, showAltText: I, blurComplete: N, defaultLoader: A } = t,
          T = z || o.imageConfigDefault;
        if ("allSizes" in T) a = T;
        else {
          let e = [...T.deviceSizes, ...T.imageSizes].sort((e, t) => e - t),
            t = T.deviceSizes.sort((e, t) => e - t);
          a = { ...T, allSizes: e, deviceSizes: t };
        }
        let U = M.loader || A;
        delete M.loader, delete M.srcSet;
        let L = "__next_img_default" in U;
        if (L) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = U;
          U = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (O) {
          "fill" === O && (v = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[O];
          e && (w = { ...w, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[O];
          t && !d && (d = t);
        }
        let W = "",
          D = l(b),
          G = l(y);
        if ("object" == typeof (r = c) && (i(r) || void 0 !== r.src)) {
          let e = i(c) ? c.default : c;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((s = e.blurWidth),
            (u = e.blurHeight),
            (P = P || e.blurDataURL),
            (W = e.src),
            !v)
          ) {
            if (D || G) {
              if (D && !G) {
                let t = D / e.width;
                G = Math.round(e.height * t);
              } else if (!D && G) {
                let t = G / e.height;
                D = Math.round(e.width * t);
              }
            } else (D = e.width), (G = e.height);
          }
        }
        let $ = !p && ("lazy" === h || void 0 === h);
        (!(c = "string" == typeof c ? c : W) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((f = !0), ($ = !1)),
          a.unoptimized && (f = !0),
          L && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (f = !0),
          p && (S = "high");
        let F = l(g),
          B = Object.assign(
            v
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: k,
                  objectPosition: C,
                }
              : {},
            I ? {} : { color: "transparent" },
            w
          ),
          q =
            N || "empty" === j
              ? null
              : "blur" === j
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: D,
                  heightInt: G,
                  blurWidth: s,
                  blurHeight: u,
                  blurDataURL: P || "",
                  objectFit: B.objectFit,
                }) +
                '")'
              : 'url("' + j + '")',
          K = q
            ? {
                backgroundSize: B.objectFit || "cover",
                backgroundPosition: B.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: q,
              }
            : {},
          V = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: o,
              quality: i,
              sizes: l,
              loader: a,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: s, kind: u } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: o } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); n) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: o.filter((t) => t >= n[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => o.find((t) => t >= e) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, o, l),
              c = s.length - 1;
            return {
              sizes: l || "w" !== u ? l : "100vw",
              srcSet: s
                .map(
                  (e, n) =>
                    a({ config: t, src: r, quality: i, width: e }) +
                    " " +
                    ("w" === u ? e : n + 1) +
                    u
                )
                .join(", "),
              src: a({ config: t, src: r, quality: i, width: s[c] }),
            };
          })({
            config: a,
            src: c,
            unoptimized: f,
            width: D,
            quality: F,
            sizes: d,
            loader: U,
          });
        return {
          props: {
            ...M,
            loading: $ ? "lazy" : h,
            fetchPriority: S,
            width: D,
            height: G,
            decoding: "async",
            className: m,
            style: { ...B, ...K },
            sizes: V.sizes,
            srcSet: V.srcSet,
            src: V.src,
          },
          meta: { unoptimized: f, priority: p, placeholder: j, fill: v },
        };
      }
    },
    2251: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          defaultHead: function () {
            return d;
          },
          default: function () {
            return m;
          },
        });
      let n = r(6921),
        o = r(1884),
        i = r(7437),
        l = o._(r(2265)),
        a = n._(r(7392)),
        s = r(5827),
        u = r(7484),
        c = r(3044);
      function d(e) {
        void 0 === e && (e = !1);
        let t = [(0, i.jsx)("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              (0, i.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function f(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === l.default.Fragment
          ? e.concat(
              l.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      r(6184);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function h(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(f, [])
          .reverse()
          .concat(d(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return (o) => {
                let i = !0,
                  l = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  l = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (i = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (i = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) r.has(t) ? (i = !1) : r.add(t);
                        else {
                          let e = o.props[t],
                            r = n[t] || new Set();
                          ("name" !== t || !l) && r.has(e)
                            ? (i = !1)
                            : (r.add(e), (n[t] = r));
                        }
                      }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let n = e.key || t;
            if (
              !r &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                l.default.cloneElement(e, t)
              );
            }
            return l.default.cloneElement(e, { key: n });
          });
      }
      let m = function (e) {
        let { children: t } = e,
          r = (0, l.useContext)(s.AmpStateContext),
          n = (0, l.useContext)(u.HeadManagerContext);
        return (0, i.jsx)(a.default, {
          reduceComponentsToState: h,
          headManager: n,
          inAmpMode: (0, c.isInAmpMode)(r),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7160: function (e, t) {
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: o,
            blurDataURL: i,
            objectFit: l,
          } = e,
          a = n ? 40 * n : t,
          s = o ? 40 * o : r,
          u = a && s ? "viewBox='0 0 " + a + " " + s + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === l
            ? "xMidYMid"
            : "cover" === l
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          i +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    337: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(6921)._(r(2265)),
        o = r(6906),
        i = n.default.createContext(o.imageConfigDefault);
    },
    6906: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    536: function (e, t) {
      function r(e) {
        let { config: t, src: r, width: n, quality: o } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          n +
          "&q=" +
          (o || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    6993: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(6921)._(r(2265)).default.createContext(null);
    },
    1030: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return i;
          },
          urlObjectKeys: function () {
            return l;
          },
          formatWithValidation: function () {
            return a;
          },
        });
      let n = r(1884)._(r(5770)),
        o = /https?|ftp|gopher|file/;
      function i(e) {
        let { auth: t, hostname: r } = e,
          i = e.protocol || "",
          l = e.pathname || "",
          a = e.hash || "",
          s = e.query || "",
          u = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (u = t + e.host)
            : r &&
              ((u = t + (~r.indexOf(":") ? "[" + r + "]" : r)),
              e.port && (u += ":" + e.port)),
          s &&
            "object" == typeof s &&
            (s = String(n.urlQueryToSearchParams(s)));
        let c = e.search || (s && "?" + s) || "";
        return (
          i && !i.endsWith(":") && (i += ":"),
          e.slashes || ((!i || o.test(i)) && !1 !== u)
            ? ((u = "//" + (u || "")), l && "/" !== l[0] && (l = "/" + l))
            : u || (u = ""),
          a && "#" !== a[0] && (a = "#" + a),
          c && "?" !== c[0] && (c = "?" + c),
          "" +
            i +
            u +
            (l = l.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace("#", "%23")) +
            a
        );
      }
      let l = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(e) {
        return i(e);
      }
    },
    2360: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getSortedRoutes: function () {
            return n.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return o.isDynamicRoute;
          },
        });
      let n = r(7409),
        o = r(1305);
    },
    6735: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(2395),
        o = r(9935);
      function i(e, t, r) {
        let i = "",
          l = (0, o.getRouteRegex)(e),
          a = l.groups,
          s = (t !== e ? (0, n.getRouteMatcher)(l)(t) : "") || r;
        i = e;
        let u = Object.keys(a);
        return (
          u.every((e) => {
            let t = s[e] || "",
              { repeat: r, optional: n } = a[e],
              o = "[" + (r ? "..." : "") + e + "]";
            return (
              n && (o = (t ? "" : "/") + "[" + o + "]"),
              r && !Array.isArray(t) && (t = [t]),
              (n || e in s) &&
                (i =
                  i.replace(
                    o,
                    r
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t)
                  ) || "/")
            );
          }) || (i = ""),
          { params: u, result: i }
        );
      }
    },
    1305: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(4749),
        o = /\/\[[^/]+?\](?=\/|$)/;
      function i(e) {
        return (
          (0, n.isInterceptionRouteAppPath)(e) &&
            (e = (0, n.extractInterceptionRouteInformation)(
              e
            ).interceptedRoute),
          o.test(e)
        );
      }
    },
    7434: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(6874),
        o = r(7379);
      function i(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, n.getLocationOrigin)(),
            r = new URL(e, t);
          return r.origin === t && (0, o.hasBasePath)(r.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    4544: function (e, t) {
      function r(e, t) {
        let r = {};
        return (
          Object.keys(e).forEach((n) => {
            t.includes(n) || (r[n] = e[n]);
          }),
          r
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    5770: function (e, t) {
      function r(e) {
        let t = {};
        return (
          e.forEach((e, r) => {
            void 0 === t[r]
              ? (t[r] = e)
              : Array.isArray(t[r])
              ? t[r].push(e)
              : (t[r] = [t[r], e]);
          }),
          t
        );
      }
      function n(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [r, o] = e;
            Array.isArray(o)
              ? o.forEach((e) => t.append(r, n(e)))
              : t.set(r, n(o));
          }),
          t
        );
      }
      function i(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return (
          r.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, r) => e.append(r, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
          assign: function () {
            return i;
          },
        });
    },
    2395: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(6874);
      function o(e) {
        let { re: t, groups: r } = e;
        return (e) => {
          let o = t.exec(e);
          if (!o) return !1;
          let i = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new n.DecodeError("failed to decode param");
              }
            },
            l = {};
          return (
            Object.keys(r).forEach((e) => {
              let t = r[e],
                n = o[t.pos];
              void 0 !== n &&
                (l[e] = ~n.indexOf("/")
                  ? n.split("/").map((e) => i(e))
                  : t.repeat
                  ? [i(n)]
                  : i(n));
            }),
            l
          );
        };
      }
    },
    9935: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getRouteRegex: function () {
            return s;
          },
          getNamedRouteRegex: function () {
            return d;
          },
          getNamedMiddlewareRegex: function () {
            return f;
          },
        });
      let n = r(4749),
        o = r(2202),
        i = r(5868);
      function l(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let r = e.startsWith("...");
        return r && (e = e.slice(3)), { key: e, repeat: r, optional: t };
      }
      function a(e) {
        let t = (0, i.removeTrailingSlash)(e).slice(1).split("/"),
          r = {},
          a = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = n.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                i = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && i) {
                let { key: e, optional: n, repeat: s } = l(i[1]);
                return (
                  (r[e] = { pos: a++, repeat: s, optional: n }),
                  "/" + (0, o.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!i) return "/" + (0, o.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: n } = l(i[1]);
                return (
                  (r[e] = { pos: a++, repeat: t, optional: n }),
                  t ? (n ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: r,
        };
      }
      function s(e) {
        let { parameterizedRoute: t, groups: r } = a(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: r };
      }
      function u(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: r,
            segment: n,
            routeKeys: i,
            keyPrefix: a,
          } = e,
          { key: s, optional: u, repeat: c } = l(n),
          d = s.replace(/\W/g, "");
        a && (d = "" + a + d);
        let f = !1;
        (0 === d.length || d.length > 30) && (f = !0),
          isNaN(parseInt(d.slice(0, 1))) || (f = !0),
          f && (d = r()),
          a ? (i[d] = "" + a + s) : (i[d] = s);
        let p = t ? (0, o.escapeStringRegexp)(t) : "";
        return c
          ? u
            ? "(?:/" + p + "(?<" + d + ">.+?))?"
            : "/" + p + "(?<" + d + ">.+?)"
          : "/" + p + "(?<" + d + ">[^/]+?)";
      }
      function c(e, t) {
        let r;
        let l = (0, i.removeTrailingSlash)(e).slice(1).split("/"),
          a =
            ((r = 0),
            () => {
              let e = "",
                t = ++r;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          s = {};
        return {
          namedParameterizedRoute: l
            .map((e) => {
              let r = n.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                i = e.match(/\[((?:\[.*\])|.+)\]/);
              if (r && i) {
                let [r] = e.split(i[0]);
                return u({
                  getSafeRouteKey: a,
                  interceptionMarker: r,
                  segment: i[1],
                  routeKeys: s,
                  keyPrefix: t ? "nxtI" : void 0,
                });
              }
              return i
                ? u({
                    getSafeRouteKey: a,
                    segment: i[1],
                    routeKeys: s,
                    keyPrefix: t ? "nxtP" : void 0,
                  })
                : "/" + (0, o.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: s,
        };
      }
      function d(e, t) {
        let r = c(e, t);
        return {
          ...s(e),
          namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
          routeKeys: r.routeKeys,
        };
      }
      function f(e, t) {
        let { parameterizedRoute: r } = a(e),
          { catchAll: n = !0 } = t;
        if ("/" === r) return { namedRegex: "^/" + (n ? ".*" : "") + "$" };
        let { namedParameterizedRoute: o } = c(e, !1);
        return { namedRegex: "^" + o + (n ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    7409: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      class r {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let r = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              r.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            r.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              r.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              r.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            r
          );
        }
        _insert(e, t, n) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (n) throw Error("Catch-all must be the last part of the URL.");
          let o = e[0];
          if (o.startsWith("[") && o.endsWith("]")) {
            let r = o.slice(1, -1),
              l = !1;
            if (
              (r.startsWith("[") &&
                r.endsWith("]") &&
                ((r = r.slice(1, -1)), (l = !0)),
              r.startsWith("...") && ((r = r.substring(3)), (n = !0)),
              r.startsWith("[") || r.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  r +
                  "')."
              );
            if (r.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  r +
                  "')."
              );
            function i(e, r) {
              if (null !== e && e !== r)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    r +
                    "')."
                );
              t.forEach((e) => {
                if (e === r)
                  throw Error(
                    'You cannot have the same slug name "' +
                      r +
                      '" repeat within a single dynamic path'
                  );
                if (e.replace(/\W/g, "") === o.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      r +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                t.push(r);
            }
            if (n) {
              if (l) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).'
                  );
                i(this.optionalRestSlugName, r),
                  (this.optionalRestSlugName = r),
                  (o = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").'
                  );
                i(this.restSlugName, r), (this.restSlugName = r), (o = "[...]");
              }
            } else {
              if (l)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").'
                );
              i(this.slugName, r), (this.slugName = r), (o = "[]");
            }
          }
          this.children.has(o) || this.children.set(o, new r()),
            this.children.get(o)._insert(e.slice(1), t, n);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function n(e) {
        let t = new r();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    7392: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(2265),
        o = "undefined" == typeof window,
        i = o ? () => {} : n.useLayoutEffect,
        l = o ? () => {} : n.useEffect;
      function a(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function a() {
          if (t && t.mountedInstances) {
            let o = n.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(r(o, e));
          }
        }
        if (o) {
          var s;
          null == t || null == (s = t.mountedInstances) || s.add(e.children),
            a();
        }
        return (
          i(() => {
            var r;
            return (
              null == t ||
                null == (r = t.mountedInstances) ||
                r.add(e.children),
              () => {
                var r;
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.delete(e.children);
              }
            );
          }),
          i(
            () => (
              t && (t._pendingUpdate = a),
              () => {
                t && (t._pendingUpdate = a);
              }
            )
          ),
          l(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    6874: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          isAbsoluteUrl: function () {
            return i;
          },
          getLocationOrigin: function () {
            return l;
          },
          getURL: function () {
            return a;
          },
          getDisplayName: function () {
            return s;
          },
          isResSent: function () {
            return u;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          loadGetInitialProps: function () {
            return d;
          },
          SP: function () {
            return f;
          },
          ST: function () {
            return p;
          },
          DecodeError: function () {
            return h;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return g;
          },
          MissingStaticPage: function () {
            return b;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          stringifyError: function () {
            return v;
          },
        });
      let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(e) {
        let t,
          r = !1;
        return function () {
          for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
          return r || ((r = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        i = (e) => o.test(e);
      function l() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + "//" + t + (r ? ":" + r : "");
      }
      function a() {
        let { href: e } = window.location,
          t = l();
        return e.substring(t.length);
      }
      function s(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function u(e) {
        return e.finished || e.headersSent;
      }
      function c(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function d(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await d(t.Component, t.ctx) }
            : {};
        let n = await e.getInitialProps(t);
        if (r && u(r)) return n;
        if (!n)
          throw Error(
            '"' +
              s(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.'
          );
        return n;
      }
      let f = "undefined" != typeof performance,
        p =
          f &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class h extends Error {}
      class m extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class b extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function v(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    3167: function (e, t, r) {
      r.d(t, {
        W: function () {
          return n;
        },
      });
      function n() {
        for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                n,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var i = t.length;
                  for (r = 0; r < i; r++)
                    t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                } else for (n in t) t[n] && (o && (o += " "), (o += n));
              }
              return o;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
    },
    1367: function (e, t, r) {
      r.d(t, {
        m6: function () {
          return T;
        },
      });
      let n = /^\[(.+)\]$/;
      function o(e, t) {
        let r = e;
        return (
          t.split("-").forEach((e) => {
            r.nextPart.has(e) ||
              r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (r = r.nextPart.get(e));
          }),
          r
        );
      }
      let i = /\s+/;
      function l() {
        let e,
          t,
          r = 0,
          n = "";
        for (; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              let r;
              if ("string" == typeof t) return t;
              let n = "";
              for (let o = 0; o < t.length; o++)
                t[o] && (r = e(t[o])) && (n && (n += " "), (n += r));
              return n;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      function a(e) {
        let t = (t) => t[e] || [];
        return (t.isThemeGetter = !0), t;
      }
      let s = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        u = /^\d+\/\d+$/,
        c = new Set(["px", "full", "screen"]),
        d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        f =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        p = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        h = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        m =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function g(e) {
        return y(e) || c.has(e) || u.test(e);
      }
      function b(e) {
        return M(e, "length", z);
      }
      function y(e) {
        return !!e && !Number.isNaN(Number(e));
      }
      function v(e) {
        return M(e, "number", y);
      }
      function w(e) {
        return !!e && Number.isInteger(Number(e));
      }
      function x(e) {
        return e.endsWith("%") && y(e.slice(0, -1));
      }
      function _(e) {
        return s.test(e);
      }
      function j(e) {
        return d.test(e);
      }
      let P = new Set(["length", "size", "percentage"]);
      function S(e) {
        return M(e, P, I);
      }
      function O(e) {
        return M(e, "position", I);
      }
      let k = new Set(["image", "url"]);
      function C(e) {
        return M(e, k, A);
      }
      function R(e) {
        return M(e, "", N);
      }
      function E() {
        return !0;
      }
      function M(e, t, r) {
        let n = s.exec(e);
        return (
          !!n &&
          (n[1] ? ("string" == typeof t ? n[1] === t : t.has(n[1])) : r(n[2]))
        );
      }
      function z(e) {
        return f.test(e) && !p.test(e);
      }
      function I() {
        return !1;
      }
      function N(e) {
        return h.test(e);
      }
      function A(e) {
        return m.test(e);
      }
      let T = (function (e) {
        let t, r, a;
        for (
          var s = arguments.length, u = Array(s > 1 ? s - 1 : 0), c = 1;
          c < s;
          c++
        )
          u[c - 1] = arguments[c];
        let d = function (i) {
          var l;
          return (
            (r = (t = {
              cache: (function (e) {
                if (e < 1) return { get: () => void 0, set: () => {} };
                let t = 0,
                  r = new Map(),
                  n = new Map();
                function o(o, i) {
                  r.set(o, i), ++t > e && ((t = 0), (n = r), (r = new Map()));
                }
                return {
                  get(e) {
                    let t = r.get(e);
                    return void 0 !== t
                      ? t
                      : void 0 !== (t = n.get(e))
                      ? (o(e, t), t)
                      : void 0;
                  },
                  set(e, t) {
                    r.has(e) ? r.set(e, t) : o(e, t);
                  },
                };
              })((l = u.reduce((e, t) => t(e), e())).cacheSize),
              splitModifiers: (function (e) {
                let t = e.separator,
                  r = 1 === t.length,
                  n = t[0],
                  o = t.length;
                return function (e) {
                  let i;
                  let l = [],
                    a = 0,
                    s = 0;
                  for (let u = 0; u < e.length; u++) {
                    let c = e[u];
                    if (0 === a) {
                      if (c === n && (r || e.slice(u, u + o) === t)) {
                        l.push(e.slice(s, u)), (s = u + o);
                        continue;
                      }
                      if ("/" === c) {
                        i = u;
                        continue;
                      }
                    }
                    "[" === c ? a++ : "]" === c && a--;
                  }
                  let u = 0 === l.length ? e : e.substring(s),
                    c = u.startsWith("!"),
                    d = c ? u.substring(1) : u;
                  return {
                    modifiers: l,
                    hasImportantModifier: c,
                    baseClassName: d,
                    maybePostfixModifierPosition: i && i > s ? i - s : void 0,
                  };
                };
              })(l),
              ...(function (e) {
                let t = (function (e) {
                    var t;
                    let { theme: r, prefix: n } = e,
                      i = { nextPart: new Map(), validators: [] };
                    return (
                      ((t = Object.entries(e.classGroups)),
                      n
                        ? t.map((e) => {
                            let [t, r] = e;
                            return [
                              t,
                              r.map((e) =>
                                "string" == typeof e
                                  ? n + e
                                  : "object" == typeof e
                                  ? Object.fromEntries(
                                      Object.entries(e).map((e) => {
                                        let [t, r] = e;
                                        return [n + t, r];
                                      })
                                    )
                                  : e
                              ),
                            ];
                          })
                        : t).forEach((e) => {
                        let [t, n] = e;
                        (function e(t, r, n, i) {
                          t.forEach((t) => {
                            if ("string" == typeof t) {
                              ("" === t ? r : o(r, t)).classGroupId = n;
                              return;
                            }
                            if ("function" == typeof t) {
                              if (t.isThemeGetter) {
                                e(t(i), r, n, i);
                                return;
                              }
                              r.validators.push({
                                validator: t,
                                classGroupId: n,
                              });
                              return;
                            }
                            Object.entries(t).forEach((t) => {
                              let [l, a] = t;
                              e(a, o(r, l), n, i);
                            });
                          });
                        })(n, i, t, r);
                      }),
                      i
                    );
                  })(e),
                  {
                    conflictingClassGroups: r,
                    conflictingClassGroupModifiers: i,
                  } = e;
                return {
                  getClassGroupId: function (e) {
                    let r = e.split("-");
                    return (
                      "" === r[0] && 1 !== r.length && r.shift(),
                      (function e(t, r) {
                        var n;
                        if (0 === t.length) return r.classGroupId;
                        let o = t[0],
                          i = r.nextPart.get(o),
                          l = i ? e(t.slice(1), i) : void 0;
                        if (l) return l;
                        if (0 === r.validators.length) return;
                        let a = t.join("-");
                        return null ===
                          (n = r.validators.find((e) => {
                            let { validator: t } = e;
                            return t(a);
                          })) || void 0 === n
                          ? void 0
                          : n.classGroupId;
                      })(r, t) ||
                        (function (e) {
                          if (n.test(e)) {
                            let t = n.exec(e)[1],
                              r =
                                null == t
                                  ? void 0
                                  : t.substring(0, t.indexOf(":"));
                            if (r) return "arbitrary.." + r;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, t) {
                    let n = r[e] || [];
                    return t && i[e] ? [...n, ...i[e]] : n;
                  },
                };
              })(l),
            }).cache.get),
            (a = t.cache.set),
            (d = f),
            f(i)
          );
        };
        function f(e) {
          let n = r(e);
          if (n) return n;
          let o = (function (e, t) {
            let {
                splitModifiers: r,
                getClassGroupId: n,
                getConflictingClassGroupIds: o,
              } = t,
              l = new Set();
            return e
              .trim()
              .split(i)
              .map((e) => {
                let {
                    modifiers: t,
                    hasImportantModifier: o,
                    baseClassName: i,
                    maybePostfixModifierPosition: l,
                  } = r(e),
                  a = n(l ? i.substring(0, l) : i),
                  s = !!l;
                if (!a) {
                  if (!l || !(a = n(i)))
                    return { isTailwindClass: !1, originalClassName: e };
                  s = !1;
                }
                let u = (function (e) {
                  if (e.length <= 1) return e;
                  let t = [],
                    r = [];
                  return (
                    e.forEach((e) => {
                      "[" === e[0]
                        ? (t.push(...r.sort(), e), (r = []))
                        : r.push(e);
                    }),
                    t.push(...r.sort()),
                    t
                  );
                })(t).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: o ? u + "!" : u,
                  classGroupId: a,
                  originalClassName: e,
                  hasPostfixModifier: s,
                };
              })
              .reverse()
              .filter((e) => {
                if (!e.isTailwindClass) return !0;
                let {
                    modifierId: t,
                    classGroupId: r,
                    hasPostfixModifier: n,
                  } = e,
                  i = t + r;
                return (
                  !l.has(i) &&
                  (l.add(i), o(r, n).forEach((e) => l.add(t + e)), !0)
                );
              })
              .reverse()
              .map((e) => e.originalClassName)
              .join(" ");
          })(e, t);
          return a(e, o), o;
        }
        return function () {
          return d(l.apply(null, arguments));
        };
      })(function () {
        let e = a("colors"),
          t = a("spacing"),
          r = a("blur"),
          n = a("brightness"),
          o = a("borderColor"),
          i = a("borderRadius"),
          l = a("borderSpacing"),
          s = a("borderWidth"),
          u = a("contrast"),
          c = a("grayscale"),
          d = a("hueRotate"),
          f = a("invert"),
          p = a("gap"),
          h = a("gradientColorStops"),
          m = a("gradientColorStopPositions"),
          P = a("inset"),
          k = a("margin"),
          M = a("opacity"),
          z = a("padding"),
          I = a("saturate"),
          N = a("scale"),
          A = a("sepia"),
          T = a("skew"),
          U = a("space"),
          L = a("translate"),
          W = () => ["auto", "contain", "none"],
          D = () => ["auto", "hidden", "clip", "visible", "scroll"],
          G = () => ["auto", _, t],
          $ = () => [_, t],
          F = () => ["", g, b],
          B = () => ["auto", y, _],
          q = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          K = () => ["solid", "dashed", "dotted", "double", "none"],
          V = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
            "plus-lighter",
          ],
          Y = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          H = () => ["", "0", _],
          Q = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          J = () => [y, v],
          Z = () => [y, _];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [E],
            spacing: [g, b],
            blur: ["none", "", j, _],
            brightness: J(),
            borderColor: [e],
            borderRadius: ["none", "", "full", j, _],
            borderSpacing: $(),
            borderWidth: F(),
            contrast: J(),
            grayscale: H(),
            hueRotate: Z(),
            invert: H(),
            gap: $(),
            gradientColorStops: [e],
            gradientColorStopPositions: [x, b],
            inset: G(),
            margin: G(),
            opacity: J(),
            padding: $(),
            saturate: J(),
            scale: J(),
            sepia: H(),
            skew: Z(),
            space: $(),
            translate: $(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", _] }],
            container: ["container"],
            columns: [{ columns: [j] }],
            "break-after": [{ "break-after": Q() }],
            "break-before": [{ "break-before": Q() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...q(), _] }],
            overflow: [{ overflow: D() }],
            "overflow-x": [{ "overflow-x": D() }],
            "overflow-y": [{ "overflow-y": D() }],
            overscroll: [{ overscroll: W() }],
            "overscroll-x": [{ "overscroll-x": W() }],
            "overscroll-y": [{ "overscroll-y": W() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [P] }],
            "inset-x": [{ "inset-x": [P] }],
            "inset-y": [{ "inset-y": [P] }],
            start: [{ start: [P] }],
            end: [{ end: [P] }],
            top: [{ top: [P] }],
            right: [{ right: [P] }],
            bottom: [{ bottom: [P] }],
            left: [{ left: [P] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", w, _] }],
            basis: [{ basis: G() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", _] }],
            grow: [{ grow: H() }],
            shrink: [{ shrink: H() }],
            order: [{ order: ["first", "last", "none", w, _] }],
            "grid-cols": [{ "grid-cols": [E] }],
            "col-start-end": [{ col: ["auto", { span: ["full", w, _] }, _] }],
            "col-start": [{ "col-start": B() }],
            "col-end": [{ "col-end": B() }],
            "grid-rows": [{ "grid-rows": [E] }],
            "row-start-end": [{ row: ["auto", { span: [w, _] }, _] }],
            "row-start": [{ "row-start": B() }],
            "row-end": [{ "row-end": B() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", _] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", _] }],
            gap: [{ gap: [p] }],
            "gap-x": [{ "gap-x": [p] }],
            "gap-y": [{ "gap-y": [p] }],
            "justify-content": [{ justify: ["normal", ...Y()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...Y(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...Y(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [z] }],
            px: [{ px: [z] }],
            py: [{ py: [z] }],
            ps: [{ ps: [z] }],
            pe: [{ pe: [z] }],
            pt: [{ pt: [z] }],
            pr: [{ pr: [z] }],
            pb: [{ pb: [z] }],
            pl: [{ pl: [z] }],
            m: [{ m: [k] }],
            mx: [{ mx: [k] }],
            my: [{ my: [k] }],
            ms: [{ ms: [k] }],
            me: [{ me: [k] }],
            mt: [{ mt: [k] }],
            mr: [{ mr: [k] }],
            mb: [{ mb: [k] }],
            ml: [{ ml: [k] }],
            "space-x": [{ "space-x": [U] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [U] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", _, t] },
            ],
            "min-w": [{ "min-w": [_, t, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  _,
                  t,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [j] },
                  j,
                ],
              },
            ],
            h: [
              { h: [_, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [_, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [_, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [_, t, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", j, b] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  v,
                ],
              },
            ],
            "font-family": [{ font: [E] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  _,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", y, v] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  g,
                  _,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", _] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", _] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [M] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [M] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...K(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", g, b] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", g, _] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: $() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  _,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", _] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [M] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...q(), O] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", S] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  C,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [m] }],
            "gradient-via-pos": [{ via: [m] }],
            "gradient-to-pos": [{ to: [m] }],
            "gradient-from": [{ from: [h] }],
            "gradient-via": [{ via: [h] }],
            "gradient-to": [{ to: [h] }],
            rounded: [{ rounded: [i] }],
            "rounded-s": [{ "rounded-s": [i] }],
            "rounded-e": [{ "rounded-e": [i] }],
            "rounded-t": [{ "rounded-t": [i] }],
            "rounded-r": [{ "rounded-r": [i] }],
            "rounded-b": [{ "rounded-b": [i] }],
            "rounded-l": [{ "rounded-l": [i] }],
            "rounded-ss": [{ "rounded-ss": [i] }],
            "rounded-se": [{ "rounded-se": [i] }],
            "rounded-ee": [{ "rounded-ee": [i] }],
            "rounded-es": [{ "rounded-es": [i] }],
            "rounded-tl": [{ "rounded-tl": [i] }],
            "rounded-tr": [{ "rounded-tr": [i] }],
            "rounded-br": [{ "rounded-br": [i] }],
            "rounded-bl": [{ "rounded-bl": [i] }],
            "border-w": [{ border: [s] }],
            "border-w-x": [{ "border-x": [s] }],
            "border-w-y": [{ "border-y": [s] }],
            "border-w-s": [{ "border-s": [s] }],
            "border-w-e": [{ "border-e": [s] }],
            "border-w-t": [{ "border-t": [s] }],
            "border-w-r": [{ "border-r": [s] }],
            "border-w-b": [{ "border-b": [s] }],
            "border-w-l": [{ "border-l": [s] }],
            "border-opacity": [{ "border-opacity": [M] }],
            "border-style": [{ border: [...K(), "hidden"] }],
            "divide-x": [{ "divide-x": [s] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [s] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [M] }],
            "divide-style": [{ divide: K() }],
            "border-color": [{ border: [o] }],
            "border-color-x": [{ "border-x": [o] }],
            "border-color-y": [{ "border-y": [o] }],
            "border-color-t": [{ "border-t": [o] }],
            "border-color-r": [{ "border-r": [o] }],
            "border-color-b": [{ "border-b": [o] }],
            "border-color-l": [{ "border-l": [o] }],
            "divide-color": [{ divide: [o] }],
            "outline-style": [{ outline: ["", ...K()] }],
            "outline-offset": [{ "outline-offset": [g, _] }],
            "outline-w": [{ outline: [g, b] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: F() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [M] }],
            "ring-offset-w": [{ "ring-offset": [g, b] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", j, R] }],
            "shadow-color": [{ shadow: [E] }],
            opacity: [{ opacity: [M] }],
            "mix-blend": [{ "mix-blend": V() }],
            "bg-blend": [{ "bg-blend": V() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [u] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", j, _] }],
            grayscale: [{ grayscale: [c] }],
            "hue-rotate": [{ "hue-rotate": [d] }],
            invert: [{ invert: [f] }],
            saturate: [{ saturate: [I] }],
            sepia: [{ sepia: [A] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [r] }],
            "backdrop-brightness": [{ "backdrop-brightness": [n] }],
            "backdrop-contrast": [{ "backdrop-contrast": [u] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
            "backdrop-invert": [{ "backdrop-invert": [f] }],
            "backdrop-opacity": [{ "backdrop-opacity": [M] }],
            "backdrop-saturate": [{ "backdrop-saturate": [I] }],
            "backdrop-sepia": [{ "backdrop-sepia": [A] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [l] }],
            "border-spacing-x": [{ "border-spacing-x": [l] }],
            "border-spacing-y": [{ "border-spacing-y": [l] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  _,
                ],
              },
            ],
            duration: [{ duration: Z() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", _] }],
            delay: [{ delay: Z() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", _] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [N] }],
            "scale-x": [{ "scale-x": [N] }],
            "scale-y": [{ "scale-y": [N] }],
            rotate: [{ rotate: [w, _] }],
            "translate-x": [{ "translate-x": [L] }],
            "translate-y": [{ "translate-y": [L] }],
            "skew-x": [{ "skew-x": [T] }],
            "skew-y": [{ "skew-y": [T] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  _,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  _,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": $() }],
            "scroll-mx": [{ "scroll-mx": $() }],
            "scroll-my": [{ "scroll-my": $() }],
            "scroll-ms": [{ "scroll-ms": $() }],
            "scroll-me": [{ "scroll-me": $() }],
            "scroll-mt": [{ "scroll-mt": $() }],
            "scroll-mr": [{ "scroll-mr": $() }],
            "scroll-mb": [{ "scroll-mb": $() }],
            "scroll-ml": [{ "scroll-ml": $() }],
            "scroll-p": [{ "scroll-p": $() }],
            "scroll-px": [{ "scroll-px": $() }],
            "scroll-py": [{ "scroll-py": $() }],
            "scroll-ps": [{ "scroll-ps": $() }],
            "scroll-pe": [{ "scroll-pe": $() }],
            "scroll-pt": [{ "scroll-pt": $() }],
            "scroll-pr": [{ "scroll-pr": $() }],
            "scroll-pb": [{ "scroll-pb": $() }],
            "scroll-pl": [{ "scroll-pl": $() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", _] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [g, b, v] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
  },
]);
