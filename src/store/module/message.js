import { getMessage, postMsg } from "@/api/message"

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
            console.log(payload);
            state.data = payload
        },
        updateData(state, payload) {
            state.data.total++;
            state.data.rows.unshift(payload)
        }
    },
    actions: {
        async getMessage({ commit }, payload) {
            commit("setLoading", true);
            const resp = await getMessage(payload);
            commit("setLoading", false);
            commit("setData", resp);
            return resp;
        },
        async postMessage({ commit }, payload) {
            commit("setLoading", true);
            const resp = await postMsg(payload);
            commit("setLoading", false);
            if (resp) {
                commit("updateData", resp);
            }

        }
    }
}