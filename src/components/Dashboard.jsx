import { TRACKS, RESOURCES } from '../data/learningData'

function ProgressBar({ pct, color = '#E8A87C', height = 8 }) {
  return (
    <div style={{ background: '#2a2a4a', borderRadius: 999, height, overflow: 'hidden' }}>
      <div
        className="progress-fill"
        style={{
          width: `${pct}%`,
          height: '100%',
          background: `linear-gradient(90deg, ${color}, ${color}cc)`,
          borderRadius: 999,
        }}
      />
    </div>
  )
}

function StatCard({ emoji, value, label, color }) {
  return (
    <div
      style={{
        background: '#1a1a2e',
        border: '1px solid #2a2a4a',
        borderRadius: 16,
        padding: '16px 12px',
        textAlign: 'center',
        flex: 1,
      }}
    >
      <div style={{ fontSize: 24, marginBottom: 4 }}>{emoji}</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: color ?? '#fff' }}>{value}</div>
      <div style={{ fontSize: 11, color: '#6b7280', marginTop: 2 }}>{label}</div>
    </div>
  )
}

export default function Dashboard({
  onModuleSelect,
  progressPct,
  completedCount,
  totalModules,
  certsEarned,
  certsTotal,
  currentWeek,
  userLevel,
  nextModule,
  getTrackProgress,
  isModuleCompleted,
}) {
  const trackColors = { track1: '#E8A87C', track2: '#6C8EBF', track3: '#7CB87C' }

  return (
    <div className="animate-fade-up" style={{ padding: '0 0 8px' }}>
      {/* ── Header ─────────────────────────────────────── */}
      <div style={{ padding: '20px 16px 16px', background: '#13132a', borderBottom: '1px solid #2a2a4a' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: '#fff', margin: 0 }}>
              Claude Tracker
            </h1>
            <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>
              Tu plan de aprendizaje Anthropic
            </p>
          </div>
          <div style={{
            background: '#E8A87C22',
            border: '1px solid #E8A87C44',
            borderRadius: 20,
            padding: '4px 12px',
            fontSize: 12,
            color: '#E8A87C',
            fontWeight: 600,
          }}>
            Sem {currentWeek}/14
          </div>
        </div>
      </div>

      <div style={{ padding: '16px' }}>
        {/* ── Main progress ───────────────────────────── */}
        <div style={{
          background: '#1a1a2e',
          border: '1px solid #2a2a4a',
          borderRadius: 20,
          padding: '20px',
          marginBottom: 12,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>Progreso general</span>
            <span style={{ fontSize: 24, fontWeight: 800, color: '#E8A87C' }}>{progressPct}%</span>
          </div>
          <ProgressBar pct={progressPct} color="#E8A87C" height={10} />
          <p style={{ fontSize: 12, color: '#6b7280', marginTop: 8 }}>
            {completedCount} de {totalModules} módulos completados
          </p>
        </div>

        {/* ── Stats row ───────────────────────────────── */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
          <StatCard
            emoji={userLevel.emoji}
            value={userLevel.label}
            label="Nivel actual"
            color="#E8A87C"
          />
          <StatCard
            emoji="🏆"
            value={`${certsEarned}/${certsTotal}`}
            label="Certificados"
            color="#F6D860"
          />
          <StatCard
            emoji="📅"
            value={`Sem ${currentWeek}`}
            label="Semana actual"
            color="#7CB87C"
          />
        </div>

        {/* ── Next up ─────────────────────────────────── */}
        {nextModule && (
          <div style={{ marginBottom: 12 }}>
            <p style={{ fontSize: 12, color: '#9ca3af', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Continúa aquí
            </p>
            <button
              className="module-card"
              onClick={() => onModuleSelect(nextModule)}
              style={{
                width: '100%',
                background: '#1a1a2e',
                border: `1px solid ${trackColors[nextModule.trackId]}44`,
                borderLeft: `4px solid ${trackColors[nextModule.trackId]}`,
                borderRadius: 16,
                padding: '16px',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 11, color: trackColors[nextModule.trackId], fontWeight: 600, margin: '0 0 4px' }}>
                    SIGUIENTE MÓDULO →
                  </p>
                  <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>
                    {nextModule.name}
                  </p>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ fontSize: 12, color: '#9ca3af' }}>⏱ {nextModule.hours}h</span>
                    {nextModule.hasCertificate && (
                      <span style={{
                        fontSize: 11,
                        color: '#F6D860',
                        background: '#F6D86020',
                        borderRadius: 8,
                        padding: '1px 6px',
                      }}>🏆 Cert</span>
                    )}
                  </div>
                </div>
                <span style={{ fontSize: 20, color: trackColors[nextModule.trackId] }}>›</span>
              </div>
            </button>
          </div>
        )}

        {/* ── Tracks mini-progress ─────────────────────── */}
        <p style={{ fontSize: 12, color: '#9ca3af', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Progreso por track
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
          {TRACKS.map(track => {
            const tp = getTrackProgress(track.id)
            return (
              <div
                key={track.id}
                style={{
                  background: track.bgColor,
                  border: `1px solid ${track.borderColor}`,
                  borderRadius: 14,
                  padding: '14px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 16 }}>{track.emoji}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{track.name}</span>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: track.color }}>
                    {tp.completed}/{tp.total}
                  </span>
                </div>
                <ProgressBar pct={tp.pct} color={track.color} height={6} />
              </div>
            )
          })}
        </div>

        {/* ── Quick Resources ──────────────────────────── */}
        <p style={{ fontSize: 12, color: '#9ca3af', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Recursos rápidos
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {RESOURCES.map(res => (
            <button
              key={res.id}
              className="btn-press"
              onClick={() => window.open(res.url, '_blank', 'noopener')}
              style={{
                background: '#1a1a2e',
                border: '1px solid #2a2a4a',
                borderRadius: 14,
                padding: '14px 12px',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div style={{ fontSize: 22, marginBottom: 6 }}>{res.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 2 }}>{res.name}</div>
              <div style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.3 }}>{res.description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
