<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include('../Champ.php');
include('../connection.php');
$insertion=json_decode($_GET['info'],true);

// echo print_r($insertion);
Champ::update_coefficient($insertion);
echo "success";
?>