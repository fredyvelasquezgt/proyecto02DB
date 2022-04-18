const express = require('express')
const session = require('express-session')
const app = express()
const server = require('http').Server(app)
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path')

//Configuraciones adicionales
const config = require('./src/config')
const router = require('./network/routes')

// habilitar CORS para aceptar consultas de otros domiminios
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost') //Frontend url
  next()
})

// Formatear peticiones
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Manejo de sesíones
app.use(
  session({
    secret: 'SECRET KEY SYSTEMTEC API',
    resave: true,
    saveUninitialized: true,
  }),
)

app.use(passport.initialize())
app.use(passport.session())

// Configurar proxy
app.set('trust proxy', true)

// Manejo de rutas
router(app)

//Archivos staticos
app.use(express.static(path.join(__dirname, 'images')))
// app.use(config.publicRoute, express.static('public'))
// app.use(config.publicRoute, express.static('images'))

app.use(express.static(path.join(__dirname, 'build')))
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const multer = require('multer')

// Manejo de imagenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, `${req.params.id}.jpg`)
  },
})

const upload = multer({ storage: storage })
app.post('/image/:id/', upload.single('file'), function (req, res) {
  res.json({})
})


//Iniciar servidor
server.listen(config.port, () => {
  console.log(`Listening to ${config.host}:${config.port}`)
})
