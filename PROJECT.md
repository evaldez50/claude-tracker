# Claude Learning Tracker

PWA (Progressive Web App) para rastrear tu progreso en el plan de aprendizaje de Claude y Anthropic. Incluye un roadmap de 14 semanas con 3 tracks, 13 módulos, 7 certificados oficiales, calendario semanal, y sistema de progreso con niveles.

## Stack tecnológico

- **React** 18.3 — UI con componentes funcionales y hooks
- **Vite** 5.4 — bundler y dev server
- **Tailwind CSS** 3.4 — estilos utility-first
- **vite-plugin-pwa** 0.20 — PWA con service worker y manifest
- **sharp** 0.33 — generación de iconos PNG desde SVG
- **gh-pages** 6.2 — deploy a GitHub Pages
- **Node.js** 18 — runtime para build

## Variables de entorno

No tiene. Es una app 100% frontend sin backend ni APIs. El progreso se guarda en localStorage.

## Estructura de archivos

```
claude-tracker/
├── src/
│   ├── main.jsx                    # Entry point React
│   ├── App.jsx                     # Componente raíz con navegación por tabs
│   ├── index.css                   # Estilos base + Tailwind imports
│   ├── components/
│   │   ├── Dashboard.jsx           # Pantalla principal con stats y progreso
│   │   ├── Roadmap.jsx             # Vista de roadmap con tracks y fases
│   │   ├── ModuleDetail.jsx        # Detalle de módulo con checklist
│   │   ├── WeeklyCalendar.jsx      # Calendario semanal (14 semanas)
│   │   ├── Certificates.jsx        # Galería de certificados
│   │   ├── BottomNav.jsx           # Navegación inferior (tabs)
│   │   └── Resources.jsx           # Links a recursos de Anthropic
│   ├── hooks/
│   │   └── useProgress.js          # Hook de progreso (localStorage)
│   └── data/
│       └── learningData.js         # Datos: tracks, módulos, certificados, calendario
├── public/
│   └── icons/                      # Iconos PWA (SVG, 192px, 512px)
├── scripts/
│   └── generate-icons.mjs          # Script para generar PNGs desde SVG
├── .github/workflows/deploy.yml    # CI/CD: build + deploy a GitHub Pages
├── index.html                      # HTML template de Vite
├── package.json                    # Dependencias y scripts
├── vite.config.js                  # Config Vite + PWA manifest
├── tailwind.config.js              # Config Tailwind
├── postcss.config.js               # Config PostCSS
└── .gitignore                      # Exclusiones de git
```

## Qué hace cada archivo

### Componentes
- **App.jsx** — Router simple por estado: 4 tabs (home, roadmap, weeks, certs) + vista de detalle de módulo
- **Dashboard.jsx** — Pantalla principal: nivel del usuario, progreso general, progreso por track, siguiente módulo recomendado
- **Roadmap.jsx** — Roadmap visual con 3 tracks (AI Fluency, Developer Deep-Dives, Maestría y Producción), 5 fases, 13 módulos
- **ModuleDetail.jsx** — Vista detallada de un módulo: descripción, checklist interactivo, tip de experto, link al curso
- **WeeklyCalendar.jsx** — Calendario de 14 semanas con módulos asignados y horas estimadas por semana
- **Certificates.jsx** — Galería de 7 certificados oficiales de Anthropic con estado (completado/pendiente)
- **BottomNav.jsx** — Barra de navegación inferior estilo mobile
- **Resources.jsx** — Links rápidos a Anthropic Academy, GitHub Courses, Docs, Console, Learn Hub

### Datos y lógica
- **learningData.js** — Fuente de verdad con toda la data: 3 tracks, 5 fases, 13 módulos (con descripciones, checklists, tips), 7 certificados, 14 semanas de calendario, 5 recursos
- **useProgress.js** — Hook custom que maneja todo el estado de progreso: módulos completados, checklist items, semana actual. Persiste en localStorage. Calcula stats derivados (%, nivel, certificados)

### Config
- **vite.config.js** — Base path `/claude-tracker/`, plugin React, plugin PWA con manifest y workbox
- **deploy.yml** — GitHub Actions: checkout → Node 18 → install → generate icons → build → deploy a gh-pages

## Cómo correr el proyecto

```bash
# 1. Instalar dependencias
npm install

# 2. Dev server
npm run dev
# http://localhost:5173/claude-tracker/

# 3. Build para producción
npm run build

# 4. Preview del build
npm run preview

# 5. Generar iconos PWA
npm run generate-icons
```

## Status actual

- PWA funcional y deployada en GitHub Pages
- 3 tracks con 13 módulos y 7 certificados oficiales de Anthropic
- Calendario semanal de 14 semanas
- Progreso guardado en localStorage (offline-first)
- Service worker para uso offline
- Dark theme (#0d0d1a)
- Mobile-first responsive
- CI/CD automático con GitHub Actions


## Roadmap

### Sprint 1 — MVP PWA (Completado)
- React + Vite + Tailwind
- Dashboard con progreso general y por track
- 3 tracks con 13 módulos

### Sprint 2 — Contenido Completo (Completado)
- Calendario semanal de 14 semanas
- 7 certificados oficiales de Anthropic
- Recursos y links a Anthropic Academy

### Sprint 3 — PWA y Deploy (Completado)
- Service Worker para uso offline
- PWA manifest con iconos
- CI/CD con GitHub Actions → GitHub Pages
- Dark theme


## Bugs conocidos

| Bug | Severidad | Status |
|---|---|---|
| El progreso no se sincroniza entre dispositivos (solo localStorage) | Medio | Abierto |
| Los iconos PWA no se generan correctamente en Windows (script usa sharp con dependencia nativa) | Bajo | Abierto |
| El calendario semanal no se actualiza dinámicamente según la fecha actual | Bajo | Abierto |
| Base path /claude-tracker/ causa problemas si se intenta servir desde la raíz | Bajo | Abierto |


## Siguientes pasos recomendados

- [ ] **Sincronización en la nube** — Agregar Supabase para sincronizar progreso entre dispositivos
- [ ] **Notificaciones push** — Recordatorios semanales para mantener el ritmo de estudio
- [ ] **Modo de estudio** — Timer pomodoro integrado para sesiones de aprendizaje
- [ ] **Tracking de tiempo** — Registrar horas dedicadas por módulo/semana
- [ ] **Actualizar contenido** — Agregar nuevos cursos y certificados de Anthropic cuando se publiquen
- [ ] **Exportar progreso** — Generar reporte PDF del avance para compartir
- [ ] **Gamification** — Badges y streaks para motivar el estudio diario


## Notas para Claude Code

- No hay backend ni APIs — todo es frontend con localStorage
- Los datos están en `src/data/learningData.js` — es la fuente de verdad de contenido
- El hook `useProgress.js` maneja toda la lógica de estado y persistencia
- Base path es `/claude-tracker/` (configurado en vite.config.js)
- El tema es dark con fondo `#0d0d1a`
