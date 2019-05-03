const webpack = require('webpack')
const merge = require('webpack-merge')

const paths = require('../paths')
const commonConfig = require('./webpack.config.common')

module.exports = merge.smart(commonConfig, {
  mode: 'development',
  entry: paths.appIndex,
  output: {
    filename: 'static/js/[name]-bundle-[hash:8].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    // 开启前端路径回路映射，子路径映射到根路径，由前端路由框架来解析
    historyApiFallback: true,
    // 关闭 Host 检查，同网段其他设备，可通过内网 IP 访问本机服务（需要配合 host: '0.0.0.0'）使用
    disableHostCheck: true,
    host: '0.0.0.0',
    port: '8000',
    inline: true,
    hot: true,
    // 请求代理服务
    proxy: {
      '/api': {
        // 这里改为项目后端 API 接口 Host
        target: 'http://backend.api.host',
        // 支持跨域调用
        changeOrigin: true,
      }
    }
  }
})