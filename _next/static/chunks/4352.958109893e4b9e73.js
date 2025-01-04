"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4352],
  {
    4145: function (i, t, e) {
      e.d(t, {
        y: function () {
          return c;
        },
      });
      var o = e(7837),
        n = e(437),
        s = e(4237);
      class c {
        load(i) {
          i &&
            (void 0 !== i.id && (this.id = i.id),
            void 0 !== i.blink && (this.blink = i.blink),
            (this.color = o.Oz.create(this.color, i.color)),
            void 0 !== i.consent && (this.consent = i.consent),
            void 0 !== i.distance && (this.distance = i.distance),
            void 0 !== i.enable && (this.enable = i.enable),
            void 0 !== i.frequency && (this.frequency = i.frequency),
            void 0 !== i.opacity && (this.opacity = i.opacity),
            this.shadow.load(i.shadow),
            this.triangles.load(i.triangles),
            void 0 !== i.width && (this.width = i.width),
            void 0 !== i.warp && (this.warp = i.warp));
        }
        constructor() {
          (this.blink = !1),
            (this.color = new o.Oz()),
            (this.color.value = "#fff"),
            (this.consent = !1),
            (this.distance = 100),
            (this.enable = !1),
            (this.frequency = 1),
            (this.opacity = 1),
            (this.shadow = new n.u()),
            (this.triangles = new s.e()),
            (this.width = 1),
            (this.warp = !1);
        }
      }
    },
    437: function (i, t, e) {
      e.d(t, {
        u: function () {
          return n;
        },
      });
      var o = e(7837);
      class n {
        load(i) {
          i &&
            (void 0 !== i.blur && (this.blur = i.blur),
            (this.color = o.Oz.create(this.color, i.color)),
            void 0 !== i.enable && (this.enable = i.enable));
        }
        constructor() {
          (this.blur = 5),
            (this.color = new o.Oz()),
            (this.color.value = "#000"),
            (this.enable = !1);
        }
      }
    },
    4237: function (i, t, e) {
      e.d(t, {
        e: function () {
          return n;
        },
      });
      var o = e(7837);
      class n {
        load(i) {
          i &&
            (void 0 !== i.color &&
              (this.color = o.Oz.create(this.color, i.color)),
            void 0 !== i.enable && (this.enable = i.enable),
            void 0 !== i.frequency && (this.frequency = i.frequency),
            void 0 !== i.opacity && (this.opacity = i.opacity));
        }
        constructor() {
          (this.enable = !1), (this.frequency = 1);
        }
      }
    },
    4352: function (i, t, e) {
      async function o(i) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { loadLinksInteraction: o } = await e.e(4990).then(e.bind(e, 4990)),
          { loadLinksPlugin: n } = await e.e(9020).then(e.bind(e, 9020));
        await o(i, t), await n(i, t);
      }
      e.d(t, {
        loadParticlesLinksInteraction: function () {
          return o;
        },
      }),
        e(4145),
        e(437),
        e(4237);
    },
  },
]);
