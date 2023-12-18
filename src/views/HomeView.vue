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
      <h4>svg</h4>
      <yyg-icon type="svg" icon="beisi" class="h-10 w-10 color-blue"></yyg-icon>
      <yyg-icon type="svg" icon="jita" class="h-10 w-10 color-blue"></yyg-icon>

      <h4>iconfont</h4>
      <yyg-icon type="iconfont" icon="gu" class="text-red text-2xl!"></yyg-icon>
      <yyg-icon type="iconfont" icon="cha" class="text-sky text-4xl!"></yyg-icon>
    </div>
  </main>
</template>
