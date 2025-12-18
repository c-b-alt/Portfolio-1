import React, { useState, useEffect } from 'react';
import './Hero.css';
import profilePhoto from '../assets/photo-portfolio.png';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ["Développeur Web", "Automatisation No-Code"];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, words]);

    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-subtitle">Bonjour, je suis</span>
                    <h1 className="hero-name">Corentin Ballonad</h1>

                    <div className="hero-title typewriter-container">
                        <span className="gradient-text">{text}</span>
                        <span className="cursor">|</span>
                    </div>

                    <h2 className="hero-school-info">
                        Étudiant à <span className="highlight">Eugenia School</span>
                        <br />
                        Bachelor AI Applied to Business
                    </h2>

                    <p className="hero-description">
                        Passionné par la tech et le sport, j'aspire à devenir entrepreneur.
                        J'aime explorer les technologies d'IA pour créer de la valeur et innover.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">Voir mes projets</a>
                        <a href="#contact" className="btn btn-outline">Me contacter</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="glow-circle"></div>
                    <img src={profilePhoto} alt="Portrait" className="avatar-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
