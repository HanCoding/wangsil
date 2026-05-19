import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './LocationPage.module.css'

const HERO_BG = '/img/directions/banner.png'
const NAVER_CLIENT_ID = 'h2dyoh2sb5'
const LAT = 37.4897
const LNG = 126.7227

const infoBoxes = [
  { label: '주소', value: '부평구 경인로 948' },
  { label: '전화', value: '032-435-3571' },
  { label: '지하철', value: '부평역 1번출구' },
  { label: '도보', value: '약 5분' },
]

export default function LocationPage() {
  const [loaded, setLoaded] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (document.querySelector('script[data-naver-map]')) {
      initMap()
      return
    }
    const script = document.createElement('script')
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`
    script.async = true
    script.dataset.naverMap = 'true'
    script.onload = initMap
    document.head.appendChild(script)
  }, [])

  function initMap() {
    if (!mapRef.current) return
    const naver = (window as any).naver
    if (!naver?.maps) return
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

  return (
    <div className={styles.page}>
      <Helmet>
        <title>오시는길 | 왕실의원 - 인천 부평구 경인로 948</title>
        <meta name="description" content="왕실의원 오시는길. 인천광역시 부평구 경인로 948 유성메디컬 빌딩 2층. 지하철 1호선 부평역 1번출구 도보 5분. 032-435-3571" />
        <link rel="canonical" href="https://wangsil.pages.dev/community" />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src={HERO_BG} alt="" className={styles.heroImg} onLoad={() => setLoaded(true)} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent} ${loaded ? styles.visible : ''}`}>
          <div className={styles.heroText}>
            <p className={styles.heroLabel}>왕실의원 위치안내 ————</p>
            <h1 className={styles.heroTitle}>오시는길</h1>
            <div className={styles.heroInfoBoxes}>
              {infoBoxes.map((box) => (
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
          <h2 className={styles.mapTitle}>오시는길</h2>
          <div ref={mapRef} className={styles.map} />
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <p className={styles.infoItemLabel}>주소</p>
              <p className={styles.infoItemValue}>인천광역시 부평구 경인로 948 유성메디컬 빌딩 2층 왕실의원</p>
            </div>
            <div className={styles.infoItem}>
              <p className={styles.infoItemLabel}>대중교통</p>
              <p className={styles.infoItemValue}>지하철 1호선 부평역 1번출구 도보 5분</p>
            </div>
            <div className={styles.infoItem}>
              <p className={styles.infoItemLabel}>전화</p>
              <p className={styles.infoItemValue}>032-435-3571</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
