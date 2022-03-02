
// 引入该插件(gzip压缩)
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')
const res = require('./src/config')
const name = res.my_title || '个人简历' // page title
module.exports = {
  // Vue3导入Svg
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/assets/svg')) // svg文件路径
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, './src/assets/svg')) // svg文件路径
      .end()
      .use('file-loader')
      .loader('file-loader')
  },
  configureWebpack: {
    // 配置标题名称
    name: name,
    plugins: [
      new CompressionPlugin({
        filename: '[path].br[query]',
        algorithm: 'brotliCompress',
        test: /\.(js|css|html|svg)$/,
        compressionOptions: { level: 11 },
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: true
      })
    ]
  },
  devServer: {
    // 自动打开
    open: true
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    loaderOptions: {
      scss: {
        // 导入sass全局变量
        prependData: `@import "./src/styles/common";`
      }
    }
  }

}
