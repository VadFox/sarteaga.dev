import React from 'react';
import { data } from '../data';
import { useReveal } from '../hooks/useReveal';

function EduItem({ period, role, institution, delay }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`tl-item ${visible ? 'tl-item--visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="tl-item__period">{period}</div>
      <div className="tl-item__role">{role}</div>
      <div className="tl-item__company">{institution}</div>
    </div>
  );
}

export default function Education() {
  const { ref, visible } = useReveal();

  return (
    <section className="section section--dark" id="about">
      <div className="section__inner">
        <div ref={ref} className={`section-header ${visible ? 'section-header--visible' : ''}`}>
          <span className="section-num">04</span>
          <h2 className="section-title">Formación</h2>
          <div className="section-line" />
        </div>
        <div className="timeline">
          {data.education.map((e, i) => (
            <EduItem key={e.role} {...e} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
