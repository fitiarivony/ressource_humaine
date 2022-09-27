<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');
include('../Administrateur.php');
include('../connection.php');
$decode=json_decode($_GET['essai'],true);
$admin=($decode["essai"]["identifiant"]);
$mdp=($decode["essai"]['mdp']);
$tab=array(
    "identifiant"=>$admin,
    "mdp"=>$mdp);
$result=Administrateur::logAdmin($tab);
// echo json_encode($result);
?>