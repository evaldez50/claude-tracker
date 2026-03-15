import { useState } from 'react'
import { getTrackForModule } from '../data/learningData'

function BackArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default function ModuleDetail({
  module,
  onBack,
  toggleModule,
  isModuleCompleted,
  toggleChecklistItem,
  getCheckedItems,
}) {
  const [justCompleted, setJustCompleted] = useState(false)
  const track = getTrackForModule(module.id)
  const color = track?.color ?? '#E8A87C'
  const done = isModuleCompleted(module.id)
  const checkedItems = getCheckedItems(module.id)
  const allChecked = checkedItems.length >= module.checklist.length

  const handleToggleComplete = () => {
    setJustCompleted(!done)
    toggleModule(module.id)
    if (!done) {
      setTimeout(() => setJustCompleted(false), 700)
    }
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#0d0d1a' }}>
      {/* Sticky header */}
      <div style={{
        background: '#13132a',
        borderBottom: '1px solid #2a2a4a',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexShrink: 0,
      }}>
        <button
          onClick={onBack}
          className="btn-press"
          style={{
            background: '#2a2a4a',
            border: 'none',
            borderRadius: 10,
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#fff',
            flexShrink: 0,
          }}
        >
          <BackArrow />
        </button>

        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: 11, color: color, fontWeight: 600, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {track?.name}
          </p>
          <h1 style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {module.name}
          </h1>
        </div>

        {done && (
          <div style={{
            background: '#7CB87C22',
            border: '1px solid #7CB87C44',
            borderRadius: 10,
            padding: '4px 10px',
            fontSize: 11,
            color: '#7CB87C',
            fontWeight: 700,
            flexShrink: 0,
          }}>
            ✓ Listo
          </div>
        )}
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px', paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 24px)' }}>

        {/* Meta badges */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
          <span style={{
            background: `${color}22`,
            border: `1px solid ${color}44`,
            color: color,
            borderRadius: 10,
            padding: '4px 12px',
            fontSize: 13,
            fontWeight: 600,
          }}>
            ⏱ {module.hours} horas
          </span>
          {module.hasCertificate && (
            <span style={{
              background: '#F6D86020',
              border: '1px solid #F6D86040',
              color: '#F6D860',
              borderRadius: 10,
              padding: '4px 12px',
              fontSize: 13,
              fontWeight: 600,
            }}>
              🏆 Certificado oficial
            </span>
          )}
        </div>

        {/* Description */}
        <div style={{
          background: '#1a1a2e',
          border: '1px solid #2a2a4a',
          borderRadius: 16,
          padding: '16px',
          marginBottom: 16,
        }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Descripción</h2>
          <p style={{ fontSize: 14, color: '#c4c4d4', lineHeight: 1.6, margin: 0 }}>
            {module.description}
          </p>
        </div>

        {/* Checklist */}
        <div style={{
          background: '#1a1a2e',
          border: '1px solid #2a2a4a',
          borderRadius: 16,
          padding: '16px',
          marginBottom: 16,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <h2 style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: 0 }}>
              Acciones concretas
            </h2>
            <span style={{ fontSize: 12, color: '#6b7280' }}>
              {checkedItems.length}/{module.checklist.length}
            </span>
          </div>

          {module.checklist.map((item, idx) => {
            const checked = checkedItems.includes(idx)
            return (
              <button
                key={idx}
                onClick={() => toggleChecklistItem(module.id, idx)}
                className="btn-press"
                style={{
                  width: '100%',
                  background: checked ? `${color}12` : 'transparent',
                  border: 'none',
                  borderRadius: 10,
                  padding: '10px 8px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  marginBottom: idx < module.checklist.length - 1 ? 4 : 0,
                }}
              >
                <div style={{
                  width: 22,
                  height: 22,
                  borderRadius: 6,
                  border: `2px solid ${checked ? color : '#3a3a5a'}`,
                  background: checked ? color : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 1,
                  transition: 'all 0.2s',
                }}>
                  {checked && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="#0d0d1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span style={{
                  fontSize: 14,
                  color: checked ? '#6b7280' : '#e0e0f0',
                  textDecoration: checked ? 'line-through' : 'none',
                  lineHeight: 1.5,
                  transition: 'color 0.2s',
                }}>
                  {item}
                </span>
              </button>
            )
          })}
        </div>

        {/* Expert tip */}
        <div style={{
          background: `${color}15`,
          border: `1px solid ${color}35`,
          borderRadius: 16,
          padding: '16px',
          marginBottom: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <h2 style={{ fontSize: 14, fontWeight: 700, color: color, margin: 0 }}>Tip de experto</h2>
          </div>
          <p style={{ fontSize: 14, color: '#c4c4d4', lineHeight: 1.6, margin: 0 }}>
            {module.expertTip}
          </p>
        </div>

        {/* Completion message */}
        {done && (
          <div style={{
            background: '#7CB87C15',
            border: '1px solid #7CB87C35',
            borderRadius: 16,
            padding: '16px',
            textAlign: 'center',
            marginBottom: 16,
          }}>
            <div style={{ fontSize: 32, marginBottom: 4 }}>🎉</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#7CB87C' }}>¡Módulo completado!</div>
            <div style={{ fontSize: 13, color: '#9ca3af', marginTop: 4 }}>
              {module.hasCertificate ? 'Descarga tu certificado y súbelo a LinkedIn.' : 'Excelente avance. ¡Sigue así!'}
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button
            className="btn-press"
            onClick={() => window.open(module.url, '_blank', 'noopener')}
            style={{
              background: '#2a2a4a',
              border: '1px solid #3a3a5a',
              borderRadius: 14,
              padding: '14px',
              color: '#fff',
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              minHeight: 48,
            }}
          >
            <ExternalLinkIcon />
            Abrir recurso
          </button>

          <button
            className={`btn-press ${justCompleted ? 'animate-complete' : ''}`}
            onClick={handleToggleComplete}
            style={{
              background: done ? '#7CB87C' : `linear-gradient(135deg, ${color}, ${color}cc)`,
              border: 'none',
              borderRadius: 14,
              padding: '16px',
              color: '#0d0d1a',
              fontSize: 15,
              fontWeight: 700,
              cursor: 'pointer',
              minHeight: 52,
              transition: 'background 0.3s',
            }}
          >
            {done ? '✓ Completado — Desmarcar' : '✓ Marcar como completado'}
          </button>
        </div>

        <div style={{ height: 24 }} />
      </div>
    </div>
  )
}
