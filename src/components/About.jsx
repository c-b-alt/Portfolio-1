import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">À Propos</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Depuis mon arrivée à <strong>Eugenia School</strong>, j'ai eu l'occasion de découvrir de nouveaux outils et de nouvelles technologies dans le monde du développement web et de l'automatisation.
                            Passionné par le domaine de la tech, cela m'a permit de comprendre et surtout maîtriser ces nouveaux outils et ces nouvelles technologies plus facilement.
                        </p>
                        <p>
                            Je ne me contente pas d'écrire des prompts ; je cherche à comprendre ce que j'écris pour être capable de modifier les informations les plus simple à la main.
                            Pour les projets google Sheets et Looker Studio, je m'assure que les données soient bien triées avant de m'en servir.
                        </p>
                        <p>
                            Ce Portfolio ne se limite pas à un projet, mais il me sert surtout de document qui permettra aux personnes qui le consultent, de savoir ce que j'ai fais et ce que je suis capable de faire.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
