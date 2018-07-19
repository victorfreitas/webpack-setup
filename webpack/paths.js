const { join } = require('path')

const rootPath = join(__dirname, '..')
const assets = `${rootPath}/assets`

exports.rootPath = rootPath
exports.assets = assets
exports.css = `${assets}/css`
exports.html = `${assets}/html`
exports.fonts = `${assets}/fonts`
exports.images = `${assets}/images`
exports.public = `${rootPath}/docs`
exports.js = `${assets}/js`
exports.scss = `${assets}/scss`
exports.style = name => `${assets}/scss/${name}`
exports.script = name => `${assets}/js/${name}/src`
