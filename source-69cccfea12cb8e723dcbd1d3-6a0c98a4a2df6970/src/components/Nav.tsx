import { Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/our-approach', label: 'Our Approach' },
  { to: '/investment-criteria', label: 'Investment Criteria' },
  { to: '/arizona-opportunity', label: 'Arizona Opportunity' },
  { to: '/advisory', label: 'Advisory' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/contact', label: 'Contact' },
] as const

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { location } = useRouterState()
  const path = location.pathname

  return (
    <header style={{ background: 'var(--navy)', borderBottom: '1px solid rgba(184,151,90,0.2)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', position: 'relative', zIndex: 1, flexShrink: 0 }}>
          <img src="/canny-logo-white.png" alt="Canny Capital Partners" style={{ height: '36px', opacity: 0.95 }} />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '0.35rem', alignItems: 'center', position: 'relative', zIndex: 2 }} className="hidden-mobile">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link${path === to ? ' active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'none' }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          <div style={{ width: '22px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{ height: '1.5px', background: 'var(--cream)', display: 'block', transition: 'all 0.2s', transform: mobileOpen ? 'rotate(45deg) translateY(6.5px)' : 'none' }} />
            <span style={{ height: '1.5px', background: 'var(--cream)', display: 'block', opacity: mobileOpen ? 0 : 1, transition: 'all 0.2s' }} />
            <span style={{ height: '1.5px', background: 'var(--cream)', display: 'block', transition: 'all 0.2s', transform: mobileOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none' }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: 'var(--navy-light)', borderTop: '1px solid rgba(184,151,90,0.2)', padding: '1rem 1.5rem 1.5rem' }}>
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '0.65rem 0.35rem',
                borderRadius: '4px',
                borderBottom: '1px solid rgba(184,151,90,0.1)',
                color: path === to ? 'var(--gold)' : 'var(--cream-dim)',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

const TICKER_ITEMS = [
  'Arizona-Focused Acquisitions',
  'Defensible Niche Businesses',
  'EBITDA $500K – $2M',
  'Essential Services',
  'Local Market Leaders',
  'Established 5+ Years',
  'Succession-Ready Sellers',
  'Lower Middle Market',
  'Permanent capital',
  'Operator-Led Strategy',
]

export function TickerBar() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="ticker-wrapper">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
