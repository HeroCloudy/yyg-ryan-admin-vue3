import type { App } from 'vue'
import ToggleFullScreen from './src/index.vue'

ToggleFullScreen.install = (app: App) => {
  const { VITE_COMPONENT_LIB_PREFIX } = import.meta.env
  app.component(`${VITE_COMPONENT_LIB_PREFIX}-${ToggleFullScreen.name}`, ToggleFullScreen)
}

export default ToggleFullScreen
