<!--
 @name: icon-list-demo.vue
 @description: 
 @author: 程序员优雅哥 yygcoder
 @time: 2023/12/18 15:03
-->
<template>
  <div>
    <div class="operation">
      <el-radio-group v-model="copyType">
        <el-radio label="component">复制组件代码</el-radio>
        <el-radio label="name">复制名称</el-radio>
        <el-radio label="svg">复制SVG代码</el-radio>
      </el-radio-group>
      <el-checkbox v-model="isShowText" label="显示名称" size="large" class="ml-8" />
    </div>

    <yyg-icon-list
      class="mx-4 mb-4"
      :is-show-text="isShowText"
      @click="onIconClick"
    ></yyg-icon-list>
  </div>
</template>

<script setup lang="ts">
import { loadIcon } from '@iconify/vue'

const copyType = ref('component')
const isShowText = ref(true)

function objectToSvg(svgObject: any) {
  const { body, hFlip, height, left, rotate, top, vFlip, width } = svgObject
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" transform="translate(${left},${top}) rotate(${rotate})${
    hFlip ? ' scale(-1, 1)' : ''
  }${vFlip ? ' scale(1, -1)' : ''}">
        ${body}
    </svg>`
}

const source = ref('')
const { copy, copied } = useClipboard({ source })

const onIconClick = async (icon: string) => {
  switch (copyType.value) {
    case 'component':
      source.value = `<yyg-icon type="iconify" icon="${icon}"></yyg-icon>`
      break
    case 'name':
      source.value = icon
      break
    case 'svg':
      source.value = objectToSvg(await loadIcon(icon))
      break
    default:
      break
  }
  await copy()
  copied.value &&
    ElMessage({
      message: '复制成功',
      type: 'success'
    })
}
</script>

<style scoped>
.operation {
  @apply mb-2 flex justify-end items-center mx-4 mt-4 mb-1;
}
</style>
