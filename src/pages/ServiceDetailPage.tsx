import { Link, Navigate, useParams } from 'react-router-dom'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import CTASection from '../components/ui/CTASection'
import CheckList from '../components/ui/CheckList'
import { getService, services } from '../data/services'
import { site } from '../data/site'
import { heroImages, type HeroImageKey } from '../data/heroImages'

const serviceHeroKeys: Record<string, HeroImageKey> = {
  'property-management': 'property-management',
  'buyers-agency': 'buyers-agency',
  development: 'development',
}

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = slug ? getService(slug) : undefined
  if (!service) return <Navigate to="/services" replace />

  const others = services.filter((s) => s.slug !== service.slug)
  const imageKey = serviceHeroKeys[service.slug] ?? 'services'
  const hero = heroImages[imageKey]

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
        eyebrow={`${service.abbr} · ${service.fee}`}
        title={service.title}
        description={service.shortDescription}
        image={hero.src}
        imageAlt={hero.alt}
        imageCaption={service.fee}
        actions={<Button to="/contact">{site.cta} →</Button>}
      />

      <section className="section-padding bg-dark">
        <div className="section-container">
          <div className="split-grid">
            <div>
              <h2 className="section-title">Overview</h2>
              <p className="section-subtitle">{service.description}</p>
              <h3 className="accordion-title mt-10">What&apos;s included</h3>
              <div className="grid-2 mt-6">
                {service.features.map((f) => (
                  <div key={f} className="card" style={{ padding: '1rem' }}>{f}</div>
                ))}
              </div>
            </div>
            <div className="card" style={{ position: 'sticky', top: '6rem', alignSelf: 'start' }}>
              <h3 className="accordion-title">Key benefits</h3>
              <CheckList items={service.benefits} />
              <p className="eyebrow mt-6">{service.fee}</p>
              <div className="mt-6">
                <Button to="/contact">{site.cta} →</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <h2 className="section-title text-center">How it works</h2>
          <div className="grid-4 mt-14">
            {service.process.map((step, i) => (
              <div key={step.step} className="card">
                <span className="accordion-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="accordion-title mt-4">{step.step}</h3>
                <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#b8b0a0' }}>{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(230,199,115,0.1)' }}>
        <div className="section-container">
          <p style={{ fontSize: '0.875rem', color: '#b8b0a0' }}>Other services</p>
          <div className="flex flex-wrap gap-4 mt-4">
            {others.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="badge" style={{ padding: '0.5rem 1.25rem' }}>{s.title}</Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Ready to get started with ${service.title}?`} />
    </>
  )
}
