"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9478],
  {
    9478: function (t, o, i) {
      i.d(o, {
        OpacityUpdater: function () {
          return c;
        },
      });
      var a = i(7837);
      class c {
        init(t) {
          let o = t.options.opacity;
          t.opacity = (0, a.V0)(o, 1);
          let i = o.animation;
          i.enable &&
            ((t.opacity.velocity =
              ((0, a.Gu)(i.speed) / a.tZ) * this.container.retina.reduceFactor),
            i.sync || (t.opacity.velocity *= (0, a.sZ)()));
        }
        isEnabled(t) {
          var o, i, a, c;
          return (
            !t.destroyed &&
            !t.spawning &&
            !!t.opacity &&
            t.opacity.enable &&
            ((null !== (o = t.opacity.maxLoops) && void 0 !== o ? o : 0) <= 0 ||
              ((null !== (i = t.opacity.maxLoops) && void 0 !== i ? i : 0) >
                0 &&
                (null !== (a = t.opacity.loops) && void 0 !== a ? a : 0) <
                  (null !== (c = t.opacity.maxLoops) && void 0 !== c ? c : 0)))
          );
        }
        reset(t) {
          t.opacity && ((t.opacity.time = 0), (t.opacity.loops = 0));
        }
        update(t, o) {
          this.isEnabled(t) &&
            t.opacity &&
            (0, a.Cr)(t, t.opacity, !0, t.options.opacity.animation.destroy, o);
        }
        constructor(t) {
          this.container = t;
        }
      }
    },
  },
]);
