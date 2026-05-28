import { useRef, useEffect, useState } from 'react'
import styles from './RealSelfie.module.css'
import { useT } from '../context/LocaleContext'

const selfieImages = [
  { id: 1, src: '/img/main/4.png' },
  { id: 2, src: '/img/main/5.png' },
  { id: 3, src: '/img/main/6.png' },
  { id: 4, src: '/img/main/7.png' },
  { id: 5, src: '/img/main/8.png' },
  { id: 6, src: '/img/main/9.png' },
]

function useIntersection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, visible }
}

export default function RealSelfie() {
  const { ref, visible } = useIntersection()
  const t = useT()

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header} ref={ref}>
          <div className={styles.headerLeft}>
            <h2 className="section-title" style={{ textAlign: 'left' }}>{t.selfie.title}</h2>
            <p className="section-subtitle" style={{ textAlign: 'left' }}>{t.selfie.subtitle}</p>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.mosaicGrid} ${visible ? styles.visible : ''}`}>
            {selfieImages.map((img, idx) => (
              <div
                key={img.id}
                className={styles.mosaicCell}
                style={{ transitionDelay: `${idx * 0.07}s` }}
              >
                <img src={img.src} alt={`${t.selfie.imageAlt} ${img.id}`} loading="lazy" />
                <div className={styles.cellOverlay} />
              </div>
            ))}
          </div>

          <div className={`${styles.reviewCard} ${visible ? styles.reviewVisible : ''}`}>
            <div className={styles.reviewBadge}>
              <div className={styles.clinicMark}>{t.selfie.clinicMark}</div>
            </div>
            <div className={styles.reviewContent}>
              <p className={styles.reviewTag}>{t.selfie.tag}</p>
              <p className={styles.reviewSub}>{t.selfie.sub}</p>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewNote}>{t.selfie.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
