const { join } = require('path')

const root = join(__dirname, '..')
const assets = `${root}/assets`;

module.exports = {
  root,
  assets,
  js: `${root}/js`,
  scss: `${assets}/scss`,
  images: `${assets}/images`,
  src: name => `${assets}/js/${name}/src`,
  public: `${root}/docs`
}
