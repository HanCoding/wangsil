import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const BASE = 'https://xn--oy2bq2opmc0oo12cuzc.net'
const LOCALES = ['ko', 'en', 'ja', 'zh', 'vi'] as const

function getBasePath(pathname: string): string {
  const m = pathname.match(/^\/(en|ja|zh|vi)(\/.*)?$/)
  return m ? (m[2] ?? '/') : pathname
}

function buildHref(locale: string, base: string): string {
  if (locale === 'ko') return `${BASE}${base}`
  return base === '/' ? `${BASE}/${locale}/` : `${BASE}/${locale}${base}`
}

export default function HreflangTags() {
  const { pathname } = useLocation()
  const base = getBasePath(pathname)

  return (
    <Helmet>
      {LOCALES.map(locale => (
        <link key={locale} rel="alternate" hreflang={locale} href={buildHref(locale, base)} />
      ))}
      <link rel="alternate" hreflang="x-default" href={buildHref('ko', base)} />
    </Helmet>
  )
}
