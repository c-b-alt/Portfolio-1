import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <h2 className="footer-title">Travaillons ensemble</h2>
                    <p className="footer-text">
                        Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter.
                    </p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/corentin-ballonad" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                        <a href="https://github.com/c-b-alt" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                        <a href="mailto:cballonad@eugeniaschool.com" className="social-link">Email</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} - Fait avec passion à <span className="highlight">Eugenia School</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
