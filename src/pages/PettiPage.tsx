import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './PettiPage.module.css'
import { useT } from '../context/LocaleContext'

const HERO_BG = '/img/botox/banner.png'

export default function PettiPage() {
  const [loaded, setLoaded] = useState(false)
  const t = useT()
  const p = t.petti

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{p.meta.title}</title>
        <meta name="description" content={p.meta.desc} />
        <link rel="canonical" href={p.meta.canonical} />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src={HERO_BG} alt="" className={styles.heroImg} onLoad={() => setLoaded(true)} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent} ${loaded ? styles.visible : ''}`}>
          <div className={styles.heroText}>
            <p className={styles.heroLabel}>{p.hero.label}</p>
            <h1 className={styles.heroTitle}>
              {p.hero.title1}<br /><span>{p.hero.title2}</span>
            </h1>
            <div className={styles.heroInfoBoxes}>
              {p.infoBoxes.map((box) => (
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

      {/* 소개 섹션 */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.sectionTag}>
            <span className={styles.tagText}>{p.introSection.tagText}</span>
            <p className={styles.tagSub}>{p.introSection.tagSub}</p>
          </div>
          <h2 className={styles.sectionTitle}>{p.introSection.title1}<strong>{p.introSection.title2}</strong></h2>
          <div className={styles.cardGrid}>
            {p.introSection.cards.map((card, idx) => (
              <div key={idx} className={`${styles.card} ${card.reverse ? styles.cardReverse : ''}`}>
                <div className={styles.cardText}>
                  <p className={styles.cardLabel}>{card.label}</p>
                  <h3 className={styles.cardTitle}>
                    {card.titleTop}<br /><strong>{card.titleBottom}</strong>
                  </h3>
                  <div className={styles.cardDivider} />
                  <p className={styles.cardDesc}>
                    {card.desc.split('\n').map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))}
                  </p>
                </div>
                <div className={styles.cardImage}>
                  <img src={card.img} alt={card.titleBottom} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
