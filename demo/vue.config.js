const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './demo/dist/'
    : '/',
  outputDir: path.resolve(__dirname, "./dist/"),
  indexPath: path.resolve(__dirname, "../index.html"),
}
