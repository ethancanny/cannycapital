import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/our-approach')({
  component: OurApproach,
})

function OurApproach() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        padding: '5rem 1.5rem 4rem',
        backgroundImage:
          'linear-gradient(160deg, rgba(13,31,60,0.86) 0%, rgba(26,52,85,0.82) 100%), url(/arizona-desert-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label">Our Philosophy</p>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', maxWidth: '700px' }}>
            A Long-Term Owner's Mindset,<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Not a Financial Engineer's</em>
          </h1>
          <div className="gold-divider" />
          <p className="section-body" style={{ maxWidth: '640px' }}>
            We are operators first. Our goal is to acquire businesses we intend to hold and grow
            indefinitely—not to flip them in 5 years for a multiple. That distinction changes
            everything about how we source, evaluate, and run companies.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-label">Our Process</p>
            <h2 className="section-title">How We Acquire &amp; Operate</h2>
            <div className="gold-divider center" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              {
                step: '01',
                title: 'Proprietary Sourcing',
                body: 'We build direct relationships with Arizona business owners through outreach, referral networks, and local community engagement—before they ever list with a broker.',
              },
              {
                step: '02',
                title: 'Disciplined Diligence',
                body: 'Our evaluation framework combines financial analysis, operational assessment, and qualitative conversations with owners, customers, and employees.',
              },
              {
                step: '03',
                title: 'Fair, Clean Offers',
                body: 'We make straightforward offers with minimal contingencies. We respect sellers\' time and we close what we say we\'ll close.',
              },
              {
                step: '04',
                title: 'Operator-Led Transition',
                body: 'The founder stays involved as long as they\'d like. We work side-by-side to preserve culture, customer relationships, and operational excellence.',
              },
              {
                step: '05',
                title: 'Value Creation',
                body: 'Post-acquisition, we focus on strengthening what already works: team retention, systems improvement, and organic growth. No dramatic pivots.',
              },
              {
                step: '06',
                title: 'Long-Term Stewardship',
                body: 'We are permanent capital. Our investors expect us to hold businesses for 10+ years, aligning our incentives with sustained quality—not short-term flips.',
              },
            ].map((item) => (
              <div key={item.step} style={{
                display: 'flex',
                gap: '1.25rem',
                padding: '2rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(184,151,90,0.18)',
                borderRadius: '4px',
              }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: 'rgba(184,151,90,0.35)', lineHeight: 1, flexShrink: 0, minWidth: '3rem' }}>{item.step}</div>
                <div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--cream)', marginBottom: '0.5rem', marginTop: 0 }}>{item.title}</h3>
                  <p style={{ color: 'var(--cream-dim)', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--navy-mid)', borderTop: '1px solid rgba(184,151,90,0.15)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p className="section-label">Core Principles</p>
          <h2 className="section-title">What We Believe</h2>
          <div className="gold-divider center" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginTop: '2.5rem', textAlign: 'left' }}>
            {[
              { title: 'Trust is Everything', body: 'Transactions fail when trust breaks down. We earn it by being transparent, consistent, and honest—even when it\'s uncomfortable.' },
              { title: 'Businesses Are Communities', body: 'Behind every company are employees, families, and customers who depend on it. We take that responsibility seriously.' },
              { title: 'Simplicity Wins', body: 'Complex deals collapse. We keep structures simple, maintain focus, and avoid financial engineering for its own sake.' },
              { title: 'Patient Capital', body: 'We are not under pressure to exit. That patience lets us weather cycles and make better decisions for the long term.' },
            ].map((p) => (
              <div key={p.title} style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,151,90,0.15)', borderRadius: '4px' }}>
                <div style={{ width: '32px', height: '2px', background: 'var(--gold)', marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', color: 'var(--cream)', marginBottom: '0.6rem', marginTop: 0 }}>{p.title}</h3>
                <p style={{ color: 'var(--cream-dim)', fontSize: '0.88rem', lineHeight: 1.75, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
