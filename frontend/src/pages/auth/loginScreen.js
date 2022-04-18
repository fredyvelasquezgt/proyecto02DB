import React, { useState } from 'react'
import Swal from 'sweetalert2'
import api from '../../api'
import { useForm } from '../../hooks/useForm'
import { useSessionStorage } from '../../hooks/useSessionStorage'

export const LoginScreen = () => {
  const [sessionState, setSessionState] = useSessionStorage('session', false)
  const [userData, setUserData] = useSessionStorage('user', false)

  const [values, handleInputChange, reset] = useForm({
    correo: '',
    clave: '',
  })
  const { correo, clave } = values
  const [intentos, setIntentos] = useState(0)

  const handleSubmit = async e => {
    e.preventDefault()

    let data = await api.users.login(values)

    if (data.error !== '') {
      setIntentos(prev => {
        Swal.fire(
          'Sus datos no son correctos',
          `intentos fallidos: ${prev + 1}`,
          'error',
        )
        return prev + 1
      })
    } else {
      if (data.body.length === 0) {
        setIntentos(prev => {
          Swal.fire(
            'Sus datos no son correctos',
            `intentos fallidos: ${prev + 1}`,
            'error',
          )
          return prev + 1
        })
      } else {
        setSessionState(true)
        setUserData(data.body)
        window.location.href = '/auth/profiles'
      }
    }
  }

  return (
    <>
      <section class="m-profile manage-p">
        <div class="container h-100">
          <div class="row align-items-center justify-content-center h-100">
            <div class="col-lg-12">
              <div class="sign-user_card">
                <div class="row">
                  <div class="col-lg-12 device-margin">
                    <div class="profile-from">
                      <h4 class="mb-3">Ingresar</h4>
                      <form class="mt-4" onSubmit={handleSubmit}>
                        <div class="form-group">
                          <label>Email</label>
                          <input
                            type="text"
                            class="form-control mb-0"
                            name="correo"
                            value={correo}
                            onChange={handleInputChange}
                            autocomplete="off"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            class="form-control date-input basicFlatpickr mb-0"
                            name="clave"
                            value={clave}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div class="d-flex">
                          <button type="submit" class="btn btn-hover">
                            Inresar
                          </button>
                          <a href="/" class="btn btn-link">
                            Regresar
                          </a>
                        </div>
                      </form>
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
