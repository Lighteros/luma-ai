"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2552],
  {
    2552: function (e, n, t) {
      t.d(n, {
        loadLifeUpdater: function () {
          return a;
        },
      });
      async function a(e) {
        let n =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await e.addParticleUpdater(
          "life",
          async (e) => {
            let { LifeUpdater: n } = await t.e(8221).then(t.bind(t, 8221));
            return new n(e);
          },
          n
        );
      }
    },
  },
]);
