const { script, style } = require('../paths')

module.exports = () => ({
  entry: {
    app: [
      `${script('app')}/index.js`,
      `${style('app')}/style.scss`
    ]
  }
})
