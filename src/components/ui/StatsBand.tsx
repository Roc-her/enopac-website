const stats = [
  { value: '8-Figure', label: 'Personal Portfolio' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Investor Focused' },
  { value: '2', label: 'States Covered' },
]

export default function StatsBand() {
  return (
    <section className="stats-strip" aria-label="Key statistics">
      <div className="section-container">
        <ul className="stats-strip-grid">
          {stats.map((s) => (
            <li key={s.label} className="stats-strip-card">
              <span className="stats-strip-accent" aria-hidden="true" />
              <span className="stats-strip-value">{s.value}</span>
              <span className="stats-strip-rule" aria-hidden="true" />
              <span className="stats-strip-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
