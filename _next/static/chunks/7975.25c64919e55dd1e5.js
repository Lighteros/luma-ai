"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7975],
  {
    7975: function (n, e, t) {
      t.d(e, {
        loadExternalBounceInteraction: function () {
          return a;
        },
      });
      async function a(n) {
        let e =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await n.addInteractor(
          "externalBounce",
          async (n) => {
            let { Bouncer: e } = await t.e(11).then(t.bind(t, 11));
            return new e(n);
          },
          e
        );
      }
    },
  },
]);
