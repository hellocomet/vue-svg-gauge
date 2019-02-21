const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

var config = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      }
    ]
  },
  externals: {
    vue: 'vue'
  }
  // optimization: {
  //   minimizer: [new TerserPlugin()],
  // },
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vue-svg-gauge.min.js',
      libraryTarget: 'window',
      library: 'VueSvgGauge',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/Gauge.vue'),
    output: {
      filename: 'vue-svg-gauge.js',
      libraryTarget: 'umd',
      library: 'vue-svg-gauge',
      umdNamedDefine: true
    }
  })
];
