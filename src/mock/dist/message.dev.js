"use strict";

var _mockjs = _interopRequireDefault(require("mockjs"));

var _querystring = _interopRequireDefault(require("querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_mockjs["default"].mock("/api/message", "post", {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    nickname: "@cname",
    content: "@cparagraph(1, 10)",
    createDate: Date.now(),
    "avatar|1": ["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg", "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg", "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg", "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]
  }
});

_mockjs["default"].mock(/^\/api\/message\/?(\?.+)?$/, "get", function (options) {
  var query = _querystring["default"].parse(options.url);

  return _mockjs["default"].mock({
    code: 0,
    msg: "",
    data: _defineProperty({
      total: 52
    }, "rows|".concat(query.limit || 10), [{
      id: "@guid",
      nickname: "@cname",
      content: "@cparagraph(1, 10)",
      createDate: Date.now(),
      "avatar|1": ["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg", "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg", "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg", "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]
    }])
  });
});