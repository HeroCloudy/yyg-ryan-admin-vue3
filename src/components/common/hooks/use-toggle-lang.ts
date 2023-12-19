const currentLang = useLocalStorage('app_lang', 'zh_CN')

// const currentLang = ref<string>('zh_CN')
export const useToggleLang = () => {
  const getCurrentLang = computed(() => currentLang.value)

  const setLang = (lang: string) => {
    currentLang.value = lang

    console.log('currentLang.value', currentLang.value)
  }

  return { getCurrentLang, setLang }
}
