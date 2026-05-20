import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './EyePage.module.css'
import { useT } from '../context/LocaleContext'

const HERO_BG = '/img/eye/banner.png'

export default function EyePage() {
  const [loaded, setLoaded] = useState(false)
  const t = useT()
  const e = t.eye

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{e.meta.title}</title>
        <meta name="description" content={e.meta.desc} />
        <link rel="canonical" href={e.meta.canonical} />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src={HERO_BG} alt="" className={styles.heroImg} onLoad={() => setLoaded(true)} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent} ${loaded ? styles.visible : ''}`}>
          <div className={styles.heroText}>
            <p className={styles.heroLabel}>{e.hero.label}</p>
            <h1 className={styles.heroTitle}>
              <span>{e.hero.title1}</span>{e.hero.title2}<span>{e.hero.title3}</span>{e.hero.title4}
            </h1>
            <div className={styles.heroInfoBoxes}>
              {e.infoBoxes.map((box) => (
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

      {/* 시술 종류 */}
      <section className={styles.surgerySection}>
        <div className="container">
          <div className={styles.sectionTag}>
            <span className={styles.tagText}>{e.surgerySection.tagText}</span>
            <p className={styles.tagSub}>{e.surgerySection.tagSub}</p>
          </div>
          <h2 className={styles.sectionTitle}>{e.surgerySection.title1}<strong>{e.surgerySection.title2}</strong></h2>
          <div className={styles.surgeryTypes}>
            {e.surgeryTypes.map((item, i) => (
              <>
                <div key={item.name} className={styles.surgeryCard}>
                  <div className={styles.surgeryCircle}>
                    <img src={item.img} alt={item.name} />
                  </div>
                  <h3 className={styles.surgeryName}>{item.name}</h3>
                  <p className={styles.surgeryDesc}>{item.desc}</p>
                </div>
                {i < e.surgeryTypes.length - 1 && (
                  <span key={`plus-${i}`} className={styles.plus}>+</span>
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* 가격표 */}
      <section className={styles.priceSection}>
        <div className="container">
          <h2 className={styles.priceTitle}>
            {e.priceSection.title}
            <span className={styles.priceUnderline} />
          </h2>
          <div className={styles.priceGrid}>
            {e.priceSection.items.map((item) => (
              <div key={item.name} className={styles.priceRow}>
                <span className={styles.priceName}>{item.name}</span>
                <span className={styles.priceLine} />
                <span className={styles.priceValue}>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 눈매교정 카드 */}
      <section className={styles.featureSection}>
        <div className="container">
          <div className={styles.featureCard}>
            <div className={styles.featureCardLeft}>
              <h3 className={styles.featureCardTitle}>{e.featureCard.title}</h3>
              <p className={styles.featureCardDesc}>
                {e.featureCard.descPre.split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
                <strong>{e.featureCard.descStrong}</strong>{e.featureCard.descPost}
              </p>
              <p className={styles.featureCardNote}>
                {e.featureCard.note.split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </p>
            </div>
            <div className={styles.featureCardRight}>
              <img src="/img/eye/4.png" alt={e.featureCard.title} />
            </div>
          </div>
        </div>
      </section>

      {/* 헥사곤 섹션 */}
      <section className={styles.hexSection}>
        <div className={styles.hexBgImg}>
          <img
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&w=1400&q=80"
            alt=""
          />
          <div className={styles.hexOverlay} />
        </div>
        <div className={`container ${styles.hexContent}`}>
          <div className={styles.hexRight}>
            <h2 className={styles.hexTitle}>
              {e.hexSection.title1}<strong>{e.hexSection.title2}</strong>
            </h2>
            <p className={styles.hexSub}>{e.hexSection.sub}</p>
            <div className={styles.hexItems}>
              {e.hexSection.items.map((item) => (
                <div key={item.name} className={styles.hexItem}>
                  <div className={styles.hexShape}>
                    <span className={styles.hexDash}>—</span>
                    <p className={styles.hexItemName}>{item.name}</p>
                    <p className={styles.hexItemDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 리얼 셀스타그램 */}
      <section className={styles.selfieSection}>
        <div className="container">
          <div className={styles.selfieCard}>
            <div className={styles.selfieLeft}>
              <p className={styles.selfieCategory}>{e.selfieSection.category}</p>
              <h3 className={styles.selfieTitle}>{e.selfieSection.title}</h3>
              <p className={styles.selfieDesc}>
                {e.selfieSection.desc.split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </p>
              <div className={styles.selfieHashtags}>
                <span>{e.selfieSection.tag1}</span>
                <span>{e.selfieSection.tag2}</span>
              </div>
            </div>
            <div className={styles.selfieRight}>
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&w=400&q=80"
                alt={e.selfieSection.title}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
