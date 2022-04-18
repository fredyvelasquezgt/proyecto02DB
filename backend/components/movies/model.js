const selectMovies = filter => {
  return `SELECT *
          FROM pelicula
          WHERE ${filter}
          `
}

const selectFavoritesMovies = filter => {
  return `SELECT p.portada, p.titulo, p.descripcion, p.idPelicula
          FROM favoritos f 
          inner join pelicula p on p.idPelicula = f.idPelicula
          where ${filter}
          `
}


const selectWatchingMovies = filter => {
  return `SELECT p.portada, p.titulo, p.descripcion, p.idPelicula
          FROM estadoContenido  e
          inner join pelicula p on p.idPelicula = e.idPelicula
          where ${filter}
          `
}

const insertFavoriteMovies = (idPerfil, idPelicula) => {
  return `insert into favoritos values('${idPelicula}', '${idPerfil}')`
}

const insertWatchingMovies = (idPerfil, idPelicula, fechaInicio) => {
  return `insert into estadoContenido values('${idPerfil}', '${idPelicula}', '${fechaInicio}', '1')
          `
}


module.exports = {
  selectMovies,
  selectFavoritesMovies,
  selectWatchingMovies, 
  insertWatchingMovies,
  insertFavoriteMovies
}
