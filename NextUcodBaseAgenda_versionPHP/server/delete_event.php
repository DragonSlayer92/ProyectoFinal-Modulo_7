<?php
	require('conexionDB.php');

	$con = new conexionBD();
	$response['conexion'] = $con->initConexion($con->database);
	
	if ($response['conexion'] == 'OK') {
		if ($con->eliminarRegistro('eventos', 'id='.$_POST['id'])) {
			$response['msg'] = 'OK';
		}else{
			$response['msg'] = 'Error al intentar eliminar el registro';
		}
	}else{
			$response['msg'] = "Error en la comunicacion con la base de datos";
		}
	echo json_encode($response)

 ?>
