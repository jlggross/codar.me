require('./database')

const http = require('http')
const { parse } = require('url')
const routes = require('./routes')

// Server Definition
const server = http.createServer(async (req, res) => {
  const url = parse(req.url)
  const method = req.method

  if (routes[url.pathname] && routes[url.pathname][method]) {
    res.writeHead(200, { 'Context-Type': 'application/json' })
    routes[url.pathname][method](req, res)
  } else {
    res.writeHead(404, { 'Context-Type': 'text/plain' })
    res.write('Not Found')
    res.end()
  }
})

// Starts the server at localhost:8080
server.listen(8080)
