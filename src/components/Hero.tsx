import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

// Placeholder hero image (gold gradient as fallback)
const HERO_BG = 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1600&q=80&fit=crop'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.bgWrapper}>
        <img
          src={HERO_BG}
          alt="왕실의원 메인 배너"
          className={styles.bgImage}
          onLoad={() => setLoaded(true)}
        />
        <div className={styles.bgOverlay} />
        <div className={styles.bgPattern} />
      </div>

      {/* Content */}
      <div className={`container ${styles.content} ${loaded ? styles.visible : ''}`}>
        <div className={styles.textBlock}>
          <p className={styles.label}>PREMIUM MEDICAL CLINIC</p>
          <h1 className={styles.title}>
            15년 경력,<br />
            5만건 이상의<br />
            시술경험을 보유한 의료진
          </h1>
          <div className={styles.titleDivider} />
          <p className={styles.description}>
            대표원장이 <strong>상담부터 수술, 사후관리</strong>까지 직접 담당합니다.<br />
            의료진의 실력을 직접 느껴보세요
          </p>
          <div className={styles.ctaGroup}>
            <a href="/about" className={styles.ctaPrimary}>병원 소개 보기</a>
            <a href="https://pf.kakao.com" className={styles.ctaKakao} target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.477 2 10.858c0 2.742 1.564 5.157 3.942 6.672L5.1 20.5a.5.5 0 0 0 .702.58l4.042-2.35A11.6 11.6 0 0 0 12 18.716c5.523 0 10-3.477 10-7.858S17.523 3 12 3z"/>
              </svg>
              카카오 상담
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>SCROLL</span>
      </div>
    </section>
  )
}
