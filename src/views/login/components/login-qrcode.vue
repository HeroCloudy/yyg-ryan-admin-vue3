<!--
 @name: login-qrcode.vue
 @description:
 @author: 程序员优雅哥 yygcoder
 @time: 2023/11/3 13:05
-->
<template>
  <div class="login-form">
    <div class="title">{{ $t('login.titleQrCodeLogin') }}</div>
    <div class="mt-10 text-center">
      <qrcode-vue :value="url" :size="size" level="H" class="mx-auto" />
      <div class="mt-5 text-4 color-gray">{{ $t('login.qrCodeLoginDesc') }}</div>
    </div>
    <el-button @click="backToAccount" class="mt-6 w-full" size="default">
      {{ $t('login.btnBack') }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'
import { ref } from 'vue'
import { useLoginType } from '@/views/login/components/use-login-type'

const { backToAccount } = useLoginType()

const url = ref('https://www.yygnb.com')
const size = ref(200)
</script>

<style scoped lang="scss">
@import './login-form';
.login-qrcode {
}
</style>
