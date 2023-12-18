import { createApp } from 'vue'

import App from './App.vue'
import { installAssets } from '@/plugins/assets'
import { installRouter } from '@/router'
import { installStore } from '@/stores'
import { installCommonComponents } from '@/components/common'

const bootstrapApp = () => {
  const app = createApp(App)

  installRouter(app)
  installStore(app)
  installCommonComponents(app)
  installAssets()

  app.mount('#app')
}

bootstrapApp()
