"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [100],
  {
    100: function (t, n, e) {
      e.d(n, {
        loadExternalAttractInteraction: function () {
          return a;
        },
      });
      async function a(t) {
        let n =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await t.addInteractor(
          "externalAttract",
          async (n) => {
            let { Attractor: a } = await e.e(5978).then(e.bind(e, 5978));
            return new a(t, n);
          },
          n
        );
      }
    },
  },
]);
