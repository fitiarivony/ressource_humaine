<?php 
header('Access-Control-Allow-Origin: http://localhost:3000');
include_once './APPLICATION_PHP/baseconf.php';
class Stat{
    public $idrecrutement;
    public $nomposte;
    public $moyenne;
}
$infoRdv=$r->get(new Stat(),"v_stats_appointment","*");
$data=array("moyennes"=>$infoRdv);
echo json_encode($data);


?>