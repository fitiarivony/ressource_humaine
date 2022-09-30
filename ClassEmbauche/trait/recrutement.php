<?php 
include ('../../Recrutement.php');
include('../../connection.php');
header('Access-Control-Allow-Origin:http://localhost:3000');

echo json_encode(Recrutement::get_recrutement_done());
?>