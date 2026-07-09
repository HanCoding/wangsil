import type { ReactNode } from 'react'
import shellStyles from '../EventPopup.module.css'

interface PopupShellProps {
  href: string
  ariaLabel: string
  hideToday: boolean
  onHideTodayChange: (value: boolean) => void
  onClose: () => void
  hideTodayLabel: string
  closeLabel: string
  maxWidth?: number
  dots?: ReactNode
  tabBar?: ReactNode
  children: ReactNode
}

export default function PopupShell({
  href,
  ariaLabel,
  hideToday,
  onHideTodayChange,
  onClose,
  hideTodayLabel,
  closeLabel,
  maxWidth,
  dots,
  tabBar,
  children,
}: PopupShellProps) {
  return (
    <div className={shellStyles.popup} style={maxWidth ? { maxWidth } : undefined}>
      <a
        className={shellStyles.content}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        <div className={shellStyles.body}>{children}</div>
      </a>

      {dots && <div className={shellStyles.dots}>{dots}</div>}
      {tabBar}

      <div className={shellStyles.footer}>
        <label className={shellStyles.checkLabel}>
          <input
            type="checkbox"
            checked={hideToday}
            onChange={(e) => onHideTodayChange(e.target.checked)}
            className={shellStyles.checkbox}
          />
          {hideTodayLabel}
        </label>
        <button className={shellStyles.closeBtn} onClick={onClose}>
          {closeLabel}
        </button>
      </div>
    </div>
  )
}
