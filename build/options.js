'use strict'

const path = require('path')
const version = require('../package.json').version

const banner =
  '/*!\n' +
  ' * vue-svg-gauge v' + version + ' (https://github.com/hellocomet/vue-svg-gauge)\n' +
  ' * (c) ' + new Date().getFullYear() + ' comet * Morgane Lecurieux\n' +
  ' * Released under the MIT License.\n' +
  ' */'

module.exports = {
  banner,
  version,
  isProduction: process.env.NODE_ENV === 'production',

  paths: {
    root: path.join(__dirname, '..'),

    src: {
      main: path.join(__dirname, '..', 'src'),
      examples: path.join(__dirname, '..', 'examples-src')
    },

    output: {
      main: path.join(__dirname, '..', 'dist'),
      examples: path.join(__dirname, '..', 'examples')
    },

    resolve(location) {
      return path.join(__dirname, '..', location)
    }
  }
}
