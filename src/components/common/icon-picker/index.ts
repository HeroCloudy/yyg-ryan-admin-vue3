import type { App } from 'vue'
import IconPicker from './src/index.vue'

IconPicker.install = (app: App) => {
  const { VITE_COMPONENT_LIB_PREFIX } = import.meta.env
  app.component(`${VITE_COMPONENT_LIB_PREFIX}-${IconPicker.name}`, IconPicker)
}

export default IconPicker
