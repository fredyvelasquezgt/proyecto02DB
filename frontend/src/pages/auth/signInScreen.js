import React, { useState } from 'react'
import api from '../../api'
import Swal from 'sweetalert2'
import { useForm } from '../../hooks/useForm'
import { useSessionStorage } from '../../hooks/useSessionStorage'

export const SignInScreen = () => {
  const [values, handleInputChange, reset] = useForm({
    nombre: '',
    correo: '',
    clave: '',
    tipoCuenta: '1',

    perfil1: 'Perfil 1',
    perfil2: 'Perfil 2',
    perfil3: 'Perfil 3',
    perfil4: 'Perfil 4',
    perfil5: 'Perfil 5',
    perfil6: 'Perfil 6',
    perfil7: 'Perfil 7',
    perfil8: 'Perfil 8',
  })

  const {
    nombre,
    correo,
    clave,
    tipoCuenta,
    perfil1,
    perfil2,
    perfil3,
    perfil4,
    perfil5,
    perfil6,
    perfil7,
    perfil8,
  } = values

 const [sessionState, setSessionState] = useSessionStorage('session',false)
 const [userData, setUserData] = useSessionStorage('user',false)



  const handleSumbit = async e => {
    e.preventDefault()
    let data = await api.users.add({
      nombre,
      correo,
      clave,
      tipoCuenta,
    })

    if (data.error !== '') {
      Swal.fire('No se pudo crear el usuario', data.error.detail, 'error')
    } else {
    
      if(tipoCuenta === "1") {

      await api.users.addProfile({ idUsuario: data.body, nombre: perfil1, estado: 1 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil2, estado: 0 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil3, estado: 0 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil4, estado: 0 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil5, estado: 0 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil6, estado: 0 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil7, estado: 0 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil8, estado: 0 })
      }
      if(tipoCuenta === "2") {

      await api.users.addProfile({ idUsuario: data.body, nombre: perfil1, estado: 1 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil2, estado: 1 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil3, estado: 1 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil4, estado: 1 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil5, estado: 0 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil6, estado: 0 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil7, estado: 0 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil8, estado: 0 })
      }
      if(tipoCuenta === "3") {

      await api.users.addProfile({ idUsuario: data.body, nombre: perfil1, estado: 1 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil2, estado: 1 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil3, estado: 1 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil4, estado: 1 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil5, estado: 1 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil6, estado: 1 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil7, estado: 1 })
      await api.users.addProfile({ idUsuario: data.body, nombre: perfil8, estado: 1 })
      }

      Swal.fire('Perfil creado correctamente', '', 'success').then(v => {
        setSessionState(true)
        setUserData({...values, idusuario: data.body})
        window.location.href = '/auth/profiles'
      })
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
                      <h4 class="mb-3">Crear perfil</h4>
                      <form onSubmit={handleSumbit} class="mt-4">
                        <div class="form-group">
                          <label>Nombre</label>
                          <input
                            type="text"
                            class="form-control mb-0"
                            name="nombre"
                            onChange={handleInputChange}
                            value={nombre}
                            autocomplete="off"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            class="form-control mb-0"
                            name="correo"
                            onChange={handleInputChange}
                            value={correo}
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
                            onChange={handleInputChange}
                            value={clave}
                            required
                          />
                        </div>

                        <div class="form-group">
                          <label>Tipo suscripción  </label>

                          <select
                            name="tipoCuenta"
                            onChange={handleInputChange}
                            class="mb-0">
                            <option value="1">Básica</option>
                            <option value="2">Estándar</option>
                            <option value="3">Avanzada</option>
                          </select>
                        </div>

                        <h5 class="mb-3 pb-3 mt-4 a-border">Perfiles</h5>
                        <div class="row">
                          <div class="col-4 setting">
                            <label htmlFor="">Perfil 1</label>
                            <input
                              type="text"
                              value={perfil1}
                              name="perfil1"
                              onChange={handleInputChange}
                            />
                          </div>

                          {(tipoCuenta === '2' || tipoCuenta === '3') && (
                            <>
                              <div class="col-4 setting">
                                <label htmlFor="">Perfil 2</label>
                                <input
                                  type="text"
                                  value={perfil2}
                                  name="perfil2"
                                  onChange={handleInputChange}
                                />
                              </div>

                              <div class="col-4 setting">
                                <label htmlFor="">Perfil 3</label>
                                <input
                                  type="text"
                                  value={perfil3}
                                  name="perfil3"
                                  onChange={handleInputChange}
                                />
                              </div>
                              <div class="col-4 setting">
                                <label htmlFor="">Perfil 4</label>
                                <input
                                  type="text"
                                  value={perfil4}
                                  name="perfil4"
                                  onChange={handleInputChange}
                                />
                              </div>
                             
                            </>
                          )}

                          {tipoCuenta === '3' && (
                            <>
                             <div class="col-4 setting">
                                <label htmlFor="">Perfil 5</label>
                                <input
                                  type="text"
                                  value={perfil5}
                                  name="perfil5"
                                  onChange={handleInputChange}
                                />
                              </div>
                              <div class="col-4 setting">
                                <label htmlFor="">Perfil 6</label>
                                <input
                                  type="text"
                                  value={perfil6}
                                  name="perfil6"
                                  onChange={handleInputChange}
                                />
                              </div>
                              <div class="col-4 setting">
                                <label htmlFor="">Perfil 7</label>
                                <input
                                  type="text"
                                  value={perfil7}
                                  name="perfil7"
                                  onChange={handleInputChange}
                                />
                              </div>
                              <div class="col-4 setting">
                                <label htmlFor="">Perfil 8</label>
                                <input
                                  type="text"
                                  value={perfil8}
                                  name="perfil8"
                                  onChange={handleInputChange}
                                />
                              </div>
                            </>
                          )}
                        </div>
                        <br />
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
