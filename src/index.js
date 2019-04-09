import Gauge from './Gauge.vue';

const VueSvgGauge = {
  install(Vue, options) {
    Vue.component('vue-svg-gauge', Gauge);
    Vue.component('VueSvgGauge', Gauge);
  }
}

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null

if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}

if (GlobalVue) {
	GlobalVue.use(VueSvgGauge);
}

// Allow the use as ES6 module
export { Gauge as VueSvgGauge }

// Allow the use as a pluggin
export default VueSvgGauge
