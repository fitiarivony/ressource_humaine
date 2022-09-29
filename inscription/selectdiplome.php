<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include ('../connection.php');

$sql="SELECT * from diplome";


$result=executeQuery($sql);
echo json_encode($result);
?>