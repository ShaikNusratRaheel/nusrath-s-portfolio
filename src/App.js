
import ThemeToggle from './components/ThemeToggle';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import { useState, useEffect } from 'react'

import './index.css';
function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check system preference
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(isDarkMode)

    // Apply theme class
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
      </main>
      <Footer />
    </div>
  
  );
}

export default App;
