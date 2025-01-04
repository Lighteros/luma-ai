(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    2829: function (e, t, s) {
      Promise.resolve().then(s.t.bind(s, 2445, 23)),
        Promise.resolve().then(s.bind(s, 150)),
        Promise.resolve().then(s.bind(s, 187)),
        Promise.resolve().then(s.bind(s, 7934)),
        Promise.resolve().then(s.t.bind(s, 1749, 23)),
        Promise.resolve().then(s.t.bind(s, 5250, 23)),
        Promise.resolve().then(s.t.bind(s, 2003, 23)),
        Promise.resolve().then(s.t.bind(s, 7336, 23));
    },
    150: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return k;
          },
        });
      var a = s(7437),
        n = s(703),
        r = s(8792),
        o = s(2265),
        l = s(7729),
        i = s(7742),
        d = s(2235),
        c = s(1657);
      let p = l.fC,
        f = l.xz;
      l.x8;
      let h = l.h_,
        u = o.forwardRef((e, t) => {
          let { className: s, ...n } = e;
          return (0, a.jsx)(l.aV, {
            className: (0, c.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              s
            ),
            ...n,
            ref: t,
          });
        });
      u.displayName = l.aV.displayName;
      let x = (0, i.j)(
          "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          {
            variants: {
              side: {
                top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                bottom:
                  "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                right:
                  "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
              },
            },
            defaultVariants: { side: "right" },
          }
        ),
        m = o.forwardRef((e, t) => {
          let { side: s = "right", className: n, children: r, ...o } = e;
          return (0, a.jsxs)(h, {
            children: [
              (0, a.jsx)(u, {}),
              (0, a.jsxs)(l.VY, {
                ref: t,
                className: (0, c.cn)(x({ side: s }), n),
                ...o,
                children: [
                  r,
                  (0, a.jsxs)(l.x8, {
                    className:
                      "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                    children: [
                      (0, a.jsx)(d.Z, { className: "h-4 w-4" }),
                      (0, a.jsx)("span", {
                        className: "sr-only",
                        children: "Close",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
      m.displayName = l.VY.displayName;
      let g = (e) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          className: (0, c.cn)(
            "flex flex-col space-y-2 text-center sm:text-left",
            t
          ),
          ...s,
        });
      };
      g.displayName = "SheetHeader";
      let j = o.forwardRef((e, t) => {
        let { className: s, ...n } = e;
        return (0, a.jsx)(l.Dx, {
          ref: t,
          className: (0, c.cn)("text-lg font-semibold text-foreground", s),
          ...n,
        });
      });
      (j.displayName = l.Dx.displayName),
        (o.forwardRef((e, t) => {
          let { className: s, ...n } = e;
          return (0, a.jsx)(l.dk, {
            ref: t,
            className: (0, c.cn)("text-sm text-muted-foreground", s),
            ...n,
          });
        }).displayName = l.dk.displayName);
      var y = s(9744),
        b = s(2003),
        N = s.n(b),
        w = s(7907),
        k = () => {
          let e = (0, w.usePathname)(),
            t = (0, w.useRouter)(),
            s = [
              {
                component: (0, a.jsxs)(r.default, {
                  href: "https://forms.gle/TeHkNQRyjJrgqkg36",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center gap-2 opacity-100 ",
                  children: [
                    " ",
                    "Developers",
                    " ",
                    (0, a.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "17",
                      height: "16",
                      viewBox: "0 0 17 16",
                      fill: "none",
                      children: [
                        (0, a.jsx)("path", {
                          d: "M8.54899 14.6667C12.2309 14.6667 15.2157 11.6819 15.2157 8C15.2157 4.3181 12.2309 1.33334 8.54899 1.33334C4.86709 1.33334 1.88232 4.3181 1.88232 8C1.88232 11.6819 4.86709 14.6667 8.54899 14.6667Z",
                          stroke: "#FFFBF4",
                          "stroke-opacity": "1",
                          "stroke-linejoin": "round",
                        }),
                        (0, a.jsx)("path", {
                          d: "M6.54883 10L10.3714 6.17742M7.21549 6H10.5488V9.33333",
                          stroke: "#FFFBF4",
                          "stroke-opacity": "1",
                        }),
                      ],
                    }),
                  ],
                }),
                to: "https://forms.gle/TeHkNQRyjJrgqkg36",
                name: "Developer",
              },
              {
                component: (0, a.jsxs)(r.default, {
                  href: "https://beta.agnscan.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center gap-2 opacity-100 ",
                  children: [
                    "Explorer",
                    " ",
                    (0, a.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "17",
                      height: "16",
                      viewBox: "0 0 17 16",
                      fill: "none",
                      children: [
                        (0, a.jsx)("path", {
                          d: "M8.54899 14.6667C12.2309 14.6667 15.2157 11.6819 15.2157 8C15.2157 4.3181 12.2309 1.33334 8.54899 1.33334C4.86709 1.33334 1.88232 4.3181 1.88232 8C1.88232 11.6819 4.86709 14.6667 8.54899 14.6667Z",
                          stroke: "#FFFBF4",
                          "stroke-opacity": "1",
                          "stroke-linejoin": "round",
                        }),
                        (0, a.jsx)("path", {
                          d: "M6.54883 10L10.3714 6.17742M7.21549 6H10.5488V9.33333",
                          stroke: "#FFFBF4",
                          "stroke-opacity": "1",
                        }),
                      ],
                    }),
                  ],
                }),
                to: "https://beta.agnscan.com",
                name: "Explorer",
              },
              {
                component: (0, a.jsx)(r.default, {
                  href: "/#partnership",
                  className: "flex items-center gap-2 opacity-100 ",
                  children: "Partnership",
                }),
                to: "/#partnership",
                name: "Partnership",
              },
              {
                component: (0, a.jsx)(r.default, {
                  href: "/#news-and-blog",
                  className: "flex items-center gap-2 opacity-100 ",
                  children: "News & Blog",
                }),
                to: "/#news-and-blog",
                name: "News & Blog",
              },
              {
                component: (0, a.jsx)(r.default, {
                  href: "/buy-agn",
                  className: "flex items-center gap-2 opacity-100 ",
                  children: "Buy $AGN",
                }),
                to: "/buy-agn",
                name: "Buy $AGN",
              },
            ];
          return (0, a.jsxs)("header", {
            className: "",
            children: [
              (0, a.jsx)("nav", {
                className: "fixed top-4 left-1/2 -translate-x-1/2 z-[99999]",
                children: (0, a.jsxs)("div", {
                  className:
                    "hidden  px-8 py-4 lg:flex justify-center items-center gap-4 rounded-full border border-foreground/[.08] bg-background/50 backdrop-blur-[32px] z-50 ",
                  children: [
                    (0, a.jsx)(r.default, {
                      href: "/",
                      className: "shrink-0",
                      children: (0, a.jsx)(n.default, {
                        src: "/assets/header/logo.png",
                        width: 37,
                        height: 40,
                        alt: "Agnus AI",
                      }),
                    }),
                    (0, a.jsxs)("ul", {
                      className: "flex items-center gap-4",
                      children: [
                        s.map((e, t) =>
                          (0, a.jsx)(
                            "li",
                            {
                              className:
                                "group flex px-4 py-3 gap-2 ty-descriptions text-foreground/50 hover:text-foreground duration-200  whitespace-nowrap",
                              children: e.component,
                            },
                            t
                          )
                        ),
                        (0, a.jsx)(r.default, {
                          href: "https://beta.agnscan.com/test-faucet",
                          className: (0, c.cn)(
                            N().className,
                            "ty-title rounded-full bg-cyan px-6 py-3 text-black text-nowrap"
                          ),
                          target: "_blank",
                          children: "Claim Testnet Coin",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)(p, {
                children: [
                  (0, a.jsx)(f, {
                    className: "fixed lg:hidden right-0 top-0 m-4 z-50",
                    children: (0, a.jsx)(y.Z, { size: 20 }),
                  }),
                  (0, a.jsxs)(m, {
                    children: [
                      (0, a.jsx)(g, {
                        children: (0, a.jsx)(j, {
                          children: (0, a.jsxs)(r.default, {
                            href: "/",
                            children: [
                              (0, a.jsx)(n.default, {
                                src: "/assets/header/logo.png",
                                width: 37,
                                height: 40,
                                alt: "Agnus AI",
                              }),
                              (0, a.jsx)("p", {
                                className: "text-foreground/90 text-left",
                                children: "Agnus AI",
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, a.jsxs)("ul", {
                        className: "flex flex-col gap-4 my-10",
                        children: [
                          s.map((s, n) =>
                            (0, a.jsx)(
                              "li",
                              {
                                className:
                                  "group flex px-4 py-3 gap-2 ty-descriptions text-foreground hover:text-foreground duration-200",
                                children: (0, a.jsx)(r.default, {
                                  href: s.to,
                                  onClick: () => {
                                    "/" === e ? t.push(s.to) : t.push("/");
                                  },
                                  className:
                                    "flex items-center gap-2 opacity-100 ",
                                  children:
                                    "Developer" === s.name ||
                                    "Explorer" === s.name
                                      ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                            (0, a.jsx)("p", {
                                              className: "",
                                              children: s.name,
                                            }),
                                            (0, a.jsxs)("svg", {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              width: "17",
                                              height: "16",
                                              viewBox: "0 0 17 16",
                                              fill: "none",
                                              children: [
                                                (0, a.jsx)("path", {
                                                  d: "M8.54899 14.6667C12.2309 14.6667 15.2157 11.6819 15.2157 8C15.2157 4.3181 12.2309 1.33334 8.54899 1.33334C4.86709 1.33334 1.88232 4.3181 1.88232 8C1.88232 11.6819 4.86709 14.6667 8.54899 14.6667Z",
                                                  stroke: "#FFFBF4",
                                                  "stroke-opacity": "1",
                                                  "stroke-linejoin": "round",
                                                }),
                                                (0, a.jsx)("path", {
                                                  d: "M6.54883 10L10.3714 6.17742M7.21549 6H10.5488V9.33333",
                                                  stroke: "#FFFBF4",
                                                  "stroke-opacity": "1",
                                                }),
                                              ],
                                            }),
                                          ],
                                        })
                                      : (0, a.jsx)("p", { children: s.name }),
                                }),
                              },
                              n
                            )
                          ),
                          (0, a.jsx)(r.default, {
                            href: "https://beta.agnscan.com/test-faucet",
                            className: (0, c.cn)(
                              N().className,
                              "ty-title rounded-full bg-cyan px-6 py-3 text-black text-nowrap"
                            ),
                            children: "Claim Testnet Coin",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
    187: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          QueryProvider: function () {
            return c;
          },
        });
      var a = s(7437),
        n = s(2265),
        r = s(6068),
        o = s(7082),
        l = s(3617);
      let i = new r.S(),
        d = n.lazy(() =>
          s
            .e(3928)
            .then(s.bind(s, 3928))
            .then((e) => ({ default: e.ReactQueryDevtools }))
        ),
        c = (e) => {
          let { children: t } = e,
            [s, r] = n.useState(!1);
          return (
            n.useEffect(() => {
              window.toggleDevtools = () => r((e) => !e);
            }, []),
            (0, a.jsxs)(o.aH, {
              client: i,
              children: [
                t,
                (0, a.jsx)(l.t, { initialIsOpen: !0 }),
                s &&
                  (0, a.jsx)(n.Suspense, {
                    fallback: null,
                    children: (0, a.jsx)(d, {}),
                  }),
              ],
            })
          );
        };
      t.default = c;
    },
    7934: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          Separator: function () {
            return l;
          },
        });
      var a = s(7437),
        n = s(2265),
        r = s(1014),
        o = s(1657);
      let l = n.forwardRef((e, t) => {
        let {
          className: s,
          orientation: n = "horizontal",
          decorative: l = !0,
          ...i
        } = e;
        return (0, a.jsx)(r.f, {
          ref: t,
          decorative: l,
          orientation: n,
          className: (0, o.cn)(
            "shrink-0 bg-border",
            "horizontal" === n ? "h-[1px] w-full" : "h-full w-[1px]",
            s
          ),
          ...i,
        });
      });
      l.displayName = r.f.displayName;
    },
    1657: function (e, t, s) {
      "use strict";
      s.d(t, {
        cn: function () {
          return r;
        },
      });
      var a = s(3167),
        n = s(1367);
      function r() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, n.m6)((0, a.W)(t));
      }
    },
    2445: function () {},
  },
  function (e) {
    e.O(0, [2861, 8438, 6489, 2971, 8069, 1744], function () {
      return e((e.s = 2829));
    }),
      (_N_E = e.O());
  },
]);
