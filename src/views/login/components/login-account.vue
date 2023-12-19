<!--
 @name: login-account.vue
 @description: 账号密码登录
 @author: 程序员优雅哥 yygcoder
 @time: 2023/11/2 17:41
-->
<template>
  <div class="login-form">
    <div class="title">{{ $t('login.titleLogin') }}</div>

    <el-form :model="loginForm" :rules="rules" ref="loginFormRef" class="login-form-container">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" :placeholder="$t('login.username')" size="large">
          <template #prefix>
            <yyg-icon icon="i-ph:user" class="form-item-icon" />
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          :placeholder="$t('login.password')"
          size="large"
          type="password"
          show-password
        >
          <template #prefix>
            <yyg-icon icon="i-formkit:password" class="form-item-icon" />
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="verifyCode">
        <el-input
          v-model="loginForm.verifyCode"
          :placeholder="$t('login.verifyCode')"
          size="large"
          maxlength="4"
        >
          <template #prefix>
            <yyg-icon icon="i-carbon:two-factor-authentication" class="form-item-icon" />
          </template>
          <template #suffix>
            <div class="flex cursor-pointer" @click="onVerifyImageClick">
              <img src="/check-code.jpeg" />
            </div>
          </template>
        </el-input>
      </el-form-item>

      <div class="flex justify-between">
        <el-checkbox size="large">{{ $t('login.rememberMe') }}</el-checkbox>
        <el-button @click="setLoginType(LoginType.RESET_PWD)" link type="primary">
          {{ $t('login.forgetPassword') }}
        </el-button>
      </div>

      <el-button @click="onLoginBtnClick" type="primary" class="mt-3 w-full" size="large">
        {{ $t('login.btnLogin') }}
      </el-button>

      <div class="mt-5 flex justify-between">
        <el-button @click="setLoginType(LoginType.MOBILE)">
          {{ $t('login.btnMobileLogin') }}
        </el-button>
        <el-button @click="setLoginType(LoginType.QRCODE)">
          {{ $t('login.btnQrCodeLogin') }}
        </el-button>
        <el-button @click="setLoginType(LoginType.REGISTER)">
          {{ $t('login.btnRegister') }}
        </el-button>
      </div>

      <div class="mb-8 mt-10">
        <el-divider>
          <span class="text-gray"> {{ $t('login.otherSignIn') }} </span>
        </el-divider>
      </div>

      <div class="flex justify-between">
        <yyg-icon
          type="svg"
          v-for="item in thirdIcons"
          :key="item"
          :icon="`login_${item}`"
          class="third-login-icon"
          @click="onThirdItemClick(item)"
        />
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { LoginType, useLoginType } from '@/views/login/components/use-login-type'

const LOGIN_THIRD_WECHAT = 'wechat'
const LOGIN_THIRD_ALI = 'ali'
const LOGIN_THIRD_GITHUB = 'github'
const LOGIN_THIRD_DING_TALK = 'dingtalk'
const LOGIN_THIRD_TWITTER = 'twitter'

const { setLoginType } = useLoginType()

interface LoginForm {
  username: string
  password: string
  verifyCode: string
}

const onVerifyImageClick = () => {
  console.log('切换验证码')
}

const loginFormRef = ref<FormInstance>()

const loginForm = reactive<LoginForm>({
  username: '',
  password: '',
  verifyCode: ''
})

const rules = reactive<FormRules<LoginForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 15, message: '用户名长度为 5-15 位', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度为 6-15 位', trigger: 'blur' }
  ],
  verifyCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { len: 4, message: '验证码长度为4位', trigger: 'blur' }
  ]
})

const onLoginBtnClick = async () => {
  if (!loginFormRef.value) {
    return
  }
  await loginFormRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const onThirdItemClick = (type: string) => {
  console.log('第三方登录', type)
}

const thirdIcons: string[] = [
  LOGIN_THIRD_WECHAT,
  LOGIN_THIRD_ALI,
  LOGIN_THIRD_GITHUB,
  LOGIN_THIRD_DING_TALK,
  LOGIN_THIRD_TWITTER
]
</script>

<style scoped lang="scss">
@import './login-form';
//@import '@/components/common/scss/config';

.third-login {
  @apply w-6 cursor-pointer;

  img {
    @apply w-full color-blue;
  }
}

.third-login-icon {
  @apply color-gray cursor-pointer w-8 h-8;

  &:hover {
    color: var(--yyg-primary-color);
  }
}
</style>
