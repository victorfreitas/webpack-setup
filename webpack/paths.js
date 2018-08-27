const { join } = require('path')

const rootPath = join(__dirname, '..')
const assets = `${rootPath}/assets`

module.exports = {
  rootPath,
  assets,
  css: `${assets}/css`,
  fonts: `${assets}/fonts`,
  html: `${assets}/html`,
  images: `${assets}/images`,
  js: `${assets}/js`,
  scss: `${assets}/scss`,
  public: `${rootPath}/docs`,
}
