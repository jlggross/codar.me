const UserModel = require('./model')

const list = async (req, res) => {
  const users = await UserModel.find({})
  res.send(users)
}

const save = (req, res) => {
  const user = new UserModel(req.body)
  user.save()
  res.send(user)
}

const update = (req, res) => {
  const conditionals = { _id: req.params.id }
  const user = UserModel.updateOne(conditionals, req.body)
  res.send(user)
}

const remove = (req, res) => {
  const conditionals = { _id: req.params.id }
  const user = UserModel.deleteOne(conditionals)
  res.send(user)
}

module.exports = { list, save, update, remove }
