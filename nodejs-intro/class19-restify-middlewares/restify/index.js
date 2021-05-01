const restify = require('restify')

const server = restify.createServer()

// Middlewares
server.pre(restify.pre.sanitizePath())
server.use(restify.plugins.acceptParser(server.acceptable))

// Query string format: http://codar.me/posts?query=1&a.b==2
server.use(restify.plugins.queryParser({ mapParams: false, allowDots: true })) // makes attribution to req.query
server.use(restify.plugins.bodyParser({ mapParams: false, allowDots: true }))

server.get('/', (req, res, next) => {
  /* Here we can access the following content:
  - req.params
  - req.query
  - req.body
  */

  res.send('Hello World.')
})

server.listen(8080, () => console.log('Server up.'))

// GET http://localhost:8080
// GET http://localhost:8080/users
