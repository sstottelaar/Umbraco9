const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const glob = require('glob')
const PurgecssPlugin = require('purgecss-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, 'Views'),
}

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
  ],
})
