"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7666],
  {
    7666: function (e, t, n) {
      n.d(t, {
        loadOutModesUpdater: function () {
          return a;
        },
      });
      async function a(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await e.addParticleUpdater(
          "outModes",
          async (e) => {
            let { OutOfCanvasUpdater: t } = await n
              .e(3234)
              .then(n.bind(n, 3234));
            return new t(e);
          },
          t
        );
      }
    },
  },
]);
