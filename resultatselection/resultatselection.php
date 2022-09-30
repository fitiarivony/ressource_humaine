<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include ('../connection.php');

$sql="SELECT * from resultat_selection join candidat on resultat_selection.idcandidat=candidat.idcandidat  join recrutement on resultat_selection.idrecrutement=recrutement.idrecrutement where resultat_selection.idrecrutement='%s' and datelimite<current_timestamp";
$sql=sprintf($sql,$_GET['idrecrutement']);
// echo $sql;
$result=executeQuery($sql);
echo json_encode($result);

?>