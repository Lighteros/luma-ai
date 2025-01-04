"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4449],
  {
    4449: function (t, e, n) {
      n.d(e, {
        loadRotateUpdater: function () {
          return a;
        },
      });
      async function a(t) {
        let e =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await t.addParticleUpdater(
          "rotate",
          async (t) => {
            let { RotateUpdater: e } = await n.e(7501).then(n.bind(n, 7501));
            return new e(t);
          },
          e
        );
      }
    },
  },
]);
