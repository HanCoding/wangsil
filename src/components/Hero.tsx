import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const HERO_BG = '/img/main/banner.png'

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
