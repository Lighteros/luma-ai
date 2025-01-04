"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9142],
  {
    5535: function (e, n, a) {
      a.d(n, {
        loadCircleShape: function () {
          return t;
        },
      });
      async function t(e) {
        let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { CircleDrawer: t } = await a.e(2444).then(a.bind(a, 2444));
        await e.addShape("circle", new t(), n);
      }
    },
  },
]);
