// 判断是否是生产环境
const isProduction = process.env.NODE_ENV === 'production'
// 导入去除console 不需要
// const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')
// 导入配置文件
const res = require('./src/config')
// 设置名称
const name = res.my_title || '个人简历' // page title
module.exports = {
  chainWebpack: config => {
    // 判断是否是生产环境
    if (isProduction) {
      // 设置默认的标题名称 配合 路由beforeEach 默认不设置的话是项目名字
      config.plugin('html').tap(args => {
        args[0].title = name
        return args
      })
    }
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
    name: name
    // 去除console
    // optimization: {
    //   minimizer: [
    //     new TerserPlugin({
    //       terserOptions: {
    //         ecma: undefined,
    //         warnings: false,
    //         parse: {},
    //         compress: {
    //           drop_console: true,
    //           drop_debugger: false, // 默认false，设置为true, 则会删除所有console.* 相关的代码。
    //           pure_funcs: ['console.log'] // 移除console
    //         }
    //       }
    //     })
    //   ]
    // }
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
