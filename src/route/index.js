import VueRouter from 'vue-router'

import Vue from 'vue'
import routes from './routes'
import { titleController } from "@/utils"
if (!window.VueRouter) {
    Vue.use(VueRouter)
}

const router = new VueRouter({
    routes: routes,
    mode: "history",
    linkActiveClass: "selected",
    linkExactActiveClass: ""
})


export default router;

router.afterEach((to) => {
    titleController.setRouteTitle(to.meta.title)
})