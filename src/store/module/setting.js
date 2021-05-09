import { getSetting } from "@/api/setting"
import { titleController } from "@/utils"
export default {
    namespaced: true,
    state: {
        isLoading: false,
        data: []
    },
    mutations: {
        setLoading(state, payload) {
            state.isLoading = payload
        },
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async fetchData({ commit }) {
            commit("setLoading", true);
            const resp = await getSetting();
            commit("setLoading", false);
            commit("setData", resp)
            if (resp.favicon) {
                // <link rel="shortcut icon " type="images/x-icon" href="./favicon.ico">
                let link = document.querySelector("link[ref='shortcut icon']");
                if (link) {
                    return;
                }
                link = document.createElement("link");
                link.rel = "shortcut icon";
                link.type = "images/x-icon";
                link.href = resp.favicon;
                document.querySelector("head").appendChild(link);
            }
            if (resp.siteTitle) {
                titleController.setWebTitle(resp.siteTitle)
            }
        }
    }
}