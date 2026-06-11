import Breadcrumbs from './Breadcrumbs'

type Crumb = { label: string; to?: string }

type PageHeroProps = {
  breadcrumbs?: Crumb[]
  eyebrow: string
  title: React.ReactNode
  description: string
  image: string
  imageAlt: string
  imageCaption?: string
  pills?: string[]
  actions?: React.ReactNode
}

export default function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imageCaption,
  pills,
  actions,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="section-container">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs items={breadcrumbs} />
        )}

        <div className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="hero-title">{title}</h1>
            <p className="hero-desc">{description}</p>

            {pills && pills.length > 0 && (
              <div className="hero-pills">
                {pills.map((pill) => (
                  <span key={pill} className="stat-pill">{pill}</span>
                ))}
              </div>
            )}

            {actions && <div className="hero-actions">{actions}</div>}
          </div>

          <figure className="hero-media">
            <span className="hero-media-corner hero-media-corner--tl" aria-hidden="true" />
            <span className="hero-media-corner hero-media-corner--br" aria-hidden="true" />
            <img src={image} alt={imageAlt} loading="eager" />
            {imageCaption && (
              <figcaption className="hero-media-caption">
                <span className="hero-media-caption-dot" aria-hidden="true" />
                {imageCaption}
              </figcaption>
            )}
          </figure>
        </div>
      </div>
    </section>
  )
}
