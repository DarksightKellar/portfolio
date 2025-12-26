import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Serve /modules from parent directory
    {
      name: 'serve-modules',
      configureServer(server) {
        server.middlewares.use('/modules', (req, res, next) => {
          const filePath = path.join(__dirname, '..', 'modules', req.url)

          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath)
            const contentTypes = {
              '.html': 'text/html',
              '.css': 'text/css',
              '.js': 'application/javascript',
            }
            res.setHeader('Content-Type', contentTypes[ext] || 'text/plain')
            fs.createReadStream(filePath).pipe(res)
          } else {
            next()
          }
        })
      },
    },
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
      },
    },
    fs: {
      allow: ['..'],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
})
