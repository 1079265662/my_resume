<template>
  <div id="nav">
    <router-view />
  </div>

</template>

<script setup>

import { onMounted, nextTick } from 'vue'
// 结构加载完毕后 取消隐藏页
onMounted(() => {
  nextTick(() => {

  })
})
</script>
<style lang="scss">
</style>
