import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import './App.css';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Projects />
    <Skills />
    <About />
    <Footer />
  </>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
