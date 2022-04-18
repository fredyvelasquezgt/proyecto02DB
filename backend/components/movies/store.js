// MySql
const dbconnection = require('../../src/db')
const connection = dbconnection()
const model = require('./model')

// Listar peliculas
const listMovies = filter => {
  return new Promise((resolve, reject) => {
    let sql = model.selectMovies(filter)
    connection.query(sql, (err, result) => {
      if (err) reject(err)
      try {
        resolve(result.rows)
      } catch (error) {
        reject(error)
      }
    })
  })
}

// Listar peliculas favoritas
const listFavoriteMovies = filter => {
  return new Promise((resolve, reject) => {
    let sql = model.selectFavoritesMovies(filter)
    console.log(sql)
    connection.query(sql, (err, result) => {
      if (err) reject(err)
      try {
        resolve(result.rows)
      } catch (error) {
        reject(error)
      }
    })
  })
}

// Listar estado peliculas
const listWatchingMovies = filter => {
  return new Promise((resolve, reject) => {
    let sql = model.selectWatchingMovies(filter)
    connection.query(sql, (err, result) => {
      if (err) reject(err)
      try {
        resolve(result.rows)
      } catch (error) {
        reject(error)
      }
    })
  })
}

// Agregar peliculas favorita
const addFavoriteMovies = (idperfil, idpelicula) => {
  return new Promise((resolve, reject) => {
    let sql = model.insertFavoriteMovies(idperfil, idpelicula)
    connection.query(sql, (err, result) => {
      if (err) reject(err)
      try {
        resolve(result.rows)
      } catch (error) {
        reject(error)
      }
    })
  })
}

// Agregar estado peliculas
const addWatchingMovies = (idperfil, idpelicula, fechaInicio) => {
  return new Promise((resolve, reject) => {
    let sql = model.insertWatchingMovies(idperfil, idpelicula, fechaInicio)
    connection.query(sql, (err, result) => {
      if (err) reject(err)
      try {
        resolve(result.rows)
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = {
  listMovies,
  listFavoriteMovies,
  listWatchingMovies,
  addWatchingMovies,
  addFavoriteMovies,
}
