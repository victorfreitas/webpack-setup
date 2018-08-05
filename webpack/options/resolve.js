const { scss, assets } = require('../paths')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '~': scss,
      assets
    }
  }
}
