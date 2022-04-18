const users = require('../components/users/network')
const movies = require('../components/movies/network')
const ads = require('../components/ads/network')

const routes = server => {
  server.use('/users', users)
  server.use('/movies', movies)
  server.use('/ads', ads)
}

module.exports = routes
