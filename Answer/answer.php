<?php
include '../error/Error.class.php';
include '../Answer.class.php';
include '../File.php';
include '../Request.php';
include '../Connect.php';

error_reporting(0);
header('Access-Control-Allow-Origin: http://localhost:3000');
$directory="data/";
if(!is_dir($directory)){
    mkdir($directory);
}
$a=json_decode($_GET["q"]);
$rs=new Answer($a->idcandidat,$a->answers,$a->recrutement);
$soratana=json_encode($rs);
//  [IDCAND][RECRUTEMENT].jon
$file=$directory.$a->idcandidat.$a->recrutement.".json";
File::write($file,"w",$soratana);
$r=new Request(Connection::connect("rhtovo","societe","mdp"));
$dd=new Erreur("Teste creer");
if(!$r->insert("reponsetestCandidat","idrecrutement,idcandidat,fichier","'".$a->recrutement."','".$a->idcandidat."','".$a->idcandidat.$a->recrutement.".json'")){
    
}
echo json_encode($dd);

?>