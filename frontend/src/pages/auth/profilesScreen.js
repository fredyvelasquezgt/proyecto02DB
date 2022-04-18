import React, { useEffect, useState } from 'react'
import api from '../../api'
import { useSessionStorage } from '../../hooks/useSessionStorage'

export const ProfilesScreen = () => {
  const [sessionState, setSessionState] = useSessionStorage('session', false)
  const [userData, setUserData] = useSessionStorage('user', false)
  const [profileData, setProfileData] = useSessionStorage('profile', false)


  const handleSubmit = async p => {
    setSessionState(true)
    setProfileData(p)

    await api.users.updateProfileState({
      fields: `activo = '2'`, 
      filter: `idPerfil = '${p.idperfil}'`
    })


    window.location.href = '/app'
  }

  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      let data = await api.users.listProfiles({
        filter: `idusuario = '${userData.idusuario}' and estado = '1' order by idPerfil asc`,
      })

      setProfiles(data.body)
    }
    fetchProfiles()
  }, [userData.idusuario])

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
                      <h4 class="mb-3">Seleccione su perfil</h4>

                      {/* Perfiles */}

                      {profiles.map(item => (
                        <div key={item.idPerfil} class="form-group">
                          <label>{item.nombre}</label>  -   
                          <button
                            disabled={parseInt(item.activo) === 2 ? true : false}
                            onClick={() => handleSubmit(item)}
                            className="btn btn-success">
                            {parseInt(item.activo) === 2 ? 'Perfil en linea' : 'Ingresar'}
                          </button>
                        </div>
                      ))}

                      {/* Fin Perfiles */}

                      <div class="d-flex">
                        <a href="/" class="btn btn-link">
                          Regresar
                        </a>
                      </div>
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
