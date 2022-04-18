import React, { useEffect, useState } from 'react'
import api from '../../api'

export const Featured = () => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const fetchMovie = async () => {
      let id = Math.floor(Math.random() * 10)

      let dataMovie = await api.movies.list({
        filter: `idPelicula = '${id}'`,
      })

      setMovie(dataMovie.body[0] || {})
    }
    fetchMovie()
  }, [])

  return (
    <>
      <section id="home" class="iq-main-slider p-0 iq-rtl-direction" style={{ backgroundImage: `url(${movie.portada}) !important` }}>
        <div id="home-slider" class="slider m-0 p-0" style={{ backgroundImage: `url(${movie.portada}) !important` }}>
          <div class="slide slick-bg s-bg-1" style={{ backgroundImage: `url(${movie.portada}) !important` }}>
            <div class="container-fluid position-relative h-100">
              <div class="slider-inner h-100">
                <div class="row align-items-center  iq-ltr-direction h-100 ">
                  <div class="col-xl-6 col-lg-12 col-md-12">
                    <h1
                      class="slider-text big-title title text-uppercase"
                      data-animation-in="fadeInLeft"
                      data-delay-in="0.6">
                      {movie.titulo || 'Nuevos estrenos'}
                    </h1>
                    <div
                      class="d-flex flex-wrap align-items-center fadeInLeft animated"
                      data-animation-in="fadeInLeft"
                      style={{ opacity: '1' }}>
                      <p data-animation-in="fadeInUp" data-delay-in="1.2">
                        {movie.descripcion}
                      </p>
                    </div>

                    <div
                      class="trending-list"
                      data-wp_object-in="fadeInUp"
                      data-delay-in="1.2">
                      <div class="text-primary title starring">
                        Duración:{' '}
                        <span class="text-body">{movie.duracion} minutos</span>
                      </div>
                      <div class="text-primary title genres">
                        Genero: <span class="text-body">{movie.categoria}</span>
                      </div>
                      <div class="text-primary title tag">
                        Categoria:{' '}
                        <span class="text-body">{movie.categoria}</span>
                      </div>
                    </div>
                    <div
                      class="d-flex align-items-center r-mb-23"
                      data-animation-in="fadeInUp"
                      data-delay-in="1.2">
                      <a
                        href={`/app/movie/${movie.idpelicula || 1}`}
                        class="btn btn-hover iq-button">
                        <i class="fa fa-play mr-2" aria-hidden="true"></i>Ver
                        ahora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
