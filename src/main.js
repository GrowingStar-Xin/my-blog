import Vue from 'vue'
import App from './App.vue'
import './style/global.less'
Vue.config.productionTip = false
import router from './route'
import store from './store'
import { showMessage } from './utils'
import loading from './directives/loading'
import lazy from './directives/lazy'
import "@/eventBus";
Vue.directive('load', loading)
Vue.directive('lazy', lazy)
//一开创建vue实例的时候就可以获取全局数据
store.dispatch("setting/fetchData")
Vue.prototype.showMessage = showMessage;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

