// app/(marketing)/components/ExamplesSidebar.jsx
import { getAllExamples } from '@/lib/examples'

export function ExamplesSidebar({ activeSlug }) {
  const examples = getAllExamples()
  return (
    <aside className="examples-sidebar">
      <h4>All Examples</h4>
      <ul>
        {examples.map((ex) => (
          <li key={ex.slug}>
            <a
              href={`/examples/${ex.slug}`}
              className={ex.slug === activeSlug ? 'is-active' : ''}
            >
              {ex.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}