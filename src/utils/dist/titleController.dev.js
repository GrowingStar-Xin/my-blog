"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var routeTitle = "",
    webTitle = "";

function setTitle() {
  if (!routeTitle && !webTitle) {
    document.title = "loading...";
  } else if (!routeTitle && webTitle) {
    document.title = webTitle;
  } else if (routeTitle && !webTitle) {
    document.title = routeTitle;
  } else {
    document.title = "".concat(routeTitle, "-").concat(webTitle);
  }
}

var _default = {
  //设置路由标题
  setRouteTitle: function setRouteTitle(title) {
    routeTitle = title;
    setTitle();
  },
  //设置网站标题
  setWebTitle: function setWebTitle(title) {
    webTitle = title;
    setTitle();
  }
};
exports["default"] = _default;