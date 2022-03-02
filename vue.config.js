// 导入去除console
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')
const res = require('./src/config')
const name = res.my_title || '个人简历' // page title
module.exports = {
  chainWebpack: config => {
    // Vue3导入Svg
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
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {
            drop_console: true,
            drop_debugger: false,
            pure_funcs: ['console.log'] // 移除console
          }
        }
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
