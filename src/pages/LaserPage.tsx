import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './LaserPage.module.css'
import { useT } from '../context/LocaleContext'

const HERO_BG = '/img/laser/banner.png'

export default function LaserPage() {
  const [loaded, setLoaded] = useState(false)
  const t = useT()
  const l = t.laser

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{l.meta.title}</title>
        <meta name="description" content={l.meta.desc} />
        <link rel="canonical" href={l.meta.canonical} />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src={HERO_BG} alt="" className={styles.heroImg} onLoad={() => setLoaded(true)} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent} ${loaded ? styles.visible : ''}`}>
          <div className={styles.heroText}>
            <p className={styles.heroLabel}>{l.hero.label}</p>
            <h1 className={styles.heroTitle}>
              {l.hero.title1}<br /><span>{l.hero.title2}</span>
            </h1>
            <div className={styles.heroInfoBoxes}>
              {l.infoBoxes.map((box) => (
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

      {/* 시술 목록 */}
      <section className={styles.treatSection}>
        <div className="container">
          <div className={styles.sectionTag}>
            <span className={styles.tagText}>{l.treatSection.tagText}</span>
            <p className={styles.tagSub}>{l.treatSection.tagSub}</p>
          </div>
          <h2 className={styles.sectionTitle}>{l.treatSection.title1}<strong>{l.treatSection.title2}</strong></h2>

          <div className={styles.cardGrid}>
            {l.treatSection.treatments.map((item) => (
              <div key={item.num} className={`${styles.card} ${item.reverse ? styles.cardReverse : ''}`}>
                <div className={styles.cardText}>
                  <p className={styles.cardNum}>{item.num}</p>
                  <h3 className={styles.cardName}>{item.name}</h3>
                  <div className={styles.cardDivider} />
                  <p className={styles.cardDesc}>{item.desc}</p>
                  <ul className={styles.cardPoints}>
                    {item.points.map((pt, i) => (
                      <li key={i}><span className={styles.pointDash}>—</span> {pt}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.cardImage}>
                  <img src={item.img} alt={item.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
