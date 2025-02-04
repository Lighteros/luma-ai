"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4534],
  {
    4534: function (e, i, o) {
      o.d(i, {
        Collider: function () {
          return d;
        },
      });
      var s = o(7837);
      function t(e, i, o, t, n, a) {
        let d = (0, s.uZ)(
          (e.options.collisions.absorb.speed * n.factor) / 10,
          0,
          t
        );
        (e.size.value += 0.5 * d),
          (o.size.value -= d),
          t <= a && ((o.size.value = 0), o.destroy());
      }
      let n = (e) => {
        void 0 === e.collisionMaxSpeed &&
          (e.collisionMaxSpeed = (0, s.Gu)(e.options.collisions.maxSpeed)),
          e.velocity.length > e.collisionMaxSpeed &&
            (e.velocity.length = e.collisionMaxSpeed);
      };
      function a(e, i) {
        (0, s.kR)((0, s.gy)(e), (0, s.gy)(i)), n(e), n(i);
      }
      class d extends s.$S {
        clear() {}
        init() {}
        interact(e, i) {
          if (e.destroyed || e.spawning) return;
          let o = this.container,
            n = e.getPosition(),
            d = e.getRadius();
          for (let l of o.particles.quadTree.queryCircle(n, 2 * d)) {
            if (
              e === l ||
              !l.options.collisions.enable ||
              e.options.collisions.mode !== l.options.collisions.mode ||
              l.destroyed ||
              l.spawning
            )
              continue;
            let r = l.getPosition(),
              u = l.getRadius();
            !(Math.abs(Math.round(n.z) - Math.round(r.z)) > d + u) &&
              ((0, s.Sp)(n, r) > d + u ||
                (function (e, i, o, s) {
                  switch (e.options.collisions.mode) {
                    case "absorb":
                      !(function (e, i, o, s) {
                        let n = e.getRadius(),
                          a = i.getRadius();
                        void 0 === n && void 0 !== a
                          ? e.destroy()
                          : void 0 !== n && void 0 === a
                          ? i.destroy()
                          : void 0 !== n &&
                            void 0 !== a &&
                            (n >= a
                              ? t(e, n, i, a, o, s)
                              : t(i, a, e, n, o, s));
                      })(e, i, o, s);
                      break;
                    case "bounce":
                      a(e, i);
                      break;
                    case "destroy":
                      e.unbreakable || i.unbreakable || a(e, i),
                        void 0 === e.getRadius() && void 0 !== i.getRadius()
                          ? e.destroy()
                          : void 0 !== e.getRadius() && void 0 === i.getRadius()
                          ? i.destroy()
                          : void 0 !== e.getRadius() &&
                            void 0 !== i.getRadius() &&
                            (e.getRadius() >= i.getRadius() ? i : e).destroy();
                  }
                })(e, l, i, o.retina.pixelRatio));
          }
        }
        isEnabled(e) {
          return e.options.collisions.enable;
        }
        reset() {}
        constructor(e) {
          super(e);
        }
      }
    },
  },
]);
