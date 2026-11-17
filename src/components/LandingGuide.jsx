import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo, { SITE_URL } from './Seo';
import LeadForm from './LeadForm';

/**
 * Shared layout for search landing pages (franchise buyer guides).
 * Each page passes its own copy; structure, styling and FAQ/breadcrumb
 * structured data are generated here.
 */

const CATEGORIES = [
  { name: 'Food & Beverage', desc: 'Cafés, QSR outlets, dessert brands and cloud kitchens with repeat daily demand.' },
  { name: 'Salon & Beauty', desc: 'Unisex salons, grooming studios and skin-care clinics with recurring customers.' },
  { name: 'Retail', desc: 'Fashion, eyewear, jewellery and lifestyle stores with a proven store format.' },
  { name: 'Education & Training', desc: 'Pre-schools, skill centres and design institutes with steady admissions cycles.' },
  { name: 'Health & Fitness', desc: 'Gyms, diagnostics and wellness centres riding rising health awareness.' },
  { name: 'Services', desc: 'Laundry, car care, logistics and home services with low inventory needs.' },
];

const BUDGETS = [
  { range: 'Under ₹10 Lakh', fit: 'Kiosks, service and low-inventory models' },
  { range: '₹10 – 30 Lakh', fit: 'Small-format cafés, salons and education centres' },
  { range: '₹30 Lakh – 1 Crore', fit: 'Full-format restaurants, premium salons and retail stores' },
  { range: '₹1 Crore+', fit: 'Multi-unit and master franchise rights' },
];

const WHATSAPP_URL = 'https://wa.me/919205155506';

function FadeSection({ children, delay = 0, style = {}, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0'; el.style.transform = 'translateY(40px)';
    el.style.transition = `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} style={style} className={className}>{children}</div>;
}

const h2Style = { fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 3.4vw, 44px)', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.15, marginBottom: '20px' };
const pStyle = { color: 'var(--gray)', fontSize: '16px', lineHeight: 1.85, margin: '0 0 16px' };

export default function LandingGuide({ seo, crumb, hero, sections, categoriesHeading, budgetsHeading, steps, checklist, faqs, related, form }) {
  const url = `${SITE_URL}${seo.path}`;
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: crumb, item: url },
      ],
    },
  ];

  return (
    <div style={{ background: 'var(--cream-light)' }}>
      <Seo {...seo} schema={schema} />

      {/* HERO */}
      <div className="lg-hero" style={{ background: 'var(--navy-dark)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)`, backgroundSize: '80px 80px' }} />
        <div style={{ position: 'absolute', bottom: '-30%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle,rgba(240,121,32,0.14) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.65)' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span>{crumb}</span>
          </nav>
          <div className="section-label">{hero.label}</div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(38px, 5.6vw, 68px)', fontWeight: 700, color: '#fff', lineHeight: 1.08, marginBottom: '24px', maxWidth: '860px' }}>
            {hero.title}<br />
            <span style={{ color: 'var(--orange)' }}>{hero.accent}</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '17px', lineHeight: 1.75, maxWidth: '680px', marginBottom: '40px' }}>
            {hero.intro}
          </p>
          <div className="lg-cta-row">
            <a href="#lg-form" className="btn-primary">{hero.cta}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp +91 92051 55506</a>
          </div>
        </div>
      </div>

      {/* GUIDE SECTIONS */}
      <div className="lg-section" style={{ background: 'var(--cream-light)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {sections.map((s, i) => (
            <FadeSection key={s.heading} style={{ marginBottom: i < sections.length - 1 ? '64px' : 0 }}>
              <div className="section-label">{s.label}</div>
              <h2 style={h2Style}>{s.heading}</h2>
              {s.paragraphs?.map(p => <p key={p.slice(0, 32)} style={pStyle}>{p}</p>)}
              {s.points && (
                <div className="lg-points">
                  {s.points.map(pt => (
                    <div key={pt.title} className="lg-point">
                      <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '19px', fontWeight: 700, color: 'var(--navy)', margin: '0 0 8px' }}>{pt.title}</h3>
                      <p style={{ color: 'var(--gray)', fontSize: '14.5px', lineHeight: 1.75, margin: 0 }}>{pt.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </FadeSection>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="lg-section" style={{ background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeSection style={{ marginBottom: '48px' }}>
            <div className="section-label">Categories</div>
            <h2 style={{ ...h2Style, color: '#fff' }}>{categoriesHeading}</h2>
          </FadeSection>
          <div className="lg-cat-grid">
            {CATEGORIES.map((c, i) => (
              <FadeSection key={c.name} delay={i * 60} className="lg-cat">
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '21px', fontWeight: 700, color: '#fff', margin: '0 0 10px' }}>{c.name} franchise</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14.5px', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </FadeSection>
            ))}
          </div>
        </div>
      </div>

      {/* BUDGETS */}
      <div className="lg-section" style={{ background: 'var(--cream-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeSection style={{ marginBottom: '40px' }}>
            <div className="section-label">Investment</div>
            <h2 style={h2Style}>{budgetsHeading}</h2>
            <p style={{ ...pStyle, maxWidth: '720px' }}>Indicative ranges only. The exact investment depends on the brand, store size, city and fit-out. Always budget separately for working capital for the first few months.</p>
          </FadeSection>
          <div className="lg-budget-grid">
            {BUDGETS.map((b, i) => (
              <FadeSection key={b.range} delay={i * 60} className="lg-budget">
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 700, color: 'var(--orange)', marginBottom: '10px' }}>{b.range}</div>
                <p style={{ color: 'var(--gray)', fontSize: '14.5px', lineHeight: 1.7, margin: 0 }}>{b.fit}</p>
              </FadeSection>
            ))}
          </div>
        </div>
      </div>

      {/* STEPS */}
      <div className="lg-section" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeSection style={{ marginBottom: '40px' }}>
            <div className="section-label">Step by step</div>
            <h2 style={h2Style}>{steps.heading}</h2>
          </FadeSection>
          <ol className="lg-steps">
            {steps.items.map((s, i) => (
              <li key={s.title} className="lg-step">
                <div className="lg-step-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 700, color: 'var(--navy)', margin: '0 0 8px' }}>{s.title}</h3>
                  <p style={{ color: 'var(--gray)', fontSize: '15px', lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* CHECKLIST */}
      <div className="lg-section" style={{ background: 'var(--navy-dark)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeSection>
            <div className="section-label">Before you sign</div>
            <h2 style={{ ...h2Style, color: '#fff' }}>{checklist.heading}</h2>
            <ul className="lg-checklist">
              {checklist.items.map(item => (
                <li key={item}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeSection>
        </div>
      </div>

      {/* FAQ */}
      <div className="lg-section" style={{ background: 'var(--cream-light)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeSection style={{ marginBottom: '32px' }}>
            <div className="section-label">FAQs</div>
            <h2 style={h2Style}>Frequently asked questions</h2>
          </FadeSection>
          <div className="lg-faqs">
            {faqs.map(f => (
              <details key={f.q} className="lg-faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>

          <div style={{ marginTop: '48px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {related.map(r => (
              <Link key={r.to} to={r.to} className="lg-related">{r.label} →</Link>
            ))}
          </div>
        </div>
      </div>

      {/* FORM */}
      <div id="lg-form" style={{ padding: '100px 40px', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeSection style={{ marginBottom: '48px', textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>{form.label}</div>
            <h2 style={h2Style}>{form.heading}</h2>
            <p style={{ color: 'var(--gray)', fontSize: '16px', lineHeight: 1.7 }}>{form.sub}</p>
          </FadeSection>
          <div className="xb-form-wrap" style={{ background: 'var(--cream-light)', borderRadius: '16px', padding: '56px', border: '1px solid var(--border)' }}>
            <LeadForm role="Investor" source={form.source} submitLabel={form.submitLabel} />
          </div>
        </div>
      </div>

      <style>{`
        .lg-hero { padding: 170px 40px 100px; }
        .lg-section { padding: 100px 40px; }
        .lg-cta-row { display: flex; flex-wrap: wrap; gap: 14px; }
        .lg-cta-row .btn-outline { color: #fff; border-color: rgba(255,255,255,0.35); }

        .lg-points { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin-top: 28px; }
        .lg-point { background: var(--white); border: 1px solid var(--border); border-radius: 16px; padding: 24px 26px; }

        .lg-cat-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
        .lg-cat { border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 28px; background: rgba(255,255,255,0.03); }

        .lg-budget-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
        .lg-budget { background: var(--white); border: 1px solid var(--border); border-radius: 16px; padding: 28px 24px; }

        .lg-steps { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
        .lg-step { display: grid; grid-template-columns: 64px 1fr; gap: 20px; align-items: start; border: 1px solid var(--border); border-radius: 16px; padding: 26px 28px; background: var(--cream-light); }
        .lg-step-num { font-family: 'Fraunces', serif; font-size: 40px; font-weight: 700; color: var(--orange); line-height: 0.9; }

        .lg-checklist { list-style: none; padding: 0; margin: 24px 0 0; display: flex; flex-direction: column; gap: 16px; }
        .lg-checklist li { display: flex; gap: 14px; align-items: flex-start; color: rgba(255,255,255,0.85); font-size: 16px; line-height: 1.6; }
        .lg-checklist svg { flex-shrink: 0; margin-top: 2px; }

        .lg-faqs { display: flex; flex-direction: column; gap: 12px; }
        .lg-faq { background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 20px 24px; }
        .lg-faq summary { cursor: pointer; font-family: 'Fraunces', serif; font-size: 18px; font-weight: 700; color: var(--navy); line-height: 1.4; }
        .lg-faq[open] summary { margin-bottom: 12px; }
        .lg-faq p { color: var(--gray); font-size: 15px; line-height: 1.8; margin: 0; }

        .lg-related { display: inline-block; padding: 12px 20px; border: 1px solid var(--border); border-radius: 999px; color: var(--navy); font-size: 14px; font-weight: 600; background: var(--white); }
        .lg-related:hover { border-color: var(--orange); color: var(--orange); }

        @media (max-width: 980px) {
          .lg-cat-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .lg-budget-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 640px) {
          .lg-hero { padding: 130px 18px 64px; }
          .lg-section { padding: 64px 18px; }
          .lg-points, .lg-cat-grid, .lg-budget-grid { grid-template-columns: 1fr; }
          .lg-step { grid-template-columns: 1fr; gap: 8px; padding: 22px; }
          #lg-form { padding: 64px 18px !important; }
          #lg-form .xb-form-wrap { padding: 28px 20px !important; }
        }
      `}</style>
    </div>
  );
}
