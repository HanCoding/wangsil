import { useState, useEffect } from 'react'
import styles from './ReviewSection.module.css'
import { useT } from '../context/LocaleContext'

export default function ReviewSection() {
  const t = useT()
  const reviews = t.review.reviews
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % reviews.length)
        setVisible(true)
      }, 350)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const review = reviews[current]

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>

          {/* 왼쪽: 리뷰 카드 */}
          <div className={styles.cardWrap}>
            <div className={`${styles.card} ${visible ? styles.cardVisible : styles.cardHidden}`}>
              <div className={styles.cardTop}>
                <div className={styles.avatar}>{review.name[0].toUpperCase()}</div>
                <div className={styles.meta}>
                  <span className={styles.name}>{review.name}</span>
                  <span className={styles.date}>{review.tag}</span>
                </div>
                <div className={styles.stars}>★★★★★</div>
              </div>
              <p className={styles.text}>{review.text}</p>
              <div className={styles.naverBadge}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/>
                </svg>
                네이버 리뷰
              </div>
            </div>

            {/* 도트 인디케이터 */}
            <div className={styles.dots}>
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                  onClick={() => { setVisible(false); setTimeout(() => { setCurrent(i); setVisible(true) }, 350) }}
                  aria-label={`${i + 1}번 리뷰`}
                />
              ))}
            </div>
          </div>

          {/* 오른쪽: 문구 + 버튼 */}
          <div className={styles.right}>
            <p className={styles.label}>{t.review.label}</p>
            <h2 className={styles.headline}>
              {t.review.headline.split('\n').map((line, i, arr) => (
                <span key={i}>{i === arr.length - 1 ? <strong>{line}</strong> : line}<br /></span>
              ))}
            </h2>
            <p className={styles.sub}>
              {t.review.sub.split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </p>
            <a
              href="https://map.naver.com/p/entry/place/1418526927?placePath=/review"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.naverBtn}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/>
              </svg>
              {t.review.naverBtn}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
