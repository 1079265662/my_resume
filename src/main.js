import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入清除默认样式css
import 'reset-css'
import 'hover.css'
// 导入全局css
import './styles/main.scss'
// 导入打字机
import vuetyped from 'vue3typed'
// // 导入饿了么ui
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// 导入灯箱
import VueEasyLightbox from 'vue-easy-lightbox'
// 导入SvgIcon组件
import SvgIcon from '@/components/SvgIcon/index.vue' // 这是组件路径
const req = require.context('@/assets/svg', false, /\.svg$/) // 这是svg文件路径
req.keys().map(req)
// 导入数字增加特效
import countTo from 'vue3-count-to'
// 导入配置文件
const res = require('./config')
// 设置Vue3的全局方法实例
// 代替Vue2的 Vue.use的全局方法
const app = createApp(App)
// 添加的原型链方法
const Proper = {
  install (app) {
    // 通过config.globalProperties给其添加原型链方法
    // app.config.globalProperties.$要创建的原型链方法名 = 创建的虚拟Dom方法
    app.config.globalProperties.$t = res // 自定义添加
  }
}
// 创建全局组件
const components = {
  install (app) {
    // 创建全局组件
    app.component('SvgIcon', SvgIcon)
  }
}
// 挂载全局方法
app.use(store).use(components).use(Proper).use(router).use(vuetyped).use(countTo).use(VueEasyLightbox) // .use(ElementPlus)

// 挂载实例
app.mount('#app')
