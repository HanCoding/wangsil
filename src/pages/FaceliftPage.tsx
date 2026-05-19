import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './FaceliftPage.module.css'
import TreatmentSection from '../components/TreatmentSection'

const HERO_BG = '/img/faselift/banner.png'

const infoBoxes = [
  { label: '수술시간', value: '2~3시간' },
  { label: '마취방법', value: '수면마취' },
  { label: '회복기간', value: '7~14일' },
  { label: '내원이부', value: '2~3회' },
]

export default function FaceliftPage() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={styles.page}>
      <Helmet>
        <title>안면거상 | 왕실의원 - 이마거상·중안면거상·목거상</title>
        <meta name="description" content="왕실의원 안면거상 전문 클리닉. 처진 피부와 근막층 동시 교정. 안면거상·이마거상·중안면거상·목거상. 자연스러운 윤곽 회복. 인천 부평 032-435-3571" />
        <link rel="canonical" href="https://wangsil.pages.dev/facelift" />
      </Helmet>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src={HERO_BG} alt="" className={styles.heroImg} onLoad={() => setLoaded(true)} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent} ${loaded ? styles.visible : ''}`}>
          <div className={styles.heroText}>
            <p className={styles.heroLabel}>중력을 거스르는 안면거상 ————</p>
            <h1 className={styles.heroTitle}>
              젊고 <span>탄탄한</span> 윤곽라인
            </h1>
            <div className={styles.heroInfoBoxes}>
              {infoBoxes.map((box) => (
                <div key={box.label} className={styles.infoBox}>
                  <p className={styles.infoBoxLabel}>{box.label}</p>
                  <p className={styles.infoBoxValue}>{box.value}</p>
                </div>
              ))}
            </div>
            <p className={styles.heroCaution}>* 개인에 따라 차이가 있을 수 있습니다. 자세한 문의사항은 개별적으로 문의해주세요.</p>
          </div>
        </div>
      </section>

      <TreatmentSection />
    </div>
  )
}
