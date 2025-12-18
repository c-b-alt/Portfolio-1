import React from 'react';
import './Skills.css';

// Import images
import chatgpt from '../assets/Chatgpt-logo.png';
import gemini from '../assets/Gemini-logo.png';
import looker from '../assets/Looker icone.png';
import perplexity from '../assets/Perplexity-Logo.png';
import sql from '../assets/Sql_data_base_with_logo.png';
import vscode from '../assets/Vscode-logo.png';
import canva from '../assets/canva-logo-hd.png';
import cursor from '../assets/cursor-ai-logo-hd.png';
import gamma from '../assets/gamma-ai-logo-hd.png';
import github from '../assets/github-logo.png';
import googleAI from '../assets/google-ai-studio-logo-hd.png';
import sheets from '../assets/google-sheets-logo-hd.png';
import lovable from '../assets/lovable-ai-logo-hd.png';
import make from '../assets/make-logo.png';
import mistral from '../assets/mistral-ai-app-icon-hd.png';
import python from '../assets/python-logo-hd.png';
import reactLogo from '../assets/react.svg';
import replit from '../assets/replit-ai-logo-hd.png';
import suno from '../assets/suno-ai-logo-hd.png';
import webflow from '../assets/webflow-logo-hd.png';

const tools = [
    { name: "React", src: reactLogo },
    { name: "Python", src: python },
    { name: "Make", src: make },
    { name: "GitHub", src: github },
    { name: "VS Code", src: vscode },
    { name: "Cursor", src: cursor },
    { name: "ChatGPT", src: chatgpt },
    { name: "Gemini", src: gemini },
    { name: "Mistral", src: mistral },
    { name: "Perplexity", src: perplexity },
    { name: "Google AI", src: googleAI },
    { name: "Lovable", src: lovable },
    { name: "Gamma", src: gamma },
    { name: "Suno", src: suno },
    { name: "Replit", src: replit },
    { name: "Webflow", src: webflow },
    { name: "Looker", src: looker },
    { name: "SQL", src: sql },
    { name: "Google Sheets", src: sheets },
    { name: "Canva", src: canva },
];

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="skills-bg">
                <div className="skills-glow glow-1"></div>
                <div className="skills-glow glow-2"></div>
            </div>
            <div className="container">
                <h2 className="section-title">Les outils maîtrisés</h2>

                <div className="skills-carousel">
                    <div className="skills-track">
                        {/* Double the list to create seamless loop */}
                        {[...tools, ...tools].map((tool, index) => (
                            <div key={index} className="skill-item">
                                <div className="skill-icon-wrapper">
                                    <img src={tool.src} alt={tool.name} className="skill-icon" />
                                </div>
                                <span className="skill-name">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
