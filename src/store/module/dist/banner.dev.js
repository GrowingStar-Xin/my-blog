"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _banner = require("@/api/banner");

var _default = {
  namespaced: true,
  state: {
    data: [],
    isLoading: false
  },
  mutations: {
    setData: function setData(state, payload) {
      state.data = payload;
    },
    setLoading: function setLoading(state, payload) {
      state.isLoading = payload;
    }
  },
  actions: {
    //获取个人信息页数据
    fetchData: function fetchData(ctx) {
      var resp;
      return regeneratorRuntime.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!ctx.state.data.length) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              ctx.commit("setLoading", true);
              _context.next = 5;
              return regeneratorRuntime.awrap((0, _banner.getBanners)());

            case 5:
              resp = _context.sent;
              ctx.commit("setLoading", false);
              ctx.commit("setData", resp);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }
};
exports["default"] = _default;