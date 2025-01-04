"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7823],
  {
    3203: function (t, n, i) {
      i.d(n, {
        z: function () {
          return c;
        },
      });
      var o = i(6617);
      class c {
        load(t) {
          t &&
            (void 0 !== t.distance && (this.distance = t.distance),
            this.links.load(t.links));
        }
        constructor() {
          (this.distance = 100), (this.links = new o.p());
        }
      }
    },
    6617: function (t, n, i) {
      i.d(n, {
        p: function () {
          return c;
        },
      });
      var o = i(7837);
      class c {
        load(t) {
          t &&
            (void 0 !== t.blink && (this.blink = t.blink),
            void 0 !== t.color &&
              (this.color = o.Oz.create(this.color, t.color)),
            void 0 !== t.consent && (this.consent = t.consent),
            void 0 !== t.opacity && (this.opacity = t.opacity));
        }
        constructor() {
          (this.blink = !1), (this.consent = !1), (this.opacity = 1);
        }
      }
    },
    7823: function (t, n, i) {
      async function o(t) {
        let n =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await t.addInteractor(
          "externalGrab",
          async (t) => {
            let { Grabber: n } = await i.e(911).then(i.bind(i, 911));
            return new n(t);
          },
          n
        );
      }
      i.d(n, {
        loadExternalGrabInteraction: function () {
          return o;
        },
      }),
        i(3203),
        i(6617);
    },
  },
]);
