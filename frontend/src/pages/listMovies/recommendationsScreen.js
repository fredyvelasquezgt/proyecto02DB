import React from 'react'

import img from '../../images/dashboard/01.jpg'

export const RecommendationsScreen = () => {
  return (
    <>
      <div class="favorites-contens" style={{ margin: '30px' }}>
        {/* Search input */}

        <h3>Peliculas recomendadas</h3>
        <hr />
        <input type="text" placeholder="Buscar pelicula ..." />
        <br />
        <br />

        {/* Movies list */}
        <ul class="favorites-slider list-inline  row p-0 mb-0 iq-rtl-direction">
          {[1, 2, 3, 4, 4, 6, 7, 8, 9, 10, 11, 12].map(item => (
            <li class="slide-item" style={{ marginBottom: '30px' }}>
              <div class="block-images position-relative">
                <div class="img-box">
                  <img src={img} class="img-fluid" alt="" />
                </div>
                <div class="block-description">
                  <h6 class="iq-title">
                    <a href="show-details.html">Nombre pelicula</a>
                  </h6>
                  <div class="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                    <span class="text-white">120 minutos</span>
                  </div>
                  <div class="hover-buttons">
                    <a
                      href="movie-details.html"
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
                      <span>
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
