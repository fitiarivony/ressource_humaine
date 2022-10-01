<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include('../Champ.php');
include('../connection.php');
$sql=" select*from recrutement where idrecrutement not in(select distinct(idrecrutement) from champ)";
echo json_encode(executeQuery($sql));
?>