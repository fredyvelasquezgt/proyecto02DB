import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import api from '../../api'
import { useSessionStorage } from '../../hooks/useSessionStorage'

export const MovieScreen = ({ match: { params } }) => {
  const { id } = params
  const [profileData] = useSessionStorage('profile', false)
  const [userData] = useSessionStorage('user', false)

  const [movie, setMovie] = useState({})

  const [ads, setAds] = useState([])

  useEffect(() => {
    const fetchAds = async () => {
      let data = await api.ads.list()
      setAds(data.body)
      console.log(data.body)
    }
    fetchAds()
  }, [])

  useEffect(() => {
    const fetchMovie = async () => {
      let dataMovie = await api.movies.list({
        filter: `idPelicula = '${id}'`,
      })

      let dataMovieState = await api.movies.addWatching({
        idperfil: profileData.idperfil,
        idpelicula: id,
      })

      setMovie(dataMovie.body[0] || {})
    }
    fetchMovie()
  }, [id, profileData.idperfil])

  const addFavorite = async (idperfil, idpelicula) => {
    await api.movies.addFavotite({
      idperfil,
      idpelicula,
    })
  }

  const [idInterval, setIdInterval] = useState()
  useEffect(() => {
    if (parseInt(userData.tipocuenta) === 1) {


      let id = setInterval(() => {
        let ad =  Math.floor(Math.random() * ads.length);
        Swal.fire({
          title: ads[ad].titulo,
          imageUrl: ads[ad].link,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
    }, 5000) // modificar

      setIdInterval(id)
    }
    return () => {
      clearInterval(idInterval)
    }
  }, [userData.tipocuenta])

  return (
    <>
      {/* Movie */}

      <div class="video-container iq-main-slider">
        <iframe
          width="1280"
          height="720"
          src={movie.linkpelicula}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"></iframe>
      </div>

      {/* Info */}
      <div class="main-content movi">
        <section class="movie-detail container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="trending-info g-border">
                <h1 class="trending-text big-title text-uppercase mt-0">
                  {movie.titulo}
                </h1>
                <ul class="p-0 list-inline d-flex align-items-center movie-content">
                  <li class="text-white">{movie.categoria}</li>
                </ul>
                <div class="d-flex align-items-center text-white text-detail">
                  <span class="badge badge-secondary p-3">
                    Duracion: {movie.duracion} minutos
                  </span>
                </div>

                <p class="trending-dec w-100 mb-0">{movie.descripcion}</p>
                <ul class="list-inline p-0 mt-4 share-icons music-play-lists">
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
          </div>
        </section>
      </div>
    </>
  )
}
