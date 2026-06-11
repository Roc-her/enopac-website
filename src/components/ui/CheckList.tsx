export default function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>
          <span className="check-icon">✓</span>
          {item}
        </li>
      ))}
    </ul>
  )
}
