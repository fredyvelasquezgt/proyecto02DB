const store = require('./store')
const passport = require('passport')
const response = require('../../network/responses')
const moment = require('moment')
const bcrypt = require('bcryptjs')

// Listar anuncios
const listAds = filter => {
  return new Promise((resolve, reject) => {
    store
      .listAds(filter)
      .then(value => {
        resolve(value)
      })
      .catch(err => {
        reject(err)
      })
  })
}


// Agregar anuncios
const addAds = params => {
  return new Promise((resolve, reject) => {
    store
      .addAds(params)
      .then(value => {
        resolve(value)
      })
      .catch(err => {
        reject(err)
      })
  })
}


// Eliminar anuncios
const eliminarAds = params => {
  return new Promise((resolve, reject) => {
    store
      .eliminarAds(params)
      .then(value => {
        resolve(value)
      })
      .catch(err => {
        reject(err)
      })
  })
}



module.exports = {
  listAds,
  addAds,
  eliminarAds
}
