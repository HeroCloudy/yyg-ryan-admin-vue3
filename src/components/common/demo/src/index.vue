<!--
 @name: index.vue
 @description: 示例组件
 @author: 程序员优雅哥 yygcoder
 @time: 2023/12/18 11:40
-->
<template>
  <div class="color-amber">Demo Component {{ msg }}</div>
</template>

<script setup lang="ts">
import type { DemoProps } from './types'

defineOptions({
  name: 'demo'
})

defineProps<DemoProps>()
</script>

<style scoped></style>
