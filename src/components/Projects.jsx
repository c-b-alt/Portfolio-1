import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Projets Eugenia School</h2>
                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image" style={{ backgroundImage: project.image }}>
                                <div className="project-overlay">
                                    <Link to={`/project/${project.id}`} className="btn-view">Voir le projet</Link>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-role">{project.role}</div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-stack">
                                    {project.stack.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
