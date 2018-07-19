const { public } = require('../paths')

module.exports = () => ({
  output: {
    path: `${public}/js`,
    filename: '[name].bundle.js'
  }
})
