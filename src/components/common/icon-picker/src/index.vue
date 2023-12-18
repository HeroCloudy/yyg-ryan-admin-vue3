<!--
 @name: index.vue
 @description: 图标选择器
 @author: 程序员优雅哥 yygcoder
 @time: 2023/12/18 11:40
-->
<template>
  <div class="icon-picker">
    <span>
      <slot>
        <el-button type="primary" @click="toggle(true)">选择图标</el-button>
      </slot>
    </span>

    <el-dialog :title="title" :width="width" v-model="isShowDialog">
      <yyg-icon-list
        class="max-h-[300px] overflow-y-auto"
        item-class="hover:bg-sky-100 py-1 px-0"
        icon-class="text-xl"
        :is-show-text="false"
        @click="onIconClick"
        activeClass="text-[#409eff]"
      ></yyg-icon-list>

      <!-- 设置颜色和大小 -->
      <div class="mt-5 flex p-2">
        <div class="mr-4">
          <span class="pr-2">颜色:</span>
          <el-color-picker v-model="color" />
        </div>
        <div class="flex flex-1 items-center">
          <span class="ml-10 w-20 pr-2">大小:</span>
          <el-slider v-model="num" :step="1" show-input />
        </div>
      </div>

      <!-- 预览 -->
      <div class="min-h-[40px] flex items-center">
        <span class="pr-2">预览图标：</span>
        <yyg-icon
          type="iconify"
          :icon="selectedIcon"
          :style="{ color: color, fontSize: `${num}px` }"
        ></yyg-icon>
        <span class="pl-2">{{ selectedIcon }}</span>
      </div>

      <template #footer>
        <el-button @click="() => toggle(false)">取消</el-button>
        <el-button type="primary" @click="onConfirmClick">确认</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import type { IconPickerProps, IconPickerSubmitData } from './types'

defineOptions({
  name: 'icon-picker'
})

withDefaults(defineProps<IconPickerProps>(), {
  title: '选择图标',
  width: '60%'
})

const emits = defineEmits<{
  select: [IconPickerSubmitData]
}>()

const [isShowDialog, toggle] = useToggle(false)

const color = ref('#409eff')
const num = ref(16)
const selectedIcon = ref('')

const onIconClick = (icon: string) => {
  selectedIcon.value = icon
}

const onConfirmClick = () => {
  toggle(false)
  emits('select', { icon: selectedIcon.value, color: color.value, fontSize: num.value })
}
</script>

<style scoped lang="scss">
.icon-picker {
  :deep(.el-dialog__body) {
    height: auto;
    padding-top: 0;
    padding-bottom: 0;
    max-height: 65vh;
    overflow-y: auto;
  }
}
</style>
