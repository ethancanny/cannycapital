import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '5rem 1.5rem 4rem', background: 'linear-gradient(160deg, var(--navy) 0%, var(--navy-mid) 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label">Reach Out</p>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', maxWidth: '600px' }}>
            Let's Start a <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Conversation</em>
          </h1>
          <div className="gold-divider" />
          <p className="section-body" style={{ maxWidth: '560px' }}>
            Whether you're a business owner exploring options, a referral partner with a deal,
            or simply curious—we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--navy)' }}>
        <div className="layout-two-col-wide" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          {/* Contact info */}
          <div>
            <p className="section-label">Direct Contact</p>
            <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Ethan Canny</h2>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '2rem' }}>Founder &amp; Managing Partner</div>
            <div className="gold-divider" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(184,151,90,0.1)', border: '1px solid rgba(184,151,90,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1rem' }}>✉</div>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.25rem' }}>Email</div>
                  <a href="mailto:ethan@cannycapitalpartners.com" style={{ color: 'var(--cream)', fontSize: '0.95rem', textDecoration: 'none' }}>
                    ethan@cannycapitalpartners.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(184,151,90,0.1)', border: '1px solid rgba(184,151,90,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1rem' }}>📞</div>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.25rem' }}>Phone</div>
                  <a href="tel:6028269070" style={{ color: 'var(--cream)', fontSize: '0.95rem', textDecoration: 'none' }}>
                    602.826.9070
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(184,151,90,0.1)', border: '1px solid rgba(184,151,90,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1rem' }}>📍</div>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.25rem' }}>Location</div>
                  <div style={{ color: 'var(--cream)', fontSize: '0.95rem' }}>Phoenix, Arizona</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem', padding: '1.75rem', background: 'rgba(184,151,90,0.06)', border: '1px solid rgba(184,151,90,0.2)', borderRadius: '4px' }}>
              <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--cream)', lineHeight: 1.65, margin: '0 0 0.75rem' }}>
                "All conversations are completely confidential. There's no pressure and no obligation—
                just an honest dialogue about whether there might be a fit."
              </p>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>— Ethan Canny, Canny Capital Partners</div>
            </div>
          </div>

          {/* What to expect */}
          <div>
            <p className="section-label">What to Expect</p>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Our Process</h2>
            <div className="gold-divider" />

            {[
              { step: '1', title: 'Initial Call (30 min)', body: 'We\'ll learn about your business, your goals, and your timeline. No paperwork, no NDAs required at this stage—just a conversation.' },
              { step: '2', title: 'Deeper Dive', body: 'If there\'s mutual interest, we\'ll sign an NDA and review financials, operations, and the business model in more depth.' },
              { step: '3', title: 'Letter of Intent', body: 'We move quickly. If it\'s a fit, we\'ll deliver a clear, fair LOI within days—not weeks.' },
              { step: '4', title: 'Closing', body: 'From LOI to close typically takes 60–90 days. We work with your advisors and do what we say we\'ll do.' },
            ].map((item) => (
              <div key={item.step} style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(184,151,90,0.1)' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(184,151,90,0.12)',
                  border: '1px solid rgba(184,151,90,0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--gold)',
                }}>{item.step}</div>
                <div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: 'var(--cream)', marginBottom: '0.35rem', marginTop: 0 }}>{item.title}</h3>
                  <p style={{ color: 'var(--cream-dim)', fontSize: '0.87rem', lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
