import { useScrollSpy } from './hooks/useScrollSpy'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'

function AppContent() {
  const navIds = ['home', 'about', 'projects', 'experience', 'contact']
  const activeSection = useScrollSpy(navIds, 200)

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
