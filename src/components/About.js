import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            About Me
          </motion.h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8">
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Results-driven Software Developer with expertise in Java, Spring Boot, AWS, and Full Stack Development.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Skilled in designing scalable solutions, analyzing complex systems, and implementing emerging technologies.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Passionate about solving real-world challenges, collaborating in fast-paced environments, and staying ahead of
              industry trends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About