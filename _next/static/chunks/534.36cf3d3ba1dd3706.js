"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [534],
  {
    534: function (a, n, e) {
      e.d(n, {
        loadParallaxMover: function () {
          return t;
        },
      });
      async function t(a) {
        let n =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await a.addMover(
          "parallax",
          async () => {
            let { ParallaxMover: a } = await e.e(5221).then(e.bind(e, 5221));
            return new a();
          },
          n
        );
      }
    },
  },
]);
