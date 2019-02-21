import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueSvgGauge)

new Vue({
  render: h => h(App),
}).$mount('#app')
