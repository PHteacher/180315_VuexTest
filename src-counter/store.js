/*
vuex最核心管理对象store
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*
相当于data对象
 */
const state = {
  count : 1   // 指定初始值
}

/*
包含n个直接更新状态的方法的对象
 */
const mutations = {
  // 增加
  INCREMENT (state) {
    state.count++
  },
  // 减少
  DECREMENT (state) {
    state.count--
  }
}

/*
包含n个间接更新状态的方法的对象
通过调用commit()触发mutation调用
 */
const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  },

  decrement ({commit}) {
    commit('DECREMENT')
  },

  incrementIfOdd ({commit, state}) {
    if(state.count%2===1) {
      commit('INCREMENT')
    }
  },

  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}
const getters = {
  evenOrOdd (state) {
    return state.count %2===1 ? '奇数' : '偶数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
