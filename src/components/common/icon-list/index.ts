import type { App } from 'vue'
import IconList from './src/index.vue'

IconList.install = (app: App) => {
  const { VITE_COMPONENT_LIB_PREFIX } = import.meta.env
  app.component(`${VITE_COMPONENT_LIB_PREFIX}-${IconList.name}`, IconList)
}

export default IconList
