const http = require('http')
const mongoose = require('mongoose')
const { parse } = require('url')

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

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Context-Type': 'application/json' })
  const url = parse(req.url)

  if (url.pathname === '/users' && req.method === 'GET') {
    const users = await UserModel.find({})
    res.write(JSON.stringify(users))
    res.end()
  }

  if (url.pathname === '/users' && req.method === 'POST') {
    /* Manually insert data in the database. Create the data in the server
    and also insert it in the database.

    const user = new UserModel({
      name: 'Gross',
    })

    // Save data to database
    await user.save()
    
    */

    /*
    - Waits for a request 'data' event to trigger a callback
    - This callback will receive the data from a POST made in the front-end
    - We have to create a body variable to receive all chunks of data from
    the front-end when the client makes a POST, because the data can come
    fragmented. 'body' will get all pieces of data. 
    */
    let body = []
    req.on('data', (chunk) => {
      body.push(chunk)
    })

    req.on('end', async () => {
      // Its expected an array of byte Buffers, so we have to concatenate all of them
      body = Buffer.concat(body).toString()

      body = body
        .split('&')
        .map((item) => item.split('='))
        .reduce(
          (memo, current) => ({
            ...memo,
            [current[0]]: current[1],
          }),
          {}
        )

      console.log(body)
      const user = new UserModel(body)
      await user.save()
      //res.write(JSON.stringify(body))
      res.write(JSON.stringify(user)) // Return recently created user
      res.end()
    })
  }
})

// Starts the server at localhost:8080
server.listen(8080)
