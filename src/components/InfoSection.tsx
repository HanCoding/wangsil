import { useRef, useEffect, useState } from 'react'
import styles from './InfoSection.module.css'
import { useT } from '../context/LocaleContext'
import { useLocalePath } from '../hooks/useLocalePath'

const KakaoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" stroke="none">
    <path d="M18 6C10.82 6 5 10.59 5 16.22c0 3.59 2.27 6.74 5.7 8.61l-1.25 4.6a.4.4 0 0 0 .6.45l5.32-3.08c.85.1 1.72.15 2.63.15 7.18 0 13-4.59 13-10.23C31 10.59 25.18 6 18 6z" />
  </svg>
)

const PinIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="18" cy="16" r="7" />
    <path d="M18 23c0 0-9 7-9 12h18c0-5-9-12-9-12z" />
    <circle cx="18" cy="16" r="2.5" fill="currentColor" stroke="none" opacity="0.4" />
  </svg>
)

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
  const t = useT()
  const localePath = useLocalePath()

  const infoCards = [
    { id: 'kakao', label: t.info.kakaoLabel, labelEn: 'KAKAO TALK', icon: <KakaoIcon />, href: 'https://pf.kakao.com/_ySgVX', external: true },
    { id: 'location', label: t.info.locationLabel, labelEn: 'LOCATION', icon: <PinIcon />, href: localePath('/community') },
  ]

  return (
    <section className={styles.section} ref={ref}>
      <div className={`${styles.header} ${visible ? styles.visible : ''}`}>
        <h2 className="section-title">{t.info.sectionTitle}</h2>
        <p className="section-subtitle">{t.info.sectionSubtitle}</p>
        <div className="section-divider"><div className="section-divider-dot" /></div>
      </div>

      <div className={styles.grid}>
        {infoCards.map((card, idx) => (
          <a
            key={card.id}
            href={card.href}
            className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
            style={{ transitionDelay: `${0.1 + idx * 0.08}s` }}
            {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
