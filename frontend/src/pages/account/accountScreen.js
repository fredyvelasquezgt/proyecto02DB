import React, { useEffect, useState } from 'react'
import api from '../../api'
import Swal from 'sweetalert2'
import { useSessionStorage } from '../../hooks/useSessionStorage'

export const AccountScreen = () => {
  const [userData, setUserData] = useSessionStorage('user', false)
  const [profileData, setProfileData] = useSessionStorage('profile', false)

  const [values, setValues] = useState({
    tipocuenta: userData.tipocuenta,
    perfil1: 'Perfil 1',
    perfil2: 'Perfil 2',
    perfil3: 'Perfil 3',
    perfil4: 'Perfil 4',
    perfil5: 'Perfil 5',
    perfil6: 'Perfil 6',
    perfil7: 'Perfil 7',
    perfil8: 'Perfil 8',
  })

  const [idValues, setIdValues] = useState({})

  const {
    perfil1,
    perfil2,
    perfil3,
    perfil4,
    perfil5,
    perfil6,
    perfil7,
    perfil8,
  } = values

  useEffect(() => {
    const fetchProfiles = async () => {
      let dataProfiles = await api.users.listProfiles({
        filter: `idusuario = '${userData.idusuario}' order by idPerfil asc`,
      })

      console.log(dataProfiles.body)
      setValues(prev => ({
        ...prev,
        perfil1: dataProfiles.body[0].nombre,
        perfil2: dataProfiles.body[1].nombre,
        perfil3: dataProfiles.body[2].nombre,
        perfil4: dataProfiles.body[3].nombre,
        perfil5: dataProfiles.body[4].nombre,
        perfil6: dataProfiles.body[5].nombre,
        perfil7: dataProfiles.body[6].nombre,
        perfil8: dataProfiles.body[7].nombre,
      }))

      setIdValues({
        id1: dataProfiles.body[0].idperfil,
        id2: dataProfiles.body[1].idperfil,
        id3: dataProfiles.body[2].idperfil,
        id4: dataProfiles.body[3].idperfil,
        id5: dataProfiles.body[4].idperfil,
        id6: dataProfiles.body[5].idperfil,
        id7: dataProfiles.body[6].idperfil,
        id8: dataProfiles.body[7].idperfil,
      })
    }
    fetchProfiles()
  }, [userData.idusuario])

  const handleInputChange = e => {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async () => {
    console.log(values)
    if (parseInt(values.tipocuenta) === 1) {
      await api.users.updateProfile({
        id: idValues.id1,
        idUsuario: userData.idusuario,
        nombre: values.perfil1,
        estado: 1,
      })
      await api.users.updateProfile({
        id: idValues.id2,
        idUsuario: userData.idusuario,
        nombre: values.perfil2,
        estado: 0,
      })
      await api.users.updateProfile({
        id: idValues.id3,
        idUsuario: userData.idusuario,
        nombre: values.perfil3,
        estado: 0,
      })
      await api.users.updateProfile({
        id: idValues.id4,
        idUsuario: userData.idusuario,
        nombre: values.perfil4,
        estado: 0,
      })
      await api.users.updateProfile({
        id: idValues.id5,
        idUsuario: userData.idusuario,
        nombre: values.perfil5,
        estado: 0,
      })
      await api.users.updateProfile({
        id: idValues.id6,
        idUsuario: userData.idusuario,
        nombre: values.perfil6,
        estado: 0,
      })
      await api.users.updateProfile({
        id: idValues.id7,
        idUsuario: userData.idusuario,
        nombre: values.perfil7,
        estado: 0,
      })
      await api.users.updateProfile({
        id: idValues.id8,
        idUsuario: userData.idusuario,
        nombre: values.perfil8,
        estado: 0,
      })
    }
    if (parseInt(values.tipocuenta) === 2) {
      await api.users.updateProfile({
        id: idValues.id1,
        idUsuario: userData.idusuario,
        nombre: values.perfil1,
        estado: 1,
      })
      await api.users.updateProfile({
        id: idValues.id2,
        idUsuario: userData.idusuario,
        nombre: values.perfil2,
        estado: 1,
      })
      await api.users.updateProfile({
        id: idValues.id3,
        idUsuario: userData.idusuario,
        nombre: values.perfil3,
        estado: 1,
      })
      await api.users.updateProfile({
        id: idValues.id4,
        idUsuario: userData.idusuario,
        nombre: values.perfil4,
        estado: 1,
      })
      await api.users.updateProfile({
        id: idValues.id5,
        idUsuario: userData.idusuario,
        nombre: values.perfil5,
        estado: 0,
      })
      await api.users.updateProfile({
        id: idValues.id6,
        idUsuario: userData.idusuario,
        nombre: values.perfil6,
        estado: 0,
      })
      await api.users.updateProfile({
        id: idValues.id7,
        idUsuario: userData.idusuario,
        nombre: values.perfil7,
        estado: 0,
      })
      await api.users.updateProfile({
        id: idValues.id8,
        idUsuario: userData.idusuario,
        nombre: values.perfil8,
        estado: 0,
      })
    }
    if (parseInt(values.tipocuenta) === 3) {
      await api.users.updateProfile({
        id: idValues.id1,
        idUsuario: userData.idusuario,
        nombre: values.perfil1,
        estado: 1,
      })
      await api.users.updateProfile({
        id: idValues.id2,
        idUsuario: userData.idusuario,
        nombre: values.perfil2,
        estado: 1,
      })
      await api.users.updateProfile({
        id: idValues.id3,
        idUsuario: userData.idusuario,
        nombre: values.perfil3,
        estado: 1,
      })
      await api.users.updateProfile({
        id: idValues.id4,
        idUsuario: userData.idusuario,
        nombre: values.perfil4,
        estado: 1,
      })
      await api.users.updateProfile({
        id: idValues.id5,
        idUsuario: userData.idusuario,
        nombre: values.perfil5,
        estado: 1,
      })
      await api.users.updateProfile({
        id: idValues.id6,
        idUsuario: userData.idusuario,
        nombre: values.perfil6,
        estado: 1,
      })
      await api.users.updateProfile({
        id: idValues.id7,
        idUsuario: userData.idusuario,
        nombre: values.perfil7,
        estado: 1,
      })
      await api.users.updateProfile({
        id: idValues.id8,
        idUsuario: userData.idusuario,
        nombre: values.perfil8,
        estado: 1,
      })
    }

    await api.users.update({
      fields: `tipocuenta = '${values.tipocuenta}'`,
      filter: ` idusuario = '${userData.idusuario}'`,
    })

    setUserData({ ...userData, tipocuenta: values.tipocuenta })

    Swal.fire('Perfil actualizado correctamente', '', 'success')
  }

  const handleSignOut = async () => {
    await api.users.updateProfileState({
      fields: `activo = '1'`,
      filter: `idPerfil = '${profileData.idperfil}'`,
    })

    window.location.href = '/'
  }

  return (
    <>
      <section class="m-profile setting-wrapper">
        <div class="container">
          <h4 class="main-title mb-4">Configuraciones de la cuenta</h4>
          <div class="row">
            <div class="col-lg-12">
              <div class="sign-user_card">
                <h5 class="mb-3 pb-3 a-border">Datos personales</h5>
                <div class="row align-items-center justify-content-between mb-3">
                  <div class="col-md-8">
                    <span class="text-light font-size-13">Email</span>
                    <p class="mb-0">{userData.correo}</p>
                  </div>
                </div>
                <div class="row align-items-center justify-content-between mb-3">
                  <div class="col-md-8">
                    <span class="text-light font-size-13">Nombre</span>
                    <p class="mb-0">{userData.nombre}</p>
                  </div>
                </div>
                <div class="row align-items-center justify-content-between mb-3">
                  <div class="col-md-8">
                    <span class="text-light font-size-13">Perfil</span>
                    <p class="mb-0">{profileData.nombre}</p>
                  </div>
                </div>

                <h5 class="mb-3 mt-4 pb-3 a-border">Plan actual</h5>
                <div class="row justify-content-between mb-3">
                  <div class="col-md-8">
                    <select name="tipocuenta" onChange={handleInputChange}>
                      {parseInt(values.tipocuenta) === 1 ? (
                        <option value="1" selected>
                          Básico
                        </option>
                      ) : (
                        <option value="1">Básico</option>
                      )}
                      {parseInt(values.tipocuenta) === 2 ? (
                        <option value="2" selected>
                          Estandar
                        </option>
                      ) : (
                        <option value="2">Estandar</option>
                      )}
                      {parseInt(values.tipocuenta) === 3 ? (
                        <option value="3" selected>
                          Avánzado
                        </option>
                      ) : (
                        <option value="3">Avánzado</option>
                      )}
                    </select>
                  </div>
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
                  {(parseInt(values.tipocuenta) === 2 ||
                    parseInt(values.tipocuenta) === 3) && (
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

                  {parseInt(values.tipocuenta) === 3 && (
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
              </div>
            </div>
          </div>
          <div class="hover-buttons">
            <button onClick={handleSubmit} class="btn btn-hover iq-button ">
              Guardar
            </button>
                  
            <button onClick={handleSignOut} class="btn btn-hover iq-button ">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
