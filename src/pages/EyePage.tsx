import { useEffect, useState } from 'react'
import styles from './EyePage.module.css'
import KakaoButton from '../components/KakaoButton'

const HERO_BG = 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&w=1400&q=80'

const infoBoxes = [
  { icon: '⏱', label: '수술시간', value: '30분' },
  { icon: '💉', label: '마취방법', value: '국소마취' },
  { icon: '🛏', label: '회복기간', value: '2~3일' },
  { icon: '📋', label: '내원이부', value: '1~2회' },
]

const surgeryTypes = [
  {
    name: '쌍커풀',
    desc: '풀리지 않는 자연스러운 매몰법\n눈감아도 티안나는 절개법',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&w=300&q=80',
  },
  {
    name: '트임성형',
    desc: '답답하고 좁은 눈매교정\n자연스러운 트임',
    img: 'https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&w=300&q=80',
  },
  {
    name: '눈매교정',
    desc: '또렷하고 선명한 이미지\n답답한 눈을 밝게',
    img: 'https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?auto=format&w=300&q=80',
  },
]

const priceList = [
  { name: '하안검수술', price: '100만원' },
  { name: '눈썹거상술', price: '100만원' },
  { name: '지방재배치', price: '50만원' },
  { name: '절개쌍커풀', price: '110만원' },
  { name: '앞트임', price: '70만원' },
  { name: '외안각트임', price: '70만원' },
  { name: '듀얼트임', price: '80만원' },
  { name: '눈매교정수술', price: '150만원' },
  { name: '애교살수술', price: '120만원' },
  { name: '눈수술 후 뒤집힌 눈', price: '450만원' },
]

const hexItems = [
  { name: '쌍커풀', desc: '풀리지 않는 자연스러운 매몰법\n눈감아도 티안나는 절개법' },
  { name: '트임성형', desc: '답답하고 좁은 눈매교정\n자연스러운 트임' },
  { name: '눈매교정', desc: '또렷하고 선명한 이미지\n답답한 눈을 밝게' },
]

export default function EyePage() {
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
            <p className={styles.heroLabel}>자연스러운 쌍커풀 라인 ————</p>
            <h1 className={styles.heroTitle}>
              <span>또렷</span>하고 <span>자연스러운</span> 눈매
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

      {/* 시술 종류 */}
      <section className={styles.surgerySection}>
        <div className="container">
          <div className={styles.sectionTag}>
            <span className={styles.tagText}>MULTIPLE EYES SURGERY</span>
            <p className={styles.tagSub}>PLASTIC SURGERY</p>
          </div>
          <h2 className={styles.sectionTitle}>한번의 수술, <strong>매력적인 눈매!</strong></h2>
          <div className={styles.surgeryTypes}>
            {surgeryTypes.map((item, i) => (
              <>
                <div key={item.name} className={styles.surgeryCard}>
                  <div className={styles.surgeryCircle}>
                    <img src={item.img} alt={item.name} />
                  </div>
                  <h3 className={styles.surgeryName}>{item.name}</h3>
                  <p className={styles.surgeryDesc}>{item.desc}</p>
                </div>
                {i < surgeryTypes.length - 1 && (
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
            왕실에서 눈 예뻐지기
            <span className={styles.priceUnderline} />
          </h2>
          <div className={styles.priceGrid}>
            {priceList.map((item) => (
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
              <h3 className={styles.featureCardTitle}>컨트롤 눈매교정</h3>
              <p className={styles.featureCardDesc}>
                원래 내눈같은 자연스러운 눈매교정으로<br />
                <strong>선명하고 또렷한 눈매</strong> 완성
              </p>
              <p className={styles.featureCardNote}>
                짧은 수술시간, 수술 후<br />회복기간 없이 바로 일상생활 가능!
              </p>
              <KakaoButton size="md" />
            </div>
            <div className={styles.featureCardRight}>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&w=500&q=80"
                alt="눈매교정 전후"
              />
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
              자연스럽고 또렷한, <strong>매력적인 눈매!</strong>
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

      {/* 리얼 셀스타그램 */}
      <section className={styles.selfieSection}>
        <div className="container">
          <div className={styles.selfieCard}>
            <div className={styles.selfieLeft}>
              <p className={styles.selfieCategory}>눈성형</p>
              <h3 className={styles.selfieTitle}>리얼 셀스타그램!</h3>
              <p className={styles.selfieDesc}>
                왕실의원에서 수술한 고객님들이<br />직접 올려주시는 셀스타그램!
              </p>
              <div className={styles.selfieHashtags}>
                <span>#입체적인 얼굴</span>
                <span>#자연스러운 미소</span>
              </div>
            </div>
            <div className={styles.selfieRight}>
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&w=400&q=80"
                alt="고객 셀스타그램"
              />
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
