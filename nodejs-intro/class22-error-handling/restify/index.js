require('./database')

const restify = require('restify')
const routes = require('./routes')
const server = restify.createServer()

// Middlewares
server.pre(restify.pre.sanitizePath())
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser({ mapParams: false, allowDots: true }))
server.use(restify.plugins.bodyParser({ mapParams: false, allowDots: true }))

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  return next()
})

routes.map((route) => server[route.method](route.path, route.handler))

// Creating an authentication middleware
const auth = (req, res, next) => {
  const err = new Error('Auth error')
  next() // No error
  //next(err) // server.on('restifyError') catches the error
}
server.get('/', [auth, (req, res) => res.send('Access granted.')])

// Catches all types of errors
server.on('restifyError', (req, res, err) => {
  // res.send(400, err) // Send error to client
  res.send(400, 'Ops. Error 400.')
  // We can treat the error before sending back to the client
})

server.listen(8080, () => console.log('Server up.'))
