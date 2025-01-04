"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5754],
  {
    5091: function (e, t, s) {
      s.d(t, {
        H: function () {
          return d;
        },
      });
      var i = s(7837);
      class a {
        load(e) {
          e &&
            (void 0 !== e.distance && (this.distance = e.distance),
            void 0 !== e.duration && (this.duration = e.duration),
            void 0 !== e.easing && (this.easing = e.easing),
            void 0 !== e.factor && (this.factor = e.factor),
            void 0 !== e.speed && (this.speed = e.speed),
            void 0 !== e.maxSpeed && (this.maxSpeed = e.maxSpeed));
        }
        constructor() {
          (this.distance = 200),
            (this.duration = 0.4),
            (this.factor = 100),
            (this.speed = 1),
            (this.maxSpeed = 50),
            (this.easing = "ease-out-quad");
        }
      }
      class n extends a {
        load(e) {
          super.load(e),
            e && void 0 !== e.selectors && (this.selectors = e.selectors);
        }
        constructor() {
          super(), (this.selectors = []);
        }
      }
      class d extends a {
        load(e) {
          super.load(e),
            e &&
              (this.divs = (0, i.KH)(e.divs, (e) => {
                let t = new n();
                return t.load(e), t;
              }));
        }
      }
    },
    5754: function (e, t, s) {
      async function i(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await e.addInteractor(
          "externalRepulse",
          async (t) => {
            let { Repulser: i } = await s.e(6840).then(s.bind(s, 6840));
            return new i(e, t);
          },
          t
        );
      }
      s.d(t, {
        loadExternalRepulseInteraction: function () {
          return i;
        },
      }),
        s(5091);
    },
  },
]);
