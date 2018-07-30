import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'

import './main.css'
/*
入口js
 */
new Vue({
  el: '#app',
  components: {// 注册组件
    App
  },
  template: '<App/>',  // 将App标签渲染到el对应div中
  store
})