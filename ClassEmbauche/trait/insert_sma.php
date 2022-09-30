<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include('../../connection.php');
include('../Salaire_Min.php');
$json=$_GET['sm'];
$data = json_decode($json, true);
$class = new Salaire_Min();
foreach ($data as $key => $value) $class->{$key} = $value;
echo json_encode($class->insert());
?>