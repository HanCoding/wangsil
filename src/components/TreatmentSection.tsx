import { useRef, useEffect, useState } from 'react'
import styles from './TreatmentSection.module.css'
import { useT } from '../context/LocaleContext'

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
  const t = useT()

  return (
    <section className={styles.section}>
      <div className="container">
        <div ref={titleRef} className={`${styles.sectionHeader} ${titleVisible ? styles.headerVisible : ''}`}>
          <h2 className="section-title">{t.treatment.sectionTitle}</h2>
          <p className="section-subtitle">{t.treatment.sectionSubtitle}</p>
          <div className="section-divider">
            <div className="section-divider-dot" />
          </div>
        </div>

        <div className={styles.cardGrid}>
          {t.treatment.items.map((item, idx) => (
            <TreatmentCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
