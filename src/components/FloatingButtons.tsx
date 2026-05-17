import { useState } from 'react'
import styles from './FloatingButtons.module.css'

interface FloatItem {
  id: string
  label: string
  icon: React.ReactNode
  href: string
  variant?: 'default' | 'kakao' | 'blog' | 'phone'
}

const CalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M3 9h18M8 2v4M16 2v4"/>
    <rect x="7" y="12" width="3" height="3" rx="0.5"/>
    <rect x="14" y="12" width="3" height="3" rx="0.5"/>
  </svg>
)

const ChatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 2H4a2 2 0 0 0-2 2v14l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
    <path d="M8 9h8M8 13h5"/>
  </svg>
)

const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const KakaoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3C6.477 3 2 6.477 2 10.858c0 2.742 1.564 5.157 3.942 6.672L5.1 20.5a.5.5 0 0 0 .702.58l4.042-2.35A11.6 11.6 0 0 0 12 18.716c5.523 0 10-3.477 10-7.858S17.523 3 12 3z"/>
  </svg>
)

const BlogIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h16v2H4zm0 4h16v2H4zm0 4h10v2H4zm0 4h7v2H4z"/>
  </svg>
)

const MedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
    <path d="M12 6v6l4 2"/>
  </svg>
)

const floatItems: FloatItem[] = [
  { id: 'reserve', label: '온라인예약', icon: <CalIcon />, href: '/reservation' },
  { id: 'cost', label: '비용상담', icon: <ChatIcon />, href: '/cost' },
  { id: 'location', label: '오시는길', icon: <PinIcon />, href: '/location' },
  { id: 'phone', label: '전화상담예약', icon: <PhoneIcon />, href: 'tel:0324353571', variant: 'phone' },
  { id: 'kakao', label: '카카오톡', icon: <KakaoIcon />, href: 'https://pf.kakao.com/_ySgVX', variant: 'kakao' },
  { id: 'blog', label: '블로그', icon: <BlogIcon />, href: 'https://blog.naver.com', variant: 'blog' },
  { id: 'doctor', label: '전문의', icon: <MedIcon />, href: '/doctor' },
]

export default function FloatingButtons() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className={styles.floatContainer}>
      {floatItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={`${styles.floatBtn} ${styles[`variant_${item.variant ?? 'default'}`]}`}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
          aria-label={item.label}
        >
          <span className={styles.floatIcon}>{item.icon}</span>
          <span className={`${styles.floatLabel} ${hovered === item.id ? styles.labelVisible : ''}`}>
            {item.label}
          </span>
        </a>
      ))}
    </div>
  )
}
