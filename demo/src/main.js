import Vue from 'vue'
import App from './App.vue'
import VueSvgGauge from '../../src/index'

// Local import of the freshly compiled 'vue-svg-gauge'
// to test it as an external package
// import VueSvgGauge from 'vue-svg-gauge'
// If you use this, you might want to use the `yarn cache clean` command
// before installing the package after each build to make sure the right
// version is used.

Vue.config.productionTip = false

Vue.use(VueSvgGauge)

new Vue({
  render: h => h(App),
}).$mount('#app')
