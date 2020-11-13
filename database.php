<?php

//CREDIT TO PROFESSOR TODD SPROUL FOR DATABASE REQUIREMENT

$mysqli = new mysqli('localhost', 'client', 'Client_Password_1', 'api_keys');

if($mysqli->connect_errno) {
	printf("Connection Failed: %s\n", $mysqli->connect_error);
	exit;
}

?>