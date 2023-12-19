import { addClass, hasClass, removeClass } from '@/components/common/utils'

export const updateDarkTheme = (isDarkMode: boolean) => {
  const html = document.getElementById('_html')
  if (!html) {
    return
  }
  const hasDarkClass = hasClass(html, 'dark')
  if (isDarkMode) {
    html.setAttribute('data-theme', 'dark')
    if (!hasDarkClass) {
      addClass(html, 'dark')
    }
  } else {
    html.setAttribute('data-theme', 'light')
    if (hasDarkClass) {
      removeClass(html, 'dark')
    }
  }
}
