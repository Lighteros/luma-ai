"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2542],
  {
    2542: function (n, t, e) {
      e.d(t, {
        loadExternalConnectInteraction: function () {
          return a;
        },
      });
      async function a(n) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await n.addInteractor(
          "externalConnect",
          async (n) => {
            let { Connector: t } = await e.e(9337).then(e.bind(e, 6681));
            return new t(n);
          },
          t
        );
      }
    },
  },
]);
