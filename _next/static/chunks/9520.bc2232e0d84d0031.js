"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9520],
  {
    9520: function (n, e, t) {
      t.d(e, {
        LinksPlugin: function () {
          return s;
        },
      });
      class s {
        async getPlugin(n) {
          let { LinkInstance: e } = await t.e(7783).then(t.bind(t, 7783));
          return new e(n);
        }
        loadOptions() {}
        needsPlugin() {
          return !0;
        }
        constructor() {
          this.id = "links";
        }
      }
    },
  },
]);
