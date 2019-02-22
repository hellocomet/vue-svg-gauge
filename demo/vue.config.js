const path = require('path')

module.exports = {
  publicPath: './demo/dist/',
  outputDir: path.resolve(__dirname, "./dist/"),
  indexPath: path.resolve(__dirname, "../index.html"),
}
