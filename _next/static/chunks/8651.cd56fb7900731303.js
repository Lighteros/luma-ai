"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8651],
  {
    9774: function (n, t, e) {
      e.d(t, {
        loadExternalSlowInteraction: function () {
          return a;
        },
      });
      async function a(n) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await n.addInteractor(
          "externalSlow",
          async (n) => {
            let { Slower: t } = await e.e(4562).then(e.bind(e, 4562));
            return new t(n);
          },
          t
        );
      }
    },
  },
]);
