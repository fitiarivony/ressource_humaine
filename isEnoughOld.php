<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
$idemploye=isset($_GET['idemploye'])?$_GET['idemploye'] :"EM1";
include_once './APPLICATION_PHP/baseconf.php';
class Employe{
    public $idemploye;
    public $nom;
    public $prenom;
    public $iddept;
    public $dateembauche;
    
}
$test=$r->get(new Employe(),"employe","idEmploye,nom,prenom,iddept,dateembauche","idemploye='$idemploye'");

// echo $test[0]->dateembauche;
$datesep=explode("-",$test[0]->dateembauche);
$dateDeb=mktime(0,0,0,$datesep[1],$datesep[2],$datesep[0]);
$date1An=mktime(0,0,0,$datesep[1],$datesep[2],$datesep[0]+1);
$datetoday=mktime(0,0,0,Date("n"),Date("d"),Date("Y"));

echo json_encode(array("res"=>$datetoday>$date1An));

?>