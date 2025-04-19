import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap'; // install bootstrap if not used
import projectsData from './projectsData'; // custom project data file
import { FaGithub } from 'react-icons/fa';

export default function ProjectView() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) return <div className="text-center mt-5">Project not found 😢</div>;

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">{project.title}</h2>

      <Carousel fade interval={3000} className="mb-4">
        {project.images.map((img, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100 rounded" src={img} alt={`Slide ${idx}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="mb-4">
        <h4>Overview:</h4>
        <p>{project.description}</p>

        <h5>🔧 Tech Stack:</h5>
        <ul>
          {project.techStack.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-dark d-inline-flex align-items-center gap-2"
      >
        <FaGithub /> View on GitHub
      </a>
    </div>
  );
}
