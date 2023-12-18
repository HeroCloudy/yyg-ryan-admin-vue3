<!--
 @name: index.vue
 @description: 示例组件
 @author: 程序员优雅哥 yygcoder
 @time: 2023/12/18 11:40
-->
<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import type { IconProps } from './types'

defineOptions({
  name: 'icon'
})

const props = withDefaults(defineProps<IconProps>(), {
  prefix: 'icon',
  color: 'currentColor'
})

const symbolId = computed(() => `#${props.prefix}-${props.icon}`)
</script>

<style scoped>
svg {
  display: inline-block;
}
</style>
