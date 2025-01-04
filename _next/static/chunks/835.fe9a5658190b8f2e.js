"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [835],
  {
    835: function (n, e, t) {
      t.d(e, {
        loadExternalPauseInteraction: function () {
          return a;
        },
      });
      async function a(n) {
        let e =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await n.addInteractor(
          "externalPause",
          async (n) => {
            let { Pauser: e } = await t.e(530).then(t.bind(t, 4097));
            return new e(n);
          },
          e
        );
      }
    },
  },
]);
