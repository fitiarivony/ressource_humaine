<?php
include('../../connection.php');
include('../Employe.php');
header('Access-Control-Allow-Origin:http://localhost:3000');

$json=$_GET['information'];
$data = json_decode($json, true);
$class = new Employe();
foreach ($data as $key => $value) $class->{$key} = $value;
$class->avis_embauchage($_GET['idcandidat'],$_GET['idrecrutement']);
echo json_encode( array(
    "etat"=>true,
));
?>