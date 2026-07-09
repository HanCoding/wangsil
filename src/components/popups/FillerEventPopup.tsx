import type { ReactNode } from 'react'
import { useT } from '../../context/LocaleContext'
import PopupShell from './PopupShell'
import FillerEventContent from './FillerEventContent'

interface FillerEventPopupProps {
  hideToday: boolean
  onHideTodayChange: (value: boolean) => void
  onClose: () => void
  dots?: ReactNode
}

export default function FillerEventPopup({ hideToday, onHideTodayChange, onClose, dots }: FillerEventPopupProps) {
  const { popupFiller: p } = useT()

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
      <FillerEventContent />
    </PopupShell>
  )
}
