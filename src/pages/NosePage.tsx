import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './NosePage.module.css'
import { useT } from '../context/LocaleContext'

const HERO_BG = '/img/nose/banner.png'

export default function NosePage() {
  const [loaded, setLoaded] = useState(false)
  const t = useT()
  const n = t.nose

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{n.meta.title}</title>
        <meta name="description" content={n.meta.desc} />
        <link rel="canonical" href={n.meta.canonical} />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src={HERO_BG} alt="" className={styles.heroImg} onLoad={() => setLoaded(true)} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent} ${loaded ? styles.visible : ''}`}>
          <div className={styles.heroText}>
            <p className={styles.heroLabel}>{n.hero.label}</p>
            <h1 className={styles.heroTitle}>
              {n.hero.title1}<span>{n.hero.title2}</span>
            </h1>
            <div className={styles.heroInfoBoxes}>
              {n.infoBoxes.map((box) => (
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

      {/* 특징 */}
      <section className={styles.featureSection}>
        <div className="container">
          <div className={styles.sectionTag}>
            <span className={styles.tagText}>{n.featureSection.tagText}</span>
            <p className={styles.tagSub}>{n.featureSection.tagSub}</p>
          </div>
          <h2 className={styles.sectionTitle}>{n.featureSection.title1}<strong>{n.featureSection.title2}</strong></h2>
          <div className={styles.featureCard}>
            <div className={styles.featureCardHeader}>{n.featureSection.cardHeader}</div>
            <div className={styles.featureCardBody}>
              {n.featureSection.features.map((f) => (
                <p key={f} className={styles.featureItem}>
                  <span className={styles.checkIcon}>☑</span> {f}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 가격표 */}
      <section className={styles.priceSection}>
        <div className="container">
          <div className={styles.priceTableWrap}>
            <div className={styles.priceHeader}>{n.priceSection.vatNote}</div>
            <table className={styles.priceTable}>
              <tbody>
                {n.priceSection.items.map((item) => (
                  <tr key={item.name}>
                    <td className={styles.priceName}>{item.name}</td>
                    <td className={styles.priceValue}>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 자연스러운 비율 */}
      <section className={styles.ratioSection}>
        <div className="container">
          <div className={styles.ratioInner}>
            <div className={styles.ratioSectionHeader}>
              <h2 className={styles.ratioTitle}>{n.ratioSection.title}</h2>
              <div className={styles.ratioDivider} />
              <p className={styles.ratioQuote}>{n.ratioSection.quote}</p>
              <div className={styles.ratioIcon}>
                <svg viewBox="0 0 40 40" width="40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="#c9a96e" strokeWidth="1.5"/>
                  <path d="M14 20l4 4 8-8" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p className={styles.ratioDesc}>
                {n.ratioSection.desc.split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </p>
            </div>
            <div className={styles.ratioBanner}>
              <img src="/img/nose/2.png" alt={n.ratioSection.bannerTitle.replace('\n', ' ')} className={styles.ratioBannerImg} />
              <div className={styles.ratioBannerOverlay}>
                <p className={styles.ratioBannerSub}>{n.ratioSection.bannerSub}</p>
                <p className={styles.ratioBannerTitle}>
                  {n.ratioSection.bannerTitle.split('\n').map((line, i, arr) => (
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  ))}
                </p>
                <p className={styles.ratioBannerBullets}>
                  {n.ratioSection.bannerBullets.split('\n').map((line, i, arr) => (
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  ))}
                </p>
                <p className={styles.ratioBannerSubNote}>
                  {n.ratioSection.bannerSubNote.split('\n').map((line, i, arr) => (
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className={styles.beforeAfterSection}>
        <div className="container">
          <h2 className={styles.baTitle}>{n.beforeAfter.title}</h2>
          <p className={styles.baSub}>{n.beforeAfter.sub}</p>
          <div className={styles.baTabs}>
            <button className={`${styles.baTab} ${styles.baTabActive}`}>{n.beforeAfter.tab1}</button>
            <button className={styles.baTab}>{n.beforeAfter.tab2}</button>
            <button className={styles.baTab}>{n.beforeAfter.tab3}</button>
          </div>
          <div className={styles.baGrid}>
            <div className={styles.baCaseImgWrap}>
              <img src="/img/nose/before_1.png" alt="Before" />
              <span className={styles.baCaseLabel}>Before</span>
            </div>
            <div className={styles.baCaseImgWrap}>
              <img src="/img/nose/after_1.png" alt="After" />
              <span className={styles.baCaseLabel}>After</span>
            </div>
            <div className={styles.baCaseImgWrap}>
              <img src="/img/nose/before_2.png" alt="Before" />
              <span className={styles.baCaseLabel}>Before</span>
            </div>
            <div className={styles.baCaseImgWrap}>
              <img src="/img/nose/after_2.png" alt="After" />
              <span className={styles.baCaseLabel}>After</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
