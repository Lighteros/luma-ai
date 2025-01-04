"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1973],
  {
    1973: function (n, a, e) {
      e.d(a, {
        loadStarShape: function () {
          return t;
        },
      });
      async function t(n) {
        let a =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { StarDrawer: t } = await e.e(1553).then(e.bind(e, 1553));
        await n.addShape("star", new t(), a);
      }
    },
  },
]);
