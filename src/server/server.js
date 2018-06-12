const express = require('express')
const next = require('next')
const path = require('path')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: path.resolve(__dirname, '..', 'app') })
const handle = app.getRequestHandler()

const PORT = process.env.PORT || 3000

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json({ limit: '10mb' }))
  server.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }))
  require('./routes')(server, app)
  server.get('*', (req, res) => handle(req, res))

  server.listen(PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
