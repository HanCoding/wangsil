import { useState, useEffect } from 'react'
import styles from './EventPopup.module.css'

const STORAGE_KEY = 'wangsil_event_popup_hide_date_v2'

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
          aria-label="왕실의원 이벤트 안내 — 피부·눈성형·동안성형·필러 이벤트"
        >
          <div className={styles.header}>
            <p className={styles.eyebrow}>Special Event</p>
            <h2 className={styles.title}>이벤트 안내</h2>
          </div>

          <div className={styles.body}>

            {/* 피부 이벤트 */}
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>피부 이벤트</h3>
              <ul className={styles.simpleList}>
                <li>
                  <span className={styles.itemName}>얼굴 스킨보톡스</span>
                  <span className={styles.itemPrice}>10만원</span>
                </li>
                <li>
                  <span className={styles.itemName}>물광주사</span>
                  <span className={styles.itemPrice}>5.9만원</span>
                </li>
              </ul>
            </section>

            {/* 눈성형 이벤트 */}
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>눈성형 이벤트</h3>
              <ul className={styles.simpleList}>
                <li>
                  <span className={styles.itemName}>눈밑지방재배치</span>
                  <span className={styles.itemPrice}>70만원</span>
                </li>
                <li>
                  <span className={styles.itemName}>눈썹거상술</span>
                  <span className={styles.itemPrice}>70만원</span>
                </li>
              </ul>
            </section>

            {/* 동안성형 이벤트 */}
            <section className={`${styles.section} ${styles.featured}`}>
              <h3 className={styles.sectionTitle}>동안성형 이벤트</h3>
              <p className={styles.consultTitle}>실리프팅 · 안면거상 재수술 상담</p>
<ul className={styles.simpleList}>
                <li>
                  <span className={styles.itemName}>안면거상</span>
                  <span className={styles.itemPrice}>280만원</span>
                </li>
                <li className={styles.subGroup}>
                  <span className={styles.itemName}>실리프팅</span>
                  <span className={styles.subPrices}>
                    <span>한부위 <em>50만원</em></span>
                    <span>얼굴전체 <em>99만원</em></span>
                    <span>실거상 <em>200만원</em></span>
                  </span>
                </li>
              </ul>
            </section>

            {/* 필러 이벤트 */}
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>필러 이벤트</h3>
<ul className={styles.simpleList}>
                <li>
                  <span className={styles.itemName}>풀페이스 필러 10cc</span>
                  <span className={styles.itemPrice}>89만원</span>
                </li>
              </ul>
            </section>

            <p className={styles.taxNote}>★ 부가세 별도</p>
          </div>
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
