import React, { useEffect } from 'react'
import { useSessionStorage } from '../../hooks/useSessionStorage'

export const Menu = () => {
  const [sessionState] = useSessionStorage('session', false)
  const [profileData] = useSessionStorage('profile', false)

  useEffect(() => {
    if (!sessionState) {
      window.location.href = '/'
    }
  }, [sessionState])

  return (
    <>
      <header id="main-header">
        <div class="main-header">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <nav class="navbar navbar-expand-lg navbar-light p-0">
                  <a class="navbar-brand" href="/app">
                    <h3>UVG Play</h3>
                  </a>

                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <div class="menu-main-menu-container">
                      <ul id="top-menu" class="navbar-nav ml-auto">
                        <li class="menu-item">
                          <a href="/app">Inicio</a>
                        </li>
                        <li class="menu-item">
                          <a href="/app/categories">Categorias</a>
                        </li>
                        <li class="menu-item">
                          <a href="/app/genders">Generos</a>
                        </li>
                        <li class="menu-item">
                          <a href="/app/movies">Peliculas</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="navbar-right menu-right">
                    <ul class="d-flex align-items-center list-inline m-0">
                      <li class="nav-item nav-icon">
                        <a href="/app/account">
                          <span>{profileData.nombre}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
