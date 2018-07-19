const { scss, assets } = require('../paths')

module.exports = () => ({
  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      '~': scss,
      assets
    }
  }
})
