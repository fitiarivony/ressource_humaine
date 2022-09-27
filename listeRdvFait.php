<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
include_once './APPLICATION_PHP/baseconf.php';
class Appointment {
    public $idappointement;
    public $daty;
    public $noty;
    public $idcandidat;
    public $bureau;
    public $idrecrutement;
}
$idr=isset($_GET['id'])?$_GET['id'] :"RE1";
$a=new Appointment();
$liste=$r->get($a,"appointment","*","noty is not null and idrecrutement ='".$idr."'");
function formatDaty($daty){
    $daty1="";
    for ($i=0; $i <strlen($daty)-3 ; $i++) {
        if($daty[$i]==" ")
            $daty1.="T";
        else
            $daty1.=$daty[$i];
    }
    return $daty1;
}
// echo formatDaty($liste[0]->daty);

$alefa=array();
for ($i=0; $i < count($liste); $i++) { 
    $alefa[]=array("candidat"=>$liste[$i]->idcandidat,"date"=>formatDaty($liste[$i]->daty),"bureau"=>$liste[$i]->bureau,"recrutement"=>$liste[$i]->idrecrutement,"noty"=>$liste[$i]->noty);
}
echo json_encode($alefa);
