<!--
 @name: login-mobile.vue
 @description:
 @author: 程序员优雅哥 yygcoder
 @time: 2023/11/3 00:50
-->
<template>
  <div class="login-form">
    <div class="title">{{ $t('login.titleMobileLogin') }}</div>

    <el-form :model="loginForm" :rules="rules" ref="loginFormRef" class="login-form-container">
      <el-form-item prop="mobile">
        <el-input v-model="loginForm.mobile" :placeholder="$t('login.mobile')" size="large">
          <template #prefix>
            <yyg-icon icon="i-clarity:mobile-line" class="form-item-icon" />
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="verifyCode">
        <el-input
          v-model="loginForm.verifyCode"
          :placeholder="$t('login.verifyCode')"
          size="large"
          maxlength="6"
        >
          <template #prefix>
            <yyg-icon icon="i-system-uicons:message" class="form-item-icon" />
          </template>
          <template #suffix>
            <div class="flex cursor-pointer" @click="onSendSmsCodeBtnClick">
              <el-button link type="primary"> {{ $t('login.btnSendVerifyCode') }}</el-button>
            </div>
          </template>
        </el-input>
      </el-form-item>

      <div>
        <el-button @click="onLoginBtnClick" type="primary" class="mt-5 w-full" size="large">
          {{ $t('login.btnLogin') }}
        </el-button>
      </div>

      <div>
        <el-button @click="backToAccount" class="mt-3 w-full" size="default">
          {{ $t('login.btnBack') }}
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useLoginType } from '@/views/login/components/use-login-type'

interface LoginForm {
  mobile: string
  verifyCode: string
}

const { backToAccount } = useLoginType()

const onSendSmsCodeBtnClick = () => {
  console.log('发送短信')
}

const loginFormRef = ref<FormInstance>()

const loginForm = reactive<LoginForm>({
  mobile: '',
  verifyCode: ''
})

const rules = reactive<FormRules<LoginForm>>({
  mobile: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { len: 11, message: '手机号长度为 11 位', trigger: 'blur' }
  ],
  verifyCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { len: 6, message: '验证码长度为6位', trigger: 'blur' }
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
</script>

<style scoped lang="scss">
@import './login-form';
</style>
