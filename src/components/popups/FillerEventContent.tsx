import { useT } from '../../context/LocaleContext'
import styles from './HicoEventPopup.module.css'

export default function FillerEventContent() {
  const { popupFiller: p } = useT()

  const items = [
    [p.headFiller, p.headFillerPrice],
    [p.shoulderFiller, p.shoulderFillerPrice],
    [p.handFiller, p.handFillerPrice],
    [p.hipFiller, p.hipFillerPrice],
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
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
  )
}
