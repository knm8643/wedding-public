import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
  ],
  define: {
    'process.env.VITE_KAKAO_API_KEY': JSON.stringify(process.env.VITE_KAKAO_API_KEY)
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  base: '/',
  server: {
    host: true,
  },
})
