module.exports = {
  test: /\.[tj]sx?$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: 'eslint-loader',
}
