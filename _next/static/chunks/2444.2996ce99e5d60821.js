"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2444],
  {
    2444: function (e, n, a) {
      a.d(n, {
        CircleDrawer: function () {
          return l;
        },
      });
      var i = a(7837);
      let c = 2 * Math.PI;
      class l {
        draw(e) {
          !(function (e) {
            let { context: n, particle: a, radius: i } = e;
            a.circleRange || (a.circleRange = { min: 0, max: c });
            let l = a.circleRange;
            n.arc(0, 0, i, l.min, l.max, !1);
          })(e);
        }
        getSidesCount() {
          return 12;
        }
        particleInit(e, n) {
          var a;
          let c = n.shapeData,
            l =
              null !== (a = null == c ? void 0 : c.angle) && void 0 !== a
                ? a
                : { max: 360, min: 0 };
          n.circleRange = (0, i.Kn)(l)
            ? { min: (0, i.Id)(l.min), max: (0, i.Id)(l.max) }
            : { min: 0, max: (0, i.Id)(l) };
        }
      }
    },
  },
]);
