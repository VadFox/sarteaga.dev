import React from 'react';
import { data } from '../data';
import { useReveal } from '../hooks/useReveal';
import './Skills.css';

function SkillCat({ category, items, delay }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`skill-cat ${visible ? 'skill-cat--visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="skill-cat__title">{category}</div>
      <div className="skill-cat__tags">
        {items.map((item) => (
          <span key={item} className="tag">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section className="section" id="skills">
      <div ref={ref} className={`section-header ${visible ? 'section-header--visible' : ''}`}>
        <span className="section-num">01</span>
        <h2 className="section-title">Stack técnico</h2>
        <div className="section-line" />
      </div>
      <div className="skills-grid">
        {data.skills.map((s, i) => (
          <SkillCat key={s.category} {...s} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
