<!--
 @name: login/index.vue
 @description: 登录页面入口文件
 @author: 程序员优雅哥 yygcoder
 @time: 2023/11/2 15:12
-->
<template>
  <div class="login">
    <div class="logo common-img">
      <img src="../../assets/img/logo.png" />
    </div>

    <div class="pos-absolute right-10 top-8 flex items-center">
      <yyg-toggle-dark-mode></yyg-toggle-dark-mode>
      <yyg-toggle-language class="ml-2"></yyg-toggle-language>
    </div>

    <div class="content">
      <div class="content-left">
        <div class="title">
          <div>{{ $t('app.title') }}</div>
          <div>{{ $t('app.desc') }}<br />{{ $t('app.feat') }}</div>
        </div>
      </div>
      <div class="content-right">
        <login-account v-if="currentLoginType === LoginType.ACCOUNT"></login-account>
        <login-mobile v-if="currentLoginType === LoginType.MOBILE"></login-mobile>
        <login-qrcode v-if="currentLoginType === LoginType.QRCODE"></login-qrcode>
        <register v-if="currentLoginType === LoginType.REGISTER"></register>
        <reset-pwd v-if="currentLoginType === LoginType.RESET_PWD"></reset-pwd>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginAccount from './components/login-account.vue'
import LoginMobile from './components/login-mobile.vue'
import LoginQrcode from './components/login-qrcode.vue'
import Register from './components/register.vue'
import ResetPwd from './components/reset-pwd.vue'
import { LoginType, useLoginType } from '@/views/login/components/use-login-type'

const { getLoginType } = useLoginType()
const currentLoginType = getLoginType()
</script>

<style scoped lang="scss">
.login {
  @apply bg-green w-screen h-screen overflow-hidden
  @apply pos-relative flex justify-center items-center;
  background: url('../../assets/img/login-bg.jpeg') no-repeat top center;
  background-size: cover;
  user-select: none;

  .logo {
    @apply pos-absolute left-20 top-8 w-40;
  }

  .content {
    @apply bg-white flex;
    width: 90%;
    max-width: 1000px;
    height: 550px;
    box-shadow: 0 4px 8px 1px #0003;

    .content-left {
      @apply bg-red flex items-center justify-center pos-relative;
      width: 60%;
      background: url('../../assets/img/login-card-img.png') no-repeat top center;
      background-size: cover;

      .title {
        @apply color-white text-center text-10 font-bold;

        > div:last-child {
          @apply mt-5 text-5;
          line-height: 30px;
        }
      }
    }

    .content-right {
      width: 40%;
      @apply box-border p-8 flex items-center;
    }
  }
}

html[data-theme='dark'] {
  .login {
    --el-bg-color: #262b34;

    background: var(--el-bg-color);

    .content {
      background-color: var(--el-bg-color);
      box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
