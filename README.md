# Samuel Arteaga — Portafolio

Portafolio personal construido con React. Diseño oscuro y futurista.

## 🚀 Levantar en local

```bash
npm install
npm start
```

## 📦 Build para producción

```bash
npm run build
```

## 🌐 Deploy en GitHub Pages

### Opción 1 — Deploy manual (una sola vez)

```bash
npm run deploy
```

Esto construye el proyecto y sube la carpeta `build/` a la rama `gh-pages`.

### Opción 2 — Deploy automático con GitHub Actions (recomendado)

El archivo `.github/workflows/deploy.yml` ya está configurado.
Cada vez que hagas `git push` a `main`, GitHub Actions construye y despliega automáticamente.

**Pasos para activarlo:**
1. Sube el proyecto a GitHub (ver abajo)
2. Ve a tu repo → **Settings** → **Pages**
3. En **Source** selecciona **Deploy from a branch**
4. Rama: `gh-pages` / Carpeta: `/ (root)`
5. Guarda — en ~2 minutos tu portafolio estará en:
   `https://metariaqer.github.io/portfolio`

## 📁 Subir a GitHub por primera vez

```bash
git init
git add .
git commit -m "feat: portafolio inicial"
git branch -M main
git remote add origin https://github.com/metariaqer/portfolio.git
git push -u origin main
```

## ✏️ Personalizar contenido

Todo el contenido (nombre, experiencia, proyectos, skills) está en un solo archivo:

```
src/data.js
```

Edita ese archivo y el portafolio se actualiza automáticamente.

## 🗂️ Estructura del proyecto

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Education.jsx
│   │   └── Contact.jsx / .css
│   ├── hooks/
│   │   └── useReveal.js
│   ├── styles/
│   │   ├── global.css
│   │   └── sections.css
│   ├── data.js          ← edita aquí tu contenido
│   ├── App.jsx
│   └── index.js
├── .github/
│   └── workflows/
│       └── deploy.yml   ← deploy automático
└── package.json
```
