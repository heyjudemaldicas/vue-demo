import { createStore } from "vuex";

export default createStore({
  state: {
    toDoItems: [],
  },
  mutations: {
    setTodoItems(state, data) {
      state.toDoItems = data;
    },
  },
  actions: {
    updateToDoItems({ commit }, data) {
      commit("setTodoItems", data);
    },
  },
  modules: {},
});
