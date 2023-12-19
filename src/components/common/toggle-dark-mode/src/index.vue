<!--
 @name: index.vue
 @description: 切换暗黑模式组件
 @author: 程序员优雅哥 yygcoder
 @time: 2023/12/18 11:40
-->
<template>
  <el-switch
    v-model="isDark"
    class="toggle-dark-mode"
    size="large"
    :active-action-icon="Moon"
    :inactive-action-icon="Sun"
    @change="onToggle"
  ></el-switch>
</template>

<script setup lang="tsx">
import { updateDarkTheme } from '@/components/common/utils'
import 'element-plus/theme-chalk/dark/css-vars.css'

defineOptions({
  name: 'toggle-dark-mode'
})

// const innerIsDarkMode = ref(false)

const Moon = () => <yyg-icon icon="i-radix-icons:moon"></yyg-icon>
const Sun = () => <yyg-icon icon="i-twemoji:sun"></yyg-icon>

const preferredDark = usePreferredDark()
const isDark = useLocalStorage('dark-mode-flag', preferredDark.value)
updateDarkTheme(isDark.value)

watch(
  () => isDark.value,
  () => {
    updateDarkTheme(isDark.value)
  }
)

const onToggle = () => {}
</script>

<style lang="scss">
.toggle-dark-mode {
  --el-switch-on-color: #333;
}

html {
  transition: background-color 0.3s ease-in-out;
  background-color: var(--el-bg-color);
}

.dark {
  background-color: var(--el-bg-color);
}
</style>
