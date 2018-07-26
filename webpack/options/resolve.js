const { scss, assets } = require('../paths')

module.exports = () => ({
  resolve: {
    extensions: ['.js', '.scss', '.css'],
    alias: {
      '~': scss,
      assets
    }
  }
})
