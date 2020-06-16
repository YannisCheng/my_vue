import Vue from 'vue'
import router from './router'
import MainPage from "@/views/main/MainPage";

Vue.config.productionTip = false

new Vue({
  render: h => h(MainPage),
  router
}).$mount('#app')
