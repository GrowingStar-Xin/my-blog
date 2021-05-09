"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

require("./style/global.less");

var _route = _interopRequireDefault(require("./route"));

var _store = _interopRequireDefault(require("./store"));

var _utils = require("./utils");

var _loading = _interopRequireDefault(require("./directives/loading"));

var _lazy = _interopRequireDefault(require("./directives/lazy"));

require("@/eventBus");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;

_vue["default"].directive('load', _loading["default"]);

_vue["default"].directive('lazy', _lazy["default"]); //一开创建vue实例的时候就可以获取全局数据


_store["default"].dispatch("setting/fetchData");

_vue["default"].prototype.showMessage = _utils.showMessage;
new _vue["default"]({
  router: _route["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');