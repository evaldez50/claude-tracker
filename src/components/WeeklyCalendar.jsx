import { WEEKLY_SCHEDULE, getModuleById, getTrackById } from '../data/learningData'

function WeekStatus({ week, currentWeek, allModulesCompleted }) {
  if (week < currentWeek) {
    return (
      <div style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: allModulesCompleted ? '#7CB87C' : '#2a2a4a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        {allModulesCompleted
          ? <span style={{ fontSize: 16 }}>✓</span>
          : <span style={{ fontSize: 12, color: '#6b7280', fontWeight: 700 }}>{week}</span>
        }
      </div>
    )
  }
  if (week === currentWeek) {
    return (
      <div style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: '#E8A87C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <span style={{ fontSize: 12, color: '#0d0d1a', fontWeight: 800 }}>{week}</span>
      </div>
    )
  }
  return (
    <div style={{
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: '2px solid #2a2a4a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}>
      <span style={{ fontSize: 12, color: '#3a3a5a', fontWeight: 700 }}>{week}</span>
    </div>
  )
}

export default function WeeklyCalendar({
  onModuleSelect,
  currentWeek,
  setCurrentWeek,
  isModuleCompleted,
}) {
  return (
    <div className="animate-fade-up">
      {/* Header */}
      <div style={{ padding: '20px 16px 16px', background: '#13132a', borderBottom: '1px solid #2a2a4a' }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: '#fff', margin: 0 }}>Calendario</h1>
        <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>14 semanas de estudio</p>
      </div>

      {/* Current week selector */}
      <div style={{
        padding: '12px 16px',
        background: '#13132a',
        borderBottom: '1px solid #2a2a4a',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}>
        <span style={{ fontSize: 13, color: '#9ca3af', fontWeight: 600 }}>Semana actual:</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            className="btn-press"
            onClick={() => setCurrentWeek(currentWeek - 1)}
            disabled={currentWeek <= 1}
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: '#2a2a4a',
              border: 'none',
              color: currentWeek <= 1 ? '#3a3a5a' : '#fff',
              fontSize: 18,
              cursor: currentWeek <= 1 ? 'default' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ‹
          </button>
          <span style={{
            fontSize: 20,
            fontWeight: 800,
            color: '#E8A87C',
            minWidth: 60,
            textAlign: 'center',
          }}>
            {currentWeek} / 14
          </span>
          <button
            className="btn-press"
            onClick={() => setCurrentWeek(currentWeek + 1)}
            disabled={currentWeek >= 14}
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: '#2a2a4a',
              border: 'none',
              color: currentWeek >= 14 ? '#3a3a5a' : '#fff',
              fontSize: 18,
              cursor: currentWeek >= 14 ? 'default' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ›
          </button>
        </div>
      </div>

      {/* Weeks list */}
      <div style={{ padding: '16px' }}>
        {WEEKLY_SCHEDULE.map((week, idx) => {
          const isCurrent = week.week === currentWeek
          const isPast = week.week < currentWeek
          const track = getTrackById(week.trackId)
          const color = track?.color ?? '#E8A87C'
          const weekModules = week.moduleIds.map(id => getModuleById(id)).filter(Boolean)
          // de-duplicate
          const uniqueModules = weekModules.filter(
            (m, i, arr) => arr.findIndex(x => x.id === m.id) === i
          )
          const allDone = uniqueModules.every(m => isModuleCompleted(m.id))
          const anyDone = uniqueModules.some(m => isModuleCompleted(m.id))

          return (
            <div
              key={week.week}
              style={{
                background: isCurrent ? '#1e1e38' : '#1a1a2e',
                border: `1px solid ${isCurrent ? '#E8A87C55' : '#2a2a4a'}`,
                borderRadius: 16,
                padding: '14px',
                marginBottom: idx < WEEKLY_SCHEDULE.length - 1 ? 10 : 0,
                opacity: isPast && !allDone ? 0.75 : 1,
                transition: 'all 0.2s',
              }}
            >
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <WeekStatus
                  week={week.week}
                  currentWeek={currentWeek}
                  allModulesCompleted={allDone}
                />

                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* Week title */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                    <div>
                      {isCurrent && (
                        <span style={{
                          fontSize: 10,
                          fontWeight: 700,
                          color: '#E8A87C',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          display: 'block',
                          marginBottom: 2,
                        }}>
                          ◆ SEMANA ACTUAL
                        </span>
                      )}
                      <div style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: isPast && !isCurrent ? '#6b7280' : '#fff',
                      }}>
                        {week.focus}
                      </div>
                    </div>
                    <span style={{
                      fontSize: 11,
                      color: '#6b7280',
                      flexShrink: 0,
                      marginLeft: 8,
                    }}>
                      ⏱ {week.hours}h
                    </span>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: 12,
                    color: '#6b7280',
                    margin: '0 0 10px',
                    lineHeight: 1.4,
                  }}>
                    {week.description}
                  </p>

                  {/* Module chips */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {uniqueModules.map(module => {
                      const done = isModuleCompleted(module.id)
                      return (
                        <button
                          key={module.id}
                          className="btn-press"
                          onClick={() => onModuleSelect(module)}
                          style={{
                            background: done ? '#7CB87C15' : `${color}12`,
                            border: `1px solid ${done ? '#7CB87C30' : `${color}30`}`,
                            borderRadius: 10,
                            padding: '8px 12px',
                            cursor: 'pointer',
                            textAlign: 'left',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{done ? '✅' : '⭕'}</span>
                          <span style={{
                            fontSize: 13,
                            color: done ? '#7CB87C' : '#e0e0f0',
                            fontWeight: 500,
                            flex: 1,
                          }}>
                            {module.name}
                          </span>
                          {module.hasCertificate && (
                            <span style={{ fontSize: 12 }}>🏆</span>
                          )}
                        </button>
                      )
                    })}
                  </div>

                  {/* Track badge */}
                  <div style={{ marginTop: 8 }}>
                    <span style={{
                      fontSize: 11,
                      color: color,
                      background: `${color}15`,
                      borderRadius: 6,
                      padding: '2px 8px',
                      fontWeight: 600,
                    }}>
                      {track?.emoji} {track?.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
