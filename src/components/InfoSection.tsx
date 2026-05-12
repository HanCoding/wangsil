import { useRef, useEffect, useState } from 'react'
import styles from './InfoSection.module.css'

interface InfoCard {
  id: string
  label: string
  labelEn: string
  icon: React.ReactNode
  href: string
}

const CalendarIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="6" width="28" height="26" rx="2" />
    <path d="M4 13h28M12 3v6M24 3v6" />
    <rect x="9" y="18" width="4" height="4" rx="0.5" />
    <rect x="16" y="18" width="4" height="4" rx="0.5" />
    <rect x="23" y="18" width="4" height="4" rx="0.5" />
    <rect x="9" y="25" width="4" height="4" rx="0.5" />
    <rect x="16" y="25" width="4" height="4" rx="0.5" />
  </svg>
)

const GiftIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="12" width="28" height="6" rx="1" />
    <rect x="6" y="18" width="24" height="14" rx="1" />
    <path d="M18 12v20" />
    <path d="M18 12c0 0-4-8 0-8s4 8 0 8z" />
    <path d="M18 12c0 0 4-8 0-8" />
  </svg>
)

const PinIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="18" cy="16" r="7" />
    <path d="M18 23c0 0-9 7-9 12h18c0-5-9-12-9-12z" />
    <circle cx="18" cy="16" r="2.5" fill="currentColor" stroke="none" opacity="0.4" />
  </svg>
)

const ChatIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="5" width="30" height="22" rx="3" />
    <path d="M10 28l-4 5 6-2" />
    <path d="M10 14h16M10 20h10" />
  </svg>
)

const infoCards: InfoCard[] = [
  { id: 'cost', label: '비용문의/상담', labelEn: 'COST INFORMATION', icon: <CalendarIcon />, href: '/cost' },
  { id: 'events', label: '이벤트', labelEn: 'EVENT', icon: <GiftIcon />, href: '/events' },
  { id: 'location', label: '오시는길', labelEn: 'LOCATION', icon: <PinIcon />, href: '/location' },
  { id: 'community', label: '커뮤니티', labelEn: 'COMMUNITY', icon: <ChatIcon />, href: '/community' },
]

function useIntersection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, visible }
}

export default function InfoSection() {
  const { ref, visible } = useIntersection()

  return (
    <section className={styles.section} ref={ref}>
      {/* Header */}
      <div className={`${styles.header} ${visible ? styles.visible : ''}`}>
        <h2 className="section-title">INFORMATION</h2>
        <p className="section-subtitle">왕실의원 기본정보</p>
        <div className="section-divider"><div className="section-divider-dot" /></div>
      </div>

      {/* Cards Grid */}
      <div className={styles.grid}>
        {infoCards.map((card, idx) => (
          <a
            key={card.id}
            href={card.href}
            className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
            style={{ transitionDelay: `${0.1 + idx * 0.08}s` }}
          >
            <div className={styles.cardInner}>
              <div className={styles.iconWrap}>{card.icon}</div>
              <p className={styles.cardLabelKo}>{card.label}</p>
              <p className={styles.cardLabelEn}>{card.labelEn}</p>
            </div>
            <div className={styles.hoverLine} />
          </a>
        ))}
      </div>
    </section>
  )
}
