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

module.exports = {
  listAds,
}
