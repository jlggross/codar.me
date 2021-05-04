const restify = require('restify')
const routes = require('./routes')
const server = restify.createServer()

// Middlewares
server.pre(restify.pre.sanitizePath())
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser({ mapParams: false, allowDots: true }))
server.use(restify.plugins.bodyParser({ mapParams: false, allowDots: true }))

// server.get() and server["get"]() are the same
routes.map((route) => server[route.method](route.path, route.handler))

/*
routes.map((route) => 
  server[route.method](route.path, route, handler)) 
  
the function above loads all the following, so we can remove them: 

server.get('/', (req, res, next) => {
  res.send([])
})

server.get('/users', (req, res, next) => {
  res.send([])
})

server.post('/users', (req, res, next) => {
  // Create a new user
  const user = {}
  res.send(user)
})

server.put('/users/:id', (req, res, next) => {
  // Update user
  // req.params.id
  const user = {}
  res.send(user)
})

server.del('/users/:id', (req, res, next) => {
  // Remove user
  const user = {}
  res.send(user)
})

*/

server.listen(8080, () => console.log('Server up.'))
