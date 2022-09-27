<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

include_once './APPLICATION_PHP/baseconf.php';
class Departement{
    public $iddept;
    public $nomdept;
}
$liste=$r->get(new Departement(),"departement");
$data=array("dept"=>$liste);
echo json_encode($data);
?>