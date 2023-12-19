<!--
 @name: index.vue
 @description: 语言切换组件
 @author: 程序员优雅哥 yygcoder
 @time: 2023/12/18 11:40
-->
<template>
  <el-dropdown class="toggle-language" popper-class="toggle-language-popper">
    <yyg-icon class="text-3xl" icon="i-clarity:language-line"></yyg-icon>

    <template #dropdown>
      <el-dropdown-item
        v-for="item in langList"
        :key="item.code"
        @click="onLangItemClick(item.code)"
      >
        <div :class="['language-item', item.code === selectedLang ? 'language-item-selected' : '']">
          {{ item.name }}
        </div>
      </el-dropdown-item>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import type { ToggleLanguageProps } from './types'
import { defaultLangList } from './constants'
import { useToggleLang } from '@/components/common/hooks'

defineOptions({
  name: 'toggle-language'
})

withDefaults(defineProps<ToggleLanguageProps>(), {
  langList: () => [...defaultLangList]
})
const { setLang, getCurrentLang } = useToggleLang()
const selectedLang = ref(getCurrentLang.value)

onMounted(() => {})

const onLangItemClick = (code: string) => {
  selectedLang.value = code
  setLang(code)
}
</script>

<style scoped lang="scss">
:global(.toggle-language-popper .el-dropdown-menu__item) {
  padding: 0;
}
.toggle-language-popper {
  .language-item {
    @apply text-4 w-30 bg-transparent px-4 py-2;
  }

  .language-item-selected {
    background-color: var(--el-dropdown-menuItem-hover-fill);
    color: var(--el-color-primary);
  }
}
</style>
