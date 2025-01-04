"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8473],
  {
    8473: function (e, i, n) {
      n.d(i, {
        SizeUpdater: function () {
          return o;
        },
      });
      var s = n(7837);
      class o {
        init(e) {
          let i = e.container,
            n = e.options.size.animation;
          if (n.enable) {
            var o;
            (e.size.velocity =
              ((null !== (o = e.retina.sizeAnimationSpeed) && void 0 !== o
                ? o
                : i.retina.sizeAnimationSpeed) /
                s.tZ) *
              i.retina.reduceFactor),
              n.sync || (e.size.velocity *= (0, s.sZ)());
          }
        }
        isEnabled(e) {
          var i, n, s, o;
          return (
            !e.destroyed &&
            !e.spawning &&
            e.size.enable &&
            ((null !== (i = e.size.maxLoops) && void 0 !== i ? i : 0) <= 0 ||
              ((null !== (n = e.size.maxLoops) && void 0 !== n ? n : 0) > 0 &&
                (null !== (s = e.size.loops) && void 0 !== s ? s : 0) <
                  (null !== (o = e.size.maxLoops) && void 0 !== o ? o : 0)))
          );
        }
        reset(e) {
          e.size.loops = 0;
        }
        update(e, i) {
          this.isEnabled(e) &&
            (0, s.Cr)(e, e.size, !0, e.options.size.animation.destroy, i);
        }
      }
    },
  },
]);
