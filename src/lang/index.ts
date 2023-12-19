import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import type { I18nOptions } from 'vue-i18n'
import { useToggleLang } from '@/components/common/hooks'
import zhCnMsg from './msg/zh_CN'
import enMsg from './msg/en'

const buildOptions = (): I18nOptions => {
  const { getCurrentLang } = useToggleLang()
  return {
    locale: getCurrentLang.value,
    messages: {
      en: enMsg,
      zh_CN: zhCnMsg
    }
  }
}

console.log(buildOptions())

const i18n = createI18n(buildOptions())

export const installI18n = (app: App) => {
  app.use(i18n)
}

export default i18n
