require('./database.js')
const restify = require('restify')
const mongoose = require('mongoose')

const todos = require('./module/todos/controller.js')

const server = restify.createServer()

server.pre(restify.pre.sanitizePath())
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser({ mapParams: false, allowDots: true }))
server.use(restify.plugins.bodyParser({ mapParams: false, allowDots: true }))

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')

  return next()
})

// Routes
server.get('/', (req, res) => {
  res.send('Hello Server!')
})

server.get('/todos', todos.list)

server.post('/todos', todos.save)

server.listen(3002, () => console.log('Server up!'))
