import { useLocale } from '../context/LocaleContext'
import type { Locale } from '../context/LocaleContext'

export function useLocalePath(): (path: string) => string {
  const locale = useLocale()
  return (path: string) => {
    if (locale === 'ko') return path
    return `/${locale}${path === '/' ? '' : path}`
  }
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === '/ja' || pathname.startsWith('/ja/')) return 'ja'
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en'
  if (pathname === '/zh' || pathname.startsWith('/zh/')) return 'zh'
  if (pathname === '/vi' || pathname.startsWith('/vi/')) return 'vi'
  return 'ko'
}

export function stripLocalePrefix(pathname: string, locale: Locale): string {
  if (locale === 'ko') return pathname
  const stripped = pathname.replace(new RegExp(`^/${locale}`), '')
  return stripped || '/'
}
