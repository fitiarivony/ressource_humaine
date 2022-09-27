<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include ('../connection.php');
include ('../Statistiques.php');
$stats=Statistiques::get_statistiques($_GET['idrecrutement']);
echo json_encode($stats);
?>