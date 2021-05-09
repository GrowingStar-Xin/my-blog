"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessage = getMessage;
exports.postMsg = postMsg;

require("@/mock");

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getMessage() {
  var page,
      limit,
      _args = arguments;
  return regeneratorRuntime.async(function getMessage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
          limit = _args.length > 1 && _args[1] !== undefined ? _args[1] : 10;
          _context.next = 4;
          return regeneratorRuntime.awrap(_request["default"].get("/api/message", {
            params: {
              page: page,
              limit: limit
            }
          }));

        case 4:
          return _context.abrupt("return", _context.sent);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
} //提交数据


function postMsg(newInfo) {
  return regeneratorRuntime.async(function postMsg$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("newInfo", newInfo);
          _context2.next = 3;
          return regeneratorRuntime.awrap(_request["default"].post("/api/message", newInfo));

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
} // export async function postMessage(messageInfo) {
//     return await request({
//         url: "/api/message",
//         method: "post",
//         data: {
//             ...messageInfo
//         }
//     })
// }