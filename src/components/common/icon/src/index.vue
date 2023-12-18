<!--
 @name: index.vue
 @description: 示例组件
 @author: 程序员优雅哥 yygcoder
 @time: 2023/12/18 11:40
-->
<template>
  <span v-if="type === 'uno'" :class="icon"></span>

  <Icon v-else-if="type === 'iconify'" :icon="icon"></Icon>

  <svg v-else-if="type === 'svg'" aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>

  <i v-else-if="type === 'iconfont'" :class="iconfontClass"></i>
</template>

<script setup lang="ts">
import type { IconProps } from './types'
import { Icon } from '@iconify/vue'

defineOptions({
  name: 'icon'
})

const props = withDefaults(defineProps<IconProps>(), {
  type: 'uno',
  prefix: 'icon',
  color: 'currentColor',
  fontFamily: 'iconfont'
})

onBeforeMount(() => {
  const { url } = props
  if (!url || props.type !== 'iconfont') {
    return
  }
  if (!document.querySelector(`link[href='${url}']`)) {
    const linkElt = document.createElement('link')
    linkElt.rel = 'stylesheet'
    linkElt.href = url
    document.head.appendChild(linkElt)
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.icon}`)

const iconfontClass = computed(() => `${props.fontFamily} ${props.prefix}-${props.icon}`)
</script>

<style scoped>
svg {
  display: inline-block;
}
</style>
