import { useRef, useEffect, useState } from 'react'
import styles from './TreatmentSection.module.css'

interface Treatment {
  id: string
  label: string
  title: string
  titleEn: string
  subtitle: string
  description: string
  points: string[]
  imageUrl: string
}

const treatments: Treatment[] = [
  {
    id: 'facelift',
    label: 'PREMIUM AFTER CARE SYSTEM',
    title: '자연스럽게, 우아하게 —',
    titleEn: '',
    subtitle: '시간을 되돌리다',
    description:
      '처진 볼살, 흐려진 턱선, 깊어진 이마 주름까지.\n안면거상·이마거상 전문 클리닉이\n당신의 가장 아름다운 모습을 되찾아 드립니다.',
    points: [],
    imageUrl: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&q=80&fit=crop',
  },
  {
    id: 'facelift-detail',
    label: 'PREMIUM AFTER CARE SYSTEM',
    title: '안면거상',
    titleEn: '(Face Lift)',
    subtitle: '자연스러운 젊음 회복의 핵심',
    description:
      '안면거상은 단순히 피부를 당기는 것이 아닙니다.\nSMAS(표재성 근막) 층을 정교하게 다루어\n얼굴 전체의 구조적 처짐을 근본적으로 교정합니다.',
    points: [
      '살·팔자주름·턱선 동시 개선',
      'SMAS 층 정밀 교정으로 자연스러운 결과',
      '절개선을 귀 주변에 숨겨 흉터 최소화',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80&fit=crop',
  },
  {
    id: 'browlift',
    label: 'PREMIUM AFTER CARE SYSTEM',
    title: '이마거상',
    titleEn: '(Brow Lift)',
    subtitle: '눈매와 이마를 동시에 젊게',
    description:
      '이마거상은 처진 눈썹과 이마 주름을 함께 개선하여\n전체적인 인상을 밝고 생기 있게 바꿔줍니다.\n내시경 기법을 활용해 흉터를 최소화하면서도\n확실한 효과를 제공합니다.',
    points: [
      '이마 가로 주름 및 미간 주름 개선',
      '처진 눈썹 교정으로 눈매 선명해짐',
      '내시경 최소절개 방식 적용',
      '피곤하고 무거운 인상 개선',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&fit=crop',
  },
]

function useIntersection(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

function TreatmentCard({ item, index }: { item: Treatment; index: number }) {
  const { ref, visible } = useIntersection(0.15)
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isEven ? styles.cardEven : styles.cardOdd} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardImage}>
        <img src={item.imageUrl} alt={item.title + item.titleEn} loading="lazy" />
        <div className={styles.imageOverlay} />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.cardLabel}>{item.label}</p>
        <h3 className={styles.cardTitle}>
          {item.title}
          {item.titleEn && <span className={styles.cardTitleEn}>{item.titleEn}</span>}
        </h3>
        <p className={styles.cardSubtitle}>{item.subtitle}</p>
        <div className={styles.cardDivider} />
        <p className={styles.cardDesc}>
          {item.description.split('\n').map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </p>
        {item.points.length > 0 && (
          <ul className={styles.cardPoints}>
            {item.points.map((pt, i) => (
              <li key={i}>
                <span className={styles.pointDash}>-</span> {pt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function TreatmentSection() {
  const { ref: titleRef, visible: titleVisible } = useIntersection()

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div ref={titleRef} className={`${styles.sectionHeader} ${titleVisible ? styles.headerVisible : ''}`}>
          <h2 className="section-title">안면거상 전문 시술</h2>
          <p className="section-subtitle">왕실의원 특화 프로그램</p>
          <div className="section-divider">
            <div className="section-divider-dot" />
          </div>
        </div>

        {/* Treatment Cards */}
        <div className={styles.cardGrid}>
          {treatments.map((item, idx) => (
            <TreatmentCard key={item.id} item={item} index={idx} />
          ))}
        </div>

        {/* CTA */}
        <div className={styles.sectionCta}>
          <a href="/facelift" className={styles.moreBtn}>시술 더 알아보기</a>
        </div>
      </div>
    </section>
  )
}
