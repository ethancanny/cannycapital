import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', borderTop: '1px solid rgba(184,151,90,0.15)', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem' }}>
        <div>
          <img src="/canny-logo-white.png" alt="Canny Capital Partners" style={{ height: '28px', opacity: 0.9, marginBottom: '0.75rem' }} />
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>Phoenix, Arizona</div>
          <p style={{ fontSize: '0.82rem', color: 'var(--cream-dim)', lineHeight: 1.7 }}>
            Acquiring and operating lower middle market businesses across the state of Arizona.
          </p>
        </div>
        <div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '1rem' }}>Navigation</div>
          {[
            { to: '/', label: 'Home' },
            { to: '/our-approach', label: 'Our Approach' },
            { to: '/investment-criteria', label: 'Investment Criteria' },
            { to: '/arizona-opportunity', label: 'Arizona Opportunity' },
            { to: '/advisory', label: 'Advisory' },
            { to: '/leadership', label: 'Leadership' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <div key={to} style={{ marginBottom: '0.4rem' }}>
              <Link
                to={to as any}
                style={{
                  display: 'inline-block',
                  padding: '0.2rem 0.35rem',
                  marginLeft: '-0.35rem',
                  fontSize: '0.82rem',
                  color: 'var(--cream-dim)',
                  textDecoration: 'none',
                  borderRadius: '4px',
                }}
              >
                {label}
              </Link>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '1rem' }}>Contact</div>
          <p style={{ fontSize: '0.82rem', color: 'var(--cream-dim)', marginBottom: '0.5rem' }}>
            <a href="mailto:ethan@cannycapitalpartners.com" style={{ color: 'var(--cream-dim)' }}>ethan@cannycapitalpartners.com</a>
          </p>
          <p style={{ fontSize: '0.82rem', color: 'var(--cream-dim)' }}>
            <a href="tel:6028269070" style={{ color: 'var(--cream-dim)' }}>602.826.9070</a>
          </p>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '2.5rem auto 0', borderTop: '1px solid rgba(184,151,90,0.1)', paddingTop: '1.5rem' }}>
        <p className="footer-disclaimer">
          © {new Date().getFullYear()} Canny Capital Partners LLC. All rights reserved. This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. Past performance is not indicative of future results. Canny Capital Partners is not a registered investment adviser.
        </p>
      </div>
    </footer>
  )
}
