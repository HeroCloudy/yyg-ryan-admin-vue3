import type { App } from 'vue'
import Notification from './src/index.vue'

Notification.install = (app: App) => {
  const { VITE_COMPONENT_LIB_PREFIX } = import.meta.env
  app.component(`${VITE_COMPONENT_LIB_PREFIX}-${Notification.name}`, Notification)
}

export default Notification
