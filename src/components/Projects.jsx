import React from 'react';
import { data } from '../data';
import { useReveal } from '../hooks/useReveal';
import './Projects.css';

function ProjectCard({ featured, badge, title, desc, tech, link, linkLabel, delay }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`project-card ${featured ? 'project-card--featured' : ''} ${visible ? 'project-card--visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className={`project-badge ${featured ? 'project-badge--featured' : 'project-badge--active'}`}>
        {badge}
      </span>
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{desc}</p>
      <div className="project-tech">
        {tech.map((t) => (
          <span key={t} className="tech-chip">{t}</span>
        ))}
      </div>
      {link && (
        <a className="project-link" href={link} target="_blank" rel="noreferrer">
          <i className="ti ti-brand-github" aria-hidden="true" />
          {linkLabel}
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section className="section" id="projects">
      <div ref={ref} className={`section-header ${visible ? 'section-header--visible' : ''}`}>
        <span className="section-num">03</span>
        <h2 className="section-title">Proyectos</h2>
        <div className="section-line" />
      </div>
      <div className="projects-grid">
        {data.projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} delay={i * 120} />
        ))}
      </div>
    </section>
  );
}
