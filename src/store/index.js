import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    add(state, num = 1) {
      state.count += num;
    }
  },
  getters: { // 派生，相当于计算属性，可以当作state来使用
    score(state) {
      return 'score' + state.count;
    }
  },
  actions: {
    asyncAdd({commit}) {
      setTimeout(function() {
        commit('add', 3);
      }, 1000)
    }
  }
})
