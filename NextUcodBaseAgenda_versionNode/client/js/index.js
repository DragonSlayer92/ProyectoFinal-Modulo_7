
//Funcion para crear Usuarios del sistema en el caso de que No existan
function verificarExistenciaDeUsuarios() {
    $.ajax({
        url: '/usuarios/buscar_y_verificar_usuarios',
        method: 'GET',
        data: {},
        success: function(res) {
            mensaje = "";
            for (var i=0; i<res.length; i++) {
                mensaje += '<small>Usuario: '+res[i].email+' - Clave: '+res[i].clave+'</small><br>'; 
            }
            $('#mensajeUsuarios').html(mensaje);
        }
    })
}

//Funcion para validar inicio de sesión
function validarUsuario() {
    var emailDeUsuario = $('#user');
    var claveDeUsuario = $('#pass');
    if (emailDeUsuario.val() != "" && claveDeUsuario.val() != "") {
        $.ajax({
            url: '/usuarios/login',
            method: 'POST',
            data: {
                email: emailDeUsuario.val(),
                clave: claveDeUsuario.val()
            },
            success: function(res) {
                mostrarMensaje(res);
                if (res == "OK") {
                    window.location.href = "http://localhost:3000/main.html";
                }
            }
        }) 
    } else {
        alert("Complete todos los campos");
    }
}

function mostrarMensaje(msj){
    $('#mensajeSesion').html(msj);
}