<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include('../Candidat.php');
$insertion=json_decode($_GET['infocandidat'],true);

echo print_r($insertion['info']);

Candidat::insererCandidat($insertion['info'],$insertion['idrecrutement']);
echo "success";
?>