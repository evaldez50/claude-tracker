import { TRACKS } from '../data/learningData'

function CheckCircle({ completed, color }) {
  return (
    <div style={{
      width: 28,
      height: 28,
      borderRadius: '50%',
      border: `2px solid ${completed ? color : '#3a3a5a'}`,
      background: completed ? color : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'all 0.3s',
    }}>
      {completed && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2.5 7L5.5 10L11.5 4" stroke="#0d0d1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  )
}

function TrackProgressBar({ pct, color }) {
  return (
    <div style={{ background: '#2a2a4a', borderRadius: 999, height: 6, overflow: 'hidden', flex: 1 }}>
      <div
        className="progress-fill"
        style={{
          width: `${pct}%`,
          height: '100%',
          background: color,
          borderRadius: 999,
        }}
      />
    </div>
  )
}

export default function Roadmap({ onModuleSelect, isModuleCompleted, getTrackProgress }) {
  return (
    <div className="animate-fade-up">
      {/* Header */}
      <div style={{ padding: '20px 16px 16px', background: '#13132a', borderBottom: '1px solid #2a2a4a' }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: '#fff', margin: 0 }}>Tu Roadmap</h1>
        <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>14 semanas · 3 tracks · 13 módulos</p>
      </div>

      <div style={{ padding: '16px' }}>
        {TRACKS.map((track, trackIdx) => {
          const tp = getTrackProgress(track.id)

          return (
            <div
              key={track.id}
              style={{
                marginBottom: trackIdx < TRACKS.length - 1 ? 20 : 0,
                background: '#1a1a2e',
                border: `1px solid ${track.borderColor}`,
                borderRadius: 20,
                overflow: 'hidden',
              }}
            >
              {/* Track header */}
              <div style={{
                background: track.bgColor,
                padding: '16px',
                borderBottom: `1px solid ${track.borderColor}`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 20 }}>{track.emoji}</span>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{track.name}</div>
                      <div style={{ fontSize: 11, color: '#9ca3af' }}>
                        {track.phases.length} fase{track.phases.length > 1 ? 's' : ''} · {tp.total} módulos
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: track.color }}>{tp.pct}%</div>
                    <div style={{ fontSize: 11, color: '#9ca3af' }}>{tp.completed}/{tp.total}</div>
                  </div>
                </div>
                <TrackProgressBar pct={tp.pct} color={track.color} />
              </div>

              {/* Phases */}
              {track.phases.map((phase, phaseIdx) => (
                <div key={phase.id}>
                  {/* Phase label */}
                  <div style={{
                    padding: '12px 16px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    borderBottom: '1px solid #23234a',
                    background: '#16162e',
                  }}>
                    <div style={{
                      background: track.color,
                      color: '#0d0d1a',
                      borderRadius: 8,
                      padding: '2px 8px',
                      fontSize: 11,
                      fontWeight: 700,
                    }}>
                      {phase.name}
                    </div>
                    <span style={{ fontSize: 12, color: '#6b7280' }}>{phase.weekRange}</span>
                  </div>

                  {/* Modules */}
                  {phase.modules.map((module, modIdx) => {
                    const done = isModuleCompleted(module.id)
                    const isLast = phaseIdx === track.phases.length - 1 && modIdx === phase.modules.length - 1

                    return (
                      <button
                        key={module.id}
                        className="module-card"
                        onClick={() => onModuleSelect(module)}
                        style={{
                          width: '100%',
                          background: done ? `${track.color}0d` : 'transparent',
                          border: 'none',
                          borderBottom: isLast ? 'none' : '1px solid #1e1e3a',
                          padding: '14px 16px',
                          cursor: 'pointer',
                          textAlign: 'left',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12,
                        }}
                      >
                        <CheckCircle completed={done} color={track.color} />

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: done ? '#9ca3af' : '#fff',
                            marginBottom: 4,
                            textDecoration: done ? 'line-through' : 'none',
                          }}>
                            {module.name}
                          </div>
                          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: 12, color: '#6b7280' }}>⏱ {module.hours}h</span>
                            {module.hasCertificate && (
                              <span style={{
                                fontSize: 11,
                                color: '#F6D860',
                                background: '#F6D86018',
                                border: '1px solid #F6D86030',
                                borderRadius: 6,
                                padding: '1px 6px',
                              }}>
                                🏆 Certificado
                              </span>
                            )}
                          </div>
                        </div>

                        <span style={{ fontSize: 18, color: '#3a3a5a' }}>›</span>
                      </button>
                    )
                  })}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
