<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include('../Champ.php');
include('../connection.php');
$result=Champ::select_all($_GET['idrecrutement']);
echo json_encode($result);
?>