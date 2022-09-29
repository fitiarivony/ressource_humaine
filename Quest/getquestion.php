<?php
include '../error/Error.class.php';
header('Access-Control-Allow-Origin: http://localhost:3000');
$question=$_GET["rc"];
$dir="Questions/";
$aller=$dir.$question.".json";
error_reporting(0);
if(!file_get_contents($aller)){
    $cr=new Erreur("Le teste n'a pas ete trouve");
    $js=json_encode($cr);
    echo $js;
}else{
    
    $contenu=file_get_contents($aller);
    $zv=json_encode($contenu);
    echo json_decode($zv);
}
?>