<?php
include_once 'Connect.php';
include_once 'Request.php';
class Matiere{
    public $idmatiere;
    public $ue;
    public $intitule;
    public $semestre;
    public $credits;
}

$a=new Matiere();
$r=new Request(Connection::connect("itu","orlando","root"));
$liste=$r->get($a,"matiere","*","credits=6");
// print_r($liste);
// (
//     [idmatiere] => MT5
//     [ue] => INF405
//     [intitule] => Design Pattern
//     [semestre] => 1
//     [credits] => 6
// )
$a->idmatiere='MT5';
$a->ue='INF405';
$a->intitule='INF';
$a->semestre=1;
$a->credits=6;

$values="'INF412','INF',1,6";
$field="ue,intitule,semestre,credits";
// $r->insert("matiere",$field,$values);
$ab=array(
    "semestre" => 3,
    "credits" => 12
  
);

// $ct=0;
// $alava=count($ab);
// foreach($ab as $key => $val){
//     echo $key." ".$val." ".$ct.(($ct==$alava-1)?"":",").PHP_EOL;
//     $ct++;
// }
$r->update("matiere",$ab,"idmatiere = 'MT9'");
