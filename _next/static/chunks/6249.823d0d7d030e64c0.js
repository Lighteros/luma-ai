"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6249],
  {
    6249: function (t, e, n) {
      n.d(e, {
        loadOpacityUpdater: function () {
          return a;
        },
      });
      async function a(t) {
        let e =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await t.addParticleUpdater(
          "opacity",
          async (t) => {
            let { OpacityUpdater: e } = await n.e(9478).then(n.bind(n, 9478));
            return new e(t);
          },
          e
        );
      }
    },
  },
]);
