const { scss, assets } = require('../paths')

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.css', '.scss', '.json'],
    alias: {
      '~': scss,
      assets,
    },
  },
}
