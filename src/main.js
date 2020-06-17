import Vue from 'vue'
import router from './router'
import App from './App'
// 引入全局scss样式文件
import '@/styles/global.scss'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
