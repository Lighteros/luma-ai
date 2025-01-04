"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [530],
  {
    4097: function (e, t, n) {
      n.d(t, {
        Pauser: function () {
          return a;
        },
      });
      var s = n(7837);
      class a extends s.L8 {
        clear() {}
        init() {}
        interact() {}
        isEnabled() {
          return !0;
        }
        reset() {}
        constructor(e) {
          super(e),
            (this.handleClickMode = (e) => {
              if ("pause" !== e) return;
              let t = this.container;
              t.animationStatus ? t.pause() : t.play();
            });
        }
      }
    },
  },
]);
