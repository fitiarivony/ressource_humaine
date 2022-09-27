<?php
include '../File.php';
include 'Candidat.class.php';
include '../Request.php';
include '../Connect.php';
include '../error/Error.class.php';
header('Access-Control-Allow-Origin: http://localhost:3000');
// print_r($_POST);
// echo "{\"s\":".$_POST["q"]."}";
// File::write("suivi.txt","w",$_GET["q"]);
//  echo $_GET["q"];
$re=json_decode($_GET["q"]);
$candidat=new Candidat();
$candidat->email=$re->email;
$candidat->mdp=$re->password;
$r=new Request(Connection::connect("rhtovo","societe","mdp"));
$ta=$r->get($candidat,"candidat","*","email='".$candidat->email."' and mdp='".$candidat->mdp."'");
$c=((count($ta)>0)?$ta[0]:new Erreur("Invalid connection"));
$json=json_encode($c);
echo $json;
?>