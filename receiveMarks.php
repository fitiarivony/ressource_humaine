<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
include_once './ReponseChamp.php';
echo $_GET['test'];

$obj=json_decode($_GET['test'],true);
print_r($obj);
ReponseChamp::update($obj);



?>