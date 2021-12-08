import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex,axios);

export default new Vuex.Store({
  state: {
    users:[]
  },
  mutations: {
    SET_USERS(state,users){
      state.users = users; 
    },
  },
  actions: {
    loadUsers({ commit }, payload) {
      console.log(commit);
      console.log (payload);
      axios.get("https://jsonplaceholder.typicode.com/posts",payload).then((response) => {
            let data = response.data;
            console.log(data);
            commit('SET_USERS', data)
          })
  }
  },
  modules: {},
});
