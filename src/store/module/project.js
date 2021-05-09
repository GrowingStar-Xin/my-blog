import { getProjects } from "@/api/project";

export default {
  namespaced: true,
  state: {
    isLoading: false,
    data: [],
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async fetchData(ctx) {
      if (ctx.state.data.length) {
        return;
      }
      ctx.commit("setLoading", true);
      const resp = await getProjects();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    },
  },
};
