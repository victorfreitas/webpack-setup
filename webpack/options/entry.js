const { src } = require('../paths')

module.exports = () => ({
  entry: {
    app: `${src('app')}/index.js`
}
})
