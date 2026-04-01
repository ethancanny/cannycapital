import { createFileRoute, Link } from '@tanstack/react-router'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/investment-criteria')({
  component: InvestmentCriteria,
})

function InvestmentCriteria() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        padding: '5rem 1.5rem 4rem',
        backgroundImage:
          'linear-gradient(160deg, rgba(13,31,60,0.87) 0%, rgba(26,52,85,0.84) 100%), url(/arizona-desert-landscape.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label">What We Buy</p>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', maxWidth: '700px' }}>
            Investment Criteria
          </h1>
          <div className="gold-divider" />
          <p className="section-body" style={{ maxWidth: '600px' }}>
            We are highly focused buyers. Our criteria aren't a wishlist—they reflect the types of
            businesses where we can add meaningful value and commit to long-term ownership.
          </p>
        </div>
      </section>

      {/* Primary criteria */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label">Primary Criteria</p>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>The Fundamentals</h2>
          <div className="gold-divider" style={{ marginBottom: '3rem' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                label: 'Geography',
                value: 'Arizona',
                detail: 'We focus exclusively on Arizona-based businesses. Our local presence and network give us deep market knowledge and sourcing advantages.',
              },
              {
                label: 'Defensible Niche',
                value: 'Strong Local Moat',
                detail: 'We seek businesses with strong local reputation, proprietary relationships, or specialized expertise that competitors can\'t easily replicate.',
              },
              {
                label: 'EBITDA',
                value: '$500K – $2M',
                detail: 'We look for businesses with demonstrated profitability. Normalized EBITDA between $500K and $2M is our sweet spot.',
              },
              {
                label: 'Business Age',
                value: '5+ Years',
                detail: 'We prefer established businesses with proven operating histories, stable customer bases, and systems that outlast any single employee.',
              },
              {
                label: 'Reason for Sale',
                value: 'Succession / Retirement',
                detail: 'We are ideally suited for owners who want to retire or step back, ensuring the business continues to thrive under new stewardship.',
              },
              {
                label: 'Industry Focus',
                value: 'Industry Agnostic',
                detail: 'We evaluate opportunities across multiple sectors. We prefer essential, recurring-revenue businesses, but remain open to strong companies in adjacent industries.',
              },
            ].map((c) => (
              <div key={c.label} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(184,151,90,0.22)',
                borderRadius: '4px',
                padding: '2rem',
              }}>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.4rem' }}>{c.label}</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.75rem' }}>{c.value}</div>
                <p style={{ color: 'var(--cream-dim)', fontSize: '0.87rem', lineHeight: 1.75, margin: 0 }}>{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry focus */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--navy-mid)', borderTop: '1px solid rgba(184,151,90,0.15)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="layout-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p className="section-label">Industries</p>
              <h2 className="section-title">Sectors of Interest</h2>
              <div className="gold-divider" />
              <p className="section-body" style={{ marginBottom: '2rem' }}>
                We are industry agnostic and evaluate opportunities across multiple sectors. We do have
                preferences for essential, recurring-revenue businesses that are resilient across economic
                cycles and deeply rooted in local communities.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Home Services & Repair',
                  'Commercial Services & Maintenance',
                  'Healthcare-Adjacent Services',
                  'Specialty Trades & Contracting',
                  'Business Services & Outsourcing',
                  'Distribution & Light Manufacturing',
                  'Environmental & Waste Services',
                  'Niche B2B Services',
                ].map((industry) => (
                  <li key={industry} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.45rem 0', borderBottom: '1px solid rgba(184,151,90,0.1)', fontSize: '0.9rem', color: 'var(--cream-dim)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{
                height: '220px',
                borderRadius: '4px',
                border: '1px solid rgba(184,151,90,0.2)',
                marginBottom: '1.5rem',
                backgroundImage:
                  'linear-gradient(160deg, rgba(13,31,60,0.48) 0%, rgba(13,31,60,0.66) 100%), url(/arizona-desert-hero.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />
              <p className="section-label">What We Value</p>
              <h2 className="section-title">Qualitative Factors</h2>
              <div className="gold-divider" />
              {[
                { title: 'Recurring Revenue', body: 'Subscription, contract, or repeat-customer models reduce revenue volatility and strengthen enterprise value.' },
                { title: 'Defensible Niche', body: 'Businesses with strong local reputation, proprietary relationships, or specialized expertise that competitors can\'t easily replicate.' },
                { title: 'Scalable Operations', body: 'Well-documented processes and systems that allow the business to grow without being entirely dependent on the founder.' },
                { title: 'Loyal Workforce', body: 'Tenured employees and low turnover are a proxy for culture quality and operational stability.' },
              ].map((q) => (
                <div key={q.title} style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: 'var(--cream)', marginBottom: '0.35rem', marginTop: 0 }}>{q.title}</h3>
                  <p style={{ color: 'var(--cream-dim)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{q.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p className="section-label">Does Your Business Fit?</p>
          <h2 className="section-title">Let's Have a Confidential Conversation</h2>
          <div className="gold-divider center" />
          <p className="section-body" style={{ marginBottom: '2.5rem' }}>
            You don't have to have everything figured out. Reach out and let's explore whether there's a fit.
          </p>
          <Link to="/contact" className="btn-gold">Contact Us</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
