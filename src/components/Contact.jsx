import React from 'react';
import { data } from '../data';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

export default function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section className="section" id="contact">
      <div ref={ref} className={`section-header ${visible ? 'section-header--visible' : ''}`}>
        <span className="section-num">05</span>
        <h2 className="section-title">Contacto</h2>
        <div className="section-line" />
      </div>

      <div className="contact-box">
        <h3 className="contact-title">Trabajemos juntos.</h3>
        <p className="contact-sub">Disponible para proyectos freelance y oportunidades remotas.</p>
        <div className="contact-links">
          <a className="contact-item" href={`mailto:${data.email}`}>
            <i className="ti ti-mail" aria-hidden="true" />
            {data.email}
          </a>
          <a className="contact-item" href={`tel:+58${data.phone.replace(/\D/g,'').slice(1)}`}>
            <i className="ti ti-phone" aria-hidden="true" />
            {data.phone}
          </a>
          <a className="contact-item" href={data.github} target="_blank" rel="noreferrer">
            <i className="ti ti-brand-github" aria-hidden="true" />
            {data.github}
          </a>
        </div>
      </div>
    </section>
  );
}
