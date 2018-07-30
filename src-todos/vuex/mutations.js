import {ADD_TODO, DELETE_TODO, CLEAR_ALL_COMPLETE, SELECT_ALL_TODO, RECEIVE_TODOS} from './mutation-types'

export default {
  // 增加todo
  [ADD_TODO](state, {todo}) {
    state.todos.unshift(todo)
  },

  // 删除todo
  [DELETE_TODO](state, {index}) {
    state.todos.splice(index, 1)
  },

  // 删除所有已完成的todo
  [CLEAR_ALL_COMPLETE](state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },
  // 全选或全不选todo
  [SELECT_ALL_TODO](state, {isSelectAll}) {
    state.todos.forEach(todo => todo.complete = isSelectAll)
  },
  // 接收todos
  [RECEIVE_TODOS](state, {todos}) {
    state.todos = todos
  },
}