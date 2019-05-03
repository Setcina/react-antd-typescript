const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const paths = require('../paths')
const commonConfig = require('./webpack.config.common')

console.log(process.env.NODE_ENV);

module.exports = merge.smart(commonConfig, {
  mode: 'production',
  entry: paths.appIndex,
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name]-[hash:8].js',
  },
  optimization: {
    minimizer: [
      // 压缩 js
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
    ],
    splitChunks: {
      // 切割代码块，提取为独立的 chunk 文件
      chunks: 'all',
    },
  },
  plugins: [
    // 每次编译之前，清空上一次编译的文件
    new CleanWebpackPlugin()
  ],
})
