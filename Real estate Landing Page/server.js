const path = require('path')
const fs = rquire('fs')
const http = require('http')

const server = http.createServer((req, res) =>{
  let filePath = path.join(__dirname, 'app', req.url === '/' ? 'Home.html': req.url)
  let contentType = getContentType(filePath) || 'text/html'
})