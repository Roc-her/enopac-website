import { useEffect } from 'react'
import VexurCalendarWidget from './VexurCalendarWidget'

type BookingModalProps = {
  open: boolean
  onClose: () => void
}

export default function BookingModal({ open, onClose }: BookingModalProps) {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="booking-modal is-open"
      role="dialog"
      aria-modal="true"
      aria-label="Book a strategy session"
    >
      <button
        type="button"
        className="booking-modal-backdrop"
        aria-label="Close booking"
        onClick={onClose}
      />
      <div className="booking-modal-content">
        <button type="button" className="booking-modal-close" aria-label="Close" onClick={onClose}>
          ×
        </button>
        <VexurCalendarWidget />
      </div>
    </div>
  )
}
