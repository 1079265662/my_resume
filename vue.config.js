
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
    name: name
  },
  devServer: {
    // 自动打开
    open: true
  },
  css: {
    loaderOptions: {
      scss: {
        // 导入sass全局变量
        prependData: `@import "./src/styles/common";`
      }
    }
  }

}
