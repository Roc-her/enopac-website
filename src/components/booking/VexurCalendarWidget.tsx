import { useLayoutEffect } from 'react'
import { vexurCalendar } from '../../data/vexur'
import { ensureVexurCalendarLoaded, initVexurCalendarWidgets } from '../../lib/vexurCalendarLoader'

type VexurCalendarWidgetProps = {
  className?: string
}

export default function VexurCalendarWidget({ className = '' }: VexurCalendarWidgetProps) {
  useLayoutEffect(() => {
    let cancelled = false

    const mount = () => {
      ensureVexurCalendarLoaded()
        .then(() => {
          if (cancelled) return
          initVexurCalendarWidgets()
        })
        .catch(() => {})
    }

    mount()
    const retry = window.setTimeout(mount, 120)

    return () => {
      cancelled = true
      window.clearTimeout(retry)
    }
  }, [])

  return (
    <div
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
  )
}
