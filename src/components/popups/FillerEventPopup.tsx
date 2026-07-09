import type { ReactNode } from 'react'
import { useT } from '../../context/LocaleContext'
import PopupShell from './PopupShell'
import styles from './HicoEventPopup.module.css'

interface FillerEventPopupProps {
  hideToday: boolean
  onHideTodayChange: (value: boolean) => void
  onClose: () => void
  dots?: ReactNode
}

export default function FillerEventPopup({ hideToday, onHideTodayChange, onClose, dots }: FillerEventPopupProps) {
  const { popupFiller: p } = useT()

  const items = [
    [p.headFiller, p.headFillerPrice],
    [p.shoulderFiller, p.shoulderFillerPrice],
    [p.handFiller, p.handFillerPrice],
    [p.hipFiller, p.hipFillerPrice],
  ]

  return (
    <PopupShell
      href="https://pf.kakao.com/_ySgVX"
      ariaLabel={p.ariaLabel}
      hideToday={hideToday}
      onHideTodayChange={onHideTodayChange}
      onClose={onClose}
      hideTodayLabel={p.hideToday}
      closeLabel={p.close}
      maxWidth={400}
      dots={dots}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100%' }}>
        <div className={styles.header}>
          <span className={styles.monthBadge}>{p.monthBadge}</span>
          <p className={styles.eyebrow}>{p.eyebrow}</p>
          <h2 className={styles.title}>{p.title}</h2>
          <p className={styles.subtitle}>{p.subtitle}</p>
        </div>

        <section className={`${styles.card} ${styles.themeGold}`}>
          <h3 className={styles.cardTitle}>{p.fillerTitle}</h3>
          <ul className={styles.list}>
            {items.map(([name, price]) => (
              <li key={name}>
                <span className={styles.itemName}>{name}</span>
                <span className={styles.itemPrice}>{price}</span>
              </li>
            ))}
          </ul>
        </section>

        <p className={styles.taxNote}>{p.taxNote}</p>
      </div>
    </PopupShell>
  )
}
