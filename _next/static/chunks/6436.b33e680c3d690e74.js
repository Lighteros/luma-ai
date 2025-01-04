"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6436],
  {
    6436: function (e, t, r) {
      r.d(t, {
        Remover: function () {
          return i;
        },
      });
      var n = r(7837),
        o = r(7789);
      class i extends n.L8 {
        clear() {}
        init() {}
        interact() {}
        isEnabled() {
          return !0;
        }
        loadModeOptions(e) {
          for (
            var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            r[n - 1] = arguments[n];
          for (let t of (e.remove || (e.remove = new o.J()), r))
            e.remove.load(null == t ? void 0 : t.remove);
        }
        reset() {}
        constructor(e) {
          super(e),
            (this.handleClickMode = (e) => {
              let t = this.container,
                r = t.actualOptions;
              if (!r.interactivity.modes.remove || "remove" !== e) return;
              let o = (0, n.Gu)(r.interactivity.modes.remove.quantity);
              t.particles.removeQuantity(o);
            });
        }
      }
    },
  },
]);
