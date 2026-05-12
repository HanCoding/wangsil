import Header from './components/Header'
import Hero from './components/Hero'
import TreatmentSection from './components/TreatmentSection'
import InfoSection from './components/InfoSection'
import RealSelfie from './components/RealSelfie'
import CommunitySection from './components/CommunitySection'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TreatmentSection />
        <InfoSection />
        <RealSelfie />
        <CommunitySection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
