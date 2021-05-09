import { fetchData } from '@/api/about'

export default {
    namespaced: true,
    state: {
        isLoading: false,
        data: null
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
        async getData({ commit }) {
            commit('setLoading', true);
            const resp = await fetchData();
            commit('setLoading', false);
            console.log(resp);
            commit('setData', resp);
        }
    }
}