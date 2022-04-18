const express = require('express')
const router = express.Router()
const response = require('../../network/responses')
const controller = require('./controller')

const passportConfig = require('../../middelwares/passport')

//  Listar peliculas
router.post('/list', (req, res) => {
  let { filter } = req.body

  controller
    .listMovies(filter)
    .then(value => response.success(req, res, value, 200))
    .catch(err => response.error(req, res, err, 500, err))
})

//  Listar estado peliculas
router.post('/watching', (req, res) => {
  let { filter } = req.body

  controller
    .listWatchingMovies(filter)
    .then(value => response.success(req, res, value, 200))
    .catch(err => response.error(req, res, err, 500, err))
})

//  Agregar3 estado peliculas
router.post('/watching/add', (req, res) => {
  let { idperfil, idpelicula } = req.body
  controller
    .addWatchingMovies(idperfil, idpelicula)
    .then(value => response.success(req, res, value, 200))
    .catch(err => response.error(req, res, err, 500, err))
})


// implementar
//  Listar peliculas  favoritas
router.post('/favorites', (req, res) => {
  let { filter } = req.body
  controller
    .listFavoriteMovies(filter)
    .then(value => response.success(req, res, value, 200))
    .catch(err => response.error(req, res, err, 500, err))
})

//  Agregar pelicula favorita
router.post('/favorites/add', (req, res) => {
  let { idperfil, idpelicula } = req.body
  controller
    .addFavoriteMovies(idperfil, idpelicula)
    .then(value => response.success(req, res, value, 200))
    .catch(err => response.error(req, res, err, 500, err))
})

module.exports = router
