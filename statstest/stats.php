<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include ('../connection.php');
include ('../Statistiques.php');
$stats=StatsTest::statsTest($_GET['idrecrutement']);
echo json_encode($stats);
?>