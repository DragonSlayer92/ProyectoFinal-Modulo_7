<?php
 	require('./conexionDB.php');
		
$con = new conexionBD();

$response['conexion'] = $con->initConexion($con->database);
if($response['conexion'] == 'OK') {

	$data['id'] = '"'.$_POST['id'].'"';
    $data['fecha_inicio'] = '"'.$_POST['start_date'].'"';
    $data['fecha_fin'] = '"'.$_POST['end_date'].'"';
    
    $data['hora_inicio'] = '"'.$_POST['start_hour'].'"';
	$data['hora_fin'] = '"'.$_POST['end_hour'].'"';


		if($data['id'] != 'undefined'){
						$resultado = $con->actualizarRegistro('eventos', $data, 'id ='.$data['id']); 
						$response['msg'] = 'OK';
		}else{
						$response['msg'] = "Error al actualizar el evento";
		}
		}else{
		    
		    $response['msg'] = "Error en la comunicacion con la Base de Datos";
		}
		
		echo json_encode($response);

	$con->cerrarConexion()


 ?>
