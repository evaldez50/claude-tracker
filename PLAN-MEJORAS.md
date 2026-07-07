# Plan de Mejoras — claude-tracker

> Fuente: Auditoría integral 2026-07-03 (`AUDITORIA-PROYECTOS-2026-07-03.md` en el directorio contenedor).
> **Calidad: 8.5/10 · Riesgo: 🟢 BAJO** — proyecto estable (0 vulnerabilidades npm, PWA correcta, deploy automático). Solo detalles.

## Estado según auditoría

- CLAUDE.md modificado sin commitear.
- Verificar `start_url` del manifest para el basePath `/claude-tracker/` de GitHub Pages.
- `src/data/learningData.js` (596 líneas) OK por ahora; dividir en tracks/modules/certificates solo si crece.
- localStorage sin cifrar: intencional y aceptable (datos no sensibles, offline-first).

## Fase única — Detalles

- [ ] Resolver CLAUDE.md sin commitear
- [ ] Verificar start_url de la PWA

**Prompt:**
```
Lee PLAN-MEJORAS.md: muéstrame el diff del CLAUDE.md sin commitear y decidimos commit o revert. Verifica que manifest.json tenga start_url correcto para el basePath /claude-tracker/ de GitHub Pages (probar la PWA instalada). Opcional: comenta en useProgress.js que localStorage es intencional (patrón offline-first). Ideas futuras si algún día quieres: exportar progreso a JSON y certificados descargables como imagen.
```

## Estimación: 30 min.
