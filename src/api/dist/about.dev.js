"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchData = fetchData;

var _request = _interopRequireDefault(require("./request"));

require("@/mock");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function fetchData() {
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_request["default"].get('/api/about'));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}