"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5978],
  {
    5978: function (t, i, e) {
      e.d(i, {
        Attractor: function () {
          return r;
        },
      });
      var a = e(7837);
      function n(t, i, e, n, c) {
        let o = t.actualOptions.interactivity.modes.attract;
        if (o)
          for (let r of t.particles.quadTree.query(n, c)) {
            let { dx: t, dy: n, distance: c } = (0, a.oW)(r.position, i),
              s = o.speed * o.factor,
              l = (0, a.uZ)((0, a._X)(o.easing)(1 - c / e) * s, 1, o.maxSpeed),
              d = a.OW.create(c ? (t / c) * l : s, c ? (n / c) * l : s);
            r.position.subFrom(d);
          }
      }
      class c {
        load(t) {
          t &&
            (void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.duration && (this.duration = t.duration),
            void 0 !== t.easing && (this.easing = t.easing),
            void 0 !== t.factor && (this.factor = t.factor),
            void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed),
            void 0 !== t.speed && (this.speed = t.speed));
        }
        constructor() {
          (this.distance = 200),
            (this.duration = 0.4),
            (this.easing = "ease-out-quad"),
            (this.factor = 1),
            (this.maxSpeed = 50),
            (this.speed = 1);
        }
      }
      let o = "attract";
      class r extends a.L8 {
        clear() {}
        init() {
          let t = this.container,
            i = t.actualOptions.interactivity.modes.attract;
          i &&
            (t.retina.attractModeDistance = i.distance * t.retina.pixelRatio);
        }
        interact() {
          let t = this.container,
            i = t.actualOptions,
            e = t.interactivity.status === a.Wt,
            c = i.interactivity.events,
            { enable: r, mode: s } = c.onHover,
            { enable: l, mode: d } = c.onClick;
          e && r && (0, a.dB)(o, s)
            ? (function (t, i) {
                let e = t.interactivity.mouse.position,
                  c = t.retina.attractModeDistance;
                c &&
                  !(c < 0) &&
                  e &&
                  n(t, e, c, new a.Cd(e.x, e.y, c), (t) => i(t));
              })(this.container, (t) => this.isEnabled(t))
            : l &&
              (0, a.dB)(o, d) &&
              (function (t, i) {
                t.attract || (t.attract = { particles: [] });
                let { attract: e } = t;
                if (
                  (e.finish ||
                    (e.count || (e.count = 0),
                    e.count++,
                    e.count !== t.particles.count || (e.finish = !0)),
                  e.clicking)
                ) {
                  let e = t.interactivity.mouse.clickPosition,
                    c = t.retina.attractModeDistance;
                  if (!c || c < 0 || !e) return;
                  n(t, e, c, new a.Cd(e.x, e.y, c), (t) => i(t));
                } else !1 === e.clicking && (e.particles = []);
              })(this.container, (t) => this.isEnabled(t));
        }
        isEnabled(t) {
          var i;
          let e = this.container,
            n = e.actualOptions,
            c = e.interactivity.mouse,
            r = (
              null !== (i = null == t ? void 0 : t.interactivity) &&
              void 0 !== i
                ? i
                : n.interactivity
            ).events;
          if (
            (!c.position || !r.onHover.enable) &&
            (!c.clickPosition || !r.onClick.enable)
          )
            return !1;
          let s = r.onHover.mode,
            l = r.onClick.mode;
          return (0, a.dB)(o, s) || (0, a.dB)(o, l);
        }
        loadModeOptions(t) {
          for (
            var i = arguments.length, e = Array(i > 1 ? i - 1 : 0), a = 1;
            a < i;
            a++
          )
            e[a - 1] = arguments[a];
          for (let i of (t.attract || (t.attract = new c()), e))
            t.attract.load(null == i ? void 0 : i.attract);
        }
        reset() {}
        constructor(t, i) {
          super(i),
            (this._engine = t),
            i.attract || (i.attract = { particles: [] }),
            (this.handleClickMode = (t) => {
              let e = this.container.actualOptions.interactivity.modes.attract;
              if (e && t === o) {
                for (let t of (i.attract || (i.attract = { particles: [] }),
                (i.attract.clicking = !0),
                (i.attract.count = 0),
                i.attract.particles))
                  this.isEnabled(t) && t.velocity.setTo(t.initialVelocity);
                (i.attract.particles = []),
                  (i.attract.finish = !1),
                  setTimeout(() => {
                    i.destroyed ||
                      (i.attract || (i.attract = { particles: [] }),
                      (i.attract.clicking = !1));
                  }, e.duration * a.X5);
              }
            });
        }
      }
    },
  },
]);
