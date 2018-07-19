const HTMLWebpackPlugin = require('html-webpack-plugin')

const { public, assets } = require('../paths')

module.exports = prod => (
  (!prod && public) && (
    new HTMLWebpackPlugin({
      filename: `${public}/index.html`,
      template: `${assets}/html/index.html`,
      hash: true
    })
  )
)
