"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5221],
  {
    5221: function (e, t, n) {
      n.d(t, {
        ParallaxMover: function () {
          return i;
        },
      });
      var a = n(7837);
      class i {
        init() {}
        isEnabled(e) {
          return (
            !(0, a.Kr)() &&
            !e.destroyed &&
            e.container.actualOptions.interactivity.events.onHover.parallax
              .enable
          );
        }
        move(e) {
          let t = e.container,
            n = t.actualOptions.interactivity.events.onHover.parallax;
          if ((0, a.Kr)() || !n.enable) return;
          let i = n.force,
            r = t.interactivity.mouse.position;
          if (!r) return;
          let o = t.canvas.size,
            s = { x: 0.5 * o.width, y: 0.5 * o.height },
            l = n.smooth,
            c = e.getRadius() / i,
            u = { x: (r.x - s.x) * c, y: (r.y - s.y) * c },
            { offset: v } = e;
          (v.x += (u.x - v.x) / l), (v.y += (u.y - v.y) / l);
        }
      }
    },
  },
]);
