const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const store = require('../components/users/store')
const response = require('../network/responses')


passport.serializeUser((usuario, done) => {
  done(null, usuario.codigo_usuario)
})

passport.deserializeUser((id, done) => {
  store
    .listUsers(`codigo_usuario = '${id}'`)
    .then(usuario => {
      done(false, usuario)
    })
    .catch(err => {
      done(err, {})
    })
})

passport.use(
  new LocalStrategy({ usernameField: 'user' }, (user, password, done)=> {

    store
      .listUsers(`codigo_usuario = '${user}'`)
      .then(usuario => {
        if (usuario == '') {
          return done(null, false, {
            message: `Este usuario: ${user} no esta registrado`,
          })
        } else {
          if (usuario[0].password == password) {


            return done(null, usuario)

            // if (usuario[0].Codigo_Empresa == empresa) {
            //   return done(null, usuario)
            // } else {
            //   return done(null, false, {
            //     message: `El usuario no esta registrado en esta empresa`,
            //   })
            // }
       
          } else {
            return done(null, false, {
              message: `message: La contraseña no es válida`,
            })
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  }),
)

exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  return response.error(
    req,
    res,
    'Tienes que hacer login para acceder a este recurso',
    401,
    'Tienes que hacer login para acceder a este recurso',
  )
}
