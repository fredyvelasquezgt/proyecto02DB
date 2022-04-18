// MySql
const dbconnection = require('../../src/db')
const connection = dbconnection()
const model = require('./model')


// Listar usuarios
const listUsers = filter => {
  return new Promise((resolve, reject) => {
    let sql = model.selectUsers(filter)
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

// Listar profiles
const listUsersProfiles = filter => {
  return new Promise((resolve, reject) => {
    let sql = model.selectUsersProfiles(filter)
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


// Crear un nuevo usuario
const addUser = (nombre, correo, clave, tipoCuenta, fecha) => {
  return new Promise((resolve, reject) => {
    let sql = model.insertUser(nombre, correo, clave, tipoCuenta, fecha)
    connection.query(sql, (err, result) => {
      if (err) reject(err)
      try {
        resolve(result.rows[0].idusuario)
      } catch (error) {
        reject(error)
      }
    })
  })
}

// Crear un nuevo usuario
const updateUsers = (fields, filter) => {
  return new Promise((resolve, reject) => {
    let sql = model.updateUser(fields, filter)
    connection.query(sql, (err, result) => {
      if (err) reject(err)
      try {
        resolve(result.rows[0].idusuario)
      } catch (error) {
        reject(error)
      }
    })
  })
}


// Crear un nuevo perfil para un usuario
const addUserProfile = (idUsuario, nombre, estado) => {
  return new Promise((resolve, reject) => {
    let sql = model.insertUserProfile(idUsuario, nombre, estado)
    connection.query(sql, (err, result) => {
      if (err) reject(err)
      try {
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  })
}


// Editar estado de un perfil para un usuario
const updateUserProfileState = (fields, filter) => {
  return new Promise((resolve, reject) => {
    let sql = model.updateUserProfileState(fields, filter)
    console.log(sql)
    connection.query(sql, (err, result) => {
      if (err) reject(err)
      try {
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  })
}



// Editar perfil para un usuario
const updateUserProfile = (idPerfil, idUsuario, nombre, estado) => {
  return new Promise((resolve, reject) => {
    let sql = model.updateUserProfile(idPerfil, idUsuario, nombre, estado)
    console.log(sql)
    connection.query(sql, (err, result) => {
      if (err) reject(err)
      try {
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = {
  listUsers,
  listUsersProfiles,
  addUser,
  addUserProfile,
  updateUserProfile,
  updateUsers,
  updateUserProfileState
}
