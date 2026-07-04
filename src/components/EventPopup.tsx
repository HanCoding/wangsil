import { useState, useEffect, useRef } from 'react'
import HicoEventPopup from './popups/HicoEventPopup'
import SummerEventPopup from './popups/SummerEventPopup'
import styles from './EventPopup.module.css'

const STORAGE_KEY = 'wangsil_event_popup_hide_date_v3'

type Visibility = 'loading' | 'visible' | 'done'

export default function EventPopup() {
  const [visibility, setVisibility] = useState<Visibility>('loading')
  const [hicoOpen, setHicoOpen] = useState(true)
  const [summerOpen, setSummerOpen] = useState(true)
  const [hideToday, setHideToday] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    const today = new Date().toDateString()
    setVisibility(stored === today ? 'done' : 'visible')
  }, [])

  const closeAll = () => {
    setHicoOpen(false)
    setSummerOpen(false)
    setVisibility('done')
  }

  const handleClose = (which: 'hico' | 'summer') => {
    if (hideToday) {
      localStorage.setItem(STORAGE_KEY, new Date().toDateString())
      closeAll()
      return
    }
    if (which === 'hico') {
      setHicoOpen(false)
      if (!summerOpen) setVisibility('done')
    } else {
      setSummerOpen(false)
      if (!hicoOpen) setVisibility('done')
    }
  }

  const handleStageScroll = () => {
    const el = stageRef.current
    if (!el || el.clientWidth === 0) return
    setActiveIndex(Math.round(el.scrollLeft / el.clientWidth))
  }

  const goToSlide = (index: number) => {
    stageRef.current?.scrollTo({ left: index * stageRef.current.clientWidth, behavior: 'smooth' })
  }

  if (visibility !== 'visible' || (!hicoOpen && !summerOpen)) return null

  const slideCount = (hicoOpen ? 1 : 0) + (summerOpen ? 1 : 0)

  const dots =
    slideCount > 1 ? (
      <>
        {Array.from({ length: slideCount }, (_, i) => (
          <button
            key={i}
            type="button"
            className={i === activeIndex ? `${styles.dot} ${styles.dotActive}` : styles.dot}
            aria-label={`${i + 1}번째 이벤트 보기`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </>
    ) : null

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeAll()
      }}
    >
      <div className={styles.stage} ref={stageRef} onScroll={handleStageScroll}>
        {hicoOpen && (
          <HicoEventPopup
            hideToday={hideToday}
            onHideTodayChange={setHideToday}
            onClose={() => handleClose('hico')}
            dots={dots}
          />
        )}
        {summerOpen && (
          <SummerEventPopup
            hideToday={hideToday}
            onHideTodayChange={setHideToday}
            onClose={() => handleClose('summer')}
            dots={dots}
          />
        )}
      </div>
    </div>
  )
}
