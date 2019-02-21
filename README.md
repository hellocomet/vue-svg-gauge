# vue-svg-gauge
An easy configurable gauge for VueJS

## Installation
`npm i --save-dev vue-svg-gauge`

`yarn add -D vue-svg-gauge`

### Browser
```js
<script type="text/javascript" src="node_modules/vue-svg-gauge/dist/vue-svg-gauge.min.js"></script>

<script type="text/javascript">
  Vue.use(VueSvgGauge);
</script>
```

### Module
```js
import VueSvgGauge from 'vue-svg-gauge'
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
```

## Props
### value
Value of the gauge, must be contained between *min* and *max*.
If not, it will be set to min.

Demo site will be [here](https://hellocomet.github.io/vue-svg-gauge/)
