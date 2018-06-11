const express = require('express')
const next = require('next')
const path = require('path')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: path.resolve(__dirname, '..', 'app') })
const handle = app.getRequestHandler()

const PORT = process.env.PORT || 3000

app.prepare().then(() => {
  const server = express()

  require('./routes')(server, app)
  server.get('*', (req, res) => handle(req, res))

  server.listen(PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
