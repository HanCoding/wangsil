import { useEffect, useState } from 'react'
import styles from './FaceliftPage.module.css'
import KakaoButton from '../components/KakaoButton'

const HERO_BG = 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&w=1400&q=80'

const infoBoxes = [
  { label: '수술시간', value: '2~3시간' },
  { label: '마취방법', value: '수면마취' },
  { label: '회복기간', value: '7~14일' },
  { label: '내원이부', value: '2~3회' },
]

const features = [
  '중력에 의해 처진 피부와 근막층을 동시에 교정',
  '자연스러운 윤곽 유지, 표정의 자연스러움 보존',
  '티나지 않는 절개선, 오래가는 지속 효과',
]

const priceList = [
  { name: '안면거상 (전체)', price: '5,000,000원' },
  { name: '이마거상', price: '2,500,000원' },
  { name: '중안면거상', price: '3,000,000원' },
  { name: '목거상', price: '2,000,000원' },
]

const hexItems = [
  { name: '안면거상', desc: '처진 피부를 자연스럽게\n당겨 올리는 수술' },
  { name: '이마거상', desc: '이마와 눈썹 라인을\n자연스럽게 교정' },
  { name: '목거상', desc: '목선의 탄력을\n되돌리는 시술' },
]

export default function FaceliftPage() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={styles.page}>
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

      {/* 특징 */}
      <section className={styles.featureSection}>
        <div className="container">
          <div className={styles.sectionTag}>
            <span className={styles.tagText}>FACELIFT SURGERY</span>
            <p className={styles.tagSub}>PLASTIC SURGERY</p>
          </div>
          <h2 className={styles.sectionTitle}>자연스럽게 되돌리는 <strong>왕실 안면거상</strong></h2>
          <div className={styles.featureCard}>
            <div className={styles.featureCardHeader}>왕실의원 안면거상 시스템</div>
            <div className={styles.featureCardBody}>
              {features.map((f) => (
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
            <div className={styles.priceHeader}>10% 부가세 별도</div>
            <table className={styles.priceTable}>
              <tbody>
                {priceList.map((item) => (
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

      {/* 헥사곤 섹션 */}
      <section className={styles.hexSection}>
        <div className={styles.hexBgImg}>
          <img
            src="https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&w=1400&q=80"
            alt=""
          />
          <div className={styles.hexOverlay} />
        </div>
        <div className={`container ${styles.hexContent}`}>
          <div className={styles.hexRight}>
            <h2 className={styles.hexTitle}>
              자연스럽고 또렷한, <strong>매력적인 윤곽!</strong>
            </h2>
            <p className={styles.hexSub}>BEAUTIFUL PLASTIC SURGERY</p>
            <div className={styles.hexItems}>
              {hexItems.map((item) => (
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

      {/* Before & After */}
      <section className={styles.beforeAfterSection}>
        <div className="container">
          <h2 className={styles.baTitle}>Before &amp; After</h2>
          <p className={styles.baSub}>수술전후사진</p>
          <div className={styles.baTabs}>
            <button className={`${styles.baTab} ${styles.baTabActive}`}>안면거상</button>
            <button className={styles.baTab}>이마거상</button>
            <button className={styles.baTab}>목거상</button>
          </div>
          <div className={styles.baGrid}>
            <div className={styles.baCase}>
              <div className={styles.baCaseImgs}>
                <div className={styles.baCaseImgWrap}>
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&w=300&q=80" alt="Before" />
                  <span className={styles.baCaseLabel}>Before</span>
                </div>
                <div className={styles.baCaseImgWrap}>
                  <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&w=300&q=80" alt="After" />
                  <span className={styles.baCaseLabel}>After</span>
                </div>
              </div>
            </div>
            <div className={styles.baCase}>
              <div className={styles.baCaseImgs}>
                <div className={styles.baCaseImgWrap}>
                  <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&w=300&q=80" alt="Before" />
                  <span className={styles.baCaseLabel}>Before</span>
                </div>
                <div className={styles.baCaseImgWrap}>
                  <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&w=300&q=80" alt="After" />
                  <span className={styles.baCaseLabel}>After</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <KakaoButton size="lg" />
        </div>
      </section>
    </div>
  )
}
