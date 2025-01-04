"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2421],
  {
    2421: function (e, n, t) {
      t.d(n, {
        LineDrawer: function () {
          return u;
        },
      });
      class u {
        draw(e) {
          !(function (e) {
            var n;
            let { context: t, particle: u, radius: a } = e,
              i = u.shapeData;
            t.moveTo(-a, 0),
              t.lineTo(a, 0),
              (t.lineCap =
                null !== (n = null == i ? void 0 : i.cap) && void 0 !== n
                  ? n
                  : "butt");
          })(e);
        }
        getSidesCount() {
          return 1;
        }
      }
    },
  },
]);
