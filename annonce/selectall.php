<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include('../Recrutement.php');
include('../connection.php');
$result=Recrutement::select_annonce();
echo json_encode($result);
?>