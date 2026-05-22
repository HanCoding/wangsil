import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './AboutPage.module.css'
import { useT } from '../context/LocaleContext'

const HERO_BG = '/img/intro/banner.png'

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false)
  const t = useT()

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{t.about.meta.title}</title>
        <meta name="description" content={t.about.meta.desc} />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src={HERO_BG} alt="" className={styles.heroImg} onLoad={() => setLoaded(true)} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent} ${loaded ? styles.visible : ''}`}>
          <div className={styles.heroText}>
            <p className={styles.heroLabel}>{t.about.hero.label}</p>
            <h1 className={styles.heroTitle}>
              {t.about.hero.title.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h1>
            <div className={styles.heroDivider} />
            <div className={styles.heroQuotes}>
              <p>{t.about.hero.quote1}</p>
              <p>{t.about.hero.quote2}</p>
              <p>{t.about.hero.quote3}</p>
              <p>{t.about.hero.quote4}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 원장 인사말 */}
      <section className={styles.greetSection}>
        <div className="container">
          <div className={styles.greetInner}>
            <div className={styles.greetLeft}>
              <p className={styles.sectionEng}>{t.about.greet.eng}</p>
              <h2 className={styles.greetHeadline}>{t.about.greet.headline}</h2>
              <p className={styles.greetSubtitle}>{t.about.greet.subtitle}</p>
              <div className={styles.greetDivider} />
              <div className={styles.greetBody}>
                <p>{t.about.greet.p1}</p>
                <p>{t.about.greet.p2}</p>
                <p>{t.about.greet.p3}</p>
                <p>{t.about.greet.p4}</p>
                <p>{t.about.greet.p5}</p>
                <p className={styles.closing}>
                  {t.about.greet.closing.split('\n').map((line, i, arr) => (
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  ))}
                </p>
                <p className={styles.signature}>{t.about.greet.signature}</p>
              </div>
            </div>
            <div className={styles.greetRight}>
              <div className={styles.safetyBadge}>
                <p className={styles.badgeKor}>{t.about.greet.badgeKor}</p>
                <p className={styles.badgeEng}>{t.about.greet.badgeEng}</p>
              </div>
              <img
                src="/img/profile/profile.png"
                alt="왕실의원 원장"
                className={styles.greetImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 안전시스템 */}
      <section className={styles.safetySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.safetySectionTitle}>
              {t.about.safety.sectionTitle}<strong>{t.about.safety.sectionTitleStrong}</strong>
            </h2>
            <p className={styles.safetySectionEng}>{t.about.safety.sectionEng}</p>
          </div>
          <div className={styles.safetyGrid}>
            {t.about.safety.items.map((item) => (
              <div key={item.num} className={styles.safetyCard}>
                <div className={styles.safetyImgWrap}>
                  <img src={item.img} alt={item.title} loading="lazy" />
                </div>
                <div className={styles.safetyCardBody}>
                  <span className={styles.safetyNum}>{item.num}</span>
                  <h3 className={styles.safetyTitle}>{item.title}</h3>
                  <p className={styles.safetyDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
