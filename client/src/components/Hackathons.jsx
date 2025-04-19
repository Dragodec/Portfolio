import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaTrophy, FaRocket, FaMedal } from 'react-icons/fa';

const hackathons = [
  {
    title: 'Rajasthan Police Hackathon 1.0',
    result: 'Finalist',
    icon: <FaRocket />,
  },
  {
    title: 'College Ideathon',
    result: 'Winner',
    icon: <FaTrophy />,
  },
  {
    title: 'Bangalore Angel-Hack',
    result: 'Finalist',
    icon: <FaRocket />,
  },
  {
    title: 'Smart India Hackathon 2024',
    result: 'Finalist',
    icon: <FaRocket />,
  },
  {
    title: 'Pune Metro Hackathon',
    result: 'Finalist',
    icon: <FaRocket />,
  },
  {
    title: 'Thiran Hackathon',
    result: 'Category Winner',
    icon: <FaMedal />,
  },
];

export default function Hackathons() {
  return (
    <section className="container my-5" id="hackathons">
      <h2 className="text-center fw-bold mb-5 text-dark">Hackathon & Ideathon Highlights 🚀</h2>
      <div className="row justify-content-center">
        {hackathons.map((item, index) => (
          <motion.div
            key={index}
            className="col-md-5 col-lg-4 m-3"
            initial={{ opacity: 0, y: 30 }} // Initial state
            animate={{ opacity: 1, y: 0 }}  // Animation state when the component comes into view
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            whileInView={{ opacity: 1, y: 0 }} // When in view, animate
            viewport={{ once: false }} // Ensures animation happens every time the component comes into view
          >
            <div className="card bg-white text-dark shadow-lg border border-light p-4 rounded-4 h-100 glow-on-hover">
              <div className="d-flex align-items-center mb-3 fs-3 text-danger">
                {item.icon}
                <span className="ms-3 text-dark">{item.title}</span>
              </div>
              <p className="fs-5 mb-0 text-muted">
                <strong>{item.result}</strong>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
