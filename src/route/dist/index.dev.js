"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _vue = _interopRequireDefault(require("vue"));

var _routes = _interopRequireDefault(require("./routes"));

var _utils = require("@/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (!window.VueRouter) {
  _vue["default"].use(_vueRouter["default"]);
}

var router = new _vueRouter["default"]({
  routes: _routes["default"],
  mode: "history",
  linkActiveClass: "selected",
  linkExactActiveClass: ""
});
var _default = router;
exports["default"] = _default;
router.afterEach(function (to) {
  _utils.titleController.setRouteTitle(to.meta.title);
});