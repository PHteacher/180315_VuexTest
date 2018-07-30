import {REQUESTING, REQUEST_SUCCESS, REQUEST_FAIL} from './mutation-types'

export default {
  // 请求中
  [REQUESTING] (state) {
    state.firstView = false
    state.loading = true
    state.users = []
    state.errorMsg = ''
  },

  // 请求成功
  [REQUEST_SUCCESS] (state, {users}) {
    state.loading = false
    state.users = users
  },

  // 请求失败
  [REQUEST_FAIL] (state) {
    state.loading = false
    state.errorMsg = '请求失败'
  }
}