const { js, scss } = require('../paths')

module.exports = () => ({
  entry: {
    app: [
      `${js}/app/src/index.js`,
      `${js}/app/src/index.ts`,
      `${scss}/app/style.scss`
    ]
}
})
