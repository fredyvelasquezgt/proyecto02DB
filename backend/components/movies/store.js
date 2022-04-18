// MySql
const dbconnection = require('../../src/db')
const connection = dbconnection()
const model = require('./model')

// localhost:8000/movies/nuevo
// Agregar peliculas
const nuevaPelicula = params => {
  let {
    titulo,
    descripcion,
    actores,
    director,
    categoria,
    premios,
    fechaEstreno,
    linkPelicula,
    duracion,
    portada,
    idGeneros,
  } = params

  return new Promise((resolve, reject) => {
    let sql = `INSERT pelicula values('${portada}', '${titulo}','${descripcion}','${actores}','${director}','${categoria}','${idGeneros}','${premios}','${fechaEstreno}','${linkPelicula}','${duracion}')`
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

// Actualizar pelicula
// localhost:8000/movies/actualizar
const actualizarPelicula = params => {
  let {
    titulo,
    descripcion,
    actores,
    director,
    categoria,
    premios,
    fechaEstreno,
    linkPelicula,
    duracion,
    portada,
    idGeneros,
    idPelicula,
  } = params

  return new Promise((resolve, reject) => {
    let sql = `UPDATE pelicula SET portada = '${portada}', titulo = '${titulo}',descripcion = '${descripcion}',
    actores = '${actores}',director = '${director}',categoria = '${categoria}',idGeneros = '${idGeneros}',
    premios = '${premios}',fechaEstreno = '${fechaEstreno}',linkPelicula = '${linkPelicula}',duracion = '${duracion}'
    where idPelicula = '${idPelicula}'`
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

// localhost:8000/movies/eliminar
// Eliminar peliculas
const eliminarPelicula = params => {
  let { idPelicula } = params
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM pelicula WHERE idPelicula = '${idPelicula}'`
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
  nuevaPelicula,
  actualizarPelicula,
  eliminarPelicula,
}
