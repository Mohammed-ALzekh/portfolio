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
function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الانيميشن بالمللي ثانية
      easing: 'ease-in-out', // نوع easing
      once: false, // لو بدك الانيميشن يشتغل مرة واحدة أو كل مرة يدخل العنصر للـ viewport
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
      {/* سيتم إضافة المكونات الأخرى هنا لاحقًا */}
    </div>
  )
}

export default App
