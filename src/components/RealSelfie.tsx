import { useRef, useEffect, useState } from 'react'
import styles from './RealSelfie.module.css'

const selfieImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&fit=crop&crop=face',
    alt: '시술 후기 1',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&fit=crop&crop=face',
    alt: '시술 후기 2',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80&fit=crop&crop=face',
    alt: '시술 후기 3',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&fit=crop&crop=face',
    alt: '시술 후기 4',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80&fit=crop&crop=face',
    alt: '시술 후기 5',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80&fit=crop&crop=face',
    alt: '시술 후기 6',
  },
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

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.header} ref={ref}>
          <div className={styles.headerLeft}>
            <h2 className="section-title" style={{ textAlign: 'left' }}>REAL SELFIE</h2>
            <p className="section-subtitle" style={{ textAlign: 'left' }}>고객님들의 리얼셀카 후기</p>
          </div>
          <a href="/community/selfie" className={styles.moreBtn}>
            후기사진 더보기
            <span className={styles.plusIcon}>+</span>
          </a>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {/* Image mosaic */}
          <div className={`${styles.mosaicGrid} ${visible ? styles.visible : ''}`}>
            {selfieImages.map((img, idx) => (
              <div
                key={img.id}
                className={styles.mosaicCell}
                style={{ transitionDelay: `${idx * 0.07}s` }}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className={styles.cellOverlay} />
              </div>
            ))}
          </div>

          {/* Review Card */}
          <div className={`${styles.reviewCard} ${visible ? styles.reviewVisible : ''}`}>
            <div className={styles.reviewBadge}>
              <div className={styles.clinicMark}>왕실 의원</div>
            </div>
            <div className={styles.reviewContent}>
              <p className={styles.reviewTag}>고객리얼후기</p>
              <p className={styles.reviewSub}>이마거상 + 안면거상 + 눈성형</p>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewNote}>*환자 본인의 동의를 받아 촬영 후 게재하였습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
