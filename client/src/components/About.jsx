// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Import framer-motion for animations
import React from 'react';

export default function About() {
  return (
    <section className="text-center py-5 bg-light text-dark">
      <div className="container">
        {/* About Title */}
        <motion.h2
          className="fw-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }} // Animation triggers every time on scroll
        >
          About Me
        </motion.h2>

        {/* About Text */}
        <motion.p
          className="lead mx-auto"
          style={{ maxWidth: '800px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Animation triggers every time
        >
          I’m <span className="text-danger fw-semibold">Ahil Aadithya</span> — a passionate coder and enthusiastic developer who loves building real-world solutions. I thrive on <span className="text-info fw-semibold">problem-solving</span> and constantly look for opportunities to grow through <span className="text-warning fw-semibold">hackathons</span>, innovation, and collaboration.
        </motion.p>

        {/* Download Resume Button */}
        <div className="text-center my-5" id="resume">
          <motion.a
            href="https://drive.google.com/uc?id=1eCBaAFmqFztr7nYwFORJtlIrh-u2qGHR&export=download"
            download
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }} // Triggers animation when in view
          >
            <motion.button
              className="btn btn-outline-dark px-4 py-2 fw-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Download My Resume
            </motion.button>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
