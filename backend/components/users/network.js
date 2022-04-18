const express = require('express')
const router = express.Router()
const response = require('../../network/responses')
const controller = require('./controller')

const passportConfig = require('../../middelwares/passport')

// Iniciar sesión
router.post('/', (req, res) => {
  let { correo, clave } = req.body

  controller
    .signIn(correo, clave)
    .then(value => response.success(req, res, value, 200))
    .catch(err => response.error(req, res, err, 500, err))
})

//  Listar usuarios
router.post('/list', passportConfig.isAuthenticated, (req, res) => {
  let { filter } = req.body

  controller
    .listUsers(filter)
    .then(value => response.success(req, res, value, 200))
    .catch(err => response.error(req, res, err, 500, err))
})

//  Listar perfiles
router.post('/profiles', (req, res) => {
  let { filter } = req.body

  controller
    .listUsersProfiles(filter)
    .then(value => response.success(req, res, value, 200))
    .catch(err => response.error(req, res, err, 500, err))
})



// Crear un nuevo usuario
router.post('/add', (req, res) => {
  let nombre = req.body.nombre
  let correo = req.body.correo
  let clave = req.body.clave
  let tipoCuenta = req.body.tipoCuenta

  controller
    .addUser(nombre, correo, clave, tipoCuenta)
    .then(value => {
      response.success(req, res, value, 200)
    })
    .catch(err => {
      response.error(req, res, err, 500, err)
    })
})

// Editart  usuario
router.post('/update', (req, res) => {
  let fields = req.body.fields
  let filter = req.body.filter

  controller
    .updateUsers(fields, filter)
    .then(value => {
      response.success(req, res, value, 200)
    })
    .catch(err => {
      response.error(req, res, err, 500, err)
    })
})


// Crear un nuevo perfil
router.post('/profile/add', (req, res) => {
  let idUsuario = req.body.idUsuario
  let nombre = req.body.nombre
  let estado = req.body.estado

  controller
    .addUserProfile(idUsuario, nombre, estado)
    .then(value => {
      response.success(req, res, value, 200)
    })
    .catch(err => {
      response.error(req, res, err, 500, err)
    })
})

// Editar un perfil
router.post('/profile/update', (req, res) => {
  let idPerfil = req.body.id
  let idUsuario = req.body.idUsuario
  let nombre = req.body.nombre
  let estado = req.body.estado

  controller
    .updateUserProfile(idPerfil, idUsuario, nombre, estado)
    .then(value => {
      response.success(req, res, value, 200)
    })
    .catch(err => {
      response.error(req, res, err, 500, err)
    })
})

// Editar el estado de un perfil
router.post('/profile/update/state', (req, res) => {
  let fields = req.body.fields
  let filter = req.body.filter


  controller
    .updateUserProfileState(fields, filter)
    .then(value => {
      response.success(req, res, value, 200)
    })
    .catch(err => {
      response.error(req, res, err, 500, err)
    })
})


module.exports = router
