import { useState, useEffect } from 'react'
import styles from './EventPopup.module.css'

const STORAGE_KEY = 'wangsil_event_popup_hide_date'

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
        <a href="https://pf.kakao.com/_ySgVX" target="_blank" rel="noopener noreferrer">
          <figure className={styles.figure}>
            <img
              src="/img/event/event.png"
              alt="왕실의원 가정의달 이벤트 — 필러 이벤트: 애교 필러 5만원, 필러 6만원~ / 수술 이벤트: 눈썹거상술 60만원, 눈밑지방제거 60만원, 안면거상 250만원 (부가세 10% 별도)"
              className={styles.image}
              width={480}
              height={680}
            />
            <figcaption className={styles.figcaption}>
              <strong>왕실의원 가정의달 이벤트</strong>
              <ul>
                <li>애교 필러 5만원</li>
                <li>필러 6만원~</li>
                <li>눈썹거상술 60만원</li>
                <li>눈밑지방제거 60만원</li>
                <li>안면거상 250만원</li>
              </ul>
              <small>*부가세 10% 별도</small>
            </figcaption>
          </figure>
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
          <button className={styles.closeBtn} onClick={close}>닫기</button>
        </div>
      </div>
    </div>
  )
}
