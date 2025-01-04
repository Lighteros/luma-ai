"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9704],
  {
    9906: function (t, e, n) {
      n.d(e, {
        y: function () {
          return o;
        },
      });
      var r = n(7837);
      let a = { x: 0, y: 0 };
      class o {
        draw(t) {
          let { particle: e, radius: n } = t;
          !(function (t, e, n) {
            let { context: o } = t,
              u = n.count.numerator * n.count.denominator,
              i = n.count.numerator / n.count.denominator,
              s = Math.PI - (0, r.Id)((180 * (i - 2)) / i);
            if (o) {
              o.beginPath(), o.translate(e.x, e.y), o.moveTo(a.x, a.y);
              for (let t = 0; t < u; t++)
                o.lineTo(n.length, a.y),
                  o.translate(n.length, a.y),
                  o.rotate(s);
            }
          })(t, this.getCenter(e, n), this.getSidesData(e, n));
        }
        getSidesCount(t) {
          var e;
          let n = t.shapeData;
          return Math.round(
            (0, r.Gu)(
              null !== (e = null == n ? void 0 : n.sides) && void 0 !== e
                ? e
                : 5
            )
          );
        }
      }
    },
    9704: function (t, e, n) {
      n.d(e, {
        TriangleDrawer: function () {
          return a;
        },
      });
      var r = n(9906);
      class a extends r.y {
        getCenter(t, e) {
          return { x: -e, y: e / 1.66 };
        }
        getSidesCount() {
          return 3;
        }
        getSidesData(t, e) {
          return { count: { denominator: 2, numerator: 3 }, length: 2 * e };
        }
      }
    },
  },
]);
