const { join } = require('path')

const rootPath = join(__dirname, '..')
const assets = `${rootPath}/assets`

exports.rootPath = rootPath
exports.assets = assets
exports.css = `${assets}/css`
exports.fonts = `${assets}/fonts`
exports.html = `${assets}/html`
exports.images = `${assets}/images`
exports.js = `${assets}/js`
exports.scss = `${assets}/scss`
exports.public = `${rootPath}/docs`
