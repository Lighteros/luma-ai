"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2809],
  {
    7789: function (t, n, e) {
      e.d(n, {
        J: function () {
          return i;
        },
      });
      var a = e(7837);
      class i {
        load(t) {
          if (!t) return;
          let n = t.quantity;
          void 0 !== n && (this.quantity = (0, a.Cs)(n));
        }
        constructor() {
          this.quantity = 2;
        }
      }
    },
    7940: function (t, n, e) {
      async function a(t) {
        let n =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        await t.addInteractor(
          "externalRemove",
          async (t) => {
            let { Remover: n } = await e.e(6436).then(e.bind(e, 6436));
            return new n(t);
          },
          n
        );
      }
      e.d(n, {
        loadExternalRemoveInteraction: function () {
          return a;
        },
      }),
        e(7789);
    },
  },
]);
