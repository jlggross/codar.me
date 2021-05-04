const mongoose = require('mongoose')

// Mongoose Definition
mongoose.connect('mongodb://root:example@mongodb:27017/api?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.on('error', () => console.log('MongoDB: Error!'))
mongoose.connection.on('open', () => console.log('MongoDB: Connected!'))
