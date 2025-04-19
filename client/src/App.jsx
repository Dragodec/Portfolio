import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Hackathons from './components/Hackathons';
import About from './components/About';
import ContactMe from './components/Contact';
import ProjectView from './components/ProjectView';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Hackathons />
            <ContactMe />
          </>
        } />
        <Route path="/project/:id" element={<ProjectView />} />
      </Routes>
    </Router>
  );
}