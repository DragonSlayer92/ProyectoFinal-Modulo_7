<?php
	require('conexionDB.php');

	$con = new conexionBD();

	$response['conexion'] = $con->initConexion($con->database);

	if ($response['conexion'] == 'OK'){

		$conexion = $con->getConexion();
		$insert = $conexion->prepare('INSERT INTO usuarios (email, nombre, password , fecha_nacimiento) VALUES (?,?,?,?)');
		$insert->bind_param("ssss", $email, $nombre, $password, $fecha_nacimiento);

		$d_password = "admin";
		$email = "admin@admin.com";
		$nombre = "Administrador";
		$password = password_hash($d_password, PASSWORD_DEFAULT);
		$fecha_nacimiento = "2020-03-16";
		$insert->execute();

		$email = 'prueba@prueba.com';
		$nombre = 'Prueba';
		$password = password_hash($d_password, PASSWORD_DEFAULT);
		$fecha_nacimiento = '2020-03-16';
		$insert->execute();

		$email = 'rodolfopuc@gmail.com';
		$nombre = 'Rodolfo Puc Chi';
		$password = password_hash($d_password, PASSWORD_DEFAULT);
		$fecha_nacimiento = '1992-11-01';
		$insert->execute();

		$response['resultado'] = "1";
		$response['msg']= 'Informaci&oacute;n de inicio:<br><br>';

		$getUsers = $con->consultar(['usuarios'],['*'],$condicion = "");

		while ($fila= $getUsers->fetch_assoc()) {
			$response['msg'].=$fila['email'];
			$response['msg'].='<br><br>';
		}
			$response['msg'].= 'contrase&ntilde;a: &nbsp;' .$d_password. '<br><br>';

		}else{
			$response['resultado'] == "0";
			$response['msg'] = 'No se pudo conectar a la base de datos';
		}

		echo json_encode($response);

 ?>
