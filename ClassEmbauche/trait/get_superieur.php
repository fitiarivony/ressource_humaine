<?php 
include ('../Employe.php');
include ('../../connection.php');
header('Access-Control-Allow-Origin:http://localhost:3000');
echo json_encode(Employe::getSuperieur($_GET['idfonction'],$_GET['iddept']));
?>