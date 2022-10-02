<?php 
include ('../Employe.php');
include('../../connection.php');
header('Access-Control-Allow-Origin:http://localhost:3000');

echo json_encode(Employe::assignercontrat(json_decode($_GET['information'],true)));
?>