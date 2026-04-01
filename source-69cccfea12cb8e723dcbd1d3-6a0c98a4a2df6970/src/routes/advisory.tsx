import { createFileRoute, Link } from '@tanstack/react-router'
import { MapPinned, Mountain, Sun } from 'lucide-react'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/advisory')({
  component: Advisory,
})

function Advisory() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        padding: '5rem 1.5rem 4rem',
        backgroundImage:
          'linear-gradient(160deg, rgba(13,31,60,0.84) 0%, rgba(26,52,85,0.8) 100%), url(/arizona-desert-landscape.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label">Advisory Services</p>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>Strategic &amp; Operational Advisory</h1>
          <div className="gold-divider" />
          <p className="section-body" style={{ maxWidth: '620px' }}>
            Canny Capital Partners provides hands-on strategic and operational advisory services to
            Arizona business owners navigating growth, transition, or succession. We bring an owner's
            perspective—not a consultant's playbook.
          </p>
        </div>
      </section>

      <section style={{ padding: '3.75rem 1.5rem', background: 'var(--navy-mid)', borderTop: '1px solid rgba(184,151,90,0.15)', borderBottom: '1px solid rgba(184,151,90,0.15)' }}>
        <div className="layout-feature-split" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{
            minHeight: '260px',
            borderRadius: '4px',
            border: '1px solid rgba(184,151,90,0.22)',
            background: 'linear-gradient(155deg, rgba(13,31,60,0.88) 0%, rgba(22,47,78,0.92) 55%, rgba(13,31,60,0.95) 100%)',
            padding: '1.5rem',
            display: 'grid',
            gap: '0.9rem',
            alignContent: 'center',
          }}>
            {[
              ['Owner Goals First', 'Every engagement starts with the owner timeline, priorities, and legacy outcomes.'],
              ['Actionable Roadmap', 'Recommendations are converted into practical next steps your team can execute now.'],
              ['Execution Support', 'The team stays involved through implementation, transitions, and key inflection points.'],
            ].map(([title, body]) => (
              <div key={title} style={{ padding: '0.95rem 1rem', borderRadius: '4px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,151,90,0.2)' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: 'var(--cream)', margin: '0 0 0.35rem' }}>{title}</h3>
                <p style={{ color: 'var(--cream-dim)', fontSize: '0.83rem', lineHeight: 1.65, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gap: '0.8rem' }}>
            {[
              { icon: MapPinned, title: 'Local Intelligence', body: 'Advisory recommendations are anchored in Arizona-specific buyer pools, labor realities, and sector demand.' },
              { icon: Sun, title: 'Desert-Ready Operations', body: 'Guidance reflects practical execution in high-heat climates and year-round service demand cycles.' },
              { icon: Mountain, title: 'Long-Term Value Focus', body: 'The framework emphasizes resilient systems that hold up across market cycles and ownership transitions.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} style={{ display: 'flex', gap: '0.9rem', padding: '0.9rem 1rem', background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(184,151,90,0.16)', borderRadius: '4px' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '999px', background: 'rgba(184,151,90,0.16)', border: '1px solid rgba(184,151,90,0.33)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={18} color="var(--gold)" />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: 'var(--cream)', margin: '0 0 0.2rem' }}>{title}</h3>
                  <p style={{ color: 'var(--cream-dim)', fontSize: '0.83rem', lineHeight: 1.6, margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label">What We Offer</p>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Advisory for Every Stage</h2>
          <div className="gold-divider" style={{ marginBottom: '1rem' }} />
          <p className="section-body" style={{ maxWidth: '620px', marginBottom: '3rem' }}>
            Whether you're preparing for an exit, looking to improve operations, or simply want a
            trusted sounding board, we offer advisory services tailored to Arizona business owners.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                title: 'Exit & Succession Planning',
                body: 'We help owners think through timing, valuation expectations, deal structure, and buyer selection—so you can exit on your terms with confidence.',
              },
              {
                title: 'Operational Assessment',
                body: 'We evaluate your business operations with an owner-operator lens, identifying opportunities to improve efficiency, margins, and organizational resilience.',
              },
              {
                title: 'Growth Strategy',
                body: 'From market expansion to service line development, we help you build a realistic growth roadmap that aligns with your goals and resources.',
              },
              {
                title: 'Financial Readiness',
                body: 'We work alongside your financial team to ensure your books, reporting, and financial story are clear, accurate, and compelling to potential buyers or lenders.',
              },
              {
                title: 'Leadership & Talent',
                body: 'We advise on management team development, key-person risk mitigation, and organizational design to reduce owner dependency.',
              },
              {
                title: 'Transaction Support',
                body: 'For owners actively in a sale process, we provide strategic guidance on deal terms, due diligence preparation, and negotiation positioning.',
              },
            ].map((s) => (
              <div key={s.title} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(184,151,90,0.22)',
                borderRadius: '4px',
                padding: '2rem',
              }}>
                <div style={{ width: '28px', height: '2px', background: 'var(--gold)', marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: 'var(--cream)', marginBottom: '0.75rem', marginTop: 0 }}>{s.title}</h3>
                <p style={{ color: 'var(--cream-dim)', fontSize: '0.88rem', lineHeight: 1.75, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--navy-mid)', borderTop: '1px solid rgba(184,151,90,0.15)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="layout-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p className="section-label">Our Approach</p>
              <h2 className="section-title">Built for Arizona Business Owners</h2>
              <div className="gold-divider" />
              <p className="section-body" style={{ marginBottom: '1.25rem' }}>
                We're not outside consultants parachuting in with generic frameworks. We're Arizona-based
                operators who have been in your shoes—and we approach every engagement with the care and
                discretion your business deserves.
              </p>
              <p className="section-body">
                Our advisory relationships are confidential, practical, and built on trust. Whether you
                engage us for a single conversation or an ongoing relationship, you'll get honest,
                actionable guidance from people who understand the Arizona market.
              </p>
            </div>
            <div>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {[
                  ['Confidential', 'Every conversation is treated with complete discretion.'],
                  ['Owner-Focused', 'We prioritize your goals, timeline, and legacy—not a transaction fee.'],
                  ['Practical', 'Actionable recommendations grounded in real operational experience.'],
                  ['Arizona-Native', 'Deep local market knowledge and relationships across the state.'],
                ].map(([title, body]) => (
                  <div key={title} style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(184,151,90,0.15)',
                    borderRadius: '4px',
                    padding: '1.25rem 1.5rem',
                  }}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: 'var(--cream)', marginBottom: '0.3rem', fontWeight: 600 }}>{title}</div>
                    <p style={{ color: 'var(--cream-dim)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p className="section-label">Start a Conversation</p>
          <h2 className="section-title">Let's Talk About Your Business</h2>
          <div className="gold-divider center" />
          <p className="section-body" style={{ marginBottom: '2.5rem' }}>
            Whether you're exploring an exit, looking to strengthen operations, or just want a
            trusted perspective, we'd welcome the conversation. No pressure, no obligation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:ethan@cannycapitalpartners.com" className="btn-gold">Get in Touch</a>
            <Link to="/contact" className="btn-outline">Contact Page</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
