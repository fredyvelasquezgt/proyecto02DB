import React, { useEffect, useState } from 'react'
import api from '../../api'
import { useSessionStorage } from '../../hooks/useSessionStorage'

import img from '../../images/dashboard/01.jpg'

export const Watching = () => {
  const [profileData] = useSessionStorage('profile', false)

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      let data = await api.movies.watching({
        filter: `idPerfil = '${profileData.idperfil}' and estado = '1'`,
      })

      setMovies(data.body || [])
    }
    fetchMovies()
  }, [profileData.idperfil])

  const addFavorite = async (idperfil, idpelicula) => {
    await api.movies.addFavotite({
      idperfil,
      idpelicula,
    })
  }

  return (
    <>
      <div class="main-content">
        <section id="iq-favorites">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12 overflow-hidden">
                <div class="iq-main-header d-flex align-items-center justify-content-between">
                  <h4 class="main-title">Continuar viendo</h4>
                  <a class="iq-view-all" href="/app/movies">
                    Ver todas
                  </a>
                </div>
                <div class="favorites-contens">
                  <ul class="favorites-slider list-inline  row p-0 mb-0 iq-rtl-direction">
                    {movies.map(movie => (
                      <li class="slide-item">
                        <div class="block-images position-relative">
                          <div class="img-box">
                            <img src={movie.portada} class="img-fluid" alt="" />
                          </div>
                          <div class="block-description">
                            <h6 class="iq-title">
                              <a href="show-details.html">{movie.titulo}</a>
                            </h6>
                            <div class="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                              <span class="text-white">
                                {movie.duracion} minutos
                              </span>
                            </div>
                            <div class="hover-buttons">
                              <a
                                href={`/app/movie/${movie.idpelicula}`}
                                role="button"
                                class="btn btn-hover iq-button">
                                <i
                                  class="fa fa-play mr-1"
                                  aria-hidden="true"></i>
                                Ver ahora
                              </a>
                            </div>
                          </div>
                          <div class="block-social-info">
                            <ul class="list-inline p-0 m-0 music-play-lists">
                              <li>
                                <span
                                  onClick={() =>
                                    addFavorite(
                                      profileData.idperfil,
                                      movie.idpelicula,
                                    )
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
