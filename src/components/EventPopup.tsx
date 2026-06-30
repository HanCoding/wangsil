import { useState, useEffect } from 'react'
import styles from './EventPopup.module.css'
import { useT } from '../context/LocaleContext'

const STORAGE_KEY = 'wangsil_event_popup_hide_date_v2'

export default function EventPopup() {
  const { popup: p } = useT()
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
          aria-label={p.ariaLabel}
        >
          <div className={styles.header}>
            <p className={styles.eyebrow}>{p.eyebrow}</p>
            <h2 className={styles.title}>{p.title}</h2>
          </div>

          <div className={styles.body}>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>{p.skinTitle}</h3>
              <ul className={styles.simpleList}>
                <li>
                  <span className={styles.itemName}>{p.skinBotox}</span>
                  <span className={styles.itemPrice}>{p.skinBotoxPrice}</span>
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>{p.eyeTitle}</h3>
              <ul className={styles.simpleList}>
                <li>
                  <span className={styles.itemName}>{p.eyeFatRepo}</span>
                  <span className={styles.itemPrice}>{p.eyeFatRepoPrice}</span>
                </li>
                <li>
                  <span className={styles.itemName}>{p.eyeBrowLift}</span>
                  <span className={styles.itemPrice}>{p.eyeBrowLiftPrice}</span>
                </li>
              </ul>
            </section>

            <section className={`${styles.section} ${styles.featured}`}>
              <h3 className={styles.sectionTitle}>{p.antiagingTitle}</h3>
              <p className={styles.consultTitle}>{p.antiagingConsult}</p>
              <ul className={styles.simpleList}>
                <li>
                  <span className={styles.itemName}>{p.antiagingFacelift}</span>
                  <span className={styles.itemPrice}>{p.antiagingFaceliftPrice}</span>
                </li>
                <li className={styles.subGroup}>
                  <span className={styles.itemName}>{p.antiagingThread}</span>
                  <span className={styles.subPrices}>
                    <span>{p.antiagingThreadSingle} <em>{p.antiagingThreadSinglePrice}</em></span>
                    <span>{p.antiagingThreadFull} <em>{p.antiagingThreadFullPrice}</em></span>
                    <span>{p.antiagingThreadSilhouette} <em>{p.antiagingThreadSilhouettePrice}</em></span>
                  </span>
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>{p.fillerTitle}</h3>
              <ul className={styles.simpleList}>
                <li>
                  <span className={styles.itemName}>{p.fillerFull}</span>
                  <span className={styles.itemPrice}>{p.fillerFullPrice}</span>
                </li>
              </ul>
            </section>

            <p className={styles.taxNote}>{p.taxNote}</p>
            <p className={styles.taxNote}>{p.portraitConsent}</p>
            <p className={styles.taxNote}>{p.eventPeriod}</p>
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
            {p.hideToday}
          </label>
          <button className={styles.closeBtn} onClick={close}>{p.close}</button>
        </div>
      </div>
    </div>
  )
}
