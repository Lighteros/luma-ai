(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3118],
  {
    8279: function (e, a, n) {
      Promise.resolve().then(n.bind(n, 1809)),
        Promise.resolve().then(n.t.bind(n, 1749, 23)),
        Promise.resolve().then(n.t.bind(n, 5250, 23));
    },
    1809: function (e, a, n) {
      "use strict";
      n.r(a),
        n.d(a, {
          SparklesCore: function () {
            return d;
          },
        });
      var t = n(7437),
        l = n(2265),
        o = n(8774),
        i = n(9041),
        s = n(4098),
        c = n(5142),
        r = n(1657);
      let d = (e) => {
        let {
            id: a,
            className: n,
            background: d,
            minSize: u,
            maxSize: p,
            speed: y,
            particleColor: b,
            particleDensity: f,
          } = e,
          [v, m] = (0, l.useState)(!1);
        (0, l.useEffect)(() => {
          (0, o.bP)(async (e) => {
            await (0, i.S)(e);
          }).then(() => {
            m(!0);
          });
        }, []);
        let h = (0, s._)(),
          w = async (e) => {
            e &&
              (console.log(e),
              h.start({ opacity: 1, transition: { duration: 1 } }));
          };
        return (0, t.jsx)(c.E.div, {
          animate: h,
          className: (0, r.cn)("opacity-0", n),
          children:
            v &&
            (0, t.jsx)(o.ZP, {
              id: a || "tsparticles",
              className: (0, r.cn)("h-full w-full"),
              particlesLoaded: w,
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
                    value: b || "#ffffff",
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
                    value: f || 120,
                  },
                  opacity: {
                    value: { min: 0.1, max: 1 },
                    animation: {
                      count: 0,
                      enable: !0,
                      speed: y || 4,
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
    1657: function (e, a, n) {
      "use strict";
      n.d(a, {
        cn: function () {
          return o;
        },
      });
      var t = n(3167),
        l = n(1367);
      function o() {
        for (var e = arguments.length, a = Array(e), n = 0; n < e; n++)
          a[n] = arguments[n];
        return (0, l.m6)((0, t.W)(a));
      }
    },
  },
  function (e) {
    e.O(0, [2861, 9754, 2971, 8069, 1744], function () {
      return e((e.s = 8279));
    }),
      (_N_E = e.O());
  },
]);
