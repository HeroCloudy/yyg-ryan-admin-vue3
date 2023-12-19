/* eslint-disable no-unused-vars */
import { computed, ref } from 'vue'

export enum LoginType {
  ACCOUNT,
  MOBILE,
  QRCODE,
  REGISTER,
  RESET_PWD
}

const currentLoginType = ref<LoginType>(LoginType.ACCOUNT)

export const useLoginType = () => {
  const getLoginType = () => computed(() => currentLoginType.value)

  const setLoginType = (loginType: LoginType) => {
    currentLoginType.value = loginType
  }

  const backToAccount = () => {
    setLoginType(LoginType.ACCOUNT)
  }

  return { getLoginType, setLoginType, backToAccount }
}
