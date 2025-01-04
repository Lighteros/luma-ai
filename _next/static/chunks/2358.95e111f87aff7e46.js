"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2358],
  {
    2358: function (a, e, u) {
      u.d(e, {
        loadEasingQuadPlugin: function () {
          return s;
        },
      });
      var n = u(7837);
      async function s() {
        (0, n.bx)("ease-in-quad", (a) => a ** 2),
          (0, n.bx)("ease-out-quad", (a) => 1 - (1 - a) ** 2),
          (0, n.bx)("ease-in-out-quad", (a) =>
            a < 0.5 ? 2 * a ** 2 : 1 - (-2 * a + 2) ** 2 / 2
          ),
          await Promise.resolve();
      }
    },
  },
]);
