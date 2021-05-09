"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _setting = require("@/api/setting");

var _utils = require("@/utils");

var _default = {
  namespaced: true,
  state: {
    isLoading: false,
    data: []
  },
  mutations: {
    setLoading: function setLoading(state, payload) {
      state.isLoading = payload;
    },
    setData: function setData(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    fetchData: function fetchData(_ref) {
      var commit, resp, link;
      return regeneratorRuntime.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              commit("setLoading", true);
              _context.next = 4;
              return regeneratorRuntime.awrap((0, _setting.getSetting)());

            case 4:
              resp = _context.sent;
              commit("setLoading", false);
              commit("setData", resp);

              if (!resp.favicon) {
                _context.next = 16;
                break;
              }

              // <link rel="shortcut icon " type="images/x-icon" href="./favicon.ico">
              link = document.querySelector("link[ref='shortcut icon']");

              if (!link) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return");

            case 11:
              link = document.createElement("link");
              link.rel = "shortcut icon";
              link.type = "images/x-icon";
              link.href = resp.favicon;
              document.querySelector("head").appendChild(link);

            case 16:
              if (resp.siteTitle) {
                _utils.titleController.setWebTitle(resp.siteTitle);
              }

            case 17:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }
};
exports["default"] = _default;