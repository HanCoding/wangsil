import { useEffect, useState } from 'react'
import styles from './NosePage.module.css'
import KakaoButton from '../components/KakaoButton'

const HERO_BG = 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&w=1400&q=80'

const infoBoxes = [
  { label: '수술시간', value: '2시간' },
  { label: '마취방법', value: '국소마취' },
  { label: '회복기간', value: '2~3일' },
  { label: '내원이부', value: '1~2회' },
]

const features = [
  '얼굴형에 맞는 자연스러운 코 성형',
  '짧은 수술 시간, 빠른 회복 기간',
  '티나지 않는 자연스러움, 완벽한 옆라인',
]

const priceList = [
  { name: '콧대', price: '1,000,000원' },
  { name: '코골', price: '1,000,000원' },
  { name: '코평수, 들창코교정', price: '1,000,000원' },
  { name: '절골술', price: '2,000,000원' },
]

export default function NosePage() {
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
            <p className={styles.heroLabel}>이젠나도 연예인 코성형 ————</p>
            <h1 className={styles.heroTitle}>
              바비인형같은 <span>오똑한콧날</span>
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
            <span className={styles.tagText}>MULTIPLE EYES SURGERY</span>
            <p className={styles.tagSub}>PLASTIC SURGERY</p>
          </div>
          <h2 className={styles.sectionTitle}>수술한 티 안나는 <strong>바비인형 코성형</strong></h2>
          <div className={styles.featureCard}>
            <div className={styles.featureCardHeader}>1:1 맞춤 디자인 시스템</div>
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

      {/* 자연스러운 비율 */}
      <section className={styles.ratioSection}>
        <div className="container">
          <div className={styles.ratioInner}>
            <div className={styles.ratioSectionHeader}>
              <h2 className={styles.ratioTitle}>왕실의원 바비인형 코성형</h2>
              <div className={styles.ratioDivider} />
              <p className={styles.ratioQuote}>"얼굴의 중심, 콧대하나로 자신감을 세워줍니다"</p>
              <div className={styles.ratioIcon}>
                <svg viewBox="0 0 40 40" width="40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="#c9a96e" strokeWidth="1.5"/>
                  <path d="M14 20l4 4 8-8" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p className={styles.ratioDesc}>
                수술 전 3DCT로 정확하고 안전한 진단을 한 후 1:1 맞춤 상담 원하는 디자인을 최대한 반영합니다.<br />
                안심하고 믿을 수 있는 수술 ! 담당자 및 수술실 설명제를 실시하며 365일 24시간 전문 마취의가<br />
                직접 마취하며 수술 후 에프터 케어 서비스도 운영하고 있습니다.
              </p>
            </div>
            <div className={styles.ratioBanner}>
              <div className={styles.ratioBannerMain}>
                <img
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&w=800&q=80"
                  alt="자연스럽고 아름다운 비율"
                />
                <div className={styles.ratioBannerOverlay}>
                  <p className={styles.ratioBannerSub}>어디서나 자신있고 우아한 옆라인</p>
                  <p className={styles.ratioBannerTitle}>자연스럽고<br />아름다운 비율</p>
                </div>
              </div>
              <div className={styles.ratioBannerSubs}>
                <div className={styles.ratioBannerSubCard}>
                  <p>완벽한 옆라인<br />자연스러운 디자인<br />입체적 페이스라인</p>
                  <p className={styles.ratioBannerSubNote}>인체공학적 조건과 비율을 고려한<br />황금비율의 라인입니다.</p>
                </div>
                <div className={styles.ratioBannerImgCard}>
                  <img
                    src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&w=400&q=80"
                    alt="수술 장면"
                  />
                </div>
                <div className={styles.ratioBannerImgCard}>
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&w=400&q=80"
                    alt="자연스러운 결과"
                  />
                </div>
              </div>
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
            <button className={`${styles.baTab} ${styles.baTabActive}`}>바비인형 코수술</button>
            <button className={styles.baTab}>턱교정</button>
            <button className={styles.baTab}>안면윤곽</button>
          </div>
          <div className={styles.baGrid}>
            <div className={styles.baCase}>
              <div className={styles.baCaseImgs}>
                <div className={styles.baCaseImgWrap}>
                  <img src="https://images.unsplash.com/photo-1509041322357-8a3f9757a475?auto=format&w=300&q=80" alt="Before" />
                  <span className={styles.baCaseLabel}>Before</span>
                </div>
                <div className={styles.baCaseImgWrap}>
                  <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&w=300&q=80" alt="After" />
                  <span className={styles.baCaseLabel}>After</span>
                </div>
              </div>
            </div>
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
