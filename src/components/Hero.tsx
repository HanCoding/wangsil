import { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import { useT } from '../context/LocaleContext'

const HERO_BG = '/img/main/banner.png'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const t = useT()

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={styles.hero}>
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

      <div className={`container ${styles.content} ${loaded ? styles.visible : ''}`}>
        <div className={styles.textBlock}>
          <p className={styles.label}>{t.hero.label}</p>
          <h1 className={styles.title}>
            {t.hero.title.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>
          <div className={styles.titleDivider} />
          <p className={styles.description}>
            {t.hero.descPre}<strong>{t.hero.descStrong}</strong>{t.hero.descPost}<br />
            {t.hero.descSub}
          </p>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>SCROLL</span>
      </div>
    </section>
  )
}
