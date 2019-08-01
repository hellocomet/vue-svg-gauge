<template>
  <div id="app">
    <h1>vue-svg-gauge</h1>
    <h3>Customizable gauge component with gradients and animations for VueJs</h3>

    <a href="https://github.com/hellocomet/vue-svg-gauge" class="button">
      Source on GitHub
    </a>

    <div class="content">
      <div class="mutliple-examples">
        <!-- Single color gauge -->
        <VueSvgGauge
          class="mini-gauge"
          :start-angle="-300"
          :end-angle="-60"
          :value="random"
          :separator-step="10"
          gauge-color="#de3a21"
          :scale-interval="10"
          :separator-thickness="2"
          :inner-radius="55"
          :easing="easing"
          base-color="#d0cdcd"
          :transition-duration="3500"
        >
          <div class="inner-text inner-text--1">
            <span>Single color</span>
          </div>
        </VueSvgGauge>

        <!-- Circle Gauge example -->
        <VueSvgGauge
          class="mini-gauge"
          :start-angle="-90"
          :end-angle="270"
          :value="random"
          :separator-step="0"
          :gauge-color="[{ offset: 0, color: '#de3a21'}, { offset: 100, color: '#f4c009'}]"
          :scale-interval="0"
          :inner-radius="65"
          :easing="easing"
          base-color="#d0cdcd"
        >
          <div class="inner-text inner-text--2">
            <span>Circle</span>
          </div>
        </VueSvgGauge>

        <!-- Random text gauge -->
        <VueSvgGauge
          class="mini-gauge"
          :start-angle="-110"
          :end-angle="110"
          :value="random"
          :separator-step="25"
          :gauge-color="[{ offset: 0, color: '#de3a21'}, { offset: 50, color: '#f4c009'} , { offset: 100, color: '#0b8c5a'}]"
          :scale-interval="2"
          :inner-radius="80"
          :easing="easing"
          base-color="#d0cdcd"
        >
          <div class="inner-text inner-text--3">
            <span>{{ text }}</span>
          </div>
        </VueSvgGauge>
      </div>

      <div class="lets-play">
        <h2>Wanna try ?</h2>

        <VueSvgGauge
          class="customizable-gauge"
          :start-angle="parseInt(startAngle || 110)"
          :end-angle="parseInt(endAngle || -110)"
          :value="parseInt(value)"
          :separator-step="parseInt(separatorStep)"
          :min="parseInt(min || 0)"
          :max="parseInt(max || 100)"
          :scale-interval="parseInt(scale)"
          :inner-radius="parseInt(innerRadius)"
          :separator-thickness="parseInt(separatorThickness)"
          :base-color="baseColor"
          :gauge-color="[{ offset: 0, color: '#64bf8a' }, { offset: 100, color: '#347AB0' }]"
          :easing="easing"
        />
        <h3 class="customizer-title">Let's play 👇</h3>

        <div class="customizer">
          <div class="property">
            <label for="value">Value</label>
            <input id="value" type="number" v-model="value" />
          </div>

          <div class="property">
            <label for="startAngle">Start angle</label>
            <input id="startAngle" type="number" v-model="startAngle" />
          </div>

          <div class="property">
            <label for="endAngle">End angle</label>
            <input id="endAngle" type="number" v-model="endAngle" />
          </div>

          <div class="property">
            <label for="min">Minimum value</label>
            <input id="min" type="number" v-model="min" />
          </div>

          <div class="property">
            <label for="max">Maximum value</label>
            <input id="max" type="number" v-model="max" />
          </div>

          <div class="property">
            <label for="separatorStep">Separators Step</label>
            <input id="separatorStep" type="number" v-model="separatorStep" />
          </div>

          <div class="property">
            <label for="scale">Separators thickness</label>
            <input id="scale" type="number" v-model="separatorThickness" />
          </div>

          <div class="property">
            <label for="scale">Scale step</label>
            <input id="scale" type="number" v-model="scale" />
          </div>

          <div class="property">
            <label for="scale">Inner radius</label>
            <input id="scale" type="number" v-model="innerRadius" />
          </div>

          <div class="property">
            <label for="scale">Base color</label>
            <input id="scale" type="text" v-model="baseColor" />
          </div>

          <div class="property">
            <label for="scale">Easing function</label>
            <div class="select-container">
              <select id="scale" v-model="easingFct">
                <option disabled value=" ">Choisissez</option>
                <option value="Linear">Linear</option>
                <option value="Quadratic">Quadratic</option>
                <option value="Cubic">Cubic</option>
                <option value="Quartic">Quartic</option>
                <option value="Quintic">Quintic</option>
                <option value="Sinusoidal">Sinusoidal</option>
                <option value="Exponential">Exponential</option>
                <option value="Circular">Circular</option>
                <option value="Elastic">Elastic</option>
                <option value="Back">Back</option>
                <option value="Bounce">Bounce</option>
              </select>
            </div>
          </div>

          <div class="property">
            <label for="scale">Easing type</label>
            <div class="select-container">
              <select id="scale" v-model="easingType">
                <option disabled value=" ">Choisissez</option>
                <option value="In">In</option>
                <option value="Out">Out</option>
                <option value="InOut">InOut</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">Made with ❤️ at <a href="https://comet.co/">comet</a></div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        startAngle: -110,
        endAngle: 110,
        value: 75,
        separatorStep: 25,
        min: 0,
        max: 100,
        scale: 5,
        innerRadius: 60,
        separatorThickness: 4,
        baseColor: '#d0cdcd',
        easingFct: 'Circular',
        easingType: 'Out',
        random: 30,
      }
    },
    computed: {
      easing() {
        const { easingFct, easingType } = this

        return [easingFct, easingType].join('.')
      },
      /**
       * Text to display according to the random value
       * @type {String}
       */
      text() {
        const { random } = this

        if (random < 25) {
          return 'Very Bad 🙁'
        }
        if (random < 50) {
          return 'Pretty ok 😶'
        }
        if (random < 75) {
          return 'Gets nice 🙂'
        }
        return 'Super good 😄'
      }
    },
    /**
     * Change the random value for the example gauges
     * @returns {void}
     */
    mounted() {
      setInterval(() => {
        const min = 0
        const max = 100
        this.random = Math.random() * (+max - +min) + +min;
      }, 4000)
    }
  }
</script>

<style lang="stylus">
  body {
    background-color: #f8f8f8
  }

  #app {
    font-family: 'Roboto Mono', Monaco, courier, monospace
    max-width: 980px
    margin: auto
    text-align: center
    padding-top: 40px

    h3 { margin-bottom: 30px }

    a.button {
      display: inline-block
      width: 240px
      margin: 0.5em
      font-family: 'Roboto Mono', Monaco, courier, monospace
      font-weight: 700
      color: #fff
      background-color: #83d1a2
      border-bottom: 2px solid #64bf8a
      padding: 12px 14px
      border-radius: 4px
      transition: all 0.15s ease
      text-decoration: none

      &:hover {
        background-color: #8CDFAD
        border-bottom: 2px solid #6FCF97
      }
    }

    .content {
      background-color: white
      border: 1px solid #eee
      margin: 30px 0
      padding: 20px
    }

    .mutliple-examples {
      background-color: white
      display: flex
      justify-content: center
      align-items: center
      border-radius: 10px
      margin: 20px auto

      > *:not(:last-child) {
        margin-right: 30px
      }
    }

    .lets-play {
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center

      h2 {
        font-size: 27px
        margin-top: 0
      }

      .customizable-gauge {
        max-width: 300px
      }

      .customizer-title {
        font-size: 20px
        margin: 10px 0 0 0
      }

      .customizer {
        margin-top: 40px
        display: flex
        justify-content: center
        flex-wrap: wrap

        > *:not(:last-child) {
          margin-right: 20px
        }
      }
    }

    .mini-gauge {
      max-width: 180px

      .inner-text {
        width: 100%
        height: 100%
      }
    }

    .inner-text {
      &--1, &--3 {
        display: flex
        justify-content: center
        margin-top: 85px
        font-size: 20px
        color: #de3a21
        font-weight: bold

        span { max-width: 100px }
      }

      &--3 {
        margin-top: 70px
      }

      &--2 {
        display: flex
        align-items: center
        justify-content: center
        font-size: 20px
        color: #de3a21
        font-weight: bold

        span { max-width: 90px }
      }
    }

    .block {
      display: flex

      .property:first-child { margin-right: 20px }
    }

    .property {
      display: flex
      flex-direction: column
      align-items: flex-start
      margin-bottom: 15px

      label { margin-bottom: 3px }
    }

    .bottom {
      margin: 30px 0

      a {
        color: black
        font-weight: bold
        text-decoration: none
      }
    }

    input[type=text], input[type=number], .select-container select {
      width: 100%
      padding: 5px 20px
      box-sizing: border-box
      font-size: 16px
      max-width: 150px
    }

    .select-container {
    	position: relative
    	background-color: #fff
    	border: #d4d4d4 1px solid
    	overflow: hidden
      width: 150px
    }
    .select-container select {
      background-color: #fff
    	-webkit-appearance: none
    	-moz-appearance: none
    	appearance: none
    	width: 110%
    	height: auto
    	border: 0
    	margin: 0
    	border-radius: 0
    	overflow: hidden
    	text-overflow: ellipsis
    }
    .select-container::after {
    	content: ''
    	position: absolute
    	top: 50%
    	margin-top: -3px
    	right: .75em
    	display: block
    	width: 0
      height: 0
    	border-color: transparent
    	border-top-color: #444
    	border-width: 6px
    	border-style: solid
    	pointer-events: none
    }
  }
</style>
