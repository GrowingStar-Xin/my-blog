"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _about = require("@/api/about");

var _default = {
  namespaced: true,
  state: {
    isLoading: false,
    data: null
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
    getData: function getData(_ref) {
      var commit, resp;
      return regeneratorRuntime.async(function getData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              commit('setLoading', true);
              _context.next = 4;
              return regeneratorRuntime.awrap((0, _about.fetchData)());

            case 4:
              resp = _context.sent;
              commit('setLoading', false);
              console.log(resp);
              commit('setData', resp);

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