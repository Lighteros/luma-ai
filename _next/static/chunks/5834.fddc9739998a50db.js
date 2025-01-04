"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5834],
  {
    5834: function (e, n, t) {
      t.d(n, {
        loadSizeUpdater: function () {
          return a;
        },
      });
      async function a(e) {
        let n =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await e.addParticleUpdater(
          "size",
          async () => {
            let { SizeUpdater: e } = await t.e(8473).then(t.bind(t, 8473));
            return new e();
          },
          n
        );
      }
    },
  },
]);
