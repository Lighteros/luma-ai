"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4562],
  {
    4562: function (t, i, o) {
      o.d(i, {
        Slower: function () {
          return n;
        },
      });
      var e = o(7837);
      class s {
        load(t) {
          t &&
            (void 0 !== t.factor && (this.factor = t.factor),
            void 0 !== t.radius && (this.radius = t.radius));
        }
        constructor() {
          (this.factor = 3), (this.radius = 200);
        }
      }
      class n extends e.L8 {
        clear(t, i, o) {
          (!t.slow.inRange || o) && (t.slow.factor = 1);
        }
        init() {
          let t = this.container,
            i = t.actualOptions.interactivity.modes.slow;
          i && (t.retina.slowModeRadius = i.radius * t.retina.pixelRatio);
        }
        interact() {}
        isEnabled(t) {
          var i;
          let o = this.container,
            s = o.interactivity.mouse,
            n = (
              null !== (i = null == t ? void 0 : t.interactivity) &&
              void 0 !== i
                ? i
                : o.actualOptions.interactivity
            ).events;
          return (
            n.onHover.enable &&
            !!s.position &&
            (0, e.dB)("slow", n.onHover.mode)
          );
        }
        loadModeOptions(t) {
          for (
            var i = arguments.length, o = Array(i > 1 ? i - 1 : 0), e = 1;
            e < i;
            e++
          )
            o[e - 1] = arguments[e];
          for (let i of (t.slow || (t.slow = new s()), o))
            t.slow.load(null == i ? void 0 : i.slow);
        }
        reset(t) {
          t.slow.inRange = !1;
          let i = this.container,
            o = i.actualOptions,
            s = i.interactivity.mouse.position,
            n = i.retina.slowModeRadius,
            a = o.interactivity.modes.slow;
          if (!a || !n || n < 0 || !s) return;
          let r = t.getPosition(),
            l = (0, e.Sp)(s, r),
            c = a.factor,
            { slow: u } = t;
          l > n || ((u.inRange = !0), (u.factor = l / n / c));
        }
        constructor(t) {
          super(t);
        }
      }
    },
  },
]);
