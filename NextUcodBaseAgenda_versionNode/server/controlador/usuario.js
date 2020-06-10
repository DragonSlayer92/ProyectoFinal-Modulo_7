
const Router = require('express').Router(),
      Usuario = require('../modelo/usuario')


  //Metodo obtener un Usuario de sistema 
  Router.get('/obtener_usuario', function(req, res) {
    let usuarioID = req.query._id || '';
    Usuario.findById(usuarioID, (err, usuario) => {
      if (err) {
        return res.status(500).send({message: 'Error al intentar obtener el usuario. (status:500)'})
      }else{
        if (!usuario) {
          return res.status(404).send({message: 'El usuario no existe en la base de datos. (status:404)'})
        }else{
          res.json(usuario)
        } 
      } 
    })
  })

  //Metodo iniciar sesión
  Router.post('/login', function(req, res) {
    let inEmail = req.body.email,
        inClave = req.body.clave,
        inSesion = req.session
    Usuario.find({email: inEmail}, function (err, usuario_encontradoPorMail) {
      if (err) {
        return res.status(500).send({message: 'Error al intentar obtener el usuario en el inicio de sesión. (status:500)'})
      }else{
        if(usuario_encontradoPorMail.length == 1){
          Usuario.find({email: inEmail, clave: inClave}, function (err, usuario_encontradoPorMailYClave) {
            if (err) {
              return res.status(500).send({message: 'Error al intentar obtener el usuario en el inicio de sesión. (status:500)'})
            }else{
              if(usuario_encontradoPorMailYClave.length == 1){ 
                inSesion.usuario = usuario_encontradoPorMailYClave[0]["email"]
                inSesion.id_usuario = usuario_encontradoPorMailYClave[0]["_id"]
                res.send('OK')
              }else{
                res.send("Clave incorrecta")
              }
            }
          })          
        }else{
          res.send("Usuario no registrado")
        }
      }
    });
  })

  //Metodo cerrar sesión
  Router.post('/logout', function(req, res) {
    req.session.destroy(function(err) {
      if (err) {
        return res.status(500).send({message: 'Error al intentar cerrar la sesión. (status:500)'})
      }else{
        req.session = null
        res.send('logout')
        res.end()
      }
    })
  })  

  Router.all('/', function(req, res) {
    return res.send({message: 'Error al intentar mostrar el recurso solicitado.'}).end()
  })


//Exportar el modulo
module.exports = Router