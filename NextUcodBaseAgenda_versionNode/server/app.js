
const 	express = require('express'),
		bodyParser = require('body-parser'),
		session = require('express-session'),
		RutaUsuarios = require('./controlador/usuario'),
		RutaCrearUsuarios = require('./controlador/crear_usuario'),
		RutaEventos = require('./controlador/evento'),
		app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', express.static(__dirname + '/../client'));


//Manejador de sesiones de usuarios
app.use(session({
	secret: 'admin',
	cookie: {maxAge: 72000000},
	resave: false,
	saveUninitialized: true
}));


//incluir los modulos del controlador
app.use('/usuarios', RutaUsuarios)
app.use('/usuarios', RutaCrearUsuarios)
app.use('/eventos', RutaEventos)


//Exportar el modulo
module.exports = app