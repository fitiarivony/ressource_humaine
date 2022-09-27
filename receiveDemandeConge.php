<?php 
header('Access-Control-Allow-Origin: http://localhost:3000');

include_once './APPLICATION_PHP/baseconf.php';
$data=$_GET['data'];
$decoded=json_decode($data);
// print_r($decoded);
function createDate($date){
    $JMA=explode("-",$date);
    return mktime(8,0,0,$JMA[1],$JMA[2],$JMA[0]);
}
function dateToMysql($date){
    $daty=date("Y-m-d H:i:s",createDate($date));
    return $daty;
}
echo dateToMysql($decoded->debut);
$r->insert("conge","idemploye,datedebut,datefin,motif","'$decoded->idemploye','$decoded->debut','$decoded->fin','$decoded->motif'");

?>