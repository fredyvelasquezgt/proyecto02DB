// MySql
const dbconnection = require('../../src/db')
const connection = dbconnection()
const model = require('./model')

// Listar anuncios
const list = query => {
  return new Promise((resolve, reject) => {
    let sql = query
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
  list
}
