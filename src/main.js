import Vue from 'vue'
import router from './router'
import App from './App'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
