"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5741],
  {
    5741: function (t, e, n) {
      n.d(e, {
        PolygonDrawer: function () {
          return a;
        },
      });
      var r = n(9906);
      class a extends r.y {
        getCenter(t, e) {
          return { x: -e / (t.sides / 3.5), y: -e / 0.76 };
        }
        getSidesData(t, e) {
          let n = t.sides;
          return {
            count: { denominator: 1, numerator: n },
            length: (2.66 * e) / (n / 3),
          };
        }
      }
    },
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
              s = n.count.numerator / n.count.denominator,
              i = Math.PI - (0, r.Id)((180 * (s - 2)) / s);
            if (o) {
              o.beginPath(), o.translate(e.x, e.y), o.moveTo(a.x, a.y);
              for (let t = 0; t < u; t++)
                o.lineTo(n.length, a.y),
                  o.translate(n.length, a.y),
                  o.rotate(i);
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
  },
]);
