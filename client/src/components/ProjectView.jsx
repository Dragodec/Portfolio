import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './projectsData';
import { FaGithub } from 'react-icons/fa';

export default function ProjectView() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) return <div className="text-center mt-5">Project not found 😢</div>;

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">{project.title}</h2>

      {/* Video Demo */}
      {project.video && (
        <div className="mb-4">
          <h5 className="mb-3">🎬 Demo Video:</h5>
          <video
            className="w-100 rounded shadow"
            autoPlay
            muted
            loop
            controls
            style={{ maxHeight: '600px', objectFit: 'cover' }}
          >
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Description & Tech Stack */}
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

      {/* Story Section */}
      {project.story && (
        <div className="mb-4">
          <h4>📖 All about this project:</h4>
          <p>{project.story}</p>
        </div>
      )}

      {/* GitHub Link */}
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
