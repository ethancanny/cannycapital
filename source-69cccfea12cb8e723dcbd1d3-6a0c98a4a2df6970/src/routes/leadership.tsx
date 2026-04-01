import { createFileRoute } from '@tanstack/react-router'
import { MapPinned, Mountain, Sun } from 'lucide-react'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/leadership')({
  component: Leadership,
})

function Leadership() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        padding: '5rem 1.5rem 4rem',
        backgroundImage:
          'linear-gradient(155deg, rgba(13,31,60,0.82) 0%, rgba(26,52,85,0.8) 55%, rgba(13,31,60,0.86) 100%), url(/arizona-desert-landscape.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label">The Team</p>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>Leadership</h1>
          <div className="gold-divider" />
          <p className="section-body" style={{ maxWidth: '560px' }}>
            Canny Capital Partners is led by operators who have built businesses from the ground up
            and understand what it means to be responsible stewards of something someone else has built.
          </p>
        </div>
      </section>

      {/* Ethan */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="layout-profile-split" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start', maxWidth: '900px' }}>
            <div>
              <div style={{
                width: '100%',
                aspectRatio: '3/4',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(184,151,90,0.25)',
                maxWidth: '240px',
              }}>
                <img src="/ethan-headshot.jpeg" alt="Ethan Canny" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>

            <div>
              <p className="section-label">Founder &amp; Managing Partner</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: 'var(--cream)', margin: '0 0 0.25rem' }}>Ethan Canny</h2>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem', fontWeight: 500 }}>Canny Capital Partners</div>
              <div className="gold-divider" />

              <p className="section-body" style={{ marginBottom: '1.25rem' }}>
                A Phoenix native, Ethan brings experience in healthcare private equity and public
                accounting, where he has worked closely with business owners of all sizes to structure
                transactions and provide comprehensive financial guidance.
              </p>
              <p className="section-body" style={{ marginBottom: '1.25rem' }}>
                He knows that behind every business is a story, a team, and a community that depends on
                getting the transition right. Ethan is based in Phoenix and focuses exclusively on
                Arizona&apos;s business ecosystem, maintaining deep relationships with owners, advisors, and
                local operators across the state.
              </p>
              <p className="section-body" style={{ marginBottom: '2rem' }}>
                He founded Canny Capital Partners after recognizing the untapped potential in the
                lower-middle market, inspired by his time in healthcare private equity. Now, working
                closely with his family, advisors, and investors, he&apos;s excited to provide compelling
                exit opportunities to business owners in his home state.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="mailto:ethan@cannycapitalpartners.com" className="btn-gold" style={{ fontSize: '0.78rem' }}>
                  ethan@cannycapitalpartners.com
                </a>
                <a href="tel:6028269070" className="btn-outline" style={{ fontSize: '0.78rem' }}>
                  602.826.9070
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ronald Canny */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--navy)', borderTop: '1px solid rgba(184,151,90,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="layout-profile-split" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start', maxWidth: '900px' }}>
            <div>
              <div style={{
                width: '100%',
                aspectRatio: '3/4',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(184,151,90,0.25)',
                maxWidth: '240px',
              }}>
                <img src="/ron-headshot.jpeg" alt="Ronald Canny" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>

            <div>
              <p className="section-label">Operating Partner</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: 'var(--cream)', margin: '0 0 0.25rem' }}>Ronald Canny</h2>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem', fontWeight: 500 }}>Canny Capital Partners</div>
              <div className="gold-divider" />

              <p className="section-body" style={{ marginBottom: '1.25rem' }}>
                Ron brings decades of operational leadership to Canny Capital Partners, shaped by years of building, scaling, and managing businesses.
                Across multiple industries, he has developed a seasoned perspective on what it takes to run
                and grow a company successfully.
              </p>
              <p className="section-body" style={{ marginBottom: '1.25rem' }}>
                With deep expertise in business operations, strategic planning, and organizational leadership,
                Ron provides hands-on guidance to portfolio companies during and after the transition process.
                He understands the challenges owners face and brings a pragmatic, relationship-driven approach
                to every engagement.
              </p>
              <p className="section-body" style={{ marginBottom: '2rem' }}>
                Based in Arizona, Ron is an active member of the local business community and is committed
                to preserving the legacy of the businesses Canny Capital acquires.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="mailto:ron@cannycapitalpartners.com" className="btn-gold" style={{ fontSize: '0.78rem' }}>
                  ron@cannycapitalpartners.com
                </a>
                <a href="tel:6023491650" className="btn-outline" style={{ fontSize: '0.78rem' }}>
                  602.349.1650
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 1.5rem', background: 'var(--navy-mid)', borderTop: '1px solid rgba(184,151,90,0.15)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p className="section-label">Who We Work With</p>
          <h2 className="section-title">Our Operator &amp; Advisor Network</h2>
          <div className="gold-divider center" />
          <p className="section-body" style={{ maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            We partner with local professionals across key disciplines to ensure every acquisition
            and transition is supported by deep functional expertise in Arizona.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
            {[
              { title: 'Operations Leaders', body: 'Local operators who have managed P&Ls, built teams, and scaled service businesses across Arizona.' },
              { title: 'M&A Professionals', body: 'Local deal professionals with deep experience in lower middle market transactions, due diligence, and structuring.' },
              { title: 'Financial Advisors', body: 'Local CPAs, CFOs, and financial consultants focused on valuation, tax planning, and financial modeling.' },
              { title: 'Legal Counsel', body: 'Local M&A attorneys experienced in purchase agreements, entity structuring, and post-close integration.' },
              { title: 'Industry Specialists', body: 'Local domain experts in home services, commercial maintenance, healthcare-adjacent services, and specialty trades.' },
              { title: 'HR & Talent Partners', body: 'Local HR professionals who support workforce transitions, culture integration, and talent retention.' },
              { title: 'Marketing & Growth', body: 'Local growth strategists who help acquired businesses modernize go-to-market and customer acquisition.' },
              { title: 'Commercial Real Estate', body: 'Local real estate professionals with deep Arizona market knowledge, lease negotiation, and facility planning.' },
            ].map((d) => (
              <div key={d.title} style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,151,90,0.15)', borderRadius: '4px' }}>
                <div style={{ width: '28px', height: '2px', background: 'var(--gold)', marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: 'var(--cream)', marginBottom: '0.5rem', marginTop: 0 }}>{d.title}</h3>
                <p style={{ color: 'var(--cream-dim)', fontSize: '0.87rem', lineHeight: 1.75, margin: 0 }}>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4.5rem 1.5rem', background: 'var(--navy-mid)', borderTop: '1px solid rgba(184,151,90,0.15)', borderBottom: '1px solid rgba(184,151,90,0.15)' }}>
        <div className="layout-media-split" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem', alignItems: 'stretch' }}>
          <div style={{
            minHeight: '300px',
            borderRadius: '4px',
            border: '1px solid rgba(184,151,90,0.2)',
            backgroundImage:
              'linear-gradient(180deg, rgba(13,31,60,0.1) 0%, rgba(13,31,60,0.45) 100%), url(/arizona-desert-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              { icon: MapPinned, title: 'Arizona Grounded', body: 'Leadership decisions are made locally, with direct market context from Phoenix and across the state.' },
              { icon: Sun, title: 'Desert Market Dynamics', body: 'Arizona climate patterns and growth corridors shape resilient demand for essential service businesses.' },
              { icon: Mountain, title: 'Long-Horizon Stewardship', body: 'The team prioritizes preserving founder legacies while building durable operations for the next generation.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} style={{ display: 'flex', gap: '0.9rem', padding: '1rem 1.1rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,151,90,0.18)', borderRadius: '4px' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '999px', background: 'rgba(184,151,90,0.16)', border: '1px solid rgba(184,151,90,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={18} color="var(--gold)" />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.98rem', color: 'var(--cream)', margin: '0 0 0.35rem' }}>{title}</h3>
                  <p style={{ color: 'var(--cream-dim)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--navy)', borderTop: '1px solid rgba(184,151,90,0.15)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p className="section-label">What Drives Us</p>
          <h2 className="section-title">Built on Character</h2>
          <div className="gold-divider center" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '2.5rem', textAlign: 'left' }}>
            {[
              { title: 'Integrity First', body: 'We do what we say. Our handshake means something. Deals that require compromising our character simply don\'t happen.' },
              { title: 'Genuine Curiosity', body: 'We love learning about businesses, industries, and the people who built them. That curiosity makes us better partners.' },
              { title: 'Accountability', body: 'We hold ourselves to high standards and expect the same from our partners. No excuses—just execution.' },
              { title: 'Community Roots', body: 'Arizona is home. We invest here because we live here, and because we believe in the state\'s future.' },
            ].map((v) => (
              <div key={v.title} style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,151,90,0.15)', borderRadius: '4px' }}>
                <div style={{ width: '28px', height: '2px', background: 'var(--gold)', marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: 'var(--cream)', marginBottom: '0.5rem', marginTop: 0 }}>{v.title}</h3>
                <p style={{ color: 'var(--cream-dim)', fontSize: '0.87rem', lineHeight: 1.75, margin: 0 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
