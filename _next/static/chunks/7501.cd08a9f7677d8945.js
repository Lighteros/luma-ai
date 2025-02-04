"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7501],
  {
    7501: function (t, e, a) {
      a.d(e, {
        RotateUpdater: function () {
          return r;
        },
      });
      var o = a(7837);
      class i {
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed && (this.speed = (0, o.Cs)(t.speed)),
            void 0 !== t.decay && (this.decay = (0, o.Cs)(t.decay)),
            void 0 !== t.sync && (this.sync = t.sync));
        }
        constructor() {
          (this.enable = !1),
            (this.speed = 0),
            (this.decay = 0),
            (this.sync = !1);
        }
      }
      class n extends o.SW {
        load(t) {
          t &&
            (super.load(t),
            void 0 !== t.direction && (this.direction = t.direction),
            this.animation.load(t.animation),
            void 0 !== t.path && (this.path = t.path));
        }
        constructor() {
          super(),
            (this.animation = new i()),
            (this.direction = "clockwise"),
            (this.path = !1),
            (this.value = 0);
        }
      }
      let s = 2 * Math.PI;
      class r {
        init(t) {
          let e = t.options.rotate;
          if (!e) return;
          (t.rotate = {
            enable: e.animation.enable,
            value: (0, o.Id)((0, o.Gu)(e.value)),
            min: 0,
            max: s,
          }),
            (t.pathRotation = e.path);
          let a = e.direction;
          switch (
            ("random" === a &&
              (a =
                Math.floor(2 * (0, o.sZ)()) > 0
                  ? "counter-clockwise"
                  : "clockwise"),
            a)
          ) {
            case "counter-clockwise":
            case "counterClockwise":
              t.rotate.status = "decreasing";
              break;
            case "clockwise":
              t.rotate.status = "increasing";
          }
          let i = e.animation;
          i.enable &&
            ((t.rotate.decay = 1 - (0, o.Gu)(i.decay)),
            (t.rotate.velocity =
              ((0, o.Gu)(i.speed) / 360) * this.container.retina.reduceFactor),
            i.sync || (t.rotate.velocity *= (0, o.sZ)())),
            (t.rotation = t.rotate.value);
        }
        isEnabled(t) {
          let e = t.options.rotate;
          return (
            !!e && !t.destroyed && !t.spawning && e.animation.enable && !e.path
          );
        }
        loadOptions(t) {
          for (
            var e = arguments.length, a = Array(e > 1 ? e - 1 : 0), o = 1;
            o < e;
            o++
          )
            a[o - 1] = arguments[o];
          for (let e of (t.rotate || (t.rotate = new n()), a))
            t.rotate.load(null == e ? void 0 : e.rotate);
        }
        update(t, e) {
          this.isEnabled(t) &&
            t.rotate &&
            ((0, o.Cr)(t, t.rotate, !1, "none", e),
            (t.rotation = t.rotate.value));
        }
        constructor(t) {
          this.container = t;
        }
      }
    },
  },
]);
