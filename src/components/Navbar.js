import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const NavLink = ({ to, children, mobile, onClick }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className={`cursor-pointer transition-colors duration-300 ${
      mobile
        ? 'block w-full py-3 px-4 text-center hover:bg-gray-100 dark:hover:bg-gray-800'
        : 'px-4 py-2 mx-2 rounded-md hover:text-primary-600 dark:hover:text-primary-400'
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="hero" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}
            className="text-2xl font-bold cursor-pointer text-gray-900 dark:text-white"
          >
            <span className="text-primary-600 dark:text-primary-400">NR</span>
            <span className="hidden sm:inline">.Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="about">About</NavLink>
            <NavLink to="education">Education</NavLink>
            <NavLink to="projects">Projects</NavLink>
            <NavLink to="skills">Skills</NavLink>
            <NavLink to="achievements">Achievements</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="py-2">
            <NavLink to="about" mobile onClick={closeMenu}>About</NavLink>
            <NavLink to="education" mobile onClick={closeMenu}>Education</NavLink>
            <NavLink to="projects" mobile onClick={closeMenu}>Projects</NavLink>
            <NavLink to="skills" mobile onClick={closeMenu}>Skills</NavLink>
            <NavLink to="achievements" mobile onClick={closeMenu}>Achievements</NavLink>
            <NavLink to="contact" mobile onClick={closeMenu}>Contact</NavLink>
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}

export default Navbar