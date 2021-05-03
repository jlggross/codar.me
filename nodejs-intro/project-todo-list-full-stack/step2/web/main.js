const ulElement = document.querySelector('#tasks ul')
const tasks = [{ text: 'abc' }]

function onLoad() {
  // Fect hdata from the server
  fetch('http://localhost:3002/todos')
    .then((res) => res.json())
    .then((data) => data.forEach((item) => addTask(item.text)))
}

function removeTask(index) {
  tasks.splice(index, 1) // Remove item from array

  const taskElement = document.querySelector(`#tasks li#index-${index}`)
  ulElement.removeChild(taskElement)
}

function addTask(text) {
  const index = tasks.push(text) - 1
  console.log(index)

  const taskElement = document.createElement('li')
  const textElement = document.createElement('span')
  const btnElement = document.createElement('button')

  taskElement.setAttribute('id', `index-${index}`)

  btnElement.onclick = () => {
    removeTask(index)
    console.log(tasks)
  }

  taskElement.appendChild(textElement)
  taskElement.appendChild(btnElement)

  textElement.innerHTML = text
  btnElement.innerHTML = 'Remove'

  ulElement.appendChild(taskElement)
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
