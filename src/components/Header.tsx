import { useState, useEffect } from 'react'
import styles from './Header.module.css'

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  { label: '홈', href: '/' },
  { label: '병원소개', href: '/about' },
  { label: '눈성형', href: '/eye' },
  { label: '코성형', href: '/nose' },
  { label: '안면거상', href: '/facelift' },
  { label: '안면거상', href: '/facelift2' },
  { label: '쁘띠로 예뻐…', href: '/petit' },
  { label: '레이저 이뻐…', href: '/laser' },
  { label: '커뮤니티', href: '/community' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarInner}>
            <div className={styles.topLinks}>
              <a href="/login">로그인</a>
              <span className={styles.divider}>|</span>
              <a href="/community/notice">공지사항</a>
              <span className={styles.divider}>|</span>
              <a href="/events" className={styles.highlight}>이벤트</a>
            </div>
            <a href="https://pf.kakao.com" className={styles.kakaoBtn} target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.477 2 10.858c0 2.742 1.564 5.157 3.942 6.672L5.1 20.5a.5.5 0 0 0 .702.58l4.042-2.35A11.6 11.6 0 0 0 12 18.716c5.523 0 10-3.477 10-7.858S17.523 3 12 3z"/>
              </svg>
              Kakao Talk
              <span>친구 추가하세요</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={styles.nav}>
        <div className="container">
          <div className={styles.navInner}>
            <a href="/" className={styles.logo}>
              <img
                src="https://alice4871277.aty.kr/1774005383242/image/resize_8458e95216dd4a7b8de2647db581460e.png"
                alt="왕실의원 로고"
                className={styles.logoImg}
              />
            </a>

            {/* Desktop Nav */}
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.href} className={styles.navItem}>
                  <a href={item.href} className={styles.navLink}>{item.label}</a>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger */}
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="메뉴 열기"
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
              <a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className={styles.mobileFooter}>
          <a href="tel:0324353571">☎ 032-435-3571</a>
        </div>
      </div>
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
    </header>
  )
}
