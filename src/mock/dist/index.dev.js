"use strict";

require("./banner");

require("./blog");

require("./setting");

require("./about");

require("./project");

require("./message");

var _mockjs = _interopRequireDefault(require("mockjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mockjs["default"].setup({
  timeout: "1000-2000"
});