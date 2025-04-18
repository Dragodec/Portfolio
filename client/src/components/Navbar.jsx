import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Logo from '../assets/Logo1RB.png'; // Adjust the path if needed
import '../App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'Projects', 'Skills', 'Hackathons', 'Contact', 'Resume'];

  return (
    <nav className="navbar navbar-expand-lg bg-white px-4 shadow-sm">
      <a className="navbar-brand d-flex align-items-center gap-2" href="#">
        <img
          src={Logo}
          alt="Logo"
          style={{
            height: '90px',
            maxHeight: '90px',
            objectFit: 'contain',
            marginTop: '-10px',
            marginBottom: '-10px',
          }}
        />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`}>
        <ul className="navbar-nav">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className="nav-item mx-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
              viewport={{ once: false }} // Ensure it triggers every time on scroll
            >
              <a
                className="nav-link text-dark text-opacity-75 fw-light"
                href={`#${link.toLowerCase()}`}
                style={{ fontSize: '1.05rem' }}
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
