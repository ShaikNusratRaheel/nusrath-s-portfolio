import { motion } from 'framer-motion'

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "K L E F Deemed To Be University",
      degree: "Bachelor of Technology",
      major: "Computer Science and Engineering",
      period: "Aug 2022 - Present",
      grade: "CGPA: 9.68/10 (current)"
    },
    {
      id: 2,
      institution: "Sri Chaitanya Junior College, Vijayawada, Andhra Pradesh",
      degree: "Senior Secondary Education (MPC)",
      period: "Jun 2020 - Mar 2022",
      grade: "Percentage: 94.7%"
    }
  ]
  
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Education
          </motion.h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 last:mb-0"
            >
              <div className="card p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary-500"></div>
                <div className="ml-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {item.institution}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {item.degree}
                    {item.major && <span className="block text-sm mt-1">Major: {item.major}</span>}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {item.period}
                  </p>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    {item.grade}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education