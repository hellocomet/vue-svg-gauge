import VueSvgGauge from './components/Gauge.vue'

// expose component to global scope
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-svg-gauge', VueSvgGauge)
}

export { VueSvgGauge }

export default VueSvgGauge
