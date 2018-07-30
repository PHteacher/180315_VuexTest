/*
问题: 哪些计算属性需要写在getters中?
基于state中的任意属性数据的getter计算属性
 */
export default {
  totalSize (state) {
    return state.todos.length
  },
  completeSize (state) {
    return state.todos.reduce((preSize, todo) => preSize+ (todo.complete?1:0), 0)
  },

  isAllCheck (state, getters) {
    return getters.completeSize===getters.totalSize && getters.totalSize>0
  }
}