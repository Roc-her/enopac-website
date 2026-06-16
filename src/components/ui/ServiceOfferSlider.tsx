import { useCallback, useEffect, useState } from 'react'
import Button from './Button'
import BookingButton from './BookingButton'
import CheckList from './CheckList'
import EditorialSplit from './EditorialSplit'
import { services } from '../../data/services'
import { heroImages, sectionImages } from '../../data/heroImages'

const serviceImages: Record<string, { src: string; alt: string }> = {
  'property-management': {
    src: heroImages['property-management'].src,
    alt: heroImages['property-management'].alt,
  },
  'buyers-agency': sectionImages.buyersAgency,
  development: {
    src: heroImages.development.src,
    alt: heroImages.development.alt,
  },
}

const serviceBadges: Partial<Record<string, string>> = {
  'buyers-agency': 'Most Chosen',
}

const AUTO_INTERVAL_MS = 8000

export default function ServiceOfferSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = services.length

  const goTo = useCallback((next: number) => {
    setIndex((next + count) % count)
  }, [count])

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % count)
  }, [count])

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count)
  }, [count])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || paused) return

    const timer = window.setInterval(goNext, AUTO_INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [goNext, paused])

  return (
    <div
      className="service-offer-slider"
      aria-roledescription="carousel"
      aria-label="Our services"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
    >
      <div className="service-offer-slider-frame">
        <button
          type="button"
          className="service-offer-slider-arrow service-offer-slider-arrow--prev"
          onClick={goPrev}
          aria-label="Previous service"
        >
          <span aria-hidden="true">←</span>
        </button>

        <div className="service-offer-slider-viewport">
          <div
            className="service-offer-slider-track"
            style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
          >
            {services.map((service, i) => (
              <div
                key={service.slug}
                id={`service-offer-slide-${service.slug}`}
                className="service-offer-slider-slide"
                role="tabpanel"
                aria-hidden={i !== index}
                aria-labelledby={`service-offer-dot-${service.slug}`}
              >
                <EditorialSplit
                  badge={serviceBadges[service.slug]}
                  title={service.title}
                  subtitle={service.shortDescription}
                  image={serviceImages[service.slug]}
                >
                  <CheckList items={service.features.slice(0, 5)} />
                  <div className="hero-actions">
                    <BookingButton />
                    <Button to={`/services/${service.slug}`} variant="outline">View details</Button>
                  </div>
                </EditorialSplit>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="service-offer-slider-arrow service-offer-slider-arrow--next"
          onClick={goNext}
          aria-label="Next service"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="service-offer-slider-dots" role="tablist" aria-label="Select service">
        {services.map((service, i) => (
          <button
            key={service.slug}
            id={`service-offer-dot-${service.slug}`}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-controls={`service-offer-slide-${service.slug}`}
            className={`service-offer-slider-dot${i === index ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={service.title}
          />
        ))}
      </div>
    </div>
  )
}
