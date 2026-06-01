const puppeteer = require('./node_modules/puppeteer')
const { spawn } = require('child_process')
const fs = require('fs')
const path = require('path')
const http = require('http')

const LOCALES = ['', '/en', '/ja', '/zh', '/vi']
const PAGES = ['/', '/about', '/eye', '/nose', '/facelift', '/facelift2', '/petti', '/laser', '/community']

const ROUTES = LOCALES.flatMap(locale =>
  PAGES.map(page => (locale === '' ? page : `${locale}${page}`))
)

const PORT = 4173
const BASE_URL = `http://localhost:${PORT}`
const DIST_DIR = path.join(__dirname, 'dist')

function waitForServer(retries = 30, delay = 1000) {
  return new Promise((resolve, reject) => {
    function attempt(n) {
      http.get(BASE_URL, res => {
        res.resume()
        resolve()
      }).on('error', () => {
        if (n <= 0) return reject(new Error('Server did not start in time'))
        setTimeout(() => attempt(n - 1), delay)
      })
    }
    attempt(retries)
  })
}

async function prerender() {
  const serverProcess = spawn(
    'npx',
    ['vite', 'preview', '--port', String(PORT)],
    { stdio: 'ignore', shell: true }
  )

  console.log('Waiting for preview server...')
  await waitForServer()
  console.log(`Server ready at ${BASE_URL}\n`)

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  console.log(`Pre-rendering ${ROUTES.length} routes...\n`)

  for (const route of ROUTES) {
    const url = `${BASE_URL}${route}`
    const page = await browser.newPage()

    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
      const html = await page.content()

      const filePath = route.endsWith('/') ? `${route}index.html` : `${route}/index.html`
      const outputPath = path.join(DIST_DIR, filePath)

      fs.mkdirSync(path.dirname(outputPath), { recursive: true })
      fs.writeFileSync(outputPath, html, 'utf-8')
      console.log(`  ✓ ${route}`)
    } catch (err) {
      console.error(`  ✗ ${route}: ${err.message}`)
    } finally {
      await page.close()
    }
  }

  await browser.close()
  serverProcess.kill()
  console.log('\nPrerender complete!')
}

prerender().catch(err => {
  console.error(err)
  process.exit(1)
})
