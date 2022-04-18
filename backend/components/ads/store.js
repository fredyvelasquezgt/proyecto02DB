// MySql
const dbconnection = require('../../src/db')
const connection = dbconnection()
const model = require('./model')

// Listar anuncios
const listAds = filter => {
  return new Promise((resolve, reject) => {
    let sql = model.selectAd(filter)
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

// Agregar anuncios
const addAds = params => {
  let  {titulo, link} = params
  return new Promise((resolve, reject) => {
    let sql = `INSET INTO anuncios VALUES('${titulo}', '${link}')`
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

// Eliminar anuncios
const eliminarAds = params => {
  let  {idAnuncio} = params
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM anuncio WHERE idAnuncio = '${idAnuncio}'`
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
  listAds,
  addAds,
  eliminarAds
}
