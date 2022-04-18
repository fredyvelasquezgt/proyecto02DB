import React from 'react'

import angel from '../../images/auth/angel.jpg'
import fredy from '../../images/auth/fredy.jpg'

export const Team = () => {
  return (
    <>
      <main id="main" class="site-main">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 mb-sm-4">
              <div class="text-center iq-title-box iq-title-default">
                <h2 class="iq-title text-capitalize">Nostros</h2>
                <p class="iq-title-desc">Somos el equipo detras de UVG Play</p>
              </div>
            </div>
          </div>
        </div>

        <div class="container-md container-fluid">
          <div class="row about-us-detail">
            <div class="col-md-3 mb-4"></div>
            <div class="col-md-3 mb-4">
              <div class="image-box">
                <img
                  width="265"
                  height="345"
                  src={angel}
                  class="img-fluid attachment-large size-large"
                  alt=""
                  loading="lazy"
                />
              </div>

              <div class="icon-box-content">
                <div class="widget-container">
                  <p class="heading-title size-default">Fredy Velásquez</p>
                </div>
                <div class="widget-container">
                  <h4 class="heading-title size-default">Ing. CCTI - 201011</h4>
                </div>
              </div>
            </div>

            <div class="col-md-3 mb-4">
              <div class="image-box">
                <img
                  width="265"
                  height="345"
                  src={fredy}
                  class="img-fluid attachment-large size-large"
                  alt=""
                  loading="lazy"
                />
              </div>

              <div class="icon-box-content">
                <div class="widget-container">
                  <p class="heading-title size-default">Angel Higueros</p>
                </div>
                <div class="widget-container">
                  <h4 class="heading-title size-default">Ing. CCTI - 20460</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
