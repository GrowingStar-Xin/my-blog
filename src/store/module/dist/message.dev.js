"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _message = require("@/api/message");

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
      console.log(payload);
      state.data = payload;
    },
    updateData: function updateData(state, payload) {
      state.data.total++;
      state.data.rows.unshift(payload);
    }
  },
  actions: {
    getMessage: function getMessage(_ref, payload) {
      var commit, resp;
      return regeneratorRuntime.async(function getMessage$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              commit("setLoading", true);
              _context.next = 4;
              return regeneratorRuntime.awrap((0, _message.getMessage)(payload));

            case 4:
              resp = _context.sent;
              commit("setLoading", false);
              commit("setData", resp);
              return _context.abrupt("return", resp);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    postMessage: function postMessage(_ref2, payload) {
      var commit, resp;
      return regeneratorRuntime.async(function postMessage$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit;
              commit("setLoading", true);
              _context2.next = 4;
              return regeneratorRuntime.awrap((0, _message.postMsg)(payload));

            case 4:
              resp = _context2.sent;
              commit("setLoading", false);

              if (resp) {
                commit("updateData", resp);
              }

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }
};
exports["default"] = _default;