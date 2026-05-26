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
          <img
            src="/img/event/event.png"
            alt="이벤트 안내"
            className={styles.image}
          />
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
