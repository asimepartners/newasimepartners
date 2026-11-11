import { defineConfig, loadEnv, type Plugin, type ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { readdirSync } from 'node:fs'
import type { IncomingMessage, ServerResponse } from 'http'
import { processContact } from './api/contact'

function readJsonBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8')
        resolve(raw ? JSON.parse(raw) : {})
      } catch (error) {
        reject(error)
      }
    })
    req.on('error', reject)
  })
}

function contactApiPlugin(secret: string, toEmail: string): Plugin {
  const handle = async (req: IncomingMessage, res: ServerResponse, next: () => void) => {
    const url = req.url?.split('?')[0]
    if (url !== '/api/contact') {
      next()
      return
    }

    if (req.method !== 'POST') {
      res.statusCode = 405
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ success: false, message: 'Method not allowed' }))
      return
    }

    try {
      const payload = (await readJsonBody(req)) as Parameters<typeof processContact>[0]
      const host = req.headers.host?.toLowerCase().replace(/:\d+$/, '')
      const remoteAddress = req.socket.remoteAddress
      const isLoopbackHost = host === 'localhost' || host === '127.0.0.1' || host === '[::1]'
      const isLoopbackConnection = remoteAddress === '::1'
        || remoteAddress === '127.0.0.1'
        || remoteAddress?.startsWith('::ffff:127.') === true
      const bypassCaptcha = isLoopbackHost && isLoopbackConnection
      const result = await processContact(payload ?? {}, secret, toEmail, bypassCaptcha)
      res.statusCode = result.status
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(result.body))
    } catch {
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ success: false, message: 'Server error' }))
    }
  }

  const attach = (server: ViteDevServer) => {
    server.middlewares.use((req, res, next) => {
      void handle(req, res, next)
    })
  }

  return {
    name: 'contact-api',
    configureServer: attach,
    configurePreviewServer: attach,
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      contactApiPlugin(
        env.RECAPTCHA_SECRET_KEY || '',
        env.CONTACT_EMAIL || 'contact@asimepartners.com',
      ),
    ],
    build: {
      rollupOptions: {
        input: Object.fromEntries(readdirSync(process.cwd()).filter(file => file.endsWith('.html')).map(file => [file.replace('.html', ''), path.resolve(process.cwd(), file)])),
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 5174,
      strictPort: true,
    },
  }
})
