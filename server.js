const express = require('express')
const server = express()

server.all('/', (_, res) => {
  res.send('Your bot is alive!')
})

module.exports = function start_server() {
  server.listen(3000, () => {
    console.log('Server is running!')
  })
}
