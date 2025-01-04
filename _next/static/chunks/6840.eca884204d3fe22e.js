"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6840],
  {
    6840: function (e, t, i) {
      i.d(t, {
        Repulser: function () {
          return o;
        },
      });
      var s = i(7837),
        l = i(5091);
      let n = "repulse";
      class o extends s.L8 {
        clear() {}
        init() {
          let e = this.container,
            t = e.actualOptions.interactivity.modes.repulse;
          t &&
            (e.retina.repulseModeDistance = t.distance * e.retina.pixelRatio);
        }
        interact() {
          let e = this.container,
            t = e.actualOptions,
            i = e.interactivity.status === s.Wt,
            l = t.interactivity.events,
            o = l.onHover,
            r = o.enable,
            c = o.mode,
            a = l.onClick,
            u = a.enable,
            p = a.mode,
            d = l.onDiv;
          i && r && (0, s.dB)(n, c)
            ? this._hoverRepulse()
            : u && (0, s.dB)(n, p)
            ? this._clickRepulse()
            : (0, s.XD)(n, d, (e, t) => this._singleSelectorRepulse(e, t));
        }
        isEnabled(e) {
          var t;
          let i = this.container,
            l = i.actualOptions,
            o = i.interactivity.mouse,
            r = (
              null !== (t = null == e ? void 0 : e.interactivity) &&
              void 0 !== t
                ? t
                : l.interactivity
            ).events,
            c = r.onDiv,
            a = r.onHover,
            u = r.onClick,
            p = (0, s.wm)(n, c);
          if (!(p || (a.enable && o.position) || (u.enable && o.clickPosition)))
            return !1;
          let d = a.mode,
            f = u.mode;
          return (0, s.dB)(n, d) || (0, s.dB)(n, f) || p;
        }
        loadModeOptions(e) {
          for (
            var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1;
            s < t;
            s++
          )
            i[s - 1] = arguments[s];
          for (let t of (e.repulse || (e.repulse = new l.H()), i))
            e.repulse.load(null == t ? void 0 : t.repulse);
        }
        reset() {}
        constructor(e, t) {
          super(t),
            (this._clickRepulse = () => {
              var e;
              let t = this.container,
                i = t.actualOptions.interactivity.modes.repulse;
              if (!i) return;
              let l =
                null !== (e = t.repulse) && void 0 !== e
                  ? e
                  : { particles: [] };
              if (
                (l.finish ||
                  (l.count || (l.count = 0),
                  l.count++,
                  l.count !== t.particles.count || (l.finish = !0)),
                l.clicking)
              ) {
                let e = t.retina.repulseModeDistance;
                if (!e || e < 0) return;
                let n = Math.pow(e / 6, 3),
                  o = t.interactivity.mouse.clickPosition;
                if (void 0 === o) return;
                let r = new s.Cd(o.x, o.y, n);
                for (let e of t.particles.quadTree.query(r, (e) =>
                  this.isEnabled(e)
                )) {
                  let { dx: t, dy: r, distance: c } = (0, s.oW)(o, e.position),
                    a = c ** 2,
                    u = (-n * i.speed) / a;
                  if (a <= n) {
                    l.particles.push(e);
                    let i = s.OW.create(t, r);
                    (i.length = u), e.velocity.setTo(i);
                  }
                }
              } else if (!1 === l.clicking) {
                for (let e of l.particles) e.velocity.setTo(e.initialVelocity);
                l.particles = [];
              }
            }),
            (this._hoverRepulse = () => {
              let e = this.container,
                t = e.interactivity.mouse.position,
                i = e.retina.repulseModeDistance;
              i &&
                !(i < 0) &&
                t &&
                this._processRepulse(t, i, new s.Cd(t.x, t.y, i));
            }),
            (this._processRepulse = (e, t, i, l) => {
              var n;
              let o = this.container,
                r = o.particles.quadTree.query(i, (e) => this.isEnabled(e)),
                c = o.actualOptions.interactivity.modes.repulse;
              if (!c) return;
              let { easing: a, speed: u, factor: p, maxSpeed: d } = c,
                f = (0, s._X)(a),
                h =
                  (null !== (n = null == l ? void 0 : l.speed) && void 0 !== n
                    ? n
                    : u) * p;
              for (let i of r) {
                let { dx: l, dy: n, distance: o } = (0, s.oW)(i.position, e),
                  r = (0, s.uZ)(f(1 - o / t) * h, 0, d),
                  c = s.OW.create(o ? (l / o) * r : h, o ? (n / o) * r : h);
                i.position.addTo(c);
              }
            }),
            (this._singleSelectorRepulse = (e, t) => {
              let i = this.container,
                l = i.actualOptions.interactivity.modes.repulse;
              if (!l) return;
              let n = document.querySelectorAll(e);
              n.length &&
                n.forEach((e) => {
                  let n = i.retina.pixelRatio,
                    o = {
                      x: (e.offsetLeft + 0.5 * e.offsetWidth) * n,
                      y: (e.offsetTop + 0.5 * e.offsetHeight) * n,
                    },
                    r = 0.5 * e.offsetWidth * n,
                    c =
                      "circle" === t.type
                        ? new s.Cd(o.x, o.y, r)
                        : new s.Ae(
                            e.offsetLeft * n,
                            e.offsetTop * n,
                            e.offsetWidth * n,
                            e.offsetHeight * n
                          ),
                    a = l.divs,
                    u = (0, s.iC)(a, e);
                  this._processRepulse(o, r, c, u);
                });
            }),
            (this._engine = e),
            t.repulse || (t.repulse = { particles: [] }),
            (this.handleClickMode = (e) => {
              let i = this.container.actualOptions.interactivity.modes.repulse;
              if (!i || e !== n) return;
              t.repulse || (t.repulse = { particles: [] });
              let l = t.repulse;
              for (let e of ((l.clicking = !0),
              (l.count = 0),
              t.repulse.particles))
                this.isEnabled(e) && e.velocity.setTo(e.initialVelocity);
              (l.particles = []),
                (l.finish = !1),
                setTimeout(() => {
                  t.destroyed || (l.clicking = !1);
                }, i.duration * s.X5);
            });
        }
      }
    },
  },
]);
