import { getBanners } from "@/api/banner"
export default {
    namespaced: true,
    state: {
        data: [],
        isLoading: false
    },
    mutations: {
        setData(state, payload) {
            state.data = payload
        },
        setLoading(state, payload) {
            state.isLoading = payload
        }
    },
    actions: {
        //获取个人信息页数据
        async fetchData(ctx) {
            if (ctx.state.data.length) {
                return
            }
            ctx.commit("setLoading", true);
            const resp = await getBanners();
            ctx.commit("setLoading", false);
            ctx.commit("setData", resp)

        }
    }

}