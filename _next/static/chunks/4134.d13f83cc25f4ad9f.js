"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4134],
  {
    4134: function (t, e, r) {
      r.d(e, {
        Pusher: function () {
          return u;
        },
      });
      var s = r(7837),
        i = r(5045);
      class u extends s.L8 {
        clear() {}
        init() {}
        interact() {}
        isEnabled() {
          return !0;
        }
        loadModeOptions(t) {
          for (
            var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), s = 1;
            s < e;
            s++
          )
            r[s - 1] = arguments[s];
          for (let e of (t.push || (t.push = new i.p()), r))
            t.push.load(null == e ? void 0 : e.push);
        }
        reset() {}
        constructor(t) {
          super(t),
            (this.handleClickMode = (t) => {
              if ("push" !== t) return;
              let e = this.container,
                r = e.actualOptions.interactivity.modes.push;
              if (!r) return;
              let i = (0, s.Gu)(r.quantity);
              if (i <= 0) return;
              let u = (0, s.c8)([void 0, ...r.groups]),
                n = void 0 !== u ? e.actualOptions.particles.groups[u] : void 0;
              e.particles.push(i, e.interactivity.mouse, n, u);
            });
        }
      }
    },
  },
]);
