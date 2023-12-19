<!--
 @name: register.vue
 @description: 注册账号
 @author: 程序员优雅哥 yygcoder
 @time: 2023/11/3 11:49
-->
<template>
  <div class="login-form">
    <div class="title">{{ $t('login.titleRegister') }}</div>
    <el-form :model="registerForm" :rules="rules" ref="loginFormRef" class="login-form-container">
      <el-form-item prop="username">
        <el-input v-model="registerForm.username" :placeholder="$t('login.username')" size="large">
          <template #prefix>
            <yyg-icon icon="i-ph:user" class="form-item-icon" />
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="mobile">
        <el-input v-model="registerForm.mobile" :placeholder="$t('login.mobile')" size="large">
          <template #prefix>
            <yyg-icon icon="i-clarity:mobile-line" class="form-item-icon" />
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="verifyCode">
        <el-input
          v-model="registerForm.verifyCode"
          :placeholder="$t('login.verifyCode')"
          size="large"
          maxlength="6"
        >
          <template #prefix>
            <yyg-icon icon="i-system-uicons:message" class="form-item-icon" />
          </template>
          <template #suffix>
            <div class="flex cursor-pointer" @click="onSendSmsCodeBtnClick">
              <el-button link type="primary">
                {{ $t('login.btnSendVerifyCode') }}
              </el-button>
            </div>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="registerForm.password"
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

      <el-form-item prop="confirmPassword">
        <el-input
          v-model="registerForm.confirmPassword"
          :placeholder="$t('login.confirmPassword')"
          size="large"
          type="password"
          show-password
        >
          <template #prefix>
            <yyg-icon icon="i-carbon:two-factor-authentication" class="form-item-icon" />
          </template>
        </el-input>
      </el-form-item>

      <div>
        <el-checkbox size="large"> {{ $t('login.registerPolicy') }} </el-checkbox>
      </div>

      <div>
        <el-button @click="onRegisterBtnClick" type="primary" class="mt-5 w-full" size="large">
          {{ $t('login.btnRegister') }}
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

interface RegisterForm {
  username: string
  mobile: string
  password: string
  confirmPassword: string
  verifyCode: string
}

const { backToAccount } = useLoginType()

const onSendSmsCodeBtnClick = () => {
  console.log('发送短信')
}

const registerFormRef = ref<FormInstance>()

const registerForm = reactive<RegisterForm>({
  username: '',
  mobile: '',
  password: '',
  confirmPassword: '',
  verifyCode: ''
})

const rules = reactive<FormRules<RegisterForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 15, message: '用户名长度为 5-15 位', trigger: 'blur' }
  ],
  mobile: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { len: 11, message: '手机号长度为 11 位', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度为 6-15 位', trigger: 'blur' }
  ],
  confirmPassword: [{ required: true, message: '请输入确认密码', trigger: 'blur' }],
  verifyCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { len: 6, message: '验证码长度为6位', trigger: 'blur' }
  ]
})

const onRegisterBtnClick = async () => {
  if (!registerFormRef.value) {
    return
  }
  await registerFormRef.value.validate((valid, fields) => {
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
.register {
}
</style>
