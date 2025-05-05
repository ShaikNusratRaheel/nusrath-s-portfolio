import { motion } from 'framer-motion'
import { FiExternalLink, FiCode } from 'react-icons/fi'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card h-full flex flex-col"
    >
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
            {project.period}
          </span>
        </div>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span 
                key={i} 
                className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-4">
          {project.points.map((point, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2 mt-1 text-primary-500">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
        <div className="flex justify-end gap-2">
          {project.demo && (
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="View demo"
            >
              <FiExternalLink size={18} />
            </a>
          )}
          {project.code && (
            <a 
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="View code"
            >
              <FiCode size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "ProFolio",
      period: "July 2024 - Nov 2024",
      technologies: ["Java", "Spring Boot", "JSP", "MySQL"],
      points: [
        "Developed a Spring Boot-based project and portfolio management platform that enables students to upload projects, track progress through milestones and manage their portfolios efficiently.",
        "Designed a role-based functionality for admins to manage students, mentors, and their mappings, and for mentors to review projects, track progress, and provide iterative feedback.",
        "Utilized a normalized MySQL database for efficient data handling and JSP for frontend integration, ensuring a responsive and organized user experience."
      ],
      demo: "#",
      code: "#"
    },
    {
      id: 2,
      title: "AcadameX",
      period: "Feb 2024 - March 2024",
      technologies: ["MERN Stack", "React JS", "Node JS", "MongoDB"],
      points: [
        "Developed a Mern Stack-based Student Course Management System to manage faculty, courses, and student registrations, streamlining academic operations.",
        "Implemented an admin module to add and assign faculty, manage courses, and monitor student course registrations.",
        "Designed a responsive user interface with React JS, using MongoDB database and Node JS, Express JS as server side technologies for efficient data storage and retrieval, supporting secure and organized academic data management."
      ],
      demo: "#",
      code: "#"
    },
    {
      id: 3,
      title: "Serverless EventManager",
      period: "Jan 2025 - Apr 2025",
      technologies: ["AWS Lambda", "DynamoDB", "S3", "API Gateway", "Cognito", "CloudFront"],
      points: [
        "Designed and developed a fully serverless Event Management System using AWS services to manage events, user registrations, and image hosting.",
        "Implemented RESTful APIs using AWS Lambda and API Gateway with DynamoDB as a NoSQL backend for storing event and user data.",
        "Enabled secure user authentication and authorization using Amazon Cognito, and deployed the frontend via AWS Amplify.",
        "Integrated Amazon SES to send event registration confirmation emails and notifications to users."
      ],
      demo: "#",
      code: "#"
    }
  ]
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Projects
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects