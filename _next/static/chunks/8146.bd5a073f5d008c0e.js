"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8146],
  {
    7712: function (e, t, n) {
      n.d(t, {
        SquareDrawer: function () {
          return u;
        },
      });
      let r = Math.sqrt(2);
      class u {
        draw(e) {
          !(function (e) {
            let { context: t, radius: n } = e,
              u = n / r,
              s = 2 * u;
            t.rect(-u, -u, s, s);
          })(e);
        }
        getSidesCount() {
          return 4;
        }
      }
    },
  },
]);
