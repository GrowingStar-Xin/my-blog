"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSetting = getSetting;

var _request = _interopRequireDefault(require("./request"));

require("@/mock");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getSetting() {
  return regeneratorRuntime.async(function getSetting$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_request["default"].get('/api/setting'));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}