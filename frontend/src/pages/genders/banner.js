import React from 'react'
import bgImage from '../../images/auth/01.jpg'

export const Banner = () => {
  return (
    <>
      <div
        class="iq-breadcrumb-one  iq-bg-over iq-over-dark-50"
        style={{ backgroundImage: `url(${bgImage})` }}>
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-sm-12">
              <nav
                aria-label="breadcrumb"
                class="text-center iq-breadcrumb-two">
                <h2 class="title">Generos</h2>
                <ol class="breadcrumb main-bg">
                  <li class="breadcrumb-item active">
                    La mejor plataforma de streaming
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
