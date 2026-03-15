# Claude Learning Tracker 🧠

Progressive Web App (PWA) para rastrear tu plan de aprendizaje de Claude/Anthropic.
**14 semanas · 3 tracks · 13 módulos · 7 certificados oficiales**

## URL de la app

```
https://[TU-USUARIO].github.io/claude-tracker/
```

---

## Instalación como PWA en tu celular

### Android (Chrome)
1. Abre la URL de la app en Chrome
2. Toca el menú ⋮ → **"Añadir a pantalla de inicio"**
3. Confirma → la app aparecerá como ícono en tu pantalla

### iOS (Safari)
1. Abre la URL en Safari
2. Toca el botón **Compartir** (□↑) en la barra inferior
3. Selecciona **"Agregar a pantalla de inicio"**
4. Confirma → la app se instala sin App Store

La app funciona **100% offline** una vez instalada.

---

## Setup local

```bash
# 1. Clonar
git clone https://github.com/[TU-USUARIO]/claude-tracker.git
cd claude-tracker

# 2. Instalar dependencias
npm install

# 3. Generar iconos PWA (requiere sharp)
npm run generate-icons

# 4. Levantar servidor de desarrollo
npm run dev
```

Abre http://localhost:5173/claude-tracker/

---

## Deploy en GitHub Pages

### Primera vez (setup del repo)

```bash
# Dentro de la carpeta claude-tracker
git init
git add .
git commit -m "feat: initial claude tracker PWA"

# Crear repo en GitHub (sin inicializar con README)
# Luego conectar y subir:
git remote add origin https://github.com/[TU-USUARIO]/claude-tracker.git
git branch -M main
git push -u origin main
```

### Activar GitHub Pages

1. Ve a tu repo en GitHub → **Settings**
2. Sidebar izquierdo → **Pages**
3. En **Source** selecciona → **Deploy from a branch**
4. Branch: **gh-pages** | Folder: **/ (root)**
5. Guarda → espera ~2 minutos

El deploy automático se activa en cada `git push` a `main` vía GitHub Actions.

### Deploy manual (sin GitHub Actions)

```bash
npm run deploy
```

---

## Stack técnico

| Capa | Tecnología |
|---|---|
| Framework | React 18 + Vite 5 |
| Estilos | Tailwind CSS 3 |
| PWA | vite-plugin-pwa + Workbox |
| Estado | localStorage (100% offline) |
| Deploy | GitHub Pages + GitHub Actions |
| Iconos | SVG + sharp (PNG generation) |

---

## Estructura del proyecto

```
claude-tracker/
├── .github/workflows/deploy.yml   # CI/CD automático
├── public/icons/                  # Iconos PWA
├── scripts/generate-icons.mjs     # Generador de PNGs
├── src/
│   ├── App.jsx                    # Enrutador principal
│   ├── components/
│   │   ├── Dashboard.jsx          # Pantalla de inicio
│   │   ├── Roadmap.jsx            # Roadmap de 3 tracks
│   │   ├── ModuleDetail.jsx       # Detalle de módulo
│   │   ├── WeeklyCalendar.jsx     # Calendario 14 semanas
│   │   ├── Certificates.jsx       # Grid de certificados
│   │   ├── Resources.jsx          # Links rápidos
│   │   └── BottomNav.jsx          # Navegación inferior
│   ├── data/learningData.js       # Toda la data del plan
│   └── hooks/useProgress.js       # Estado global + localStorage
├── index.html
├── vite.config.js                 # Base: /claude-tracker/
└── package.json
```

---

## Tracks del plan de aprendizaje

| Track | Color | Fases | Módulos | Semanas |
|---|---|---|---|---|
| 🧠 AI Fluency | #E8A87C | 2 | 4 | 1–4 |
| 💻 Developer Deep-Dives | #6C8EBF | 2 | 6 | 5–10 |
| 🚀 Maestría y Producción | #7CB87C | 1 | 3 | 11–14 |

---

## Licencia

MIT — úsala, modifícala y compártela libremente.
