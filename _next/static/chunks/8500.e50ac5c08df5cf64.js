"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8500],
  {
    8500: function (e, n, t) {
      t.d(n, {
        loadColorUpdater: function () {
          return a;
        },
      });
      async function a(e) {
        let n =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await e.addParticleUpdater(
          "color",
          async (e) => {
            let { ColorUpdater: n } = await t.e(3608).then(t.bind(t, 3608));
            return new n(e);
          },
          n
        );
      }
    },
  },
]);
