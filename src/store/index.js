import Vuex from "vuex"
import Vue from "vue"
import banner from "./module/banner"
import setting from "./module/setting"
import about from './module/about'
import project from './module/project'
import message from "./module/message"
if (!window.Vuex) {
    Vue.use(Vuex)
}

export default new Vuex.Store({
    strict: true,
    modules: {
        about,
        banner,
        setting,
        project,
        message
    }
})