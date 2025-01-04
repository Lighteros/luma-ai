"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9754],
  {
    9471: function (t, e, i) {
      i.d(e, {
        $o: function () {
          return h;
        },
        G1: function () {
          return a;
        },
        QL: function () {
          return p;
        },
        Re: function () {
          return u;
        },
        VH: function () {
          return d;
        },
        Wt: function () {
          return l;
        },
        X5: function () {
          return y;
        },
        YU: function () {
          return n;
        },
        ZL: function () {
          return r;
        },
        aM: function () {
          return o;
        },
        gK: function () {
          return m;
        },
        rR: function () {
          return f;
        },
        tZ: function () {
          return v;
        },
        vq: function () {
          return g;
        },
        zX: function () {
          return c;
        },
        zw: function () {
          return s;
        },
      });
      let n = "generated",
        r = "pointerdown",
        s = "pointerup",
        o = "pointerleave",
        a = "pointerout",
        l = "pointermove",
        u = "touchstart",
        h = "touchend",
        c = "touchmove",
        d = "touchcancel",
        f = "resize",
        p = "visibilitychange",
        m = "tsParticles - Error",
        v = 100,
        g = 0.5,
        y = 1e3;
    },
    283: function (t, e, i) {
      i.d(e, {
        Ae: function () {
          return o;
        },
        Cd: function () {
          return s;
        },
      });
      var n = i(3180);
      class r {
        constructor(t, e, i) {
          (this.position = { x: t, y: e }), (this.type = i);
        }
      }
      class s extends r {
        contains(t) {
          return (0, n.Sp)(t, this.position) <= this.radius;
        }
        intersects(t) {
          let e = this.position,
            i = t.position,
            n = { x: Math.abs(i.x - e.x), y: Math.abs(i.y - e.y) },
            r = this.radius;
          if (t instanceof s || "circle" === t.type)
            return r + t.radius > Math.sqrt(n.x ** 2 + n.y ** 2);
          if (t instanceof o || "rectangle" === t.type) {
            let { width: e, height: i } = t.size;
            return (
              Math.pow(n.x - e, 2) + Math.pow(n.y - i, 2) <= r ** 2 ||
              (n.x <= r + e && n.y <= r + i) ||
              n.x <= e ||
              n.y <= i
            );
          }
          return !1;
        }
        constructor(t, e, i) {
          super(t, e, "circle"), (this.radius = i);
        }
      }
      class o extends r {
        contains(t) {
          let e = this.size.width,
            i = this.size.height,
            n = this.position;
          return t.x >= n.x && t.x <= n.x + e && t.y >= n.y && t.y <= n.y + i;
        }
        intersects(t) {
          if (t instanceof s) return t.intersects(this);
          let e = this.size.width,
            i = this.size.height,
            n = this.position,
            r = t.position,
            a = t instanceof o ? t.size : { width: 0, height: 0 },
            l = a.width,
            u = a.height;
          return (
            r.x < n.x + e && r.x + l > n.x && r.y < n.y + i && r.y + u > n.y
          );
        }
        constructor(t, e, i, n) {
          super(t, e, "rectangle"), (this.size = { height: n, width: i });
        }
      }
    },
    9890: function (t, e, i) {
      i.d(e, {
        O: function () {
          return a;
        },
        U: function () {
          return o;
        },
      });
      var n = i(9471),
        r = i(2455);
      let s = { x: 0, y: 0, z: 0 };
      class o {
        static get origin() {
          return o.create(s.x, s.y, s.z);
        }
        get angle() {
          return Math.atan2(this.y, this.x);
        }
        set angle(t) {
          this._updateFromAngle(t, this.length);
        }
        get length() {
          return Math.sqrt(this.getLengthSq());
        }
        set length(t) {
          this._updateFromAngle(this.angle, t);
        }
        static clone(t) {
          return o.create(t.x, t.y, t.z);
        }
        static create(t, e, i) {
          return new o(t, e, i);
        }
        add(t) {
          return o.create(this.x + t.x, this.y + t.y, this.z + t.z);
        }
        addTo(t) {
          (this.x += t.x), (this.y += t.y), (this.z += t.z);
        }
        copy() {
          return o.clone(this);
        }
        distanceTo(t) {
          return this.sub(t).length;
        }
        distanceToSq(t) {
          return this.sub(t).getLengthSq();
        }
        div(t) {
          return o.create(this.x / t, this.y / t, this.z / t);
        }
        divTo(t) {
          (this.x /= t), (this.y /= t), (this.z /= t);
        }
        getLengthSq() {
          return this.x ** 2 + this.y ** 2;
        }
        mult(t) {
          return o.create(this.x * t, this.y * t, this.z * t);
        }
        multTo(t) {
          (this.x *= t), (this.y *= t), (this.z *= t);
        }
        normalize() {
          let t = this.length;
          0 != t && this.multTo(1 / t);
        }
        rotate(t) {
          return o.create(
            this.x * Math.cos(t) - this.y * Math.sin(t),
            this.x * Math.sin(t) + this.y * Math.cos(t),
            s.z
          );
        }
        setTo(t) {
          (this.x = t.x), (this.y = t.y), (this.z = t.z ? t.z : s.z);
        }
        sub(t) {
          return o.create(this.x - t.x, this.y - t.y, this.z - t.z);
        }
        subFrom(t) {
          (this.x -= t.x), (this.y -= t.y), (this.z -= t.z);
        }
        constructor(t, e, i) {
          if (
            ((this._updateFromAngle = (t, e) => {
              (this.x = Math.cos(t) * e), (this.y = Math.sin(t) * e);
            }),
            !(0, r.hj)(t) && t)
          )
            (this.x = t.x), (this.y = t.y), (this.z = t.z ? t.z : s.z);
          else if (void 0 !== t && void 0 !== e)
            (this.x = t), (this.y = e), (this.z = null != i ? i : s.z);
          else
            throw Error("".concat(n.gK, " Vector3d not initialized correctly"));
        }
      }
      class a extends o {
        static get origin() {
          return a.create(s.x, s.y);
        }
        static clone(t) {
          return a.create(t.x, t.y);
        }
        static create(t, e) {
          return new a(t, e);
        }
        constructor(t, e) {
          super(t, e, s.z);
        }
      }
    },
    5787: function (t, e, i) {
      i.d(e, {
        R: function () {
          return o;
        },
      });
      var n = i(2455),
        r = i(522),
        s = i(1330);
      class o extends s.O {
        static create(t, e) {
          let i = new o();
          return (
            i.load(t),
            void 0 !== e &&
              ((0, n.HD)(e) || (0, n.kJ)(e) ? i.load({ value: e }) : i.load(e)),
            i
          );
        }
        load(t) {
          if ((super.load(t), !t)) return;
          let e = t.animation;
          void 0 !== e &&
            (void 0 !== e.enable
              ? this.animation.h.load(e)
              : this.animation.load(t.animation));
        }
        constructor() {
          super(), (this.animation = new r.h());
        }
      }
    },
    2639: function (t, e, i) {
      i.d(e, {
        B: function () {
          return s;
        },
        P: function () {
          return r;
        },
      });
      var n = i(3180);
      class r {
        load(t) {
          t &&
            (void 0 !== t.count && (this.count = (0, n.Cs)(t.count)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed && (this.speed = (0, n.Cs)(t.speed)),
            void 0 !== t.decay && (this.decay = (0, n.Cs)(t.decay)),
            void 0 !== t.delay && (this.delay = (0, n.Cs)(t.delay)),
            void 0 !== t.sync && (this.sync = t.sync));
        }
        constructor() {
          (this.count = 0),
            (this.enable = !1),
            (this.speed = 1),
            (this.decay = 0),
            (this.delay = 0),
            (this.sync = !1);
        }
      }
      class s extends r {
        load(t) {
          super.load(t),
            t &&
              (void 0 !== t.mode && (this.mode = t.mode),
              void 0 !== t.startValue && (this.startValue = t.startValue));
        }
        constructor() {
          super(), (this.mode = "auto"), (this.startValue = "random");
        }
      }
    },
    3740: function (t, e, i) {
      i.d(e, {
        y: function () {
          return s;
        },
      });
      var n = i(2639),
        r = i(3180);
      class s extends n.P {
        load(t) {
          super.load(t),
            t && void 0 !== t.offset && (this.offset = (0, r.Cs)(t.offset));
        }
        constructor() {
          super(), (this.offset = 0), (this.sync = !0);
        }
      }
    },
    522: function (t, e, i) {
      i.d(e, {
        h: function () {
          return r;
        },
      });
      var n = i(3740);
      class r {
        load(t) {
          t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l));
        }
        constructor() {
          (this.h = new n.y()), (this.s = new n.y()), (this.l = new n.y());
        }
      }
    },
    4578: function (t, e, i) {
      i.d(e, {
        z: function () {
          return u;
        },
      });
      class n {
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.mode && (this.mode = t.mode));
        }
        constructor() {
          (this.enable = !1), (this.mode = []);
        }
      }
      class r {
        load(t) {
          t &&
            (void 0 !== t.selectors && (this.selectors = t.selectors),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.type && (this.type = t.type));
        }
        constructor() {
          (this.selectors = []),
            (this.enable = !1),
            (this.mode = []),
            (this.type = "circle");
        }
      }
      class s {
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.force && (this.force = t.force),
            void 0 !== t.smooth && (this.smooth = t.smooth));
        }
        constructor() {
          (this.enable = !1), (this.force = 2), (this.smooth = 10);
        }
      }
      class o {
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.mode && (this.mode = t.mode),
            this.parallax.load(t.parallax));
        }
        constructor() {
          (this.enable = !1), (this.mode = []), (this.parallax = new s());
        }
      }
      class a {
        load(t) {
          void 0 !== t &&
            (void 0 !== t.delay && (this.delay = t.delay),
            void 0 !== t.enable && (this.enable = t.enable));
        }
        constructor() {
          (this.delay = 0.5), (this.enable = !0);
        }
      }
      var l = i(4864);
      class u {
        load(t) {
          if (!t) return;
          this.onClick.load(t.onClick);
          let e = t.onDiv;
          void 0 !== e &&
            (this.onDiv = (0, l.KH)(e, (t) => {
              let e = new r();
              return e.load(t), e;
            })),
            this.onHover.load(t.onHover),
            this.resize.load(t.resize);
        }
        constructor() {
          (this.onClick = new n()),
            (this.onDiv = new r()),
            (this.onHover = new o()),
            (this.resize = new a());
        }
      }
    },
    7802: function (t, e, i) {
      i.d(e, {
        o: function () {
          return s;
        },
      });
      var n = i(4578);
      class r {
        load(t) {
          if (!t || !this._container) return;
          let e = this._engine.interactors.get(this._container);
          if (e)
            for (let i of e) i.loadModeOptions && i.loadModeOptions(this, t);
        }
        constructor(t, e) {
          (this._engine = t), (this._container = e);
        }
      }
      class s {
        load(t) {
          if (!t) return;
          let e = t.detectsOn;
          void 0 !== e && (this.detectsOn = e),
            this.events.load(t.events),
            this.modes.load(t.modes);
        }
        constructor(t, e) {
          (this.detectsOn = "window"),
            (this.events = new n.z()),
            (this.modes = new r(t, e));
        }
      }
    },
    8066: function (t, e, i) {
      i.d(e, {
        h: function () {
          return r;
        },
      });
      var n = i(4864);
      class r {
        load(t) {
          if (t) {
            if (t.position) {
              var e, i, r;
              this.position = {
                x: null !== (e = t.position.x) && void 0 !== e ? e : 50,
                y: null !== (i = t.position.y) && void 0 !== i ? i : 50,
                mode:
                  null !== (r = t.position.mode) && void 0 !== r
                    ? r
                    : "percent",
              };
            }
            t.options && (this.options = (0, n.ZB)({}, t.options));
          }
        }
      }
    },
    8830: function (t, e, i) {
      i.d(e, {
        E: function () {
          return v;
        },
      });
      var n = i(4864),
        r = i(1330);
      class s {
        load(t) {
          t &&
            (void 0 !== t.color &&
              (this.color = r.O.create(this.color, t.color)),
            void 0 !== t.image && (this.image = t.image),
            void 0 !== t.position && (this.position = t.position),
            void 0 !== t.repeat && (this.repeat = t.repeat),
            void 0 !== t.size && (this.size = t.size),
            void 0 !== t.opacity && (this.opacity = t.opacity));
        }
        constructor() {
          (this.color = new r.O()),
            (this.color.value = ""),
            (this.image = ""),
            (this.position = ""),
            (this.repeat = ""),
            (this.size = ""),
            (this.opacity = 1);
        }
      }
      class o {
        load(t) {
          t &&
            (void 0 !== t.color &&
              (this.color = r.O.create(this.color, t.color)),
            void 0 !== t.image && (this.image = t.image),
            void 0 !== t.opacity && (this.opacity = t.opacity));
        }
        constructor() {
          this.opacity = 1;
        }
      }
      var a = i(2455);
      class l {
        load(t) {
          if (t) {
            if (
              (void 0 !== t.composite && (this.composite = t.composite),
              void 0 !== t.cover)
            ) {
              let e = t.cover,
                i = (0, a.HD)(t.cover) ? { color: t.cover } : t.cover;
              this.cover.load(
                void 0 !== e.color || void 0 !== e.image ? e : { color: i }
              );
            }
            void 0 !== t.enable && (this.enable = t.enable);
          }
        }
        constructor() {
          (this.composite = "destination-out"),
            (this.cover = new o()),
            (this.enable = !1);
        }
      }
      class u {
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.zIndex && (this.zIndex = t.zIndex));
        }
        constructor() {
          (this.enable = !0), (this.zIndex = 0);
        }
      }
      var h = i(7802),
        c = i(8066),
        d = i(9762),
        f = i(6431),
        p = i(9687),
        m = i(3180);
      class v {
        load(t) {
          var e, i;
          if (!t) return;
          void 0 !== t.preset &&
            (0, n.KH)(t.preset, (t) => this._importPreset(t)),
            void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
            void 0 !== t.clear && (this.clear = t.clear),
            void 0 !== t.key && (this.key = t.key),
            void 0 !== t.name && (this.name = t.name),
            void 0 !== t.delay && (this.delay = (0, m.Cs)(t.delay));
          let r = t.detectRetina;
          void 0 !== r && (this.detectRetina = r),
            void 0 !== t.duration && (this.duration = (0, m.Cs)(t.duration));
          let s = t.fpsLimit;
          void 0 !== s && (this.fpsLimit = s),
            void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur),
            void 0 !== t.pauseOnOutsideViewport &&
              (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport),
            void 0 !== t.zLayers && (this.zLayers = t.zLayers),
            this.background.load(t.background);
          let o = t.fullScreen;
          (0, a.jn)(o) ? (this.fullScreen.enable = o) : this.fullScreen.load(o),
            this.backgroundMask.load(t.backgroundMask),
            this.interactivity.load(t.interactivity),
            t.manualParticles &&
              (this.manualParticles = t.manualParticles.map((t) => {
                let e = new c.h();
                return e.load(t), e;
              })),
            this.particles.load(t.particles),
            (this.style = (0, n.ZB)(this.style, t.style)),
            this._engine.loadOptions(this, t),
            void 0 !== t.smooth && (this.smooth = t.smooth);
          let l = this._engine.interactors.get(this._container);
          if (l) for (let e of l) e.loadOptions && e.loadOptions(this, t);
          if (void 0 !== t.responsive)
            for (let e of t.responsive) {
              let t = new d.E();
              t.load(e), this.responsive.push(t);
            }
          if (
            (this.responsive.sort((t, e) => t.maxWidth - e.maxWidth),
            void 0 !== t.themes)
          )
            for (let e of t.themes) {
              let t = this.themes.find((t) => t.name === e.name);
              if (t) t.load(e);
              else {
                let t = new f.Q();
                t.load(e), this.themes.push(t);
              }
            }
          (this.defaultThemes.dark =
            null === (e = this._findDefaultTheme("dark")) || void 0 === e
              ? void 0
              : e.name),
            (this.defaultThemes.light =
              null === (i = this._findDefaultTheme("light")) || void 0 === i
                ? void 0
                : i.name);
        }
        setResponsive(t, e, i) {
          this.load(i);
          let n = this.responsive.find((i) =>
            "screen" === i.mode && screen
              ? i.maxWidth > screen.availWidth
              : i.maxWidth * e > t
          );
          return (
            this.load(null == n ? void 0 : n.options),
            null == n ? void 0 : n.maxWidth
          );
        }
        setTheme(t) {
          if (t) {
            let e = this.themes.find((e) => e.name === t);
            e && this.load(e.options);
          } else {
            let t = (0, n.HY)("(prefers-color-scheme: dark)"),
              e = t && t.matches,
              i = this._findDefaultTheme(e ? "dark" : "light");
            i && this.load(i.options);
          }
        }
        constructor(t, e) {
          (this._findDefaultTheme = (t) => {
            var e;
            return null !==
              (e = this.themes.find(
                (e) => e.default.value && e.default.mode === t
              )) && void 0 !== e
              ? e
              : this.themes.find(
                  (t) => t.default.value && "any" === t.default.mode
                );
          }),
            (this._importPreset = (t) => {
              this.load(this._engine.getPreset(t));
            }),
            (this._engine = t),
            (this._container = e),
            (this.autoPlay = !0),
            (this.background = new s()),
            (this.backgroundMask = new l()),
            (this.clear = !0),
            (this.defaultThemes = {}),
            (this.delay = 0),
            (this.fullScreen = new u()),
            (this.detectRetina = !0),
            (this.duration = 0),
            (this.fpsLimit = 120),
            (this.interactivity = new h.o(t, e)),
            (this.manualParticles = []),
            (this.particles = (0, p.x)(this._engine, this._container)),
            (this.pauseOnBlur = !0),
            (this.pauseOnOutsideViewport = !0),
            (this.responsive = []),
            (this.smooth = !1),
            (this.style = {}),
            (this.themes = []),
            (this.zLayers = 100);
        }
      }
    },
    1330: function (t, e, i) {
      i.d(e, {
        O: function () {
          return r;
        },
      });
      var n = i(2455);
      class r {
        static create(t, e) {
          let i = new r();
          return (
            i.load(t),
            void 0 !== e &&
              ((0, n.HD)(e) || (0, n.kJ)(e) ? i.load({ value: e }) : i.load(e)),
            i
          );
        }
        load(t) {
          (null == t ? void 0 : t.value) !== void 0 && (this.value = t.value);
        }
        constructor() {
          this.value = "";
        }
      }
    },
    7408: function (t, e, i) {
      i.d(e, {
        b: function () {
          return r;
        },
      });
      var n = i(8459);
      class r {
        load(t) {
          t &&
            (this.horizontal.load(t.horizontal),
            this.vertical.load(t.vertical));
        }
        constructor() {
          (this.horizontal = new n.u()), (this.vertical = new n.u());
        }
      }
    },
    8459: function (t, e, i) {
      i.d(e, {
        u: function () {
          return r;
        },
      });
      var n = i(3806);
      class r extends n.SW {
        constructor() {
          super(), (this.value = 1);
        }
      }
    },
    9201: function (t, e, i) {
      i.d(e, {
        y: function () {
          return a;
        },
      });
      class n {
        load(t) {
          t && void 0 !== t.speed && (this.speed = t.speed);
        }
        constructor() {
          this.speed = 2;
        }
      }
      class r {
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.retries && (this.retries = t.retries));
        }
        constructor() {
          (this.enable = !0), (this.retries = 0);
        }
      }
      var s = i(7408),
        o = i(3180);
      class a {
        load(t) {
          t &&
            (this.absorb.load(t.absorb),
            this.bounce.load(t.bounce),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.maxSpeed && (this.maxSpeed = (0, o.Cs)(t.maxSpeed)),
            void 0 !== t.mode && (this.mode = t.mode),
            this.overlap.load(t.overlap));
        }
        constructor() {
          (this.absorb = new n()),
            (this.bounce = new s.b()),
            (this.enable = !1),
            (this.maxSpeed = 50),
            (this.mode = "bounce"),
            (this.overlap = new r());
        }
      }
    },
    7532: function (t, e, i) {
      i.d(e, {
        A: function () {
          return m;
        },
      });
      var n = i(2455),
        r = i(1537),
        s = i(3902);
      class o {
        load(t) {
          t &&
            (void 0 !== t.x && (this.x = t.x),
            void 0 !== t.y && (this.y = t.y),
            void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.radius && (this.radius = t.radius));
        }
        constructor() {
          (this.x = 50),
            (this.y = 50),
            (this.mode = "percent"),
            (this.radius = 0);
        }
      }
      var a = i(2121),
        l = i(3301),
        u = i(1330);
      class h {
        load(t) {
          t &&
            (void 0 !== t.color &&
              (this.color = u.O.create(this.color, t.color)),
            void 0 !== t.image && (this.image = t.image));
        }
      }
      class c {
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.fill && this.fill.load(t.fill),
            void 0 !== t.length && (this.length = t.length));
        }
        constructor() {
          (this.enable = !1), (this.length = 10), (this.fill = new h());
        }
      }
      class d {
        load(t) {
          var e, i, n, r;
          t &&
            (void 0 !== t.default && (this.default = t.default),
            (this.bottom =
              null !== (e = t.bottom) && void 0 !== e ? e : t.default),
            (this.left = null !== (i = t.left) && void 0 !== i ? i : t.default),
            (this.right =
              null !== (n = t.right) && void 0 !== n ? n : t.default),
            (this.top = null !== (r = t.top) && void 0 !== r ? r : t.default));
        }
        constructor() {
          this.default = "out";
        }
      }
      var f = i(3460),
        p = i(3180);
      class m {
        load(t) {
          if (!t) return;
          this.angle.load((0, n.hj)(t.angle) ? { value: t.angle } : t.angle),
            this.attract.load(t.attract),
            this.center.load(t.center),
            void 0 !== t.decay && (this.decay = (0, p.Cs)(t.decay)),
            void 0 !== t.direction && (this.direction = t.direction),
            void 0 !== t.distance &&
              (this.distance = (0, n.hj)(t.distance)
                ? { horizontal: t.distance, vertical: t.distance }
                : { ...t.distance }),
            void 0 !== t.drift && (this.drift = (0, p.Cs)(t.drift)),
            void 0 !== t.enable && (this.enable = t.enable),
            this.gravity.load(t.gravity);
          let e = t.outModes;
          void 0 !== e &&
            ((0, n.Kn)(e)
              ? this.outModes.load(e)
              : this.outModes.load({ default: e })),
            this.path.load(t.path),
            void 0 !== t.random && (this.random = t.random),
            void 0 !== t.size && (this.size = t.size),
            void 0 !== t.speed && (this.speed = (0, p.Cs)(t.speed)),
            this.spin.load(t.spin),
            void 0 !== t.straight && (this.straight = t.straight),
            this.trail.load(t.trail),
            void 0 !== t.vibrate && (this.vibrate = t.vibrate),
            void 0 !== t.warp && (this.warp = t.warp);
        }
        constructor() {
          (this.angle = new r.k()),
            (this.attract = new s.k()),
            (this.center = new o()),
            (this.decay = 0),
            (this.distance = {}),
            (this.direction = "none"),
            (this.drift = 0),
            (this.enable = !1),
            (this.gravity = new a.S()),
            (this.path = new l.C()),
            (this.outModes = new d()),
            (this.random = !1),
            (this.size = !1),
            (this.speed = 2),
            (this.spin = new f.y()),
            (this.straight = !1),
            (this.trail = new c()),
            (this.vibrate = !1),
            (this.warp = !1);
        }
      }
    },
    1537: function (t, e, i) {
      i.d(e, {
        k: function () {
          return r;
        },
      });
      var n = i(3180);
      class r {
        load(t) {
          t &&
            (void 0 !== t.offset && (this.offset = (0, n.Cs)(t.offset)),
            void 0 !== t.value && (this.value = (0, n.Cs)(t.value)));
        }
        constructor() {
          (this.offset = 0), (this.value = 90);
        }
      }
    },
    3902: function (t, e, i) {
      i.d(e, {
        k: function () {
          return r;
        },
      });
      var n = i(3180);
      class r {
        load(t) {
          if (
            t &&
            (void 0 !== t.distance && (this.distance = (0, n.Cs)(t.distance)),
            void 0 !== t.enable && (this.enable = t.enable),
            t.rotate)
          ) {
            let e = t.rotate.x;
            void 0 !== e && (this.rotate.x = e);
            let i = t.rotate.y;
            void 0 !== i && (this.rotate.y = i);
          }
        }
        constructor() {
          (this.distance = 200),
            (this.enable = !1),
            (this.rotate = { x: 3e3, y: 3e3 });
        }
      }
    },
    2121: function (t, e, i) {
      i.d(e, {
        S: function () {
          return r;
        },
      });
      var n = i(3180);
      class r {
        load(t) {
          t &&
            (void 0 !== t.acceleration &&
              (this.acceleration = (0, n.Cs)(t.acceleration)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.inverse && (this.inverse = t.inverse),
            void 0 !== t.maxSpeed && (this.maxSpeed = (0, n.Cs)(t.maxSpeed)));
        }
        constructor() {
          (this.acceleration = 9.81),
            (this.enable = !1),
            (this.inverse = !1),
            (this.maxSpeed = 50);
        }
      }
    },
    3301: function (t, e, i) {
      i.d(e, {
        C: function () {
          return s;
        },
      });
      var n = i(3806),
        r = i(4864);
      class s {
        load(t) {
          t &&
            (void 0 !== t.clamp && (this.clamp = t.clamp),
            this.delay.load(t.delay),
            void 0 !== t.enable && (this.enable = t.enable),
            (this.generator = t.generator),
            t.options && (this.options = (0, r.ZB)(this.options, t.options)));
        }
        constructor() {
          (this.clamp = !0),
            (this.delay = new n.SW()),
            (this.enable = !1),
            (this.options = {});
        }
      }
    },
    3460: function (t, e, i) {
      i.d(e, {
        y: function () {
          return s;
        },
      });
      var n = i(4864),
        r = i(3180);
      class s {
        load(t) {
          t &&
            (void 0 !== t.acceleration &&
              (this.acceleration = (0, r.Cs)(t.acceleration)),
            void 0 !== t.enable && (this.enable = t.enable),
            t.position && (this.position = (0, n.ZB)({}, t.position)));
        }
        constructor() {
          (this.acceleration = 0), (this.enable = !1);
        }
      }
    },
    7044: function (t, e, i) {
      i.d(e, {
        D: function () {
          return s;
        },
      });
      var n = i(5611),
        r = i(3806);
      class s extends r.md {
        load(t) {
          if (!t) return;
          super.load(t);
          let e = t.animation;
          void 0 !== e && this.animation.load(e);
        }
        constructor() {
          super(), (this.animation = new n.O()), (this.value = 1);
        }
      }
    },
    5611: function (t, e, i) {
      i.d(e, {
        O: function () {
          return r;
        },
      });
      var n = i(2639);
      class r extends n.B {
        load(t) {
          super.load(t),
            t && void 0 !== t.destroy && (this.destroy = t.destroy);
        }
        constructor() {
          super(), (this.destroy = "none"), (this.speed = 2);
        }
      }
    },
    4222: function (t, e, i) {
      i.d(e, {
        B: function () {
          return x;
        },
      });
      var n = i(4864),
        r = i(5787),
        s = i(9201);
      class o {
        load(t) {
          if (!t) return;
          let e = t.options;
          if (void 0 !== e)
            for (let t in e) {
              let r = e[t];
              if (r) {
                var i;
                this.options[t] = (0, n.ZB)(
                  null !== (i = this.options[t]) && void 0 !== i ? i : {},
                  r
                );
              }
            }
          void 0 !== t.close && (this.close = t.close),
            void 0 !== t.fill && (this.fill = t.fill),
            void 0 !== t.type && (this.type = t.type);
        }
        constructor() {
          (this.close = !0),
            (this.fill = !0),
            (this.options = {}),
            (this.type = []);
        }
      }
      var a = i(7532),
        l = i(7044),
        u = i(7408);
      class h {
        load(t) {
          if (!t) return;
          void 0 !== t.enable && (this.enable = t.enable);
          let e = t.width;
          void 0 !== e && (this.width = e);
          let i = t.height;
          void 0 !== i && (this.height = i);
        }
        constructor() {
          (this.enable = !1), (this.width = 1920), (this.height = 1080);
        }
      }
      class c {
        load(t) {
          t &&
            (void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.value && (this.value = t.value));
        }
        constructor() {
          (this.mode = "delete"), (this.value = 0);
        }
      }
      class d {
        load(t) {
          t &&
            (this.density.load(t.density),
            this.limit.load(t.limit),
            void 0 !== t.value && (this.value = t.value));
        }
        constructor() {
          (this.density = new h()), (this.limit = new c()), (this.value = 0);
        }
      }
      var f = i(1330);
      class p {
        load(t) {
          t &&
            (void 0 !== t.blur && (this.blur = t.blur),
            (this.color = f.O.create(this.color, t.color)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.offset &&
              (void 0 !== t.offset.x && (this.offset.x = t.offset.x),
              void 0 !== t.offset.y && (this.offset.y = t.offset.y)));
        }
        constructor() {
          (this.blur = 0),
            (this.color = new f.O()),
            (this.enable = !1),
            (this.offset = { x: 0, y: 0 }),
            (this.color.value = "#000");
        }
      }
      var m = i(656),
        v = i(5149),
        g = i(9989),
        y = i(3177);
      class x {
        load(t) {
          if (!t) return;
          if (void 0 !== t.groups)
            for (let i of Object.keys(t.groups)) {
              if (!Object.hasOwn(t.groups, i)) continue;
              let r = t.groups[i];
              if (void 0 !== r) {
                var e;
                this.groups[i] = (0, n.ZB)(
                  null !== (e = this.groups[i]) && void 0 !== e ? e : {},
                  r
                );
              }
            }
          void 0 !== t.reduceDuplicates &&
            (this.reduceDuplicates = t.reduceDuplicates),
            this.bounce.load(t.bounce),
            this.color.load(r.R.create(this.color, t.color)),
            this.effect.load(t.effect),
            this.move.load(t.move),
            this.number.load(t.number),
            this.opacity.load(t.opacity),
            this.shape.load(t.shape),
            this.size.load(t.size),
            this.shadow.load(t.shadow),
            this.zIndex.load(t.zIndex),
            this.collisions.load(t.collisions),
            void 0 !== t.interactivity &&
              (this.interactivity = (0, n.ZB)({}, t.interactivity));
          let i = t.stroke;
          if (
            (i &&
              (this.stroke = (0, n.KH)(i, (t) => {
                let e = new g.m();
                return e.load(t), e;
              })),
            this._container)
          ) {
            let e = this._engine.updaters.get(this._container);
            if (e) for (let i of e) i.loadOptions && i.loadOptions(this, t);
            let i = this._engine.interactors.get(this._container);
            if (i)
              for (let e of i)
                e.loadParticlesOptions && e.loadParticlesOptions(this, t);
          }
        }
        constructor(t, e) {
          (this._engine = t),
            (this._container = e),
            (this.bounce = new u.b()),
            (this.collisions = new s.y()),
            (this.color = new r.R()),
            (this.color.value = "#fff"),
            (this.effect = new o()),
            (this.groups = {}),
            (this.move = new a.A()),
            (this.number = new d()),
            (this.opacity = new l.D()),
            (this.reduceDuplicates = !1),
            (this.shadow = new p()),
            (this.shape = new m.b()),
            (this.size = new v.$()),
            (this.stroke = new g.m()),
            (this.zIndex = new y.K());
        }
      }
    },
    656: function (t, e, i) {
      i.d(e, {
        b: function () {
          return r;
        },
      });
      var n = i(4864);
      class r {
        load(t) {
          if (!t) return;
          let e = t.options;
          if (void 0 !== e)
            for (let t in e) {
              let r = e[t];
              if (r) {
                var i;
                this.options[t] = (0, n.ZB)(
                  null !== (i = this.options[t]) && void 0 !== i ? i : {},
                  r
                );
              }
            }
          void 0 !== t.close && (this.close = t.close),
            void 0 !== t.fill && (this.fill = t.fill),
            void 0 !== t.type && (this.type = t.type);
        }
        constructor() {
          (this.close = !0),
            (this.fill = !0),
            (this.options = {}),
            (this.type = "circle");
        }
      }
    },
    5149: function (t, e, i) {
      i.d(e, {
        $: function () {
          return s;
        },
      });
      var n = i(3806),
        r = i(4560);
      class s extends n.md {
        load(t) {
          if ((super.load(t), !t)) return;
          let e = t.animation;
          void 0 !== e && this.animation.load(e);
        }
        constructor() {
          super(), (this.animation = new r.a()), (this.value = 3);
        }
      }
    },
    4560: function (t, e, i) {
      i.d(e, {
        a: function () {
          return r;
        },
      });
      var n = i(2639);
      class r extends n.B {
        load(t) {
          super.load(t),
            t && void 0 !== t.destroy && (this.destroy = t.destroy);
        }
        constructor() {
          super(), (this.destroy = "none"), (this.speed = 5);
        }
      }
    },
    9989: function (t, e, i) {
      i.d(e, {
        m: function () {
          return s;
        },
      });
      var n = i(5787),
        r = i(3180);
      class s {
        load(t) {
          t &&
            (void 0 !== t.color &&
              (this.color = n.R.create(this.color, t.color)),
            void 0 !== t.width && (this.width = (0, r.Cs)(t.width)),
            void 0 !== t.opacity && (this.opacity = (0, r.Cs)(t.opacity)));
        }
        constructor() {
          this.width = 0;
        }
      }
    },
    3177: function (t, e, i) {
      i.d(e, {
        K: function () {
          return r;
        },
      });
      var n = i(3806);
      class r extends n.SW {
        load(t) {
          super.load(t),
            t &&
              (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate),
              void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate),
              void 0 !== t.velocityRate &&
                (this.velocityRate = t.velocityRate));
        }
        constructor() {
          super(),
            (this.opacityRate = 1),
            (this.sizeRate = 1),
            (this.velocityRate = 1);
        }
      }
    },
    9762: function (t, e, i) {
      i.d(e, {
        E: function () {
          return r;
        },
      });
      var n = i(4864);
      class r {
        load(t) {
          t &&
            (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth),
            void 0 !== t.mode &&
              ("screen" === t.mode
                ? (this.mode = "screen")
                : (this.mode = "canvas")),
            void 0 !== t.options && (this.options = (0, n.ZB)({}, t.options)));
        }
        constructor() {
          (this.maxWidth = 1 / 0), (this.options = {}), (this.mode = "canvas");
        }
      }
    },
    6431: function (t, e, i) {
      i.d(e, {
        Q: function () {
          return s;
        },
      });
      class n {
        load(t) {
          t &&
            (void 0 !== t.auto && (this.auto = t.auto),
            void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.value && (this.value = t.value));
        }
        constructor() {
          (this.auto = !1), (this.mode = "any"), (this.value = !1);
        }
      }
      var r = i(4864);
      class s {
        load(t) {
          t &&
            (void 0 !== t.name && (this.name = t.name),
            this.default.load(t.default),
            void 0 !== t.options && (this.options = (0, r.ZB)({}, t.options)));
        }
        constructor() {
          (this.name = ""), (this.default = new n());
        }
      }
    },
    3806: function (t, e, i) {
      i.d(e, {
        SW: function () {
          return s;
        },
        md: function () {
          return a;
        },
      });
      var n = i(2639),
        r = i(3180);
      class s {
        load(t) {
          t && void 0 !== t.value && (this.value = (0, r.Cs)(t.value));
        }
        constructor() {
          this.value = 0;
        }
      }
      class o extends s {
        load(t) {
          if ((super.load(t), !t)) return;
          let e = t.animation;
          void 0 !== e && this.animation.load(e);
        }
        constructor() {
          super(), (this.animation = new n.P());
        }
      }
      class a extends o {
        load(t) {
          super.load(t);
        }
        constructor() {
          super(), (this.animation = new n.B());
        }
      }
    },
    640: function (t, e, i) {
      i.d(e, {
        $F: function () {
          return c;
        },
        C3: function () {
          return a;
        },
        PL: function () {
          return d;
        },
        TQ: function () {
          return o;
        },
        ZH: function () {
          return l;
        },
        Zw: function () {
          return h;
        },
        pS: function () {
          return s;
        },
        zv: function () {
          return u;
        },
      });
      var n = i(8128);
      let r = { x: 0, y: 0 };
      function s(t, e, i) {
        t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath();
      }
      function o(t, e, i) {
        (t.fillStyle = null != i ? i : "rgba(0,0,0,0)"),
          t.fillRect(r.x, r.y, e.width, e.height);
      }
      function a(t, e, i, n) {
        i &&
          ((t.globalAlpha = n),
          t.drawImage(i, r.x, r.y, e.width, e.height),
          (t.globalAlpha = 1));
      }
      function l(t, e) {
        t.clearRect(r.x, r.y, e.width, e.height);
      }
      function u(t) {
        var e, i, r, s, o;
        let {
            container: a,
            context: l,
            particle: u,
            delta: h,
            colorStyles: c,
            backgroundMask: d,
            composite: f,
            radius: p,
            opacity: m,
            shadow: v,
            transform: g,
          } = t,
          y = u.getPosition(),
          x = u.rotation + (u.pathRotation ? u.velocity.angle : 0),
          w = { sin: Math.sin(x), cos: Math.cos(x) },
          b = {
            a: w.cos * (null !== (e = g.a) && void 0 !== e ? e : 1),
            b: w.sin * (null !== (i = g.b) && void 0 !== i ? i : 1),
            c: -w.sin * (null !== (r = g.c) && void 0 !== r ? r : 1),
            d: w.cos * (null !== (s = g.d) && void 0 !== s ? s : 1),
          };
        l.setTransform(b.a, b.b, b.c, b.d, y.x, y.y),
          d && (l.globalCompositeOperation = f);
        let P = u.shadowColor;
        v.enable &&
          P &&
          ((l.shadowBlur = v.blur),
          (l.shadowColor = (0, n.iz)(P)),
          (l.shadowOffsetX = v.offset.x),
          (l.shadowOffsetY = v.offset.y)),
          c.fill && (l.fillStyle = c.fill);
        let T = null !== (o = u.strokeWidth) && void 0 !== o ? o : 0;
        (l.lineWidth = T), c.stroke && (l.strokeStyle = c.stroke);
        let S = {
          container: a,
          context: l,
          particle: u,
          radius: p,
          opacity: m,
          delta: h,
          transformData: b,
          strokeWidth: T,
        };
        (function (t) {
          let {
            container: e,
            context: i,
            particle: n,
            radius: r,
            opacity: s,
            delta: o,
            strokeWidth: a,
            transformData: l,
          } = t;
          if (!n.shape) return;
          let u = e.shapeDrawers.get(n.shape);
          u &&
            (i.beginPath(),
            u.draw({
              context: i,
              particle: n,
              radius: r,
              opacity: s,
              delta: o,
              pixelRatio: e.retina.pixelRatio,
              transformData: { ...l },
            }),
            n.shapeClose && i.closePath(),
            a > 0 && i.stroke(),
            n.shapeFill && i.fill());
        })(S),
          (function (t) {
            let {
              container: e,
              context: i,
              particle: n,
              radius: r,
              opacity: s,
              delta: o,
              transformData: a,
            } = t;
            if (!n.shape) return;
            let l = e.shapeDrawers.get(n.shape);
            (null == l ? void 0 : l.afterDraw) &&
              l.afterDraw({
                context: i,
                particle: n,
                radius: r,
                opacity: s,
                delta: o,
                pixelRatio: e.retina.pixelRatio,
                transformData: { ...a },
              });
          })(S),
          (function (t) {
            let {
              container: e,
              context: i,
              particle: n,
              radius: r,
              opacity: s,
              delta: o,
              transformData: a,
            } = t;
            if (!n.effect) return;
            let l = e.effectDrawers.get(n.effect);
            l &&
              l.draw({
                context: i,
                particle: n,
                radius: r,
                opacity: s,
                delta: o,
                pixelRatio: e.retina.pixelRatio,
                transformData: { ...a },
              });
          })(S),
          (l.globalCompositeOperation = "source-over"),
          l.resetTransform();
      }
      function h(t, e, i) {
        e.draw && e.draw(t, i);
      }
      function c(t, e, i, n) {
        e.drawParticle && e.drawParticle(t, i, n);
      }
      function d(t, e, i) {
        return { h: t.h, s: t.s, l: t.l + ("darken" === e ? -1 : 1) * i };
      }
    },
    8128: function (t, e, i) {
      i.d(e, {
        BE: function () {
          return x;
        },
        Dt: function () {
          return w;
        },
        PB: function () {
          return A;
        },
        VI: function () {
          return u;
        },
        Y6: function () {
          return p;
        },
        bS: function () {
          return P;
        },
        gW: function () {
          return b;
        },
        iz: function () {
          return v;
        },
        lC: function () {
          return d;
        },
        lN: function () {
          return c;
        },
        oc: function () {
          return y;
        },
        tX: function () {
          return h;
        },
        ve: function () {
          return f;
        },
        vz: function () {
          return g;
        },
      });
      var n = i(3180),
        r = i(2455),
        s = i(9471),
        o = i(4864);
      let a = "random",
        l = new Map();
      function u(t) {
        l.set(t.key, t);
      }
      function h(t, e) {
        let i =
          !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (!t) return;
        let n = (0, r.HD)(t) ? { value: t } : t;
        if ((0, r.HD)(n.value))
          return (function t(e, i) {
            let n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
            if (!e) return;
            let s = (0, r.HD)(e) ? { value: e } : e;
            if ((0, r.HD)(s.value))
              return s.value === a
                ? m()
                : (function (t) {
                    for (let [, e] of l)
                      if (t.startsWith(e.stringPrefix)) return e.parseString(t);
                    let e = t.replace(
                        /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
                        (t, e, i, n, r) =>
                          e + e + i + i + n + n + (void 0 !== r ? r + r : "")
                      ),
                      i =
                        /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(
                          e
                        );
                    return i
                      ? {
                          a: void 0 !== i[4] ? parseInt(i[4], 16) / 255 : 1,
                          b: parseInt(i[3], 16),
                          g: parseInt(i[2], 16),
                          r: parseInt(i[1], 16),
                        }
                      : void 0;
                  })(s.value);
            if ((0, r.kJ)(s.value))
              return t({ value: (0, o.c8)(s.value, i, n) });
            for (let [, t] of l) {
              let e = t.handleColor(s);
              if (e) return e;
            }
          })(n.value, e, i);
        if ((0, r.kJ)(n.value)) return h({ value: (0, o.c8)(n.value, e, i) });
        for (let [, t] of l) {
          let e = t.handleRangeColor(n);
          if (e) return e;
        }
      }
      function c(t, e) {
        let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          n = h(t, e, i);
        return n ? d(n) : void 0;
      }
      function d(t) {
        let e = t.r / 255,
          i = t.g / 255,
          n = t.b / 255,
          r = Math.max(e, i, n),
          s = Math.min(e, i, n),
          o = { h: 0, l: (r + s) * 0.5, s: 0 };
        return (
          r !== s &&
            ((o.s = o.l < 0.5 ? (r - s) / (r + s) : (r - s) / (2 - r - s)),
            (o.h =
              e === r
                ? (i - n) / (r - s)
                : (o.h =
                    i === r ? 2 + (n - e) / (r - s) : 4 + (e - i) / (r - s)))),
          (o.l *= 100),
          (o.s *= 100),
          (o.h *= 60),
          o.h < 0 && (o.h += 360),
          o.h >= 360 && (o.h -= 360),
          o
        );
      }
      function f(t) {
        let e = ((t.h % 360) + 360) % 360,
          i = Math.max(0, Math.min(100, t.s)),
          n = Math.max(0, Math.min(100, t.l)),
          r = e / 360,
          s = i / 100,
          o = n / 100;
        if (0 === i) {
          let t = Math.round(255 * o);
          return { r: t, g: t, b: t };
        }
        let a = (t, e, i) =>
            (i < 0 && i++, i > 1 && i--, 6 * i < 1)
              ? t + (e - t) * 6 * i
              : 2 * i < 1
              ? e
              : 3 * i < 2
              ? t + (e - t) * (0.6666666666666666 - i) * 6
              : t,
          l = o < 0.5 ? o * (1 + s) : o + s - o * s,
          u = 2 * o - l;
        return {
          r: Math.round(Math.min(255, 255 * a(u, l, r + 0.3333333333333333))),
          g: Math.round(Math.min(255, 255 * a(u, l, r))),
          b: Math.round(Math.min(255, 255 * a(u, l, r - 0.3333333333333333))),
        };
      }
      function p(t) {
        let e = f(t);
        return { a: t.a, b: e.b, g: e.g, r: e.r };
      }
      function m(t) {
        let e = null != t ? t : 0;
        return {
          b: Math.floor((0, n.vd)((0, n.Cs)(e, 256))),
          g: Math.floor((0, n.vd)((0, n.Cs)(e, 256))),
          r: Math.floor((0, n.vd)((0, n.Cs)(e, 256))),
        };
      }
      function v(t, e) {
        return "rgba("
          .concat(t.r, ", ")
          .concat(t.g, ", ")
          .concat(t.b, ", ")
          .concat(null != e ? e : 1, ")");
      }
      function g(t, e) {
        return "hsla("
          .concat(t.h, ", ")
          .concat(t.s, "%, ")
          .concat(t.l, "%, ")
          .concat(null != e ? e : 1, ")");
      }
      function y(t, e, i, r) {
        let s = t,
          o = e;
        return (
          void 0 === s.r && (s = f(t)),
          void 0 === o.r && (o = f(e)),
          {
            b: (0, n.CD)(s.b, o.b, i, r),
            g: (0, n.CD)(s.g, o.g, i, r),
            r: (0, n.CD)(s.r, o.r, i, r),
          }
        );
      }
      function x(t, e, i) {
        if (i === a) return m();
        if ("mid" !== i) return i;
        {
          var n, r;
          let i =
              null !== (n = t.getFillColor()) && void 0 !== n
                ? n
                : t.getStrokeColor(),
            s =
              null !== (r = null == e ? void 0 : e.getFillColor()) &&
              void 0 !== r
                ? r
                : null == e
                ? void 0
                : e.getStrokeColor();
          if (i && s && e) return y(i, s, t.getRadius(), e.getRadius());
          {
            let t = null != i ? i : s;
            if (t) return f(t);
          }
        }
      }
      function w(t, e, i) {
        let n = (0, r.HD)(t) ? t : t.value;
        return n === a
          ? i
            ? h({ value: n })
            : e
            ? a
            : "mid"
          : "mid" === n
          ? "mid"
          : h({ value: n });
      }
      function b(t) {
        return void 0 !== t
          ? { h: t.h.value, s: t.s.value, l: t.l.value }
          : void 0;
      }
      function P(t, e, i) {
        let n = {
          h: { enable: !1, value: t.h },
          s: { enable: !1, value: t.s },
          l: { enable: !1, value: t.l },
        };
        return e && (T(n.h, e.h, i), T(n.s, e.s, i), T(n.l, e.l, i)), n;
      }
      function T(t, e, i) {
        (t.enable = e.enable),
          t.enable
            ? ((t.velocity = ((0, n.Gu)(e.speed) / s.tZ) * i),
              (t.decay = 1 - (0, n.Gu)(e.decay)),
              (t.status = "increasing"),
              (t.loops = 0),
              (t.maxLoops = (0, n.Gu)(e.count)),
              (t.time = 0),
              (t.delayTime = (0, n.Gu)(e.delay) * s.X5),
              e.sync || ((t.velocity *= (0, n.sZ)()), (t.value *= (0, n.sZ)())),
              (t.initialValue = t.value),
              (t.offset = (0, n.Cs)(e.offset)))
            : (t.velocity = 0);
      }
      function S(t, e, i, r) {
        var s, o, a, l, u, h, c, d, f;
        if (
          !t ||
          !t.enable ||
          ((null !== (s = t.maxLoops) && void 0 !== s ? s : 0) > 0 &&
            (null !== (o = t.loops) && void 0 !== o ? o : 0) >
              (null !== (a = t.maxLoops) && void 0 !== a ? a : 0)) ||
          (t.time || (t.time = 0),
          (null !== (l = t.delayTime) && void 0 !== l ? l : 0) > 0 &&
            t.time < (null !== (u = t.delayTime) && void 0 !== u ? u : 0) &&
            (t.time += r.value),
          (null !== (h = t.delayTime) && void 0 !== h ? h : 0) > 0 &&
            t.time < (null !== (c = t.delayTime) && void 0 !== c ? c : 0))
        )
          return;
        let p = t.offset ? (0, n.vd)(t.offset) : 0,
          m =
            (null !== (d = t.velocity) && void 0 !== d ? d : 0) * r.factor +
            3.6 * p,
          v = null !== (f = t.decay) && void 0 !== f ? f : 1,
          g = (0, n.KI)(e),
          y = (0, n.Uv)(e);
        i && "increasing" !== t.status
          ? ((t.value -= m),
            t.value < 0 &&
              (t.loops || (t.loops = 0), t.loops++, (t.status = "increasing")))
          : ((t.value += m),
            t.value > g &&
              (t.loops || (t.loops = 0),
              t.loops++,
              i ? (t.status = "decreasing") : (t.value -= g))),
          t.velocity && 1 !== v && (t.velocity *= v),
          (t.value = (0, n.uZ)(t.value, y, g));
      }
      function A(t, e) {
        if (!t) return;
        let { h: i, s: n, l: r } = t,
          s = {
            h: { min: 0, max: 360 },
            s: { min: 0, max: 100 },
            l: { min: 0, max: 100 },
          };
        i && S(i, s.h, !1, e), n && S(n, s.s, !0, e), r && S(r, s.l, !0, e);
      }
    },
    3180: function (t, e, i) {
      i.d(e, {
        BV: function () {
          return A;
        },
        CD: function () {
          return f;
        },
        Cs: function () {
          return function t(e, i) {
            if (e === i || (void 0 === i && (0, r.hj)(e))) return e;
            let n = v(e),
              s = g(e);
            return void 0 !== i
              ? { min: Math.min(n, i), max: Math.max(s, i) }
              : t(n, s);
          };
        },
        Gk: function () {
          return b;
        },
        Gu: function () {
          return m;
        },
        Id: function () {
          return w;
        },
        KI: function () {
          return g;
        },
        Sp: function () {
          return x;
        },
        Uv: function () {
          return v;
        },
        _X: function () {
          return h;
        },
        bx: function () {
          return u;
        },
        hA: function () {
          return T;
        },
        lQ: function () {
          return P;
        },
        mC: function () {
          return S;
        },
        oW: function () {
          return y;
        },
        sZ: function () {
          return c;
        },
        uZ: function () {
          return d;
        },
        vd: function () {
          return p;
        },
      });
      var n = i(9890),
        r = i(2455),
        s = i(9471);
      let o = Math.random,
        a = new Map(),
        l = 2 * Math.PI;
      function u(t, e) {
        a.get(t) || a.set(t, e);
      }
      function h(t) {
        var e;
        return null !== (e = a.get(t)) && void 0 !== e ? e : (t) => t;
      }
      function c() {
        return d(o(), 0, 1 - Number.EPSILON);
      }
      function d(t, e, i) {
        return Math.min(Math.max(t, e), i);
      }
      function f(t, e, i, n) {
        return Math.floor((t * i + e * n) / (i + n));
      }
      function p(t) {
        let e = g(t),
          i = v(t);
        return e === i && (i = 0), c() * (e - i) + i;
      }
      function m(t) {
        return (0, r.hj)(t) ? t : p(t);
      }
      function v(t) {
        return (0, r.hj)(t) ? t : t.min;
      }
      function g(t) {
        return (0, r.hj)(t) ? t : t.max;
      }
      function y(t, e) {
        let i = t.x - e.x,
          n = t.y - e.y;
        return { dx: i, dy: n, distance: Math.sqrt(i ** 2 + n ** 2) };
      }
      function x(t, e) {
        return y(t, e).distance;
      }
      function w(t) {
        return (t * Math.PI) / 180;
      }
      function b(t, e, i) {
        if ((0, r.hj)(t)) return w(t);
        switch (t) {
          case "top":
            return -(0.5 * Math.PI);
          case "top-right":
            return -(0.25 * Math.PI);
          case "right":
            return 0;
          case "bottom-right":
            return 0.25 * Math.PI;
          case "bottom":
            return 0.5 * Math.PI;
          case "bottom-left":
            return 0.75 * Math.PI;
          case "left":
            return Math.PI;
          case "top-left":
            return -(0.75 * Math.PI);
          case "inside":
            return Math.atan2(i.y - e.y, i.x - e.x);
          case "outside":
            return Math.atan2(e.y - i.y, e.x - i.x);
          default:
            return c() * l;
        }
      }
      function P(t) {
        let e = n.O.origin;
        return (e.length = 1), (e.angle = t), e;
      }
      function T(t, e, i, r) {
        return n.O.create(
          (t.x * (i - r)) / (i + r) + (2 * e.x * r) / (i + r),
          t.y
        );
      }
      function S(t) {
        var e, i, n, r;
        return {
          x:
            null !==
              (n = null === (e = t.position) || void 0 === e ? void 0 : e.x) &&
            void 0 !== n
              ? n
              : c() * t.size.width,
          y:
            null !==
              (r = null === (i = t.position) || void 0 === i ? void 0 : i.y) &&
            void 0 !== r
              ? r
              : c() * t.size.height,
        };
      }
      function A(t) {
        return t ? (t.endsWith("%") ? parseFloat(t) / s.tZ : parseFloat(t)) : 1;
      }
    },
    9687: function (t, e, i) {
      i.d(e, {
        h: function () {
          return r;
        },
        x: function () {
          return s;
        },
      });
      var n = i(4222);
      function r(t) {
        for (
          var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          i[n - 1] = arguments[n];
        for (let e of i) t.load(e);
      }
      function s(t, e) {
        for (
          var i = arguments.length, s = Array(i > 2 ? i - 2 : 0), o = 2;
          o < i;
          o++
        )
          s[o - 2] = arguments[o];
        let a = new n.B(t, e);
        return r(a, ...s), a;
      }
    },
    2455: function (t, e, i) {
      function n(t) {
        return "boolean" == typeof t;
      }
      function r(t) {
        return "string" == typeof t;
      }
      function s(t) {
        return "number" == typeof t;
      }
      function o(t) {
        return "object" == typeof t && null !== t;
      }
      function a(t) {
        return Array.isArray(t);
      }
      i.d(e, {
        HD: function () {
          return r;
        },
        Kn: function () {
          return o;
        },
        hj: function () {
          return s;
        },
        jn: function () {
          return n;
        },
        kJ: function () {
          return a;
        },
      });
    },
    4864: function (t, e, i) {
      i.d(e, {
        Ac: function () {
          return g;
        },
        Cr: function () {
          return V;
        },
        HY: function () {
          return c;
        },
        KH: function () {
          return A;
        },
        Kr: function () {
          return h;
        },
        M_: function () {
          return y;
        },
        NM: function () {
          return d;
        },
        V0: function () {
          return D;
        },
        XD: function () {
          return w;
        },
        ZB: function () {
          return function t(e) {
            for (
              var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1;
              r < i;
              r++
            )
              n[r - 1] = arguments[r];
            for (let i of n) {
              if (null == i) continue;
              if (!(0, s.Kn)(i)) {
                e = i;
                continue;
              }
              let n = Array.isArray(i);
              for (let r in (n && ((0, s.Kn)(e) || !e || !Array.isArray(e))
                ? (e = [])
                : !n && ((0, s.Kn)(e) || !e || Array.isArray(e)) && (e = {}),
              i)) {
                if ("__proto__" === r) continue;
                let n = i[r],
                  o = e;
                o[r] =
                  (0, s.Kn)(n) && Array.isArray(n)
                    ? n.map((e) => t(o[r], e))
                    : t(o[r], n);
              }
            }
            return e;
          };
        },
        bt: function () {
          return E;
        },
        c8: function () {
          return v;
        },
        dB: function () {
          return p;
        },
        dp: function () {
          return S;
        },
        gy: function () {
          return P;
        },
        iC: function () {
          return b;
        },
        jl: function () {
          return l;
        },
        kR: function () {
          return T;
        },
        mx: function () {
          return m;
        },
        wA: function () {
          return M;
        },
        wm: function () {
          return x;
        },
        yf: function () {
          return f;
        },
      });
      var n = i(3180),
        r = i(9471),
        s = i(2455),
        o = i(9890);
      let a = {
        debug: console.debug,
        error: console.error,
        info: console.info,
        log: console.log,
        verbose: console.log,
        warning: console.warn,
      };
      function l() {
        return a;
      }
      function u(t) {
        let e = { bounced: !1 },
          {
            pSide: i,
            pOtherSide: n,
            rectSide: r,
            rectOtherSide: s,
            velocity: o,
            factor: a,
          } = t;
        return (
          n.min < s.min ||
            n.min > s.max ||
            n.max < s.min ||
            n.max > s.max ||
            (((i.max >= r.min && i.max <= (r.max + r.min) * 0.5 && o > 0) ||
              (i.min <= r.max && i.min > (r.max + r.min) * 0.5 && o < 0)) &&
              ((e.velocity = -(o * a)), (e.bounced = !0))),
          e
        );
      }
      function h() {
        return (
          "undefined" == typeof window ||
          !window ||
          void 0 === window.document ||
          !window.document
        );
      }
      function c(t) {
        if (!h() && "undefined" != typeof matchMedia) return matchMedia(t);
      }
      function d(t) {
        if (!h() && "undefined" != typeof IntersectionObserver)
          return new IntersectionObserver(t);
      }
      function f(t) {
        if (!h() && "undefined" != typeof MutationObserver)
          return new MutationObserver(t);
      }
      function p(t, e) {
        return t === e || ((0, s.kJ)(e) && e.indexOf(t) > -1);
      }
      async function m(t, e) {
        try {
          await document.fonts.load(
            ""
              .concat(null != e ? e : "400", " 36px '")
              .concat(null != t ? t : "Verdana", "'")
          );
        } catch (t) {}
      }
      function v(t, e) {
        let i =
          !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return t[
          void 0 !== e && i ? e % t.length : Math.floor((0, n.sZ)() * t.length)
        ];
      }
      function g(t, e, i, n, r) {
        var s;
        let o;
        return (
          (s = y(t, null != n ? n : 0)),
          (o = !0),
          (r && "bottom" !== r) || (o = s.top < e.height + i.x),
          o && (!r || "left" === r) && (o = s.right > i.x),
          o && (!r || "right" === r) && (o = s.left < e.width + i.y),
          o && (!r || "top" === r) && (o = s.bottom > i.y),
          o
        );
      }
      function y(t, e) {
        return { bottom: t.y + e, left: t.x - e, right: t.x + e, top: t.y - e };
      }
      function x(t, e) {
        return !!C(e, (e) => e.enable && p(t, e.mode));
      }
      function w(t, e, i) {
        A(e, (e) => {
          let n = e.mode;
          e.enable &&
            p(t, n) &&
            A(e.selectors, (t) => {
              i(t, e);
            });
        });
      }
      function b(t, e) {
        if (e && t)
          return C(t, (t) =>
            (function (t, e) {
              let i = A(e, (e) => t.matches(e));
              return (0, s.kJ)(i) ? i.some((t) => t) : i;
            })(e, t.selectors)
          );
      }
      function P(t) {
        return {
          position: t.getPosition(),
          radius: t.getRadius(),
          mass: t.getMass(),
          velocity: t.velocity,
          factor: o.O.create(
            (0, n.Gu)(t.options.bounce.horizontal.value),
            (0, n.Gu)(t.options.bounce.vertical.value)
          ),
        };
      }
      function T(t, e) {
        let { x: i, y: r } = t.velocity.sub(e.velocity),
          [s, o] = [t.position, e.position],
          { dx: a, dy: l } = (0, n.oW)(o, s);
        if (i * a + r * l < 0) return;
        let u = -Math.atan2(l, a),
          h = t.mass,
          c = e.mass,
          d = t.velocity.rotate(u),
          f = e.velocity.rotate(u),
          p = (0, n.hA)(d, f, h, c),
          m = (0, n.hA)(f, d, h, c),
          v = p.rotate(-u),
          g = m.rotate(-u);
        (t.velocity.x = v.x * t.factor.x),
          (t.velocity.y = v.y * t.factor.y),
          (e.velocity.x = g.x * e.factor.x),
          (e.velocity.y = g.y * e.factor.y);
      }
      function S(t, e) {
        let i = y(t.getPosition(), t.getRadius()),
          r = t.options.bounce,
          s = u({
            pSide: { min: i.left, max: i.right },
            pOtherSide: { min: i.top, max: i.bottom },
            rectSide: { min: e.left, max: e.right },
            rectOtherSide: { min: e.top, max: e.bottom },
            velocity: t.velocity.x,
            factor: (0, n.Gu)(r.horizontal.value),
          });
        s.bounced &&
          (void 0 !== s.velocity && (t.velocity.x = s.velocity),
          void 0 !== s.position && (t.position.x = s.position));
        let o = u({
          pSide: { min: i.top, max: i.bottom },
          pOtherSide: { min: i.left, max: i.right },
          rectSide: { min: e.top, max: e.bottom },
          rectOtherSide: { min: e.left, max: e.right },
          velocity: t.velocity.y,
          factor: (0, n.Gu)(r.vertical.value),
        });
        o.bounced &&
          (void 0 !== o.velocity && (t.velocity.y = o.velocity),
          void 0 !== o.position && (t.position.y = o.position));
      }
      function A(t, e) {
        return (0, s.kJ)(t) ? t.map((t, i) => e(t, i)) : e(t, 0);
      }
      function M(t, e, i) {
        return (0, s.kJ)(t) ? v(t, e, i) : t;
      }
      function C(t, e) {
        return (0, s.kJ)(t) ? t.find((t, i) => e(t, i)) : e(t, 0) ? t : void 0;
      }
      function D(t, e) {
        let i = t.value,
          s = t.animation,
          o = {
            delayTime: (0, n.Gu)(s.delay) * r.X5,
            enable: s.enable,
            value: (0, n.Gu)(t.value) * e,
            max: (0, n.KI)(i) * e,
            min: (0, n.Uv)(i) * e,
            loops: 0,
            maxLoops: (0, n.Gu)(s.count),
            time: 0,
          };
        if (s.enable) {
          switch (((o.decay = 1 - (0, n.Gu)(s.decay)), s.mode)) {
            case "increase":
              o.status = "increasing";
              break;
            case "decrease":
              o.status = "decreasing";
              break;
            case "random":
              o.status = (0, n.sZ)() >= r.vq ? "increasing" : "decreasing";
          }
          let t = "auto" === s.mode;
          switch (s.startValue) {
            case "min":
              (o.value = o.min), t && (o.status = "increasing");
              break;
            case "max":
              (o.value = o.max), t && (o.status = "decreasing");
              break;
            default:
              (o.value = (0, n.vd)(o)),
                t &&
                  (o.status =
                    (0, n.sZ)() >= r.vq ? "increasing" : "decreasing");
          }
        }
        return (o.initialValue = o.value), o;
      }
      function E(t, e) {
        return (function (t, e) {
          if ("percent" !== t.mode) {
            let { mode: e, ...i } = t;
            return i;
          }
          return "x" in t
            ? { x: (t.x / r.tZ) * e.width, y: (t.y / r.tZ) * e.height }
            : {
                width: (t.width / r.tZ) * e.width,
                height: (t.height / r.tZ) * e.height,
              };
        })(t, e);
      }
      function V(t, e, i, r, s) {
        var o, a, l, u, h, c, d, f, p;
        if (
          t.destroyed ||
          !e ||
          !e.enable ||
          ((null !== (o = e.maxLoops) && void 0 !== o ? o : 0) > 0 &&
            (null !== (a = e.loops) && void 0 !== a ? a : 0) >
              (null !== (l = e.maxLoops) && void 0 !== l ? l : 0))
        )
          return;
        let m = (null !== (u = e.velocity) && void 0 !== u ? u : 0) * s.factor,
          v = e.min,
          g = e.max,
          y = null !== (h = e.decay) && void 0 !== h ? h : 1;
        if (
          (e.time || (e.time = 0),
          (null !== (c = e.delayTime) && void 0 !== c ? c : 0) > 0 &&
            e.time < (null !== (d = e.delayTime) && void 0 !== d ? d : 0) &&
            (e.time += s.value),
          !((null !== (f = e.delayTime) && void 0 !== f ? f : 0) > 0) ||
            !(e.time < (null !== (p = e.delayTime) && void 0 !== p ? p : 0)))
        ) {
          switch (e.status) {
            case "increasing":
              e.value >= g
                ? (i ? (e.status = "decreasing") : (e.value -= g),
                  e.loops || (e.loops = 0),
                  e.loops++)
                : (e.value += m);
              break;
            case "decreasing":
              e.value <= v
                ? (i ? (e.status = "increasing") : (e.value += g),
                  e.loops || (e.loops = 0),
                  e.loops++)
                : (e.value -= m);
          }
          e.velocity && 1 !== y && (e.velocity *= y),
            (function (t, e, i, n, r) {
              switch (e) {
                case "max":
                  i >= r && t.destroy();
                  break;
                case "min":
                  i <= n && t.destroy();
              }
            })(t, r, e.value, v, g),
            t.destroyed || (e.value = (0, n.uZ)(e.value, v, g));
        }
      }
    },
    7837: function (t, e, i) {
      i.d(e, {
        Cd: function () {
          return m.Cd;
        },
        L8: function () {
          return f;
        },
        Oz: function () {
          return g.O;
        },
        $S: function () {
          return p;
        },
        Ae: function () {
          return m.Ae;
        },
        SW: function () {
          return y.SW;
        },
        OW: function () {
          return v.O;
        },
        bx: function () {
          return o.bx;
        },
        M_: function () {
          return r.M_;
        },
        kR: function () {
          return r.kR;
        },
        gy: function () {
          return r.gy;
        },
        uZ: function () {
          return o.uZ;
        },
        oc: function () {
          return h.oc;
        },
        Id: function () {
          return o.Id;
        },
        iC: function () {
          return r.iC;
        },
        XD: function () {
          return r.XD;
        },
        pS: function () {
          return x.pS;
        },
        gK: function () {
          return n.gK;
        },
        KH: function () {
          return r.KH;
        },
        Sp: function () {
          return o.Sp;
        },
        oW: function () {
          return o.oW;
        },
        _X: function () {
          return o._X;
        },
        bS: function () {
          return h.bS;
        },
        BE: function () {
          return h.BE;
        },
        Dt: function () {
          return h.Dt;
        },
        jl: function () {
          return r.jl;
        },
        sZ: function () {
          return o.sZ;
        },
        KI: function () {
          return o.KI;
        },
        Gu: function () {
          return o.Gu;
        },
        vz: function () {
          return h.vz;
        },
        iz: function () {
          return h.iz;
        },
        V0: function () {
          return r.V0;
        },
        kJ: function () {
          return w.kJ;
        },
        wm: function () {
          return r.wm;
        },
        dB: function () {
          return r.dB;
        },
        Kn: function () {
          return w.Kn;
        },
        Ac: function () {
          return r.Ac;
        },
        Kr: function () {
          return r.Kr;
        },
        c8: function () {
          return r.c8;
        },
        wA: function () {
          return r.wA;
        },
        mx: function () {
          return r.mx;
        },
        X5: function () {
          return n.X5;
        },
        aM: function () {
          return n.aM;
        },
        Wt: function () {
          return n.Wt;
        },
        tZ: function () {
          return n.tZ;
        },
        vd: function () {
          return o.vd;
        },
        lN: function () {
          return h.lN;
        },
        tX: function () {
          return h.tX;
        },
        dp: function () {
          return r.dp;
        },
        lC: function () {
          return h.lC;
        },
        Cs: function () {
          return o.Cs;
        },
        S6: function () {
          return b;
        },
        Cr: function () {
          return r.Cr;
        },
        PB: function () {
          return h.PB;
        },
      });
      var n = i(9471),
        r = i(4864);
      class s {
        addEventListener(t, e) {
          this.removeEventListener(t, e);
          let i = this._listeners.get(t);
          i || ((i = []), this._listeners.set(t, i)), i.push(e);
        }
        dispatchEvent(t, e) {
          let i = this._listeners.get(t);
          null == i || i.forEach((t) => t(e));
        }
        hasEventListener(t) {
          return !!this._listeners.get(t);
        }
        removeAllEventListeners(t) {
          t ? this._listeners.delete(t) : (this._listeners = new Map());
        }
        removeEventListener(t, e) {
          let i = this._listeners.get(t);
          if (!i) return;
          let n = i.length,
            r = i.indexOf(e);
          r < 0 || (1 === n ? this._listeners.delete(t) : i.splice(r, 1));
        }
        constructor() {
          this._listeners = new Map();
        }
      }
      var o = i(3180);
      async function a(t, e, i) {
        let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          r = e.get(t);
        return (
          (!r || n) &&
            ((r = await Promise.all([...i.values()].map((e) => e(t)))),
            e.set(t, r)),
          r
        );
      }
      async function l(t) {
        let e = (0, r.wA)(t.url, t.index);
        if (!e) return t.fallback;
        let i = await fetch(e);
        return i.ok
          ? await i.json()
          : ((0, r.jl)().error(
              ""
                .concat(n.gK, " ")
                .concat(i.status, " while retrieving config file")
            ),
            t.fallback);
      }
      class u {
        get configs() {
          let t = {};
          for (let [e, i] of this._configs) t[e] = i;
          return t;
        }
        get version() {
          return "3.3.0";
        }
        addConfig(t) {
          var e, i;
          let n =
            null !== (i = null !== (e = t.key) && void 0 !== e ? e : t.name) &&
            void 0 !== i
              ? i
              : "default";
          this._configs.set(n, t),
            this._eventDispatcher.dispatchEvent("configAdded", {
              data: { name: n, config: t },
            });
        }
        async addEffect(t, e) {
          let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          (0, r.KH)(t, (t) => {
            this.getEffectDrawer(t) || this.effectDrawers.set(t, e);
          }),
            await this.refresh(i);
        }
        addEventListener(t, e) {
          this._eventDispatcher.addEventListener(t, e);
        }
        async addInteractor(t, e) {
          let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          this._initializers.interactors.set(t, e), await this.refresh(i);
        }
        async addMover(t, e) {
          let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          this._initializers.movers.set(t, e), await this.refresh(i);
        }
        async addParticleUpdater(t, e) {
          let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          this._initializers.updaters.set(t, e), await this.refresh(i);
        }
        async addPathGenerator(t, e) {
          let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          this.getPathGenerator(t) || this.pathGenerators.set(t, e),
            await this.refresh(i);
        }
        async addPlugin(t) {
          let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          this.getPlugin(t.id) || this.plugins.push(t), await this.refresh(e);
        }
        async addPreset(t, e) {
          let i =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n =
              !(arguments.length > 3) ||
              void 0 === arguments[3] ||
              arguments[3];
          (i || !this.getPreset(t)) && this.presets.set(t, e),
            await this.refresh(n);
        }
        async addShape(t, e) {
          let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          (0, r.KH)(t, (t) => {
            this.getShapeDrawer(t) || this.shapeDrawers.set(t, e);
          }),
            await this.refresh(i);
        }
        clearPlugins(t) {
          this.updaters.delete(t),
            this.movers.delete(t),
            this.interactors.delete(t);
        }
        dispatchEvent(t, e) {
          this._eventDispatcher.dispatchEvent(t, e);
        }
        dom() {
          return this._domArray;
        }
        domItem(t) {
          let e = this.dom(),
            i = e[t];
          if (!i || i.destroyed) {
            e.splice(t, 1);
            return;
          }
          return i;
        }
        async getAvailablePlugins(t) {
          let e = new Map();
          for (let i of this.plugins)
            i.needsPlugin(t.actualOptions) && e.set(i.id, await i.getPlugin(t));
          return e;
        }
        getEffectDrawer(t) {
          return this.effectDrawers.get(t);
        }
        async getInteractors(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return await a(
            t,
            this.interactors,
            this._initializers.interactors,
            e
          );
        }
        async getMovers(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return await a(t, this.movers, this._initializers.movers, e);
        }
        getPathGenerator(t) {
          return this.pathGenerators.get(t);
        }
        getPlugin(t) {
          return this.plugins.find((e) => e.id === t);
        }
        getPreset(t) {
          return this.presets.get(t);
        }
        getShapeDrawer(t) {
          return this.shapeDrawers.get(t);
        }
        getSupportedEffects() {
          return this.effectDrawers.keys();
        }
        getSupportedShapes() {
          return this.shapeDrawers.keys();
        }
        async getUpdaters(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return await a(t, this.updaters, this._initializers.updaters, e);
        }
        init() {
          this._initialized || (this._initialized = !0);
        }
        async load(t) {
          var e, s, a, u;
          let h;
          let c =
              null !==
                (a =
                  null !== (s = t.id) && void 0 !== s
                    ? s
                    : null === (e = t.element) || void 0 === e
                    ? void 0
                    : e.id) && void 0 !== a
                ? a
                : "tsparticles".concat(Math.floor(1e4 * (0, o.sZ)())),
            { index: d, url: f } = t,
            p = f
              ? await l({ fallback: t.options, url: f, index: d })
              : t.options,
            m =
              null !== (u = t.element) && void 0 !== u
                ? u
                : document.getElementById(c);
          m ||
            (((m = document.createElement("div")).id = c),
            document.body.append(m));
          let v = (0, r.wA)(p, d),
            g = this.dom(),
            y = g.findIndex((t) => t.id.description === c);
          if (y >= 0) {
            let t = this.domItem(y);
            t && !t.destroyed && (t.destroy(), g.splice(y, 1));
          }
          if ("canvas" === m.tagName.toLowerCase())
            (h = m).dataset[n.YU] = "false";
          else {
            let t = m.getElementsByTagName("canvas");
            t.length
              ? ((h = t[0]).dataset[n.YU] = "false")
              : (((h = document.createElement("canvas")).dataset[n.YU] =
                  "true"),
                m.appendChild(h));
          }
          h.style.width || (h.style.width = "100%"),
            h.style.height || (h.style.height = "100%");
          let { Container: x } = await i.e(4421).then(i.bind(i, 4421)),
            w = new x(this, c, v);
          return (
            y >= 0 ? g.splice(y, 0, w) : g.push(w),
            w.canvas.loadCanvas(h),
            await w.start(),
            w
          );
        }
        loadOptions(t, e) {
          for (let i of this.plugins) i.loadOptions(t, e);
        }
        loadParticlesOptions(t, e) {
          for (
            var i, n = arguments.length, r = Array(n > 2 ? n - 2 : 0), s = 2;
            s < n;
            s++
          )
            r[s - 2] = arguments[s];
          let o = this.updaters.get(t);
          if (o)
            for (let t of o)
              null === (i = t.loadOptions) ||
                void 0 === i ||
                i.call(t, e, ...r);
        }
        async refresh() {
          let t =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
          t && (await Promise.all(this.dom().map((t) => t.refresh())));
        }
        removeEventListener(t, e) {
          this._eventDispatcher.removeEventListener(t, e);
        }
        setOnClickHandler(t) {
          let e = this.dom();
          if (!e.length)
            throw Error(
              "".concat(
                n.gK,
                " can only set click handlers after calling tsParticles.load()"
              )
            );
          for (let i of e) i.addClickHandler(t);
        }
        constructor() {
          (this._configs = new Map()),
            (this._domArray = []),
            (this._eventDispatcher = new s()),
            (this._initialized = !1),
            (this.plugins = []),
            (this._initializers = {
              interactors: new Map(),
              movers: new Map(),
              updaters: new Map(),
            }),
            (this.interactors = new Map()),
            (this.movers = new Map()),
            (this.updaters = new Map()),
            (this.presets = new Map()),
            (this.effectDrawers = new Map()),
            (this.shapeDrawers = new Map()),
            (this.pathGenerators = new Map());
        }
      }
      var h = i(8128);
      class c {
        handleColor(t) {
          var e;
          let i = null !== (e = t.value.hsl) && void 0 !== e ? e : t.value;
          if (void 0 !== i.h && void 0 !== i.s && void 0 !== i.l)
            return (0, h.ve)(i);
        }
        handleRangeColor(t) {
          var e;
          let i = null !== (e = t.value.hsl) && void 0 !== e ? e : t.value;
          if (void 0 !== i.h && void 0 !== i.l)
            return (0, h.ve)({
              h: (0, o.Gu)(i.h),
              l: (0, o.Gu)(i.l),
              s: (0, o.Gu)(i.s),
            });
        }
        parseString(t) {
          if (!t.startsWith("hsl")) return;
          let e =
            /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(
              t
            );
          return e
            ? (0, h.Y6)({
                a: e.length > 4 ? (0, o.BV)(e[5]) : 1,
                h: parseInt(e[1], 10),
                l: parseInt(e[3], 10),
                s: parseInt(e[2], 10),
              })
            : void 0;
        }
        constructor() {
          (this.key = "hsl"), (this.stringPrefix = "hsl");
        }
      }
      class d {
        handleColor(t) {
          var e;
          let i = null !== (e = t.value.rgb) && void 0 !== e ? e : t.value;
          if (void 0 !== i.r) return i;
        }
        handleRangeColor(t) {
          var e;
          let i = null !== (e = t.value.rgb) && void 0 !== e ? e : t.value;
          if (void 0 !== i.r)
            return { r: (0, o.Gu)(i.r), g: (0, o.Gu)(i.g), b: (0, o.Gu)(i.b) };
        }
        parseString(t) {
          if (!t.startsWith(this.stringPrefix)) return;
          let e =
            /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i.exec(
              t
            );
          return e
            ? {
                a: e.length > 4 ? (0, o.BV)(e[5]) : 1,
                b: parseInt(e[3], 10),
                g: parseInt(e[2], 10),
                r: parseInt(e[1], 10),
              }
            : void 0;
        }
        constructor() {
          (this.key = "rgb"), (this.stringPrefix = "rgb");
        }
      }
      class f {
        constructor(t) {
          (this.type = "external"), (this.container = t);
        }
      }
      class p {
        constructor(t) {
          (this.type = "particles"), (this.container = t);
        }
      }
      var m = i(283),
        v = i(9890);
      i(5787), i(2639), i(3740), i(522), i(4578), i(7802), i(8066), i(8830);
      var g = i(1330);
      i(7408),
        i(8459),
        i(9201),
        i(4222),
        i(9989),
        i(3902),
        i(7532),
        i(1537),
        i(2121),
        i(3301),
        i(3460),
        i(7044),
        i(5611),
        i(656),
        i(5149),
        i(4560),
        i(3177),
        i(9762),
        i(6431);
      var y = i(3806),
        x = i(640);
      i(9687);
      var w = i(2455);
      let b = (function () {
        let t = new d(),
          e = new c();
        (0, h.VI)(t), (0, h.VI)(e);
        let i = new u();
        return i.init(), i;
      })();
      (0, r.Kr)() || (window.tsParticles = b);
    },
    8774: function (t, e, i) {
      i.d(e, {
        ZP: function () {
          return o;
        },
        bP: function () {
          return a;
        },
      });
      var n = i(7837),
        r = i(7437),
        s = i(2265);
      let o = (t) => {
        var e;
        let i = null !== (e = t.id) && void 0 !== e ? e : "tsparticles";
        return (
          (0, s.useEffect)(() => {
            let e;
            return (
              n.S6.load({ id: i, url: t.url, options: t.options }).then((i) => {
                var n;
                (e = i), null == (n = t.particlesLoaded) || n.call(t, i);
              }),
              () => {
                null == e || e.destroy();
              }
            );
          }, [i, t, t.url, t.options]),
          (0, r.jsx)("div", { id: i, className: t.className })
        );
      };
      async function a(t) {
        await t(n.S6);
      }
    },
    9041: function (t, e, i) {
      i.d(e, {
        S: function () {
          return n;
        },
      });
      async function n(t) {
        let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { loadParallaxMover: n } = await i.e(534).then(i.bind(i, 534)),
          { loadExternalAttractInteraction: r } = await i
            .e(100)
            .then(i.bind(i, 100)),
          { loadExternalBounceInteraction: s } = await i
            .e(7975)
            .then(i.bind(i, 7975)),
          { loadExternalBubbleInteraction: o } = await i
            .e(9489)
            .then(i.bind(i, 9489)),
          { loadExternalConnectInteraction: a } = await i
            .e(2542)
            .then(i.bind(i, 2542)),
          { loadExternalGrabInteraction: l } = await i
            .e(7823)
            .then(i.bind(i, 7823)),
          { loadExternalPauseInteraction: u } = await i
            .e(835)
            .then(i.bind(i, 835)),
          { loadExternalPushInteraction: h } = await i
            .e(4745)
            .then(i.bind(i, 4745)),
          { loadExternalRemoveInteraction: c } = await i
            .e(2809)
            .then(i.bind(i, 7940)),
          { loadExternalRepulseInteraction: d } = await i
            .e(5754)
            .then(i.bind(i, 5754)),
          { loadExternalSlowInteraction: f } = await i
            .e(8651)
            .then(i.bind(i, 9774)),
          { loadParticlesAttractInteraction: p } = await i
            .e(3036)
            .then(i.bind(i, 3036)),
          { loadParticlesCollisionsInteraction: m } = await i
            .e(6084)
            .then(i.bind(i, 6084)),
          { loadParticlesLinksInteraction: v } = await i
            .e(4352)
            .then(i.bind(i, 4352)),
          { loadEasingQuadPlugin: g } = await i.e(2358).then(i.bind(i, 2358)),
          { loadEmojiShape: y } = await i.e(5869).then(i.bind(i, 5869)),
          { loadImageShape: x } = await i.e(8627).then(i.bind(i, 8627)),
          { loadLineShape: w } = await i.e(5625).then(i.bind(i, 5625)),
          { loadPolygonShape: b } = await i.e(3870).then(i.bind(i, 3870)),
          { loadSquareShape: P } = await i.e(6154).then(i.bind(i, 6154)),
          { loadStarShape: T } = await i.e(1973).then(i.bind(i, 1973)),
          { loadLifeUpdater: S } = await i.e(2552).then(i.bind(i, 2552)),
          { loadRotateUpdater: A } = await i.e(4449).then(i.bind(i, 4449)),
          { loadStrokeColorUpdater: M } = await i.e(5014).then(i.bind(i, 5014)),
          { loadBasic: C } = await i.e(2427).then(i.bind(i, 2427));
        await n(t, !1),
          await r(t, !1),
          await s(t, !1),
          await o(t, !1),
          await a(t, !1),
          await l(t, !1),
          await u(t, !1),
          await h(t, !1),
          await c(t, !1),
          await d(t, !1),
          await f(t, !1),
          await p(t, !1),
          await m(t, !1),
          await v(t, !1),
          await g(),
          await y(t, !1),
          await x(t, !1),
          await w(t, !1),
          await b(t, !1),
          await P(t, !1),
          await T(t, !1),
          await S(t, !1),
          await A(t, !1),
          await M(t, !1),
          await C(t, e);
      }
    },
    4098: function (t, e, i) {
      i.d(e, {
        _: function () {
          return h;
        },
      });
      var n = i(9908),
        r = i(1648),
        s = i(2869);
      function o(t, e) {
        [...e].reverse().forEach((i) => {
          let n = t.getVariant(i);
          n && (0, r.C)(t, n),
            t.variantChildren &&
              t.variantChildren.forEach((t) => {
                o(t, e);
              });
        });
      }
      function a() {
        let t = !1,
          e = new Set(),
          i = {
            subscribe: (t) => (e.add(t), () => void e.delete(t)),
            start(i, r) {
              (0, n.k)(
                t,
                "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
              );
              let o = [];
              return (
                e.forEach((t) => {
                  o.push((0, s.d)(t, i, { transitionOverride: r }));
                }),
                Promise.all(o)
              );
            },
            set: (i) => (
              (0, n.k)(
                t,
                "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
              ),
              e.forEach((t) => {
                Array.isArray(i)
                  ? o(t, i)
                  : "string" == typeof i
                  ? o(t, [i])
                  : (0, r.C)(t, i);
              })
            ),
            stop() {
              e.forEach((t) => {
                !(function (t) {
                  t.values.forEach((t) => t.stop());
                })(t);
              });
            },
            mount: () => (
              (t = !0),
              () => {
                (t = !1), i.stop();
              }
            ),
          };
        return i;
      }
      var l = i(2435),
        u = i(5526);
      let h = function () {
        let t = (0, l.h)(a);
        return (0, u.L)(t.mount, []), t;
      };
    },
    2309: function (t, e, i) {
      let n;
      i.d(e, {
        v: function () {
          return tC;
        },
      });
      var r,
        s = i(3303),
        o = i(618);
      let a = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        l = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        u = { type: "keyframes", duration: 0.8 },
        h = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        c = (t, e) => {
          let { keyframes: i } = e;
          return i.length > 2
            ? u
            : o.G.has(t)
            ? t.startsWith("scale")
              ? l(i[1])
              : a
            : h;
        };
      var d = i(5566),
        f = i(6832);
      let p = { current: !1 },
        m = (t) => null !== t;
      function v(t, e) {
        let { repeat: i, repeatType: n = "loop" } = e,
          r = t.filter(m),
          s = i && "loop" !== n && i % 2 == 1 ? 0 : r.length - 1;
        return r[s];
      }
      var g = i(4205),
        y = i(3791),
        x = i(4918),
        w = i(3393),
        b = i(4178),
        P = i(9908),
        T = i(2263);
      let S = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (T.P.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class A {
        get resolved() {
          return this._resolved || (0, b.m)(), this._resolved;
        }
        onKeyframesResolved(t) {
          let {
            name: e,
            type: i,
            velocity: n,
            delay: r,
            onComplete: s,
            onUpdate: o,
          } = this.options;
          if (
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              let s = t[t.length - 1],
                o = S(r, e),
                a = S(s, e);
              return (
                (0, P.K)(
                  o === a,
                  "You are trying to animate "
                    .concat(e, ' from "')
                    .concat(r, '" to "')
                    .concat(s, '". ')
                    .concat(
                      r,
                      " is not an animatable value - to enable this animation set "
                    )
                    .concat(r, " to a value animatable to ")
                    .concat(s, " via the `style` property.")
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && n))
              );
            })(t, e, i, n)
          ) {
            if (p.current || !r) {
              let e = v(t, this.options);
              null == o || o(e),
                null == s || s(),
                this.resolveFinishedPromise(),
                this.updateFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          (this._resolved = { keyframes: t, ...this.initPlayback(t) }),
            this.onPostResolved();
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = () => {
              t(), this.updateFinishedPromise();
            };
          });
        }
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
      }
      var M = i(2181);
      function C(t, e, i) {
        let n = Math.max(e - 5, 0);
        return (0, M.R)(i - t(n), e - n);
      }
      var D = i(2476);
      function E(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let V = ["duration", "bounce"],
        k = ["stiffness", "damping", "mass"];
      function R(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function L(t) {
        let e,
          { keyframes: i, restDelta: n, restSpeed: r, ...o } = t,
          a = i[0],
          l = i[i.length - 1],
          u = { done: !1, value: a },
          {
            stiffness: h,
            damping: c,
            mass: d,
            duration: f,
            velocity: p,
            isResolvedFromDuration: m,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!R(t, k) && R(t, V)) {
              let i = (function (t) {
                let e,
                  i,
                  {
                    duration: n = 800,
                    bounce: r = 0.25,
                    velocity: o = 0,
                    mass: a = 1,
                  } = t;
                (0, P.K)(
                  n <= (0, s.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let l = 1 - r;
                (l = (0, D.u)(0.05, 1, l)),
                  (n = (0, D.u)(0.01, 10, (0, s.X)(n))),
                  l < 1
                    ? ((e = (t) => {
                        let e = t * l,
                          i = e * n;
                        return 0.001 - ((e - o) / E(t, l)) * Math.exp(-i);
                      }),
                      (i = (t) => {
                        let i = t * l * n,
                          r = Math.pow(l, 2) * Math.pow(t, 2) * n,
                          s = E(Math.pow(t, 2), l);
                        return (
                          ((i * o + o - r) *
                            Math.exp(-i) *
                            (-e(t) + 0.001 > 0 ? -1 : 1)) /
                          s
                        );
                      }))
                    : ((e = (t) =>
                        -0.001 + Math.exp(-t * n) * ((t - o) * n + 1)),
                      (i = (t) => n * n * (o - t) * Math.exp(-t * n)));
                let u = (function (t, e, i) {
                  let n = i;
                  for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                  return n;
                })(e, i, 5 / n);
                if (((n = (0, s.w)(n)), isNaN(u)))
                  return { stiffness: 100, damping: 10, duration: n };
                {
                  let t = Math.pow(u, 2) * a;
                  return {
                    stiffness: t,
                    damping: 2 * l * Math.sqrt(a * t),
                    duration: n,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...o, velocity: -(0, s.X)(o.velocity || 0) }),
          v = p || 0,
          g = c / (2 * Math.sqrt(h * d)),
          y = l - a,
          x = (0, s.X)(Math.sqrt(h / d)),
          w = 5 > Math.abs(y);
        if ((r || (r = w ? 0.01 : 2), n || (n = w ? 0.005 : 0.5), g < 1)) {
          let t = E(x, g);
          e = (e) =>
            l -
            Math.exp(-g * x * e) *
              (((v + g * x * y) / t) * Math.sin(t * e) + y * Math.cos(t * e));
        } else if (1 === g)
          e = (t) => l - Math.exp(-x * t) * (y + (v + x * y) * t);
        else {
          let t = x * Math.sqrt(g * g - 1);
          e = (e) => {
            let i = Math.exp(-g * x * e),
              n = Math.min(t * e, 300);
            return (
              l -
              (i * ((v + g * x * y) * Math.sinh(n) + t * y * Math.cosh(n))) / t
            );
          };
        }
        return {
          calculatedDuration: (m && f) || null,
          next: (t) => {
            let i = e(t);
            if (m) u.done = t >= f;
            else {
              let s = v;
              0 !== t && (s = g < 1 ? C(e, t, i) : 0);
              let o = Math.abs(s) <= r,
                a = Math.abs(l - i) <= n;
              u.done = o && a;
            }
            return (u.value = u.done ? l : i), u;
          },
        };
      }
      function B(t) {
        let e,
          i,
          {
            keyframes: n,
            velocity: r = 0,
            power: s = 0.8,
            timeConstant: o = 325,
            bounceDamping: a = 10,
            bounceStiffness: l = 500,
            modifyTarget: u,
            min: h,
            max: c,
            restDelta: d = 0.5,
            restSpeed: f,
          } = t,
          p = n[0],
          m = { done: !1, value: p },
          v = (t) => (void 0 !== h && t < h) || (void 0 !== c && t > c),
          g = (t) =>
            void 0 === h
              ? c
              : void 0 === c
              ? h
              : Math.abs(h - t) < Math.abs(c - t)
              ? h
              : c,
          y = s * r,
          x = p + y,
          w = void 0 === u ? x : u(x);
        w !== x && (y = w - p);
        let b = (t) => -y * Math.exp(-t / o),
          P = (t) => w + b(t),
          T = (t) => {
            let e = b(t),
              i = P(t);
            (m.done = Math.abs(e) <= d), (m.value = m.done ? w : i);
          },
          S = (t) => {
            v(m.value) &&
              ((e = t),
              (i = L({
                keyframes: [m.value, g(m.value)],
                velocity: C(P, t, m.value),
                damping: a,
                stiffness: l,
                restDelta: d,
                restSpeed: f,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let n = !1;
              return (i || void 0 !== e || ((n = !0), T(t), S(t)),
              void 0 !== e && t >= e)
                ? i.next(t - e)
                : (n || T(t), m);
            },
          }
        );
      }
      let j = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function F(t, e, i, n) {
        if (t === e && i === n) return w.Z;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do (s = j((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : j(r(t), e, n));
      }
      let O = F(0.42, 0, 1, 1),
        z = F(0, 0, 0.58, 1),
        I = F(0.42, 0, 0.58, 1),
        W = (t) => Array.isArray(t) && "number" != typeof t[0];
      var _ = i(4354),
        U = i(7932),
        Z = i(8841);
      let H = F(0.33, 1.53, 0.69, 0.99),
        N = (0, Z.M)(H),
        X = (0, U.o)(N),
        K = {
          linear: w.Z,
          easeIn: O,
          easeInOut: I,
          easeOut: z,
          circIn: _.Z7,
          circInOut: _.X7,
          circOut: _.Bn,
          backIn: N,
          backInOut: X,
          backOut: H,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * N(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        G = (t) => {
          if (Array.isArray(t)) {
            (0, P.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return F(e, i, n, r);
          }
          return "string" == typeof t
            ? ((0, P.k)(
                void 0 !== K[t],
                "Invalid easing type '".concat(t, "'")
              ),
              K[t])
            : t;
        };
      var Y = i(9280),
        $ = i(9049),
        q = i(5312);
      function J(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      var Q = i(4184),
        tt = i(6352),
        te = i(9808);
      let ti = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        tn = [Q.$, tt.m, te.J],
        tr = (t) => tn.find((e) => e.test(t));
      function ts(t) {
        let e = tr(t);
        (0, P.k)(
          !!e,
          "'".concat(
            t,
            "' is not an animatable color. Use the equivalent color code instead."
          )
        );
        let i = e.parse(t);
        return (
          e === te.J &&
            (i = (function (t) {
              let { hue: e, saturation: i, lightness: n, alpha: r } = t;
              (e /= 360), (n /= 100);
              let s = 0,
                o = 0,
                a = 0;
              if ((i /= 100)) {
                let t = n < 0.5 ? n * (1 + i) : n + i - n * i,
                  r = 2 * n - t;
                (s = J(r, t, e + 1 / 3)),
                  (o = J(r, t, e)),
                  (a = J(r, t, e - 1 / 3));
              } else s = o = a = n;
              return {
                red: Math.round(255 * s),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: r,
              };
            })(i)),
          i
        );
      }
      let to = (t, e) => {
        let i = ts(t),
          n = ts(e),
          r = { ...i };
        return (t) => (
          (r.red = ti(i.red, n.red, t)),
          (r.green = ti(i.green, n.green, t)),
          (r.blue = ti(i.blue, n.blue, t)),
          (r.alpha = (0, q.t)(i.alpha, n.alpha, t)),
          tt.m.transform(r)
        );
      };
      var ta = i(2809),
        tl = i(7126);
      function tu(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      function th(t, e) {
        return (i) => (0, q.t)(t, e, i);
      }
      function tc(t) {
        return "number" == typeof t
          ? th
          : "string" == typeof t
          ? (0, tl.t)(t)
            ? tu
            : ta.$.test(t)
            ? to
            : tp
          : Array.isArray(t)
          ? td
          : "object" == typeof t
          ? ta.$.test(t)
            ? to
            : tf
          : tu;
      }
      function td(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => tc(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function tf(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = tc(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let tp = (t, e) => {
        let i = T.P.createTransformer(e),
          n = (0, T.V)(t),
          r = (0, T.V)(e);
        return n.indexes.var.length === r.indexes.var.length &&
          n.indexes.color.length === r.indexes.color.length &&
          n.indexes.number.length >= r.indexes.number.length
          ? (0, Y.z)(
              td(
                (function (t, e) {
                  var i;
                  let n = [],
                    r = { color: 0, var: 0, number: 0 };
                  for (let s = 0; s < e.values.length; s++) {
                    let o = e.types[s],
                      a = t.indexes[o][r[o]],
                      l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                    (n[s] = l), r[o]++;
                  }
                  return n;
                })(n, r),
                r.values
              ),
              i
            )
          : ((0, P.K)(
              !0,
              "Complex values '"
                .concat(t, "' and '")
                .concat(
                  e,
                  "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
                )
            ),
            tu(t, e));
      };
      function tm(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, q.t)(t, e, i)
          : tc(t)(t, e);
      }
      function tv(t) {
        let {
            duration: e = 300,
            keyframes: i,
            times: n,
            ease: r = "easeInOut",
          } = t,
          s = W(r) ? r.map(G) : G(r),
          o = { done: !1, value: i[0] },
          a = (function (t, e) {
            let {
                clamp: i = !0,
                ease: n,
                mixer: r,
              } = arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
              s = t.length;
            if (
              ((0, P.k)(
                s === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && t[0] === t[1]) return () => e[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let n = [],
                  r = i || tm,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = r(t[i], t[i + 1]);
                  if (e) {
                    let t = Array.isArray(e) ? e[i] || w.Z : e;
                    s = (0, Y.z)(t, s);
                  }
                  n.push(s);
                }
                return n;
              })(e, n, r),
              a = o.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let n = (0, $.Y)(t[i], t[i + 1], e);
                return o[i](n);
              };
            return i ? (e) => l((0, D.u)(t[0], t[s - 1], e)) : l;
          })(
            (n && n.length === i.length
              ? n
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let r = (0, $.Y)(0, e, n);
                        t.push((0, q.t)(i, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(i)
            ).map((t) => t * e),
            i,
            {
              ease: Array.isArray(s)
                ? s
                : i.map(() => s || I).splice(0, i.length - 1),
            }
          );
        return {
          calculatedDuration: e,
          next: (t) => ((o.value = a(t)), (o.done = t >= e), o),
        };
      }
      let tg = (t) => {
          let e = (e) => {
            let { timestamp: i } = e;
            return t(i);
          };
          return {
            start: () => g.Wi.update(e, !0),
            stop: () => (0, g.Pn)(e),
            now: () =>
              g.frameData.isProcessing ? g.frameData.timestamp : y.X.now(),
          };
        },
        ty = { decay: B, inertia: B, tween: tv, keyframes: tv, spring: L },
        tx = (t) => t / 100;
      class tw extends A {
        initPlayback(t) {
          let e, i;
          let {
              type: n = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = ty[n] || tv;
          l !== tv &&
            "number" != typeof t[0] &&
            ((e = (0, Y.z)(tx, tm(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(u));
          let { calculatedDuration: h } = u,
            c = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: c,
            totalDuration: c * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            {
              generator: i,
              mirroredGenerator: n,
              mapPercentToKeyframes: r,
              keyframes: s,
              calculatedDuration: o,
              totalDuration: a,
              resolvedDuration: l,
            } = this.resolved;
          if (null === this.startTime) return i.next(0);
          let {
            delay: u,
            repeat: h,
            repeatType: c,
            repeatDelay: d,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - a / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let p = this.currentTime - u * (this.speed >= 0 ? 1 : -1),
            m = this.speed >= 0 ? p < 0 : p > a;
          (this.currentTime = Math.max(p, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = a);
          let v = this.currentTime,
            g = i;
          if (h) {
            let t = Math.min(this.currentTime, a) / l,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, h + 1)) % 2 &&
                ("reverse" === c
                  ? ((i = 1 - i), d && (i -= d / l))
                  : "mirror" === c && (g = n)),
              (v = (0, D.u)(0, 1, i) * l);
          }
          let y = m ? { done: !1, value: s[0] } : g.next(v);
          r && (y.value = r(y.value));
          let { done: x } = y;
          m ||
            null === o ||
            (x =
              this.speed >= 0 ? this.currentTime >= a : this.currentTime <= 0);
          let w =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && x));
          return f && f(y.value), w && this.finish(), y;
        }
        get duration() {
          return (0, s.X)(this.resolved.calculatedDuration);
        }
        get time() {
          return (0, s.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, s.w)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, s.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = tg, onPlay: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : (this.startTime && "finished" !== this.state) ||
              (this.startTime = i),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        stop() {
          if (((this.isStopped = !0), "idle" === this.state)) return;
          this.state = "idle";
          let { onStop: t } = this.options;
          t && t(), this.teardown();
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
        constructor({ KeyframeResolver: t = b.e, ...e }) {
          super(e),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.state = "idle");
          let { name: i, motionValue: n, keyframes: r } = this.options,
            s = (t) => this.onKeyframesResolved(t);
          i && n && n.owner
            ? (this.resolver = n.owner.resolveKeyframes(r, s, i, n))
            : (this.resolver = new t(r, s, i, n)),
            this.resolver.scheduleResolve();
        }
      }
      let tb = (t) => Array.isArray(t) && "number" == typeof t[0],
        tP = (t) => {
          let [e, i, n, r] = t;
          return "cubic-bezier("
            .concat(e, ", ")
            .concat(i, ", ")
            .concat(n, ", ")
            .concat(r, ")");
        },
        tT = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tP([0, 0.65, 0.55, 1]),
          circOut: tP([0.55, 0, 1, 0.45]),
          backIn: tP([0.31, 0.01, 0.66, -0.59]),
          backOut: tP([0.33, 1.53, 0.69, 0.99]),
        },
        tS =
          ((r = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === n && (n = r()), n)),
        tA = new Set(["opacity", "clipPath", "filter", "transform"]);
      class tM extends A {
        initPlayback(t) {
          var e;
          let i = this.options.duration || 300;
          if (
            "spring" === (e = this.options).type ||
            "backgroundColor" === e.name ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && tT[e]) ||
                tb(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(e.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: n,
                motionValue: r,
                ...s
              } = this.options,
              o = (function (t, e) {
                let i = new tw({ ...e, keyframes: t, repeat: 0, delay: 0 }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  r.push((n = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, s);
            (t = o.keyframes),
              (i = o.duration),
              (this.options.times = o.times),
              (this.options.ease = o.ease);
          }
          let { motionValue: n, name: r } = this.options,
            s = (function (t, e, i) {
              let {
                  delay: n = 0,
                  duration: r = 300,
                  repeat: s = 0,
                  repeatType: o = "loop",
                  ease: a,
                  times: l,
                } = arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {},
                u = { [e]: i };
              l && (u.offset = l);
              let h = (function t(e) {
                if (e)
                  return tb(e) ? tP(e) : Array.isArray(e) ? e.map(t) : tT[e];
              })(a);
              return (
                Array.isArray(h) && (u.easing = h),
                t.animate(u, {
                  delay: n,
                  duration: r,
                  easing: Array.isArray(h) ? "linear" : h,
                  fill: "both",
                  iterations: s + 1,
                  direction: "reverse" === o ? "alternate" : "normal",
                })
              );
            })(n.owner.current, r, t, { ...this.options, duration: i });
          return (
            (s.startTime = y.X.now()),
            this.pendingTimeline
              ? ((s.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (s.onfinish = () => {
                  let { onComplete: e } = this.options;
                  n.set(v(t, this.options)),
                    e && e(),
                    this.cancel(),
                    this.resolveFinishedPromise(),
                    this.updateFinishedPromise();
                }),
            { animation: s, duration: i, keyframes: t }
          );
        }
        get duration() {
          let { duration: t } = this.resolved;
          return (0, s.X)(t);
        }
        get time() {
          let { animation: t } = this.resolved;
          return (0, s.X)(t.currentTime || 0);
        }
        set time(t) {
          let { animation: e } = this.resolved;
          e.currentTime = (0, s.w)(t);
        }
        get speed() {
          let { animation: t } = this.resolved;
          return t.playbackRate;
        }
        set speed(t) {
          let { animation: e } = this.resolved;
          e.playbackRate = t;
        }
        get state() {
          let { animation: t } = this.resolved;
          return t.playState;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { animation: e } = this.resolved;
            (e.timeline = t), (e.onfinish = null);
          } else this.pendingTimeline = t;
          return w.Z;
        }
        play() {
          if (this.isStopped) return;
          let { animation: t } = this.resolved;
          t.play();
        }
        pause() {
          let { animation: t } = this.resolved;
          t.pause();
        }
        stop() {
          this.isStopped = !0;
          let { animation: t, keyframes: e } = this.resolved;
          if ("idle" !== t.playState && "finished" !== t.playState) {
            if (this.time) {
              let {
                  motionValue: t,
                  onUpdate: i,
                  onComplete: n,
                  ...r
                } = this.options,
                s = new tw({ ...r, keyframes: e });
              t.setWithVelocity(
                s.sample(this.time - 10).value,
                s.sample(this.time).value,
                10
              );
            }
            this.cancel();
          }
        }
        complete() {
          this.resolved.animation.finish();
        }
        cancel() {
          this.resolved.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: o,
          } = t;
          return (
            tS() &&
            i &&
            tA.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== o
          );
        }
        constructor(t) {
          super(t);
          let { name: e, motionValue: i, keyframes: n } = this.options;
          (this.resolver = new x.s(
            n,
            (t) => this.onKeyframesResolved(t),
            e,
            i
          )),
            this.resolver.scheduleResolve();
        }
      }
      let tC = function (t, e, i) {
        let n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          r = arguments.length > 4 ? arguments[4] : void 0,
          o = arguments.length > 5 ? arguments[5] : void 0;
        return (a) => {
          let l = (0, d.e)(n, t) || {},
            u = l.delay || n.delay || 0,
            { elapsed: h = 0 } = n;
          h -= (0, s.w)(u);
          let m = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...l,
            delay: -h,
            onUpdate: (t) => {
              e.set(t), l.onUpdate && l.onUpdate(t);
            },
            onComplete: () => {
              a(), l.onComplete && l.onComplete();
            },
            name: t,
            motionValue: e,
            element: o ? void 0 : r,
          };
          (0, d.r)(l) || (m = { ...m, ...c(t, m) }),
            m.duration && (m.duration = (0, s.w)(m.duration)),
            m.repeatDelay && (m.repeatDelay = (0, s.w)(m.repeatDelay)),
            void 0 !== m.from && (m.keyframes[0] = m.from);
          let y = !1;
          if (
            (!1 === m.type && ((m.duration = 0), 0 === m.delay && (y = !0)),
            (p.current || f.c.skipAnimations) &&
              ((y = !0), (m.duration = 0), (m.delay = 0)),
            y && !o && void 0 !== e.get())
          ) {
            let t = v(m.keyframes, l);
            if (void 0 !== t) {
              g.Wi.update(() => {
                m.onUpdate(t), m.onComplete();
              });
              return;
            }
          }
          return !o && tM.supports(m) ? new tM(m) : new tw(m);
        };
      };
    },
    2869: function (t, e, i) {
      i.d(e, {
        d: function () {
          return p;
        },
      });
      var n = i(1148),
        r = i(618),
        s = i(9043),
        o = i(2309),
        a = i(2212),
        l = i(1648),
        u = i(5566),
        h = i(4205);
      function c(t, e) {
        var i;
        let {
            delay: n = 0,
            transitionOverride: c,
            type: d,
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {},
          {
            transition: f = t.getDefaultTransition(),
            transitionEnd: p,
            ...m
          } = e,
          v = t.getValue("willChange");
        c && (f = c);
        let g = [],
          y = d && t.animationState && t.animationState.getState()[d];
        for (let e in m) {
          let l = t.getValue(
              e,
              null !== (i = t.latestValues[e]) && void 0 !== i ? i : null
            ),
            h = m[e];
          if (
            void 0 === h ||
            (y &&
              (function (t, e) {
                let { protectedKeys: i, needsAnimating: n } = t,
                  r = i.hasOwnProperty(e) && !0 !== n[e];
                return (n[e] = !1), r;
              })(y, e))
          )
            continue;
          let c = { delay: n, elapsed: 0, ...(0, u.e)(f || {}, e) },
            d = !1;
          if (window.HandoffAppearAnimations) {
            let i = t.getProps()[s.M];
            if (i) {
              let t = window.HandoffAppearAnimations(i, e);
              null !== t && ((c.elapsed = t), (d = !0));
            }
          }
          l.start(
            (0, o.v)(
              e,
              l,
              h,
              t.shouldReduceMotion && r.G.has(e) ? { type: !1 } : c,
              t,
              d
            )
          );
          let p = l.animation;
          p &&
            ((0, a.L)(v) && (v.add(e), p.then(() => v.remove(e))), g.push(p));
        }
        return (
          p &&
            Promise.all(g).then(() => {
              h.Wi.update(() => {
                p && (0, l.C)(t, p);
              });
            }),
          g
        );
      }
      function d(t, e) {
        var i;
        let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          s = (0, n.x)(
            t,
            e,
            "exit" === r.type
              ? null === (i = t.presenceContext) || void 0 === i
                ? void 0
                : i.custom
              : void 0
          ),
          { transition: o = t.getDefaultTransition() || {} } = s || {};
        r.transitionOverride && (o = r.transitionOverride);
        let a = s ? () => Promise.all(c(t, s, r)) : () => Promise.resolve(),
          l =
            t.variantChildren && t.variantChildren.size
              ? function () {
                  let i =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    {
                      delayChildren: n = 0,
                      staggerChildren: s,
                      staggerDirection: a,
                    } = o;
                  return (function (t, e) {
                    let i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      n =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 0,
                      r =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 1,
                      s = arguments.length > 5 ? arguments[5] : void 0,
                      o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l =
                        1 === r
                          ? function () {
                              let t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0;
                              return t * n;
                            }
                          : function () {
                              let t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0;
                              return a - t * n;
                            };
                    return (
                      Array.from(t.variantChildren)
                        .sort(f)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              d(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, n + i, s, a, r);
                }
              : () => Promise.resolve(),
          { when: u } = o;
        if (!u) return Promise.all([a(), l(r.delay)]);
        {
          let [t, e] = "beforeChildren" === u ? [a, l] : [l, a];
          return t().then(() => e());
        }
      }
      function f(t, e) {
        return t.sortNodePosition(e);
      }
      function p(t, e) {
        let i,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if ((t.notify("AnimationStart", e), Array.isArray(e)))
          i = Promise.all(e.map((e) => d(t, e, r)));
        else if ("string" == typeof e) i = d(t, e, r);
        else {
          let s = "function" == typeof e ? (0, n.x)(t, e, r.custom) : e;
          i = Promise.all(c(t, s, r));
        }
        return i.then(() => {
          h.Wi.postRender(() => {
            t.notify("AnimationComplete", e);
          });
        });
      }
    },
    9043: function (t, e, i) {
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = "data-" + (0, i(5998).D)("framerAppearId");
    },
    561: function (t, e, i) {
      i.d(e, {
        C: function () {
          return n;
        },
      });
      let n = (t) => Array.isArray(t);
    },
    5566: function (t, e, i) {
      function n(t) {
        let {
          when: e,
          delay: i,
          delayChildren: n,
          staggerChildren: r,
          staggerDirection: s,
          repeat: o,
          repeatType: a,
          repeatDelay: l,
          from: u,
          elapsed: h,
          ...c
        } = t;
        return !!Object.keys(c).length;
      }
      function r(t, e) {
        return t[e] || t.default || t;
      }
      i.d(e, {
        e: function () {
          return r;
        },
        r: function () {
          return n;
        },
      });
    },
    4354: function (t, e, i) {
      i.d(e, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return s;
        },
      });
      var n = i(7932),
        r = i(8841);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, r.M)(s),
        a = (0, n.o)(s);
    },
    7932: function (t, e, i) {
      i.d(e, {
        o: function () {
          return n;
        },
      });
      let n = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    8841: function (t, e, i) {
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    7839: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = i(6832);
      class r {
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
      }
      let s = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function o(t, e) {
        let i = !1,
          o = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = s.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new r(),
                  i = new r(),
                  n = 0,
                  s = !1,
                  o = !1,
                  a = new WeakSet(),
                  l = {
                    schedule: function (t) {
                      let r =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1],
                        o =
                          arguments.length > 2 &&
                          void 0 !== arguments[2] &&
                          arguments[2],
                        l = o && s,
                        u = l ? e : i;
                      return (
                        r && a.add(t),
                        u.add(t) && l && s && (n = e.order.length),
                        t
                      );
                    },
                    cancel: (t) => {
                      i.remove(t), a.delete(t);
                    },
                    process: (r) => {
                      if (s) {
                        o = !0;
                        return;
                      }
                      if (
                        ((s = !0),
                        ([e, i] = [i, e]),
                        i.clear(),
                        (n = e.order.length))
                      )
                        for (let i = 0; i < n; i++) {
                          let n = e.order[i];
                          a.has(n) && (l.schedule(n), t()), n(r);
                        }
                      (s = !1), o && ((o = !1), l.process(r));
                    },
                  };
                return l;
              })(() => (i = !0))),
              t
            ),
            {}
          ),
          u = (t) => {
            l[t].process(a);
          },
          h = () => {
            let r = n.c.useManualTiming ? a.timestamp : performance.now();
            (i = !1),
              (a.delta = o
                ? 1e3 / 60
                : Math.max(Math.min(r - a.timestamp, 40), 1)),
              (a.timestamp = r),
              (a.isProcessing = !0),
              s.forEach(u),
              (a.isProcessing = !1),
              i && e && ((o = !1), t(h));
          },
          c = () => {
            (i = !0), (o = !0), a.isProcessing || t(h);
          };
        return {
          schedule: s.reduce((t, e) => {
            let n = l[e];
            return (
              (t[e] = function (t) {
                let e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                return i || c(), n.schedule(t, e, r);
              }),
              t
            );
          }, {}),
          cancel: (t) => s.forEach((e) => l[e].cancel(t)),
          state: a,
          steps: l,
        };
      }
    },
    4205: function (t, e, i) {
      i.d(e, {
        Pn: function () {
          return s;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return r;
        },
        frameData: function () {
          return o;
        },
      });
      var n = i(3393);
      let {
        schedule: r,
        cancel: s,
        state: o,
        steps: a,
      } = (0, i(7839).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.Z,
        !0
      );
    },
    3791: function (t, e, i) {
      let n;
      i.d(e, {
        X: function () {
          return a;
        },
      });
      var r = i(6832),
        s = i(4205);
      function o() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              s.frameData.isProcessing || r.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(o);
        },
      };
    },
    4918: function (t, e, i) {
      i.d(e, {
        s: function () {
          return b;
        },
      });
      var n = i(6894),
        r = i(9908),
        s = i(4829),
        o = i(7126);
      let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var l = i(618),
        u = i(5218),
        h = i(2724);
      let c = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        d = (t) => t === u.Rx || t === h.px,
        f = (t, e) => parseFloat(t.split(", ")[e]),
        p = (t, e) => (i, n) => {
          let { transform: r } = n;
          if ("none" === r || !r) return 0;
          let s = r.match(/^matrix3d\((.+)\)$/u);
          if (s) return f(s[1], e);
          {
            let e = r.match(/^matrix\((.+)\)$/u);
            return e ? f(e[1], t) : 0;
          }
        },
        m = new Set(["x", "y", "z"]),
        v = l._.filter((t) => !m.has(t)),
        g = {
          width: (t, e) => {
            let { x: i } = t,
              { paddingLeft: n = "0", paddingRight: r = "0" } = e;
            return i.max - i.min - parseFloat(n) - parseFloat(r);
          },
          height: (t, e) => {
            let { y: i } = t,
              { paddingTop: n = "0", paddingBottom: r = "0" } = e;
            return i.max - i.min - parseFloat(n) - parseFloat(r);
          },
          top: (t, e) => {
            let { top: i } = e;
            return parseFloat(i);
          },
          left: (t, e) => {
            let { left: i } = e;
            return parseFloat(i);
          },
          bottom: (t, e) => {
            let { y: i } = t,
              { top: n } = e;
            return parseFloat(n) + (i.max - i.min);
          },
          right: (t, e) => {
            let { x: i } = t,
              { left: n } = e;
            return parseFloat(n) + (i.max - i.min);
          },
          x: p(4, 13),
          y: p(5, 14),
        };
      (g.translateX = g.x), (g.translateY = g.y);
      var y = i(1921),
        x = i(4178),
        w = i(3462);
      class b extends x.e {
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e.current) return;
          let l = [];
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            var u;
            let h = t[i];
            if ("string" == typeof h && (0, o.t)(h)) {
              let n = (function t(e, i) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1;
                (0, r.k)(
                  n <= 4,
                  'Max CSS variable fallback depth detected in property "'.concat(
                    e,
                    '". This may indicate a circular fallback dependency.'
                  )
                );
                let [l, u] = (function (t) {
                  let e = a.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return ["--".concat(null != i ? i : n), r];
                })(e);
                if (!l) return;
                let h = window.getComputedStyle(i).getPropertyValue(l);
                if (h) {
                  let t = h.trim();
                  return (0, s.P)(t) ? parseFloat(t) : t;
                }
                return (0, o.t)(u) ? t(u, i, n + 1) : u;
              })(h, e.current);
              void 0 !== n && (t[i] = n);
            }
            ("number" == typeof (u = t[i])
              ? 0 === u
              : null === u || "none" === u || "0" === u || (0, n.W)(u)) &&
              l.push(i);
          }
          if (
            (l.length &&
              (function (t, e, i) {
                let n,
                  r = 0;
                for (; r < t.length && !n; )
                  "string" == typeof t[r] &&
                    "none" !== t[r] &&
                    "0" !== t[r] &&
                    (n = t[r]),
                    r++;
                if (n && i) for (let r of e) t[r] = (0, w.T)(i, n);
              })(t, l, i),
            !c.has(i) || 2 !== t.length)
          )
            return;
          let [h, f] = t,
            p = (0, y.C)(h),
            m = (0, y.C)(f);
          if (p && m && p !== m) {
            if (d(p) && d(m))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        unsetTransforms() {
          let { element: t, name: e, unresolvedKeyframes: i } = this;
          if (!t.current) return;
          this.removedTransforms = (function (t) {
            let e = [];
            return (
              v.forEach((i) => {
                let n = t.getValue(i);
                void 0 !== n &&
                  (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0));
              }),
              e.length && t.render(),
              e
            );
          })(t);
          let n = i[i.length - 1];
          t.getValue(e, n).jump(n, !1);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          t.current &&
            ("height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = g[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin));
        }
        renderEndStyles() {
          this.element.render();
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1),
            (n[n.length - 1] = g[i](
              e.measureViewportBox(),
              window.getComputedStyle(e.current)
            )),
            "height" === i &&
              void 0 !== this.suspendedScrollY &&
              window.scrollTo(0, this.suspendedScrollY),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach((t) => {
                let [i, n] = t;
                e.getValue(i).set(n);
              });
        }
        constructor(t, e, i, n) {
          super(t, e, i, n, null == n ? void 0 : n.owner, !0);
        }
      }
    },
    5142: function (t, e, i) {
      i.d(e, {
        E: function () {
          return i6;
        },
      });
      var n,
        r = i(2265);
      let s = (0, r.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        o = (0, r.createContext)({}),
        a = (0, r.createContext)(null);
      var l = i(5526);
      let u = (0, r.createContext)({ strict: !1 });
      var h = i(9043);
      let { schedule: c, cancel: d } = (0, i(7839).Z)(queueMicrotask, !1);
      function f(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function p(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function m(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      let v = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        g = ["initial", ...v];
      function y(t) {
        return m(t.animate) || g.some((e) => p(t[e]));
      }
      function x(t) {
        return !!(y(t) || t.variants);
      }
      function w(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let b = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        P = {};
      for (let t in b) P[t] = { isEnabled: (e) => b[t].some((t) => !!e[t]) };
      var T = i(1702);
      let S = (0, r.createContext)({}),
        A = (0, r.createContext)({}),
        M = Symbol.for("motionComponentSymbol"),
        C = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function D(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (C.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let E = {};
      var V = i(618);
      function k(t, e) {
        let { layout: i, layoutId: n } = e;
        return (
          V.G.has(t) ||
          t.startsWith("origin") ||
          ((i || void 0 !== n) && (!!E[t] || "opacity" === t))
        );
      }
      var R = i(2702);
      let L = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        B = V._.length;
      var j = i(7126);
      let F = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var O = i(7346);
      function z(t, e, i, n) {
        let { style: r, vars: s, transform: o, transformOrigin: a } = t,
          l = !1,
          u = !1,
          h = !0;
        for (let t in e) {
          let i = e[t];
          if ((0, j.f)(t)) {
            s[t] = i;
            continue;
          }
          let n = O.j[t],
            c = F(i, n);
          if (V.G.has(t)) {
            if (((l = !0), (o[t] = c), !h)) continue;
            i !== (n.default || 0) && (h = !1);
          } else t.startsWith("origin") ? ((u = !0), (a[t] = c)) : (r[t] = c);
        }
        if (
          (!e.transform &&
            (l || n
              ? (r.transform = (function (t, e, i, n) {
                  let {
                      enableHardwareAcceleration: r = !0,
                      allowTransformNone: s = !0,
                    } = e,
                    o = "";
                  for (let e = 0; e < B; e++) {
                    let i = V._[e];
                    if (void 0 !== t[i]) {
                      let e = L[i] || i;
                      o += "".concat(e, "(").concat(t[i], ") ");
                    }
                  }
                  return (
                    r && !t.z && (o += "translateZ(0)"),
                    (o = o.trim()),
                    n ? (o = n(t, i ? "" : o)) : s && i && (o = "none"),
                    o
                  );
                })(t.transform, i, h, n))
              : r.transform && (r.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
          r.transformOrigin = "".concat(t, " ").concat(e, " ").concat(i);
        }
      }
      let I = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function W(t, e, i) {
        for (let n in e) (0, R.i)(e[n]) || k(n, i) || (t[n] = e[n]);
      }
      let _ = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function U(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          _.has(t)
        );
      }
      let Z = (t) => !U(t);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (Z = (t) => (t.startsWith("on") ? !U(t) : n(t)));
      } catch (t) {}
      var H = i(2724);
      function N(t, e, i) {
        return "string" == typeof t ? t : H.px.transform(e + i * t);
      }
      let X = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        K = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function G(t, e, i, n, r) {
        let {
          attrX: s,
          attrY: o,
          attrScale: a,
          originX: l,
          originY: u,
          pathLength: h,
          pathSpacing: c = 1,
          pathOffset: d = 0,
          ...f
        } = e;
        if ((z(t, f, i, r), n)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: p, style: m, dimensions: v } = t;
        p.transform && (v && (m.transform = p.transform), delete p.transform),
          v &&
            (void 0 !== l || void 0 !== u || m.transform) &&
            (m.transformOrigin = (function (t, e, i) {
              let n = N(e, t.x, t.width),
                r = N(i, t.y, t.height);
              return "".concat(n, " ").concat(r);
            })(v, void 0 !== l ? l : 0.5, void 0 !== u ? u : 0.5)),
          void 0 !== s && (p.x = s),
          void 0 !== o && (p.y = o),
          void 0 !== a && (p.scale = a),
          void 0 !== h &&
            (function (t, e) {
              let i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1,
                n =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 0,
                r =
                  !(arguments.length > 4) ||
                  void 0 === arguments[4] ||
                  arguments[4];
              t.pathLength = 1;
              let s = r ? X : K;
              t[s.offset] = H.px.transform(-n);
              let o = H.px.transform(e),
                a = H.px.transform(i);
              t[s.array] = "".concat(o, " ").concat(a);
            })(p, h, c, d, !1);
      }
      let Y = () => ({ ...I(), attrs: {} }),
        $ = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      var q = i(5998);
      function J(t, e, i, n) {
        let { style: r, vars: s } = e;
        for (let e in (Object.assign(t.style, r, n && n.getProjectionStyles(i)),
        s))
          t.style.setProperty(e, s[e]);
      }
      let Q = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function tt(t, e, i, n) {
        for (let i in (J(t, e, void 0, n), e.attrs))
          t.setAttribute(Q.has(i) ? i : (0, q.D)(i), e.attrs[i]);
      }
      function te(t, e) {
        let { style: i } = t,
          n = {};
        for (let r in i)
          ((0, R.i)(i[r]) || (e.style && (0, R.i)(e.style[r])) || k(r, t)) &&
            (n[r] = i[r]);
        return n;
      }
      function ti(t, e) {
        let i = te(t, e);
        for (let n in t)
          ((0, R.i)(t[n]) || (0, R.i)(e[n])) &&
            (i[
              -1 !== V._.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = t[n]);
        return i;
      }
      var tn = i(1422),
        tr = i(2435),
        ts = i(698);
      function to(t) {
        let e = (0, R.i)(t) ? t.get() : t;
        return (0, ts.p)(e) ? e.toValue() : e;
      }
      let ta = (t) => (e, i) => {
        let n = (0, r.useContext)(o),
          s = (0, r.useContext)(a),
          l = () =>
            (function (t, e, i, n) {
              let {
                  scrapeMotionValuesFromProps: r,
                  createRenderState: s,
                  onMount: o,
                } = t,
                a = {
                  latestValues: (function (t, e, i, n) {
                    let r = {},
                      s = n(t, {});
                    for (let t in s) r[t] = to(s[t]);
                    let { initial: o, animate: a } = t,
                      l = y(t),
                      u = x(t);
                    e &&
                      u &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === o && (o = e.initial),
                      void 0 === a && (a = e.animate));
                    let h = !!i && !1 === i.initial,
                      c = (h = h || !1 === o) ? a : o;
                    return (
                      c &&
                        "boolean" != typeof c &&
                        !m(c) &&
                        (Array.isArray(c) ? c : [c]).forEach((e) => {
                          let i = (0, tn.o)(t, e);
                          if (!i) return;
                          let { transitionEnd: n, transition: s, ...o } = i;
                          for (let t in o) {
                            let e = o[t];
                            if (Array.isArray(e)) {
                              let t = h ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (r[t] = e);
                          }
                          for (let t in n) r[t] = n[t];
                        }),
                      r
                    );
                  })(e, i, n, r),
                  renderState: s(),
                };
              return o && (a.mount = (t) => o(e, t, a)), a;
            })(t, e, n, s);
        return i ? l() : (0, tr.h)(l);
      };
      var tl = i(4205);
      let tu = {
          useVisualState: ta({
            scrapeMotionValuesFromProps: ti,
            createRenderState: Y,
            onMount: (t, e, i) => {
              let { renderState: n, latestValues: r } = i;
              tl.Wi.read(() => {
                try {
                  n.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                tl.Wi.render(() => {
                  G(
                    n,
                    r,
                    { enableHardwareAcceleration: !1 },
                    $(e.tagName),
                    t.transformTemplate
                  ),
                    tt(e, n);
                });
            },
          }),
        },
        th = {
          useVisualState: ta({
            scrapeMotionValuesFromProps: te,
            createRenderState: I,
          }),
        };
      function tc(t, e, i) {
        let n =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : { passive: !0 };
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      let td = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tf(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "page";
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let tp = (t) => (e) => td(e) && t(e, tf(e));
      function tm(t, e, i, n) {
        return tc(t, e, tp(i), n);
      }
      var tv = i(9280);
      function tg(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let ty = tg("dragHorizontal"),
        tx = tg("dragVertical");
      function tw(t) {
        let e = !1;
        if ("y" === t) e = tx();
        else if ("x" === t) e = ty();
        else {
          let t = ty(),
            i = tx();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function tb() {
        let t = tw(!0);
        return !t || (t(), !1);
      }
      class tP {
        update() {}
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
      }
      function tT(t, e) {
        let i = "onHover" + (e ? "Start" : "End");
        return tm(
          t.current,
          "pointer" + (e ? "enter" : "leave"),
          (n, r) => {
            if ("touch" === n.pointerType || tb()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e),
              s[i] && s[i](n, r);
          },
          { passive: !t.getProps()[i] }
        );
      }
      class tS extends tP {
        mount() {
          this.unmount = (0, tv.z)(tT(this.node, !0), tT(this.node, !1));
        }
        unmount() {}
      }
      class tA extends tP {
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, tv.z)(
            tc(this.node.current, "focus", () => this.onFocus()),
            tc(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
      }
      let tM = (t, e) => !!e && (t === e || tM(t, e.parentElement));
      var tC = i(3393);
      function tD(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tf(i));
      }
      class tE extends tP {
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && i(t, e);
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !tb()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && i(t, e);
        }
        mount() {
          let t = this.node.getProps(),
            e = tm(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = tc(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, tv.z)(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
        constructor() {
          super(...arguments),
            (this.removeStartListeners = tC.Z),
            (this.removeEndListeners = tC.Z),
            (this.removeAccessibleListeners = tC.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                n = tm(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                      onTap: i,
                      onTapCancel: n,
                      globalTapTarget: r,
                    } = this.node.getProps();
                    r || tM(this.node.current, t.target)
                      ? i && i(t, e)
                      : n && n(t, e);
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                r = tm(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = (0, tv.z)(n, r)),
                this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = tc(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = tc(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          tD("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && i(t, e);
                          });
                      }
                    )),
                    tD("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = tc(this.node.current, "blur", () => {
                  this.isPressing &&
                    tD("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, tv.z)(t, e);
            });
        }
      }
      let tV = new WeakMap(),
        tk = new WeakMap(),
        tR = (t) => {
          let e = tV.get(t.target);
          e && e(t);
        },
        tL = (t) => {
          t.forEach(tR);
        },
        tB = { some: 0, all: 1 };
      class tj extends tP {
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : tB[n],
            };
          return (function (t, e, i) {
            let n = (function (t) {
              let { root: e, ...i } = t,
                n = e || document;
              tk.has(n) || tk.set(n, {});
              let r = tk.get(n),
                s = JSON.stringify(i);
              return (
                r[s] ||
                  (r[s] = new IntersectionObserver(tL, { root: e, ...i })),
                r[s]
              );
            })(e);
            return (
              tV.set(t, i),
              n.observe(t),
              () => {
                tV.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function (t) {
              let { viewport: e = {} } = t,
                { viewport: i = {} } =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return (t) => e[t] !== i[t];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
      }
      var tF = i(561);
      function tO(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      var tz = i(1148),
        tI = i(2869);
      let tW = [...v].reverse(),
        t_ = v.length;
      function tU() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class tZ extends tP {
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          this.unmount(), m(t) && (this.unmount = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {}
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map((e) => {
                        let { animation: i, options: n } = e;
                        return (0, tI.d)(t, i, n);
                      })
                    ),
                  i = {
                    animate: tU(!0),
                    whileInView: tU(),
                    whileHover: tU(),
                    whileTap: tU(),
                    whileDrag: tU(),
                    whileFocus: tU(),
                    exit: tU(),
                  },
                  n = !0,
                  r = (e) => (i, n) => {
                    var r;
                    let s = (0, tz.x)(
                      t,
                      n,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function s(s) {
                  let o = t.getProps(),
                    a = t.getVariantContext(!0) || {},
                    l = [],
                    u = new Set(),
                    h = {},
                    c = 1 / 0;
                  for (let e = 0; e < t_; e++) {
                    var d;
                    let f = tW[e],
                      v = i[f],
                      g = void 0 !== o[f] ? o[f] : a[f],
                      y = p(g),
                      x = f === s ? v.isActive : null;
                    !1 === x && (c = e);
                    let w = g === a[f] && g !== o[f] && y;
                    if (
                      (w && n && t.manuallyAnimateOnMount && (w = !1),
                      (v.protectedKeys = { ...h }),
                      (!v.isActive && null === x) ||
                        (!g && !v.prevProp) ||
                        m(g) ||
                        "boolean" == typeof g)
                    )
                      continue;
                    let b =
                        ((d = v.prevProp),
                        ("string" == typeof g
                          ? g !== d
                          : !!Array.isArray(g) && !tO(g, d)) ||
                          (f === s && v.isActive && !w && y) ||
                          (e > c && y)),
                      P = !1,
                      T = Array.isArray(g) ? g : [g],
                      S = T.reduce(r(f), {});
                    !1 === x && (S = {});
                    let { prevResolvedValues: A = {} } = v,
                      M = { ...A, ...S },
                      C = (t) => {
                        (b = !0),
                          u.has(t) && ((P = !0), u.delete(t)),
                          (v.needsAnimating[t] = !0);
                      };
                    for (let t in M) {
                      let e = S[t],
                        i = A[t];
                      if (!h.hasOwnProperty(t))
                        ((0, tF.C)(e) && (0, tF.C)(i) ? tO(e, i) : e === i)
                          ? void 0 !== e && u.has(t)
                            ? C(t)
                            : (v.protectedKeys[t] = !0)
                          : null != e
                          ? C(t)
                          : u.add(t);
                    }
                    (v.prevProp = g),
                      (v.prevResolvedValues = S),
                      v.isActive && (h = { ...h, ...S }),
                      n && t.blockInitialAnimation && (b = !1),
                      b &&
                        (!w || P) &&
                        l.push(
                          ...T.map((t) => ({
                            animation: t,
                            options: { type: f },
                          }))
                        );
                  }
                  if (u.size) {
                    let e = {};
                    u.forEach((i) => {
                      let n = t.getBaseTarget(i);
                      e[i] = void 0 === n ? null : n;
                    }),
                      l.push({ animation: e });
                  }
                  let f = !!l.length;
                  return (
                    n &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (f = !1),
                    (n = !1),
                    f ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let o = s(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                };
              })(t));
        }
      }
      let tH = 0;
      class tN extends tP {
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
        constructor() {
          super(...arguments), (this.id = tH++);
        }
      }
      var tX = i(9908),
        tK = i(3303);
      let tG = (t, e) => Math.abs(t - e);
      class tY {
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, tl.Pn)(this.updatePoint);
        }
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = tJ(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                r =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(tG(t.x, e.x) ** 2 + tG(t.y, e.y) ** 2) >= 3);
              if (!n && !r) return;
              let { point: s } = i,
                { timestamp: o } = tl.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              n ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = t$(e, this.transformPagePoint)),
                tl.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = tJ(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : t$(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !td(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = t$(tf(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = tl.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, tJ(s, this.history)),
            (this.removeListeners = (0, tv.z)(
              tm(this.contextWindow, "pointermove", this.handlePointerMove),
              tm(this.contextWindow, "pointerup", this.handlePointerUp),
              tm(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
      }
      function t$(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function tq(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function tJ(t, e) {
        let { point: i } = t;
        return {
          point: i,
          delta: tq(i, tQ(e)),
          offset: tq(i, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = tQ(t);
            for (
              ;
              i >= 0 &&
              ((n = t[i]), !(r.timestamp - n.timestamp > (0, tK.w)(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = (0, tK.X)(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function tQ(t) {
        return t[t.length - 1];
      }
      var t0 = i(9049),
        t1 = i(5312);
      function t2(t) {
        return t.max - t.min;
      }
      function t3(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0.01;
        return Math.abs(t - e) <= i;
      }
      function t5(t, e, i) {
        let n =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
        (t.origin = n),
          (t.originPoint = (0, t1.t)(e.min, e.max, t.origin)),
          (t.scale = t2(i) / t2(e)),
          (t3(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = (0, t1.t)(i.min, i.max, t.origin) - t.originPoint),
          (t3(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function t4(t, e, i, n) {
        t5(t.x, e.x, i.x, n ? n.originX : void 0),
          t5(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function t6(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + t2(e));
      }
      function t8(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + t2(e));
      }
      function t9(t, e, i) {
        t8(t.x, e.x, i.x), t8(t.y, e.y, i.y);
      }
      var t7 = i(2476);
      function et(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function ee(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function ei(t, e, i) {
        return { min: en(t, e), max: en(t, i) };
      }
      function en(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let er = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        es = () => ({ x: er(), y: er() }),
        eo = () => ({ min: 0, max: 0 }),
        ea = () => ({ x: eo(), y: eo() });
      function el(t) {
        return [t("x"), t("y")];
      }
      function eu(t) {
        let { top: e, left: i, right: n, bottom: r } = t;
        return { x: { min: i, max: n }, y: { min: e, max: r } };
      }
      function eh(t) {
        return void 0 === t || 1 === t;
      }
      function ec(t) {
        let { scale: e, scaleX: i, scaleY: n } = t;
        return !eh(e) || !eh(i) || !eh(n);
      }
      function ed(t) {
        return ec(t) || ef(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function ef(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function ep(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function em(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          n = arguments.length > 3 ? arguments[3] : void 0,
          r = arguments.length > 4 ? arguments[4] : void 0;
        (t.min = ep(t.min, e, i, n, r)), (t.max = ep(t.max, e, i, n, r));
      }
      function ev(t, e) {
        let { x: i, y: n } = e;
        em(t.x, i.translate, i.scale, i.originPoint),
          em(t.y, n.translate, n.scale, n.originPoint);
      }
      function eg(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function ey(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function ex(t, e, i) {
        let [n, r, s] = i,
          o = void 0 !== e[s] ? e[s] : 0.5,
          a = (0, t1.t)(t.min, t.max, o);
        em(t, e[n], e[r], a, e.scale);
      }
      let ew = ["x", "scaleX", "originX"],
        eb = ["y", "scaleY", "originY"];
      function eP(t, e) {
        ex(t.x, e, ew), ex(t.y, e, eb);
      }
      function eT(t, e) {
        return eu(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var eS = i(2309);
      let eA = (t) => {
          let { current: e } = t;
          return e ? e.ownerDocument.defaultView : null;
        },
        eM = new WeakMap();
      class eC {
        start(t) {
          let { snapToCursor: e = !1 } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new tY(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(tf(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: r,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = tw(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  el((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (H.aQ.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = t2(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && r(t, e);
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t) {
                    let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 10,
                      i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                el((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: eA(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && r(t, e);
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !eD(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, e, i) {
              let { min: n, max: r } = e;
              return (
                void 0 !== n && t < n
                  ? (t = i ? (0, t1.t)(n, t, i.min) : Math.max(t, n))
                  : void 0 !== r &&
                    t > r &&
                    (t = i ? (0, t1.t)(r, t, i.max) : Math.min(t, r)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && f(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (t, e) {
                let { top: i, left: n, bottom: r, right: s } = e;
                return { x: et(t.x, n, s), y: et(t.y, i, r) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0.35;
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: ei(t, "left", "right"), y: ei(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              el((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !f(e)) return !1;
          let n = e.current;
          (0, tX.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = eT(t, i),
                { scroll: r } = e;
              return r && (ey(n.x, r.offset.x), ey(n.y, r.offset.y)), n;
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: ee((t = r.layout.layoutBox).x, s.x), y: ee(t.y, s.y) };
          if (i) {
            let t = i(
              (function (t) {
                let { x: e, y: i } = t;
                return { top: i.min, right: e.max, bottom: i.max, left: e.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = eu(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            el((o) => {
              if (!eD(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start((0, eS.v)(t, i, 0, e, this.visualElement));
        }
        stopAnimation() {
          el((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          el((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          el((e) => {
            let { drag: i } = this.getProps();
            if (!eD(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - (0, t1.t)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!f(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          el((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = t2(t),
                  r = t2(e);
                return (
                  r > n
                    ? (i = (0, t0.Y)(e.min, e.max - n, t.min))
                    : n > r && (i = (0, t0.Y)(t.min, t.max - r, e.min)),
                  (0, t7.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            el((e) => {
              if (!eD(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set((0, t1.t)(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          eM.set(this.visualElement, this);
          let t = tm(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              f(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            e();
          let r = tc(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener("didUpdate", (t) => {
              let { delta: e, hasLayoutChanged: i } = t;
              this.isDragging &&
                i &&
                (el((t) => {
                  let i = this.getAxisMotionValue(t);
                  i &&
                    ((this.originPoint[t] += e[t].translate),
                    i.set(i.get() + e[t].translate));
                }),
                this.visualElement.render());
            });
          return () => {
            r(), t(), n(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = ea()),
            (this.visualElement = t);
        }
      }
      function eD(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class eE extends tP {
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tC.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
        constructor(t) {
          super(t),
            (this.removeGroupControls = tC.Z),
            (this.removeListeners = tC.Z),
            (this.controls = new eC(t));
        }
      }
      let eV = (t) => (e, i) => {
        t && t(e, i);
      };
      class ek extends tP {
        onPointerDown(t) {
          this.session = new tY(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: eA(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: eV(t),
            onStart: eV(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && n(t, e);
            },
          };
        }
        mount() {
          this.removePointerDownListener = tm(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
        constructor() {
          super(...arguments), (this.removePointerDownListener = tC.Z);
        }
      }
      let eR = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function eL(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let eB = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!H.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = eL(t, e.target.x),
            n = eL(t, e.target.y);
          return "".concat(i, "% ").concat(n, "%");
        },
      };
      var ej = i(2263);
      class eF extends r.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          Object.assign(E, ez),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (eR.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    tl.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            c.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function eO(t) {
        let [e, i] = (function () {
            let t = (0, r.useContext)(a);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              s = (0, r.useId)();
            return (
              (0, r.useEffect)(() => n(s), []),
              !e && i ? [!1, () => i && i(s)] : [!0]
            );
          })(),
          n = (0, r.useContext)(S);
        return r.createElement(eF, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, r.useContext)(A),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let ez = {
        borderRadius: {
          ...eB,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: eB,
        borderTopRightRadius: eB,
        borderBottomLeftRadius: eB,
        borderBottomRightRadius: eB,
        boxShadow: {
          correct: (t, e) => {
            let { treeScale: i, projectionDelta: n } = e,
              r = ej.P.parse(t);
            if (r.length > 5) return t;
            let s = ej.P.createTransformer(t),
              o = "number" != typeof r[0] ? 1 : 0,
              a = n.x.scale * i.x,
              l = n.y.scale * i.y;
            (r[0 + o] /= a), (r[1 + o] /= l);
            let u = (0, t1.t)(a, l, 0.5);
            return (
              "number" == typeof r[2 + o] && (r[2 + o] /= u),
              "number" == typeof r[3 + o] && (r[3 + o] /= u),
              s(r)
            );
          },
        },
      };
      var eI = i(2685),
        eW = i(4354);
      let e_ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        eU = e_.length,
        eZ = (t) => ("string" == typeof t ? parseFloat(t) : t),
        eH = (t) => "number" == typeof t || H.px.test(t);
      function eN(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let eX = eG(0, 0.5, eW.Bn),
        eK = eG(0.5, 0.95, tC.Z);
      function eG(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, t0.Y)(t, e, n)));
      }
      function eY(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function e$(t, e) {
        eY(t.x, e.x), eY(t.y, e.y);
      }
      function eq(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function eJ(t, e, i, n, r) {
        let [s, o, a] = i;
        !(function (t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5,
            r = arguments.length > 4 ? arguments[4] : void 0,
            s =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : t,
            o =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : t;
          if (
            (H.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, t1.t)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, t1.t)(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = eq(t.min, e, i, a, r)),
            (t.max = eq(t.max, e, i, a, r));
        })(t, e[s], e[o], e[a], e.scale, n, r);
      }
      let eQ = ["x", "scaleX", "originX"],
        e0 = ["y", "scaleY", "originY"];
      function e1(t, e, i, n) {
        eJ(t.x, e, eQ, i ? i.x : void 0, n ? n.x : void 0),
          eJ(t.y, e, e0, i ? i.y : void 0, n ? n.y : void 0);
      }
      var e2 = i(5566);
      function e3(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function e5(t) {
        return e3(t.x) && e3(t.y);
      }
      function e4(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function e6(t) {
        return t2(t.x) / t2(t.y);
      }
      var e8 = i(406);
      class e9 {
        add(t) {
          (0, e8.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, e8.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
        constructor() {
          this.members = [];
        }
      }
      function e7(t, e, i) {
        let n = "",
          r = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if (
          ((r || s) &&
            (n = "translate3d(".concat(r, "px, ").concat(s, "px, 0) ")),
          (1 !== e.x || 1 !== e.y) &&
            (n += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") ")),
          i)
        ) {
          let { rotate: t, rotateX: e, rotateY: r } = i;
          t && (n += "rotate(".concat(t, "deg) ")),
            e && (n += "rotateX(".concat(e, "deg) ")),
            r && (n += "rotateY(".concat(r, "deg) "));
        }
        let o = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (
          (1 !== o || 1 !== a) &&
            (n += "scale(".concat(o, ", ").concat(a, ")")),
          n || "none"
        );
      }
      let it = (t, e) => t.depth - e.depth;
      class ie {
        add(t) {
          (0, e8.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, e8.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(it),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
      }
      var ii = i(3791),
        ir = i(3299);
      let is = ["", "X", "Y", "Z"],
        io = { visibility: "hidden" },
        ia = 0,
        il = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function iu(t) {
        let {
          attachResizeListener: e,
          defaultParent: i,
          measureScroll: n,
          checkIsScrollRoot: r,
          resetTransform: s,
        } = t;
        return class {
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new eI.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t) {
            for (
              var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1;
              n < e;
              n++
            )
              i[n - 1] = arguments[n];
            let r = this.eventHandlers.get(t);
            r && r.notify(...i);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(t) {
            let i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.root.hasTreeAnimated;
            if (this.instance) return;
            (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
              (this.instance = t);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              e)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = ii.X.now(),
                      n = (r) => {
                        let { timestamp: s } = r,
                          o = s - i;
                        o >= e && ((0, tl.Pn)(n), t(o - e));
                      };
                    return tl.Wi.read(n, !0), () => (0, tl.Pn)(n);
                  })(n, 250)),
                  eR.hasAnimatedSinceResize &&
                    ((eR.hasAnimatedSinceResize = !1), this.nodes.forEach(ix));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener("didUpdate", (t) => {
                  let {
                    delta: e,
                    hasLayoutChanged: i,
                    hasRelativeTargetChanged: n,
                    layout: r,
                  } = t;
                  if (this.isTreeAnimationBlocked()) {
                    (this.target = void 0), (this.relativeTarget = void 0);
                    return;
                  }
                  let o =
                      this.options.transition || s.getDefaultTransition() || iC,
                    {
                      onLayoutAnimationStart: a,
                      onLayoutAnimationComplete: l,
                    } = s.getProps(),
                    u = !this.targetLayout || !e4(this.targetLayout, r) || n,
                    h = !i && n;
                  if (
                    this.options.layoutRoot ||
                    (this.resumeFrom && this.resumeFrom.instance) ||
                    h ||
                    (i && (u || !this.currentAnimation))
                  ) {
                    this.resumeFrom &&
                      ((this.resumingFrom = this.resumeFrom),
                      (this.resumingFrom.resumingFrom = void 0)),
                      this.setAnimationOrigin(e, h);
                    let t = {
                      ...(0, e2.e)(o, "layout"),
                      onPlay: a,
                      onComplete: l,
                    };
                    (s.shouldReduceMotion || this.options.layoutRoot) &&
                      ((t.delay = 0), (t.type = !1)),
                      this.startAnimation(t);
                  } else
                    i || ix(this),
                      this.isLead() &&
                        this.options.onExitComplete &&
                        this.options.onExitComplete();
                  this.targetLayout = r;
                });
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, tl.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(iP),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate() {
            let t =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0];
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(iv);
              return;
            }
            this.isUpdating || this.nodes.forEach(ig),
              (this.isUpdating = !1),
              window.HandoffCancelAllAnimations &&
                window.HandoffCancelAllAnimations(),
              this.nodes.forEach(iy),
              this.nodes.forEach(ih),
              this.nodes.forEach(ic),
              this.clearAllSnapshots();
            let t = ii.X.now();
            (tl.frameData.delta = (0, t7.u)(
              0,
              1e3 / 60,
              t - tl.frameData.timestamp
            )),
              (tl.frameData.timestamp = t),
              (tl.frameData.isProcessing = !0),
              tl.S6.update.process(tl.frameData),
              tl.S6.preRender.process(tl.frameData),
              tl.S6.render.process(tl.frameData),
              (tl.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), c.read(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(im), this.sharedNodes.forEach(iT);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              tl.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            tl.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = ea()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "measure",
              e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: r(this.instance),
                  offset: n(this.instance),
                });
          }
          resetTransform() {
            if (!s) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !e5(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              r = n !== this.prevTransformTemplateValue;
            t &&
              (e || ed(this.latestValues) || r) &&
              (s(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure() {
            var t;
            let e =
                !(arguments.length > 0) ||
                void 0 === arguments[0] ||
                arguments[0],
              i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              e && (n = this.removeTransform(n)),
              iV((t = n).x),
              iV(t.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return ea();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (ey(e.x, i.offset.x), ey(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = ea();
            e$(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: r, options: s } = n;
              if (n !== this.root && r && s.layoutScroll) {
                if (r.isRoot) {
                  e$(e, t);
                  let { scroll: i } = this.root;
                  i && (ey(e.x, -i.offset.x), ey(e.y, -i.offset.y));
                }
                ey(e.x, r.offset.x), ey(e.y, r.offset.y);
              }
            }
            return e;
          }
          applyTransform(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              i = ea();
            e$(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                eP(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                ed(n.latestValues) && eP(i, n.latestValues);
            }
            return ed(this.latestValues) && eP(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = ea();
            e$(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !ed(i.latestValues)) continue;
              ec(i.latestValues) && i.updateSnapshot();
              let n = ea();
              e$(n, i.measurePageBox()),
                e1(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return ed(this.latestValues) && e1(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                tl.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta() {
            var t, e, i, n;
            let r =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                r ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = tl.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = ea()),
                    (this.relativeTargetOrigin = ea()),
                    t9(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    e$(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = ea()), (this.targetWithTransforms = ea())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (e = this.target),
                      (i = this.relativeTarget),
                      (n = this.relativeParent.target),
                      t6(e.x, i.x, n.x),
                      t6(e.y, i.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : e$(this.target, this.layout.layoutBox),
                      ev(this.target, this.targetDelta))
                    : e$(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = ea()),
                      (this.relativeTargetOrigin = ea()),
                      t9(this.relativeTargetOrigin, this.target, t.target),
                      e$(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                il.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              ec(this.parent.latestValues) ||
              ef(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === tl.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            e$(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i) {
              let n,
                r,
                s =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
                o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  r = (n = i[a]).projectionDelta;
                  let o = n.instance;
                  (!o || !o.style || "contents" !== o.style.display) &&
                    (s &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      eP(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    r && ((e.x *= r.x.scale), (e.y *= r.y.scale), ev(t, r)),
                    s && ed(n.latestValues) && eP(t, n.latestValues));
                }
                (e.x = eg(e.x)), (e.y = eg(e.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = ea()));
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = es()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = es()),
              (this.projectionDeltaWithTransform = es()));
            let u = this.projectionTransform;
            t4(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = e7(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              il.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender() {
            let t =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0];
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t) {
            let e,
              i =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = es();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !i);
            let a = ea(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(iM)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (i) => {
                let n = i / 1e3;
                if (
                  (iS(o.x, t.x, n),
                  iS(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, f, p;
                  t9(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (f = this.relativeTarget),
                    (p = this.relativeTargetOrigin),
                    iA(f.x, p.x, a.x, n),
                    iA(f.y, p.y, a.y, n),
                    e &&
                      ((u = this.relativeTarget),
                      (d = e),
                      u.x.min === d.x.min &&
                        u.x.max === d.x.max &&
                        u.y.min === d.y.min &&
                        u.y.max === d.y.max) &&
                      (this.isProjectionDirty = !1),
                    e || (e = ea()),
                    e$(e, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = (0, t1.t)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          eX(n)
                        )),
                        (t.opacityExit = (0, t1.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          eK(n)
                        )))
                      : s &&
                        (t.opacity = (0, t1.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < eU; r++) {
                      let s = "border".concat(e_[r], "Radius"),
                        o = eN(e, s),
                        a = eN(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || eH(o) === eH(a)
                          ? ((t[s] = Math.max((0, t1.t)(eZ(o), eZ(a), n), 0)),
                            (H.aQ.test(a) || H.aQ.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, t1.t)(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, tl.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tl.Wi.update(() => {
                (eR.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = (0, R.i)(t) ? t : (0, ir.BX)(t);
                    return n.start((0, eS.v)("", n, 1e3, i)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                ik(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || ea();
                let e = t2(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = t2(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              e$(e, i),
                eP(e, r),
                t4(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new e9()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote() {
            let {
                needsReset: t,
                transition: e,
                preserveFollowOpacity: i,
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
              n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0),
              !e)
            )
              return;
            let n = {};
            for (let e = 0; e < is.length; e++) {
              let r = "rotate" + is[e];
              i[r] && ((n[r] = i[r]), t.setStaticValue(r, 0));
            }
            for (let e in (t.render(), n)) t.setStaticValue(e, n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return io;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  to(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    to(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !ed(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = e7(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = ""
              .concat(100 * a.origin, "% ")
              .concat(100 * l.origin, "% 0")),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            E)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = E[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? to(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(iv),
              this.root.sharedNodes.clear();
          }
          constructor(t = {}, e = null == i ? void 0 : i()) {
            (this.id = ia++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (il.totalNodes =
                    il.resolvedTargetDeltas =
                    il.recalculatedProjection =
                      0),
                  this.nodes.forEach(id),
                  this.nodes.forEach(iw),
                  this.nodes.forEach(ib),
                  this.nodes.forEach(ip),
                  window.MotionDebug && window.MotionDebug.record(il);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = e ? e.root || e : this),
              (this.path = e ? [...e.path, e] : []),
              (this.parent = e),
              (this.depth = e ? e.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ie());
          }
        };
      }
      function ih(t) {
        t.updateLayout();
      }
      function ic(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? el((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = t2(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : ik(r, i.layoutBox, e) &&
              el((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = t2(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = es();
          t4(o, e, i.layoutBox);
          let a = es();
          s
            ? t4(a, t.applyTransform(n, !0), i.measuredBox)
            : t4(a, e, i.layoutBox);
          let l = !e5(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = ea();
                t9(o, i.layoutBox, r.layoutBox);
                let a = ea();
                t9(a, e, s.layoutBox),
                  e4(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function id(t) {
        il.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function ip(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function im(t) {
        t.clearSnapshot();
      }
      function iv(t) {
        t.clearMeasurements();
      }
      function ig(t) {
        t.isLayoutDirty = !1;
      }
      function iy(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function ix(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function iw(t) {
        t.resolveTargetDelta();
      }
      function ib(t) {
        t.calcProjection();
      }
      function iP(t) {
        t.resetRotation();
      }
      function iT(t) {
        t.removeLeadSnapshot();
      }
      function iS(t, e, i) {
        (t.translate = (0, t1.t)(e.translate, 0, i)),
          (t.scale = (0, t1.t)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function iA(t, e, i, n) {
        (t.min = (0, t1.t)(e.min, i.min, n)),
          (t.max = (0, t1.t)(e.max, i.max, n));
      }
      function iM(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let iC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        iD = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        iE = iD("applewebkit/") && !iD("chrome/") ? Math.round : tC.Z;
      function iV(t) {
        (t.min = iE(t.min)), (t.max = iE(t.max));
      }
      function ik(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !t3(e6(e), e6(i), 0.2))
        );
      }
      let iR = iu({
          attachResizeListener: (t, e) => tc(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        iL = { current: void 0 },
        iB = iu({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!iL.current) {
              let t = new iR({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (iL.current = t);
            }
            return iL.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      var ij = i(6217);
      let iF = { current: null },
        iO = { current: !1 };
      var iz = i(2212);
      let iI = new WeakMap();
      var iW = i(4178),
        i_ = i(4829),
        iU = i(6894),
        iZ = i(2809),
        iH = i(1921),
        iN = i(4707);
      let iX = [...iH.$, iZ.$, ej.P],
        iK = (t) => iX.find((0, iN.l)(t));
      var iG = i(3462);
      let iY = Object.keys(P),
        i$ = iY.length,
        iq = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        iJ = g.length;
      class iQ {
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            iI.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            iO.current ||
              (function () {
                if (((iO.current = !0), T.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (iF.current = t.matches);
                    t.addListener(e), e();
                  } else iF.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || iF.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (iI.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, tl.Pn)(this.notifyUpdate),
          (0, tl.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = V.G.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tl.Wi.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), r();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures(t, e, i, n) {
          let r,
            s,
            { children: o, ...a } = t;
          for (let t = 0; t < i$; t++) {
            let e = iY[t],
              {
                isEnabled: i,
                Feature: n,
                ProjectionNode: o,
                MeasureLayout: l,
              } = P[e];
            o && (r = o),
              i(a) &&
                (!this.features[e] && n && (this.features[e] = new n(this)),
                l && (s = l));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            r
          ) {
            this.projection = new r(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: t,
              layout: e,
              drag: i,
              dragConstraints: s,
              layoutScroll: o,
              layoutRoot: l,
            } = a;
            this.projection.setOptions({
              layoutId: t,
              layout: e,
              alwaysMeasureLayout: !!i || (s && f(s)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof e ? e : "both",
              initialPromotionConfig: n,
              layoutScroll: o,
              layoutRoot: l,
            });
          }
          return s;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : ea();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < iq.length; e++) {
            let i = iq[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: n } = e;
            for (let r in e) {
              let s = e[r],
                o = i[r];
              if ((0, R.i)(s)) t.addValue(r, s), (0, iz.L)(n) && n.add(r);
              else if ((0, R.i)(o))
                t.addValue(r, (0, ir.BX)(s, { owner: t })),
                  (0, iz.L)(n) && n.remove(r);
              else if (o !== s) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, (0, ir.BX)(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < iJ; t++) {
            let i = g[t],
              n = this.props[i];
            (p(n) || !1 === n) && (e[i] = n);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, ir.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && ((0, i_.P)(n) || (0, iU.W)(n))
                ? (n = parseFloat(n))
                : !iK(n) && ej.P.test(e) && (n = (0, iG.T)(t, e)),
              this.setBaseTarget(t, (0, R.i)(n) ? n.get() : n)),
            (0, R.i)(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e, i;
          let { initial: n } = this.props,
            r =
              "string" == typeof n || "object" == typeof n
                ? null ===
                    (i = (0, tn.o)(
                      this.props,
                      n,
                      null === (e = this.presenceContext) || void 0 === e
                        ? void 0
                        : e.custom
                    )) || void 0 === i
                  ? void 0
                  : i[t]
                : void 0;
          if (n && void 0 !== r) return r;
          let s = this.getBaseTargetFromProps(this.props, t);
          return void 0 === s || (0, R.i)(s)
            ? void 0 !== this.initialValues[t] && void 0 === r
              ? void 0
              : this.baseTarget[t]
            : s;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new eI.L()),
            this.events[t].add(e)
          );
        }
        notify(t) {
          for (
            var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1;
            n < e;
            n++
          )
            i[n - 1] = arguments[n];
          this.events[t] && this.events[t].notify(...i);
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.resolveKeyframes = (t, e, i, n) =>
            new this.KeyframeResolver(t, e, i, n, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = iW.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => tl.Wi.render(this.render, !1, !0));
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = y(e)),
            (this.isVariantNode = x(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(e, {});
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] &&
              (0, R.i)(e) &&
              (e.set(a[t], !1), (0, iz.L)(u) && u.add(t));
          }
        }
      }
      var i0 = i(4918);
      class i1 extends iQ {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, e) {
          let { vars: i, style: n } = e;
          delete i[t], delete n[t];
        }
        constructor() {
          super(...arguments), (this.KeyframeResolver = i0.s);
        }
      }
      class i2 extends i1 {
        readValueFromInstance(t, e) {
          if (V.G.has(e)) {
            let t = (0, ij.A)(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = ((0, j.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, e) {
          let { transformPagePoint: i } = e;
          return eT(t, i);
        }
        build(t, e, i, n) {
          z(t, e, i, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return te(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, R.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = "".concat(t));
            }));
        }
        renderInstance(t, e, i, n) {
          J(t, e, i, n);
        }
        constructor() {
          super(...arguments), (this.type = "html");
        }
      }
      class i3 extends i1 {
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (V.G.has(e)) {
            let t = (0, ij.A)(e);
            return (t && t.default) || 0;
          }
          return (e = Q.has(e) ? e : (0, q.D)(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return ea();
        }
        scrapeMotionValuesFromProps(t, e) {
          return ti(t, e);
        }
        build(t, e, i, n) {
          G(t, e, i, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          tt(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = $(t.tagName)), super.mount(t);
        }
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
      }
      let i5 = (t, e) =>
          D(t)
            ? new i3(e, { enableHardwareAcceleration: !1 })
            : new i2(e, { enableHardwareAcceleration: !0 }),
        i4 = {
          animation: { Feature: tZ },
          exit: { Feature: tN },
          inView: { Feature: tj },
          tap: { Feature: tE },
          focus: { Feature: tA },
          hover: { Feature: tS },
          pan: { Feature: ek },
          drag: { Feature: eE, ProjectionNode: iB, MeasureLayout: eO },
          layout: { ProjectionNode: iB, MeasureLayout: eO },
        },
        i6 = (function (t) {
          function e(e) {
            let i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return (function (t) {
              let {
                preloadedFeatures: e,
                createVisualElement: i,
                useRender: n,
                useVisualState: d,
                Component: m,
              } = t;
              e &&
                (function (t) {
                  for (let e in t) P[e] = { ...P[e], ...t[e] };
                })(e);
              let v = (0, r.forwardRef)(function (t, v) {
                var g;
                let x;
                let b = {
                    ...(0, r.useContext)(s),
                    ...t,
                    layoutId: (function (t) {
                      let { layoutId: e } = t,
                        i = (0, r.useContext)(S).id;
                      return i && void 0 !== e ? i + "-" + e : e;
                    })(t),
                  },
                  { isStatic: P } = b,
                  M = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (y(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || p(e) ? e : void 0,
                          animate: p(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, r.useContext)(o));
                    return (0, r.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [w(e), w(i)]
                    );
                  })(t),
                  C = d(t, P);
                if (!P && T.j) {
                  M.visualElement = (function (t, e, i, n) {
                    let { visualElement: d } = (0, r.useContext)(o),
                      f = (0, r.useContext)(u),
                      p = (0, r.useContext)(a),
                      m = (0, r.useContext)(s).reducedMotion,
                      v = (0, r.useRef)();
                    (n = n || f.renderer),
                      !v.current &&
                        n &&
                        (v.current = n(t, {
                          visualState: e,
                          parent: d,
                          props: i,
                          presenceContext: p,
                          blockInitialAnimation: !!p && !1 === p.initial,
                          reducedMotionConfig: m,
                        }));
                    let g = v.current;
                    (0, r.useInsertionEffect)(() => {
                      g && g.update(i, p);
                    });
                    let y = (0, r.useRef)(
                      !!(i[h.M] && !window.HandoffComplete)
                    );
                    return (
                      (0, l.L)(() => {
                        g &&
                          (c.postRender(g.render),
                          y.current &&
                            g.animationState &&
                            g.animationState.animateChanges());
                      }),
                      (0, r.useEffect)(() => {
                        g &&
                          (g.updateFeatures(),
                          !y.current &&
                            g.animationState &&
                            g.animationState.animateChanges(),
                          y.current &&
                            ((y.current = !1), (window.HandoffComplete = !0)));
                      }),
                      g
                    );
                  })(m, C, b, i);
                  let t = (0, r.useContext)(A),
                    n = (0, r.useContext)(u).strict;
                  M.visualElement &&
                    (x = M.visualElement.loadFeatures(b, n, e, t));
                }
                return r.createElement(
                  o.Provider,
                  { value: M },
                  x && M.visualElement
                    ? r.createElement(x, {
                        visualElement: M.visualElement,
                        ...b,
                      })
                    : null,
                  n(
                    m,
                    t,
                    ((g = M.visualElement),
                    (0, r.useCallback)(
                      (t) => {
                        t && C.mount && C.mount(t),
                          g && (t ? g.mount(t) : g.unmount()),
                          v &&
                            ("function" == typeof v
                              ? v(t)
                              : f(v) && (v.current = t));
                      },
                      [g]
                    )),
                    C,
                    P,
                    M.visualElement
                  )
                );
              });
              return (v[M] = m), v;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n)),
          });
        })((t, e) =>
          (function (t, e, i, n) {
            let { forwardMotionProps: s = !1 } = e;
            return {
              ...(D(t) ? tu : th),
              preloadedFeatures: i,
              useRender: (function () {
                let t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                return (e, i, n, s, o) => {
                  let { latestValues: a } = s,
                    l = (
                      D(e)
                        ? function (t, e, i, n) {
                            let s = (0, r.useMemo)(() => {
                              let i = Y();
                              return (
                                G(
                                  i,
                                  e,
                                  { enableHardwareAcceleration: !1 },
                                  $(n),
                                  t.transformTemplate
                                ),
                                { ...i.attrs, style: { ...i.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              W(e, t.style, t),
                                (s.style = { ...e, ...s.style });
                            }
                            return s;
                          }
                        : function (t, e, i) {
                            let n = {},
                              s = (function (t, e, i) {
                                let n = t.style || {},
                                  s = {};
                                return (
                                  W(s, n, t),
                                  Object.assign(
                                    s,
                                    (function (t, e, i) {
                                      let { transformTemplate: n } = t;
                                      return (0, r.useMemo)(() => {
                                        let t = I();
                                        return (
                                          z(
                                            t,
                                            e,
                                            { enableHardwareAcceleration: !i },
                                            n
                                          ),
                                          Object.assign({}, t.vars, t.style)
                                        );
                                      }, [e]);
                                    })(t, e, i)
                                  ),
                                  s
                                );
                              })(t, e, i);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((n.draggable = !1),
                                (s.userSelect =
                                  s.WebkitUserSelect =
                                  s.WebkitTouchCallout =
                                    "none"),
                                (s.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : "pan-".concat(
                                        "x" === t.drag ? "y" : "x"
                                      ))),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (n.tabIndex = 0),
                              (n.style = s),
                              n
                            );
                          }
                    )(i, a, o, e),
                    u = (function (t, e, i) {
                      let n = {};
                      for (let r in t)
                        ("values" !== r || "object" != typeof t.values) &&
                          (Z(r) ||
                            (!0 === i && U(r)) ||
                            (!e && !U(r)) ||
                            (t.draggable && r.startsWith("onDrag"))) &&
                          (n[r] = t[r]);
                      return n;
                    })(i, "string" == typeof e, t),
                    h = e !== r.Fragment ? { ...u, ...l, ref: n } : {},
                    { children: c } = i,
                    d = (0, r.useMemo)(() => ((0, R.i)(c) ? c.get() : c), [c]);
                  return (0, r.createElement)(e, { ...h, children: d });
                };
              })(s),
              createVisualElement: n,
              Component: t,
            };
          })(t, e, i4, i5)
        );
    },
    5998: function (t, e, i) {
      i.d(e, {
        D: function () {
          return n;
        },
      });
      let n = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    7126: function (t, e, i) {
      i.d(e, {
        f: function () {
          return r;
        },
        t: function () {
          return o;
        },
      });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = n("--"),
        s = n("var(--"),
        o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    3462: function (t, e, i) {
      i.d(e, {
        T: function () {
          return o;
        },
      });
      var n = i(2263),
        r = i(2915),
        s = i(6217);
      function o(t, e) {
        let i = (0, s.A)(t);
        return (
          i !== r.h && (i = n.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
    },
    6217: function (t, e, i) {
      i.d(e, {
        A: function () {
          return o;
        },
      });
      var n = i(2809),
        r = i(2915);
      let s = {
          ...i(7346).j,
          color: n.$,
          backgroundColor: n.$,
          outlineColor: n.$,
          fill: n.$,
          stroke: n.$,
          borderColor: n.$,
          borderTopColor: n.$,
          borderRightColor: n.$,
          borderBottomColor: n.$,
          borderLeftColor: n.$,
          filter: r.h,
          WebkitFilter: r.h,
        },
        o = (t) => s[t];
    },
    1921: function (t, e, i) {
      i.d(e, {
        $: function () {
          return o;
        },
        C: function () {
          return a;
        },
      });
      var n = i(5218),
        r = i(2724),
        s = i(4707);
      let o = [
          n.Rx,
          r.px,
          r.aQ,
          r.RW,
          r.vw,
          r.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        a = (t) => o.find((0, s.l)(t));
    },
    7346: function (t, e, i) {
      i.d(e, {
        j: function () {
          return o;
        },
      });
      var n = i(5218),
        r = i(2724);
      let s = { ...n.Rx, transform: Math.round },
        o = {
          borderWidth: r.px,
          borderTopWidth: r.px,
          borderRightWidth: r.px,
          borderBottomWidth: r.px,
          borderLeftWidth: r.px,
          borderRadius: r.px,
          radius: r.px,
          borderTopLeftRadius: r.px,
          borderTopRightRadius: r.px,
          borderBottomRightRadius: r.px,
          borderBottomLeftRadius: r.px,
          width: r.px,
          maxWidth: r.px,
          height: r.px,
          maxHeight: r.px,
          size: r.px,
          top: r.px,
          right: r.px,
          bottom: r.px,
          left: r.px,
          padding: r.px,
          paddingTop: r.px,
          paddingRight: r.px,
          paddingBottom: r.px,
          paddingLeft: r.px,
          margin: r.px,
          marginTop: r.px,
          marginRight: r.px,
          marginBottom: r.px,
          marginLeft: r.px,
          rotate: r.RW,
          rotateX: r.RW,
          rotateY: r.RW,
          rotateZ: r.RW,
          scale: n.bA,
          scaleX: n.bA,
          scaleY: n.bA,
          scaleZ: n.bA,
          skew: r.RW,
          skewX: r.RW,
          skewY: r.RW,
          distance: r.px,
          translateX: r.px,
          translateY: r.px,
          translateZ: r.px,
          x: r.px,
          y: r.px,
          z: r.px,
          perspective: r.px,
          transformPerspective: r.px,
          opacity: n.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: s,
          fillOpacity: n.Fq,
          strokeOpacity: n.Fq,
          numOctaves: s,
        };
    },
    4707: function (t, e, i) {
      i.d(e, {
        l: function () {
          return n;
        },
      });
      let n = (t) => (e) => e.test(t);
    },
    618: function (t, e, i) {
      i.d(e, {
        G: function () {
          return r;
        },
        _: function () {
          return n;
        },
      });
      let n = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        r = new Set(n);
    },
    4178: function (t, e, i) {
      i.d(e, {
        e: function () {
          return h;
        },
        m: function () {
          return u;
        },
      });
      var n = i(4205);
      let r = new Set(),
        s = !1,
        o = !1;
      function a() {
        o &&
          (r.forEach((t) => {
            t.needsMeasurement && t.unsetTransforms();
          }),
          r.forEach((t) => {
            t.needsMeasurement && t.measureInitialState();
          }),
          r.forEach((t) => {
            t.needsMeasurement && t.renderEndStyles();
          }),
          r.forEach((t) => {
            t.needsMeasurement && t.measureEndState();
          })),
          (o = !1),
          (s = !1),
          r.forEach((t) => t.complete()),
          r.clear();
      }
      function l() {
        r.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (o = !0);
        }),
          n.Wi.resolveKeyframes(a);
      }
      function u() {
        l(), a(), (0, n.Pn)(l), (0, n.Pn)(a);
      }
      class h {
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (r.add(this), s || ((s = !0), n.Wi.read(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        unsetTransforms() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes),
            r.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), r.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
        constructor(t, e, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
      }
    },
    1148: function (t, e, i) {
      i.d(e, {
        x: function () {
          return r;
        },
      });
      var n = i(1422);
      function r(t, e, i) {
        let r = t.getProps();
        return (0, n.o)(
          r,
          e,
          void 0 !== i ? i : r.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.getVelocity())), e;
          })(t)
        );
      }
    },
    1422: function (t, e, i) {
      i.d(e, {
        o: function () {
          return n;
        },
      });
      function n(t, e, i) {
        let n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          r =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return (
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          e
        );
      }
    },
    1648: function (t, e, i) {
      i.d(e, {
        C: function () {
          return o;
        },
      });
      var n = i(698),
        r = i(3299),
        s = i(1148);
      function o(t, e) {
        let {
          transitionEnd: i = {},
          transition: o = {},
          ...a
        } = (0, s.x)(t, e) || {};
        for (let e in (a = { ...a, ...i })) {
          let i = (0, n.Y)(a[e]);
          t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, r.BX)(i));
        }
      }
    },
    6832: function (t, e, i) {
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    406: function (t, e, i) {
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return n;
        },
      });
    },
    2476: function (t, e, i) {
      i.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    9908: function (t, e, i) {
      i.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var n = i(3393);
      let r = n.Z,
        s = n.Z;
    },
    1702: function (t, e, i) {
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof document;
    },
    4829: function (t, e, i) {
      i.d(e, {
        P: function () {
          return n;
        },
      });
      let n = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    6894: function (t, e, i) {
      i.d(e, {
        W: function () {
          return n;
        },
      });
      let n = (t) => /^0[^.\s]+$/u.test(t);
    },
    5312: function (t, e, i) {
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = (t, e, i) => t + (e - t) * i;
    },
    3393: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    9280: function (t, e, i) {
      i.d(e, {
        z: function () {
          return r;
        },
      });
      let n = (t, e) => (i) => e(t(i)),
        r = function () {
          for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          return e.reduce(n);
        };
    },
    9049: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    698: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return s;
        },
        p: function () {
          return r;
        },
      });
      var n = i(561);
      let r = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        s = (t) => ((0, n.C)(t) ? t[t.length - 1] || 0 : t);
    },
    2685: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(406);
      class r {
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
        constructor() {
          this.subscriptions = [];
        }
      }
    },
    3303: function (t, e, i) {
      i.d(e, {
        X: function () {
          return r;
        },
        w: function () {
          return n;
        },
      });
      let n = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    2435: function (t, e, i) {
      i.d(e, {
        h: function () {
          return r;
        },
      });
      var n = i(2265);
      function r(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    5526: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(2265);
      let r = i(1702).j ? n.useLayoutEffect : n.useEffect;
    },
    2181: function (t, e, i) {
      i.d(e, {
        R: function () {
          return n;
        },
      });
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    3299: function (t, e, i) {
      i.d(e, {
        BX: function () {
          return h;
        },
      });
      var n = i(2685),
        r = i(2181),
        s = i(3791),
        o = i(4205);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        setCurrent(t) {
          (this.current = t), (this.updatedAt = s.X.now());
        }
        setPrevFrameValue() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.current;
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t) {
          let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t) {
          let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        constructor(t, e = {}) {
          var i = this;
          (this.version = "11.0.12"),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = function (t) {
              let e =
                  !(arguments.length > 1) ||
                  void 0 === arguments[1] ||
                  arguments[1],
                n = s.X.now();
              i.updatedAt !== n && i.setPrevFrameValue(),
                (i.prev = i.current),
                i.setCurrent(t),
                i.current !== i.prev &&
                  i.events.change &&
                  i.events.change.notify(i.current),
                e &&
                  i.events.renderRequest &&
                  i.events.renderRequest.notify(i.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.canTrackVelocity = a(this.current)),
            (this.owner = e.owner);
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    4184: function (t, e, i) {
      i.d(e, {
        $: function () {
          return r;
        },
      });
      var n = i(6352);
      let r = {
        test: (0, i(204).i)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            n = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    9808: function (t, e, i) {
      i.d(e, {
        J: function () {
          return a;
        },
      });
      var n = i(5218),
        r = i(2724),
        s = i(3922),
        o = i(204);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: (t) => {
          let { hue: e, saturation: i, lightness: o, alpha: a = 1 } = t;
          return (
            "hsla(" +
            Math.round(e) +
            ", " +
            r.aQ.transform((0, s.Nw)(i)) +
            ", " +
            r.aQ.transform((0, s.Nw)(o)) +
            ", " +
            (0, s.Nw)(n.Fq.transform(a)) +
            ")"
          );
        },
      };
    },
    2809: function (t, e, i) {
      i.d(e, {
        $: function () {
          return a;
        },
      });
      var n = i(3922),
        r = i(4184),
        s = i(9808),
        o = i(6352);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
            ? s.J.parse(t)
            : r.$.parse(t),
        transform: (t) =>
          (0, n.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? o.m.transform(t)
            : s.J.transform(t),
      };
    },
    6352: function (t, e, i) {
      i.d(e, {
        m: function () {
          return u;
        },
      });
      var n = i(2476),
        r = i(5218),
        s = i(3922),
        o = i(204);
      let a = (t) => (0, n.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: (t) => {
            let { red: e, green: i, blue: n, alpha: o = 1 } = t;
            return (
              "rgba(" +
              l.transform(e) +
              ", " +
              l.transform(i) +
              ", " +
              l.transform(n) +
              ", " +
              (0, s.Nw)(r.Fq.transform(o)) +
              ")"
            );
          },
        };
    },
    204: function (t, e, i) {
      i.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      var n = i(3922);
      let r = (t, e) => (i) =>
          !!(
            ((0, n.HD)(i) && n.mj.test(i) && i.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        s = (t, e, i) => (r) => {
          if (!(0, n.HD)(r)) return r;
          let [s, o, a, l] = r.match(n.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    2915: function (t, e, i) {
      i.d(e, {
        h: function () {
          return l;
        },
      });
      var n = i(2263),
        r = i(3922);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(r.KP) || [];
        if (!n) return t;
        let o = i.replace(n, ""),
          a = s.has(e) ? 1 : 0;
        return n !== i && (a *= 100), e + "(" + a + o + ")";
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...n.P,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(" ") : t;
          },
        };
    },
    2263: function (t, e, i) {
      i.d(e, {
        P: function () {
          return d;
        },
        V: function () {
          return l;
        },
      });
      var n = i(2809),
        r = i(3922);
      let s = "number",
        o = "color",
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          h = e
            .replace(
              a,
              (t) => (
                n.$.test(t)
                  ? (r.color.push(u), l.push(o), i.push(n.$.parse(t)))
                  : t.startsWith("var(")
                  ? (r.var.push(u), l.push("var"), i.push(t))
                  : (r.number.push(u), l.push(s), i.push(parseFloat(t))),
                ++u,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: h, indexes: r, types: l };
      }
      function u(t) {
        return l(t).values;
      }
      function h(t) {
        let { split: e, types: i } = l(t),
          a = e.length;
        return (t) => {
          let l = "";
          for (let u = 0; u < a; u++)
            if (((l += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === s
                ? (l += (0, r.Nw)(t[u]))
                : e === o
                ? (l += n.$.transform(t[u]))
                : (l += t[u]);
            }
          return l;
        };
      }
      let c = (t) => ("number" == typeof t ? 0 : t),
        d = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              (0, r.HD)(t) &&
              ((null === (e = t.match(r.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(r.dA)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = u(t);
            return h(t)(e.map(c));
          },
        };
    },
    5218: function (t, e, i) {
      i.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return o;
        },
      });
      var n = i(2476);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, n.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    2724: function (t, e, i) {
      i.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var n = i(3922);
      let r = (t) => ({
          test: (e) =>
            (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => "".concat(e).concat(t),
        }),
        s = r("deg"),
        o = r("%"),
        a = r("px"),
        l = r("vh"),
        u = r("vw"),
        h = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    3922: function (t, e, i) {
      i.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return n;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let n = (t) => Math.round(1e5 * t) / 1e5,
        r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        s =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        o =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(t) {
        return "string" == typeof t;
      }
    },
    2212: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(2702);
      function r(t) {
        return !!((0, n.i)(t) && t.add);
      }
    },
    2702: function (t, e, i) {
      i.d(e, {
        i: function () {
          return n;
        },
      });
      let n = (t) => !!(t && t.getVelocity);
    },
  },
]);
