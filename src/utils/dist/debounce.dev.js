"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(fun, duration) {
  var timer = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timer);
    timer = setTimeout(function () {
      fun.apply(void 0, args);
    }, duration);
  };
}