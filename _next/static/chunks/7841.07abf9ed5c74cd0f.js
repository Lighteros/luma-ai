"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7841],
  {
    7841: function (t, e, a) {
      a.d(e, {
        Attractor: function () {
          return o;
        },
      });
      var i = a(7837);
      class o extends i.$S {
        clear() {}
        init() {}
        interact(t) {
          let e = this.container;
          void 0 === t.attractDistance &&
            (t.attractDistance =
              (0, i.Gu)(t.options.move.attract.distance) * e.retina.pixelRatio);
          let a = t.attractDistance,
            o = t.getPosition();
          for (let n of e.particles.quadTree.queryCircle(o, a)) {
            if (
              t === n ||
              !n.options.move.attract.enable ||
              n.destroyed ||
              n.spawning
            )
              continue;
            let e = n.getPosition(),
              { dx: a, dy: c } = (0, i.oW)(o, e),
              r = t.options.move.attract.rotate,
              s = a / (1e3 * r.x),
              l = c / (1e3 * r.y),
              u = n.size.value / t.size.value,
              v = 1 / u;
            (t.velocity.x -= s * u),
              (t.velocity.y -= l * u),
              (n.velocity.x += s * v),
              (n.velocity.y += l * v);
          }
        }
        isEnabled(t) {
          return t.options.move.attract.enable;
        }
        reset() {}
        constructor(t) {
          super(t);
        }
      }
    },
  },
]);
