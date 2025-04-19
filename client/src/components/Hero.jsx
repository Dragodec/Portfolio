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
      className="text-center py-5 position-relative overflow-hidden"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <div className="container py-5" style={{ backdropFilter: 'blur(3px)' }}>
        
        {/* Sliding Text - Top: Eat Sleep */}
        <motion.div
          className="fw-bold mb-3"
          style={{
            fontSize: '1.5rem',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width: '100%',
            position: 'absolute',
            top: '10px',
            left: 0,
            zIndex: 2,
          }}
          animate={{ x: ['-100%', '-40%', '0%', '40%', '100%'] }}
          transition={{
            duration: 12,
            ease: [0.45, 0.05, 0.55, 0.95], // smooth easing
            times: [0, 0.3, 0.5, 0.7, 1], // slower at center
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <div style={{ display: 'inline-block' }}>Eat Sleep</div>
        </motion.div>

        {/* Typing Animation */}
        <motion.h2
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ fontSize: '2rem' }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <img
            src={Profile}
            alt="Profile"
            className="rounded-circle mb-4 shadow object-fit-cover"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />

<div style={{ width: '100%', height: '150px', position: 'relative' }}>
  <svg viewBox="0 0 600 150" style={{ width: '100%', height: '100%' }}>
    <defs>
      {/* Gradient for the liquid */}
      <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00C9FF" />
        <stop offset="50%" stopColor="#92FE9D" />
        <stop offset="100%" stopColor="#F9F871" />
      </linearGradient>

      {/* Create a mask using the text */}
      <mask id="text-mask">
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="60"
          fontWeight="bold"
          fontFamily="sans-serif"
          fill="white"
        >
          Ahil Aadithya
        </text>
      </mask>
    </defs>

    {/* Animate wave inside the masked text */}
    <g mask="url(#text-mask)">
      <rect width="100%" height="100%" fill="white" />

      {/* Liquid wave */}
      <path
        d="M0,120 C150,90 350,130 600,110 L600,150 L0,150 Z"
        fill="url(#liquidGradient)"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 60; 0 -60; 0 60"  // Increased rising value for higher liquid movement
          dur="6s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
</div>

          {/* Social Links */}
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <motion.a
              href="https://github.com/Dragodec"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark d-flex align-items-center gap-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
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
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
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
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
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

        {/* Sliding Text - Bottom: Code Repeat */}
          <motion.div
            className="fw-bold"
            style={{
              fontSize: '1.5rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              width: '100%',
              position: 'absolute',
              bottom: '10px',
              left: 0,
              zIndex: 2,
            }}
            animate={{ x: ['100%', '40%', '0%', '-40%', '-100%'] }}
            transition={{
              duration: 12,
              ease: [0.45, 0.05, 0.55, 0.95],
              times: [0, 0.3, 0.5, 0.7, 1],
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            <div style={{ display: 'inline-block' }}>Code Repeat</div>
          </motion.div>
        
      </div>
    </section>
  );
}
