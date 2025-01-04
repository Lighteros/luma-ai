"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6084],
  {
    6084: function (n, t, e) {
      e.d(t, {
        loadParticlesCollisionsInteraction: function () {
          return i;
        },
      });
      async function i(n) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await n.addInteractor(
          "particlesCollisions",
          async (n) => {
            let { Collider: t } = await e.e(4534).then(e.bind(e, 4534));
            return new t(n);
          },
          t
        );
      }
    },
  },
]);
