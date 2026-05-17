import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
  )
}
