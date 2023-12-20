<!--
 @name: index.vue
 @description: 消息通知组件
 @author: 程序员优雅哥 yygcoder
 @time: 2023/12/18 11:40
-->
<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <yyg-notification v-bind="filteredProps"></yyg-notification>
    </span>
    <template #dropdown>
      <message-list
        :lists="lists"
        :actions="actions"
        :wrap-class="wrapClass"
        :wrap-style="wrapStyle"
        v-on="forwardedEvents"
      />
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import type { MessageListItem, NoticeProps } from './types'
import type { AvatarProps, TabsPaneContext } from 'element-plus'
import MessageList from '@/components/common/notice/src/message-list.vue'

defineOptions({
  name: 'notice'
})

const props = defineProps<NoticeProps>()

// 事件传递
const emits = defineEmits<{
  clickAvatar: [avatar?: AvatarProps]
  clickItem: [item: MessageListItem]
  clickTab: [tab: TabsPaneContext, event: Event]
}>()

const forwardedEvents = {
  clickAvatar: (avatar?: AvatarProps) => emits('clickAvatar', avatar),
  clickItem: (item: MessageListItem) => emits('clickItem', item),
  clickTab: (tab: TabsPaneContext, event: Event) => emits('clickTab', tab, event)
}

const filteredProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { actions, lists, ...restProps } = props
  return restProps
})
</script>

<style scoped></style>
