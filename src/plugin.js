import Gauge from './Gauge.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-svg-gauge', Gauge);
  }
};
