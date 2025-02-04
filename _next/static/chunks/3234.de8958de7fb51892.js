"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3234],
  {
    3234: function (t, i, o) {
      o.d(i, {
        OutOfCanvasUpdater: function () {
          return c;
        },
      });
      var e = o(7837);
      class s {
        update(t, i, o, s) {
          if (!this.modes.includes(s)) return;
          let n = this.container,
            r = !1;
          for (let [, e] of n.plugins)
            if (
              (void 0 !== e.particleBounce && (r = e.particleBounce(t, o, i)),
              r)
            )
              break;
          if (r) return;
          let a = t.getPosition(),
            d = t.offset,
            c = t.getRadius(),
            l = (0, e.M_)(a, c),
            u = n.canvas.size;
          !(function (t) {
            if (
              ("bounce" !== t.outMode && "split" !== t.outMode) ||
              ("left" !== t.direction && "right" !== t.direction)
            )
              return;
            t.bounds.right < 0 && "left" === t.direction
              ? (t.particle.position.x = t.size + t.offset.x)
              : t.bounds.left > t.canvasSize.width &&
                "right" === t.direction &&
                (t.particle.position.x =
                  t.canvasSize.width - t.size - t.offset.x);
            let i = t.particle.velocity.x,
              o = !1;
            if (
              ("right" === t.direction &&
                t.bounds.right >= t.canvasSize.width &&
                i > 0) ||
              ("left" === t.direction && t.bounds.left <= 0 && i < 0)
            ) {
              let i = (0, e.Gu)(t.particle.options.bounce.horizontal.value);
              (t.particle.velocity.x *= -i), (o = !0);
            }
            if (!o) return;
            let s = t.offset.x + t.size;
            t.bounds.right >= t.canvasSize.width && "right" === t.direction
              ? (t.particle.position.x = t.canvasSize.width - s)
              : t.bounds.left <= 0 &&
                "left" === t.direction &&
                (t.particle.position.x = s),
              "split" === t.outMode && t.particle.destroy();
          })({
            particle: t,
            outMode: s,
            direction: i,
            bounds: l,
            canvasSize: u,
            offset: d,
            size: c,
          }),
            (function (t) {
              if (
                ("bounce" !== t.outMode && "split" !== t.outMode) ||
                ("bottom" !== t.direction && "top" !== t.direction)
              )
                return;
              t.bounds.bottom < 0 && "top" === t.direction
                ? (t.particle.position.y = t.size + t.offset.y)
                : t.bounds.top > t.canvasSize.height &&
                  "bottom" === t.direction &&
                  (t.particle.position.y =
                    t.canvasSize.height - t.size - t.offset.y);
              let i = t.particle.velocity.y,
                o = !1;
              if (
                ("bottom" === t.direction &&
                  t.bounds.bottom >= t.canvasSize.height &&
                  i > 0) ||
                ("top" === t.direction && t.bounds.top <= 0 && i < 0)
              ) {
                let i = (0, e.Gu)(t.particle.options.bounce.vertical.value);
                (t.particle.velocity.y *= -i), (o = !0);
              }
              if (!o) return;
              let s = t.offset.y + t.size;
              t.bounds.bottom >= t.canvasSize.height && "bottom" === t.direction
                ? (t.particle.position.y = t.canvasSize.height - s)
                : t.bounds.top <= 0 &&
                  "top" === t.direction &&
                  (t.particle.position.y = s),
                "split" === t.outMode && t.particle.destroy();
            })({
              particle: t,
              outMode: s,
              direction: i,
              bounds: l,
              canvasSize: u,
              offset: d,
              size: c,
            });
        }
        constructor(t) {
          (this.container = t), (this.modes = ["bounce", "split"]);
        }
      }
      class n {
        update(t, i, o, s) {
          if (!this.modes.includes(s)) return;
          let n = this.container;
          switch (t.outType) {
            case "normal":
            case "outside":
              if (
                (0, e.Ac)(
                  t.position,
                  n.canvas.size,
                  e.OW.origin,
                  t.getRadius(),
                  i
                )
              )
                return;
              break;
            case "inside": {
              let { dx: i, dy: o } = (0, e.oW)(t.position, t.moveCenter),
                { x: s, y: n } = t.velocity;
              if (
                (s < 0 && i > t.moveCenter.radius) ||
                (n < 0 && o > t.moveCenter.radius) ||
                (s >= 0 && i < -t.moveCenter.radius) ||
                (n >= 0 && o < -t.moveCenter.radius)
              )
                return;
            }
          }
          n.particles.remove(t, void 0, !0);
        }
        constructor(t) {
          (this.container = t), (this.modes = ["destroy"]);
        }
      }
      class r {
        update(t, i, o, s) {
          var n;
          if (
            !this.modes.includes(s) ||
            (null !==
              (n =
                t.options.move.distance.horizontal &&
                ("left" === i || "right" === i)) && void 0 !== n
              ? n
              : t.options.move.distance.vertical &&
                ("top" === i || "bottom" === i))
          )
            return;
          let r = t.options.move.gravity,
            a = this.container,
            d = a.canvas.size,
            c = t.getRadius();
          if (r.enable) {
            let o = t.position;
            ((!r.inverse && o.y > d.height + c && "bottom" === i) ||
              (r.inverse && o.y < -c && "top" === i)) &&
              a.particles.remove(t);
          } else {
            if (
              (t.velocity.y > 0 && t.position.y <= d.height + c) ||
              (t.velocity.y < 0 && t.position.y >= -c) ||
              (t.velocity.x > 0 && t.position.x <= d.width + c) ||
              (t.velocity.x < 0 && t.position.x >= -c)
            )
              return;
            (0, e.Ac)(t.position, a.canvas.size, e.OW.origin, c, i) ||
              a.particles.remove(t);
          }
        }
        constructor(t) {
          (this.container = t), (this.modes = ["none"]);
        }
      }
      class a {
        update(t, i, o, s) {
          if (!this.modes.includes(s)) return;
          let n = this.container;
          if ("inside" === t.outType) {
            let { x: i, y: o } = t.velocity,
              s = e.OW.origin;
            (s.length = t.moveCenter.radius),
              (s.angle = t.velocity.angle + Math.PI),
              s.addTo(e.OW.create(t.moveCenter));
            let { dx: r, dy: a } = (0, e.oW)(t.position, s);
            if (
              (i <= 0 && r >= 0) ||
              (o <= 0 && a >= 0) ||
              (i >= 0 && r <= 0) ||
              (o >= 0 && a <= 0)
            )
              return;
            (t.position.x = Math.floor(
              (0, e.vd)({ min: 0, max: n.canvas.size.width })
            )),
              (t.position.y = Math.floor(
                (0, e.vd)({ min: 0, max: n.canvas.size.height })
              ));
            let { dx: d, dy: c } = (0, e.oW)(t.position, t.moveCenter);
            (t.direction = Math.atan2(-c, -d)),
              (t.velocity.angle = t.direction);
          } else {
            if (
              (0, e.Ac)(
                t.position,
                n.canvas.size,
                e.OW.origin,
                t.getRadius(),
                i
              )
            )
              return;
            switch (t.outType) {
              case "outside": {
                (t.position.x =
                  Math.floor(
                    (0, e.vd)({
                      min: -t.moveCenter.radius,
                      max: t.moveCenter.radius,
                    })
                  ) + t.moveCenter.x),
                  (t.position.y =
                    Math.floor(
                      (0, e.vd)({
                        min: -t.moveCenter.radius,
                        max: t.moveCenter.radius,
                      })
                    ) + t.moveCenter.y);
                let { dx: i, dy: o } = (0, e.oW)(t.position, t.moveCenter);
                t.moveCenter.radius &&
                  ((t.direction = Math.atan2(o, i)),
                  (t.velocity.angle = t.direction));
                break;
              }
              case "normal": {
                let o = t.options.move.warp,
                  s = n.canvas.size,
                  r = {
                    bottom: s.height + t.getRadius() + t.offset.y,
                    left: -t.getRadius() - t.offset.x,
                    right: s.width + t.getRadius() + t.offset.x,
                    top: -t.getRadius() - t.offset.y,
                  },
                  a = t.getRadius(),
                  d = (0, e.M_)(t.position, a);
                "right" === i && d.left > s.width + t.offset.x
                  ? ((t.position.x = r.left),
                    (t.initialPosition.x = t.position.x),
                    o ||
                      ((t.position.y = (0, e.sZ)() * s.height),
                      (t.initialPosition.y = t.position.y)))
                  : "left" === i &&
                    d.right < -t.offset.x &&
                    ((t.position.x = r.right),
                    (t.initialPosition.x = t.position.x),
                    o ||
                      ((t.position.y = (0, e.sZ)() * s.height),
                      (t.initialPosition.y = t.position.y))),
                  "bottom" === i && d.top > s.height + t.offset.y
                    ? (o ||
                        ((t.position.x = (0, e.sZ)() * s.width),
                        (t.initialPosition.x = t.position.x)),
                      (t.position.y = r.top),
                      (t.initialPosition.y = t.position.y))
                    : "top" === i &&
                      d.bottom < -t.offset.y &&
                      (o ||
                        ((t.position.x = (0, e.sZ)() * s.width),
                        (t.initialPosition.x = t.position.x)),
                      (t.position.y = r.bottom),
                      (t.initialPosition.y = t.position.y));
              }
            }
          }
        }
        constructor(t) {
          (this.container = t), (this.modes = ["out"]);
        }
      }
      let d = (t, i) =>
        t.default === i ||
        t.bottom === i ||
        t.left === i ||
        t.right === i ||
        t.top === i;
      class c {
        init(t) {
          this.updaters = [];
          let i = t.options.move.outModes;
          d(i, "bounce")
            ? this.updaters.push(new s(this.container))
            : d(i, "out")
            ? this.updaters.push(new a(this.container))
            : d(i, "destroy")
            ? this.updaters.push(new n(this.container))
            : d(i, "none") && this.updaters.push(new r(this.container));
        }
        isEnabled(t) {
          return !t.destroyed && !t.spawning;
        }
        update(t, i) {
          var o, e, s, n;
          let r = t.options.move.outModes;
          this._updateOutMode(
            t,
            i,
            null !== (o = r.bottom) && void 0 !== o ? o : r.default,
            "bottom"
          ),
            this._updateOutMode(
              t,
              i,
              null !== (e = r.left) && void 0 !== e ? e : r.default,
              "left"
            ),
            this._updateOutMode(
              t,
              i,
              null !== (s = r.right) && void 0 !== s ? s : r.default,
              "right"
            ),
            this._updateOutMode(
              t,
              i,
              null !== (n = r.top) && void 0 !== n ? n : r.default,
              "top"
            );
        }
        constructor(t) {
          (this._updateOutMode = (t, i, o, e) => {
            for (let s of this.updaters) s.update(t, e, i, o);
          }),
            (this.container = t),
            (this.updaters = []);
        }
      }
    },
  },
]);
