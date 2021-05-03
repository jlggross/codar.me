const ulElement = document.querySelector('#tasks ul')
const tasks = []

function onLoad() {
  // Fecth data from the server
  fetch('http://localhost:3002/todos')
    .then((res) => res.json())
    .then((data) => data.forEach((item) => addInDOM(item))) // List of tasks from DB
}

function removeTask(index) {
  tasks.splice(index, 1) // Remove item from array

  const taskElement = document.querySelector(`#tasks li#index-${index}`)
  ulElement.removeChild(taskElement)
}

function addInDOM(task) {
  const taskElement = document.createElement('li')
  const textElement = document.createElement('span')
  const btnElement = document.createElement('button')

  taskElement.setAttribute('id', `index-${task._id}`)
  btnElement.onclick = () => removeTask(task._id)

  taskElement.appendChild(textElement)
  taskElement.appendChild(btnElement)

  textElement.innerHTML = task.text
  btnElement.innerHTML = 'Remove'

  ulElement.appendChild(taskElement)
}

function addTask(text) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: text }),
  }

  fetch('http://localhost:3002/todos', options)
    .then((res) => res.json())
    .then((data) => addInDOM(data)) // Just the added task
}

const btnElement = document.querySelector('#form button')
const inputElement = document.querySelector('#form input')

btnElement.onclick = () => {
  if (inputElement.value) {
    addTask(inputElement.value)
    inputElement.value = ''
    console.log(tasks)
  }
}

// Waits window to load
window.onload = onLoad
