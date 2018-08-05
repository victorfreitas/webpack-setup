const { public } = require('../paths')

module.exports = {
  output: {
    path: `${public}/dist`,
    filename: '[name].bundle.js'
  }
}
