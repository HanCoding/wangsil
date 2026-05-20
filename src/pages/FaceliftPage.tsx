import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './FaceliftPage.module.css'
import TreatmentSection from '../components/TreatmentSection'
import { useT } from '../context/LocaleContext'

const HERO_BG = '/img/faselift/banner.png'

export default function FaceliftPage() {
  const [loaded, setLoaded] = useState(false)
  const t = useT()
  const f = t.facelift

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{f.meta.title}</title>
        <meta name="description" content={f.meta.desc} />
        <link rel="canonical" href={f.meta.canonical} />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src={HERO_BG} alt="" className={styles.heroImg} onLoad={() => setLoaded(true)} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent} ${loaded ? styles.visible : ''}`}>
          <div className={styles.heroText}>
            <p className={styles.heroLabel}>{f.hero.label}</p>
            <h1 className={styles.heroTitle}>
              {f.hero.title1}<span>{f.hero.title2}</span>{f.hero.title3}
            </h1>
            <div className={styles.heroInfoBoxes}>
              {f.infoBoxes.map((box) => (
                <div key={box.label} className={styles.infoBox}>
                  <p className={styles.infoBoxLabel}>{box.label}</p>
                  <p className={styles.infoBoxValue}>{box.value}</p>
                </div>
              ))}
            </div>
            <p className={styles.heroCaution}>{t.common.caution}</p>
          </div>
        </div>
      </section>

      <TreatmentSection />
    </div>
  )
}
