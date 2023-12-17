import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'
import presetIcons from '@unocss/preset-icons'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  // rules: [
  // [/^text-([\d]+)px$/, ([_, num]) => ({ 'font-size': `${num}px` })]
  // ],
  presets: [
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
