import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Import motion from framer-motion

const ContactMe = () => {
  return (
    <motion.section
      className="py-5 bg-light text-dark"
      id="contact"
      initial={{ opacity: 0, y: 30 }} // Initial state (off-screen with low opacity)
      whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position when in view
      transition={{ type: 'spring', stiffness: 100 }} // Smooth spring animation
      viewport={{ once: true }} // Ensures animation happens once when the component enters the viewport
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Contact Me 📬</h2>
        <p className="lead">
          Got a question, collaboration idea, or just want to say hi?
          <br />
          Feel free to reach out!
        </p>

        <div className="d-flex justify-content-center align-items-center mt-4 flex-wrap gap-3">
          <motion.div
            className="bg-white border rounded px-4 py-3 shadow-sm d-flex align-items-center gap-2"
            initial={{ opacity: 0 }} // Initial opacity for the contact details
            whileInView={{ opacity: 1 }} // Fade in when in view
            transition={{ delay: 0.2 }} // Slight delay for staggered animation
          >
            <strong>Email:</strong>
            <a href="mailto:ahilaadithya01@gmail.com" className="text-primary">
              ahilaadithya01@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMe;
