import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import { useT, useLocale } from '../context/LocaleContext'
import { stripLocalePrefix } from '../hooks/useLocalePath'
import { LOCALE_KEY } from './LocaleAutoRedirect'
import type { Locale } from '../context/LocaleContext'

const langLabels: Record<string, string> = {
  ko: '한국어',
  ja: 'JP',
  en: 'ENG',
  zh: '简体中文',
  vi: 'VIE',
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRefDesktop = useRef<HTMLDivElement>(null)
  const langRefMobile = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const t = useT()
  const locale = useLocale()

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.eye, href: '/eye' },
    { label: t.nav.nose, href: '/nose' },
    { label: t.nav.facelift, href: '/facelift' },
    { label: t.nav.petti, href: '/petti' },
    { label: t.nav.laser, href: '/laser' },
    { label: t.nav.location, href: '/community' },
  ]

  const localePath = (path: string) =>
    locale === 'ko' ? path : `/${locale}${path === '/' ? '' : path}`

  const switchLocale = (targetLocale: Locale) => {
    const currentPath = stripLocalePrefix(location.pathname, locale)
    if (targetLocale === 'ko') return currentPath
    return `/${targetLocale}${currentPath === '/' ? '' : currentPath}`
  }

  const saveLocale = (targetLocale: Locale) => {
    localStorage.setItem(LOCALE_KEY, targetLocale)
  }

  const currentBasePath = stripLocalePrefix(location.pathname, locale)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!langOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (!langRefDesktop.current?.contains(target) && !langRefMobile.current?.contains(target)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [langOpen])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarInner}>
            <div className={`${styles.langDropdown} ${styles.desktopLangDropdown}`} ref={langRefDesktop}>
              <button
                className={styles.langDropdownTrigger}
                onClick={() => setLangOpen(!langOpen)}
                aria-expanded={langOpen}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                {langLabels[locale]}
                <span className={`${styles.langArrow} ${langOpen ? styles.langArrowOpen : ''}`}>▾</span>
              </button>
              {langOpen && (
                <div className={styles.langDropdownMenu}>
                  {(['ko', 'ja', 'en', 'zh', 'vi'] as const).map((lang) => (
                    <Link
                      key={lang}
                      to={switchLocale(lang)}
                      className={`${styles.langDropdownItem} ${locale === lang ? styles.langDropdownItemActive : ''}`}
                      onClick={() => { saveLocale(lang); setLangOpen(false) }}
                    >
                      {langLabels[lang]}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a href="https://pf.kakao.com/_ySgVX" className={styles.kakaoBtn} target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.477 2 10.858c0 2.742 1.564 5.157 3.942 6.672L5.1 20.5a.5.5 0 0 0 .702.58l4.042-2.35A11.6 11.6 0 0 0 12 18.716c5.523 0 10-3.477 10-7.858S17.523 3 12 3z"/>
              </svg>
              {t.header.kakaoBtn}
              <span>{t.header.kakaoFriend}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={styles.nav}>
        <div className="container">
          <div className={styles.navInner}>
            <Link to={localePath('/')} className={styles.logo}>
              <img
                src="https://alice4871277.aty.kr/1774005383242/image/resize_8458e95216dd4a7b8de2647db581460e.png"
                alt="왕실의원 로고"
                className={styles.logoImg}
              />
            </Link>

            {/* Desktop Nav */}
            <ul className={styles.navList}>
              {navItems.map((item) => {
                const fullHref = localePath(item.href)
                const isActive = item.href === '/'
                  ? currentBasePath === '/'
                  : currentBasePath.startsWith(item.href)
                return (
                  <li key={item.href} className={styles.navItem}>
                    <Link
                      to={fullHref}
                      className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Mobile Language Dropdown */}
            <div className={`${styles.langDropdown} ${styles.mobileLangDropdown}`} ref={langRefMobile}>
              <button
                className={styles.langDropdownTrigger}
                onClick={() => setLangOpen(!langOpen)}
                aria-expanded={langOpen}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                {langLabels[locale]}
                <span className={`${styles.langArrow} ${langOpen ? styles.langArrowOpen : ''}`}>▾</span>
              </button>
              {langOpen && (
                <div className={styles.langDropdownMenu}>
                  {(['ko', 'ja', 'en', 'zh', 'vi'] as const).map((lang) => (
                    <Link
                      key={lang}
                      to={switchLocale(lang)}
                      className={`${styles.langDropdownItem} ${locale === lang ? styles.langDropdownItemActive : ''}`}
                      onClick={() => { saveLocale(lang); setLangOpen(false) }}
                    >
                      {langLabels[lang]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={t.header.menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link to={localePath(item.href)} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.mobileFooter}>
          <a href="tel:0324353571">{t.header.phone}</a>
        </div>
      </div>
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
    </header>
  )
}
