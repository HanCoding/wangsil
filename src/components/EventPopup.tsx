import { useState, useEffect } from 'react'
import HicoEventPopup from './popups/HicoEventPopup'
import SummerEventPopup from './popups/SummerEventPopup'

const STORAGE_KEY = 'wangsil_event_popup_hide_date_v3'

type Step = 'loading' | 'hico' | 'summer' | 'done'

export default function EventPopup() {
  const [step, setStep] = useState<Step>('loading')
  const [hideToday, setHideToday] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    const today = new Date().toDateString()
    setStep(stored === today ? 'done' : 'hico')
  }, [])

  const handleClose = () => {
    if (hideToday) {
      localStorage.setItem(STORAGE_KEY, new Date().toDateString())
      setStep('done')
      return
    }
    setStep((current) => (current === 'hico' ? 'summer' : 'done'))
  }

  if (step === 'hico') {
    return <HicoEventPopup hideToday={hideToday} onHideTodayChange={setHideToday} onClose={handleClose} />
  }

  if (step === 'summer') {
    return <SummerEventPopup hideToday={hideToday} onHideTodayChange={setHideToday} onClose={handleClose} />
  }

  return null
}
