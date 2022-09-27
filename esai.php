<?php
include_once './APPLICATION_PHP/baseconf.php';
class Appointment {
    public $idappointement;
    public $daty;
    public $noty;
    public $idcandidat;
}
$a=new Appointment();
$liste=$r->get($a,"appointment");
print_r($liste);

$values="'20-09-2015 15:00',null,'CA1'";
$field="daty,noty,idcandidat";
$r->insert("appointment",$field,$values);
