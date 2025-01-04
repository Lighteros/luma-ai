"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4990],
  {
    4990: function (n, t, e) {
      e.d(t, {
        loadLinksInteraction: function () {
          return a;
        },
      });
      async function a(n) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await n.addInteractor(
          "particlesLinks",
          async (n) => {
            let { Linker: t } = await e.e(6184).then(e.bind(e, 6471));
            return new t(n);
          },
          t
        );
      }
    },
  },
]);
