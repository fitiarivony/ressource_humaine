<?php 
//include_once
header('Access-Control-Allow-Origin: http://localhost:3000');
include_once './APPLICATION_PHP/baseconf.php';

//function
function formatDaty($daty){
    return str_replace("T"," ",$daty);
}

// test
$file=fopen("file.txt","a+");
$listeRdv=$_GET["test"];
$rdvs=json_decode($listeRdv, true);
$field="daty,noty,idcandidat,bureau,idrecrutement";
for($i=0;$i<count($rdvs["rdvs"]);$i++){
    $values="'".formatDaty($rdvs["rdvs"][$i]["date"])."',null,'".$rdvs["rdvs"][$i]["candidat"]."','".$rdvs["rdvs"][$i]["bureau"]."','".$rdvs["rdvs"][$i]["idrecrutement"]."'";
    fputs($file,$values);
    $r->insert("appointment",$field,$values);
}

$values="'20-09-2015 15:00',null,'CA1'";
fclose($file);
