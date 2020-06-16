import Vue from 'vue'
import router from './router'
import MainPage from "@/views/main/MainPage";

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  render: h => h(MainPage),
  router
}).$mount('#app')
