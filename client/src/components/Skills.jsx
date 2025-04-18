import { FaDocker, FaGithub, FaNodeJs, FaReact, FaJs, FaPython, FaJava, FaCode, FaFileCode, FaLock, FaCogs } from 'react-icons/fa';  
import { SiSpringboot, SiFlask, SiMongodb, SiExpress, SiFirebase, SiTailwindcss, SiVite, SiBootstrap, SiHtml5, SiCss3 } from 'react-icons/si';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';  // Import motion from framer-motion

const coreSkills = {
  "Languages": [
    { name: "C", icon: <FaCode /> },  
    { name: "C++", icon: <FaFileCode /> },  
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <FaJs /> },
  ],
  "Frontend": [
    { name: "React", icon: <FaReact /> },
    { name: "HTML", icon: <SiHtml5 /> },  
    { name: "CSS", icon: <SiCss3 /> },  
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Vite", icon: <SiVite /> },
  ],
  "Backend / API": [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "FastAPI", icon: <SiFlask /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "JWT", icon: <FaLock /> },  
  ],
  "Database & Auth": [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "JSON-Server", icon: <FaCogs /> },  
  ],
  "Tools / DevOps": [
    { name: "Git", icon: <FaGithub /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Docker", icon: <FaDocker /> },
  ],
  "Competitive Programming": [
    { name: "HackerRank", icon: <FaCode /> },
    { name: "HackerEarth", icon: <FaCode /> },
    { name: "CodeChef", icon: <FaCode /> },
    { name: "LeetCode", icon: <FaCode /> },
  ]
};

const softSkills = [
  "Fluent in English",
  "Team Player",
  "Problem Solver",
  "Out-of-the-Box Thinking",
  "Prompt Engineering",
];

export default function Skills() {
  return (
    <section className="container py-5" id="skills">
      <h2 className="text-center fw-bold mb-5">Skills</h2>

      <div className="row">
        {/* Core Skills */}
        {Object.entries(coreSkills).map(([category, skills], index) => (
          <motion.div
            key={category}
            className="col-md-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card p-4 bg-light rounded shadow-sm h-100">
              <h5 className="fw-semibold mb-3">{category}</h5>
              <div className="d-flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="badge d-flex align-items-center bg-secondary text-light fs-6 py-2 px-3 mb-2 me-2 rounded-pill"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      {skill.icon && <span className="fs-4">{skill.icon}</span>}
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Soft Skills */}
      <motion.div
        className="mt-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h4 className="fw-bold mb-3">Soft Skills</h4>
        <div className="d-flex flex-wrap gap-3">
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="badge bg-warning text-dark fs-6 py-2 px-3 mb-2 rounded-pill"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
