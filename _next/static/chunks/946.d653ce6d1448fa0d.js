"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [946],
  {
    946: function (e, i, t) {
      t.d(i, {
        BaseMover: function () {
          return a;
        },
      });
      var n = t(7837);
      class a {
        init(e) {
          let i = e.options.move.gravity;
          (e.gravity = {
            enable: i.enable,
            acceleration: (0, n.Gu)(i.acceleration),
            inverse: i.inverse,
          }),
            (function (e) {
              var i;
              let t = e.container,
                a = e.options.move.spin;
              if (!a.enable) return;
              let o =
                  null !== (i = a.position) && void 0 !== i
                    ? i
                    : { x: 50, y: 50 },
                l = {
                  x: 0.01 * o.x * t.canvas.size.width,
                  y: 0.01 * o.y * t.canvas.size.height,
                },
                s = e.getPosition(),
                c = (0, n.Sp)(s, l),
                r = (0, n.Gu)(a.acceleration);
              (e.retina.spinAcceleration = r * t.retina.pixelRatio),
                (e.spin = {
                  center: l,
                  direction:
                    e.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
                  angle: e.velocity.angle,
                  radius: c,
                  acceleration: e.retina.spinAcceleration,
                });
            })(e);
        }
        isEnabled(e) {
          return !e.destroyed && e.options.move.enable;
        }
        move(e, i) {
          var t, a, o, l, s;
          let c = e.options,
            r = c.move;
          if (!r.enable) return;
          let v = e.container,
            p = v.retina.pixelRatio;
          (null !== (o = (t = e.retina).moveSpeed) && void 0 !== o) ||
            (t.moveSpeed = (0, n.Gu)(r.speed) * p),
            (null !== (l = (a = e.retina).moveDrift) && void 0 !== l) ||
              (a.moveDrift = (0, n.Gu)(e.options.move.drift) * p);
          let y = e.slow.inRange ? e.slow.factor : 1,
            u = e.retina.moveSpeed * v.retina.reduceFactor,
            d = e.retina.moveDrift,
            x = (0, n.KI)(c.size.value) * p,
            m =
              (u * (r.size ? e.getRadius() / x : 1) * y * (i.factor || 1)) / 2,
            h =
              null !== (s = e.retina.maxSpeed) && void 0 !== s
                ? s
                : v.retina.maxSpeed;
          r.spin.enable
            ? (function (e, i) {
                let t = e.container;
                if (!e.spin) return;
                let n = {
                  x: "clockwise" === e.spin.direction ? Math.cos : Math.sin,
                  y: "clockwise" === e.spin.direction ? Math.sin : Math.cos,
                };
                (e.position.x =
                  e.spin.center.x + e.spin.radius * n.x(e.spin.angle)),
                  (e.position.y =
                    e.spin.center.y + e.spin.radius * n.y(e.spin.angle)),
                  (e.spin.radius += e.spin.acceleration);
                let a = Math.max(t.canvas.size.width, t.canvas.size.height),
                  o = 0.5 * a;
                e.spin.radius > o
                  ? ((e.spin.radius = o), (e.spin.acceleration *= -1))
                  : e.spin.radius < 0 &&
                    ((e.spin.radius = 0), (e.spin.acceleration *= -1)),
                  (e.spin.angle += 0.01 * i * (1 - e.spin.radius / a));
              })(e, m)
            : (function (e, i, t, a, o, l) {
                (function (e, i) {
                  var t;
                  let a = e.options.move.path;
                  if (!a.enable) return;
                  if (e.lastPathTime <= e.pathDelay) {
                    e.lastPathTime += i.value;
                    return;
                  }
                  let o =
                    null === (t = e.pathGenerator) || void 0 === t
                      ? void 0
                      : t.generate(e, i);
                  o && e.velocity.addTo(o),
                    a.clamp &&
                      ((e.velocity.x = (0, n.uZ)(e.velocity.x, -1, 1)),
                      (e.velocity.y = (0, n.uZ)(e.velocity.y, -1, 1))),
                    (e.lastPathTime -= e.pathDelay);
                })(e, l);
                let s = e.gravity,
                  c = (null == s ? void 0 : s.enable) && s.inverse ? -1 : 1;
                o && t && (e.velocity.x += (o * l.factor) / (60 * t)),
                  (null == s ? void 0 : s.enable) &&
                    t &&
                    (e.velocity.y +=
                      (s.acceleration * l.factor * c) / (60 * t));
                let r = e.moveDecay;
                e.velocity.multTo(r);
                let v = e.velocity.mult(t);
                (null == s ? void 0 : s.enable) &&
                  a > 0 &&
                  ((!s.inverse && v.y >= 0 && v.y >= a) ||
                    (s.inverse && v.y <= 0 && v.y <= -a)) &&
                  ((v.y = c * a), t && (e.velocity.y = v.y / t));
                let p = e.options.zIndex,
                  y = (1 - e.zIndexFactor) ** p.velocityRate;
                v.multTo(y);
                let { position: u } = e;
                u.addTo(v),
                  i.vibrate &&
                    ((u.x += Math.sin(u.x * Math.cos(u.y))),
                    (u.y += Math.cos(u.y * Math.sin(u.x))));
              })(e, r, m, h, d, i),
            (function (e) {
              var i, t;
              let a = e.initialPosition,
                { dx: o, dy: l } = (0, n.oW)(a, e.position),
                s = Math.abs(o),
                c = Math.abs(l),
                { maxDistance: r } = e.retina,
                v = r.horizontal,
                p = r.vertical;
              if (!v && !p) return;
              let y = null !== (i = v && s >= v) && void 0 !== i && i,
                u = null !== (t = p && c >= p) && void 0 !== t && t;
              if ((y || u) && !e.misplaced)
                (e.misplaced = (!!v && s > v) || (!!p && c > p)),
                  v && (e.velocity.x = 0.5 * e.velocity.y - e.velocity.x),
                  p && (e.velocity.y = 0.5 * e.velocity.x - e.velocity.y);
              else if ((!v || s < v) && (!p || c < p) && e.misplaced)
                e.misplaced = !1;
              else if (e.misplaced) {
                let i = e.position,
                  t = e.velocity;
                v &&
                  ((i.x < a.x && t.x < 0) || (i.x > a.x && t.x > 0)) &&
                  (t.x *= -(0, n.sZ)()),
                  p &&
                    ((i.y < a.y && t.y < 0) || (i.y > a.y && t.y > 0)) &&
                    (t.y *= -(0, n.sZ)());
              }
            })(e);
        }
      }
    },
  },
]);
