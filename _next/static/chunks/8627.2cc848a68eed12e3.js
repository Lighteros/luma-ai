"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8627],
  {
    3397: function (e, n, a) {
      a.d(n, {
        d: function () {
          return i;
        },
        e: function () {
          return l;
        },
        loadImage: function () {
          return o;
        },
      });
      var t = a(7837);
      let r =
        /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
      async function o(e) {
        return new Promise((n) => {
          e.loading = !0;
          let a = new Image();
          (e.element = a),
            a.addEventListener("load", () => {
              (e.loading = !1), n();
            }),
            a.addEventListener("error", () => {
              (e.element = void 0),
                (e.error = !0),
                (e.loading = !1),
                (0, t.jl)().error(
                  "".concat(t.gK, " loading image: ").concat(e.source)
                ),
                n();
            }),
            (a.src = e.source);
        });
      }
      async function i(e) {
        if ("svg" !== e.type) {
          await o(e);
          return;
        }
        e.loading = !0;
        let n = await fetch(e.source);
        n.ok
          ? (e.svgData = await n.text())
          : ((0, t.jl)().error("".concat(t.gK, " Image not found")),
            (e.error = !0)),
          (e.loading = !1);
      }
      function l(e, n, a, i) {
        var l, c;
        let d = (function (e, n, a) {
            let { svgData: o } = e;
            if (!o) return "";
            let i = (0, t.vz)(n, a);
            if (o.includes("fill")) return o.replace(r, () => i);
            let l = o.indexOf(">");
            return ""
              .concat(o.substring(0, l), ' fill="')
              .concat(i, '"')
              .concat(o.substring(l));
          })(
            e,
            a,
            null !==
              (c =
                null === (l = i.opacity) || void 0 === l ? void 0 : l.value) &&
              void 0 !== c
              ? c
              : 1
          ),
          s = {
            color: a,
            gif: n.gif,
            data: { ...e, svgData: d },
            loaded: !1,
            ratio: n.width / n.height,
            replaceColor: n.replaceColor,
            source: n.src,
          };
        return new Promise((n) => {
          let a = new Blob([d], { type: "image/svg+xml" }),
            t = URL || window.URL || window.webkitURL || window,
            r = t.createObjectURL(a),
            i = new Image();
          i.addEventListener("load", () => {
            (s.loaded = !0), (s.element = i), n(s), t.revokeObjectURL(r);
          });
          let l = async () => {
            t.revokeObjectURL(r);
            let a = { ...e, error: !1, loading: !0 };
            await o(a), (s.loaded = !0), (s.element = a.element), n(s);
          };
          i.addEventListener("error", () => void l()), (i.src = r);
        });
      }
    },
    8627: function (e, n, a) {
      a.d(n, {
        loadImageShape: function () {
          return o;
        },
      });
      var t = a(3397),
        r = a(7837);
      async function o(e) {
        let n =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        e.loadImage ||
          (e.loadImage = async (n) => {
            var o, i, l;
            if (!n.name && !n.src)
              throw Error("".concat(r.gK, " no image source provided"));
            if (
              (e.images || (e.images = []),
              !e.images.find((e) => e.name === n.name || e.source === n.src))
            )
              try {
                let r;
                let l = {
                  gif: null !== (o = n.gif) && void 0 !== o && o,
                  name: null !== (i = n.name) && void 0 !== i ? i : n.src,
                  source: n.src,
                  type: n.src.substring(n.src.length - 3),
                  error: !1,
                  loading: !0,
                  replaceColor: n.replaceColor,
                  ratio: n.width && n.height ? n.width / n.height : void 0,
                };
                if ((e.images.push(l), n.gif)) {
                  let { loadGifImage: e } = await a
                    .e(7077)
                    .then(a.bind(a, 7077));
                  r = e;
                } else r = n.replaceColor ? t.d : t.loadImage;
                await r(l);
              } catch (e) {
                throw Error(
                  ""
                    .concat(r.gK, " ")
                    .concat(
                      null !== (l = n.name) && void 0 !== l ? l : n.src,
                      " not found"
                    )
                );
              }
          });
        let { ImagePreloaderPlugin: o } = await a.e(9377).then(a.bind(a, 9377)),
          { ImageDrawer: i } = await a.e(9917).then(a.bind(a, 9917)),
          l = new o(e);
        await e.addPlugin(l, n),
          await e.addShape(["image", "images"], new i(e), n);
      }
    },
  },
]);
