import type { App } from 'vue'
import ToggleDarkMode from './src/index.vue'

ToggleDarkMode.install = (app: App) => {
  const { VITE_COMPONENT_LIB_PREFIX } = import.meta.env
  app.component(`${VITE_COMPONENT_LIB_PREFIX}-${ToggleDarkMode.name}`, ToggleDarkMode)
}

export default ToggleDarkMode
