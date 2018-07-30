import axios from 'axios'

import {REQUESTING, REQUEST_SUCCESS, REQUEST_FAIL} from './mutation-types'

export default {
  search ({commit}, searchName) {
    // 发请求前, 更新状态为(请求中)
    commit(REQUESTING)
    // 发异步请求
    const url = `https://api.github.com/search/users2?q=${searchName}`
    axios.get(url).then(response => {
      // 成功, 更新状态为(请求成功)
      const result = response.data
      const users = result.items.map(item => ({
        url: item.html_url,
        avatar_url: item.avatar_url,
        name: item.login
      }))
      commit(REQUEST_SUCCESS, {users})
    }).catch(error => {
      // 失败, 更新状态为(请求失败)
      commit(REQUEST_FAIL)
    })



  }
}