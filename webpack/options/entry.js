const { src, scss } = require('../paths')

module.exports = () => ({
  entry: {
    app: [
      `${src('app')}/index.js`,
      `${scss}/app/style.scss`
    ]
  }
})
