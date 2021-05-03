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

server.listen(8080, () => console.log('Server up.'))
