import React from 'react'

export function TaskList({ tasks }) {
  return (
    <section>
      <h2>Tasks</h2>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </section>
  )
}
