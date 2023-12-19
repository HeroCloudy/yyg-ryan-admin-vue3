import type { I18n } from 'vue-i18n'
import { useToggleLang } from './use-toggle-lang'

export const useAppInit = () => {
  const initLocale = (i18n: I18n) => {
    const { getCurrentLang } = useToggleLang()
    watch(
      () => getCurrentLang.value,
      (newVal) => {
        i18n.global.locale = newVal
      }
    )
  }

  const initApp = (i18n: I18n) => {
    initLocale(i18n)
  }

  return { initLocale, initApp }
}
