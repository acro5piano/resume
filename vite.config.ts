import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ja: resolve(__dirname, 'ja/index.html'),
      },
    },
  },
})
