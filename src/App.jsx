import React from 'react';
import './styles/global.css';
import './styles/sections.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer>
        <span>© 2026 Samuel Arteaga — Venezuela · Construido con React</span>
      </footer>
    </>
  );
}
