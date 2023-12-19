import { createApp } from 'vue'

import App from './App.vue'
import { installAssets } from '@/plugins/assets'
import { installRouter } from '@/router'
import { installStore } from '@/stores'
import { installCommonComponents } from '@/components/common'
import { installI18n } from '@/lang'

const bootstrapApp = () => {
  const app = createApp(App)

  // 路由
  installRouter(app)
  // 全局状态管理
  installStore(app)
  // 自定义公共组件库
  installCommonComponents(app)
  // 静态资源
  installAssets()
  // 国际化
  installI18n(app)

  app.mount('#app')
}

bootstrapApp()
