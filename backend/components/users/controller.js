const store = require('./store')
const passport = require('passport')
const response = require('../../network/responses')
const moment = require('moment')
const bcrypt = require('bcryptjs')

// Iniciar sesión
const signIn = (correo, clave) => {
  return new Promise((resolve, reject) => {
    store
      .listUsers(`correo = '${correo}'`)
      .then(value => {
        bcrypt.compare(clave, value[0].clave, (err, coinciden) => {
          if (err) {
            reject(err)
          } else {
            if(coinciden){
              resolve(value[0])
            }else{
              reject('El email o contraseña es incorrecta')
            }
            
          }
        })
      })
      .catch(err => {
        reject(err)
      })
  })
}

// Listar usuarios
const listUsers = filter => {
  return new Promise((resolve, reject) => {
    store
      .listUsers(filter)
      .then(value => {
        resolve(value)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// Listar perfiles
const listUsersProfiles = filter => {
  return new Promise((resolve, reject) => {
    store
      .listUsersProfiles(filter)
      .then(value => {
        resolve(value)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// Crear un nuevo usuario
const addUser = (nombre, correo, clave, tipoCuenta) => {
  let fecha = moment().format('YYYY-MM-DD')

  const rondasDeSal = 10

  return new Promise((resolve, reject) => {
    bcrypt.hash(clave, rondasDeSal, (err, claveEncriptada) => {
      if (err) {
        reject(err)
      } else {
        store
          .addUser(nombre, correo, claveEncriptada, tipoCuenta, fecha)
          .then(v => {
            resolve(v)
          })
          .catch(err => {
            reject(err)
          })
      }
    })
  })
}

// Editar usuario
const updateUsers = (fields, filter) => {
  return new Promise((resolve, reject) => {
    store
      .updateUsers(fields, filter)
      .then(value => {
        resolve(value)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// Crear un nuevo  perfil para un usuario
const addUserProfile = (idUsuario, nombre, estado) => {
  return new Promise((resolve, reject) => {
    store
      .addUserProfile(idUsuario, nombre, estado)
      .then(v => {
        resolve(v)
      })
      .catch(err => {
        reject(err)
      })
  })
}



// Editar  el estado de un perfil para un usuario
const updateUserProfileState = (fields, filter) => {
  return new Promise((resolve, reject) => {
    store
      .updateUserProfileState(fields, filter)
      .then(v => {
        resolve(v)
      })
      .catch(err => {
        reject(err)
      })
  })
}
// Editar  perfil para un usuario
const updateUserProfile = (idPerfil, idUsuario, nombre, estado) => {
  return new Promise((resolve, reject) => {
    store
      .updateUserProfile(idPerfil, idUsuario, nombre, estado)
      .then(v => {
        resolve(v)
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports = {
  signIn,
  listUsers,
  listUsersProfiles,
  addUser,
  addUserProfile,
  updateUserProfile,
  updateUsers,
  updateUserProfileState
}
