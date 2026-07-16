import React from 'react';
import { data } from '../data';
import { useReveal } from '../hooks/useReveal';
import './Experience.css';

function TlItem({ period, role, company, desc, delay }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`tl-item ${visible ? 'tl-item--visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="tl-item__period">{period}</div>
      <div className="tl-item__role">{role}</div>
      <div className="tl-item__company">{company}</div>
      {desc && <p className="tl-item__desc">{desc}</p>}
    </div>
  );
}

export default function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section className="section section--dark" id="experience">
      <div className="section__inner">
        <div ref={ref} className={`section-header ${visible ? 'section-header--visible' : ''}`}>
          <span className="section-num">02</span>
          <h2 className="section-title">Experiencia</h2>
          <div className="section-line" />
        </div>
        <div className="timeline">
          {data.experience.map((e, i) => (
            <TlItem key={e.role} {...e} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
