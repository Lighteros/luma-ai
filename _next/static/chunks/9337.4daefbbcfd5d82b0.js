"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9337],
  {
    6681: function (t, i, e) {
      e.d(i, {
        Connector: function () {
          return s;
        },
      });
      var n = e(7837);
      class o {
        load(t) {
          t && void 0 !== t.opacity && (this.opacity = t.opacity);
        }
        constructor() {
          this.opacity = 0.5;
        }
      }
      class a {
        load(t) {
          t &&
            (void 0 !== t.distance && (this.distance = t.distance),
            this.links.load(t.links),
            void 0 !== t.radius && (this.radius = t.radius));
        }
        constructor() {
          (this.distance = 80), (this.links = new o()), (this.radius = 60);
        }
      }
      class s extends n.L8 {
        clear() {}
        init() {
          let t = this.container,
            i = t.actualOptions.interactivity.modes.connect;
          i &&
            ((t.retina.connectModeDistance = i.distance * t.retina.pixelRatio),
            (t.retina.connectModeRadius = i.radius * t.retina.pixelRatio));
        }
        interact() {
          let t = this.container;
          if (
            t.actualOptions.interactivity.events.onHover.enable &&
            "pointermove" === t.interactivity.status
          ) {
            let i = t.interactivity.mouse.position,
              { connectModeDistance: e, connectModeRadius: o } = t.retina;
            if (!e || e < 0 || !o || o < 0 || !i) return;
            let a = t.particles.quadTree.queryCircle(i, Math.abs(o), (t) =>
              this.isEnabled(t)
            );
            a.forEach((i, o) => {
              let s = i.getPosition();
              for (let r of a.slice(o + 1)) {
                let o = r.getPosition(),
                  a = Math.abs(e),
                  c = Math.abs(s.x - o.x),
                  l = Math.abs(s.y - o.y);
                c < a &&
                  l < a &&
                  (function (t, i, e) {
                    t.canvas.draw((o) => {
                      var a, s;
                      let r = (function (t, i, e, o) {
                        let a = t.actualOptions.interactivity.modes.connect;
                        if (a)
                          return (function (t, i, e, o) {
                            let a = Math.floor(e.getRadius() / i.getRadius()),
                              s = i.getFillColor(),
                              r = e.getFillColor();
                            if (!s || !r) return;
                            let c = i.getPosition(),
                              l = e.getPosition(),
                              d = (0, n.oc)(s, r, i.getRadius(), e.getRadius()),
                              u = t.createLinearGradient(c.x, c.y, l.x, l.y);
                            return (
                              u.addColorStop(0, (0, n.vz)(s, o)),
                              u.addColorStop(
                                (0, n.uZ)(a, 0, 1),
                                (0, n.iz)(d, o)
                              ),
                              u.addColorStop(1, (0, n.vz)(r, o)),
                              u
                            );
                          })(i, e, o, a.links.opacity);
                      })(t, o, i, e);
                      if (!r) return;
                      let c = i.getPosition(),
                        l = e.getPosition();
                      (s =
                        null !== (a = i.retina.linksWidth) && void 0 !== a
                          ? a
                          : 0),
                        (0, n.pS)(o, c, l),
                        (o.lineWidth = s),
                        (o.strokeStyle = r),
                        o.stroke();
                    });
                  })(t, i, r);
              }
            });
          }
        }
        isEnabled(t) {
          var i;
          let e = this.container,
            o = e.interactivity.mouse,
            a = (
              null !== (i = null == t ? void 0 : t.interactivity) &&
              void 0 !== i
                ? i
                : e.actualOptions.interactivity
            ).events;
          return (
            !!a.onHover.enable &&
            !!o.position &&
            (0, n.dB)("connect", a.onHover.mode)
          );
        }
        loadModeOptions(t) {
          for (
            var i = arguments.length, e = Array(i > 1 ? i - 1 : 0), n = 1;
            n < i;
            n++
          )
            e[n - 1] = arguments[n];
          for (let i of (t.connect || (t.connect = new a()), e))
            t.connect.load(null == i ? void 0 : i.connect);
        }
        reset() {}
        constructor(t) {
          super(t);
        }
      }
    },
  },
]);
