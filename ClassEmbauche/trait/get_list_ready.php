<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include ('../../connection.php');
include ('../Salaire_Min.php');
echo json_encode(Salaire_Min::efa_inserer());
?>