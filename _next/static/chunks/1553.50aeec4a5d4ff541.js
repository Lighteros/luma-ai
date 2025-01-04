"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1553],
  {
    1553: function (t, e, a) {
      a.d(e, {
        StarDrawer: function () {
          return r;
        },
      });
      var n = a(7837);
      let l = { x: 0, y: 0 };
      class r {
        draw(t) {
          !(function (t) {
            var e;
            let { context: a, particle: n, radius: r } = t,
              s = n.sides,
              u = null !== (e = n.starInset) && void 0 !== e ? e : 2;
            a.moveTo(l.x, l.y - r);
            for (let t = 0; t < s; t++)
              a.rotate(Math.PI / s),
                a.lineTo(l.x, l.y - r * u),
                a.rotate(Math.PI / s),
                a.lineTo(l.x, l.y - r);
          })(t);
        }
        getSidesCount(t) {
          var e;
          let a = t.shapeData;
          return Math.round(
            (0, n.Gu)(
              null !== (e = null == a ? void 0 : a.sides) && void 0 !== e
                ? e
                : 5
            )
          );
        }
        particleInit(t, e) {
          var a;
          let l = e.shapeData;
          e.starInset = (0, n.Gu)(
            null !== (a = null == l ? void 0 : l.inset) && void 0 !== a ? a : 2
          );
        }
      }
    },
  },
]);
