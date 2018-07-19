const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const { public } = require('../paths')

module.exports = prod => (
  (!prod && public) && (
    new BrowserSyncPlugin({
      host: '127.0.0.1',
      port: 1987,
      reload: true,
      server: {
        baseDir: [public]
      }
    })
  )
)
