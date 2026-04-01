import { createFileRoute, Link } from '@tanstack/react-router'
import { Handshake, Mountain, Sun, TrendingUp } from 'lucide-react'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        backgroundImage:
          'linear-gradient(158deg, rgba(13,31,60,0.84) 0%, rgba(26,52,85,0.8) 56%, rgba(13,31,60,0.88) 100%), url(/arizona-desert-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        padding: '5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background accent */}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '45%', height: '100%',
          background: 'radial-gradient(ellipse at top right, rgba(184,151,90,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative' }}>
          <p className="section-label" style={{ marginBottom: '1.25rem' }}>Arizona's Acquisition Partner</p>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
            fontWeight: 700,
            color: 'var(--cream)',
            lineHeight: 1.15,
            maxWidth: '760px',
            margin: '0 0 1.5rem',
          }}>
            We Acquire &amp; Operate<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Great Arizona Businesses</em>
          </h1>
          <div className="gold-divider" />
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--cream-dim)',
            lineHeight: 1.8,
            maxWidth: '580px',
            marginBottom: '2.5rem',
          }}>
            Canny Capital Partners is a Phoenix-based acquisition firm focused exclusively on the
            Arizona lower middle market. We partner with retiring founders and owners-ready-to-sell to
            carry their legacy forward under committed, long-term ownership.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/arizona-opportunity" className="btn-gold">Explore the Arizona Opportunity</Link>
            <Link to="/contact" className="btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Thesis Cards */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label">Our Thesis</p>
            <h2 className="section-title">Why Arizona. Why Now.</h2>
            <div className="gold-divider center" />
            <p className="section-body" style={{ maxWidth: '560px', margin: '0 auto' }}>
              A wave of retiring business owners, a growing economy, and a lack of local acquisition
              capital creates a compelling window for disciplined buyers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                icon: Mountain,
                title: 'Underserved Market',
                body: 'Arizona\'s lower middle market ($1M–$10M revenue) is underserved by institutional capital, creating attractive valuations for disciplined operators.',
              },
              {
                icon: Sun,
                title: 'Silver Tsunami',
                body: 'Over 10,000 Arizona Baby Boomer business owners are expected to transition their businesses by 2030—many without a succession plan.',
              },
              {
                icon: TrendingUp,
                title: 'Economic Tailwinds',
                body: 'Arizona leads the nation in population growth, job creation, and business migration, driving durable demand for essential services.',
              },
              {
                icon: Handshake,
                title: 'Owner-First Culture',
                body: 'We treat sellers as partners. Our operator-led model ensures the businesses we acquire are run with the same care and pride as when they were founded.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(184,151,90,0.2)',
                borderRadius: '4px',
                padding: '2rem 1.75rem',
              }}>
                <div style={{ width: '42px', height: '42px', marginBottom: '1rem', borderRadius: '999px', background: 'rgba(184,151,90,0.13)', border: '1px solid rgba(184,151,90,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={20} color="var(--gold)" />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 600, color: 'var(--cream)', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: 'var(--cream-dim)', fontSize: '0.92rem', lineHeight: 1.75 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat band */}
      <section style={{ background: 'var(--navy-mid)', borderTop: '1px solid rgba(184,151,90,0.2)', borderBottom: '1px solid rgba(184,151,90,0.2)', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {[
            { number: '#1', label: 'US State for Net Migration' },
            { number: '10K+', label: 'AZ Boomer Owners Retiring by 2030' },
            { number: '$500K–$2M', label: 'Target EBITDA Range' },
            { number: '100%', label: 'Arizona Focused' },
          ].map((s) => (
            <div key={s.label}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What we look for preview */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--navy)' }}>
        <div className="layout-two-col" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p className="section-label">What We Look For</p>
            <h2 className="section-title">Acquisition Criteria at a Glance</h2>
            <div className="gold-divider" />
            <p className="section-body" style={{ marginBottom: '2rem' }}>
              We target profitable, established businesses with stable cash flows, loyal customers,
              and owners who care about leaving their company in good hands.
            </p>
            <Link to="/investment-criteria" className="btn-gold">View Full Criteria</Link>
          </div>
          <div className="layout-mini-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              ['Niche', 'Defensible Moat'],
              ['EBITDA', '$500K – $2M'],
              ['Geography', 'Arizona'],
              ['Years in Biz', '5+ Years'],
              ['Ownership', 'Any Structure'],
              ['Industry', 'Essential Services'],
            ].map(([label, value]) => (
              <div key={label} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(184,151,90,0.2)',
                padding: '1rem 1.25rem',
                borderRadius: '4px',
              }}>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.35rem', fontWeight: 600 }}>{label}</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--cream)', fontWeight: 500 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band" style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p className="section-label">Ready to Have a Conversation?</p>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Let's Talk About Your Business</h2>
          <div className="gold-divider center" />
          <p className="section-body" style={{ marginBottom: '2.5rem' }}>
            Whether you're thinking about an exit in 6 months or 3 years, a confidential conversation
            costs nothing and could open doors you haven't considered.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:ethan@cannycapitalpartners.com" className="btn-gold">Email Ethan</a>
            <a href="tel:6028269070" className="btn-outline">602.826.9070</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
