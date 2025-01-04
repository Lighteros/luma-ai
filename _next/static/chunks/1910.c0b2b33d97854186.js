"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1910],
  {
    1910: function (e, n, t) {
      t.d(n, {
        loadBaseMover: function () {
          return a;
        },
      });
      async function a(e) {
        let n =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await e.addMover(
          "base",
          async () => {
            let { BaseMover: e } = await t.e(946).then(t.bind(t, 946));
            return new e();
          },
          n
        );
      }
    },
  },
]);
