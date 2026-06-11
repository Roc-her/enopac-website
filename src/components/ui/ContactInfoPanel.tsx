import FooterSocials from './FooterSocials'
import Button from './Button'
import { site } from '../../data/site'

const contactItems = [
  {
    label: 'Phone',
    value: site.phone,
    href: site.phoneHref,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Contact',
    value: site.contact,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Licence',
    value: `${site.licence} · ${site.state}`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Regions',
    value: 'WA & VIC',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" fill="currentColor" />
      </svg>
    ),
  },
]

export default function ContactInfoPanel() {
  return (
    <aside className="contact-info-panel">
      <span className="contact-info-rail" aria-hidden="true" />
      <span className="contact-info-glow" aria-hidden="true" />

      <p className="contact-info-eyebrow">Direct line to {site.contact.split(' ')[0]}</p>
      <h2 className="contact-info-title">Speak with someone who invests what they advise.</h2>
      <p className="contact-info-lead">
        Book a complimentary strategy session — no obligation. We respond within one business day.
      </p>

      <div className="contact-info-grid">
        {contactItems.map((item) => (
          <div key={item.label} className="contact-info-card">
            <span className="contact-info-icon" aria-hidden="true">{item.icon}</span>
            <div>
              <p className="contact-info-label">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="contact-info-value">{item.value}</a>
              ) : (
                <p className="contact-info-value">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="contact-info-footer">
        <FooterSocials />
        <div className="contact-info-actions">
          <Button href={site.phoneHref}>Call now</Button>
          <Button href={`mailto:${site.email}`} variant="outline">Email us</Button>
        </div>
        <p className="contact-info-note">Western Australia · Victoria · Licence {site.licence}</p>
      </div>
    </aside>
  )
}
