import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import CTASection from '../components/ui/CTASection'
import ArrowIcon from '../components/ui/ArrowIcon'
import CheckList from '../components/ui/CheckList'
import StatsBand from '../components/ui/StatsBand'
import EditorialSplit from '../components/ui/EditorialSplit'
import ProcessRail from '../components/ui/ProcessRail'
import ServiceBento from '../components/ui/ServiceBento'
import DifferenceRail from '../components/ui/DifferenceRail'
import { site } from '../data/site'
import { services } from '../data/services'
import { heroImages, sectionImages } from '../data/heroImages'

const processSteps = [
  { num: '01', label: 'Strategy', title: 'Discovery Call', desc: 'We understand your goals, budget, and timeline.' },
  { num: '02', label: 'Research', title: 'Market Analysis', desc: 'Suburb analysis and tailored investment plan.' },
  { num: '03', label: 'Execute', title: 'Acquire & Manage', desc: 'Sourcing, negotiation, settlement, and management.' },
  { num: '04', label: 'Grow', title: 'Value-Add', desc: 'Development opportunities to accelerate wealth building.' },
]

const differenceItems = [
  { num: '01', title: '100% Investor-Side', desc: 'Every search, negotiation, and recommendation is made exclusively in your interest.' },
  { num: '02', title: 'Skin in the Game', desc: 'Eight-figure personal portfolio — we invest what we advise.' },
  { num: '03', title: 'End-to-End', desc: 'Acquire, manage, and develop under one trusted partner.' },
  { num: '04', title: 'Clear Fees', desc: 'Fixed, percentage, or equity-based — confirmed upfront.' },
]

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="WA & VIC · Investor Focused"
        title={<>The right property. <span className="gold">The right strategy.</span> The right partner.</>}
        description="We work exclusively for investors — delivering property management, buyers agency, and development opportunities backed by an eight-figure portfolio."
        image={heroImages.home.src}
        imageAlt={heroImages.home.alt}
        imageCaption="Premium investment properties across WA & VIC"
        pills={['8-Figure Portfolio', '5+ Years Experience', 'Licence RA85608']}
        actions={
          <>
            <Button to="/contact">{site.cta} →</Button>
            <Button to="/services" variant="outline">Learn More</Button>
          </>
        }
      />

      <StatsBand />

      <section className="section-padding section-surface bg-dark">
        <div className="section-container">
          <EditorialSplit
            badge="Most Chosen"
            title="Full-Service Buyers Agency"
            subtitle="A carefully sourced property, negotiated and settled for you — from strategy and search through inspections, negotiation, and settlement."
            image={sectionImages.buyersAgency}
          >
            <CheckList items={[
              'Strategy call and purchase brief',
              'Property search and shortlisting',
              'Due diligence and market analysis',
              'Expert negotiation',
              'Settlement support',
            ]} />
            <div className="hero-actions">
              <Button to="/contact">{site.cta} →</Button>
              <Button to="/services/buyers-agency" variant="outline">View service</Button>
            </div>
          </EditorialSplit>
        </div>
      </section>

      <section className="section-padding section-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="At a Glance"
            title={<>Your advantage at <span className="text-gold">every stage</span></>}
            centered
          />
          <ProcessRail steps={processSteps} />
        </div>
      </section>

      <section className="section-padding section-surface bg-dark">
        <div className="section-container">
          <EditorialSplit
            eyebrow="About Enopac"
            title="Invest with clarity. Build with confidence."
            subtitle="Independent property services for serious investors — backed by an eight-figure portfolio and over five years of active investing across WA and VIC."
            image={sectionImages.aboutStory}
            reverse
          >
            <CheckList items={['Off-market access', 'Transparent fee structures', 'Expert negotiation', 'WA & VIC coverage']} />
            <Link to="/about" className="editorial-cta">
              <span>Meet {site.contact}</span>
              <ArrowIcon />
            </Link>
          </EditorialSplit>
        </div>
      </section>

      <section className="section-padding section-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="What We Do"
            title={<>Tailored support for <span className="text-gold">every investor</span></>}
            subtitle="From portfolio management to acquisitions and development — independent services shaped around how you invest."
            centered
          />
          <ServiceBento services={services} />
          <div className="hero-actions center mt-10">
            <Button to="/contact">{site.cta} →</Button>
            <Button to="/services" variant="outline">View All Services</Button>
          </div>
        </div>
      </section>

      <section className="section-padding section-surface bg-dark">
        <div className="section-container">
          <SectionHeader
            eyebrow="The Enopac Difference"
            title={<>Independent expertise. <span className="text-gold">Built on experience.</span></>}
            centered
          />
          <DifferenceRail items={differenceItems} />
        </div>
      </section>

      <CTASection title={<>Your goals. Our mission.<br />Let&apos;s build your portfolio.</>} />
    </>
  )
}
