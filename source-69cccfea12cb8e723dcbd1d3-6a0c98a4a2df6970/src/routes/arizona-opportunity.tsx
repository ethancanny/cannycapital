import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/arizona-opportunity')({
  component: ArizonaOpportunity,
  head: () => ({
    meta: [{ title: 'The Arizona Opportunity | Canny Capital Partners' }],
  }),
})

function ArizonaOpportunity() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────── */}
      <section style={{
        backgroundImage:
          'linear-gradient(160deg, rgba(13,31,60,0.87) 0%, rgba(26,52,85,0.84) 50%, rgba(13,31,60,0.9) 100%), url(/arizona-desert-landscape.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '6rem 1.5rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '50%', height: '100%',
          background: 'radial-gradient(ellipse at top right, rgba(184,151,90,0.09) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <p className="section-label">The Case for Arizona</p>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 700,
            color: 'var(--cream)',
            lineHeight: 1.15,
            maxWidth: '760px',
            margin: '0 0 1.5rem',
          }}>
            The Arizona Opportunity:<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>A Generational Window for Acquisition</em>
          </h1>
          <div className="gold-divider" />
          <p style={{ fontSize: '1.05rem', color: 'var(--cream-dim)', lineHeight: 1.8, maxWidth: '640px', marginBottom: '3.5rem' }}>
            The convergence of rapid population growth, an aging owner demographic, and a structural
            undersupply of local acquisition capital has created a rare, time-sensitive opportunity in
            Arizona's lower middle market.
          </p>

          {/* Hero stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', maxWidth: '900px' }}>
            {[
              { number: '#1', label: 'State for Net In-Migration', source: 'U.S. Census Bureau, 2023' },
              { number: '7.4M', label: 'Arizona Population (2024)', source: 'Arizona Office of Economic Opportunity' },
              { number: '10,000+', label: 'Boomer-Owned AZ Businesses Transitioning by 2030', source: 'SCORE & SBA Estimates' },
              { number: '$500K–$2M', label: 'Target EBITDA Range', source: 'Canny Capital Investment Criteria' },
              { number: '3.5%', label: 'AZ Annual GDP Growth Rate', source: 'Arizona Commerce Authority, 2023' },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label" style={{ marginBottom: '0.5rem' }}>{s.label}</div>
                <div className="source-note">{s.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Population & Migration ────────────────────── */}
      <section style={{ padding: '5.5rem 1.5rem', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="layout-two-col-wide" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <p className="section-label">Demographics</p>
              <h2 className="section-title">Arizona is America's Growth Engine</h2>
              <div className="gold-divider" />
              <p className="section-body" style={{ marginBottom: '1.25rem' }}>
                Arizona has ranked among the fastest-growing states in the U.S. for more than a decade.
                In 2022 and 2023, Phoenix added more residents than any other metro area in the country,
                surpassing Sun Belt competitors like Dallas, Miami, and Austin.
              </p>
              <p className="section-body" style={{ marginBottom: '1.25rem' }}>
                This isn't a pandemic-era blip. Arizona's population growth is structural: driven by
                favorable tax policy, affordable housing (relative to coastal markets), a young and
                growing workforce, and a business-friendly regulatory environment that continues to
                attract corporations and entrepreneurs alike.
              </p>
              <p className="section-body" style={{ marginBottom: '2rem' }}>
                More people means more demand for essential services—HVAC, plumbing, landscaping,
                pest control, healthcare support, and the dozens of other services that underpin
                daily life. That translates directly into durable, growing revenue for the businesses
                we target.
              </p>
              <p className="source-note">Sources: U.S. Census Bureau Annual Population Estimates; Arizona Office of Economic Opportunity</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { metric: '#1', label: 'State for net in-migration (2022–2023)', source: 'U.S. Census Bureau' },
                { metric: '+2.4%', label: 'Arizona annual population growth rate', source: 'Arizona OEO, 2023' },
                { metric: '5.7M', label: 'Phoenix metro population (2024)', source: 'U.S. Census Bureau ACS' },
                { metric: 'Top 3', label: 'States for corporate relocations since 2020', source: 'Site Selection Magazine' },
                { metric: '34.5 yrs', label: 'Arizona median age — well below U.S. average', source: 'U.S. Census Bureau' },
              ].map((item) => (
                <div key={item.label} style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'center',
                  padding: '1.25rem 1.5rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(184,151,90,0.18)',
                  borderRadius: '4px',
                }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold)', minWidth: '80px', flexShrink: 0 }}>{item.metric}</div>
                  <div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--cream)', marginBottom: '0.2rem' }}>{item.label}</div>
                    <div className="source-note">{item.source}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Silver Tsunami ────────────────────────────── */}
      <section style={{ padding: '5.5rem 1.5rem', background: 'var(--navy-mid)', borderTop: '1px solid rgba(184,151,90,0.15)', borderBottom: '1px solid rgba(184,151,90,0.15)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <p className="section-label">Succession Crisis</p>
            <h2 className="section-title">The Silver Tsunami: 10,000+ Businesses Need a New Owner</h2>
            <div className="gold-divider center" />
            <p className="section-body">
              The Baby Boomer generation owns a disproportionate share of small and lower middle market
              businesses in the United States. In Arizona, tens of thousands of these owners are reaching
              retirement age—and most have no succession plan in place.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {[
              {
                number: '76M',
                label: 'Baby Boomers in the U.S.',
                body: 'The largest generation in American history controls an estimated $10 trillion in business value that must transfer in the coming decade.',
                source: 'Pew Research Center',
              },
              {
                number: '58%',
                label: 'Of Owners Have No Exit Plan',
                body: 'More than half of U.S. small business owners approaching retirement age have no formal succession or exit plan in place.',
                source: 'Exit Planning Institute',
              },
              {
                number: '10,000+',
                label: 'Arizona Businesses Transitioning by 2030',
                body: 'Conservative estimates suggest over 10,000 Arizona businesses with revenues of $1M+ will change hands by 2030 as Boomer owners retire.',
                source: 'SBA & SCORE Regional Data',
              },
              {
                number: '≤20%',
                label: 'Listed Businesses That Actually Sell',
                body: 'Industry data suggests fewer than 1 in 5 businesses that go to market actually close—underscoring the need for prepared, well-capitalized buyers.',
                source: 'BizBuySell Market Report',
              },
            ].map((card) => (
              <div key={card.label} className="stat-card" style={{ textAlign: 'left', padding: '2rem' }}>
                <div className="stat-number" style={{ textAlign: 'left', marginBottom: '0.25rem' }}>{card.number}</div>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.75rem' }}>{card.label}</div>
                <p style={{ color: 'var(--cream-dim)', fontSize: '0.87rem', lineHeight: 1.7, marginBottom: '0.5rem' }}>{card.body}</p>
                <div className="source-note">Source: {card.source}</div>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(184,151,90,0.07)', border: '1px solid rgba(184,151,90,0.25)', borderRadius: '4px', padding: '2.5rem 3rem', maxWidth: '860px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--cream)', lineHeight: 1.7, margin: '0 0 1rem', textAlign: 'center' }}>
              "The gap between the number of businesses that need to sell and the number of qualified,
              committed buyers creates one of the most compelling acquisition environments in a generation."
            </p>
            <div style={{ textAlign: 'center', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)' }}>— Canny Capital Partners Thesis</div>
          </div>
        </div>
      </section>

      {/* ── Economic Fundamentals ─────────────────────── */}
      <section style={{ padding: '5.5rem 1.5rem', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-label">Economic Context</p>
            <h2 className="section-title">Arizona's Economic Fundamentals</h2>
            <div className="gold-divider center" />
            <p className="section-body" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Arizona's macro environment supports durable demand across the service sectors we target.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
            {[
              {
                icon: '🏗',
                title: 'Construction & Infrastructure Boom',
                stats: [
                  { value: '$65B+', label: 'In active construction projects statewide', source: 'Arizona Commerce Authority' },
                  { value: '#2', label: 'State for construction job growth (2023)', source: 'AGC of America' },
                ],
                body: 'Arizona\'s housing and commercial construction pipeline remains one of the most active in the nation, creating sustained demand for trade services, materials, and maintenance.',
              },
              {
                icon: '💼',
                title: 'Job Creation & Employment',
                stats: [
                  { value: '3.5%', label: 'Arizona GDP growth rate (2023)', source: 'Arizona Commerce Authority' },
                  { value: 'Top 5', label: 'States for job creation 2020–2024', source: 'Bureau of Labor Statistics' },
                ],
                body: 'A growing workforce drives demand for business services, healthcare support, and consumer services across the state.',
              },
              {
                icon: '🏢',
                title: 'Corporate Migration',
                stats: [
                  { value: '900+', label: 'Companies relocated or expanded to AZ since 2020', source: 'Arizona Commerce Authority' },
                  { value: 'Top 3', label: 'Business-friendly states (regulatory environment)', source: 'Tax Foundation 2024' },
                ],
                body: 'Intel, TSMC, Taiwan\'s semiconductor fabs, and dozens of Fortune 500 relocations are deepening Arizona\'s commercial services demand profile.',
              },
              {
                icon: '🌡',
                title: 'Essential Services Demand',
                stats: [
                  { value: '299', label: 'Average annual sunny days in Phoenix', source: 'National Weather Service' },
                  { value: 'Top 10', label: 'Hottest major cities — drives HVAC, pest, landscaping demand', source: 'NOAA Climate Data' },
                ],
                body: 'Arizona\'s extreme climate creates non-discretionary demand for HVAC, pest control, pool maintenance, and landscaping services year-round.',
              },
            ].map((card) => (
              <div key={card.title} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(184,151,90,0.2)',
                borderRadius: '4px',
                padding: '2rem',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{card.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 600, color: 'var(--cream)', marginBottom: '1rem', marginTop: 0 }}>{card.title}</h3>
                <div className="layout-stats-row" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  {card.stats.map((s) => (
                    <div key={s.label} style={{ flex: 1, background: 'rgba(184,151,90,0.07)', padding: '0.75rem', borderRadius: '3px' }}>
                      <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '0.25rem' }}>{s.value}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--cream-dim)', lineHeight: 1.4, marginBottom: '0.2rem' }}>{s.label}</div>
                      <div className="source-note">{s.source}</div>
                    </div>
                  ))}
                </div>
                <p style={{ color: 'var(--cream-dim)', fontSize: '0.87rem', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>

          {/* Key data points table */}
          <div className="layout-table-wrap" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(184,151,90,0.18)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ padding: '1.25rem 2rem', borderBottom: '1px solid rgba(184,151,90,0.15)', background: 'rgba(184,151,90,0.06)' }}>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>Arizona Economic Snapshot</span>
            </div>
            <div>
              {[
                { metric: 'State GDP (2023)', value: '$475 Billion', source: 'U.S. Bureau of Economic Analysis' },
                { metric: 'GDP Growth Rate', value: '3.5% annually', source: 'Arizona Commerce Authority' },
                { metric: 'Unemployment Rate (2024)', value: '3.6%', source: 'Arizona Dept. of Economic Security' },
                { metric: 'Median Household Income Growth', value: '+12% over 5 years', source: 'U.S. Census Bureau ACS' },
                { metric: 'Small Business Count', value: '620,000+', source: 'SBA Office of Advocacy' },
                { metric: 'Corporate Tax Rate', value: '4.9% flat (competitive)', source: 'Arizona Dept. of Revenue' },
                { metric: 'New Business Formations (2023)', value: '85,000+', source: 'Arizona Corporation Commission' },
              ].map((row, i) => (
                <div key={row.metric} className="layout-table-row" style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 2fr',
                  padding: '0.9rem 2rem',
                  borderBottom: i < 6 ? '1px solid rgba(184,151,90,0.08)' : 'none',
                  background: i % 2 === 1 ? 'rgba(255,255,255,0.015)' : 'transparent',
                }}>
                  <div style={{ fontSize: '0.88rem', color: 'var(--cream-dim)' }}>{row.metric}</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--cream)' }}>{row.value}</div>
                  <div className="source-note" style={{ textAlign: 'right' }}>{row.source}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Canny ─────────────────────────────────── */}
      <section style={{ padding: '5.5rem 1.5rem', background: 'var(--navy-mid)', borderTop: '1px solid rgba(184,151,90,0.15)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-label">Our Differentiation</p>
            <h2 className="section-title">Why Canny Capital for Arizona?</h2>
            <div className="gold-divider center" />
            <p className="section-body" style={{ maxWidth: '600px', margin: '0 auto' }}>
              The opportunity is clear. But the right buyer matters. Here's why Arizona owners
              choose to partner with us.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                icon: '🏠',
                title: 'Exclusively Arizona',
                body: 'We don\'t cover 15 states. Our sole focus is Arizona. That means deeper relationships, faster sourcing, and more relevant market context—for every deal.',
              },
              {
                icon: '🎯',
                title: 'Owner-First Philosophy',
                body: 'Most buyers are adversarial. We\'re not. We structure conversations to understand what matters to the seller, then work backward from there.',
              },
              {
                icon: '🏛',
                title: 'Permanent Capital',
                body: 'No artificial exit timelines. We are long-term owners. That means we can hold through cycles, invest in people, and operate with a multi-decade mindset.',
              },
              {
                icon: '⚡',
                title: 'Speed & Certainty',
                body: 'We move quickly from LOI to close and we close what we sign. Sellers don\'t lose months to a buyer who walks at the finish line.',
              },
              {
                icon: '🤲',
                title: 'Respectful Transitions',
                body: 'We honor the legacy of the businesses we acquire. Employees are kept. Cultures are preserved. The founder\'s name stays on the door as long as they\'d like.',
              },
              {
                icon: '📊',
                title: 'Operator-Led Due Diligence',
                body: 'We\'ve run businesses ourselves. Our diligence is practical, not just financial. We ask the right questions—and we understand the answers.',
              },
              {
                icon: '🌐',
                title: 'Deep Local Network',
                body: 'Our advisory board, referral partners, and professional network span Arizona. We source opportunities others never see.',
              },
              {
                icon: '📋',
                title: 'No Unnecessary Complexity',
                body: 'We structure straightforward transactions with clean terms. No hidden fees, no surprise earnouts, no games. Just honest deals.',
              },
            ].map((card) => (
              <div key={card.title} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(184,151,90,0.18)',
                borderRadius: '4px',
                padding: '1.75rem',
                transition: 'border-color 0.2s',
              }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{card.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 600, color: 'var(--cream)', marginBottom: '0.6rem', marginTop: 0 }}>{card.title}</h3>
                <p style={{ color: 'var(--cream-dim)', fontSize: '0.87rem', lineHeight: 1.75, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ──────────────────────────────────── */}
      <section className="cta-band" style={{ padding: '5rem 1.5rem' }}>
        <div className="layout-cta-split" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }}>
          <div>
            <p className="section-label">The Window Is Open</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '0.75rem' }}>
              Are You an Arizona Business Owner Considering Your Next Chapter?
            </h2>
            <div className="gold-divider" />
            <p className="section-body" style={{ maxWidth: '560px' }}>
              Whether you're ready to sell now or just starting to think about it, a conversation
              with us costs nothing and could unlock options you haven't considered. We'll listen
              before we ever talk about price.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexShrink: 0 }}>
            <a href="mailto:ethan@cannycapitalpartners.com" className="btn-gold" style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
              Email Ethan Directly
            </a>
            <a href="tel:6028269070" className="btn-outline" style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
              602.826.9070
            </a>
            <Link to="/contact" style={{ textAlign: 'center', fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--cream-dim)', textDecoration: 'none', textTransform: 'uppercase' }}>
              Learn About Our Process →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer with Disclaimer ────────────────────── */}
      <footer style={{ background: 'var(--navy)', borderTop: '1px solid rgba(184,151,90,0.15)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.35rem' }}>CANNY CAPITAL PARTNERS</div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>Phoenix, Arizona</div>
            <p style={{ fontSize: '0.82rem', color: 'var(--cream-dim)', lineHeight: 1.7 }}>
              Acquiring and operating lower middle market businesses across the state of Arizona.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '1rem' }}>Explore</div>
            {[
              { to: '/', label: 'Home' },
              { to: '/our-approach', label: 'Our Approach' },
              { to: '/investment-criteria', label: 'Investment Criteria' },
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

        {/* Disclaimer */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid rgba(184,151,90,0.1)', paddingTop: '1.75rem' }}>
          <p className="footer-disclaimer" style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: 'rgba(200,191,168,0.6)' }}>Important Disclosures &amp; Disclaimer.</strong>{' '}
            This website and all content herein is published by Canny Capital Partners LLC for
            informational purposes only. Nothing on this website constitutes an offer to sell, a
            solicitation of an offer to purchase, or an offer to provide investment advisory services.
            This is not investment advice and should not be relied upon as such.
          </p>
          <p className="footer-disclaimer" style={{ marginBottom: '0.5rem' }}>
            All statistics, data, and market information presented on this website are sourced from
            publicly available third-party data and are believed to be accurate as of their respective
            publication dates. Canny Capital Partners does not warrant the accuracy or completeness of
            any third-party data, and such data is subject to change without notice. Forward-looking
            statements, projections, and market estimates represent management's views only and involve
            known and unknown risks, uncertainties, and other factors that could cause actual results
            to differ materially.
          </p>
          <p className="footer-disclaimer">
            Canny Capital Partners LLC is not a registered investment adviser or broker-dealer under
            any federal or state securities laws. Past performance is not indicative of future results.
            All investments involve risk, including the possible loss of principal. Prospective
            business sellers and investors should consult their own legal, financial, and tax advisors
            before making any business decisions.
            © {new Date().getFullYear()} Canny Capital Partners LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
