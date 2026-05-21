import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import type { Locale } from '../context/LocaleContext'

export const LOCALE_KEY = 'wangsil_locale'

function detectBrowserLocale(): Locale {
  const lang = navigator.language.toLowerCase()
  if (lang.startsWith('ko')) return 'ko'
  if (lang.startsWith('ja')) return 'ja'
  if (lang.startsWith('zh')) return 'zh'
  if (lang.startsWith('vi')) return 'vi'
  return 'en'
}

function getPathLocale(pathname: string): Locale | null {
  if (pathname === '/ja' || pathname.startsWith('/ja/')) return 'ja'
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en'
  if (pathname === '/zh' || pathname.startsWith('/zh/')) return 'zh'
  if (pathname === '/vi' || pathname.startsWith('/vi/')) return 'vi'
  return null
}

export default function LocaleAutoRedirect() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const pathLocale = getPathLocale(location.pathname)

    // 이미 로케일 경로에 있으면 해당 언어를 저장만 하고 종료
    if (pathLocale) {
      localStorage.setItem(LOCALE_KEY, pathLocale)
      return
    }

    // 한국어 경로: 저장된 선택 또는 브라우저 언어로 리다이렉트
    const stored = localStorage.getItem(LOCALE_KEY) as Locale | null
    const target: Locale = stored ?? detectBrowserLocale()

    if (!stored) {
      localStorage.setItem(LOCALE_KEY, target)
    }

    if (target !== 'ko') {
      const rest = location.pathname === '/' ? '' : location.pathname
      navigate(`/${target}${rest}`, { replace: true })
    }
  }, [location.pathname])

  return null
}
