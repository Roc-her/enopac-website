/** Each image used exactly once sitewide. */

export const heroImages = {
  home: {
    src: '/images/hero-home.jpg',
    alt: 'Modern luxury home exterior — Enopac Property Group',
  },
  about: {
    src: '/images/hero-about.jpg',
    alt: 'Contemporary luxury home at golden hour — Enopac Property Group',
  },
  services: {
    src: '/images/hero-services.jpg',
    alt: 'Contemporary apartment building in an investment corridor',
  },
  process: {
    src: '/images/hero-process.jpg',
    alt: 'Elegant property interior at handover',
  },
  contact: {
    src: '/images/hero-contact.jpg',
    alt: 'Modern commercial building — Enopac office locations',
  },
  'property-management': {
    src: '/images/hero-property-management.jpg',
    alt: 'Well-maintained rental property exterior',
  },
  'buyers-agency': {
    src: '/images/hero-buyers-agency.jpg',
    alt: 'Stylish family home available for investors',
  },
  development: {
    src: '/images/hero-development.jpg',
    alt: 'Architect reviewing development plans on site',
  },
} as const

export const sectionImages = {
  buyersAgency: {
    src: '/images/section-buyers.jpg',
    alt: 'Bright living space in a newly acquired investment property',
  },
  aboutStory: {
    src: '/images/section-about.jpg',
    alt: 'Open-plan home showcasing quality finishes',
  },
  portfolio: {
    src: '/images/section-portfolio.jpg',
    alt: 'Luxury investment property interior — Enopac Property Group',
  },
} as const

export type HeroImageKey = keyof typeof heroImages
