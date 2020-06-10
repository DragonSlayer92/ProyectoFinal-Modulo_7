
const express = require('express'),
		mongoose = require('mongoose'),
		app = require('./app'),
		port = process.env.PORT || 3000


//Conexión con el servidor & Bases de Datos
mongoose.connect('mongodb://localhost:27017/agendadb', {useMongoClient: true}, (err, res) => {
	if (err) return console.log('Error en la conexión con la base de datos '+err)
	
	console.log('Conexión establecida con la base de datos -agendadb-')

	//const Server = http.createServer(app)
	app.listen(port, function() {
  		console.log('Servidor corriendo en http://localhost:'+port)
	})
})
