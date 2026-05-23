import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './LocationPage.module.css'
import { useT, useLocale } from '../context/LocaleContext'

const HERO_BG = '/img/directions/banner.png'
const NAVER_CLIENT_ID = 'h2dyoh2sb5'
const LAT = 37.4897
const LNG = 126.7227

// 스크립트 내부 Language 열거형 X = {KOREAN:"ko",ENGLISH:"en",CHINESE:"zh",JAPANESE:"ja"}
// 이 값들이 convertToUserLanguage에서 타일 URL 교체에 사용됨
const NAVER_LANG: Record<string, string> = {
  ko: 'ko',
  en: 'en',
  ja: 'ja',
  zh: 'zh',
  vi: 'en',
}

export default function LocationPage() {
  const [loaded, setLoaded] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)
  const t = useT()
  const loc = t.location
  const locale = useLocale()
  const naverLang = NAVER_LANG[locale] ?? 'ko'

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let cancelled = false

    function initMap() {
      if (cancelled || !mapRef.current) return
      const naver = (window as any).naver
      if (!naver?.maps) return
      mapRef.current.innerHTML = ''
      const center = new naver.maps.LatLng(LAT, LNG)
      const map = new naver.maps.Map(mapRef.current, {
        center,
        zoom: 17,
        mapTypeControl: false,
        scaleControl: false,
        logoControl: true,
        mapDataControl: false,
      })
      new naver.maps.Marker({
        position: center,
        map,
        title: '왕실의원',
      })
    }

    const existing = document.querySelector('script[data-naver-map]') as HTMLScriptElement | null
    if (existing) {
      if (existing.dataset.naverLang === naverLang) {
        // 같은 언어 — 스크립트 재사용
        if ((window as any).naver?.maps) {
          initMap()
        } else {
          existing.onload = initMap
        }
        return () => { cancelled = true }
      }
      // 언어가 다름 — 기존 스크립트만 제거 (window.naver는 유지해 충돌 방지)
      existing.remove()
    }

    // 새 언어 스크립트 로드 → window.naver.maps를 덮어써서 맵 타입 재초기화
    const script = document.createElement('script')
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_CLIENT_ID}&language=${naverLang}`
    script.async = true
    script.dataset.naverMap = 'true'
    script.dataset.naverLang = naverLang
    script.onload = initMap
    document.head.appendChild(script)

    return () => { cancelled = true }
  }, [naverLang])

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{loc.meta.title}</title>
        <meta name="description" content={loc.meta.desc} />
        <link rel="canonical" href={loc.meta.canonical} />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src={HERO_BG} alt="" className={styles.heroImg} onLoad={() => setLoaded(true)} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent} ${loaded ? styles.visible : ''}`}>
          <div className={styles.heroText}>
            <p className={styles.heroLabel}>{loc.hero.label}</p>
            <h1 className={styles.heroTitle}>{loc.hero.title}</h1>
            <div className={styles.heroInfoBoxes}>
              {loc.hero.infoBoxes.map((box) => (
                <div key={box.label} className={styles.infoBox}>
                  <p className={styles.infoBoxLabel}>{box.label}</p>
                  <p className={styles.infoBoxValue}>{box.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 지도 */}
      <section className={styles.mapSection}>
        <div className="container">
          <h2 className={styles.mapTitle}>{loc.mapSection.title}</h2>
          <div ref={mapRef} className={styles.map} />
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <p className={styles.infoItemLabel}>{loc.mapSection.address.label}</p>
              <p className={styles.infoItemValue}>{loc.mapSection.address.value}</p>
            </div>
            <div className={styles.infoItem}>
              <p className={styles.infoItemLabel}>{loc.mapSection.transit.label}</p>
              <p className={styles.infoItemValue}>{loc.mapSection.transit.value}</p>
            </div>
            <div className={styles.infoItem}>
              <p className={styles.infoItemLabel}>{loc.mapSection.phone.label}</p>
              <p className={styles.infoItemValue}>{loc.mapSection.phone.value}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
