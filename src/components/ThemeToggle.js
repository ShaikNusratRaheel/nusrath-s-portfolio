import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      onClick={toggleDarkMode}
      className="fixed right-5 top-20 z-40 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
    </motion.button>
  );
}

export default ThemeToggle