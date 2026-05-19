import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './PettiPage.module.css'
import KakaoButton from '../components/KakaoButton'

const HERO_BG = '/img/botox/banner.png'

const infoBoxes = [
  { label: '시술시간', value: '10~20분' },
  { label: '즉시', value: '일상생활 가능' },
  { label: '1:1 맞춤', value: '디자인' },
  { label: '회복 부담', value: '최소' },
]

const cards = [
  {
    label: 'PREMIUM AFTER CARE SYSTEM',
    titleTop: '정밀한 디자인,',
    titleBottom: '자연스러운 결과',
    desc: '얼굴 비율과 근육, 볼륨 상태를 고려해 필요한 부위에만\n시술이 진행됩니다. 과한 변화가 아닌 자연스럽게 정리된 인상을\n만드는 것이 핵심입니다.',
    img: '/img/botox/1.jpg',
    reverse: false,
  },
  {
    label: 'PREMIUM AFTER CARE SYSTEM',
    titleTop: '시술 후까지',
    titleBottom: '이어지는 관리',
    desc: '시술 후 붓기, 유지기간, 주의사항까지 상세하게 안내드리며\n개인 상태에 맞는 관리 방법을 함께 안내해드립니다.',
    img: '/img/botox/2.jpg',
    reverse: true,
  },
  {
    label: 'PREMIUM AFTER CARE SYSTEM',
    titleTop: '부담 없이 시작하는',
    titleBottom: '쁘띠 시술',
    desc: '짧은 시술 시간과 빠른 회복으로 일상에 부담이 적으며\n처음 시술 받는 분들도 비교적 편하게 접근할 수 있습니다.',
    img: '/img/botox/3.jpg',
    reverse: false,
  },
]

export default function PettiPage() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={styles.page}>
      <Helmet>
        <title>쁘띠로 | 왕실의원 - 보톡스·필러 쁘띠 시술</title>
        <meta name="description" content="왕실의원 쁘띠 시술 클리닉. 보톡스·필러로 자연스럽게 달라지는 인상. 10~20분 시술, 즉시 일상생활 가능. 인천 부평 032-435-3571" />
        <link rel="canonical" href="https://wangsil.pages.dev/petti" />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src={HERO_BG} alt="" className={styles.heroImg} onLoad={() => setLoaded(true)} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent} ${loaded ? styles.visible : ''}`}>
          <div className={styles.heroText}>
            <p className={styles.heroLabel}>보톡스·필러로 과하지 않게, 내 얼굴에 맞는 변화 ————</p>
            <h1 className={styles.heroTitle}>
              자연스럽게 바뀌는 인상,<br /><span>부담없는 쁘띠 시술</span>
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

      {/* 소개 섹션 */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.sectionTag}>
            <span className={styles.tagText}>MULTIPLE PETTI SURGERY</span>
            <p className={styles.tagSub}>PLASTIC SURGERY</p>
          </div>
          <h2 className={styles.sectionTitle}>과하지 않게, 티 나지 않게 달라지는 <strong>쁘띠시술</strong></h2>
          <div className={styles.cardGrid}>
            {cards.map((card, idx) => (
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

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <KakaoButton size="lg" />
        </div>
      </section>
    </div>
  )
}
