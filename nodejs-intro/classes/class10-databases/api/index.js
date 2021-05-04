const http = require('http')
const mongoose = require('mongoose')

// mongodb://user:password@host:port/database-name
// localhost could also be 127.0.0.0 or 0.0.0.0
// authSource tag so mongoose know where to make the authentication
mongoose.connect(
  'mongodb://root:example@localhost:27017/api?authSource=admin',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

mongoose.connection.on('error', () => console.log('MongoDB: Error!'))
mongoose.connection.on('open', () => console.log('MongoDB: Connected!'))

const schema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
)
const UserModel = mongoose.model('User', schema)
// Mongoose will parse the string and create a table 'users'

const server = http.createServer(async (req, res) => {
  // Insert data into the database
  // We run this just once to populate the database
  // await UserModel.create({
  //  name: "João Gross"
  // })

  // Get data from the database
  const users = await UserModel.find({})
  console.log(users)

  // Send a response to our use (browser)
  res.writeHead(200, { 'Context-Type': 'application/json' })
  res.write(JSON.stringify(users))
  res.end()
})

// Starts the server at localhost:8080
server.listen(8080)
