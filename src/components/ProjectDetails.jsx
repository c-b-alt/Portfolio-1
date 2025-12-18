import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="project-not-found">
                <h2>Projet introuvable</h2>
                <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
            </div>
        );
    }

    return (
        <div className="project-details-page">
            <nav className="details-nav">
                <Link to="/" className="back-link">
                    ← Retour
                </Link>
            </nav>

            <header className="details-header" style={{ backgroundImage: project.image }}>
                <div className="details-header-content container">
                    <span className="details-role">{project.role}</span>
                    <h1 className="details-title">{project.title}</h1>
                </div>
            </header>

            <div className="container details-content">
                <div className="details-main">
                    <h2>À propos du projet</h2>
                    <p>{project.description}</p>

                    <div className="details-stack">
                        <h3>Technologies utilisées</h3>
                        <div className="stack-tags">
                            {project.stack.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="details-actions">
                        {project.link && project.link !== "#" ? (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link-card"
                                style={{ backgroundImage: project.image }}
                            >
                                <div className="link-card-content">
                                    <span className="link-label">Accéder au projet</span>
                                    <span className="link-arrow">↗</span>
                                </div>
                            </a>
                        ) : (
                            <div className="project-offline">
                                <p>Le site n'est actuellement pas en ligne.</p>
                            </div>
                        )}
                    </div>

                    {project.gallery && project.gallery.length > 0 && (
                        <div className="details-gallery">
                            <h3>Aperçu</h3>
                            <div className="gallery-grid">
                                {project.gallery.map((img, index) => (
                                    <div key={index} className="gallery-item">
                                        <img src={img} alt={`Aperçu ${project.title} ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
