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
    const todo = new TODOModel({ text: req.body.text })
    await todo.save() // mongoose save method
    res.send(todo)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

const remove = async (req, res) => {
  try {
    await TODOModel.deleteOne({ _id: req.params.id })
    res.send({})
  } catch (error) {
    res.send(error)
  }
}

module.exports = { list, save, remove }
