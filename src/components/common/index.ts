import type { App, Component } from 'vue'
import Demo from './demo'
import Icon from './icon'
import IconList from './icon-list'
import IconPicker from './icon-picker'
import ToggleLanguage from './toggle-language'
import ToggleDarkMode from './toggle-dark-mode'
import 'virtual:svg-icons-register'
import './scss/index.scss'

const components: Component = [Demo, Icon, IconList, IconPicker, ToggleLanguage, ToggleDarkMode]

export const installCommonComponents = (app: App) => {
  const { VITE_COMPONENT_LIB_PREFIX } = import.meta.env
  components.forEach((c: Component) => {
    app.component(`${VITE_COMPONENT_LIB_PREFIX}-${c.name}`, c)
  })
}

export * from './hooks'

export {}
