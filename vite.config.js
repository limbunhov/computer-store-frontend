import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    historyApiFallback: true
  }
})
