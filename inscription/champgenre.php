<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include ('../connection.php');

$sql="SELECT * from champ where idchamp!='CH1' and idchamp!='CH4' and idrecrutement='%s'";
$sql=sprintf($sql,$_GET['idrecrutement']);

$result=executeQuery($sql);
echo json_encode($result);

?>