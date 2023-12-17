import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslint from 'vite-plugin-eslint'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [vue(), vueJsx(), eslint(), UnoCSS()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
