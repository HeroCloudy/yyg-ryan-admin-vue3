<!--
 @name: icon-picker-demo.vue
 @description: 
 @author: 程序员优雅哥 yygcoder
 @time: 2023/12/18 17:31
-->
<template>
  <yyg-icon-picker @select="onSelected"></yyg-icon-picker>
  <yyg-icon v-if="icon" type="iconify" :icon="icon" :style="style"></yyg-icon>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { IconPickerSubmitData } from '@/components/common/icon-picker/src/types'

const icon = ref<string>('')
const style = ref<CSSProperties>({})

const onSelected = (data: IconPickerSubmitData) => {
  const { fontSize, color } = data
  icon.value = data.icon
  style.value = {
    fontSize: `${fontSize}px`,
    color
  }
}
</script>

<style scoped></style>
