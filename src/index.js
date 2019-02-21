import Gauge from './Gauge.vue';

const VueSvgGauge = {
  install(Vue, options) {
    Vue.component('vue-svg-gauge', Gauge);
    Vue.component('VueSvgGauge', Gauge);
  }
}

export { Gauge as VueSvgGauge }

export default VueSvgGauge
