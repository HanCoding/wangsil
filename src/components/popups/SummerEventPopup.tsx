import { useT } from '../../context/LocaleContext'
import PopupShell from './PopupShell'
import styles from './SummerEventPopup.module.css'

interface SummerEventPopupProps {
  hideToday: boolean
  onHideTodayChange: (value: boolean) => void
  onClose: () => void
}

interface PriceRowProps {
  name: string
  sub?: string
  oldPrice: string
  newPrice: string
  className?: string
}

function PriceRow({ name, sub, oldPrice, newPrice, className }: PriceRowProps) {
  return (
    <li className={className ? `${styles.priceRow} ${className}` : styles.priceRow}>
      <span className={styles.itemName}>
        {name}
        {sub && <span className={styles.itemSub}>{sub}</span>}
      </span>
      <span className={styles.priceChange}>
        <span className={styles.oldPrice}>{oldPrice}</span>
        <span className={styles.arrow}>→</span>
        <span className={styles.newPrice}>{newPrice}</span>
      </span>
    </li>
  )
}

export default function SummerEventPopup({ hideToday, onHideTodayChange, onClose }: SummerEventPopupProps) {
  const { popupSummer: p } = useT()

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
    >
      <div className={styles.header}>
        <span className={styles.monthBadge}>{p.monthBadge}</span>
        <h2 className={styles.eyebrow}>{p.eyebrow}</h2>
        <p className={styles.location}>📍 {p.locationLine}</p>
        <p className={styles.vatNote}>{p.vatNote}</p>
      </div>

      <section className={styles.heroCard}>
        <p className={styles.tag}>{p.card1Tag}</p>
        <h3 className={styles.heroTitle}>{p.card1Title}</h3>
        <p className={styles.heroSub}>{p.card1Sub}</p>
        <p className={styles.note}>{p.card1Note}</p>
        <ul className={styles.priceList}>
          <PriceRow name={p.foreheadBasic} oldPrice={p.foreheadBasicOld} newPrice={p.foreheadBasicNew} />
          <PriceRow name={p.foreheadUpper} oldPrice={p.foreheadUpperOld} newPrice={p.foreheadUpperNew} />
          <PriceRow name={p.foreheadFull} oldPrice={p.foreheadFullOld} newPrice={p.foreheadFullNew} />
        </ul>
      </section>

      <section className={styles.miniCard}>
        <div className={styles.miniCardHeader}>
          <h3 className={styles.miniCardTitle}>{p.card2Title}</h3>
          <p className={styles.miniCardNote}>{p.card2Note}</p>
        </div>
        <ul className={styles.priceList}>
          <PriceRow name={p.miniLift} oldPrice={p.miniLiftOld} newPrice={p.miniLiftNew} />
        </ul>
      </section>

      <ul className={styles.grid}>
        <PriceRow className={styles.gridCard} name={p.browLift} sub={p.browLiftSub} oldPrice={p.browLiftOld} newPrice={p.browLiftNew} />
        <PriceRow className={styles.gridCard} name={p.eyeFatOut} sub={p.eyeFatOutSub} oldPrice={p.eyeFatOutOld} newPrice={p.eyeFatOutNew} />
        <PriceRow className={styles.gridCard} name={p.threadLift} sub={p.threadLiftSub} oldPrice={p.threadLiftOld} newPrice={p.threadLiftNew} />
        <PriceRow className={styles.gridCard} name={p.noseBridge} sub={p.noseBridgeSub} oldPrice={p.noseBridgeOld} newPrice={p.noseBridgeNew} />
      </ul>

      <ul className={styles.wideList}>
        <PriceRow className={`${styles.gridCard} ${styles.wideCard}`} name={p.noseCombo} sub={p.noseComboSub} oldPrice={p.noseComboOld} newPrice={p.noseComboNew} />
      </ul>
    </PopupShell>
  )
}
