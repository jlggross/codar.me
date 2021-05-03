const TODOModel = require('./model.js')

const list = async (req, res) => {
  try {
    const todos = await TODOModel.find({})
    res.send(todos)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

const save = async (req, res) => {
  try {
    const item = { text: req.body.text }
    const todo = new TODOModel(item)
    await todo.save()
    res.save(todo)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

module.exports = { list, save }
