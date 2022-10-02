<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include ('../connection.php');

$sql="SELECT*from champ where (nom='genre' or nom='diplome') and idrecrutement='%s'";
$sql=sprintf($sql,$_GET['idrecrutement']);

$result=executeQuery($sql);
echo json_encode($result);
?>