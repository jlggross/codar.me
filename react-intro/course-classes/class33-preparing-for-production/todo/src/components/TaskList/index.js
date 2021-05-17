import React from 'react'

export function TaskItem({ id, title, onRemove }) {
  const onClick = () => onRemove(id)

  return (
    <li>
      <span>{title}</span>
      <button onClick={onClick}>Remove</button>
    </li>
  )
}

export function TaskList({ tasks, onRemove }) {
  return (
    <section>
      <h2>Tasks</h2>

      <ul id="tasks">
        {tasks.map((item) => (
          <TaskItem key={item.id} {...item} onRemove={onRemove} />
        ))}
      </ul>
    </section>
  )
}
