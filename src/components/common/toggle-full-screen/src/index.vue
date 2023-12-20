<!--
 @name: index.vue
 @description: 切换全屏组件
 @author: 程序员优雅哥 yygcoder
 @time: 2023/12/18 11:40
-->
<template>
  <span @click="toggle" class="cursor-pointer text-3xl">
    <yyg-icon :icon="`i-ic:${isFullscreen ? 'sharp-fullscreen-exit' : 'sharp-fullscreen'}`" />
  </span>
</template>

<script setup lang="ts">
defineOptions({
  name: 'toggle-full-screen'
})

const { isFullscreen, toggle } = useFullscreen()
</script>

<style scoped></style>
