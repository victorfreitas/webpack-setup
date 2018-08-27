const CleanWebpackPlugin = require('clean-webpack-plugin')

const { rootPath, public } = require('../paths')

module.exports = new CleanWebpackPlugin([public], {
  root: rootPath,
  verbose: true,
})
