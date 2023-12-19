<!--
 @name: reset-pwd.vue
 @description: 重置密码
 @author: 程序员优雅哥 yygcoder
 @time: 2023/11/3 15:52
-->
<template>
  <div class="login-form">
    <div class="title">{{ $t('login.titleResetPassword') }}</div>

    <el-form
      :model="resetPwdForm"
      :rules="rules"
      ref="resetPwdFormRef"
      class="login-form-container"
    >
      <el-form-item prop="username">
        <el-input v-model="resetPwdForm.username" :placeholder="$t('login.username')" size="large">
          <template #prefix>
            <yyg-icon icon="i-ph:user" class="form-item-icon" />
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="mobile">
        <el-input v-model="resetPwdForm.mobile" :placeholder="$t('login.mobile')" size="large">
          <template #prefix>
            <yyg-icon icon="i-clarity:mobile-line" class="form-item-icon" />
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="verifyCode">
        <el-input
          v-model="resetPwdForm.verifyCode"
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

      <div>
        <el-button @click="onResetPwdBtnClick" type="primary" class="mt-5 w-full" size="large">
          {{ $t('login.btnReset') }}
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
import { useLoginType } from './use-login-type'
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface RestPwdForm {
  username: string
  mobile: string
  verifyCode: string
}

const { backToAccount } = useLoginType()

const onSendSmsCodeBtnClick = () => {
  console.log('发送短信')
}

const resetPwdFormRef = ref<FormInstance>()

const resetPwdForm = reactive<RestPwdForm>({
  username: '',
  mobile: '',
  verifyCode: ''
})

const rules = reactive<FormRules<RestPwdForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 15, message: '用户名长度为 5-15 位', trigger: 'blur' }
  ],
  mobile: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { len: 11, message: '手机号长度为 11 位', trigger: 'blur' }
  ],
  verifyCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { len: 6, message: '验证码长度为6位', trigger: 'blur' }
  ]
})

const onResetPwdBtnClick = async () => {
  if (!resetPwdFormRef.value) {
    return
  }
  await resetPwdFormRef.value.validate((valid, fields) => {
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
.reset-pwd {
}
</style>
