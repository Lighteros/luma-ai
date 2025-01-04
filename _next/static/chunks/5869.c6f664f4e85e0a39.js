"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5869],
  {
    3335: function (n, e, t) {
      t.d(e, {
        h: function () {
          return a;
        },
      });
      let a = ["emoji"];
    },
    5869: function (n, e, t) {
      t.d(e, {
        loadEmojiShape: function () {
          return i;
        },
      });
      var a = t(3335);
      async function i(n) {
        let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { EmojiDrawer: i } = await t.e(369).then(t.bind(t, 369));
        await n.addShape(a.h, new i(), e);
      }
    },
  },
]);
