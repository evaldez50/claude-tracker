const TABS = [
  {
    id: 'home',
    label: 'Home',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'}
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'roadmap',
    label: 'Roadmap',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
        {active && <circle cx="8" cy="6" r="2" fill="currentColor" />}
        {active && <circle cx="16" cy="12" r="2" fill="currentColor" />}
        {active && <circle cx="10" cy="18" r="2" fill="currentColor" />}
      </svg>
    ),
  },
  {
    id: 'weeks',
    label: 'Semanas',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        {active && <rect x="8" y="14" width="3" height="3" rx="0.5" fill="currentColor" stroke="none" />}
      </svg>
    ),
  },
  {
    id: 'certs',
    label: 'Certs',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        {active && <circle cx="12" cy="8" r="3" fill="currentColor" stroke="none" />}
      </svg>
    ),
  },
]

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav
      className="nav-safe flex-shrink-0"
      style={{
        background: '#13132a',
        borderTop: '1px solid #2a2a4a',
        zIndex: 50,
      }}
    >
      <div className="flex items-stretch">
        {TABS.map(tab => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex-1 flex flex-col items-center justify-center py-3 gap-1 btn-press"
              style={{
                minHeight: '56px',
                color: isActive ? '#E8A87C' : '#6b7280',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
            >
              {tab.icon(isActive)}
              <span style={{
                fontSize: '10px',
                fontWeight: isActive ? '600' : '400',
                letterSpacing: '0.02em',
              }}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
