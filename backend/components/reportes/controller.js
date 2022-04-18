const store = require('./store')

// Listar reporte
const list = query => {
  return new Promise((resolve, reject) => {
    store
      .list(query)
      .then(value => {
        resolve(value)
      })
      .catch(err => {
        reject(err)
      })
  })
}



module.exports = {
  list
}
