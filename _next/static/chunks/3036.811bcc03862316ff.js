"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3036],
  {
    3036: function (t, n, e) {
      e.d(n, {
        loadParticlesAttractInteraction: function () {
          return a;
        },
      });
      async function a(t) {
        let n =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await t.addInteractor(
          "particlesAttract",
          async (t) => {
            let { Attractor: n } = await e.e(7841).then(e.bind(e, 7841));
            return new n(t);
          },
          n
        );
      }
    },
  },
]);
