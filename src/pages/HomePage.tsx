import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import BookingButton from '../components/ui/BookingButton'
import LandingHero from '../components/ui/LandingHero'
import SectionHeader from '../components/ui/SectionHeader'
import CTASection from '../components/ui/CTASection'
import ArrowIcon from '../components/ui/ArrowIcon'
import CheckList from '../components/ui/CheckList'
import StatsBand from '../components/ui/StatsBand'
import ServiceOfferSlider from '../components/ui/ServiceOfferSlider'
import EditorialSplit from '../components/ui/EditorialSplit'
import ProcessRail from '../components/ui/ProcessRail'
import DifferenceRail from '../components/ui/DifferenceRail'
import FaqAccordion from '../components/ui/FaqAccordion'
import Reveal from '../components/ui/Reveal'
import { site } from '../data/site'
import { homeFaqItems } from '../data/faq'
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
      <LandingHero
        eyebrow="WA & VIC · Investor Focused"
        title={<>The right property,<br />the <span className="gold">right strategy.</span><br />The right partner.</>}
        description="We work exclusively for investors — delivering property management, buyers agency, and development opportunities backed by an eight-figure portfolio."
        image={heroImages.home.src}
        imageAlt={heroImages.home.alt}
        trustItems={[
          'WA & VIC Coverage',
          'Off-Market Access',
          'Expert Negotiation',
          '100% Investor Focused',
        ]}
        actions={
          <>
            <BookingButton />
            <Button to="/services" variant="outline">Learn More</Button>
          </>
        }
      />

      <Reveal>
        <StatsBand />
      </Reveal>

      <section className="section-padding section-surface bg-dark">
        <div className="section-container">
          <Reveal>
            <div className="page-hero-eyebrow-center-wrap mb-10 md:mb-12">
              <p className="eyebrow page-hero-eyebrow-center">What we Offer</p>
              <span className="page-hero-eyebrow-flare" aria-hidden="true" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ServiceOfferSlider />
          </Reveal>
          <Reveal delay={160}>
            <div className="hero-actions center mt-10">
              <Button to="/services" variant="outline">View All Services</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding section-surface section-light">
        <div className="section-container">
          <Reveal>
            <SectionHeader
              eyebrow="At a Glance"
              title={<>Your advantage at <span className="text-gold">every stage</span></>}
              centered
            />
          </Reveal>
          <Reveal delay={120}>
            <ProcessRail steps={processSteps} />
          </Reveal>
        </div>
      </section>

      <section className="section-padding section-surface bg-dark">
        <div className="section-container">
          <Reveal>
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
          </Reveal>
        </div>
      </section>

      <section className="section-padding section-surface bg-dark">
        <div className="section-container">
          <Reveal>
            <SectionHeader
              eyebrow="The Enopac Difference"
              title={<>Independent expertise. <span className="text-gold">Built on experience.</span></>}
              centered
            />
          </Reveal>
          <Reveal delay={120}>
            <DifferenceRail items={differenceItems} />
          </Reveal>
        </div>
      </section>

      <section className="section-padding section-surface section-light">
        <div className="section-container">
          <Reveal>
            <SectionHeader
              eyebrow="FAQ"
              title={<>Common questions, <span className="text-gold">answered.</span></>}
              centered
            />
          </Reveal>
          <Reveal delay={120}>
            <FaqAccordion items={homeFaqItems} />
          </Reveal>
        </div>
      </section>

      <Reveal>
        <CTASection title={<>Your goals. Our mission.<br />Let&apos;s build your portfolio.</>} />
      </Reveal>
    </>
  )
}
