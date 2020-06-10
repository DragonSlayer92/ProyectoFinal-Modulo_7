
const Router = require('express').Router(),
      Evento = require('../modelo/evento')


  //Obtener todos los eventos del sistema 
  Router.get('/obtener_eventos', function(req, res) {
    req.session.reload(function(err) {
      if(err){
        res.send('logout')
        res.end()
      }else{
        sesionDeUsuario = req.session.id_usuario
        Evento.find({id_usuario: sesionDeUsuario}, (err, eventos) => {
          if (err) {
            return res.status(500).send({message: 'Error al intentar obtener los eventos. (status:500)'})
          }else{
            if (!eventos) {
              return res.status(404).send({message: 'No exiten eventos en la base de datos. (status:404)'})
            }else{
              res.json(eventos)
            } 
          } 
        })
      }
    })
  })

  //Insertar nuevo evento en el sistema 
  Router.post('/insertar_evento', function(req, res) {
    req.session.reload(function(err) {
      if(err){
        res.send('logout')
        res.end()
      }else{
        let nuevoEvento = new Evento()
        nuevoEvento.id_usuario = req.session.id_usuario
        nuevoEvento.title = req.body.title
        nuevoEvento.start = req.body.start
        nuevoEvento.end = req.body.end
        nuevoEvento.save((err) => {
            return res.status(200).send({message: 'El evento ha sido insertado correctamente'})    
        })
      }
    })
  })

  //Actualizar evento del sistema 
  Router.post('/actualizar_evento/:_id&:start&:end', function(req, res) { 
    req.session.reload(function(err) {
      if(err){
        console.log(err) 
        res.send("logout") 
      }else{
        Evento.findOne({_id:req.params._id}).exec((error, result) => { 
          let id    = req.params._id, 
          start = req.params.start, 
          end   = req.params.end 
          if (error){ 
            res.send(error) 
          }else{
            Evento.update({_id: id}, {start:start, end:end}, (error, result) => {  
              if (error){ 
                res.send(error )
              }else{
                res.send("El evento ha sido actualizado correctamente") 
              }
            })
          }
        })
      }
    })
  })
 

  //Eliminar evento del sistema 
  Router.post('/eliminar_evento/:_id', function(req, res) {
    let id = req.params._id 
    req.session.reload(function(err) {
      if(err){
        console.log(err) 
        res.send("logout") 
      }else{
        Evento.remove({_id: id}, function(error) {
          if(error) {
            console.log(error) 
            res.status(500)
            res.json(error)
          }
          res.send("Evento eliminado correctamente")
        })
      }
    })
  })

  Router.all('/', function(req, res) {
    return res.send({message: 'Error al intentar mostrar el recurso solicitado.'}).end()
  })


//Exportar el modulo
module.exports = Router