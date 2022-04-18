import React from 'react'

export const Pricing = () => {
  return (
    <>
      <main id="main" class="site-main">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-12 col-sm-12"
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                marginBottom: '50px',
              }}>
              <a href="/auth/login" class="btn btn-hover iq-button">
                Ingresar sesión
              </a>
              <a href="/auth/signin" class="btn btn-hover iq-button">
                Registrarse
              </a>
            </div>
            <div class="col-lg-12 col-sm-12">
              <div class="iq-pricing-card">
                <div class="table-responsive iq-pricing pt-2">
                  <table id="my-table" class="table" data-active="premium">
                    <thead>
                      <tr>
                        <th class="text-center iq-price-head"></th>
                        <th class="text-center iq-price-head free">
                          <div class="iq-price-box">
                            <h3 class="iq-price-rate text-white">
                              Q0 <small> / Gratis</small>
                            </h3>
                            <span class="type">Plan Básico</span>
                          </div>
                        </th>
                        <th class="text-center iq-price-head premium">
                          <div class="iq-price-box active">
                            <h3 class="iq-price-rate text-white">
                              Q9.99<small> / Pagada</small>
                            </h3>
                            <span class="type">Plan Estándar</span>
                          </div>
                        </th>
                        <th class="text-center iq-price-head basic">
                          <div class="iq-price-box">
                            <h3 class="iq-price-rate text-white">
                              Q19.99<small> / Pagada</small>
                            </h3>
                            <span class="type">Avanzada</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody style={{ color: '#ffff' }}>
                      <tr>
                        <th class="text-center" scope="row">
                          Acceso a todo nuestro contenido
                        </th>
                        <td class="text-center iq-child-cell active">
                          <i class="fa fa-check-circle"></i>
                        </td>
                        <td class="text-center iq-child-cell active">
                          <i class="fa fa-check-circle"></i>
                        </td>
                        <td class="text-center iq-child-cell active">
                          <i class="fa fa-check-circle"></i>
                        </td>
                      </tr>
                      <tr>
                        <th class="text-center" scope="row">
                          Hasta 4 perfiles
                        </th>
                        <td class="text-center iq-child-cell">
                          <i class="fa fa-times-circle"></i>
                        </td>
                        <td class="text-center iq-child-cell active">
                          <i class="fa fa-check-circle"></i>
                        </td>
                        <td class="text-center iq-child-cell active">
                          <i class="fa fa-check-circle"></i>
                        </td>
                      </tr>
                      <tr>
                        <th class="text-center" scope="row">
                          Hasta 8 perfiles
                        </th>
                        <td class="text-center iq-child-cell">
                          <i class="fa fa-times-circle"></i>
                        </td>
                        <td class="text-center iq-child-cell">
                          <i class="fa fa-times-circle"></i>
                        </td>
                        <td class="text-center iq-child-cell active">
                          <i class="fa fa-check-circle"></i>
                        </td>
                      </tr>
                      <tr>
                        <th class="text-center" scope="row">
                          Anuncios
                        </th>

                        <td class="text-center iq-child-cell active">
                          <i class="fa fa-check-circle"></i>
                        </td>
                        <td class="text-center iq-child-cell">
                          <i class="fa fa-times-circle"></i>
                        </td>
                        <td class="text-center iq-child-cell">
                          <i class="fa fa-check-circle"></i>
                        </td>
                      </tr>
                      <tr>
                        <th class="text-center iq-price-footer"></th>
                        <td class="text-center iq-price-footer">
                          <div
                            class="align-items-center r-mb-23"
                            data-animation-in="fadeInUp"
                            data-delay-in="1.3">
                            <a
                              href="sign-up.html"
                              class="btn btn-hover iq-button">
                              Suscribirse
                            </a>
                          </div>
                        </td>
                        <td class="text-center iq-price-footer active">
                          <div
                            class="align-items-center r-mb-23"
                            data-animation-in="fadeInUp"
                            data-delay-in="1.3">
                            <a
                              href="sign-up.html"
                              class="btn btn-hover iq-button">
                              Suscribirse
                            </a>
                          </div>
                        </td>
                        <td class="text-center iq-price-footer">
                          <div
                            class="align-items-center r-mb-23"
                            data-animation-in="fadeInUp"
                            data-delay-in="1.3">
                            <a
                              href="sign-up.html"
                              class="btn btn-hover iq-button">
                              Suscribirse
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
