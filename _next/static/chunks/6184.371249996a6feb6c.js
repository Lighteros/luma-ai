"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6184],
  {
    6471: function (i, t, n) {
      n.d(t, {
        Linker: function () {
          return l;
        },
      });
      var e = n(7837);
      class s extends e.Cd {
        contains(i) {
          let { width: t, height: n } = this.canvasSize,
            { x: e, y: s } = i;
          return (
            super.contains(i) ||
            super.contains({ x: e - t, y: s }) ||
            super.contains({ x: e - t, y: s - n }) ||
            super.contains({ x: e, y: s - n })
          );
        }
        intersects(i) {
          if (super.intersects(i)) return !0;
          let t = {
            x: i.position.x - this.canvasSize.width,
            y: i.position.y - this.canvasSize.height,
          };
          if (void 0 !== i.radius) {
            let n = new e.Cd(t.x, t.y, 2 * i.radius);
            return super.intersects(n);
          }
          if (void 0 !== i.size) {
            let n = new e.Ae(t.x, t.y, 2 * i.size.width, 2 * i.size.height);
            return super.intersects(n);
          }
          return !1;
        }
        constructor(i, t, n, e) {
          super(i, t, n), (this.canvasSize = e), (this.canvasSize = { ...e });
        }
      }
      var r = n(4145);
      let o = { x: 0, y: 0 };
      class l extends e.$S {
        clear() {}
        init() {
          (this.linkContainer.particles.linksColor = void 0),
            (this.linkContainer.particles.linksColors = new Map());
        }
        interact(i) {
          var t;
          let n;
          if (!i.options.links) return;
          i.links = [];
          let r = i.getPosition(),
            l = this.container,
            a = l.canvas.size;
          if (r.x < o.x || r.y < o.y || r.x > a.width || r.y > a.height) return;
          let c = i.options.links,
            u = c.opacity,
            d = null !== (t = i.retina.linksDistance) && void 0 !== t ? t : 0,
            h = c.warp;
          for (let t of ((n = h
            ? new s(r.x, r.y, d, a)
            : new e.Cd(r.x, r.y, d)),
          l.particles.quadTree.query(n))) {
            let n = t.options.links;
            if (
              i === t ||
              !(null == n ? void 0 : n.enable) ||
              c.id !== n.id ||
              t.spawning ||
              t.destroyed ||
              !t.links ||
              i.links.some((i) => i.destination === t) ||
              t.links.some((t) => t.destination === i)
            )
              continue;
            let s = t.getPosition();
            if (s.x < o.x || s.y < o.y || s.x > a.width || s.y > a.height)
              continue;
            let l = (function (i, t, n, s, r) {
              let { dx: o, dy: l, distance: a } = (0, e.oW)(i, t);
              if (!r || a <= n) return a;
              let c = { x: Math.abs(o), y: Math.abs(l) },
                u = {
                  x: Math.min(c.x, s.width - c.x),
                  y: Math.min(c.y, s.height - c.y),
                };
              return Math.sqrt(u.x ** 2 + u.y ** 2);
            })(r, s, d, a, h && n.warp);
            if (l > d) continue;
            let p = (1 - l / d) * u;
            this._setColor(i), i.links.push({ destination: t, opacity: p });
          }
        }
        isEnabled(i) {
          var t;
          return !!(null === (t = i.options.links) || void 0 === t
            ? void 0
            : t.enable);
        }
        loadParticlesOptions(i) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), e = 1;
            e < t;
            e++
          )
            n[e - 1] = arguments[e];
          for (let t of (i.links || (i.links = new r.y()), n))
            i.links.load(null == t ? void 0 : t.links);
        }
        reset() {}
        constructor(i) {
          super(i),
            (this._setColor = (i) => {
              if (!i.options.links) return;
              let t = this.linkContainer,
                n = i.options.links,
                s =
                  void 0 === n.id
                    ? t.particles.linksColor
                    : t.particles.linksColors.get(n.id);
              if (s) return;
              let r = n.color;
              (s = (0, e.Dt)(r, n.blink, n.consent)),
                void 0 === n.id
                  ? (t.particles.linksColor = s)
                  : t.particles.linksColors.set(n.id, s);
            }),
            (this.linkContainer = i);
        }
      }
    },
  },
]);
