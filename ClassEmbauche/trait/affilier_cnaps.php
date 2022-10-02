<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include('../../connection.php');
include('../Employe.php');
$json=$_GET['sm'];
$data = json_decode($json, true);
$class = new Employe();
foreach ($data as $key => $value) $class->{$key} = $value;
$class->affilier_cnaps();

?>