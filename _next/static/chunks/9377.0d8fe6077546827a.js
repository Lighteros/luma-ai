"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9377],
  {
    9377: function (e, i, r) {
      r.d(i, {
        ImagePreloaderPlugin: function () {
          return t;
        },
      });
      class o {
        load(e) {
          e &&
            (void 0 !== e.gif && (this.gif = e.gif),
            void 0 !== e.height && (this.height = e.height),
            void 0 !== e.name && (this.name = e.name),
            void 0 !== e.replaceColor && (this.replaceColor = e.replaceColor),
            void 0 !== e.src && (this.src = e.src),
            void 0 !== e.width && (this.width = e.width));
        }
        constructor() {
          (this.src = ""), (this.gif = !1);
        }
      }
      class t {
        async getPlugin() {
          return await Promise.resolve(), {};
        }
        loadOptions(e, i) {
          if (!(null == i ? void 0 : i.preload)) return;
          e.preload || (e.preload = []);
          let r = e.preload;
          for (let e of i.preload) {
            let i = r.find((i) => i.name === e.name || i.src === e.src);
            if (i) i.load(e);
            else {
              let i = new o();
              i.load(e), r.push(i);
            }
          }
        }
        needsPlugin() {
          return !0;
        }
        constructor(e) {
          (this.id = "imagePreloader"), (this._engine = e);
        }
      }
    },
  },
]);
