<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include('connection.php');
include('ReponseChamp.php');
$insertion=json_decode($_GET['info'],true);

// echo print_r($insertion);
ReponseChamp::update($insertion);
echo "success";
?>