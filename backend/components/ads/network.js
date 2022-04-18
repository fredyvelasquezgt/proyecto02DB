const express = require('express')
const router = express.Router()
const response = require('../../network/responses')
const controller = require('./controller')

const passportConfig = require('../../middelwares/passport')

//  Listar anuncios
router.post('/', (req, res) => {
  let { filter } = req.body

  controller
    .listAds(filter)
    .then(value => response.success(req, res, value, 200))
    .catch(err => response.error(req, res, err, 500, err))
})

//  Agregar anuncios
router.post('/nuevo', (req, res) => {
  controller
    .addAds(req.body)
    .then(value => response.success(req, res, value, 200))
    .catch(err => response.error(req, res, err, 500, err))
})

//  Agregar anuncios
router.post('/eliminar', (req, res) => {
  controller
    .eliminarAds(req.body)
    .then(value => response.success(req, res, value, 200))
    .catch(err => response.error(req, res, err, 500, err))
})

module.exports = router
