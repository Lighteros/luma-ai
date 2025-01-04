"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [11],
  {
    11: function (e, t, i) {
      i.d(t, {
        Bouncer: function () {
          return r;
        },
      });
      var n = i(7837);
      let o = 0.5 * Math.PI;
      function a(e, t, i, a, s) {
        for (let c of e.particles.quadTree.query(a, s))
          a instanceof n.Cd
            ? (0, n.kR)((0, n.gy)(c), {
                position: t,
                radius: i,
                mass: i ** 2 * o,
                velocity: n.OW.origin,
                factor: n.OW.origin,
              })
            : a instanceof n.Ae && (0, n.dp)(c, (0, n.M_)(t, i));
      }
      class s {
        load(e) {
          e && void 0 !== e.distance && (this.distance = e.distance);
        }
        constructor() {
          this.distance = 200;
        }
      }
      let c = "bounce";
      class r extends n.L8 {
        clear() {}
        init() {
          let e = this.container,
            t = e.actualOptions.interactivity.modes.bounce;
          t && (e.retina.bounceModeDistance = t.distance * e.retina.pixelRatio);
        }
        interact() {
          let e = this.container,
            t = e.actualOptions.interactivity.events,
            i = e.interactivity.status === n.Wt,
            o = t.onHover.enable,
            s = t.onHover.mode,
            r = t.onDiv;
          if (i && o && (0, n.dB)(c, s))
            !(function (e, t) {
              let i = e.retina.pixelRatio,
                o = e.interactivity.mouse.position,
                s = e.retina.bounceModeDistance;
              s &&
                !(s < 0) &&
                o &&
                a(e, o, s, new n.Cd(o.x, o.y, s + 10 * i), t);
            })(this.container, (e) => this.isEnabled(e));
          else {
            var l, f;
            (l = this.container),
              (f = (e) => this.isEnabled(e)),
              (0, n.XD)(c, r, (e, t) =>
                (function (e, t, i, o) {
                  let a = document.querySelectorAll(t);
                  a.length &&
                    a.forEach((t) => {
                      let a = e.retina.pixelRatio,
                        s = {
                          x: (t.offsetLeft + 0.5 * t.offsetWidth) * a,
                          y: (t.offsetTop + 0.5 * t.offsetHeight) * a,
                        },
                        c = 0.5 * t.offsetWidth * a,
                        r = 10 * a,
                        l =
                          "circle" === i.type
                            ? new n.Cd(s.x, s.y, c + r)
                            : new n.Ae(
                                t.offsetLeft * a - r,
                                t.offsetTop * a - r,
                                t.offsetWidth * a + 2 * r,
                                t.offsetHeight * a + 2 * r
                              );
                      o(s, c, l);
                    });
                })(l, e, t, (e, t, i) => a(l, e, t, i, f))
              );
          }
        }
        isEnabled(e) {
          var t;
          let i = this.container,
            o = i.actualOptions,
            a = i.interactivity.mouse,
            s = (
              null !== (t = null == e ? void 0 : e.interactivity) &&
              void 0 !== t
                ? t
                : o.interactivity
            ).events,
            r = s.onDiv;
          return (
            (!!a.position &&
              s.onHover.enable &&
              (0, n.dB)(c, s.onHover.mode)) ||
            (0, n.wm)(c, r)
          );
        }
        loadModeOptions(e) {
          for (
            var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            i[n - 1] = arguments[n];
          for (let t of (e.bounce || (e.bounce = new s()), i))
            e.bounce.load(null == t ? void 0 : t.bounce);
        }
        reset() {}
        constructor(e) {
          super(e);
        }
      }
    },
  },
]);
