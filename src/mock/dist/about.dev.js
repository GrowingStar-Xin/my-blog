"use strict";

var _mockjs = _interopRequireDefault(require("mockjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mockjs["default"].mock('/api/about', "get", {
  code: 0,
  msg: "",
  data: "http://www.baidu.com"
});