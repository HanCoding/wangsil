import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { LocaleProvider } from '../context/LocaleContext'
import Header from './Header'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'
import HreflangTags from './HreflangTags'
import type { Locale } from '../context/LocaleContext'

function LocaleSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])
  return null
}

export default function LocaleLayout({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <LocaleSync locale={locale} />
      <HreflangTags />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </LocaleProvider>
  )
}
