<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
include_once './ReponseChamp.php';

$obj=json_decode($_GET['test'],true);

ReponseChamp::update($obj);
echo json_encode(array("etat" =>true));


?>