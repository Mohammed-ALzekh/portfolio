import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Analytics } from '@vercel/analytics/react'
function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: false, 
    });
  }, []);
  return (
     <div className="min-h-screen bg-gradient-to-b from-primary to-purple-900 text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <BackToTop />
      <Analytics />
    </div>
  )
}

export default App
