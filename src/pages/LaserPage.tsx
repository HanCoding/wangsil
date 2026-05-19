import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './LaserPage.module.css'

const HERO_BG = '/img/laser/banner.png'

const infoBoxes = [
  { label: '시술시간', value: '20~40분' },
  { label: '마취방법', value: '연고마취' },
  { label: '즉시', value: '일상생활 가능' },
  { label: '회복 부담', value: '최소' },
]

const treatments = [
  {
    num: '01',
    name: '프락셀 레이저',
    desc: '피부 표면에 미세한 레이저 빔을 조사하여 손상된 피부 조직을 재생시키는 시술입니다. 피부 속 깊은 층까지 자극하여 콜라겐 재생을 유도합니다.',
    points: ['잔주름·모공 개선', '흉터·색소 치료', '피부 탄력 강화'],
    img: '/img/laser/1.jpg',
    reverse: false,
  },
  {
    num: '02',
    name: '피코 레이저',
    desc: '초단파 레이저로 색소 입자를 잘게 분쇄하여 기미, 잡티, 문신 제거에 효과적인 시술입니다. 주변 조직 손상 없이 색소만 선택적으로 파괴합니다.',
    points: ['기미·잡티 제거', '색소 병변 개선', '피부 미백 효과'],
    img: '/img/laser/2.jpg',
    reverse: true,
  },
  {
    num: '03',
    name: 'IPL 시술',
    desc: '다양한 파장의 빛을 이용해 혈관, 색소, 피부 결 등을 동시에 개선하는 복합 광치료 시술입니다. 한 번의 시술로 다양한 피부 고민을 함께 해결합니다.',
    points: ['모세혈관 확장 개선', '전반적인 피부톤 균일화', '여드름 흔적·홍조 개선'],
    img: '/img/laser/3.jpg',
    reverse: false,
  },
  {
    num: '04',
    name: '토닝 레이저',
    desc: '피부를 균일하게 정돈하여 맑고 투명한 피부를 완성하는 색소 관리 시술입니다. 반복 시술이 가능한 안전한 레이저로 꾸준한 피부 관리에 적합합니다.',
    points: ['기미·색소침착 개선', '피부톤 균일화', '맑고 투명한 피부 완성', '반복 시술 가능한 안전한 레이저'],
    img: '/img/laser/4.jpg',
    reverse: true,
  },
  {
    num: '05',
    name: 'CO2 레이저',
    desc: '점, 비립종, 사마귀 등 작은 돌출 병변을 정교하게 제거하는 국소 레이저 시술입니다. 주변 피부 손상을 최소화하면서 병변만을 정밀하게 타겟팅합니다.',
    points: ['점 제거 — 크고 작은 점을 정밀하게 제거', '비립종 — 피부 표면의 작은 각질 낭종 제거', '사마귀 — 바이러스성 사마귀의 효과적 제거', '주변 피부 손상 최소화'],
    img: '/img/laser/5.jpg',
    reverse: false,
  },
]

export default function LaserPage() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={styles.page}>
      <Helmet>
        <title>레이저 시술 | 왕실의원 - 프락셀·피코·IPL·CO2 레이저</title>
        <meta name="description" content="왕실의원 레이저 시술 클리닉. 프락셀·피코·IPL·토닝·CO2 레이저. 기미·잡티·점 제거, 피부 재생. 연고마취, 즉시 일상생활 가능. 인천 부평 032-435-3571" />
        <link rel="canonical" href="https://wangsil.pages.dev/laser" />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src={HERO_BG} alt="" className={styles.heroImg} onLoad={() => setLoaded(true)} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent} ${loaded ? styles.visible : ''}`}>
          <div className={styles.heroText}>
            <p className={styles.heroLabel}>피부를 맑고 투명하게, 왕실의원 레이저 ————</p>
            <h1 className={styles.heroTitle}>
              자연스럽게 되찾는<br /><span>건강하고 맑은 피부</span>
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

      {/* 시술 목록 */}
      <section className={styles.treatSection}>
        <div className="container">
          <div className={styles.sectionTag}>
            <span className={styles.tagText}>LASER TREATMENT</span>
            <p className={styles.tagSub}>PLASTIC SURGERY</p>
          </div>
          <h2 className={styles.sectionTitle}>피부를 맑고 투명하게, <strong>레이저 시술</strong></h2>

          <div className={styles.cardGrid}>
            {treatments.map((item) => (
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
