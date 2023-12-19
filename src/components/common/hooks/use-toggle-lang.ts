const currentLang = ref<string>('zh_CN')
export const useToggleLang = () => {
  const getCurrentLang = computed(() => currentLang.value)

  const setLang = (lang: string) => {
    currentLang.value = lang
  }

  return { getCurrentLang, setLang }
}
