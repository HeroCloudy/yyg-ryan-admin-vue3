import type { App } from 'vue'
import Icon from './src/index.vue'

Icon.install = (app: App) => {
  const { VITE_COMPONENT_LIB_PREFIX } = import.meta.env
  app.component(`${VITE_COMPONENT_LIB_PREFIX}-${Icon.name}`, Icon)
}

export default Icon
