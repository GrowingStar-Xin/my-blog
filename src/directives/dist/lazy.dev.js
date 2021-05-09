"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _eventBus = _interopRequireDefault(require("@/eventBus"));

var _utils = require("../utils");

var _default2 = _interopRequireDefault(require("@/assets/default.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var imgs = [];

function setImage(item) {
  //console.log("函数执行了", img)
  var img = item.dom;
  var src = item.val;
  img.src = _default2["default"]; //矩形集合即包含元素的最小矩形

  var rec = img.getBoundingClientRect(); //视口的高度

  var clientHeight = document.documentElement.clientHeight;

  if (rec.top <= clientHeight) {
    img.src = src;
    imgs = imgs.filter(function (i) {
      //console.log(i === item)
      return i !== item;
    }); //console.log("imgs:", imgs, img);
  }
}

function setImages() {
  //console.log("setImages函数执行了")
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = imgs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      //console.log(img);
      setImage(item);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function handleScroll() {
  setImages();
}

_eventBus["default"].$on('mainScroll', (0, _utils.debounce)(handleScroll, 100));

var _default = {
  inserted: function inserted(el, binding) {
    var img = {
      dom: el,
      val: binding.value
    };
    imgs.push(img);
    setImage(img);
  },
  unbind: function unbind(el) {
    imgs = imgs.filter(function (item) {
      return item.dom !== el;
    });
  }
};
exports["default"] = _default;