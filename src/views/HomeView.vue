<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
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
    </div>
  </main>
</template>
