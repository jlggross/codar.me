const UserModel = require('./model')

const list = async (req, res) => {
  try {
    const users = await UserModel.find({})
    res.send(users)
  } catch (error) {
    res.send(error)
  }
}

const save = async (req, res) => {
  const user = new UserModel(req.body)
  await user.save()
  res.send(user)
}

const update = async (req, res) => {
  const conditionals = { _id: req.params.id }
  const user = await UserModel.updateOne(conditionals, req.body)
  res.send(user)
}

const remove = async (req, res) => {
  const conditionals = { _id: req.params.id }
  const user = await UserModel.deleteOne(conditionals)
  res.send(user)
}

module.exports = { list, save, update, remove }
