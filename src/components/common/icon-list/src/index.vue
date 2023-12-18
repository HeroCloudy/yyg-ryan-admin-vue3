<!--
 @name: index.vue
 @description: 示例组件
 @author: 程序员优雅哥 yygcoder
 @time: 2023/12/18 11:40
-->
<template>
  <ul class="icon-list">
    <li
      v-for="(icon, index) in dataList"
      :key="icon"
      :class="['icon-item', itemClass]"
      @click="onItemClick(`${collection}:${icon}`, index)"
    >
      <yyg-icon
        type="iconify"
        :icon="`${collection}:${icon}`"
        :class="[
          iconClass,
          {
            [activeClass]: modelValue
              ? modelValue === `${collection}:${icon}`
              : currentSelected === index
          }
        ]"
      ></yyg-icon>
      <div class="text" v-if="isShowText">{{ icon }}</div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { IconListProps } from './types'
import epData from '@iconify/json/json/ep.json'
import { loadIcons } from '@iconify/vue'

defineOptions({
  name: 'icon-list'
})

const props = withDefaults(defineProps<IconListProps>(), {
  dataList: () => Object.keys(epData.icons),
  collection: 'ep',
  iconClass: 'text-3xl',
  itemClass: 'hover:bg-sky-100 py-4',
  activeClass: '',
  isShowText: true
})

const modelValue = defineModel()

const emits = defineEmits(['click'])

onBeforeMount(() => {
  if (props.dataList && props.dataList.length) {
    loadIcons(props.dataList.map((o: string) => `${props.collection}:${o}`))
  }
})

const currentSelected = ref(-1)

const onItemClick = (icon: string, index: number) => {
  currentSelected.value = index
  modelValue.value = index
  emits('click', icon)
}
</script>

<style scoped lang="scss">
.icon-list {
  @apply grid grid-cols-[repeat(auto-fill,minmax(7rem,1fr))] border-l border-t rounded;

  .icon-item {
    @apply border-r border-b flex flex-col justify-center items-center cursor-pointer;

    .text {
      @apply text-3.2 mt-3;
    }
  }
}
</style>
