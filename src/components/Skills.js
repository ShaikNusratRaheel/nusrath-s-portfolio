import { motion } from 'framer-motion'

const SkillCategory = ({ title, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-8"
    >
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <span 
            key={i}
            className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      category: "Programming Languages",
      skills: ["C", "Java", "Python"]
    },
    {
      id: 2,
      category: "Web Development Technologies",
      skills: ["HTML", "CSS", "Javascript"]
    },
    {
      id: 3,
      category: "Frameworks and Tools",
      skills: ["Spring Boot", "Hibernate", "React", "MySQL", "Eclipse", "VS Code", "Git", "GitHub"]
    },
    {
      id: 4,
      category: "Relevant Coursework",
      skills: ["Operating Systems", "Database Systems", "Data Structures and Algorithms"]
    },
    {
      id: 5,
      category: "Soft Skills",
      skills: ["Problem Solving", "Teamwork", "Leadership", "Communication Skills", "Adaptability"]
    }
  ]
  
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Skills
          </motion.h2>
        </div>
        
        <div className="max-w-4xl mx-auto mt-12">
          {skillsData.map((item, index) => (
            <SkillCategory 
              key={item.id}
              title={item.category}
              skills={item.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills