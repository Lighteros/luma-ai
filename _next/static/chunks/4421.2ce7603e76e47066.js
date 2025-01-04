"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4421],
  {
    4421: function (t, e, i) {
      i.d(e, {
        Container: function () {
          return T;
        },
      });
      var s = i(9471),
        n = i(4864),
        a = i(640),
        r = i(8128);
      function o(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || !t) return;
        let s = t.style;
        if (s)
          for (let t in e) {
            let n = e[t];
            n && s.setProperty(t, n, i ? "important" : "");
          }
      }
      class l {
        get _fullScreen() {
          return this.container.actualOptions.fullScreen.enable;
        }
        clear() {
          let t = this.container.actualOptions,
            e = t.particles.move.trail,
            i = this._trailFill;
          t.backgroundMask.enable
            ? this.paint()
            : e.enable && e.length > 0 && i
            ? i.color
              ? this._paintBase((0, r.iz)(i.color, i.opacity))
              : i.image && this._paintImage(i.image, i.opacity)
            : t.clear &&
              this.draw((t) => {
                (0, a.ZH)(t, this.size);
              });
        }
        destroy() {
          if ((this.stop(), this._generated)) {
            let t = this.element;
            null == t || t.remove();
          } else this._resetOriginalStyle();
          (this._preDrawUpdaters = []),
            (this._postDrawUpdaters = []),
            (this._resizePlugins = []),
            (this._colorPlugins = []);
        }
        draw(t) {
          let e = this._context;
          if (e) return t(e);
        }
        drawAsync(t) {
          let e = this._context;
          if (e) return t(e);
        }
        drawParticle(t, e) {
          var i;
          if (t.spawning || t.destroyed) return;
          let s = t.getRadius();
          if (s <= 0) return;
          let n = t.getFillColor(),
            o = null !== (i = t.getStrokeColor()) && void 0 !== i ? i : n,
            [l, h] = this._getPluginParticleColors(t);
          l || (l = n),
            h || (h = o),
            (l || h) &&
              this.draw((i) => {
                var n, o, c, d;
                let u = this.container,
                  p = u.actualOptions,
                  f = t.options.zIndex,
                  v = 1 - t.zIndexFactor,
                  _ = v ** f.opacityRate,
                  g =
                    null !==
                      (c =
                        null !== (o = t.bubble.opacity) && void 0 !== o
                          ? o
                          : null === (n = t.opacity) || void 0 === n
                          ? void 0
                          : n.value) && void 0 !== c
                      ? c
                      : 1,
                  m = null !== (d = t.strokeOpacity) && void 0 !== d ? d : g,
                  y = g * _,
                  w = {},
                  b = { fill: l ? (0, r.vz)(l, y) : void 0 };
                (b.stroke = h ? (0, r.vz)(h, m * _) : b.fill),
                  this._applyPreDrawUpdaters(i, t, s, y, b, w),
                  (0, a.zv)({
                    container: u,
                    context: i,
                    particle: t,
                    delta: e,
                    colorStyles: b,
                    backgroundMask: p.backgroundMask.enable,
                    composite: p.backgroundMask.composite,
                    radius: s * v ** f.sizeRate,
                    opacity: y,
                    shadow: t.options.shadow,
                    transform: w,
                  }),
                  this._applyPostDrawUpdaters(t);
              });
        }
        drawParticlePlugin(t, e, i) {
          this.draw((s) => (0, a.$F)(s, t, e, i));
        }
        drawPlugin(t, e) {
          this.draw((i) => (0, a.Zw)(i, t, e));
        }
        async init() {
          this._safeMutationObserver((t) => t.disconnect()),
            (this._mutationObserver = (0, n.yf)((t) => {
              for (let e of t)
                "attributes" === e.type &&
                  "style" === e.attributeName &&
                  this._repairStyle();
            })),
            this.resize(),
            this._initStyle(),
            await this._initCover();
          try {
            await this._initTrail();
          } catch (t) {
            (0, n.jl)().error(t);
          }
          this.initBackground(),
            this._safeMutationObserver((t) => {
              this.element && t.observe(this.element, { attributes: !0 });
            }),
            this.initUpdaters(),
            this.initPlugins(),
            this.paint();
        }
        initBackground() {
          let t = this.container.actualOptions.background,
            e = this.element;
          if (!e) return;
          let i = e.style;
          if (i) {
            if (t.color) {
              let e = (0, r.tX)(t.color);
              i.backgroundColor = e ? (0, r.iz)(e, t.opacity) : "";
            } else i.backgroundColor = "";
            (i.backgroundImage = t.image || ""),
              (i.backgroundPosition = t.position || ""),
              (i.backgroundRepeat = t.repeat || ""),
              (i.backgroundSize = t.size || "");
          }
        }
        initPlugins() {
          for (let [, e] of ((this._resizePlugins = []),
          this.container.plugins)) {
            var t;
            e.resize && this._resizePlugins.push(e),
              (null !== (t = e.particleFillColor) && void 0 !== t
                ? t
                : e.particleStrokeColor) && this._colorPlugins.push(e);
          }
        }
        initUpdaters() {
          for (let i of ((this._preDrawUpdaters = []),
          (this._postDrawUpdaters = []),
          this.container.particles.updaters)) {
            var t, e;
            i.afterDraw && this._postDrawUpdaters.push(i),
              (null !==
                (e =
                  null !== (t = i.getColorStyles) && void 0 !== t
                    ? t
                    : i.getTransformValues) && void 0 !== e
                ? e
                : i.beforeDraw) && this._preDrawUpdaters.push(i);
          }
        }
        loadCanvas(t) {
          this._generated && this.element && this.element.remove(),
            (this._generated =
              t.dataset && s.YU in t.dataset
                ? "true" === t.dataset[s.YU]
                : this._generated),
            (this.element = t),
            (this.element.ariaHidden = "true"),
            (this._originalStyle = (0, n.ZB)({}, this.element.style)),
            (this.size.height = t.offsetHeight),
            (this.size.width = t.offsetWidth),
            (this._context = this.element.getContext("2d")),
            this._safeMutationObserver((t) => {
              this.element && t.observe(this.element, { attributes: !0 });
            }),
            this.container.retina.init(),
            this.initBackground();
        }
        paint() {
          let t = this.container.actualOptions;
          this.draw((e) => {
            t.backgroundMask.enable && t.backgroundMask.cover
              ? ((0, a.ZH)(e, this.size),
                this._coverImage
                  ? this._paintImage(
                      this._coverImage.image,
                      this._coverImage.opacity
                    )
                  : this._coverColorStyle
                  ? this._paintBase(this._coverColorStyle)
                  : this._paintBase())
              : this._paintBase();
          });
        }
        resize() {
          if (!this.element) return !1;
          let t = this.container,
            e = t.retina.pixelRatio,
            i = t.canvas.size,
            s = {
              width: this.element.offsetWidth * e,
              height: this.element.offsetHeight * e,
            };
          if (
            s.height === i.height &&
            s.width === i.width &&
            s.height === this.element.height &&
            s.width === this.element.width
          )
            return !1;
          let n = { ...i };
          return (
            (this.element.width = i.width = this.element.offsetWidth * e),
            (this.element.height = i.height = this.element.offsetHeight * e),
            this.container.started &&
              t.particles.setResizeFactor({
                width: i.width / n.width,
                height: i.height / n.height,
              }),
            !0
          );
        }
        stop() {
          this._safeMutationObserver((t) => t.disconnect()),
            (this._mutationObserver = void 0),
            this.draw((t) => (0, a.ZH)(t, this.size));
        }
        async windowResize() {
          if (!this.element || !this.resize()) return;
          let t = this.container,
            e = t.updateActualOptions();
          t.particles.setDensity(),
            this._applyResizePlugins(),
            e && (await t.refresh());
        }
        constructor(t) {
          (this.container = t),
            (this._applyPostDrawUpdaters = (t) => {
              for (let i of this._postDrawUpdaters) {
                var e;
                null === (e = i.afterDraw) || void 0 === e || e.call(i, t);
              }
            }),
            (this._applyPreDrawUpdaters = (t, e, i, s, n, a) => {
              for (let o of this._preDrawUpdaters) {
                var r;
                if (o.getColorStyles) {
                  let { fill: a, stroke: r } = o.getColorStyles(e, t, i, s);
                  a && (n.fill = a), r && (n.stroke = r);
                }
                if (o.getTransformValues) {
                  let t = o.getTransformValues(e);
                  for (let e in t)
                    !(function (t, e, i) {
                      let s = e[i];
                      if (void 0 !== s) {
                        var n;
                        t[i] =
                          (null !== (n = t[i]) && void 0 !== n ? n : 1) * s;
                      }
                    })(a, t, e);
                }
                null === (r = o.beforeDraw) || void 0 === r || r.call(o, e);
              }
            }),
            (this._applyResizePlugins = () => {
              for (let e of this._resizePlugins) {
                var t;
                null === (t = e.resize) || void 0 === t || t.call(e);
              }
            }),
            (this._getPluginParticleColors = (t) => {
              let e, i;
              for (let s of this._colorPlugins)
                if (
                  (!e &&
                    s.particleFillColor &&
                    (e = (0, r.lN)(s.particleFillColor(t))),
                  !i &&
                    s.particleStrokeColor &&
                    (i = (0, r.lN)(s.particleStrokeColor(t))),
                  e && i)
                )
                  break;
              return [e, i];
            }),
            (this._initCover = async () => {
              let t = this.container.actualOptions.backgroundMask.cover,
                e = t.color;
              if (e) {
                let i = (0, r.tX)(e);
                if (i) {
                  let e = { ...i, a: t.opacity };
                  this._coverColorStyle = (0, r.iz)(e, e.a);
                }
              } else
                await new Promise((e, i) => {
                  if (!t.image) return;
                  let s = document.createElement("img");
                  s.addEventListener("load", () => {
                    (this._coverImage = { image: s, opacity: t.opacity }), e();
                  }),
                    s.addEventListener("error", (t) => {
                      i(t.error);
                    }),
                    (s.src = t.image);
                });
            }),
            (this._initStyle = () => {
              let t = this.element,
                e = this.container.actualOptions;
              if (t)
                for (let i in (this._fullScreen
                  ? ((this._originalStyle = (0, n.ZB)({}, t.style)),
                    this._setFullScreenStyle())
                  : this._resetOriginalStyle(),
                e.style)) {
                  if (!i || !e.style) continue;
                  let s = e.style[i];
                  s && t.style.setProperty(i, s, "important");
                }
            }),
            (this._initTrail = async () => {
              let t = this.container.actualOptions.particles.move.trail,
                e = t.fill;
              if (!t.enable) return;
              let i = 1 / t.length;
              if (e.color) {
                let t = (0, r.tX)(e.color);
                if (!t) return;
                this._trailFill = { color: { ...t }, opacity: i };
              } else
                await new Promise((t, s) => {
                  if (!e.image) return;
                  let n = document.createElement("img");
                  n.addEventListener("load", () => {
                    (this._trailFill = { image: n, opacity: i }), t();
                  }),
                    n.addEventListener("error", (t) => {
                      s(t.error);
                    }),
                    (n.src = e.image);
                });
            }),
            (this._paintBase = (t) => {
              this.draw((e) => (0, a.TQ)(e, this.size, t));
            }),
            (this._paintImage = (t, e) => {
              this.draw((i) => (0, a.C3)(i, this.size, t, e));
            }),
            (this._repairStyle = () => {
              let t = this.element;
              t &&
                (this._safeMutationObserver((t) => t.disconnect()),
                this._initStyle(),
                this.initBackground(),
                this._safeMutationObserver((e) =>
                  e.observe(t, { attributes: !0 })
                ));
            }),
            (this._resetOriginalStyle = () => {
              let t = this.element,
                e = this._originalStyle;
              t && e && o(t, e);
            }),
            (this._safeMutationObserver = (t) => {
              this._mutationObserver && t(this._mutationObserver);
            }),
            (this._setFullScreenStyle = () => {
              let t = this.element;
              t &&
                o(
                  t,
                  {
                    position: "fixed",
                    zIndex:
                      this.container.actualOptions.fullScreen.zIndex.toString(
                        10
                      ),
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  },
                  !0
                );
            }),
            (this.size = { height: 0, width: 0 }),
            (this._context = null),
            (this._generated = !1),
            (this._preDrawUpdaters = []),
            (this._postDrawUpdaters = []),
            (this._resizePlugins = []),
            (this._colorPlugins = []);
        }
      }
      var h = i(2455);
      function c(t, e, i, s, n) {
        if (s) {
          let s = { passive: !0 };
          (0, h.jn)(n) ? (s.capture = n) : void 0 !== n && (s = n),
            t.addEventListener(e, i, s);
        } else t.removeEventListener(e, i, n);
      }
      class d {
        addListeners() {
          this._manageListeners(!0);
        }
        removeListeners() {
          this._manageListeners(!1);
        }
        constructor(t) {
          (this.container = t),
            (this._doMouseTouchClick = (t) => {
              let e = this.container,
                i = e.actualOptions;
              if (this._canPush) {
                let t = e.interactivity.mouse,
                  s = t.position;
                if (!s) return;
                (t.clickPosition = { ...s }),
                  (t.clickTime = new Date().getTime());
                let a = i.interactivity.events.onClick;
                (0, n.KH)(a.mode, (t) => this.container.handleClickMode(t));
              }
              "touchend" === t.type &&
                setTimeout(() => this._mouseTouchFinish(), 500);
            }),
            (this._handleThemeChange = (t) => {
              let e = this.container,
                i = e.options,
                s = i.defaultThemes,
                n = t.matches ? s.dark : s.light,
                a = i.themes.find((t) => t.name === n);
              a && a.default.auto && e.loadTheme(n);
            }),
            (this._handleVisibilityChange = () => {
              let t = this.container,
                e = t.actualOptions;
              this._mouseTouchFinish(),
                e.pauseOnBlur &&
                  (document && document.hidden
                    ? ((t.pageHidden = !0), t.pause())
                    : ((t.pageHidden = !1),
                      t.animationStatus ? t.play(!0) : t.draw(!0)));
            }),
            (this._handleWindowResize = () => {
              this._resizeTimeout &&
                (clearTimeout(this._resizeTimeout), delete this._resizeTimeout);
              let t = async () => {
                let t = this.container.canvas;
                await (null == t ? void 0 : t.windowResize());
              };
              this._resizeTimeout = setTimeout(
                () => void t(),
                this.container.actualOptions.interactivity.events.resize.delay *
                  s.X5
              );
            }),
            (this._manageInteractivityListeners = (t, e) => {
              let i = this._handlers,
                n = this.container,
                a = n.actualOptions,
                r = n.interactivity.element;
              if (!r) return;
              let o = n.canvas.element;
              o && (o.style.pointerEvents = r === o ? "initial" : "none"),
                (a.interactivity.events.onHover.enable ||
                  a.interactivity.events.onClick.enable) &&
                  (c(r, s.Wt, i.mouseMove, e),
                  c(r, s.Re, i.touchStart, e),
                  c(r, s.zX, i.touchMove, e),
                  a.interactivity.events.onClick.enable
                    ? (c(r, s.$o, i.touchEndClick, e),
                      c(r, s.zw, i.mouseUp, e),
                      c(r, s.ZL, i.mouseDown, e))
                    : c(r, s.$o, i.touchEnd, e),
                  c(r, t, i.mouseLeave, e),
                  c(r, s.VH, i.touchCancel, e));
            }),
            (this._manageListeners = (t) => {
              let e = this._handlers,
                i = this.container,
                n = i.actualOptions.interactivity.detectsOn,
                a = i.canvas.element,
                r = s.aM;
              if ("window" === n)
                (i.interactivity.element = window), (r = s.G1);
              else if ("parent" === n && a) {
                var o;
                i.interactivity.element =
                  null !== (o = a.parentElement) && void 0 !== o
                    ? o
                    : a.parentNode;
              } else i.interactivity.element = a;
              this._manageMediaMatch(t),
                this._manageResize(t),
                this._manageInteractivityListeners(r, t),
                document && c(document, s.QL, e.visibilityChange, t, !1);
            }),
            (this._manageMediaMatch = (t) => {
              let e = this._handlers,
                i = (0, n.HY)("(prefers-color-scheme: dark)");
              if (i) {
                if (void 0 !== i.addEventListener) {
                  c(i, "change", e.themeChange, t);
                  return;
                }
                void 0 !== i.addListener &&
                  (t
                    ? i.addListener(e.oldThemeChange)
                    : i.removeListener(e.oldThemeChange));
              }
            }),
            (this._manageResize = (t) => {
              let e = this._handlers,
                i = this.container;
              if (!i.actualOptions.interactivity.events.resize) return;
              if ("undefined" == typeof ResizeObserver) {
                c(window, s.rR, e.resize, t);
                return;
              }
              let n = i.canvas.element;
              this._resizeObserver && !t
                ? (n && this._resizeObserver.unobserve(n),
                  this._resizeObserver.disconnect(),
                  delete this._resizeObserver)
                : !this._resizeObserver &&
                  t &&
                  n &&
                  ((this._resizeObserver = new ResizeObserver((t) => {
                    t.find((t) => t.target === n) && this._handleWindowResize();
                  })),
                  this._resizeObserver.observe(n));
            }),
            (this._mouseDown = () => {
              let { interactivity: t } = this.container;
              if (!t) return;
              let { mouse: e } = t;
              (e.clicking = !0), (e.downPosition = e.position);
            }),
            (this._mouseTouchClick = (t) => {
              let e = this.container,
                i = e.actualOptions,
                { mouse: s } = e.interactivity;
              s.inside = !0;
              let n = !1,
                a = s.position;
              if (a && i.interactivity.events.onClick.enable) {
                for (let [, t] of e.plugins)
                  if (t.clickPositionValid && (n = t.clickPositionValid(a)))
                    break;
                n || this._doMouseTouchClick(t), (s.clicking = !1);
              }
            }),
            (this._mouseTouchFinish = () => {
              let t = this.container.interactivity;
              if (!t) return;
              let e = t.mouse;
              delete e.position,
                delete e.clickPosition,
                delete e.downPosition,
                (t.status = s.aM),
                (e.inside = !1),
                (e.clicking = !1);
            }),
            (this._mouseTouchMove = (t) => {
              var e, i, n, a, r, o;
              let l;
              let h = this.container,
                c = h.actualOptions,
                d = h.interactivity,
                u = h.canvas.element;
              if (!(null == d ? void 0 : d.element)) return;
              if (((d.mouse.inside = !0), t.type.startsWith("pointer"))) {
                if (((this._canPush = !0), d.element === window)) {
                  if (u) {
                    let e = u.getBoundingClientRect();
                    l = { x: t.clientX - e.left, y: t.clientY - e.top };
                  }
                } else if ("parent" === c.interactivity.detectsOn) {
                  let s = t.target,
                    n = t.currentTarget;
                  if (s && n && u) {
                    let e = s.getBoundingClientRect(),
                      i = n.getBoundingClientRect(),
                      a = u.getBoundingClientRect();
                    l = {
                      x: t.offsetX + 2 * e.left - (i.left + a.left),
                      y: t.offsetY + 2 * e.top - (i.top + a.top),
                    };
                  } else
                    l = {
                      x:
                        null !== (e = t.offsetX) && void 0 !== e
                          ? e
                          : t.clientX,
                      y:
                        null !== (i = t.offsetY) && void 0 !== i
                          ? i
                          : t.clientY,
                    };
                } else
                  t.target === u &&
                    (l = {
                      x:
                        null !== (n = t.offsetX) && void 0 !== n
                          ? n
                          : t.clientX,
                      y:
                        null !== (a = t.offsetY) && void 0 !== a
                          ? a
                          : t.clientY,
                    });
              } else if (((this._canPush = "touchmove" !== t.type), u)) {
                let e = t.touches[t.touches.length - 1],
                  i = u.getBoundingClientRect();
                l = {
                  x:
                    e.clientX - (null !== (r = i.left) && void 0 !== r ? r : 0),
                  y: e.clientY - (null !== (o = i.top) && void 0 !== o ? o : 0),
                };
              }
              let p = h.retina.pixelRatio;
              l && ((l.x *= p), (l.y *= p)),
                (d.mouse.position = l),
                (d.status = s.Wt);
            }),
            (this._touchEnd = (t) => {
              for (let e of Array.from(t.changedTouches))
                this._touches.delete(e.identifier);
              this._mouseTouchFinish();
            }),
            (this._touchEndClick = (t) => {
              for (let e of Array.from(t.changedTouches))
                this._touches.delete(e.identifier);
              this._mouseTouchClick(t);
            }),
            (this._touchStart = (t) => {
              for (let e of Array.from(t.changedTouches))
                this._touches.set(e.identifier, performance.now());
              this._mouseTouchMove(t);
            }),
            (this._canPush = !0),
            (this._touches = new Map()),
            (this._handlers = {
              mouseDown: () => this._mouseDown(),
              mouseLeave: () => this._mouseTouchFinish(),
              mouseMove: (t) => this._mouseTouchMove(t),
              mouseUp: (t) => this._mouseTouchClick(t),
              touchStart: (t) => this._touchStart(t),
              touchMove: (t) => this._mouseTouchMove(t),
              touchEnd: (t) => this._touchEnd(t),
              touchCancel: (t) => this._touchEnd(t),
              touchEndClick: (t) => this._touchEndClick(t),
              visibilityChange: () => this._handleVisibilityChange(),
              themeChange: (t) => this._handleThemeChange(t),
              oldThemeChange: (t) => this._handleThemeChange(t),
              resize: () => {
                this._handleWindowResize();
              },
            });
        }
      }
      var u = i(8830);
      class p {
        externalInteract(t) {
          for (let e of this._externalInteractors)
            e.isEnabled() && e.interact(t);
        }
        handleClickMode(t) {
          for (let i of this._externalInteractors) {
            var e;
            null === (e = i.handleClickMode) || void 0 === e || e.call(i, t);
          }
        }
        async init() {
          for (let t of ((this._interactors = await this._engine.getInteractors(
            this.container,
            !0
          )),
          (this._externalInteractors = []),
          (this._particleInteractors = []),
          this._interactors)) {
            switch (t.type) {
              case "external":
                this._externalInteractors.push(t);
                break;
              case "particles":
                this._particleInteractors.push(t);
            }
            t.init();
          }
        }
        particlesInteract(t, e) {
          for (let i of this._externalInteractors) i.clear(t, e);
          for (let i of this._particleInteractors)
            i.isEnabled(t) && i.interact(t, e);
        }
        reset(t) {
          for (let e of this._externalInteractors) e.isEnabled() && e.reset(t);
          for (let e of this._particleInteractors) e.isEnabled(t) && e.reset(t);
        }
        constructor(t, e) {
          (this.container = e),
            (this._engine = t),
            (this._interactors = []),
            (this._externalInteractors = []),
            (this._particleInteractors = []);
        }
      }
      var f = i(9890),
        v = i(3180),
        _ = i(7802),
        g = i(9687);
      function m(t) {
        if (!(0, n.dB)(t.outMode, t.checkModes)) return;
        let e = 2 * t.radius;
        t.coord > t.maxCoord - e
          ? t.setCb(-t.radius)
          : t.coord < e && t.setCb(t.radius);
      }
      class y {
        destroy(t) {
          var e, i, s;
          if (this.unbreakable || this.destroyed) return;
          (this.destroyed = !0),
            (this.bubble.inRange = !1),
            (this.slow.inRange = !1);
          let n = this.container,
            a = this.pathGenerator,
            r = n.shapeDrawers.get(this.shape);
          for (let [, s] of (null == r ||
            null === (e = r.particleDestroy) ||
            void 0 === e ||
            e.call(r, this),
          n.plugins))
            null === (i = s.particleDestroyed) ||
              void 0 === i ||
              i.call(s, this, t);
          for (let e of n.particles.updaters)
            null === (s = e.particleDestroyed) ||
              void 0 === s ||
              s.call(e, this, t);
          null == a || a.reset(this),
            this._engine.dispatchEvent("particleDestroyed", {
              container: this.container,
              data: { particle: this },
            });
        }
        draw(t) {
          let e = this.container,
            i = e.canvas;
          for (let [, s] of e.plugins) i.drawParticlePlugin(s, this, t);
          i.drawParticle(this, t);
        }
        getFillColor() {
          var t;
          return this._getRollColor(
            null !== (t = this.bubble.color) && void 0 !== t
              ? t
              : (0, r.gW)(this.color)
          );
        }
        getMass() {
          return this.getRadius() ** 2 * Math.PI * 0.5;
        }
        getPosition() {
          return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
            z: this.position.z,
          };
        }
        getRadius() {
          var t;
          return null !== (t = this.bubble.radius) && void 0 !== t
            ? t
            : this.size.value;
        }
        getStrokeColor() {
          var t;
          return this._getRollColor(
            null !== (t = this.bubble.color) && void 0 !== t
              ? t
              : (0, r.gW)(this.strokeColor)
          );
        }
        init(t, e, i, a) {
          var o, l, h, c, d, u, p, f, m, y;
          let w = this.container,
            b = this._engine;
          (this.id = t),
            (this.group = a),
            (this.effectClose = !0),
            (this.effectFill = !0),
            (this.shapeClose = !0),
            (this.shapeFill = !0),
            (this.pathRotation = !1),
            (this.lastPathTime = 0),
            (this.destroyed = !1),
            (this.unbreakable = !1),
            (this.rotation = 0),
            (this.misplaced = !1),
            (this.retina = { maxDistance: {} }),
            (this.outType = "normal"),
            (this.ignoresResizeRatio = !0);
          let z = w.retina.pixelRatio,
            C = w.actualOptions,
            k = (0, g.x)(this._engine, w, C.particles),
            P = k.effect.type,
            x = k.shape.type,
            { reduceDuplicates: O } = k;
          (this.effect = (0, n.wA)(P, this.id, O)),
            (this.shape = (0, n.wA)(x, this.id, O));
          let T = k.effect,
            M = k.shape;
          if (i) {
            if (null === (h = i.effect) || void 0 === h ? void 0 : h.type) {
              let t = i.effect.type,
                e = (0, n.wA)(t, this.id, O);
              e && ((this.effect = e), T.load(i.effect));
            }
            if (null === (c = i.shape) || void 0 === c ? void 0 : c.type) {
              let t = i.shape.type,
                e = (0, n.wA)(t, this.id, O);
              e && ((this.shape = e), M.load(i.shape));
            }
          }
          (this.effectData = (function (t, e, i, s) {
            let a = e.options[t];
            if (a)
              return (0, n.ZB)(
                { close: e.close, fill: e.fill },
                (0, n.wA)(a, i, s)
              );
          })(this.effect, T, this.id, O)),
            (this.shapeData = (function (t, e, i, s) {
              let a = e.options[t];
              if (a)
                return (0, n.ZB)(
                  { close: e.close, fill: e.fill },
                  (0, n.wA)(a, i, s)
                );
            })(this.shape, M, this.id, O)),
            k.load(i);
          let S = this.effectData;
          S && k.load(S.particles);
          let D = this.shapeData;
          D && k.load(D.particles);
          let R = new _.o(b, w);
          R.load(w.actualOptions.interactivity),
            R.load(k.interactivity),
            (this.interactivity = R),
            (this.effectFill =
              null !== (d = null == S ? void 0 : S.fill) && void 0 !== d
                ? d
                : k.effect.fill),
            (this.effectClose =
              null !== (u = null == S ? void 0 : S.close) && void 0 !== u
                ? u
                : k.effect.close),
            (this.shapeFill =
              null !== (p = null == D ? void 0 : D.fill) && void 0 !== p
                ? p
                : k.shape.fill),
            (this.shapeClose =
              null !== (f = null == D ? void 0 : D.close) && void 0 !== f
                ? f
                : k.shape.close),
            (this.options = k);
          let I = this.options.move.path;
          (this.pathDelay = (0, v.Gu)(I.delay.value) * s.X5),
            I.generator &&
              ((this.pathGenerator = this._engine.getPathGenerator(
                I.generator
              )),
              this.pathGenerator &&
                w.addPath(I.generator, this.pathGenerator) &&
                this.pathGenerator.init(w)),
            w.retina.initParticle(this),
            (this.size = (0, n.V0)(this.options.size, z)),
            (this.bubble = { inRange: !1 }),
            (this.slow = { inRange: !1, factor: 1 }),
            this._initPosition(e),
            (this.initialVelocity = this._calculateVelocity()),
            (this.velocity = this.initialVelocity.copy()),
            (this.moveDecay = 1 - (0, v.Gu)(this.options.move.decay));
          let E = w.particles;
          E.setLastZIndex(this.position.z),
            (this.zIndexFactor = this.position.z / w.zLayers),
            (this.sides = 24);
          let L = w.effectDrawers.get(this.effect);
          !L &&
            (L = this._engine.getEffectDrawer(this.effect)) &&
            w.effectDrawers.set(this.effect, L),
            (null == L ? void 0 : L.loadEffect) && L.loadEffect(this);
          let F = w.shapeDrawers.get(this.shape);
          !F &&
            (F = this._engine.getShapeDrawer(this.shape)) &&
            w.shapeDrawers.set(this.shape, F),
            (null == F ? void 0 : F.loadShape) && F.loadShape(this);
          let A = null == F ? void 0 : F.getSidesCount;
          for (let t of (A && (this.sides = A(this)),
          (this.spawning = !1),
          (this.shadowColor = (0, r.tX)(this.options.shadow.color)),
          E.updaters))
            t.init(this);
          for (let t of E.movers)
            null === (m = t.init) || void 0 === m || m.call(t, this);
          for (let [, t] of (null == L ||
            null === (o = L.particleInit) ||
            void 0 === o ||
            o.call(L, w, this),
          null == F ||
            null === (l = F.particleInit) ||
            void 0 === l ||
            l.call(F, w, this),
          w.plugins))
            null === (y = t.particleCreated) || void 0 === y || y.call(t, this);
        }
        isInsideCanvas() {
          let t = this.getRadius(),
            e = this.container.canvas.size,
            i = this.position;
          return (
            i.x >= -t && i.y >= -t && i.y <= e.height + t && i.x <= e.width + t
          );
        }
        isVisible() {
          return !this.destroyed && !this.spawning && this.isInsideCanvas();
        }
        reset() {
          for (let e of this.container.particles.updaters) {
            var t;
            null === (t = e.reset) || void 0 === t || t.call(e, this);
          }
        }
        constructor(t, e) {
          var i = this;
          (this.container = e),
            (this._calcPosition = function (t, e, s) {
              var n, a, r, o;
              let l =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 0;
              for (let [, n] of t.plugins) {
                let t =
                  void 0 !== n.particlePosition
                    ? n.particlePosition(e, i)
                    : void 0;
                if (t) return f.U.create(t.x, t.y, s);
              }
              let h = t.canvas.size,
                c = (0, v.mC)({ size: h, position: e }),
                d = f.U.create(c.x, c.y, s),
                u = i.getRadius(),
                p = i.options.move.outModes,
                _ = (e) => {
                  m({
                    outMode: e,
                    checkModes: ["bounce"],
                    coord: d.x,
                    maxCoord: t.canvas.size.width,
                    setCb: (t) => (d.x += t),
                    radius: u,
                  });
                },
                g = (e) => {
                  m({
                    outMode: e,
                    checkModes: ["bounce"],
                    coord: d.y,
                    maxCoord: t.canvas.size.height,
                    setCb: (t) => (d.y += t),
                    radius: u,
                  });
                };
              return (_(null !== (n = p.left) && void 0 !== n ? n : p.default),
              _(null !== (a = p.right) && void 0 !== a ? a : p.default),
              g(null !== (r = p.top) && void 0 !== r ? r : p.default),
              g(null !== (o = p.bottom) && void 0 !== o ? o : p.default),
              i._checkOverlap(d, l))
                ? i._calcPosition(t, void 0, s, l + 1)
                : d;
            }),
            (this._calculateVelocity = () => {
              let t = (0, v.lQ)(this.direction).copy(),
                e = this.options.move;
              if ("inside" === e.direction || "outside" === e.direction)
                return t;
              let i = (0, v.Id)((0, v.Gu)(e.angle.value)),
                s = (0, v.Id)((0, v.Gu)(e.angle.offset)),
                n = { left: s - 0.5 * i, right: s + 0.5 * i };
              return (
                e.straight ||
                  (t.angle += (0, v.vd)((0, v.Cs)(n.left, n.right))),
                e.random &&
                  "number" == typeof e.speed &&
                  (t.length *= (0, v.sZ)()),
                t
              );
            }),
            (this._checkOverlap = function (t) {
              let e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                n = i.options.collisions,
                a = i.getRadius();
              if (!n.enable) return !1;
              let r = n.overlap;
              if (r.enable) return !1;
              let o = r.retries;
              if (o >= 0 && e > o)
                throw Error(
                  "".concat(
                    s.gK,
                    " particle is overlapping and can't be placed"
                  )
                );
              return !!i.container.particles.find(
                (e) => (0, v.Sp)(t, e.position) < a + e.getRadius()
              );
            }),
            (this._getRollColor = (t) => {
              var e;
              if (!t || !this.roll || (!this.backColor && !this.roll.alter))
                return t;
              let i = this.roll.horizontal && this.roll.vertical ? 2 : 1,
                s = this.roll.horizontal ? 0.5 * Math.PI : 0;
              return Math.floor(
                ((null !== (e = this.roll.angle) && void 0 !== e ? e : 0) + s) /
                  (Math.PI / i)
              ) % 2
                ? this.backColor
                  ? this.backColor
                  : this.roll.alter
                  ? (0, a.PL)(t, this.roll.alter.type, this.roll.alter.value)
                  : t
                : t;
            }),
            (this._initPosition = (t) => {
              var e, i;
              let s = this.container,
                a = (0, v.Gu)(this.options.zIndex.value);
              (this.position = this._calcPosition(
                s,
                t,
                (0, v.uZ)(a, 0, s.zLayers)
              )),
                (this.initialPosition = this.position.copy());
              let r = s.canvas.size;
              switch (
                ((this.moveCenter = {
                  ...(0, n.bt)(this.options.move.center, r),
                  radius:
                    null !== (e = this.options.move.center.radius) &&
                    void 0 !== e
                      ? e
                      : 0,
                  mode:
                    null !== (i = this.options.move.center.mode) && void 0 !== i
                      ? i
                      : "percent",
                }),
                (this.direction = (0, v.Gk)(
                  this.options.move.direction,
                  this.position,
                  this.moveCenter
                )),
                this.options.move.direction)
              ) {
                case "inside":
                  this.outType = "inside";
                  break;
                case "outside":
                  this.outType = "outside";
              }
              this.offset = f.O.origin;
            }),
            (this._engine = t);
        }
      }
      class w {
        constructor(t, e) {
          (this.position = t), (this.particle = e);
        }
      }
      var b = i(283);
      class z {
        insert(t) {
          return (
            !!this.rectangle.contains(t.position) &&
            (this._points.length < this.capacity
              ? (this._points.push(t), !0)
              : (this._divided || this._subdivide(),
                this._subs.some((e) => e.insert(t))))
          );
        }
        query(t, e) {
          let i = [];
          if (!t.intersects(this.rectangle)) return [];
          for (let s of this._points)
            (!t.contains(s.position) &&
              (0, v.Sp)(t.position, s.position) > s.particle.getRadius() &&
              (!e || e(s.particle))) ||
              i.push(s.particle);
          if (this._divided) for (let s of this._subs) i.push(...s.query(t, e));
          return i;
        }
        queryCircle(t, e, i) {
          return this.query(new b.Cd(t.x, t.y, e), i);
        }
        queryRectangle(t, e, i) {
          return this.query(new b.Ae(t.x, t.y, e.width, e.height), i);
        }
        constructor(t, e) {
          (this.rectangle = t),
            (this.capacity = e),
            (this._subdivide = () => {
              let { x: t, y: e } = this.rectangle.position,
                { width: i, height: s } = this.rectangle.size,
                { capacity: n } = this;
              for (let a = 0; a < 4; a++) {
                let r = a % 2;
                this._subs.push(
                  new z(
                    new b.Ae(
                      t + 0.5 * i * r,
                      e + 0.5 * s * (Math.round(0.5 * a) - r),
                      0.5 * i,
                      0.5 * s
                    ),
                    n
                  )
                );
              }
              this._divided = !0;
            }),
            (this._points = []),
            (this._divided = !1),
            (this._subs = []);
        }
      }
      let C = (t) => {
        let { height: e, width: i } = t;
        return new b.Ae(-0.25 * i, -0.25 * e, 1.5 * i, 1.5 * e);
      };
      class k {
        get count() {
          return this._array.length;
        }
        addManualParticles() {
          let t = this._container;
          for (let e of t.actualOptions.manualParticles)
            this.addParticle(
              e.position ? (0, n.bt)(e.position, t.canvas.size) : void 0,
              e.options
            );
        }
        addParticle(t, e, i, s) {
          var n;
          let a = this._container.actualOptions.particles.number.limit,
            r =
              void 0 === i
                ? this._limit
                : null !== (n = this._groupLimits.get(i)) && void 0 !== n
                ? n
                : this._limit,
            o = this.count;
          if (r > 0) {
            if ("delete" === a.mode) {
              let t = o + 1 - r;
              t > 0 && this.removeQuantity(t);
            } else if ("wait" === a.mode && o >= r) return;
          }
          return this._pushParticle(t, e, i, s);
        }
        clear() {
          (this._array = []),
            (this._zArray = []),
            (this._pluginsInitialized = !1);
        }
        destroy() {
          (this._array = []),
            (this._zArray = []),
            (this.movers = []),
            (this.updaters = []);
        }
        draw(t) {
          let e = this._container,
            i = e.canvas;
          for (let [, s] of (i.clear(), this.update(t), e.plugins))
            i.drawPlugin(s, t);
          for (let e of this._zArray) e.draw(t);
        }
        filter(t) {
          return this._array.filter(t);
        }
        find(t) {
          return this._array.find(t);
        }
        get(t) {
          return this._array[t];
        }
        handleClickMode(t) {
          this._interactionManager.handleClickMode(t);
        }
        async init() {
          let t = this._container,
            e = t.actualOptions;
          (this._lastZIndex = 0),
            (this._needsSort = !1),
            await this.initPlugins();
          let i = !1;
          for (let [, e] of t.plugins)
            if (
              (void 0 !== e.particlesInitialization &&
                (i = e.particlesInitialization()),
              i)
            )
              break;
          if ((this.addManualParticles(), !i)) {
            let t = e.particles,
              i = t.groups;
            for (let e in i) {
              var s;
              let n = i[e];
              for (
                let i = this.count, a = 0;
                a <
                  (null === (s = n.number) || void 0 === s
                    ? void 0
                    : s.value) && i < t.number.value;
                i++, a++
              )
                this.addParticle(void 0, n, e);
            }
            for (let e = this.count; e < t.number.value; e++)
              this.addParticle();
          }
        }
        async initPlugins() {
          if (this._pluginsInitialized) return;
          let t = this._container;
          for (let [, e] of ((this.movers = await this._engine.getMovers(
            t,
            !0
          )),
          (this.updaters = await this._engine.getUpdaters(t, !0)),
          await this._interactionManager.init(),
          t.pathGenerators))
            e.init(t);
        }
        push(t, e, i, s) {
          for (let n = 0; n < t; n++)
            this.addParticle(null == e ? void 0 : e.position, i, s);
        }
        async redraw() {
          this.clear(), await this.init(), this.draw({ value: 0, factor: 0 });
        }
        remove(t, e, i) {
          this.removeAt(this._array.indexOf(t), void 0, e, i);
        }
        removeAt(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
            i = arguments.length > 2 ? arguments[2] : void 0,
            s = arguments.length > 3 ? arguments[3] : void 0;
          if (t < 0 || t > this.count) return;
          let n = 0;
          for (let a = t; n < e && a < this.count; a++)
            this._removeParticle(a--, i, s) && n++;
        }
        removeQuantity(t, e) {
          this.removeAt(0, t, e);
        }
        setDensity() {
          let t = this._container.actualOptions,
            e = t.particles.groups;
          for (let t in e) this._applyDensity(e[t], 0, t);
          this._applyDensity(t.particles, t.manualParticles.length);
        }
        setLastZIndex(t) {
          (this._lastZIndex = t),
            (this._needsSort = this._needsSort || this._lastZIndex < t);
        }
        setResizeFactor(t) {
          this._resizeFactor = t;
        }
        update(t) {
          var e, i;
          let s = this._container,
            n = new Set();
          for (let [, t] of ((this.quadTree = new z(C(s.canvas.size), 4)),
          s.pathGenerators))
            t.update();
          for (let [, i] of s.plugins)
            null === (e = i.update) || void 0 === e || e.call(i, t);
          let a = this._resizeFactor;
          for (let e of this._array) {
            for (let [, s] of (a &&
              !e.ignoresResizeRatio &&
              ((e.position.x *= a.width),
              (e.position.y *= a.height),
              (e.initialPosition.x *= a.width),
              (e.initialPosition.y *= a.height)),
            (e.ignoresResizeRatio = !1),
            this._interactionManager.reset(e),
            this._container.plugins)) {
              if (e.destroyed) break;
              null === (i = s.particleUpdate) ||
                void 0 === i ||
                i.call(s, e, t);
            }
            for (let i of this.movers) i.isEnabled(e) && i.move(e, t);
            if (e.destroyed) {
              n.add(e);
              continue;
            }
            this.quadTree.insert(new w(e.getPosition(), e));
          }
          if (n.size) {
            let t = (t) => !n.has(t);
            for (let e of ((this._array = this.filter(t)),
            (this._zArray = this._zArray.filter(t)),
            n))
              this._engine.dispatchEvent("particleRemoved", {
                container: this._container,
                data: { particle: e },
              });
            this._addToPool(...n);
          }
          for (let e of (this._interactionManager.externalInteract(t),
          this._array)) {
            for (let i of this.updaters) i.update(e, t);
            e.destroyed ||
              e.spawning ||
              this._interactionManager.particlesInteract(e, t);
          }
          if ((delete this._resizeFactor, this._needsSort)) {
            let t = this._zArray;
            t.sort((t, e) => e.position.z - t.position.z || t.id - e.id),
              (this._lastZIndex = t[t.length - 1].position.z),
              (this._needsSort = !1);
          }
        }
        constructor(t, e) {
          var i = this;
          (this._addToPool = function () {
            for (var t = arguments.length, e = Array(t), s = 0; s < t; s++)
              e[s] = arguments[s];
            for (let t of e) i._pool.push(t);
          }),
            (this._applyDensity = (t, e, i) => {
              var s;
              let n = t.number;
              if (
                !(null === (s = t.number.density) || void 0 === s
                  ? void 0
                  : s.enable)
              ) {
                void 0 === i
                  ? (this._limit = n.limit.value)
                  : n.limit && this._groupLimits.set(i, n.limit.value);
                return;
              }
              let a = this._initDensityFactor(n.density),
                r = n.value,
                o = n.limit.value > 0 ? n.limit.value : r,
                l = Math.min(r, o) * a + e,
                h = Math.min(
                  this.count,
                  this.filter((t) => t.group === i).length
                );
              void 0 === i
                ? (this._limit = n.limit.value * a)
                : this._groupLimits.set(i, n.limit.value * a),
                h < l
                  ? this.push(Math.abs(l - h), void 0, t, i)
                  : h > l && this.removeQuantity(h - l, i);
            }),
            (this._initDensityFactor = (t) => {
              let e = this._container;
              if (!e.canvas.element || !t.enable) return 1;
              let i = e.canvas.element,
                s = e.retina.pixelRatio;
              return (i.width * i.height) / (t.height * t.width * s ** 2);
            }),
            (this._pushParticle = (t, e, i, a) => {
              try {
                let s = this._pool.pop();
                s || (s = new y(this._engine, this._container)),
                  s.init(this._nextId, t, e, i);
                let n = !0;
                if ((a && (n = a(s)), !n)) return;
                return (
                  this._array.push(s),
                  this._zArray.push(s),
                  this._nextId++,
                  this._engine.dispatchEvent("particleAdded", {
                    container: this._container,
                    data: { particle: s },
                  }),
                  s
                );
              } catch (t) {
                (0, n.jl)().warning(
                  "".concat(s.gK, " adding particle: ").concat(t)
                );
              }
            }),
            (this._removeParticle = (t, e, i) => {
              let s = this._array[t];
              if (!s || s.group !== e) return !1;
              let n = this._zArray.indexOf(s);
              return (
                this._array.splice(t, 1),
                this._zArray.splice(n, 1),
                s.destroy(i),
                this._engine.dispatchEvent("particleRemoved", {
                  container: this._container,
                  data: { particle: s },
                }),
                this._addToPool(s),
                !0
              );
            }),
            (this._engine = t),
            (this._container = e),
            (this._nextId = 0),
            (this._array = []),
            (this._zArray = []),
            (this._pool = []),
            (this._limit = 0),
            (this._groupLimits = new Map()),
            (this._needsSort = !1),
            (this._lastZIndex = 0),
            (this._interactionManager = new p(t, e)),
            (this._pluginsInitialized = !1);
          let a = e.canvas.size;
          (this.quadTree = new z(C(a), 4)),
            (this.movers = []),
            (this.updaters = []);
        }
      }
      class P {
        init() {
          let t = this.container,
            e = t.actualOptions;
          (this.pixelRatio =
            !e.detectRetina || (0, n.Kr)() ? 1 : window.devicePixelRatio),
            (this.reduceFactor = 1);
          let i = this.pixelRatio,
            s = t.canvas;
          if (s.element) {
            let t = s.element;
            (s.size.width = t.offsetWidth * i),
              (s.size.height = t.offsetHeight * i);
          }
          let a = e.particles,
            r = a.move;
          (this.maxSpeed = (0, v.Gu)(r.gravity.maxSpeed) * i),
            (this.sizeAnimationSpeed = (0, v.Gu)(a.size.animation.speed) * i);
        }
        initParticle(t) {
          let e = t.options,
            i = this.pixelRatio,
            s = e.move,
            n = s.distance,
            a = t.retina;
          (a.moveDrift = (0, v.Gu)(s.drift) * i),
            (a.moveSpeed = (0, v.Gu)(s.speed) * i),
            (a.sizeAnimationSpeed = (0, v.Gu)(e.size.animation.speed) * i);
          let r = a.maxDistance;
          (r.horizontal = void 0 !== n.horizontal ? n.horizontal * i : void 0),
            (r.vertical = void 0 !== n.vertical ? n.vertical * i : void 0),
            (a.maxSpeed = (0, v.Gu)(s.gravity.maxSpeed) * i);
        }
        constructor(t) {
          (this.container = t), (this.pixelRatio = 1), (this.reduceFactor = 1);
        }
      }
      function x(t) {
        return t && !t.destroyed;
      }
      function O(t, e) {
        for (
          var i = arguments.length, s = Array(i > 2 ? i - 2 : 0), n = 2;
          n < i;
          n++
        )
          s[n - 2] = arguments[n];
        let a = new u.E(t, e);
        return (0, g.h)(a, ...s), a;
      }
      class T {
        get animationStatus() {
          return !this._paused && !this.pageHidden && x(this);
        }
        get options() {
          return this._options;
        }
        get sourceOptions() {
          return this._sourceOptions;
        }
        addClickHandler(t) {
          if (!x(this)) return;
          let e = this.interactivity.element;
          if (!e) return;
          let i = (e, i, s) => {
              if (!x(this)) return;
              let n = this.retina.pixelRatio,
                a = { x: i.x * n, y: i.y * n };
              t(e, this.particles.quadTree.queryCircle(a, s * n));
            },
            s = !1,
            n = !1;
          e.addEventListener("click", (t) => {
            if (!x(this)) return;
            let e = { x: t.offsetX || t.clientX, y: t.offsetY || t.clientY };
            i(t, e, 1);
          }),
            e.addEventListener("touchstart", () => {
              x(this) && ((s = !0), (n = !1));
            }),
            e.addEventListener("touchmove", () => {
              x(this) && (n = !0);
            }),
            e.addEventListener("touchend", (t) => {
              if (x(this)) {
                if (s && !n) {
                  let e = t.touches[t.touches.length - 1];
                  if (
                    !e &&
                    !(e = t.changedTouches[t.changedTouches.length - 1])
                  )
                    return;
                  let s = this.canvas.element,
                    n = s ? s.getBoundingClientRect() : void 0;
                  i(
                    t,
                    {
                      x: e.clientX - (n ? n.left : 0),
                      y: e.clientY - (n ? n.top : 0),
                    },
                    Math.max(e.radiusX, e.radiusY)
                  );
                }
                (s = !1), (n = !1);
              }
            }),
            e.addEventListener("touchcancel", () => {
              x(this) && ((s = !1), (n = !1));
            });
        }
        addLifeTime(t) {
          this._lifeTime += t;
        }
        addPath(t, e) {
          let i =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return (
            !(!x(this) || (!i && this.pathGenerators.has(t))) &&
            (this.pathGenerators.set(t, e), !0)
          );
        }
        alive() {
          return !this._duration || this._lifeTime <= this._duration;
        }
        destroy() {
          var t, e;
          if (!x(this)) return;
          for (let [, e] of (this.stop(),
          this.particles.destroy(),
          this.canvas.destroy(),
          this.effectDrawers))
            null === (t = e.destroy) || void 0 === t || t.call(e, this);
          for (let [, t] of this.shapeDrawers)
            null === (e = t.destroy) || void 0 === e || e.call(t, this);
          for (let t of this.effectDrawers.keys()) this.effectDrawers.delete(t);
          for (let t of this.shapeDrawers.keys()) this.shapeDrawers.delete(t);
          this._engine.clearPlugins(this), (this.destroyed = !0);
          let i = this._engine.dom(),
            s = i.findIndex((t) => t === this);
          s >= 0 && i.splice(s, 1),
            this._engine.dispatchEvent("containerDestroyed", {
              container: this,
            });
        }
        draw(t) {
          if (!x(this)) return;
          let e = t,
            i = (t) => {
              e && ((this._lastFrameTime = void 0), (e = !1)),
                this._nextFrame(t);
            };
          this._drawAnimationFrame = requestAnimationFrame((t) => i(t));
        }
        async export(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          for (let [, i] of this.plugins) {
            if (!i.export) continue;
            let s = await i.export(t, e);
            if (s.supported) return s.blob;
          }
          (0, n.jl)().error(
            ""
              .concat(s.gK, " - Export plugin with type ")
              .concat(t, " not found")
          );
        }
        handleClickMode(t) {
          if (x(this))
            for (let [, i] of (this.particles.handleClickMode(t),
            this.plugins)) {
              var e;
              null === (e = i.handleClickMode) || void 0 === e || e.call(i, t);
            }
        }
        async init() {
          var t, e, i, n;
          if (x(this)) {
            for (let t of this._engine.getSupportedEffects()) {
              let e = this._engine.getEffectDrawer(t);
              e && this.effectDrawers.set(t, e);
            }
            for (let t of this._engine.getSupportedShapes()) {
              let e = this._engine.getShapeDrawer(t);
              e && this.shapeDrawers.set(t, e);
            }
            for (let [t, e] of (await this.particles.initPlugins(),
            (this._options = O(
              this._engine,
              this,
              this._initialSourceOptions,
              this.sourceOptions
            )),
            (this.actualOptions = O(this._engine, this, this._options)),
            await this._engine.getAvailablePlugins(this)))
              this.plugins.set(t, e);
            for (let [, e] of (this.retina.init(),
            await this.canvas.init(),
            this.updateActualOptions(),
            this.canvas.initBackground(),
            this.canvas.resize(),
            (this.zLayers = this.actualOptions.zLayers),
            (this._duration = (0, v.Gu)(this.actualOptions.duration) * s.X5),
            (this._delay = (0, v.Gu)(this.actualOptions.delay) * s.X5),
            (this._lifeTime = 0),
            (this.fpsLimit =
              this.actualOptions.fpsLimit > 0
                ? this.actualOptions.fpsLimit
                : 120),
            (this._smooth = this.actualOptions.smooth),
            this.effectDrawers))
              await (null === (t = e.init) || void 0 === t
                ? void 0
                : t.call(e, this));
            for (let [, t] of this.shapeDrawers)
              await (null === (e = t.init) || void 0 === e
                ? void 0
                : e.call(t, this));
            for (let [, t] of this.plugins)
              await (null === (i = t.init) || void 0 === i
                ? void 0
                : i.call(t));
            for (let [, t] of (this._engine.dispatchEvent("containerInit", {
              container: this,
            }),
            await this.particles.init(),
            this.particles.setDensity(),
            this.plugins))
              null === (n = t.particlesSetup) || void 0 === n || n.call(t);
            this._engine.dispatchEvent("particlesSetup", { container: this });
          }
        }
        async loadTheme(t) {
          x(this) && ((this._currentTheme = t), await this.refresh());
        }
        pause() {
          if (
            x(this) &&
            (void 0 !== this._drawAnimationFrame &&
              (cancelAnimationFrame(this._drawAnimationFrame),
              delete this._drawAnimationFrame),
            !this._paused)
          ) {
            for (let [, e] of this.plugins) {
              var t;
              null === (t = e.pause) || void 0 === t || t.call(e);
            }
            this.pageHidden || (this._paused = !0),
              this._engine.dispatchEvent("containerPaused", {
                container: this,
              });
          }
        }
        play(t) {
          if (!x(this)) return;
          let e = this._paused || t;
          if (this._firstStart && !this.actualOptions.autoPlay) {
            this._firstStart = !1;
            return;
          }
          if ((this._paused && (this._paused = !1), e))
            for (let [, t] of this.plugins) t.play && t.play();
          this._engine.dispatchEvent("containerPlay", { container: this }),
            this.draw(null != e && e);
        }
        async refresh() {
          if (x(this)) return this.stop(), this.start();
        }
        async reset() {
          if (x(this))
            return (
              (this._initialSourceOptions = void 0),
              (this._options = O(this._engine, this)),
              (this.actualOptions = O(this._engine, this, this._options)),
              this.refresh()
            );
        }
        async start() {
          x(this) &&
            !this.started &&
            (await this.init(),
            (this.started = !0),
            await new Promise((t) => {
              let e = async () => {
                for (let [, t] of (this._eventListeners.addListeners(),
                this.interactivity.element instanceof HTMLElement &&
                  this._intersectionObserver &&
                  this._intersectionObserver.observe(
                    this.interactivity.element
                  ),
                this.plugins)) {
                  var e;
                  await (null === (e = t.start) || void 0 === e
                    ? void 0
                    : e.call(t));
                }
                this._engine.dispatchEvent("containerStarted", {
                  container: this,
                }),
                  this.play(),
                  t();
              };
              this._delayTimeout = setTimeout(() => void e(), this._delay);
            }));
        }
        stop() {
          if (x(this) && this.started) {
            for (let [, e] of (this._delayTimeout &&
              (clearTimeout(this._delayTimeout), delete this._delayTimeout),
            (this._firstStart = !0),
            (this.started = !1),
            this._eventListeners.removeListeners(),
            this.pause(),
            this.particles.clear(),
            this.canvas.stop(),
            this.interactivity.element instanceof HTMLElement &&
              this._intersectionObserver &&
              this._intersectionObserver.unobserve(this.interactivity.element),
            this.plugins)) {
              var t;
              null === (t = e.stop) || void 0 === t || t.call(e);
            }
            for (let t of this.plugins.keys()) this.plugins.delete(t);
            (this._sourceOptions = this._options),
              this._engine.dispatchEvent("containerStopped", {
                container: this,
              });
          }
        }
        updateActualOptions() {
          this.actualOptions.responsive = [];
          let t = this.actualOptions.setResponsive(
            this.canvas.size.width,
            this.retina.pixelRatio,
            this._options
          );
          return (
            this.actualOptions.setTheme(this._currentTheme),
            this._responsiveMaxWidth !== t &&
              ((this._responsiveMaxWidth = t), !0)
          );
        }
        constructor(t, e, i) {
          (this._intersectionManager = (t) => {
            if (x(this) && this.actualOptions.pauseOnOutsideViewport)
              for (let e of t)
                e.target === this.interactivity.element &&
                  (e.isIntersecting ? this.play() : this.pause());
          }),
            (this._nextFrame = (t) => {
              try {
                var e;
                if (
                  !this._smooth &&
                  void 0 !== this._lastFrameTime &&
                  t < this._lastFrameTime + s.X5 / this.fpsLimit
                ) {
                  this.draw(!1);
                  return;
                }
                (null !== (e = this._lastFrameTime) && void 0 !== e) ||
                  (this._lastFrameTime = t);
                let i = (function (t) {
                  let e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 60,
                    i =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                  return { value: t, factor: i ? 60 / e : (60 * t) / s.X5 };
                })(t - this._lastFrameTime, this.fpsLimit, this._smooth);
                if (
                  (this.addLifeTime(i.value),
                  (this._lastFrameTime = t),
                  i.value > s.X5)
                ) {
                  this.draw(!1);
                  return;
                }
                if ((this.particles.draw(i), !this.alive())) {
                  this.destroy();
                  return;
                }
                this.animationStatus && this.draw(!1);
              } catch (t) {
                (0, n.jl)().error("".concat(s.gK, " in animation loop"), t);
              }
            }),
            (this._engine = t),
            (this.id = Symbol(e)),
            (this.fpsLimit = 120),
            (this._smooth = !1),
            (this._delay = 0),
            (this._duration = 0),
            (this._lifeTime = 0),
            (this._firstStart = !0),
            (this.started = !1),
            (this.destroyed = !1),
            (this._paused = !0),
            (this._lastFrameTime = 0),
            (this.zLayers = 100),
            (this.pageHidden = !1),
            (this._sourceOptions = i),
            (this._initialSourceOptions = i),
            (this.retina = new P(this)),
            (this.canvas = new l(this)),
            (this.particles = new k(this._engine, this)),
            (this.pathGenerators = new Map()),
            (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
            (this.plugins = new Map()),
            (this.effectDrawers = new Map()),
            (this.shapeDrawers = new Map()),
            (this._options = O(this._engine, this)),
            (this.actualOptions = O(this._engine, this)),
            (this._eventListeners = new d(this)),
            (this._intersectionObserver = (0, n.NM)((t) =>
              this._intersectionManager(t)
            )),
            this._engine.dispatchEvent("containerBuilt", { container: this });
        }
      }
    },
  },
]);
