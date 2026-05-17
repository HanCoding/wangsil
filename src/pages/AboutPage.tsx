import { useEffect, useState } from 'react'
import styles from './AboutPage.module.css'

const HERO_BG = 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&w=1400&q=80'

const safetyItems = [
  {
    num: '01',
    title: '전문의가 직접하는 마취',
    desc: '전문 마취의가 1:1 직접 마취하여 환자의 상태를 계속 평가하여 안전하고 체계적인 시스템으로 진행됩니다.',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&w=700&q=80',
  },
  {
    num: '02',
    title: '첨단의료장비 보유',
    desc: '최첨단 의료장비와 안전한 수술 환경을 갖추어 환자의 상태를 계속 평가하고 안전하고 체계적인 시스템으로 진행됩니다.',
    img: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&w=700&q=80',
  },
  {
    num: '03',
    title: '전문간호사 의료서비스',
    desc: '전문 마취의가 1:1 직접 마취하여 환자의 상태를 계속 평가하여 안전하고 체계적인 시스템으로 진행됩니다.',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&w=700&q=80',
  },
  {
    num: '04',
    title: '수술 후 토탈케어 서비스',
    desc: '전문 마취의가 1:1 직접 마취하여 환자의 상태를 계속 평가하여 안전하고 체계적인 시스템으로 진행됩니다.',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&w=700&q=80',
  },
]

export default function AboutPage() {
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
            <p className={styles.heroLabel}>결과로 증명하는 의료진의 집중력</p>
            <h1 className={styles.heroTitle}>
              토탈 뷰티<br />메디컬그룹
            </h1>
            <div className={styles.heroDivider} />
            <div className={styles.heroQuotes}>
              <p>"환자 안전을 최우선으로, 집도의가 끝까지 책임집니다"</p>
              <p>1:1 전담 시스템으로 완성되는 결과</p>
              <p>"섬세한 손끝에서 완성되는 변화"</p>
              <p>자연스러운 아름다움을 설계합니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* 원장 인사말 */}
      <section className={styles.greetSection}>
        <div className="container">
          <div className={styles.greetInner}>
            <div className={styles.greetLeft}>
              <p className={styles.sectionEng}>PLASTIC SURGERY WANGSIL</p>
              <h2 className={styles.greetHeadline}>의료진 병원 소개</h2>
              <p className={styles.greetSubtitle}>
                "최고의 기술과 진심으로 환자를 마주합니다"
              </p>
              <div className={styles.greetDivider} />
              <div className={styles.greetBody}>
                <p>안녕하세요.</p>
                <p>저희 병원을 찾아주시는 모든 분들은 단순한 외모의 변화를 넘어, 자신감과 삶의 만족도를 높이기 위한 소중한 결정을 하고 계신다고 생각합니다. 그렇기 때문에 저는 한 분 한 분의 이야기에 귀 기울이고, 각자의 개성과 아름다움을 존중하는 맞춤 진료를 가장 중요하게 여기고 있습니다.</p>
                <p>자연스럽게 젊어지는 변화는 누구에게나 흥겨지만, 그 변화를 어떻게 받아들이고 개선하느냐는 전혀 다른 결과를 만듭니다. 저는 수많은 임상 경험을 통해 단순히 '리프팅'이 단순한 시술이 아닌, 얼굴 전체의 균형과 인상을 바꾸는 중요한 과정이라는 것을 깊이 이해하게 되었습니다.</p>
                <p>저희 왕실의원은 안면거상, 실리프팅, 필러, 레이저 등 다양한 리프팅 시술에 집중하여 연구하고 발전 시켜 왔습니다. 단순히 처진 피부를 당기는 것이 아니라, 개개인의 얼굴 구조와 노화의 원인을 정확히 분석해 가장 적합한 방법을 제안드립니다.</p>
                <p>또한 상담부터 시술, 회복까지 모든 과정에서 환자분이 안심하실 수 있도록 책임 있는 진료를 약속드립니다. 불필요한 시술은 권하지 않으며, 오직 환자분께 필요한 선택만을 안내드립니다.</p>
                <p className={styles.closing}>
                  당신의 시간을 거스르는 변화,<br />그 시간을 저희 왕실과 함께하겠습니다. 감사합니다.
                </p>
                <p className={styles.signature}>왕실 대표원장 드림</p>
              </div>
            </div>
            <div className={styles.greetRight}>
              <div className={styles.safetyBadge}>
                <p className={styles.badgeKor}>왕실의원 안전시스템</p>
                <p className={styles.badgeEng}>PLASTIC SURGERY</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&w=600&q=80"
                alt="의료진과 환자 상담"
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
            <h2 className={styles.safetySectionTitle}>왕실의원 <strong>안전시스템</strong></h2>
            <p className={styles.safetySectionEng}>PLASTIC SURGERY</p>
          </div>
          <div className={styles.safetyGrid}>
            {safetyItems.map((item) => (
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
