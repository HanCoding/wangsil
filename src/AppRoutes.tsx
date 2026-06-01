import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import LocaleLayout from './components/LocaleLayout'
import LocaleAutoRedirect from './components/LocaleAutoRedirect'
import Hero from './components/Hero'
import TreatmentSection from './components/TreatmentSection'
import InfoSection from './components/InfoSection'
import RealSelfie from './components/RealSelfie'
import ReviewSection from './components/ReviewSection'
import EventPopup from './components/EventPopup'
import AboutPage from './pages/AboutPage'
import EyePage from './pages/EyePage'
import NosePage from './pages/NosePage'
import FaceliftPage from './pages/FaceliftPage'
import PettiPage from './pages/PettiPage'
import LaserPage from './pages/LaserPage'
import LocationPage from './pages/LocationPage'

function CommunityRedirect() {
  const { pathname } = useLocation()
  const localeMatch = pathname.match(/^\/(en|ja|zh|vi)/)
  const prefix = localeMatch ? `/${localeMatch[1]}` : ''
  return <Navigate to={`${prefix}/community`} replace />
}

function HomePage() {
  return (
    <>
      <EventPopup />
      <Hero />
      <TreatmentSection />
      <InfoSection />
      <RealSelfie />
      <ReviewSection />
    </>
  )
}

const subRoutes = (
  <>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="eye" element={<EyePage />} />
    <Route path="nose" element={<NosePage />} />
    <Route path="facelift" element={<FaceliftPage />} />
    <Route path="facelift2" element={<FaceliftPage />} />
    <Route path="petti" element={<PettiPage />} />
    <Route path="laser" element={<LaserPage />} />
    <Route path="community" element={<LocationPage />} />
    <Route path="community/*" element={<CommunityRedirect />} />
  </>
)

export default function AppRoutes() {
  return (
    <>
      <LocaleAutoRedirect />
      <Helmet>
        <title>왕실의원 | 인천 성형외과 - 눈성형·코성형·안면거상 전문</title>
        <meta name="description" content="인천 부평 왕실의원. 15년 경력 원장이 상담부터 수술까지 직접 담당. 쌍커풀·눈매교정·코성형·안면거상·이마거상. 032-435-3571" />
        <link rel="canonical" href="https://xn--oy2bq2opmc0oo12cuzc.net/" />
      </Helmet>
      <Routes>
        <Route path="/" element={<LocaleLayout locale="ko" />}>
          {subRoutes}
        </Route>
        <Route path="/ja" element={<LocaleLayout locale="ja" />}>
          {subRoutes}
        </Route>
        <Route path="/en" element={<LocaleLayout locale="en" />}>
          {subRoutes}
        </Route>
        <Route path="/zh" element={<LocaleLayout locale="zh" />}>
          {subRoutes}
        </Route>
        <Route path="/vi" element={<LocaleLayout locale="vi" />}>
          {subRoutes}
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
