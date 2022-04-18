import React, { useEffect, useState } from 'react'
import api from '../../api'
import { useSessionStorage } from '../../hooks/useSessionStorage'

import img from '../../images/dashboard/01.jpg'

export const MoviesScreen = () => {
  const [profileData] = useSessionStorage('profile', false)

  const [movies, setMovies] = useState([])

  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchMovies = async () => {
      let data = await api.movies.list({
        filter: `titulo LIKE '%${filter}%' OR descripcion LIKE '%${filter}%' OR actores LIKE '%${filter}%'OR director LIKE '%${filter}%'OR categoria LIKE '%${filter}%'OR premios LIKE '%${filter}%';`,
      })
      setMovies(data.body)
    }
    fetchMovies()
  }, [filter])

  const addFavorite = async (idperfil, idpelicula) => {
    await api.movies.addFavotite({
      idperfil,
      idpelicula,
    })
  }

  return (
    <>
      <div class="favorites-contens" style={{ margin: '30px' }}>
        {/* Search input */}

        <h3>Peliculas</h3>
        <hr />
        <input
          onChange={e => setFilter(e.target.value)}
          value={filter}
          type="text"
          placeholder="Buscar pelicula por nombre, categoria, duración, fecha estreno, premios, etc..."
        />
        <br />
        <br />

        {/* Movies list */}
        <ul class="favorites-slider list-inline  row p-0 mb-0 iq-rtl-direction">
          {movies.map(movie => (
            <li
              key={movie.idpelicula}
              class="slide-item"
              style={{ marginBottom: '30px' }}>
              <div class="block-images position-relative">
                <div class="img-box">
                  <img src={movie.portada} class="img-fluid" alt="" />
                </div>
                <div class="block-description">
                  <h6 class="iq-title">
                    <a href="show-details.html">{movie.titulo}</a>
                  </h6>
                  <div class="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                    <span class="text-white">{movie.duracion} minutos</span>
                  </div>
                  <div class="hover-buttons">
                    <a
                      href={`/app/movie/${movie.idpelicula}`}
                      role="button"
                      class="btn btn-hover iq-button">
                      <i class="fa fa-play mr-1" aria-hidden="true"></i>
                      Ver ahora
                    </a>
                  </div>
                </div>
                <div class="block-social-info">
                  <ul class="list-inline p-0 m-0 music-play-lists">
                    <li>
                      <span
                        onClick={() =>
                          addFavorite(profileData.idperfil, movie.idpelicula)
                        }>
                        {/* Add favorites */}
                        <i class="ri-heart-fill"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
