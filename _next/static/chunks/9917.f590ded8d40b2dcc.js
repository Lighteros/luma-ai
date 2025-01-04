"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9917, 7077],
  {
    7077: function (e, t, a) {
      a.d(t, {
        Eo: function () {
          return f;
        },
        loadGifImage: function () {
          return c;
        },
      });
      let i = [0, 4, 2, 1],
        o = [8, 8, 4, 2];
      class l {
        getString(e) {
          let t = this.data.slice(this.pos, this.pos + e);
          return (
            (this.pos += t.length),
            t.reduce((e, t) => e + String.fromCharCode(t), "")
          );
        }
        nextByte() {
          return this.data[this.pos++];
        }
        nextTwoBytes() {
          return (
            (this.pos += 2),
            this.data[this.pos - 2] + (this.data[this.pos - 1] << 8)
          );
        }
        readSubBlocks() {
          let e = "",
            t = 0;
          do {
            t = this.data[this.pos++];
            for (
              let a = t;
              --a >= 0;
              e += String.fromCharCode(this.data[this.pos++])
            );
          } while (0 !== t);
          return e;
        }
        readSubBlocksBin() {
          let e = this.data[this.pos],
            t = 0;
          for (let a = 0; 0 !== e; a += e + 1, e = this.data[this.pos + a])
            t += e;
          let a = new Uint8Array(t);
          e = this.data[this.pos++];
          for (let t = 0; 0 !== e; e = this.data[this.pos++])
            for (let i = e; --i >= 0; a[t++] = this.data[this.pos++]);
          return a;
        }
        skipSubBlocks() {
          for (
            ;
            0 !== this.data[this.pos];
            this.pos += this.data[this.pos] + 1
          );
          this.pos++;
        }
        constructor(e) {
          (this.pos = 0), (this.data = new Uint8ClampedArray(e));
        }
      }
      let r = { x: 0, y: 0 };
      function n(e, t) {
        let a = [];
        for (let i = 0; i < t; i++)
          a.push({
            r: e.data[e.pos],
            g: e.data[e.pos + 1],
            b: e.data[e.pos + 2],
          }),
            (e.pos += 3);
        return a;
      }
      async function s(e, t, a, l, r, s) {
        let h = t.frames[l(!0)];
        (h.left = e.nextTwoBytes()),
          (h.top = e.nextTwoBytes()),
          (h.width = e.nextTwoBytes()),
          (h.height = e.nextTwoBytes());
        let g = e.nextByte(),
          f = (128 & g) == 128;
        (h.sortFlag = (32 & g) == 32),
          (h.reserved = (24 & g) >>> 3),
          f && (h.localColorTable = n(e, 1 << ((7 & g) + 1)));
        let c = (e) => {
            let {
              r: i,
              g: o,
              b: l,
            } = (f ? h.localColorTable : t.globalColorTable)[e];
            return e !== r(null)
              ? { r: i, g: o, b: l, a: 255 }
              : { r: i, g: o, b: l, a: a ? ~~((i + o + l) / 3) : 0 };
          },
          d = (() => {
            try {
              return new ImageData(h.width, h.height, { colorSpace: "srgb" });
            } catch (e) {
              if (e instanceof DOMException && "IndexSizeError" === e.name)
                return null;
              throw e;
            }
          })();
        if (null == d) throw EvalError("GIF frame size is to large");
        let p = e.nextByte(),
          u = e.readSubBlocksBin(),
          m = 1 << p,
          w = (e, t) => {
            let a = e >>> 3,
              i = 7 & e;
            return (
              ((u[a] + (u[a + 1] << 8) + (u[a + 2] << 16)) &
                (((1 << t) - 1) << i)) >>>
              i
            );
          };
        if ((64 & g) == 64) {
          for (let a = 0, r = p + 1, n = 0, g = [[0]], f = 0; f < 4; f++) {
            if (i[f] < h.height) {
              let e = 0,
                t = 0,
                l = !1;
              for (; !l; ) {
                let s = a;
                if (((a = w(n, r)), (n += r + 1), a === m)) {
                  (r = p + 1), (g.length = m + 2);
                  for (let e = 0; e < g.length; e++) g[e] = e < m ? [e] : [];
                } else {
                  for (let l of (a >= g.length
                    ? g.push(g[s].concat(g[s][0]))
                    : s !== m && g.push(g[s].concat(g[a][0])),
                  g[a])) {
                    let { r: a, g: r, b: n, a: s } = c(l);
                    d.data.set(
                      [a, r, n, s],
                      i[f] * h.width + o[f] * t + (e % (4 * h.width))
                    ),
                      (e += 4);
                  }
                  g.length === 1 << r && r < 12 && r++;
                }
                e === 4 * h.width * (t + 1) &&
                  (t++, i[f] + o[f] * t >= h.height && (l = !0));
              }
            }
            null == s ||
              s(
                e.pos / (e.data.length - 1),
                l(!1) + 1,
                d,
                { x: h.left, y: h.top },
                { width: t.width, height: t.height }
              );
          }
          (h.image = d), (h.bitmap = await createImageBitmap(d));
        } else {
          let a = 0,
            i = p + 1,
            o = 0,
            r = -4,
            n = !1,
            g = [[0]];
          for (; !n; ) {
            let e = a;
            if (((a = w(o, i)), (o += i), a === m)) {
              (i = p + 1), (g.length = m + 2);
              for (let e = 0; e < g.length; e++) g[e] = e < m ? [e] : [];
            } else {
              if (a === m + 1) {
                n = !0;
                break;
              }
              for (let t of (a >= g.length
                ? g.push(g[e].concat(g[e][0]))
                : e !== m && g.push(g[e].concat(g[a][0])),
              g[a])) {
                let { r: e, g: a, b: i, a: o } = c(t);
                d.data.set([e, a, i, o], (r += 4));
              }
              g.length >= 1 << i && i < 12 && i++;
            }
          }
          (h.image = d),
            (h.bitmap = await createImageBitmap(d)),
            null == s ||
              s(
                (e.pos + 1) / e.data.length,
                l(!1) + 1,
                h.image,
                { x: h.left, y: h.top },
                { width: t.width, height: t.height }
              );
        }
      }
      async function h(e, t, a, i, o, l) {
        switch (e.nextByte()) {
          case 59:
            return !0;
          case 44:
            await s(e, t, a, i, o, l);
            break;
          case 33:
            !(function (e, t, a, i) {
              switch (e.nextByte()) {
                case 249: {
                  let o = t.frames[a(!1)];
                  e.pos++;
                  let l = e.nextByte();
                  (o.GCreserved = (224 & l) >>> 5),
                    (o.disposalMethod = (28 & l) >>> 2),
                    (o.userInputDelayFlag = (2 & l) == 2),
                    (o.delayTime = 10 * e.nextTwoBytes());
                  let r = e.nextByte();
                  (1 & l) == 1 && i(r), e.pos++;
                  break;
                }
                case 255: {
                  e.pos++;
                  let a = {
                    identifier: e.getString(8),
                    authenticationCode: e.getString(3),
                    data: e.readSubBlocksBin(),
                  };
                  t.applicationExtensions.push(a);
                  break;
                }
                case 254:
                  t.comments.push([a(!1), e.readSubBlocks()]);
                  break;
                case 1:
                  if (0 === t.globalColorTable.length)
                    throw EvalError(
                      "plain text extension without global color table"
                    );
                  e.pos++,
                    (t.frames[a(!1)].plainTextData = {
                      left: e.nextTwoBytes(),
                      top: e.nextTwoBytes(),
                      width: e.nextTwoBytes(),
                      height: e.nextTwoBytes(),
                      charSize: {
                        width: e.nextTwoBytes(),
                        height: e.nextTwoBytes(),
                      },
                      foregroundColor: e.nextByte(),
                      backgroundColor: e.nextByte(),
                      text: e.readSubBlocks(),
                    });
                  break;
                default:
                  e.skipSubBlocks();
              }
            })(e, t, i, o);
            break;
          default:
            throw EvalError("undefined block found");
        }
        return !1;
      }
      async function g(e, t, a) {
        a || (a = !1);
        let i = await fetch(e);
        if (!i.ok && 404 === i.status) throw EvalError("file not found");
        let o = await i.arrayBuffer(),
          r = {
            width: 0,
            height: 0,
            totalTime: 0,
            colorRes: 0,
            pixelAspectRatio: 0,
            frames: [],
            sortFlag: !1,
            globalColorTable: [],
            backgroundImage: new ImageData(1, 1, { colorSpace: "srgb" }),
            comments: [],
            applicationExtensions: [],
          },
          s = new l(new Uint8ClampedArray(o));
        if ("GIF89a" !== s.getString(6))
          throw Error("not a supported GIF file");
        (r.width = s.nextTwoBytes()), (r.height = s.nextTwoBytes());
        let g = s.nextByte(),
          f = (128 & g) == 128;
        (r.colorRes = (112 & g) >>> 4), (r.sortFlag = (8 & g) == 8);
        let c = s.nextByte();
        (r.pixelAspectRatio = s.nextByte()),
          0 !== r.pixelAspectRatio &&
            (r.pixelAspectRatio = (r.pixelAspectRatio + 15) / 64),
          f && (r.globalColorTable = n(s, 1 << ((7 & g) + 1)));
        let d = (() => {
          try {
            return new ImageData(r.width, r.height, { colorSpace: "srgb" });
          } catch (e) {
            if (e instanceof DOMException && "IndexSizeError" === e.name)
              return null;
            throw e;
          }
        })();
        if (null == d) throw Error("GIF frame size is to large");
        let { r: p, g: u, b: m } = r.globalColorTable[c];
        d.data.set(f ? [p, u, m, 255] : [0, 0, 0, 0]);
        for (let e = 4; e < d.data.length; e *= 2) d.data.copyWithin(e, 0, e);
        r.backgroundImage = d;
        let w = -1,
          y = !0,
          x = -1,
          b = (e) => (e && (y = !0), w),
          C = (e) => (null != e && (x = e), x);
        try {
          do
            y &&
              (r.frames.push({
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                disposalMethod: 0,
                image: new ImageData(1, 1, { colorSpace: "srgb" }),
                plainTextData: null,
                userInputDelayFlag: !1,
                delayTime: 0,
                sortFlag: !1,
                localColorTable: [],
                reserved: 0,
                GCreserved: 0,
              }),
              w++,
              (x = -1),
              (y = !1));
          while (!(await h(s, r, a, b, C, t)));
          for (let e of (r.frames.length--, r.frames)) {
            if (e.userInputDelayFlag && 0 === e.delayTime) {
              r.totalTime = 1 / 0;
              break;
            }
            r.totalTime += e.delayTime;
          }
          return r;
        } catch (e) {
          if (e instanceof EvalError)
            throw Error(
              "error while parsing frame "
                .concat(w, ' "')
                .concat(e.message, '"')
            );
          throw e;
        }
      }
      function f(e) {
        var t, a;
        let { context: i, radius: o, particle: l, delta: n } = e,
          s = l.image;
        if (!(null == s ? void 0 : s.gifData) || !s.gif) return;
        let h = new OffscreenCanvas(s.gifData.width, s.gifData.height),
          g = h.getContext("2d");
        if (!g) throw Error("could not create offscreen canvas context");
        (g.imageSmoothingQuality = "low"),
          (g.imageSmoothingEnabled = !1),
          g.clearRect(r.x, r.y, h.width, h.height),
          void 0 === l.gifLoopCount &&
            (l.gifLoopCount =
              null !== (t = s.gifLoopCount) && void 0 !== t ? t : 0);
        let f = null !== (a = l.gifFrame) && void 0 !== a ? a : 0,
          c = { x: -(0.5 * s.gifData.width), y: -(0.5 * s.gifData.height) },
          d = s.gifData.frames[f];
        if ((void 0 === l.gifTime && (l.gifTime = 0), d.bitmap)) {
          switch (
            (i.scale(o / s.gifData.width, o / s.gifData.height),
            d.disposalMethod)
          ) {
            case 4:
            case 5:
            case 6:
            case 7:
            case 0:
              g.drawImage(d.bitmap, d.left, d.top),
                i.drawImage(h, c.x, c.y),
                g.clearRect(r.x, r.y, h.width, h.height);
              break;
            case 1:
              g.drawImage(d.bitmap, d.left, d.top), i.drawImage(h, c.x, c.y);
              break;
            case 2:
              g.drawImage(d.bitmap, d.left, d.top),
                i.drawImage(h, c.x, c.y),
                g.clearRect(r.x, r.y, h.width, h.height),
                s.gifData.globalColorTable.length
                  ? g.putImageData(s.gifData.backgroundImage, c.x, c.y)
                  : g.putImageData(
                      s.gifData.frames[0].image,
                      c.x + d.left,
                      c.y + d.top
                    );
              break;
            case 3: {
              let e = g.getImageData(r.x, r.y, h.width, h.height);
              g.drawImage(d.bitmap, d.left, d.top),
                i.drawImage(h, c.x, c.y),
                g.clearRect(r.x, r.y, h.width, h.height),
                g.putImageData(e, r.x, r.y);
            }
          }
          if (((l.gifTime += n.value), l.gifTime > d.delayTime)) {
            if (((l.gifTime -= d.delayTime), ++f >= s.gifData.frames.length)) {
              if (--l.gifLoopCount <= 0) return;
              (f = 0), g.clearRect(r.x, r.y, h.width, h.height);
            }
            l.gifFrame = f;
          }
          i.scale(s.gifData.width / o, s.gifData.height / o);
        }
      }
      async function c(e) {
        if ("gif" !== e.type) {
          let { loadImage: t } = await Promise.resolve().then(a.bind(a, 3397));
          await t(e);
          return;
        }
        e.loading = !0;
        try {
          var t;
          (e.gifData = await g(e.source)),
            (e.gifLoopCount =
              null !==
                (t = (function (e) {
                  for (let t of e.applicationExtensions)
                    if (t.identifier + t.authenticationCode === "NETSCAPE2.0")
                      return t.data[1] + (t.data[2] << 8);
                  return NaN;
                })(e.gifData)) && void 0 !== t
                ? t
                : 0),
            e.gifLoopCount || (e.gifLoopCount = 1 / 0);
        } catch (t) {
          e.error = !0;
        }
        e.loading = !1;
      }
    },
    9917: function (e, t, a) {
      a.d(t, {
        ImageDrawer: function () {
          return r;
        },
      });
      var i = a(7837),
        o = a(3397),
        l = a(7077);
      class r {
        addImage(e) {
          this._engine.images || (this._engine.images = []),
            this._engine.images.push(e);
        }
        draw(e) {
          let { context: t, radius: a, particle: i, opacity: o } = e,
            r = i.image,
            n = null == r ? void 0 : r.element;
          if (r) {
            if (((t.globalAlpha = o), r.gif && r.gifData)) (0, l.Eo)(e);
            else if (n) {
              let e = r.ratio,
                i = { x: -a, y: -a },
                o = 2 * a;
              t.drawImage(n, i.x, i.y, o, o / e);
            }
            t.globalAlpha = 1;
          }
        }
        getSidesCount() {
          return 12;
        }
        async init(e) {
          let t = e.actualOptions;
          if (t.preload && this._engine.loadImage)
            for (let e of t.preload) await this._engine.loadImage(e);
        }
        loadShape(e) {
          if ("image" !== e.shape && "images" !== e.shape) return;
          this._engine.images || (this._engine.images = []);
          let t = e.shapeData;
          t &&
            (this._engine.images.find(
              (e) => e.name === t.name || e.source === t.src
            ) ||
              this.loadImageShape(t).then(() => {
                this.loadShape(e);
              }));
        }
        particleInit(e, t) {
          var a;
          if ("image" !== t.shape && "images" !== t.shape) return;
          this._engine.images || (this._engine.images = []);
          let i = this._engine.images,
            l = t.shapeData;
          if (!l) return;
          let r = t.getFillColor(),
            n = i.find((e) => e.name === l.name || e.source === l.src);
          if (!n) return;
          let s =
            null !== (a = l.replaceColor) && void 0 !== a ? a : n.replaceColor;
          if (n.loading) {
            setTimeout(() => {
              this.particleInit(e, t);
            });
            return;
          }
          (async () => {
            var e, a, i;
            let h;
            (h =
              n.svgData && r
                ? await (0, o.e)(n, l, r, t)
                : {
                    color: r,
                    data: n,
                    element: n.element,
                    gif: n.gif,
                    gifData: n.gifData,
                    gifLoopCount: n.gifLoopCount,
                    loaded: !0,
                    ratio:
                      l.width && l.height
                        ? l.width / l.height
                        : null !== (e = n.ratio) && void 0 !== e
                        ? e
                        : 1,
                    replaceColor: s,
                    source: l.src,
                  }).ratio || (h.ratio = 1);
            let g = {
              image: h,
              fill: null !== (a = l.fill) && void 0 !== a ? a : t.shapeFill,
              close: null !== (i = l.close) && void 0 !== i ? i : t.shapeClose,
            };
            (t.image = g.image),
              (t.shapeFill = g.fill),
              (t.shapeClose = g.close);
          })();
        }
        constructor(e) {
          (this.loadImageShape = async (e) => {
            var t;
            if (!this._engine.loadImage)
              throw Error("".concat(i.gK, " image shape not initialized"));
            await this._engine.loadImage({
              gif: e.gif,
              name: e.name,
              replaceColor: null !== (t = e.replaceColor) && void 0 !== t && t,
              src: e.src,
            });
          }),
            (this._engine = e);
        }
      }
    },
  },
]);
