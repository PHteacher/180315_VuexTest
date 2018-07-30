import Vue from 'vue'
import App from './App.vue'

import store from './store'

/*
入口js
 */
new Vue({
  el: '#app',
  /*components: {
    App
  },
  template: '<App/>', */
  render: h => h(App),
  // render: createElement => createElement(App), // <App/>
  /*render: function (createment) {
    // 返回组件对应的组件标签<App/>, 返回的标签会被渲染到el元素中
    return createment(App)
  },*/
  store
})