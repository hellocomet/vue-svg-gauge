import Vue from 'vue'
import App from './App.vue'
import VueSvgGauge from '../../src/index'

// Local import of the freshly compiled 'vue-svg-gauge'
// to test it as an external package
// import VueSvgGauge from 'vue-svg-gauge'

Vue.config.productionTip = false

Vue.use(VueSvgGauge)

new Vue({
  render: h => h(App),
}).$mount('#app')
