<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include('../../connection.php');
include('../Employe.php');
$employe = $_GET['idemploye'];
$class = new Employe();
$class->idemploye = $employe;
$class->affilier_cnaps();

?>