import Button from '../components/ui/Button'
import BookingButton from '../components/ui/BookingButton'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import CTASection from '../components/ui/CTASection'
import EditorialSplit from '../components/ui/EditorialSplit'
import CheckList from '../components/ui/CheckList'
import FeatureAccordion from '../components/ui/FeatureAccordion'
import RegionPanels from '../components/ui/RegionPanels'
import Reveal from '../components/ui/Reveal'
import { site } from '../data/site'
import { heroImages, sectionImages } from '../data/heroImages'

const whyFeatures = [
  {
    number: '01',
    title: '8-Figure Portfolio Experience',
    summary: 'Deep expertise across property purchasing, management, and development — backed by real portfolio results.',
    details: 'Our team holds a multi-million-dollar, eight-figure personal portfolio. Every recommendation is grounded in real-world experience.',
    bullets: [
      'Over five years of active hands-on investing across WA and VIC',
      'Understands what makes a property perform — and what hidden issues can derail returns',
      'Skilled in reading contracts, comparable sales, and market cycles',
      'Guidance grounded in real transactions, not theory',
    ],
  },
  {
    number: '02',
    title: 'Truly Independent',
    summary: 'We work exclusively for investors. No seller commissions, no conflicts of interest.',
    details: 'As your property partner, our loyalty is tied entirely to securing the right outcomes for you.',
    bullets: [
      'No commissions from developers, agents, or vendors — ever',
      'Honest advice on when to walk away',
      'Transparent fee structure discussed upfront',
      'We advocate with one goal: protect your position',
    ],
  },
  {
    number: '03',
    title: 'Holistic Approach',
    summary: 'Long-term thinking. We consider your full investment picture — not just this one transaction.',
    details: 'We help you think through how each move fits your broader wealth-building goals.',
    bullets: [
      'Considers borrowing capacity and future plans',
      'Factors in rental yield, capital growth, and development potential',
      'Strategy suited to each client\'s timeline',
      'Clear, consistent communication throughout',
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Your advocate.<br /><span className="gold">Your advantage.</span></>}
        description="Independent property services built on deep investing expertise — exclusively on your side of every transaction."
        image={heroImages.about.src}
        imageAlt={heroImages.about.alt}
        imageCaption={`${site.contact} · Property & Investment Expert`}
        pills={['5+ Years Experience', '100% Investor-Side', 'WA & VIC']}
        actions={
          <>
            <BookingButton />
            <Button to="/contact" variant="outline">Meet {site.contact.split(' ')[0]}</Button>
          </>
        }
      />

      <section className="section-padding section-surface bg-dark">
        <div className="section-container">
          <Reveal>
            <EditorialSplit
              reverse
              eyebrow={`Meet ${site.contact}`}
              badge={`Licence ${site.licence}`}
              title="A property partner who thinks beyond the purchase."
              subtitle="With over five years across property investing and an eight-figure personal portfolio, Matthew helps you secure the right property at the right price, with the right structure behind it."
              image={sectionImages.portfolio}
              imageCaption={`${site.contact} · Property & Investment Expert`}
            >
              <CheckList items={['Off-market access', 'Portfolio strategy guidance', 'Expert negotiation', 'WA & VIC coverage']} />
              <div className="hero-actions">
                <BookingButton />
              </div>
            </EditorialSplit>
          </Reveal>
        </div>
      </section>

      <section className="section-padding section-surface section-light">
        <div className="section-container">
          <Reveal>
            <SectionHeader eyebrow="Why Choose Us" title="What sets us apart" centered />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-14" style={{ maxWidth: '48rem', margin: '3.5rem auto 0' }}>
              <FeatureAccordion features={whyFeatures} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding section-surface bg-dark">
        <div className="section-container">
          <Reveal>
            <SectionHeader
              eyebrow="Service Areas"
              title={<>WA &amp; VIC — <span className="text-gold">two markets, one approach</span></>}
              subtitle="We represent investors across Perth, Melbourne, and regional centres in both states."
              centered
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-12">
              <RegionPanels />
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <CTASection title={<>Let&apos;s talk about<br />your next move.</>} />
      </Reveal>
    </>
  )
}
