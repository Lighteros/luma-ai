"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7783],
  {
    7783: function (i, e, t) {
      t.d(e, {
        LinkInstance: function () {
          return s;
        },
      });
      var n = t(7837);
      function l(i, e) {
        var t;
        let l = ((t = i.map((i) => i.id)).sort((i, e) => i - e), t.join("_")),
          s = e.get(l);
        return void 0 === s && ((s = (0, n.sZ)()), e.set(l, s)), s;
      }
      class s {
        drawParticle(i, e) {
          let { links: t, options: n } = e;
          if (!(null == t ? void 0 : t.length)) return;
          let l = t.filter(
            (i) =>
              n.links &&
              (n.links.frequency >= 1 ||
                this._getLinkFrequency(e, i.destination) <= n.links.frequency)
          );
          for (let i of l) {
            var s;
            this._drawTriangles(n, e, i, l),
              i.opacity > 0 &&
                (null !== (s = e.retina.linksWidth) && void 0 !== s ? s : 0) >
                  0 &&
                this._drawLinkLine(e, i);
          }
        }
        async init() {
          (this._freqs.links = new Map()),
            (this._freqs.triangles = new Map()),
            await Promise.resolve();
        }
        particleCreated(i) {
          if (((i.links = []), !i.options.links)) return;
          let e = this.container.retina.pixelRatio,
            { retina: t } = i,
            { distance: n, width: l } = i.options.links;
          (t.linksDistance = n * e), (t.linksWidth = l * e);
        }
        particleDestroyed(i) {
          i.links = [];
        }
        constructor(i) {
          (this.container = i),
            (this._drawLinkLine = (i, e) => {
              let t = i.options.links;
              if (!(null == t ? void 0 : t.enable)) return;
              let l = this.container,
                s = l.actualOptions,
                o = e.destination,
                a = i.getPosition(),
                r = o.getPosition(),
                d = e.opacity;
              l.canvas.draw((e) => {
                var c, u, k;
                let f;
                let h =
                  null === (c = i.options.twinkle) || void 0 === c
                    ? void 0
                    : c.lines;
                if (null == h ? void 0 : h.enable) {
                  let i = h.frequency,
                    e = (0, n.tX)(h.color);
                  (0, n.sZ)() < i && e && ((f = e), (d = (0, n.Gu)(h.opacity)));
                }
                if (!f) {
                  let e =
                    void 0 !== t.id
                      ? l.particles.linksColors.get(t.id)
                      : l.particles.linksColor;
                  f = (0, n.BE)(i, o, e);
                }
                if (!f) return;
                let p =
                    null !== (u = i.retina.linksWidth) && void 0 !== u ? u : 0,
                  y =
                    null !== (k = i.retina.linksDistance) && void 0 !== k
                      ? k
                      : 0,
                  { backgroundMask: g } = s;
                !(function (i) {
                  let e = !1,
                    {
                      begin: t,
                      end: l,
                      maxDistance: s,
                      context: o,
                      canvasSize: a,
                      width: r,
                      backgroundMask: d,
                      colorLine: c,
                      opacity: u,
                      links: k,
                    } = i;
                  if ((0, n.Sp)(t, l) <= s) (0, n.pS)(o, t, l), (e = !0);
                  else if (k.warp) {
                    let i, r;
                    let d = { x: l.x - a.width, y: l.y },
                      c = (0, n.oW)(t, d);
                    if (c.distance <= s) {
                      let e = t.y - (c.dy / c.dx) * t.x;
                      (i = { x: 0, y: e }), (r = { x: a.width, y: e });
                    } else {
                      let e = { x: l.x, y: l.y - a.height },
                        o = (0, n.oW)(t, e);
                      if (o.distance <= s) {
                        let e = -(t.y - (o.dy / o.dx) * t.x) / (o.dy / o.dx);
                        (i = { x: e, y: 0 }), (r = { x: e, y: a.height });
                      } else {
                        let e = { x: l.x - a.width, y: l.y - a.height },
                          o = (0, n.oW)(t, e);
                        if (o.distance <= s) {
                          let e = t.y - (o.dy / o.dx) * t.x;
                          r = {
                            x:
                              (i = { x: -e / (o.dy / o.dx), y: e }).x + a.width,
                            y: i.y + a.height,
                          };
                        }
                      }
                    }
                    i &&
                      r &&
                      ((0, n.pS)(o, t, i), (0, n.pS)(o, l, r), (e = !0));
                  }
                  if (!e) return;
                  (o.lineWidth = r),
                    d.enable && (o.globalCompositeOperation = d.composite),
                    (o.strokeStyle = (0, n.iz)(c, u));
                  let { shadow: f } = k;
                  if (f.enable) {
                    let i = (0, n.tX)(f.color);
                    i &&
                      ((o.shadowBlur = f.blur), (o.shadowColor = (0, n.iz)(i)));
                  }
                  o.stroke();
                })({
                  context: e,
                  width: p,
                  begin: a,
                  end: r,
                  maxDistance: y,
                  canvasSize: l.canvas.size,
                  links: t,
                  backgroundMask: g,
                  colorLine: f,
                  opacity: d,
                });
              });
            }),
            (this._drawLinkTriangle = (i, e, t) => {
              var l;
              let s = i.options.links;
              if (!(null == s ? void 0 : s.enable)) return;
              let o = s.triangles;
              if (!o.enable) return;
              let a = this.container,
                r = a.actualOptions,
                d = e.destination,
                c = t.destination,
                u =
                  null !== (l = o.opacity) && void 0 !== l
                    ? l
                    : (e.opacity + t.opacity) * 0.5;
              u <= 0 ||
                a.canvas.draw((e) => {
                  var t;
                  let l = i.getPosition(),
                    k = d.getPosition(),
                    f = c.getPosition(),
                    h =
                      null !== (t = i.retina.linksDistance) && void 0 !== t
                        ? t
                        : 0;
                  if (
                    (0, n.Sp)(l, k) > h ||
                    (0, n.Sp)(f, k) > h ||
                    (0, n.Sp)(f, l) > h
                  )
                    return;
                  let p = (0, n.tX)(o.color);
                  if (!p) {
                    let e =
                      void 0 !== s.id
                        ? a.particles.linksColors.get(s.id)
                        : a.particles.linksColor;
                    p = (0, n.BE)(i, d, e);
                  }
                  p &&
                    (function (i) {
                      let {
                        context: e,
                        pos1: t,
                        pos2: l,
                        pos3: s,
                        backgroundMask: o,
                        colorTriangle: a,
                        opacityTriangle: r,
                      } = i;
                      e.beginPath(),
                        e.moveTo(t.x, t.y),
                        e.lineTo(l.x, l.y),
                        e.lineTo(s.x, s.y),
                        e.closePath(),
                        o.enable && (e.globalCompositeOperation = o.composite),
                        (e.fillStyle = (0, n.iz)(a, r)),
                        e.fill();
                    })({
                      context: e,
                      pos1: l,
                      pos2: k,
                      pos3: f,
                      backgroundMask: r.backgroundMask,
                      colorTriangle: p,
                      opacityTriangle: u,
                    });
                });
            }),
            (this._drawTriangles = (i, e, t, n) => {
              var l, s, o;
              let a = t.destination;
              if (
                !(
                  (null === (l = i.links) || void 0 === l
                    ? void 0
                    : l.triangles.enable) &&
                  (null === (s = a.options.links) || void 0 === s
                    ? void 0
                    : s.triangles.enable)
                )
              )
                return;
              let r =
                null === (o = a.links) || void 0 === o
                  ? void 0
                  : o.filter((i) => {
                      let e = this._getLinkFrequency(a, i.destination);
                      return (
                        a.options.links &&
                        e <= a.options.links.frequency &&
                        n.findIndex((e) => e.destination === i.destination) >= 0
                      );
                    });
              if (null == r ? void 0 : r.length)
                for (let n of r) {
                  let l = n.destination;
                  this._getTriangleFrequency(e, a, l) >
                    i.links.triangles.frequency ||
                    this._drawLinkTriangle(e, t, n);
                }
            }),
            (this._getLinkFrequency = (i, e) => l([i, e], this._freqs.links)),
            (this._getTriangleFrequency = (i, e, t) =>
              l([i, e, t], this._freqs.triangles)),
            (this._freqs = { links: new Map(), triangles: new Map() });
        }
      }
    },
  },
]);
