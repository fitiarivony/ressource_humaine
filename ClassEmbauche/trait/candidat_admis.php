<?php 
include ('../../Candidat.php');
header('Access-Control-Allow-Origin:http://localhost:3000');
echo json_encode(Candidat::listembauche($_GET['idrecrutement']));
?>