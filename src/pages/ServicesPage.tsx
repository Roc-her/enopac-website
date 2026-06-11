import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import CTASection from '../components/ui/CTASection'
import ServiceShowcase from '../components/ui/ServiceShowcase'
import FeeRail from '../components/ui/FeeRail'
import { services } from '../data/services'
import { site } from '../data/site'
import { heroImages } from '../data/heroImages'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        eyebrow="Our Services"
        title={<>Tailored support for <span className="gold">every type of investor</span></>}
        description="From portfolio management to acquisitions and development — independent services with transparent fee structures."
        image={heroImages.services.src}
        imageAlt={heroImages.services.alt}
        imageCaption="Property Management · Buyers Agency · Development"
        pills={['3 Service Lines', 'Transparent Fees', 'WA & VIC']}
        actions={<Button to="/contact">{site.cta} →</Button>}
      />

      <section className="section-padding section-surface bg-dark">
        <div className="section-container">
          <ServiceShowcase services={services} />
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <SectionHeader
            eyebrow="Fee Structure"
            title="Transparent pricing, upfront"
            subtitle="No hidden commissions. Every fee model is explained before you commit."
            centered
          />
          <div className="mt-10">
            <FeeRail services={services} />
          </div>
        </div>
      </section>

      <CTASection title="Not sure which service is right for you?" />
    </>
  )
}
