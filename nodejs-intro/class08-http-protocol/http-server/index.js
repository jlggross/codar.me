const http = require("http")

// The method createServer() receives a callback as a parameter
// Every time the browser makes a request the callback of the server is triggered
// The callback receives two parameters: request (req) and response (res)
// The response argument will be written by the server to send it back to the browser.
const server = http.createServer((req, res) => {
  
  // request information
  console.log(req)

  // first arg: status code => 200 is Ok
  // second arg : header 
  res.writeHead(200, { "Context-Type": "text/plain" })
  
  // Body content
  res.write("Hello World!")

  // End connection. Ready to send response
  res.end()
})

// Starts the server to listen for new requests
// We choose the port to listen
server.listen(8080)