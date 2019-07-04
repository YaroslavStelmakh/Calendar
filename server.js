const http = require('http')
const port = 3000
const hostname = '127.0.0.1'

const server = http.createServer((request, response) => {
  response.end('Hello World')
})

server.listen(port,hostname, (err) => {
    if (err) {
        return console.log('Page not Found', err)
    }
    console.log(`server is listening on ${port}`)
})
