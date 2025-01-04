"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6154],
  {
    6154: function (e, n, a) {
      a.d(n, {
        loadSquareShape: function () {
          return t;
        },
      });
      async function t(e) {
        let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { SquareDrawer: t } = await a.e(8146).then(a.bind(a, 7712));
        await e.addShape(["edge", "square"], new t(), n);
      }
    },
  },
]);
