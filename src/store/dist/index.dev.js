"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = _interopRequireDefault(require("vuex"));

var _vue = _interopRequireDefault(require("vue"));

var _banner = _interopRequireDefault(require("./module/banner"));

var _setting = _interopRequireDefault(require("./module/setting"));

var _about = _interopRequireDefault(require("./module/about"));

var _project = _interopRequireDefault(require("./module/project"));

var _message = _interopRequireDefault(require("./module/message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (!window.Vuex) {
  _vue["default"].use(_vuex["default"]);
}

var _default = new _vuex["default"].Store({
  strict: true,
  modules: {
    about: _about["default"],
    banner: _banner["default"],
    setting: _setting["default"],
    project: _project["default"],
    message: _message["default"]
  }
});

exports["default"] = _default;