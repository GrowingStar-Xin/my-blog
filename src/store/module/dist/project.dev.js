"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _project = require("@/api/project");

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
              return regeneratorRuntime.awrap((0, _project.getProjects)());

            case 5:
              resp = _context.sent;
              ctx.commit("setData", resp);
              ctx.commit("setLoading", false);

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