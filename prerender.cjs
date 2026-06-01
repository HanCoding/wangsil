const fs = require('fs')
const path = require('path')
const { pathToFileURL } = require('url')

const LOCALES = ['', '/en', '/ja', '/zh', '/vi']
const PAGES = ['/', '/about', '/eye', '/nose', '/facelift', '/facelift2', '/petti', '/laser', '/community']

const ROUTES = LOCALES.flatMap(locale =>
  PAGES.map(page => (locale === '' ? page : `${locale}${page}`))
)

const DIST_DIR = path.join(__dirname, 'dist')
const SERVER_ENTRY = path.join(__dirname, 'dist-server', 'entry-server.js')

async function prerender() {
  const template = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8')
  const { render } = await import(pathToFileURL(SERVER_ENTRY).href)

  console.log(`Pre-rendering ${ROUTES.length} routes...\n`)

  for (const route of ROUTES) {
    const { html, helmetContext } = render(route)
    const { helmet } = helmetContext

    let output = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    )

    if (helmet) {
      output = output.replace(/<title>.*?<\/title>/s, helmet.title.toString())
      output = output.replace('</head>', `${helmet.meta.toString()}${helmet.link.toString()}</head>`)
    }

    const filePath = route.endsWith('/') ? `${route}index.html` : `${route}/index.html`
    const outputPath = path.join(DIST_DIR, filePath)

    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
    fs.writeFileSync(outputPath, output, 'utf-8')
    console.log(`  ✓ ${route}`)
  }

  console.log('\nPrerender complete!')
}

prerender().catch(err => {
  console.error(err)
  process.exit(1)
})
