import { CERTIFICATES, getTrackById } from '../data/learningData'

const LINKEDIN_STEPS = [
  'Ve a linkedin.com/in/tu-perfil → Sección "Licencias y certificaciones"',
  'Haz clic en "+" para agregar una nueva certificación',
  'Nombre: copia el título del certificado (ver abajo)',
  'Organización emisora: Anthropic',
  'Fecha de obtención: el mes en que lo completaste',
  'URL de credencial: pega el link del certificado PDF',
  '¡Guarda y comparte tu logro!',
]

export default function Certificates({ isModuleCompleted, certsEarned, certsTotal }) {
  const totalPct = certsTotal > 0 ? Math.round((certsEarned / certsTotal) * 100) : 0

  return (
    <div className="animate-fade-up">
      {/* Header */}
      <div style={{ padding: '20px 16px 16px', background: '#13132a', borderBottom: '1px solid #2a2a4a' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: '#fff', margin: 0 }}>Certificados</h1>
            <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>
              Certificaciones oficiales de Anthropic
            </p>
          </div>
          <div style={{
            background: '#F6D86018',
            border: '1px solid #F6D86040',
            borderRadius: 20,
            padding: '6px 14px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#F6D860' }}>{certsEarned}/{certsTotal}</div>
            <div style={{ fontSize: 10, color: '#9ca3af' }}>obtenidos</div>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ marginTop: 12 }}>
          <div style={{ background: '#2a2a4a', borderRadius: 999, height: 8, overflow: 'hidden' }}>
            <div
              className="progress-fill"
              style={{
                width: `${totalPct}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #F6D860, #E8A87C)',
                borderRadius: 999,
              }}
            />
          </div>
          <p style={{ fontSize: 11, color: '#6b7280', marginTop: 6 }}>
            {totalPct}% del camino a la maestría certificada
          </p>
        </div>
      </div>

      <div style={{ padding: '16px' }}>
        {/* Certificate cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
          {CERTIFICATES.map((cert, idx) => {
            const done = isModuleCompleted(cert.moduleId)
            const track = getTrackById(cert.trackId)
            const color = track?.color ?? '#E8A87C'

            return (
              <div
                key={cert.id}
                style={{
                  background: done ? '#1e2e1e' : '#1a1a2e',
                  border: `1px solid ${done ? '#7CB87C44' : '#2a2a4a'}`,
                  borderRadius: 16,
                  padding: '16px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Subtle track color strip */}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 4,
                  background: done ? '#7CB87C' : color,
                  borderRadius: '16px 0 0 16px',
                }} />

                <div style={{ paddingLeft: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <span style={{ fontSize: 22 }}>{done ? '🏆' : '🔒'}</span>
                      <div>
                        <div style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: done ? '#fff' : '#9ca3af',
                        }}>
                          {cert.name}
                        </div>
                        <div style={{ fontSize: 11, color: '#6b7280' }}>Anthropic</div>
                      </div>
                    </div>
                    <p style={{ fontSize: 12, color: done ? '#9ca3af' : '#4a4a6a', margin: '0 0 10px', lineHeight: 1.4 }}>
                      {cert.description}
                    </p>

                    {/* Status badge */}
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: done ? '#7CB87C' : '#6b7280',
                        background: done ? '#7CB87C20' : '#2a2a4a',
                        borderRadius: 8,
                        padding: '3px 10px',
                      }}>
                        {done ? '✓ Obtenido' : '○ Pendiente'}
                      </span>
                      <span style={{
                        fontSize: 11,
                        color: color,
                        background: `${color}15`,
                        borderRadius: 8,
                        padding: '3px 10px',
                      }}>
                        {track?.emoji} {track?.name}
                      </span>
                    </div>
                  </div>

                  <button
                    className="btn-press"
                    onClick={() => window.open(cert.url, '_blank', 'noopener')}
                    style={{
                      background: done ? '#7CB87C' : '#2a2a4a',
                      border: 'none',
                      borderRadius: 12,
                      padding: '8px 12px',
                      color: done ? '#0d0d1a' : '#9ca3af',
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: 'pointer',
                      flexShrink: 0,
                      marginLeft: 12,
                      minHeight: 44,
                    }}
                  >
                    Ir al<br />curso
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* LinkedIn instructions */}
        <div style={{
          background: '#1a2a3a',
          border: '1px solid #2a3a5a',
          borderRadius: 16,
          padding: '16px',
          marginBottom: 8,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: 20 }}>💼</span>
            <h2 style={{ fontSize: 15, fontWeight: 700, color: '#fff', margin: 0 }}>
              Cómo subir a LinkedIn
            </h2>
          </div>

          {LINKEDIN_STEPS.map((step, idx) => (
            <div key={idx} style={{ display: 'flex', gap: 10, marginBottom: idx < LINKEDIN_STEPS.length - 1 ? 10 : 0 }}>
              <div style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: '#0077b5',
                color: '#fff',
                fontSize: 11,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                {idx + 1}
              </div>
              <p style={{ fontSize: 13, color: '#c4c4d4', lineHeight: 1.4, margin: 0 }}>{step}</p>
            </div>
          ))}

          <div style={{
            marginTop: 14,
            background: '#0d1a2a',
            borderRadius: 10,
            padding: '10px',
            fontSize: 12,
            color: '#6b7280',
          }}>
            <strong style={{ color: '#9ca3af' }}>Título sugerido para LinkedIn:</strong><br />
            <span style={{ color: '#E8A87C', fontFamily: 'monospace', fontSize: 11 }}>
              "{CERTIFICATES[0]?.linkedinTitle}"
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
