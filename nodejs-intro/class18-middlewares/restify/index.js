const restify = require('restify')

const server = restify.createServer()

// Middlewares
server.pre((req, res, next) => {
  console.log('First')
  next()
})

// Route resolution
server.use((req, res, next) => {
  console.log('Second')
  next()
})

// Another middleware - Multiple parameters
server.get(
  '/',
  (req, res, next1) => {
    console.log('/')
    console.log('Next 1')
    next1()
  },
  (req, res, next2) => {
    console.log('Next 2')
    next2()
  },
  (req, res, next3) => {
    console.log('Next 3')
    next3()
  },
  (req, res, next4) => {
    console.log('Next 4')
    next4()
  }
)

server.get('/users', (req, res) => {
  console.log('/users')
  res.send('Hello World.')
})

server.listen(8080, () => console.log('Server up.'))

// GET http://localhost:8080
// GET http://localhost:8080/users
