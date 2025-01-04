"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1840],
  {
    1840: function (e, i, t) {
      t.d(i, {
        Bubbler: function () {
          return a;
        },
      });
      var l = t(7837),
        b = t(7257);
      function o(e, i, t, b) {
        return i >= t
          ? (0, l.uZ)(e + (i - t) * b, e, i)
          : i < t
          ? (0, l.uZ)(e - (t - i) * b, i, e)
          : void 0;
      }
      let u = "bubble";
      class a extends l.L8 {
        clear(e, i, t) {
          (!e.bubble.inRange || t) &&
            (delete e.bubble.div,
            delete e.bubble.opacity,
            delete e.bubble.radius,
            delete e.bubble.color);
        }
        init() {
          let e = this.container,
            i = e.actualOptions.interactivity.modes.bubble;
          i &&
            ((e.retina.bubbleModeDistance = i.distance * e.retina.pixelRatio),
            void 0 !== i.size &&
              (e.retina.bubbleModeSize = i.size * e.retina.pixelRatio));
        }
        interact(e) {
          let i = this.container.actualOptions.interactivity.events,
            t = i.onHover,
            b = i.onClick,
            o = t.enable,
            a = t.mode,
            n = b.enable,
            r = b.mode,
            s = i.onDiv;
          o && (0, l.dB)(u, a)
            ? this._hoverBubble()
            : n && (0, l.dB)(u, r)
            ? this._clickBubble()
            : (0, l.XD)(u, s, (i, t) => this._singleSelectorHover(e, i, t));
        }
        isEnabled(e) {
          var i;
          let t = this.container,
            b = t.actualOptions,
            o = t.interactivity.mouse,
            {
              onClick: a,
              onDiv: n,
              onHover: r,
            } = (
              null !== (i = null == e ? void 0 : e.interactivity) &&
              void 0 !== i
                ? i
                : b.interactivity
            ).events,
            s = (0, l.wm)(u, n);
          return (
            (!!s ||
              (!!r.enable && !!o.position) ||
              (!!a.enable && !!o.clickPosition)) &&
            ((0, l.dB)(u, r.mode) || (0, l.dB)(u, a.mode) || s)
          );
        }
        loadModeOptions(e) {
          for (
            var i = arguments.length, t = Array(i > 1 ? i - 1 : 0), l = 1;
            l < i;
            l++
          )
            t[l - 1] = arguments[l];
          for (let i of (e.bubble || (e.bubble = new b.x()), t))
            e.bubble.load(null == i ? void 0 : i.bubble);
        }
        reset(e) {
          e.bubble.inRange = !1;
        }
        constructor(e) {
          super(e),
            (this._clickBubble = () => {
              let e = this.container,
                i = e.actualOptions,
                t = e.interactivity.mouse.clickPosition,
                b = i.interactivity.modes.bubble;
              if (!b || !t) return;
              e.bubble || (e.bubble = {});
              let o = e.retina.bubbleModeDistance;
              if (!o || o < 0) return;
              let u = e.particles.quadTree.queryCircle(t, o, (e) =>
                  this.isEnabled(e)
                ),
                { bubble: a } = e;
              for (let i of u) {
                var n, r, s;
                if (!a.clicking) continue;
                i.bubble.inRange = !a.durationEnd;
                let u = i.getPosition(),
                  c = (0, l.Sp)(u, t),
                  d =
                    (new Date().getTime() -
                      (null !== (r = e.interactivity.mouse.clickTime) &&
                      void 0 !== r
                        ? r
                        : 0)) /
                    l.X5;
                d > b.duration && (a.durationEnd = !0),
                  d > 2 * b.duration &&
                    ((a.clicking = !1), (a.durationEnd = !1));
                let v = {
                  bubbleObj: {
                    optValue: e.retina.bubbleModeSize,
                    value: i.bubble.radius,
                  },
                  particlesObj: {
                    optValue:
                      (0, l.KI)(i.options.size.value) * e.retina.pixelRatio,
                    value: i.size.value,
                  },
                  type: "size",
                };
                this._process(i, c, d, v);
                let p = {
                  bubbleObj: { optValue: b.opacity, value: i.bubble.opacity },
                  particlesObj: {
                    optValue: (0, l.KI)(i.options.opacity.value),
                    value:
                      null !==
                        (s =
                          null === (n = i.opacity) || void 0 === n
                            ? void 0
                            : n.value) && void 0 !== s
                        ? s
                        : 1,
                  },
                  type: "opacity",
                };
                this._process(i, c, d, p),
                  !a.durationEnd && c <= o
                    ? this._hoverBubbleColor(i, c)
                    : delete i.bubble.color;
              }
            }),
            (this._hoverBubble = () => {
              let e = this.container,
                i = e.interactivity.mouse.position,
                t = e.retina.bubbleModeDistance;
              if (t && !(t < 0) && i)
                for (let b of e.particles.quadTree.queryCircle(i, t, (e) =>
                  this.isEnabled(e)
                )) {
                  b.bubble.inRange = !0;
                  let o = b.getPosition(),
                    u = (0, l.Sp)(o, i),
                    a = 1 - u / t;
                  u <= t
                    ? a >= 0 &&
                      e.interactivity.status === l.Wt &&
                      (this._hoverBubbleSize(b, a),
                      this._hoverBubbleOpacity(b, a),
                      this._hoverBubbleColor(b, a))
                    : this.reset(b),
                    e.interactivity.status === l.aM && this.reset(b);
                }
            }),
            (this._hoverBubbleColor = (e, i, t) => {
              let b = this.container.actualOptions,
                o = null != t ? t : b.interactivity.modes.bubble;
              if (o) {
                if (!e.bubble.finalColor) {
                  let i = o.color;
                  if (!i) return;
                  let t = (0, l.wA)(i);
                  e.bubble.finalColor = (0, l.lN)(t);
                }
                if (e.bubble.finalColor) {
                  if (o.mix) {
                    e.bubble.color = void 0;
                    let t = e.getFillColor();
                    e.bubble.color = t
                      ? (0, l.lC)((0, l.oc)(t, e.bubble.finalColor, 1 - i, i))
                      : e.bubble.finalColor;
                  } else e.bubble.color = e.bubble.finalColor;
                }
              }
            }),
            (this._hoverBubbleOpacity = (e, i, t) => {
              var b, u, a, n;
              let r = this.container.actualOptions,
                s =
                  null !== (a = null == t ? void 0 : t.opacity) && void 0 !== a
                    ? a
                    : null === (b = r.interactivity.modes.bubble) ||
                      void 0 === b
                    ? void 0
                    : b.opacity;
              if (!s) return;
              let c = e.options.opacity.value,
                d = o(
                  null !==
                    (n =
                      null === (u = e.opacity) || void 0 === u
                        ? void 0
                        : u.value) && void 0 !== n
                    ? n
                    : 1,
                  s,
                  (0, l.KI)(c),
                  i
                );
              void 0 !== d && (e.bubble.opacity = d);
            }),
            (this._hoverBubbleSize = (e, i, t) => {
              let b = this.container,
                u = (null == t ? void 0 : t.size)
                  ? t.size * b.retina.pixelRatio
                  : b.retina.bubbleModeSize;
              if (void 0 === u) return;
              let a = (0, l.KI)(e.options.size.value) * b.retina.pixelRatio,
                n = o(e.size.value, u, a, i);
              void 0 !== n && (e.bubble.radius = n);
            }),
            (this._process = (e, i, t, l) => {
              var b;
              let o = this.container,
                u = l.bubbleObj.optValue,
                a = o.actualOptions.interactivity.modes.bubble;
              if (!a || void 0 === u) return;
              let n = a.duration,
                r = o.retina.bubbleModeDistance,
                s = l.particlesObj.optValue,
                c = l.bubbleObj.value,
                d = null !== (b = l.particlesObj.value) && void 0 !== b ? b : 0,
                v = l.type;
              if (r && !(r < 0) && u !== s) {
                if ((o.bubble || (o.bubble = {}), o.bubble.durationEnd))
                  c &&
                    ("size" === v && delete e.bubble.radius,
                    "opacity" === v && delete e.bubble.opacity);
                else if (i <= r) {
                  if ((null != c ? c : d) !== u) {
                    let i = d - (t * (d - u)) / n;
                    "size" === v && (e.bubble.radius = i),
                      "opacity" === v && (e.bubble.opacity = i);
                  }
                } else
                  "size" === v && delete e.bubble.radius,
                    "opacity" === v && delete e.bubble.opacity;
              }
            }),
            (this._singleSelectorHover = (e, i, t) => {
              let b = this.container,
                o = document.querySelectorAll(i),
                u = b.actualOptions.interactivity.modes.bubble;
              u &&
                o.length &&
                o.forEach((i) => {
                  let o = b.retina.pixelRatio,
                    a = {
                      x: (i.offsetLeft + 0.5 * i.offsetWidth) * o,
                      y: (i.offsetTop + 0.5 * i.offsetHeight) * o,
                    },
                    n = 0.5 * i.offsetWidth * o,
                    r =
                      "circle" === t.type
                        ? new l.Cd(a.x, a.y, n)
                        : new l.Ae(
                            i.offsetLeft * o,
                            i.offsetTop * o,
                            i.offsetWidth * o,
                            i.offsetHeight * o
                          );
                  for (let t of b.particles.quadTree.query(r, (e) =>
                    this.isEnabled(e)
                  )) {
                    if (!r.contains(t.getPosition())) continue;
                    t.bubble.inRange = !0;
                    let b = u.divs,
                      o = (0, l.iC)(b, i);
                    (t.bubble.div && t.bubble.div === i) ||
                      (this.clear(t, e, !0), (t.bubble.div = i)),
                      this._hoverBubbleSize(t, 1, o),
                      this._hoverBubbleOpacity(t, 1, o),
                      this._hoverBubbleColor(t, 1, o);
                  }
                });
            }),
            e.bubble || (e.bubble = {}),
            (this.handleClickMode = (i) => {
              i === u &&
                (e.bubble || (e.bubble = {}), (e.bubble.clicking = !0));
            });
        }
      }
    },
  },
]);
