const selectUsers = filter => {
  return `SELECT idUsuario, nombre, clave, correo, tipoCuenta
          FROM usuario 
          WHERE ${filter}
          `
}

const selectUsersProfiles = filter => {
  return `select 	idPerfil,idUsuario,nombre,estado, icono , activo
          from perfil
          WHERE ${filter} 
          `
}


// Inserta un nuevo usuario
const insertUser = (nombre, correo, clave, tipoCuenta, fecha) => {
  return `insert into usuario (nombre ,correo ,clave ,tipoCuenta,fechaCreacion,intentosFallidos)
             values ('${nombre}','${correo}','${clave}','${tipoCuenta}','${fecha}','0')  returning idUsuario;
          `
}

// Actualizar  usuario
const updateUser = (fields, filter) => {
  return `
            update usuario set ${fields}
            where ${filter};
          `
}

// Inserta un nuevo usuario
const insertUserProfile = (idUsuario, nombre, estado) => {
  return `insert into perfil (idUsuario, nombre, estado, icono) 
            values ('${idUsuario}','${nombre}','${estado}', 'https://picsum.photos/200');
          `
}


const updateUserProfileState = (fields, filter) => {
  return `
            update perfil set ${fields}
            where ${filter};
          `
}
// Inserta un nuevo usuario
const updateUserProfile = (idPerfil, idUsuario, nombre, estado) => {
  return `
            update perfil set nombre = '${nombre}',estado = '${estado}'
            where idPerfil = '${idPerfil}';
          `
}

module.exports = {
  selectUsers,
  selectUsersProfiles,
  insertUser,
  insertUserProfile,
  updateUserProfile,
  updateUser,
  updateUserProfileState
}
