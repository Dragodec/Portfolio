// Projects.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projects from './projectsData'; // ← NEW import

export default function Projects() {
  return (
    <section className="container py-5" id="projects">
      <h2 className="text-center mb-5 fw-bold">Projects</h2>
      <div className="row">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.id}
            className="col-md-6 col-lg-4 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            <Link to={`/project/${proj.id}`} className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm border-0 hover-shadow position-relative">
                {/* Optional status badge */}
                {proj.status === "ongoing" && (
  <span
    className="position-absolute top-0 end-0 bg-warning text-dark px-2 py-1 rounded-start"
    style={{
      fontSize: "0.75rem",
      fontWeight: "600",
      marginTop: "0.5rem",
      marginRight: "0.5rem",
      zIndex: 1,
    }}
  >
    ONGOING
  </span>
)}

                <div className="card-body">
                  <h5 className="card-title fw-semibold">{proj.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{proj.techStack?.join(", ")}</h6>
                  <p className="card-text">{proj.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
