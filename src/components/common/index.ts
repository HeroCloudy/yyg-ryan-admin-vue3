import type { App, Component } from 'vue'
import Demo from './demo'
import Icon from './icon'
import 'virtual:svg-icons-register'

const components: Component = [Demo, Icon]

export const installCommonComponents = (app: App) => {
  const { VITE_COMPONENT_LIB_PREFIX } = import.meta.env
  components.forEach((c: Component) => {
    app.component(`${VITE_COMPONENT_LIB_PREFIX}-${c.name}`, c)
  })
}

export {}
