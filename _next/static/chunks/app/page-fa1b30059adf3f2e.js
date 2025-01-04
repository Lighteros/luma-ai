(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1931],
  {
    390: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 3519)),
        Promise.resolve().then(a.bind(a, 8493)),
        Promise.resolve().then(a.bind(a, 4293)),
        Promise.resolve().then(a.bind(a, 3037)),
        Promise.resolve().then(a.bind(a, 1400)),
        Promise.resolve().then(a.bind(a, 9142)),
        Promise.resolve().then(a.bind(a, 63)),
        Promise.resolve().then(a.bind(a, 3458));
    },
    1809: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SparklesCore: function () {
            return d;
          },
        });
      var i = a(7437),
        s = a(2265),
        l = a(8774),
        n = a(9041),
        r = a(4098),
        o = a(5142),
        c = a(1657);
      let d = (e) => {
        let {
            id: t,
            className: a,
            background: d,
            minSize: u,
            maxSize: p,
            speed: f,
            particleColor: y,
            particleDensity: x,
          } = e,
          [m, h] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          (0, l.bP)(async (e) => {
            await (0, n.S)(e);
          }).then(() => {
            h(!0);
          });
        }, []);
        let g = (0, r._)(),
          b = async (e) => {
            e &&
              (console.log(e),
              g.start({ opacity: 1, transition: { duration: 1 } }));
          };
        return (0, i.jsx)(o.E.div, {
          animate: g,
          className: (0, c.cn)("opacity-0", a),
          children:
            m &&
            (0, i.jsx)(l.ZP, {
              id: t || "tsparticles",
              className: (0, c.cn)("h-full w-full"),
              particlesLoaded: b,
              options: {
                background: { color: { value: d || "#0d47a1" } },
                fullScreen: { enable: !1, zIndex: 1 },
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: { enable: !0, mode: "push" },
                    onHover: { enable: !1, mode: "repulse" },
                    resize: !0,
                  },
                  modes: {
                    push: { quantity: 4 },
                    repulse: { distance: 200, duration: 0.4 },
                  },
                },
                particles: {
                  bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
                  collisions: {
                    absorb: { speed: 2 },
                    bounce: {
                      horizontal: { value: 1 },
                      vertical: { value: 1 },
                    },
                    enable: !1,
                    maxSpeed: 50,
                    mode: "bounce",
                    overlap: { enable: !0, retries: 0 },
                  },
                  color: {
                    value: y || "#ffffff",
                    animation: {
                      h: {
                        count: 0,
                        enable: !1,
                        speed: 1,
                        decay: 0,
                        delay: 0,
                        sync: !0,
                        offset: 0,
                      },
                      s: {
                        count: 0,
                        enable: !1,
                        speed: 1,
                        decay: 0,
                        delay: 0,
                        sync: !0,
                        offset: 0,
                      },
                      l: {
                        count: 0,
                        enable: !1,
                        speed: 1,
                        decay: 0,
                        delay: 0,
                        sync: !0,
                        offset: 0,
                      },
                    },
                  },
                  effect: { close: !0, fill: !0, options: {}, type: {} },
                  groups: {},
                  move: {
                    angle: { offset: 0, value: 90 },
                    attract: {
                      distance: 200,
                      enable: !1,
                      rotate: { x: 3e3, y: 3e3 },
                    },
                    center: { x: 50, y: 50, mode: "percent", radius: 0 },
                    decay: 0,
                    distance: {},
                    direction: "none",
                    drift: 0,
                    enable: !0,
                    gravity: {
                      acceleration: 9.81,
                      enable: !1,
                      inverse: !1,
                      maxSpeed: 50,
                    },
                    path: {
                      clamp: !0,
                      delay: { value: 0 },
                      enable: !1,
                      options: {},
                    },
                    outModes: { default: "out" },
                    random: !1,
                    size: !1,
                    speed: { min: 0.1, max: 1 },
                    spin: { acceleration: 0, enable: !1 },
                    straight: !1,
                    trail: { enable: !1, length: 10, fill: {} },
                    vibrate: !1,
                    warp: !1,
                  },
                  number: {
                    density: { enable: !0, width: 400, height: 400 },
                    limit: { mode: "delete", value: 0 },
                    value: x || 120,
                  },
                  opacity: {
                    value: { min: 0.1, max: 1 },
                    animation: {
                      count: 0,
                      enable: !0,
                      speed: f || 4,
                      decay: 0,
                      delay: 0,
                      sync: !1,
                      mode: "auto",
                      startValue: "random",
                      destroy: "none",
                    },
                  },
                  reduceDuplicates: !1,
                  shadow: {
                    blur: 0,
                    color: { value: "#000" },
                    enable: !1,
                    offset: { x: 0, y: 0 },
                  },
                  shape: { close: !0, fill: !0, options: {}, type: "circle" },
                  size: {
                    value: { min: u || 1, max: p || 3 },
                    animation: {
                      count: 0,
                      enable: !1,
                      speed: 5,
                      decay: 0,
                      delay: 0,
                      sync: !1,
                      mode: "auto",
                      startValue: "random",
                      destroy: "none",
                    },
                  },
                  stroke: { width: 0 },
                  zIndex: {
                    value: 0,
                    opacityRate: 1,
                    sizeRate: 1,
                    velocityRate: 1,
                  },
                  destroy: {
                    bounds: {},
                    mode: "none",
                    split: {
                      count: 1,
                      factor: { value: 3 },
                      rate: { value: { min: 4, max: 9 } },
                      sizeOffset: !0,
                    },
                  },
                  roll: {
                    darken: { enable: !1, value: 0 },
                    enable: !1,
                    enlighten: { enable: !1, value: 0 },
                    mode: "vertical",
                    speed: 25,
                  },
                  tilt: {
                    value: 0,
                    animation: { enable: !1, speed: 0, decay: 0, sync: !1 },
                    direction: "clockwise",
                    enable: !1,
                  },
                  twinkle: {
                    lines: { enable: !1, frequency: 0.05, opacity: 1 },
                    particles: { enable: !1, frequency: 0.05, opacity: 1 },
                  },
                  wobble: {
                    distance: 5,
                    enable: !1,
                    speed: { angle: 50, move: 10 },
                  },
                  life: {
                    count: 0,
                    delay: { value: 0, sync: !1 },
                    duration: { value: 0, sync: !1 },
                  },
                  rotate: {
                    value: 0,
                    animation: { enable: !1, speed: 0, decay: 0, sync: !1 },
                    direction: "clockwise",
                    path: !1,
                  },
                  orbit: {
                    animation: {
                      count: 0,
                      enable: !1,
                      speed: 1,
                      decay: 0,
                      delay: 0,
                      sync: !1,
                    },
                    enable: !1,
                    opacity: 1,
                    rotation: { value: 45 },
                    width: 1,
                  },
                  links: {
                    blink: !1,
                    color: { value: "#fff" },
                    consent: !1,
                    distance: 100,
                    enable: !1,
                    frequency: 1,
                    opacity: 1,
                    shadow: { blur: 5, color: { value: "#000" }, enable: !1 },
                    triangles: { enable: !1, frequency: 1 },
                    width: 1,
                    warp: !1,
                  },
                  repulse: {
                    value: 0,
                    enabled: !1,
                    distance: 1,
                    duration: 1,
                    factor: 1,
                    speed: 1,
                  },
                },
                detectRetina: !0,
              },
            }),
        });
      };
    },
    1657: function (e, t, a) {
      "use strict";
      a.d(t, {
        cn: function () {
          return l;
        },
      });
      var i = a(3167),
        s = a(1367);
      function l() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, s.m6)((0, i.W)(t));
      }
    },
    3519: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(7437),
        s = a(703);
      a(2265);
      var l = a(5142),
        n = a(8792);
      t.default = () =>
        (0, i.jsxs)("section", {
          id: "about-us",
          className: "flex min-h-[1024px] justify-center relative",
          children: [
            (0, i.jsx)("div", {
              className: "flex container p-8 gap-8 flex-1",
              children: (0, i.jsxs)("div", {
                className: "flex flex-col gap-12",
                children: [
                  (0, i.jsx)(l.E.p, {
                    initial: {
                      opacity: 0,
                      scale: 1.2,
                      y: -30,
                      filter: "blur(5px)",
                    },
                    transition: {
                      delay: 0,
                      duration: 0.25,
                      type: "ease-in-out",
                    },
                    whileInView: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                    },
                    viewport: { once: !0 },
                    className: "ty-h5 text-cyan",
                    children: "About Luma Blockchain",
                  }),
                  " ",
                  (0, i.jsxs)("div", {
                    className: "flex flex-col gap-6 max-w-[680px]",
                    children: [
                      (0, i.jsx)(l.E.p, {
                        initial: {
                          opacity: 0,
                          scale: 1.2,
                          y: -30,
                          filter: "blur(5px)",
                        },
                        transition: {
                          delay: 0.25,
                          duration: 0.25,
                          type: "ease-in-out",
                        },
                        whileInView: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          filter: "blur(0px)",
                        },
                        viewport: { once: !0 },
                        className:
                          "text-3xl font-bold md:font-normal md:ty-h1 text-foreground",
                        children: "Revolutionizing Blockchain Technology",
                      }),
                      (0, i.jsx)(l.E.p, {
                        initial: {
                          opacity: 0,
                          scale: 1.2,
                          y: -30,
                          filter: "blur(5px)",
                        },
                        transition: {
                          delay: 0.5,
                          duration: 0.25,
                          type: "ease-in-out",
                        },
                        whileInView: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          filter: "blur(0px)",
                        },
                        viewport: { once: !0 },
                        className: "text-foreground/50 ty-subheading",
                        children:
                          "Luma Blockchain stands as a transformative force in the realm of decentralized solutions. Our cutting-edge platform is designed to reshape the narrative of trust and efficiency in the blockchain space, boasting a unique blend of Transparent Proof of Authority (PoA) and Practical Byzantine Fault Tolerance (PBFT) to deliver a scalable, trustworthy, and rapid transaction experience.",
                      }),
                      (0, i.jsx)(l.E.div, {
                        initial: {
                          opacity: 0,
                          scale: 1.2,
                          y: -30,
                          filter: "blur(5px)",
                        },
                        transition: {
                          delay: 0.75,
                          duration: 0.25,
                          type: "ease-in-out",
                        },
                        whileInView: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          filter: "blur(0px)",
                        },
                        viewport: { once: !0 },
                        className:
                          "flex p-2 flex-col justify-center items-center gap-2 rounded-[12px] border border-white/[.32] w-fit",
                        children: (0, i.jsx)(n.default, {
                          href: "https://sorojins-organization.gitbook.io/luma-ai",
                          target: "_blank",
                          className:
                            "flex px-8 py-4 z-40 text-black justify-center items-center gap-2 rounded-[8px] bg-foreground",
                          children: (0, i.jsx)("p", {
                            className: "ty-title",
                            children: "Whitepaper",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, i.jsx)("div", {
              className:
                "max-h-[1000px] max-w-[1000px] isolate -z-10  mx-auto bg-cyan absolute inset-0 blur-[256px] opacity-5",
              "aria-hidden": !0,
            }),
            (0, i.jsx)(s.default, {
              src: "/assets/about-section/vector-globe.png",
              width: 780,
              height: 780,
              alt: "Globe",
              className: "absolute top-1/2 right-0 -translate-y-1/2 -z-10",
            }),
          ],
        });
    },
    8493: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(7437),
        s = a(703),
        l = a(8792);
      a(2265);
      var n = a(5142);
      t.default = () =>
        (0, i.jsx)(n.E.section, {
          initial: { opacity: 0, y: -30, filter: "blur(5px)" },
          transition: { delay: 0, duration: 0.5, type: "ease-in-out" },
          whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
          viewport: { once: !0 },
          id: "connect",
          className: "flex py-16 px-4",
          children: (0, i.jsxs)("div", {
            className:
              "flex container p-8 md:p-16 flex-col  gap-8 flex-1 relative rounded-[32px] overflow-hidden",
            children: [
              (0, i.jsx)(s.default, {
                src: "/assets/connect-section/connect-bg.png",
                fill: !0,
                alt: "Connect",
                sizes: "100vw",
                className: "-z-10 object-cover",
              }),
              (0, i.jsx)("p", {
                className: "ty-h4 text-foreground",
                children: "Join Luma AI Community",
              }),
              (0, i.jsx)("div", {
                className: "flex flex-wrap items-start gap-4",
                children: [
                  {
                    icon: "/assets/connect-section/telegram.svg",
                    href: "https://t.me/LumaAI_Erc20",
                    name: "Telegram",
                  },
                  {
                    icon: "/assets/footer/twitter.svg",
                    href: "https://twitter.com/LumaAI_Erc20",
                    name: "Twitter / X",
                  },
                ].map((e, t) =>
                  (0, i.jsxs)(
                    l.default,
                    {
                      href: e.href,
                      className:
                        "flex px-6 py-3 items-center gap-3 rounded-[64px] border border-foreground/[.08] bg-foreground/[.04]",
                      children: [
                        (0, i.jsx)(s.default, {
                          src: e.icon,
                          width: 16,
                          height: 16,
                          className: "h-auto",
                          alt: e.name,
                        }),
                        (0, i.jsx)("p", {
                          className: "ty-title text-foreground",
                          children: e.name,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        });
    },
    4293: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(7437),
        s = a(703);
      a(2265);
      var l = a(5142);
      t.default = () =>
        (0, i.jsxs)("section", {
          id: "features",
          className: "flex py-16 justify-center relative",
          children: [
            (0, i.jsx)(s.default, {
              src: "/assets/features-section/torus.svg",
              width: 692,
              height: 857,
              alt: "Torus",
              className: "absolute right-0 top-1/2 -translate-y-1/2 -z-10",
            }),
            (0, i.jsxs)("div", {
              className:
                "flex container p-8 flex-col  justify-center gap-16 flex-1",
              children: [
                (0, i.jsxs)("div", {
                  className: "flex flex-col justify-center gap-4 max-w-[780px]",
                  children: [
                    (0, i.jsx)(l.E.p, {
                      initial: {
                        opacity: 0,
                        scale: 1.2,
                        y: -30,
                        filter: "blur(5px)",
                      },
                      transition: {
                        delay: 0,
                        duration: 0.25,
                        type: "ease-in-out",
                      },
                      whileInView: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        filter: "blur(0px)",
                      },
                      viewport: { once: !0 },
                      className: "text-cyan ty-h5",
                      children: "Unique Selling Points (USPs)",
                    }),
                    (0, i.jsx)(l.E.p, {
                      initial: {
                        opacity: 0,
                        scale: 1.2,
                        y: -30,
                        filter: "blur(5px)",
                      },
                      transition: {
                        delay: 0.25,
                        duration: 0.25,
                        type: "ease-in-out",
                      },
                      whileInView: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        filter: "blur(0px)",
                      },
                      viewport: { once: !0 },
                      className: "text-foreground text-3xl md:ty-h1",
                      children:
                        "A strategic response to critical industry challenges",
                    }),
                    (0, i.jsx)(l.E.p, {
                      initial: {
                        opacity: 0,
                        scale: 1.2,
                        y: -30,
                        filter: "blur(5px)",
                      },
                      transition: {
                        delay: 0.35,
                        duration: 0.25,
                        type: "ease-in-out",
                      },
                      whileInView: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        filter: "blur(0px)",
                      },
                      viewport: { once: !0 },
                      className: "text-foreground/50 ty-subheading",
                      children:
                        "By addressing scalability concerns, fortifying trust, ensuring rapid transactional speed, and proactively combating fraud, Luma sets the stage for a new era in blockchain technology—a future where speed, trust, and decentralization harmoniously coexist.",
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "flex flex-col justify-center gap-8",
                  children: [
                    {
                      title: "Synergy of Trust and Speed",
                      description:
                        "Luma strikes a balance between trust, speed, and decentralization.",
                      delay: 0.45,
                    },
                    {
                      title:
                        "Fault Tolerance with Transparent Proof of Authority (PoA) and PBFT",
                      description:
                        "Ensures transparency, security, and robustness, setting a new standard for trust in digital transactions.",
                      delay: 0.55,
                    },
                    {
                      title: "Exceptional Transactional Speed",
                      description:
                        "Boasts a remarkable Transactions Per Second (TPS) capacity of 20,000, emphasizing rapid and efficient transactions.",
                      delay: 0.65,
                    },
                    {
                      title: "AI Integration for Security and Efficiency",
                      description:
                        "Pioneers the integration of AI for enhanced security measures and optimized smart contract generation.",
                      delay: 0.75,
                    },
                  ].map((e, t) =>
                    (0, i.jsxs)(
                      l.E.div,
                      {
                        initial: {
                          opacity: 0,
                          scale: 1.2,
                          y: -30,
                          filter: "blur(5px)",
                        },
                        transition: {
                          delay: e.delay,
                          duration: 0.25,
                          type: "ease-in-out",
                        },
                        whileInView: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          filter: "blur(0px)",
                        },
                        viewport: { once: !0 },
                        className: "flex flex-col md:flex-row p-8 gap-8",
                        children: [
                          (0, i.jsxs)("p", {
                            className:
                              "flex justify-center gap-2 w-24 ty-h1 text-cyan/[.32]",
                            children: ["0", t + 1],
                          }),
                          (0, i.jsxs)("div", {
                            className: "flex flex-col gap-4 max-w-[440px]",
                            children: [
                              (0, i.jsx)("p", {
                                className: "text-foreground ty-h5",
                                children: e.title,
                              }),
                              (0, i.jsx)("p", {
                                className: "text-foreground/50 ty-subheading ",
                                children: e.description,
                              }),
                            ],
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          ],
        });
    },
    3037: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(7437),
        s = a(1809),
        l = a(703);
      a(2265);
      var n = a(5142),
        r = a(2003),
        o = a.n(r),
        c = a(7336),
        d = a.n(c),
        u = a(1657);
      t.default = () => {
        let e = [
          { title: "Total Supply", value: "1B", delay: 0.65 },
          { title: "Tax", value: "0% Buy/Sell", delay: 0.7 },
          { title: "Liquidity Pool", value: "LP Burnt", delay: 0.75 },
        ];
        return (0, i.jsxs)("section", {
          className: "flex min-h-[1024px] justify-center relative ",
          children: [
            (0, i.jsx)(s.SparklesCore, {
              id: "tsparticlesfullpage",
              background: "transparent",
              minSize: 0.6,
              maxSize: 1.4,
              particleDensity: 10,
              className: "w-full h-full absolute inset-0 ",
              particleColor: "#FFFFFF",
            }),
            (0, i.jsx)(n.E.div, { className: "" }),
            (0, i.jsx)(l.default, {
              src: "/assets/hero-section/hero.png",
              width: 0,
              height: 0,
              sizes: "100vw",
              alt: "Hero",
              priority: !0,
              className:
                "w-full h-full object-cover mix-blend-lighten absolute inset-0 top-0 left-0 -z-10 shrink-0 ",
            }),
            (0, i.jsx)("div", {
              className:
                "flex container p-8 flex-col justify-center items-center gap-16 flex-1",
              children: (0, i.jsxs)("div", {
                className: "flex flex-col justify-center items-center gap-8",
                children: [
                  (0, i.jsx)(n.E.div, {
                    initial: {
                      opacity: 0,
                      scale: 1.2,
                      y: 30,
                      filter: "blur(5px)",
                    },
                    transition: {
                      delay: 0,
                      duration: 0.2,
                      type: "ease-in-out",
                    },
                    whileInView: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                    },
                    viewport: { once: !0 },
                    className:
                      "flex px-6 py-3 pb-2 justify-center items-center gap-2 rounded-full border border-cyan/50 bg-cyan/[.08]",
                    children: (0, i.jsx)("p", {
                      className: "text-cyan ty-subheading text-center",
                      children: "Welcome to Luma Blockchain",
                    }),
                  }),
                  (0, i.jsxs)(n.E.p, {
                    initial: {
                      opacity: 0,
                      scale: 1.2,
                      y: 30,
                      filter: "blur(5px)",
                    },
                    transition: {
                      delay: 0.2,
                      duration: 0.2,
                      type: "ease-in-out",
                    },
                    whileInView: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                    },
                    viewport: { once: !0 },
                    className:
                      "text-foreground text-4xl font-bold md:ty-display text-center",
                    children: [
                      "The New Era of ",
                      (0, i.jsx)("span", {
                        className: "decentralized",
                        children: "Decentralized",
                      }),
                      " ",
                      "Solutions",
                    ],
                  }),
                  (0, i.jsx)(n.E.p, {
                    initial: {
                      opacity: 0,
                      scale: 1.2,
                      y: 30,
                      filter: "blur(5px)",
                    },
                    transition: {
                      delay: 0.4,
                      duration: 0.2,
                      type: "ease-in-out",
                    },
                    whileInView: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                    },
                    viewport: { once: !0 },
                    className:
                      "text-foreground/[.72] text-center ty-subheading max-w-[730px]",
                    children:
                      "Experience unparalleled trust, speed, and security with our Ethereum Virtual Machine (EVM) compatible Layer-1 blockchain.",
                  }),
                  (0, i.jsx)(n.E.div, {
                    initial: {
                      opacity: 0,
                      scale: 1.2,
                      y: 30,
                      filter: "blur(5px)",
                    },
                    transition: {
                      delay: 0.6,
                      duration: 0.2,
                      type: "ease-in-out",
                    },
                    whileInView: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                    },
                    viewport: { once: !0 },
                    className:
                      "flex p-1 flex-col justify-center items-center gap-2 rounded-[12px] border border-cyan/[.32]",
                    children: (0, i.jsx)("a", {
                      target: "_blank",
                      href: "https://t.me/LumaAI_Erc20",
                      className:
                        "flex px-8 py-4 justify-center items-center gap-2 rounded-[8px] bg-[#00bfd4] text-black hover:opacity-75 duration-200",
                      children: (0, i.jsx)("p", {
                        className: "ty-title",
                        children: "Join Community",
                      }),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "flex flex-col md:flex-row max-w-[670px] mx-auto p-8 justify-center items-center gap-8",
                    children: e.map((t, a) =>
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsxs)(
                            n.E.div,
                            {
                              initial: {
                                opacity: 0,
                                scale: 1.2,
                                y: 30,
                                filter: "blur(5px)",
                              },
                              transition: {
                                delay: t.delay,
                                duration: 0.2,
                                type: "ease-in-out",
                              },
                              whileInView: {
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                filter: "blur(0px)",
                              },
                              viewport: { once: !0 },
                              className: "flex flex-col gap-2 items-center",
                              children: [
                                (0, i.jsx)("p", {
                                  className: (0, u.cn)(
                                    o().className,
                                    "ty-h3 text-cyan"
                                  ),
                                  children: t.value,
                                }),
                                (0, i.jsx)("p", {
                                  className: (0, u.cn)(
                                    d().className,
                                    "ty-title text-foreground/[.72] "
                                  ),
                                  children: t.title,
                                }),
                              ],
                            },
                            a
                          ),
                          a !== e.length - 1
                            ? (0, i.jsx)("div", {
                                className:
                                  "hidden md:block w-[1px] h-[65px] bg-cyan/[.16]",
                              })
                            : null,
                        ],
                      })
                    ),
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    1400: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return E;
          },
        });
      var i = a(7437),
        s = a(1657),
        l = a(2003),
        n = a.n(l),
        r = a(2265),
        o = a(8062),
        c = a(3879),
        d = a(8025),
        u = a(9143);
      let p = (0, a(7742).j)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                clear: "",
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        f = r.forwardRef((e, t) => {
          let { className: a, variant: l, size: n, asChild: r = !1, ...o } = e,
            c = r ? u.g7 : "button";
          return (0, i.jsx)(c, {
            className: (0, s.cn)(p({ variant: l, size: n, className: a })),
            ref: t,
            ...o,
          });
        });
      f.displayName = "Button";
      let y = r.createContext(null);
      function x() {
        let e = r.useContext(y);
        if (!e) throw Error("useCarousel must be used within a <Carousel />");
        return e;
      }
      let m = r.forwardRef((e, t) => {
        let {
            orientation: a = "horizontal",
            opts: l,
            setApi: n,
            plugins: c,
            className: d,
            children: u,
            ...p
          } = e,
          [f, x] = (0, o.Z)({ ...l, axis: "horizontal" === a ? "x" : "y" }, c),
          [m, h] = r.useState(!1),
          [g, b] = r.useState(!1),
          v = r.useCallback((e) => {
            e && (h(e.canScrollPrev()), b(e.canScrollNext()));
          }, []),
          w = r.useCallback(() => {
            null == x || x.scrollPrev();
          }, [x]),
          j = r.useCallback(() => {
            null == x || x.scrollNext();
          }, [x]),
          N = r.useCallback(
            (e) => {
              "ArrowLeft" === e.key
                ? (e.preventDefault(), w())
                : "ArrowRight" === e.key && (e.preventDefault(), j());
            },
            [w, j]
          );
        return (
          r.useEffect(() => {
            x && n && n(x);
          }, [x, n]),
          r.useEffect(() => {
            if (x)
              return (
                v(x),
                x.on("reInit", v),
                x.on("select", v),
                () => {
                  null == x || x.off("select", v);
                }
              );
          }, [x, v]),
          (0, i.jsx)(y.Provider, {
            value: {
              carouselRef: f,
              api: x,
              opts: l,
              orientation:
                a ||
                ((null == l ? void 0 : l.axis) === "y"
                  ? "vertical"
                  : "horizontal"),
              scrollPrev: w,
              scrollNext: j,
              canScrollPrev: m,
              canScrollNext: g,
            },
            children: (0, i.jsx)("div", {
              ref: t,
              onKeyDownCapture: N,
              className: (0, s.cn)("relative", d),
              role: "region",
              "aria-roledescription": "carousel",
              ...p,
              children: u,
            }),
          })
        );
      });
      m.displayName = "Carousel";
      let h = r.forwardRef((e, t) => {
        let { className: a, ...l } = e,
          { carouselRef: n, orientation: r } = x();
        return (0, i.jsx)("div", {
          ref: n,
          className: "overflow-hidden",
          children: (0, i.jsx)("div", {
            ref: t,
            className: (0, s.cn)(
              "flex",
              "horizontal" === r ? "-ml-4" : "-mt-4 flex-col",
              a
            ),
            ...l,
          }),
        });
      });
      h.displayName = "CarouselContent";
      let g = r.forwardRef((e, t) => {
        let { className: a, ...l } = e,
          { orientation: n } = x();
        return (0, i.jsx)("div", {
          ref: t,
          role: "group",
          "aria-roledescription": "slide",
          className: (0, s.cn)(
            "min-w-0 shrink-0 grow-0 basis-full",
            "horizontal" === n ? "pl-4" : "pt-4",
            a
          ),
          ...l,
        });
      });
      (g.displayName = "CarouselItem"),
        (r.forwardRef((e, t) => {
          let {
              className: a,
              variant: l = "outline",
              size: n = "icon",
              ...r
            } = e,
            { orientation: o, scrollPrev: d, canScrollPrev: u } = x();
          return (0, i.jsxs)(f, {
            ref: t,
            variant: l,
            size: n,
            className: (0, s.cn)(
              "absolute  h-8 w-8 rounded-full",
              "horizontal" === o
                ? "-left-12 top-1/2 -translate-y-1/2"
                : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
              a
            ),
            disabled: !u,
            onClick: d,
            ...r,
            children: [
              (0, i.jsx)(c.Z, { className: "h-4 w-4" }),
              (0, i.jsx)("span", {
                className: "sr-only",
                children: "Previous slide",
              }),
            ],
          });
        }).displayName = "CarouselPrevious"),
        (r.forwardRef((e, t) => {
          let {
              className: a,
              variant: l = "outline",
              size: n = "icon",
              ...r
            } = e,
            { orientation: o, scrollNext: c, canScrollNext: u } = x();
          return (0, i.jsxs)(f, {
            ref: t,
            variant: l,
            size: n,
            className: (0, s.cn)(
              "absolute h-8 w-8 rounded-full",
              "horizontal" === o
                ? "-right-12 top-1/2 -translate-y-1/2"
                : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
              a
            ),
            disabled: !u,
            onClick: c,
            ...r,
            children: [
              (0, i.jsx)(d.Z, { className: "h-4 w-4" }),
              (0, i.jsx)("span", {
                className: "sr-only",
                children: "Next slide",
              }),
            ],
          });
        }).displayName = "CarouselNext");
      var b = a(703),
        v = a(8792),
        w = a(2959),
        j = a(5142),
        N = a(6540),
        k = a(7908);
      let I = async () => {
        try {
          let [e, t] = await Promise.all([
            k.Z.get(
              "https://insidecryptotoday-cms.onrender.com/api/posts?filters[slug][$contains]=agnus&populate=*"
            ),
            k.Z.get(
              "https://admin.cryptoiscoming.com/api/posts?filters[slug][$contains]=agnus&populate=*"
            ),
          ]);
          return {
            data: [
              ...e.data.data.map((e) => ({ ...e, isCryptoIsComing: !1 })),
              ...t.data.data.map((e) => ({ ...e, isCryptoIsComing: !0 })),
            ],
          };
        } catch (e) {
          throw (console.error("Error fetching blogs:", e), e);
        }
      };
      var E = () => {
        let { data: e } = (0, N.a)({ queryKey: ["blogs"], queryFn: I }),
          t = (e) => {
            switch (e.isCryptoIsComing) {
              case !0:
                return "https://www.cryptoiscoming.com/".concat(
                  e.attributes.slug
                );
              case !1:
                return "https://insidecrypto.today/".concat(e.attributes.slug);
              default:
                return "";
            }
          };
        return (0, i.jsx)("section", {
          id: "news-and-blog",
          className: "flex justify-center py-16",
          children: (0, i.jsxs)(j.E.div, {
            initial: { opacity: 0.5, y: 30, filter: "blur(5px)" },
            transition: { delay: 0, duration: 0.2, type: "ease-in-out" },
            whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
            viewport: { once: !0 },
            className:
              "flex container p-8 flex-col justify-center gap-16 flex-1",
            children: [
              (0, i.jsx)("p", {
                className: (0, s.cn)(n().className, "ty-h5 text-cyan"),
                children: "News & Blog",
              }),
              (0, i.jsx)(m, {
                children: (0, i.jsx)(h, {
                  children:
                    e &&
                    e.data.map((e, a) =>
                      (0, i.jsx)(
                        g,
                        {
                          className:
                            "md:basis-1/2 lg:basis-1/3 ml-4 flex p-8 flex-col gap-8 rounded-[16px] border border-cyan/[.32] max-w-[295px] md:max-w-[350px]",
                          children: (0, i.jsxs)(v.default, {
                            href: t(e),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                              (0, i.jsx)(b.default, {
                                src: e.attributes.image.data.attributes.url,
                                alt: "",
                                width: 400,
                                height: 200,
                                className:
                                  "min-h-[200px] lg:max-w-[415px] w-full object-cover",
                              }),
                              (0, i.jsxs)("div", {
                                className: "flex flex-col gap-8 mt-4",
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                      (0, i.jsx)("p", {
                                        children: (0, w.WU)(
                                          new Date(e.attributes.publishedAt),
                                          "MMMM dd, yyyy"
                                        ),
                                      }),
                                      (0, i.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "15",
                                        height: "16",
                                        viewBox: "0 0 15 16",
                                        fill: "none",
                                        children: [
                                          (0, i.jsx)("path", {
                                            d: "M7.5 14.6668C10.9518 14.6668 13.75 11.6821 13.75 8.00016C13.75 4.31826 10.9518 1.3335 7.5 1.3335C4.04822 1.3335 1.25 4.31826 1.25 8.00016C1.25 11.6821 4.04822 14.6668 7.5 14.6668Z",
                                            stroke: "#FFFBF4",
                                            "stroke-opacity": "0.5",
                                            "stroke-linejoin": "round",
                                          }),
                                          (0, i.jsx)("path", {
                                            d: "M5.625 10L9.20869 6.17742M6.25 6H9.375V9.33333",
                                            stroke: "#FFFBF4",
                                            "stroke-opacity": "0.5",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)("p", {
                                    className: (0, s.cn)(
                                      n().className,
                                      "ty-subheading"
                                    ),
                                    children: e.attributes.title,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        a
                      )
                    ),
                }),
              }),
            ],
          }),
        });
      };
    },
    9142: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(7437),
        s = a(1657),
        l = a(2003),
        n = a.n(l),
        r = a(703);
      a(2265);
      var o = a(5142);
      t.default = () =>
        (0, i.jsx)("section", {
          id: "partnership",
          className: "flex justify-center py-16",
          children: (0, i.jsxs)("div", {
            className:
              "flex items-center container p-8 flex-col justify-center  gap-32",
            children: [
              (0, i.jsxs)("div", {
                className: "flex flex-col justify-normal items-center gap-4",
                children: [
                  (0, i.jsx)(o.E.p, {
                    initial: {
                      opacity: 0,
                      scale: 1.1,
                      y: 30,
                      filter: "blur(5px)",
                    },
                    transition: {
                      delay: 0,
                      duration: 0.2,
                      type: "ease-in-out",
                    },
                    whileInView: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                    },
                    viewport: { once: !0 },
                    className: (0, s.cn)(n().className, "ty-h5 text-cyan"),
                    children: "Partnership",
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto gap-4 ",
                    children: [
                      {
                        image: "/assets/partners-section/image 1.png",
                        partnerName: "Vault",
                        delay: 0.1,
                      },
                      {
                        image: "/assets/partners-section/image 2.png",
                        partnerName: "SOLIDPROOF",
                        delay: 0.2,
                      },
                      {
                        image: "/assets/partners-section/image 3.png",
                        partnerName: "NEOFI",
                        delay: 0.3,
                      },
                      {
                        image: "/assets/partners-section/image 4.png",
                        partnerName: "HEALTHBOT",
                        delay: 0.4,
                      },
                    ].map((e, t) =>
                      (0, i.jsx)(
                        o.E.div,
                        {
                          initial: {
                            opacity: 0,
                            scale: 1.1,
                            y: 30,
                            filter: "blur(5px)",
                          },
                          transition: {
                            delay: e.delay,
                            duration: 0.2,
                            type: "ease-in-out",
                          },
                          whileInView: {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            filter: "blur(0px)",
                          },
                          viewport: { once: !0 },
                          className:
                            "flex px-12 py-6 rounded-[16px] bg-foreground/[.04] gap-6 ba",
                          children: (0, i.jsxs)("div", {
                            className: "flex flex-col items-center gap-6",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "relative",
                                children: [
                                  (0, i.jsx)(r.default, {
                                    src: e.image,
                                    width: 100,
                                    height: 100,
                                    alt: e.partnerName,
                                  }),
                                  (0, i.jsx)(r.default, {
                                    src: e.image,
                                    width: 100,
                                    height: 100,
                                    alt: e.partnerName,
                                    className:
                                      "absolute inset-0 blur-[32px] -z-10",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("p", {
                                className: (0, s.cn)(n().className, "ty-title"),
                                children: e.partnerName,
                              }),
                            ],
                          }),
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
    },
    63: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(7437),
        s = a(703);
      a(2265);
      var l = a(5142),
        n = a(1657),
        r = a(2003),
        o = a.n(r);
      t.default = () =>
        (0, i.jsx)("section", {
          id: "technology",
          className: "flex justify-center",
          children: (0, i.jsx)("div", {
            className:
              "flex container p-8 flex-col justify-start items-center gap-8",
            children: (0, i.jsxs)("div", {
              className: "flex flex-wrap gap-16 justify-start items-start grow",
              children: [
                (0, i.jsxs)(l.E.div, {
                  initial: {
                    opacity: 0,
                    scale: 1.1,
                    y: -30,
                    filter: "blur(5px)",
                  },
                  transition: { delay: 0, duration: 0.2, type: "ease-in-out" },
                  whileInView: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    filter: "blur(0px)",
                  },
                  viewport: { once: !0 },
                  className:
                    "flex flex-col gap-12 max-w-[435px] lg:sticky top-32",
                  children: [
                    (0, i.jsx)("p", {
                      className: "text-cyan ty-h5",
                      children: "Luma Technology",
                    }),
                    (0, i.jsx)("p", {
                      className: "text-foreground text-3xl md:ty-h1",
                      children: "AI Integration for Enhanced Capabilities",
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "flex flex-col gap-6 flex-1",
                  children: [
                    {
                      image: "/assets/technology-section/security-lock.svg",
                      icon: "/assets/technology-section/security-lock-icon.svg",
                      title: "Enhanced Security Measures",
                      description:
                        "AI actively identifies and mitigates fraudulent activities, fostering a secure environment for digital transactions.",
                      delay: 0.1,
                    },
                    {
                      image: "/assets/technology-section/command-line.png",
                      icon: "/assets/technology-section/command-line-icon.svg",
                      title: "Optimized Smart Contract Generation",
                      description:
                        "AI-driven smart contract templates streamline processes, minimizing errors, and maximizing efficiency.",
                      delay: 0.15,
                    },
                    {
                      image: "/assets/technology-section/centralized.png",
                      icon: "/assets/technology-section/centralized-icon.svg",
                      title: "AI-Driven Governance for DAOs",
                      description:
                        "Integration of AI into decentralized governance ensures dynamic decision-making based on data-driven insights.",
                      delay: 0.2,
                    },
                    {
                      image: "/assets/technology-section/ai-security-02.png",
                      icon: "/assets/technology-section/ai-security-02-icon.svg",
                      title: "Real-time Fraud Prevention",
                      description:
                        "AI algorithms provide real-time monitoring and prevention of fraudulent activities, enhancing overall network security.",
                      delay: 0.25,
                    },
                  ].map((e, t) =>
                    (0, i.jsxs)(
                      l.E.div,
                      {
                        initial: {
                          opacity: 0,
                          scale: 1.1,
                          y: -30,
                          filter: "blur(5px)",
                        },
                        transition: {
                          delay: e.delay,
                          duration: 0.2,
                          type: "ease-in-out",
                        },
                        whileInView: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          filter: "blur(0px)",
                        },
                        viewport: { once: !0 },
                        className:
                          "flex  flex-col lg:flex-row gap-8 min-h-[380px] relative items-stretch md:gap-4 rounded-[8px] bg-white/[.04]",
                        children: [
                          (0, i.jsx)(s.default, {
                            src: e.image,
                            width: 300,
                            height: 300,
                            alt: e.title,
                            className: "absolute bottom-0 left-0 m-4",
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "relative flex flex-col max-w-[350px] w-full p-4 gap-8",
                            children: [
                              (0, i.jsx)(s.default, {
                                src: e.icon,
                                width: 32,
                                height: 32,
                                alt: e.title,
                                className: "mb-auto",
                              }),
                              (0, i.jsx)("p", {
                                className: "ty-h5 text-foreground mt-auto ",
                                children: e.title,
                              }),
                            ],
                          }),
                          (0, i.jsx)("p", {
                            className: (0, n.cn)(
                              o().className,
                              "text-foreground/[.72] ty-subheading p-4 flex-1 self-center"
                            ),
                            children: e.description,
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          }),
        });
    },
    3458: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(7437),
        s = a(1657);
      a(2265);
      var l = a(5142);
      t.default = () =>
        (0, i.jsx)("section", {
          id: "usecase",
          className: "flex min-h-[1024px] py-16 justify-center",
          children: (0, i.jsxs)("div", {
            className:
              "flex container p-8 flex-col justify-center items-center gap-8 flex-1",
            children: [
              (0, i.jsxs)("div", {
                className: "flex flex-col justify-center items-center gap-4",
                children: [
                  (0, i.jsx)(l.E.p, {
                    initial: {
                      opacity: 0,
                      scale: 1.2,
                      y: -30,
                      filter: "blur(5px)",
                    },
                    transition: {
                      delay: 0,
                      duration: 0.25,
                      type: "ease-in-out",
                    },
                    whileInView: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                    },
                    viewport: { once: !0 },
                    className: "ty-h5 text-cyan text-center",
                    children: "Key Features",
                  }),
                  (0, i.jsx)(l.E.p, {
                    initial: {
                      opacity: 0,
                      scale: 1.2,
                      y: -30,
                      filter: "blur(5px)",
                    },
                    transition: {
                      delay: 0.25,
                      duration: 0.25,
                      type: "ease-in-out",
                    },
                    whileInView: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                    },
                    viewport: { once: !0 },
                    className: "text-3xl md:ty-h1 text-foreground text-center",
                    children: "Empowering Digital Trust",
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "flex flex-col justify-center items-center gap-8",
                children: (0, i.jsx)("div", {
                  className: "grid grid-cols-9 gap-6",
                  children: [
                    {
                      label: "Blockchain Name",
                      value: "Luma Blockchain",
                      span: 2,
                      delay: 0.25,
                    },
                    {
                      label: "Purpose of POA",
                      value: "Fulfil Trust in Digital Transactions",
                      span: 4,
                      delay: 0.35,
                    },
                    {
                      label: "Other Technology Used",
                      value: "Artificial Intelligence (AI)",
                      span: 3,
                      delay: 0.45,
                    },
                    {
                      label: "Blockchain Type",
                      value: "EVM Compatible Layer-1 Chain",
                      span: 4,
                      delay: 0.55,
                    },
                    {
                      label: "Consensus Mechanism",
                      value:
                        "Transparent Proof of Authority (PoA) + Practical Byzantine Fault Tolerance (PBFT)",
                      span: 5,
                      delay: 0.65,
                    },
                  ].map((e, t) =>
                    (0, i.jsxs)(
                      l.E.div,
                      {
                        initial: {
                          opacity: 0,
                          scale: 1.2,
                          y: -30,
                          filter: "blur(5px)",
                        },
                        transition: {
                          delay: e.delay,
                          duration: 0.25,
                          type: "ease-in-out",
                        },
                        whileInView: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          filter: "blur(0px)",
                        },
                        viewport: { once: !0 },
                        className: (0, s.cn)(
                          "flex flex-col px-8 py-16 gap-4 rounded-[16px] border border-foreground/[.16] max-md:col-span-full ",
                          "col-span-".concat(e.span)
                        ),
                        children: [
                          (0, i.jsx)("p", {
                            className:
                              "text-foreground/[.72] ty-descriptions text-center",
                            children: e.label,
                          }),
                          (0, i.jsx)("p", {
                            className: "text-foreground text-center ty-h5",
                            children: e.value,
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              }),
            ],
          }),
        });
    },
  },
  function (e) {
    e.O(0, [2861, 9754, 8438, 8884, 2971, 8069, 1744], function () {
      return e((e.s = 390));
    }),
      (_N_E = e.O());
  },
]);
