<?php
include '../Question.php';
include '../File.php';
include '../Request.php';
include '../Connect.php';
include '../error/Error.class.php';
// $a=json_encode($_GET["q"]);
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');

$b=json_decode($_GET["q"]);
// echo "{\"question\":\""+$_POS+"\"}";
// // print_r($_POST);
// // echo $_POST["question"];
// // var_dump($_POST);
// // echo $b->idrecrutement;
$ilaiko=$b->question;
$valide=array();
foreach($ilaiko as $i){
    $temp=new Question($i->numero_question,$i->intitule_question,$i->type_question,$i->reponse_possible,$i->reponse_correct);
    // echo $temp->right();
    if($temp->right()){
        $valide[]=$temp;
    }
}

$finality=new Questions($valide,$b->recrutement);
$soratana=json_encode($finality);
$directory="Questions/";
if(!is_dir($directory)){
    mkdir($directory);
}
$file=$directory.$b->recrutement.".json";
File::write($file,"w",$soratana);
$r=new Request(Connection::connect("rhtovo","societe","mdp"));
$dd=new Erreur("Teste creer");
if(!$r->insert("test","idrecrutement,fichier","'".$b->recrutement."',"."'".$b->recrutement.".json"."'")){
    $dd=new Erreur("Votre teste n'a pas pu etre cree");
}

echo json_encode($dd);
?>