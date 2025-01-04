"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [369],
  {
    369: function (e, t, a) {
      a.d(t, {
        EmojiDrawer: function () {
          return o;
        },
      });
      var i = a(7837),
        l = a(3335);
      let n =
        '"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';
      class o {
        destroy() {
          for (let [e, t] of this._emojiShapeDict)
            t instanceof ImageBitmap &&
              (null == t || t.close(), this._emojiShapeDict.delete(e));
        }
        draw(e) {
          !(function (e) {
            let { context: t, particle: a, radius: i, opacity: l } = e,
              n = a.emojiData,
              o = 2 * i,
              r = t.globalAlpha;
            n &&
              ((t.globalAlpha = l),
              t.drawImage(n, -i, -i, o, o),
              (t.globalAlpha = r));
          })(e);
        }
        async init(e) {
          let t = e.actualOptions;
          if (!l.h.find((e) => (0, i.dB)(e, t.particles.shape.type))) return;
          let a = [(0, i.mx)(n)],
            o = l.h.map((e) => t.particles.shape.options[e]).find((e) => !!e);
          o &&
            (0, i.KH)(o, (e) => {
              e.font && a.push((0, i.mx)(e.font));
            }),
            await Promise.all(a);
        }
        particleDestroy(e) {
          delete e.emojiData;
        }
        particleInit(e, t) {
          var a;
          let l;
          let o = t.shapeData;
          if (!(null == o ? void 0 : o.value)) return;
          let r = (0, i.wA)(o.value, t.randomIndexData),
            c = null !== (a = o.font) && void 0 !== a ? a : n;
          if (!r) return;
          let s = "".concat(r, "_").concat(c),
            f = this._emojiShapeDict.get(s);
          if (f) {
            t.emojiData = f;
            return;
          }
          let p = 2 * (0, i.KI)(t.size.value),
            m = (0, i.KI)(t.size.value);
          if ("undefined" != typeof OffscreenCanvas) {
            let e = new OffscreenCanvas(p, p),
              t = e.getContext("2d");
            if (!t) return;
            (t.font = "400 ".concat(2 * m, "px ").concat(c)),
              (t.textBaseline = "middle"),
              (t.textAlign = "center"),
              t.fillText(r, m, m),
              (l = e.transferToImageBitmap());
          } else {
            let e = document.createElement("canvas");
            (e.width = p), (e.height = p);
            let t = e.getContext("2d");
            if (!t) return;
            (t.font = "400 ".concat(2 * m, "px ").concat(c)),
              (t.textBaseline = "middle"),
              (t.textAlign = "center"),
              t.fillText(r, m, m),
              (l = e);
          }
          this._emojiShapeDict.set(s, l), (t.emojiData = l);
        }
        constructor() {
          this._emojiShapeDict = new Map();
        }
      }
    },
  },
]);
