module.exports = () => ({
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['env'],
      plugins: [
        'transform-object-rest-spread',
        'array-includes'
      ]
    }
  }
})
