"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3870],
  {
    3870: function (n, a, t) {
      async function e(n) {
        let a =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { PolygonDrawer: e } = await t.e(5741).then(t.bind(t, 5741));
        await n.addShape("polygon", new e(), a);
      }
      async function i(n) {
        let a =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { TriangleDrawer: e } = await t.e(9704).then(t.bind(t, 9704));
        await n.addShape("triangle", new e(), a);
      }
      async function o(n) {
        let a =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await e(n, a), await i(n, a);
      }
      t.d(a, {
        loadPolygonShape: function () {
          return o;
        },
      });
    },
  },
]);
