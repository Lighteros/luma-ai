"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5014],
  {
    5014: function (e, t, n) {
      n.d(t, {
        loadStrokeColorUpdater: function () {
          return a;
        },
      });
      async function a(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await e.addParticleUpdater(
          "strokeColor",
          async (e) => {
            let { StrokeColorUpdater: t } = await n
              .e(5038)
              .then(n.bind(n, 5038));
            return new t(e);
          },
          t
        );
      }
    },
  },
]);
