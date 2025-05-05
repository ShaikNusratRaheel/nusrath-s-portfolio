import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="text-center md:text-left">
            <motion.span 
              variants={item}
              className="inline-block px-3 py-1 text-sm rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 mb-4"
            >
              Software Developer
            </motion.span>
            <motion.h1 
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              Shaik <span className="text-primary-600 dark:text-primary-400">NusratRaheel</span>
            </motion.h1>
            <motion.p 
              variants={item}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
            >
              Passionate Developer with expertise in Java, Spring Boot, AWS, and Full Stack Development.
            </motion.p>
            
            <motion.div 
              variants={item}
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
            >
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="btn border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                View Projects
              </a>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="flex gap-4 justify-center md:justify-start text-gray-600 dark:text-gray-400"
            >
              <a 
                href="https://github.com/ShaikNusratRaheel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/Shaik-NusratRaheel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
              <a 
                href="mailto:shaiknusratraheel@gmail.com" 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="Email"
              >
                <FiMail size={24} />
              </a>
              <a 
                href="tel:8328646704" 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="Phone"
              >
                <FiPhone size={24} />
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            variants={item}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mx-auto overflow-hidden">
                {/* Profile image can be added here */}
                <div className="absolute inset-0 flex items-center justify-center text-6xl text-white font-bold">
                  NR
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-400 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-300 rounded-full -z-10"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero