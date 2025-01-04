"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [911],
  {
    911: function (t, e, i) {
      i.d(e, {
        Grabber: function () {
          return o;
        },
      });
      var n = i(7837),
        r = i(3203);
      class o extends n.L8 {
        clear() {}
        init() {
          let t = this.container,
            e = t.actualOptions.interactivity.modes.grab;
          e && (t.retina.grabModeDistance = e.distance * t.retina.pixelRatio);
        }
        interact() {
          let t = this.container,
            e = t.actualOptions.interactivity;
          if (
            !e.modes.grab ||
            !e.events.onHover.enable ||
            t.interactivity.status !== n.Wt
          )
            return;
          let i = t.interactivity.mouse.position;
          if (!i) return;
          let r = t.retina.grabModeDistance;
          if (r && !(r < 0))
            for (let l of t.particles.quadTree.queryCircle(i, r, (t) =>
              this.isEnabled(t)
            )) {
              var o, a;
              let s = l.getPosition(),
                c = (0, n.Sp)(s, i);
              if (c > r) continue;
              let u = e.modes.grab.links,
                d = u.opacity,
                v = d - (c * d) / r;
              if (v <= 0) continue;
              let b =
                null !== (a = u.color) && void 0 !== a
                  ? a
                  : null === (o = l.options.links) || void 0 === o
                  ? void 0
                  : o.color;
              if (!t.particles.grabLineColor && b) {
                let i = e.modes.grab.links;
                t.particles.grabLineColor = (0, n.Dt)(b, i.blink, i.consent);
              }
              let p = (0, n.BE)(l, void 0, t.particles.grabLineColor);
              p &&
                (function (t, e, i, r, o) {
                  t.canvas.draw((t) => {
                    var a, l;
                    let s = e.getPosition();
                    (l =
                      null !== (a = e.retina.linksWidth) && void 0 !== a
                        ? a
                        : 0),
                      (0, n.pS)(t, s, o),
                      (t.strokeStyle = (0, n.iz)(i, r)),
                      (t.lineWidth = l),
                      t.stroke();
                  });
                })(t, l, p, v, i);
            }
        }
        isEnabled(t) {
          var e;
          let i = this.container,
            r = i.interactivity.mouse,
            o = (
              null !== (e = null == t ? void 0 : t.interactivity) &&
              void 0 !== e
                ? e
                : i.actualOptions.interactivity
            ).events;
          return (
            o.onHover.enable &&
            !!r.position &&
            (0, n.dB)("grab", o.onHover.mode)
          );
        }
        loadModeOptions(t) {
          for (
            var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1;
            n < e;
            n++
          )
            i[n - 1] = arguments[n];
          for (let e of (t.grab || (t.grab = new r.z()), i))
            t.grab.load(null == e ? void 0 : e.grab);
        }
        reset() {}
        constructor(t) {
          super(t);
        }
      }
    },
  },
]);
