import { RESOURCES } from '../data/learningData'

export default function Resources() {
  return (
    <div className="animate-fade-up">
      <div style={{ padding: '20px 16px 16px', background: '#13132a', borderBottom: '1px solid #2a2a4a' }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: '#fff', margin: 0 }}>Recursos</h1>
        <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>Links directos a Anthropic</p>
      </div>

      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {RESOURCES.map(res => (
            <button
              key={res.id}
              className="module-card btn-press"
              onClick={() => window.open(res.url, '_blank', 'noopener')}
              style={{
                width: '100%',
                background: '#1a1a2e',
                border: '1px solid #2a2a4a',
                borderLeft: `4px solid ${res.color}`,
                borderRadius: 14,
                padding: '16px',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                minHeight: 68,
              }}
            >
              <span style={{ fontSize: 28, flexShrink: 0 }}>{res.icon}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 3 }}>
                  {res.name}
                </div>
                <div style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.4 }}>
                  {res.description}
                </div>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                style={{ flexShrink: 0 }}>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
