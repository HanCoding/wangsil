import { useState, useEffect } from 'react'
import styles from './EventPopup.module.css'

const STORAGE_KEY = 'wangsil_event_popup_hide_date'

/** 정가(원) / 이벤트가(원) — 할인율은 자동 계산됩니다. */
const PRICES = [
  { name: '필러', original: 200_000, value: 60_000 },
  { name: '눈썹거상', original: 1_000_000, value: 600_000 },
  { name: '눈밑지방제거', original: 1_000_000, value: 600_000 },
  { name: '안면거상술', original: 4_500_000, value: 2_500_000 },
]

export default function EventPopup() {
  const [visible, setVisible] = useState(false)
  const [hideToday, setHideToday] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    const today = new Date().toDateString()
    if (stored !== today) {
      setVisible(true)
    }
  }, [])

  const close = () => {
    if (hideToday) {
      localStorage.setItem(STORAGE_KEY, new Date().toDateString())
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.overlay} onClick={(e) => { if (e.target === e.currentTarget) close() }}>
      <div className={styles.popup}>
        <a
          className={styles.content}
          href="https://pf.kakao.com/_ySgVX"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="왕실의원 가정의달 이벤트 — 애교필러 5.5만원부터, 필러 6만원, 눈썹거상 60만원, 눈밑지방제거 60만원, 안면거상술 250만원, 실리프팅 얼굴전체 99만원 (부가세 10% 별도)"
        >
          <div className={styles.header}>
            <p className={styles.eyebrow}>Family Month Special</p>
            <h2 className={styles.title}>가정의 달 이벤트</h2>
            <span className={styles.divider} aria-hidden="true" />
            <p className={styles.highlight}>애교필러 <strong>5.5만원</strong>~</p>
          </div>

          <ul className={styles.priceList}>
            {PRICES.map((item) => {
              const off = Math.round((1 - item.value / item.original) * 100)
              return (
                <li className={styles.priceRow} key={item.name}>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.mid}>
                    <span className={styles.off}>{off}%↓</span>
                    <span className={styles.original}>{item.original.toLocaleString()}원</span>
                  </span>
                  <span className={styles.price}>
                    <strong>{item.value / 10_000}</strong>
                    <em>만원</em>
                  </span>
                </li>
              )
            })}
          </ul>

          <div className={styles.band}>실리프팅 얼굴전체 <em>99만원</em></div>
        </a>

        <div className={styles.footer}>
          <label className={styles.checkLabel}>
            <input
              type="checkbox"
              checked={hideToday}
              onChange={(e) => setHideToday(e.target.checked)}
              className={styles.checkbox}
            />
            오늘은 더 보지 않기
          </label>
          <button className={styles.closeBtn} onClick={close}>닫기 ✕</button>
        </div>
      </div>
    </div>
  )
}
