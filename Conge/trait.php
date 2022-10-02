<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include ('Conge.php');
$liste=new EmployeList();
echo $liste->comptagecongeTable();
?>