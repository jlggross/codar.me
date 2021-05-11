function Task1(props) {
  return <li>{props.text}</li>
}

function Task2({ children }) {
  return <li>{children}</li>
}

export function Home() {
  return (
    <div id="app">
      <section>
        <h1>Add Task</h1>
        <form>
          <input type="text" name="text" />
          <button>Add</button>
        </form>
      </section>

      <section>
        <h2>Tasks</h2>

        <ul>
          <Task1 text="Task 1" />
          <Task1 text="Task 2" />
          <Task1 text="Task 3" />

          <Task2>Task 1</Task2>
          <Task2>Task 2</Task2>
          <Task2>Task 3</Task2>
        </ul>
      </section>
    </div>
  )
}
