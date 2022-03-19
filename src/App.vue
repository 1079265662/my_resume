<template>
  <div id="nav">
    <router-view />
  </div>

</template>
<script>
 window.onload = function(){
             // 页面加载
      setTimeout(() => {
        // 显示页面内容
        document.getElementById('app').style.opacity = 1
        // 隐藏加载页面
        // document.getElementById('loading-mask').style.transform = 'translateY(-100vh)'
        // document.getElementById('loading-mask').style.height = '0px'
        document.getElementById('loading-mask').style.opacity = '0'
        document.getElementById('loading-mask').style.pointerEvents = 'none'
      }, 300)
    })
    };
export default {}
</script>
<style lang="scss">
</style>
