import type { App } from 'vue'
import ToggleLanguage from './src/index.vue'

ToggleLanguage.install = (app: App) => {
  const { VITE_COMPONENT_LIB_PREFIX } = import.meta.env
  app.component(`${VITE_COMPONENT_LIB_PREFIX}-${ToggleLanguage.name}`, ToggleLanguage)
}

export default ToggleLanguage
