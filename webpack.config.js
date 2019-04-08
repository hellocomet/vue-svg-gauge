const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const TerserPlugin = require('terser-webpack-plugin')

const VERSION = require('./package.json').version
const PRODUCTION = process.env.NODE_ENV === 'production'

var config = {
  mode: PRODUCTION
    ? 'production'
    : 'none',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: PRODUCTION
      ? 'vue-svg-gauge.min.js'
      : 'vue-svg-gauge.js',
    library: 'VueSvgGauge',
    libraryTarget: 'umd'
  },
  externals: {
    vue: 'vue'
  },
  resolve: {
    modules: [
      path.join(__dirname, '.'),
      path.join(__dirname, '.', 'node_modules')
    ],
    alias: {
      src: 'src',
      vue$: 'vue/dist/vue.common.js'
    },
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          css: ['vue-style-loader', 'css-loader']
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}

config.plugins = config.plugins.concat([
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.DefinePlugin({
    VERSION: JSON.stringify(VERSION)
  })
])

if (PRODUCTION) {
  config.optimization = {
    minimizer: [
      new TerserPlugin()
    ]
  }

  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ])
}

module.exports = config
