import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Why from './components/Why'
import Heroes from './components/Heroes'
import Journey from './components/Journey'
import Faq from './components/Faq'
import { Contact, FinalCta, FloatingWhatsApp, Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Why />
        <Heroes />
        <Journey />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
