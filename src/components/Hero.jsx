import React, { useEffect, useState } from 'react';
import { data } from '../data';
import { iconMap } from '../iconMap';
import './Hero.css';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = data.title[titleIndex];
    let timeout;
    if (!deleting) {
      if (displayText.length < word.length) {
        timeout = setTimeout(() => setDisplayText(word.slice(0, displayText.length + 1)), 100);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 60);
      } else {
        setDeleting(false);
        setTitleIndex((i) => (i + 1) % data.title.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, deleting, titleIndex]);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const allSkills = [...new Set(data.skills.flatMap((g) => g.items))];

  return (
    <section className="hero" id="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="hero__layout">
        <div className="hero__content">
          <div className="hero__tag">disponible para proyectos</div>

          <h1 className="hero__name">
            Samuel<br />
            <span className="hero__name--accent">Arteaga</span>
          </h1>

          <p className="hero__title">
            <span className="hero__typed">{displayText}</span>
            <span className="hero__cursor">_</span>
          </p>

          <p className="hero__bio">{data.bio}</p>

          <blockquote className="hero__quote">"{data.quote}"</blockquote>

          <div className="hero__cta">
            <button className="btn-primary" onClick={() => scrollTo('#projects')}>
              Ver proyectos
            </button>
            <button className="btn-outline" onClick={() => scrollTo('#contact')}>
              Contactar
            </button>
          </div>

          <div className="hero__stats">
            {data.stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-num">{s.num}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__techstack" aria-hidden="false">
          {allSkills.map((name) => {
            const icon = iconMap[name];
            if (!icon) return null;
            return (
              <div key={name} className="hero__tech-item" title={name}>
                <img
                  src={`https://cdn.simpleicons.org/${icon.slug}/${icon.color}`}
                  alt={name}
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}