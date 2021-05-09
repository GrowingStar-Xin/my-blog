"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const listeners = {
// }
// export default {
//     //监听事件
//     $on(event, handler) {
//         if (!listeners[event]) {
//             listeners[event] = new Set();
//         }
//         listeners[event].add(handler);
//     },
//     //移除事件
//     $off(event, handler) {
//         if (!listeners[event]) {
//             return
//         }
//         listeners[event].delete(handler)
//     },
//     //触发事件
//     $emit(event, ...args) {
//         if (!listeners[event]) {
//             return
//         }
//         for (const handler of listeners[event]) {
//             handler(...args);
//         }
//     }
// }
// 测试
// function handler1(data) {
//     console.log(data);
// }
// function handler2(data) {
//     console.log(data);
// }
// eventBus.$on('event1',handler1);
// eventBus.$on('event1',handler2);
// eventBus.$on('event1',handler1);
// window.eventBus = eventBus;
// window.handler1 = handler1;
// window.handler2 = handler2

/**
 * 事件名 mainScroll 主区域滚动事件
 * 含义：主区域滚动条位置发生变化后触发
 * 
 * 事件名 setMainScroll 
 * 含义： 当需要设置主区域滚动条位置时候触发
 * 参数滚动高度
 */
var bus = new _vue["default"]({});
_vue["default"].prototype.$bus = bus;
var _default = bus;
exports["default"] = _default;