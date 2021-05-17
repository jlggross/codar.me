import React, { useState } from 'react'

export function Form({ onSuccess }) {
  const [state, setState] = useState('')

  const onChange = (ev) => setState(ev.target.value)
  const onSubmit = (ev) => {
    ev.preventDefault()
    if (state) {
      onSuccess(state)
      setState('')
    }
  }

  return (
    <section>
      <h1>Add Task</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Type a task"
          value={state}
          onChange={onChange}
        />
        <button>Add</button>
      </form>
    </section>
  )
}
