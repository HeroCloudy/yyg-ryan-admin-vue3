import { createPinia } from 'pinia'
import type { App } from 'vue'

const pinia = createPinia()

export const installStore = (app: App) => {
  app.use(pinia)
}

export default pinia
