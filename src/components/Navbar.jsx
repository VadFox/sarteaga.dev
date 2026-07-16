import React, { useEffect, useState } from 'react';
import './Navbar.css';

const links = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <span className="navbar__logo">SA.dev</span>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={(e) => handleLink(e, l.href)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="navbar__burger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <i className={menuOpen ? 'ti ti-x' : 'ti ti-menu-2'} />
      </button>
    </nav>
  );
}
