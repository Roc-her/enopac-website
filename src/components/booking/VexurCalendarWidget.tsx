import { useLayoutEffect, useRef, useState } from 'react'
import { vexurCalendar } from '../../data/vexur'
import { ensureVexurCalendarLoaded, initVexurCalendarWidgets } from '../../lib/vexurCalendarLoader'

type VexurCalendarWidgetProps = {
  className?: string
}

export default function VexurCalendarWidget({ className = '' }: VexurCalendarWidgetProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useLayoutEffect(() => {
    let cancelled = false
    const host = hostRef.current
    if (!host) return

    const markReady = () => {
      if (!cancelled) setReady(true)
    }

    const observer = new MutationObserver(() => {
      if (host.querySelector('iframe') || host.shadowRoot || host.childElementCount > 0) {
        markReady()
      }
    })

    observer.observe(host, { childList: true, subtree: true })

    const mount = () => {
      ensureVexurCalendarLoaded()
        .then(() => {
          if (cancelled) return
          initVexurCalendarWidgets()
          window.setTimeout(markReady, 1500)
        })
        .catch(() => {})
    }

    mount()
    const retry = window.setTimeout(mount, 120)

    return () => {
      cancelled = true
      observer.disconnect()
      window.clearTimeout(retry)
    }
  }, [])

  return (
    <div className={`vexur-calendar-shell${ready ? ' vexur-calendar-shell--ready' : ''}`}>
      {!ready && (
        <div className="vexur-calendar-shell__loader" aria-hidden="true">
          <div className="vexur-calendar-shell__track" />
        </div>
      )}
      <div
        ref={hostRef}
        className={`vexur-widget${className ? ` ${className}` : ''}`}
        data-widget="calendar"
        data-agent={vexurCalendar.agentId}
        data-loader="v2"
        data-theme={vexurCalendar.theme}
        data-primary-color={vexurCalendar.primaryColor}
        data-show-branding="true"
        data-consent="pending"
        data-vx-no-fallback="true"
        data-vx-param-calendar-widget-build-id={vexurCalendar.buildId}
        data-vx-param-renderer={vexurCalendar.renderer}
        data-vx-param-v={vexurCalendar.version}
      />
    </div>
  )
}
