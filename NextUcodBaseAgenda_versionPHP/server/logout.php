<?php
	session_start(); 
	
	if (isset($_SESSION['email'])) { 
		session_destroy(); 
		$response['msg'] = 'Redireccionando al index.html';
		header("refresh:3;url=../client/index.html");  /* Redireccionar al index.html*/
	}else{
		$response['msg'] = 'Sesion no iniciada'; 
		header("refresh:3;url=../client/index.html");  /* Redireccionar al index.html*/
	}
	echo json_encode($response); 

 ?>