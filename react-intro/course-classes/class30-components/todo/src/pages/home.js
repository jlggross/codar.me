import React, { useState } from 'react'

// Import from components/index.js
import { Form, TaskList } from './../components'

export function Home() {
  const [state, setState] = useState([{ id: 1, text: 'Do laundry' }])

  const onSuccess = (item) => setState((prev) => [...prev, item])

  return (
    <div id="app">
      <Form onSuccess={onSuccess} />
      <TaskList tasks={state} />
    </div>
  )
}
