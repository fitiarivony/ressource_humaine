<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include('../../connection.php');
include('../Employe.php');
$employe =new Employe();
$employe->idemploye="EM9";
$employe->affilier_cnaps();

?>