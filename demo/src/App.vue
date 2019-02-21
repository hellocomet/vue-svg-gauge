<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <VueSvgGauge
      :start-angle="-110"
      :end-angle="110"
      :value="3"
      :separator-step="1"
      :min="0"
      :max="4"
      :gauge-color="[{ offset: 0, color: '#347AB0'}, { offset: 100, color: '#8CDFAD'}]"
      :scale-interval="0.1"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import VueSvgGauge from 'VueSvgGauge'

export default {
  name: 'app',
  components: {
    HelloWorld,
    // VueSvgGauge,
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
