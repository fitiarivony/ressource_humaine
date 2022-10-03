<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include('../connection.php');
$sql="  select recrutement.* from resultat_selection join candidat on resultat_selection.idcandidat=candidat.idcandidat join recrutement on resultat_selection.idrecrutement=recrutement.idrecrutement  where candidat.idcandidat='%s';";
$sql=sprintf($sql,$_GET['idcandidat']);
echo json_encode(executeQuery($sql));
?>