<template>
  <div id="app">
    <h1>Vue-svg-gauge</h1>
    <h2>Customizable gauge component with gradients and animations for VueJs</h2>

    <div class="example">
      <VueSvgGauge
        class="gauge"
        :start-angle="parseInt(startAngle || 110)"
        :end-angle="parseInt(endAngle || -110)"
        :value="parseInt(value)"
        :separator-step="parseInt(separatorStep)"
        :min="parseInt(min || 0)"
        :max="parseInt(max || 100)"
        :gauge-color="[{ offset: 0, color: '#347AB0'}, { offset: 100, color: '#8CDFAD'}]"
        :scale-interval="parseInt(scale)"
        :inner-radius="parseInt(innerRadius)"
        :separator-thickness="parseInt(separatorThickness)"
        :base-color="baseColor"
        :easing="easing"
      />

      <div class="customizer">
        <div class="property">
          <label for="value">Value</label>
          <input id="value" type="number" v-model="value" />
        </div>

        <div class="block">
          <div class="property">
            <label for="startAngle">Start angle</label>
            <input id="startAngle" type="number" v-model="startAngle" />
          </div>
          <div class="property">
            <label for="endAngle">End angle</label>
            <input id="endAngle" type="number" v-model="endAngle" />
          </div>
        </div>

        <div class="block">
          <div class="property">
            <label for="min">Minimum value</label>
            <input id="min" type="number" v-model="min" />
          </div>
          <div class="property">
            <label for="max">Maximum value</label>
            <input id="max" type="number" v-model="max" />
          </div>
        </div>

        <div class="block">
          <div class="property">
            <label for="separatorStep">Separators Step</label>
            <input id="separatorStep" type="number" v-model="separatorStep" />
          </div>
          <div class="property">
            <label for="scale">Separators thickness</label>
            <input id="scale" type="number" v-model="separatorThickness" />
          </div>
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
          <input id="scale" type="text" v-model="easing" />
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
        value: 25,
        separatorStep: 25,
        min: 0,
        max: 100,
        scale: 5,
        innerRadius: 60,
        separatorThickness: 4,
        baseColor: '#ddd',
        easing: 'Circular.Out',
      }
    }
  }
</script>

<style lang="stylus">
  #app {
    font-family: sans-serif
    max-width: 980px
    margin: auto
    text-align: center

    h2 {
      margin-bottom: 30px
    }

    .example {
      display: flex

      .gauge {
        flex: 3
      }

      .customizer {
        flex: 2
        margin-left: 30px
      }
    }

    .block {
      display: flex

      .property:first-child {
        margin-right: 20px
      }
    }

    .property {
      display: flex
      flex-direction: column
      align-items: flex-start
      margin-bottom: 15px

      label {
        margin-bottom: 3px
      }
    }

    .bottom {
      margin-top: 20px
    }

    input[type=text], input[type=number] {
      width: 100%
      padding: 5px 20px
      box-sizing: border-box
      font-size: 16px
      max-width: 150px
    }
  }
</style>
