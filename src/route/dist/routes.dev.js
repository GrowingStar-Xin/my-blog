"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = [{
  //分页加载 异步组件 返回的是promise
  name: "Home",
  path: '/',
  component:
  /*webpackChunkName: Home*/
  function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/view/Home"));
    });
  },
  meta: {
    title: "Home"
  }
}, {
  name: "About",
  path: '/about',
  component:
  /*webpackChunkName: About*/
  function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/view/About"));
    });
  },
  meta: {
    title: "About"
  }
}, {
  name: "Blog",
  path: '/blog',
  component:
  /*webpackChunkName: Blog*/
  function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/view/Blog"));
    });
  },
  meta: {
    title: "Blog"
  }
}, {
  name: "Categorylog",
  path: '/blog/cate/:categoryId',
  component:
  /*webpackChunkName: Blog*/
  function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/view/Blog"));
    });
  },
  meta: {
    title: "Blog"
  }
}, {
  name: "BlogDetail",
  path: '/article/:id',
  component:
  /*webpackChunkName:BlogDetail */
  function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/view/Blog/BlogDetail"));
    });
  },
  meta: {
    title: "BlogDetail"
  }
}, {
  name: "Project",
  path: '/project',
  component:
  /*webpackChunkName: Project */
  function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/view/Project'));
    });
  },
  meta: {
    title: "Project"
  }
}, {
  name: "Message",
  path: '/message',
  component:
  /*webpackChunkName: Message */
  function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/view/Message'));
    });
  },
  meta: {
    title: "Message"
  }
}];
exports["default"] = _default;