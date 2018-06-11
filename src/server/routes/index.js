const initRoutes = (server, app) => {
  server.use('/api/v1', require('./api'))
}

module.exports = initRoutes
