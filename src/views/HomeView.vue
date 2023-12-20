<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import type {
  NoticeActionsItem,
  NoticeMessageListOptions
} from '@/components/common/notice/src/types'

const actions = ref<NoticeActionsItem[]>([
  {
    title: '清空',
    icon: 'i-ep:delete',
    click: () => console.log('清空')
  },
  {
    title: '更多',
    icon: 'i-ep:more',
    click: () => console.log('更多')
  }
])

const lists = ref<NoticeMessageListOptions[]>([
  {
    title: '通知',
    contents: [
      {
        title: '消息1',
        avatar: { src: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png' },
        content: '消息内容1',
        time: '2022-01-03 14:55:33',
        tagProps: { type: 'danger' },
        tag: '紧急'
      },
      {
        title: '消息2',
        avatar: { src: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png' },
        content: '消息内容1',
        time: '2022-01-02 14:55:33'
      },
      {
        title: '消息3',
        avatar: { src: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png' },
        content: '消息内容1',
        time: '2022-01-01 14:55:33'
      }
    ]
  },
  {
    title: '关注',
    contents: [
      {
        title: '消息a',
        avatar: { src: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png' },
        content: '消息内容a',
        time: '2022-01-02 14:55:33',
        tagProps: { type: 'info' },
        tag: '通知'
      },
      {
        title: '消息b',
        avatar: { src: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png' },
        content: '消息内容b',
        time: '2022-01-01 14:55:33'
      }
    ]
  },
  {
    title: '待办',
    contents: [
      {
        title: '消息2',
        avatar: { src: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png' },
        content: '消息内容2',
        time: '2022-01-02 14:55:33',
        tagProps: { type: 'info' },
        tag: '通知'
      },
      {
        title: '消息2',
        avatar: { src: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png' },
        content: '消息内容2',
        time: '2022-01-01 14:55:33'
      }
    ]
  }
])

const handleClickItem = (item: any) => {
  console.log('item:', item)
}
</script>

<template>
  <main>
    <hello-world msg="hello"></hello-world>
    <div class="text-3xl color-sky font-bold">Test</div>
    <!-- A basic anchor icon from Phosphor icons -->
    <div class="i-ph-anchor-simple-thin" />
    <!-- An orange alarm from Material Design Icons -->
    <div class="i-mdi-alarm text-orange-400" />
    <!-- A large Vue logo -->
    <div class="i-logos-vue text-3xl" />
    <!-- Sun in light mode, Moon in dark mode, from Carbon -->
    <button class="i-carbon-sun dark:i-carbon-moon" />
    <!-- Twemoji of laugh, turns to tear on hovering -->
    <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
    <yyg-demo msg="hello"></yyg-demo>

    <div>
      <h2>Icon Demo</h2>

      <h4>Uno</h4>
      <yyg-icon type="uno" icon="i-mdi-alarm" class="text-2xl text-red"></yyg-icon>
      <yyg-icon icon="i-logos-vue" class="text-2xl text-red"></yyg-icon>

      <h4>Iconify</h4>
      <yyg-icon
        type="iconify"
        icon="mdi:home"
        class="cursor-pointer text-3xl text-green"
      ></yyg-icon>

      <h4>svg</h4>
      <yyg-icon type="svg" icon="beisi" class="h-10 w-10 color-blue"></yyg-icon>
      <yyg-icon type="svg" icon="jita" class="h-10 w-10 color-blue"></yyg-icon>

      <h4>iconfont</h4>
      <yyg-icon type="iconfont" icon="gu" class="text-red text-2xl!"></yyg-icon>
      <yyg-icon type="iconfont" icon="cha" class="text-sky text-4xl!"></yyg-icon>
    </div>

    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <div>
      <h2>i18n</h2>
      <div>{{ $t('app.desc') }}</div>
      <yyg-toggle-language></yyg-toggle-language>
    </div>

    <div>
      <h2>dark</h2>
      <yyg-toggle-dark-mode></yyg-toggle-dark-mode>
    </div>
    <div>
      <h2>full screen</h2>
      <yyg-toggle-full-screen></yyg-toggle-full-screen>
    </div>
    <div>
      <h2>Notification</h2>
      <yyg-notification value="100111" :scale="0.5"></yyg-notification>
      <yyg-notification value="100111" :scale="1"></yyg-notification>
      <yyg-notification value="100111" :scale="1.5"></yyg-notification>
      <br />
      <yyg-notice
        :actions="actions"
        :lists="lists"
        wrap-class="w-[300px]"
        @click-item="handleClickItem"
      />
    </div>
  </main>
</template>
