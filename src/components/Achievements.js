import { motion } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'

const Achievements = () => {
  const achievementsData = [
    {
      id: 1,
      title: "Red Hat Certified Enterprise Application Developer (EX183)",
      description: "Score: 265/300",
      link: "#"
    },
    {
      id: 2,
      title: "AWS Certified Cloud Practitioner CLF-C02",
      description: "",
      link: "#"
    },
    {
      id: 3,
      title: "LeetCode Profile",
      description: "Active problem solver on competitive coding platform",
      link: "https://leetcode.com/ShaikNusratRaheel/"
    }
  ]
  
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Achievements
          </motion.h2>
        </div>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div className="grid md:grid-cols-2 gap-6">
            {achievementsData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 flex flex-col h-full"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
                    <FiAward className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
                
                {item.link && (
                  <div className="mt-auto pt-2">
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 text-sm inline-flex items-center hover:underline"
                    >
                      View credential <FiExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements