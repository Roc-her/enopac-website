import { useState } from 'react'
import type { FormEvent } from 'react'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import ContactInfoPanel from '../components/ui/ContactInfoPanel'
import { site } from '../data/site'
import { heroImages } from '../data/heroImages'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        eyebrow="Contact"
        title={site.cta}
        description="Tell us about your investment goals and we'll map out a tailored path forward — no obligation, no pressure."
        image={heroImages.contact.src}
        imageAlt={heroImages.contact.alt}
        imageCaption={`${site.phone} · ${site.email}`}
        pills={['WA & VIC', `Licence ${site.licence}`, site.contact]}
        actions={<Button href="#contact-form">{site.cta} →</Button>}
      />

      <section id="contact-form" className="section-padding section-surface bg-dark">
        <div className="section-container">
          <div className="contact-layout">
            <ContactInfoPanel />

            <div className="contact-form-panel">
              <span className="contact-form-rail" aria-hidden="true" />
              <p className="contact-form-eyebrow">Send a message</p>
              <h2 className="contact-form-title">Book your strategy session</h2>

              {submitted ? (
                <div className="contact-form-success">
                  <div className="contact-form-success-icon" aria-hidden="true">✓</div>
                  <h3>Thank you — we&apos;ll be in touch soon</h3>
                  <p>{site.contact} will reach out within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="firstName">First name</label>
                      <input id="firstName" name="firstName" required className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="lastName">Last name</label>
                      <input id="lastName" name="lastName" required className="form-input" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="service">I&apos;m interested in</label>
                    <select id="service" name="service" className="form-input">
                      <option value="strategy">General strategy session</option>
                      <option value="pm">Property Management</option>
                      <option value="ba">Buyers Agency</option>
                      <option value="dev">Development Opportunities</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Your goals</label>
                    <textarea id="message" name="message" rows={4} placeholder="Tell us about your investment goals..." className="form-input contact-form-textarea" />
                  </div>
                  <Button type="submit">{site.cta} →</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
