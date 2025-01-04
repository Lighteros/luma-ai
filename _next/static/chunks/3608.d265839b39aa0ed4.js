"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3608],
  {
    3608: function (o, n, e) {
      e.d(n, {
        ColorUpdater: function () {
          return l;
        },
      });
      var i = e(7837);
      class l {
        init(o) {
          let n = (0, i.lN)(o.options.color, o.id, o.options.reduceDuplicates);
          n &&
            (o.color = (0, i.bS)(
              n,
              o.options.color.animation,
              this.container.retina.reduceFactor
            ));
        }
        isEnabled(o) {
          let { h: n, s: e, l: i } = o.options.color.animation,
            { color: l } = o;
          return (
            !o.destroyed &&
            !o.spawning &&
            (((null == l ? void 0 : l.h.value) !== void 0 && n.enable) ||
              ((null == l ? void 0 : l.s.value) !== void 0 && e.enable) ||
              ((null == l ? void 0 : l.l.value) !== void 0 && i.enable))
          );
        }
        update(o, n) {
          (0, i.PB)(o.color, n);
        }
        constructor(o) {
          this.container = o;
        }
      }
    },
  },
]);
