import type { App } from 'vue'
import Demo from './src/index.vue'

Demo.install = (app: App) => {
  const { VITE_COMPONENT_LIB_PREFIX } = import.meta.env
  app.component(`${VITE_COMPONENT_LIB_PREFIX}-${Demo.name}`, Demo)
}

export default Demo
