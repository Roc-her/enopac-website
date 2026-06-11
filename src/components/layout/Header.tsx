import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../ui/Logo'
import Button from '../ui/Button'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
  { to: '/contact', label: 'Contact' },
]

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleNavClick = () => {
    setOpen(false)
    scrollToTop()
  }

  return (
    <header className="site-header">
      <div className="section-container">
        <NavLink to="/" className="header-brand" onClick={handleNavClick}>
          <Logo size="sm" />
        </NavLink>

        <nav className="site-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={handleNavClick}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Button to="/contact" onClick={handleNavClick}>Book a Call</Button>
        </div>

        <button type="button" className="mobile-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span style={open ? { transform: 'translateY(7px) rotate(45deg)' } : {}} />
          <span style={open ? { opacity: 0 } : {}} />
          <span style={open ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}} />
        </button>
      </div>

      {open && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={handleNavClick}
            >
              {link.label}
            </NavLink>
          ))}
          <div style={{ marginTop: '1rem' }}>
            <Button to="/contact" onClick={handleNavClick}>Book a Call</Button>
          </div>
        </nav>
      )}
    </header>
  )
}
