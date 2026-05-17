import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: '홈', href: '/' },
  { label: '병원소개', href: '/about' },
  { label: '눈성형', href: '/eye' },
  { label: '코성형', href: '/nose' },
  { label: '안면거상', href: '/facelift' },
  { label: '커뮤니티', href: '/community' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            <div className={styles.topLinks}>
              <Link to="/community/notice">공지사항</Link>
              <span className={styles.divider}>|</span>
              <Link to="/events" className={styles.highlight}>이벤트</Link>
            </div>
            <a href="https://pf.kakao.com/_ySgVX" className={styles.kakaoBtn} target="_blank" rel="noopener noreferrer">
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
            <Link to="/" className={styles.logo}>
              <img
                src="https://alice4871277.aty.kr/1774005383242/image/resize_8458e95216dd4a7b8de2647db581460e.png"
                alt="왕실의원 로고"
                className={styles.logoImg}
              />
            </Link>

            {/* Desktop Nav */}
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.href} className={styles.navItem}>
                  <Link
                    to={item.href}
                    className={`${styles.navLink} ${location.pathname === item.href ? styles.active : ''}`}
                  >
                    {item.label}
                  </Link>
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
              <Link to={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>
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
