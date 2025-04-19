// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: "calculator",
    title: "Calculator",
    tech: "HTML, CSS, JS",
    desc: "A basic arithmetic calculator built from scratch.",
  },
  {
    id: "magazine-backend",
    title: "Magazine Management Backend",
    tech: "Spring Boot",
    desc: "Helps manage magazines and provides insights — the go-to backend for publishers and readers!",
  },
  {
    id: "gift-portal",
    title: "Custom Gift Portal",
    tech: "React, Bootstrap, JSON Server",
    desc: "A simulated gift store with dynamic products and cart logic.",
  },
  {
    id: "profile-card",
    title: "Personal Profile Card",
    tech: "HTML, CSS",
    desc: "A digital profile card showcasing personal info in a compact layout.",
  },
  {
    id: "resq-app",
    title: "RESQ App",
    tech: "MERN Stack",
    desc: "A disaster rescue app coordinating hubs, rescuers, and victims.",
  },
  {
    id: "paatu-n-vibe",
    title: "PaatuNVibe",
    tech: "FARM Stack (FastAPI, React, MongoDB)",
    desc: "A Spotify-inspired music platform to vibe with your favorite tracks.",
  },
];

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
              <div className="card h-100 shadow-sm border-0 hover-shadow">
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{proj.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{proj.tech}</h6>
                  <p className="card-text">{proj.desc}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
