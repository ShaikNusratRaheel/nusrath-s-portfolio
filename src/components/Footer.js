import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { Link } from 'react-scroll'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shaik NusratRaheel</h3>
            <p className="text-gray-400 mb-4">
              Software Developer specializing in Java, Spring Boot, AWS, and Full Stack Development.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/ShaikNusratRaheel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/Shaik-NusratRaheel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link 
                  to="projects" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="skills" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  to="achievements" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Achievements
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiMail className="mr-2 text-primary-400" />
                <a 
                  href="mailto:shaiknusratraheel@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  shaiknusratraheel@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2 text-primary-400" />
                <a 
                  href="tel:8328646704"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  8328646704
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Resume</h3>
            <p className="text-gray-400 mb-4">
              Download my complete resume to learn more about my experience and qualifications.
            </p>
            <a 
              href="https://drive.google.com/file/d/1V1aQs-MXyq3R-_L3CJvj2HnNQiLygsZ5/view?usp=sharing"
              className="btn-primary"
            >
              Download CV
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} Shaik NusratRaheel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer