# vue-svg-gauge
An easily customizable gauge for VueJS with gradients and animations

## Demo
You can find a demo [here](https://hellocomet.github.io/vue-svg-gauge/)

## Installation
`npm i vue-svg-gauge --save`

`yarn add -D vue-svg-gauge`

## Import

### ES6
The following examples can also be used with CommonJS by replacing ES6-specific syntax with CommonJS equivalents.

```js
import Vue from 'vue'
import { VueSvgGauge } from 'vue-svg-gauge'

new Vue({
  components: {
    VueSvgGauge,
  }
})
```

### Globals as a pluggin
```js
import Vue from 'vue'
import App from './App.vue'
import VueSvgGauge from 'vue-svg-gauge'

Vue.use(VueSvgGauge)

new Vue({
  render: h => h(App),
}).$mount('#app')

```

### Globals (via the script tag)
Add a script tag pointing to _dist/vue-svg-gauge.min.js_ after adding Vue.

```html
<html>
  <head>
    ...
  </head>
  <body>
    <div id="app">
      <vue-svg-gauge></vue-svg-gauge>
    </div>

    <script src="path/to/vue.js"></script>
    <script src="path/to/dist/vue-svg-gauge.min.js"></script>
    <script>
      new Vue({
        el: '#app'
      })
    </script>
  </body>
</html>
```

## Usage
Once installed, it can be user in any template as
```html
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
<!--  or  -->
<vue-svg-gauge
  :start-angle="-110"
  :end-angle="110"
  :value="3"
  :separator-step="0"
  :min="0"
  :max="10"
  gauge-color="#8CDFAD"
  :scale-interval="0.1"
/>
```

## Props

| Props | Type | Value | Default |
|---|---|---|---|
| value | Number | Value of the gauge, must be contained between *min* and *max*. If not, it will be set to min if inferior, or max if superior | 70 |
| min | Number | Minimum value reachable | 0 |
| max | Number | Maximum value reachable | 100 |
| startAngle | Number | Start angle of the gauge. Can go from -360° to 360° but must be smaller than endAngle | -90 |
| endAngle | Number | End angle of the gauge. Can go from -360° to 360° but must be greater than startAngle | 90 |
| innerRadius | Number | inner radius that will determine the thickness of the gauge | 60 |
| separatorStep | Number | Number of steps between each separator (will display a separator each min + (n * separatorStep)). Won't display any if 0 or null | 10 |
| separatorThickness | Number | Thickness of the separators, unit is in degree | 4 |
| gaugeColor | String,Array | Color of the gauge, can either be a simple color or a gradient | [{ offset: 0, color: '#347AB0' }, { offset: 100, color: '#8CDFAD' }] |
| baseColor | String | Color of the empty gauge | #DDDDDD |
| scaleInterval | Number | Interval between the scale line, based on min and max. Won't display any if 0 or null | 5 |
| transitionDuration | Number | Transition duration time in ms. If set to `0`, there will be no transition | 1500 |
| easing | String | Animation easing option | Circular.Out |

_Notes_ :
- the reference angle is 0 on top of the gauge.
- you can find the documentation about the different animation functions [here](https://github.com/tweenjs/tween.js/blob/master/docs/user_guide.md)

## Slot
There is a main _slot_ allowing you to display any kind of html you want in your gauge.

### Example
```html
<VueSvgGauge
  :start-angle="-110"
  :end-angle="110"
  :value="random"
  :separator-step="20"
  :scale-interval="10"
  :inner-radius="80"
>
  <div class="inner-text">
    <span>Let's make this <b>fun</b> !</span>
  </div>
</VueSvgGauge>
```

```css
.inner-text {
  // allow the text to take all the available space in the svg on top of the gauge
  height: 100%;
  width: 100%;

  span {
    max-width: 100px;
    color: red;
    // ...
  }
}
```

## Dependencies
You will need to install ```vue ~2.5.22``` to use this package properly

Also vue-svg-gauge relies on the [**tweenJs**](https://github.com/tweenjs/tween.js/) library for animations.

Made with ❤️ at [**comet**](https://comet.co/)
