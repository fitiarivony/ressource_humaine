<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include ('../connection.php');

$sql="SELECT*from candidat join assignercandidature on candidat.idcandidat=assignercandidature.idcandidat  where candidat.idcandidat  in(select idcandidat from reponsechamp where noty is null) ;";
$sql=sprintf($sql,$_GET['idrecrutement']);

$result=executeQuery($sql);
echo json_encode($result);
?>