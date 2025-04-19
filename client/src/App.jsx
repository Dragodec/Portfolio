import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Hackathons from './components/Hackathons';
import About from './components/About';
import ContactMe from './components/Contact';
import ProjectView from './components/ProjectView';
import LoadingSpinner from './components/LoadingSpinner'; // Import the Loading Spinner

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Event listener for window load
    const handleLoad = () => {
      setLoading(false);
    };

    // Set up listener for when the page is fully loaded
    window.addEventListener('load', handleLoad);

    // Cleanup listener when the component unmounts
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <Router>
      {loading && <LoadingSpinner color="#e74c3c" />} {/* Spinner shown while loading */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Hackathons />
              <ContactMe />
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectView />} />
      </Routes>
    </Router>
  );
}
