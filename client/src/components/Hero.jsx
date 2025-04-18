// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Profile from '../assets/profile.jpg';
import HeroBg from '../assets/hero-bg.png';
import LeetCodeLogo from '../assets/LeetCodeLogo.svg';

export default function Hero() {
  return (
    <section
      className="text-center py-5 position-relative"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <div className="container py-5" style={{ backdropFilter: 'blur(3px)' }}>
        {/* Typing Animation */}
        <motion.h2
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ fontSize: '2rem' }}
          whileInView={{ opacity: 1 }} // Ensures animation triggers on scroll
          viewport={{ once: false }} // Ensures it triggers each time on scroll
        >
          I'm a{' '}
          <TypeAnimation
            sequence={[
              'Web Developer', 2000,
              '', 1000,
              'Prompt Engineer', 2000,
              '', 1000,
              'Problem Solver', 2000,
              '', 1000,
              'Hackathon Enthusiast', 2000,
              '', 1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ color: 'crimson', display: 'inline-block' }}
            repeat={Infinity}
          />
        </motion.h2>

        {/* Profile Image and Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }} // Ensure it animates on scroll
          viewport={{ once: false }} // Triggers every time the image comes into view
        >
          <img
            src={Profile}
            alt="Profile"
            className="rounded-circle mb-4 shadow object-fit-cover"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />

          <h1 className="fw-bold">Ahil Aadithya</h1>

          {/* Social Links */}
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <motion.a
              href="https://github.com/Dragodec"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark d-flex align-items-center gap-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              whileInView={{ opacity: 1 }} // Animation on scroll
              viewport={{ once: false }} // Triggers every time
            >
              <FaGithub size={20} />
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ahil-aadithya-r-s-8ab440279/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary d-flex align-items-center gap-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              whileInView={{ opacity: 1 }} // Animation on scroll
              viewport={{ once: false }} // Triggers every time
            >
              <FaLinkedin size={20} />
              LinkedIn
            </motion.a>

            <motion.a
              href="https://leetcode.com/your-leetcode-username"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning d-flex align-items-center gap-2 text-dark"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              whileInView={{ opacity: 1 }} // Animation on scroll
              viewport={{ once: false }} // Triggers every time
            >
              <img
                src={LeetCodeLogo}
                alt="LeetCode"
                style={{ width: '20px', height: '20px' }}
              />
              LeetCode
            </motion.a>
          </div>
        </motion.div>
        
      </div>
      
    </section>
  );
}
