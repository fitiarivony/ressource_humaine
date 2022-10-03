
<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include('../connection.php');
$sql="  select * from  afaka_selection join candidat on afaka_selection.idcandidat=candidat.idcandidat where idrecrutement='%s' and afaka_selection.idcandidat in (select idcandidat from reponsetestCandidat where note=0)";
$sql=sprintf($sql,$_GET['idrecrutement']);

echo json_encode(executeQuery($sql));
?>