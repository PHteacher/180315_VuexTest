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