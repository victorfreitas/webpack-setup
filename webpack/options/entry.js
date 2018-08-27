const { js, scss } = require('../paths')

module.exports = {
  entry: {
    app: [`${js}/app/src/index.js`, `${scss}/app/style.scss`],
  },
}
