const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    test: String,
  },
  {
    timeStamp: true,
  }
)

const TODOModel = mongoose.model('TODO', schema)

module.exports = TODOModel
