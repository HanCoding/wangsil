import { useState, useEffect } from 'react'
import styles from './ReviewSection.module.css'

const reviews = [
  {
    id: 1,
    name: 'sopia0215',
    tag: '예약 후 이용 · 대기 10분 이내',
    rating: 5,
    text: '타 병원에서 레이저 리프팅 여러 번 했는데 효과 없어서 결국 안면거상 했거든요 당겨주는 힘이 좋고 늘어진 피부 정리하니까 턱선이 20대 때로 돌아간 느낌ㅋㅋ',
  },
  {
    id: 2,
    name: 'shfn****',
    tag: '예약 후 이용 · 대기 10분 이내',
    rating: 5,
    text: '몬가 쉽게쉽게 하시는데 결과물 대만족..',
  },
  {
    id: 3,
    name: '잔잔한별',
    tag: '예약 없이 이용 · 바로 입장',
    rating: 5,
    text: '무턱 필러 맞았는데 턱 선이 훨씬 갸름해보여요! 자연스럽게 턱 끝 빼주셔서 얼굴 갸름해 보이고 예뻐 ㅜㅜ 원장님 손맛 굿이네요!',
  },
  {
    id: 4,
    name: 'gus12dud',
    tag: '예약 없이 이용 · 대기 10분 이내',
    rating: 5,
    text: '친구 전후 보고 놀라서 같이 왔는데 진심 여기 맛집이에요.. 대박 ㅋㅋㅋㅋ사실 바깥에서 보고 도망갈뻔 했는데 원장님 만나보고 끄덕했어요.. 저렴하고 실력 진짜 좋아요',
  },
]

export default function ReviewSection() {
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
                <div className={styles.avatar}>{review.name[0]}</div>
                <div className={styles.meta}>
                  <span className={styles.name}>{review.name}</span>
                  <span className={styles.date}>{review.tag}</span>
                </div>
                <div className={styles.stars}>
                  {'★'.repeat(review.rating)}
                </div>
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
            <p className={styles.label}>REAL REVIEW</p>
            <h2 className={styles.headline}>
              생생한 후기와<br />
              <strong>만족감 높은 리뷰</strong>
            </h2>
            <p className={styles.sub}>직접 방문하신 고객님들의 솔직한 이야기를<br />네이버에서 확인해 보세요.</p>
            <a
              href="https://map.naver.com/p/entry/place/1418526927?placePath=/review"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.naverBtn}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/>
              </svg>
              네이버 리뷰 보러 가기
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
