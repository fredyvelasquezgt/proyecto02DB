const store = require('./store')
const passport = require('passport')
const response = require('../../network/responses')
const moment = require('moment')
const bcrypt = require('bcryptjs')

// Nueva pelicula
const actualizarPelicula = params => {
  return new Promise((resolve, reject) => {
    store
      .actualizarPelicula(params)
      .then(value => {
        resolve(value)
      })
      .catch(err => {
        reject(err)
      })
  })
}



// Eliminar pelicula
const eliminarPelicula = params => {
  return new Promise((resolve, reject) => {
    store
      .eliminarPelicula(params)
      .then(value => {
        resolve(value)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// Actualizar pelicula
const nuevaPelicula = params => {
  return new Promise((resolve, reject) => {
    store
      .nuevaPelicula(params)
      .then(value => {
        resolve(value)
      })
      .catch(err => {
        reject(err)
      })
  })
}


// Listar peliculas
const listMovies = filter => {
  return new Promise((resolve, reject) => {
    store
      .listMovies(filter)
      .then(value => {
        resolve(value)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// Listar peliculas favoritas
const listFavoriteMovies = filter => {
  return new Promise((resolve, reject) => {
    store
      .listFavoriteMovies(filter)
      .then(value => {
        resolve(value)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// Listar estado peliculas
const listWatchingMovies = filter => {
  return new Promise((resolve, reject) => {
    store
      .listWatchingMovies(filter)
      .then(value => {
        resolve(value)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// Agregar peliculas favoritas
const addFavoriteMovies = (idperfil, idpelicula) => {
  return new Promise((resolve, reject) => {
    store
      .addFavoriteMovies(idperfil, idpelicula)
      .then(value => {
        resolve(value)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// Agregar estado peliculas
const addWatchingMovies = (idperfil, idpelicula) => {
  let fechaInicio = moment().format('YYYY-MM-DD')

  return new Promise((resolve, reject) => {
    store
      .addWatchingMovies(idperfil, idpelicula, fechaInicio)
      .then(value => {
        resolve(value)
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports = {
  listMovies,
  listFavoriteMovies,
  listWatchingMovies,
  addWatchingMovies,
  addFavoriteMovies,
  nuevaPelicula,
  actualizarPelicula,
  eliminarPelicula
}
