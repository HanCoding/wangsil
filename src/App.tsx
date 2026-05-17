import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import TreatmentSection from './components/TreatmentSection'
import InfoSection from './components/InfoSection'
import RealSelfie from './components/RealSelfie'
import CommunitySection from './components/CommunitySection'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import AboutPage from './pages/AboutPage'
import EyePage from './pages/EyePage'
import NosePage from './pages/NosePage'
import FaceliftPage from './pages/FaceliftPage'
import './App.css'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>왕실의원 | 인천 성형외과 - 눈성형·코성형·안면거상 전문</title>
        <meta name="description" content="인천 부평 왕실의원. 15년 경력 원장이 상담부터 수술까지 직접 담당. 쌍커풀·눈매교정·코성형·안면거상·이마거상. 032-435-3571" />
        <link rel="canonical" href="https://wangsil.pages.dev/" />
      </Helmet>
      <Hero />
      <TreatmentSection />
      <InfoSection />
      <RealSelfie />
      <CommunitySection />
    </>
  )
}

export default function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/eye" element={<EyePage />} />
          <Route path="/nose" element={<NosePage />} />
          <Route path="/facelift" element={<FaceliftPage />} />
          <Route path="/facelift2" element={<FaceliftPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </BrowserRouter>
    </HelmetProvider>
  )
}
