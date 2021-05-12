import React, { useState } from 'react'

export function TaskList({ tasks }) {
  return (
    <section>
      <h2>Tasks</h2>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  )
}
