import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          filename: 'index.html',
          template: 'index.html',
          options: {
            data: {
              title: 'index',
              injectScript: `<script src="./inject.js"></script>`,
            },
          },
        },
      ],
    }),
  ],
})