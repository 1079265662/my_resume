<template>
  <div id="nav">
    <router-view />
  </div>

</template>

<script setup>
// // 设置文档结构已完成后 需要加载的方法
// function overLoading () {
//   setTimeout(() => {
//     // 显示页面内容
//     document.getElementById('app').style.opacity = 1
//     document.getElementById('app').style.overflow = 'visible'
//     // 隐藏加载页面
//     // document.getElementById('loading-mask').style.transform = 'translateY(-100vh)'
//     // document.getElementById('loading-mask').style.height = '0px'
//     document.getElementById('loading-mask').style.opacity = '0'
//     document.getElementById('loading-mask').style.pointerEvents = 'none'
//   }, 300)
// }
// // 当页面全部元素加载完毕后 关闭加载页(包括图片 字体等)
// window.onload = function () {
//   // 启动关闭隐藏页方法
//   overLoading()
// }
// 结构加载完毕后 取消隐藏页
import { onMounted, nextTick } from 'vue'
// 结构加载完毕后 取消隐藏页
onMounted(() => {
  nextTick(() => {
    // 隐藏加载页面
    document.getElementById('loading-mask').style.opacity = 0
    // 监听过渡是否结束
    document.getElementById('loading-mask').addEventListener('transitionend', () => {
      document.getElementById('loading-mask').style.display = 'none'
      // 显示页面内容
      document.getElementById('app').style.opacity = 1
      document.getElementById('app').style.overflow = 'visible'
    })
  })
})
</script>
<style lang="scss">
</style>
