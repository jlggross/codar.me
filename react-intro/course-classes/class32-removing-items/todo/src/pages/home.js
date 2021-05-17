import React, { useEffect, useState } from 'react'

// Import from components/index.js
import { Form, TaskList } from './../components'

export function Home() {
  const [state, setState] = useState([{ id: 1, text: 'Do laundry' }])

  const onSuccess = (title) => {
    // Sending task to the back-end
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setState((prev) => [...prev, json])
      })
  }

  const onRemove = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setState((prev) => prev.filter((item) => item.id !== id))
    })
  }

  useEffect(() => {
    //fetch('https://jsonplaceholder.typicode.com/todos/1') // One item
    //fetch('https://jsonplaceholder.typicode.com/todos/') // All items
    fetch('https://jsonplaceholder.typicode.com/todos/?userId=1') // All items from use
      .then((response) => response.json())
      .then((json) => setState(json))
  }, [])

  return (
    <div id="app">
      <Form onSuccess={onSuccess} />
      <TaskList tasks={state} onRemove={onRemove} />
    </div>
  )
}
