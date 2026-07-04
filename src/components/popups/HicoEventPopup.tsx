import type { ReactNode } from 'react'
import { useT } from '../../context/LocaleContext'
import PopupShell from './PopupShell'
import styles from './HicoEventPopup.module.css'

interface HicoEventPopupProps {
  hideToday: boolean
  onHideTodayChange: (value: boolean) => void
  onClose: () => void
  dots?: ReactNode
}

export default function HicoEventPopup({ hideToday, onHideTodayChange, onClose, dots }: HicoEventPopupProps) {
  const { popupHico: p } = useT()

  const categories = [
    {
      key: 'hico',
      theme: styles.themePurple,
      title: p.hicoTitle,
      items: [
        [p.hico8, p.hico8Price],
        [p.hico12, p.hico12Price],
        [p.hicoComboThread, p.hicoComboThreadPrice],
      ],
    },
    {
      key: 'lifting',
      theme: styles.themeViolet,
      title: p.liftingTitle,
      items: [
        [p.liftingPdo, p.liftingPdoPrice],
        [p.liftingPcl, p.liftingPclPrice],
        [p.liftingJamber, p.liftingJamberPrice],
        [p.liftingForehead, p.liftingForeheadPrice],
      ],
    },
    {
      key: 'skin',
      theme: styles.themeNavy,
      title: p.skinTitle,
      items: [
        [p.skinDerma, p.skinDermaPrice],
        [p.skinIpl, p.skinIplPrice],
        [p.skinFraxel, p.skinFraxelPrice],
      ],
    },
    {
      key: 'eye',
      theme: styles.themeBrown,
      title: p.eyeTitle,
      items: [
        [p.eyeFatRepo, p.eyeFatRepoPrice],
        [p.eyeBrowLift, p.eyeBrowLiftPrice],
      ],
    },
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
      <div className={styles.header}>
        <span className={styles.monthBadge}>{p.monthBadge}</span>
        <p className={styles.eyebrow}>{p.eyebrow}</p>
        <h2 className={styles.title}>{p.title}</h2>
        <p className={styles.subtitle}>{p.subtitle}</p>
      </div>

      {categories.map((cat) => (
        <section key={cat.key} className={`${styles.card} ${cat.theme}`}>
          <h3 className={styles.cardTitle}>{cat.title}</h3>
          <ul className={styles.list}>
            {cat.items.map(([name, price]) => (
              <li key={name}>
                <span className={styles.itemName}>{name}</span>
                <span className={styles.itemPrice}>{price}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className={`${styles.card} ${styles.themeGreen} ${styles.featured}`}>
        <h3 className={styles.cardTitle}>{p.antiagingTitle}</h3>
        <ul className={styles.list}>
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
          <li>
            <span className={styles.itemName}>{p.antiagingCombo}</span>
            <span className={styles.itemPriceMuted}>{p.antiagingComboPrice}</span>
          </li>
        </ul>
      </section>

      <section className={`${styles.card} ${styles.themeGold}`}>
        <h3 className={styles.cardTitle}>{p.fillerTitle}</h3>
        <ul className={styles.list}>
          <li>
            <span className={styles.itemName}>{p.filler1cc}</span>
            <span className={styles.itemPrice}>{p.filler1ccPrice}</span>
          </li>
        </ul>
      </section>

      <p className={styles.taxNote}>{p.taxNote}</p>
    </PopupShell>
  )
}
