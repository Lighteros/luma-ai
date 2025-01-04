"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5038],
  {
    5038: function (o, e, t) {
      t.d(e, {
        StrokeColorUpdater: function () {
          return l;
        },
      });
      var i = t(7837);
      class l {
        init(o) {
          var e, t, l;
          let n = this.container,
            r = o.options,
            a = (0, i.wA)(r.stroke, o.id, r.reduceDuplicates);
          (o.strokeWidth = (0, i.Gu)(a.width) * n.retina.pixelRatio),
            (o.strokeOpacity = (0, i.Gu)(
              null !== (t = a.opacity) && void 0 !== t ? t : 1
            )),
            (o.strokeAnimation =
              null === (e = a.color) || void 0 === e ? void 0 : e.animation);
          let s =
            null !== (l = (0, i.lN)(a.color)) && void 0 !== l
              ? l
              : o.getFillColor();
          s &&
            (o.strokeColor = (0, i.bS)(
              s,
              o.strokeAnimation,
              n.retina.reduceFactor
            ));
        }
        isEnabled(o) {
          let e = o.strokeAnimation,
            { strokeColor: t } = o;
          return (
            !o.destroyed &&
            !o.spawning &&
            !!e &&
            (((null == t ? void 0 : t.h.value) !== void 0 && t.h.enable) ||
              ((null == t ? void 0 : t.s.value) !== void 0 && t.s.enable) ||
              ((null == t ? void 0 : t.l.value) !== void 0 && t.l.enable))
          );
        }
        update(o, e) {
          this.isEnabled(o) && (0, i.PB)(o.strokeColor, e);
        }
        constructor(o) {
          this.container = o;
        }
      }
    },
  },
]);
