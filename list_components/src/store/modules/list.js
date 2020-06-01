export default {
  actions: {
    async loadList(ctx) {
      const res = await fetch('https://reqres.in/api/users?page=1');
      const list = await res.json();
      ctx.commit('setList', list.data);
    }
  },
  mutations: {
    setList(state, data) {
      state.list = data;
    }
  },
  state: {
    list: []
  },
  getters: {
    getUsersList(state) {
      return state.list;
    }
  }
};