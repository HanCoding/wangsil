import { useState } from 'react'
import { useT } from '../../context/LocaleContext'
import PopupShell from './PopupShell'
import HicoEventContent from './HicoEventContent'
import SummerEventContent from './SummerEventContent'
import FillerEventContent from './FillerEventContent'
import styles from './DesktopEventPopup.module.css'

type TabKey = 'hico' | 'summer' | 'filler'

interface DesktopEventPopupProps {
  hideToday: boolean
  onHideTodayChange: (value: boolean) => void
  onClose: () => void
}

export default function DesktopEventPopup({ hideToday, onHideTodayChange, onClose }: DesktopEventPopupProps) {
  const [tab, setTab] = useState<TabKey>('hico')
  const { popupHico, popupSummer, popupFiller } = useT()

  const tabs: { key: TabKey; label: string; aria: string }[] = [
    { key: 'hico', label: popupHico.tabLabel, aria: popupHico.ariaLabel },
    { key: 'summer', label: popupSummer.tabLabel, aria: popupSummer.ariaLabel },
    { key: 'filler', label: popupFiller.tabLabel, aria: popupFiller.ariaLabel },
  ]
  const active = tabs.find((t) => t.key === tab) ?? tabs[0]

  const tabBar = (
    <div className={styles.tabBar}>
      {tabs.map((t) => (
        <button
          key={t.key}
          type="button"
          className={t.key === tab ? `${styles.tab} ${styles.tabActive}` : styles.tab}
          onClick={() => setTab(t.key)}
        >
          {t.label}
        </button>
      ))}
    </div>
  )

  return (
    <PopupShell
      href="https://pf.kakao.com/_ySgVX"
      ariaLabel={active.aria}
      hideToday={hideToday}
      onHideTodayChange={onHideTodayChange}
      onClose={onClose}
      hideTodayLabel={popupHico.hideToday}
      closeLabel={popupHico.close}
      maxWidth={520}
      tabBar={tabBar}
    >
      {tab === 'hico' && <HicoEventContent />}
      {tab === 'summer' && <SummerEventContent />}
      {tab === 'filler' && <FillerEventContent />}
    </PopupShell>
  )
}
