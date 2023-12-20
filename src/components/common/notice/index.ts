import type { App } from 'vue'
import Notice from './src/index.vue'

Notice.install = (app: App) => {
  const { VITE_COMPONENT_LIB_PREFIX } = import.meta.env
  app.component(`${VITE_COMPONENT_LIB_PREFIX}-${Notice.name}`, Notice)
}

export default Notice
